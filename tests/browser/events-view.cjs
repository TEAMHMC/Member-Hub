// The Events tab, against the same events the Event Finder shows.
//
// Three faults, all reported from the live Hub. The panel was a fixed 580px box, which left
// most of a tall screen empty and squashed the map: fitBounds has to zoom out far enough to
// hold every pin, and in a short wide box that meant the whole of southern California for
// events that are all in Los Angeles. And every pin was Leaflet's default blue, so the map
// carried no information beyond location, while the same events on the Event Finder are
// coloured by programme.
//
//   npm run test:render:events
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

// Programmes as the live feed reports them, with two that must get distinct colours and one
// unknown that must fall back rather than break.
const EVENTS = [
  { id: 'e1', title: 'Wellness A', date: '2026-10-01', location: 'Los Angeles', lat: 34.05, lng: -118.24, program: 'Community Wellness' },
  { id: 'e2', title: 'Fair B', date: '2026-10-02', location: 'Los Angeles', lat: 34.10, lng: -118.33, program: 'Community Fair' },
  { id: 'e3', title: 'Meeting C', date: '2026-10-03', location: 'Santa Clarita', lat: 34.39, lng: -118.54, program: 'Meeting' },
  { id: 'e4', title: 'Unknown D', date: '2026-10-04', location: 'Los Angeles', lat: 34.02, lng: -118.28, program: 'Something Nobody Mapped' },
  // Never geocoded. 0,0 is not a place and must not be pinned in the Gulf of Guinea.
  { id: 'e5', title: 'Ungeocoded E', date: '2026-10-05', location: 'TBD', lat: 0, lng: 0, program: 'Community Wellness' },
];

(async () => {
  const { s, base } = await serve();
  const browser = await chromium.launch();
  const H = { 'access-control-allow-origin': base, 'access-control-allow-credentials': 'true' };
  const json = (b) => ({ status: 200, contentType: 'application/json', headers: H, body: JSON.stringify(b) });

  const open = async (viewport) => {
    const page = await browser.newPage({ viewport });
    await page.route('**/api/**', (r) => {
      const u = r.request().url();
      if (r.request().method() === 'OPTIONS') return r.fulfill({ status: 204, headers: { ...H, 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
      if (u.includes('/api/client/me')) return r.fulfill({ status: 401, contentType: 'application/json', headers: H, body: '{}' });
      if (u.includes('/api/public/events')) return r.fulfill(json(EVENTS));
      return r.fulfill(json({}));
    });
    await page.goto(`${base}/events`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    return page;
  };

  // 1. The panel uses the screen it is given, and never runs past the fold.
  for (const vh of [900, 1000, 1400, 1900]) {
    const page = await open({ width: 1440, height: vh });
    const m = await page.evaluate(() => {
      const el = document.getElementById('event-map').getBoundingClientRect();
      return { h: Math.round(el.height), bottom: Math.round(el.bottom), vh: window.innerHeight };
    });
    expect(m.bottom <= m.vh + 2, `${vh}px tall: the panel ends within the fold (bottom ${m.bottom})`);
    expect(m.h >= 440, `${vh}px tall: the panel is worth looking at (${m.h}px)`);
    if (vh >= 1400) expect(m.h >= 800, `${vh}px tall: it grows into a tall screen (${m.h}px)`);
    await page.close();
  }

  // 2. Pins say which programme an event belongs to, in the Event Finder's colours.
  const page = await open({ width: 1440, height: 1200 });
  await page.locator('button:has-text("Map")').first().click();
  await page.waitForTimeout(3000);
  const pins = await page.evaluate(() =>
    [...document.querySelectorAll('.hmc-event-pin svg')].map((s) => s.getAttribute('fill')));

  expect(pins.length === 4, `only geocoded events are pinned, 4 of 5 (got ${pins.length})`);
  expect(pins.includes('#db2777'), 'Community Wellness is pink, as on the Event Finder');
  expect(pins.includes('#ea580c'), 'Community Fair is orange, as on the Event Finder');
  expect(pins.includes('#0d9488'), 'Meeting is teal, as on the Event Finder');
  expect(pins.includes('#4b5563'), 'an unmapped programme falls back rather than breaking');
  expect(new Set(pins).size === 4, `four programmes, four colours (got ${new Set(pins).size})`);
  expect(!pins.includes('#3388ff'), 'no default Leaflet blue is left');

  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.waitForTimeout(300);
  expect(errors.length === 0, `no page errors (${errors.slice(0, 2).join(' | ') || 'none'})`);

  await browser.close(); s.close();
  console.log(fail.length ? `\n${fail.length} FAILED` : '\nevents view: all checks passed');
  process.exit(fail.length ? 1 : 0);
})();
