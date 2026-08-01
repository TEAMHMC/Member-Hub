
import React from 'react';
import { UserRole } from '../../types';
import {
  Home, Calendar, ClipboardList,
  LogOut, Compass, ShieldCheck, Activity, Brain,
  User as UserIcon
} from 'lucide-react';

interface SidebarProps {
  role: UserRole;
  activeTab: string;
  onTabChange: (id: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, activeTab, onTabChange, onLogout }) => {
  const getNavItems = () => {
    if (role === UserRole.CLIENT) {
      return [
        { icon: <Home size={18} />, label: 'Home', id: 'dash' },
        { icon: <Calendar size={18} />, label: 'Events', id: 'events' },
        { icon: <Compass size={18} />, label: 'Playbook', id: 'game-plan' },
        { icon: <Activity size={18} />, label: 'Results', id: 'health' },
        { icon: <ShieldCheck size={18} />, label: 'Resources', id: 'resources' },
        { icon: <Brain size={18} />, label: 'Self-Check', id: 'check-yourself' },
      ];
    }
    return [
      { icon: <Home size={18} />, label: 'Operations', id: 'dash' },
      { icon: <ClipboardList size={18} />, label: 'Tasks', id: 'tasks' },
    ];
  };

  const items = getNavItems();

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
          <button onClick={onLogout} className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#FF6E40]">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-4 pb-3 no-scrollbar">
          {items.map((item) => navButton(item, true))}
          <button
            onClick={() => onTabChange('profile')}
            className={`flex items-center gap-2 rounded-full px-4 py-2.5 shrink-0 font-bold uppercase tracking-wider text-[11px] ${activeTab === 'profile' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:bg-white/60'}`}
          >
            <UserIcon size={16} /> Profile
          </button>
        </nav>
      </div>

      {/* Desktop: fixed-width vertical sidebar, solid background, own scroll */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col h-screen sticky top-0 z-40 bg-[#f5f3ef] border-r border-zinc-200/70">
        <div className="p-8">{Brand}</div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <p className="px-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Explore</p>
          {items.map((item) => navButton(item))}
        </nav>

        <div className="p-6 border-t border-zinc-200/70 space-y-1">
          <button
            onClick={() => onTabChange('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all font-bold uppercase tracking-wider text-[11px] ${activeTab === 'profile' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-900 hover:bg-white/60'}`}
          >
            <UserIcon size={18} /> Profile
          </button>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all font-bold uppercase tracking-wider text-[11px] text-[#FF6E40] hover:bg-orange-50/60"
          >
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
