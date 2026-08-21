import React, { useEffect, useRef, useState } from 'react';
import { Bell, CalendarClock, Play, GraduationCap, Radio, X } from 'lucide-react';

/**
 * What is new, and what to do about it.
 *
 * The whole point is that the action follows the state of the thing rather than
 * being written by hand. A session in October offers a spot; the same session in
 * November offers its recording; a course offers enrollment. Nobody writes or
 * schedules these, so they cannot fall out of date, and there is no separate
 * notification table to go stale against reality.
 *
 * It reads the portal's content library, where the state is derived from each
 * event's own date and whether a recording exists.
 */

const LIBRARY_URL = 'https://volunteer.healthmatters.clinic/api/public/content-library';

type State = 'upcoming' | 'live' | 'recorded' | 'past';

interface Item {
  id: string;
  title: string;
  description?: string;
  date?: string | null;
  time?: string | null;
  state: State;
  action: { label: string; kind: 'rsvp' | 'join' | 'watch' | 'none' };
  contentType: string;
  hostName?: string | null;
  recordingUrl?: string | null;
  recordingMinutes?: number | null;
  tryItUrl?: string | null;
  websiteUrl?: string | null;
}

interface NotificationsProps {
  /** Opens an in-app destination, so a card can send someone to the Academy or Events. */
  onNavigateTab?: (tab: string) => void;
}

/** Read-once marker per item, so a returning member is not shown the same news forever. */
const SEEN_KEY = 'hmc.hub.seenContent';

const readSeen = (): string[] => {
  try { return JSON.parse(localStorage.getItem(SEEN_KEY) || '[]'); } catch { return []; }
};
const writeSeen = (ids: string[]) => {
  try { localStorage.setItem(SEEN_KEY, JSON.stringify(ids.slice(-200))); } catch { /* private mode */ }
};

const ICON: Record<string, React.ElementType> = {
  'office-hours': CalendarClock,
  webinar: Radio,
  cohort: GraduationCap,
  training: GraduationCap,
  workshop: CalendarClock,
  podcast: Play,
  guide: Play,
};

const whenLabel = (i: Item): string => {
  if (i.state === 'live') return 'Happening now';
  if (i.state === 'recorded') {
    return i.recordingMinutes ? `Recording, ${i.recordingMinutes} min` : 'Recording available';
  }
  if (!i.date) return '';
  // Rendered in Pacific because that is where HMC operates, and read from the date
  // string rather than a parsed Date so a date-only event is never shown a day early.
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(i.date);
  if (!m) return '';
  const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], 12));
  const day = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
  return i.time ? `${day}, ${i.time}` : day;
};

const Notifications: React.FC<NotificationsProps> = ({ onNavigateTab }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [seen, setSeen] = useState<string[]>(readSeen);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(LIBRARY_URL)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (cancelled || !d?.items) return;
        // Anything finished with nothing to watch is not news. Showing it would
        // fill the panel with things a member can do nothing about.
        setItems((d.items as Item[]).filter((i) => i.state !== 'past').slice(0, 12));
      })
      .catch(() => { /* the bell simply shows nothing */ });
    return () => { cancelled = true; };
  }, []);

  // Close on outside click and on Escape, or the panel traps the page.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (panelRef.current?.contains(e.target as Node)) return;
      if (buttonRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const unread = items.filter((i) => !seen.includes(i.id));

  const markAllSeen = () => {
    const ids = Array.from(new Set([...seen, ...items.map((i) => i.id)]));
    setSeen(ids);
    writeSeen(ids);
  };

  const act = (i: Item) => {
    const ids = Array.from(new Set([...seen, i.id]));
    setSeen(ids); writeSeen(ids);

    if (i.action.kind === 'watch' && i.recordingUrl) {
      window.open(i.recordingUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    if (i.action.kind === 'join' && (i.websiteUrl || i.recordingUrl)) {
      window.open((i.websiteUrl || i.recordingUrl) as string, '_blank', 'noopener,noreferrer');
      return;
    }
    // An RSVP belongs on the events surface, where the real registration lives.
    if (onNavigateTab) { setOpen(false); onNavigateTab('events'); return; }
    if (i.websiteUrl) window.open(i.websiteUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => { setOpen((o) => !o); }}
        aria-label={unread.length ? `${unread.length} new items` : 'What is new'}
        aria-expanded={open}
        className="relative w-10 h-10 rounded-full bg-white/80 border border-zinc-100 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-white transition-all shadow-sm"
      >
        <Bell size={18} />
        {unread.length > 0 && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#FF6E40] text-white text-[10px] font-black flex items-center justify-center">
            {unread.length > 9 ? '9+' : unread.length}
          </span>
        )}
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="What is new"
          className="absolute right-0 mt-3 w-[min(92vw,420px)] max-h-[70vh] overflow-y-auto bg-white rounded-2xl border border-zinc-200/70 shadow-xl z-50"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100 sticky top-0 bg-white">
            <p className="font-bold text-zinc-900">What is new</p>
            <div className="flex items-center gap-3">
              {unread.length > 0 && (
                <button onClick={markAllSeen} className="text-[11px] font-bold uppercase tracking-wider text-[#233DFF] hover:underline">
                  Mark all read
                </button>
              )}
              <button onClick={() => setOpen(false)} aria-label="Close" className="text-zinc-400 hover:text-zinc-700">
                <X size={16} />
              </button>
            </div>
          </div>

          {items.length === 0 && (
            <p className="px-5 py-8 text-sm text-zinc-500">
              Nothing new right now. Upcoming sessions and new recordings will appear here.
            </p>
          )}

          <ul className="divide-y divide-zinc-100">
            {items.map((i) => {
              const Icon = ICON[i.contentType] || CalendarClock;
              const isUnread = !seen.includes(i.id);
              const when = whenLabel(i);
              return (
                <li key={i.id} className={`px-5 py-4 flex gap-3.5 ${isUnread ? 'bg-blue-50/30' : ''}`}>
                  <span className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-500 flex items-center justify-center shrink-0">
                    <Icon size={17} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-[14.5px] font-semibold text-zinc-900 leading-snug">{i.title}</p>
                      {i.state === 'live' && (
                        <span className="shrink-0 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-50 text-red-600">Live</span>
                      )}
                    </div>
                    {when && <p className="text-[12px] text-zinc-400 font-semibold mt-0.5">{when}{i.hostName ? ` · ${i.hostName}` : ''}</p>}
                    {i.description && (
                      <p className="text-[13px] text-zinc-500 mt-1 leading-relaxed line-clamp-2">{i.description}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-2 mt-2.5">
                      {i.action.kind !== 'none' && (
                        <button
                          onClick={() => act(i)}
                          className="px-3.5 py-1.5 rounded-full bg-[#233DFF] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#1a30cc] transition-colors"
                        >
                          {i.action.label}
                        </button>
                      )}
                      {/* Only shown when the thing exists: the portal withholds tryItUrl
                          until a session is live or recorded, so this can never point at
                          a tool for something that has not happened. */}
                      {i.tryItUrl && (
                        <a
                          href={i.tryItUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => { const ids = Array.from(new Set([...seen, i.id])); setSeen(ids); writeSeen(ids); }}
                          className="px-3.5 py-1.5 rounded-full border border-zinc-300 text-zinc-700 text-[11px] font-bold uppercase tracking-wider hover:bg-zinc-50 transition-colors"
                        >
                          See it live
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
