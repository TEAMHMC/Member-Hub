
import React from 'react';
import { UserRole, type Audience, type StaffStanding } from '../../types';
import {
  Home, Calendar,
  LogOut, LogIn, Compass, ShieldCheck, Activity, Brain, GraduationCap,
  SlidersHorizontal, Eye, Coins,
  User as UserIcon
} from 'lucide-react';

interface SidebarProps {
  role: UserRole;
  audience?: Audience;
  /** Nobody is signed in. The nav shows what can be read without an account. */
  guest?: boolean;
  onSignIn?: () => void;
  activeTab: string;
  onTabChange: (id: string) => void;
  onLogout: () => void;
  /** Present only for staff. Adds the console entry; changes nothing else. */
  staff?: StaffStanding | null;
  staffView?: boolean;
  onToggleStaffView?: () => void;
  /**
   * Whether this member has screening results to look at. Undefined while the answer
   * is still in flight, so Results does not appear and then vanish.
   */
  hasResults?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  audience = 'care', activeTab, onTabChange, onLogout, guest = false, onSignIn,
  staff = null, staffView = false, onToggleStaffView, hasResults,
}) => {
  // Navigation is the member's navigation, for everybody. It used to branch on
  // role, and the staff branch offered an Operations and a Tasks tab that no
  // dashboard ever rendered. Staff browse the Hub as members and reach the
  // console through the button below, so there is one set of surfaces to keep
  // working and staff see the same thing members see.
  const getNavItems = () => {
    // What anybody can read without an account. The Hub used to answer every route with a
    // sign-in wall, so somebody sent a link to a course or an event landed on a form and
    // could not see the thing they were sent. These four are readable; acting on any of
    // them still asks for an account at the moment it is needed.
    if (guest) {
      return [
        { icon: <Home size={18} />, label: 'Home', id: 'dash' },
        { icon: <GraduationCap size={18} />, label: 'Academy', id: 'academy' },
        { icon: <Calendar size={18} />, label: 'Events', id: 'events' },
        { icon: <ShieldCheck size={18} />, label: 'Resources', id: 'resources' },
      ];
    }
    // A learner has no care relationship with HMC, so the screening,
    // playbook, and results surfaces are not shown at all.
    if (audience === 'learner') {
      return [
        { icon: <Home size={18} />, label: 'Home', id: 'dash' },
        { icon: <GraduationCap size={18} />, label: 'Academy', id: 'academy' },
        { icon: <Calendar size={18} />, label: 'Events', id: 'events' },
        { icon: <Coins size={18} />, label: 'Credits', id: 'credits' },
      ];
    }
    /**
     * Results appears only for a member who has some.
     *
     * A screening result exists for somebody who was seen at a health fair or an outreach
     * event, which is a minority of members. It used to sit in the nav for everybody and
     * open a permanently empty screen promising blood pressure, vitals and provider notes,
     * so most people met a room that could never have anything in it.
     */
    return [
      { icon: <Home size={18} />, label: 'Home', id: 'dash' },
      { icon: <GraduationCap size={18} />, label: 'Academy', id: 'academy' },
      { icon: <Calendar size={18} />, label: 'Events', id: 'events' },
      // One Playbook, not a Snapshot and a Playbook.
      //
      // These were two nav items for one flow. "Wellbeing Snapshot" was the set of
      // questions and "Wellness Playbook" was the plan those questions produce, and
      // nothing on either screen said so, so the Hub asked people to tell apart two
      // invented names for two halves of the same thing. The questions now live inside
      // the Playbook, which is what a member is actually there for.
      { icon: <Compass size={18} />, label: 'Playbook', id: 'game-plan' },
      ...(hasResults ? [{ icon: <Activity size={18} />, label: 'Results', id: 'health' }] : []),
      { icon: <ShieldCheck size={18} />, label: 'Resources', id: 'resources' },
      { icon: <Coins size={18} />, label: 'Credits', id: 'credits' },
    ];
  };

  const items = getNavItems();

  // One control, two directions, so it is always obvious which view is showing.
  const staffToggle = (compact = false) => {
    if (!staff || !onToggleStaffView) return null;
    return (
      <button
        onClick={onToggleStaffView}
        className={`flex items-center gap-3 rounded-full transition-all font-bold uppercase tracking-wider text-[11px] whitespace-nowrap ${
          compact ? 'px-4 py-2.5 shrink-0' : 'w-full px-4 py-3'
        } ${staffView ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-900 hover:bg-white/60'}`}
      >
        {staffView ? <Eye size={compact ? 16 : 18} /> : <SlidersHorizontal size={compact ? 16 : 18} />}
        {staffView ? 'Member view' : 'Manage hub'}
      </button>
    );
  };

  const navButton = (item: { icon: React.ReactNode; label: string; id: string }, horizontal = false) => (
    <button
      key={item.id}
      onClick={() => onTabChange(item.id)}
      className={`flex items-center gap-3 rounded-full transition-all font-bold uppercase tracking-wider text-[11px] whitespace-nowrap ${horizontal ? 'px-4 py-2.5 shrink-0' : 'w-full px-4 py-3'} ${
        activeTab === item.id
          ? 'bg-[#233DFF] text-white shadow-md shadow-[#233DFF]/20'
          : 'text-zinc-500 hover:text-zinc-900 hover:bg-white/60'
      }`}
    >
      <span className={activeTab === item.id ? 'text-white' : 'text-zinc-400'}>{item.icon}</span>
      {item.label}
    </button>
  );

  const Brand = (
    <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange('dash')}>
      <img src="/hmc-logo.png" alt="Health Matters Clinic" className="w-9 h-9 rounded-xl shadow-sm shrink-0" />
      <div className="flex flex-col">
        <span className="text-base font-black tracking-tighter uppercase italic text-zinc-900 leading-none">Member Hub</span>
        <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest mt-1">Health Matters Clinic</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile / narrow: solid top bar with horizontal nav (never overlaps content) */}
      <div className="lg:hidden sticky top-0 z-50 bg-[#f5f3ef]/95 backdrop-blur border-b border-zinc-200/70">
        <div className="flex items-center justify-between px-4 py-3">
          {Brand}
          {guest ? (
            <button onClick={onSignIn} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#233DFF]">
              <LogIn size={16} /> Sign In
            </button>
          ) : (
            <button onClick={onLogout} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#FF6E40]">
              <LogOut size={16} /> Sign Out
            </button>
          )}
        </div>
        <nav className="flex gap-2 overflow-x-auto px-4 pb-3 no-scrollbar">
          {items.map((item) => navButton(item, true))}
          {!guest && (
            <button
              onClick={() => onTabChange('profile')}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 shrink-0 font-bold uppercase tracking-wider text-[11px] ${activeTab === 'profile' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:bg-white/60'}`}
            >
              <UserIcon size={16} /> Profile
            </button>
          )}
          {staffToggle(true)}
        </nav>
      </div>

      {/* Desktop: fixed-width vertical sidebar, solid background, own scroll */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col h-screen sticky top-0 z-40 bg-[#f5f3ef] border-r border-zinc-200/70">
        <div className="p-8">{Brand}</div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <p className="px-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Explore</p>
          {items.map((item) => navButton(item))}

          {staff && (
            <div className="pt-6">
              <p className="px-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Staff</p>
              {staffToggle()}
              <p className="px-4 pt-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                {staff.role}
              </p>
            </div>
          )}
        </nav>

        <div className="p-6 border-t border-zinc-200/70 space-y-1">
          {!guest && (
            <button
              onClick={() => onTabChange('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all font-bold uppercase tracking-wider text-[11px] ${activeTab === 'profile' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-900 hover:bg-white/60'}`}
            >
              <UserIcon size={18} /> Profile
            </button>
          )}
          {guest ? (
            <button
              onClick={onSignIn}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all font-bold uppercase tracking-wider text-[11px] text-[#233DFF] hover:bg-blue-50/60"
            >
              <LogIn size={18} /> Sign In
            </button>
          ) : (
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all font-bold uppercase tracking-wider text-[11px] text-[#FF6E40] hover:bg-orange-50/60"
            >
              <LogOut size={18} /> Sign Out
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
