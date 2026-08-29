// The onboarding loop, measured rather than reasoned about.
//
// A returning member was asked for their name and zip on every single sign-in, and the
// answers went nowhere. Two things have to be true now and both are visible in a browser:
// a member whose record exists goes straight in, and a member who fills the form has it
// SENT somewhere rather than written to localStorage.
//
// Run it with:
//   npx vite --port 5321 --strictPort &
//   node tests/browser/onboarding-loop.cjs
const { chromium } = require('playwright');
const BASE = process.env.HUB_BASE || 'http://127.0.0.1:5321';
const OUT = process.env.SHOT_DIR || require('os').tmpdir();
const fail = [];
const expect = (c, l) => { console.log(`${c ? '  ok  ' : '  FAIL'}  ${l}`); if (!c) fail.push(l); };

const json = (b) => ({ status: 200, contentType: 'application/json',
  headers: { 'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true' },
  body: JSON.stringify(b) });

const route = (page, opts) => page.route('**/api/**', (r) => {
  const u = r.request().url();
  if (r.request().method() === 'OPTIONS') return r.fulfill({ status: 204, headers: {
    'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true',
    'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
  if (u.includes('/api/public/auth-config')) return r.fulfill(json({ googleClientId: null, signupMode: 'open' }));
  if (u.includes('/api/client/auth/request-link')) return r.fulfill(json({ ok: true }));
  if (u.includes('/api/client/auth/verify-link')) return r.fulfill(json({ ok: true, identified: opts.identified, email: 'render@healthmatters.clinic' }));
  if (u.includes('/api/client/profile')) { opts.profilePosts.push(JSON.parse(r.request().postData() || '{}')); return r.fulfill(json({ ok: true, identified: true, audience: 'learner' })); }
  if (u.includes('/api/client/me')) {
    if (!opts.session) return r.fulfill({ status: 401, contentType: 'application/json',
      headers: { 'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true' },
      body: JSON.stringify({ error: 'not_signed_in' }) });
    return r.fulfill(json({ identified: true, email: 'render@healthmatters.clinic',
      profile: { firstName: 'Render', lastName: 'Check', zipCode: '90210', phone: null },
      audience: opts.audience, staff: null,
      credits: { balance: 0, lifetimeEarned: 0, lifetimeSpent: 0 }, referrals: [], nextActions: [] }));
  }
  if (u.includes('/api/context/hello')) return r.fulfill(json({ visitorId: 'vid_loop' }));
  return r.fulfill(json({}));
});

const signIn = async (page) => {
  await page.fill('input[type="email"]', 'render@healthmatters.clinic');
  await page.click('button:has-text("Email Me A Code")');
  await page.waitForTimeout(700);
  await page.fill('input[inputmode="numeric"], input[maxlength="6"], input[type="text"]', '123456');
  await page.evaluate(() => {
    const b = Array.from(document.querySelectorAll('button')).find((x) => /verify|sign in|continue/i.test(x.textContent || ''));
    if (b) b.click();
  });
  await page.waitForTimeout(1200);
};

(async () => {
  const browser = await chromium.launch();
  const errors = [];

  // 1. A member whose record already exists must go STRAIGHT IN. This is the loop.
  {
    const page = await browser.newPage({ viewport: { width: 1200, height: 950 } });
    page.on('pageerror', (e) => errors.push(String(e)));
    const opts = { identified: true, session: false, audience: 'care', profilePosts: [] };
    await route(page, opts);
    await page.goto(BASE);
    await page.waitForTimeout(1200);
    opts.session = true;
    await signIn(page);
    const body = await page.evaluate(() => document.body.innerText);
    expect(!/ZIP CODE/i.test(body) && !/What brings you to HMC/i.test(body),
      'a member with an existing record is never asked for their name and zip again');
    expect(/Hello, |Member Hub/i.test(body), 'they land in the Hub');
    await page.close();
  }

  // 2. A genuinely new member is asked ONCE, and the answers are SENT.
  {
    const page = await browser.newPage({ viewport: { width: 1200, height: 1050 } });
    page.on('pageerror', (e) => errors.push(String(e)));
    const opts = { identified: false, session: false, audience: 'learner', profilePosts: [] };
    await route(page, opts);
    await page.goto(BASE);
    await page.waitForTimeout(1200);
    await signIn(page);
    let body = await page.evaluate(() => document.body.innerText);
    expect(/ZIP CODE/i.test(body), 'a new member is asked to complete a profile');
    expect(/What brings you to HMC/i.test(body), 'and is asked which experience they came for');
    await page.screenshot({ path: `${OUT}/hub-onboarding.png` });

    // The submit must refuse until the audience question is answered.
    await page.fill('input[placeholder="Alex"]', 'Erica');
    await page.fill('input[placeholder="Rivera"]', 'Robinson');
    await page.fill('input[placeholder="90210"]', '90210');
    await page.evaluate(() => {
      document.querySelectorAll('label.flex.items-start').forEach((l) => l.dispatchEvent(new MouseEvent('click', { bubbles: true })));
    });
    await page.waitForTimeout(300);
    const disabledBefore = await page.evaluate(() =>
      Array.from(document.querySelectorAll('button[type="submit"]')).some((b) => b.disabled));
    expect(disabledBefore, 'the form will not submit until the audience question is answered');

    await page.click('button:has-text("Courses and training")');
    await page.waitForTimeout(300);
    opts.session = true;
    await page.click('button[type="submit"]');
    await page.waitForTimeout(1500);

    expect(opts.profilePosts.length === 1,
      `the profile is POSTed to the server, not written to localStorage (${opts.profilePosts.length} posts)`);
    const sent = opts.profilePosts[0] || {};
    expect(sent.firstName === 'Erica' && sent.zipCode === '90210',
      'what the member typed is what is sent');
    expect(sent.audience === 'learner', 'the audience they chose is sent');
    expect(sent.consentToShare === true && sent.consentToContact === true,
      'both consents are recorded rather than only checked in the browser');

    // And with a learner audience they get the learner surface, not a screening one.
    body = await page.evaluate(() => document.body.innerText);
    expect(!/Snapshot/i.test(body) && !/Playbook/i.test(body),
      'a learner is not shown Snapshot or Playbook');
    expect(/Academy/i.test(body), 'a learner is shown the Academy');
    await page.screenshot({ path: `${OUT}/hub-learner.png` });
    await page.close();
  }

  // 3. A care member still gets the care surface.
  {
    const page = await browser.newPage({ viewport: { width: 1200, height: 950 } });
    page.on('pageerror', (e) => errors.push(String(e)));
    await route(page, { identified: true, session: true, audience: 'care', profilePosts: [] });
    await page.goto(BASE);
    await page.waitForTimeout(1500);
    const body = await page.evaluate(() => document.body.innerText);
    expect(/Snapshot/i.test(body) && /Playbook/i.test(body) && /Results/i.test(body),
      'a care member still sees Snapshot, Playbook and Results');
    await page.close();
  }

  expect(errors.length === 0, `no uncaught page errors (${errors.join(' | ') || 'none'})`);
  await browser.close();
  console.log(fail.length ? `\n${fail.length} FAILED\n` : '\nall render checks passed\n');
  process.exit(fail.length ? 1 : 0);
})();
