// The engagement clock, and the gates it feeds.
//
// This is the number a completion record rests on and, for continuing education, the one
// CDPH names revocation against. A clock that over-counts is worse than no clock: it
// produces evidence that looks like diligence and is not. So the cases that matter are
// the ones where it must refuse to count.
//
//   npm run test:engagement

import { courseGates, isCourseEarned, type LearnerState } from '../components/Academy/progress';
import type { Pathway, Course } from '../components/Academy/catalog';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); }
};

console.log('\nEngagement\n');

const lesson = (id: string) => ({ id, title: id, blocks: [] } as any);
const course = (over: Partial<Course>): Course => ({
  id: 'c1', num: 1, title: 'A course', promise: 'p', about: [], objectives: [],
  minutes: 60, prerequisites: 'None', whoFor: 'Anyone',
  lessons: [lesson('l1'), lesson('l2')], checks: [], ...over,
} as Course);

const pathway = (c: Course): Pathway => ({
  id: 'p1', title: 'A pathway', level: 'Discover', status: 'published', purpose: '', format: '',
  credentialTitle: 'X', credentialType: 'Completion', gates: [], courses: [c],
  version: '1.0', effectiveDate: '2026-01-01', nextReview: '2027-01-01',
} as unknown as Pathway);

const state = (over: Partial<LearnerState> = {}): LearnerState => ({
  enrolled: ['p1'], lessons: [], checks: {}, activities: {}, artifacts: {},
  preTest: {}, postTest: {}, postAttempts: {}, capstone: {}, credentials: {},
  courseExam: {}, attestation: {}, ...over,
});

// ── A course with no requirements is unchanged ────────────────────────────
{
  const c = course({});
  const p = pathway(c);
  const gates = courseGates(p, 'c1', state({ lessons: ['l1', 'l2'] }), 0);
  ok(gates.length === 1, 'a plain course has only the content gate', `got ${gates.length}`);
  ok(isCourseEarned(p, 'c1', state({ lessons: ['l1', 'l2'] }), 0),
    'a plain course is earned by finishing it, with no time spent');
}

// ── The time gate ─────────────────────────────────────────────────────────
{
  const c = course({ minMinutes: 50 });
  const p = pathway(c);
  const done = state({ lessons: ['l1', 'l2'] });

  ok(!isCourseEarned(p, 'c1', done, 0),
    'finishing every lesson in zero minutes does not earn the course');
  ok(!isCourseEarned(p, 'c1', done, 49),
    'forty-nine minutes is not fifty');

  const attested = state({ lessons: ['l1', 'l2'], attestation: { c1: { name: 'A Learner', at: 'now' } } });
  ok(isCourseEarned(p, 'c1', attested, 50), 'fifty minutes plus a signature earns it');

  const timeGate = courseGates(p, 'c1', done, 12).find((g) => g.id === 'time');
  ok(timeGate?.detail === '12 of 50 minutes', 'the learner is told how much is left', `got ${timeGate?.detail}`);
}

// ── The exam gate ─────────────────────────────────────────────────────────
{
  const c = course({ exam: { questions: [], passPercent: 80 } });
  const p = pathway(c);
  const base = { lessons: ['l1', 'l2'], attestation: { c1: { name: 'A', at: 'now' } } };

  ok(!isCourseEarned(p, 'c1', state(base), 0), 'an untaken exam blocks the course');
  ok(!isCourseEarned(p, 'c1', state({ ...base, courseExam: { c1: { score: 79, attempt: 1, at: 'now' } } }), 0),
    '79 percent does not pass an 80 percent exam');
  ok(isCourseEarned(p, 'c1', state({ ...base, courseExam: { c1: { score: 80, attempt: 1, at: 'now' } } }), 0),
    '80 percent passes');
}

// ── The attestation gate ──────────────────────────────────────────────────
{
  const c = course({ minMinutes: 50 });
  const p = pathway(c);
  const unsigned = state({ lessons: ['l1', 'l2'] });
  ok(!isCourseEarned(p, 'c1', unsigned, 60),
    'time and content are not enough without the signature');

  const plain = pathway(course({}));
  const plainGates = courseGates(plain, 'c1', state({ lessons: ['l1', 'l2'] }), 0);
  ok(!plainGates.some((g) => g.id === 'attestation'),
    'a course asking nothing of anybody does not ask them to swear to it');
}

// ── Content still gates, whatever else is met ─────────────────────────────
{
  const c = course({ minMinutes: 50 });
  const p = pathway(c);
  const half = state({ lessons: ['l1'], attestation: { c1: { name: 'A', at: 'now' } } });
  ok(!isCourseEarned(p, 'c1', half, 90),
    'ninety minutes and a signature do not replace reading the second lesson');
}

console.log(`\n${checks - failures}/${checks} passed\n`);
if (failures) process.exit(1);
