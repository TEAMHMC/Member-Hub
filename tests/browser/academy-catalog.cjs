// The Academy catalogue: search, what a returning learner is shown first, and the
// two accessibility floors that a build cannot see.
//
//   npm run test:render:catalog
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const DIST = path.resolve(__dirname, '../../dist');
const fail = [];
const expect = (c, l) => { console.log(`${c ? '  ok  ' : '  FAIL'}  ${l}`); if (!c) fail.push(l); };
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png' };

const serve = () => new Promise((res) => {
  const s = http.createServer((req, rq) => {
    const p = path.join(DIST, decodeURIComponent(req.url.split('?')[0]));
    if (fs.existsSync(p) && fs.statSync(p).isFile()) {
      rq.writeHead(200, { 'content-type': TYPES[path.extname(p)] || 'application/octet-stream' });
      return rq.end(fs.readFileSync(p));
    }
    rq.writeHead(404, { 'content-type': 'text/html' });
    rq.end(fs.readFileSync(path.join(DIST, '404.html')));
  });
  s.listen(0, '127.0.0.1', () => res({ s, base: `http://127.0.0.1:${s.address().port}` }));
});

const ENROLLED = JSON.stringify({
  enrolled: ['health-careers-exploration'], lessons: ['hce-1-l1'], checks: {}, activities: {},
  artifacts: {}, preTest: {}, postTest: {}, postAttempts: {}, capstone: {}, credentials: {},
  courseExam: {}, attestation: {},
});

(async () => {
  const { s, base } = await serve();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));

  const json = (b) => ({ status: 200, contentType: 'application/json',
    headers: { 'access-control-allow-origin': base, 'access-control-allow-credentials': 'true' }, body: JSON.stringify(b) });
  await page.route('**/api/**', (r) => {
    const u = r.request().url();
    if (r.request().method() === 'OPTIONS') return r.fulfill({ status: 204, headers: {
      'access-control-allow-origin': base, 'access-control-allow-credentials': 'true',
      'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
    if (u.includes('/api/client/me')) return r.fulfill({ status: 401, contentType: 'application/json',
      headers: { 'access-control-allow-origin': base, 'access-control-allow-credentials': 'true' }, body: '{}' });
    if (u.includes('/api/context/hello')) return r.fulfill(json({ visitorId: 'vid_1' }));
    if (u.includes('/api/public/academy-visibility')) return r.fulfill(json({ overrides: {} }));
    if (u.includes('/api/public/events')) return r.fulfill(json([]));
    if (u.includes('/api/public/content-library')) return r.fulfill(json({ items: [] }));
    return r.fulfill(json({}));
  });

  await page.goto(base + '/academy', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);

  const cards = () => page.locator('main article').count();
  const all = await cards();
  expect(all > 1, `the catalogue lists pathways (found ${all})`);

  // 1. Search is the Academy's own, and it narrows the catalogue.
  const box = page.locator('main input[type="search"]');
  expect(await box.count() === 1, 'the Academy has a search of its own');
  await box.fill('unstoppable');
  await page.waitForTimeout(800);
  const narrowed = await cards();
  expect(narrowed > 0 && narrowed < all, `search narrows the catalogue (${all} to ${narrowed})`);
  const said = await page.locator('main [role="status"]').first().textContent();
  expect(/match/i.test(said || ''), `the result is said in words (got "${(said || '').trim().slice(0, 60)}")`);

  // 2. A search that finds nothing says so, rather than showing an empty grid.
  await box.fill('zzzznotathing');
  await page.waitForTimeout(800);
  expect(await cards() === 0, 'a search with no matches shows no cards');
  const none = await page.locator('main [role="status"]').first().textContent();
  expect(/nothing matches/i.test(none || ''), 'a search with no matches says nothing matches');

  // 3. Show everything puts the catalogue back.
  await page.locator('main [role="status"] button:has-text("Show everything")').click();
  await page.waitForTimeout(800);
  expect(await cards() === all, `Show everything restores the catalogue (${await cards()} of ${all})`);

  // 4. Accessibility floors, checked here because nothing else can see them.
  const small = await page.evaluate(() => [...document.querySelectorAll('main button, main a, main input')]
    .filter((e) => { const b = e.getBoundingClientRect(); return b.height > 0 && (b.height < 24 || b.width < 24); })
    .map((e) => `${e.textContent.trim().slice(0, 24)} ${Math.round(e.getBoundingClientRect().height)}px`));
  expect(small.length === 0, `every target clears 24px (offenders: ${small.join(', ') || 'none'})`);

  const muted = await page.evaluate(() => {
    const card = document.querySelector('main article');
    if (!card) return null;
    return [...card.querySelectorAll('p')].map((e) => getComputedStyle(e).color);
  });
  // zinc-500 is rgb(113,113,122) and measures 4.36:1 on the card gradient, under AA.
  expect(!(muted || []).includes('rgb(113, 113, 122)'), 'no card text uses the grey that fails AA on the card surface');

  // 5. A learner already in a pathway is shown their own work before the pitch.
  await page.evaluate((v) => localStorage.setItem('hmc_academy_v2_guest', v), ENROLLED);
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const order = await page.evaluate(() => {
    const yours = [...document.querySelectorAll('main h2')].find((h) => /your learning/i.test(h.textContent));
    const paths = [...document.querySelectorAll('main h2')].find((h) => /^pathways$/i.test(h.textContent.trim()));
    return { hasYours: !!yours, yoursTop: yours ? Math.round(yours.getBoundingClientRect().top + window.scrollY) : -1,
      pathsTop: paths ? Math.round(paths.getBoundingClientRect().top + window.scrollY) : -1 };
  });
  expect(order.hasYours, 'a learner in a pathway is shown Your learning');
  expect(order.yoursTop > 0 && order.yoursTop < order.pathsTop, `Your learning comes before the catalogue (${order.yoursTop} vs ${order.pathsTop})`);
  expect(order.yoursTop < 900, `Your learning is reachable without hunting for it (top ${order.yoursTop}px)`);

  expect(errors.length === 0, `no page errors (${errors.slice(0, 2).join(' | ') || 'none'})`);

  await browser.close(); s.close();
  console.log(fail.length ? `\n${fail.length} FAILED` : '\nacademy catalogue: all checks passed');
  process.exit(fail.length ? 1 : 0);
})();
