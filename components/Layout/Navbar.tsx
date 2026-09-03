
import React, { useState } from 'react';
import { User } from '../../types';
import { Search } from 'lucide-react';
import { TOOLS, context as ctxApi } from '../../services/api';
import Notifications from './Notifications';

interface NavbarProps {
  user: User;
  /** Lets a notification send someone to an in-app surface rather than off site. */
  onNavigateTab?: (tab: string) => void;
  /** Nobody is signed in, so the identity chip becomes a way in. */
  guest?: boolean;
  onSignIn?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onNavigateTab, guest = false, onSignIn }) => {
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

      <div className="flex items-center gap-4 md:gap-6">
        <Notifications onNavigateTab={onNavigateTab} />
        {/* A visitor is not a member and the chip should not claim they are. It said
            "M / MEMBER" to somebody with no account, which is both wrong and a small lie
            about who is looking at the page. */}
        {guest ? (
          <button
            onClick={onSignIn}
            className="hmc-btn hmc-btn-primary h-11 px-6 text-[11px]"
          >
            Sign In
          </button>
        ) : (
          /* The chip opens the profile. It used to carry a dropdown arrow and a
             cursor-pointer and then do nothing at all when pressed, which teaches people
             to stop trusting the controls that do work. It is a real button now, and the
             arrow is gone because there is no menu behind it. */
          <button
            onClick={() => onNavigateTab?.('profile')}
            className="flex items-center gap-3 group rounded-full pl-3 pr-1 py-1 hover:bg-white/70 transition-all"
          >
            <span className="text-right hidden sm:block">
              <span className="block text-sm font-semibold text-zinc-900 leading-tight">{user.firstName} {user.lastName}</span>
              <span className="block text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">View profile</span>
            </span>
            <span className="w-10 h-10 rounded-full bg-[#233DFF] text-white flex items-center justify-center font-black text-sm group-hover:ring-2 group-hover:ring-[#233DFF]/30 transition-all" aria-hidden="true">
               {(user.firstName || 'M').charAt(0)}{(user.lastName || '').charAt(0)}
            </span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
