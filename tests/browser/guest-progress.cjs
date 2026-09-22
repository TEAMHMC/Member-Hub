// A visitor's learning has to survive the moment they create an account.
//
// Everything a visitor completes is filed under the literal id 'guest'. The routine that
// carries progress onto a new account only ever looked for keys shaped `usr_`, so it
// never saw that one: somebody who worked through three lessons and then signed up had
// every one of them discarded at exactly the moment they committed to HMC. Nothing in
// the type check or the build can see that, so it is checked here.
//
//   npm run test:render:guest
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

// One finished lesson, written the way the Academy writes it.
const GUEST_STATE = JSON.stringify({
  enrolled: ['health-careers-exploration'],
  lessons: ['hce-1-l1'],
  checks: {}, activities: {}, artifacts: {},
  preTest: {}, postTest: {}, postAttempts: {}, capstone: {}, credentials: {},
  courseExam: {}, attestation: {},
});

(async () => {
  const { s, base } = await serve();
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1340, height: 1000 } });
  const page = await ctx.newPage();

  // Nobody is signed in yet, so the Hub renders as a visitor.
  let identified = false;
  const json = (b) => ({ status: 200, contentType: 'application/json',
    headers: { 'access-control-allow-origin': base, 'access-control-allow-credentials': 'true' }, body: JSON.stringify(b) });
  await page.route('**/api/**', (r) => {
    const u = r.request().url();
    if (r.request().method() === 'OPTIONS') return r.fulfill({ status: 204, headers: {
      'access-control-allow-origin': base, 'access-control-allow-credentials': 'true',
      'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
    if (u.includes('/api/client/me')) {
      if (!identified) return r.fulfill({ status: 401, contentType: 'application/json',
        headers: { 'access-control-allow-origin': base, 'access-control-allow-credentials': 'true' }, body: '{}' });
      return r.fulfill(json({ identified: true, email: 'newmember@healthmatters.clinic',
        audience: 'learner', profile: { firstName: 'Sam', lastName: 'Ruiz' }, staff: null,
        credits: null, referrals: [], nextActions: [], snapshot: null }));
    }
    if (u.includes('/api/context/hello')) return r.fulfill(json({ visitorId: 'vid_1' }));
    if (u.includes('/api/public/academy-visibility')) return r.fulfill(json({ overrides: {} }));
    if (u.includes('/api/public/events')) return r.fulfill(json([]));
    if (u.includes('/api/public/content-library')) return r.fulfill(json({ items: [] }));
    return r.fulfill(json({}));
  });

  await page.goto(base, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  // Stand in for the visitor's finished lesson.
  await page.evaluate((v) => localStorage.setItem('hmc_academy_v2_guest', v), GUEST_STATE);
  const seeded = await page.evaluate(() => localStorage.getItem('hmc_academy_v2_guest'));
  expect(!!seeded, 'a visitor\'s progress is filed under guest');

  // They create an account. The next load is the same browser, now identified.
  identified = true;
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const after = await page.evaluate(() => {
    const keys = Object.keys(localStorage).filter((k) => k.startsWith('hmc_academy_v2_'));
    const member = keys.find((k) => k.startsWith('hmc_academy_v2_usr_'));
    return { keys, member, memberValue: member ? localStorage.getItem(member) : null,
      guestLeft: localStorage.getItem('hmc_academy_v2_guest') };
  });

  expect(!!after.member, `the account has a transcript of its own (keys: ${after.keys.join(', ') || 'none'})`);
  expect(after.memberValue === GUEST_STATE, 'the finished lesson came with them');
  expect(after.guestLeft === null, 'the visitor copy is let go, so the next person does not inherit it');

  await browser.close(); s.close();
  console.log(fail.length ? `\n${fail.length} FAILED` : '\nguest progress: all checks passed');
  process.exit(fail.length ? 1 : 0);
})();
