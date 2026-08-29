// What a visitor with no account sees.
//
// The Hub answered every route with a sign-in form. Somebody sent a link to a course or an
// event landed on that form and could not see the thing they were sent, which makes every
// link HMC shares worthless to anyone without an account.
const { chromium } = require('playwright');
const BASE = process.env.HUB_BASE || 'http://127.0.0.1:5321';
const OUT = process.env.SHOT_DIR || require('os').tmpdir();
const fail = [];
const expect = (c, l) => { console.log(`${c ? '  ok  ' : '  FAIL'}  ${l}`); if (!c) fail.push(l); };

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1340, height: 1000 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  const json = (b) => ({ status: 200, contentType: 'application/json',
    headers: { 'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true' }, body: JSON.stringify(b) });

  // No session at all. This is a stranger.
  await page.route('**/api/**', (r) => {
    const u = r.request().url();
    if (r.request().method() === 'OPTIONS') return r.fulfill({ status: 204, headers: {
      'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true',
      'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
    if (u.includes('/api/client/me')) return r.fulfill({ status: 401, contentType: 'application/json',
      headers: { 'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true' },
      body: JSON.stringify({ error: 'not_signed_in' }) });
    if (u.includes('/api/public/auth-config')) return r.fulfill(json({ googleClientId: null, signupMode: 'open' }));
    if (u.includes('/api/context/hello')) return r.fulfill(json({ visitorId: 'vid_guest' }));
    if (u.includes('/api/public/academy-visibility')) return r.fulfill(json({ overrides: {} }));
    return r.fulfill(json({}));
  });

  const click = (re) => page.evaluate((src) => {
    const rx = new RegExp(src, 'i');
    const hit = Array.from(document.querySelectorAll('button, a, [role="button"]'))
      .find((e) => rx.test((e.textContent || '').trim()) && e.offsetParent !== null);
    if (hit) { hit.click(); return (hit.textContent || '').trim().slice(0, 50); }
    return null;
  }, re.source);

  await page.goto(BASE);
  await page.waitForTimeout(1800);

  let body = await page.evaluate(() => document.body.innerText);
  expect(!/EMAIL ADDRESS/i.test(body), 'a visitor is not met by a sign-in form');
  expect(/Health Matters Clinic/i.test(body), 'the Hub itself renders');
  expect(!/Hello, \./.test(body) && !/cleared to serve/i.test(body),
    'and it does not greet a stranger as a signed-in volunteer');

  // The four public surfaces, and only those.
  const nav = await page.evaluate(() => Array.from(document.querySelectorAll('aside button, nav button'))
    .map((b) => (b.textContent || '').trim()).filter(Boolean));
  console.log('   nav:', JSON.stringify(nav));
  for (const label of ['Home', 'Academy', 'Events', 'Resources']) {
    expect(nav.some((n) => new RegExp(`^${label}$`, 'i').test(n)), `a visitor can reach ${label}`);
  }
  for (const label of ['Snapshot', 'Results', 'Playbook', 'Credits', 'Profile']) {
    expect(!nav.some((n) => new RegExp(`^${label}$`, 'i').test(n)), `${label} is not offered to a visitor`);
  }
  expect(nav.some((n) => /sign in/i.test(n)), 'sign in is offered');
  expect(!nav.some((n) => /sign out/i.test(n)), 'sign out is not offered to somebody who is not in');
  await page.screenshot({ path: `${OUT}/hub-public-home.png` });

  // The Academy is readable, which is the whole point of the change.
  console.log('   clicked:', await click(/^academy$/));
  await page.waitForTimeout(1200);
  body = await page.evaluate(() => document.body.innerText);
  expect(/Health Careers Exploration/i.test(body), 'a visitor can read the course catalogue');
  expect(/Mentor \+ Leader/i.test(body), 'including the pathways added this week');
  await page.screenshot({ path: `${OUT}/hub-public-academy.png` });

  // Resources too, which you asked to add to the public set.
  console.log('   clicked:', await click(/^resources$/));
  await page.waitForTimeout(1000);
  body = await page.evaluate(() => document.body.innerText);
  expect(/Resource Directory/i.test(body), 'a visitor can read Resources');

  // Acting asks, and says what for.
  console.log('   clicked:', await click(/^home$/));
  await page.waitForTimeout(900);
  console.log('   clicked:', await click(/Browse Courses/));
  await page.waitForTimeout(800);
  console.log('   clicked:', await click(/^Sign In$/));
  await page.waitForTimeout(900);
  body = await page.evaluate(() => document.body.innerText);
  expect(/EMAIL ADDRESS/i.test(body), 'sign in opens over the Hub');
  await page.screenshot({ path: `${OUT}/hub-public-signin.png` });

  // And it closes again, back to where they were, rather than trapping them.
  await page.evaluate(() => {
    const b = Array.from(document.querySelectorAll('button')).find((x) => /close sign in/i.test(x.getAttribute('aria-label') || ''));
    if (b) b.click();
  });
  await page.waitForTimeout(700);
  body = await page.evaluate(() => document.body.innerText);
  expect(!/EMAIL ADDRESS/i.test(body), 'closing sign in returns to the Hub rather than trapping them');

  expect(errors.length === 0, `no uncaught page errors (${errors.join(' | ') || 'none'})`);
  await browser.close();
  console.log(fail.length ? `\n${fail.length} FAILED\n` : '\nall render checks passed\n');
  process.exit(fail.length ? 1 : 0);
})();
