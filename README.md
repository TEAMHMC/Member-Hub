# Helping + Healing Hub

The public, no-login client front door for Health Matters Clinic. Clients self-serve:
personalized next steps, mental health screenings, community events, daily-needs support,
and (once signed in) their referrals and Health Credits balance.

This is the **client portal**, distinct from the staff-facing PHI system in
`hmc-volunteer-portal`. It talks to the same Cloud Run backend but only through
public and client-session endpoints.

## Stack

- Vite + React + TypeScript + Tailwind
- framer-motion, lucide-react, shadcn-style UI primitives (local, in `src/components/ui`)
- No Airtable, no third-party trackers. All data comes from the live backend.

## How it is wired

Everything routes through `src/lib/api.ts` (see `src/lib/hooks.ts` for the React bindings):

| UI need | Endpoint |
|---|---|
| Visitor identity (sets `hmc_vid` cookie on load) | `GET /api/context/hello` |
| "Your next step" cards | `GET /api/context/next-actions` |
| Signal capture (searches, tool opens, check-ins) | `POST /api/public/context/event` |
| Upcoming events | `GET /api/public/events` |
| Daily-needs / referral submit | `POST /api/public/referrals` |
| Client sign-in (passwordless) | `POST /api/client/auth/request-link` + `/verify-link` |
| Signed-in profile, credits, referrals | `GET /api/client/me` |
| Donate | https://www.healthmatters.clinic/donate |

All requests send `credentials: 'include'` so the first-party `hmc_vid` and
`hmc_client` cookies flow across `*.healthmatters.clinic`.

## Develop

```bash
npm install
npm run dev      # http://localhost:5175
npm run build    # production build to dist/
```

Set `VITE_API_BASE` in `.env` to point at a non-production backend if needed.

## Deploy

Static build. Intended to serve at `hub.healthmatters.clinic` (see `public/CNAME`),
the same GitHub Pages pattern as the other HMC micro-apps.
