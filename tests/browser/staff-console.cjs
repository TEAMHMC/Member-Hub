// Measures the rendered Support console, not the structure.
//
// Run it with:
//   npx vite --port 5321 --strictPort &
//   node tests/browser/staff-console.cjs
//
// Not in CI, for the reason given in the other browser checks. The console was unreachable
// code for as long as it existed: types.ts declared STAFF and ADMIN, App.tsx routed both
// here, and the session restore hardcoded every session to CLIENT, so nothing ever
// rendered it. It is worth a check that stands a coordinator and an admin in front of it
// and reads what each one gets, because the difference between them is a permission
// boundary and not a preference.
const { chromium } = require('playwright');
const BASE = process.env.HUB_BASE || 'http://127.0.0.1:5321';
const OUT = process.env.SHOT_DIR || require('os').tmpdir();
const fail = [];
const expect = (c, l) => { console.log(`${c ? '  ok  ' : '  FAIL'}  ${l}`); if (!c) fail.push(l); };

const OVERVIEW = {
  academy: { configured: 2, hidden: 1, overrides: { 'health-careers-exploration': { state: 'open', cohortLabel: null }, 'youth-steam': { state: 'upcoming', cohortLabel: 'Fall 2026' } } },
  announcements: [{ id: 'a1', title: 'Flu clinic moved to Saturday', date: '2026-08-26T18:00:00Z', category: 'Events', status: 'published' }],
};
const ROSTER = { note: 'From the volunteers roster.', staff: [
  { name: 'A Coordinator', email: 'coordinator@healthmatters.clinic', role: 'Program Coordinator', isAdmin: false, capabilities: ['academy', 'content', 'support'] },
  { name: 'An Admin', email: 'admin@healthmatters.clinic', role: 'Administrator', isAdmin: true, capabilities: ['academy', 'content', 'support', 'staffAdmin'] },
] };

// The Hub's own roster, which is the point of the panel: nobody here holds a volunteer
// record, and the console has to be able to say so.
const PEOPLE = {
  tiers: [
    { id: 'admin', label: 'Hub Administrator', describes: 'Everything: courses, curriculum, announcements, member support, and who else has access.' },
    { id: 'curriculum', label: 'Curriculum Lead', describes: 'Reviews, corrects and releases course content. Cannot change who has access.' },
    { id: 'clinical', label: 'Clinical Reviewer', describes: 'Says whether course content is clinically correct and releases it.' },
    { id: 'support', label: 'Member Support', describes: 'Helps a member who cannot sign in. Sees nothing else.' },
  ],
  people: [
    { email: 'chloe@healthmatters.clinic', name: 'Chloe', tier: 'admin', tierLabel: 'Hub Administrator',
      role: 'Hub Administrator', capabilities: ['academy', 'content', 'support', 'staffAdmin', 'curriculum'],
      active: true, grantedAt: '2026-09-11T10:00:00Z', grantedBy: 'admin@healthmatters.clinic', revokedAt: null },
    { email: 'former@healthmatters.clinic', name: 'Someone Who Left', tier: 'support', tierLabel: 'Member Support',
      role: 'Member Support', capabilities: ['support'],
      active: false, grantedAt: '2026-01-04T10:00:00Z', grantedBy: 'admin@healthmatters.clinic', revokedAt: '2026-06-02T10:00:00Z' },
  ],
};

const CURRICULUM = { courses: [
  { id: 'unstoppable-ce', title: 'Unstoppable: The Power of Healing and Growth', corrected: true,
    version: 3, updatedAt: '2026-09-01T10:00:00Z', updatedByName: 'Dr Clarke', note: 'Corrected the severity bands.' },
  { id: 'cmhw-facilitator', title: 'Community Mental Health Worker and Facilitator Training', corrected: false,
    version: 0, updatedAt: null, updatedByName: null, note: null },
] };

const COURSE_DETAIL = {
  id: 'unstoppable-ce', title: 'Unstoppable: The Power of Healing and Growth',
  content: 'What this course is for.',
  sections: [{ heading: 'Framework', body: 'The Unstoppable framework, and the needs it responds to.' }],
  version: 3, hasCorrection: true,
  history: [{ version: 2, note: 'First release.', archivedAt: '2026-08-01T10:00:00Z', archivedBy: 'Dr Clarke' }],
};

const run = async (page, staff, label) => {
  const json = (b) => ({ status: 200, contentType: 'application/json',
    headers: { 'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true' }, body: JSON.stringify(b) });
  await page.unroute('**/api/**').catch(() => {});
  await page.route('**/api/**', (r) => {
    const u = r.request().url();
    if (r.request().method() === 'OPTIONS') return r.fulfill({ status: 204, headers: {
      'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true',
      'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
    if (u.includes('/api/client/me')) return r.fulfill(json({ identified: true, email: staff.email,
      profile: { firstName: staff.name.split(' ')[0] }, staff,
      credits: { balance: 0, lifetimeEarned: 0, lifetimeSpent: 0 }, referrals: [], nextActions: [] }));
    if (u.includes('/api/hub/staff/overview')) return r.fulfill(json({ staff, ...OVERVIEW }));
    if (u.includes('/api/hub/staff/roster')) return r.fulfill(json(ROSTER));
    if (u.includes('/api/hub/staff/people')) return r.fulfill(json(PEOPLE));
    if (/\/api\/hub\/staff\/curriculum\/.+/.test(u)) return r.fulfill(json(COURSE_DETAIL));
    if (u.includes('/api/hub/staff/curriculum')) return r.fulfill(json(CURRICULUM));
    if (u.includes('/api/hub/staff/member-lookup')) return r.fulfill(json({
      email: 'amember@example.com', known: true, record: 'member', emailSuppressed: false,
      lastSignIn: '2026-08-25T18:00:00Z', canRequestCode: true }));
    if (u.includes('/api/context/hello')) return r.fulfill(json({ visitorId: 'vid_staff_check' }));
    return r.fulfill(json({}));
  });

  const clickText = (re) => page.evaluate((src) => {
    const rx = new RegExp(src, 'i');
    const hit = Array.from(document.querySelectorAll('button, a, [role="button"]'))
      .find((e) => rx.test((e.textContent || '').trim()) && e.offsetParent !== null);
    if (hit) { hit.click(); return (hit.textContent || '').trim().slice(0, 60); }
    return null;
  }, re.source);

  await page.goto(BASE);
  await page.waitForTimeout(1800);

  // Staff land on the member experience. Somebody maintaining the Hub has to be able to
  // look at what a member looks at, so the console is a destination and not a second app.
  let body = await page.evaluate(() => document.body.innerText);
  expect(/Hello, /i.test(body), `${label}: staff land on the member view, not the console`);

  // The sidebar toggle is labelled "Manage hub", and it flips to "Member view" once open.
  const opened = await clickText(/^Manage hub$/);
  await page.waitForTimeout(1000);
  body = await page.evaluate(() => document.body.innerText);
  console.log(`  (${label} opened via "${opened}")`);
  return body;
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1340, height: 1000 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));

  // A coordinator: courses, announcements, member support. No Hub access tab.
  let body = await run(page, { role: 'Program Coordinator', name: 'A Coordinator',
    email: 'coordinator@healthmatters.clinic', isAdmin: false,
    capabilities: ['academy', 'content', 'support'] }, 'coordinator');
  expect(/Courses/i.test(body), 'coordinator sees the course visibility tab');
  expect(/Announcements/i.test(body), 'coordinator sees announcements');
  expect(/Member support/i.test(body), 'coordinator sees member support');
  expect(!/Hub access/i.test(body), 'coordinator does not see Hub access, which is admin only');
  await page.screenshot({ path: `${OUT}/hub-console-coordinator.png` });

  // Member support is the reason the console exists. It has to actually look somebody up.
  await page.evaluate(() => {
    const input = Array.from(document.querySelectorAll('input')).find((i) => /email/i.test(i.placeholder || i.type));
    if (input) { input.focus(); }
  });
  const supportTab = await page.evaluate(() => {
    const hit = Array.from(document.querySelectorAll('button')).find((e) => /member support/i.test(e.textContent || ''));
    if (hit) { hit.click(); return true; }
    return false;
  });
  await page.waitForTimeout(800);
  if (supportTab) {
    // Typed rather than assigned. Setting .value directly bypasses React's own value
    // setter, so the component's state stayed empty and its button stayed disabled.
    await page.fill('input[aria-label="Member email address"]', 'amember@example.com');
    await page.click('button:has-text("Look up")');
    await page.waitForTimeout(1200);
    const support = await page.evaluate(() => document.body.innerText);
    expect(/amember@example\.com/i.test(support),
      'the lookup names the address it is about, so a staffer on a call is not trusting memory');
    expect(/Account found/i.test(support) && /Email deliverable/i.test(support),
      'a member lookup returns and renders the verdict');
    // 18:00 UTC on the 25th is 11:00am Pacific. Read out to somebody on the phone, the
    // reader's own zone is the wrong answer.
    expect(/Aug 25, 2026, 11:00 AM Pacific/.test(support),
      'the last sign-in is stated in Pacific and says so');
    expect(!/PHQ|GAD|screening result|diagnos/i.test(support),
      'the support view carries no clinical detail, which is the whole boundary of this console');
    await page.screenshot({ path: `${OUT}/hub-console-support.png` });
  } else {
    expect(false, 'the member support tab could be opened');
  }

  // A coordinator has no curriculum capability, so the tab must not be offered.
  expect(!/Curriculum/i.test(body), 'coordinator does not see Curriculum, which they cannot do');

  // An admin sees everything, including the two new surfaces.
  body = await run(page, { role: 'Hub Administrator', name: 'An Admin', email: 'admin@healthmatters.clinic',
    isAdmin: true, capabilities: ['academy', 'content', 'support', 'staffAdmin', 'curriculum'] }, 'admin');
  expect(/Hub access/i.test(body), 'admin sees Hub access');
  expect(/Curriculum/i.test(body), 'admin sees Curriculum');

  // Hub access has to be a place access is actually granted, not a read-only list with a
  // note telling somebody to go and edit a volunteer record in another application.
  const accessTab = await page.evaluate(() => {
    const hit = Array.from(document.querySelectorAll('button')).find((e) => /^Hub access$/i.test((e.textContent || '').trim()));
    if (hit) { hit.click(); return true; }
    return false;
  });
  await page.waitForTimeout(900);
  if (accessTab) {
    const access = await page.evaluate(() => document.body.innerText);
    expect(/Give someone access to the hub/i.test(access), 'the panel can grant access, not only list it');
    expect(/No volunteer record and no portal account is needed/i.test(access),
      'it says the thing that was not true before: staff do not have to be volunteers');
    expect(/Hub Administrator/i.test(access) && /Clinical Reviewer/i.test(access),
      'the four tiers are offered by name, with what each one can do');
    expect(/Chloe/i.test(access), 'somebody on the Hub\'s own roster is listed');
    expect(/Previously had access/i.test(access),
      'a revoked grant is kept and shown, because an audit that cannot say who was let in is not an audit');
    expect(/Also here through a volunteer portal role/i.test(access) && /A Coordinator/i.test(access),
      'people who reach the console through a portal role are listed separately, so it is clear which list they are on');
    // The add button must be disabled until the form is actually complete.
    const addDisabled = await page.evaluate(() => {
      const b = Array.from(document.querySelectorAll('button')).find((e) => /^Add as /i.test((e.textContent || '').trim()));
      return b ? b.disabled : null;
    });
    expect(addDisabled === true, 'the add button is disabled until a name and a valid address are given');
    await page.fill('#hub-access-name', 'Test Person');
    await page.fill('#hub-access-email', 'test.person@healthmatters.clinic');
    await page.waitForTimeout(400);
    const addEnabled = await page.evaluate(() => {
      const b = Array.from(document.querySelectorAll('button')).find((e) => /^Add as /i.test((e.textContent || '').trim()));
      return b ? !b.disabled : null;
    });
    expect(addEnabled === true, 'the add button enables once the form is complete');
    await page.screenshot({ path: `${OUT}/hub-console-access.png` });
  } else {
    expect(false, 'the Hub access tab could be opened');
  }

  // Curriculum is the reason this console can replace two applications with one.
  const currTab = await page.evaluate(() => {
    const hit = Array.from(document.querySelectorAll('button')).find((e) => /^Curriculum$/i.test((e.textContent || '').trim()));
    if (hit) { hit.click(); return true; }
    return false;
  });
  await page.waitForTimeout(900);
  if (currTab) {
    let curr = await page.evaluate(() => document.body.innerText);
    expect(/Unstoppable: The Power of Healing and Growth/i.test(curr), 'the course list renders');
    // A course with no correction is showing the built-in text. That is not the same as
    // unreviewed, and a reviewer must not have to guess which from an empty editor.
    expect(/Showing the text built into the Hub/i.test(curr),
      'a course with no correction says so, rather than looking empty');
    expect(/Corrected/i.test(curr) && /Unchanged/i.test(curr), 'both states are labelled');
    await page.screenshot({ path: `${OUT}/hub-console-curriculum.png` });

    const opened = await page.evaluate(() => {
      const hit = Array.from(document.querySelectorAll('button')).find((e) => /Unstoppable: The Power/i.test(e.textContent || ''));
      if (hit) { hit.click(); return true; }
      return false;
    });
    await page.waitForTimeout(900);
    if (opened) {
      curr = await page.evaluate(() => document.body.innerText);
      expect(/Released version 3/i.test(curr), 'the editor states which version is live');
      expect(/What changed, and why/i.test(curr), 'a change note is asked for, because a CE audit asks for one');
      expect(/Earlier versions/i.test(curr) && /First release/i.test(curr), 'the version history renders');
      const headingValue = await page.evaluate(() => {
        const i = document.querySelector('#curr-h-0');
        return i ? i.value : null;
      });
      expect(headingValue === 'Framework', 'the editor is loaded with what the course currently says, not a blank form');
      await page.screenshot({ path: `${OUT}/hub-console-curriculum-editor.png` });
    } else {
      expect(false, 'a course could be opened for review');
    }
  } else {
    expect(false, 'the Curriculum tab could be opened');
  }

  expect(errors.length === 0, `no uncaught page errors (${errors.join(' | ') || 'none'})`);
  await browser.close();
  console.log(fail.length ? `\n${fail.length} FAILED\n` : '\nall render checks passed\n');
  process.exit(fail.length ? 1 : 0);
})();
