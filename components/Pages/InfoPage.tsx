import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * The frame the Volunteer and For Organizations pages share.
 *
 * Both used to be a sidebar link to another site, so a person deciding whether to volunteer or to bring an
 * organization in had to leave the Hub to find out what either involves. These pages explain it here, in
 * sections they can move between, with the detail to open and read, and hand off to the real application or
 * account only at the end. This file is only the frame: a title, section tabs, a loading and failure state
 * that never leaves the page blank, an accordion for questions, and the closing step.
 */

export interface InfoSection { id: string; label: string; body: React.ReactNode }

export interface InfoCta {
  heading: string;
  text: string;
  label: string;
  href: string;
  contact: { label: string; email: string };
}

/** One open-and-close row. Used for questions, training layers and anything that has more to read. */
export const Disclosure: React.FC<{ title: React.ReactNode; meta?: React.ReactNode; defaultOpen?: boolean; children: React.ReactNode }> = ({ title, meta, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white">
      <button type="button" onClick={() => setOpen(o => !o)} aria-expanded={open} className="w-full flex items-center justify-between gap-4 text-left px-5 py-4">
        <span className="min-w-0">
          <span className="block text-base font-semibold text-zinc-900">{title}</span>
          {meta && <span className="block text-sm text-zinc-500 mt-0.5">{meta}</span>}
        </span>
        <ChevronDown size={18} className={`shrink-0 text-zinc-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm leading-relaxed text-zinc-700 space-y-3">{children}</div>}
    </div>
  );
};

export const Faq: React.FC<{ items: Array<{ q: string; a: string }> }> = ({ items }) => (
  <div className="space-y-3">{items.map(f => <Disclosure key={f.q} title={f.q}><p>{f.a}</p></Disclosure>)}</div>
);

export const Section: React.FC<{ title: string; intro?: string; children: React.ReactNode }> = ({ title, intro, children }) => (
  <section className="space-y-5">
    <div className="space-y-2">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">{title}</h2>
      {intro && <p className="text-base text-zinc-600 leading-relaxed max-w-3xl">{intro}</p>}
    </div>
    {children}
  </section>
);

interface Props<T> {
  eyebrow: string;
  load: () => Promise<T>;
  /** Where to send somebody if the page cannot load, so a failure still leads somewhere. */
  fallbackHref: string;
  fallbackLabel: string;
  title: (d: T) => string;
  lead: (d: T) => string;
  sections: (d: T) => InfoSection[];
  cta: InfoCta;
  initialSection?: string;
}

function InfoPage<T>({ eyebrow, load, fallbackHref, fallbackLabel, title, lead, sections, cta, initialSection }: Props<T>) {
  const [data, setData] = useState<T | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [active, setActive] = useState<string | null>(initialSection || null);

  useEffect(() => {
    let alive = true;
    setFailed(false);
    load().then(d => { if (alive) setData(d); }).catch(() => { if (alive) setFailed(true); });
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt]);

  const secs = data ? sections(data) : [];
  const current = secs.find(s => s.id === active) || secs[0];

  return (
    <div className="max-w-5xl mx-auto py-10 space-y-10 animate-in fade-in duration-500" data-testid="info-page">
      <header className="space-y-4">
        <div className="pill pill-blue">{eyebrow}</div>
        {data ? (
          <>
            <h1 className="text-5xl font-semibold tracking-tight text-zinc-900">{title(data)}</h1>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl">{lead(data)}</p>
          </>
        ) : (
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-900">{eyebrow}</h1>
        )}
      </header>

      {!data && !failed && <p className="text-zinc-500" role="status">Loading.</p>}

      {failed && (
        <div role="alert" className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-3" data-testid="info-failed">
          <p className="text-base font-semibold text-zinc-900">This page did not load.</p>
          <p className="text-sm text-zinc-600">Check your connection and try again. You can also go straight to the source.</p>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => setAttempt(a => a + 1)} className="hmc-btn hmc-btn-primary">Try again</button>
            <a href={fallbackHref} className="hmc-btn hmc-btn-secondary">{fallbackLabel}</a>
          </div>
        </div>
      )}

      {data && current && (
        <>
          <nav aria-label="Sections" className="flex flex-wrap gap-2 border-b border-zinc-200 pb-4">
            {secs.map(s => (
              <button key={s.id} type="button" onClick={() => setActive(s.id)} aria-current={s.id === current.id ? 'page' : undefined}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${s.id === current.id ? 'bg-zinc-900 text-white' : 'bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-400'}`}>
                {s.label}
              </button>
            ))}
          </nav>

          <div data-testid="info-body">{current.body}</div>

          <aside className="rounded-3xl bg-zinc-900 text-white p-8 md:p-10 space-y-4" data-testid="info-cta">
            <h2 className="text-2xl font-semibold tracking-tight">{cta.heading}</h2>
            <p className="text-zinc-300 leading-relaxed max-w-2xl">{cta.text}</p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href={cta.href} className="hmc-btn hmc-btn-secondary">{cta.label}</a>
              <a href={`mailto:${cta.contact.email}`} className="text-sm text-zinc-300 underline">{cta.contact.label}: {cta.contact.email}</a>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}

export default InfoPage;
