// What the Curriculum editor opens on, and what a release sends.
//
// The editor opened on empty boxes for any course with no released correction, so an editor
// was asked to rewrite a course without being able to see what a learner reads. Every
// assertion here is a way that could come back: an editor shown nothing, an editor shown
// stale text, a release that flattens lessons nobody touched, or a release that drops a
// correction published earlier.
//
//   npm run test:course-editor

import {
  findCourse, lessonProse, editableSections, coursePageDraft,
  changedSections, releaseSections, pageDraftChanged,
} from '../components/Academy/editorSource';
import { mergedCourse, type CourseOverride } from '../components/Academy/overrides';
import { PATHWAYS } from '../components/Academy/catalog';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) {
    failures++;
    console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`);
  }
};

console.log('\nCourse editor source\n');

// ── The editor opens on what is actually on the page ──────────────────────
const withLessons = PATHWAYS.flatMap((p) => p.courses).find((c) => c.lessons.length > 0);
ok(Boolean(withLessons), 'the catalogue has a course with lessons to open');

if (withLessons) {
  const found = findCourse(withLessons.id);
  ok(found?.course.id === withLessons.id, 'a course is found by id alone, without knowing its pathway');

  const opened = editableSections(withLessons, undefined);
  ok(opened.length === withLessons.lessons.length, 'one editable section per lesson');
  ok(opened.every((s) => s.heading.trim().length > 0), 'every section opens with its lesson title');
  ok(opened.every((s) => s.body.trim().length > 0), 'no section opens empty, which was the bug');
  ok(opened.every((s) => !s.corrected), 'nothing is marked corrected when nothing has been released');

  // A released correction is what the learner reads, so it is what the editor opens on.
  const override: CourseOverride = {
    content: '',
    sections: [{ heading: withLessons.lessons[0].title, body: 'Corrected wording.' }],
    version: 3,
  };
  const withCorrection = editableSections(withLessons, override);
  ok(withCorrection[0].body === 'Corrected wording.', 'a released correction is what opens, not the catalogue');
  ok(withCorrection[0].corrected === true, 'the corrected lesson is marked as corrected');
  ok(withCorrection[1]?.corrected === false, 'an untouched lesson is still marked uncorrected');

  // ── A release sends only what changed ───────────────────────────────────
  const edited = withCorrection.map((s, i) => (i === 1 ? { ...s, body: 'Newly corrected.' } : s));
  const changed = changedSections(edited, withCorrection);
  ok(changed.length === 1 && changed[0].body === 'Newly corrected.',
    'only the edited lesson is released, so untouched lessons keep their blocks');
  ok(changedSections(withCorrection, withCorrection).length === 0,
    'opening and releasing without typing releases nothing');
  ok(changedSections(
    withCorrection.map((s, i) => (i === 0 ? { ...s, body: `  ${s.body}  ` } : s)), withCorrection).length === 0,
    'spacing alone is not a change');

  // ── Earlier corrections survive a later release ─────────────────────────
  const merged = releaseSections(override.sections, changed);
  ok(merged.length === 2, 'a correction released earlier is kept when a second lesson is corrected');
  ok(merged[0].body === 'Corrected wording.', 'the earlier correction is unchanged');
  const replaced = releaseSections(override.sections, [{ heading: withLessons.lessons[0].title, body: 'Newer.' }]);
  ok(replaced.length === 1 && replaced[0].body === 'Newer.', 'correcting the same lesson twice replaces it');
}

// ── Prose extraction keeps the words and drops the assessment ─────────────
const proseLesson = {
  blocks: [
    { kind: 'prose', text: ['First paragraph.', 'Second paragraph.'] },
    { kind: 'check', check: { id: 'k1', q: 'Which?', options: ['a', 'b'], answer: 0, why: 'because' } },
    { kind: 'concept', title: 'A concept', text: ['Explained.'] },
  ],
} as any;
const prose = lessonProse(proseLesson);
ok(prose.includes('First paragraph.') && prose.includes('Explained.'), 'prose and concept text are editable');
ok(!prose.some((p) => p.includes('Which?')), 'a knowledge check never appears in the prose editor');
ok(lessonProse({ body: ['v1 paragraph.'] } as any)[0] === 'v1 paragraph.', 'v1 courses read from body');

// ── The page fields ───────────────────────────────────────────────────────
const anyCourse = PATHWAYS.flatMap((p) => p.courses)[0];
const draft = coursePageDraft(anyCourse, undefined);
ok(draft.promise === anyCourse.promise, 'the promise opens from the catalogue');
ok(draft.about.split(/\n\s*\n/).length === anyCourse.about.length, 'About opens as paragraphs separated by a blank line');
ok(draft.objectives.split('\n').length === anyCourse.objectives.length, 'objectives open one per line');

const pageOverride: CourseOverride = {
  content: '', sections: [], version: 1,
  page: { whoFor: 'Rewritten audience.', objectives: ['Only objective.'] },
};
const mergedForDraft = coursePageDraft(anyCourse, pageOverride);
ok(mergedForDraft.whoFor === 'Rewritten audience.', 'a released page correction is what opens');
ok(mergedForDraft.objectives === 'Only objective.', 'released objectives replace the catalogue list');
ok(mergedForDraft.promise === anyCourse.promise, 'a field nobody corrected still opens from the catalogue');

const mergedCourseForRender = mergedCourse(anyCourse, pageOverride);
ok(mergedCourseForRender.whoFor === 'Rewritten audience.', 'the course page renders the correction');
ok(mergedCourseForRender.about === anyCourse.about, 'an untouched field renders the catalogue');
ok(mergedCourse(anyCourse, undefined) === anyCourse, 'no override means the catalogue object, untouched');
ok(mergedCourse(anyCourse, { content: '', sections: [], version: 1, page: { whoFor: '   ' } }).whoFor === anyCourse.whoFor,
  'a cleared field falls back to the catalogue rather than rendering a blank heading');

ok(pageDraftChanged(draft, { ...draft, whoFor: 'Changed.' }), 'an edit is detected');
ok(!pageDraftChanged(draft, { ...draft }), 'no edit is not detected as one');

console.log(`\n${checks - failures}/${checks} passed\n`);
if (failures) process.exit(1);
