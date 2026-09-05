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
  /** Course id -> artifact field id -> value(s). Carried forward to the capstone. */
  artifacts: Record<string, Record<string, string[]>>;
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
  /**
   * Course id -> that course's own exam result, where it has one.
   *
   * Separate from postTest, which is the pathway's. A course that grants credit on its
   * own needs the thing that decides whether it was earned attached to it, because a
   * post-test sitting at the end of eight courses cannot say whether any single one of
   * them was learned.
   */
  courseExam: Record<string, TestResult>;
  /**
   * Course id -> the learner's signed statement that they completed it themselves.
   *
   * Typed rather than clicked. The point is not the keystrokes, it is that a person is
   * asserting something in their own words and can be shown it again afterwards. A
   * completion record that nobody attested to is a record of clicks.
   */
  attestation: Record<string, { name: string; at: string }>;
  last?: { pathwayId: string; courseId: string };
}

const EMPTY: LearnerState = {
  enrolled: [],
  lessons: [],
  checks: {},
  activities: {},
  artifacts: {},
  preTest: {},
  postTest: {},
  postAttempts: {},
  capstone: {},
  credentials: {},
  courseExam: {},
  attestation: {},
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

/** An artifact counts as done when every field has at least one non-empty entry. */
export function isArtifactComplete(
  course: { id: string; artifact?: { fields: { id: string; repeat?: number }[] } },
  s: LearnerState
): boolean {
  if (!course.artifact) return true;
  const vals = s.artifacts[course.id] || {};
  return course.artifact.fields.every((f) =>
    (vals[f.id] || []).some((v) => (v || '').trim().length > 0)
  );
}

export function coursePercent(
  p: Pathway,
  courseId: string,
  s: LearnerState
): number {
  const course = p.courses.find((c) => c.id === courseId);
  if (!course) return 0;
  const units = course.lessons.length + (course.activity ? 1 : 0) + (course.artifact ? 1 : 0);
  if (!units) return 0;
  let done = course.lessons.filter((l) => s.lessons.includes(l.id)).length;
  if (course.activity && (s.activities[course.id] || '').trim()) done++;
  if (course.artifact && isArtifactComplete(course, s)) done++;
  return Math.round((done / units) * 100);
}

export const isCourseComplete = (p: Pathway, courseId: string, s: LearnerState) =>
  coursePercent(p, courseId, s) === 100;

/**
 * Everything still standing between a learner and finishing this course.
 *
 * Kept separate from isCourseComplete, which answers a narrower question: have they read
 * and done everything. That is still the right question for a progress bar. Earning a
 * course can require more, and where it does, a learner is owed a plain list of what is
 * outstanding rather than a button that refuses.
 *
 * Minutes are passed in rather than read here, because they live in the browser and this
 * module stays pure so it can be tested without one.
 */
export interface CourseGate { id: string; label: string; met: boolean; detail?: string }

export function courseGates(
  p: Pathway,
  courseId: string,
  s: LearnerState,
  minutesSpent: number,
): CourseGate[] {
  const c = p.courses.find((x) => x.id === courseId);
  if (!c) return [];
  const gates: CourseGate[] = [
    {
      id: 'content',
      label: 'Work through every lesson and activity',
      met: isCourseComplete(p, courseId, s),
      detail: `${coursePercent(p, courseId, s)}% done`,
    },
  ];

  if (c.minMinutes) {
    gates.push({
      id: 'time',
      label: `Spend ${c.minMinutes} minutes in the material`,
      met: minutesSpent >= c.minMinutes,
      detail: `${Math.min(minutesSpent, c.minMinutes)} of ${c.minMinutes} minutes`,
    });
  }

  if (c.exam) {
    const score = s.courseExam?.[courseId]?.score ?? null;
    gates.push({
      id: 'exam',
      label: `Pass the course exam at ${c.exam.passPercent}%`,
      met: score !== null && score >= c.exam.passPercent,
      detail: score === null ? 'Not taken yet' : `Scored ${score}%`,
    });
  }

  // Asked for wherever a course carries a requirement worth attesting to. A course with
  // neither a clock nor an exam is not asking anybody to swear to anything.
  if (c.minMinutes || c.exam) {
    gates.push({
      id: 'attestation',
      label: 'Sign the completion statement',
      met: !!s.attestation?.[courseId],
      detail: s.attestation?.[courseId] ? 'Signed' : 'Last step',
    });
  }

  return gates;
}

/** Whether every gate on this course is met. */
export const isCourseEarned = (
  p: Pathway,
  courseId: string,
  s: LearnerState,
  minutesSpent: number,
): boolean => courseGates(p, courseId, s, minutesSpent).every((g) => g.met);

export function pathwayPercent(p: Pathway, s: LearnerState): number {
  if (!p.courses.length) return 0;
  const total = p.courses.reduce(
    (n, c) => n + c.lessons.length + (c.activity ? 1 : 0) + (c.artifact ? 1 : 0),
    0
  );
  const done = p.courses.reduce(
    (n, c) =>
      n +
      c.lessons.filter((l) => s.lessons.includes(l.id)).length +
      (c.activity && (s.activities[c.id] || '').trim() ? 1 : 0) +
      (c.artifact && isArtifactComplete(c, s) ? 1 : 0),
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
  const artifactCourses = p.courses.filter((c) => c.artifact);
  const artifactsDone = artifactCourses.filter((c) => isArtifactComplete(c, s)).length;
  // A capstone is scored by a reviewer. The learner-facing gate is submission;
  // the credential rules require reviewer approval before issuance, which the
  // portal records separately. Submission is what the learner controls.
  const capstoneMet = p.capstone ? capstoneText.length > 0 : true;

  // A pathway still in curriculum review cannot issue a credential, no matter
  // how much of the published content a learner has finished. Stated as its own
  // gate so the learner sees why rather than finding a dead button.
  const gates: GateStatus[] = [];
  if (p.status !== 'published') {
    gates.push({
      label: 'Pathway published and open for credentialing',
      met: false,
      detail: `${p.courses.length} of ${p.plannedCourses?.length ?? 0} courses released so far`,
    });
  }
  gates.push(
    {
      label: `Complete all ${p.courses.length} courses and their required activities`,
      met: coursesDone,
      detail: `${p.courses.filter((c) => isCourseComplete(p, c.id, s)).length} of ${p.courses.length} complete`,
    },
    {
      label: `Score ${PASS_THRESHOLD}% or higher on the pathway post-test`,
      met: postMet,
      detail: post === null ? 'Not yet attempted' : `Best score ${post}%`,
    }
  );

  if (artifactCourses.length) {
    gates.push({
      label: 'Complete the carried-forward work from each course',
      met: artifactsDone === artifactCourses.length,
      detail: `${artifactsDone} of ${artifactCourses.length} pieces complete`,
    });
  }

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
