// What a member is allowed to be told an event starts.
//
// The Hub showed somebody "19.00 DM ٨.00 DM" on its front page: a 24-hour clock, colons
// typed as full stops, P typed as D, and an Arabic-Indic eight where a Latin one belonged.
// Event times are free text typed into a spreadsheet and nothing between the sheet and the
// screen ever looked at them, so whatever was typed is what a member read.
//
// Two rules, and this test exists to keep them apart. A 24-hour clock is a real time badly
// written and is rewritten. Text carrying characters from another script is not a time
// anybody can act on and is refused, because showing it makes the event itself look
// untrustworthy. Guessing is the third option and it is not allowed: a bare "9:00" with
// nothing saying morning or evening is refused rather than moved twelve hours.
//
//   npm run test:event-time

import { formatEventTime } from '../services/eventTime';

let failures = 0;
let checks = 0;
const eq = (got: string | null, want: string | null, label: string) => {
  checks++;
  if (got !== want) { failures++; console.log(`  FAIL  ${label}\n          got ${JSON.stringify(got)}, wanted ${JSON.stringify(want)}`); }
};

console.log('\nEvent time\n');

// The exact string a member was shown on the Hub home page.
eq(formatEventTime('19.00 DM ٨.00 DM'), null, 'the mangled string is refused, not rendered');

// Times already written the way HMC writes them survive untouched.
eq(formatEventTime('10 AM - 12 PM'), '10:00 AM - 12:00 PM', 'a bare-hour range keeps its meaning');
eq(formatEventTime('7:00 PM - 7:40 PM'), '7:00 PM - 7:40 PM', 'a correct range is left alone');
eq(formatEventTime('8:00 AM - 1:00 PM'), '8:00 AM - 1:00 PM', 'a working-day range is left alone');

// HMC does not show members a 24-hour clock.
eq(formatEventTime('19:00'), '7:00 PM', 'a 24-hour time becomes the one a member reads');
eq(formatEventTime('19.00'), '7:00 PM', 'a full stop is accepted as a colon');
eq(formatEventTime('13:30 - 17:00'), '1:30 PM - 5:00 PM', 'a 24-hour range converts at both ends');
eq(formatEventTime('11:00 - 15:00'), '11:00 AM - 3:00 PM', 'a range that crosses midday converts correctly');

// A range where only one end says morning or evening lends it to the other.
eq(formatEventTime('8:00 - 1:00 PM'), '8:00 AM - 1:00 PM', 'the meridiem is lent forwards across the dash');
eq(formatEventTime('6:00 - 8:00 PM'), '6:00 PM - 8:00 PM', 'a range that stays in the evening is read as one');

// Placeholders are not times and are correct as they stand.
eq(formatEventTime('TBD'), 'TBD', 'TBD is kept');
eq(formatEventTime('TBA'), 'TBA', 'TBA is kept');

// Refusing beats guessing. Both of these are as likely to be morning as evening.
eq(formatEventTime('9:00'), null, 'an ambiguous single time is refused rather than guessed');
eq(formatEventTime('9:00 - 11:00'), null, 'an ambiguous range is refused rather than guessed');

eq(formatEventTime(''), null, 'nothing in, nothing out');
eq(formatEventTime(null), null, 'a null time is not a time');
eq(formatEventTime(undefined), null, 'a missing time is not a time');

console.log(`\n${checks - failures}/${checks} passed\n`);
if (failures) process.exit(1);
