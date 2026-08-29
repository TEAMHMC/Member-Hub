
import React, { useState, useEffect } from 'react';
import { User, UserRole } from './types';
import Login from './components/Auth/Login';
import ClientDashboard from './components/Dashboards/ClientDashboard';
import StaffDashboard from './components/Dashboards/StaffDashboard';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import SiteNotice from './components/Layout/SiteNotice';
import { context as ctxApi, client as clientApi } from './services/api';
import SunnyNavigator from './components/Navigator/SunnyNavigator';
import TrainingRegistration from './components/Academy/TrainingRegistration';
import { PATHWAYS } from './components/Academy/catalog';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [view, setView] = useState<'loading' | 'login' | 'portal'>('loading');
  const [visitorId, setVisitorId] = useState<string | null>(null);

  // Public training deep link, e.g. hub.healthmatters.clinic/?training=unstoppable-ce
  // Someone arriving from the Unstoppable site to register for a live training has
  // no Hub account yet. Sending them to a sign-in wall first loses them, so the
  // registration is taken on arrival and the account is created immediately after.
  const [deepLinkCourseId] = useState<string | null>(() => {
    try {
      return new URLSearchParams(window.location.search).get('training');
    } catch {
      return null;
    }
  });
  const deepLinkCourse = React.useMemo(
    () => (deepLinkCourseId ? PATHWAYS.flatMap((p) => p.courses).find((c) => c.id === deepLinkCourseId) : undefined),
    [deepLinkCourseId],
  );
  const [deepLinkDone, setDeepLinkDone] = useState(false);

  // Establish the shared first-party visitor identity (hmc_vid) on load so
  // signals are captured before and after sign-in, and the same visitorId is
  // shared with Check Yourself, Calm Kit, Event Finder, and Sunny.
  useEffect(() => {
    ctxApi.hello().then((r) => setVisitorId(r.visitorId)).catch(() => {});
  }, []);
  const [activeTab, setActiveTab] = useState<string>('dash');

  // Staff see the member experience by default and switch to the console
  // deliberately. Somebody maintaining the Hub needs to look at what a member
  // looks at, and a console that replaces the member view makes that impossible
  // without a second account. The console is a destination, not a different app.
  const [staffView, setStaffView] = useState(false);

  // Restore a session by validating the httpOnly cookie with the backend
  // (source of truth), not by trusting localStorage alone. localStorage only
  // caches non-sensitive UI fields (name, zip, badges) for a fast first paint.
  useEffect(() => {
    const cached = localStorage.getItem('hmc_user');
    clientApi.me()
      .then((me) => {
        const base: User = cached ? JSON.parse(cached) : ({} as User);
        // The role comes from the server. This used to be hardcoded to CLIENT,
        // which is why the staff console below has never been reachable: the
        // routing, the sidebar and the dashboard all existed and no session could
        // ever arrive holding a role that selected them. A member still resolves
        // to CLIENT, because /api/client/me returns staff: null for members.
        const staff = me.staff || null;
        const restored: User = {
          ...base,
          id: base.id || `usr_${Math.random().toString(36).slice(2, 11)}`,
          role: staff ? (staff.isAdmin ? UserRole.ADMIN : UserRole.STAFF) : UserRole.CLIENT,
          staff,
          email: me.email || base.email || '',
          firstName: me.profile?.firstName || base.firstName || (staff ? staff.name : 'Member'),
          lastName: base.lastName || '',
          phone: base.phone || '',
          zipCode: base.zipCode || '',
          xp: base.xp ?? 0,
          level: base.level ?? 1,
          badges: base.badges || ['Member'],
          // From the server, not from the cached copy. The Hub has branched on audience
          // since it was built and nothing ever set it, so every account fell through to
          // the care surfaces. A member who changes it in the portal sees the change on
          // their next load rather than whenever their browser cache happens to clear.
          audience: me.audience || base.audience,
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
      audience: userData.audience,
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

    if (staffView && currentUser.staff) {
      return <StaffDashboard staff={currentUser.staff} onExit={() => setStaffView(false)} />;
    }

    return (
      <ClientDashboard
        user={currentUser}
        initialTab={activeTab}
        onTabChange={setActiveTab}
        onUpdateUser={handleUpdateUser}
        visitorId={visitorId}
      />
    );
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
    // The banner sits outside the layout div rather than inside it. That div is
    // the sidebar layout, a flex row on desktop, so a child would be laid out
    // beside the sidebar instead of above everything.
    <>
      <SiteNotice />
      <div className="min-h-screen flex flex-col lg:flex-row bg-[#f5f3ef]">
      {view === 'login' && <Login onLogin={handleLogin} />}

      {/* Registration is shown over the sign-in screen for an unauthenticated
          deep link, so the learner completes what they came for first. On a
          valid deep link with an unknown course id, nothing is shown and the
          normal sign-in stands rather than a broken modal. */}
      {view === 'login' && deepLinkCourse && !deepLinkDone && (
        <TrainingRegistration
          course={deepLinkCourse}
          member={null}
          onClose={() => setDeepLinkDone(true)}
          onAccountCreated={(email, firstName, lastName) => {
            handleLogin({ email, firstName, lastName, badges: ['Academy Learner'] }, UserRole.CLIENT);
            setActiveTab('academy');
            setDeepLinkDone(true);
          }}
        />
      )}
      {view === 'portal' && currentUser && (
        <>
          <Sidebar
            role={currentUser.role!}
            audience={currentUser.audience}
            activeTab={activeTab}
            onTabChange={(tab) => { setStaffView(false); setActiveTab(tab); }}
            onLogout={handleLogout}
            staff={currentUser.staff}
            staffView={staffView}
            onToggleStaffView={() => setStaffView((v) => !v)}
          />
          <div className="flex-1 flex flex-col min-w-0">
            <Navbar user={currentUser} onNavigateTab={setActiveTab} />
            <main className="px-4 md:px-8 pb-28 pt-2 flex-1">
              {renderPortalContent()}
            </main>
            <Footer />
          </div>
          {!staffView && (
            <SunnyNavigator visitorId={visitorId} pageTitle={`HMC Member Hub — ${activeTab}`} pageContext={{ tab: activeTab }} />
          )}
        </>
      )}
      </div>
    </>
  );
};

export default App;
