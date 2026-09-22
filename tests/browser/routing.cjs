// Prove the Hub has addresses, instead of trusting that it compiled.
//
// The Academy is eight levels deep and all of it used to be React state at one URL, so
// the browser Back button left the Hub rather than stepping back through it, a reload
// lost the member's place, and no course could be linked to. None of that is visible to
// a type check or a build, so it is checked here against the built output served the way
// GitHub Pages serves it, 404.html fallback included.
//
//   npm run test:render:routing
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const DIST = path.resolve(__dirname, '../../dist');
const fail = [];
const expect = (c, l) => { console.log(`${c ? '  ok  ' : '  FAIL'}  ${l}`); if (!c) fail.push(l); };

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png' };

// Pages serves a file when it has one and 404.html when it does not. Anything that
// serves index.html for every path would hide the very defect this is checking.
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

(async () => {
  if (!fs.existsSync(path.join(DIST, '404.html'))) {
    console.log('  FAIL  dist/404.html is missing. Run npm run build first.');
    process.exit(1);
  }
  const { s, base } = await serve();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1340, height: 1000 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));

  // The Hub is checked here, not the portal, so the API is answered locally.
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

  const at = () => page.evaluate(() => ({
    path: location.pathname, title: document.title,
    head: (document.querySelector('main h1, main h2') || {}).textContent?.trim().slice(0, 60) || '',
  }));

  // 1. The root is still the root.
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  let v = await at();
  expect(v.path === '/', `root stays at / (got ${v.path})`);
  expect(/Member Hub/.test(v.title), `root is titled (got "${v.title}")`);

  // 2. A section move changes the address and names it.
  await page.locator('aside button:has-text("Academy")').first().click();
  await page.waitForTimeout(1200);
  v = await at();
  expect(v.path === '/academy', `Academy is at /academy (got ${v.path})`);
  expect(/Academy/.test(v.title), `Academy is titled (got "${v.title}")`);

  // 3. Depth inside the Academy is addressable.
  await page.locator('main button:has-text("See lessons")').first().click();
  await page.waitForTimeout(1200);
  v = await at();
  expect(/^\/academy\/pathway\/.+/.test(v.path), `pathway has its own address (got ${v.path})`);
  const pathwayPath = v.path;

  await page.locator('main button:has-text("See lessons")').first().click();
  await page.waitForTimeout(1200);
  v = await at();
  expect(/^\/academy\/course\/.+\/.+/.test(v.path), `course has its own address (got ${v.path})`);
  const coursePath = v.path;
  const courseHead = v.head;

  // 4. Back steps back through the Academy instead of leaving the Hub.
  await page.goBack(); await page.waitForTimeout(1200);
  v = await at();
  expect(v.path === pathwayPath, `Back returns to the pathway (got ${v.path})`);
  await page.goBack(); await page.waitForTimeout(1200);
  v = await at();
  expect(v.path === '/academy', `Back again returns to the Academy (got ${v.path})`);
  await page.goBack(); await page.waitForTimeout(1200);
  v = await at();
  expect(v.path === '/', `Back again returns Home, still inside the Hub (got ${v.path})`);

  // 5. Forward works too.
  await page.goForward(); await page.waitForTimeout(1200);
  v = await at();
  expect(v.path === '/academy', `Forward returns to the Academy (got ${v.path})`);

  // 6. A course address pasted cold resolves to that course, through the 404 fallback.
  const res = await page.goto(base + coursePath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  v = await at();
  expect(res.status() === 404, 'Pages serves the fallback for an unknown path (expected 404 status)');
  expect(v.path === coursePath, `a pasted course address stays put (got ${v.path})`);
  expect(v.head === courseHead, `a pasted course address opens that course (got "${v.head}")`);

  // 7. Reload holds the member's place.
  await page.reload({ waitUntil: 'networkidle' }); await page.waitForTimeout(1800);
  v = await at();
  expect(v.path === coursePath, `reload holds the address (got ${v.path})`);
  expect(v.head === courseHead, `reload holds the course (got "${v.head}")`);

  // 8. The training deep link still works, because the query is carried through.
  await page.goto(base + '/?training=unstoppable-ce', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  const kept = await page.evaluate(() => location.search);
  expect(kept.includes('training=unstoppable-ce'), `the training deep link survives (got "${kept}")`);

  // 9. One tap, one history entry.
  await page.goto(base, { waitUntil: 'networkidle' }); await page.waitForTimeout(1200);
  const before = await page.evaluate(() => history.length);
  await page.locator('aside button:has-text("Events")').first().click();
  await page.waitForTimeout(1500);
  const after = await page.evaluate(() => history.length);
  expect(after - before === 1, `one tap files one history entry (grew by ${after - before})`);

  expect(errors.length === 0, `no page errors (${errors.slice(0, 2).join(' | ') || 'none'})`);

  await browser.close(); s.close();
  console.log(fail.length ? `\n${fail.length} FAILED` : '\nrouting: all checks passed');
  process.exit(fail.length ? 1 : 0);
})();
