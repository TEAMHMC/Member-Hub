
import React, { useState, useEffect, useRef } from 'react';
import { User, Shift, Resource, ServiceEncounter, Referral, Assessment } from '../../types';
import { buildPlanFromScores } from '../../services/plan';
import { context as ctxApi, client as clientApi, referrals as referralsApi, sunny as sunnyApi, toolLink, TOOLS, type HmcEvent, type ClientMe, type NextAction } from '../../services/api';
import { useEvents } from '../../services/hooks';
import Academy from '../Academy/Academy';
import {
  Brain, Calendar, MapPin, Clock, ShieldCheck, GraduationCap,
  ArrowLeft, Users, Activity,
  Zap, ChevronRight, Map as MapIcon, List, Info, CheckCircle2, X,
  Search, Award, FileText, Check, Heart, Smartphone,
  Save, Compass, User as UserIcon, HelpCircle, AlertCircle, Sparkles, ArrowRight
} from 'lucide-react';

interface ClientDashboardProps {
  user: User;
  initialTab?: string;
  /** Keeps the sidebar highlight in sync when navigation happens inside the dashboard. */
  onTabChange?: (tab: string) => void;
  onUpdateUser?: (data: Partial<User>) => void;
  visitorId?: string | null;
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({ user, initialTab = 'dash', onTabChange, onUpdateUser, visitorId = null }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [zipInput, setZipInput] = useState(user.zipCode || '');
  const [mapCenterZip, setMapCenterZip] = useState(user.zipCode || '');
  const [showTour, setShowTour] = useState(false);
  // Which Academy sub-page a Home card asked for.
  const [academyView, setAcademyView] = useState<'catalog' | 'credentials' | 'transcript'>('catalog');
  const [tourStep, setTourStep] = useState(0);
  
  // Member State
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [healthResults, setHealthResults] = useState<ServiceEncounter[]>([]);
  const [loadingAi, setLoadingAi] = useState(false);
  const [dynamicGoals, setDynamicGoals] = useState<any[]>(() => {
    const saved = localStorage.getItem(`hmc_goals_${user.id}`);
    return saved ? JSON.parse(saved) : [];
  });
  // AI-personalized Playbook intro from Sunny (server-side, secure). Cached per member.
  const [aiNarrative, setAiNarrative] = useState<string>(() => localStorage.getItem(`hmc_playbook_intro_${user.id}`) || '');
  // Outcome of each warm-handoff request. This must reflect what the SERVER did,
  // never what we hoped it did. Telling someone in housing or emotional distress
  // that a person will reach out, when nothing was actually created, is the worst
  // failure this product can have.
  const [handoff, setHandoff] = useState<Record<string, 'sending' | 'sent' | 'failed'>>({});

  // Self-serve first: open the Resource Directory searched for the play's category
  // (e.g. Doctor Visits -> Medi-Cal enrollment + low-cost clinics). No referral.
  const openResourcesFor = (category: string) => {
    const q: Record<string, string> = {
      'Housing': 'housing',
      'Food Access': 'food',
      'Emotional Health': 'mental health',
      'Doctor Visits': 'medi-cal enrollment health insurance clinic',
      'Getting Around': 'transportation',
    };
    ctxApi.event('tool_search', { via: 'playbook', query: q[category] || category });
    window.open(toolLink(TOOLS.directory, { q: q[category] || category }, visitorId), '_blank', 'noopener');
  };

  // Explicit "have someone reach out" on a play — the ONLY place a referral is created.
  const connectPlay = async (category: string) => {
    if (handoff[category] === 'sending' || handoff[category] === 'sent') return;
    ctxApi.event('tool_search', { via: 'playbook', query: category });

    // No email means there is no way to route a referral back to this person.
    // Fail loudly rather than showing a confirmation nobody can act on.
    if (!user.email) {
      setHandoff((h) => ({ ...h, [category]: 'failed' }));
      return;
    }

    setHandoff((h) => ({ ...h, [category]: 'sending' }));
    try {
      const res = await referralsApi.submit({
        resourceId: `playbook:${category.toLowerCase().replace(/\s+/g, '-')}`,
        resourceName: `${category} support`,
        memberName: `${user.firstName} ${user.lastName}`.trim() || 'Member',
        memberEmail: user.email,
        memberPhone: user.phone || undefined,
        reasonForReferral: `Member requested a warm handoff for ${category} from their Wellness Playbook.`,
        urgencyLevel: 'routine',
        preferredContactMethod: 'email',
      });
      // The endpoint can answer 200 with { ok: false }. Treat that as a failure.
      if (res && res.ok === false) throw new Error(res.error || 'referral_rejected');
      setHandoff((h) => ({ ...h, [category]: 'sent' }));
      clientApi.me().then(setMe).catch(() => {});
    } catch {
      setHandoff((h) => ({ ...h, [category]: 'failed' }));
    }
  };

  // SDOH Screening State
  const [sdohScores, setSdohScores] = useState<Assessment>({
    housing: 0,
    food: 0,
    transportation: 0,
    healthcare: 0,
    mentalHealth: 0,
    employment: 0,
    safety: 0,
    connection: 0
  });

  const mapRef = useRef<any>(null);

  // ── Live ecosystem data (visitorId comes from App — single hello() handshake) ──
  const { events: liveEvents } = useEvents();          // real Event Finder data
  const [me, setMe] = useState<ClientMe | null>(null); // credits, referrals, next steps
  useEffect(() => {
    clientApi.me().then(setMe).catch(() => setMe(null));
  }, []);
  const nextAction: NextAction | undefined = me?.nextActions?.[0];

  // Check for tour requirement
  useEffect(() => {
    const tourSeen = localStorage.getItem(`hmc_tour_seen_${user.id}`);
    if (!tourSeen && user.badges.includes('First Login')) {
      setShowTour(true);
    }
  }, [user.id, user.badges]);

  const closeTour = () => {
    setShowTour(false);
    localStorage.setItem(`hmc_tour_seen_${user.id}`, 'true');
  };

  const sdohCategories = [
    {
      id: 'housing',
      label: 'Housing',
      description: 'Where do you sleep most nights?',
      options: [
        { label: 'Stable & Safe', score: 0 },
        { label: 'Unstable / Worried', score: 1 },
        { label: 'Struggling / Temporary', score: 2 },
        { label: 'Crisis / Homeless', score: 3 },
      ]
    },
    {
      id: 'food',
      label: 'Food Access',
      description: 'Do you have enough to eat?',
      options: [
        { label: 'Always Secure', score: 0 },
        { label: 'Mostly Secure', score: 1 },
        { label: 'Skipping Meals', score: 2 },
        { label: 'Emergency Need', score: 3 },
      ]
    },
    {
      id: 'mentalHealth',
      label: 'Emotional Health',
      description: 'How have you been feeling lately?',
      options: [
        { label: 'Strong & Balanced', score: 0 },
        { label: 'Stressed / Tense', score: 1 },
        { label: 'Depressed / Heavy', score: 2 },
        { label: 'In Crisis / Hurting', score: 3 },
      ]
    },
    {
      id: 'healthcare',
      label: 'Doctor Visits',
      description: 'Can you get medical care?',
      options: [
        { label: 'Yes, I have a doctor', score: 0 },
        { label: 'I use the ER', score: 1 },
        { label: 'No insurance', score: 2 },
        { label: 'Avoid seeking care', score: 3 },
      ]
    },
    {
      id: 'transportation',
      label: 'Getting Around',
      description: 'How do you get to appointments?',
      options: [
        { label: 'Reliable Car / Bus', score: 0 },
        { label: 'Hard to get around', score: 1 },
        { label: 'No reliable transit', score: 2 },
        { label: 'Homebound', score: 3 },
      ]
    }
  ];

  // Map Initialization
  useEffect(() => {
    let mapInstance: any = null;
    if (activeTab === 'events' && viewMode === 'map') {
      const initMap = () => {
        const mapEl = document.getElementById('event-map');
        if (!mapEl) return;
        const L = (window as any).L;
        if (!L) return;
        if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
        const center: [number, number] = [34.0522, -118.2437];
        mapInstance = L.map('event-map', { zoomControl: false }).setView(center, 11);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; OpenStreetMap'
        }).addTo(mapInstance);
        // Plot real events that carry coordinates.
        const geoEvents = liveEvents.filter((e) => typeof e.lat === 'number' && typeof e.lng === 'number');
        geoEvents.forEach((e) => {
          const m = L.marker([e.lat as number, e.lng as number]).addTo(mapInstance);
          m.bindPopup(`<strong>${e.title}</strong><br/>${[e.dateDisplay || e.date, e.time, e.location].filter(Boolean).join(' · ')}`);
        });
        if (geoEvents.length) {
          const bounds = L.latLngBounds(geoEvents.map((e) => [e.lat, e.lng]));
          mapInstance.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
        }
        mapRef.current = mapInstance;
      };
      const timer = setTimeout(initMap, 200);
      return () => {
        clearTimeout(timer);
        if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
        else if (mapInstance) { mapInstance.remove(); }
      };
    }
  }, [activeTab, viewMode, liveEvents]);

  useEffect(() => { setActiveTab(initialTab); }, [initialTab]);
  // Cards, tool links and lesson handoffs all change the tab from in here. The
  // sidebar owns the highlight, so it has to be told or it goes stale and Home
  // stays lit while the learner is inside the Academy.
  useEffect(() => { onTabChange?.(activeTab); }, [activeTab, onTabChange]);
  // Entering Academy from anywhere other than a credentials card lands on the catalog.
  useEffect(() => { if (activeTab !== 'academy') setAcademyView('catalog'); }, [activeTab]);

  const finishAssessment = async () => {
    setLoadingAi(true);
    // Record the self-check as a real signal so the Navigator remembers it and
    // next-actions can respond (feeds /api/context/next-actions). We do NOT
    // auto-create referrals here — a referral only happens when the member
    // explicitly taps "Get connected" on a play (see connectPlay).
    ctxApi.event('screening_complete', { kind: 'sdoh', scores: sdohScores as any });

    try {
      // Structured plan is derived deterministically from the member's own answers.
      const recommendations = buildPlanFromScores(sdohScores);
      setDynamicGoals(recommendations);
      localStorage.setItem(`hmc_goals_${user.id}`, JSON.stringify(recommendations));

      onUpdateUser?.({
        badges: Array.from(new Set([...(user.badges || []), 'Health Navigator'])),
        wellnessPoints: (user.wellnessPoints || 0) + 200,
        xp: (user.xp || 0) + 100
      });
      // Pull refreshed next-actions / referrals for the plan + home.
      clientApi.me().then(setMe).catch(() => {});
      setActiveTab('game-plan');

      // AI personalization from Sunny (server-side, no exposed key). Non-blocking;
      // the structured Playbook already renders if this is slow or unavailable.
      const focus = recommendations.map((g) => g.category).join(', ');
      sunnyApi
        .chat(
          `I just finished my wellness self-check. My focus areas are: ${focus}. As my Unstoppable wellness coach, write 2 to 3 short, warm, motivating sentences to introduce my Wellness Playbook and encourage my first step. Do not diagnose or give medical advice.`,
          { pageTitle: 'Wellness Playbook', pageContext: { focus } }
        )
        .then((r) => {
          const intro = (r.reply || r.message || '').trim();
          if (intro) {
            setAiNarrative(intro);
            localStorage.setItem(`hmc_playbook_intro_${user.id}`, intro);
          }
        })
        .catch(() => {});
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingAi(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMapSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setMapCenterZip(zipInput);
    setViewMode('map');
  };

  // Next-action CTAs return either external links (tel/sms/http) or internal
  // app paths. This SPA has no router, so internal paths must switch tabs, not
  // navigate the browser (which would reload to a 404 / back to the landing).
  const goHref = (href: string) => {
    if (/^(https?:|tel:|sms:|mailto:)/.test(href)) {
      window.open(href, href.startsWith('http') ? '_blank' : '_self');
      return;
    }
    const map: Record<string, string> = {
      '/': 'dash',
      '/daily-needs': 'resources',
      '/my/referrals': 'profile',
      '/check-in': 'check-yourself',
    };
    setActiveTab(map[href] || 'dash');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Card: React.FC<{ children: React.ReactNode; className?: string; onClick?: (e: any) => void }> = ({ children, className = "", onClick }) => (
    <div
      className={`bg-white rounded-2xl border border-zinc-200/50 shadow-sm p-6 ${className}`}
      onClick={onClick}
      {...(onClick ? { role: 'button', tabIndex: 0, onKeyDown: (e: any) => { if (e.key === 'Enter' || e.key === ' ') onClick(e); } } : {})}
    >
      {children}
    </div>
  );

  // HMC signature buttons: rounded-full, uppercase, tracking-wider, bold
  const ButtonPrimary = ({ children, onClick, disabled = false, className = "" }: any) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-8 py-3.5 bg-[#233DFF] text-white rounded-full font-bold uppercase tracking-wider text-xs transition-all hover:bg-[#1a2acc] active:scale-95 disabled:opacity-50 shadow-md shadow-[#233DFF]/20 inline-flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );

  const ButtonSecondary = ({ children, onClick, className = "" }: any) => (
    <button
      onClick={onClick}
      className={`px-8 py-3.5 border border-zinc-200 bg-white text-zinc-900 rounded-full font-bold uppercase tracking-wider text-xs transition-all hover:bg-zinc-50 active:scale-95 inline-flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );

  const tourSteps = [
    {
      title: "Welcome to your Member Hub",
      description: "Everything you need to manage your health and wellness is now in one place. Let's show you how it works.",
      icon: <Sparkles className="text-amber-400" size={32} />
    },
    {
      title: "Your Wellbeing Snapshot",
      description: "Start here. Tell us about your housing, food, and emotional needs. It's safe, private, and helps us build your plan.",
      icon: <Brain className="text-[#233DFF]" size={32} />
    },
    {
      title: "Your Wellness Playbook",
      description: "Once you finish the check, we build a roadmap from your answers and connect you with local partners who can help.",
      icon: <Compass className="text-[#FF6E40]" size={32} />
    },
    {
      title: "Nearby Events",
      description: "Find free health fairs and clinic dates in your neighborhood to get your blood pressure and vitals verified.",
      icon: <Calendar className="text-[#FF6F91]" size={32} />
    }
  ];

  const renderHome = () => (
    <div className="space-y-12 animate-in fade-in duration-500 max-w-5xl mx-auto py-8">
      <div className="text-center space-y-4">
        <div className="pill pill-blue mx-auto">Member Portal Active</div>
        <h1 className="text-5xl font-semibold tracking-tight text-zinc-900">Hello, {user.firstName}.</h1>
        <p className="text-zinc-500 max-w-md mx-auto leading-relaxed text-lg">You're cleared to serve. Everything you need to manage your wellness is right here.</p>
        <div className="flex flex-wrap gap-4 pt-6 justify-center">
             <ButtonPrimary onClick={() => setActiveTab('check-yourself')}>Start my Snapshot</ButtonPrimary>
             <ButtonSecondary onClick={() => setActiveTab('events')}>Explore Events</ButtonSecondary>
        </div>
        {me && (me.credits.balance > 0 || me.referrals.length > 0) && (
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            {me.credits.balance > 0 && (
              <span className="pill pill-blue">{me.credits.balance} Health Credits</span>
            )}
            {me.referrals.filter((r) => r.status !== 'completed' && r.status !== 'closed').length > 0 && (
              <span className="pill pill-orange">
                {me.referrals.filter((r) => r.status !== 'completed' && r.status !== 'closed').length} referral in progress
              </span>
            )}
          </div>
        )}
      </div>

      {/* Live "your next step" from the rules engine — the Navigator noticing for you */}
      {nextAction && (
        <div className={`rounded-3xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm ${nextAction.id === 'crisis' ? 'bg-[#FF6F91]/10 border border-[#FF6F91]/30' : 'bg-[#18181b] text-white'}`}>
          <div className="space-y-2">
            <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${nextAction.id === 'crisis' ? 'text-[#FF6F91]' : 'text-zinc-400'}`}>Your next step</p>
            <h3 className={`text-2xl font-semibold tracking-tight ${nextAction.id === 'crisis' ? 'text-zinc-900' : 'text-white'}`}>{nextAction.title}</h3>
            <p className={`text-sm ${nextAction.id === 'crisis' ? 'text-zinc-700' : 'text-zinc-400'}`}>{nextAction.body}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <ButtonPrimary onClick={() => { ctxApi.event('tool_open', { from: 'next_action', id: nextAction.id }); goHref(nextAction.cta.href); }}>{nextAction.cta.label}</ButtonPrimary>
            {nextAction.secondary && (
              <ButtonSecondary onClick={() => goHref(nextAction.secondary!.href)}>{nextAction.secondary.label}</ButtonSecondary>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="flex flex-col gap-6 p-8 group hover:border-[#233DFF]/30 transition-all cursor-pointer" onClick={() => setActiveTab('academy')}>
           <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-[#8B6D00] shadow-sm group-hover:bg-[#F9C74F] group-hover:text-zinc-900 transition-all">
              <GraduationCap size={24} />
           </div>
           <div className="space-y-2">
             <h3 className="text-xl font-semibold text-zinc-900">HMC Academy</h3>
             <p className="text-sm text-zinc-500 leading-relaxed">Short courses on wellness, keeping your coverage, and community power.</p>
           </div>
           <ButtonSecondary onClick={(e: any) => { e.stopPropagation(); setActiveTab('academy'); }} className="w-full">Start learning</ButtonSecondary>
        </Card>
        <Card className="flex flex-col gap-6 p-8 group hover:border-[#233DFF]/30 transition-all cursor-pointer" onClick={() => setActiveTab('game-plan')}>
           <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#233DFF] shadow-sm group-hover:bg-[#233DFF] group-hover:text-white transition-all">
              <Compass size={24} />
           </div>
           <div className="space-y-2">
             <h3 className="text-xl font-semibold text-zinc-900">Wellness Playbook</h3>
             <p className="text-sm text-zinc-500 leading-relaxed">Your AI-powered roadmap to recovery and local community resources.</p>
           </div>
           <ButtonSecondary onClick={(e: any) => { e.stopPropagation(); setActiveTab('game-plan'); }} className="w-full">Open Playbook</ButtonSecondary>
        </Card>
        <Card className="flex flex-col gap-6 p-8 group hover:border-[#FF6E40]/30 transition-all cursor-pointer" onClick={() => setActiveTab('events')}>
           <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6E40] shadow-sm group-hover:bg-[#FF6E40] group-hover:text-white transition-all">
              <Calendar size={24} />
           </div>
           <div className="space-y-2">
             <h3 className="text-xl font-semibold text-zinc-900">Upcoming Events</h3>
             <p className="text-sm text-zinc-500 leading-relaxed">Screenings and health fairs happening this week in your neighborhood.</p>
           </div>
           <ButtonSecondary onClick={(e: any) => { e.stopPropagation(); setActiveTab('events'); }} className="w-full">View Calendar</ButtonSecondary>
        </Card>
        <Card className="flex flex-col gap-6 p-8 group hover:border-[#FF6F91]/30 transition-all cursor-pointer" onClick={() => setActiveTab('health')}>
           <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-[#FF6F91] shadow-sm group-hover:bg-[#FF6F91] group-hover:text-white transition-all">
              <Activity size={24} />
           </div>
           <div className="space-y-2">
             <h3 className="text-xl font-semibold text-zinc-900">Latest Results</h3>
             <p className="text-sm text-zinc-500 leading-relaxed">Securely access your blood pressure, vitals, and provider notes.</p>
           </div>
           <ButtonSecondary onClick={(e: any) => { e.stopPropagation(); setActiveTab('health'); }} className="w-full">Open Results</ButtonSecondary>
        </Card>
      </div>
    </div>
  );

  const renderGamePlan = () => (
    <div className="max-w-6xl mx-auto py-10 space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-3">
         <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">Wellness Playbook</h2>
         <p className="text-zinc-500 text-lg">A step-by-step guide to your unstoppable wellness.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-10">
          <div className="bg-[#18181b] rounded-2xl p-10 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#233DFF]/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="space-y-3 relative z-10">
               <div className="flex items-center gap-2">
                 <h3 className="text-2xl font-semibold tracking-tight">Stay Unstoppable.</h3>
                 {aiNarrative && <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-white bg-[#233DFF] px-2 py-0.5 rounded-full"><Sparkles size={10} /> Sunny</span>}
               </div>
               <p className="text-zinc-300 text-sm font-medium leading-relaxed max-w-xl">
                 {aiNarrative || 'Your Playbook is built from your Wellbeing Snapshot. Take the first play today.'}
               </p>
            </div>
          </div>

          <div className="space-y-6">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Your next plays</h4>
             <div className="space-y-3">
               {[
                 { title: 'Complete your Wellbeing Snapshot', done: dynamicGoals.length > 0, tab: 'check-yourself', cta: 'Start' },
                 { title: 'Get connected to support', done: (me?.referrals?.length || 0) > 0, tab: 'resources', cta: 'Get connected' },
                 { title: 'Find an event near you', done: false, tab: 'events', cta: 'Browse events' },
               ].map((s, i) => (
                 <button
                   key={i}
                   onClick={() => { setActiveTab(s.tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                   className={`w-full text-left flex items-center justify-between p-5 px-6 rounded-2xl border transition-all ${s.done ? 'bg-zinc-50/50 border-zinc-100' : 'bg-white border-zinc-200 hover:border-[#233DFF]/40 hover:shadow-sm'}`}
                 >
                   <div className="flex items-center gap-5">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm border shrink-0 ${s.done ? 'bg-emerald-50 text-emerald-500 border-emerald-100' : 'bg-blue-50 text-[#233DFF] border-blue-100'}`}>
                         {s.done ? <Check size={20} strokeWidth={3} /> : <ArrowRight size={18} />}
                      </div>
                      <span className={`text-sm font-semibold ${s.done ? 'text-zinc-400' : 'text-zinc-800'}`}>{s.title}</span>
                   </div>
                   <span className={`text-[10px] font-bold uppercase tracking-widest shrink-0 ${s.done ? 'text-emerald-500' : 'text-[#233DFF]'}`}>{s.done ? 'Done' : s.cta}</span>
                 </button>
               ))}
             </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Your Plays</h4>
          <div className="space-y-4">
            {dynamicGoals.length > 0 ? (
              dynamicGoals.map((goal, i) => {
                const status = handoff[goal.category];
                return (
                <Card key={i} className="space-y-4 p-7">
                  <div className="flex items-center justify-between gap-3">
                    <h5 className="text-base font-semibold text-zinc-900">{goal.category}</h5>
                    {goal.urgency === 'High' && <span className="pill pill-orange">Urgent</span>}
                  </div>
                  <p className="text-base font-bold text-zinc-900 leading-snug">"{goal.suggestedGoal}"</p>
                  <p className="text-[12px] text-zinc-500 leading-relaxed">{goal.recommendation}</p>
                  <div className="pt-3 border-t border-zinc-100 space-y-2">
                    {/* Self-serve first: find resources / enrollment info yourself */}
                    <ButtonPrimary onClick={() => openResourcesFor(goal.category)} className="w-full">Find resources</ButtonPrimary>
                    {status === 'sent' ? (
                      <div className="flex items-center justify-center gap-2 text-emerald-600 text-[11px] font-bold uppercase tracking-wider py-1">
                        <Check size={14} strokeWidth={3} /> Request received. A team member will reach out.
                      </div>
                    ) : status === 'sending' ? (
                      <div className="flex items-center justify-center gap-2 text-zinc-400 text-[11px] font-bold uppercase tracking-wider py-1">
                        Sending your request
                      </div>
                    ) : status === 'failed' ? (
                      /* Never leave someone believing help is coming when it is not.
                         Give them a route they can act on right now. */
                      <div className="rounded-xl bg-[#FF6F91]/10 border border-[#FF6F91]/30 p-4 space-y-2">
                        <p className="text-[12px] font-semibold text-zinc-900">
                          We could not send that request.
                        </p>
                        <p className="text-[12px] text-zinc-700 leading-relaxed">
                          Please call HMC at{' '}
                          <a href="tel:+13239904325" className="font-bold text-[#233DFF] underline">(323) 990-4325</a>{' '}
                          or email{' '}
                          <a href="mailto:contact@healthmatters.clinic" className="font-bold text-[#233DFF] underline">contact@healthmatters.clinic</a>.
                          If this is an emergency, call or text{' '}
                          <a href="sms:988" className="font-bold text-[#FF6F91] underline">988</a>.
                        </p>
                        <button onClick={() => connectPlay(goal.category)} className="text-[11px] font-bold uppercase tracking-wider text-[#233DFF]">
                          Try again
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => connectPlay(goal.category)} className="w-full text-[11px] font-bold uppercase tracking-wider text-zinc-500 hover:text-[#233DFF] py-1">
                        Or have someone reach out to me
                      </button>
                    )}
                  </div>
                </Card>
                );
              })
            ) : (
              <Card className="text-center py-20 space-y-6 bg-zinc-50/50 border-dashed border-zinc-200">
                 <Brain size={48} className="mx-auto text-zinc-200" strokeWidth={1} />
                 <div className="space-y-2">
                   <p className="text-sm font-semibold text-zinc-600">Finish your Wellbeing Snapshot</p>
                   <p className="text-xs text-zinc-400 max-w-[180px] mx-auto leading-relaxed">This will unlock your personalized health insights and local resources.</p>
                 </div>
                 <ButtonPrimary onClick={() => setActiveTab('check-yourself')} className="px-10">Start my Snapshot</ButtonPrimary>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreener = () => (
    <div className="max-w-3xl mx-auto py-10 animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4 mb-12">
        <div className="pill pill-blue mx-auto">Safe & Confidential</div>
        <h2 className="text-4xl font-semibold tracking-tight">Wellbeing Snapshot</h2>
        <p className="text-zinc-500 max-w-md mx-auto text-lg leading-relaxed">Help us understand your needs so we can connect you with the right support partners.</p>
      </div>

      {/* Clinical mental-health screen lives in the Check Yourself tool.
          Deep-linked with the shared visitorId so scores flow back to the Navigator. */}
      <a
        href={toolLink(TOOLS.checkYourself, {}, visitorId)}
        target="_blank"
        rel="noreferrer"
        onClick={() => ctxApi.event('screening_view', { tool: 'check-yourself' })}
        className="flex items-center justify-between gap-4 rounded-2xl border border-[#233DFF]/20 bg-blue-50/40 p-5 mb-10 hover:border-[#233DFF]/40 transition-all"
      >
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-[#233DFF] shrink-0 shadow-sm">
            <Brain size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900">Check Yourself &mdash; free mental health screening</p>
            <p className="text-xs text-zinc-500 mt-1">A private, culturally-attuned check-in on how you are really doing. About 3 minutes, no judgment. Get a plain-language summary you can share with a provider.</p>
          </div>
        </div>
        <ChevronRight size={18} className="text-[#233DFF] shrink-0" />
      </a>

      <div className="space-y-12 pb-24">
        {sdohCategories.map((cat) => (
          <div key={cat.id} className="space-y-5">
            <div className="flex items-baseline justify-between gap-4 border-b border-zinc-100 pb-2">
              <h4 className="font-semibold text-xl text-zinc-900">{cat.label}</h4>
              <span className="text-[11px] text-zinc-400 font-bold uppercase tracking-widest">{cat.description}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.options.map((opt) => {
                const isSelected = (sdohScores as any)[cat.id] === opt.score;
                return (
                  <button
                    key={opt.label}
                    onClick={() => setSdohScores(prev => ({ ...prev, [cat.id]: opt.score }))}
                    className={`p-5 rounded-2xl border transition-all text-left flex items-center justify-between ${isSelected ? 'border-[#233DFF] bg-blue-50/50 shadow-sm ring-1 ring-[#233DFF]/10' : 'border-zinc-200 bg-white hover:border-zinc-300 shadow-sm'}`}
                  >
                    <span className={`text-sm font-semibold ${isSelected ? 'text-[#233DFF]' : 'text-zinc-600'}`}>{opt.label}</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-[#233DFF] border-[#233DFF] text-white' : 'border-zinc-100 bg-zinc-50'}`}>
                      {isSelected && <Check size={12} strokeWidth={4} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        
        <div className="pt-12 border-t border-zinc-100 flex flex-col items-center gap-6">
          <ButtonPrimary onClick={finishAssessment} disabled={loadingAi} className="w-full md:w-auto px-16 h-[60px] text-lg">
            {loadingAi ? 'Building your Playbook...' : 'Build My Wellness Playbook'}
          </ButtonPrimary>
          <div className="flex items-center gap-2 text-zinc-400">
             <ShieldCheck size={16} />
             <p className="text-[11px] font-semibold uppercase tracking-wider">Privacy & HIPAA Compliant</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHealthResults = () => (
    <div className="max-w-4xl mx-auto py-10 space-y-10 animate-in fade-in duration-500 text-left">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-semibold tracking-tight">Latest Results</h2>
        <p className="text-zinc-500 text-lg">Your clinical screening history and health metrics.</p>
      </div>
      <Card className="text-center py-24 space-y-6 bg-zinc-50/30 border-dashed border-zinc-200">
         <div className="w-20 h-20 rounded-full bg-white border border-zinc-100 flex items-center justify-center text-zinc-200 mx-auto shadow-sm">
            <Activity size={40} strokeWidth={1} />
         </div>
         <div className="space-y-2">
            <p className="text-xl font-semibold text-zinc-900">No screenings recorded yet</p>
            <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">Attend an HMC Health Fair to get your first official blood pressure and vitals reading.</p>
         </div>
         <ButtonPrimary onClick={() => setActiveTab('events')} className="px-12">Browse Fair Schedule</ButtonPrimary>
      </Card>
    </div>
  );

  const renderEvents = () => (
    <div className="max-w-6xl mx-auto py-10 space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-3">
         <div className="pill pill-blue mx-auto">Health Matters Local</div>
         <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">Nearby Events</h2>
         <p className="text-zinc-500 text-lg">Find health screenings, wellness fairs, and community meetups.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
         <form onSubmit={handleMapSearch} className="flex-1 w-full relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#233DFF] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Enter your zip code..." 
              className="w-full pl-14 pr-6 py-4 bg-white border border-zinc-200 rounded-3xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-200 transition-all text-base font-medium shadow-sm"
              value={zipInput}
              onChange={(e) => setZipInput(e.target.value)}
            />
         </form>
         <div className="flex bg-white border border-zinc-100 p-1.5 rounded-[20px] shrink-0 shadow-sm">
            <button onClick={() => setViewMode('list')} className={`px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${viewMode === 'list' ? 'bg-[#233DFF] text-white shadow-md' : 'text-zinc-500 hover:text-zinc-900'}`}><List size={16} className="inline mr-2" /> List</button>
            <button onClick={() => setViewMode('map')} className={`px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${viewMode === 'map' ? 'bg-[#233DFF] text-white shadow-md' : 'text-zinc-500 hover:text-zinc-900'}`}><MapIcon size={16} className="inline mr-2" /> Map</button>
         </div>
      </div>

      <div className="h-[580px] w-full bg-white border border-zinc-200 rounded-3xl overflow-hidden relative shadow-md">
         <div id="event-map" className="h-full w-full"></div>
         {viewMode === 'list' && (
           <div className="absolute inset-0 bg-white/95 z-20 p-6 md:p-10 overflow-y-auto">
              {liveEvents.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-6 max-w-sm animate-in zoom-in-95 duration-300">
                    <Calendar size={80} className="mx-auto text-zinc-200" strokeWidth={1} />
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-zinc-900">Loading upcoming events</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">Pulling the latest from the Health Matters Clinic event calendar. Or view the full calendar below.</p>
                    </div>
                    <a href={TOOLS.eventFinder} target="_blank" rel="noreferrer">
                      <ButtonSecondary className="px-10">Open Event Finder</ButtonSecondary>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 max-w-3xl mx-auto">
                  {liveEvents.map((ev: HmcEvent) => (
                    <a
                      key={ev.id}
                      href={toolLink(ev.rsvpUrl || ev.url || TOOLS.eventFinder, { event: ev.id }, visitorId)}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => ctxApi.event('event_view', { eventId: ev.id, title: ev.title })}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-5 hover:border-[#233DFF]/40 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center text-[#233DFF] shrink-0">
                          <Calendar size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-zinc-900">{ev.title}</p>
                          <p className="text-xs text-zinc-500 mt-1">
                            {[ev.dateDisplay || ev.date, ev.time, ev.location].filter(Boolean).join(' · ') || 'See details'}
                          </p>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-zinc-300 shrink-0" />
                    </a>
                  ))}
                  <div className="pt-2 text-center">
                    <a href={TOOLS.eventFinder} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-[#233DFF] hover:underline">
                      View full calendar
                    </a>
                  </div>
                </div>
              )}
           </div>
         )}
      </div>
    </div>
  );

  const renderResources = () => (
    <div className="max-w-5xl mx-auto py-10 space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-3">
        <div className="pill pill-blue mx-auto">Support Pathways</div>
        <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">Resources &amp; support</h2>
        <p className="text-zinc-500 text-lg">Food, housing, safety, healthcare, and community connection near you.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href={toolLink(TOOLS.directory, {}, visitorId)} target="_blank" rel="noreferrer"
           onClick={() => ctxApi.event('tool_open', { tool: 'resource-directory' })}
           className="group">
          <Card className="h-full flex flex-col gap-4 p-8 group-hover:border-[#233DFF]/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#233DFF]"><Search size={24} /></div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-zinc-900">Search the Resource Directory</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">290+ vetted LA County community resources: food, housing, legal aid, mental health, and more.</p>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#233DFF]">Open directory</span>
          </Card>
        </a>
        <div>
          <Card className="h-full flex flex-col gap-4 p-8">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6E40]"><Heart size={24} /></div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-zinc-900">Request a warm handoff</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Take the Wellbeing Snapshot and we will connect you with a real person for the needs you flag.</p>
            </div>
            <ButtonPrimary onClick={() => setActiveTab('check-yourself')} className="w-full md:w-auto">Start my Snapshot</ButtonPrimary>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="max-w-3xl mx-auto py-10 space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">Your profile</h2>
        <p className="text-zinc-500 text-lg">Your account and progress.</p>
      </div>
      <Card className="p-8 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#233DFF] text-white flex items-center justify-center text-2xl font-black">
            {(user.firstName || 'M').charAt(0)}
          </div>
          <div>
            <p className="text-xl font-semibold text-zinc-900">{user.firstName} {user.lastName}</p>
            <p className="text-sm text-zinc-500">{user.email || 'No email on file'}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-100">
          <div><p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Health Credits</p><p className="text-2xl font-semibold text-zinc-900">{me?.credits.balance ?? 0}</p></div>
          <div><p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Wellness Points</p><p className="text-2xl font-semibold text-zinc-900">{user.wellnessPoints ?? 0}</p></div>
          <div><p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Zip</p><p className="text-2xl font-semibold text-zinc-900">{user.zipCode || '--'}</p></div>
        </div>
        {user.badges?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {user.badges.map((b) => <span key={b} className="pill pill-yellow">{b}</span>)}
          </div>
        )}
      </Card>
    </div>
  );

  const renderAcademy = () => (
    <Academy
      initialView={academyView}
      userId={user.id}
      memberName={`${user.firstName} ${user.lastName}`.trim() || 'Member'}
      onNavigateTab={(tab) => { setActiveTab(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      onSignal={(type, payload) => ctxApi.event(type, payload)}
    />
  );

  // A learner has no care relationship, so the screening, playbook and results
  // surfaces do not exist for them. Home is the Academy front door instead.
  const renderLearnerHome = () => (
    <div className="space-y-12 animate-in fade-in duration-500 max-w-5xl mx-auto py-8">
      <div className="text-center space-y-4">
        <div className="pill pill-blue mx-auto">Academy Learner</div>
        <h1 className="text-5xl font-semibold tracking-tight text-zinc-900">Welcome, {user.firstName}.</h1>
        <p className="text-zinc-500 max-w-lg mx-auto leading-relaxed text-lg">
          You are registered for the HMC Health and Education Pathways Academy. Everything is
          self-paced, text-first, and free.
        </p>
        <div className="flex flex-wrap gap-4 pt-6 justify-center">
          <ButtonPrimary onClick={() => setActiveTab('academy')}>Go to my pathway</ButtonPrimary>
          <ButtonSecondary onClick={() => setActiveTab('events')}>Browse events</ButtonSecondary>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="flex flex-col gap-6 p-8 group hover:border-[#233DFF]/30 transition-all cursor-pointer" onClick={() => setActiveTab('academy')}>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-[#8B6D00] shadow-sm group-hover:bg-[#F9C74F] group-hover:text-zinc-900 transition-all">
            <GraduationCap size={24} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-zinc-900">Continue learning</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Pick up your pathway where you left off, or browse the full catalog.</p>
          </div>
          <ButtonSecondary onClick={(e: any) => { e.stopPropagation(); setActiveTab('academy'); }} className="w-full">Open Academy</ButtonSecondary>
        </Card>
        <Card className="flex flex-col gap-6 p-8 group hover:border-[#233DFF]/30 transition-all cursor-pointer" onClick={() => { setAcademyView('credentials'); setActiveTab('academy'); }}>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#233DFF] shadow-sm group-hover:bg-[#233DFF] group-hover:text-white transition-all">
            <Award size={24} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-zinc-900">Credentials</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">See what each HMC completion record proves, what it requires, and how it is verified.</p>
          </div>
          <ButtonSecondary onClick={(e: any) => { e.stopPropagation(); setAcademyView('credentials'); setActiveTab('academy'); }} className="w-full">Browse credentials</ButtonSecondary>
        </Card>
        <Card className="flex flex-col gap-6 p-8 group hover:border-[#FF6E40]/30 transition-all cursor-pointer" onClick={() => setActiveTab('events')}>
          <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6E40] shadow-sm group-hover:bg-[#FF6E40] group-hover:text-white transition-all">
            <Calendar size={24} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-zinc-900">Learn in the field</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Applied pathways are completed at real HMC outreach events across LA County.</p>
          </div>
          <ButtonSecondary onClick={(e: any) => { e.stopPropagation(); setActiveTab('events'); }} className="w-full">View calendar</ButtonSecondary>
        </Card>
      </div>

      <div className="rounded-2xl border border-zinc-200/60 bg-white p-7 space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Your learning record</p>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Academy records are kept separately from clinical and client records. Registering for a
          pathway does not create a clinician-patient relationship with Health Matters Clinic.
        </p>
      </div>
    </div>
  );

  const LEARNER_TABS = ['dash', 'academy', 'events', 'profile'];

  const renderContent = () => {
    // Care-only surfaces are not reachable for a learner account.
    if (user.audience === 'learner' && !LEARNER_TABS.includes(activeTab)) {
      return renderAcademy();
    }
    if (user.audience === 'learner' && activeTab === 'dash') return renderLearnerHome();

    switch (activeTab) {
      case 'academy': return renderAcademy();
      case 'events': return renderEvents();
      case 'health': return renderHealthResults();
      case 'game-plan': return renderGamePlan();
      case 'check-yourself': return renderScreener();
      case 'resources': return renderResources();
      case 'profile': return renderProfile();
      case 'dash': default: return renderHome();
    }
  };

  return (
    <div className="w-full">
      {activeTab !== 'dash' && activeTab !== 'check-yourself' && activeTab !== 'academy' && (
        <div className="max-w-6xl mx-auto pt-2 flex mb-2">
          <button onClick={() => setActiveTab('dash')} className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 font-bold text-xs uppercase tracking-widest transition-colors px-2 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
          </button>
        </div>
      )}
      {renderContent()}

      {/* Welcome Tour Overlay */}
      {showTour && (
        <div className="fixed inset-0 z-[100] bg-zinc-900/60 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
           <div className="bg-white max-w-lg w-full rounded-[32px] p-10 space-y-8 animate-in zoom-in-95 duration-500 shadow-2xl relative">
              <div className="flex justify-center">
                 <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center shadow-sm">
                    {tourSteps[tourStep].icon}
                 </div>
              </div>
              
              <div className="text-center space-y-3">
                 <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">{tourSteps[tourStep].title}</h2>
                 <p className="text-zinc-500 leading-relaxed text-base">{tourSteps[tourStep].description}</p>
              </div>

              <div className="flex items-center justify-center gap-2">
                 {tourSteps.map((_, i) => (
                   <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === tourStep ? 'w-8 bg-[#233DFF]' : 'w-1.5 bg-zinc-200'}`} />
                 ))}
              </div>

              <div className="flex flex-col gap-3">
                {tourStep < tourSteps.length - 1 ? (
                  <ButtonPrimary onClick={() => setTourStep(tourStep + 1)} className="w-full h-[56px]">
                    Next <ArrowRight size={18} />
                  </ButtonPrimary>
                ) : (
                  <ButtonPrimary onClick={closeTour} className="w-full h-[56px]">
                    Get Started
                  </ButtonPrimary>
                )}
                <button onClick={closeTour} className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest hover:text-zinc-900 transition-colors">Skip intro</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default ClientDashboard;
