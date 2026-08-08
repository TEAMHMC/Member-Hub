// Demo harness for the Member Hub.
//
// Renders the real portal shell — the same Sidebar, Navbar, Footer and
// ClientDashboard the signed-in Hub uses — with a seeded member, so the Hub
// can be walked through without waiting on an emailed sign-in code.
//
// Two accounts, because they are genuinely different products:
//
//   Maria  a community participant met at a health fair screening. She has a
//          care relationship with HMC, so she sees the Snapshot, Playbook,
//          Results and Resources surfaces.
//
//   Jordan a learner who found the Academy on their own and registered for a
//          pathway. No care relationship, so no screening, no playbook, no
//          results. Per the Academy credential rules, education does not
//          create a clinician-patient relationship and learning records are
//          kept separate from clinical records.
//
// Nothing here is a mock component. The only stand-in is the member record.

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { UserRole, type User } from './types';
import Sidebar from './components/Layout/Sidebar';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ClientDashboard from './components/Dashboards/ClientDashboard';

const ACCOUNTS: Record<string, { label: string; blurb: string; user: User; startTab: string }> = {
  participant: {
    label: 'Community participant',
    blurb: 'Met at a health fair screening',
    startTab: 'dash',
    user: {
      id: 'demo-participant',
      audience: 'care',
      phone: '',
      role: UserRole.CLIENT,
      firstName: 'Maria',
      lastName: 'Delgado',
      email: 'maria.delgado@example.org',
      zipCode: '90011',
      xp: 0,
      level: 1,
      badges: ['Member'],
      hoursLogged: 0,
      shiftsRegistered: 0,
      wellnessPoints: 0,
    },
  },
  learner: {
    label: 'Academy learner',
    blurb: 'Self-registered, learning only',
    startTab: 'dash',
    user: {
      id: 'demo-learner',
      audience: 'learner',
      phone: '',
      role: UserRole.CLIENT,
      firstName: 'Jordan',
      lastName: 'Ellis',
      email: 'jordan.ellis@example.org',
      zipCode: '90045',
      xp: 0,
      level: 1,
      badges: ['Academy Learner'],
      hoursLogged: 0,
      shiftsRegistered: 0,
      wellnessPoints: 0,
    },
  },
};

const Preview: React.FC = () => {
  const [key, setKey] = useState<keyof typeof ACCOUNTS>('participant');
  const [users, setUsers] = useState<Record<string, User>>({
    participant: ACCOUNTS.participant.user,
    learner: ACCOUNTS.learner.user,
  });
  const [tab, setTab] = useState(ACCOUNTS.participant.startTab);

  const user = users[key];

  const switchTo = (k: keyof typeof ACCOUNTS) => {
    setKey(k);
    setTab(ACCOUNTS[k].startTab);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f3ef]">
      {/* Demo account switcher. Not part of the product; it exists so both
          experiences can be shown without two sign-ins. */}
      <div className="bg-[#18181b] text-white px-4 md:px-8 py-2.5 flex flex-wrap items-center gap-3 justify-center sticky top-0 z-[60]">
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Demo account</span>
        {(Object.keys(ACCOUNTS) as (keyof typeof ACCOUNTS)[]).map((k) => (
          <button
            key={k}
            onClick={() => switchTo(k)}
            aria-pressed={key === k}
            className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${
              key === k ? 'bg-[#233DFF] text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {ACCOUNTS[k].label}
          </button>
        ))}
        <span className="text-[11px] text-zinc-500 hidden md:inline">{ACCOUNTS[key].blurb}</span>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row">
        <Sidebar
          key={key}
          role={UserRole.CLIENT}
          audience={user.audience}
          activeTab={tab}
          onTabChange={setTab}
          onLogout={() => switchTo(key === 'participant' ? 'learner' : 'participant')}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <Navbar user={user} />
          <main className="px-4 md:px-8 pb-28 pt-2 flex-1">
            <ClientDashboard
              key={key}
              user={user}
              initialTab={tab}
              onUpdateUser={(d) => setUsers((u) => ({ ...u, [key]: { ...u[key], ...d } }))}
              visitorId={null}
            />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Preview />);
