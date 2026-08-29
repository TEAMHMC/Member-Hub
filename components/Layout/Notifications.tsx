import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Bell, CalendarClock, Play, GraduationCap, Radio, Newspaper, Archive, CheckCheck, X,
} from 'lucide-react';
import { PATHWAYS } from '../Academy/catalog';
import { training as trainingApi } from '../../services/api';
import {
  buildFeed, filterFor, unreadCount, relativeTime, kindLabel, TABS,
  type FeedItem, type TabId, type NotificationKind, type LibraryRow, type CourseRow,
} from './notificationFeed';

/**
 * What is new, and what to do about it.
 *
 * The bell read one source, public events, which is 18 rows all typed as workshops and 17
 * of them already past. After filtering the past ones the panel held exactly one card, and
 * nothing about training ever appeared in it, while the Academy grew to 28 courses across
 * seven pathways that the bell could not see.
 *
 * It now reads courses, scheduled cohort dates and the content library, grouped into the
 * two things HMC actually runs. Nothing is written to a notification table: every item is
 * derived from the state of the thing it describes, so it cannot go stale against reality.
 *
 * There is deliberately no settings gear here, though the design this follows has one.
 * Notification preferences need somewhere to live and a way to be honoured when HMC sends
 * mail, and a gear that opens nothing is worse than no gear.
 */

const LIBRARY_URL = 'https://volunteer.healthmatters.clinic/api/public/content-library';

const SEEN_KEY = 'hmc.hub.seenContent';
const ARCHIVED_KEY = 'hmc.hub.archivedContent';
const KNOWN_COURSES_KEY = 'hmc.hub.knownCourses';

const readList = (key: string): string[] => {
  try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; }
};
const writeList = (key: string, ids: string[]) => {
  try { localStorage.setItem(key, JSON.stringify(ids.slice(-400))); } catch { /* private mode */ }
};

const ICON: Record<NotificationKind, React.ElementType> = {
  course: GraduationCap,
  training: GraduationCap,
  cohort: GraduationCap,
  workshop: CalendarClock,
  'office-hours': CalendarClock,
  webinar: Radio,
  recording: Play,
  news: Newspaper,
};

const TONE: Record<string, string> = {
  training: 'bg-blue-50 text-[#233DFF]',
  event: 'bg-orange-50 text-[#FF6E40]',
};

interface Props {
  /** Opens an in-app destination, so a card can send someone to the Academy or Events. */
  onNavigateTab?: (tab: string) => void;
}

const Notifications: React.FC<Props> = ({ onNavigateTab }) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<TabId>('inbox');
  const [library, setLibrary] = useState<LibraryRow[]>([]);
  const [sessions, setSessions] = useState<{ id: string; courseId: string; title: string; startsAt: string }[]>([]);
  const [seen, setSeen] = useState<string[]>(() => readList(SEEN_KEY));
  const [archived, setArchived] = useState<string[]>(() => readList(ARCHIVED_KEY));
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const courses: CourseRow[] = useMemo(
    () => PATHWAYS.flatMap((p) => p.courses.map((c) => ({
      id: c.id, title: c.title, pathwayId: p.id, pathwayTitle: p.title, minutes: c.minutes,
    }))),
    [],
  );

  /**
   * What this browser has seen before.
   *
   * Seeded on first run with every course that currently exists, so somebody opening the
   * Hub for the first time is not handed twenty eight notifications announcing that a
   * catalogue exists. After the seed, a course added to the catalogue is genuinely new.
   */
  const [knownCourses, setKnownCourses] = useState<string[]>(() => {
    const stored = localStorage.getItem(KNOWN_COURSES_KEY);
    if (stored) { try { return JSON.parse(stored); } catch { /* fall through to seed */ } }
    return null as unknown as string[];
  });

  useEffect(() => {
    if (knownCourses !== null) return;
    const ids = courses.map((c) => c.id);
    writeList(KNOWN_COURSES_KEY, ids);
    setKnownCourses(ids);
  }, [knownCourses, courses]);

  useEffect(() => {
    let cancelled = false;
    fetch(LIBRARY_URL)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (!cancelled && d?.items) setLibrary(d.items as LibraryRow[]); })
      .catch(() => { /* the bell simply shows less */ });
    trainingApi.sessions()
      .then((r) => {
        if (cancelled) return;
        setSessions((r.sessions || []).map((s: any) => ({
          id: s.id, courseId: s.courseId, title: s.title, startsAt: s.startsAt,
        })));
      })
      .catch(() => { /* no scheduled dates is a normal state, not an error */ });
    return () => { cancelled = true; };
  }, []);

  const items: FeedItem[] = useMemo(
    () => buildFeed({ courses, knownCourseIds: knownCourses || courses.map((c) => c.id), sessions, library }),
    [courses, knownCourses, sessions, library],
  );

  const unread = unreadCount(items, seen, archived);
  const shown = filterFor(tab, items, seen, archived);

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

  const markSeen = (ids: string[]) => {
    const next = Array.from(new Set([...seen, ...ids]));
    setSeen(next); writeList(SEEN_KEY, next);
  };
  const markAllSeen = () => markSeen(items.filter((i) => !archived.includes(i.id)).map((i) => i.id));
  const archive = (id: string) => {
    const next = Array.from(new Set([...archived, id]));
    setArchived(next); writeList(ARCHIVED_KEY, next);
    markSeen([id]);
  };
  const unarchive = (id: string) => {
    const next = archived.filter((a) => a !== id);
    setArchived(next); writeList(ARCHIVED_KEY, next);
  };

  const act = (i: FeedItem) => {
    markSeen([i.id]);
    if (i.action.href) { window.open(i.action.href, '_blank', 'noopener,noreferrer'); return; }
    if (i.action.tab && onNavigateTab) { setOpen(false); onNavigateTab(i.action.tab); }
  };

  const countFor = (id: TabId) => filterFor(id, items, seen, archived).length;

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setOpen((o) => !o)}
        aria-label={unread ? `Notifications, ${unread} unread` : 'Notifications'}
        aria-expanded={open}
        className="relative w-11 h-11 rounded-full bg-white border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-all"
      >
        <Bell size={18} />
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 rounded-full bg-[#FF6E40] text-white text-[10px] font-black flex items-center justify-center">
            {unread > 9 ? '9+' : unread}
          </span>
        )}
      </button>

      {open && (
        <div
          ref={panelRef}
          className="absolute right-0 mt-3 w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl border border-zinc-200/70 shadow-2xl shadow-zinc-300/30 z-50 overflow-hidden"
        >
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <h3 className="text-lg font-semibold text-zinc-900">Notifications</h3>
            <button
              onClick={markAllSeen}
              disabled={unread === 0}
              aria-label="Mark all as read"
              title="Mark all as read"
              className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 disabled:opacity-30"
            >
              <CheckCheck size={17} />
            </button>
          </div>

          <div className="flex gap-1 px-3 pb-3 overflow-x-auto no-scrollbar border-b border-zinc-100">
            {TABS.map((t) => {
              const n = countFor(t.id);
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                    active ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:bg-zinc-50'
                  }`}
                >
                  {t.label}
                  {t.id === 'inbox' && n > 0 && (
                    <span className={`ml-1.5 text-[11px] ${active ? 'text-white/70' : 'text-zinc-400'}`}>{n}</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="max-h-[380px] overflow-y-auto">
            {shown.length === 0 ? (
              <p className="px-5 py-10 text-center text-[13px] text-zinc-400 leading-relaxed">
                {tab === 'inbox' ? 'Nothing new right now.' : 'Nothing here yet.'}
              </p>
            ) : (
              shown.map((i) => {
                const Icon = ICON[i.kind] || Bell;
                const isUnread = !seen.includes(i.id);
                const isArchived = archived.includes(i.id);
                return (
                  <div key={i.id} className="group flex items-start gap-3 px-5 py-4 border-b border-zinc-50 last:border-0 hover:bg-zinc-50/60">
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${TONE[i.group]}`}>
                      <Icon size={16} />
                    </span>
                    <button onClick={() => act(i)} className="flex-1 min-w-0 text-left">
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{kindLabel(i.kind)}</p>
                      <p className="text-[13.5px] font-semibold text-zinc-900 leading-snug mt-0.5">{i.title}</p>
                      {i.detail && <p className="text-[12.5px] text-zinc-500 leading-relaxed mt-1 line-clamp-2">{i.detail}</p>}
                      <p className="text-[11px] text-zinc-400 mt-1.5">
                        {relativeTime(i.date)}
                        {relativeTime(i.date) && ' · '}
                        <span className="font-semibold text-[#233DFF]">{i.action.label}</span>
                      </p>
                    </button>
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      {isUnread && !isArchived && <span className="w-2 h-2 rounded-full bg-[#233DFF] mt-1" aria-label="Unread" />}
                      <button
                        onClick={() => (isArchived ? unarchive(i.id) : archive(i.id))}
                        aria-label={isArchived ? 'Move back to inbox' : 'Archive'}
                        title={isArchived ? 'Move back to inbox' : 'Archive'}
                        className="opacity-0 group-hover:opacity-100 focus:opacity-100 text-zinc-300 hover:text-zinc-600 transition-opacity"
                      >
                        {isArchived ? <X size={14} /> : <Archive size={14} />}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <p className="px-5 py-3 text-center text-[11px] text-zinc-400 border-t border-zinc-100">
            Read and archived notices are kept on this device.
          </p>
        </div>
      )}
    </div>
  );
};

export default Notifications;
