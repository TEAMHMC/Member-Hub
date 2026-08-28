// Published corrections to Academy course content, made in the portal's review queue.
//
// A Hub course is a TypeScript catalogue entry compiled at build time, so a clinician
// correcting a passage could not reach members without a deployment. The portal already
// holds a review pipeline keyed by module id, `module_content_overrides`, and Hub course
// ids are keyed the same way, so a reviewed correction is stored against the course id
// and read back here at runtime.
//
// The shape the portal publishes is flat: a course id maps to a list of
// `{ heading, body }` sections. The Hub's own content is a list of lessons made of typed
// blocks. Reconciling those two is the whole job of this file, and there are three rules
// it follows.
//
//   1. A section replaces the PROSE of the lesson whose title it matches. It does not
//      replace the lesson wholesale, because a lesson's knowledge checks are assessment
//      items with ids, rationales and a distribution the curriculum gate gets to enforce.
//      A prose correction must not be able to silently delete an assessment.
//
//   2. A section matching no lesson is rendered as an addition on the course page rather
//      than dropped. A reviewer who publishes a new section has decided a member should
//      read it; discarding it because the heading did not match a lesson title would make
//      the review queue quietly lossy.
//
//   3. Nothing here is governance metadata. Version numbers and reviewer names are audit
//      records and stay in the portal. A member reads the corrected words, not the
//      paperwork around them.
//
// Matching is on the normalised heading, so punctuation and capitalisation drift between
// the reviewer's editor and the catalogue title does not lose a correction.

import type { Course, Lesson } from './catalog';
import type { Block } from './blocks';

export interface CourseOverride {
  content: string;
  sections: { heading: string; body: string }[];
  version: number;
}

/** Course id to its published override. Empty when the endpoint is unreachable. */
export type OverrideMap = Record<string, CourseOverride>;

const norm = (s: string): string =>
  String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/**
 * Splits a reviewed section body into paragraphs.
 *
 * Reviewers type into a textarea, so a paragraph break arrives as a blank line. A single
 * newline is a wrap, not a new paragraph, and treating it as one turned a corrected
 * sentence into a column of fragments.
 */
export const sectionParagraphs = (body: string): string[] =>
  String(body || '')
    .split(/\n\s*\n+/)
    .map((s) => s.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean);

/**
 * The reviewed prose for one lesson, or null when the review did not touch it.
 *
 * Null and an empty array are different answers and the caller depends on the difference:
 * null means render the lesson as written, and the empty array would mean render nothing.
 * A section published with an empty body is treated as untouched for that reason.
 */
export const reviewedProse = (
  lesson: Pick<Lesson, 'title'>,
  override: CourseOverride | undefined,
): string[] | null => {
  if (!override || !Array.isArray(override.sections)) return null;
  const want = norm(lesson.title);
  if (!want) return null;
  const hit = override.sections.find((s) => norm(s.heading) === want);
  if (!hit) return null;
  const paras = sectionParagraphs(hit.body);
  return paras.length ? paras : null;
};

/**
 * Blocks from the original lesson that must survive a prose correction.
 *
 * Knowledge checks are the assessment record. A reviewer correcting the explanation above
 * a check has not decided the check should disappear, and the curriculum gate counts these
 * items, so dropping them at render time would put the running Academy out of step with
 * what the gate verified.
 */
export const preservedBlocks = (lesson: Pick<Lesson, 'blocks'>): Block[] =>
  (lesson.blocks || []).filter((b) => b.kind === 'check');

/**
 * Sections a reviewer published that match no lesson in the course.
 *
 * Rendered on the course page as reviewed additions. Deliberately not turned into extra
 * lessons: lesson count drives the progress bar and the course completion gate, and a
 * published correction must not be able to move a member's completion goalposts.
 */
export const extraSections = (
  course: Pick<Course, 'lessons'>,
  override: CourseOverride | undefined,
): { heading: string; paragraphs: string[] }[] => {
  if (!override || !Array.isArray(override.sections)) return [];
  const titles = new Set(course.lessons.map((l) => norm(l.title)));
  return override.sections
    .filter((s) => !titles.has(norm(s.heading)))
    .map((s) => ({ heading: String(s.heading || '').trim(), paragraphs: sectionParagraphs(s.body) }))
    .filter((s) => s.heading && s.paragraphs.length);
};

/** Whether any part of this course is currently reading from a published correction. */
export const hasReviewedContent = (
  course: Pick<Course, 'lessons'>,
  override: CourseOverride | undefined,
): boolean => {
  if (!override) return false;
  if (extraSections(course, override).length) return true;
  return course.lessons.some((l) => reviewedProse(l, override) !== null);
};
