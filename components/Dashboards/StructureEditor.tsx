import React, { useState } from 'react';
import { ArrowDown, ArrowUp, Plus, Trash2, ChevronDown, ChevronRight, CheckCircle2 } from 'lucide-react';
import type { Check } from '../Academy/catalog';
import type { Block } from '../Academy/blocks';
import {
  BLOCK_SPECS, blockSpec, emptyBlock, emptyCheck, emptyLesson, parasFromText, parasToText, linesFromText, linesToText,
  structureCounts, type FieldSpec, type FullStructure, type LessonData, type PathwayTests,
} from '../Academy/courseStructure';

export type { FullStructure };

/**
 * The editor for a course's real content: its lessons and every block in them, its questions
 * and answer keys, its activity, sources and exam, and a pathway's baseline and post-test.
 *
 * It edits whatever it is given and reports each change. It knows nothing about drafts,
 * reviewers or who may release, so the same editor serves an author drafting, a reviewer
 * correcting a submission and an administrator releasing directly. Wrap it in a disabled
 * fieldset to make it read only.
 *
 * Answer keys are shown and editable throughout. Whoever can open this editor is already
 * trusted with them, and the Hub bundle carries the keys for compiled courses anyway because
 * scoring happens in the learner's browser.
 */

const card = 'bg-white rounded-3xl border border-zinc-200/70 p-6';
const label = 'text-[10px] font-black uppercase tracking-widest text-zinc-400';
const input = 'w-full px-4 py-3 rounded-2xl border border-zinc-300 text-sm focus:border-[#233DFF] focus:outline-none disabled:bg-zinc-50';
const smallBtn = 'flex items-center gap-1.5 px-3 py-2 rounded-full border border-zinc-300 text-[10px] font-black uppercase tracking-wider text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 disabled:opacity-40 disabled:hover:border-zinc-300 disabled:hover:text-zinc-600';
const addBtn = 'flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 text-[11px] font-black uppercase tracking-wider text-zinc-600 hover:border-zinc-900 hover:text-zinc-900';

const move = <T,>(arr: T[], i: number, dir: -1 | 1): T[] => {
  const j = i + dir;
  if (j < 0 || j >= arr.length) return arr;
  const out = arr.slice();
  [out[i], out[j]] = [out[j], out[i]];
  return out;
};

const MAX_OPTIONS = 6;

// ── One question, with its answer key ────────────────────────────────────

type Q = { id: string; q: string; options: string[]; answer: number } & Record<string, unknown>;

export const QuestionEditor: React.FC<{
  value: Q;
  onChange: (v: Q) => void;
  onRemove?: () => void;
  title: string;
  /** The field that holds the explanation: a course or test question calls it why, a lesson check calls it rationale. */
  explainKey: 'why' | 'rationale';
  /** A lesson check also carries the reason tempting wrong answers are wrong, and a source. */
  extras?: boolean;
}> = ({ value, onChange, onRemove, title, explainKey, extras }) => {
  const set = (patch: Partial<Q>) => onChange({ ...value, ...patch });
  const opts = value.options || [];
  const setOption = (i: number, text: string) => set({ options: opts.map((o, n) => (n === i ? text : o)) });
  const removeOption = (i: number) => {
    const next = opts.filter((_, n) => n !== i);
    const answer = value.answer === i ? 0 : value.answer > i ? value.answer - 1 : value.answer;
    set({ options: next, answer });
  };
  const name = `answer-${value.id}`;
  return (
    <div className="rounded-2xl border border-zinc-200 p-5 space-y-4 bg-zinc-50/40">
      <div className="flex items-center justify-between gap-3">
        <p className={label}>{title}</p>
        {onRemove && (
          <button onClick={onRemove} className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-zinc-400 hover:text-[#FF6E40]">
            <Trash2 size={12} /> Remove
          </button>
        )}
      </div>
      <div>
        <label className={label} htmlFor={`${name}-q`}>Question</label>
        <textarea id={`${name}-q`} className={`${input} mt-2 min-h-[70px]`} value={value.q} onChange={(e) => set({ q: e.target.value })} />
      </div>
      <fieldset className="space-y-2">
        <legend className={label}>Answer choices. Select the correct one.</legend>
        {opts.map((o, i) => {
          const right = value.answer === i;
          return (
            <div key={i} className={`flex items-center gap-3 rounded-2xl border p-2 pl-4 ${right ? 'border-emerald-300 bg-emerald-50/60' : 'border-zinc-200 bg-white'}`}>
              <input
                type="radio" name={name} checked={right} onChange={() => set({ answer: i })}
                aria-label={`Option ${i + 1} is the correct answer`} className="accent-emerald-600 shrink-0"
              />
              <input
                className="flex-1 min-w-0 px-2 py-2 text-sm bg-transparent focus:outline-none"
                value={o} onChange={(e) => setOption(i, e.target.value)} aria-label={`Option ${i + 1}`} placeholder={`Option ${i + 1}`}
              />
              {right && <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 shrink-0 pr-1">Correct</span>}
              {opts.length > 2 && (
                <button onClick={() => removeOption(i)} aria-label={`Remove option ${i + 1}`} className="p-2 text-zinc-400 hover:text-[#FF6E40] shrink-0">
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          );
        })}
        {opts.length < MAX_OPTIONS && (
          <button onClick={() => set({ options: [...opts, ''] })} className={smallBtn}><Plus size={12} /> Add an option</button>
        )}
      </fieldset>
      <div>
        <label className={label} htmlFor={`${name}-why`}>Why the right answer is right</label>
        <textarea id={`${name}-why`} className={`${input} mt-2 min-h-[70px]`} value={String(value[explainKey] ?? '')} onChange={(e) => set({ [explainKey]: e.target.value } as Partial<Q>)} />
      </div>
      {extras && (
        <>
          <div>
            <label className={label} htmlFor={`${name}-dis`}>Why the tempting wrong answers are wrong (optional)</label>
            <textarea id={`${name}-dis`} className={`${input} mt-2 min-h-[56px]`} value={String(value.distractors ?? '')} onChange={(e) => set({ distractors: e.target.value })} />
          </div>
          <div>
            <label className={label} htmlFor={`${name}-src`}>Source (optional)</label>
            <input id={`${name}-src`} className={`${input} mt-2`} value={String(value.source ?? '')} onChange={(e) => set({ source: e.target.value })} />
          </div>
        </>
      )}
    </div>
  );
};

const QuestionList: React.FC<{
  items: Check[]; onChange: (v: Check[]) => void; noun: string; explainKey?: 'why';
}> = ({ items, onChange, noun }) => (
  <div className="space-y-3">
    {items.map((q, i) => (
      <div key={q.id} className="space-y-2">
        <QuestionEditor
          value={q as unknown as Q}
          onChange={(v) => onChange(items.map((x, n) => (n === i ? (v as unknown as Check) : x)))}
          onRemove={() => onChange(items.filter((_, n) => n !== i))}
          title={`${noun} ${i + 1}`}
          explainKey="why"
        />
        <div className="flex gap-2">
          <button disabled={i === 0} onClick={() => onChange(move(items, i, -1))} className={smallBtn} aria-label={`Move ${noun} ${i + 1} up`}><ArrowUp size={12} /> Up</button>
          <button disabled={i === items.length - 1} onClick={() => onChange(move(items, i, 1))} className={smallBtn} aria-label={`Move ${noun} ${i + 1} down`}><ArrowDown size={12} /> Down</button>
        </div>
      </div>
    ))}
    <button onClick={() => onChange([...items, emptyCheck()])} className={addBtn}><Plus size={14} /> Add a question</button>
  </div>
);

// ── A block, driven by the descriptor table ──────────────────────────────

const FieldEditor: React.FC<{ spec: FieldSpec; value: unknown; onChange: (v: unknown) => void; idBase: string }> = ({ spec, value, onChange, idBase }) => {
  const id = `${idBase}-${spec.key}`;
  const help = spec.help ? <p className="text-[11px] text-zinc-400 mt-1">{spec.help}</p> : null;
  switch (spec.type) {
    case 'text':
    case 'url':
      return (
        <div>
          <label className={label} htmlFor={id}>{spec.label}</label>
          <input id={id} className={`${input} mt-2`} type={spec.type === 'url' ? 'url' : 'text'} value={String(value ?? '')} onChange={(e) => onChange(e.target.value)} placeholder={spec.placeholder} />
          {help}
        </div>
      );
    case 'num':
      return (
        <div>
          <label className={label} htmlFor={id}>{spec.label}</label>
          <input id={id} className={`${input} mt-2 max-w-[160px]`} type="number" min={0} value={Number(value) || 0} onChange={(e) => onChange(Number(e.target.value))} />
        </div>
      );
    case 'bool':
      return (
        <label className="flex items-center gap-3 text-sm text-zinc-700">
          <input type="checkbox" checked={value === true} onChange={(e) => onChange(e.target.checked)} /> {spec.label}
        </label>
      );
    case 'paras':
      return (
        <div>
          <label className={label} htmlFor={id}>{spec.label}</label>
          <textarea id={id} className={`${input} mt-2 min-h-[120px]`} value={parasToText(value as string[])} onChange={(e) => onChange(parasFromText(e.target.value))} />
          {help}
        </div>
      );
    case 'lines':
      return (
        <div>
          <label className={label} htmlFor={id}>{spec.label}</label>
          <textarea id={id} className={`${input} mt-2 min-h-[90px]`} value={linesToText(value as string[])} onChange={(e) => onChange(linesFromText(e.target.value))} />
          {help}
        </div>
      );
    case 'pairs': {
      const [a, b] = spec.pair as [string, string];
      const [la, lb] = spec.pairLabels || ['First', 'Second'];
      const rows = (value as Record<string, string>[]) || [];
      const setRow = (i: number, patch: Record<string, string>) => onChange(rows.map((r, n) => (n === i ? { ...r, ...patch } : r)));
      return (
        <div className="space-y-3">
          <p className={label}>{spec.label}</p>
          {rows.map((r, i) => (
            <div key={i} className="grid sm:grid-cols-[1fr_2fr_auto] gap-2 items-start">
              <input className={input} aria-label={`${la} ${i + 1}`} placeholder={la} value={r[a] ?? ''} onChange={(e) => setRow(i, { [a]: e.target.value })} />
              <textarea className={`${input} min-h-[48px]`} aria-label={`${lb} ${i + 1}`} placeholder={lb} value={r[b] ?? ''} onChange={(e) => setRow(i, { [b]: e.target.value })} />
              <button onClick={() => onChange(rows.filter((_, n) => n !== i))} aria-label={`Remove ${la} ${i + 1}`} className="p-3 text-zinc-400 hover:text-[#FF6E40]"><Trash2 size={14} /></button>
            </div>
          ))}
          <button onClick={() => onChange([...rows, { [a]: '', [b]: '' }])} className={smallBtn}><Plus size={12} /> Add one</button>
        </div>
      );
    }
    case 'ref': {
      const r = (value as Record<string, string>) || { name: '', use: '', url: '' };
      const set = (patch: Record<string, string>) => onChange({ ...r, ...patch });
      return (
        <div className="space-y-2">
          <p className={label}>{spec.label}</p>
          <input className={input} aria-label="Source name" placeholder="Who published it" value={r.name ?? ''} onChange={(e) => set({ name: e.target.value })} />
          <input className={input} aria-label="What it is used for" placeholder="What a learner would use it for" value={r.use ?? ''} onChange={(e) => set({ use: e.target.value })} />
          <input className={input} type="url" aria-label="Source link" placeholder="https://" value={r.url ?? ''} onChange={(e) => set({ url: e.target.value })} />
        </div>
      );
    }
    case 'check':
      return (
        <QuestionEditor
          value={value as unknown as Q} onChange={(v) => onChange(v)} title="Knowledge check" explainKey="rationale" extras
        />
      );
    default:
      return null;
  }
};

const BlockEditor: React.FC<{
  block: Block; index: number; count: number; idBase: string;
  onChange: (b: Block) => void; onMove: (d: -1 | 1) => void; onRemove: () => void;
}> = ({ block, index, count, idBase, onChange, onMove, onRemove }) => {
  const b = block as unknown as Record<string, unknown>;
  const spec = blockSpec(String(b.kind));
  if (!spec) return <p className="text-sm text-[#FF6F91]">This block is a kind the editor does not know ({String(b.kind)}).</p>;
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-zinc-900">{spec.label}</p>
        <div className="flex gap-2">
          <button disabled={index === 0} onClick={() => onMove(-1)} className={smallBtn} aria-label={`Move block ${index + 1} up`}><ArrowUp size={12} /></button>
          <button disabled={index === count - 1} onClick={() => onMove(1)} className={smallBtn} aria-label={`Move block ${index + 1} down`}><ArrowDown size={12} /></button>
          <button onClick={onRemove} className={smallBtn} aria-label={`Remove block ${index + 1}`}><Trash2 size={12} /> Remove</button>
        </div>
      </div>
      {spec.fields.map((f) => (
        <FieldEditor key={f.key} spec={f} idBase={`${idBase}-${index}`} value={b[f.key]} onChange={(v) => onChange({ ...block, [f.key]: v } as Block)} />
      ))}
    </div>
  );
};

// ── A lesson ─────────────────────────────────────────────────────────────

const LessonEditor: React.FC<{
  lesson: LessonData; index: number; count: number; open: boolean;
  onToggle: () => void; onChange: (l: LessonData) => void; onMove: (d: -1 | 1) => void; onRemove: () => void;
}> = ({ lesson, index, count, open, onToggle, onChange, onMove, onRemove }) => {
  const [adding, setAdding] = useState('prose');
  const [confirm, setConfirm] = useState(false);
  const idBase = `lesson-${lesson.id}`;
  const questions = lesson.blocks.filter((b) => (b as { kind: string }).kind === 'check').length;
  const setBlock = (i: number, b: Block) => onChange({ ...lesson, blocks: lesson.blocks.map((x, n) => (n === i ? b : x)) });
  return (
    <div className={card}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button onClick={onToggle} aria-expanded={open} className="flex items-center gap-2 text-left min-w-0">
          {open ? <ChevronDown size={16} className="shrink-0 text-zinc-400" /> : <ChevronRight size={16} className="shrink-0 text-zinc-400" />}
          <span className="min-w-0">
            <span className="block text-[10px] font-black uppercase tracking-widest text-zinc-400">Lesson {index + 1}</span>
            <span className="block text-base font-semibold text-zinc-900 truncate">{lesson.title || 'Untitled lesson'}</span>
            <span className="block text-[11px] text-zinc-400">{lesson.minutes} min · {lesson.blocks.length} {lesson.blocks.length === 1 ? 'block' : 'blocks'}{questions ? ` · ${questions} ${questions === 1 ? 'question' : 'questions'}` : ''}</span>
          </span>
        </button>
        <div className="flex gap-2">
          <button disabled={index === 0} onClick={() => onMove(-1)} className={smallBtn} aria-label={`Move lesson ${index + 1} up`}><ArrowUp size={12} /> Up</button>
          <button disabled={index === count - 1} onClick={() => onMove(1)} className={smallBtn} aria-label={`Move lesson ${index + 1} down`}><ArrowDown size={12} /> Down</button>
          {confirm ? (
            <button onClick={onRemove} className={`${smallBtn} !border-[#FF6E40] !text-[#FF6E40]`}>Remove for good</button>
          ) : (
            <button onClick={() => setConfirm(true)} className={smallBtn} aria-label={`Remove lesson ${index + 1}`}><Trash2 size={12} /> Remove</button>
          )}
        </div>
      </div>
      {confirm && (
        <p className="text-xs text-[#FF6E40] mt-3 leading-relaxed">
          A learner who finished this lesson loses the record of it, and their progress through the course changes. Removing a lesson also removes any questions in it.
        </p>
      )}

      {open && (
        <div className="mt-6 space-y-5">
          <div className="grid sm:grid-cols-[1fr_140px] gap-3">
            <div>
              <label className={label} htmlFor={`${idBase}-title`}>Lesson title</label>
              <input id={`${idBase}-title`} className={`${input} mt-2 font-semibold`} value={lesson.title} onChange={(e) => onChange({ ...lesson, title: e.target.value })} />
            </div>
            <div>
              <label className={label} htmlFor={`${idBase}-min`}>Minutes</label>
              <input id={`${idBase}-min`} className={`${input} mt-2`} type="number" min={0} value={lesson.minutes} onChange={(e) => onChange({ ...lesson, minutes: Number(e.target.value) })} />
            </div>
          </div>
          <div>
            <label className={label} htmlFor={`${idBase}-sum`}>One line on the course outline</label>
            <input id={`${idBase}-sum`} className={`${input} mt-2`} value={lesson.summary} onChange={(e) => onChange({ ...lesson, summary: e.target.value })} />
          </div>

          <div className="space-y-4">
            {lesson.blocks.map((b, i) => (
              <BlockEditor
                key={i} block={b} index={i} count={lesson.blocks.length} idBase={idBase}
                onChange={(nb) => setBlock(i, nb)}
                onMove={(d) => onChange({ ...lesson, blocks: move(lesson.blocks, i, d) })}
                onRemove={() => onChange({ ...lesson, blocks: lesson.blocks.filter((_, n) => n !== i) })}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="sr-only" htmlFor={`${idBase}-kind`}>Kind of block to add</label>
            <select id={`${idBase}-kind`} className="px-4 py-3 rounded-2xl border border-zinc-300 text-sm" value={adding} onChange={(e) => setAdding(e.target.value)}>
              {BLOCK_SPECS.map((s) => <option key={s.kind} value={s.kind}>{s.label}</option>)}
            </select>
            <button onClick={() => onChange({ ...lesson, blocks: [...lesson.blocks, emptyBlock(adding)] })} className={addBtn}>
              <Plus size={14} /> Add a block
            </button>
            <span className="text-[11px] text-zinc-400">{blockSpec(adding)?.help}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// ── A whole course ───────────────────────────────────────────────────────

export const StructureEditor: React.FC<{ value: FullStructure; onChange: (v: FullStructure) => void }> = ({ value, onChange }) => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const set = (patch: Partial<FullStructure>) => onChange({ ...value, ...patch });
  const counts = structureCounts(value);
  const total = value.lessons.reduce((n, l) => n + (Number(l.minutes) || 0), 0);
  const activity = value.activity;
  const exam = value.exam;
  const allOpen = value.lessons.length > 0 && value.lessons.every((l) => open[l.id]);

  return (
    <div className="space-y-3">
      <div className={card}>
        <p className={label}>The course content</p>
        <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
          {counts.lessons} {counts.lessons === 1 ? 'lesson' : 'lessons'}, {counts.questions} {counts.questions === 1 ? 'question' : 'questions'}, about {total} minutes of lessons.
          Everything a learner reads, answers, and does is here. Only the parts you change are stored, so the rest keeps following the course as it was written.
        </p>
        {value.lessons.length > 0 && (
          <button
            onClick={() => setOpen(Object.fromEntries(value.lessons.map((l) => [l.id, !allOpen])))}
            className={`${smallBtn} mt-4`}
          >
            {allOpen ? 'Collapse all lessons' : 'Expand all lessons'}
          </button>
        )}
      </div>

      <div className="space-y-3">
        {value.lessons.map((l, i) => (
          <LessonEditor
            key={l.id} lesson={l} index={i} count={value.lessons.length} open={Boolean(open[l.id])}
            onToggle={() => setOpen((o) => ({ ...o, [l.id]: !o[l.id] }))}
            onChange={(nl) => set({ lessons: value.lessons.map((x, n) => (n === i ? nl : x)) })}
            onMove={(d) => set({ lessons: move(value.lessons, i, d) })}
            onRemove={() => set({ lessons: value.lessons.filter((_, n) => n !== i) })}
          />
        ))}
        <button
          onClick={() => { const l = emptyLesson(); set({ lessons: [...value.lessons, l] }); setOpen((o) => ({ ...o, [l.id]: true })); }}
          className={addBtn}
        >
          <Plus size={14} /> Add a lesson
        </button>
      </div>

      <div className={card}>
        <p className={label}>Questions at the end of the course</p>
        <p className="text-xs text-zinc-500 mt-2 leading-relaxed">Shown after the last lesson when the lessons carry no checks of their own.</p>
        <div className="mt-4">
          <QuestionList items={value.checks} onChange={(checks) => set({ checks })} noun="Question" />
        </div>
      </div>

      <div className={card}>
        <label className="flex items-center gap-3 text-sm font-semibold text-zinc-900">
          <input type="checkbox" checked={Boolean(activity)} onChange={(e) => set({ activity: e.target.checked ? { title: '', body: [], prompt: '' } : null })} />
          This course has a hands-on activity
        </label>
        {activity && (
          <div className="mt-4 space-y-4">
            <div>
              <label className={label} htmlFor="act-title">Activity title</label>
              <input id="act-title" className={`${input} mt-2`} value={activity.title} onChange={(e) => set({ activity: { ...activity, title: e.target.value } })} />
            </div>
            <div>
              <label className={label} htmlFor="act-body">What to do</label>
              <textarea id="act-body" className={`${input} mt-2 min-h-[120px]`} value={parasToText(activity.body)} onChange={(e) => set({ activity: { ...activity, body: parasFromText(e.target.value) } })} />
              <p className="text-[11px] text-zinc-400 mt-1">A blank line starts a new paragraph.</p>
            </div>
            <div>
              <label className={label} htmlFor="act-prompt">What the learner writes</label>
              <textarea id="act-prompt" className={`${input} mt-2 min-h-[70px]`} value={activity.prompt} onChange={(e) => set({ activity: { ...activity, prompt: e.target.value } })} />
            </div>
          </div>
        )}
      </div>

      <div className={card}>
        <p className={label}>Sources and further reading</p>
        <div className="mt-3 space-y-3">
          {(value.furtherLearning || []).map((s, i) => (
            <div key={i} className="grid sm:grid-cols-[1fr_1fr_1fr_auto] gap-2 items-start">
              <input className={input} aria-label={`Source ${i + 1} name`} placeholder="Who published it" value={s.name} onChange={(e) => set({ furtherLearning: value.furtherLearning!.map((x, n) => (n === i ? { ...x, name: e.target.value } : x)) })} />
              <input className={input} aria-label={`Source ${i + 1} use`} placeholder="What it is used for" value={s.use ?? ''} onChange={(e) => set({ furtherLearning: value.furtherLearning!.map((x, n) => (n === i ? { ...x, use: e.target.value } : x)) })} />
              <input className={input} type="url" aria-label={`Source ${i + 1} link`} placeholder="https://" value={s.url ?? ''} onChange={(e) => set({ furtherLearning: value.furtherLearning!.map((x, n) => (n === i ? { ...x, url: e.target.value } : x)) })} />
              <button onClick={() => set({ furtherLearning: value.furtherLearning!.filter((_, n) => n !== i) })} aria-label={`Remove source ${i + 1}`} className="p-3 text-zinc-400 hover:text-[#FF6E40]"><Trash2 size={14} /></button>
            </div>
          ))}
          <button onClick={() => set({ furtherLearning: [...(value.furtherLearning || []), { name: '', use: '', url: '' }] })} className={addBtn}><Plus size={14} /> Add a source</button>
        </div>
      </div>

      <div className={card}>
        <label className="flex items-center gap-3 text-sm font-semibold text-zinc-900">
          <input type="checkbox" checked={Boolean(exam)} onChange={(e) => set({ exam: e.target.checked ? { questions: [], passPercent: 80 } : null })} />
          This course has its own exam
        </label>
        <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
          An exam decides whether the course was earned. It is separate from the knowledge checks, which teach and cost nothing to get wrong.
        </p>
        {exam && (
          <div className="mt-4 space-y-4">
            <div>
              <label className={label} htmlFor="exam-pass">Pass mark, as a percent</label>
              <input id="exam-pass" className={`${input} mt-2 max-w-[160px]`} type="number" min={1} max={100} value={exam.passPercent} onChange={(e) => set({ exam: { ...exam, passPercent: Number(e.target.value) } })} />
            </div>
            <QuestionList items={exam.questions} onChange={(questions) => set({ exam: { ...exam, questions } })} noun="Exam question" />
          </div>
        )}
      </div>
    </div>
  );
};

// ── A pathway's baseline and post-test ───────────────────────────────────

/** Plain hints about whether the two forms are parallel, before the portal's rules run at review. */
export const testHints = (t: PathwayTests): string[] => {
  const hints: string[] = [];
  const pre = t.preTest, post = t.postTest;
  if (pre.length && post.length && pre.length !== post.length) hints.push(`The baseline has ${pre.length} questions and the post-test has ${post.length}. Parallel forms are the same length.`);
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
  const preQs = new Set(pre.map((q) => norm(q.q)).filter(Boolean));
  const shared = post.filter((q) => norm(q.q) && preQs.has(norm(q.q)));
  if (shared.length) hints.push(`${shared.length} post-test ${shared.length === 1 ? 'question repeats' : 'questions repeat'} a baseline question. A learner could pass without learning.`);
  for (const [name, form] of [['baseline', pre], ['post-test', post]] as const) {
    if (form.length < 4) continue;
    const counts: number[] = [0, 0, 0, 0, 0, 0];
    form.forEach((q) => { counts[q.answer] = (counts[q.answer] || 0) + 1; });
    if (Math.max(...counts) > Math.ceil(form.length / 2)) hints.push(`Too many ${name} answers are in the same position, which makes them guessable.`);
  }
  return hints;
};

export const TestsEditor: React.FC<{ value: PathwayTests; onChange: (v: PathwayTests) => void }> = ({ value, onChange }) => {
  const hints = testHints(value);
  return (
    <div className="space-y-3">
      <div className={card}>
        <p className={label}>Baseline and post-test</p>
        <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
          The baseline is taken before the lessons and the post-test after them. The difference is what a learner gained, and what the Outcomes report measures.
          They should be parallel forms: the same number of questions on the same ideas, worded differently, with the correct answers spread across the positions.
        </p>
        {hints.length > 0 ? (
          <ul className="mt-4 space-y-1.5" aria-label="Things to check">
            {hints.map((h) => <li key={h} className="text-sm text-amber-900 rounded-xl bg-amber-50 border border-amber-200 px-4 py-2">{h}</li>)}
          </ul>
        ) : (value.preTest.length > 0 && value.postTest.length > 0) ? (
          <p className="mt-4 flex items-center gap-2 text-sm text-emerald-700"><CheckCircle2 size={16} /> The two forms look parallel.</p>
        ) : null}
      </div>
      <div className={card}>
        <p className={label}>Baseline questions ({value.preTest.length})</p>
        <div className="mt-4"><QuestionList items={value.preTest} onChange={(preTest) => onChange({ ...value, preTest })} noun="Baseline question" /></div>
      </div>
      <div className={card}>
        <p className={label}>Post-test questions ({value.postTest.length})</p>
        <div className="mt-4"><QuestionList items={value.postTest} onChange={(postTest) => onChange({ ...value, postTest })} noun="Post-test question" /></div>
      </div>
    </div>
  );
};

export default StructureEditor;
