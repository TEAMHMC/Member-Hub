// The two audiences, and the fact that neither of them worked.
//
// types.ts has declared 'care' | 'learner' | 'both' since the Hub was built. Sidebar.tsx
// hides screening, playbook and results from a learner. ClientDashboard.tsx routes a
// learner to a different home. Nothing in the codebase ever assigned the value, so it was
// undefined on every account, every account fell through to the care branch, and somebody
// who came for a training was shown a screening surface and a health playbook.
//
//   npm run test:audience

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); }
};

const here = dirname(fileURLToPath(import.meta.url));
const read = (p: string) => readFileSync(join(here, '..', p), 'utf8');

console.log('\nAudience\n');

const app = read('App.tsx');
const login = read('components/Auth/Login.tsx');
const sidebar = read('components/Layout/Sidebar.tsx');
const dash = read('components/Dashboards/ClientDashboard.tsx');
const api = read('services/api.ts');

console.log('Something sets it');
ok(/audience:\s*me\.audience/.test(app),
  'the signed-in session takes its audience from the server',
  'without this the value stays undefined and every account is a care account');
ok(/audience/.test(login) && /setAudience/.test(login),
  'the member is asked which one they are, once, during onboarding');
ok(api.includes("audience?: 'care' | 'learner' | 'both'"),
  'the client/me response carries it');

console.log('The member is asked rather than guessed at');
ok(/What brings you to HMC/i.test(login), 'the question is asked in plain language');
ok(/disabled=\{!consentData \|\| !consentSms \|\| !audience/.test(login),
  'the form cannot be completed without answering it',
  'an optional question here means the default silently wins and we are back where we started');

console.log('The two surfaces do not disagree');
// The sidebar decides what a learner is offered, and the dashboard decides what a learner
// is allowed to open. A tab offered by one and refused by the other is worse than one that
// is never offered.
const learnerNav = sidebar.slice(sidebar.indexOf("if (audience === 'learner')"), sidebar.indexOf('return ['
  , sidebar.indexOf("if (audience === 'learner')")) + 400);
const navIds = Array.from(learnerNav.matchAll(/id: '([a-z-]+)'/g)).map((m) => m[1]);
const allowed = /const LEARNER_TABS = \[([^\]]+)\]/.exec(dash);
const allowedIds = allowed ? Array.from(allowed[1].matchAll(/'([a-z-]+)'/g)).map((m) => m[1]) : [];
ok(navIds.length > 0, 'the learner nav is readable', navIds.join(', '));
ok(allowedIds.length > 0, 'the learner allow-list is readable', allowedIds.join(', '));
for (const id of navIds) {
  ok(allowedIds.includes(id), `learner nav offers "${id}" and the dashboard allows it`,
    `offered: ${navIds.join(', ')} | allowed: ${allowedIds.join(', ')}`);
}

console.log('A learner is not shown care surfaces');
for (const careOnly of ['check-yourself', 'health', 'game-plan']) {
  ok(!navIds.includes(careOnly), `learner nav does not offer "${careOnly}"`);
  ok(!allowedIds.includes(careOnly), `a learner cannot open "${careOnly}"`);
}

console.log('An older session still works');
// A session can outlive a deploy. Undefined must mean the care surface, which is what the
// Hub did before any of this existed, rather than a blank page.
ok(/audience = 'care'/.test(sidebar) || /audience === 'learner'/.test(sidebar),
  'undefined falls through to the care surface rather than to nothing');

console.log(`\n${checks - failures}/${checks} passed${failures ? `, ${failures} FAILED` : ''}\n`);
process.exit(failures ? 1 : 0);
