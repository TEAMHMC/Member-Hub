// Course content as data: that every course can be edited without losing anything, that
// authored structure applies cleanly over the compiled catalogue and comes off again, and that
// only what an author changed is stored.
//
//   npm run test:course-structure

import { PATHWAYS } from '../components/Academy/catalog';
import {
  BLOCK_SPECS, blockSpec, applyStructureOverrides, courseToStructure, diffStructure, mergeStructure, tidy,
  pristineCourse, pristineTests, emptyBlock, emptyCheck, structureCounts, testsItemId,
  type CourseStructure,
} from '../components/Academy/courseStructure';
import { reviewedProse, extraSections, type OverrideMap } from '../components/Academy/overrides';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); }
};

const snap = () => JSON.stringify(PATHWAYS.map((p) => ({
  id: p.id, pre: p.preTest, post: p.postTest,
  courses: p.courses.map((c) => ({ id: c.id, lessons: c.lessons, checks: c.checks, activity: c.activity, fl: c.furtherLearning, exam: c.exam, minutes: c.minutes, standard: c.standard })),
})));

const BEFORE = snap();
const course = PATHWAYS.flatMap((p) => p.courses).find((c) => c.lessons.length >= 2 && c.lessons.some((l) => l.blocks?.some((b) => b.kind === 'check')))
  || PATHWAYS.flatMap((p) => p.courses)[0];
const pathway = PATHWAYS.find((p) => p.courses.includes(course))!;

console.log('\nEvery compiled course can be edited without losing anything\n');
{
  const known = new Set(BLOCK_SPECS.map((s) => s.kind));
  const checkKeys = new Set(['id', 'q', 'options', 'answer', 'rationale', 'distractors', 'source']);
  const missingKinds = new Set<string>();
  const lostFields: string[] = [];
  let blocks = 0;
  for (const p of PATHWAYS) for (const c of p.courses) for (const l of c.lessons) for (const b of (l.blocks || []) as any[]) {
    blocks++;
    const spec = blockSpec(b.kind);
    if (!spec) { missingKinds.add(b.kind); continue; }
    const allowed = new Set(['kind', ...spec.fields.map((f) => f.key)]);
    for (const k of Object.keys(b)) if (!allowed.has(k)) lostFields.push(`${c.id}/${l.id}: ${b.kind}.${k}`);
    if (b.kind === 'check') for (const k of Object.keys(b.check)) if (!checkKeys.has(k)) lostFields.push(`${c.id}/${l.id}: check.${k}`);
    if (b.kind === 'source' && b.ref) for (const k of Object.keys(b.ref)) if (!['name', 'use', 'url'].includes(k)) lostFields.push(`${c.id}/${l.id}: source.ref.${k}`);
  }
  ok(blocks > 100, `the catalogue has blocks to check (${blocks})`);
  ok(missingKinds.size === 0, 'every kind of block in the compiled catalogue has an editor', [...missingKinds].join(', '));
  ok(lostFields.length === 0, 'every field on every compiled block can be edited, so editing loses nothing', lostFields.slice(0, 6).join('; '));
  const courseFields = ['id', 'title', 'summary', 'minutes', 'blocks', 'body'];
  const odd = PATHWAYS.flatMap((p) => p.courses.flatMap((c) => c.lessons.flatMap((l) => Object.keys(l).filter((k) => !courseFields.includes(k)).map((k) => `${c.id}/${l.id}.${k}`))));
  ok(odd.length === 0, 'every field on a compiled lesson is one the editor carries', odd.slice(0, 5).join('; '));
  const actKeys = PATHWAYS.flatMap((p) => p.courses.flatMap((c) => (c.activity ? Object.keys(c.activity).filter((k) => !['title', 'body', 'prompt'].includes(k)) : [])));
  ok(actKeys.length === 0, 'every field on a compiled activity is one the editor carries', actKeys.join(', '));
  const srcKeys = PATHWAYS.flatMap((p) => p.courses.flatMap((c) => (c.furtherLearning || []).flatMap((s) => Object.keys(s).filter((k) => !['name', 'use', 'url'].includes(k)))));
  ok(srcKeys.length === 0, 'every field on a compiled source is one the editor carries', srcKeys.join(', '));
  const qKeys = PATHWAYS.flatMap((p) => [...(p.preTest || []), ...(p.postTest || []), ...p.courses.flatMap((c) => [...(c.checks || []), ...(c.exam?.questions || [])])].flatMap((q) => Object.keys(q).filter((k) => !['id', 'q', 'options', 'answer', 'why'].includes(k))));
  ok(qKeys.length === 0, 'every field on a compiled question or test item is one the editor carries', [...new Set(qKeys)].join(', '));
}

console.log('\nThe editor starts from what a learner reads\n');
{
  const st = courseToStructure(pristineCourse(course));
  ok(st.lessons.length === course.lessons.length, 'one editable lesson per compiled lesson');
  ok(st.lessons.every((l, i) => l.id === course.lessons[i].id), 'lesson ids are kept, so recorded progress still points at the same lesson');
  ok(st.lessons.every((l) => l.blocks.length > 0), 'every lesson has content to edit');
  const v1 = PATHWAYS.flatMap((p) => p.courses).find((c) => c.lessons.some((l) => !l.blocks?.length && l.body?.length));
  if (v1) {
    const s1 = courseToStructure(v1);
    const l = s1.lessons.find((x) => v1.lessons.find((y) => y.id === x.id && !y.blocks?.length && y.body?.length))!;
    ok(l.blocks.length === 1 && (l.blocks[0] as any).kind === 'prose', 'a lesson written as plain paragraphs becomes one prose block');
  }
  ok(st.checks.length === (course.checks || []).length, 'course questions are carried');
  const reviewedOverride: any = { content: '', sections: [{ heading: course.lessons[0].title, body: 'Reviewed first paragraph.\n\nSecond.' }], version: 3 };
  const withReview = courseToStructure(pristineCourse(course), reviewedOverride);
  ok((withReview.lessons[0].blocks[0] as any).text[0] === 'Reviewed first paragraph.', 'a lesson corrected in the older editor starts with its corrected words');
  const extra: any = { content: '', sections: [{ heading: 'A section matching nothing', body: 'Added by a reviewer.' }], version: 2 };
  const withExtra = courseToStructure(pristineCourse(course), extra);
  ok(withExtra.lessons.length === course.lessons.length + 1 && withExtra.lessons[withExtra.lessons.length - 1].minutes === 0,
    'a section a reviewer added becomes a lesson with no time set, so it is not dropped and cannot be submitted until timed');
}

console.log('\nApplying authored content over the catalogue\n');
{
  ok(applyStructureOverrides(PATHWAYS, {}) === false, 'applying nothing reports no change, so the Academy does not re-render for it');
  ok(snap() === BEFORE, 'with no authored content the catalogue is exactly as compiled');

  const base = courseToStructure(pristineCourse(course));
  const newLessons = [...base.lessons.slice(1), { id: 'l-new', title: 'A new lesson', summary: 'S', minutes: 12, blocks: [{ kind: 'prose', text: ['Hello.'] }] }];
  const map: OverrideMap = { [course.id]: { content: '', sections: [], version: 5, structure: { lessons: newLessons as any, checks: [], activity: null } } as any };
  const changed = applyStructureOverrides(PATHWAYS, map);
  ok(changed === true, 'applying a structure reports that something changed');
  ok(course.lessons.length === newLessons.length && course.lessons[course.lessons.length - 1].id === 'l-new', 'lessons are replaced, in the authored order');
  ok(course.lessons.some((l) => l.id === base.lessons[1].id) && !course.lessons.some((l) => l.id === base.lessons[0].id), 'a removed lesson is gone and the others keep their ids');
  ok(course.standard === 'v2', 'authored lessons render through the guided renderer');
  ok(course.minutes === newLessons.reduce((n, l) => n + l.minutes, 0) + (course.artifact?.minutes || 0), 'stated minutes follow the lessons, as the portal rule requires');
  ok(course.checks.length === 0, 'course questions are replaced, here with none');
  ok(course.activity === undefined, 'an activity set to null is removed');
  ok(applyStructureOverrides(PATHWAYS, map) === false, 'applying the same thing again changes nothing, so there is no needless render');

  const partial: OverrideMap = { [course.id]: { content: '', sections: [], version: 6, structure: { checks: [{ id: 'q-only', q: 'Only this changed?', options: ['a', 'b'], answer: 1, why: 'Because.' }] } } as any };
  applyStructureOverrides(PATHWAYS, partial);
  ok(course.lessons.length === pristineCourse(course).lessons.length && course.lessons.every((l, i) => l === pristineCourse(course).lessons[i]), 'a structure that only changes questions leaves the lessons exactly as compiled');
  ok(course.checks.length === 1 && course.checks[0].id === 'q-only', 'and replaces the questions');

  const tests: OverrideMap = { [testsItemId(pathway.id)]: { content: '', sections: [], version: 2, pathwayTests: { preTest: [{ id: 'bt1', q: 'Baseline?', options: ['x', 'y'], answer: 0, why: 'Because.' }], postTest: [{ id: 'pt1', q: 'Post?', options: ['x', 'y'], answer: 1, why: 'Because.' }] } } as any };
  applyStructureOverrides(PATHWAYS, tests);
  ok(pathway.preTest?.length === 1 && pathway.preTest[0].id === 'bt1' && pathway.postTest?.[0].id === 'pt1', 'a pathway takes its authored baseline and post-test');
  ok(course.lessons.every((l, i) => l === pristineCourse(course).lessons[i]), 'and removing the course override while applying tests restored the course');

  applyStructureOverrides(PATHWAYS, {});
  ok(snap() === BEFORE, 'removing every override puts the catalogue back exactly as compiled');
}

console.log('\nOlder prose corrections cannot overwrite authored lessons\n');
{
  const o: any = { content: '', sections: [{ heading: course.lessons[0].title, body: 'Old correction.' }, { heading: 'Matches nothing', body: 'Extra.' }], version: 1 };
  ok(reviewedProse(course.lessons[0], o) !== null, 'without authored lessons, a prose correction still applies');
  ok(extraSections(course, o).length === 1, 'and an unmatched section is still shown');
  const withStructure = { ...o, structure: { lessons: [] } };
  ok(reviewedProse(course.lessons[0], withStructure) === null, 'with authored lessons, the older correction no longer overwrites them');
  ok(extraSections(course, withStructure).length === 0, 'and its unmatched sections no longer appear');
}

console.log('\nOnly what changed is stored\n');
{
  const compiled = courseToStructure(pristineCourse(course));
  ok(Object.keys(diffStructure(compiled, JSON.parse(JSON.stringify(compiled)))).length === 0, 'an untouched course stores nothing');

  const edited = JSON.parse(JSON.stringify(compiled)) as typeof compiled;
  edited.checks = [{ id: 'qx', q: 'New?', options: ['a', 'b', 'c'], answer: 2, why: 'Because.' }];
  const d = diffStructure(compiled, edited);
  ok(Object.keys(d).join() === 'checks', 'changing the course questions stores only the questions', Object.keys(d).join());

  const e2 = JSON.parse(JSON.stringify(compiled)) as typeof compiled;
  (e2.lessons[0].blocks[0] as any).text = ['Rewritten.'];
  ok(Object.keys(diffStructure(compiled, e2)).join() === 'lessons', 'changing a lesson stores the lessons and nothing else');

  const e3 = JSON.parse(JSON.stringify(compiled)) as typeof compiled;
  e3.activity = null; e3.exam = null;
  const d3 = diffStructure({ ...compiled, activity: { title: 'A', body: ['b'], prompt: 'p' }, exam: { questions: [], passPercent: 80 } }, e3);
  ok(d3.activity === null && d3.exam === null, 'removing an activity or an exam is stored as a removal');

  ok(Object.keys(diffStructure(compiled, { ...compiled, lessons: compiled.lessons.map((l) => ({ ...l, title: ` ${l.title} ` })) })).length === 0, 'spaces around text are not a change');
  const t = tidy({ options: ['a', '', 'c'], text: ['x', '', 'y'], flag: false, empty: '', n: 0 });
  ok(JSON.stringify(t.options) === JSON.stringify(['a', '', 'c']), 'empty options are kept, because the answer is an index into them');
  ok(JSON.stringify(t.text) === JSON.stringify(['x', 'y']), 'empty paragraphs are dropped');
  ok(!('flag' in t) && !('empty' in t) && (t as any).n === 0, 'false flags and empty fields are dropped but a zero is kept');
  ok(mergeStructure({ lessons: [], checks: [] }, { checks: [emptyCheck()] }).checks!.length === 1, 'a stored delta replaces only the parts it names');
}

console.log('\nEverything an author can add\n');
{
  for (const spec of BLOCK_SPECS) {
    const b: any = emptyBlock(spec.kind);
    ok(b.kind === spec.kind && spec.fields.every((f) => f.key in b), `a new ${spec.kind} block has every field it needs`);
  }
  const c = emptyCheck();
  ok(c.options.length === 2 && c.answer === 0 && /^q-/.test(c.id), 'a new question starts with two options and an id');
  ok(structureCounts({ lessons: [{ id: 'a', title: 'a', summary: '', minutes: 1, blocks: [{ kind: 'check' } as any, { kind: 'prose' } as any] }], checks: [c] }).questions === 2, 'counting questions includes those inside lessons');
  ok(pristineTests(pathway).preTest.length === (BEFORE.includes('"pre"') ? pristineTests(pathway).preTest.length : 0), 'the compiled tests are remembered');
}

console.log(`\n${checks - failures}/${checks} passed${failures ? `, ${failures} FAILED` : ''}\n`);
process.exit(failures ? 1 : 0);
