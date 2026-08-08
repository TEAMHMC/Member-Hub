// Demo harness for the Member Hub. Renders the real portal shell — the same
// Sidebar, Navbar and Footer the signed-in Hub uses — around the real tab
// content, with a seeded demo member so the Academy can be walked through
// without waiting on an emailed sign-in code.
//
// This is the actual product surface, not a mock. The only thing standing in
// for production is the member record.

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { UserRole, type User } from './types';
import Sidebar from './components/Layout/Sidebar';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ClientDashboard from './components/Dashboards/ClientDashboard';

const demoUser: User = {
  id: 'demo-learner',
  phone: '',
  role: UserRole.CLIENT,
  firstName: 'Alex',
  lastName: 'Rivera',
  email: 'alex.rivera@example.org',
  zipCode: '90011',
  xp: 0,
  level: 1,
  badges: ['Member'],
  hoursLogged: 0,
  shiftsRegistered: 0,
  wellnessPoints: 0,
};

const Preview: React.FC = () => {
  const [user, setUser] = useState<User>(demoUser);
  const [tab, setTab] = useState('academy');

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f5f3ef]">
      <Sidebar role={UserRole.CLIENT} activeTab={tab} onTabChange={setTab} onLogout={() => setTab('dash')} />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar user={user} />
        <main className="px-4 md:px-8 pb-28 pt-2 flex-1">
          <ClientDashboard
            user={user}
            initialTab={tab}
            onUpdateUser={(d) => setUser((u) => ({ ...u, ...d }))}
            visitorId={null}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Preview />);
