import React, { useState } from 'react';
import { info, type PartnerInfo } from '../../services/api';
import InfoPage, { Faq, Section, type InfoSection } from './InfoPage';

/**
 * Partner with HMC, explained inside the Hub.
 *
 * Read from the portal, which serves the same partnership types, eligibility and steps the partner site itself uses.
 * An organization can see each way of partnering, who it fits, what it receives and what is asked of it, before it
 * opens an account. Only the account itself lives elsewhere.
 */

const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-2 text-sm text-zinc-700 list-disc pl-5">{items.map(i => <li key={i}>{i}</li>)}</ul>
);

const Types: React.FC<{ d: PartnerInfo }> = ({ d }) => {
  const [id, setId] = useState(d.types[0]?.id);
  const t = d.types.find(x => x.id === id) || d.types[0];
  if (!t) return null;
  return (
    <div className="space-y-5">
      <div role="tablist" aria-label="Ways to partner" className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {d.types.map(x => (
          <button key={x.id} role="tab" aria-selected={x.id === t.id} type="button" onClick={() => setId(x.id)}
            className={`text-left rounded-2xl border p-4 transition-colors ${x.id === t.id ? 'border-[#233DFF] bg-[#233DFF]/5' : 'border-zinc-200 bg-white hover:border-zinc-400'}`}>
            <span className="block text-base font-semibold text-zinc-900">{x.name}</span>
            <span className="block text-sm text-zinc-600 mt-1">{x.tagline}</span>
          </button>
        ))}
      </div>
      <div role="tabpanel" className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-8 space-y-6" data-testid="partner-type">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">{t.name}</h3>
          <p className="text-sm font-semibold text-[#233DFF]">Who it fits</p>
          <p className="text-sm text-zinc-700 leading-relaxed">{t.forWhom}</p>
        </div>
        <p className="text-base text-zinc-700 leading-relaxed">{t.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2"><p className="text-sm font-semibold text-zinc-900">What you get</p><List items={t.youGet} /></div>
          <div className="space-y-2"><p className="text-sm font-semibold text-zinc-900">What we ask</p><List items={t.weAsk} /></div>
        </div>
      </div>
    </div>
  );
};

const sections = (d: PartnerInfo): InfoSection[] => [
  {
    id: 'overview', label: 'Overview',
    body: (
      <Section title="What the network gives you" intro="One account in the HMC Partner Portal. Hold one of these or all four.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {d.capabilities.map(c => (
            <div key={c.label} className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#233DFF]">{c.label}</p>
              <h3 className="text-lg font-semibold text-zinc-900">{c.title}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </Section>
    ),
  },
  {
    id: 'ways', label: 'Ways to partner',
    body: <Section title="Ways to partner" intro="Every partnership runs on the same account, so you can hold more than one and add another later. Choose one to see the detail."><Types d={d} /></Section>,
  },
  {
    id: 'fit', label: 'Is it for us?',
    body: (
      <div className="space-y-10">
        <Section title="Who can partner" intro="Any organization in Los Angeles County whose work touches health, with no existing relationship with HMC needed.">
          <List items={d.eligibility} />
        </Section>
        <Section title="When another door is better">
          <List items={d.notAFit} />
        </Section>
      </div>
    ),
  },
  {
    id: 'how', label: 'How it works',
    body: (
      <Section title="How it works">
        <ol className="space-y-3">
          {d.steps.map(s => (
            <li key={s.number} className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5">
              <span className="shrink-0 w-9 h-9 rounded-full bg-zinc-900 text-white text-sm font-semibold grid place-items-center">{s.number}</span>
              <div className="space-y-1">
                <p className="text-base font-semibold text-zinc-900">{s.title}</p>
                <p className="text-sm text-zinc-600 leading-relaxed">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    ),
  },
  { id: 'faq', label: 'Questions', body: <Section title="Questions"><Faq items={d.faq} /></Section> },
];

const OrganizationsPage: React.FC<{ initialSection?: string }> = ({ initialSection }) => (
  <InfoPage<PartnerInfo>
    eyebrow="For Organizations"
    load={info.partner}
    fallbackHref="https://partner.healthmatters.clinic"
    fallbackLabel="Open the partner site"
    title={d => d.headline}
    lead={d => d.lead}
    sections={sections}
    initialSection={initialSection}
    cta={{
      heading: 'Open the account. List an event this week.',
      text: 'The account opens in the HMC Partner Portal. Nothing to install. If you would rather talk it through first, write to us.',
      label: 'Open a partner account',
      href: 'https://partner.healthmatters.clinic',
      contact: { label: 'Talk it through first', email: 'partner@healthmatters.clinic' },
    }}
  />
);

export default OrganizationsPage;
