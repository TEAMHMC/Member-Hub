/**
 * Keeping a learner's results where they can be found, and deciding when a baseline is owed.
 *
 * Results used to live only in the browser where they were taken, so another device or
 * cleared site data lost them, and nothing could say what anyone knew at the start or the
 * end. The server now holds a copy per signed-in learner. These are the pure rules for moving
 * between the two, free of React and the network so they can be tested.
 *
 * The merge mirrors the server's: it never lowers a score and never replaces a baseline.
 * A baseline is taken once, so the earliest stands, and one taken before any lesson beats one
 * taken after.
 */

import type { AcademyServerRecord } from '../../services/api';
import { pathwayById, type Pathway } from './catalog';
import type { LearnerState, TestResult } from './progress';

/** Whether the learner has finished any lesson in this pathway. */
export const lessonsStarted = (p: Pathway, s: Pick<LearnerState, 'lessons'>): boolean =>
  p.courses.some((c) => c.lessons.some((l) => s.lessons.includes(l.id)));

/**
 * The learner must take the baseline before the lessons.
 *
 * Only while no lesson has been completed. Somebody already partway through a pathway when
 * this arrived keeps access to it. A baseline taken after they have learned cannot show
 * growth, so it is offered, not demanded, and flagged as late when taken. The requirement
 * can therefore never strand a person mid-course.
 */
export const baselineRequired = (p: Pathway, s: LearnerState): boolean =>
  Boolean(p.preTest?.length) && !s.preTest[p.id] && !lessonsStarted(p, s);

/** A baseline exists for this pathway and the learner has not taken it. */
export const baselineOffered = (p: Pathway, s: LearnerState): boolean =>
  Boolean(p.preTest?.length) && !s.preTest[p.id];

/** The part of the local state the server keeps. */
export const toServerRecord = (s: LearnerState): AcademyServerRecord => {
  const preTest: AcademyServerRecord['preTest'] = {};
  for (const [id, r] of Object.entries(s.preTest)) {
    const p = pathwayById(id);
    // A result saved before this was recorded is clean only when no lesson in the pathway
    // is done now, because then it cannot have been taken after learning began. Anything
    // else is unknown and treated as late, so nothing is counted that cannot be vouched for.
    const clean = r.beforeLearning ?? (p ? !lessonsStarted(p, s) : false);
    preTest[id] = { score: r.score, attempt: 1, at: r.at, beforeLearning: clean };
  }
  return {
    enrolled: [...s.enrolled],
    preTest,
    postTest: Object.fromEntries(Object.entries(s.postTest).map(([id, r]) => [id, { score: r.score, attempt: r.attempt, at: r.at }])),
    postAttempts: { ...s.postAttempts },
    courseExam: Object.fromEntries(Object.entries(s.courseExam).map(([id, r]) => [id, { score: r.score, attempt: r.attempt, at: r.at }])),
  };
};

const later = (a: string, b: string) => Date.parse(b) > Date.parse(a);

/** The better of two results, the earlier sitting on a tie. */
const best = (a: TestResult | undefined, b: TestResult | undefined): TestResult | undefined => {
  if (!a) return b;
  if (!b) return a;
  if (b.score > a.score) return b;
  if (b.score < a.score) return a;
  return later(a.at, b.at) ? a : b;
};

/**
 * What the server knows, folded into this device's state.
 *
 * Returns the same object when nothing changed, so applying a record that adds nothing does
 * not cause a render or a save.
 */
export const mergeServerRecord = (local: LearnerState, rec: AcademyServerRecord): LearnerState => {
  const enrolled = [...new Set([...local.enrolled, ...rec.enrolled])];

  const preTest = { ...local.preTest };
  for (const [id, r] of Object.entries(rec.preTest)) {
    const mine = local.preTest[id];
    if (!mine) { preTest[id] = { score: r.score, attempt: 1, at: r.at, beforeLearning: r.beforeLearning }; continue; }
    const mineClean = mine.beforeLearning ?? false;
    if (mineClean !== r.beforeLearning) {
      if (r.beforeLearning) preTest[id] = { score: r.score, attempt: 1, at: r.at, beforeLearning: true };
      continue;
    }
    if (!later(r.at, mine.at)) continue; // ours is the same or earlier, so ours stands
    preTest[id] = { score: r.score, attempt: 1, at: r.at, beforeLearning: r.beforeLearning };
  }

  const postTest = { ...local.postTest };
  for (const [id, r] of Object.entries(rec.postTest)) postTest[id] = best(local.postTest[id], r) as TestResult;
  const courseExam = { ...local.courseExam };
  for (const [id, r] of Object.entries(rec.courseExam)) courseExam[id] = best(local.courseExam[id], r) as TestResult;
  const postAttempts = { ...local.postAttempts };
  for (const [id, n] of Object.entries(rec.postAttempts)) postAttempts[id] = Math.max(local.postAttempts[id] || 0, n);

  const next: LearnerState = { ...local, enrolled, preTest, postTest, courseExam, postAttempts };
  const same = JSON.stringify([next.enrolled, next.preTest, next.postTest, next.courseExam, next.postAttempts])
    === JSON.stringify([local.enrolled, local.preTest, local.postTest, local.courseExam, local.postAttempts]);
  return same ? local : next;
};

/** Stable text for the synced slice, so an unchanged record is not sent again. */
export const syncFingerprint = (s: LearnerState): string => JSON.stringify(toServerRecord(s));
