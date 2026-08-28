// Measures the rendered page for a published correction, not the structure.
//
// Structural assertions passed the whole time two earlier HMC designs were visibly broken,
// so this drives a real browser and reads what a member would actually see: the corrected
// prose in place of the catalogue's, its paragraphs intact, the module's knowledge check
// still there, a published section that matches no module surfaced rather than dropped,
// and the catalogue rendering normally when the endpoint is dead.
//
// Nothing in the app is stubbed. The backend is: the correction arrives through the real
// fetch in services/api.ts, intercepted at the network so the test controls what the
// portal would have published. Needs the Hub dev server on 5321.
// Run it with:
//   npx vite --port 5321 --strictPort &
//   npm run test:render
//
// Not in CI. It needs a running dev server and a downloaded browser
// (npx playwright install chromium), and a gate that needs two processes and a 200MB
// download is a gate people switch off. The unit gate in tests/overrides.test.ts runs on
// every push; this is what you run when you have changed how a correction looks.
const { chromium } = require('playwright');
const BASE = process.env.HUB_BASE || 'http://127.0.0.1:5321';
const OUT = process.env.SHOT_DIR || require('os').tmpdir();
const fail = [];
const expect = (c, l) => { console.log(`${c ? '  ok  ' : '  FAIL'}  ${l}`); if (!c) fail.push(l); };

const OVERRIDE = {
  content: '',
  version: 4,
  sections: [
    { heading: 'healthcare is a TEAM sport',
      body: 'FIXTURE REVIEWED PARAGRAPH ONE. A reviewer corrected this passage in the portal and it reached this page with no deployment.\n\nFIXTURE REVIEWED PARAGRAPH TWO, published after a blank line.' },
    { heading: 'A Section The Catalogue Does Not Have',
      body: 'FIXTURE ADDITION. This heading matches no module, so it renders on the course page instead of being dropped.' },
  ],
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1340, height: 1100 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));

  const json = (body) => ({ status: 200, contentType: 'application/json',
    headers: { 'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true' },
    body: JSON.stringify(body) });

  await page.route('**/api/**', async (route) => {
    const u = route.request().url();
    if (route.request().method() === 'OPTIONS') {
      return route.fulfill({ status: 204, headers: {
        'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true',
        'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
    }
    if (u.includes('/api/curriculum/hub-content')) return route.fulfill(json({ content: { 'hce-1': OVERRIDE }, count: 1 }));
    if (u.includes('/api/client/me')) return route.fulfill(json({
      email: 'render@healthmatters.clinic', profile: { firstName: 'Render' }, staff: null,
      credits: { balance: 0, transactions: [] }, referrals: [], nextActions: [] }));
    if (u.includes('/api/context/hello')) return route.fulfill(json({ visitorId: 'vid_render_check' }));
    return route.fulfill(json({}));
  });

  const clickText = (re) => page.evaluate((src) => {
    const rx = new RegExp(src, 'i');
    const els = Array.from(document.querySelectorAll('button, a, [role="button"]'));
    const hit = els.find((e) => rx.test((e.textContent || '').trim()) && e.offsetParent !== null);
    if (hit) { hit.click(); return (hit.textContent || '').trim().slice(0, 70); }
    return null;
  }, re.source);

  await page.goto(BASE);
  await page.waitForTimeout(1800);
  console.log('view:', (await page.evaluate(() => document.body.innerText)).slice(0, 90).replace(/\n/g, ' | '));

  // Enrol the way a member does, then come back in. The pathway page does not list its
  // courses until you are registered, and registering opens the baseline check first.
  console.log('clicked:', await clickText(/^academy$/));
  await page.waitForTimeout(900);
  console.log('clicked:', await clickText(/^See the lessons$/));
  await page.waitForTimeout(900);
  console.log('clicked:', await clickText(/^REGISTER AND START$/));
  await page.waitForTimeout(1100);
  // The baseline check opens on registering. Its back control is labelled with the
  // pathway title and returns to the pathway, which now lists its courses.
  console.log('clicked:', await clickText(/^Health Careers Exploration$/));
  await page.waitForTimeout(900);
  console.log('clicked:', await clickText(/The Health Professions Ecosystem/));
  await page.waitForTimeout(1000);

  let body = await page.evaluate(() => document.body.innerText);
  expect(/Also part of this course/i.test(body), 'course page shows the reviewed addition heading');
  expect(/A Section The Catalogue Does Not Have/i.test(body), 'the unmatched section is rendered, not dropped');
  expect(/FIXTURE ADDITION/i.test(body), 'the addition body text reaches the page');
  await page.evaluate(() => {
    const h = Array.from(document.querySelectorAll('h2')).find((e) => /Also part of this course/i.test(e.textContent || ''));
    if (h) h.scrollIntoView({ block: 'center' });
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/hub-course-addition.png` });

  console.log('clicked:', await clickText(/Healthcare is a team sport/));
  await page.waitForTimeout(1100);

  body = await page.evaluate(() => document.body.innerText);
  expect(/FIXTURE REVIEWED PARAGRAPH ONE/i.test(body), 'the corrected module renders the reviewed prose');
  expect(/FIXTURE REVIEWED PARAGRAPH TWO/i.test(body), 'a blank line became a second paragraph');
  const paraCount = await page.evaluate(() => Array.from(document.querySelectorAll('p'))
    .filter((p) => /FIXTURE REVIEWED/.test(p.textContent || '')).length);
  expect(paraCount === 2, `reviewed prose renders as two paragraphs (found ${paraCount})`);
  const knowledgeCheck = await page.evaluate(() => /knowledge check/i.test(document.body.innerText));
  expect(knowledgeCheck, 'the module still presents its knowledge check after the correction');
  const oldProse = await page.evaluate(() => /A team is not a hierarchy of importance/i.test(document.body.innerText));
  expect(!oldProse, 'the catalogue prose is replaced, not shown alongside the correction');
  await page.screenshot({ path: `${OUT}/hub-lesson-corrected.png`, fullPage: true });
  console.log('--- lesson text ---\n' + body.slice(0, 1200));

  // An unreachable endpoint must degrade to the catalogue, never to an error.
  await page.unroute('**/api/**');
  await page.route('**/api/curriculum/hub-content', (r) => r.abort());
  await page.route('**/api/**', (r) => r.fulfill(json({})));
  await page.goto(BASE);
  await page.waitForTimeout(1500);
  const fellBack = await page.evaluate(() => !/FIXTURE/i.test(document.body.innerText));
  expect(fellBack, 'a dead corrections endpoint leaves the page working with no fixture text');
  expect(errors.length === 0, `no uncaught page errors (${errors.join(' | ') || 'none'})`);

  await browser.close();
  console.log(fail.length ? `\n${fail.length} FAILED\n` : '\nall render checks passed\n');
  process.exit(fail.length ? 1 : 0);
})();
