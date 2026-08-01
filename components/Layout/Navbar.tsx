
import React from 'react';
import { User } from '../../types';
import { Bell, Search, ChevronDown } from 'lucide-react';

interface NavbarProps {
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <nav className="px-10 py-5 flex items-center justify-between sticky top-0 z-30 bg-transparent">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative hidden md:block w-full max-w-[420px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
          <input 
            type="text" 
            placeholder="Search resources, results, or programs..." 
            className="w-full pl-12 pr-6 py-3 bg-white/80 border border-zinc-100 rounded-full text-sm font-medium focus:bg-white focus:ring-4 focus:ring-blue-50/50 outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#233DFF] rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-zinc-900 leading-tight">{user.firstName} {user.lastName}</p>
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">CLIENT ID</p>
          </div>
          <div className="w-10 h-10 rounded-full border border-zinc-200 p-0.5 overflow-hidden group-hover:border-[#233DFF] transition-colors bg-white">
             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`} alt="Avatar" className="w-full h-full object-cover rounded-full" />
          </div>
          <ChevronDown size={14} className="text-zinc-300" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
