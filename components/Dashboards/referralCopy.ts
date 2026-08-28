// What a member is told about a referral they hold.
//
// The server returns a machine stage and two booleans and no sentences, so every word a
// member reads about their own referral is here, in the repository whose copy rules apply
// to it. That is the point of the split: a server that ships copy makes those rules
// unenforceable from either side.
//
// The states are not decoration. Before this, a member saw "1 referral in progress" and
// could not tell the difference between a request nobody had opened yet and one where a
// navigator had already called them. Those need different words and, in the first case, a
// way to chase it.

import type { ClientMe } from '../../services/api';

export type Referral = ClientMe['referrals'][number];
export type Stage = NonNullable<Referral['stage']>;

/** HMC's member-facing line. One place, so it cannot drift between cards. */
export const HMC_PHONE = '(323) 990-4325';
export const HMC_PHONE_HREF = 'tel:+13239904325';
export const HMC_EMAIL = 'contact@healthmatters.clinic';

interface StageCopy {
  label: string;
  meaning: string;
}

const STAGE_COPY: Record<Stage, StageCopy> = {
  received: {
    label: 'Received',
    meaning: 'We have your request and we are matching you to the right organization.',
  },
  matched: {
    label: 'Being worked on',
    meaning: 'Someone at HMC has picked this up. Nobody has contacted you about it yet.',
  },
  in_touch: {
    label: 'In touch',
    meaning: 'Someone has been in contact with you about this referral.',
  },
  completed: {
    label: 'Connected',
    meaning: 'This connection was made. If anything changed, tell us and we will pick it back up.',
  },
  closed: {
    // Never "done". A member must not read a referral they were never connected to as
    // finished, which is what a single lowercase status compare used to produce.
    label: 'Closed',
    meaning: 'This one was closed without a connection being made. You can ask us to reopen it.',
  },
};

/**
 * Copy for a referral, including one that predates the stage fields.
 *
 * A session can outlive a deploy, so a member may be reading a record that carries only
 * the four original fields. Falling back on status keeps that member on a page that says
 * something true rather than a page of blanks.
 */
export const stageCopy = (r: Referral): StageCopy => {
  if (r.stage && STAGE_COPY[r.stage]) return STAGE_COPY[r.stage];
  const status = String(r.status || '').toLowerCase();
  if (status === 'completed' || status === 'complete') return STAGE_COPY.completed;
  if (status === 'closed' || status === 'withdrawn') return STAGE_COPY.closed;
  return STAGE_COPY.received;
};

/** Still moving, as far as the member is concerned. */
export const isOpen = (r: Referral): boolean => {
  const stage = r.stage || (['completed', 'closed', 'withdrawn'].includes(String(r.status).toLowerCase())
    ? (String(r.status).toLowerCase() === 'completed' ? 'completed' : 'closed')
    : 'received');
  return stage !== 'completed' && stage !== 'closed';
};

/** Urgency is shown only when it is raised, so the word keeps its meaning. */
export const isUrgent = (r: Referral): boolean =>
  ['urgent', 'high', 'emergency', 'immediate'].includes(String(r.urgencyLevel || '').toLowerCase());

/**
 * The date a member reads.
 *
 * Pinned to Pacific. Formatting an ISO instant in the host's zone put HMC dates a day out
 * for anyone reading from further east, and a referral raised late in the evening then
 * showed tomorrow's date.
 */
export const requestedOn = (iso: string | null | undefined): string | null => {
  if (!iso) return null;
  const t = Date.parse(iso);
  if (!Number.isFinite(t)) return null;
  return new Date(t).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/Los_Angeles',
  });
};

/** A resource with nothing reachable about it renders no contact block at all. */
export const hasContact = (r: Referral): boolean =>
  Boolean(r.resource && (r.resource.phone || r.resource.website || r.resource.address || r.resource.hours));

/** Digits only, for a dialable link. Directory numbers arrive formatted every possible way. */
export const telHref = (phone: string | null | undefined): string | null => {
  const digits = String(phone || '').replace(/\D/g, '');
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `tel:+${digits}`;
  // Anything else is not a number this can promise to dial, so it is shown as text only.
  return null;
};

/** Directory rows hold bare hostnames as often as full URLs. */
export const websiteHref = (url: string | null | undefined): string | null => {
  const v = String(url || '').trim();
  if (!v) return null;
  if (/^https?:\/\//i.test(v)) return v;
  if (/^[\w.-]+\.[a-z]{2,}(\/|$)/i.test(v)) return `https://${v}`;
  return null;
};
