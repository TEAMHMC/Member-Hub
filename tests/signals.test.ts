// Every signal the Hub emits must be one the portal accepts.
//
// The Academy emitted seven signal types and the portal's context endpoint accepted none
// of them. Each call came back 400 invalid_type, and the client swallows that failure on
// purpose so a dropped signal never interrupts a learner. Nothing appeared in a log and
// nothing appeared on screen, so the Hub's largest surface, twenty-eight courses across
// seven pathways, contributed no signal at all to the next-action engine. A member could
// finish a whole pathway and still be shown the card written for somebody who had never
// done anything.
//
// This reads the signal names out of the Hub's own source and the allowlist out of the
// portal's, and fails if the two ever disagree again. It lives in this repository
// because this is the one that emits them.
//
//   npm run test:signals

import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, '..');

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); }
};

console.log('\nSignals\n');

/** Every ctxApi.event / onSignal type literal emitted anywhere in the Hub. */
const emittedTypes = (): string[] => {
  const files = [
    'components/Academy/Academy.tsx',
    'components/Academy/TrainingRegistration.tsx',
    'components/Dashboards/ClientDashboard.tsx',
    'components/Layout/Navbar.tsx',
    'components/Navigator/SunnyNavigator.tsx',
  ];
  const found = new Set<string>();
  for (const rel of files) {
    const path = join(repoRoot, rel);
    if (!existsSync(path)) continue;
    const src = readFileSync(path, 'utf8');
    // onSignal?.('x', ...) / onSignal('x', ...) / ctxApi.event('x', ...)
    for (const m of src.matchAll(/(?:onSignal\??\.?\(|ctxApi\.event\()\s*'([a-z0-9_]+)'/g)) {
      found.add(m[1]);
    }
    // The ternary form: kind === 'pre' ? 'academy_pretest' : 'academy_posttest'
    for (const m of src.matchAll(/\?\s*'(academy_[a-z_]+)'\s*:\s*'(academy_[a-z_]+)'/g)) {
      found.add(m[1]); found.add(m[2]);
    }
  }
  return [...found].sort();
};

/** The portal's allowlist, read from its source when the sibling checkout is present. */
const allowlist = (): string[] | null => {
  const portal = join(repoRoot, '..', 'hmc-volunteer-portal', 'src', 'index.ts');
  if (!existsSync(portal)) return null;
  const src = readFileSync(portal, 'utf8');
  const block = src.match(/const allowedTypes = \[([\s\S]*?)\];/g);
  if (!block) return null;
  // The context-event allowlist is the one containing tool_search. The other
  // allowedTypes in that file is a list of upload MIME types.
  const target = block.find((b) => b.includes("'tool_search'"));
  if (!target) return null;
  return [...target.matchAll(/'([a-z0-9_]+)'/g)].map((m) => m[1]).sort();
};

const emitted = emittedTypes();

ok(emitted.length >= 10, 'the scan finds the signals the Hub emits', `found ${emitted.length}: ${emitted.join(', ')}`);
ok(emitted.includes('academy_lesson_complete'), 'academy_lesson_complete is emitted');
ok(emitted.includes('tool_search'), 'tool_search is emitted');

const allowed = allowlist();
if (allowed === null) {
  console.log('  SKIP  portal allowlist not readable (sibling checkout absent)');
} else {
  ok(allowed.includes('tool_search'), 'the allowlist was parsed, not an unrelated array', allowed.join(', '));
  const rejected = emitted.filter((t) => !allowed.includes(t));
  ok(
    rejected.length === 0,
    'every signal the Hub emits is accepted by the portal',
    rejected.length ? `the portal would answer 400 invalid_type for: ${rejected.join(', ')}` : '',
  );
}

console.log(`\n${checks - failures}/${checks} passed\n`);
if (failures) process.exit(1);
