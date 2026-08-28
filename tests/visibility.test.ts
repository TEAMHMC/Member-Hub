// What a member is allowed to see and enroll in, and why the default is not "open".
//
// Availability is derived from whether a pathway has content, which is correct and was
// hiding a live exposure: three pathways carried no staff visibility decision at all, so
// they defaulted to open and were held back only by being empty. Writing the first course
// into one of them would have put a partly written curriculum in front of members,
// enrollable, with nobody having chosen that.
//
// These assertions encode the rule that replaced it. They read the source of Academy.tsx
// rather than rendering it, because the decision is a default in one function and a default
// is exactly the kind of thing that gets "simplified" back.
//
//   npm run test:visibility

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { PATHWAYS, pathwayHasContent } from '../components/Academy/catalog';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); }
};

console.log('\nPathway visibility\n');

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(here, '../components/Academy/Academy.tsx'), 'utf8');
const visFn = src.slice(src.indexOf('const vis = (id: string)'), src.indexOf('const isAvailable'));

console.log('The default');
ok(visFn.includes("status === 'published'"),
  'the default state depends on whether the catalogue marks the pathway published',
  'without this, a pathway nobody has decided about is open the moment it has content');
ok(!/^\s*const vis = \(id: string\): Visibility => visibility\[id\] \|\| \{ state: 'open' \}/m.test(src),
  'the unconditional open default is gone');
ok(visFn.includes("'upcoming'"),
  'an in-development pathway with no staff decision shows as upcoming, not hidden and not open',
  'hidden would conceal real work; open would enroll people into an unfinished curriculum');

console.log('Every in-development pathway carrying content');
// The set this rule exists for. Each of these is readable, incomplete, and must not be
// enrollable on a default.
for (const p of PATHWAYS) {
  if (p.status === 'published') continue;
  if (!pathwayHasContent(p)) continue;
  ok(p.version.includes('partial') || p.version.includes('draft') || p.version.includes('migration'),
    `${p.title}: an incomplete pathway says so in its version`,
    `version is "${p.version}"`);
  ok((p.plannedCourses?.length || 0) > 0 || p.courses.length >= 8,
    `${p.title}: either it lists what is still to be written, or it is complete enough not to need to`,
    `${p.courses.length} written, ${p.plannedCourses?.length || 0} planned`);
}

console.log('A planned course is never also a written one');
// A pathway that lists a title in plannedCourses and also ships it as a course is
// advertising the same work twice, and the catalogue then reads as though more is
// outstanding than there is.
for (const p of PATHWAYS) {
  const written = new Set(p.courses.map((c) => c.title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()));
  const overlap = (p.plannedCourses || []).filter((t) =>
    written.has(t.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()));
  ok(overlap.length === 0, `${p.title}: no course appears as both written and planned`, overlap.join(', '));
}

console.log(`\n${checks - failures}/${checks} passed${failures ? `, ${failures} FAILED` : ''}\n`);
process.exit(failures ? 1 : 0);
