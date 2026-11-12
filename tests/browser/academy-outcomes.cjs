// Drives the real Academy, profile and staff console through the outcomes story, against a
// stateful fake of the server's record routes.
//
//   npx vite --port 5321 --strictPort &
//   node tests/browser/academy-outcomes.cjs
//
// Not in CI, for the reason given in the other browser checks. The server's merge and report
// rules are tested where they are enforced, in the portal. This checks the half a person
// sees: that enrolling leads into the baseline, that lessons wait for it, that the result
// follows the learner to a second device, that it shows on their profile, and that staff
// can read it.
const { chromium } = require('playwright');
const BASE = process.env.HUB_BASE || 'http://127.0.0.1:5321';
const OUT = process.env.SHOT_DIR || require('os').tmpdir();
const fail = [];
let current = null;
const expect = async (c, l) => {
  console.log(`${c ? '  ok  ' : '  FAIL'}  ${l}`);
  if (!c) {
    fail.push(l);
    if (current) {
      const where = await current.evaluate(() => {
        const h = Array.from(document.querySelectorAll('h1, h2')).map((e) => (e.textContent || '').trim()).filter(Boolean).slice(0, 3).join(' / ');
        const b = Array.from(document.querySelectorAll('button')).map((e) => (e.textContent || '').trim().replace(/\s+/g, ' ')).filter((t) => t && t.length < 40).slice(-8).join(' | ');
        const st = Object.entries(localStorage).filter(([k]) => k.startsWith('hmc_academy_v2_')).map(([k, v]) => { try { const j = JSON.parse(v); return `${k.slice(-8)}: enrolled=${JSON.stringify(j.enrolled)} preTest=${JSON.stringify(j.preTest)} lessons=${(j.lessons || []).length}`; } catch { return k; } }).join(' ; ');
        const t = (document.querySelector('main') || document.body).innerText.replace(/\s+/g, ' ').slice(0, 700);
        return `url=${location.pathname} headings=[${h}] storage={${st}}\n          text: ${t}`;
      }).catch(() => 'page unavailable');
      console.log('          ' + where);
    }
  }
};

const PATHWAY = 'Health Careers Exploration';
const PATHWAY_ID = 'health-careers-exploration';
const EMAIL = 'member@example.com';

// The server, kept here so two browsers talk to the same one.
const server = { records: {}, puts: [], outcomesReads: 0, csvReads: 0 };
const empty = () => ({ enrolled: [], preTest: {}, postTest: {}, postAttempts: {}, courseExam: {} });

const mergeServer = (a, b) => {
  const out = empty();
  out.enrolled = [...new Set([...a.enrolled, ...b.enrolled])];
  for (const id of new Set([...Object.keys(a.preTest), ...Object.keys(b.preTest)])) {
    const x = a.preTest[id]; const y = b.preTest[id];
    out.preTest[id] = !x ? y : !y ? x : (Date.parse(y.at) < Date.parse(x.at) ? y : x);
  }
  for (const id of new Set([...Object.keys(a.postTest), ...Object.keys(b.postTest)])) {
    const x = a.postTest[id]; const y = b.postTest[id];
    out.postTest[id] = !x ? y : !y ? x : (y.score > x.score ? y : x);
  }
  for (const id of new Set([...Object.keys(a.postAttempts), ...Object.keys(b.postAttempts)])) out.postAttempts[id] = Math.max(a.postAttempts[id] || 0, b.postAttempts[id] || 0);
  return out;
};

const ADMIN = { role: 'Hub Administrator', name: 'An Admin', email: 'admin@healthmatters.clinic', isAdmin: true,
  capabilities: ['academy', 'content', 'support', 'staffAdmin', 'curriculum', 'approve'] };
const LEAD = { role: 'Curriculum Lead', name: 'A Lead', email: 'lead@healthmatters.clinic', isAdmin: false,
  capabilities: ['academy', 'content', 'support', 'curriculum'] };

const OUTCOMES = {
  generatedAt: '2026-11-12T20:00:00Z', learnerCount: 3, truncated: false,
  rows: [
    { email: 'a@x.org', name: 'Ana Student', pathwayId: PATHWAY_ID, enrolled: true, baselineScore: 30, baselineAt: '2026-10-01T00:00:00Z', baselineClean: true, postScore: 80, postAt: '2026-10-20T00:00:00Z', postAttempts: 2, gain: 50, gainCounts: true, passed: true },
    { email: 'b@x.org', name: 'Ben Learner', pathwayId: PATHWAY_ID, enrolled: true, baselineScore: 70, baselineAt: '2026-10-05T00:00:00Z', baselineClean: false, postScore: 75, postAt: '2026-10-25T00:00:00Z', postAttempts: 1, gain: 5, gainCounts: false, passed: false },
    { email: 'c@x.org', name: '', pathwayId: PATHWAY_ID, enrolled: true, baselineScore: null, baselineAt: null, baselineClean: null, postScore: null, postAt: null, postAttempts: 0, gain: null, gainCounts: false, passed: null },
  ],
  totals: [{ pathwayId: PATHWAY_ID, enrolled: 3, tookBaseline: 2, tookPost: 2, measured: 1, meanBaseline: 30, meanPost: 80, meanGain: 50, passed: 1 }],
  note: 'Scores are calculated in the learner\'s browser and are not re-scored here. Averages cover only learners with a baseline taken before any lesson and a post-test.',
};

const wire = async (ctx, who) => {
  const staff = who && who.capabilities ? who : null;
  const email = staff ? staff.email : EMAIL;
  await ctx.route('**/api/**', (r) => {
    const req = r.request(); const u = new URL(req.url());
    const cors = { 'access-control-allow-origin': BASE, 'access-control-allow-credentials': 'true', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' };
    if (req.method() === 'OPTIONS') return r.fulfill({ status: 204, headers: cors });
    const json = (body, status = 200) => r.fulfill({ status, contentType: 'application/json', headers: cors, body: JSON.stringify(body) });
    const p = u.pathname;
    if (p === '/api/client/me') return json({ identified: true, email, profile: { firstName: staff ? 'Admin' : 'Test', lastName: staff ? '' : 'Member' }, staff, credits: { balance: 0, lifetimeEarned: 0, lifetimeSpent: 0 }, referrals: [], nextActions: [] });
    if (p.includes('/context/hello')) return json({ visitorId: 'vid_x' });
    if (p === '/api/client/academy/record') {
      if (req.method() === 'GET') return json({ record: server.records[email] || empty() });
      const body = JSON.parse(req.postData() || '{}');
      server.puts.push(body.record);
      server.records[email] = mergeServer(server.records[email] || empty(), { ...empty(), ...body.record });
      return json({ record: server.records[email] });
    }
    if (p === '/api/hub/staff/overview') return json({ staff, academy: { configured: 0, hidden: 0, overrides: {} }, announcements: [] });
    if (p === '/api/hub/staff/academy-outcomes') { server.outcomesReads++; return json(OUTCOMES); }
    if (p === '/api/hub/staff/academy-outcomes.csv') { server.csvReads++; return r.fulfill({ status: 200, contentType: 'text/csv', headers: cors, body: 'email,name\na@x.org,Ana Student\n' }); }
    return json({});
  });
};

const text = (p) => p.evaluate(() => document.body.innerText);
const click = (p, re) => p.evaluate((src) => { const rx = new RegExp(src, 'i'); const h = Array.from(document.querySelectorAll('button, a')).find((e) => rx.test((e.textContent || '').trim()) && e.offsetParent !== null); if (h) { h.click(); return true; } return false; }, re.source);

const cardButton = async (p, which) => {
  await p.goto(BASE + '/academy'); await p.waitForTimeout(2500);
  return p.evaluate(([which, name]) => {
    const h = Array.from(document.querySelectorAll('h3')).find((e) => (e.textContent || '').trim() === name);
    let n = h;
    while (n && n.parentElement) {
      n = n.parentElement;
      const b = Array.from(n.querySelectorAll('button')).find((x) => (x.textContent || '').trim() === which);
      if (b) { b.click(); return true; }
    }
    return false;
  }, [which, PATHWAY]).then(async (ok) => { await p.waitForTimeout(1500); return ok; });
};

const takeBaseline = async (p) => {
  const n = await p.evaluate(() => document.querySelectorAll('div.space-y-2').length);
  for (let i = 0; i < n; i++) await p.evaluate((i) => { const g = document.querySelectorAll('div.space-y-2')[i]; const b = g && g.querySelector('button'); if (b) b.click(); }, i);
  await click(p, /^Submit baseline$/); await p.waitForTimeout(1200);
};

const enterConsole = async (page, staff) => {
  await page.goto(BASE); await page.waitForTimeout(1800);
  await click(page, /^Manage hub$/); await page.waitForTimeout(900);
};

(async () => {
  const browser = await chromium.launch();
  const errors = [];

  console.log('\nA new learner enrolls from the catalogue\n');
  const a = await browser.newContext({ viewport: { width: 1340, height: 1000 } });
  await wire(a, null);
  const p = await a.newPage(); current = p;
  p.on('pageerror', (e) => errors.push(String(e)));
  await expect(await cardButton(p, 'Enroll'), 'the catalogue shows an Enroll button on the pathway');
  current = p;
  let body = await text(p);
  await expect(/Before you begin/i.test(body) && /Baseline check/i.test(body), 'enrolling goes straight to the baseline, not to the pathway page');
  await p.screenshot({ path: `${OUT}/outcomes-1-baseline-first.png` });

  console.log('\nThey cannot skip it\n');
  await p.goto(BASE + '/academy'); await p.waitForTimeout(1500);
  await cardButton(p, 'Continue');
  body = await text(p);
  await expect(/Before you begin/i.test(body), 'continuing from the catalogue before taking it still lands on the baseline');

  console.log('\nThey take the baseline\n');
  await takeBaseline(p);
  await p.waitForTimeout(800);
  await expect(server.puts.length > 0, 'the result is sent to the server');
  const sent = server.puts[server.puts.length - 1];
  await expect(sent.preTest[PATHWAY_ID] && typeof sent.preTest[PATHWAY_ID].score === 'number', 'the server receives the baseline score');
  await expect(sent.preTest[PATHWAY_ID] && sent.preTest[PATHWAY_ID].beforeLearning === true, 'and that it was taken before any lesson');
  await expect(sent.enrolled.includes(PATHWAY_ID), 'and the enrollment');
  await expect(!JSON.stringify(sent).match(/answers|chosen|activities|artifacts/i), 'no answers or typed text are sent, only ids and scores');
  await click(p, /^Start the courses$/); await p.waitForTimeout(1200);
  body = await text(p);
  await expect(/Your knowledge growth/i.test(body) && /Baseline/i.test(body), 'the pathway page shows the baseline afterwards');
  await expect(!/Take your baseline/i.test(body), 'and no longer asks for it');
  await p.screenshot({ path: `${OUT}/outcomes-2-after-baseline.png` });

  console.log('\nThe same person on a second device\n');
  const b = await browser.newContext({ viewport: { width: 1340, height: 1000 } });
  await wire(b, null);
  const q = await b.newPage(); current = q;
  q.on('pageerror', (e) => errors.push(String(e)));
  await cardButton(q, 'See lessons');
  body = await text(q);
  await expect(!/Register and start/i.test(body), 'a new browser does not ask them to register again');
  await expect(/Your knowledge growth/i.test(body), 'a new browser shows the baseline taken on the first device');
  await expect(!/Take your baseline/i.test(body), 'and does not ask for the baseline a second time');
  await q.screenshot({ path: `${OUT}/outcomes-3-second-device.png` });

  console.log('\nTheir profile\n');
  await q.goto(BASE); await q.waitForTimeout(1500);
  await click(q, /^Profile$/); await q.waitForTimeout(1800);
  body = await text(q);
  await expect(/Your learning results/i.test(body), 'the profile has a learning results section');
  await expect(new RegExp(PATHWAY, 'i').test(body) && /Baseline/i.test(body) && /Post-test/i.test(body), 'it shows the pathway with baseline and post-test');
  await expect(/\d+%/.test(body.split(/your learning results/i)[1] || ''), 'and the baseline score');
  await q.screenshot({ path: `${OUT}/outcomes-4-profile.png`, fullPage: true });

  console.log('\nSomeone already partway through is not locked out\n');
  const c = await browser.newContext({ viewport: { width: 1340, height: 1000 } });
  await wire(c, null);
  server.records[EMAIL] = empty();
  const r = await c.newPage(); current = r;
  r.on('pageerror', (e) => errors.push(String(e)));
  await r.goto(BASE + '/academy'); await r.waitForTimeout(1500);
  const key = await r.evaluate(() => Object.keys(localStorage).find((k) => k.startsWith('hmc_academy_v2_')) || '');
  const uid = key.replace('hmc_academy_v2_', '') || (await q.evaluate(() => Object.keys(localStorage).find((k) => k.startsWith('hmc_academy_v2_')) || '').then((k) => k.replace('hmc_academy_v2_', '')));
  const lessonId = await r.evaluate(async () => (await (await fetch('/academy-courses.json')).json()).courses.find((c) => c.id).id);
  await expect(Boolean(uid), 'the browser holds a learner id to seed');
  // Enrolled, no baseline, and no lessons yet: the baseline is owed.
  await r.evaluate(([uid, id]) => localStorage.setItem(`hmc_academy_v2_${uid}`, JSON.stringify({ enrolled: [id] })), [uid, PATHWAY_ID]);
  await r.reload(); await r.waitForTimeout(1500);
  await cardButton(r, 'Continue');
  body = await text(r);
  await expect(/Before you begin/i.test(body), 'enrolled with no baseline and no lessons: continuing leads to the baseline');

  console.log('\nStaff report\n');
  const d = await browser.newContext({ viewport: { width: 1340, height: 1000 } });
  await wire(d, ADMIN);
  const s = await d.newPage(); current = s;
  s.on('pageerror', (e) => errors.push(String(e)));
  await enterConsole(s, ADMIN);
  body = await text(s);
  await expect(/Outcomes/i.test(body), 'a Hub Administrator is offered Outcomes');
  await click(s, /^Outcomes$/); await s.waitForTimeout(1200);
  body = await text(s);
  // The dev server runs effects twice under React StrictMode, so one or two. The point is that it loads and is not polled.
  await expect(server.outcomesReads >= 1 && server.outcomesReads <= 2, 'opening it asks the server for the report, and does not poll');
  await expect(/Ana Student/.test(body) && /Ben Learner/.test(body), 'individual learners are listed');
  await expect(/taken late/i.test(body), 'a baseline taken after learning began is marked as taken late');
  await expect(/Measured/i.test(body) && /\+50 pts/.test(body), 'the pathway average gain counts only the measured learner');
  await expect(/not re-scored here/i.test(body), 'the page says plainly that scores are calculated in the browser');
  await s.screenshot({ path: `${OUT}/outcomes-5-staff.png`, fullPage: true });
  const [dl] = await Promise.all([s.waitForEvent('download', { timeout: 5000 }).catch(() => null), click(s, /Download CSV/)]);
  await expect(Boolean(dl) && /academy-outcomes-.*\.csv/.test(dl ? dl.suggestedFilename() : ''), 'Download CSV produces a csv file');
  await expect(server.csvReads === 1, 'and asks the server for it');

  const e = await browser.newContext({ viewport: { width: 1340, height: 1000 } });
  await wire(e, LEAD);
  const t = await e.newPage(); current = t;
  t.on('pageerror', (x) => errors.push(String(x)));
  await enterConsole(t, LEAD);
  body = await text(t);
  await expect(!/Outcomes/i.test(body.replace(/Academy outcomes/gi, '')), 'a Curriculum Lead is not offered Outcomes, because it shows individual scores');

  console.log('\nOn a phone\n');
  const ph = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await wire(ph, null);
  const m = await ph.newPage();
  await cardButton(m, 'See lessons');
  await m.goto(BASE); await m.waitForTimeout(1200);
  await m.evaluate(() => window.scrollTo(0, 0));
  const overflow = await m.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
  await expect(!overflow, 'the Academy does not scroll sideways on a phone');
  await m.screenshot({ path: `${OUT}/outcomes-6-phone.png` });

  await expect(errors.length === 0, `no page errors${errors.length ? ': ' + errors.join(' | ').slice(0, 300) : ''}`);
  await browser.close();
  console.log(fail.length ? `\n${fail.length} FAILED` : '\nAll checks passed');
  process.exit(fail.length ? 1 : 0);
})();
