// Live API client for the HMC client portal (Helping + Healing Hub / Member Hub).
// Talks to the real Cloud Run backend and sends credentials so the first-party
// hmc_vid (visitor) and hmc_client (session) cookies flow across *.healthmatters.clinic.
// No mock data, no Airtable. This is the connective tissue that lets the apps talk.

const API_BASE =
  (import.meta as any).env?.VITE_API_BASE || 'https://volunteer.healthmatters.clinic';

// Sibling tools in the ecosystem (deep-linked, carrying the shared visitorId).
// URLs verified to resolve (2026-08-01): Check Yourself lives at a /resources
// path, not a subdomain; Calm Kit and Event Finder are live subdomains.
export const TOOLS = {
  checkYourself: 'https://healthmatters.clinic/resources/checkyourself',
  calmKit: 'https://calmkit.healthmatters.clinic',
  eventFinder: 'https://eventfinder.healthmatters.clinic',
  resources: 'https://healthmatters.clinic/resources', // branded landing hub
  directory: 'https://www.healthmatters.clinic/resources/resourcedirectory', // branded directory (never expose the github source)
  donate: 'https://www.healthmatters.clinic/donate',
};

export class ApiError extends Error {
  status: number;
  /**
   * The server's machine-readable reason, when it sent one.
   *
   * Without this a caller can only show one message for every failure, which is
   * how sign-in came to tell somebody to try again when the server had actually
   * locked them out after five wrong attempts, and to say a code did not match
   * when no code had ever been issued for that address.
   */
  code: string | null;
  constructor(status: number, message: string, code: string | null = null) {
    super(message);
    this.status = status;
    this.code = code;
    this.name = 'ApiError';
  }
}

async function req<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(init.headers || {}) },
    ...init,
  });
  if (!res.ok) {
    let detail = '';
    let code: string | null = null;
    try {
      const body = await res.json();
      detail = JSON.stringify(body);
      // Kept separate from the message so callers can branch on the reason
      // instead of pattern-matching a stringified body.
      const raw = (body as { error?: unknown })?.error;
      if (typeof raw === 'string') code = raw;
    } catch {
      /* non-json */
    }
    throw new ApiError(res.status, detail || res.statusText, code);
  }
  return res.json() as Promise<T>;
}

// ── Types ────────────────────────────────────────────────────────────────
export interface NextAction {
  id: string;
  priority: number;
  title: string;
  body: string;
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
  reason: string;
}

export interface HmcEvent {
  id: string;
  title: string;
  date?: string;
  dateDisplay?: string;
  time?: string;
  location?: string;
  description?: string;
  type?: string;
  url?: string;
  rsvpUrl?: string;
  lat?: number;
  lng?: number;
}

export interface ClientMe {
  identified: boolean;
  email: string;
  profile: { firstName: string | null };
  credits: { balance: number; lifetimeEarned: number; lifetimeSpent: number };
  referrals: Array<{
    id: string;
    resourceName: string | null;
    status: string;
    createdAt: string | null;
    urgencyLevel: string;
  }>;
  nextActions: NextAction[];
  /**
   * Staff standing, or null for a member. Derived on the server from the
   * volunteers roster on every call, so it is not something this client can
   * assert and not something a stale session can keep after a role is revoked.
   */
  staff: HubStaff | null;
}

// ── Staff (people who maintain the Hub) ──────────────────────────────────
export type HubCapability = 'academy' | 'content' | 'support' | 'staffAdmin';

export interface HubStaff {
  role: string;
  name: string;
  isAdmin: boolean;
  capabilities: HubCapability[];
}

export interface HubStaffOverview {
  staff: HubStaff;
  academy: {
    configured: number;
    hidden: number;
    overrides: Record<string, { state: string; cohortLabel: string | null }>;
  };
  announcements: Array<{
    id: string;
    title: string;
    date: string | null;
    category: string | null;
    status: string;
  }>;
}

export interface MemberLookup {
  email: string;
  known: boolean;
  record: 'member' | 'visitor' | 'none';
  emailSuppressed: boolean;
  lastSignIn: string | null;
  canRequestCode: boolean;
}

export const staffApi = {
  overview: () => req<HubStaffOverview>('/api/hub/staff/overview'),
  setAcademyVisibility: (pathwayId: string, state: string, cohortLabel?: string) =>
    req<{ success: boolean; pathwayId: string; state: string; cohortLabel: string | null }>(
      `/api/hub/staff/academy-visibility/${encodeURIComponent(pathwayId)}`,
      { method: 'PUT', body: JSON.stringify({ state, cohortLabel: cohortLabel || '' }) }
    ),
  lookupMember: (email: string) =>
    req<MemberLookup>(`/api/hub/staff/member-lookup?email=${encodeURIComponent(email)}`),
  postAnnouncement: (title: string, content: string, category: string) =>
    req<{ id: string }>('/api/hub/staff/announcements', {
      method: 'POST',
      body: JSON.stringify({ title, content, category }),
    }),
  deleteAnnouncement: (id: string) =>
    req<{ success: boolean }>(`/api/hub/staff/announcements/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    }),
  roster: () =>
    req<{ staff: Array<{ name: string; email: string; role: string; isAdmin: boolean; capabilities: string[] }>; note: string }>(
      '/api/hub/staff/roster'
    ),
};

// ── Health Credits (the member's own wallet) ─────────────────────────────
//
// Read only by design. Awarding and reversal stay on the staff side, where the
// controls and the audit trail already are.
export interface CreditTransaction {
  id: string;
  type: string;
  direction: 'credit' | 'debit';
  amount: number;
  reason: string;
  category: string | null;
  balanceAfter: number | null;
  createdAt: string | null;
}

export interface CreditWallet {
  balance: number;
  lifetimeEarned: number;
  lifetimeSpent: number;
  transactions: CreditTransaction[];
  account: 'client' | 'email' | null;
  earnRates?: Record<string, number>;
}

export const credits = {
  wallet: () => req<CreditWallet>('/api/client/credits'),
};

// ── Site notice (the banner every HMC front end shows) ───────────────────
//
// One message, written once, read by the portal, this Hub and the Webflow pages.
// Served from site_config/notice so it can be raised and cleared in seconds
// without deploying any of them.
export interface SiteNoticeData {
  active: boolean;
  level: 'info' | 'warning' | 'maintenance';
  message: string;
  detail?: string | null;
  updatedAt?: string | null;
}

export const siteNotice = {
  // credentials omitted: this has to answer on the sign-in screen before anyone
  // has a session, and it carries nothing personal in either direction.
  get: async (): Promise<SiteNoticeData | null> => {
    try {
      const res = await fetch(`${API_BASE}/api/public/site-notice`, { credentials: 'omit' });
      if (!res.ok) return null;
      return (await res.json()) as SiteNoticeData;
    } catch {
      return null;
    }
  },
};

// ── Visitor context (anonymous identity — "remembers you") ───────────────
export const context = {
  hello: () =>
    req<{ visitorId: string; identified: boolean; consent: { context: boolean } }>(
      '/api/context/hello'
    ),
  consent: (granted: boolean) =>
    req<{ ok: boolean; consent: boolean }>('/api/context/consent', {
      method: 'POST',
      body: JSON.stringify({ granted }),
    }),
  // Fire-and-forget signal; never throws to the UI.
  event: (type: string, payload: Record<string, unknown> = {}) =>
    req<{ ok: boolean }>('/api/public/context/event', {
      method: 'POST',
      body: JSON.stringify({ type, payload }),
    }).catch(() => ({ ok: false })),
  nextActions: () =>
    req<{ visitorId: string | null; actions: NextAction[] }>('/api/context/next-actions'),
};

// ── Events (Event Finder data, already live + cached) ────────────────────
export const events = {
  list: () => req<HmcEvent[] | { events: HmcEvent[] }>('/api/public/events'),
};

// ── Referrals / support pathways submit ──────────────────────────────────
export interface ReferralInput {
  resourceId: string;
  resourceName: string;
  memberName: string;
  memberEmail: string;
  memberPhone?: string;
  reasonForReferral: string;
  urgencyLevel?: 'routine' | 'urgent';
  preferredContactMethod?: string;
}
export const referrals = {
  submit: (input: ReferralInput) =>
    req<{ ok: boolean; error?: string }>('/api/public/referrals', {
      method: 'POST',
      body: JSON.stringify(input),
    }),
};

// ── Academy training registration ────────────────────────────────────────
//
// Two paths, deliberately not one:
//
//   rsvp()             a session with a real date exists. Goes through the same
//                      public RSVP endpoint the Event Finder uses, so attendance,
//                      check-in tokens and confirmation email all behave exactly
//                      as they do for every other HMC event.
//
//   registerInterest() no date is scheduled yet. Unstoppable is delivered live
//                      and announced, so without this a learner who wants in has
//                      nowhere to go and the Register button is a dead end.
//
// CE registrants supply the license details the LACDMH-approved certificate has
// to carry. Collecting them here means staff are not re-keying them at issuance.
export interface CeProfile {
  nameOnLicense?: string;
  licenseType?: string;
  licenseNumber?: string;
  accommodations?: string;
}

export interface TrainingRegistrationInput {
  courseId: string;
  courseTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  modality?: 'virtual' | 'in-person' | 'either';
  ceProfile?: CeProfile;
  source?: string;
}

// ── CHW certificate program ──────────────────────────────────────────────
//
// Academy progress used to live only in this browser's localStorage. That is fine for
// a self-guided catalog and disqualifying for a certificate: clearing a browser erased
// the record, and there was no server-side evidence that anyone completed anything.
// DHCS expects a supervising provider to retain the syllabus, the hours and the
// materials, so course completion is now written through to the portal and localStorage
// becomes a cache rather than the record.

export interface ChwGate { id: string; label: string; met: boolean; detail?: string }

export interface ChwEnrollment {
  enrolled: boolean;
  enrollment?: { id: string; mode: 'cohort' | 'self_paced'; cohortId?: string | null; specialtyTrackId?: string | null; completedCourseIds?: string[] };
  hours?: { instruction: number; fieldwork: number; specialty: number; total: number };
  gates?: ChwGate[];
  competenciesCovered?: string[];
  missingCompetencies?: { id: string; num: number; label: string }[];
  eligibleForCertificate?: boolean;
}

export const chw = {
  program: () => req<any>('/api/chw/program'),
  myEnrollment: () => req<ChwEnrollment>('/api/chw/my-enrollment'),
  cohorts: () => req<{ cohorts: any[] }>('/api/chw/cohorts'),
  enroll: (input: { cohortId?: string; mode?: 'cohort' | 'self_paced'; specialtyTrackId?: string }) =>
    req<{ success: boolean; enrollmentId: string }>('/api/chw/enroll', { method: 'POST', body: JSON.stringify(input) }),
  // Best-effort: a sync failure must never lose the learner's place in the browser.
  recordProgress: (input: { courseId?: string; completed?: boolean; lessonIds?: string[]; specialtyTrackId?: string }) =>
    req<ChwEnrollment>('/api/chw/progress', { method: 'POST', body: JSON.stringify(input) }),
  transcript: (enrollmentId: string) => req<any>(`/api/chw/transcript/${encodeURIComponent(enrollmentId)}`),
};

/** A guided cohort date for a course, scheduled in the volunteer portal. */
export interface ScheduledSession {
  id: string;
  courseId: string;
  title: string;
  startsAt: string;
  modality: 'virtual' | 'in_person';
  location?: string;
  seatsTotal?: number | null;
  seatsFilled?: number;
}

export const training = {
  // Cohort dates live on events in the volunteer portal rather than in this
  // catalog. Hardcoding them here meant scheduling a session required a code
  // change and a deploy, so every course shipped with an empty list and the
  // Academy always read "no sessions are scheduled".
  sessions: (courseId?: string) =>
    req<{ sessions: ScheduledSession[] }>(
      `/api/public/academy-sessions${courseId ? `?courseId=${encodeURIComponent(courseId)}` : ''}`,
    ),

  registerInterest: (input: TrainingRegistrationInput) =>
    req<{ success: boolean; alreadyRegistered?: boolean; suppressed?: boolean }>(
      '/api/public/training-interest',
      { method: 'POST', body: JSON.stringify({ ...input, source: input.source || 'member-hub-academy' }) },
    ),

  rsvp: (input: TrainingRegistrationInput & { eventId: string; eventDate?: string }) =>
    req<{ success: boolean; suppressed?: boolean }>('/api/public/rsvp', {
      method: 'POST',
      body: JSON.stringify({
        eventId: input.eventId,
        eventTitle: input.courseTitle,
        eventDate: input.eventDate || '',
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        phone: input.phone || '',
        contactPreference: 'email',
        source: input.source || 'member-hub-academy',
        ceProfile: input.ceProfile,
      }),
    }),
};

// ── Client passwordless identity ─────────────────────────────────────────
export const client = {
  /**
   * @param invite an invitation code, when the person entered one. The server
   *   issues a code to any existing member without it, and to a new address only
   *   with it, so this has to travel or a genuinely invited person is refused.
   */
  requestLink: (email: string, invite?: string) =>
    req<{ ok: boolean }>('/api/client/auth/request-link', {
      method: 'POST',
      body: JSON.stringify(invite ? { email, invite } : { email }),
    }),
  verifyLink: (email: string, code: string) =>
    req<{ ok: boolean; identified: boolean; email: string }>('/api/client/auth/verify-link', {
      method: 'POST',
      body: JSON.stringify({ email, code }),
    }),
  me: () => req<ClientMe>('/api/client/me'),
  // What sign-in looks like, per the server rather than a build-time flag.
  authConfig: () =>
    req<{ googleClientId: string | null; signupMode: 'open' | 'invite' }>('/api/public/auth-config'),
  // Exchange a Google credential for a Hub session. Verified server-side against
  // the same OAuth client the volunteer portal uses.
  googleSignIn: (credential: string) =>
    req<{ ok: boolean; identified: boolean; email: string }>('/api/client/auth/google', {
      method: 'POST',
      body: JSON.stringify({ credential }),
    }),
  logout: () => req<{ ok: boolean }>('/api/client/auth/logout', { method: 'POST' }),
};

// ── Sunny — AI Wellness Navigator (orchestrates the ecosystem) ───────────
export interface SunnyTurn {
  role: 'user' | 'assistant';
  content: string;
}
export const sunny = {
  chat: (
    message: string,
    opts: {
      history?: SunnyTurn[];
      lang?: 'en' | 'es';
      pageUrl?: string;
      pageTitle?: string;
      pageContext?: Record<string, unknown>;
      sessionId?: string;
    } = {}
  ) =>
    req<{ success?: boolean; reply?: string; message?: string }>('/api/sunny/chat', {
      method: 'POST',
      body: JSON.stringify({ message, ...opts }),
    }),
};

// Deep-link a sibling tool, carrying the shared visitorId (and screening scores
// for Calm Kit) so the ecosystem "talks" and the member never starts over.
export function toolLink(
  base: string,
  params: Record<string, string | number | undefined> = {},
  visitorId?: string | null
): string {
  const url = new URL(base);
  if (visitorId) url.searchParams.set('vid', visitorId);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  }
  return url.toString();
}
