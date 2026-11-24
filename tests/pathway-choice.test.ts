// A pathway that offers a choice, such as three specialty tracks of which a learner takes
// one, must not ask for all of them. Before this, "finish all 34 courses" made the
// Community Mental Health Worker credential unreachable for anyone who took one track.

import { COMMUNITY_MENTAL_HEALTH_WORKER as P } from '../components/Academy/pathwayHrtp';
import { evaluateGates, pathwayPercent, requiredCourses, type LearnerState } from '../components/Academy/progress';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, name: string, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL ${name}${detail ? ` (${detail})` : ''}`); }
};

const blank = (): LearnerState => ({
  enrolled: [P.id], lessons: [], checks: {}, activities: {}, artifacts: {}, preTest: {}, postTest: {},
  postAttempts: {}, capstone: {}, credentials: {}, courseExam: {}, attestation: {},
} as unknown as LearnerState);

const finish = (s: LearnerState, ids: string[]) => {
  for (const c of P.courses.filter((x) => ids.includes(x.id))) {
    for (const l of c.lessons) s.lessons.push(l.id);
    if (c.artifact) s.artifacts[c.id] = Object.fromEntries(c.artifact.fields.map((f) => [f.id, ['done']]));
  }
};

console.log('Pathway choice');
const alt = new Set(P.chooseOneOf);
ok(alt.size === 3, 'three specialty tracks are the alternatives');

const s = blank();
finish(s, P.courses.filter((c) => !alt.has(c.id)).map((c) => c.id));
ok(requiredCourses(P, s).length === P.courses.length - 2, 'a learner is asked for 32 of the 34 courses', String(requiredCourses(P, s).length));
ok(pathwayPercent(P, s) < 100, 'with no specialty track finished, the pathway is not complete');

const withTrack = blank();
finish(withTrack, P.courses.filter((c) => !alt.has(c.id)).map((c) => c.id));
finish(withTrack, ['chw_spec_behavioral_health']);
ok(pathwayPercent(P, withTrack) === 100, 'finishing one track completes the pathway, without the other two', String(pathwayPercent(P, withTrack)));
const g = evaluateGates(P, withTrack).gates.find((x) => /Finish all/.test(x.label))!;
ok(g.met, 'the courses gate is met after one track', g.detail || '');
ok(/32 courses/.test(g.label), 'the gate says 32 courses, not 34', g.label);

console.log(`\n${checks - failures}/${checks} passed${failures ? `, ${failures} FAILED` : ''}\n`);
process.exit(failures ? 1 : 0);
