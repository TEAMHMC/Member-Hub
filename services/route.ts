/**
 * Addresses for the Hub.
 *
 * The Hub had none. Every section, and every one of the Academy's eight levels of
 * depth, was React state at the single address `hub.healthmatters.clinic/`. The
 * address bar never changed, the title never changed, and the history never grew,
 * so the browser Back button did not step back through the Academy. It left the
 * Hub entirely and returned to whatever the member had been looking at before they
 * arrived, which is what made a native surface feel like a different website.
 *
 * Reload had the same shape: a member three lessons into a course who refreshed
 * landed back on Home. And nothing could be bookmarked, sent to somebody, linked
 * from the public site or cited in a report, because there was one URL for all of it.
 *
 * This module is the single definition of the mapping in both directions. It is
 * deliberately not a router library: the Hub's navigation is two pieces of state
 * that already work, and the job here is to mirror them into the URL, not to take
 * ownership of rendering away from the components that do it today.
 */

/** The Academy's own depth. Mirrors the `View` union in Academy.tsx. */
export type AcademyRoute =
  | { name: 'catalog' }
  | { name: 'pathway'; pathwayId: string }
  | { name: 'course'; pathwayId: string; courseId: string }
  | { name: 'lesson'; pathwayId: string; courseId: string; index: number }
  | { name: 'activity'; pathwayId: string; courseId: string }
  | { name: 'artifact'; pathwayId: string; courseId: string }
  | { name: 'test'; pathwayId: string; kind: 'pre' | 'post' }
  | { name: 'capstone'; pathwayId: string }
  | { name: 'credentials' }
  | { name: 'transcript' };

export interface Route {
  /** The Hub tab id, as used by Sidebar and ClientDashboard. */
  tab: string;
  /** Present only while the Academy tab is open. */
  academy?: AcademyRoute;
}

/**
 * Tab ids are internal names and some of them would read badly in an address bar.
 * `game-plan` is the Playbook and `health` is Results, so the URL says what the
 * member sees rather than what the state is called.
 */
const TAB_TO_SEGMENT: Record<string, string> = {
  dash: '',
  academy: 'academy',
  events: 'events',
  resources: 'resources',
  'game-plan': 'playbook',
  health: 'results',
  credits: 'credits',
  profile: 'profile',
  'check-yourself': 'check-yourself',
};

const SEGMENT_TO_TAB: Record<string, string> = Object.entries(TAB_TO_SEGMENT)
  .reduce((acc, [tab, seg]) => { acc[seg] = tab; return acc; }, {} as Record<string, string>);

/** Lesson numbers are 1-based in the URL and 0-based in the Academy's state. */
const academyPath = (a: AcademyRoute): string => {
  switch (a.name) {
    case 'catalog': return '/academy';
    case 'credentials': return '/academy/credentials';
    case 'transcript': return '/academy/transcript';
    case 'pathway': return `/academy/pathway/${a.pathwayId}`;
    case 'capstone': return `/academy/pathway/${a.pathwayId}/capstone`;
    case 'test': return `/academy/pathway/${a.pathwayId}/${a.kind}-test`;
    case 'course': return `/academy/course/${a.pathwayId}/${a.courseId}`;
    case 'activity': return `/academy/course/${a.pathwayId}/${a.courseId}/activity`;
    case 'artifact': return `/academy/course/${a.pathwayId}/${a.courseId}/artifact`;
    case 'lesson': return `/academy/learn/${a.pathwayId}/${a.courseId}/${a.index + 1}`;
    default: return '/academy';
  }
};

export const toPath = (route: Route): string => {
  if (route.tab === 'academy') return academyPath(route.academy || { name: 'catalog' });
  const seg = TAB_TO_SEGMENT[route.tab];
  // An unmapped tab keeps the member where they are rather than inventing a path.
  return seg === undefined ? '/' : `/${seg}`;
};

const parseAcademy = (parts: string[]): AcademyRoute => {
  // parts is everything after 'academy'.
  const [a, b, c, d] = parts;
  if (!a) return { name: 'catalog' };
  if (a === 'credentials') return { name: 'credentials' };
  if (a === 'transcript') return { name: 'transcript' };
  if (a === 'pathway' && b) {
    if (c === 'capstone') return { name: 'capstone', pathwayId: b };
    if (c === 'pre-test') return { name: 'test', pathwayId: b, kind: 'pre' };
    if (c === 'post-test') return { name: 'test', pathwayId: b, kind: 'post' };
    return { name: 'pathway', pathwayId: b };
  }
  if (a === 'course' && b && c) {
    if (d === 'activity') return { name: 'activity', pathwayId: b, courseId: c };
    if (d === 'artifact') return { name: 'artifact', pathwayId: b, courseId: c };
    return { name: 'course', pathwayId: b, courseId: c };
  }
  if (a === 'learn' && b && c) {
    const n = Number(d);
    // A junk or missing lesson number opens the course rather than lesson -1.
    if (!Number.isFinite(n) || n < 1) return { name: 'course', pathwayId: b, courseId: c };
    return { name: 'lesson', pathwayId: b, courseId: c, index: Math.round(n) - 1 };
  }
  return { name: 'catalog' };
};

export const parse = (pathname: string): Route => {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return { tab: 'dash' };
  if (parts[0] === 'academy') return { tab: 'academy', academy: parseAcademy(parts.slice(1)) };
  const tab = SEGMENT_TO_TAB[parts[0]];
  // An address the Hub does not know is Home, not a blank screen.
  return { tab: tab || 'dash' };
};

export const current = (): Route => {
  try { return parse(window.location.pathname); } catch { return { tab: 'dash' }; }
};

/**
 * Titles, because a bookmark and a history entry are only useful if they are named.
 * Every screen in the Hub shared one title, so a member with the Academy open in a
 * tab and Events in another could not tell them apart.
 */
const TAB_TITLE: Record<string, string> = {
  dash: 'Member Hub',
  academy: 'Academy',
  events: 'Events',
  resources: 'Resources',
  'game-plan': 'Wellness Playbook',
  health: 'Your Results',
  credits: 'Health Credits',
  profile: 'Your Profile',
  'check-yourself': 'Check Yourself',
};

const ACADEMY_TITLE: Record<AcademyRoute['name'], string> = {
  catalog: 'Academy',
  pathway: 'Pathway',
  course: 'Course',
  lesson: 'Lesson',
  activity: 'Practice',
  artifact: 'Coursework',
  test: 'Assessment',
  capstone: 'Capstone',
  credentials: 'Credentials',
  transcript: 'Your Transcript',
};

export const titleFor = (route: Route): string => {
  const head = route.tab === 'academy'
    ? ACADEMY_TITLE[(route.academy || { name: 'catalog' }).name]
    : TAB_TITLE[route.tab] || 'Member Hub';
  return head === 'Member Hub'
    ? 'Member Hub | Health Matters Clinic'
    : `${head} | Member Hub`;
};

const applyTitle = (route: Route) => {
  try { document.title = titleFor(route); } catch { /* nothing to do */ }
};

/**
 * Record a move.
 *
 * Silent when the address is already right. That guard is doing real work: App and
 * ClientDashboard each hold the active tab and keep each other in step, so one tap
 * on Events settles through both of them. Without the guard that would file the same
 * address twice and Back would need pressing twice to leave it.
 *
 * The query string is carried through, because `?training=` is how somebody arrives
 * from the Unstoppable site to register and dropping it mid-flow would lose them.
 */
export const push = (route: Route): void => {
  try {
    const path = toPath(route) + window.location.search;
    applyTitle(route);
    if (path === window.location.pathname + window.location.search) return;
    window.history.pushState({ hmc: true }, '', path);
  } catch { /* history unavailable; the Hub still renders */ }
};

/** Correct the address without adding a step, for the first paint. */
export const replace = (route: Route): void => {
  try {
    const path = toPath(route) + window.location.search;
    applyTitle(route);
    if (path === window.location.pathname + window.location.search) return;
    window.history.replaceState({ hmc: true }, '', path);
  } catch { /* history unavailable */ }
};

/** Subscribe to Back and Forward. Returns the unsubscribe, for an effect cleanup. */
export const onPop = (fn: (route: Route) => void): (() => void) => {
  const handler = () => { const r = current(); applyTitle(r); fn(r); };
  window.addEventListener('popstate', handler);
  return () => window.removeEventListener('popstate', handler);
};
