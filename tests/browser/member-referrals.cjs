// Measures the rendered referrals view, not the structure.
//
// Run it with:
//   npx vite --port 5321 --strictPort &
//   node tests/browser/member-referrals.cjs
//
// Not in CI, for the reason given in published-corrections.cjs. The five stages, the
// contact block and the chase prompt are all conditional, so this drives a member holding
// one referral in each state and reads what the page says about each.
const { chromium } = require('playwright');
const BASE = process.env.HUB_BASE || 'http://127.0.0.1:5321';
const OUT = process.env.SHOT_DIR || require('os').tmpdir();
const fail = [];
const expect = (c, l) => { console.log(`${c ? '  ok  ' : '  FAIL'}  ${l}`); if (!c) fail.push(l); };

const REFERRALS = [
  { id: 'r1', resourceName: 'Los Angeles Regional Food Bank', status: 'pending', createdAt: '2026-08-26T22:30:00Z',
    urgencyLevel: 'urgent', stage: 'received', contacted: false, awaitingResponse: true,
    resource: { phone: '(323) 234-3030', website: 'lafoodbank.org', address: '1734 E 41st St, Los Angeles, CA', hours: 'Mon to Fri, 8am to 4pm' } },
  { id: 'r2', resourceName: 'St Joseph Center', status: 'pending', createdAt: '2026-08-24T18:00:00Z',
    urgencyLevel: 'routine', stage: 'matched', contacted: false, awaitingResponse: true, resource: null },
  { id: 'r3', resourceName: 'Venice Family Clinic', status: 'in progress', createdAt: '2026-08-20T18:00:00Z',
    urgencyLevel: 'routine', stage: 'in_touch', contacted: true, awaitingResponse: false,
    resource: { phone: 'dmolina@211la.org', website: 'call the office', address: null, hours: null } },
  { id: 'r4', resourceName: 'Downtown Womens Center', status: 'completed', createdAt: '2026-08-01T18:00:00Z',
    urgencyLevel: 'routine', stage: 'completed', contacted: true, awaitingResponse: false, resource: null },
  { id: 'r5', resourceName: null, status: 'withdrawn', createdAt: '2026-07-28T18:00:00Z',
    urgencyLevel: 'routine', stage: 'closed', contacted: false, awaitingResponse: false, resource: null },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1340, height: 1100 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  const json = (b) => ({ status: 200, contentType: 'application/json',
    headers: { 'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true' }, body: JSON.stringify(b) });

  await page.route('**/api/**', (r) => {
    const u = r.request().url();
    if (r.request().method() === 'OPTIONS') return r.fulfill({ status: 204, headers: {
      'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true',
      'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
    if (u.includes('/api/client/me')) return r.fulfill(json({
      identified: true, email: 'render@healthmatters.clinic', profile: { firstName: 'Render' }, staff: null,
      credits: { balance: 0, lifetimeEarned: 0, lifetimeSpent: 0 }, referrals: REFERRALS, nextActions: [] }));
    if (u.includes('/api/context/hello')) return r.fulfill(json({ visitorId: 'vid_render_check' }));
    return r.fulfill(json({}));
  });

  const clickText = (re) => page.evaluate((src) => {
    const rx = new RegExp(src, 'i');
    const hit = Array.from(document.querySelectorAll('button, a, [role="button"]'))
      .find((e) => rx.test((e.textContent || '').trim()) && e.offsetParent !== null);
    if (hit) { hit.click(); return (hit.textContent || '').trim().slice(0, 70); }
    return null;
  }, re.source);

  await page.goto(BASE);
  await page.waitForTimeout(1800);

  // The Home pill counts the three live stages and nothing else.
  let body = await page.evaluate(() => document.body.innerText);
  expect(/3 referrals in progress/i.test(body), 'the home pill counts only the open referrals');
  expect(!/5 referrals in progress/i.test(body), 'settled referrals are not counted as in progress');

  // And it is a way in, not a dead end.
  console.log('clicked:', await clickText(/referrals in progress/));
  await page.waitForTimeout(1000);
  body = await page.evaluate(() => document.body.innerText);
  expect(/Your referrals/i.test(body), 'the pill navigates to the referral cards');

  expect(/Los Angeles Regional Food Bank/.test(body), 'each referral names its organization');
  expect(/Being matched to an organization/i.test(body), 'a referral with no organization yet says so');
  // Read the pills themselves rather than the page text. The pill classes uppercase their
  // content, so a page-text match would be case blind, and "Closed" also appears in the
  // heading above the settled group.
  const pills = await page.evaluate(() => Array.from(document.querySelectorAll('span'))
    .filter((e) => /rounded-full/.test(e.className) && /uppercase/.test(e.className))
    .map((e) => (e.textContent || '').trim().toLowerCase()));
  for (const label of ['received', 'being worked on', 'in touch', 'connected', 'closed']) {
    expect(pills.includes(label), `the ${label} stage renders its own pill`);
  }
  expect(pills.filter((p) => p === 'urgent').length === 1,
    `exactly one referral is flagged urgent (found ${pills.filter((p) => p === 'urgent').length})`);
  expect(/Requested August 26, 2026/.test(body), 'the requested date is the Pacific day, not the UTC one');
  expect(/Closed and completed/i.test(body), 'settled referrals are grouped away from live ones');

  // The contact block, and what must never become a link.
  const links = await page.evaluate(() => Array.from(document.querySelectorAll('a[href^="tel:"], a[href^="http"]'))
    .map((a) => a.getAttribute('href')));
  expect(links.includes('tel:+13232343030'), 'a formatted directory number is dialable');
  expect(links.some((h) => h === 'https://lafoodbank.org'), 'a bare hostname is linked with a scheme');
  expect(!links.some((h) => /dmolina|211la/.test(h)), 'an email address sitting in a phone field is not made dialable');
  expect(/dmolina@211la\.org/.test(body), 'but it is still shown, so the member can see what the directory holds');
  expect(!links.some((h) => /call the office/.test(h)), 'prose in a website field is not made a link');

  // The chase prompt appears only where nobody has been in touch.
  const prompts = (body.match(/Not heard anything\?/g) || []).length;
  expect(prompts === 2, `the chase prompt shows on the two referrals nobody has picked up (found ${prompts})`);
  expect(/\(323\) 990-4325/.test(body), 'the chase prompt carries a number a member can call');

  await page.evaluate(() => {
    const h = Array.from(document.querySelectorAll('h3')).find((e) => /Your referrals/i.test(e.textContent || ''));
    if (h) h.scrollIntoView({ block: 'start' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/hub-referrals.png` });

  // A member holding no referrals must see the page exactly as it was.
  await page.unroute('**/api/**');
  await page.route('**/api/**', (r) => {
    const u = r.request().url();
    if (r.request().method() === 'OPTIONS') return r.fulfill({ status: 204, headers: {
      'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true',
      'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
    if (u.includes('/api/client/me')) return r.fulfill(json({
      identified: true, email: 'render@healthmatters.clinic', profile: { firstName: 'Render' }, staff: null,
      credits: { balance: 0, lifetimeEarned: 0, lifetimeSpent: 0 }, referrals: [], nextActions: [] }));
    return r.fulfill(json({}));
  });
  await page.goto(BASE);
  await page.waitForTimeout(1500);
  await clickText(/^resources$/);
  await page.waitForTimeout(900);
  body = await page.evaluate(() => document.body.innerText);
  expect(/Resources/i.test(body) && !/Your referrals/i.test(body),
    'a member with no referrals sees the Resources page unchanged');

  expect(errors.length === 0, `no uncaught page errors (${errors.join(' | ') || 'none'})`);
  await browser.close();
  console.log(fail.length ? `\n${fail.length} FAILED\n` : '\nall render checks passed\n');
  process.exit(fail.length ? 1 : 0);
})();
