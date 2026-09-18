import React, { useEffect, useMemo, useState } from 'react';
import {
  SlidersHorizontal, LifeBuoy, Megaphone, Users, ShieldCheck,
  Check, X, Search, Trash2, AlertTriangle, ExternalLink, FileText, Plus,
} from 'lucide-react';
import type { StaffStanding } from '../../types';
import {
  staffApi,
  type HubStaffOverview, type MemberLookup,
  type HubPerson, type HubTier,
  type HubCurriculumCourse, type HubCurriculumDetail,
} from '../../services/api';
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

type Tab = 'academy' | 'curriculum' | 'content' | 'support' | 'staffAdmin';

const ACADEMY_STATES: { value: string; label: string; help: string }[] = [
  { value: 'open', label: 'Open', help: 'Members can see it and enroll now.' },
  { value: 'upcoming', label: 'Upcoming', help: 'Shown with a save-my-spot action and the cohort label.' },
  { value: 'past', label: 'Past cohort', help: 'Shown as delivered, with no way to enroll.' },
  { value: 'hidden', label: 'Hidden', help: 'Not shown to members at all.' },
];

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'academy', label: 'Courses', icon: <SlidersHorizontal size={16} /> },
  { id: 'curriculum', label: 'Curriculum', icon: <FileText size={16} /> },
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
  /** The address this session signed in with. StaffStanding carries a name and a role but
      not an address, and self-removal has to be recognisable before the button is drawn. */
  selfEmail: string;
  onExit: () => void;
}

const StaffDashboard: React.FC<Props> = ({ staff, selfEmail, onExit }) => {
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
      {tab === 'curriculum' && <CurriculumPanel />}
      {tab === 'staffAdmin' && <AccessPanel selfEmail={selfEmail} />}
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
          Look up whether someone has a Hub account and can sign in.
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
          {/* Which address this verdict is about. A staffer on a call looks up several
              people in a row, and a card that does not name the address is a card they
              have to trust their memory about. */}
          <p className="text-[13px] font-semibold text-zinc-900 mb-3 break-all">{result.email}</p>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Row ok={result.known} yes="Account found" no="No account" />
            <Row ok={!result.emailSuppressed} yes="Email deliverable" no="Email suppressed" />
            <Row ok={result.canRequestCode} yes="Can receive a code" no="Cannot receive a code" />
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed">{verdict(result).text}</p>
          <p className="text-[11px] text-zinc-400 mt-4">
            Record: {result.record}
            {/* Pacific, not the reader's zone. A coordinator working from anywhere else was
                being shown a sign-in time that did not match the one HMC recorded, which is
                the wrong thing to read out to somebody on the phone. */}
            {result.lastSignIn
              ? ` · last signed in ${new Date(result.lastSignIn).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', dateStyle: 'medium', timeStyle: 'short' })} Pacific`
              : ' · no sign-in recorded'}
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
/**
 * Who maintains the Hub, managed from the Hub.
 *
 * This was a read-only list with a line telling whoever read it to go and change somebody's
 * role in the volunteer portal. That was accurate and it was the problem: Hub standing came
 * from the volunteers collection alone, so giving an employee the console meant first
 * enrolling them as a volunteer. Staff are not volunteers, and the Hub could not be handed
 * over without handing over the portal too.
 *
 * The Hub now keeps its own roster. Somebody added here needs no volunteer record and no
 * portal account; they sign in to the Hub with their own address and the console is there.
 * Anybody still reaching the console through a portal role keeps doing so, and is listed
 * separately below so it is obvious which list a person is on.
 */
/**
 * Reviewing and correcting what a course says, without leaving the Hub.
 *
 * The review queue and the editor have always been in the volunteer portal, so the person
 * who approves a course worked in a different application from everybody reading it, and
 * needed a portal account and a volunteer record to fix a sentence. This is the same work,
 * against the same records, on the Hub session they already have.
 *
 * A course with no correction is showing the Hub's own catalogue text. That is not the
 * same as unreviewed, and the list says which it is rather than leaving a reviewer to
 * guess from an empty editor.
 */
const CurriculumPanel: React.FC = () => {
  const [courses, setCourses] = useState<HubCurriculumCourse[] | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [detail, setDetail] = useState<HubCurriculumDetail | null>(null);
  const [sections, setSections] = useState<{ heading: string; body: string }[]>([]);
  const [intro, setIntro] = useState('');
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const load = () => {
    staffApi.curriculum()
      .then((r) => setCourses(r.courses))
      .catch(() => setErr('The course list could not load.'));
  };
  useEffect(load, []);

  const open = (id: string) => {
    setOpenId(id); setDetail(null); setErr(null); setDone(null); setNote('');
    staffApi.course(id)
      .then((d) => {
        setDetail(d);
        setIntro(d.content || '');
        setSections(d.sections.length ? d.sections : [{ heading: '', body: '' }]);
      })
      .catch(() => setErr('That course could not be opened.'));
  };

  const release = async () => {
    if (!detail) return;
    const clean = sections
      .map((x) => ({ heading: x.heading.trim(), body: x.body.trim() }))
      .filter((x) => x.heading || x.body);
    if (!clean.length) { setErr('A course needs at least one section.'); return; }
    const incomplete = clean.find((x) => !x.heading || !x.body);
    if (incomplete) { setErr('Every section needs both a heading and a body.'); return; }

    setBusy(true); setErr(null); setDone(null);
    try {
      const r = await staffApi.releaseCourse(detail.id, intro.trim(), clean, note.trim());
      setDone(`Released as version ${r.version}. Members reading this course see it now.`);
      load();
      staffApi.course(detail.id).then(setDetail).catch(() => {});
    } catch (e) {
      setErr('That could not be released. Nothing was changed.');
    } finally { setBusy(false); }
  };

  const setSection = (i: number, patch: Partial<{ heading: string; body: string }>) =>
    setSections((xs) => xs.map((x, n) => (n === i ? { ...x, ...patch } : x)));

  const filtered = (courses || []).filter((c) =>
    !query.trim() || c.title.toLowerCase().includes(query.trim().toLowerCase()));

  if (openId && detail) {
    return (
      <div className="space-y-3">
        <button
          onClick={() => { setOpenId(null); setDetail(null); }}
          className="text-[11px] font-black uppercase tracking-wider text-zinc-500 hover:text-zinc-900"
        >
          &larr; All courses
        </button>

        <div className={card}>
          <p className={label}>{detail.hasCorrection ? `Released version ${detail.version}` : 'No correction released'}</p>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mt-1">{detail.title}</h2>
          {!detail.hasCorrection && (
            <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
              This course is showing the text built into the Hub. Anything you write here is
              released over it, and members see it as soon as you release it. Nothing is
              published while you are typing.
            </p>
          )}
        </div>

        <div className={card}>
          <label className={label} htmlFor="curr-intro">Opening</label>
          <textarea
            id="curr-intro"
            className={`${input} mt-2 min-h-[90px]`}
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
            placeholder="The first thing a learner reads. Optional."
          />
        </div>

        {sections.map((sec, i) => (
          <div key={i} className={card}>
            <div className="flex items-center justify-between gap-3">
              <label className={label} htmlFor={`curr-h-${i}`}>Section {i + 1}</label>
              {sections.length > 1 && (
                <button
                  onClick={() => setSections((xs) => xs.filter((_, n) => n !== i))}
                  className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-zinc-400 hover:text-[#FF6E40]"
                >
                  <Trash2 size={12} /> Remove
                </button>
              )}
            </div>
            <input
              id={`curr-h-${i}`}
              className={`${input} mt-2 font-semibold`}
              value={sec.heading}
              placeholder="Heading"
              onChange={(e) => setSection(i, { heading: e.target.value })}
            />
            <textarea
              className={`${input} mt-2 min-h-[160px]`}
              value={sec.body}
              placeholder="What this section teaches."
              onChange={(e) => setSection(i, { body: e.target.value })}
            />
          </div>
        ))}

        <button
          onClick={() => setSections((xs) => [...xs, { heading: '', body: '' }])}
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 text-[11px] font-black uppercase tracking-wider text-zinc-600 hover:bg-white"
        >
          <Plus size={14} /> Add a section
        </button>

        <div className={card}>
          <label className={label} htmlFor="curr-note">What changed, and why</label>
          <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
            Kept with the version. A CE audit asks what was corrected and on whose authority,
            and a blank note a year from now cannot answer it.
          </p>
          <input
            id="curr-note"
            className={`${input} mt-3`}
            value={note}
            placeholder="Corrected the GAD-7 severity bands to match the validated source."
            onChange={(e) => setNote(e.target.value)}
          />
          {err && <p className="text-sm font-semibold text-[#FF6F91] mt-4">{err}</p>}
          {done && <p className="text-sm font-semibold text-emerald-700 mt-4">{done}</p>}
          <button onClick={release} className={`${primary} mt-5`} disabled={busy}>
            {busy ? 'Releasing' : 'Release to members'}
          </button>
        </div>

        {detail.history.length > 0 && (
          <div className={card}>
            <p className={label}>Earlier versions</p>
            <div className="mt-3 divide-y divide-zinc-100">
              {detail.history.map((h) => (
                <div key={h.version} className="py-2.5">
                  <p className="text-sm text-zinc-700">
                    Version {h.version}{h.note ? ` — ${h.note}` : ''}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {h.archivedBy || 'unknown'}{h.archivedAt ? ` · ${h.archivedAt.slice(0, 10)}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className={card}>
        <p className={label}>Course content</p>
        <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
          Open a course to read what a learner reads, correct it, and release the correction.
          Every release keeps the version before it, so nothing is lost and the history says
          who changed what.
        </p>
        <div className="relative mt-4">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" />
          <input
            className={`${input} pl-11`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a course"
            aria-label="Find a course"
          />
        </div>
      </div>

      {err && <div className={card}><p className="text-sm text-zinc-500">{err}</p></div>}

      {courses && (
        <div className={card}>
          <p className={label}>{filtered.length} {filtered.length === 1 ? 'course' : 'courses'}</p>
          <div className="mt-3 divide-y divide-zinc-100">
            {filtered.map((c) => (
              <button
                key={c.id}
                onClick={() => open(c.id)}
                className="w-full flex flex-wrap items-center justify-between gap-3 py-3.5 text-left group"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-900 group-hover:text-[#233DFF] truncate">{c.title}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {c.corrected
                      ? `Version ${c.version}${c.updatedByName ? ` · ${c.updatedByName}` : ''}${c.updatedAt ? ` · ${c.updatedAt.slice(0, 10)}` : ''}`
                      : 'Showing the text built into the Hub'}
                  </p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0 ${
                  c.corrected ? 'bg-emerald-50 text-emerald-700' : 'bg-zinc-100 text-zinc-500'
                }`}>
                  {c.corrected ? 'Corrected' : 'Unchanged'}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const AccessPanel: React.FC<{ selfEmail: string }> = ({ selfEmail }) => {
  const [tiers, setTiers] = useState<HubTier[]>([]);
  const [people, setPeople] = useState<HubPerson[] | null>(null);
  const [portalRoster, setPortalRoster] = useState<Array<{ name: string; email: string; role: string; capabilities: string[] }> | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [tier, setTier] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);

  const load = () => {
    staffApi.people()
      .then((r) => { setPeople(r.people); setTiers(r.tiers); if (!tier && r.tiers[0]) setTier(r.tiers[0].id); })
      .catch(() => setErr('The Hub roster could not load.'));
    staffApi.roster().then((r) => setPortalRoster(r.staff)).catch(() => setPortalRoster([]));
  };
  useEffect(load, []);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValid || !name.trim() || !tier) return;
    setBusy(true); setErr(null); setDone(null);
    try {
      await staffApi.grantAccess(email.trim().toLowerCase(), name.trim(), tier);
      setDone(`${name.trim()} can now sign in to the Hub and open this console.`);
      setEmail(''); setName('');
      load();
    } catch {
      setErr('That could not be saved. Check the address and try again.');
    } finally { setBusy(false); }
  };

  const remove = async (person: HubPerson) => {
    setBusy(true); setErr(null); setDone(null);
    try {
      await staffApi.revokeAccess(person.email);
      setDone(`${person.name || person.email} no longer has Hub access.`);
      load();
    } catch {
      setErr('That could not be removed just then.');
    } finally { setBusy(false); }
  };

  const active = (people || []).filter((p) => p.active);
  const removed = (people || []).filter((p) => !p.active);
  const chosen = tiers.find((t) => t.id === tier);

  return (
    <div className="space-y-3">
      <form onSubmit={add} className={card}>
        <p className={label}>Give someone access to the hub</p>
        <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
          They sign in at the Hub with this address, by email code or with Google. No volunteer
          record and no portal account is needed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <div>
            <label className={label} htmlFor="hub-access-name">Full name</label>
            <input id="hub-access-name" className={`${input} mt-2`} value={name} placeholder="Chloe Adeyemi"
                   onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className={label} htmlFor="hub-access-email">Email they sign in with</label>
            <input id="hub-access-email" type="email" className={`${input} mt-2`} value={email} placeholder="name@healthmatters.clinic"
                   onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        <p className={`${label} mt-5`}>What they can do</p>
        <div className="grid grid-cols-1 gap-2 mt-2">
          {tiers.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTier(t.id)}
              aria-pressed={tier === t.id}
              className={`text-left rounded-2xl border p-4 transition-all ${
                tier === t.id ? 'border-[#233DFF] bg-blue-50/60 ring-4 ring-[#233DFF]/10' : 'border-zinc-200 bg-white hover:border-zinc-300'
              }`}
            >
              <p className="text-sm font-semibold text-zinc-900">{t.label}</p>
              <p className="text-xs text-zinc-500 leading-relaxed mt-1">{t.describes}</p>
            </button>
          ))}
        </div>

        {err && <p className="text-sm font-semibold text-[#FF6F91] mt-4">{err}</p>}
        {done && <p className="text-sm font-semibold text-emerald-700 mt-4">{done}</p>}

        <button type="submit" className={`${primary} mt-5`} disabled={busy || !emailValid || !name.trim() || !tier}>
          {busy ? 'Saving' : `Add as ${chosen?.label || 'staff'}`}
        </button>
      </form>

      {active.length > 0 && (
        <div className={card}>
          <p className={label}>{active.length} with hub access</p>
          <div className="mt-3 divide-y divide-zinc-100">
            {active.map((p) => (
              <div key={p.email} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-900 truncate">{p.name || p.email}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5 truncate">{p.tierLabel} · {p.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.capabilities.map((c) => (
                      <span key={c} className="px-2.5 py-1 rounded-full bg-zinc-100 text-[9px] font-black uppercase tracking-wider text-zinc-600">
                        {c === 'staffAdmin' ? 'access' : c}
                      </span>
                    ))}
                  </div>
                  {/* Nobody removes their own access. An administrator who does it by accident
                      leaves the Hub with no administrator and no way to appoint another. */}
                  {p.email.toLowerCase() !== selfEmail.trim().toLowerCase() && (
                    <button
                      onClick={() => remove(p)}
                      disabled={busy}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-zinc-300 text-[10px] font-black uppercase tracking-wider text-zinc-500 hover:text-[#FF6E40] hover:border-[#FF6E40] disabled:opacity-50"
                    >
                      <Trash2 size={12} /> Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {removed.length > 0 && (
        <div className={card}>
          <p className={label}>Previously had access</p>
          <p className="text-xs text-zinc-500 mt-2">
            Kept rather than deleted, so there is a record of who was let in and who took it away.
          </p>
          <div className="mt-3 divide-y divide-zinc-100">
            {removed.map((p) => (
              <div key={p.email} className="flex items-center justify-between gap-3 py-2.5">
                <p className="text-sm text-zinc-500 truncate">{p.name || p.email}</p>
                <p className="text-[11px] text-zinc-400 shrink-0">removed {p.revokedAt ? p.revokedAt.slice(0, 10) : ''}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {portalRoster && portalRoster.length > 0 && (
        <div className={card}>
          <div className="flex items-start gap-3">
            <ShieldCheck size={18} className="text-zinc-400 mt-0.5 shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-900">Also here through a volunteer portal role</p>
              <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                These {portalRoster.length} reach the console because of the role they hold in the
                portal, not because they were added above. Change it there, or add them here to give
                them Hub access that stands on its own.
              </p>
              <div className="mt-3 divide-y divide-zinc-100">
                {portalRoster.map((r) => (
                  <div key={r.email} className="flex items-center justify-between gap-3 py-2.5">
                    <p className="text-sm text-zinc-700 truncate">{r.name}</p>
                    <p className="text-[11px] text-zinc-400 shrink-0 truncate">{r.role}</p>
                  </div>
                ))}
              </div>
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
      )}
    </div>
  );
};

export default StaffDashboard;
