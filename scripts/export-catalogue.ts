// Exports the compiled Academy catalogue as data.
//
// The Academy's courses are TypeScript compiled into this app, which is why adding one has
// always needed a deployment. They are moving to an authoritative course model in the
// backend, and this is the export half of that migration: it emits every course exactly as
// it stands, with nothing converted, summarised or reworded.
//
// It is also how validator parity is proven. The same catalogue that the build-time gate
// checks is emitted here and checked by the shared validator, and the two have to return
// the same verdict before any content moves.
//
//   npx tsx scripts/export-catalogue.ts > academy-catalogue.json

import { PATHWAYS, PASS_THRESHOLD } from '../components/Academy/catalog';
import { CREDENTIALS } from '../components/Academy/credentials';

// Structured clone through JSON, so what is emitted is exactly what is serialisable and
// nothing carries a live reference into the export.
const plain = <T>(v: T): T => JSON.parse(JSON.stringify(v ?? null));

const catalogue = {
  exportedAt: new Date().toISOString(),
  passThreshold: PASS_THRESHOLD,
  credentials: plain(CREDENTIALS),
  pathways: (PATHWAYS as any[]).map((p) => ({
    id: p.id,
    title: p.title,
    level: p.level ?? null,
    purpose: p.purpose ?? null,
    preTest: plain(p.preTest ?? []),
    postTest: plain(p.postTest ?? []),
    courses: (p.courses || []).map((c: any) => ({
      id: c.id,
      title: c.title,
      minutes: c.minutes ?? null,
      delivery: c.delivery ?? null,
      standard: c.standard ?? null,
      summary: c.summary ?? null,
      lessons: plain(c.lessons ?? []),
      checks: plain(c.checks ?? []),
      artifact: plain(c.artifact ?? null),
      activity: plain(c.activity ?? null),
      furtherLearning: plain(c.furtherLearning ?? []),
      prerequisites: plain(c.prerequisites ?? []),
      // Recorded on export rather than inferred later. Every course here is an ordinary
      // Academy course; CHW instructional courses live in the portal's own programme
      // definition and are deliberately not part of this catalogue.
      designation: 'academy',
      pathwayId: p.id,
    })),
  })),
};

process.stdout.write(JSON.stringify(catalogue, null, 1));
