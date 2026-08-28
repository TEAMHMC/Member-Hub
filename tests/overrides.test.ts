// Published-correction rendering rules.
//
// The portal's review queue publishes a flat list of {heading, body} sections against a
// course id. The Hub's content is lessons made of typed blocks. Every assertion here is a
// way that reconciliation could lose something a reviewer published, or lose something the
// catalogue already guaranteed.
//
//   npm run test:overrides

import {
  reviewedProse,
  preservedBlocks,
  extraSections,
  hasReviewedContent,
  sectionParagraphs,
  type CourseOverride,
} from '../components/Academy/overrides';
import type { Block } from '../components/Academy/blocks';
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

console.log('\nPublished corrections\n');

const override = (sections: { heading: string; body: string }[]): CourseOverride =>
  ({ content: '', sections, version: 3 });

const check: Block = {
  kind: 'check',
  check: { id: 'x1', q: 'Q', options: ['a', 'b'], answer: 0, rationale: 'because' },
};
const prose: Block = { kind: 'prose', text: ['original text'] };

// ── Matching ─────────────────────────────────────────────────────────────
console.log('Matching a section to a module');

ok(
  reviewedProse({ title: 'Field Safety' }, override([{ heading: 'Field Safety', body: 'new' }]))?.[0] === 'new',
  'an exact heading replaces that module\'s prose',
);
ok(
  reviewedProse({ title: 'Field Safety + PPE' }, override([{ heading: 'field safety  PPE', body: 'new' }]))?.[0] === 'new',
  'punctuation and case drift between editor and catalogue still matches',
);
ok(
  reviewedProse({ title: 'Field Safety' }, override([{ heading: 'Something Else', body: 'new' }])) === null,
  'a heading matching no module leaves that module alone',
);
ok(
  reviewedProse({ title: 'Field Safety' }, undefined) === null,
  'no override at all leaves the module alone',
);
// Null and [] are different answers and the renderer depends on the difference: null means
// render the catalogue, [] would mean render nothing at all.
ok(
  reviewedProse({ title: 'Field Safety' }, override([{ heading: 'Field Safety', body: '   ' }])) === null,
  'a section published empty is treated as untouched, never as a blank module',
);
ok(
  reviewedProse({ title: '' }, override([{ heading: '', body: 'new' }])) === null,
  'an empty title cannot be matched by an empty heading',
);

// ── Paragraphs ───────────────────────────────────────────────────────────
console.log('Paragraph handling');

ok(
  sectionParagraphs('one\ntwo').length === 1,
  'a single newline is a wrap, not a paragraph break',
  'reviewers type into a textarea; treating wraps as breaks turned a sentence into fragments',
);
ok(
  sectionParagraphs('one\n\ntwo').length === 2,
  'a blank line is a paragraph break',
);
ok(
  sectionParagraphs('one\ntwo')[0] === 'one two',
  'a wrapped line is rejoined with a space, not concatenated',
);
ok(sectionParagraphs('').length === 0, 'an empty body yields no paragraphs');

// ── Assessments survive a prose correction ───────────────────────────────
console.log('Assessment integrity');

ok(
  preservedBlocks({ blocks: [prose, check, prose] }).length === 1,
  'a corrected module keeps its knowledge checks',
  'a reviewer rewriting an explanation has not decided the assessment should disappear',
);
ok(
  preservedBlocks({ blocks: [prose, check] }).every((b) => b.kind === 'check'),
  'nothing but the checks is carried over the correction',
);
ok(preservedBlocks({ blocks: undefined }).length === 0, 'a module with no blocks preserves nothing');

// ── Nothing published is silently dropped ────────────────────────────────
console.log('Unmatched sections');

const course = { lessons: [{ id: 'l1', title: 'Field Safety', summary: '', minutes: 5 }] };
const extra = extraSections(course, override([
  { heading: 'Field Safety', body: 'corrected' },
  { heading: 'A New Section', body: 'added by the reviewer' },
]));
ok(extra.length === 1 && extra[0].heading === 'A New Section',
  'a section matching no module is surfaced, not discarded');
ok(
  extraSections(course, override([{ heading: 'Nameless', body: '' }])).length === 0,
  'an addition with no body is not rendered as an empty card',
);
ok(
  extraSections(course, override([{ heading: '', body: 'orphan text' }])).length === 0,
  'an addition with no heading is not rendered headless',
);

ok(hasReviewedContent(course, override([{ heading: 'Field Safety', body: 'x' }])), 'a matched correction reads as reviewed');
ok(hasReviewedContent(course, override([{ heading: 'New', body: 'x' }])), 'an addition reads as reviewed');
ok(!hasReviewedContent(course, undefined), 'no override does not read as reviewed');
ok(!hasReviewedContent(course, override([])), 'an override with no sections does not read as reviewed');

// ── Against the real catalogue ───────────────────────────────────────────
// A correction is addressed to a course id, so two courses sharing an id would send one
// reviewer's work to the wrong material. The curriculum gate checks ids are unique inside
// a pathway; corrections are keyed globally, so they have to be unique across all of them.
console.log('Course ids are globally addressable');
const allIds = PATHWAYS.flatMap((p) => p.courses.map((c) => c.id));
const dupes = allIds.filter((id, i) => allIds.indexOf(id) !== i);
ok(dupes.length === 0, 'course ids are unique across every pathway, not just within one', dupes.join(', '));

// A module title is what a reviewer's heading matches on, so duplicate titles inside one
// course make a correction ambiguous: it would land on whichever module came first.
console.log('Module titles are addressable within a course');
for (const p of PATHWAYS) {
  for (const c of p.courses) {
    const titles = c.lessons.map((l) => l.title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim());
    const dup = titles.filter((t, i) => titles.indexOf(t) !== i);
    ok(dup.length === 0, `${c.title}: module titles are distinct, so a correction is unambiguous`, dup.join(', '));
  }
}

console.log(`\n${checks - failures}/${checks} passed${failures ? `, ${failures} FAILED` : ''}\n`);
process.exit(failures ? 1 : 0);
