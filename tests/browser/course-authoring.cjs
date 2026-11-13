// Drives the real console and Academy through authoring a course's actual content: lessons and
// blocks, a question with an answer key, and a pathway's baseline and post-test. Then a reviewer
// reads it with the portal's rule findings and releases it, and a learner sees the result.
//
//   npx vite --port 5321 --strictPort &
//   node tests/browser/course-authoring.cjs
//
// Against a stateful fake of the server's routes, so it checks what a person sees and does. The
// server's own rules, who may release and what a structure may contain, are tested where they
// are enforced, in the portal.
const { chromium } = require('playwright');
const BASE = process.env.HUB_BASE || 'http://127.0.0.1:5321';
const OUT = process.env.SHOT_DIR || require('os').tmpdir();
const fail = [];
let current = null;
const expect = async (c, l, detail = '') => {
  console.log(`${c ? '  ok  ' : '  FAIL'}  ${l}`);
  if (!c) {
    fail.push(l);
    if (detail) console.log('          detail: ' + String(detail).slice(0, 300));
    if (current) {
      const where = await current.evaluate(() => {
        const h = Array.from(document.querySelectorAll('h1, h2')).map((e) => (e.textContent || '').trim()).filter(Boolean).slice(0, 3).join(' / ');
        const t = (document.querySelector('main') || document.body).innerText.replace(/\s+/g, ' ').slice(0, 500);
        return `url=${location.pathname} headings=[${h}]\n          text: ${t}`;
      }).catch(() => 'page unavailable');
      console.log('          ' + where);
    }
  }
};

const COURSE = 'unstoppable-youth';
const TESTS = 'tests:unstoppable-youth';

const AUTHOR = { role: 'Curriculum Author', name: 'Ana Student', email: 'ana@school.edu', isAdmin: false, capabilities: ['author'] };
const REVIEWER = { role: 'Clinical Reviewer', name: 'Dr Reviewer', email: 'reviewer@healthmatters.clinic', isAdmin: false, capabilities: ['academy', 'content', 'support', 'curriculum', 'approve'] };
const LEAD = { role: 'Curriculum Lead', name: 'A Lead', email: 'lead@healthmatters.clinic', isAdmin: false, capabilities: ['academy', 'content', 'support', 'curriculum', 'author'] };

// The server, kept here so each browser talks to the same one.
const db = { drafts: {}, released: {}, version: 0, approveBodies: [], saveBodies: [] };
const titles = { [COURSE]: 'Unstoppable Youth', [TESTS]: 'Baseline and post-test: Unstoppable Youth' };
const kindOf = (id) => (id.startsWith('tests:') ? 'tests' : 'course');

// What the fake server's strict rules say at submission, standing in for the portal's.
const strictProblem = (d) => {
  const qs = [];
  for (const l of (d.structure && d.structure.lessons) || []) for (const b of l.blocks) if (b.kind === 'check') qs.push(['lesson check', b.check, 'rationale']);
  for (const q of (d.pathwayTests && [...d.pathwayTests.preTest, ...d.pathwayTests.postTest]) || []) qs.push(['test question', q, 'why']);
  for (const [name, q, why] of qs) {
    if (!q.q.trim()) return `a ${name} has no question`;
    if (q.options.filter((o) => o.trim()).length < 2 || q.options.some((o) => !o.trim())) return `a ${name} needs at least two filled in options`;
    if (!String(q[why] || '').trim()) return `a ${name} needs an explanation of the right answer`;
  }
  return null;
};

// What the fake says the portal's curriculum rules find.
const validationFor = (d) => {
  const failures = [];
  const lessons = (d.structure && d.structure.lessons) || [];
  const mins = lessons.reduce((n, l) => n + l.minutes, 0);
  if (lessons.length && mins >= 20) failures.push({ label: 'Unstoppable Youth: lesson pace must be defensible', detail: `120 words over ${mins} min = 6 wpm (want 40-130)` });
  if (lessons.length) failures.push({ label: 'Unstoppable Youth: v2 course cites its sources', detail: '' });
  return failures.length ? { ok: false, failures, debt: [] } : { ok: true, failures: [], debt: [] };
};

const draftView = (id, d) => d && ({
  id: `draft-${id}`, kind: kindOf(id), moduleId: id, moduleTitle: titles[id], authorName: AUTHOR.name, authorEmail: AUTHOR.email,
  status: d.status, content: '', sections: [], page: null, structure: d.structure || null, pathwayTests: d.pathwayTests || null,
  authorNote: d.authorNote || '', decisionNote: d.decisionNote || '', baseVersion: 0, updatedAt: '2026-11-12T20:00:00Z',
  submittedAt: d.submittedAt || null, decidedAt: null, decidedBy: null, publishedAsVersion: null,
});
const live = (id) => {
  const r = db.released[id];
  return { content: '', sections: [], page: null, structure: r ? r.structure || null : null, pathwayTests: r ? r.pathwayTests || null : null, version: r ? r.version : 0, hasCorrection: Boolean(r) };
};

const handle = (staff, method, path, body, query) => {
  const caps = staff.capabilities;
  const isAuthor = caps.includes('author'); const canApprove = caps.includes('approve'); const canCur = caps.includes('curriculum');
  if (path === '/api/client/me') return { identified: true, email: staff.email, profile: { firstName: staff.name.split(' ')[0] }, staff: staff.role ? staff : null, credits: { balance: 0, lifetimeEarned: 0, lifetimeSpent: 0 }, referrals: [], nextActions: [] };
  if (path === '/api/hub/staff/overview') return { staff, academy: { configured: 0, hidden: 0, overrides: {} }, announcements: [] };
  if (path === '/api/context/hello') return { visitorId: 'vid_x' };
  if (path === '/api/client/academy/record') return { record: { enrolled: [], preTest: {}, postTest: {}, postAttempts: {}, courseExam: {} } };
  if (path === '/api/public/academy-visibility') return { overrides: { [COURSE]: { state: 'open' } } };
  if (path === '/api/curriculum/hub-content') {
    const content = {};
    for (const [id, r] of Object.entries(db.released)) content[id] = { content: '', sections: [], ...(r.structure ? { structure: r.structure } : {}), ...(r.pathwayTests ? { pathwayTests: r.pathwayTests } : {}), version: r.version };
    return { content };
  }

  if (path === '/api/hub/staff/curriculum' && method === 'GET') {
    if (!canCur) return { __status: 403, error: 'staff_access_required' };
    return { courses: Object.keys(titles).map((id) => ({ id, kind: kindOf(id), title: titles[id], corrected: Boolean(db.released[id]), version: db.released[id] ? db.released[id].version : 0, updatedAt: null, updatedByName: null, note: null })) };
  }
  let m = path.match(/^\/api\/hub\/staff\/curriculum\/(.+)$/);
  if (m && method === 'GET') {
    const id = decodeURIComponent(m[1]);
    return { id, kind: kindOf(id), title: titles[id], content: '', sections: [], page: null, ...live(id), history: [] };
  }
  if (path === '/api/hub/staff/author/courses') {
    if (!isAuthor) return { __status: 403, error: 'staff_access_required' };
    return { courses: Object.keys(titles).map((id) => ({ id, kind: kindOf(id), title: titles[id], status: db.drafts[id] ? db.drafts[id].status : null, updatedAt: null })) };
  }
  m = path.match(/^\/api\/hub\/staff\/author\/drafts\/([^/]+)(\/submit|\/withdraw)?$/);
  if (m) {
    if (!isAuthor) return { __status: 403, error: 'staff_access_required' };
    const id = decodeURIComponent(m[1]);
    if (method === 'GET') return { moduleId: id, kind: kindOf(id), title: titles[id], draft: draftView(id, db.drafts[id]), live: live(id) };
    if (method === 'PUT') {
      if (db.drafts[id] && db.drafts[id].status === 'submitted') return { __status: 409, error: 'draft_locked' };
      db.saveBodies.push({ id, body });
      db.drafts[id] = { ...(db.drafts[id] || {}), status: 'draft', authorNote: body.authorNote || '', ...(body.structure !== undefined ? { structure: body.structure } : {}), ...(body.pathwayTests !== undefined ? { pathwayTests: body.pathwayTests } : {}) };
      return { success: true, status: 'draft', updatedAt: 'x' };
    }
    if (m[2] === '/submit') {
      const d = db.drafts[id]; if (!d) return { __status: 404, error: 'no_draft' };
      const p = strictProblem(d);
      if (p) return { __status: 400, error: 'invalid_structure', detail: p };
      d.status = 'submitted'; d.submittedAt = '2026-11-12T20:05:00Z';
      return { success: true, status: 'submitted' };
    }
    if (m[2] === '/withdraw') { db.drafts[id].status = 'draft'; return { success: true, status: 'draft' }; }
  }
  if (path === '/api/hub/staff/drafts' && method === 'GET') {
    if (!canCur) return { __status: 403, error: 'staff_access_required' };
    const list = Object.entries(db.drafts).filter(([, d]) => d.status === 'submitted').map(([id, d]) => {
      const v = draftView(id, d);
      const lessonCount = v.structure && v.structure.lessons ? v.structure.lessons.length : 0;
      let q = 0;
      for (const l of (v.structure && v.structure.lessons) || []) for (const b of l.blocks) if (b.kind === 'check') q++;
      if (v.pathwayTests) q += v.pathwayTests.preTest.length + v.pathwayTests.postTest.length;
      return { ...v, content: undefined, sections: undefined, structure: undefined, pathwayTests: undefined, sectionCount: 0, lessonCount, questionCount: q };
    });
    return { drafts: list, canDecide: canApprove };
  }
  m = path.match(/^\/api\/hub\/staff\/drafts\/draft-([^/]+)(\/approve|\/return)?$/);
  if (m) {
    const id = decodeURIComponent(m[1]);
    const d = db.drafts[id];
    if (!canCur) return { __status: 403, error: 'staff_access_required' };
    if (method === 'GET') return { draft: draftView(id, d), live: live(id), liveChangedSinceDraft: false, canDecide: canApprove, validation: validationFor(d) };
    if (!canApprove) return { __status: 403, error: 'not_a_reviewer' };
    if (m[2] === '/approve') {
      db.approveBodies.push(body);
      const v = validationFor({ structure: body.structure !== undefined ? body.structure : d.structure, pathwayTests: d.pathwayTests });
      if (!v.ok && body.acknowledgeFailures !== true) return { __status: 409, error: 'validation_failures', failures: v.failures, debt: [] };
      db.version += 1;
      db.released[id] = { version: db.version, structure: body.structure !== undefined ? body.structure : d.structure, pathwayTests: body.pathwayTests !== undefined ? body.pathwayTests : d.pathwayTests };
      d.status = 'approved';
      return { success: true, status: 'approved', moduleId: id, version: db.version };
    }
  }
  return {};
};

const wire = async (ctx, who) => {
  await ctx.route('**/api/**', (r) => {
    const req = r.request(); const u = new URL(req.url());
    const cors = { 'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' };
    if (req.method() === 'OPTIONS') return r.fulfill({ status: 204, headers: cors });
    let body = {}; try { body = req.postData() ? JSON.parse(req.postData()) : {}; } catch { /* none */ }
    const out = handle(who, req.method(), u.pathname, body);
    const status = out && out.__status ? out.__status : 200;
    if (out && out.__status) delete out.__status;
    return r.fulfill({ status, contentType: 'application/json', headers: cors, body: JSON.stringify(out) });
  });
};

const text = (p) => p.evaluate(() => document.body.innerText);
const click = (p, re) => p.evaluate((src) => { const rx = new RegExp(src, 'i'); const h = Array.from(document.querySelectorAll('button, a')).find((e) => rx.test((e.textContent || '').trim()) && e.offsetParent !== null); if (h) { h.click(); return true; } return false; }, re.source);
const enterConsole = async (page, who) => { await wire(page.context(), who); await page.goto(BASE); await page.waitForTimeout(1800); await click(page, /^Manage hub$/); await page.waitForTimeout(900); };

(async () => {
  const browser = await chromium.launch();
  const errors = [];
  const mk = async (who, w = 1340) => {
    const ctx = await browser.newContext({ viewport: { width: w, height: 1000 } });
    await wire(ctx, who);
    const p = await ctx.newPage();
    p.on('pageerror', (e) => errors.push(String(e)));
    return p;
  };

  console.log('\nAn author builds a course\n');
  const a = await mk(AUTHOR); current = a;
  await a.goto(BASE); await a.waitForTimeout(1800); await click(a, /^Manage hub$/); await a.waitForTimeout(900);
  let body = await text(a);
  await expect(/Baseline and post-test: Unstoppable Youth/.test(body), 'the pathway baseline and post-test is listed beside the courses');
  await click(a, /^Unstoppable Youth/); await a.waitForTimeout(1200);
  body = await text(a);
  await expect(/the course content/i.test(body) && /6 lessons/i.test(body), 'the course opens on its real structure, six lessons');
  await expect(/Orientation and opening case/.test(body) && /Reflection and key takeaways/.test(body), 'each compiled lesson is there to edit');
  await expect(/questions at the end of the course/i.test(body) && /hands-on activity/i.test(body) && /sources and further reading/i.test(body) && /its own exam/i.test(body), 'questions, activity, sources and exam can all be authored');
  await a.screenshot({ path: `${OUT}/authoring-1-lessons.png`, fullPage: true });

  // Open the first lesson and edit it.
  await a.locator('button[aria-expanded]', { hasText: /Lesson 1/ }).first().click(); await a.waitForTimeout(400);
  await a.getByLabel('Lesson title').first().fill('What steadiness feels like');
  await a.getByLabel('Minutes', { exact: true }).first().fill('12');
  await a.locator('textarea[id$="-text"]').first().fill('Steadiness is a feeling of being able to cope.\n\nIt comes from people and routines.');
  body = await text(a);
  await expect(/12 min/.test(body) && /What steadiness feels like/.test(body), 'the lesson header follows what was typed');

  // Add a knowledge check block, with an answer key.
  await a.locator('select[id$="-kind"]').first().selectOption('check');
  await a.getByRole('button', { name: /Add a block/ }).first().click(); await a.waitForTimeout(300);
  await a.locator('textarea[id$="-q"]').last().fill('Which of these helps a young person feel steady?');
  await a.locator('input[aria-label="Option 1"]').last().fill('A trusted adult');
  await a.locator('input[aria-label="Option 2"]').last().fill('Skipping meals');
  await a.locator('input[aria-label="Option 2 is the correct answer"]').last().check();
  body = await text(a);
  await expect(/correct/i.test(body), 'the chosen answer is marked correct on screen');
  await a.screenshot({ path: `${OUT}/authoring-2-answer-key.png`, fullPage: true });

  // Submitting with no explanation is refused, and says which question.
  await a.getByRole('button', { name: /^Save draft$/ }).click(); await a.waitForTimeout(500);
  await a.getByRole('button', { name: /^Submit for review$/ }).click(); await a.waitForTimeout(700);
  body = await text(a);
  await expect(/cannot be submitted yet/i.test(body) && /explanation of the right answer/i.test(body), 'submitting a question with no explanation is refused with the reason');

  await a.locator('textarea[id$="-why"]').last().fill('A trusted adult is a protective factor, which the source describes.');
  // A new lesson.
  await a.getByRole('button', { name: /Add a lesson/ }).click(); await a.waitForTimeout(300);
  await a.getByLabel('Lesson title').last().fill('Where help comes from');
  await a.getByLabel('Minutes', { exact: true }).last().fill('8');
  await a.locator('select[id$="-kind"]').last().selectOption('prose');
  await a.getByRole('button', { name: /Add a block/ }).last().click(); await a.waitForTimeout(300);
  await a.locator('textarea[id$="-text"]').last().fill('Help can come from family, school, and community.');
  await a.getByRole('button', { name: /^Save draft$/ }).click(); await a.waitForTimeout(700);
  body = await text(a);
  await expect(/Draft saved\. Nothing has reached members/.test(body), 'a draft with a new lesson and a question saves');
  const saved = db.saveBodies[db.saveBodies.length - 1].body;
  await expect(saved.structure && Object.keys(saved.structure).join() === 'lessons', 'only the lessons are stored, because nothing else was changed from the compiled course', JSON.stringify(Object.keys(saved.structure || {})));
  const lessons = saved.structure.lessons;
  await expect(lessons.length === 7 && lessons[lessons.length - 1].title === 'Where help comes from', 'the new lesson is stored, seven in all');
  const check = lessons[0].blocks.find((b) => b.kind === 'check');
  await expect(check && check.check.answer === 1 && check.check.options[1] === 'Skipping meals', 'the answer key is stored as chosen', JSON.stringify(lessons.map((x) => [x.id, x.title, x.blocks.map((b) => b.kind)])) + ' ' + JSON.stringify(check));
  await expect(lessons[0].id === 'uy-1' && lessons[1].id === 'uy-2', 'the original lessons keep their ids, so recorded progress still points at them');
  await a.getByRole('button', { name: /^Submit for review$/ }).click(); await a.waitForTimeout(700);
  body = await text(a);
  await expect(/Submitted\. A reviewer reads it/.test(body), 'the finished draft is submitted');

  console.log('\nThe same author writes the baseline and post-test\n');
  await a.goto(BASE); await a.waitForTimeout(1500); await click(a, /^Manage hub$/); await a.waitForTimeout(700);
  await click(a, /^Baseline and post-test: Unstoppable Youth/); await a.waitForTimeout(1000);
  body = await text(a);
  await expect(/baseline questions \(0\)/i.test(body) && /post-test questions \(0\)/i.test(body), 'a pathway with no tests opens on two empty lists');
  const addQ = async (nth, q, o1, o2, why) => {
    await a.getByRole('button', { name: /Add a question/ }).nth(nth).click(); await a.waitForTimeout(250);
    await a.locator('textarea[id$="-q"]').last().fill(q);
    await a.locator('input[aria-label="Option 1"]').last().fill(o1);
    await a.locator('input[aria-label="Option 2"]').last().fill(o2);
    await a.locator('textarea[id$="-why"]').last().fill(why);
  };
  await addQ(0, 'Before the course, what is steadiness?', 'Feeling able to cope', 'Never feeling worried', 'It is about coping, not the absence of worry.');
  await addQ(1, 'After the course, what is steadiness?', 'Never feeling worried', 'Feeling able to cope', 'It is about coping, not the absence of worry.');
  await addQ(1, 'Where can help come from?', 'Only family', 'Family, school, and community', 'Help comes from several places.');
  body = await text(a);
  await expect(/The baseline has 1 questions and the post-test has 2/.test(body), 'the editor warns that the two forms are different lengths');
  await a.screenshot({ path: `${OUT}/authoring-3-tests.png`, fullPage: true });
  await a.getByRole('button', { name: /^Save draft$/ }).click(); await a.waitForTimeout(600);
  await a.getByRole('button', { name: /^Submit for review$/ }).click(); await a.waitForTimeout(700);
  body = await text(a);
  await expect(/Submitted/.test(body), 'the tests are submitted too');
  await expect(db.drafts[TESTS] && db.drafts[TESTS].pathwayTests.preTest.length === 1 && db.drafts[TESTS].pathwayTests.postTest.length === 2, 'the baseline and post-test are stored as written');

  console.log('\nA Curriculum Lead can draft but not release questions\n');
  const l = await mk(LEAD); current = l;
  await l.goto(BASE); await l.waitForTimeout(1500); await click(l, /^Manage hub$/); await l.waitForTimeout(700);
  await click(l, /^Curriculum$/); await l.waitForTimeout(500); await click(l, /^All courses$/); await l.waitForTimeout(700);
  await click(l, /^Baseline and post-test: Unstoppable Youth/); await l.waitForTimeout(900);
  body = await text(l);
  await expect(/Only a Clinical Reviewer or a Hub Administrator can release a baseline or post-test/.test(body), 'a lead is told they cannot release tests');
  await expect(!(await l.evaluate(() => Array.from(document.querySelectorAll('button')).some((b) => /Release to members/i.test(b.textContent || '')))), 'and is not offered the release button');
  await expect(await l.evaluate(() => { const b = Array.from(document.querySelectorAll('button')).find((x) => /Add a question/i.test(x.textContent || '')); return Boolean(b) && b.matches(':disabled'); }), 'the editor is there but read only to them');

  console.log('\nA reviewer reads it with the rule findings and releases it\n');
  const r = await mk(REVIEWER); current = r;
  await r.goto(BASE); await r.waitForTimeout(1500); await click(r, /^Manage hub$/); await r.waitForTimeout(700);
  await click(r, /^Curriculum$/); await r.waitForTimeout(500); await click(r, /^Drafts to review/); await r.waitForTimeout(800);
  body = await text(r);
  await expect(/7 lessons/.test(body) && /1 question/.test(body), 'the queue says how much is in each draft');
  await click(r, /^Unstoppable Youth/); await r.waitForTimeout(1200);
  body = await text(r);
  await expect(/The portal's curriculum rules/i.test(body) && /not met/.test(body), 'the reviewer sees what the portal\'s curriculum rules found');
  await r.getByRole('button', { name: /Expand all lessons/ }).click(); await r.waitForTimeout(400);
  await expect(/Which of these helps a young person feel steady/.test(await r.evaluate(() => Array.from(document.querySelectorAll('textarea')).map((t) => t.value).join(' '))), 'the reviewer reads the question');
  await expect(await r.evaluate(() => { const radios = Array.from(document.querySelectorAll('input[type=radio]')); return radios.some((x) => x.checked && /Option 2/.test(x.getAttribute('aria-label') || '')); }), 'and the answer key as the author set it');
  await r.screenshot({ path: `${OUT}/authoring-4-review.png`, fullPage: true });

  await r.getByRole('button', { name: /^Release to members$/ }).click(); await r.waitForTimeout(800);
  body = await text(r);
  await expect(/stopped this release/.test(body), 'releasing with rule failures open is stopped');
  await expect(Object.keys(db.released).length === 0, 'and nothing was released');
  await r.getByLabel(/I have read these and want to release anyway/).check();
  await r.getByRole('button', { name: /^Release to members$/ }).click(); await r.waitForTimeout(900);
  await expect(db.released[COURSE] && db.released[COURSE].structure && db.released[COURSE].structure.lessons.length === 7, 'with the acknowledgement it is released', JSON.stringify(Object.keys(db.released)));
  await expect(db.approveBodies[db.approveBodies.length - 1].acknowledgeFailures === true, 'and the acknowledgement is sent, so it can be recorded');
  await expect(db.approveBodies[db.approveBodies.length - 1].structure === undefined, 'an untouched draft is released as written, with no copy of it sent back');

  // And the tests.
  await click(r, /^Drafts to review/); await r.waitForTimeout(800);
  await click(r, /^Baseline and post-test/); await r.waitForTimeout(1000);
  body = await text(r);
  await expect(/baseline questions \(1\)/i.test(body) && /post-test questions \(2\)/i.test(body), 'the reviewer sees both forms');
  await r.getByRole('button', { name: /^Release to members$/ }).click(); await r.waitForTimeout(900);
  await expect(db.released[TESTS] && db.released[TESTS].pathwayTests.postTest.length === 2, 'the baseline and post-test are released');

  console.log('\nA learner meets the authored course\n');
  const m = await mk({ name: 'Test Member', email: 'member@example.com', capabilities: [] }); current = m;
  const card = async (which) => {
    await m.goto(BASE + '/academy'); await m.waitForTimeout(2500);
    return m.evaluate((which) => {
      const h = Array.from(document.querySelectorAll('h3')).find((e) => (e.textContent || '').trim() === 'Unstoppable Youth');
      let n = h;
      while (n && n.parentElement) { n = n.parentElement; const b = Array.from(n.querySelectorAll('button')).find((x) => (x.textContent || '').trim() === which); if (b) { b.click(); return true; } }
      return false;
    }, which);
  };
  await expect(await card('See lessons'), 'once staff open the course, it appears in the catalogue');
  await m.waitForTimeout(1500);
  await click(m, /^(Start|See lessons)$/); await m.waitForTimeout(1500);
  body = await text(m);
  await expect(/What steadiness feels like/.test(body) && /Where help comes from/.test(body), 'the learner sees the authored lessons on the course page');
  await expect(!/PLACEHOLDER/.test(body.split('Courses')[1] || ''), 'the placeholder lesson summaries are gone from the lessons the author replaced');
  await expect(await card('Enroll'), 'a learner can enroll');
  await m.waitForTimeout(1500);
  body = await text(m);
  await expect(/Before the course, what is steadiness/.test(body), 'the authored baseline is what they are asked first');
  await m.screenshot({ path: `${OUT}/authoring-5-learner-baseline.png`, fullPage: true });
  // Answer and carry on to the authored lesson with its question.
  await m.evaluate(() => { document.querySelectorAll('div.space-y-2').forEach((g) => { const b = g.querySelector('button'); if (b) b.click(); }); });
  await click(m, /^Submit baseline$/); await m.waitForTimeout(1000);
  await click(m, /^Start the courses$/); await m.waitForTimeout(1200);
  await click(m, /^Start$/); await m.waitForTimeout(1200);
  await click(m, /What steadiness feels like/); await m.waitForTimeout(1500);
  body = await text(m);
  await expect(/Which of these helps a young person feel steady/.test(body), 'the authored question appears in the authored lesson');
  await m.screenshot({ path: `${OUT}/authoring-6-learner-lesson.png`, fullPage: true });

  await expect(errors.length === 0, `no page errors${errors.length ? ': ' + errors.join(' | ').slice(0, 300) : ''}`);
  await browser.close();
  console.log(fail.length ? `\n${fail.length} FAILED` : '\nAll checks passed');
  process.exit(fail.length ? 1 : 0);
})();
