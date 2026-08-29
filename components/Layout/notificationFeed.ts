// What is new for this member, assembled from the things that are actually true.
//
// The bell read one source: public events. That is 18 rows, all of them typed as
// workshops, 17 of them already past, so after filtering the panel held exactly one card
// and nothing about training ever appeared. Meanwhile the Academy had grown to 28 courses
// across seven pathways and the bell could not see any of it.
//
// Three sources now, and none of them is a notification table. A table has to be written
// to, and anything nobody writes to goes stale silently; every item below is derived from
// the state of the thing it is about, so it cannot describe something that is no longer
// true.
//
//   Courses      the Academy catalogue, against what this browser has already seen
//   Sessions     scheduled cohort dates from the portal
//   Library      events, workshops and recordings, which is what the bell had before
//
// Read markers are per browser, which is a real limit and the right trade for now: the
// alternative is a per-member table on the server, and a member who reads a notice on
// their phone and sees it unread on a laptop is a smaller problem than a table nobody
// maintains.

export type NotificationKind =
  | 'course' | 'training' | 'cohort' | 'workshop' | 'webinar' | 'office-hours' | 'recording' | 'news';

/** Which tab an item belongs to. Trainings and events are the two things HMC actually runs. */
export type NotificationGroup = 'training' | 'event';

export interface FeedItem {
  id: string;
  kind: NotificationKind;
  group: NotificationGroup;
  title: string;
  detail?: string;
  /** ISO, or null for something with no date of its own such as a newly added course. */
  date: string | null;
  /** What the member can do about it. */
  action: { label: string; tab?: string; href?: string };
  /** Ordering weight. Higher sorts first within the same date bucket. */
  weight: number;
}

const KIND_LABEL: Record<NotificationKind, string> = {
  course: 'Course',
  training: 'Training',
  cohort: 'Cohort',
  workshop: 'Workshop',
  webinar: 'Webinar',
  'office-hours': 'Office hours',
  recording: 'Recording',
  news: 'News',
};

export const kindLabel = (k: NotificationKind): string => KIND_LABEL[k] || 'Update';

/**
 * How long ago, in the words a person uses.
 *
 * Anything in the future reads as a date rather than as a negative interval, because a
 * cohort three weeks out is not "in 21 days ago" and is not news that has aged.
 */
export const relativeTime = (iso: string | null, now: Date = new Date()): string => {
  if (!iso) return '';
  const t = Date.parse(iso);
  if (!Number.isFinite(t)) return '';
  const diff = now.getTime() - t;
  if (diff < 0) {
    return new Date(t).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'America/Los_Angeles' });
  }
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins} minute${mins === 1 ? '' : 's'} ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? '' : 's'} ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months === 1 ? '' : 's'} ago`;
  return `${Math.floor(months / 12)} year${months < 24 ? '' : 's'} ago`;
};

/** A library row, as the content-library endpoint returns it. */
export interface LibraryRow {
  id: string;
  title: string;
  description?: string;
  date?: string | null;
  state: 'upcoming' | 'live' | 'recorded' | 'past';
  contentType?: string;
  recordingUrl?: string | null;
  recordingMinutes?: number | null;
  websiteUrl?: string | null;
}

/** A course, as much of one as this needs to know. */
export interface CourseRow {
  id: string;
  title: string;
  pathwayId: string;
  pathwayTitle: string;
  minutes?: number;
}

export interface SessionRow {
  id: string;
  courseId: string;
  title: string;
  startsAt: string;
}

const LIBRARY_KIND: Record<string, NotificationKind> = {
  webinar: 'webinar', cohort: 'cohort', training: 'training', workshop: 'workshop',
  'office-hours': 'office-hours', podcast: 'recording', guide: 'news',
};

/**
 * Builds the feed.
 *
 * `knownCourseIds` is what this browser has seen before. On a first run the caller passes
 * every current course, so nothing is announced: a member opening the Hub for the first
 * time should not be handed twenty eight notifications telling them a catalogue exists.
 * After that, a course added to the catalogue is genuinely new and says so.
 */
export const buildFeed = (input: {
  courses: CourseRow[];
  knownCourseIds: string[];
  sessions: SessionRow[];
  library: LibraryRow[];
  /** Pathways a coordinator has opened, so an opening is news rather than a permanent card. */
  openPathwayIds?: string[];
  now?: Date;
}): FeedItem[] => {
  const now = input.now || new Date();
  const known = new Set(input.knownCourseIds);
  const items: FeedItem[] = [];

  for (const c of input.courses) {
    if (known.has(c.id)) continue;
    items.push({
      id: `course:${c.id}`,
      kind: 'course',
      group: 'training',
      title: `New course: ${c.title}`,
      detail: `${c.pathwayTitle}${c.minutes ? `, about ${c.minutes} minutes` : ''}`,
      date: null,
      action: { label: 'Open the Academy', tab: 'academy' },
      weight: 3,
    });
  }

  for (const s of input.sessions) {
    // A session that has already run is not news. The recording of it is, and that arrives
    // through the library rather than here.
    if (Date.parse(s.startsAt) < now.getTime()) continue;
    items.push({
      id: `session:${s.id}`,
      kind: 'cohort',
      group: 'training',
      title: s.title,
      detail: 'A scheduled start date for this course',
      date: s.startsAt,
      action: { label: 'See the course', tab: 'academy' },
      weight: 4,
    });
  }

  for (const row of input.library) {
    // Past with nothing to watch is not news. A member can do nothing about it, and the
    // panel filling with things nobody can act on is how a bell gets ignored.
    if (row.state === 'past') continue;
    const recorded = row.state === 'recorded';
    items.push({
      id: `library:${row.id}`,
      kind: recorded ? 'recording' : (LIBRARY_KIND[row.contentType || ''] || 'workshop'),
      group: (row.contentType === 'cohort' || row.contentType === 'training') ? 'training' : 'event',
      title: row.title,
      detail: recorded
        ? (row.recordingMinutes ? `Recording, ${row.recordingMinutes} minutes` : 'Recording available')
        : row.description?.slice(0, 140),
      date: row.date || null,
      action: recorded && row.recordingUrl
        ? { label: 'Watch', href: row.recordingUrl }
        : { label: 'See the event', tab: 'events' },
      weight: row.state === 'live' ? 5 : 2,
    });
  }

  // Dated items first, soonest first, then the undated ones. A cohort next Tuesday matters
  // more than a course that was added to the catalogue at some point.
  return items.sort((a, b) => {
    if (a.weight !== b.weight) return b.weight - a.weight;
    if (a.date && b.date) return a.date.localeCompare(b.date);
    if (a.date) return -1;
    if (b.date) return 1;
    return a.title.localeCompare(b.title);
  });
};

/** The tabs, in the order they are shown. */
export const TABS = [
  { id: 'inbox', label: 'Inbox' },
  { id: 'training', label: 'Trainings' },
  { id: 'event', label: 'Events' },
  { id: 'all', label: 'All' },
  { id: 'archived', label: 'Archived' },
] as const;

export type TabId = typeof TABS[number]['id'];

/**
 * What each tab holds.
 *
 * Inbox is unread and not archived, which is the only tab whose count means anything.
 * Archived is its own list rather than a filter on the others, so archiving something
 * removes it from every tab it used to appear in and stays findable.
 */
export const filterFor = (
  tab: TabId,
  items: FeedItem[],
  seen: string[],
  archived: string[],
): FeedItem[] => {
  const seenSet = new Set(seen);
  const archivedSet = new Set(archived);
  if (tab === 'archived') return items.filter((i) => archivedSet.has(i.id));
  const live = items.filter((i) => !archivedSet.has(i.id));
  if (tab === 'inbox') return live.filter((i) => !seenSet.has(i.id));
  if (tab === 'training') return live.filter((i) => i.group === 'training');
  if (tab === 'event') return live.filter((i) => i.group === 'event');
  return live;
};

/** The number on the bell. Unread, not archived, and nothing else. */
export const unreadCount = (items: FeedItem[], seen: string[], archived: string[]): number =>
  filterFor('inbox', items, seen, archived).length;
