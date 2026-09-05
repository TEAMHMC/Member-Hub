/**
 * How long somebody was actually in the material.
 *
 * The Academy measured nothing. A learner could open a lesson, press the button at the
 * bottom and be marked complete in under a second, and the completion record would say
 * exactly what it says for somebody who read the whole thing for an hour. That makes the
 * record worth very little: it cannot answer a funder asking about dosage, it cannot tell
 * a curriculum reviewer which lesson people abandon, and it cannot support a credential
 * that claims a number of hours.
 *
 * It also happens to be the thing CDPH names revocation against for online CE providers,
 * which require fifty minutes of active participation per continuing education hour and
 * forbid a participant going straight to the exam. That requirement is why this exists
 * now, but nothing here is specific to continuing education. Every course gets an honest
 * number; only a course that sets a minimum has that number enforced.
 *
 * What "active" means, and why it is narrower than "open":
 *
 *   The tab is visible. A lesson left open in a background tab overnight is not study,
 *   and counting it would make the number a lie in the most flattering direction.
 *
 *   Somebody is there. Without interaction the clock stops after a couple of minutes, so
 *   a page left open on a desk does not accumulate hours.
 *
 * Time survives a reload, because losing forty minutes of honest reading to a refresh
 * would teach people not to trust the number, and a number nobody trusts gets worked
 * around rather than earned.
 */

/** Stop counting after this long with no interaction. */
const IDLE_AFTER_MS = 120_000;

/** How often the clock writes through, so a crash costs seconds rather than everything. */
const PERSIST_EVERY_MS = 5_000;

const key = (userId: string, courseId: string) => `hmc_academy_time_${userId}_${courseId}`;

export const readSeconds = (userId: string, courseId: string): number => {
  try {
    const n = Number(localStorage.getItem(key(userId, courseId)));
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
};

const writeSeconds = (userId: string, courseId: string, seconds: number): void => {
  try {
    localStorage.setItem(key(userId, courseId), String(Math.round(seconds)));
  } catch {
    /* private mode. The clock still runs for this session. */
  }
};

export interface EngagementClock {
  /** Total active seconds on this course, across visits. */
  seconds: () => number;
  /** Stop counting and flush. Call on unmount. */
  stop: () => void;
}

/**
 * Starts counting active time on a course.
 *
 * Deliberately not a React hook. The clock has to keep running across a lesson change
 * within the same course, and a hook keyed to the lesson component would reset on every
 * navigation, which is precisely the behaviour that would let somebody click through
 * twelve lessons in a minute and still show twelve minutes.
 */
export function startEngagementClock(userId: string, courseId: string): EngagementClock {
  let total = readSeconds(userId, courseId);
  let lastTick = Date.now();
  let lastInput = Date.now();
  let stopped = false;

  const active = () =>
    typeof document !== 'undefined' &&
    document.visibilityState === 'visible' &&
    Date.now() - lastInput < IDLE_AFTER_MS;

  const tick = () => {
    const now = Date.now();
    const delta = (now - lastTick) / 1000;
    lastTick = now;
    // A delta far larger than the interval means the machine slept or the tab was
    // throttled. Counting it would credit hours nobody spent reading.
    if (active() && delta > 0 && delta < 5) total += delta;
  };

  const noteInput = () => { lastInput = Date.now(); };

  const interval = setInterval(tick, 1000);
  const persist = setInterval(() => writeSeconds(userId, courseId, total), PERSIST_EVERY_MS);

  const events = ['keydown', 'pointerdown', 'pointermove', 'wheel', 'scroll', 'touchstart'];
  events.forEach((e) => window.addEventListener(e, noteInput, { passive: true }));
  // Reset the tick baseline when returning, so time spent on another tab is not banked.
  const onVisibility = () => { lastTick = Date.now(); lastInput = Date.now(); };
  document.addEventListener('visibilitychange', onVisibility);

  return {
    seconds: () => total,
    stop: () => {
      if (stopped) return;
      stopped = true;
      tick();
      writeSeconds(userId, courseId, total);
      clearInterval(interval);
      clearInterval(persist);
      events.forEach((e) => window.removeEventListener(e, noteInput));
      document.removeEventListener('visibilitychange', onVisibility);
    },
  };
}

/**
 * Whether a course's required time has been met.
 *
 * A course with no requirement is always met, so the gate exists only where somebody
 * decided it should. Continuing education sets it to fifty minutes per credit hour
 * because a regulator requires that; an ordinary course can set it to nothing and simply
 * be measured.
 */
export const timeRequirementMet = (
  userId: string,
  courseId: string,
  minMinutes?: number,
): boolean => !minMinutes || readSeconds(userId, courseId) >= minMinutes * 60;

/** Whole minutes, for display. */
export const minutesSpent = (userId: string, courseId: string): number =>
  Math.floor(readSeconds(userId, courseId) / 60);

/** "12 of 50 minutes", for a learner who needs to know how much is left. */
export const timeProgressLabel = (userId: string, courseId: string, minMinutes?: number): string => {
  const done = minutesSpent(userId, courseId);
  if (!minMinutes) return done === 1 ? '1 minute so far' : `${done} minutes so far`;
  return `${Math.min(done, minMinutes)} of ${minMinutes} minutes`;
};
