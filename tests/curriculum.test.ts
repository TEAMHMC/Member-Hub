// Curriculum integrity checks.
//
// These encode the rules from the Written Guided Curriculum Standard and the
// Credential, Transcript + Equivalency Rules so that a content edit cannot
// quietly violate them. Every assertion here corresponds to a defect that was
// actually found by hand at least once.
//
//   npm run test:curriculum

import { PATHWAYS, PASS_THRESHOLD } from '../components/Academy/catalog';
import type { Course, Lesson, Check } from '../components/Academy/catalog';
import type { Block } from '../components/Academy/blocks';
import { CREDENTIALS } from '../components/Academy/credentials';

let failures = 0;
let checks = 0;

const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) {
    failures++;
    console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`);
  }
};

// Words a learner actually reads. Anything not shown on screen does not count
// toward the time estimate.
const blockWords = (b: Block): string[] => {
  const out: string[] = [];
  const anyB = b as any;
  if (anyB.text) out.push(...(Array.isArray(anyB.text) ? anyB.text : [anyB.text]));
  if (anyB.title) out.push(anyB.title);
  if (b.kind === 'reflect') out.push(...b.prompts);
  if (b.kind === 'check') out.push(b.check.q, ...b.check.options, b.check.rationale, b.check.distractors || '');
  if (b.kind === 'steps') out.push(...b.items.map((i) => `${i.label} ${i.text}`));
  if (b.kind === 'myths') out.push(...b.items.map((i) => `${i.myth} ${i.reality}`));
  if (b.kind === 'vocab') out.push(...b.items.map((i) => `${i.term} ${i.plain}`));
  if (b.kind === 'takeaways' || b.kind === 'list') out.push(...b.items);
  return out;
};

const countWords = (l: Lesson): number => {
  const src = l.blocks?.length ? l.blocks.flatMap(blockWords) : l.body || [];
  return src.join(' ').split(/\s+/).filter(Boolean).length;
};

console.log('\nCurriculum integrity\n');

// ── Time honesty ─────────────────────────────────────────────────────────
// The core principle of the standard: stated duration must correspond to real
// learner effort. A course claiming 70 minutes of 90-second lessons is a lie
// told to a grant evaluator.
console.log('Time claims');
const debt: string[] = [];
for (const p of PATHWAYS) {
  for (const c of p.courses) {
    const lessonMin = c.lessons.reduce((n, l) => n + l.minutes, 0);
    const artifactMin = c.artifact?.minutes || 0;
    const words = c.lessons.reduce((n, l) => n + countWords(l), 0);
    if (!c.lessons.length) continue;

    // Live and blended courses carry their time in scheduled sessions, not text.
    const textBased = !c.delivery || c.delivery === 'self-paced';
    if (!textBased) continue;

    const pace = words / Math.max(lessonMin, 1);

    // Courses not yet converted to the guided standard are known debt, tracked
    // with real numbers rather than silently excused or left to block the gate.
    if (c.standard !== 'v2') {
      debt.push(`${c.title}: ${words}w / ${lessonMin}min = ${Math.round(pace)} wpm`);
      continue;
    }

    ok(
      lessonMin + artifactMin === c.minutes,
      `${c.title}: stated minutes must equal lessons plus applied activity`,
      `lessons ${lessonMin} + artifact ${artifactMin} = ${lessonMin + artifactMin}, course claims ${c.minutes}`,
    );

    // 60-100 wpm is reading plus knowledge checks plus reflection. Above 130 the
    // lesson is too thin for its claim; below 40 the minutes are padded.
    ok(
      pace >= 40 && pace <= 130,
      `${c.title}: lesson pace must be defensible`,
      `${words} words over ${lessonMin} min = ${Math.round(pace)} wpm (want 40-130)`,
    );
  }
}
if (debt.length) {
  console.log(`  ${debt.length} course(s) awaiting v2 conversion (time claims not yet backed by content):`);
  debt.forEach((d) => console.log(`     - ${d}`));
}

// ── Knowledge checks ─────────────────────────────────────────────────────
console.log('Assessment items');
const allChecks: { c: Check; where: string }[] = [];
for (const p of PATHWAYS) {
  for (const c of p.courses) {
    c.checks.forEach((q) => allChecks.push({ c: q, where: `${c.title} (course check)` }));
    c.lessons.forEach((l) =>
      (l.blocks || []).forEach((b) => {
        if (b.kind === 'check') {
          allChecks.push({
            c: { id: b.check.id, q: b.check.q, options: b.check.options, answer: b.check.answer, why: b.check.rationale },
            where: `${c.title} / ${l.title}`,
          });
        }
      }),
    );
  }
}
for (const { c, where } of allChecks) {
  ok(c.answer >= 0 && c.answer < c.options.length, `${where}: answer index in range`, `${c.id} answer=${c.answer} of ${c.options.length}`);
  ok(!!c.why && c.why.trim().length > 20, `${where}: item has a real rationale`, c.id);
  ok(new Set(c.options).size === c.options.length, `${where}: no duplicate options`, c.id);
}
const ids = allChecks.map((a) => a.c.id);
ok(new Set(ids).size === ids.length, 'assessment item ids are unique across the catalog',
  ids.filter((id, i) => ids.indexOf(id) !== i).join(', '));

// ── Pre/post must be parallel forms, never the same test ─────────────────
// If the baseline is the post-test, a learner can earn a credential without
// opening a single course.
console.log('Pre/post integrity');
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
for (const p of PATHWAYS) {
  const pre = p.preTest || [];
  const post = p.postTest || [];
  if (!pre.length || !post.length) continue;

  const preQs = new Set(pre.map((q) => norm(q.q)));
  const shared = post.filter((q) => preQs.has(norm(q.q)));
  ok(shared.length === 0, `${p.title}: baseline and post-test share no questions`, shared.map((q) => q.id).join(', '));
  ok(pre.length === post.length, `${p.title}: parallel forms are the same length`, `pre ${pre.length}, post ${post.length}`);

  // An answer key that sits in the same position every time is guessable.
  for (const [name, form] of [['baseline', pre], ['post-test', post]] as const) {
    const counts = [0, 0, 0, 0];
    form.forEach((q) => { counts[q.answer] = (counts[q.answer] || 0) + 1; });
    ok(Math.max(...counts) <= Math.ceil(form.length / 2), `${p.title} ${name}: correct answers distributed across positions`,
      `positions ${counts.join('/')} over ${form.length} items`);
  }
}
ok(PASS_THRESHOLD >= 70, 'pass threshold is meaningful', String(PASS_THRESHOLD));

// ── Credential naming rules ──────────────────────────────────────────────
// HMC may not imply licensure it does not issue.
console.log('Credential claims');
const FORBIDDEN = /\b(certified|licensed|board certified|state certified|accredited)\b/i;
for (const cred of CREDENTIALS) {
  ok(!FORBIDDEN.test(cred.title), 'credential title avoids reserved terms', cred.title);
  ok(cred.doesNotAuthorize.length > 0, 'credential states what it does not authorize', cred.title);
  ok(cred.evidence.length > 0, 'credential lists its evidence gates', cred.title);
}

// ── Structure ────────────────────────────────────────────────────────────
console.log('Structure');
for (const p of PATHWAYS) {
  ok(!!p.title && !!p.id, 'pathway has id and title');
  const cids = p.courses.map((c) => c.id);
  ok(new Set(cids).size === cids.length, `${p.title}: course ids unique`);
  for (const c of p.courses) {
    ok(c.lessons.every((l) => (l.blocks?.length || 0) > 0 || (l.body?.length || 0) > 0),
      `${c.title}: every lesson has renderable content`,
      c.lessons.filter((l) => !l.blocks?.length && !l.body?.length).map((l) => l.id).join(', '));
    if (c.artifact) {
      ok(c.artifact.fields.length > 0, `${c.title}: artifact has fields`);
      ok(!!c.artifact.purpose, `${c.title}: artifact explains why it is kept`);
    }
    if (c.standard === 'v2' && (!c.delivery || c.delivery === 'self-paced')) {
      ok((c.furtherLearning?.length || 0) > 0, `${c.title}: v2 course cites its sources`);
    }
  }
}

console.log(`\n${checks - failures}/${checks} passed${failures ? `, ${failures} FAILED` : ''}\n`);
process.exit(failures ? 1 : 0);
