import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, GraduationCap } from 'lucide-react';
import { visit as visitApi, type HmcEvent, type VisitView } from '../../services/api';
import { formatEventTime } from '../../services/eventTime';
import { useEvents } from '../../services/hooks';
import { placeCopy, sectionsFor, sessionsToday, takeVisitToken, todayPacific, visitIsCurrent, type Audience } from '../../services/todayVisit';

/**
 * Today, for whoever is looking.
 *
 * A member here for care sees the visit they carry: the event, and where they stand in the
 * screening line, kept current while they wait. A learner sees the sessions happening today
 * and never the line. Somebody here for both sees both. Renders nothing when there is nothing
 * to say, so it never fills the front page with an empty box.
 */
const Row: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
  <p className="flex items-center gap-2 text-sm text-zinc-600">{icon}<span>{children}</span></p>
);

const TodaysVisit: React.FC<{ audience?: Audience; signedIn: boolean; onOpenAcademy?: () => void }> = ({ audience, signedIn, onOpenAcademy }) => {
  const [token, setToken] = useState<string | null>(null);
  const [view, setView] = useState<VisitView | null>(null);
  const [failed, setFailed] = useState(false);
  const { events } = useEvents();
  const today = todayPacific();

  useEffect(() => {
    let store: Storage | null = null;
    try { store = window.localStorage; } catch { store = null; }
    const { token: t, fromLink } = takeVisitToken(window.location.search, store);
    setToken(t);
    // The link carried a private token. Take it out of the address bar so it is not copied, shared or bookmarked.
    if (fromLink) { try { window.history.replaceState({}, '', window.location.pathname + window.location.hash); } catch { /* */ } }
  }, []);

  const wanted = sectionsFor(audience, !!token);

  useEffect(() => {
    if (!token || !wanted.visit) return;
    let alive = true;
    const load = () => visitApi.get(token).then((v) => { if (alive) { setView(v); setFailed(false); } }).catch(() => { if (alive) setFailed(true); });
    load();
    const t = setInterval(load, 15000);
    return () => { alive = false; clearInterval(t); };
  }, [token, wanted.visit]);

  const sessions = wanted.sessions ? sessionsToday(events, today) : [];
  const showVisit = wanted.visit && view && visitIsCurrent(view.event?.date, today);
  if (!showVisit && sessions.length === 0) return null;

  const copy = placeCopy(view?.line ?? null, signedIn);

  return (
    <div className="space-y-4 text-left" data-testid="todays-visit">
      {showVisit && view && (
        <section aria-label="Today's visit" className="rounded-2xl border border-[#233DFF]/30 bg-white p-6 space-y-3" data-testid="visit-card">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#233DFF]">Today&rsquo;s visit</p>
          {view.event && (
            <>
              <h3 className="text-xl font-semibold text-zinc-900">{view.event.title}</h3>
              <div className="space-y-1">
                {view.event.time && formatEventTime(view.event.time) && <Row icon={<Clock size={14} />}>{formatEventTime(view.event.time)}</Row>}
                {view.event.location && <Row icon={<MapPin size={14} />}>{view.event.location}</Row>}
              </div>
            </>
          )}
          <div className="rounded-xl bg-zinc-50 p-4">
            <p className="text-lg font-semibold text-zinc-900">{copy.headline}</p>
            <p className="text-sm text-zinc-600 mt-1">{copy.detail}</p>
            {failed && copy.live && <p className="text-xs text-zinc-500 mt-2">We could not refresh just now. We will keep trying.</p>}
          </div>
        </section>
      )}

      {sessions.length > 0 && (
        <section aria-label="Today's sessions" className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-3" data-testid="sessions-card">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#233DFF]">Today&rsquo;s {sessions.length === 1 ? 'session' : 'sessions'}</p>
          <ul className="space-y-3">
            {sessions.map((e: HmcEvent) => (
              <li key={e.id}>
                <p className="text-base font-semibold text-zinc-900 flex items-center gap-2"><GraduationCap size={16} className="text-[#233DFF]" />{e.title}</p>
                <div className="space-y-1 mt-1">
                  {(e.dateDisplay || formatEventTime(e.time)) && <Row icon={<Calendar size={14} />}>{[e.dateDisplay, formatEventTime(e.time)].filter(Boolean).join(' · ')}</Row>}
                  {e.location && <Row icon={<MapPin size={14} />}>{e.location}</Row>}
                </div>
                {(e.rsvpUrl || e.url) && <a href={e.rsvpUrl || e.url} target="_blank" rel="noreferrer" className="inline-block mt-2 text-sm font-semibold text-[#233DFF] underline">Open details</a>}
              </li>
            ))}
          </ul>
          {onOpenAcademy && <button onClick={onOpenAcademy} className="text-sm font-semibold text-[#233DFF] underline">Continue my pathway</button>}
        </section>
      )}
    </div>
  );
};

export default TodaysVisit;
