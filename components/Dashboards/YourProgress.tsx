import React, { useEffect, useState } from 'react';
import { Activity, Flame, Clock, Footprints, AlertTriangle } from 'lucide-react';
import { memberActivity, type MemberProgress } from '../../services/api';

/**
 * What a member has actually done, in one place.
 *
 * CalmKit's end-of-walk dialog has been saying "your progress will be saved" for
 * as long as it has existed. It was not true in any way a person could use: walks
 * lived in that browser's local storage, Check Yourself kept check-ins, Event
 * Finder kept RSVPs, the Academy kept course progress, and none of them could see
 * each other or show any of it back. Somebody could use four HMC products for a
 * year and have nothing to look at.
 *
 * This is the screen that makes the promise true. It reads member_events, the
 * shared timeline every product now writes to.
 *
 * The empty state is treated as a normal state, not an error. A member who has
 * just signed in has no history yet, and the honest thing is to say so and name
 * what will start appearing, rather than render a wall of zeros that reads as a
 * broken page.
 */

const TYPE_LABEL: Record<string, string> = {
  calmkit_session: 'CalmKit session',
  check_in: 'Check-in',
  screening: 'Health screening',
  event_rsvp: 'Event RSVP',
  event_attended: 'Event attended',
  referral_made: 'Referral',
  course_progress: 'Course progress',
  course_completed: 'Course completed',
};

const SOURCE_LABEL: Record<string, string> = {
  calmkit: 'CalmKit',
  hub: 'Member Hub',
  portal: 'Health Matters Clinic',
  eventfinder: 'Event Finder',
  academy: 'HMC Academy',
  checkyourself: 'Check Yourself',
};

/** "Today" and "Yesterday" read better than a date for the things people just did. */
const whenLabel = (iso: string): string => {
  const then = new Date(iso);
  if (isNaN(then.getTime())) return '';
  const days = Math.floor((Date.now() - then.getTime()) / 86400000);
  if (days <= 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  return then.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};

const Stat: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
  <div className="rounded-2xl border border-zinc-200 bg-white p-4 flex flex-col gap-1">
    <div className="text-zinc-400">{icon}</div>
    <div className="text-2xl font-bold text-zinc-900 tabular-nums">{value}</div>
    <div className="text-xs font-medium uppercase tracking-wide text-zinc-500">{label}</div>
  </div>
);

const YourProgress: React.FC = () => {
  const [data, setData] = useState<MemberProgress | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    memberActivity.progress()
      .then((p) => { if (!cancelled) setData(p); })
      .catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; };
  }, []);

  if (failed) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 flex gap-3">
        <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-zinc-900">Your progress could not be loaded</p>
          <p className="text-sm text-zinc-600 mt-1">
            Nothing has been lost. Refresh the page, and if it keeps happening let us know at
            contact@healthmatters.clinic.
          </p>
        </div>
      </div>
    );
  }

  if (!data) {
    return <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm text-zinc-500">Loading your progress...</div>;
  }

  // Nothing yet is a normal state. Say what will appear here rather than showing
  // a grid of zeros, which reads as something being broken.
  if (!data.hasHistory) {
    return (
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-zinc-900">Your progress</h2>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="font-semibold text-zinc-900">Nothing here yet, and that is fine.</p>
          <p className="text-sm text-zinc-600 mt-2 max-w-prose">
            When you take a check-in, walk with CalmKit, RSVP to an event, or work through a
            course, it will show up here. This is your record, and only you see it.
          </p>
        </div>
      </section>
    );
  }

  const t = data.totals || {};
  const streak = data.currentStreakDays || 0;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-3 flex-wrap">
        <h2 className="text-xl font-bold text-zinc-900">Your progress</h2>
        {typeof data.thisWeek?.events === 'number' && (
          <p className="text-sm text-zinc-500">
            {data.thisWeek.events} {data.thisWeek.events === 1 ? 'thing' : 'things'} this week
          </p>
        )}
      </div>

      <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
        <Stat icon={<Flame size={18} />} value={String(streak)} label={streak === 1 ? 'day streak' : 'day streak'} />
        <Stat icon={<Activity size={18} />} value={String(t.activeDays ?? 0)} label="active days" />
        {typeof t.minutes === 'number' && t.minutes > 0 && (
          <Stat icon={<Clock size={18} />} value={String(t.minutes)} label="minutes" />
        )}
        {typeof t.miles === 'number' && t.miles > 0 && (
          <Stat icon={<Footprints size={18} />} value={t.miles.toFixed(2)} label="miles" />
        )}
      </div>

      {data.recent?.length > 0 && (
        <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden">
          <p className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-500 border-b border-zinc-100">
            Recent
          </p>
          <ul className="divide-y divide-zinc-100">
            {data.recent.map((e) => (
              <li key={e.id} className="px-5 py-3 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-zinc-900">{e.summary}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {TYPE_LABEL[e.type] || e.type}
                    {SOURCE_LABEL[e.source] ? ` · ${SOURCE_LABEL[e.source]}` : ''}
                  </p>
                </div>
                <span className="text-xs text-zinc-400 whitespace-nowrap shrink-0">{whenLabel(e.at)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default YourProgress;
