// How a learner's results move between this browser and the server, and when a baseline is owed.
//
// The server keeps results per learner so another device, a private window or cleared site data
// does not lose them. These cover the rules that decide what survives a merge and who has to
// take a baseline before the lessons.
//
//   npm run test:outcomes-sync

import { PATHWAYS, pathwayById } from '../components/Academy/catalog';
import type { LearnerState } from '../components/Academy/progress';
import {
  baselineRequired, baselineOffered, lessonsStarted, toServerRecord, mergeServerRecord, syncFingerprint,
} from '../components/Academy/outcomesSync';
import type { AcademyServerRecord } from '../services/api';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); }
};

const empty = (): LearnerState => ({
  enrolled: [], lessons: [], checks: {}, activities: {}, artifacts: {}, preTest: {}, postTest: {},
  postAttempts: {}, capstone: {}, credentials: {}, courseExam: {}, attestation: {},
});
const rec = (p: Partial<AcademyServerRecord>): AcademyServerRecord =>
  ({ enrolled: [], preTest: {}, postTest: {}, postAttempts: {}, courseExam: {}, ...p });

// A real pathway with a baseline, and one lesson id from it.
const withBaseline = PATHWAYS.find((p) => p.preTest?.length && p.courses[0]?.lessons[0]);
if (!withBaseline) throw new Error('no pathway with a baseline in the catalogue');
const P = withBaseline;
const lesson = P.courses[0].lessons[0].id;
const noBaseline = PATHWAYS.find((p) => !p.preTest?.length);

console.log('\nWho must take the baseline first\n');
ok(baselineRequired(P, empty()), 'a new learner in a pathway with a baseline must take it before the lessons');
ok(!baselineRequired(P, { ...empty(), preTest: { [P.id]: { score: 40, attempt: 1, at: '2026-10-01T00:00:00Z' } } }),
  'once it is taken it is no longer required');
ok(!baselineRequired(P, { ...empty(), lessons: [lesson] }),
  'somebody already partway through is not locked out, so the requirement cannot strand them');
ok(baselineOffered(P, { ...empty(), lessons: [lesson] }), 'but they are still offered the baseline');
if (noBaseline) ok(!baselineRequired(noBaseline, empty()) && !baselineOffered(noBaseline, empty()),
  'a pathway with no baseline never asks for one');
ok(lessonsStarted(P, { lessons: [lesson] }) && !lessonsStarted(P, { lessons: [] }), 'lessons started is read from the lesson ids');

console.log('\nWhat goes to the server\n');
const s1: LearnerState = { ...empty(), enrolled: [P.id], preTest: { [P.id]: { score: 30, attempt: 1, at: '2026-10-01T00:00:00Z', beforeLearning: true } } };
const r1 = toServerRecord(s1);
ok(r1.preTest[P.id].score === 30 && r1.preTest[P.id].beforeLearning === true, 'a baseline goes up with its score and that it was clean');
ok(!('lessons' in r1) && !('checks' in r1) && !('activities' in r1) && !('artifacts' in r1) && !('capstone' in r1),
  'nothing a learner typed or answered goes up, only ids, scores and times');
const legacyClean = toServerRecord({ ...empty(), preTest: { [P.id]: { score: 50, attempt: 1, at: '2026-09-01T00:00:00Z' } } });
ok(legacyClean.preTest[P.id].beforeLearning === true, 'a legacy baseline with no lessons done since is vouched for as clean');
const legacyLate = toServerRecord({ ...empty(), lessons: [lesson], preTest: { [P.id]: { score: 50, attempt: 1, at: '2026-09-01T00:00:00Z' } } });
ok(legacyLate.preTest[P.id].beforeLearning === false, 'a legacy baseline with lessons done is not vouched for, so it is not counted');

console.log('\nMerging the server into a device\n');
const server = rec({
  enrolled: [P.id],
  preTest: { [P.id]: { score: 35, attempt: 1, at: '2026-10-01T00:00:00Z', beforeLearning: true } },
  postTest: { [P.id]: { score: 85, attempt: 2, at: '2026-10-20T00:00:00Z' } },
  postAttempts: { [P.id]: 2 },
});
const fresh = mergeServerRecord(empty(), server);
ok(fresh.enrolled.includes(P.id), 'a new browser regains enrollment');
ok(fresh.preTest[P.id].score === 35, 'a new browser regains the baseline');
ok(fresh.postTest[P.id].score === 85 && fresh.postAttempts[P.id] === 2, 'a new browser regains the post-test and its attempt count');
ok(!baselineRequired(P, fresh), 'and is not asked to take the baseline again');

const stale = mergeServerRecord({ ...empty(), postTest: { [P.id]: { score: 60, attempt: 1, at: '2026-09-01T00:00:00Z' } } }, server);
ok(stale.postTest[P.id].score === 85, 'the better score wins over an older lower one');
const higherLocal = mergeServerRecord({ ...empty(), postTest: { [P.id]: { score: 95, attempt: 3, at: '2026-11-01T00:00:00Z' } } }, server);
ok(higherLocal.postTest[P.id].score === 95, 'a higher local score is never lowered by the server copy');
const keep = mergeServerRecord({ ...empty(), preTest: { [P.id]: { score: 10, attempt: 1, at: '2026-12-01T00:00:00Z', beforeLearning: true } } }, server);
ok(keep.preTest[P.id].score === 35, 'the earlier baseline stands over a later one');
const cleanWins = mergeServerRecord({ ...empty(), preTest: { [P.id]: { score: 90, attempt: 1, at: '2026-09-01T00:00:00Z', beforeLearning: false } } }, server);
ok(cleanWins.preTest[P.id].score === 35, 'a clean baseline beats an earlier one taken after learning began');
const same = empty();
ok(mergeServerRecord(same, rec({})) === same, 'merging a record that adds nothing returns the same state, so there is no needless save');
ok(syncFingerprint(fresh) === syncFingerprint(mergeServerRecord(fresh, server)), 'merging twice changes nothing');
ok(pathwayById(P.id) === P, 'the pathway used here is the live catalogue entry');

console.log(`\n${checks - failures}/${checks} passed${failures ? `, ${failures} FAILED` : ''}\n`);
process.exit(failures ? 1 : 0);
