
import React, { useState, useEffect } from 'react';
import { User, UserRole } from './types';
import Login from './components/Auth/Login';
import ClientDashboard from './components/Dashboards/ClientDashboard';
import StaffDashboard from './components/Dashboards/StaffDashboard';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import { context as ctxApi, client as clientApi } from './services/api';
import SunnyNavigator from './components/Navigator/SunnyNavigator';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [view, setView] = useState<'loading' | 'login' | 'portal'>('loading');
  const [visitorId, setVisitorId] = useState<string | null>(null);

  // Establish the shared first-party visitor identity (hmc_vid) on load so
  // signals are captured before and after sign-in, and the same visitorId is
  // shared with Check Yourself, Calm Kit, Event Finder, and Sunny.
  useEffect(() => {
    ctxApi.hello().then((r) => setVisitorId(r.visitorId)).catch(() => {});
  }, []);
  const [activeTab, setActiveTab] = useState<string>('dash');

  // Restore a session by validating the httpOnly cookie with the backend
  // (source of truth), not by trusting localStorage alone. localStorage only
  // caches non-sensitive UI fields (name, zip, badges) for a fast first paint.
  useEffect(() => {
    const cached = localStorage.getItem('hmc_user');
    clientApi.me()
      .then((me) => {
        const base: User = cached ? JSON.parse(cached) : ({} as User);
        const restored: User = {
          ...base,
          id: base.id || `usr_${Math.random().toString(36).slice(2, 11)}`,
          role: UserRole.CLIENT,
          email: me.email || base.email || '',
          firstName: me.profile?.firstName || base.firstName || 'Member',
          lastName: base.lastName || '',
          phone: base.phone || '',
          zipCode: base.zipCode || '',
          xp: base.xp ?? 0,
          level: base.level ?? 1,
          badges: base.badges || ['Member'],
          hoursLogged: base.hoursLogged ?? 0,
          shiftsRegistered: base.shiftsRegistered ?? 0,
          wellnessPoints: base.wellnessPoints ?? me.credits?.balance ?? 0,
        };
        setCurrentUser(restored);
        localStorage.setItem('hmc_user', JSON.stringify(restored));
        setView('portal');
      })
      .catch(() => {
        // No valid session — require sign-in and drop any stale cache.
        localStorage.removeItem('hmc_user');
        setCurrentUser(null);
        setView('login');
      });
  }, []);

  const handleLogin = (userData: Partial<User>, role: UserRole = UserRole.CLIENT) => {
    const activeUser: User = {
      id: 'usr_' + Math.random().toString(36).slice(2, 11),
      phone: userData.phone || '',
      role: role,
      firstName: userData.firstName || 'Member',
      lastName: userData.lastName || '',
      email: userData.email || '',
      zipCode: userData.zipCode || '',
      xp: 0,
      level: 1,
      badges: ['Member'],
      hoursLogged: 0,
      shiftsRegistered: 0,
      wellnessPoints: 0,
      ...userData
    };
    setCurrentUser(activeUser);
    localStorage.setItem('hmc_user', JSON.stringify(activeUser));
    setView('portal');
    setActiveTab('dash');
  };

  const handleUpdateUser = (data: Partial<User>) => {
    setCurrentUser(prev => {
      if (!prev) return null;
      const updated = { ...prev, ...data };
      localStorage.setItem('hmc_user', JSON.stringify(updated));
      return updated;
    });
  };

  const handleLogout = () => {
    clientApi.logout().catch(() => {});
    localStorage.removeItem('hmc_user');
    setCurrentUser(null);
    setView('login');
    setActiveTab('dash');
  };

  const renderPortalContent = () => {
    if (!currentUser?.role) return null;

    if (currentUser.role === UserRole.CLIENT) {
      return (
        <ClientDashboard
          user={currentUser}
          initialTab={activeTab}
          onUpdateUser={handleUpdateUser}
          visitorId={visitorId}
        />
      );
    }

    if (currentUser.role === UserRole.STAFF || currentUser.role === UserRole.ADMIN) {
      return <StaffDashboard user={currentUser} activeTab={activeTab} />;
    }

    return <div className="p-20 text-center font-black uppercase italic">Access Denied</div>;
  };

  if (view === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f3ef]">
        <div className="flex flex-col items-center gap-4">
          <img src="/hmc-logo.png" alt="Health Matters Clinic" className="w-14 h-14 rounded-2xl animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Loading your hub</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f5f3ef]">
      {view === 'login' && <Login onLogin={handleLogin} />}
      {view === 'portal' && currentUser && (
        <>
          <Sidebar
            role={currentUser.role!}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onLogout={handleLogout}
          />
          <div className="flex-1 flex flex-col min-w-0">
            <Navbar user={currentUser} />
            <main className="px-4 md:px-8 pb-28 pt-2 flex-1">
              {renderPortalContent()}
            </main>
            <Footer />
          </div>
          {currentUser.role === UserRole.CLIENT && (
            <SunnyNavigator visitorId={visitorId} pageTitle={`HMC Member Hub — ${activeTab}`} pageContext={{ tab: activeTab }} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
