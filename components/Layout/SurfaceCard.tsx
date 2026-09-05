import React from 'react';

/**
 * The card the Hub uses everywhere something is offered.
 *
 * There were three different cards doing this job: a gradient one on the course list, a
 * plain white one on the home page, and another plain white one on the pathway catalogue.
 * Only the first was designed. The other two were containers, so the two pages a visitor
 * sees first looked like a different, cheaper product than the page they liked.
 *
 * The gradient is the card itself and not a cover slab above it, which is what made an
 * earlier version of this cost a 16:9 band per card and push the action below the fold on
 * a phone. Here it is only the surface the content sits on, so it costs no height at all,
 * and the colours are HMC's own blue, pink and orange.
 *
 * The hairline is the same #0f0f0f the site buttons carry, so a card and a button read as
 * one system rather than two.
 *
 * Content order is fixed, because a column of these has to be scannable: badges, then
 * eyebrow, then title, then body, then the action. The action is pinned to the bottom and
 * full width, which is not decoration. The shared button wraps its label rather than
 * clipping it, so a button sized to its text inside a narrow card broke "Sign in to open"
 * across two lines. Full width gives it the room to stay on one.
 */

export type CardTone = 'default' | 'done' | 'quiet';

const SURFACE: Record<CardTone, string> = {
  default: 'linear-gradient(175deg, #E6E9FF 0%, #F6E6EC 58%, #FDF0E6 100%)',
  // Finished work steps back rather than shouting. Green, but barely.
  done: 'linear-gradient(175deg, #EDF6F1 0%, #F6FAF7 60%, #FBFCFB 100%)',
  // For something not yet open, which should read as present but not as an invitation.
  quiet: 'linear-gradient(175deg, #F2F2F4 0%, #F7F7F8 60%, #FBFBFB 100%)',
};

export const CardBadge: React.FC<{ children: React.ReactNode; tone?: 'outline' | 'solid' | 'warm' }> = ({
  children,
  tone = 'outline',
}) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium tracking-tight whitespace-nowrap ${
      tone === 'solid'
        ? 'bg-[#0f0f0f] text-white'
        : tone === 'warm'
        ? 'bg-[#F9C74F] text-zinc-900'
        : 'border border-[#0f0f0f]/35 text-zinc-800'
    }`}
  >
    {children}
  </span>
);

interface SurfaceCardProps {
  badges?: React.ReactNode;
  eyebrow?: string;
  title: string;
  body?: string;
  /** Small facts under the body, e.g. "8 courses  ·  about 7 hours". */
  meta?: string;
  /** Pinned to the bottom, full width. */
  action?: React.ReactNode;
  /** A quieter link beneath the action. */
  secondary?: React.ReactNode;
  /** Fine print below everything. */
  note?: string;
  tone?: CardTone;
  onClick?: () => void;
  children?: React.ReactNode;
}

const SurfaceCard: React.FC<SurfaceCardProps> = ({
  badges, eyebrow, title, body, meta, action, secondary, note, tone = 'default', onClick, children,
}) => (
  <article
    onClick={onClick}
    {...(onClick
      ? {
          role: 'button',
          tabIndex: 0,
          onKeyDown: (e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); }
          },
        }
      : {})}
    className={`relative flex flex-col rounded-3xl border border-[#0f0f0f]/20 overflow-hidden transition-all hover:border-[#0f0f0f]/45 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#233DFF]/20 ${
      onClick ? 'cursor-pointer' : ''
    }`}
    style={{ background: SURFACE[tone] }}
  >
    <div className="p-6 flex flex-col gap-4 flex-1">
      {badges && <div className="flex flex-wrap items-center gap-2">{badges}</div>}

      <div className={badges ? 'mt-2' : ''}>
        {eyebrow && (
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">{eyebrow}</p>
        )}
        <h3 className="text-[21px] font-semibold leading-tight tracking-tight text-zinc-900 mt-1.5 text-balance">
          {title}
        </h3>
        {meta && <p className="text-[12px] text-zinc-500 mt-2">{meta}</p>}
      </div>

      {body && <p className="text-[13.5px] leading-relaxed text-zinc-700 flex-1">{body}</p>}
      {children}

      {(action || secondary || note) && (
        <div className="mt-auto pt-2 space-y-3">
          {action}
          {secondary}
          {note && <p className="text-[11.5px] text-zinc-500 leading-relaxed">{note}</p>}
        </div>
      )}
    </div>
  </article>
);

export default SurfaceCard;
