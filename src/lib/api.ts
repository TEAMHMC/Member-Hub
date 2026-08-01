// API client for the Helping + Healing Hub.
// Every call targets the live Cloud Run backend and sends credentials so the
// first-party hmc_vid (visitor) and hmc_client (session) cookies flow across
// the *.healthmatters.clinic subdomains. No Airtable, no third-party services.

const API_BASE =
  import.meta.env.VITE_API_BASE || 'https://volunteer.healthmatters.clinic';

async function req<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...(init.headers || {}) },
    ...init,
  });
  if (!res.ok) {
    let detail = '';
    try {
      detail = JSON.stringify(await res.json());
    } catch {
      /* non-json error */
    }
    throw new ApiError(res.status, detail || res.statusText);
  }
  return res.json() as Promise<T>;
}

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
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
}

// ── Visitor context (anonymous identity) ─────────────────────────────────
export const context = {
  // Call once on app load. Sets/reads the hmc_vid cookie.
  hello: () =>
    req<{ visitorId: string; identified: boolean; consent: { context: boolean } }>(
      '/api/context/hello'
    ),

  consent: (granted: boolean) =>
    req<{ ok: boolean; consent: boolean }>('/api/context/consent', {
      method: 'POST',
      body: JSON.stringify({ granted }),
    }),

  // Fire-and-forget signal. Never throws to the UI.
  event: (type: string, payload: Record<string, unknown> = {}) =>
    req<{ ok: boolean }>('/api/public/context/event', {
      method: 'POST',
      body: JSON.stringify({ type, payload }),
    }).catch(() => ({ ok: false })),

  nextActions: () =>
    req<{ visitorId: string | null; actions: NextAction[] }>(
      '/api/context/next-actions'
    ),
};

// ── Events (already live, cached server-side) ────────────────────────────
export const events = {
  list: () => req<HmcEvent[] | { events: HmcEvent[] }>('/api/public/events'),
};

// ── Referrals / daily-needs submit (existing endpoint) ───────────────────
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

// ── Client passwordless identity ─────────────────────────────────────────
export const client = {
  requestLink: (email: string) =>
    req<{ ok: boolean }>('/api/client/auth/request-link', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),

  verifyLink: (email: string, code: string) =>
    req<{ ok: boolean; identified: boolean; email: string }>(
      '/api/client/auth/verify-link',
      { method: 'POST', body: JSON.stringify({ email, code }) }
    ),

  me: () => req<ClientMe>('/api/client/me'),

  logout: () =>
    req<{ ok: boolean }>('/api/client/auth/logout', { method: 'POST' }),
};

export const DONATE_URL = 'https://www.healthmatters.clinic/donate';
