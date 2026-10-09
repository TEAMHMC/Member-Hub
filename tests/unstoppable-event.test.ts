// The Unstoppable Experience is an event, not a training.
//
// It is a live monthly hour open to everyone, with nothing to finish and no credential. It had been registered in the Academy as a
// pathway with a participation credential, which listed an open community hour beside coursework and licensed continuing education.
//
//   npm run test:unstoppable-event

import { PATHWAYS } from '../components/Academy/catalog';
import { parse, toPath } from '../services/route';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => { checks++; if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); } };

console.log('\nThe Unstoppable Experience\n');
const ids = PATHWAYS.map((p) => p.id);
const courses = PATHWAYS.flatMap((p) => p.courses.map((c) => c.id));
ok(!ids.includes('unstoppable-community'), 'the Academy does not list the Experience as a pathway', ids.join(', '));
ok(!courses.includes('unstoppable-experience'), 'nor as a course');
ok(!PATHWAYS.some((p) => /Unstoppable Experience Participant/.test(p.credentialTitle || '')), 'there is no participation credential for attending an event');
ok(ids.includes('unstoppable-ce') && ids.includes('unstoppable-facilitator'), 'the two real Unstoppable trainings are still there: continuing education and facilitator training', ids.join(', '));
ok(parse('/academy/course/unstoppable-community/unstoppable-experience').tab === 'events', 'the old course address opens Events, not a dead end');
ok(parse('/academy/pathway/unstoppable-community').tab === 'events', 'so does the old pathway address');
ok(parse('/academy/pathway/unstoppable-ce').tab === 'academy', 'a real pathway address is untouched');
ok(toPath({ tab: 'events' }) === '/events', 'Events has its own address');
console.log(failures === 0 ? `\n  ${checks} checks passed\n` : `\n  ${failures} of ${checks} checks failed\n`);
process.exit(failures === 0 ? 0 : 1);
