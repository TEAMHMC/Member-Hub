// Writes public/academy-courses.json from the catalog at build time.
//
// The volunteer portal needs the course list to offer "schedule a guided cohort" in
// Event Management, and the id it stores has to match the id the Academy looks up.
// Keeping a second hand-maintained copy in the portal already produced one silent
// failure: the portal listed pathway ids while the Academy matches course ids, so a
// scheduled cohort would never have appeared on any course. Generating the manifest
// from the catalog means the two can't drift.

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PATHWAYS } from '../components/Academy/catalog';

const here = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(here, '../public/academy-courses.json');

const courses = (PATHWAYS as any[]).flatMap((p) =>
  (p.courses || []).map((c: any) => ({
    id: c.id,
    title: c.title,
    pathwayId: p.id,
    pathwayTitle: p.title,
    delivery: c.delivery ?? 'self-paced',
  })),
);

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(
  outPath,
  JSON.stringify({ generatedAt: new Date().toISOString(), courses }, null, 2) + '\n',
);

console.log(`[academy-courses] wrote ${courses.length} courses to ${outPath}`);
