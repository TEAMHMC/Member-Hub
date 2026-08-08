// Academy progress. Lesson completion is the unit of truth; course and path
// progress are derived from it so there is no second state to keep in sync.
//
// Storage is per member id and local to the device. The backend is notified
// through context events so the Navigator can react (for example, surfacing a
// next-action for a member who started a course and stopped), but the Hub does
// not block on the network to render progress.

import { COURSES, courseById, type Course, type Path } from './catalog';

export interface AcademyState {
  /** Completed lesson ids. */
  done: string[];
  /** Course id -> ISO timestamp of completion. */
  completedCourses: Record<string, string>;
  /** Lesson id -> the member's own written reflection. Never leaves the device. */
  notes: Record<string, string>;
  /** Last lesson opened, for the Continue card. */
  last?: { courseId: string; lessonId: string };
}

const EMPTY: AcademyState = { done: [], completedCourses: {}, notes: {} };

const key = (userId: string) => `hmc_academy_${userId}`;

export function loadState(userId: string): AcademyState {
  try {
    const raw = localStorage.getItem(key(userId));
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw) as Partial<AcademyState>;
    return {
      done: Array.isArray(parsed.done) ? parsed.done : [],
      completedCourses: parsed.completedCourses || {},
      notes: parsed.notes || {},
      last: parsed.last,
    };
  } catch {
    return { ...EMPTY };
  }
}

export function saveState(userId: string, state: AcademyState): void {
  try {
    localStorage.setItem(key(userId), JSON.stringify(state));
  } catch {
    /* storage full or blocked — progress degrades to in-memory for the session */
  }
}

export function lessonsDoneIn(course: Course, done: string[]): number {
  return course.lessons.filter((l) => done.includes(l.id)).length;
}

export function coursePercent(course: Course, done: string[]): number {
  if (!course.lessons.length) return 0;
  return Math.round((lessonsDoneIn(course, done) / course.lessons.length) * 100);
}

export function isCourseComplete(course: Course, done: string[]): boolean {
  return course.lessons.every((l) => done.includes(l.id));
}

export function pathPercent(path: Path, done: string[]): number {
  const courses = path.courseIds.map(courseById).filter(Boolean) as Course[];
  const total = courses.reduce((n, c) => n + c.lessons.length, 0);
  if (!total) return 0;
  const complete = courses.reduce((n, c) => n + lessonsDoneIn(c, done), 0);
  return Math.round((complete / total) * 100);
}

/** Credits the member has actually earned from finished courses. */
export function earnedCredits(state: AcademyState): number {
  return Object.keys(state.completedCourses).reduce((sum, id) => {
    const c = courseById(id);
    return sum + (c?.credits || 0);
  }, 0);
}

export function earnedBadges(state: AcademyState): string[] {
  return Object.keys(state.completedCourses)
    .map((id) => courseById(id)?.badge)
    .filter(Boolean) as string[];
}

/**
 * The next lesson a member should see: resume the last course they touched,
 * otherwise the first lesson of the first course with unfinished work.
 */
export function nextUp(
  state: AcademyState
): { course: Course; lessonIndex: number } | null {
  const fromLast = state.last ? courseById(state.last.courseId) : undefined;
  const candidates = fromLast ? [fromLast, ...COURSES] : COURSES;
  for (const course of candidates) {
    const idx = course.lessons.findIndex((l) => !state.done.includes(l.id));
    if (idx !== -1) return { course, lessonIndex: idx };
  }
  return null;
}
