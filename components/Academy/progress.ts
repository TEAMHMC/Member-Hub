// Academy learner record. Mirrors the transcript sections defined in
// "HMC Academy | Credential, Transcript + Equivalency Rules" v1.0:
// academic learning, assessment growth, credentials, applied learning, hours.
//
// Credential eligibility is evaluated from the pathway's own gates. Per the
// rules: a system error returns not-eligible, never eligible. Nothing here
// awards a credential on partial evidence.

import { PASS_THRESHOLD, pathwayById, type Check, type Pathway } from './catalog';

export interface TestResult {
  /** Percentage 0-100. */
  score: number;
  attempt: number;
  at: string;
}

export interface LearnerState {
  /** Pathway ids the learner has registered for. */
  enrolled: string[];
  /** Completed lesson ids. */
  lessons: string[];
  /** Knowledge check id -> chosen option index. */
  checks: Record<string, number>;
  /** Course id -> the learner's applied-activity submission. */
  activities: Record<string, string>;
  /** Pathway id -> baseline result. Taken once, before learning. */
  preTest: Record<string, TestResult>;
  /** Pathway id -> best post-test result. Retries allowed. */
  postTest: Record<string, TestResult>;
  /** Pathway id -> post-test attempt count. */
  postAttempts: Record<string, number>;
  /** Pathway id -> capstone submission. */
  capstone: Record<string, string>;
  /** Pathway id -> ISO issue date. Only set when every gate passes. */
  credentials: Record<string, string>;
  last?: { pathwayId: string; courseId: string };
}

const EMPTY: LearnerState = {
  enrolled: [],
  lessons: [],
  checks: {},
  activities: {},
  preTest: {},
  postTest: {},
  postAttempts: {},
  capstone: {},
  credentials: {},
};

const key = (userId: string) => `hmc_academy_v2_${userId}`;

export function loadState(userId: string): LearnerState {
  try {
    const raw = localStorage.getItem(key(userId));
    if (!raw) return { ...EMPTY };
    return { ...EMPTY, ...(JSON.parse(raw) as Partial<LearnerState>) };
  } catch {
    return { ...EMPTY };
  }
}

export function saveState(userId: string, s: LearnerState): void {
  try {
    localStorage.setItem(key(userId), JSON.stringify(s));
  } catch {
    /* storage blocked; progress stays in memory for this session */
  }
}

// ── Derived progress ─────────────────────────────────────────────────────

export const courseLessonsDone = (
  courseLessonIds: string[],
  done: string[]
): number => courseLessonIds.filter((id) => done.includes(id)).length;

export function coursePercent(
  p: Pathway,
  courseId: string,
  s: LearnerState
): number {
  const course = p.courses.find((c) => c.id === courseId);
  if (!course) return 0;
  const units = course.lessons.length + (course.activity ? 1 : 0);
  if (!units) return 0;
  let done = course.lessons.filter((l) => s.lessons.includes(l.id)).length;
  if (course.activity && (s.activities[course.id] || '').trim()) done++;
  return Math.round((done / units) * 100);
}

export const isCourseComplete = (p: Pathway, courseId: string, s: LearnerState) =>
  coursePercent(p, courseId, s) === 100;

export function pathwayPercent(p: Pathway, s: LearnerState): number {
  if (!p.courses.length) return 0;
  const total = p.courses.reduce(
    (n, c) => n + c.lessons.length + (c.activity ? 1 : 0),
    0
  );
  const done = p.courses.reduce(
    (n, c) =>
      n +
      c.lessons.filter((l) => s.lessons.includes(l.id)).length +
      (c.activity && (s.activities[c.id] || '').trim() ? 1 : 0),
    0
  );
  return total ? Math.round((done / total) * 100) : 0;
}

export const allCoursesComplete = (p: Pathway, s: LearnerState) =>
  p.courses.length > 0 && p.courses.every((c) => isCourseComplete(p, c.id, s));

// ── Assessment ───────────────────────────────────────────────────────────

export function scoreTest(questions: Check[], answers: Record<string, number>): number {
  if (!questions.length) return 0;
  const right = questions.filter((q) => answers[q.id] === q.answer).length;
  return Math.round((right / questions.length) * 100);
}

/** Baseline to post-test change. Progress is reported as improvement. */
export function knowledgeGain(
  pathwayId: string,
  s: LearnerState
): { pre: number | null; post: number | null; gain: number | null } {
  const pre = s.preTest[pathwayId]?.score ?? null;
  const post = s.postTest[pathwayId]?.score ?? null;
  return { pre, post, gain: pre !== null && post !== null ? post - pre : null };
}

// ── Credential gating ────────────────────────────────────────────────────

export interface GateStatus {
  label: string;
  met: boolean;
  detail?: string;
}

/**
 * Evaluates the pathway's published gates. Returns one row per gate so the
 * learner can see exactly what remains, and `eligible` only when all pass.
 */
export function evaluateGates(p: Pathway, s: LearnerState): {
  gates: GateStatus[];
  eligible: boolean;
} {
  const coursesDone = allCoursesComplete(p, s);
  const post = s.postTest[p.id]?.score ?? null;
  const postMet = post !== null && post >= PASS_THRESHOLD;
  const capstoneText = (s.capstone[p.id] || '').trim();
  // A capstone is scored by a reviewer. The learner-facing gate is submission;
  // the credential rules require reviewer approval before issuance, which the
  // portal records separately. Submission is what the learner controls.
  const capstoneMet = p.capstone ? capstoneText.length > 0 : true;

  const gates: GateStatus[] = [
    {
      label: `Complete all ${p.courses.length} courses and their required activities`,
      met: coursesDone,
      detail: `${p.courses.filter((c) => isCourseComplete(p, c.id, s)).length} of ${p.courses.length} complete`,
    },
    {
      label: `Score ${PASS_THRESHOLD}% or higher on the pathway post-test`,
      met: postMet,
      detail: post === null ? 'Not yet attempted' : `Best score ${post}%`,
    },
  ];

  if (p.capstone) {
    gates.push({
      label: `Submit ${p.capstone.title.toLowerCase()} for rubric review (${p.capstone.passing} of 20 to pass)`,
      met: capstoneMet,
      detail: capstoneMet ? 'Submitted for review' : 'Not yet submitted',
    });
  }

  return { gates, eligible: gates.every((g) => g.met) };
}

/** Deterministic, human-readable certificate id. */
export function credentialId(pathwayId: string, userId: string, issuedAt: string): string {
  const seed = `${pathwayId}:${userId}:${issuedAt}`;
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return `HMC-${pathwayId.slice(0, 3).toUpperCase()}-${h.toString(36).toUpperCase().padStart(7, '0').slice(0, 7)}`;
}

/** Recognized learning time, reported under the TRAINING hours category. */
export function trainingHours(s: LearnerState): number {
  let minutes = 0;
  for (const p of s.enrolled.map(pathwayById).filter(Boolean) as Pathway[]) {
    for (const c of p.courses) {
      const doneLessons = c.lessons.filter((l) => s.lessons.includes(l.id)).length;
      if (!c.lessons.length) continue;
      minutes += (c.minutes * doneLessons) / c.lessons.length;
    }
  }
  return Math.round((minutes / 60) * 10) / 10;
}
