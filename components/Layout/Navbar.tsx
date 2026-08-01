
import React, { useState } from 'react';
import { User } from '../../types';
import { Search, ChevronDown } from 'lucide-react';
import { TOOLS, context as ctxApi } from '../../services/api';

interface NavbarProps {
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [query, setQuery] = useState('');
  const search = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    ctxApi.event('tool_search', { via: 'navbar', query: q.slice(0, 120) });
    window.open(`${TOOLS.directory}?q=${encodeURIComponent(q)}`, '_blank', 'noopener');
  };
  return (
    <nav className="px-4 md:px-10 py-4 flex items-center justify-between lg:sticky lg:top-0 z-30 bg-[#f5f3ef]/95 backdrop-blur border-b border-zinc-200/40">
      <div className="flex items-center gap-6 flex-1">
        <form onSubmit={search} className="relative hidden md:block w-full max-w-[420px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search resources"
            placeholder="Search food, housing, mental health, and more..."
            className="w-full pl-12 pr-6 py-3 bg-white/80 border border-zinc-100 rounded-full text-sm font-medium focus:bg-white focus:ring-4 focus:ring-blue-50/50 outline-none transition-all shadow-sm"
          />
        </form>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-zinc-900 leading-tight">{user.firstName} {user.lastName}</p>
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">Member</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#233DFF] text-white flex items-center justify-center font-black text-sm group-hover:ring-2 group-hover:ring-[#233DFF]/30 transition-all" aria-hidden="true">
             {(user.firstName || 'M').charAt(0)}{(user.lastName || '').charAt(0)}
          </div>
          <ChevronDown size={14} className="text-zinc-300" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
