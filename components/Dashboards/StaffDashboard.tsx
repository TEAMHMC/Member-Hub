import React, { useEffect, useMemo, useState } from 'react';
import {
  SlidersHorizontal, LifeBuoy, Megaphone, Users, ShieldCheck,
  Check, X, Search, Trash2, AlertTriangle, ExternalLink,
} from 'lucide-react';
import type { StaffStanding } from '../../types';
import { staffApi, type HubStaffOverview, type MemberLookup } from '../../services/api';
import { PATHWAYS } from '../Academy/catalog';

/**
 * The console for people who maintain the Member Hub.
 *
 * This surface has existed as a placeholder since the Hub was built, because the
 * Hub had no staff identity to put behind it: types.ts declared STAFF and ADMIN,
 * App.tsx routed both here, and the session restore hardcoded every session to
 * CLIENT, so the route could not be taken. Staff standing now comes from the
 * server on each call, derived from the volunteers roster, and this is what it
 * unlocks.
 *
 * Scope is configuration and non-clinical support. Nothing here reads a chart, a
 * screening result, or an assessment. The Hub signs people in with a six digit
 * email code, which is a weaker credential than the portal's password and OAuth
 * login, so clinical work stays in the portal behind the stronger one. That is a
 * deliberate boundary, not an unfinished piece.
 *
 * Sections appear according to the capabilities the server granted this session.
 * A coordinator sees course visibility, announcements and member support; an
 * admin additionally sees who holds Hub access.
 */

type Tab = 'academy' | 'content' | 'support' | 'staffAdmin';

const ACADEMY_STATES: { value: string; label: string; help: string }[] = [
  { value: 'open', label: 'Open', help: 'Members can see it and enroll now.' },
  { value: 'upcoming', label: 'Upcoming', help: 'Shown with a save-my-spot action and the cohort label.' },
  { value: 'past', label: 'Past cohort', help: 'Shown as delivered, with no way to enroll.' },
  { value: 'hidden', label: 'Hidden', help: 'Not shown to members at all.' },
];

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'academy', label: 'Courses', icon: <SlidersHorizontal size={16} /> },
  { id: 'content', label: 'Announcements', icon: <Megaphone size={16} /> },
  { id: 'support', label: 'Member support', icon: <LifeBuoy size={16} /> },
  { id: 'staffAdmin', label: 'Hub access', icon: <Users size={16} /> },
];

const card = 'bg-white rounded-3xl border border-zinc-200/70 p-6';
const label = 'text-[10px] font-black uppercase tracking-widest text-zinc-400';
const input = 'w-full px-4 py-3 rounded-2xl border border-zinc-300 text-sm focus:border-[#233DFF] focus:outline-none';
const primary = 'px-5 py-3 rounded-full bg-[#233DFF] text-white text-[11px] font-black uppercase tracking-wider disabled:opacity-50';

interface Props {
  staff: StaffStanding;
  onExit: () => void;
}

const StaffDashboard: React.FC<Props> = ({ staff, onExit }) => {
  const allowed = useMemo(() => TABS.filter((t) => staff.capabilities.includes(t.id)), [staff.capabilities]);
  const [tab, setTab] = useState<Tab>(allowed[0]?.id || 'support');
  const [overview, setOverview] = useState<HubStaffOverview | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  const load = () => {
    staffApi.overview()
      .then((o) => { setOverview(o); setLoadError(null); })
      .catch(() => setLoadError('The console could not load. Your staff access may have changed, or the service is unreachable.'));
  };
  useEffect(load, []);

  return (
    <div className="max-w-5xl mx-auto py-8 animate-in fade-in duration-500">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <p className={label}>Staff</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mt-1">Manage the hub</h1>
          <p className="text-sm text-zinc-500 mt-2">
            Signed in as {staff.name}. {staff.role}.
          </p>
        </div>
        <button onClick={onExit} className="px-5 py-3 rounded-full border border-zinc-300 text-[11px] font-black uppercase tracking-wider text-zinc-600 hover:bg-white">
          Back to member view
        </button>
      </div>

      {loadError && (
        <div className="mb-6 flex items-start gap-3 rounded-3xl border border-amber-200 bg-amber-50 p-5">
          <AlertTriangle size={18} className="text-amber-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-amber-900">{loadError}</p>
            <button onClick={load} className="mt-2 text-xs font-bold uppercase tracking-wider text-amber-800 hover:underline">Try again</button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {allowed.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-black uppercase tracking-wider transition-colors ${
              tab === t.id ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-500 border border-zinc-200 hover:text-zinc-900'
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {tab === 'academy' && <AcademyPanel overview={overview} onChanged={load} />}
      {tab === 'content' && <AnnouncementsPanel overview={overview} onChanged={load} />}
      {tab === 'support' && <SupportPanel />}
      {tab === 'staffAdmin' && <AccessPanel />}
    </div>
  );
};

/** What the Academy shows members, per pathway. */
const AcademyPanel: React.FC<{ overview: HubStaffOverview | null; onChanged: () => void }> = ({ overview, onChanged }) => {
  const [saving, setSaving] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [note, setNote] = useState<string | null>(null);

  const overrides: Record<string, { state: string; cohortLabel: string | null }> = overview?.academy.overrides || {};
  useEffect(() => {
    setDrafts(Object.fromEntries(Object.entries(overrides).map(([k, v]) => [k, v.cohortLabel || ''])));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overview]);

  const save = async (pathwayId: string, state: string) => {
    setSaving(pathwayId);
    setNote(null);
    try {
      await staffApi.setAcademyVisibility(pathwayId, state, state === 'upcoming' ? (drafts[pathwayId] || '').trim() : '');
      setNote('Saved. Members see the change within about a minute.');
      onChanged();
    } catch {
      setNote('That did not save. Nothing was changed.');
    } finally {
      setSaving(null);
    }
  };

  return (
    <div className="space-y-3">
      <div className={card}>
        <p className={label}>Course availability</p>
        <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
          A pathway can be finished and not ready to show, or finished and over. These four states
          cover what actually happens, so a delivered cohort reads as delivered instead of inviting
          people to enroll in something that already ran.
        </p>
        {note && <p className="text-xs font-semibold text-[#233DFF] mt-3">{note}</p>}
      </div>

      {PATHWAYS.map((p) => {
        const state = overrides[p.id]?.state || 'open';
        return (
          <div key={p.id} className={card}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-semibold text-zinc-900 truncate">{p.title}</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  {p.courses.length} course{p.courses.length === 1 ? '' : 's'}
                  {overrides[p.id] ? ' · set by staff' : ' · default'}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {ACADEMY_STATES.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => save(p.id, s.value)}
                    disabled={saving === p.id}
                    title={s.help}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border transition-colors disabled:opacity-50 ${
                      state === s.value ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-600 border-zinc-300 hover:bg-zinc-50'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {state === 'upcoming' && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <input
                  value={drafts[p.id] ?? ''}
                  onChange={(e) => setDrafts((d) => ({ ...d, [p.id]: e.target.value }))}
                  placeholder="New cohort, fall 2026"
                  maxLength={80}
                  className={`${input} flex-1 min-w-[240px]`}
                  aria-label={`Cohort label for ${p.title}`}
                />
                <button onClick={() => save(p.id, 'upcoming')} disabled={saving === p.id} className={primary}>
                  {saving === p.id ? 'Saving' : 'Save label'}
                </button>
              </div>
            )}

            <p className="text-xs text-zinc-500 mt-3">{ACADEMY_STATES.find((s) => s.value === state)?.help}</p>
          </div>
        );
      })}
    </div>
  );
};

/** What the Hub tells members. */
const AnnouncementsPanel: React.FC<{ overview: HubStaffOverview | null; onChanged: () => void }> = ({ overview, onChanged }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('General');
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  const post = async () => {
    if (!title.trim() || !content.trim()) return;
    setBusy(true);
    setNote(null);
    try {
      await staffApi.postAnnouncement(title.trim(), content.trim(), category);
      setTitle(''); setContent('');
      setNote('Posted.');
      onChanged();
    } catch {
      setNote('That did not post. Nothing was published.');
    } finally {
      setBusy(false);
    }
  };

  const remove = async (id: string) => {
    try {
      await staffApi.deleteAnnouncement(id);
      onChanged();
    } catch {
      setNote('That could not be removed.');
    }
  };

  return (
    <div className="space-y-3">
      <div className={card}>
        <p className={label}>Post an announcement</p>
        <div className="mt-4 space-y-3">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" maxLength={140} className={input} aria-label="Announcement title" />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="What members need to know" maxLength={4000} rows={4} className={input} aria-label="Announcement content" />
          <div className="flex flex-wrap items-center gap-3">
            <select value={category} onChange={(e) => setCategory(e.target.value)} className={`${input} max-w-[220px]`} aria-label="Category">
              <option>General</option>
              <option>Events</option>
              <option>Academy</option>
              <option>Services</option>
            </select>
            <button onClick={post} disabled={busy || !title.trim() || !content.trim()} className={primary}>
              {busy ? 'Posting' : 'Post'}
            </button>
            {note && <span className="text-xs font-semibold text-[#233DFF]">{note}</span>}
          </div>
        </div>
      </div>

      <div className={card}>
        <p className={label}>Recent</p>
        {!overview?.announcements.length && <p className="text-sm text-zinc-500 mt-3">Nothing posted yet.</p>}
        <div className="mt-3 divide-y divide-zinc-100">
          {overview?.announcements.map((a) => (
            <div key={a.id} className="flex items-center justify-between gap-4 py-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-900 truncate">{a.title}</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  {a.category || 'General'}
                  {a.date ? ` · ${new Date(a.date).toLocaleDateString()}` : ''}
                </p>
              </div>
              <button onClick={() => remove(a.id)} aria-label={`Remove ${a.title}`} className="p-2 rounded-full text-zinc-400 hover:text-[#FF6E40] hover:bg-orange-50 shrink-0">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Why somebody cannot sign in.
 *
 * The question staff get is "I tried and nothing happened", so this answers that
 * and stops. Whether the address is known, whether our email to it is suppressed
 * after a bounce or complaint, and when they last got in. No profile, no
 * referrals, no results. Anything about a person's care is a portal question.
 */
const SupportPanel: React.FC = () => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<MemberLookup | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const look = async () => {
    const addr = email.trim();
    if (!addr) return;
    setBusy(true); setErr(null); setResult(null);
    try {
      setResult(await staffApi.lookupMember(addr));
    } catch {
      setErr('That lookup failed. Check the address and try again.');
    } finally {
      setBusy(false);
    }
  };

  const verdict = (r: MemberLookup) => {
    if (!r.known) return { tone: 'amber', text: 'No account with this address. They can create one by requesting a code, or with an invitation if signup is closed.' };
    if (r.emailSuppressed) return { tone: 'red', text: 'The account exists, but our email to this address is suppressed after a bounce or complaint. Codes will not arrive. Get them onto a different address.' };
    return { tone: 'green', text: 'The account exists and codes can be sent. If they never arrive, check the spam folder and confirm the address is spelled the way it is here.' };
  };

  return (
    <div className="space-y-3">
      <div className={card}>
        <p className={label}>Can this person sign in</p>
        <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
          Sign-in status only. Care records stay in the volunteer portal, behind the stronger login.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') look(); }}
            placeholder="name@example.com"
            type="email"
            className={`${input} flex-1 min-w-[240px]`}
            aria-label="Member email address"
          />
          <button onClick={look} disabled={busy || !email.trim()} className={`${primary} flex items-center gap-2`}>
            <Search size={14} /> {busy ? 'Looking' : 'Look up'}
          </button>
        </div>
        {err && <p className="text-xs font-semibold text-[#FF6E40] mt-3">{err}</p>}
      </div>

      {result && (
        <div className={card}>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Row ok={result.known} yes="Account found" no="No account" />
            <Row ok={!result.emailSuppressed} yes="Email deliverable" no="Email suppressed" />
            <Row ok={result.canRequestCode} yes="Can receive a code" no="Cannot receive a code" />
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed">{verdict(result).text}</p>
          <p className="text-[11px] text-zinc-400 mt-4">
            Record: {result.record}
            {result.lastSignIn ? ` · last signed in ${new Date(result.lastSignIn).toLocaleString()}` : ' · no sign-in recorded'}
          </p>
        </div>
      )}
    </div>
  );
};

const Row: React.FC<{ ok: boolean; yes: string; no: string }> = ({ ok, yes, no }) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
    ok ? 'bg-emerald-50 text-emerald-700' : 'bg-orange-50 text-[#FF6E40]'
  }`}>
    {ok ? <Check size={12} /> : <X size={12} />} {ok ? yes : no}
  </span>
);

/** Who can maintain the Hub. Read only, on purpose. */
const AccessPanel: React.FC = () => {
  const [rows, setRows] = useState<Array<{ name: string; email: string; role: string; isAdmin: boolean; capabilities: string[] }> | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    staffApi.roster().then((r) => setRows(r.staff)).catch(() => setErr(true));
  }, []);

  return (
    <div className="space-y-3">
      <div className={card}>
        <div className="flex items-start gap-3">
          <ShieldCheck size={18} className="text-[#233DFF] mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-zinc-900">Hub access follows the volunteer portal roster</p>
            <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
              There is no separate list to keep. Someone who holds an admin flag or a coordinator
              role in the portal can maintain the Hub, and removing that role removes this access on
              their next request. To change who appears here, change their role in the portal.
            </p>
            <a
              href="https://volunteer.healthmatters.clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-black uppercase tracking-wider text-[#233DFF] hover:underline"
            >
              Open the portal <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {err && <div className={card}><p className="text-sm text-zinc-500">The roster could not load.</p></div>}

      {rows && (
        <div className={card}>
          <p className={label}>{rows.length} with hub access</p>
          <div className="mt-3 divide-y divide-zinc-100">
            {rows.map((r) => (
              <div key={r.email} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-900 truncate">{r.name}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5 truncate">{r.role}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {r.capabilities.map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-full bg-zinc-100 text-[9px] font-black uppercase tracking-wider text-zinc-600">
                      {c === 'staffAdmin' ? 'access' : c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDashboard;
