// A course's position is where it sits, not a number somebody maintains by hand.
//
// `num` is typed into the catalogue and duplicates what the array already knows, so it goes
// stale the moment a pathway is split or reordered. The facilitator training kept num 2
// after it became the only course in its pathway, and the card read "Course 2 of 1".
//
// The guided start had the same shape of fault: a date typed in as a display string cannot
// expire, so on 23 September the Health Careers pathway was still advertising a start of
// 1 September, under copy promising a passed date would be replaced.
//
//   node tests/browser/course-ordinal.cjs
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

(async () => {
  const { s, base } = await serve();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1340, height: 1100 } });
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
      headers: { 'access-control-allow-origin': base }, body: '{}' });
    if (u.includes('/api/context/hello')) return r.fulfill(json({ visitorId: 'v1' }));
    if (u.includes('/api/public/academy-visibility')) return r.fulfill(json({ overrides: {} }));
    // No scheduled sessions, which is the state production is in today.
    if (u.includes('/api/public/academy-sessions')) return r.fulfill(json({ sessions: [] }));
    if (u.includes('/api/public/events')) return r.fulfill(json([]));
    if (u.includes('/api/public/content-library')) return r.fulfill(json({ items: [] }));
    return r.fulfill(json({}));
  });

  const ordinals = async (pathwayId) => {
    await page.goto(`${base}/academy/pathway/${pathwayId}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1800);
    return page.evaluate(() => [...document.querySelectorAll('main article')]
      .map((a) => (a.textContent.match(/Course\s+(\d+)\s+of\s+(\d+)/i) || []).slice(1, 3).join(' of '))
      .filter(Boolean));
  };

  // 1. The reported defect.
  const facilitator = await ordinals('unstoppable-facilitator');
  expect(facilitator.length === 1, `the facilitator pathway shows one course (got ${facilitator.length})`);
  expect(facilitator[0] === '1 of 1', `it reads "Course 1 of 1", not "2 of 1" (got "${facilitator[0]}")`);

  // 2. The rule, across every pathway: positions run 1..n with no gaps and no overshoot.
  const PATHWAYS = ['health-careers-exploration', 'field-based-community-health', 'mentor-leader',
                    'clinical-exposure-simulation', 'internships-fellowships', 'unstoppable-facilitator'];
  for (const id of PATHWAYS) {
    const got = await ordinals(id);
    if (!got.length) { expect(false, `${id}: renders course cards`); continue; }
    const want = got.map((_, i) => `${i + 1} of ${got.length}`);
    expect(JSON.stringify(got) === JSON.stringify(want),
      `${id}: positions run 1..${got.length}`, );
  }

  // 3. A guided start must be a real upcoming session, never a string that cannot expire.
  await page.goto(`${base}/academy/pathway/health-careers-exploration`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1800);
  const guided = await page.evaluate(() => {
    const el = [...document.querySelectorAll('main *')].find((e) => /next guided start/i.test(e.textContent || '') && e.children.length === 0);
    return el ? (el.parentElement?.textContent || '') : null;
  });
  expect(guided === null, `no guided start is shown when nothing is scheduled (got ${JSON.stringify((guided || '').slice(0, 60))})`);

  expect(errors.length === 0, `no page errors (${errors.slice(0, 2).join(' | ') || 'none'})`);

  await browser.close(); s.close();
  console.log(fail.length ? `\n${fail.length} FAILED` : '\ncourse ordinals and guided start: all checks passed');
  process.exit(fail.length ? 1 : 0);
})();
