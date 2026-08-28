// What a member is told about their own referral.
//
// The server returns a machine stage and no sentences, so these words are the Hub's. Every
// assertion is a way the page could tell a member something untrue about a connection HMC
// is making for them, which is worse than telling them nothing.
//
//   npm run test:referrals

import {
  stageCopy, isOpen, isUrgent, requestedOn, hasContact, telHref, websiteHref,
  HMC_PHONE, HMC_EMAIL, type Referral,
} from '../components/Dashboards/referralCopy';

let failures = 0;
let checks = 0;
const ok = (cond: boolean, label: string, detail = '') => {
  checks++;
  if (!cond) { failures++; console.log(`  FAIL  ${label}${detail ? `\n          ${detail}` : ''}`); }
};

const ref = (over: Partial<Referral> = {}): Referral => ({
  id: 'r1', resourceName: 'A Place', status: 'pending', createdAt: '2026-08-20T22:30:00Z',
  urgencyLevel: 'routine', ...over,
});

console.log('\nMember referral copy\n');

console.log('Stages');
ok(stageCopy(ref({ stage: 'received' })).label === 'Received', 'a new request reads as received');
ok(stageCopy(ref({ stage: 'matched' })).label === 'Being worked on', 'picked up but not contacted has its own label');
ok(stageCopy(ref({ stage: 'in_touch' })).label === 'In touch', 'contact made reads as in touch');
ok(stageCopy(ref({ stage: 'completed' })).label === 'Connected', 'a completed referral reads as connected');
ok(stageCopy(ref({ stage: 'closed' })).label === 'Closed', 'a closed referral reads as closed');
// The distinction the old single lowercase compare could not make.
ok(stageCopy(ref({ stage: 'closed' })).label !== stageCopy(ref({ stage: 'completed' })).label,
  'closed and connected never read the same', 'a member must not be told they reached a resource they did not');
for (const stage of ['received', 'matched', 'in_touch', 'completed', 'closed'] as const) {
  const c = stageCopy(ref({ stage }));
  ok(c.meaning.length > 30, `${stage}: the label is explained, not left to be guessed`);
  ok(!/[—–]/.test(c.meaning + c.label), `${stage}: no em or en dashes in member copy`);
  ok(!/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(c.meaning + c.label), `${stage}: no emoji in member copy`);
  ok(!/\bclient\b/i.test(c.meaning), `${stage}: says member, never client`);
}

console.log('Older sessions');
// A session outlives a deploy, so a record with none of the new fields still has to say
// something true rather than render blanks.
ok(stageCopy(ref({ status: 'completed' })).label === 'Connected', 'a stageless completed record still reads correctly');
ok(stageCopy(ref({ status: 'Closed' })).label === 'Closed', 'a stageless capitalised closed record still reads correctly');
ok(stageCopy(ref({ status: 'pending' })).label === 'Received', 'a stageless pending record falls back to received');

console.log('Open and closed');
ok(isOpen(ref({ stage: 'received' })) && isOpen(ref({ stage: 'matched' })) && isOpen(ref({ stage: 'in_touch' })),
  'the three live stages count as open');
ok(!isOpen(ref({ stage: 'completed' })) && !isOpen(ref({ stage: 'closed' })), 'settled stages do not count as open');
ok(!isOpen(ref({ status: 'completed' })) && !isOpen(ref({ status: 'withdrawn' })),
  'a stageless record is still classified, so the count and the cards agree');

console.log('Urgency');
ok(isUrgent(ref({ urgencyLevel: 'urgent' })) && isUrgent(ref({ urgencyLevel: 'High' })), 'raised urgency is shown');
ok(!isUrgent(ref({ urgencyLevel: 'routine' })) && !isUrgent(ref({ urgencyLevel: '' })),
  'routine is not flagged, so the word keeps its meaning');

console.log('Dates');
// 22:30 UTC on the 20th is 3:30pm Pacific on the 20th. Formatting in the host zone put
// HMC dates a day out for anyone reading from further east.
ok(requestedOn('2026-08-20T22:30:00Z') === 'August 20, 2026', 'a date is formatted in Pacific, not the host zone',
  String(requestedOn('2026-08-20T22:30:00Z')));
ok(requestedOn('2026-08-21T05:30:00Z') === 'August 20, 2026', 'an instant after UTC midnight is still the Pacific day before',
  String(requestedOn('2026-08-21T05:30:00Z')));
ok(requestedOn(null) === null && requestedOn('not a date') === null, 'an unusable date renders nothing, not "Invalid Date"');

console.log('Contact details');
ok(!hasContact(ref()), 'a referral with no directory contact renders no contact block');
ok(!hasContact(ref({ resource: { phone: null, website: null, address: null, hours: null } })),
  'a contact object of nulls is still no contact block');
ok(hasContact(ref({ resource: { phone: '(213) 555-0134', website: null, address: null, hours: null } })),
  'one reachable detail is enough to show the block');

ok(telHref('(213) 555-0134') === 'tel:+12135550134', 'a formatted ten digit number becomes dialable');
ok(telHref('1-213-555-0134') === 'tel:+12135550134', 'a leading country code is handled');
ok(telHref('818/686-3000') === 'tel:+18186863000', 'a slash separator is handled, as the directory contains them');
// The audit found phone fields holding an email address, a person's name and a nine digit
// number. None of those may become a link that claims to dial.
ok(telHref('dmolina@211la.org') === null, 'an email address in a phone field is not made dialable');
ok(telHref('213555013') === null, 'a nine digit number is not made dialable');
ok(telHref('') === null && telHref(null) === null, 'an empty phone is not made dialable');

ok(websiteHref('https://example.org') === 'https://example.org', 'a full URL is used as is');
ok(websiteHref('example.org') === 'https://example.org', 'a bare hostname is given a scheme');
ok(websiteHref('call the office') === null, 'prose in a website field does not become a link');
ok(websiteHref('') === null, 'an empty website does not become a link');

console.log('One source for the HMC line');
ok(/^\(\d{3}\) \d{3}-\d{4}$/.test(HMC_PHONE), 'the phone number is formatted once, in one place', HMC_PHONE);
ok(HMC_EMAIL.endsWith('@healthmatters.clinic'), 'the contact address is an HMC address', HMC_EMAIL);

console.log(`\n${checks - failures}/${checks} passed${failures ? `, ${failures} FAILED` : ''}\n`);
process.exit(failures ? 1 : 0);
