/**
 * A course's content as data, for any course.
 *
 * A Hub course used to be TypeScript compiled into the app, so a lesson could be added, a
 * question changed or an answer key corrected only by a deployment. The portal now stores a
 * structure per course (lessons made of typed blocks, knowledge checks, an activity, sources,
 * an exam) and a baseline and post-test per pathway. This file turns that data back into the
 * compiled catalogue's shapes, and turns the catalogue into something an author can edit.
 *
 * Applying it mutates the catalogue in place, from a snapshot of the compiled original, on
 * purpose. Everything that reads a course (the renderer, progress, the completion gates, the
 * baseline scoring) already reads it from PATHWAYS at the moment it renders, so changing
 * PATHWAYS once is the one change that every one of them then sees, and none of them needs to
 * know authored content exists. Applying from the snapshot each time keeps it idempotent: a
 * course whose override is removed goes back to exactly what was compiled.
 *
 * A structure is a partial replacement. A key that is absent leaves the compiled part alone, so
 * an author who only fixes a question does not freeze the rest of the course.
 */

import type { Activity, Check, Course, Lesson, Pathway } from './catalog';
import type { Block, SourceRef } from './blocks';
import { reviewedProse, preservedBlocks, extraSections, sectionParagraphs, type CourseOverride, type OverrideMap } from './overrides';

export interface LessonData { id: string; title: string; summary: string; minutes: number; blocks: Block[] }
export interface ExamData { questions: Check[]; passPercent: number }

export interface CourseStructure {
  lessons?: LessonData[];
  checks?: Check[];
  /** null removes the activity. Absent leaves the compiled one. */
  activity?: Activity | null;
  furtherLearning?: SourceRef[];
  /** null removes the exam. Absent leaves the compiled one. */
  exam?: ExamData | null;
  minutes?: number;
}

export interface PathwayTests { preTest: Check[]; postTest: Check[] }

/** A structure with every part present, which is what an editor works on. */
export type FullStructure = CourseStructure & { lessons: LessonData[]; checks: Check[] };

/** The id of a pathway's baseline and post-test as an editable item. */
export const testsItemId = (pathwayId: string) => `tests:${pathwayId}`;

// ── What each block kind carries, for the editor ─────────────────────────

export type FieldType = 'text' | 'paras' | 'lines' | 'bool' | 'num' | 'url' | 'pairs' | 'ref' | 'check';
export interface FieldSpec {
  key: string;
  label: string;
  type: FieldType;
  help?: string;
  placeholder?: string;
  /** For pairs, the two keys and what to call them. */
  pair?: [string, string];
  pairLabels?: [string, string];
}
export interface BlockSpec { kind: string; label: string; help: string; fields: FieldSpec[] }

const TEXT: FieldSpec = { key: 'text', label: 'Text', type: 'paras', help: 'A blank line starts a new paragraph.' };
const TITLE: FieldSpec = { key: 'title', label: 'Heading', type: 'text' };

/**
 * One table drives the block forms, and mirrors what the server will accept. Adding a kind of
 * block is a line here and a line in the portal's schema, and the test that compares the two
 * kinds lists is what stops one being added without the other.
 */
export const BLOCK_SPECS: BlockSpec[] = [
  { kind: 'prose', label: 'Paragraphs', help: 'Plain explanation.', fields: [TEXT] },
  { kind: 'why', label: 'Why this matters', help: 'A short reason to care, near the top of a lesson.', fields: [TEXT] },
  { kind: 'case', label: 'Case or scenario', help: 'A realistic situation. Mark it if it is made up.', fields: [TITLE, { key: 'scenario', label: 'This is a made up instructional scenario', type: 'bool' }, TEXT] },
  { kind: 'concept', label: 'Key concept', help: 'One idea, explained.', fields: [TITLE, TEXT] },
  { kind: 'example', label: 'Worked example', help: 'The idea applied step by step.', fields: [TITLE, TEXT] },
  { kind: 'myths', label: 'Myth versus reality', help: 'Common misconceptions.', fields: [{ key: 'items', label: 'Myths', type: 'pairs', pair: ['myth', 'reality'], pairLabels: ['The myth', 'The reality'] }] },
  { kind: 'source', label: 'Source note', help: 'Where a claim comes from.', fields: [{ key: 'text', label: 'What to read and why', type: 'text' }, { key: 'ref', label: 'The source', type: 'ref' }] },
  { kind: 'fieldnote', label: 'Field note', help: 'What this looks like in HMC work.', fields: [TITLE, TEXT] },
  { kind: 'tryit', label: 'Try it', help: 'A small thing to do.', fields: [TITLE, TEXT] },
  { kind: 'reflect', label: 'Reflection', help: 'Questions for the learner to think about.', fields: [TITLE, { key: 'prompts', label: 'Prompts', type: 'lines', help: 'One per line.' }] },
  { kind: 'check', label: 'Knowledge check', help: 'A question with the correct answer and why.', fields: [{ key: 'check', label: 'Question', type: 'check' }] },
  { kind: 'takeaways', label: 'Key takeaways', help: 'Three to six things to remember.', fields: [{ key: 'items', label: 'Takeaways', type: 'lines', help: 'One per line.' }] },
  { kind: 'steps', label: 'Steps', help: 'An ordered procedure.', fields: [{ key: 'title', label: 'Heading (optional)', type: 'text' }, { key: 'items', label: 'Steps', type: 'pairs', pair: ['label', 'text'], pairLabels: ['Step', 'What to do'] }] },
  { kind: 'list', label: 'List', help: 'A short list.', fields: [{ key: 'title', label: 'Heading (optional)', type: 'text' }, { key: 'items', label: 'Items', type: 'lines', help: 'One per line.' }] },
  { kind: 'vocab', label: 'Vocabulary', help: 'Words defined in plain language.', fields: [{ key: 'items', label: 'Words', type: 'pairs', pair: ['term', 'plain'], pairLabels: ['Word', 'In plain language'] }] },
  { kind: 'activity', label: 'Activity', help: 'Something to do with no special equipment.', fields: [TITLE, TEXT, { key: 'materials', label: 'Materials (optional)', type: 'text' }] },
  {
    kind: 'video', label: 'Video', help: 'A recording, from YouTube or Vimeo.',
    fields: [
      TITLE,
      { key: 'embed', label: 'Embed address', type: 'url', help: 'The embed link, for example https://www.youtube.com/embed/abc123. Only YouTube and Vimeo are accepted.' },
      { key: 'watchUrl', label: 'Watch address (optional)', type: 'url', help: 'The ordinary link, for somebody whose browser blocks the frame.' },
      { key: 'minutes', label: 'Length in minutes', type: 'num' },
      { key: 'presenter', label: 'Presenter (optional)', type: 'text' },
      { key: 'text', label: 'What it covers (optional)', type: 'paras' },
    ],
  },
];

export const blockSpec = (kind: string): BlockSpec | undefined => BLOCK_SPECS.find((s) => s.kind === kind);

// ── Making new things ────────────────────────────────────────────────────

export const genId = (prefix: string): string => `${prefix}-${Math.random().toString(36).slice(2, 10)}`;

export const emptyCheck = (): Check => ({ id: genId('q'), q: '', options: ['', ''], answer: 0, why: '' });

export const emptyBlock = (kind: string): Block => {
  const spec = blockSpec(kind);
  const b: Record<string, unknown> = { kind };
  for (const f of spec?.fields || []) {
    if (f.type === 'paras' || f.type === 'lines' || f.type === 'pairs') b[f.key] = [];
    else if (f.type === 'bool') b[f.key] = false;
    else if (f.type === 'num') b[f.key] = 0;
    else if (f.type === 'ref') b[f.key] = { name: '', use: '', url: '' };
    else if (f.type === 'check') b[f.key] = { id: genId('k'), q: '', options: ['', ''], answer: 0, rationale: '' };
    else b[f.key] = '';
  }
  return b as unknown as Block;
};

export const emptyLesson = (): LessonData => ({ id: genId('l'), title: '', summary: '', minutes: 0, blocks: [] });

// ── The compiled original, remembered ────────────────────────────────────

interface CourseSnapshot {
  lessons: Lesson[]; checks: Check[]; activity: Activity | undefined; furtherLearning: SourceRef[] | undefined;
  exam: Course['exam']; minutes: number; standard: Course['standard'];
}
const COURSES = new Map<string, CourseSnapshot>();
const TESTS = new Map<string, { preTest: Check[] | undefined; postTest: Check[] | undefined }>();

const snapshotCourse = (c: Course): CourseSnapshot => {
  let s = COURSES.get(c.id);
  if (!s) {
    s = { lessons: c.lessons, checks: c.checks, activity: c.activity, furtherLearning: c.furtherLearning, exam: c.exam, minutes: c.minutes, standard: c.standard };
    COURSES.set(c.id, s);
  }
  return s;
};
const snapshotTests = (p: Pathway) => {
  let s = TESTS.get(p.id);
  if (!s) { s = { preTest: p.preTest, postTest: p.postTest }; TESTS.set(p.id, s); }
  return s;
};

/** The course as it was compiled, before any authored structure was applied over it. */
export const pristineCourse = (c: Course): Course => {
  const s = snapshotCourse(c);
  return { ...c, lessons: s.lessons, checks: s.checks, activity: s.activity, furtherLearning: s.furtherLearning, exam: s.exam, minutes: s.minutes, standard: s.standard };
};

/** The pathway's baseline and post-test as compiled. */
export const pristineTests = (p: Pathway): PathwayTests => {
  const s = snapshotTests(p);
  return { preTest: s.preTest || [], postTest: s.postTest || [] };
};

const copy = <T,>(v: T): T => JSON.parse(JSON.stringify(v));

// ── Applying authored content over the catalogue ─────────────────────────

// An empty map has this signature, so applying nothing to a catalogue that has had nothing
// applied is correctly reported as no change.
let lastApplied = '[]';

/**
 * Puts authored structures and tests over the compiled catalogue, or puts the compiled
 * originals back where there is none. Returns whether anything changed, so the caller can
 * re-render only when it has to.
 */
export const applyStructureOverrides = (pathways: Pathway[], map: OverrideMap): boolean => {
  const signature = JSON.stringify(Object.entries(map)
    .filter(([, o]) => o.structure || o.pathwayTests)
    .map(([id, o]) => [id, o.version, o.structure ? 1 : 0, o.pathwayTests ? 1 : 0])
    .sort());
  // Snapshot before anything is changed, always, so the original is never lost.
  for (const p of pathways) { snapshotTests(p); for (const c of p.courses) snapshotCourse(c); }
  if (signature === lastApplied) return false;
  lastApplied = signature;

  for (const p of pathways) {
    const t0 = snapshotTests(p);
    const tests = map[testsItemId(p.id)]?.pathwayTests;
    p.preTest = tests ? tests.preTest : t0.preTest;
    p.postTest = tests ? tests.postTest : t0.postTest;

    for (const c of p.courses) {
      const s = snapshotCourse(c);
      c.lessons = s.lessons; c.checks = s.checks; c.activity = s.activity; c.furtherLearning = s.furtherLearning;
      c.exam = s.exam; c.minutes = s.minutes; c.standard = s.standard;
      const st = map[c.id]?.structure;
      if (!st) continue;
      if (st.lessons) {
        c.lessons = st.lessons.map((l) => ({ id: l.id, title: l.title, summary: l.summary, minutes: l.minutes, blocks: l.blocks }));
        // Authored lessons are blocks, so they render through the guided renderer.
        c.standard = 'v2';
        // The portal's rule: stated minutes are the lessons plus any applied artifact.
        c.minutes = st.minutes ?? (st.lessons.reduce((n, l) => n + l.minutes, 0) + (c.artifact?.minutes || 0));
      } else if (st.minutes !== undefined) {
        c.minutes = st.minutes;
      }
      if (st.checks) c.checks = st.checks;
      if ('activity' in st) c.activity = st.activity || undefined;
      if (st.furtherLearning) c.furtherLearning = st.furtherLearning;
      if ('exam' in st) c.exam = st.exam || undefined;
    }
  }
  return true;
};

// ── Building what an author edits ────────────────────────────────────────

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'section';

/**
 * The whole of a course as an author sees it: the lessons, questions, activity, sources and
 * exam it currently has, in the editor's shape.
 *
 * Reviewed prose is folded in the way the renderer folds it, so what is in the editor is what
 * a learner reads. A lesson whose prose was corrected through the older editor becomes a prose
 * block followed by its original knowledge checks. Sections a reviewer added that matched no
 * lesson become lessons of their own, with no time set, because dropping them silently would
 * lose work and the author is made to say how long they take before it can be submitted.
 */
export const courseToStructure = (course: Course, override?: CourseOverride): FullStructure & { furtherLearning: SourceRef[] } => {
  const lessons: LessonData[] = course.lessons.map((l) => {
    const reviewed = reviewedProse(l, override);
    const blocks: Block[] = reviewed
      ? ([{ kind: 'prose', text: reviewed } as Block, ...preservedBlocks(l)])
      : (l.blocks && l.blocks.length ? l.blocks : (l.body && l.body.length ? [{ kind: 'prose', text: l.body } as Block] : []));
    return { id: l.id, title: l.title, summary: l.summary || '', minutes: l.minutes, blocks: copy(blocks) };
  });
  for (const x of extraSections(course, override)) {
    lessons.push({ id: `x-${slug(x.heading)}`, title: x.heading, summary: '', minutes: 0, blocks: [{ kind: 'prose', text: x.paragraphs } as Block] });
  }
  return {
    lessons,
    checks: copy(course.checks || []),
    activity: course.activity ? copy(course.activity) : null,
    furtherLearning: copy(course.furtherLearning || []),
    exam: course.exam ? copy(course.exam) : null,
    minutes: course.minutes,
  };
};

/** Delta over base: a key set in the delta replaces the base's, an absent one leaves it. */
export const mergeStructure = <B extends CourseStructure>(base: B, delta: CourseStructure | null | undefined): B =>
  ({ ...base, ...(delta ? copy(delta) : {}) });

/**
 * Strips what does not say anything, so two versions of the same content compare equal: spaces
 * around text, empty paragraphs and lines, empty optional fields, and false flags. The server
 * does the same on the way in, so what is compared here is what would be stored.
 */
export const tidy = <T,>(v: T): T => {
  const go = (x: unknown, key = ''): unknown => {
    if (typeof x === 'string') return x.trim();
    if (Array.isArray(x)) {
      const items = x.map((i) => go(i));
      // The options of a question are positional, because the answer is an index into them.
      // Dropping an empty one would move every option after it and silently change which one
      // is correct, so they are trimmed and kept as they are.
      if (key === 'options') return items;
      return items.every((i) => typeof i === 'string') ? (items as string[]).filter((i) => i.length > 0) : items;
    }
    if (x && typeof x === 'object') {
      const out: Record<string, unknown> = {};
      for (const [k, val] of Object.entries(x as Record<string, unknown>)) {
        const t = go(val, k);
        if (t === '' || t === false || t === undefined || (Array.isArray(t) && t.length === 0 && k !== 'options')) continue;
        out[k] = t;
      }
      return out;
    }
    return x;
  };
  return go(v) as T;
};

/**
 * What to store: only the parts the author changed from the compiled course. A part that is
 * the same as compiled is left out, so fixing one question does not turn the whole course into
 * stored data that later code changes could no longer reach.
 */
export const diffStructure = (compiled: CourseStructure, edited: CourseStructure): CourseStructure => {
  const out: CourseStructure = {};
  const same = (a: unknown, b: unknown) => JSON.stringify(tidy(a ?? null)) === JSON.stringify(tidy(b ?? null));
  if (!same(compiled.lessons, edited.lessons)) out.lessons = tidy(edited.lessons || []);
  if (!same(compiled.checks, edited.checks)) out.checks = tidy(edited.checks || []);
  if (!same(compiled.activity ?? null, edited.activity ?? null)) out.activity = edited.activity ? tidy(edited.activity) : null;
  if (!same(compiled.furtherLearning, edited.furtherLearning)) out.furtherLearning = tidy(edited.furtherLearning || []);
  if (!same(compiled.exam ?? null, edited.exam ?? null)) out.exam = edited.exam ? { questions: tidy(edited.exam.questions), passPercent: edited.exam.passPercent } : null;
  return out;
};

/** What a structure holds, for a summary line. */
export const structureCounts = (st: CourseStructure | null | undefined) => {
  const lessons = st?.lessons?.length ?? 0;
  let questions = (st?.checks?.length ?? 0) + (st?.exam?.questions.length ?? 0);
  for (const l of st?.lessons || []) for (const b of l.blocks) if ((b as { kind: string }).kind === 'check') questions++;
  return { lessons, questions };
};

/** Paragraphs from a textarea, keeping blank ones while somebody is typing. */
export const parasFromText = (t: string): string[] => t.split(/\n\s*\n/);
export const parasToText = (a: string[] | undefined): string => (a || []).join('\n\n');
export const linesFromText = (t: string): string[] => t.split('\n');
export const linesToText = (a: string[] | undefined): string => (a || []).join('\n');

// Re-exported so the editor does not need to reach into overrides for it.
export { sectionParagraphs };
