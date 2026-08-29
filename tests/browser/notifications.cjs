// The bell, measured.
//
// It previously held exactly one card: Toy Distribution, December 12. Everything else in
// its only source was a past workshop, and the Academy's 28 courses were invisible to it.
const { chromium } = require('playwright');
const BASE = process.env.HUB_BASE || 'http://127.0.0.1:5321';
const OUT = process.env.SHOT_DIR || require('os').tmpdir();
const fail = [];
const expect = (c, l) => { console.log(`${c ? '  ok  ' : '  FAIL'}  ${l}`); if (!c) fail.push(l); };

const LIBRARY = [
  { id: 'e1', title: 'Toy Distribution', description: 'Annual community toy distribution.', date: '2026-12-12', state: 'upcoming', contentType: 'workshop' },
  { id: 'e2', title: 'Unstoppable Workshop: Physical Well-being', date: '2026-06-05', state: 'past', contentType: 'workshop' },
  { id: 'e3', title: 'Care Navigation Webinar', date: '2026-07-02', state: 'recorded', contentType: 'webinar', recordingUrl: 'https://example.org/r', recordingMinutes: 42 },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1340, height: 1000 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  const json = (b) => ({ status: 200, contentType: 'application/json',
    headers: { 'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true' }, body: JSON.stringify(b) });

  await page.route('**/api/**', (r) => {
    const u = r.request().url();
    if (r.request().method() === 'OPTIONS') return r.fulfill({ status: 204, headers: {
      'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true',
      'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
    if (u.includes('/api/public/content-library')) return r.fulfill(json({ items: LIBRARY }));
    if (u.includes('/api/public/academy-sessions')) return r.fulfill(json({ sessions: [
      { id: 's1', courseId: 'ml-1', title: 'Mentor + Leader cohort', startsAt: '2027-01-12T17:00:00Z' },
    ] }));
    if (u.includes('/api/client/me')) return r.fulfill(json({ identified: true, email: 'r@healthmatters.clinic',
      profile: { firstName: 'Render' }, audience: 'both', staff: null,
      credits: { balance: 0, lifetimeEarned: 0, lifetimeSpent: 0 }, referrals: [], nextActions: [] }));
    if (u.includes('/api/context/hello')) return r.fulfill(json({ visitorId: 'vid_n' }));
    return r.fulfill(json({}));
  });

  // A browser that has seen an older catalogue: two courses are new to it.
  await page.goto(BASE);
  await page.evaluate(() => {
    localStorage.setItem('hmc.hub.knownCourses', JSON.stringify(['hce-1', 'hce-2']));
    localStorage.removeItem('hmc.hub.seenContent');
    localStorage.removeItem('hmc.hub.archivedContent');
  });
  await page.goto(BASE);
  await page.waitForTimeout(2000);

  const badge = await page.evaluate(() => {
    const b = document.querySelector('button[aria-label^="Notifications"]');
    return b ? (b.getAttribute('aria-label') || '') + '|' + (b.textContent || '').trim() : null;
  });
  console.log('   bell:', badge);
  expect(/unread/.test(badge || ''), 'the bell carries an unread count');

  await page.click('button[aria-label^="Notifications"]');
  await page.waitForTimeout(600);
  let body = await page.evaluate(() => document.body.innerText);

  expect(/Notifications/.test(body), 'the panel opens');
  for (const t of ['Inbox', 'Trainings', 'Events', 'All', 'Archived']) {
    expect(new RegExp(t).test(body), `the ${t} tab is there`);
  }
  expect(/New course:/.test(body), 'a course the browser had not seen is announced');
  expect(/Mentor \+ Leader cohort/.test(body), 'a scheduled cohort date appears');
  expect(/Toy Distribution/.test(body), 'an upcoming event still appears');
  expect(!/Physical Well-being/.test(body), 'a past workshop with nothing to watch does not');
  expect(/Recording/i.test(body) && /42 minutes/.test(body), 'a recording appears with its length');
  await page.screenshot({ path: `${OUT}/hub-notifications.png` });

  // Trainings tab holds training and nothing else.
  await page.evaluate(() => {
    const b = Array.from(document.querySelectorAll('button')).find((x) => /^Trainings$/.test((x.textContent || '').trim()));
    if (b) b.click();
  });
  await page.waitForTimeout(400);
  body = await page.evaluate(() => document.body.innerText);
  expect(/New course:/.test(body) || /cohort/i.test(body), 'Trainings holds training');
  expect(!/Toy Distribution/.test(body), 'and not the toy distribution');
  await page.screenshot({ path: `${OUT}/hub-notifications-trainings.png` });

  // Mark all read clears the badge.
  await page.evaluate(() => {
    const b = Array.from(document.querySelectorAll('button')).find((x) => /mark all as read/i.test(x.getAttribute('aria-label') || ''));
    if (b) b.click();
  });
  await page.waitForTimeout(500);
  const after = await page.evaluate(() => (document.querySelector('button[aria-label^="Notifications"]') || {}).getAttribute?.('aria-label'));
  expect(!/unread/.test(after || ''), 'mark all as read clears the badge', String(after));

  expect(errors.length === 0, `no uncaught page errors (${errors.join(' | ') || 'none'})`);
  await browser.close();
  console.log(fail.length ? `\n${fail.length} FAILED\n` : '\nall render checks passed\n');
  process.exit(fail.length ? 1 : 0);
})();
