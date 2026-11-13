// Writes public/academy-courses.json from the catalog at build time.
//
// The volunteer portal needs the course list to offer "schedule a guided cohort" in
// Event Management, and the id it stores has to match the id the Academy looks up.
// Keeping a second hand-maintained copy in the portal already produced one silent
// failure: the portal listed pathway ids while the Academy matches course ids, so a
// scheduled cohort would never have appeared on any course. Generating the manifest
// from the catalog means the two can't drift.

import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
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

/*
 * A pathway's baseline and post-test, listed as items the Curriculum editor can open.
 *
 * They belong to the pathway, not to any one of its courses, so each pathway gets one item
 * with the id tests:<pathwayId>. Every pathway is listed, including one with no tests yet,
 * because a course being written needs somewhere to write them. Kept apart from `courses` so
 * the portal's cohort scheduler, which reads that list, is never offered something that is not
 * a course.
 */
const pathwayTests = (PATHWAYS as any[]).map((p) => ({
  id: `tests:${p.id}`,
  pathwayId: p.id,
  title: `Baseline and post-test: ${p.title}`,
}));

mkdirSync(dirname(outPath), { recursive: true });

/*
 * The timestamp is only refreshed when the course list actually changed.
 *
 * Stamping every run meant this file produced a diff on every single build even
 * when nothing about the catalogue had moved. That noise is why real drift went
 * unnoticed: the committed copy sat ten courses behind the source and nobody
 * could see it among the timestamp churn. CI regenerates before every deploy so
 * the served file was always correct, but the repo told a different story and
 * cost a real investigation.
 *
 * Comparing courses only, never the stamp, so a diff here now means the
 * curriculum changed and nothing else does.
 */
const previous = existsSync(outPath)
  ? (() => { try { return JSON.parse(readFileSync(outPath, 'utf8')); } catch { return null; } })()
  : null;

const unchanged =
  previous
  && JSON.stringify(previous.courses) === JSON.stringify(courses)
  && JSON.stringify(previous.pathwayTests) === JSON.stringify(pathwayTests);

if (unchanged) {
  console.log(`[academy-courses] ${courses.length} courses unchanged; left as is`);
} else {
  writeFileSync(
    outPath,
    JSON.stringify({ generatedAt: new Date().toISOString(), courses, pathwayTests }, null, 2) + '\n',
  );
  console.log(`[academy-courses] wrote ${courses.length} courses to ${outPath}`);
}
