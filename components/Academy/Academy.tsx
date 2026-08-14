// HMC Health + Education Pathways Academy — learner experience.
//
// Views: catalog > pathway > course > lesson > assessment > capstone >
// credential, plus a transcript. Structure and copy follow the Master
// Curriculum + Delivery Blueprint and the Credential, Transcript + Equivalency
// Rules (both v1.0, August 7, 2026).
//
// Accessibility, per the blueprint standard: text-first with no dependency on
// video or audio, meaningful headings, keyboard-operable controls, and no
// instruction that relies on color alone (state is always also stated in text).

import React, { useEffect, useMemo, useState } from 'react';
import {
  Award, BookOpen, Check, CheckCircle2, ChevronRight, Clock, FileText,
  GraduationCap, Layers, ListChecks, Lock, PenLine, Play, ShieldCheck,
  Sparkles, TrendingUp, X,
} from 'lucide-react';
import {
  PATHWAYS, PASS_THRESHOLD, LEARNING_MODEL, LEVEL_ACCENT, pathwayById,
  pathwayMinutes, type Check as CheckQ, type Course, type Pathway, type Session,
} from './catalog';
import { CAMP_WEEKS, CAMP_TEMPLATE } from './programStemCollab';
import type { Block, KnowledgeCheck } from './blocks';
import TrainingRegistration from './TrainingRegistration';
import { training as trainingApi, type ScheduledSession } from '../../services/api';
import {
  loadState, saveState, coursePercent, isCourseComplete, pathwayPercent,
  scoreTest, knowledgeGain, evaluateGates, credentialId, trainingHours,
  isArtifactComplete, type LearnerState,
} from './progress';
import { PERSONAS, CREDENTIALS, CREDENTIAL_FAQ } from './credentials';

interface AcademyProps {
  userId: string;
  memberName: string;
  onNavigateTab: (tab: string) => void;
  onSignal?: (type: string, payload: Record<string, unknown>) => void;
  /** Lets the Hub deep-link a sub-page of the Academy, e.g. straight to credentials. */
  initialView?: 'catalog' | 'credentials' | 'transcript';
  /** Signed-in member, used to prefill training registration. */
  member?: { firstName?: string; lastName?: string; email?: string; phone?: string } | null;
}

type View =
  | { name: 'catalog' }
  | { name: 'pathway'; pathwayId: string }
  | { name: 'course'; pathwayId: string; courseId: string }
  | { name: 'lesson'; pathwayId: string; courseId: string; index: number }
  | { name: 'activity'; pathwayId: string; courseId: string }
  | { name: 'artifact'; pathwayId: string; courseId: string }
  | { name: 'test'; pathwayId: string; kind: 'pre' | 'post' }
  | { name: 'capstone'; pathwayId: string }
  | { name: 'credentials' }
  | { name: 'transcript' };

const Btn: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}> = ({ children, onClick, variant = 'primary', className = '', disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={
      variant === 'primary'
        ? `px-8 py-3.5 bg-[#233DFF] text-white rounded-full font-bold uppercase tracking-wider text-xs transition-all hover:bg-[#1a2acc] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-[#233DFF]/20 inline-flex items-center justify-center gap-2 ${className}`
        : `px-8 py-3.5 border border-zinc-200 bg-white text-zinc-900 rounded-full font-bold uppercase tracking-wider text-xs transition-all hover:bg-zinc-50 active:scale-95 disabled:opacity-40 inline-flex items-center justify-center gap-2 ${className}`
    }
  >
    {children}
  </button>
);

const Bar: React.FC<{ percent: number }> = ({ percent }) => (
  <div className="h-1.5 w-full rounded-full bg-zinc-100 overflow-hidden">
    <div className="h-full rounded-full bg-[#233DFF] transition-all duration-500" style={{ width: `${percent}%` }} />
  </div>
);

const Back: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
  <button onClick={onClick} className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 font-bold text-xs uppercase tracking-widest transition-colors">
    <ChevronRight size={16} className="rotate-180" /> {label}
  </button>
);


// ── v2 guided-block renderer ─────────────────────────────────────────────
// One component per block kind from the Written Guided Curriculum Standard.
// Every callout states its purpose in text as well as colour, so meaning never
// depends on colour alone.

const BlockCallout: React.FC<{ label: string; tone: 'blue' | 'orange' | 'zinc' | 'amber'; children: React.ReactNode }> = ({ label, tone, children }) => {
  const t = tone === 'blue' ? 'border-[#233DFF]/20 bg-blue-50/40' + '|' + 'text-[#233DFF]'
    : tone === 'orange' ? 'border-[#FF6E40]/25 bg-orange-50/50' + '|' + 'text-[#FF6E40]'
    : tone === 'amber' ? 'border-amber-300/40 bg-amber-50/50' + '|' + 'text-[#8B6D00]'
    : 'border-zinc-200 bg-zinc-50/70' + '|' + 'text-zinc-400';
  const [box, lab] = t.split('|');
  return (
    <section className={`rounded-2xl border p-6 space-y-3 ${box}`}>
      <p className={`text-[10px] font-bold uppercase tracking-widest ${lab}`}>{label}</p>
      {children}
    </section>
  );
};

const CheckBlock: React.FC<{
  check: KnowledgeCheck;
  chosen?: number;
  onChoose: (i: number) => void;
}> = ({ check, chosen, onChoose }) => {
  const answered = chosen !== undefined;
  return (
    <section className="rounded-2xl border border-[#233DFF]/20 bg-white p-6 space-y-4">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#233DFF]">Knowledge check</p>
      <p className="text-base font-semibold text-zinc-900 leading-snug">{check.q}</p>
      <div className="space-y-2">
        {check.options.map((opt, i) => {
          const isRight = i === check.answer;
          const isChosen = chosen === i;
          return (
            <button
              key={opt}
              onClick={() => !answered && onChoose(i)}
              disabled={answered}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${
                answered && isRight ? 'border-emerald-300 bg-emerald-50/60'
                : answered && isChosen ? 'border-[#FF6F91] bg-pink-50/50'
                : 'border-zinc-200 bg-white hover:border-zinc-300'
              } ${answered ? 'cursor-default' : ''}`}
            >
              <span className="text-sm text-zinc-700 leading-relaxed flex-1">{opt}</span>
              {answered && isRight && <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 shrink-0">Correct</span>}
              {answered && isChosen && !isRight && <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6F91] shrink-0">Your answer</span>}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="space-y-2 bg-zinc-50 rounded-xl p-4">
          <p className="text-[13px] text-zinc-700 leading-relaxed">{check.rationale}</p>
          {check.distractors && <p className="text-[13px] text-zinc-500 leading-relaxed">{check.distractors}</p>}
          {check.source && <p className="text-[11px] text-zinc-400">Source: {check.source}</p>}
        </div>
      )}
    </section>
  );
};

const BlockView: React.FC<{
  block: Block;
  checks: Record<string, number>;
  onCheck: (id: string, i: number) => void;
}> = ({ block, checks, onCheck }) => {
  const P = ({ items }: { items: string[] }) => (
    <>{items.map((t, i) => <p key={i} className="text-[16px] text-zinc-700 leading-relaxed">{t}</p>)}</>
  );

  switch (block.kind) {
    case 'prose':
      return <div className="space-y-4"><P items={block.text} /></div>;
    case 'why':
      return <BlockCallout label="Why this matters" tone="blue"><P items={block.text} /></BlockCallout>;
    case 'case':
      return (
        <BlockCallout label={block.scenario ? 'Instructional scenario' : 'Case'} tone="amber">
          <h3 className="text-xl font-semibold text-zinc-900">{block.title}</h3>
          <P items={block.text} />
        </BlockCallout>
      );
    case 'concept':
      return (
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-zinc-900">{block.title}</h3>
          <P items={block.text} />
        </section>
      );
    case 'example':
      return (
        <BlockCallout label="Worked example" tone="zinc">
          <h3 className="text-lg font-semibold text-zinc-900">{block.title}</h3>
          <P items={block.text} />
        </BlockCallout>
      );
    case 'fieldnote':
      return (
        <BlockCallout label="Field note" tone="orange">
          <h3 className="text-lg font-semibold text-zinc-900">{block.title}</h3>
          <P items={block.text} />
        </BlockCallout>
      );
    case 'tryit':
      return (
        <BlockCallout label="Try it" tone="orange">
          <h3 className="text-lg font-semibold text-zinc-900">{block.title}</h3>
          <P items={block.text} />
        </BlockCallout>
      );
    case 'reflect':
      return (
        <BlockCallout label="Reflect" tone="zinc">
          <h3 className="text-lg font-semibold text-zinc-900">{block.title}</h3>
          <ul className="space-y-2">
            {block.prompts.map((p) => (
              <li key={p} className="text-[15px] text-zinc-700 leading-relaxed flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2.5" />{p}
              </li>
            ))}
          </ul>
        </BlockCallout>
      );
    case 'source':
      return (
        <section className="border-l-2 border-zinc-200 pl-5 space-y-1.5">
          <p className="text-[15px] text-zinc-600 leading-relaxed">{block.text}</p>
          {block.ref && (
            <p className="text-[12px] text-zinc-400">
              {block.ref.url
                ? <a href={block.ref.url} target="_blank" rel="noreferrer" className="underline hover:text-[#233DFF]">{block.ref.name}</a>
                : block.ref.name}
            </p>
          )}
        </section>
      );
    case 'myths':
      return (
        <section className="space-y-3">
          {block.items.map((m) => (
            <div key={m.myth} className="rounded-2xl border border-zinc-200 overflow-hidden">
              <div className="p-4 bg-zinc-50 border-b border-zinc-200">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Myth</p>
                <p className="text-[15px] text-zinc-600 leading-relaxed">{m.myth}</p>
              </div>
              <div className="p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#233DFF] mb-1">Reality</p>
                <p className="text-[15px] text-zinc-800 leading-relaxed">{m.reality}</p>
              </div>
            </div>
          ))}
        </section>
      );
    case 'steps':
      return (
        <section className="space-y-3">
          {block.title && <h3 className="text-xl font-semibold text-zinc-900">{block.title}</h3>}
          <ol className="space-y-3">
            {block.items.map((it, i) => (
              <li key={it.label} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-blue-50 text-[#233DFF] flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-semibold text-zinc-900">{it.label}</span>
                  <span className="block text-[15px] text-zinc-700 leading-relaxed mt-0.5">{it.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      );
    case 'vocab':
      return (
        <BlockCallout label="Words to know" tone="zinc">
          <dl className="space-y-2.5">
            {block.items.map((v) => (
              <div key={v.term}>
                <dt className="text-[15px] font-semibold text-zinc-900">{v.term}</dt>
                <dd className="text-[15px] text-zinc-600 leading-relaxed">{v.plain}</dd>
              </div>
            ))}
          </dl>
        </BlockCallout>
      );
    case 'activity':
      return (
        <BlockCallout label="Try it" tone="orange">
          <h3 className="text-lg font-semibold text-zinc-900">{block.title}</h3>
          {block.materials && <p className="text-[12px] font-bold uppercase tracking-wider text-zinc-400">{block.materials}</p>}
          <P items={block.text} />
        </BlockCallout>
      );
    case 'takeaways':
      return (
        <BlockCallout label="Key takeaways" tone="blue">
          <ul className="space-y-2.5">
            {block.items.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check size={15} strokeWidth={3} className="text-[#233DFF] mt-1 shrink-0" />
                <span className="text-[15px] text-zinc-800 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </BlockCallout>
      );
    case 'list':
      return (
        <section className="space-y-2">
          {block.title && <h3 className="text-lg font-semibold text-zinc-900">{block.title}</h3>}
          <ul className="space-y-1.5">
            {block.items.map((i) => (
              <li key={i} className="text-[15px] text-zinc-700 leading-relaxed flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0 mt-2.5" />{i}
              </li>
            ))}
          </ul>
        </section>
      );
    case 'check':
      return <CheckBlock check={block.check} chosen={checks[block.check.id]} onChoose={(i) => onCheck(block.check.id, i)} />;
    default:
      return null;
  }
};

const Academy: React.FC<AcademyProps> = ({ userId, memberName, onNavigateTab, onSignal, initialView = 'catalog', member = null }) => {
  const [state, setState] = useState<LearnerState>(() => loadState(userId));
  const [view, setView] = useState<View>({ name: initialView } as View);
  const [showCert, setShowCert] = useState<string | null>(null);
  // Which course the learner is registering for, plus the session if one exists.
  const [registering, setRegistering] = useState<{ course: Course; session?: Session } | null>(null);

  // Guided cohort dates, scheduled as events in the volunteer portal. Fetched once and
  // grouped by course so a self-paced course can also show real start dates.
  const [scheduled, setScheduled] = useState<Record<string, ScheduledSession[]>>({});
  useEffect(() => {
    let cancelled = false;
    trainingApi.sessions()
      .then((r) => {
        if (cancelled) return;
        const byCourse: Record<string, ScheduledSession[]> = {};
        for (const s of r.sessions || []) {
          (byCourse[s.courseId] ||= []).push(s);
        }
        setScheduled(byCourse);
      })
      .catch(() => { /* the catalog still renders without dates */ });
    return () => { cancelled = true; };
  }, []);

  // Braces matter here. An arrow with an expression body returns that
  // expression, and React treats a non-undefined effect return as a cleanup
  // function, then throws "destroy is not a function" on the next run.
  useEffect(() => {
    saveState(userId, state);
  }, [userId, state]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);
  // Follow a deep link from the Hub (Home cards link straight to credentials).
  useEffect(() => {
    setView({ name: initialView } as View);
  }, [initialView]);

  const set = (fn: (s: LearnerState) => LearnerState) => setState((s) => fn(s));

  const enroll = (p: Pathway) => {
    if (!state.enrolled.includes(p.id)) {
      set((s) => ({ ...s, enrolled: [...s.enrolled, p.id] }));
      onSignal?.('academy_enroll', { pathwayId: p.id });
    }
  };

  const artifactValue = (courseId: string, fieldId: string, i = 0): string =>
    (state.artifacts[courseId]?.[fieldId] || [])[i] || '';

  const setArtifactValue = (courseId: string, fieldId: string, i: number, v: string) =>
    set((s2) => {
      const course = { ...(s2.artifacts[courseId] || {}) };
      const arr = [...(course[fieldId] || [])];
      while (arr.length <= i) arr.push('');
      arr[i] = v;
      course[fieldId] = arr;
      return { ...s2, artifacts: { ...s2.artifacts, [courseId]: course } };
    });

  const completeLesson = (lessonId: string) =>
    set((s) => (s.lessons.includes(lessonId) ? s : { ...s, lessons: [...s.lessons, lessonId] }));

  // ── Catalog ────────────────────────────────────────────────────────────

  const renderCatalog = () => {
    const enrolledPaths = state.enrolled.map(pathwayById).filter(Boolean) as Pathway[];
    return (
      <div className="max-w-6xl mx-auto py-8 space-y-14 animate-in fade-in duration-500">
        <div className="text-center space-y-4">
          <div className="pill pill-blue mx-auto">HMC Health + Education Pathways Academy</div>
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-900">
            From exploration to applied experience.
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto leading-relaxed text-lg">
            Structured learning pathways for youth, students, aspiring health professionals,
            community-health learners, interns, fellows, and emerging leaders. Self-paced,
            text-first, and free.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <Btn onClick={() => setView({ name: 'credentials' })}>Browse credentials</Btn>
            <Btn variant="secondary" onClick={() => setView({ name: 'transcript' })}>My transcript</Btn>
          </div>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {LEARNING_MODEL.map((step, i) => (
              <React.Fragment key={step}>
                <span className="px-4 py-2 rounded-full bg-white border border-zinc-200 text-[11px] font-bold uppercase tracking-wider text-zinc-600">
                  {step}
                </span>
                {i < LEARNING_MODEL.length - 1 && <span className="self-center text-zinc-300">›</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {enrolledPaths.length > 0 && (
          <section className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Your learning</h2>
              <button onClick={() => setView({ name: 'transcript' })} className="text-xs font-bold uppercase tracking-widest text-[#233DFF] hover:underline">
                View transcript
              </button>
            </div>
            {enrolledPaths.map((p) => {
              const pct = pathwayPercent(p, state);
              const { gain } = knowledgeGain(p.id, state);
              return (
                <div key={p.id} className="bg-[#18181b] rounded-3xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2 min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">In progress</p>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">{p.title}</h3>
                    <p className="text-sm text-zinc-400">
                      {pct}% complete
                      {gain !== null && ` · knowledge gain ${gain >= 0 ? '+' : ''}${gain} points`}
                    </p>
                  </div>
                  <Btn onClick={() => setView({ name: 'pathway', pathwayId: p.id })}>
                    <Play size={14} /> Continue
                  </Btn>
                </div>
              );
            })}
          </section>
        )}

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Pathways</h2>
            <p className="text-sm text-zinc-500 mt-1">
              Each pathway leads to a defined HMC completion record. Shared foundations carry across
              pathways, so learning is never repeated without reason.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PATHWAYS.map((p) => {
              const accent = LEVEL_ACCENT[p.level];
              const published = p.status === 'published';
              const pct = pathwayPercent(p, state);
              return (
                <button
                  key={p.id}
                  onClick={() => setView({ name: 'pathway', pathwayId: p.id })}
                  className="text-left bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-7 space-y-4 hover:border-[#233DFF]/30 hover:shadow-md transition-all h-full flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${accent.bg} ${accent.text}`}>
                      {p.level}
                    </span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${published ? 'bg-emerald-50 text-emerald-700' : 'bg-zinc-100 text-zinc-500'}`}>
                      {published ? 'Open for enrollment' : 'In development'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 leading-snug">{p.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1">{p.purpose}</p>
                  <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold text-zinc-400">
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen size={13} /> {published ? p.courses.length : p.plannedCourses?.length || 0} courses
                    </span>
                    {published && (
                      <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {Math.round(pathwayMinutes(p) / 60)} hours</span>
                    )}
                    {p.guidedStart && (
                      <span className="inline-flex items-center gap-1.5 text-[#FF6E40]"><Sparkles size={13} /> Guided start {p.guidedStart}</span>
                    )}
                  </div>
                  {pct > 0 && <Bar percent={pct} />}
                </button>
              );
            })}
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-zinc-200/60 p-8 space-y-4">
          <div className="flex items-center gap-2 text-zinc-400">
            <ShieldCheck size={16} />
            <h2 className="text-[10px] font-bold uppercase tracking-widest">Learning data and privacy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-600 leading-relaxed">
            <p>
              The Academy records your enrollment, lesson completion, knowledge-check and assessment
              results, applied assignment status, completion dates, and credential status. Progress is
              reported as improvement from a baseline, not only as pass or fail.
            </p>
            <p>
              Learning records are kept separately from clinical and client records. Participation in
              Academy education does not create a clinician-patient relationship. You can request
              correction or deletion of your learning record at any time.
            </p>
          </div>
        </section>
      </div>
    );
  };

  // ── Credentials ────────────────────────────────────────────────────────

  const renderCredentials = () => (
    <div className="max-w-6xl mx-auto py-8 space-y-16 animate-in fade-in duration-500">
      <Back label="Academy" onClick={() => setView({ name: 'catalog' })} />

      {/* Hero */}
      <header className="text-center space-y-5 max-w-3xl mx-auto">
        <div className="pill pill-blue mx-auto">HMC Academy Credentials</div>
        <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.08]">
          Earn a credential that says exactly what you did.
        </h1>
        <p className="text-lg text-zinc-500 leading-relaxed">
          HMC credentials recognize demonstrated learning and applied community health experience.
          Every one of them is gated on evidence, verifiable by an employer or school, and written to
          claim only what Health Matters Clinic can substantiate. Free to every learner.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Btn onClick={() => document.getElementById('credential-table')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            Compare credentials
          </Btn>
          <Btn variant="secondary" onClick={() => setView({ name: 'catalog' })}>Start preparing</Btn>
        </div>
      </header>

      {/* Personas */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Choose the role you are building toward</h2>
          <p className="text-zinc-500">Credentials are grouped by who they are for, not by how hard they are.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERSONAS.map((persona) => {
            const specs = CREDENTIALS.filter((c) => persona.pathwayIds.includes(c.pathwayId));
            return (
              <div key={persona.id} className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-7 space-y-4 flex flex-col">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center text-[#233DFF]">
                  <GraduationCap size={20} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl font-semibold text-zinc-900">{persona.title}</h3>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 leading-relaxed">{persona.audience}</p>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1">{persona.description}</p>
                <div className="space-y-2 pt-1 border-t border-zinc-100">
                  {specs.map((s) => (
                    <button
                      key={s.pathwayId}
                      onClick={() => setView({ name: 'pathway', pathwayId: s.pathwayId })}
                      className="w-full text-left flex items-start justify-between gap-3 py-2 group"
                    >
                      <span className="text-[13px] font-semibold text-zinc-700 group-hover:text-[#233DFF] leading-snug">
                        {s.title.replace('HMC ', '')}
                      </span>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shrink-0 ${s.available ? 'bg-emerald-50 text-emerald-700' : 'bg-zinc-100 text-zinc-500'}`}>
                        {s.available ? 'Open' : 'Soon'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison table */}
      <section id="credential-table" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Compare every credential</h2>
          <p className="text-zinc-500">What each one requires, what verifies it, and whether it expires.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200/60 bg-white shadow-sm">
          <table className="w-full min-w-[900px] text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/70">
                {['Credential', 'Type', 'Assessment', 'Applied requirement', 'Sign-off', 'Expires'].map((h) => (
                  <th key={h} className="px-5 py-4 text-[9px] font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CREDENTIALS.map((c) => (
                <tr key={c.pathwayId} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                  <td className="px-5 py-5 align-top">
                    <button onClick={() => setView({ name: 'pathway', pathwayId: c.pathwayId })} className="text-left group">
                      <span className="block text-[13.5px] font-semibold text-zinc-900 group-hover:text-[#233DFF] leading-snug">{c.title}</span>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mt-1.5">
                        {c.level} · {c.available ? 'Open for enrollment' : 'In development'}
                      </span>
                    </button>
                  </td>
                  <td className="px-5 py-5 align-top text-[12.5px] text-zinc-600">{c.type}</td>
                  <td className="px-5 py-5 align-top text-[12.5px] text-zinc-600">{c.assessment}</td>
                  <td className="px-5 py-5 align-top text-[12.5px] text-zinc-600">{c.applied}</td>
                  <td className="px-5 py-5 align-top text-[12.5px] text-zinc-600">{c.signOff}</td>
                  <td className="px-5 py-5 align-top text-[12.5px] text-zinc-600">{c.expires}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-zinc-400">
          Every credential is free. HMC does not charge learners for pathways, assessments, or completion records.
        </p>
      </section>

      {/* Per-credential detail */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">What each credential proves</h2>
        <div className="space-y-5">
          {CREDENTIALS.map((c) => (
            <div key={c.pathwayId} className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${LEVEL_ACCENT[c.level].bg} ${LEVEL_ACCENT[c.level].text}`}>{c.level}</span>
                    <span className="pill pill-neutral">{c.type}</span>
                    {!c.available && <span className="pill pill-neutral">In development</span>}
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 leading-snug">{c.title}</h3>
                </div>
                <Btn
                  variant={c.available ? 'primary' : 'secondary'}
                  className="shrink-0"
                  onClick={() => setView({ name: 'pathway', pathwayId: c.pathwayId })}
                >
                  {c.available ? 'Start preparing' : 'View pathway'}
                </Btn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">What it proves</p>
                    <p className="text-sm text-zinc-700 leading-relaxed">{c.proves}</p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Who it is for</p>
                    <p className="text-sm text-zinc-700 leading-relaxed">{c.forWhom}</p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Evidence required</p>
                    <ul className="space-y-1.5">
                      {c.evidence.map((e) => (
                        <li key={e} className="flex items-start gap-2.5">
                          <Check size={13} strokeWidth={3} className="text-[#233DFF] mt-1 shrink-0" />
                          <span className="text-[13px] text-zinc-700 leading-relaxed">{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#FF6E40]">What it does not authorize</p>
                    <ul className="space-y-1.5">
                      {c.doesNotAuthorize.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <X size={13} strokeWidth={3} className="text-[#FF6E40] mt-1 shrink-0" />
                          <span className="text-[13px] text-zinc-600 leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verification */}
      <section className="bg-[#18181b] rounded-3xl p-10 text-white space-y-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-56 h-56 bg-[#233DFF]/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="relative z-10 space-y-5 max-w-2xl">
          <ShieldCheck size={28} className="text-[#233DFF]" />
          <h2 className="text-3xl font-semibold tracking-tight">Verifiable, and careful not to overclaim</h2>
          <p className="text-zinc-300 leading-relaxed">
            Every issued credential carries a certificate ID and a public verification link. Verification
            returns the status, learner name, credential title, issuer and issue date. It never exposes
            assessment scores, other course history, service records, or contact information.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-3">
            {[
              { v: 'Valid', l: 'Credential is current' },
              { v: 'Expired', l: 'Renewal required' },
              { v: 'Superseded', l: 'Replaced by a newer version' },
              { v: 'Revoked', l: 'Withdrawn under policy' },
            ].map((s) => (
              <div key={s.v}>
                <p className="text-lg font-semibold">{s.v}</p>
                <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Data, privacy and governance</h2>
          <p className="text-zinc-500">The questions a school, employer or funder asks before they trust a credential.</p>
        </div>
        <div className="space-y-3">
          {CREDENTIAL_FAQ.map((f) => (
            <details key={f.q} className="group bg-white rounded-2xl border border-zinc-200/60 shadow-sm overflow-hidden">
              <summary className="cursor-pointer list-none px-7 py-5 flex items-center justify-between gap-4 hover:bg-zinc-50/60 transition-colors">
                <span className="text-[15px] font-semibold text-zinc-900 leading-snug">{f.q}</span>
                <ChevronRight size={17} className="text-zinc-300 shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-7 pb-6 -mt-1">
                <p className="text-sm text-zinc-600 leading-relaxed">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="text-center space-y-5 py-6">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Start with the pathway that is open now</h2>
        <p className="text-zinc-500 max-w-lg mx-auto leading-relaxed">
          Health Careers Exploration is self-paced, free, and takes eight to twelve hours. The next guided
          start is September 1.
        </p>
        <Btn onClick={() => setView({ name: 'pathway', pathwayId: 'health-careers-exploration' })}>
          Open Health Careers Exploration
        </Btn>
      </section>
    </div>
  );

  // ── Pathway ────────────────────────────────────────────────────────────

  const renderPathway = (pathwayId: string) => {
    const p = pathwayById(pathwayId);
    if (!p) return renderCatalog();
    const accent = LEVEL_ACCENT[p.level];
    const registered = state.enrolled.includes(p.id);
    const published = p.status === 'published';
    // A pathway can be mid-build: some courses released, credential not yet open.
    const hasCourses = p.courses.length > 0;
    const releasedTitles = new Set(p.courses.map((c) => c.title));
    const { gates, eligible } = evaluateGates(p, state);
    const issued = state.credentials[p.id];
    const pre = state.preTest[p.id];
    const { pre: preScore, post: postScore, gain } = knowledgeGain(p.id, state);

    return (
      <div className="max-w-4xl mx-auto py-8 space-y-10 animate-in fade-in duration-500">
        <Back label="All pathways" onClick={() => setView({ name: 'catalog' })} />

        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${accent.bg} ${accent.text}`}>
              {p.level}
            </span>
            <span className="pill pill-neutral">Version {p.version}</span>
            {!published && <span className="pill pill-neutral">In development</span>}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">{p.title}</h1>
          <p className="text-lg text-zinc-500 leading-relaxed">{p.purpose}</p>
          <p className="text-sm text-zinc-400">{p.format}</p>
        </div>

        {p.guidedStart && (
          <div className="rounded-2xl border border-[#FF6E40]/25 bg-orange-50/50 p-6 space-y-1.5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#FF6E40]">Next guided start</p>
            <p className="text-lg font-semibold text-zinc-900">{p.guidedStart}</p>
            <p className="text-sm text-zinc-600">
              The guided start is a momentum cue, not a deadline or a live class. Register now and begin
              immediately, or wait for the cohort to launch. The course never locks.
            </p>
          </div>
        )}

        {hasCourses && !registered && (
          <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-2xl font-semibold text-zinc-900">Register</p>
              <p className="text-sm text-zinc-500 mt-1">
                {published
                  ? 'Free. Self-paced. Start any time.'
                  : `Free. ${p.plannedCourses?.filter((t) => releasedTitles.has(t)).length ?? p.courses.length} of ${p.plannedCourses?.length ?? 0} courses are released. The completion record opens when the pathway is published.`}
              </p>
            </div>
            <Btn onClick={() => {
                enroll(p);
                // Only pathways with a published baseline check start on one.
                if (p.preTest?.length) setView({ name: 'test', pathwayId: p.id, kind: 'pre' });
              }}>
              Register and start
            </Btn>
          </div>
        )}

        {!published && (
          <div className="bg-white rounded-2xl border border-dashed border-zinc-300 p-8 space-y-5">
            <p className="text-sm text-zinc-600 leading-relaxed">
              This pathway is under curriculum review. The course sequence below is final. Released
              courses can be taken now; the rest are in production.
            </p>
            <ol className="space-y-2">
              {p.plannedCourses?.map((t, i) => {
                const out = releasedTitles.has(t);
                return (
                  <li key={t} className="flex items-start gap-4 text-sm">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${out ? 'bg-emerald-50 text-emerald-600' : 'bg-zinc-100 text-zinc-500'}`}>{i + 1}</span>
                    <span className={out ? 'text-zinc-900 font-semibold' : 'text-zinc-700'}>{t}</span>
                    {out && <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">Released</span>}
                  </li>
                );
              })}
            </ol>
          </div>
        )}

        {registered && hasCourses && (
          <>
            {pre && p.postTest && (
              <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-7 space-y-4">
                <div className="flex items-center gap-2 text-zinc-400">
                  <TrendingUp size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Your knowledge growth</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { l: 'Baseline', v: preScore === null ? '--' : `${preScore}%` },
                    { l: 'Post-test', v: postScore === null ? 'Not taken' : `${postScore}%` },
                    { l: 'Gain', v: gain === null ? '--' : `${gain >= 0 ? '+' : ''}${gain} pts` },
                  ].map((x) => (
                    <div key={x.l}>
                      <p className="text-2xl font-semibold text-zinc-900">{x.v}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">{x.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Courses</h2>
              {p.courses.map((c) => {
                const pct = coursePercent(p, c.id, state);
                const done = isCourseComplete(p, c.id, state);
                return (
                  <button
                    key={c.id}
                    onClick={() => setView({ name: 'course', pathwayId: p.id, courseId: c.id })}
                    className={`w-full text-left flex items-center justify-between gap-4 p-5 px-6 rounded-2xl border transition-all ${done ? 'bg-zinc-50/50 border-zinc-100' : 'bg-white border-zinc-200 hover:border-[#233DFF]/40 hover:shadow-sm'}`}
                  >
                    <div className="flex items-center gap-5 min-w-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border shrink-0 ${done ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-blue-50 text-[#233DFF] border-blue-100'}`}>
                        {done ? <Check size={18} strokeWidth={3} /> : <span className="text-xs font-black">{c.num}</span>}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-semibold ${done ? 'text-zinc-400' : 'text-zinc-800'}`}>{c.title}</p>
                        <p className="text-[11px] text-zinc-400 mt-0.5">
                          Course {c.num} of {p.courses.length} · {c.minutes} min · {done ? 'Complete' : `${pct}% complete`}
                        </p>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-zinc-300 shrink-0" />
                  </button>
                );
              })}
            </div>

            {/* Assessment + capstone */}
            {p.postTest && (
            <div className="space-y-3">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Assessment</h2>
              <div className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Pathway post-test</p>
                  <p className="text-[12px] text-zinc-500 mt-1">
                    {PASS_THRESHOLD}% to pass. Retries are allowed, because the purpose is mastery.
                    {state.postAttempts[p.id] ? ` Attempts: ${state.postAttempts[p.id]}.` : ''}
                  </p>
                </div>
                <Btn variant={postScore !== null && postScore >= PASS_THRESHOLD ? 'secondary' : 'primary'} onClick={() => setView({ name: 'test', pathwayId: p.id, kind: 'post' })}>
                  {postScore === null ? 'Take post-test' : postScore >= PASS_THRESHOLD ? 'Retake' : 'Try again'}
                </Btn>
              </div>
              {p.capstone && (
                <div className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{p.capstone.title}</p>
                    <p className="text-[12px] text-zinc-500 mt-1">
                      Scored against a 20-point rubric. {p.capstone.passing} of 20 to pass.
                      {(state.capstone[p.id] || '').trim() ? ' Submitted for review.' : ''}
                    </p>
                  </div>
                  <Btn variant="secondary" onClick={() => setView({ name: 'capstone', pathwayId: p.id })}>
                    {(state.capstone[p.id] || '').trim() ? 'Review submission' : 'Open capstone'}
                  </Btn>
                </div>
              )}
            </div>
            )}

            {/* Credential gates */}
            <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-8 space-y-6">
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Credential</p>
                <p className="text-xl font-semibold text-zinc-900">{p.credentialTitle}</p>
                <p className="text-[12px] text-zinc-500">{p.credentialType}</p>
              </div>
              <ul className="space-y-3">
                {gates.map((g) => (
                  <li key={g.label} className="flex items-start gap-3">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${g.met ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-white border-zinc-200 text-zinc-300'}`}>
                      {g.met ? <Check size={12} strokeWidth={3} /> : <Lock size={10} />}
                    </span>
                    <span className="text-sm text-zinc-700 leading-snug">
                      {g.label}
                      <span className="block text-[11px] text-zinc-400 mt-0.5">
                        {g.met ? 'Met' : 'Not yet met'}{g.detail ? ` · ${g.detail}` : ''}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              {issued ? (
                <Btn onClick={() => setShowCert(p.id)}>View certificate</Btn>
              ) : (
                <Btn
                  disabled={!eligible}
                  onClick={() => {
                    const at = new Date().toISOString();
                    set((s) => ({ ...s, credentials: { ...s.credentials, [p.id]: at } }));
                    onSignal?.('academy_credential_issued', { pathwayId: p.id });
                    setShowCert(p.id);
                  }}
                >
                  {eligible ? 'Issue my completion record' : 'Complete all gates to unlock'}
                </Btn>
              )}
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                An HMC completion record documents what HMC can substantiate. It is not licensure, board
                certification, clinical scope, or admission eligibility.
              </p>
            </div>
          </>
        )}

        {p.sourceKey && (
          <div className="border-t border-zinc-100 pt-6 space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Authoritative sources</p>
            <ul className="space-y-1">
              {p.sourceKey.map((s) => (
                <li key={s.key} className="text-[12px] text-zinc-500">[{s.key}] {s.label}</li>
              ))}
            </ul>
            <p className="text-[11px] text-zinc-400 pt-2">
              Version {p.version} · Effective {p.effectiveDate} · Next review {p.nextReview}
            </p>
          </div>
        )}
      </div>
    );
  };

  // ── Course ─────────────────────────────────────────────────────────────

  const renderCourse = (pathwayId: string, courseId: string) => {
    const p = pathwayById(pathwayId);
    const c = p?.courses.find((x) => x.id === courseId);
    if (!p || !c) return renderCatalog();
    const firstUnfinished = c.lessons.findIndex((l) => !state.lessons.includes(l.id));
    const activityDone = !!(state.activities[c.id] || '').trim();
    const registered = state.enrolled.includes(p.id);
    const pct = coursePercent(p, c.id, state);

    return (
      <div className="max-w-5xl mx-auto py-8 space-y-12 animate-in fade-in duration-500">
        <Back label={p.title} onClick={() => setView({ name: 'pathway', pathwayId })} />

        {/* Header */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Course {c.num} of {p.courses.length} in {p.title}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 leading-[1.12]">{c.title}</h1>
            <p className="text-lg text-zinc-600 leading-relaxed">{c.promise}</p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {registered ? (
                <Btn onClick={() => setView({ name: 'lesson', pathwayId, courseId, index: Math.max(firstUnfinished, 0) })}>
                  {pct === 0 ? 'Start course' : pct === 100 ? 'Review course' : 'Continue course'}
                </Btn>
              ) : (
                <Btn onClick={() => {
                enroll(p);
                // Only pathways with a published baseline check start on one.
                if (p.preTest?.length) setView({ name: 'test', pathwayId: p.id, kind: 'pre' });
              }}>
                  Register, free
                </Btn>
              )}
              <span className="text-[11px] text-zinc-400 font-semibold">
                {registered ? `${pct}% complete` : 'Already registered? Sign in from the Hub'}
              </span>
            </div>
          </div>

          {/* Course facts */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-7 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Course format</p>
            <dl className="space-y-3">
              {[
                ['Delivery', c.delivery === 'live' ? 'Scheduled session'
                  : c.delivery === 'blended' ? 'Video and written, self-paced'
                  : c.delivery === 'practical' ? 'Practical, scheduled'
                  : 'Self-paced, text first'],
                ['Estimated time', `${c.minutes} minutes`],
                ['Modules', `${c.lessons.length}`],
                ['Knowledge checks', `${c.checks.length}`],
                ['Applied activity', c.activity ? 'Yes, with a saved artifact' : 'None'],
                ['Cost', 'Free'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-zinc-50 pb-2.5 last:border-0 last:pb-0">
                  <dt className="text-[12px] text-zinc-500">{k}</dt>
                  <dd className="text-[13px] font-semibold text-zinc-900 text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {c.id === 'stem-collab-camp' && (
              <section className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold text-zinc-900">The six-week curriculum</h2>
                  <p className="text-[13.5px] text-zinc-500 leading-relaxed">
                    Each week pairs a STEM subject with a health or health-technology subject, so students meet the
                    science and its application together. The sequence builds toward design, invention and careers.
                  </p>
                </div>
                <div className="space-y-2.5">
                  {CAMP_WEEKS.map((w) => (
                    <div key={w.week} className="rounded-2xl border border-zinc-200 bg-white p-5 flex items-start gap-5">
                      <span className="w-11 h-11 rounded-2xl bg-blue-50 text-[#233DFF] flex items-center justify-center shrink-0">
                        <span className="text-[11px] font-black leading-none text-center">WK<br />{w.week}</span>
                      </span>
                      <div className="min-w-0 flex-1 space-y-1.5">
                        <p className="text-[15px] font-semibold text-zinc-900 leading-snug">{w.subjects}</p>
                        <p className="text-[13px] text-zinc-600 leading-relaxed">{w.activities.join(' · ')}</p>
                        <p className="text-[12.5px] text-zinc-500 leading-relaxed">{w.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-zinc-50/70 border border-zinc-200/70 p-6 space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">What every run needs</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      ['Length', `${CAMP_TEMPLATE.weeks} weeks`],
                      ['Schedule', `${CAMP_TEMPLATE.daysPerWeek} days a week`],
                      ['Hours', CAMP_TEMPLATE.dailyHours],
                      ['Grades', CAMP_TEMPLATE.grades],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <p className="text-[13.5px] font-semibold text-zinc-900">{v}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-0.5">{k}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Roles to fill locally</p>
                    {CAMP_TEMPLATE.instructionModel.map((r) => (
                      <p key={r} className="text-[13px] text-zinc-700 leading-relaxed">{r}</p>
                    ))}
                  </div>
                  <p className="text-[13px] text-zinc-700 leading-relaxed border-t border-zinc-200/70 pt-3">
                    <span className="font-semibold">Closing capstone. </span>{CAMP_TEMPLATE.capstone}
                  </p>
                </div>
              </section>
            )}

            {c.requirements && c.requirements.length > 0 && (
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-zinc-900">What completion requires</h2>
                <p className="text-[13.5px] text-zinc-500 leading-relaxed">
                  Some of this happens outside the platform. It is listed here so nothing required is buried in an
                  email or treated as optional.
                </p>
                <ol className="space-y-2">
                  {c.requirements.map((r, i) => (
                    <li key={r.id} className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5">
                      <span className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center text-[12px] font-bold shrink-0">{i + 1}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[14.5px] font-semibold text-zinc-900 leading-snug">{r.label}</span>
                        {r.detail && <span className="block text-[13px] text-zinc-500 leading-relaxed mt-1">{r.detail}</span>}
                        <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mt-2">
                          {r.kind === 'attend' ? 'Attendance' : r.kind === 'assignment' ? 'Assignment' : r.kind === 'practicum' ? 'Applied practice' : 'Evaluation'}
                        </span>
                      </span>
                      <Lock size={14} className="text-zinc-300 shrink-0 mt-1" />
                    </li>
                  ))}
                </ol>
                <p className="text-[12px] text-zinc-500 leading-relaxed">
                  Your completion record unlocks once every item above is satisfied and recorded by HMC.
                </p>
              </section>
            )}

            {c.retroEval && (
              <section className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-7 space-y-3">
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Program evaluation</h2>
                <p className="text-[14px] text-zinc-700 leading-relaxed">
                  This program uses a retrospective questionnaire rather than a pre-test. You rate each statement
                  twice at the end, once for now and once for before the workshops. It measures change more
                  accurately and does not open the session with an exam.
                </p>
                <p className="text-[12.5px] text-zinc-500 leading-relaxed">
                  Voluntary and confidential. Conducted for {c.retroEval.conductedFor}.
                </p>
              </section>
            )}

            {c.ce && (
              <section className="rounded-2xl border border-[#233DFF]/20 bg-blue-50/40 p-7 space-y-4">
                <div className="flex items-center gap-2 text-[#233DFF]">
                  <Award size={17} />
                  <h2 className="text-[10px] font-bold uppercase tracking-widest">Continuing education</h2>
                </div>
                <p className="text-2xl font-semibold text-zinc-900">{c.ce.hours} CE hour</p>
                <dl className="space-y-2">
                  {[
                    ['Approved by', c.ce.agency],
                    ['Recognized for', c.ce.boards],
                    ['Approved on', c.ce.approvedOn],
                  ].map(([k, v]) => (
                    <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                      <dt className="text-[12px] text-zinc-500 shrink-0">{k}</dt>
                      <dd className="text-[12.5px] font-medium text-zinc-800 sm:text-right sm:max-w-[62%]">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="space-y-2 pt-1 border-t border-[#233DFF]/15">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">To receive your certificate</p>
                  <ul className="space-y-1">
                    {c.ce.requires.map((r) => (
                      <li key={r} className="text-[13px] text-zinc-700 leading-relaxed flex items-start gap-2.5">
                        <Check size={13} strokeWidth={3} className="text-[#233DFF] mt-1 shrink-0" />{r}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-[11.5px] text-zinc-500 leading-relaxed">{c.ce.deliveryNote}</p>
              </section>
            )}

            {(() => {
              // Catalog sessions and portal-scheduled cohorts are the same thing to a
              // learner, so they render as one list. A self-paced course shows the
              // section only once a real cohort date exists — otherwise "no sessions
              // scheduled" would read as a problem on a course that never needed one.
              const portalSessions = (scheduled[c.id] || []).map((s) => ({
                id: s.id,
                courseId: c.id,
                title: s.title,
                startsAt: s.startsAt,
                modality: (s.modality === 'virtual' ? 'virtual' : 'in-person') as Session['modality'],
                location: s.location,
              })) as Session[];
              const allSessions = [...(c.sessions || []), ...portalSessions]
                .sort((a, b) => String(a.startsAt).localeCompare(String(b.startsAt)));
              const isLive = c.delivery === 'live' || c.delivery === 'practical';
              if (!isLive && allSessions.length === 0) return null;
              return (
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-zinc-900">
                  {isLive ? 'Upcoming sessions' : 'Guided cohorts'}
                </h2>
                {!isLive && (
                  <p className="text-[13px] text-zinc-500 leading-relaxed">
                    This course is self-paced, so you can start any time. These are guided
                    cohorts that move through it together with a coordinator.
                  </p>
                )}
                {allSessions.length > 0 ? (
                  <div className="space-y-2">
                    {allSessions.map((sess) => (
                      <div key={sess.id} className="rounded-2xl border border-zinc-200 bg-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[15px] font-semibold text-zinc-900">{sess.title}</p>
                          <p className="text-[12.5px] text-zinc-500 mt-1">
                            {new Date(sess.startsAt).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
                            {' · '}
                            {sess.modality === 'virtual' ? 'Virtual' : sess.modality === 'in-person' ? 'In person' : 'Hybrid'}
                            {sess.location ? ` · ${sess.location}` : ''}
                          </p>
                        </div>
                        <Btn className="shrink-0" onClick={() => setRegistering({ course: c, session: sess })}>Register</Btn>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/60 p-6">
                    <p className="text-[14px] text-zinc-600 leading-relaxed">
                      No sessions are scheduled right now. This course is delivered live, so it opens when the next
                      session is announced. Register your interest and we will email you the moment a date is set.
                    </p>
                    <Btn className="mt-4" onClick={() => setRegistering({ course: c })}>
                      Register your interest <ChevronRight size={14} />
                    </Btn>
                  </div>
                )}
              </section>
              );
            })()}

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-zinc-900">About this course</h2>
              {c.about.map((para, i) => (
                <p key={i} className="text-[15px] text-zinc-600 leading-relaxed">{para}</p>
              ))}
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-zinc-900">Learning objectives</h2>
              <p className="text-sm text-zinc-500">By the end of this course, you will be able to:</p>
              <ul className="space-y-2.5">
                {c.objectives.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <Check size={15} strokeWidth={3} className="text-[#233DFF] mt-1 shrink-0" />
                    <span className="text-[15px] text-zinc-700 leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-zinc-900">Prerequisites</h2>
                <p className="text-[15px] text-zinc-600 leading-relaxed">{c.prerequisites}</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-zinc-900">Who this is for</h2>
                <p className="text-[15px] text-zinc-600 leading-relaxed">{c.whoFor}</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-zinc-900">This course contains the following modules</h2>
              <div className="space-y-3">
                {c.lessons.map((l, i) => {
                  const done = state.lessons.includes(l.id);
                  return (
                    <button
                      key={l.id}
                      onClick={() => setView({ name: 'lesson', pathwayId, courseId, index: i })}
                      className={`w-full text-left flex items-start gap-5 p-6 rounded-2xl border transition-all ${done ? 'bg-zinc-50/60 border-zinc-100' : 'bg-white border-zinc-200 hover:border-[#233DFF]/40 hover:shadow-sm'}`}
                    >
                      <span className={`w-11 h-11 rounded-2xl flex items-center justify-center border shrink-0 ${done ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-blue-50 text-[#233DFF] border-blue-100'}`}>
                        {done ? <Check size={18} strokeWidth={3} /> : <span className="text-[13px] font-black">{i + 1}</span>}
                      </span>
                      <span className="min-w-0 flex-1 space-y-1.5">
                        <span className="block text-[15px] font-semibold text-zinc-900 leading-snug">{l.title}</span>
                        <span className="block text-[13px] text-zinc-500 leading-relaxed">{l.summary}</span>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 pt-0.5">
                          {l.minutes} minutes{done ? ' · Complete' : ''}
                        </span>
                      </span>
                    </button>
                  );
                })}

                {c.artifact && (
                  <button
                    onClick={() => setView({ name: 'artifact', pathwayId, courseId })}
                    className={`w-full text-left flex items-start gap-5 p-6 rounded-2xl border transition-all ${isArtifactComplete(c, state) ? 'bg-zinc-50/60 border-zinc-100' : 'bg-white border-zinc-200 hover:border-[#FF6E40]/40 hover:shadow-sm'}`}
                  >
                    <span className={`w-11 h-11 rounded-2xl flex items-center justify-center border shrink-0 ${isArtifactComplete(c, state) ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-orange-50 text-[#FF6E40] border-orange-100'}`}>
                      {isArtifactComplete(c, state) ? <Check size={18} strokeWidth={3} /> : <FileText size={17} />}
                    </span>
                    <span className="min-w-0 flex-1 space-y-1.5">
                      <span className="block text-[15px] font-semibold text-zinc-900 leading-snug">
                        {c.artifact.title}
                        {c.artifact.minutes ? <span className="font-normal text-zinc-400"> · {c.artifact.minutes} min</span> : null}
                      </span>
                      <span className="block text-[13px] text-zinc-500 leading-relaxed">{c.artifact.purpose}</span>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 pt-0.5">
                        Carried forward to your roadmap{isArtifactComplete(c, state) ? ' · Complete' : ''}
                      </span>
                    </span>
                  </button>
                )}

                {c.activity && (
                  <button
                    onClick={() => setView({ name: 'activity', pathwayId, courseId })}
                    className={`w-full text-left flex items-start gap-5 p-6 rounded-2xl border transition-all ${activityDone ? 'bg-zinc-50/60 border-zinc-100' : 'bg-white border-zinc-200 hover:border-[#FF6E40]/40 hover:shadow-sm'}`}
                  >
                    <span className={`w-11 h-11 rounded-2xl flex items-center justify-center border shrink-0 ${activityDone ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-orange-50 text-[#FF6E40] border-orange-100'}`}>
                      {activityDone ? <Check size={18} strokeWidth={3} /> : <PenLine size={17} />}
                    </span>
                    <span className="min-w-0 flex-1 space-y-1.5">
                      <span className="block text-[15px] font-semibold text-zinc-900 leading-snug">{c.activity.title}</span>
                      <span className="block text-[13px] text-zinc-500 leading-relaxed">{c.activity.body[0]}</span>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400 pt-0.5">
                        Applied activity{activityDone ? ' · Submitted' : ''}
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </section>

            {c.sources && (
              <p className="text-[11px] text-zinc-400 border-t border-zinc-100 pt-5">
                Course sources: {c.sources.map((x) => `[${x}]`).join(' ')}. Full citations are held in the
                Academy source library.
              </p>
            )}
          </div>

          {/* Curriculum rail */}
          <aside className="lg:col-span-4">
            <div className="bg-zinc-50/70 rounded-2xl border border-zinc-200/60 p-6 space-y-3 lg:sticky lg:top-6">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Curriculum</h2>
              <ol className="divide-y divide-zinc-200/70">
                {c.lessons.map((l, i) => {
                  const done = state.lessons.includes(l.id);
                  return (
                    <li key={l.id}>
                      <button
                        onClick={() => setView({ name: 'lesson', pathwayId, courseId, index: i })}
                        className="w-full text-left py-3 flex items-start gap-3 group"
                      >
                        <span className={`text-[11px] font-bold shrink-0 mt-0.5 ${done ? 'text-emerald-600' : 'text-zinc-300'}`}>
                          {done ? <Check size={13} strokeWidth={3} /> : i + 1}
                        </span>
                        <span className="min-w-0">
                          <span className={`block text-[13px] leading-snug ${done ? 'text-zinc-400' : 'text-zinc-700 group-hover:text-[#233DFF]'}`}>{l.title}</span>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mt-0.5">{l.minutes} min</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
                {c.activity && (
                  <li>
                    <button onClick={() => setView({ name: 'activity', pathwayId, courseId })} className="w-full text-left py-3 flex items-start gap-3 group">
                      <span className={`text-[11px] font-bold shrink-0 mt-0.5 ${activityDone ? 'text-emerald-600' : 'text-zinc-300'}`}>
                        {activityDone ? <Check size={13} strokeWidth={3} /> : <PenLine size={12} />}
                      </span>
                      <span className="block text-[13px] leading-snug text-zinc-700 group-hover:text-[#FF6E40]">{c.activity.title}</span>
                    </button>
                  </li>
                )}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    );
  };

  // ── Lesson (with embedded knowledge checks on the last lesson) ──────────

  const renderLesson = (pathwayId: string, courseId: string, index: number) => {
    const p = pathwayById(pathwayId);
    const c = p?.courses.find((x) => x.id === courseId);
    const lesson = c?.lessons[index];
    if (!p || !c || !lesson) return renderCatalog();
    const isLast = index === c.lessons.length - 1;
    // v2 courses embed their checks in the lesson blocks where they belong, so
    // the end-of-course block would repeat them.
    const inlineChecks = c.lessons.some((l) => l.blocks?.some((b) => b.kind === 'check'));
    const checksHere = isLast && !inlineChecks ? c.checks : [];

    return (
      <div className="max-w-3xl mx-auto py-8 space-y-8 animate-in fade-in duration-500">
        <Back label={c.title} onClick={() => setView({ name: 'course', pathwayId, courseId })} />

        <div className="space-y-3">
          <Bar percent={Math.round(((index + 1) / c.lessons.length) * 100)} />
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Lesson {index + 1} of {c.lessons.length} · {c.title}
          </p>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">{lesson.title}</h1>

        {/* v2 courses carry typed blocks; v1 courses carry plain paragraphs.
            Both are optional on the model, so neither is assumed to exist. */}
        {lesson.blocks?.length ? (
          <div className="space-y-8">
            {lesson.blocks.map((b, i) => (
              <BlockView
                key={i}
                block={b}
                checks={state.checks}
                onCheck={(id, choice) => set((st) => ({ ...st, checks: { ...st.checks, [id]: choice } }))}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {(lesson.body || []).map((para, i) => (
              <p key={i} className="text-lg text-zinc-700 leading-relaxed">{para}</p>
            ))}
          </div>
        )}

        {checksHere.length > 0 && (
          <section className="space-y-5 pt-2">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#233DFF]">Knowledge check</h2>
            {checksHere.map((q) => (
              <QuestionCard
                key={q.id}
                q={q}
                chosen={state.checks[q.id]}
                onChoose={(i) => set((s) => ({ ...s, checks: { ...s.checks, [q.id]: i } }))}
                reveal
              />
            ))}
          </section>
        )}

        <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => (index > 0 ? setView({ name: 'lesson', pathwayId, courseId, index: index - 1 }) : setView({ name: 'course', pathwayId, courseId }))}
            className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900"
          >
            {index > 0 ? 'Previous lesson' : 'Back to course'}
          </button>
          <Btn
            className="w-full sm:w-auto"
            onClick={() => {
              completeLesson(lesson.id);
              onSignal?.('academy_lesson_complete', { pathwayId, courseId, lessonId: lesson.id });
              if (!isLast) setView({ name: 'lesson', pathwayId, courseId, index: index + 1 });
              else if (c.artifact) setView({ name: 'artifact', pathwayId, courseId });
              else if (c.activity) setView({ name: 'activity', pathwayId, courseId });
              else setView({ name: 'course', pathwayId, courseId });
            }}
          >
            {isLast ? (c.artifact || c.activity ? 'Continue to applied activity' : 'Finish lesson') : 'Mark complete and continue'} <ChevronRight size={14} />
          </Btn>
        </div>
      </div>
    );
  };

  // ── Applied activity ───────────────────────────────────────────────────

  const renderActivity = (pathwayId: string, courseId: string) => {
    const p = pathwayById(pathwayId);
    const c = p?.courses.find((x) => x.id === courseId);
    if (!p || !c || !c.activity) return renderCatalog();
    const value = state.activities[c.id] || '';

    return (
      <div className="max-w-3xl mx-auto py-8 space-y-8 animate-in fade-in duration-500">
        <Back label={c.title} onClick={() => setView({ name: 'course', pathwayId, courseId })} />
        <div className="space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#FF6E40]">Applied activity</p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">{c.activity.title}</h1>
        </div>
        {c.activity.body.map((para, i) => (
          <p key={i} className="text-lg text-zinc-700 leading-relaxed">{para}</p>
        ))}
        <div className="bg-white border border-zinc-200 rounded-2xl p-7 space-y-4 shadow-sm">
          <label htmlFor={`act-${c.id}`} className="block text-base font-semibold text-zinc-900 leading-snug">
            {c.activity.prompt}
          </label>
          <textarea
            id={`act-${c.id}`}
            rows={8}
            value={value}
            onChange={(e) => set((s) => ({ ...s, activities: { ...s.activities, [c.id]: e.target.value } }))}
            className="w-full p-4 border border-zinc-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-200 text-base leading-relaxed resize-y"
          />
          <p className="text-[11px] text-zinc-400">
            This becomes a portfolio artifact on your transcript. It is stored on your device and is not
            shared unless you choose to share it.
          </p>
        </div>
        <div className="flex justify-end">
          <Btn
            disabled={!value.trim()}
            onClick={() => {
              onSignal?.('academy_activity_submit', { pathwayId, courseId });
              setView({ name: 'course', pathwayId, courseId });
            }}
          >
            Save and return to course
          </Btn>
        </div>
      </div>
    );
  };


  // ── Carried-forward artifact ───────────────────────────────────────────

  const renderArtifact = (pathwayId: string, courseId: string) => {
    const p = pathwayById(pathwayId);
    const c = p?.courses.find((x) => x.id === courseId);
    if (!p || !c || !c.artifact) return renderCatalog();
    const a = c.artifact;
    const done = isArtifactComplete(c, state);

    return (
      <div className="max-w-3xl mx-auto py-8 space-y-8 animate-in fade-in duration-500">
        <Back label={c.title} onClick={() => setView({ name: 'course', pathwayId, courseId })} />
        <div className="space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#FF6E40]">Carried forward</p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">{a.title}</h1>
          <p className="text-lg text-zinc-600 leading-relaxed">{a.purpose}</p>
        </div>

        {a.reference && (
          <section className="bg-zinc-50/80 rounded-2xl border border-zinc-200/70 p-7 space-y-3">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{a.reference.title}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
              {a.reference.items.map((item) => (
                <li key={item} className="text-[14px] text-zinc-700 leading-relaxed flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-zinc-300 shrink-0 mt-2.5" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="space-y-7">
          {a.fields.map((f) => {
            const n = f.repeat || 1;
            return (
              <div key={f.id} className="space-y-3">
                <div className="space-y-1">
                  <label htmlFor={`${c.id}-${f.id}-0`} className="block text-base font-semibold text-zinc-900">{f.label}</label>
                  {f.help && <p className="text-[13px] text-zinc-500 leading-relaxed">{f.help}</p>}
                </div>
                {Array.from({ length: n }).map((_, i) => (
                  <div key={i} className="space-y-1.5">
                    {n > 1 && (
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        {f.repeatLabel || 'Entry'} {i + 1}
                      </p>
                    )}
                    <textarea
                      id={`${c.id}-${f.id}-${i}`}
                      rows={f.multiline ? (n > 1 ? 4 : 7) : 2}
                      value={artifactValue(c.id, f.id, i)}
                      onChange={(e) => setArtifactValue(c.id, f.id, i, e.target.value)}
                      placeholder={f.placeholder}
                      className="w-full p-4 border border-zinc-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-200 text-[15px] leading-relaxed resize-y"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-zinc-100">
          <p className="text-[12px] text-zinc-500">
            {done ? 'Saved. This carries into your roadmap in Course 8.' : 'Saves as you type. Fill every field to mark this complete.'}
          </p>
          <Btn onClick={() => setView({ name: 'course', pathwayId, courseId })}>Back to course</Btn>
        </div>
      </div>
    );
  };

  // ── Pre / post test ────────────────────────────────────────────────────

  const renderTest = (pathwayId: string, kind: 'pre' | 'post') => {
    const p = pathwayById(pathwayId);
    if (!p) return renderCatalog();
    const questions = (kind === 'pre' ? p.preTest : p.postTest) || [];
    return (
      <TestRunner
        pathway={p}
        kind={kind}
        questions={questions}
        onCancel={() => setView({ name: 'pathway', pathwayId })}
        onSubmit={(answers) => {
          const score = scoreTest(questions, answers);
          const at = new Date().toISOString();
          set((s) => {
            if (kind === 'pre') {
              return { ...s, preTest: { ...s.preTest, [p.id]: { score, attempt: 1, at } } };
            }
            const attempt = (s.postAttempts[p.id] || 0) + 1;
            const best = s.postTest[p.id];
            return {
              ...s,
              postAttempts: { ...s.postAttempts, [p.id]: attempt },
              postTest:
                !best || score > best.score
                  ? { ...s.postTest, [p.id]: { score, attempt, at } }
                  : s.postTest,
            };
          });
          onSignal?.(kind === 'pre' ? 'academy_pretest' : 'academy_posttest', { pathwayId: p.id, score });
        }}
        onDone={() => setView({ name: 'pathway', pathwayId })}
      />
    );
  };

  // ── Capstone ───────────────────────────────────────────────────────────

  const renderCapstone = (pathwayId: string) => {
    const p = pathwayById(pathwayId);
    if (!p || !p.capstone) return renderCatalog();
    const cap = p.capstone;
    const value = state.capstone[p.id] || '';
    const total = cap.rubric.reduce((n, r) => n + r.max, 0);

    return (
      <div className="max-w-3xl mx-auto py-8 space-y-8 animate-in fade-in duration-500">
        <Back label={p.title} onClick={() => setView({ name: 'pathway', pathwayId })} />
        <div className="space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Capstone</p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">{cap.title}</h1>
          <p className="text-lg text-zinc-600 leading-relaxed">{cap.intro}</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Required elements</h2>
          <ol className="space-y-2">
            {cap.requirements.map((r, i) => (
              <li key={r} className="flex items-start gap-4 text-[15px] text-zinc-700 leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-zinc-100 text-zinc-500 flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                {r}
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-white rounded-2xl border border-zinc-200/60 p-7 space-y-4">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Rubric, {total} points with {cap.passing} to pass</h2>
          <ul className="divide-y divide-zinc-100">
            {cap.rubric.map((r) => (
              <li key={r.label} className="flex items-center justify-between py-2.5 text-sm">
                <span className="text-zinc-700">{r.label}</span>
                <span className="text-zinc-400 font-semibold">0 to {r.max}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Assembled from the work already done, not a blank essay box. */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900">Your work so far</h2>
          <p className="text-[14px] text-zinc-500 leading-relaxed">
            Each course produced a piece of this roadmap. Review them here and revise anything that has
            changed. What you write below is the synthesis, not the whole document.
          </p>
          <div className="space-y-3">
            {p.courses.filter((c) => c.artifact).map((c) => {
              const complete = isArtifactComplete(c, state);
              const vals = state.artifacts[c.id] || {};
              return (
                <div key={c.id} className={`rounded-2xl border p-6 ${complete ? 'bg-white border-zinc-200' : 'bg-zinc-50/60 border-dashed border-zinc-300'}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Course {c.num}</p>
                      <p className="text-[15px] font-semibold text-zinc-900 mt-1">{c.artifact!.title}</p>
                    </div>
                    <button
                      onClick={() => setView({ name: 'artifact', pathwayId: p.id, courseId: c.id })}
                      className="text-[11px] font-bold uppercase tracking-widest text-[#233DFF] hover:underline shrink-0"
                    >
                      {complete ? 'Revise' : 'Complete it'}
                    </button>
                  </div>
                  {complete ? (
                    <div className="mt-4 space-y-3">
                      {c.artifact!.fields.map((f) => (
                        <div key={f.id}>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">{f.label}</p>
                          {(vals[f.id] || []).filter((v) => (v || '').trim()).map((v, i) => (
                            <p key={i} className="text-[14px] text-zinc-700 leading-relaxed whitespace-pre-wrap border-l-2 border-zinc-200 pl-3 mb-2">{v}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[13px] text-zinc-500 mt-3">Not done yet. This section of your roadmap is still empty.</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div className="bg-white border border-zinc-200 rounded-2xl p-7 space-y-4 shadow-sm">
          <label htmlFor="capstone" className="block text-base font-semibold text-zinc-900 leading-snug">
            Synthesis and 30, 60 and 90 day actions
          </label>
          <p className="text-[13px] text-zinc-500 leading-relaxed">
            Pull the pieces above together. What is your plan, what changed as you worked through it, and
            what will you actually do in the next 30, 60 and 90 days? Include your review date.
          </p>
          <textarea
            id="capstone"
            rows={10}
            value={state.capstone[p.id] || ''}
            onChange={(e) => set((s2) => ({ ...s2, capstone: { ...s2.capstone, [p.id]: e.target.value } }))}
            className="w-full p-4 border border-zinc-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-200 text-base leading-relaxed resize-y"
          />
        </div>

        <div className="flex justify-end">
          <Btn
            disabled={!value.trim()}
            onClick={() => {
              onSignal?.('academy_capstone_submit', { pathwayId: p.id });
              setView({ name: 'pathway', pathwayId });
            }}
          >
            Submit for review
          </Btn>
        </div>
      </div>
    );
  };

  // ── Transcript ─────────────────────────────────────────────────────────

  const renderTranscript = () => {
    const paths = state.enrolled.map(pathwayById).filter(Boolean) as Pathway[];
    return (
      <div className="max-w-4xl mx-auto py-8 space-y-10 animate-in fade-in duration-500">
        <Back label="Academy" onClick={() => setView({ name: 'catalog' })} />
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">Learner transcript</h1>
          <p className="text-zinc-500">{memberName} · Health Matters Clinic Academy</p>
        </div>

        {paths.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-zinc-200 py-20 text-center">
            <p className="text-sm text-zinc-500">No enrollments yet.</p>
          </div>
        ) : (
          <>
            <Section title="Academic learning">
              {paths.map((p) => (
                <Row key={p.id} left={`${p.title} (v${p.version})`} right={`${pathwayPercent(p, state)}% complete`} />
              ))}
            </Section>

            <Section title="Assessment growth">
              {paths.map((p) => {
                const { pre, post, gain } = knowledgeGain(p.id, state);
                return (
                  <Row
                    key={p.id}
                    left={p.title}
                    right={
                      pre === null
                        ? 'No baseline recorded'
                        : `Baseline ${pre}% · Post ${post === null ? 'not taken' : `${post}%`}${gain === null ? '' : ` · Gain ${gain >= 0 ? '+' : ''}${gain} pts`} · ${state.postAttempts[p.id] || 0} attempts`
                    }
                  />
                );
              })}
            </Section>

            <Section title="Credentials">
              {paths.filter((p) => state.credentials[p.id]).length === 0 ? (
                <p className="text-sm text-zinc-400 py-2">None issued yet.</p>
              ) : (
                paths
                  .filter((p) => state.credentials[p.id])
                  .map((p) => (
                    <Row
                      key={p.id}
                      left={p.credentialTitle}
                      right={`Active · issued ${new Date(state.credentials[p.id]).toLocaleDateString('en-US')}`}
                    />
                  ))
              )}
            </Section>

            <Section title="Applied learning">
              {paths.map((p) => {
                const artifacts = p.courses.filter((c) => (state.activities[c.id] || '').trim()).length;
                const cap = (state.capstone[p.id] || '').trim() ? 1 : 0;
                return <Row key={p.id} left={p.title} right={`${artifacts} applied artifacts · ${cap} capstone`} />;
              })}
            </Section>

            <Section title="Approved hours">
              <Row left="Training (self-paced learning recognized by HMC)" right={`${trainingHours(state)} hours`} />
              <p className="text-[11px] text-zinc-400 pt-3 leading-relaxed">
                Hour categories are kept distinct. Training hours are not volunteer service hours,
                practicum hours, or continuing education credit.
              </p>
            </Section>
          </>
        )}
      </div>
    );
  };

  // ── Certificate ────────────────────────────────────────────────────────

  const renderCertificate = (pathwayId: string) => {
    const p = pathwayById(pathwayId);
    const issuedAt = state.credentials[pathwayId];
    if (!p || !issuedAt) return null;
    const id = credentialId(p.id, userId, issuedAt);
    const date = new Date(issuedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
      <div className="fixed inset-0 z-[100] bg-zinc-900/60 backdrop-blur-md flex items-center justify-center p-6 overflow-y-auto">
        <div className="bg-white max-w-lg w-full rounded-[32px] p-10 space-y-6 shadow-2xl relative my-8">
          <button onClick={() => setShowCert(null)} aria-label="Close certificate" className="absolute top-6 right-6 text-zinc-300 hover:text-zinc-900">
            <X size={20} />
          </button>
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center">
              <Award size={32} className="text-[#F9C74F]" />
            </div>
          </div>
          <div className="text-center space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Health Matters Clinic</p>
            <p className="text-sm text-zinc-500">This certifies that</p>
            <p className="text-2xl font-semibold text-zinc-900">{memberName}</p>
            <p className="text-sm text-zinc-500">has completed</p>
            <p className="text-xl font-semibold text-zinc-900 leading-snug">{p.credentialTitle}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 py-5 border-y border-zinc-100 text-center">
            <div>
              <p className="text-sm font-semibold text-zinc-900">{date}</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Issued</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900 font-mono">{id}</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Certificate ID</p>
            </div>
          </div>
          <p className="text-[11px] text-zinc-400 text-center leading-relaxed">
            Verify at verify.healthmatters.clinic · Issuer: Health Matters Clinic · Pathway version {p.version}
          </p>
          <p className="text-[11px] text-zinc-500 text-center leading-relaxed bg-zinc-50 rounded-xl p-4">
            This is an HMC educational completion record. It is not professional certification,
            licensure, clinical scope, or admission eligibility.
          </p>
          <Btn className="w-full" onClick={() => setShowCert(null)}>Close</Btn>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {view.name === 'catalog' && renderCatalog()}
      {view.name === 'pathway' && renderPathway(view.pathwayId)}
      {view.name === 'course' && renderCourse(view.pathwayId, view.courseId)}
      {view.name === 'lesson' && renderLesson(view.pathwayId, view.courseId, view.index)}
      {view.name === 'activity' && renderActivity(view.pathwayId, view.courseId)}
      {view.name === 'artifact' && renderArtifact(view.pathwayId, view.courseId)}
      {view.name === 'test' && renderTest(view.pathwayId, view.kind)}
      {view.name === 'capstone' && renderCapstone(view.pathwayId)}
      {view.name === 'credentials' && renderCredentials()}
      {view.name === 'transcript' && renderTranscript()}
      {showCert && renderCertificate(showCert)}
      {registering && (
        <TrainingRegistration
          course={registering.course}
          session={registering.session}
          member={member}
          onClose={() => setRegistering(null)}
          onAccountCreated={() => onSignal?.('academy_account_created', { courseId: registering.course.id })}
        />
      )}
    </div>
  );
};

// ── Small building blocks ────────────────────────────────────────────────

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-7 space-y-1">
    <h2 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">{title}</h2>
    {children}
  </section>
);

const Row: React.FC<{ left: string; right: string }> = ({ left, right }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-2.5 border-b border-zinc-50 last:border-0">
    <span className="text-sm text-zinc-800 font-medium">{left}</span>
    <span className="text-[12px] text-zinc-500">{right}</span>
  </div>
);

const QuestionCard: React.FC<{
  q: CheckQ;
  chosen: number | undefined;
  onChoose: (i: number) => void;
  reveal: boolean;
}> = ({ q, chosen, onChoose, reveal }) => {
  const answered = chosen !== undefined;
  return (
    <div className="bg-white rounded-2xl border border-zinc-200 p-6 space-y-4">
      <p className="text-base font-semibold text-zinc-900 leading-snug">{q.q}</p>
      <div className="space-y-2">
        {q.options.map((opt, i) => {
          const isChosen = chosen === i;
          const isRight = i === q.answer;
          const showState = reveal && answered;
          return (
            <button
              key={opt}
              onClick={() => !answered && onChoose(i)}
              disabled={answered}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${
                showState && isRight
                  ? 'border-emerald-300 bg-emerald-50/60'
                  : showState && isChosen
                  ? 'border-[#FF6F91] bg-pink-50/50'
                  : isChosen
                  ? 'border-[#233DFF] bg-blue-50/50'
                  : 'border-zinc-200 bg-white hover:border-zinc-300'
              } ${answered ? 'cursor-default' : ''}`}
            >
              <span className="text-sm text-zinc-700 leading-relaxed flex-1">{opt}</span>
              {showState && isRight && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 shrink-0">Correct</span>
              )}
              {showState && isChosen && !isRight && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6F91] shrink-0">Your answer</span>
              )}
            </button>
          );
        })}
      </div>
      {reveal && answered && (
        <p className="text-[13px] text-zinc-600 leading-relaxed bg-zinc-50 rounded-xl p-4">{q.why}</p>
      )}
    </div>
  );
};

/** Pre and post tests. Answers are hidden until the whole test is submitted. */
const TestRunner: React.FC<{
  pathway: Pathway;
  kind: 'pre' | 'post';
  questions: CheckQ[];
  onSubmit: (answers: Record<string, number>) => void;
  onCancel: () => void;
  onDone: () => void;
}> = ({ pathway, kind, questions, onSubmit, onCancel, onDone }) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = useMemo(() => scoreTest(questions, answers), [questions, answers]);
  const allAnswered = questions.length > 0 && questions.every((q) => answers[q.id] !== undefined);
  const passed = score >= PASS_THRESHOLD;

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto py-8 space-y-8 animate-in fade-in duration-500">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto text-[#233DFF]">
            {kind === 'pre' ? <ListChecks size={30} /> : passed ? <CheckCircle2 size={30} /> : <TrendingUp size={30} />}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">{score}%</h1>
          <p className="text-lg text-zinc-600 max-w-md mx-auto leading-relaxed">
            {kind === 'pre'
              ? 'This is your baseline. It does not affect completion, and answers are not shown, because knowing them now would teach the content before the courses do. The final assessment is a parallel form: same objectives and difficulty, different questions, so the change from here is a real measure of what you learned.'
              : passed
              ? `You met the ${PASS_THRESHOLD}% benchmark for ${pathway.title}.`
              : `The benchmark is ${PASS_THRESHOLD}%. Review the courses and try again. Retries are unlimited, because the purpose is mastery, not selection.`}
          </p>
        </div>
        {/* A baseline that reveals its answer key stops being a baseline. Item
            review is shown only for the post-test, where teaching is the point. */}
        {kind === 'post' && (
          <div className="space-y-4">
            {questions.map((q) => (
              <QuestionCard key={q.id} q={q} chosen={answers[q.id]} onChoose={() => {}} reveal />
            ))}
          </div>
        )}
        <div className="flex justify-center pt-2">
          <Btn onClick={onDone}>{kind === 'pre' ? 'Start the courses' : 'Back to pathway'}</Btn>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8 animate-in fade-in duration-500">
      <Back label={pathway.title} onClick={onCancel} />
      <div className="space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          {kind === 'pre' ? 'Baseline check' : 'Pathway post-test'}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
          {kind === 'pre' ? 'Before you begin' : `${pathway.title} post-test`}
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed">
          {kind === 'pre'
            ? 'Answer what you can. Guessing is fine and there is no penalty. This is only used to measure how much you gain by the end.'
            : `${questions.length} questions. ${PASS_THRESHOLD}% to pass. You may retake this as many times as you need.`}
        </p>
      </div>
      <div className="space-y-4">
        {questions.map((q, i) => (
          <div key={q.id} className="bg-white rounded-2xl border border-zinc-200 p-6 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Question {i + 1} of {questions.length}</p>
            <p className="text-base font-semibold text-zinc-900 leading-snug">{q.q}</p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => (
                <button
                  key={opt}
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
                  aria-pressed={answers[q.id] === oi}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
                    answers[q.id] === oi ? 'border-[#233DFF] bg-blue-50/50' : 'border-zinc-200 bg-white hover:border-zinc-300'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${answers[q.id] === oi ? 'border-[#233DFF] bg-[#233DFF] text-white' : 'border-zinc-200'}`}>
                    {answers[q.id] === oi && <Check size={11} strokeWidth={4} />}
                  </span>
                  <span className="text-sm text-zinc-700 leading-relaxed">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-100">
        <p className="text-xs text-zinc-400 font-semibold">
          {Object.keys(answers).length} of {questions.length} answered
        </p>
        <Btn
          disabled={!allAnswered}
          onClick={() => { onSubmit(answers); setSubmitted(true); }}
          className="w-full sm:w-auto"
        >
          Submit {kind === 'pre' ? 'baseline' : 'post-test'}
        </Btn>
      </div>
    </div>
  );
};

export default Academy;
