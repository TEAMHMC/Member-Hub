// Sunny looks the same everywhere.
//
// Messages and options share one shape, a rounded rectangle with a squared corner on the speaker's side, like a text message.
// Options are not pills and not bold. The launcher, the panel, the message box, the send button and the options carry the site's
// thin black line, 1px #0f0f0f. Messages have no outline. The same spec is applied in sunny-harper and the Resource Directory.
//
//   npm run test:sunny-style

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { HAIRLINE, SHAPE_SUNNY, SHAPE_PERSON, BUBBLE_TEXT } from '../components/Navigator/sunnyChatStyle';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => { checks++; if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); } };
const here = dirname(fileURLToPath(import.meta.url));
const nav = readFileSync(join(here, '..', 'components/Navigator/SunnyNavigator.tsx'), 'utf8');

console.log('\nSunny chat style\n');
ok(HAIRLINE === 'border border-[#0f0f0f]', 'the hairline is the site button line, 1px #0f0f0f');
ok(/rounded-bl-\[4px\]/.test(SHAPE_SUNNY) && /rounded-br-\[4px\]/.test(SHAPE_PERSON), 'Sunny and the person each get a squared corner on their own side');
ok(!/font-(semibold|bold|black)/.test(BUBBLE_TEXT), 'message and option text is not bold');
const uses = (re: RegExp) => (nav.match(re) || []).length;
ok(uses(/\$\{HAIRLINE\}/g) >= 4, 'launcher, options, message box and send button all carry the hairline', String(uses(/\$\{HAIRLINE\}/g)));
ok(/rounded-\[28px\] shadow-2xl border border-\[#0f0f0f\]/.test(nav), 'the panel carries the hairline');
ok(/\$\{SHAPE_SUNNY\} \$\{BUBBLE_TEXT\} \$\{HAIRLINE\}/.test(nav), 'options have the same shape and text as a message from Sunny, plus the hairline');
ok(!/rounded-full border border-zinc-200 bg-white px-3 py-1\.5 text-xs font-semibold/.test(nav), 'the old bold pill option is gone');
console.log(failures === 0 ? `\n  ${checks} checks passed\n` : `\n  ${failures} of ${checks} checks failed\n`);
process.exit(failures === 0 ? 0 : 1);
