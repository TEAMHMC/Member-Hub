// Every HMC tool is linked on its own domain.
//
// The Hub sent members to healthmatters.clinic/resources/checkyourself, a Webflow page that
// wraps the tool, while the tool has its own domain. The same mistake was already fixed once
// for the directory, so this keeps the two from drifting back.
//
//   npm run test:tool-links

import { TOOLS } from '../services/api';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); }
};

console.log('\nTool links\n');
ok(TOOLS.checkYourself === 'https://checkyourself.healthmatters.clinic', 'Check Yourself is on its own domain', TOOLS.checkYourself);
ok(TOOLS.calmKit === 'https://calmkit.healthmatters.clinic', 'Calm Kit is on its own domain');
ok(TOOLS.eventFinder === 'https://eventfinder.healthmatters.clinic', 'Event Finder is on its own domain');
ok(TOOLS.directory === 'https://directory.healthmatters.clinic', 'the directory is on its own domain');
for (const [name, url] of Object.entries(TOOLS)) {
  if (name === 'resources' || name === 'donate') continue;
  ok(!/healthmatters\.clinic\/resources\//.test(url), `${name} does not go through the /resources page`, url);
}

console.log(failures === 0 ? `\n  ${checks} checks passed\n` : `\n  ${failures} of ${checks} checks failed\n`);
process.exit(failures === 0 ? 0 : 1);
