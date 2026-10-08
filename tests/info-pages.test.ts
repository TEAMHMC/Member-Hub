// Volunteer and For Organizations are pages in the Hub, not links to other sites.
//
// They were sidebar entries that left for volunteer.healthmatters.clinic and partner.healthmatters.clinic, so somebody
// deciding whether to volunteer or to bring an organization in had to go elsewhere to learn what either involves. Each is
// now a page here, with the explanation and the detail, and the application or the account is the last step on it.
//
//   npm run test:info-pages

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { toPath, parse } from '../services/route';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); }
};
const here = dirname(fileURLToPath(import.meta.url));
const read = (p: string) => readFileSync(join(here, '..', p), 'utf8');
const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');

console.log('\nInfo pages\n');

const sidebar = read('components/Layout/Sidebar.tsx');
const dash = read('components/Dashboards/ClientDashboard.tsx');
const frame = read('components/Pages/InfoPage.tsx');
const vol = read('components/Pages/VolunteerPage.tsx');
const org = read('components/Pages/OrganizationsPage.tsx');
const api = read('services/api.ts');

// Navigation
{
  const pages = sidebar.slice(sidebar.indexOf('const INFO_PAGES'), sidebar.indexOf('const getNavItems'));
  ok(/id: 'volunteer'/.test(pages) && /id: 'organizations'/.test(pages), 'the sidebar offers both pages as tabs');
  ok(!/href:/.test(pages), 'neither sidebar entry is a link that leaves the Hub');
  ok(!/OUTBOUND/.test(strip(sidebar)), 'the outbound list is gone');
  const nav = sidebar.slice(sidebar.indexOf('const getNavItems'));
  ok((nav.match(/\.\.\.INFO_PAGES/g) || []).length === 3, 'visitors, learners and members all get both pages');
  const learner = /const LEARNER_TABS = \[([^\]]+)\]/.exec(dash)?.[1] || '';
  const pub = /const PUBLIC_TABS = \[([^\]]+)\]/.exec(dash)?.[1] || '';
  for (const id of ['volunteer', 'organizations']) {
    ok(learner.includes(`'${id}'`), `a learner can open "${id}"`);
    ok(pub.includes(`'${id}'`), `a visitor can open "${id}" without an account`);
    ok(new RegExp(`case '${id}': return <${id === 'volunteer' ? 'VolunteerPage' : 'OrganizationsPage'} />`).test(dash), `the dashboard renders "${id}"`);
  }
}

// Addresses
{
  ok(toPath({ tab: 'volunteer' }) === '/volunteer' && toPath({ tab: 'organizations' }) === '/organizations', 'each page has its own address');
  ok(parse('/volunteer').tab === 'volunteer' && parse('/organizations').tab === 'organizations', 'the addresses open the pages, so a link lands on them');
  ok(parse('/nothing-here').tab === 'dash', 'an unknown address is still Home');
}

// The pages explain, and send people on only at the end
{
  ok(/info\.volunteer/.test(vol) && /info\.partner/.test(org), 'each page reads its content from the portal');
  for (const [name, src, dest, mail] of [['Volunteer', vol, 'https://volunteer.healthmatters.clinic', 'volunteer@healthmatters.clinic'], ['Organizations', org, 'https://partner.healthmatters.clinic', 'partner@healthmatters.clinic']] as const) {
    ok(src.includes(`href: '${dest}'`), `${name}: the closing step goes to the real ${dest.includes('partner') ? 'partner account' : 'application'}`);
    ok(src.includes(mail), `${name}: a way to ask first`);
    ok(!(strip(src).match(/<a\b/g) || []).length, `${name}: the page body has no outbound links of its own`);
  }
  ok(/data-testid="info-failed"/.test(frame) && /fallbackHref/.test(frame) && /Try again/.test(frame), 'a failed load shows a message, a retry and the original site, never a blank page');
  ok(/aria-current/.test(frame) && /aria-expanded/.test(frame), 'section tabs and open rows say which is current');
  for (const id of ["'overview'", "'ways'", "'training'", "'apply'", "'faq'"]) ok(vol.includes(`id: ${id}`), `Volunteer has the ${id} section`);
  for (const id of ["'overview'", "'ways'", "'fit'", "'how'", "'faq'"]) ok(org.includes(`id: ${id}`), `Organizations has the ${id} section`);
  ok(/export const info =/.test(api) && /\/api\/public\/volunteer-info/.test(api) && /\/api\/public\/partner-info/.test(api), 'the API client has both calls');
}

// Copy rules for words written in the Hub
{
  const written = [frame, vol, org].map(strip).join('\n');
  ok(!/[–—]/.test(written), 'no em dash or en dash in anything a visitor reads');
  ok(!/\bfree\b|\bcost\b|\bfee\b|\bprice\b/i.test(written), 'no cost language');
  ok(!/[\u{1F300}-\u{1FAFF}☀-➿]/u.test(written), 'no emoji');
}

console.log(failures === 0 ? `\n  ${checks} checks passed\n` : `\n  ${failures} of ${checks} checks failed\n`);
process.exit(failures === 0 ? 0 : 1);
