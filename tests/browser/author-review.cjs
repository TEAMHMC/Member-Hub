// Drives the rendered console through the author and review flow, against a stateful fake of
// the server routes, so the story a presenter tells is the story the screens actually tell.
//
// Run it with:
//   npx vite --port 5321 --strictPort &
//   node tests/browser/author-review.cjs
//
// Not in CI, for the reason given in the other browser checks. The server's own rules, who
// may approve and what a tier can reach, are tested where they are enforced, in the portal.
// This checks the other half, that the screens offer the right things to the right person
// and that a draft only moves the way the server lets it.
const { chromium } = require('playwright');
const BASE = process.env.HUB_BASE || 'http://127.0.0.1:5321';
const OUT = process.env.SHOT_DIR || require('os').tmpdir();
const fail = [];
const expect = (c, l) => { console.log(`${c ? '  ok  ' : '  FAIL'}  ${l}`); if (!c) fail.push(l); };

const COURSE_ID = 'unstoppable-youth';
const COURSE_TITLE = 'Unstoppable Youth';
const OTHER_ID = 'unstoppable-ce';
const OTHER_TITLE = 'Unstoppable: The Power of Healing and Growth';

const AUTHOR = { role: 'Curriculum Author', name: 'Ana Student', email: 'ana@school.edu', isAdmin: false, capabilities: ['author'] };
const REVIEWER = { role: 'Clinical Reviewer', name: 'Dr Reviewer', email: 'reviewer@healthmatters.clinic', isAdmin: false,
  capabilities: ['academy', 'content', 'support', 'curriculum', 'approve'] };
const LEAD = { role: 'Curriculum Lead', name: 'A Lead', email: 'lead@healthmatters.clinic', isAdmin: false,
  capabilities: ['academy', 'content', 'support', 'curriculum'] };
const ADMIN = { role: 'Hub Administrator', name: 'An Admin', email: 'admin@healthmatters.clinic', isAdmin: true,
  capabilities: ['academy', 'content', 'support', 'staffAdmin', 'curriculum', 'approve'] };

// The server's state, kept here so the fake behaves like the real thing across a session.
const db = { draft: null, released: null, calls: [] };

const LIVE = () => ({ content: '', sections: [], page: null, version: db.released ? db.released.version : 0, hasCorrection: Boolean(db.released) });

const TIERS = [
  { id: 'admin', label: 'Hub Administrator', describes: 'Everything: courses, curriculum, announcements, member support, and who else has access.' },
  { id: 'curriculum', label: 'Curriculum Lead', describes: 'Reviews, corrects and releases course content, and runs announcements and member support. Cannot change who has access.' },
  { id: 'clinical', label: 'Clinical Reviewer', describes: 'Says whether course content is clinically correct and releases it. Cannot change who has access.' },
  { id: 'author', label: 'Curriculum Author', describes: 'Writes and edits course drafts and submits them for clinical review. Cannot release anything and sees nothing else.' },
  { id: 'support', label: 'Member Support', describes: 'Helps a member who cannot sign in. Sees nothing else.' },
];

// What the server's buildCoursePage does to the form: paragraphs and lines become arrays. The
// screens read the stored shape, so a fake that stored the raw strings would test a server
// that does not exist.
const normalizePage = (p) => ({
  promise: String(p.promise || '').trim(),
  about: String(p.about || '').split(/\n\s*\n+/).map((x) => x.trim()).filter(Boolean),
  objectives: String(p.objectives || '').split(/\n+/).map((x) => x.replace(/^[-*]\s*/, '').trim()).filter(Boolean),
  prerequisites: String(p.prerequisites || '').trim(),
  whoFor: String(p.whoFor || '').trim(),
  requirements: Array.isArray(p.requirements) ? p.requirements : [],
});

const draftView = () => db.draft && ({
  id: 'draft-1', moduleId: COURSE_ID, moduleTitle: COURSE_TITLE, authorName: AUTHOR.name, authorEmail: AUTHOR.email,
  status: db.draft.status, content: db.draft.content || '', sections: db.draft.sections || [], page: db.draft.page || null,
  authorNote: db.draft.authorNote || '', decisionNote: db.draft.decisionNote || '', baseVersion: 0,
  updatedAt: '2026-11-11T20:00:00Z', submittedAt: db.draft.submittedAt || null, decidedAt: null, decidedBy: null, publishedAsVersion: null,
});

const handle = (staff, method, path, body) => {
  const isAuthor = staff.capabilities.includes('author');
  const canApprove = staff.capabilities.includes('approve');
  const canCurriculum = staff.capabilities.includes('curriculum');
  if (path === '/api/client/me') return { identified: true, email: staff.email, profile: { firstName: staff.name.split(' ')[0] },
    staff, credits: { balance: 0, lifetimeEarned: 0, lifetimeSpent: 0 }, referrals: [], nextActions: [] };
  if (path === '/api/hub/staff/overview') return { staff, academy: { configured: 0, hidden: 0, overrides: {} }, announcements: [] };
  if (path === '/api/hub/staff/people') return { tiers: TIERS, people: [] };
  if (path === '/api/hub/staff/roster') return { staff: [], note: '' };
  if (path === '/api/context/hello') return { visitorId: 'vid_check' };

  if (path === '/api/hub/staff/author/courses') {
    if (!isAuthor) return { __status: 403, error: 'staff_access_required' };
    return { courses: [
      { id: OTHER_ID, title: OTHER_TITLE, status: null, updatedAt: null },
      { id: COURSE_ID, title: COURSE_TITLE, status: db.draft ? db.draft.status : null, updatedAt: db.draft ? '2026-11-11T20:00:00Z' : null },
    ] };
  }
  let m = path.match(/^\/api\/hub\/staff\/author\/drafts\/([^/]+)(\/submit|\/withdraw)?$/);
  if (m) {
    if (!isAuthor) return { __status: 403, error: 'staff_access_required' };
    db.calls.push(`${method} ${path}`);
    if (method === 'GET') return { moduleId: COURSE_ID, title: COURSE_TITLE, draft: draftView(), live: LIVE() };
    if (method === 'PUT') {
      if (db.draft && db.draft.status === 'submitted') return { __status: 409, error: 'draft_locked', status: 'submitted' };
      db.draft = { ...(db.draft || {}), ...body, page: body.page ? normalizePage(body.page) : null, status: 'draft' };
      return { success: true, status: 'draft', updatedAt: '2026-11-11T20:00:00Z' };
    }
    if (m[2] === '/submit') {
      if (!db.draft) return { __status: 404, error: 'no_draft' };
      db.draft.status = 'submitted'; db.draft.submittedAt = '2026-11-11T20:05:00Z'; db.draft.decisionNote = '';
      return { success: true, status: 'submitted' };
    }
    if (m[2] === '/withdraw') { db.draft.status = 'draft'; return { success: true, status: 'draft' }; }
  }

  if (path === '/api/hub/staff/drafts') {
    if (!canCurriculum) return { __status: 403, error: 'staff_access_required' };
    const list = db.draft && db.draft.status === 'submitted' ? [{ ...draftView(), content: undefined, sections: undefined, sectionCount: (db.draft.sections || []).length }] : [];
    return { drafts: list, canDecide: canApprove };
  }
  m = path.match(/^\/api\/hub\/staff\/drafts\/([^/]+)(\/approve|\/return)?$/);
  if (m) {
    if (!canCurriculum) return { __status: 403, error: 'staff_access_required' };
    db.calls.push(`${method} ${path}`);
    if (method === 'GET') return { draft: draftView(), live: LIVE(), liveChangedSinceDraft: false, canDecide: canApprove };
    if (!canApprove) return { __status: 403, error: 'not_a_reviewer' };
    if (m[2] === '/approve') {
      db.released = { version: 1, sections: body.sections || db.draft.sections };
      db.draft.status = 'approved';
      return { success: true, status: 'approved', moduleId: COURSE_ID, version: 1 };
    }
    if (m[2] === '/return') {
      if (!body.note) return { __status: 400, error: 'note_required' };
      db.draft.status = 'returned'; db.draft.decisionNote = body.note;
      return { success: true, status: 'returned' };
    }
  }
  return {};
};

const install = async (page, staff) => {
  await page.unroute('**/api/**').catch(() => {});
  await page.route('**/api/**', (r) => {
    const req = r.request();
    const url = new URL(req.url());
    const cors = { 'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true',
      'access-control-allow-headers': '*', 'access-control-allow-methods': '*' };
    if (req.method() === 'OPTIONS') return r.fulfill({ status: 204, headers: cors });
    let body = {};
    try { body = req.postData() ? JSON.parse(req.postData()) : {}; } catch { /* none */ }
    const out = handle(staff, req.method(), url.pathname, body);
    const status = out && out.__status ? out.__status : 200;
    if (out && out.__status) delete out.__status;
    return r.fulfill({ status, contentType: 'application/json', headers: cors, body: JSON.stringify(out) });
  });
};

const text = (page) => page.evaluate(() => document.body.innerText);
const click = (page, re) => page.evaluate((src) => {
  const rx = new RegExp(src, 'i');
  const hit = Array.from(document.querySelectorAll('button, a, [role="button"]'))
    .find((e) => rx.test((e.textContent || '').trim()) && e.offsetParent !== null);
  if (hit) { hit.click(); return true; }
  return false;
}, re.source);

const openQueue = async (page) => {
  await click(page, /^Curriculum$/);
  await page.waitForTimeout(500);
  await click(page, /^Drafts to review/);
  await page.waitForTimeout(700);
};

const enterConsole = async (page, staff) => {
  await install(page, staff);
  await page.goto(BASE);
  await page.waitForTimeout(1800);
  await click(page, /^Manage hub$/);
  await page.waitForTimeout(900);
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1340, height: 1000 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));

  console.log('\nAn author, a student writing a course\n');
  await enterConsole(page, AUTHOR);
  let body = await text(page);
  expect(/My drafts/i.test(body), 'the author is offered My drafts');
  for (const gone of ['Courses', 'Curriculum', 'Announcements', 'Member support', 'Hub access']) {
    expect(!new RegExp(`(^|\\n)\\s*${gone}\\s*(\\n|$)`, 'i').test(body.replace(/Your drafts/g, '')), `the author is not offered ${gone}`);
  }
  expect(/Nothing reaches members until a Clinical Reviewer releases it/i.test(body), 'the page says plainly that nothing reaches members');
  expect(new RegExp(COURSE_TITLE).test(body), 'the new course is in the list');
  await page.screenshot({ path: `${OUT}/author-1-list.png` });

  await click(page, new RegExp(`^${COURSE_TITLE}`));
  await page.waitForTimeout(900);
  body = await text(page);
  expect(/Your draft, not submitted/i.test(body), 'a course with no draft opens as a draft of their own');
  const headings = await page.evaluate(() => Array.from(document.querySelectorAll('input')).map((i) => i.value).join(' | '));
  expect(/Orientation and opening case/i.test(headings) && /Reflection and key takeaways/i.test(headings), 'the skeleton lessons from the catalogue are there to fill in');
  expect(/Save draft/i.test(body) && /Submit for review/i.test(body), 'the author can save and submit');
  expect(!/Release to members/i.test(body), 'there is no release button');
  await page.screenshot({ path: `${OUT}/author-2-editor.png`, fullPage: true });

  // Submitting with nothing written is refused before it reaches a reviewer.
  await click(page, /^Submit for review$/);
  await page.waitForTimeout(500);
  body = await text(page);
  expect(/Nothing has changed yet/i.test(body), 'submitting an untouched skeleton is refused');

  // Write something and save.
  await page.fill('#curr-promise', 'Learn what helps young people feel steady and supported.');
  await page.locator('textarea[placeholder="What this module teaches."]').nth(1)
    .fill('Healing is not a straight line. This lesson looks at what steadiness feels like and where it comes from.');
  await page.fill('#curr-note', 'Wrote the promise and lesson one. Sources still to add.');
  await click(page, /^Save draft$/);
  await page.waitForTimeout(700);
  body = await text(page);
  expect(/Draft saved\. Nothing has reached members/i.test(body), 'saving says it saved and that nothing reached members');
  expect(db.draft && db.draft.status === 'draft', 'the server holds a draft, not a release');
  expect(db.draft && db.draft.sections.some((s) => /steadiness/.test(s.body)), 'what was written is what was stored');
  expect(db.released === null, 'nothing has been released');

  await click(page, /^Submit for review$/);
  await page.waitForTimeout(700);
  body = await text(page);
  expect(/Submitted\. A reviewer reads it/i.test(body), 'submitting says a reviewer will read it');
  expect(/With a reviewer/i.test(body), 'the page shows the draft is with a reviewer');
  const locked = await page.evaluate(() => {
    const t = document.querySelector('#curr-promise');
    return t ? t.matches(':disabled') : null;
  });
  expect(locked === true, 'the draft is read-only while a reviewer holds it');
  expect(await page.evaluate(() => Array.from(document.querySelectorAll('button')).some((b) => /Withdraw from review/i.test(b.textContent || ''))), 'the author can withdraw it');
  expect(db.released === null, 'still nothing released');
  await page.screenshot({ path: `${OUT}/author-3-submitted.png`, fullPage: true });

  console.log('\nA Curriculum Lead, who can read the queue but not decide\n');
  await enterConsole(page, LEAD);
  await openQueue(page);
  body = await text(page);
  expect(/Drafts to review \(1\)/i.test(body), 'the queue shows one draft waiting, on the button');
  await click(page, new RegExp(COURSE_TITLE));
  await page.waitForTimeout(900);
  body = await text(page);
  expect(/Ana Student/.test(body) && /Wrote the promise and lesson one/.test(body), 'the reviewer sees who wrote it and the author\'s note');
  expect(/Only a Clinical Reviewer or a Hub Administrator can release/i.test(body), 'a lead is told they can read it but not decide');
  expect(!(await page.evaluate(() => Array.from(document.querySelectorAll('button')).some((b) => /Release to members/i.test(b.textContent || '')))),
    'a lead is not offered the release button');
  await page.screenshot({ path: `${OUT}/review-1-lead-readonly.png`, fullPage: true });

  console.log('\nA Clinical Reviewer, who decides\n');
  await enterConsole(page, REVIEWER);
  await openQueue(page);
  await page.screenshot({ path: `${OUT}/review-2-queue.png` });
  await click(page, new RegExp(COURSE_TITLE));
  await page.waitForTimeout(900);
  body = await text(page);
  expect(/Release to members/i.test(body) && /Send back to the author/i.test(body), 'a reviewer can release or send back');
  const lessonText = await page.evaluate(() => Array.from(document.querySelectorAll('textarea')).map((t) => t.value).join(' | '));
  expect(/steadiness/.test(lessonText), 'the reviewer reads the author\'s lesson text');
  expect(await page.evaluate(() => Array.from(document.querySelectorAll('textarea')).some((t) => t.id !== 'rev-note' && !t.readOnly)),
    'a reviewer can correct the lesson text before releasing it');
  await page.screenshot({ path: `${OUT}/review-3-reviewer.png`, fullPage: true });

  // Sending back needs a note.
  await click(page, /^Send back to the author$/);
  await page.waitForTimeout(400);
  body = await text(page);
  expect(/Say what needs to change/i.test(body), 'sending back with no note is refused');
  await page.fill('#rev-note', 'Add a source for the second sentence, then send it again.');
  await click(page, /^Send back to the author$/);
  await page.waitForTimeout(700);
  expect(db.draft.status === 'returned' && /Add a source/.test(db.draft.decisionNote), 'the draft goes back with the note');

  // The author sees the note and can fix and resubmit.
  await enterConsole(page, AUTHOR);
  await click(page, new RegExp(`^${COURSE_TITLE}`));
  await page.waitForTimeout(900);
  body = await text(page);
  expect(/sent this back with a note/i.test(body) && /Add a source for the second sentence/.test(body), 'the author sees what the reviewer asked for');
  await click(page, /^Submit for review$/);
  await page.waitForTimeout(700);
  expect(db.draft.status === 'submitted', 'a returned draft can be submitted again');

  // And the reviewer releases.
  await enterConsole(page, REVIEWER);
  await openQueue(page);
  await click(page, new RegExp(COURSE_TITLE));
  await page.waitForTimeout(800);
  await page.fill('#rev-note', 'Checked against the sources and corrected one sentence.');
  await click(page, /^Release to members$/);
  await page.waitForTimeout(800);
  body = await text(page);
  expect(db.released && db.released.version === 1, 'releasing puts the course live as version 1');
  expect(/Released as version 1/i.test(body), 'the screen says it was released');
  await page.screenshot({ path: `${OUT}/review-4-released.png` });

  console.log('\nThe Hub access screen, where an administrator adds students\n');
  await enterConsole(page, ADMIN);
  await click(page, /^Hub access$/);
  await page.waitForTimeout(900);
  body = await text(page);
  expect(/Curriculum Author/.test(body), 'Curriculum Author is a card on the add screen');
  expect(/Cannot release anything and sees nothing else/.test(body), 'the card says what an author cannot do');
  await page.screenshot({ path: `${OUT}/access-1-tiers.png`, fullPage: true });

  console.log('\nOn a phone\n');
  const phone = await browser.newPage({ viewport: { width: 390, height: 844 } });
  db.draft = null; db.released = null;
  await enterConsole(phone, AUTHOR);
  await click(phone, new RegExp(`^${COURSE_TITLE}`));
  await phone.waitForTimeout(900);
  const overflow = await phone.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  expect(!overflow, 'the author editor does not scroll sideways on a phone');
  await phone.screenshot({ path: `${OUT}/author-4-phone.png` });

  expect(errors.length === 0, `no page errors${errors.length ? ': ' + errors.join(' | ') : ''}`);
  await browser.close();
  console.log(fail.length ? `\n${fail.length} FAILED` : '\nAll checks passed');
  process.exit(fail.length ? 1 : 0);
})();
