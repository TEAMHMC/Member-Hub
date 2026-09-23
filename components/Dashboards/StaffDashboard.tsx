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
import {
  findCourse, editableSections, coursePageDraft, changedSections, releaseSections,
  pageDraftChanged, type EditableSection, type CoursePageDraft,
} from '../Academy/editorSource';
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
      not an address, and self-removal has to be recognizable before the button is drawn. */
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
const REQUIREMENT_KINDS = ['attend', 'assignment', 'practicum', 'evaluation'] as const;

/**
 * Correcting a course, all of it.
 *
 * This edited lesson prose and nothing else, and it opened on empty boxes for any course
 * with no correction released, so an editor could not see what a learner currently reads
 * and could not touch the part of the page they read first: the promise on the card,
 * About this course, the objectives, the prerequisites, who it is for, and what completion
 * requires. It now opens on the live text, whether that comes from the catalogue or from a
 * correction already released, and every section of the page is editable.
 *
 * What it still will not touch: knowledge checks, the exam and the CE approval. Those are
 * the assessment record and the approved title, and neither belongs in a prose editor.
 */
const CurriculumPanel: React.FC = () => {
  const [courses, setCourses] = useState<HubCurriculumCourse[] | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [detail, setDetail] = useState<HubCurriculumDetail | null>(null);
  const [sections, setSections] = useState<EditableSection[]>([]);
  const [openedSections, setOpenedSections] = useState<EditableSection[]>([]);
  const [page, setPage] = useState<CoursePageDraft | null>(null);
  const [openedPage, setOpenedPage] = useState<CoursePageDraft | null>(null);
  const [inCatalogue, setInCatalogue] = useState(true);
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [preview, setPreview] = useState(false);

  const load = () => {
    staffApi.curriculum()
      .then((r) => setCourses(r.courses))
      .catch(() => setErr('The course list could not load.'));
  };
  useEffect(load, []);

  const open = (id: string) => {
    setOpenId(id); setDetail(null); setErr(null); setDone(null); setNote(''); setPreview(false);
    staffApi.course(id)
      .then((d) => {
        setDetail(d);
        // What is on the page right now: the catalogue, with any released correction over it.
        const found = findCourse(id);
        const override = { content: d.content || '', sections: d.sections || [], page: d.page || undefined, version: d.version || 0 };
        setInCatalogue(Boolean(found));
        if (found) {
          const secs = editableSections(found.course, override);
          setSections(secs);
          setOpenedSections(secs.map((s) => ({ ...s })));
          const draft = coursePageDraft(found.course, override);
          setPage(draft);
          setOpenedPage({ ...draft, requirements: draft.requirements.map((r) => ({ ...r })) });
        } else {
          // A course the server lists but this build does not carry. Show what was released
          // rather than pretending the course is empty.
          const secs = (d.sections || []).map((s) => ({ ...s, corrected: true }));
          setSections(secs);
          setOpenedSections(secs.map((s) => ({ ...s })));
          setPage(null); setOpenedPage(null);
        }
      })
      .catch(() => setErr('That course could not be opened.'));
  };

  const setSection = (i: number, patch: Partial<EditableSection>) =>
    setSections((xs) => xs.map((x, n) => (n === i ? { ...x, ...patch } : x)));

  const setPageField = (patch: Partial<CoursePageDraft>) =>
    setPage((p) => (p ? { ...p, ...patch } : p));

  const setRequirement = (i: number, patch: Partial<CoursePageDraft['requirements'][number]>) =>
    setPage((p) => (p ? { ...p, requirements: p.requirements.map((r, n) => (n === i ? { ...r, ...patch } : r)) } : p));

  const release = async () => {
    if (!detail) return;
    const changed = changedSections(sections, openedSections);
    const pageChanged = page && openedPage ? pageDraftChanged(page, openedPage) : false;
    if (!changed.length && !pageChanged) {
      setErr('Nothing has changed yet, so there is nothing to release.');
      return;
    }
    const incomplete = sections.find((s) => (s.heading.trim() && !s.body.trim()) || (!s.heading.trim() && s.body.trim()));
    if (incomplete) { setErr('Every section needs both a heading and a body.'); return; }

    setBusy(true); setErr(null); setDone(null);
    try {
      const body: Record<string, unknown> = { note: note.trim() };
      if (changed.length) {
        body.content = detail.content || '';
        // Corrections released earlier are kept, so releasing one lesson does not drop them.
        body.sections = releaseSections(detail.sections || [], changed);
      }
      if (page) {
        body.page = {
          promise: page.promise,
          about: page.about,
          objectives: page.objectives,
          prerequisites: page.prerequisites,
          whoFor: page.whoFor,
          requirements: page.requirements
            .filter((r) => r.label.trim())
            .map((r) => ({ id: r.id, label: r.label, detail: r.detail, kind: r.kind })),
        };
      }
      const r = await staffApi.releaseCourseFull(detail.id, body);
      setDone(`Released as version ${r.version}. Members reading this course see it now.`);
      load();
      open(detail.id);
    } catch {
      setErr('That could not be released. Nothing was changed.');
    } finally { setBusy(false); }
  };

  const filtered = (courses || []).filter((c) =>
    !query.trim() || c.title.toLowerCase().includes(query.trim().toLowerCase()));

  if (openId && detail) {
    const paragraphs = (v: string) => v.split(/\n\s*\n+/).map((x) => x.trim()).filter(Boolean);
    const lines = (v: string) => v.split(/\n+/).map((x) => x.replace(/^[-*•]\s*/, '').trim()).filter(Boolean);
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => { setOpenId(null); setDetail(null); }}
            className="text-[11px] font-black uppercase tracking-wider text-zinc-500 hover:text-zinc-900"
          >
            &larr; All courses
          </button>
          <button
            onClick={() => setPreview((v) => !v)}
            className="text-[11px] font-black uppercase tracking-wider text-zinc-500 hover:text-zinc-900"
          >
            {preview ? 'Back to editing' : 'Preview the page'}
          </button>
        </div>

        <div className={card}>
          <p className={label}>{detail.hasCorrection ? `Released version ${detail.version}` : 'No correction released'}</p>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mt-1">{detail.title}</h2>
          <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
            {inCatalogue
              ? 'Everything below is what a learner reads right now. Change what needs changing and release it. Knowledge checks, the exam and the CE approval are not edited here.'
              : 'This build does not carry the course, so only what has already been released is shown.'}
          </p>
        </div>

        {preview ? (
          <div className={card}>
            <p className={label}>Preview, in the order a learner sees it</p>
            {page && (
              <div className="mt-4 space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">On the course card and at the top</p>
                  <p className="text-lg text-zinc-800 mt-1">{page.promise || <span className="text-zinc-300">Nothing yet</span>}</p>
                </div>
                {page.requirements.length > 0 && (
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">What completion requires</p>
                    <ol className="mt-2 space-y-2">
                      {page.requirements.filter((r) => r.label.trim()).map((r, i) => (
                        <li key={i} className="text-sm text-zinc-700">
                          <span className="font-semibold">{i + 1}. {r.label}</span>
                          {r.detail ? <span className="block text-zinc-500">{r.detail}</span> : null}
                          <span className="block text-[10px] uppercase tracking-widest text-zinc-400 mt-0.5">{r.kind}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">About this course</p>
                  {paragraphs(page.about).map((t, i) => <p key={i} className="text-sm text-zinc-700 mt-2 leading-relaxed">{t}</p>)}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Learning objectives</p>
                  <ul className="mt-2 space-y-1">
                    {lines(page.objectives).map((t, i) => <li key={i} className="text-sm text-zinc-700">{t}</li>)}
                  </ul>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Prerequisites</p>
                    <p className="text-sm text-zinc-700 mt-2">{page.prerequisites || <span className="text-zinc-300">Nothing yet</span>}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Who this is for</p>
                    <p className="text-sm text-zinc-700 mt-2">{page.whoFor || <span className="text-zinc-300">Nothing yet</span>}</p>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">This course contains the following modules</p>
              <ol className="mt-2 space-y-3">
                {sections.filter((s) => s.heading.trim()).map((s, i) => (
                  <li key={i}>
                    <p className="text-sm font-semibold text-zinc-800">{i + 1}. {s.heading}</p>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{s.body.slice(0, 220)}{s.body.length > 220 ? '...' : ''}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ) : (
          <>
            {page && (
              <>
                <div className={card}>
                  <label className={label} htmlFor="curr-promise">The one line on the course card</label>
                  <input
                    id="curr-promise"
                    className={`${input} mt-2`}
                    value={page.promise}
                    onChange={(e) => setPageField({ promise: e.target.value })}
                    placeholder="What a learner will be able to do."
                  />
                </div>

                <div className={card}>
                  <label className={label} htmlFor="curr-about">About this course</label>
                  <p className="text-xs text-zinc-500 mt-2">One blank line starts a new paragraph.</p>
                  <textarea
                    id="curr-about"
                    className={`${input} mt-2 min-h-[140px]`}
                    value={page.about}
                    onChange={(e) => setPageField({ about: e.target.value })}
                  />
                </div>

                <div className={card}>
                  <label className={label} htmlFor="curr-objectives">Learning objectives</label>
                  <p className="text-xs text-zinc-500 mt-2">One per line. They appear under "By the end of this course, you will be able to".</p>
                  <textarea
                    id="curr-objectives"
                    className={`${input} mt-2 min-h-[120px]`}
                    value={page.objectives}
                    onChange={(e) => setPageField({ objectives: e.target.value })}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className={card}>
                    <label className={label} htmlFor="curr-prereq">Prerequisites</label>
                    <textarea
                      id="curr-prereq"
                      className={`${input} mt-2 min-h-[90px]`}
                      value={page.prerequisites}
                      onChange={(e) => setPageField({ prerequisites: e.target.value })}
                      placeholder="What somebody needs before starting."
                    />
                  </div>
                  <div className={card}>
                    <label className={label} htmlFor="curr-whofor">Who this is for</label>
                    <textarea
                      id="curr-whofor"
                      className={`${input} mt-2 min-h-[90px]`}
                      value={page.whoFor}
                      onChange={(e) => setPageField({ whoFor: e.target.value })}
                      placeholder="The people this course is written for."
                    />
                  </div>
                </div>

                <div className={card}>
                  <p className={label}>What completion requires</p>
                  <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                    Everything somebody must do, including the parts that happen away from the
                    Hub, so nothing required is buried in an email.
                  </p>
                  {page.requirements.map((r, i) => (
                    <div key={i} className="mt-4 pt-4 border-t border-zinc-100 first:border-0 first:pt-0">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Requirement {i + 1}</span>
                        <button
                          onClick={() => setPage((p) => (p ? { ...p, requirements: p.requirements.filter((_, n) => n !== i) } : p))}
                          className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-zinc-400 hover:text-[#FF6E40]"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                      <input
                        className={`${input} mt-2 font-semibold`}
                        value={r.label}
                        placeholder="Attend all required training sessions"
                        onChange={(e) => setRequirement(i, { label: e.target.value })}
                      />
                      <textarea
                        className={`${input} mt-2 min-h-[70px]`}
                        value={r.detail}
                        placeholder="Anything a learner needs to know about it. Optional."
                        onChange={(e) => setRequirement(i, { detail: e.target.value })}
                      />
                      <div className="mt-2 flex flex-wrap gap-2">
                        {REQUIREMENT_KINDS.map((k) => (
                          <button
                            key={k}
                            onClick={() => setRequirement(i, { kind: k })}
                            className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                              r.kind === k ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-500 border-zinc-200'
                            }`}
                          >
                            {k}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => setPage((p) => (p ? { ...p, requirements: [...p.requirements, { id: '', label: '', detail: '', kind: 'assignment' as const }] } : p))}
                    className="mt-4 flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 text-[11px] font-black uppercase tracking-wider text-zinc-600 hover:border-zinc-900 hover:text-zinc-900"
                  >
                    <Plus size={14} /> Add a requirement
                  </button>
                </div>
              </>
            )}

            <div className={card}>
              <p className={label}>The modules a learner reads</p>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                Each one opens on the text that is on the page now. Only what you change is
                released, so the lessons you leave alone keep their lists, callouts and
                knowledge checks exactly as they are.
              </p>
            </div>

            {sections.map((sec, i) => (
              <div key={i} className={card}>
                <div className="flex items-center justify-between gap-3">
                  <label className={label} htmlFor={`curr-h-${i}`}>
                    Module {i + 1}{sec.corrected ? ' (corrected)' : ''}
                  </label>
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
                  className={`${input} mt-2 min-h-[200px]`}
                  value={sec.body}
                  placeholder="What this module teaches."
                  onChange={(e) => setSection(i, { body: e.target.value })}
                />
              </div>
            ))}

            <button
              onClick={() => setSections((xs) => [...xs, { heading: '', body: '', corrected: false }])}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 text-[11px] font-black uppercase tracking-wider text-zinc-600 hover:border-zinc-900 hover:text-zinc-900"
            >
              <Plus size={14} /> Add a module
            </button>
          </>
        )}

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
                    Version {h.version}{h.note ? `. ${h.note}` : ''}
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
          Open a course to read what a learner reads, correct any of it, and release the
          correction. Every release keeps the version before it, so nothing is lost and the
          history says who changed what.
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
