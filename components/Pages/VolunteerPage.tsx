import React from 'react';
import { info, type VolunteerInfo, type TrainingModuleInfo } from '../../services/api';
import InfoPage, { Disclosure, Faq, Section, type InfoSection } from './InfoPage';

/**
 * Volunteer with HMC, explained inside the Hub.
 *
 * Everything on it is read from the portal, which builds it from the volunteer application, the training tiers and the
 * program requirements the portal actually runs, so the page describes what happens and nothing else. The only thing
 * that leaves the Hub is the final step: the application itself, where the account is made.
 */

const ModuleList: React.FC<{ modules: Array<TrainingModuleInfo & { alsoBaseline?: boolean }> }> = ({ modules }) => (
  <ul className="space-y-3">
    {modules.map(m => (
      <li key={m.id} className="space-y-0.5">
        <p className="font-semibold text-zinc-900">
          {m.title} <span className="font-normal text-zinc-500">({m.minutes} min)</span>
          {m.alsoBaseline && <span className="ml-2 text-xs font-semibold text-[#233DFF]">Also part of baseline training</span>}
        </p>
        <p className="text-zinc-600">{m.description}</p>
      </li>
    ))}
  </ul>
);

const sections = (d: VolunteerInfo): InfoSection[] => {
  const orient = d.training.tiers[0]?.totalMinutes;
  return [
    {
      id: 'overview', label: 'Overview',
      body: (
        <div className="space-y-10">
          <Section title="Who we are">
            <p className="text-base text-zinc-700 leading-relaxed max-w-3xl">{d.about}</p>
          </Section>
          <Section title="How you can serve" intro="You choose how you want to volunteer when you apply.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {d.formats.map(f => (
                <div key={f.name} className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <p className="text-lg font-semibold text-zinc-900">{f.name}</p>
                  <p className="text-sm text-zinc-600 mt-1">{f.detail}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Before you decide">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-zinc-700">
              <li className="rounded-2xl border border-zinc-200 bg-white p-4">You must be 18 or older.</li>
              <li className="rounded-2xl border border-zinc-200 bg-white p-4">You can apply on your own or with a group.</li>
              {orient ? <li className="rounded-2xl border border-zinc-200 bg-white p-4">Orientation is about {orient} minutes and is part of the application.</li> : null}
              <li className="rounded-2xl border border-zinc-200 bg-white p-4">You can save your application and finish it later.</li>
            </ul>
          </Section>
        </div>
      ),
    },
    {
      id: 'ways', label: 'Ways to serve',
      body: (
        <Section title="Ways to serve" intro="Volunteers contribute through ten service tracks, grouped under five program areas. Some are in the field. Several are not.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {d.programAreas.map(a => (
              <div key={a.id} className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-3">
                <h3 className="text-lg font-semibold text-zinc-900">{a.name}</h3>
                <ul className="flex flex-wrap gap-2">
                  {a.tracks.map(t => <li key={t} className="rounded-full bg-[#233DFF]/5 text-[#233DFF] text-sm font-medium px-3 py-1">{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      ),
    },
    {
      id: 'training', label: 'Training',
      body: (
        <div className="space-y-10">
          <Section title="Training" intro={d.training.summary}>
            <div className="space-y-3">
              {d.training.tiers.map((t, i) => (
                <Disclosure key={t.id} defaultOpen={i === 0} title={t.name} meta={`${t.when}. About ${t.totalMinutes} minutes.`}>
                  <p>{t.unlocks}</p>
                  <ModuleList modules={t.modules} />
                </Disclosure>
              ))}
            </div>
          </Section>
          <Section title="Training for the work you choose" intro="Each kind of program has its own clearance, and the clearance you hold decides which shifts you can sign up for. Open one to see what it includes.">
            <div className="space-y-3">
              {d.training.programs.map(p => (
                <Disclosure key={p.id} title={p.name} meta={`${p.blurb} About ${p.totalMinutes} minutes.`}>
                  <ModuleList modules={p.modules} />
                </Disclosure>
              ))}
            </div>
          </Section>
        </div>
      ),
    },
    {
      id: 'apply', label: 'How to apply',
      body: (
        <div className="space-y-10">
          <Section title="How to apply" intro="The application has eight steps. It saves as you go, so you can leave and come back.">
            <ol className="space-y-3">
              {d.apply.steps.map((s, i) => (
                <li key={s.title} className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-zinc-900 text-white text-sm font-semibold grid place-items-center">{i + 1}</span>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-zinc-900">{s.title}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-sm text-zinc-600">{d.apply.resume}</p>
          </Section>
          <Section title="What you agree to" intro="These come at the Agreements step. Reading them first is a good idea.">
            <ul className="space-y-2 text-sm text-zinc-700 list-disc pl-5">
              {d.apply.agreements.map(a => <li key={a}>{a}</li>)}
            </ul>
          </Section>
        </div>
      ),
    },
    { id: 'faq', label: 'Questions', body: <Section title="Questions"><Faq items={d.faq} /></Section> },
  ];
};

const VolunteerPage: React.FC<{ initialSection?: string }> = ({ initialSection }) => (
  <InfoPage<VolunteerInfo>
    eyebrow="Volunteer"
    load={info.volunteer}
    fallbackHref="https://volunteer.healthmatters.clinic"
    fallbackLabel="Open the volunteer site"
    title={d => d.headline}
    lead={d => d.lead}
    sections={sections}
    initialSection={initialSection}
    cta={{
      heading: 'Ready to apply?',
      text: 'The application opens in the volunteer portal, where you create your account. It saves as you go, so you can start now and finish when you have time.',
      label: 'Start your application',
      href: 'https://volunteer.healthmatters.clinic',
      contact: { label: 'Questions first', email: 'volunteer@healthmatters.clinic' },
    }}
  />
);

export default VolunteerPage;
