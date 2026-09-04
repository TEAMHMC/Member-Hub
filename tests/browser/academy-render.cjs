// Look at the Academy instead of trusting that it compiled.
//
// Course cards gained a delivery badge, a free or CE badge and a gradient surface, and the
// pathway page gained a step panel driven by the completion gates. All of that rests on
// CSS class contracts and computed state, and a passing build proves none of it renders.
//
//   node tests/browser/academy-render.cjs
const { chromium } = require('playwright');
const BASE = process.env.HUB_BASE || 'http://127.0.0.1:5321';
const OUT = process.env.SHOT_DIR || require('os').tmpdir();
const fail = [];
const expect = (c, l) => { console.log(`${c ? '  ok  ' : '  FAIL'}  ${l}`); if (!c) fail.push(l); };

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
      identified: true, email: 'learner@healthmatters.clinic', audience: 'both',
      profile: { firstName: 'Alex', lastName: 'Rivera', zipCode: '90011' },
      credits: { balance: 300, lifetimeEarned: 300, lifetimeSpent: 0 },
      referrals: [], nextActions: [], snapshot: null, staff: null,
    }));
    if (u.includes('/api/public/auth-config')) return r.fulfill(json({ googleClientId: null, signupMode: 'open' }));
    if (u.includes('/api/context/hello')) return r.fulfill(json({ visitorId: 'vid_1', identified: true, consent: { context: true } }));
    if (u.includes('/api/public/academy-visibility')) return r.fulfill(json({ overrides: {} }));
    if (u.includes('/api/chw/my-enrollment')) return r.fulfill(json({ enrolled: false }));
    if (u.includes('/api/public/events')) return r.fulfill(json([]));
    if (u.includes('/api/public/content-library')) return r.fulfill(json({ items: [] }));
    return r.fulfill(json({}));
  });

  await page.goto(BASE, { waitUntil: 'networkidle' });

  // Into the Academy, then into the first pathway that is open.
  await page.evaluate(() => {
    const b = [...document.querySelectorAll('button')].find((x) => /academy/i.test(x.textContent || ''));
    if (b) b.click();
  });
  await page.waitForTimeout(700);

  await page.evaluate(() => {
    const b = [...document.querySelectorAll('button')].find((x) => /^(enroll|continue)$/i.test((x.textContent || '').trim()));
    if (b) b.click();
  });
  await page.waitForTimeout(900);

  const shot = `${OUT}/academy-pathway.png`;
  await page.screenshot({ path: shot, fullPage: true });

  // The step panel, built from completion gates that were never rendered before.
  const stepPanel = await page.evaluate(() =>
    [...document.querySelectorAll('*')].some((e) => /Your path to/i.test(e.childNodes[0]?.nodeValue || '')));
  expect(stepPanel, 'the "Your path to" step panel renders');

  const stepLabels = await page.evaluate(() =>
    [...document.querySelectorAll('span')].filter((s) => /^Step \d+$/.test((s.textContent || '').trim())).length);
  expect(stepLabels >= 2, `numbered steps render (found ${stepLabels})`);

  // Course cards, checked for the gradient surface, the delivery badge and an action.
  const cards = await page.evaluate(() => {
    const arts = [...document.querySelectorAll('article')];
    return arts.map((a) => {
      const cs = getComputedStyle(a);
      return {
        gradient: cs.backgroundImage.includes('gradient'),
        badges: [...a.querySelectorAll('span')].map((s) => (s.textContent || '').trim()).filter(Boolean),
        action: [...a.querySelectorAll('button')].map((b) => (b.textContent || '').trim()),
        h: a.getBoundingClientRect().height,
        w: a.getBoundingClientRect().width,
        overflows: a.scrollWidth > a.clientWidth + 1,
      };
    });
  });
  expect(cards.length > 0, `course cards render (found ${cards.length})`);
  expect(cards.every((c) => c.gradient), 'every card carries the gradient surface');
  expect(cards.every((c) => c.badges.some((b) => /Self-paced|Live class|Blended|Practicum/.test(b))),
    'every card names how it is delivered');
  expect(cards.every((c) => c.badges.some((b) => /^(Free|CE approved)$/.test(b))),
    'every card says what it costs or what it carries');
  expect(cards.every((c) => c.action.some((a) => /Start|Continue|Review/i.test(a))), 'every card has an action');
  expect(cards.every((c) => !c.overflows), 'no card scrolls sideways');

  // Cards in a row share edges, per the repeated-object rule.
  const heights = [...new Set(cards.slice(0, 3).map((c) => Math.round(c.h)))];
  expect(heights.length <= 1, `cards in the first row share a height (${heights.join(', ')})`);

  // The page itself must never scroll sideways.
  const bodyOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(!bodyOverflow, 'the page does not scroll horizontally');

  // Narrow viewport, which is the phone case the old gradient slab used to break.
  await page.setViewportSize({ width: 390, height: 900 });
  await page.waitForTimeout(400);
  const narrowOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
  expect(!narrowOverflow, 'no horizontal scroll at 390px');
  await page.screenshot({ path: `${OUT}/academy-pathway-narrow.png`, fullPage: true });

  expect(errors.length === 0, `no page errors${errors.length ? `: ${errors[0]}` : ''}`);

  console.log(`\n  shots: ${shot}`);
  await browser.close();
  if (fail.length) { console.log(`\n${fail.length} failed\n`); process.exit(1); }
  console.log('\nall passed\n');
})();
