// Today, for each kind of member.
//
// A member here for care sees the visit they carry and where they stand in the screening
// line. A learner sees today's sessions and never the line, because a learner has no care
// relationship. Somebody here for both sees both. The visit travels as a private token from
// the welcome chat and is never matched by an email or a phone anyone could type for
// someone else.
//
//   npm run test:today

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { takeVisitToken, sectionsFor, sessionsToday, placeCopy, visitIsCurrent, todayPacific, isVisitToken, VISIT_KEY } from '../services/todayVisit';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); }
};
const mem = () => { const m = new Map<string, string>(); return { getItem: (k: string) => m.get(k) ?? null, setItem: (k: string, v: string) => { m.set(k, v); }, m }; };

console.log('\nToday\n');
const TOKEN = 'a1b2c3d4e5f6a1b2c3d4e5f6';

// The token
{
  const s = mem();
  const a = takeVisitToken(`?visit=${TOKEN}`, s);
  ok(a.token === TOKEN && a.fromLink, 'takes the token from the welcome link');
  ok(s.m.get(VISIT_KEY) === TOKEN, 'remembers it for the next visit');
  const b = takeVisitToken('', s);
  ok(b.token === TOKEN && !b.fromLink, 'finds it again with no link');
  const c = takeVisitToken('?visit=../../etc/passwd', mem());
  ok(c.token === null, 'refuses anything that is not a 24-character token');
  ok(!isVisitToken('ABC') && !isVisitToken(undefined) && isVisitToken(TOKEN), 'token shape');
  const d = takeVisitToken(`?visit=${TOKEN}`, null);
  ok(d.token === TOKEN, 'still works for the open link when storage is unavailable');
  const broken = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); } };
  ok(takeVisitToken('', broken as any).token === null && takeVisitToken(`?visit=${TOKEN}`, broken as any).token === TOKEN, 'survives blocked storage');
}

// Who sees what
{
  const none = sectionsFor('care', false), carry = sectionsFor('care', true);
  ok(!none.visit && !none.sessions, 'care with nothing to show shows nothing');
  ok(carry.visit && !carry.sessions, 'care sees the visit, not sessions');
  ok(sectionsFor(undefined, true).visit, 'an account with no audience behaves as care, like the rest of the Hub');
  ok(sectionsFor(null, false).visit === false, 'null audience with no visit shows nothing');
  const learner = sectionsFor('learner', true);
  ok(!learner.visit && learner.sessions, 'a learner never sees the line, even if they carry a visit');
  const both = sectionsFor('both', true);
  ok(both.visit && both.sessions, 'both sees both');
  ok(!sectionsFor('both', false).visit && sectionsFor('both', false).sessions, 'both with no visit still sees sessions');
}

// Sessions
{
  const today = '2026-10-10';
  const ev = (id: string, program: string, date: string) => ({ id, title: id, program, date } as any);
  const out = sessionsToday([
    ev('workshop', 'Unstoppable Workshop', today), ev('training', 'Training', today), ev('meetup', 'Unstoppable Wellness Meetup', today),
    ev('volunteer', 'Volunteer', today), ev('tomorrow', 'Training', '2026-10-11'), ev('fair', 'Community Fair', today),
  ], today);
  ok(out.map(e => e.id).join() === 'workshop,training', 'only learning programmes happening today', out.map(e => e.id).join());
  ok(sessionsToday(undefined, today).length === 0 && sessionsToday([null as any], today).length === 0, 'tolerates missing data');
  ok(sessionsToday([ev('a', 'Training', `${today}T09:00:00`)], today).length === 1, 'a date with a time on it still counts as that day');
}

// Dates
{
  ok(todayPacific(new Date('2026-10-10T06:30:00Z')) === '2026-10-09', 'a morning in UTC is still last night in Los Angeles');
  ok(todayPacific(new Date('2026-10-10T20:00:00Z')) === '2026-10-10', 'afternoon');
  ok(visitIsCurrent('2026-10-10', '2026-10-10') && visitIsCurrent('2026-10-10', '2026-10-11'), 'visible the day of and the day after');
  ok(!visitIsCurrent('2026-10-10', '2026-10-12'), 'gone two days later');
  ok(visitIsCurrent(null, '2026-10-12'), 'no date means no reason to hide it');
}

// What the member is told
{
  ok(placeCopy({ status: 'waiting', peopleAhead: 0, calledByName: null }, true).headline === 'You are next.', 'next');
  ok(placeCopy({ status: 'waiting', peopleAhead: 1, calledByName: null }, true).headline === '1 person is ahead of you.', 'singular');
  ok(placeCopy({ status: 'waiting', peopleAhead: 3, calledByName: null }, true).headline === '3 people are ahead of you.', 'plural');
  ok(placeCopy({ status: 'called', peopleAhead: 0, calledByName: 'Marcus' }, true).headline === 'Marcus is ready for you.', 'called by name');
  ok(placeCopy({ status: 'called', peopleAhead: 0, calledByName: null }, true).headline === 'We are ready for you.', 'called with no name');
  const doneIn = placeCopy({ status: 'done', peopleAhead: 0, calledByName: null }, true), doneOut = placeCopy({ status: 'done', peopleAhead: 0, calledByName: null }, false);
  ok(/record code/.test(doneIn.detail) && !/sign in/i.test(doneIn.detail), 'signed in is told to ask for a record code');
  ok(/sign in/i.test(doneOut.detail), 'a visitor is told to sign in to see results');
  ok(!placeCopy(null, true).live && placeCopy(null, true).headline.length > 0, 'not in line says so plainly');
  const all = [null, { status: 'waiting', peopleAhead: 2, calledByName: null }, { status: 'called', peopleAhead: 0, calledByName: 'A' }, { status: 'done', peopleAhead: 0, calledByName: null }, { status: 'left', peopleAhead: 0, calledByName: null }]
    .map(p => { const c = placeCopy(p as any, true); return c.headline + ' ' + c.detail; }).join(' ');
  ok(!/[—–]/.test(all) && !/\bfree\b|\$|cost/i.test(all), 'no dashes and no cost language in anything a member reads');
}

// The wiring
{
  const here = dirname(fileURLToPath(import.meta.url));
  const read = (p: string) => readFileSync(join(here, '..', p), 'utf8');
  const dash = read('components/Dashboards/ClientDashboard.tsx');
  const card = read('components/Dashboards/TodaysVisit.tsx');
  ok(/<TodaysVisit audience="learner"/.test(dash), 'the learner home mounts it as a learner, so no line can ever show there');
  ok(/<TodaysVisit audience=\{user\.audience\}/.test(dash), 'the care home passes the real audience');
  ok(/replaceState/.test(card), 'the private token is removed from the address bar');
  ok(!/clientId|email|phone/i.test(card.replace(/\/\*[\s\S]*?\*\//g, '')), 'the card never asks who the member is, only for the token');
}

console.log(failures === 0 ? `\n  ${checks} checks passed\n` : `\n  ${failures} of ${checks} checks failed\n`);
process.exit(failures === 0 ? 0 : 1);
