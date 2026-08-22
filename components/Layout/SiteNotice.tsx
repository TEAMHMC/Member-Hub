import React, { useEffect, useState } from 'react';
import { AlertTriangle, Info, Wrench, X } from 'lucide-react';
import { siteNotice as siteNoticeApi, type SiteNoticeData } from '../../services/api';

/**
 * The same banner the volunteer portal shows, on the Member Hub.
 *
 * One source of truth on purpose. When HMC needs to tell people something, the
 * message is written once and appears everywhere, rather than being pasted into
 * each site and then updated in some of them. The Hub, the portal and the Webflow
 * marketing pages all read site_config/notice through
 * /api/public/site-notice.
 *
 * Renders above everything including the sign-in screen, because somebody who
 * cannot get in is exactly who needs to read it and they never reach a dashboard.
 *
 * Fails silent. No notice, a failed request, a blocked request and a malformed
 * response all render nothing. A banner that appears because its own endpoint
 * broke would be the outage announcing itself.
 */

type Level = 'info' | 'warning' | 'maintenance';

const STYLES: Record<Level, { bar: string; icon: React.ReactNode; label: string }> = {
  info: {
    bar: 'bg-sky-50 border-sky-200 text-sky-900',
    icon: <Info size={16} className="text-sky-600 shrink-0 mt-0.5" />,
    label: 'Notice',
  },
  warning: {
    bar: 'bg-[#F9C74F] border-[#E0A82E] text-zinc-900',
    icon: <AlertTriangle size={16} className="text-zinc-900 shrink-0 mt-0.5" />,
    label: 'Heads up',
  },
  maintenance: {
    bar: 'bg-zinc-900 border-zinc-800 text-white',
    icon: <Wrench size={16} className="text-zinc-300 shrink-0 mt-0.5" />,
    label: 'Maintenance',
  },
};

// Keyed on the whole notice, not on the message alone.
//
// It used to be message.slice(0, 60). A maintenance notice went up with the wrong
// contact address on it, the detail line was corrected an hour later, and everybody
// who had already closed the banner kept the old dismissal: the message string had
// not changed, so neither had the key, and the correction was invisible to exactly
// the people who had read the wrong version. Level and detail are part of the
// identity of a notice, so they are part of the key.
//
// A 32-bit hash rather than the concatenated text, because the detail line runs to
// a couple of hundred characters and storage keys should not.
const dismissKey = (n: { message: string; detail?: string | null; level?: string }): string => {
  const raw = `${n.level || 'info'}|${n.message}|${n.detail || ''}`;
  let h = 0;
  for (let i = 0; i < raw.length; i++) h = (Math.imul(h, 31) + raw.charCodeAt(i)) | 0;
  return `hmc.notice.dismissed.${h >>> 0}`;
};

const SiteNotice: React.FC = () => {
  const [notice, setNotice] = useState<SiteNoticeData | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const data = await siteNoticeApi.get();
        if (cancelled || !data?.active || !data.message) {
          if (!cancelled) setNotice(null);
          return;
        }
        setNotice(data);
        try {
          setDismissed(sessionStorage.getItem(dismissKey(data)) === '1');
        } catch {
          /* private mode: show it, which is the safer default */
        }
      } catch {
        /* no banner rather than a broken one */
      }
    };

    load();
    // Picks up a notice raised, changed or cleared while a tab sits open, which is
    // the normal case during an incident.
    const timer = setInterval(load, 60_000);
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, []);

  if (!notice || dismissed) return null;

  const level: Level = notice.level === 'maintenance' || notice.level === 'warning' ? notice.level : 'info';
  const style = STYLES[level];

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(dismissKey(notice), '1');
    } catch {
      /* dismissal simply does not persist */
    }
  };

  return (
    <div role="status" aria-live="polite" className={`w-full border-b ${style.bar}`}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-start gap-3">
        {style.icon}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold leading-snug">
            <span className="text-[10px] font-black uppercase tracking-widest opacity-70 mr-2">
              {style.label}
            </span>
            {notice.message}
          </p>
          {notice.detail && (
            <p className="text-xs mt-1 opacity-80 leading-relaxed">{notice.detail}</p>
          )}
        </div>
        {/* Maintenance stays put. It is the level that means do not bother trying. */}
        {level !== 'maintenance' && (
          <button
            onClick={dismiss}
            aria-label="Dismiss this notice"
            className="p-1 rounded-full opacity-60 hover:opacity-100 shrink-0"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SiteNotice;
