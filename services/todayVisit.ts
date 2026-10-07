// What "today" means for each kind of member.
//
// The Hub serves two people: somebody here for care (a screening, an event, help with food
// or housing) and somebody here to learn (an Academy pathway, a training, a workshop). A
// learner has no care relationship, so the screening line, results and anything clinical
// does not exist for them. This module decides which of the two "today" cards a member is
// shown, and what each says, with no screen involved so the rules can be tested.
//
//   care or undefined  the visit card, when the member carries a visit
//   learner            today's sessions only, never the line
//   both               both
//
// An undefined audience is treated as care, exactly as the rest of the Hub does, because a
// session can outlive a deploy.

import type { HmcEvent } from './api';

export type Audience = 'care' | 'learner' | 'both' | undefined | null;

export const VISIT_KEY = 'hmc.hub.visit';
export const isVisitToken = (v: unknown): v is string => typeof v === 'string' && /^[a-f0-9]{24}$/.test(v);

type Store = Pick<Storage, 'getItem' | 'setItem'>;

/**
 * The visit a member is carrying. A link from the welcome chat brings it as ?visit=; it is
 * remembered so the card is still there when they come back, and the link's own copy is
 * then removed from the address bar by the caller. Storage can be unavailable, in which
 * case a visit still works for as long as the link is open.
 */
export const takeVisitToken = (search: string, store: Store | null): { token: string | null; fromLink: boolean } => {
  const fromLink = new URLSearchParams(search).get('visit');
  if (isVisitToken(fromLink)) {
    try { store?.setItem(VISIT_KEY, fromLink); } catch { /* private mode */ }
    return { token: fromLink, fromLink: true };
  }
  try {
    const kept = store?.getItem(VISIT_KEY);
    if (isVisitToken(kept)) return { token: kept, fromLink: false };
  } catch { /* private mode */ }
  return { token: null, fromLink: false };
};

/** Today in Los Angeles, as YYYY-MM-DD. An event's date is a day, and a day belongs to a place. */
export const todayPacific = (now: Date = new Date()): string =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);

const dayBefore = (iso: string): string => {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
};

/** A visit stays on the page through the day after it, so somebody opening it the next morning still sees how it went. */
export const visitIsCurrent = (eventDate: string | null | undefined, today: string): boolean =>
  !eventDate || eventDate >= dayBefore(today);

/** The programmes a learner comes to an event for. Volunteer calls and meetups are not sessions. */
export const LEARNING_PROGRAMS = ['Unstoppable Workshop', 'Training', 'Conference', 'Panel'];

const dayOf = (e: HmcEvent): string => String(e.date || '').slice(0, 10);

export const sessionsToday = (events: HmcEvent[] | null | undefined, today: string): HmcEvent[] =>
  (Array.isArray(events) ? events : [])
    .filter((e) => e && dayOf(e) === today && LEARNING_PROGRAMS.includes(String(e.program || '')))
    .slice(0, 5);

export const sectionsFor = (audience: Audience, hasVisit: boolean): { visit: boolean; sessions: boolean } => {
  if (audience === 'learner') return { visit: false, sessions: true };
  if (audience === 'both') return { visit: hasVisit, sessions: true };
  return { visit: hasVisit, sessions: false };
};

export interface Place { status: 'waiting' | 'called' | 'done' | 'left'; peopleAhead: number; calledByName: string | null }

export interface PlaceCopy { headline: string; detail: string; live: boolean }

/** What a member is told about their place. Same words wherever it is shown. */
export const placeCopy = (place: Place | null | undefined, signedIn: boolean): PlaceCopy => {
  if (!place) {
    return { headline: 'You have not joined the screening line.', detail: 'If you are here to be screened, tell a volunteer and they will add you.', live: false };
  }
  if (place.status === 'called') {
    return { headline: `${place.calledByName ? `${place.calledByName} is` : 'We are'} ready for you.`, detail: 'Please come to the screening area.', live: true };
  }
  if (place.status === 'waiting') {
    return place.peopleAhead <= 0
      ? { headline: 'You are next.', detail: 'Stay close. A volunteer will call your name.', live: true }
      : { headline: `${place.peopleAhead} ${place.peopleAhead === 1 ? 'person is' : 'people are'} ahead of you.`, detail: 'Stay close. This updates on its own.', live: true };
  }
  if (place.status === 'done') {
    return {
      headline: 'Thank you for getting screened today.',
      detail: signedIn ? 'To see your results here, ask a volunteer for your record code.' : 'To see your results here, sign in and ask a volunteer for your record code.',
      live: false,
    };
  }
  return { headline: 'You are not in line.', detail: 'If that was a mistake, tell a volunteer and they will add you.', live: false };
};
