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

  // An admin additionally sees who holds Hub access.
  body = await run(page, { role: 'Administrator', name: 'An Admin', email: 'admin@healthmatters.clinic',
    isAdmin: true, capabilities: ['academy', 'content', 'support', 'staffAdmin'] }, 'admin');
  expect(/Hub access/i.test(body), 'admin sees Hub access');

  expect(errors.length === 0, `no uncaught page errors (${errors.join(' | ') || 'none'})`);
  await browser.close();
  console.log(fail.length ? `\n${fail.length} FAILED\n` : '\nall render checks passed\n');
  process.exit(fail.length ? 1 : 0);
})();
