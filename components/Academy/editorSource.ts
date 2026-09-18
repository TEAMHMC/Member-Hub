/**
 * What the Curriculum editor opens on.
 *
 * The editor used to open empty for any course with no released correction, so an editor
 * was asked to rewrite a course while looking at blank boxes, with no way to see what a
 * learner currently reads. Everything here answers the same question: what is on the page
 * right now, whether that comes from the catalogue or from a correction already released.
 *
 * The catalogue is the Hub's own compiled content, so this reads it directly rather than
 * asking the server for text the server does not hold.
 */

import { PATHWAYS, type Course, type Lesson, type Pathway } from './catalog';
import type { Block } from './blocks';
import { mergedCourse, reviewedProse, type CourseOverride } from './overrides';

export interface EditableSection {
  heading: string;
  body: string;
  /** False when this is the catalogue's own text, so a release can skip it. */
  corrected: boolean;
}

export interface CoursePageDraft {
  promise: string;
  about: string;
  objectives: string;
  prerequisites: string;
  whoFor: string;
  requirements: { id: string; label: string; detail: string; kind: 'attend' | 'assignment' | 'practicum' | 'evaluation' }[];
}

export const findCourse = (courseId: string): { pathway: Pathway; course: Course } | null => {
  for (const p of PATHWAYS) {
    const course = p.courses.find((c) => c.id === courseId);
    if (course) return { pathway: p, course };
  }
  return null;
};

/** Block kinds that carry prose a reviewer may correct. Checks are never included. */
const PROSE_KINDS = new Set(['prose', 'why', 'case', 'concept', 'example', 'fieldnote', 'tryit', 'activity']);

/** The words a learner reads in one lesson, as paragraphs. */
export const lessonProse = (lesson: Pick<Lesson, 'body' | 'blocks'>): string[] => {
  if (Array.isArray(lesson.body) && lesson.body.length) return lesson.body.slice();
  const out: string[] = [];
  for (const b of (lesson.blocks || []) as Block[]) {
    if (!PROSE_KINDS.has(b.kind)) continue;
    const withTitle = b as { title?: string; text?: string[] };
    if (withTitle.title) out.push(withTitle.title);
    for (const t of withTitle.text || []) out.push(t);
  }
  return out;
};

/**
 * One editable section per lesson, carrying what the learner reads today.
 *
 * A released correction wins, because that is what is on the page. Anything else is the
 * catalogue's own text, marked so a release can leave it alone: sending every lesson back
 * would turn untouched lessons into plain paragraphs and lose their lists, callouts and
 * knowledge checks.
 */
export const editableSections = (course: Pick<Course, 'lessons'>, override: CourseOverride | undefined): EditableSection[] =>
  course.lessons.map((l) => {
    const reviewed = reviewedProse(l, override);
    return {
      heading: l.title,
      body: (reviewed || lessonProse(l)).join('\n\n'),
      corrected: Boolean(reviewed),
    };
  });

/** The page fields as they read now, ready for a form. */
export const coursePageDraft = (course: Course, override: CourseOverride | undefined): CoursePageDraft => {
  const c = mergedCourse(course, override);
  return {
    promise: c.promise || '',
    about: (c.about || []).join('\n\n'),
    objectives: (c.objectives || []).join('\n'),
    prerequisites: c.prerequisites || '',
    whoFor: c.whoFor || '',
    requirements: (c.requirements || []).map((r) => ({
      id: r.id, label: r.label, detail: r.detail || '', kind: r.kind,
    })),
  };
};

/** Whether anything in the form differs from what is on the page now. */
export const pageDraftChanged = (a: CoursePageDraft, b: CoursePageDraft): boolean =>
  JSON.stringify(a) !== JSON.stringify(b);

/**
 * The sections worth releasing: the ones whose words actually changed.
 *
 * Comparison is on the words, ignoring spacing, so reopening the editor and releasing
 * without touching anything releases nothing.
 */
export const changedSections = (draft: EditableSection[], opened: EditableSection[]): { heading: string; body: string }[] => {
  const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
  const before = new Map(opened.map((s) => [norm(s.heading), norm(s.body)]));
  return draft
    .filter((s) => norm(s.heading) && norm(s.body))
    .filter((s) => before.get(norm(s.heading)) !== norm(s.body))
    .map((s) => ({ heading: s.heading.trim(), body: s.body.trim() }));
};

/**
 * What to send as the released lesson text.
 *
 * A release replaces the whole sections array, so sending only what changed in this sitting
 * would quietly drop corrections released earlier. Previous corrections are kept, matched by
 * heading, and the ones edited now replace them.
 */
export const releaseSections = (
  previous: { heading: string; body: string }[],
  changed: { heading: string; body: string }[],
): { heading: string; body: string }[] => {
  const norm = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase();
  const out = previous.map((p) => ({ ...p }));
  for (const c of changed) {
    const i = out.findIndex((p) => norm(p.heading) === norm(c.heading));
    if (i >= 0) out[i] = c;
    else out.push(c);
  }
  return out;
};
