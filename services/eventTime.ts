/**
 * What time an event starts, written the way a person reads it.
 *
 * Event times reach the Hub as free text typed into a spreadsheet, and the spreadsheet
 * accepts anything. A member was shown "19.00 DM ٨.00 DM" on the front page of the Hub:
 * a 24-hour clock, colons typed as full stops, P typed as D, and an Arabic-Indic eight
 * where a Latin one belonged, all of it rendered straight through because nothing between
 * the sheet and the screen ever looked at it.
 *
 * Two jobs, in this order.
 *
 * Normalise what can be read. "19:00" and "19.00" are a real time badly written, and
 * HMC does not show members a 24-hour clock, so they become "7:00 PM".
 *
 * Refuse what cannot. A string carrying digits or letters from another script is not a
 * time anybody can act on, and showing it is worse than showing nothing, because it makes
 * the event itself look untrustworthy. The caller drops the time and still shows the date
 * and the place, which is what a member needs to decide whether to come.
 *
 * Fixing the display is deliberately not a substitute for fixing the record. A garbled
 * time in the sheet is still wrong in the sheet, and still wrong in the Event Finder,
 * Eventbrite and every calendar link built from it. This stops it reaching a member while
 * the record is corrected.
 */

/** Placeholders that are not times and are correct to show as they are. */
const PLACEHOLDER = /^(tbd|tba|all day|varies)$/i;

/** A time we are prepared to read: digits, a separator, an optional meridiem. */
const CLOCK = /^(\d{1,2})[:.·](\d{2})\s*([ap])\.?m?\.?$|^(\d{1,2})\s*([ap])\.?m?\.?$|^(\d{1,2})[:.·](\d{2})$/i;

/** Anything outside plain ASCII is a sign the text was mangled, not merely untidy. */
const NON_ASCII = /[^\x20-\x7E]/;

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * One clock reading, or null when the text is not one.
 *
 * A bare hour with no meridiem is read as a 24-hour clock, because that is what it is
 * when it comes from a spreadsheet: 19 is seven in the evening and 9 is nine in the
 * morning. Guessing a meridiem onto an ambiguous hour would risk telling somebody to
 * arrive twelve hours late, so 13 through 23 convert and 1 through 12 are left to the
 * range logic below, which can borrow the meridiem from the other end.
 */
const readOne = (raw: string): { h24: number; m: number; explicit: boolean } | null => {
  const text = raw.trim();
  if (!text || NON_ASCII.test(text)) return null;
  const m = CLOCK.exec(text);
  if (!m) return null;

  // Group sets: [1,2,3] = h:mm am/pm, [4,5] = h am/pm, [6,7] = h:mm bare.
  let hour: number;
  let minute: number;
  let meridiem: string | undefined;
  if (m[1] !== undefined) { hour = Number(m[1]); minute = Number(m[2]); meridiem = m[3]; }
  else if (m[4] !== undefined) { hour = Number(m[4]); minute = 0; meridiem = m[5]; }
  else { hour = Number(m[6]); minute = Number(m[7]); meridiem = undefined; }

  if (!Number.isFinite(hour) || !Number.isFinite(minute)) return null;
  if (minute > 59) return null;

  if (meridiem) {
    if (hour < 1 || hour > 12) return null;
    const lower = meridiem.toLowerCase();
    const h24 = lower === 'p' ? (hour === 12 ? 12 : hour + 12) : (hour === 12 ? 0 : hour);
    return { h24, m: minute, explicit: true };
  }

  if (hour > 23) return null;
  // 13-23 can only be a 24-hour clock. 0-12 is still ambiguous.
  return { h24: hour, m: minute, explicit: hour === 0 || hour > 12 };
};

const write = (t: { h24: number; m: number }): string => {
  const suffix = t.h24 >= 12 ? 'PM' : 'AM';
  const hour = t.h24 % 12 === 0 ? 12 : t.h24 % 12;
  return `${hour}:${pad(t.m)} ${suffix}`;
};

/**
 * An event's time as a member should see it, or null when it cannot be trusted.
 *
 * Ranges keep their range. A range where only one end states a meridiem lends it to the
 * other, which is how "10 AM - 12 PM" and "8:00 - 1:00 PM" are both meant to be read.
 */
export const formatEventTime = (raw?: string | null): string | null => {
  const text = String(raw ?? '').trim();
  if (!text) return null;
  if (PLACEHOLDER.test(text)) return text.toUpperCase() === text ? text : text;
  if (NON_ASCII.test(text)) return null;

  const parts = text.split(/\s*(?:-|–|—|to)\s*/i).filter(Boolean);

  if (parts.length === 1) {
    const one = readOne(parts[0]);
    // An ambiguous bare hour on its own has no second end to borrow from. Morning is
    // the wrong guess as often as evening is, so it is left alone rather than moved.
    if (!one) return null;
    if (!one.explicit && one.h24 >= 1 && one.h24 <= 12) return null;
    return write(one);
  }

  if (parts.length === 2) {
    const a = readOne(parts[0]);
    const b = readOne(parts[1]);
    if (!a || !b) return null;

    // Borrow a meridiem across the dash, then keep the range going forwards. "8:00 - 1:00 PM"
    // is a working day, not a seven-hour journey backwards through the morning.
    let start = { ...a };
    const end = { ...b };
    if (!a.explicit && b.explicit && a.h24 >= 1 && a.h24 <= 12) {
      const asPm = a.h24 === 12 ? 12 : a.h24 + 12;
      start = { ...a, h24: asPm <= end.h24 ? asPm : a.h24, explicit: true };
    }
    if (!a.explicit && !b.explicit && a.h24 >= 1 && a.h24 <= 12 && b.h24 >= 1 && b.h24 <= 12) {
      return null;
    }
    return `${write(start)} - ${write(end)}`;
  }

  return null;
};
