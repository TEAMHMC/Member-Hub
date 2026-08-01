
import React from 'react';
import { UserRole } from '../../types';
import { 
  Home, Calendar, ClipboardList, 
  Settings, LogOut, Compass, ShieldCheck, Activity, Brain,
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
        { icon: <Compass size={18} />, label: 'My Plan', id: 'game-plan' },
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

  return (
    <aside className="w-full lg:w-64 border-r border-zinc-100 flex flex-col h-screen sticky top-0 shrink-0 z-50 bg-transparent">
      <div className="p-8">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange('dash')}>
          <div className="w-8 h-8 rounded-lg bg-[#233DFF] flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-md"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold tracking-tight text-zinc-900 leading-none">HMC Hub</span>
            <span className="text-[10px] text-zinc-400 font-medium tracking-wide mt-1">Member Portal</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4 opacity-70">
          Explore
        </p>
        {getNavItems().map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-medium text-sm ${
              activeTab === item.id 
                ? 'bg-white text-[#233DFF] shadow-sm border border-zinc-100' 
                : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50/50'
            }`}
          >
            <span className={activeTab === item.id ? 'text-[#233DFF]' : 'text-zinc-400'}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-zinc-100 space-y-1">
        <button 
          onClick={() => onTabChange('profile')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-medium text-sm ${activeTab === 'profile' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50/50'}`}
        >
          <UserIcon size={18} />
          Profile
        </button>
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-medium text-sm text-[#FF6E40] hover:bg-orange-50/50"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
