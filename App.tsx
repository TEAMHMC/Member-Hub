
import React, { useState, useEffect } from 'react';
import { User, UserRole } from './types';
import Login from './components/Auth/Login';
import ClientDashboard from './components/Dashboards/ClientDashboard';
import StaffDashboard from './components/Dashboards/StaffDashboard';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import { context as ctxApi, client as clientApi } from './services/api';
import SunnyNavigator from './components/Navigator/SunnyNavigator';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [view, setView] = useState<'login' | 'portal'>('login');
  const [visitorId, setVisitorId] = useState<string | null>(null);

  // Establish the shared first-party visitor identity (hmc_vid) on load so
  // signals are captured before and after sign-in, and the same visitorId is
  // shared with Check Yourself, Calm Kit, Event Finder, and Sunny.
  useEffect(() => {
    ctxApi.hello().then((r) => setVisitorId(r.visitorId)).catch(() => {});
  }, []);
  const [activeTab, setActiveTab] = useState<string>('dash');

  // Load user from session if available
  useEffect(() => {
    const savedUser = localStorage.getItem('hmc_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setView('portal');
    }
  }, []);

  const handleLogin = (userData: Partial<User>, role: UserRole = UserRole.CLIENT) => {
    const activeUser: User = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      phone: userData.phone || '000-000-0000',
      role: role,
      firstName: userData.firstName || 'Member',
      lastName: userData.lastName || '',
      email: userData.email || '',
      zipCode: userData.zipCode || '',
      xp: 0,
      level: 1,
      badges: ['New Member'],
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
        />
      );
    }

    if (currentUser.role === UserRole.STAFF || currentUser.role === UserRole.ADMIN) {
      return <StaffDashboard user={currentUser} activeTab={activeTab} />;
    }

    return <div className="p-20 text-center font-black uppercase italic">Access Denied</div>;
  };

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
            <main className="p-4 md:p-8 overflow-y-auto">
              {renderPortalContent()}
            </main>
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
