// What the bell shows, and why it showed almost nothing.
//
// It read one source: /api/public/content-library, which is `opportunities` where
// isPublicFacing is true. That is 18 rows, every one of them typed as a workshop and 17 of
// them already past. Past rows are filtered, so the panel held exactly ONE card, and the
// Academy's 28 courses across seven pathways were invisible to it.
//
//   npm run test:notifications

import {
  buildFeed, filterFor, unreadCount, relativeTime, kindLabel, TABS,
  type LibraryRow, type CourseRow,
} from '../components/Layout/notificationFeed';
import { PATHWAYS } from '../components/Academy/catalog';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); }
};

console.log('\nNotifications\n');

const NOW = new Date('2026-08-29T18:00:00Z');
const course = (id: string, title = 'A course'): CourseRow =>
  ({ id, title, pathwayId: 'p', pathwayTitle: 'A pathway', minutes: 30 });
const lib = (over: Partial<LibraryRow>): LibraryRow =>
  ({ id: 'l1', title: 'An event', state: 'upcoming', contentType: 'workshop', ...over });

console.log('Training reaches the bell at all');
{
  const feed = buildFeed({ courses: [course('c1', 'Field Safety')], knownCourseIds: [], sessions: [], library: [], now: NOW });
  ok(feed.length === 1, 'a course the browser has not seen becomes an item');
  ok(feed[0].group === 'training', 'and it is grouped as training');
  ok(/New course: Field Safety/.test(feed[0].title), 'named so a member can tell what it is', feed[0].title);
}
{
  const feed = buildFeed({
    courses: [], knownCourseIds: [], now: NOW,
    sessions: [{ id: 's1', courseId: 'c1', title: 'Unstoppable cohort', startsAt: '2026-09-10T17:00:00Z' }],
    library: [],
  });
  ok(feed.length === 1 && feed[0].group === 'training', 'a scheduled cohort date is a training item');
}

console.log('First run does not bury a new member');
{
  // Seeding with everything currently in the catalogue is the whole point: opening the Hub
  // for the first time must not hand somebody 28 notifications announcing a catalogue.
  const all = PATHWAYS.flatMap((p) => p.courses.map((c) => c.id));
  const feed = buildFeed({ courses: PATHWAYS.flatMap((p) => p.courses.map((c) => course(c.id, c.title))),
    knownCourseIds: all, sessions: [], library: [], now: NOW });
  ok(feed.length === 0, 'a seeded browser is told about nothing', `${feed.length} items`);
  ok(all.length >= 28, 'and the catalogue it seeded from is the real one', `${all.length} courses`);
}
{
  const all = PATHWAYS.flatMap((p) => p.courses.map((c) => c.id));
  const feed = buildFeed({
    courses: [...all.map((id) => course(id)), course('brand-new', 'Harm Reduction Foundations')],
    knownCourseIds: all, sessions: [], library: [], now: NOW,
  });
  ok(feed.length === 1 && /Harm Reduction/.test(feed[0].title),
    'a course added later is the only thing announced', feed.map((f) => f.title).join(', '));
}

console.log('Nothing a member can do nothing about');
{
  const feed = buildFeed({ courses: [], knownCourseIds: [], sessions: [], now: NOW, library: [
    lib({ id: 'past', state: 'past', title: 'Last year event' }),
    lib({ id: 'up', state: 'upcoming', title: 'Toy Distribution' }),
  ] });
  ok(feed.length === 1 && feed[0].title === 'Toy Distribution', 'a finished event with nothing to watch is dropped');
}
{
  const feed = buildFeed({ courses: [], knownCourseIds: [], sessions: [], now: NOW, library: [
    lib({ id: 'rec', state: 'recorded', title: 'Unstoppable webinar', recordingUrl: 'https://x', recordingMinutes: 42 }),
  ] });
  ok(feed[0].kind === 'recording', 'a recorded session becomes a recording');
  ok(feed[0].action.href === 'https://x', 'and its action plays it rather than sending them to a calendar');
  ok(/42 minutes/.test(feed[0].detail || ''), 'with the length, so somebody can decide whether they have time');
}
{
  const feed = buildFeed({ courses: [], knownCourseIds: [], now: NOW, library: [],
    sessions: [{ id: 'old', courseId: 'c', title: 'Ran already', startsAt: '2026-01-01T00:00:00Z' }] });
  ok(feed.length === 0, 'a cohort date that has passed is not news');
}

console.log('Ordering');
{
  const feed = buildFeed({
    courses: [course('c1')], knownCourseIds: [], now: NOW,
    sessions: [{ id: 's1', courseId: 'c1', title: 'Cohort', startsAt: '2026-09-10T17:00:00Z' }],
    library: [lib({ id: 'live', state: 'live', title: 'Happening now' })],
  });
  ok(feed[0].title === 'Happening now', 'something live sorts first', feed.map((f) => f.title).join(' | '));
  ok(feed[1].title === 'Cohort', 'then a dated cohort');
  ok(/New course/.test(feed[2].title), 'then an undated catalogue addition');
}

console.log('Tabs');
{
  const feed = buildFeed({
    courses: [course('c1')], knownCourseIds: [], sessions: [], now: NOW,
    library: [lib({ id: 'e1', title: 'An event' })],
  });
  const ids = feed.map((f) => f.id);
  ok(TABS.map((t) => t.id).join(',') === 'inbox,training,event,all,archived', 'the five tabs are in order');
  ok(filterFor('training', feed, [], []).length === 1, 'Trainings holds the course');
  ok(filterFor('event', feed, [], []).length === 1, 'Events holds the event');
  ok(filterFor('all', feed, [], []).length === 2, 'All holds both');
  ok(filterFor('inbox', feed, [], []).length === 2, 'Inbox starts as everything unread');
  ok(filterFor('inbox', feed, [ids[0]], []).length === 1, 'reading one removes it from Inbox');
  ok(filterFor('archived', feed, [], [ids[0]]).length === 1, 'archiving moves it to Archived');
  ok(filterFor('all', feed, [], [ids[0]]).length === 1, 'and out of every other tab');
  ok(filterFor('training', feed, [], ids).length === 0, 'archiving removes it from Trainings too');
}

console.log('The count on the bell');
{
  const feed = buildFeed({ courses: [course('c1'), course('c2')], knownCourseIds: [], sessions: [], library: [], now: NOW });
  const ids = feed.map((f) => f.id);
  ok(unreadCount(feed, [], []) === 2, 'counts unread');
  ok(unreadCount(feed, [ids[0]], []) === 1, 'a read item stops counting');
  ok(unreadCount(feed, [], [ids[0]]) === 1, 'an archived item stops counting even if unread',
    'otherwise the badge nags about something the member has deliberately put away');
  ok(unreadCount(feed, ids, []) === 0, 'everything read is a clean bell');
}

console.log('Times a person would say');
ok(relativeTime('2026-08-29T17:00:00Z', NOW) === '1 hour ago', 'an hour ago', relativeTime('2026-08-29T17:00:00Z', NOW));
ok(relativeTime('2026-08-25T18:00:00Z', NOW) === '4 days ago', 'four days ago', relativeTime('2026-08-25T18:00:00Z', NOW));
ok(relativeTime('2026-08-29T17:59:30Z', NOW) === 'Just now', 'just now');
// A cohort three weeks out is not news that has aged, so it reads as a date.
ok(/Sep/.test(relativeTime('2026-09-19T17:00:00Z', NOW)), 'something in the future reads as a date, not a negative age',
  relativeTime('2026-09-19T17:00:00Z', NOW));
ok(relativeTime(null) === '' && relativeTime('nonsense') === '', 'an unusable date renders nothing');

console.log('Labels');
for (const k of ['course', 'training', 'cohort', 'workshop', 'webinar', 'office-hours', 'recording', 'news'] as const) {
  ok(kindLabel(k).length > 2, `${k} has a label a member would recognise`, kindLabel(k));
  ok(!/[—–]/.test(kindLabel(k)), `${k} label has no em dash`);
}

console.log(`\n${checks - failures}/${checks} passed${failures ? `, ${failures} FAILED` : ''}\n`);
process.exit(failures ? 1 : 0);
