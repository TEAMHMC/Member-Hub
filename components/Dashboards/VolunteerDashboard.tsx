
import React, { useState } from 'react';
import { User, UserRole, Shift, ApplicationStatus } from '../../types';
import { MOCK_SHIFTS } from '../../services/mockData';
import { 
  Trophy, Calendar, Clock, MapPin, CheckCircle2, 
  ArrowUpCircle, LayoutGrid, Heart, Star 
} from 'lucide-react';

interface VolunteerDashboardProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const VolunteerDashboard: React.FC<VolunteerDashboardProps> = ({ user, setUser }) => {
  const [shifts, setShifts] = useState<Shift[]>(MOCK_SHIFTS);
  const [activeTab, setActiveTab] = useState<'available' | 'my-shifts'>('available');
  const [checkingIn, setCheckingIn] = useState<string | null>(null);

  const getNextLevelXp = (level: number) => level * 200;
  const progressPercent = (user.xp / getNextLevelXp(user.level)) * 100;

  const claimShift = (shiftId: string) => {
    setShifts(prev => prev.map(s => {
      if (s.id === shiftId && s.currentSignups < s.capacity) {
        return { ...s, currentSignups: s.currentSignups + 1 };
      }
      return s;
    }));
    // In a real system, this triggers a serverless atomic transaction in Airtable
  };

  const handleCheckIn = (shiftId: string) => {
    setCheckingIn(shiftId);
    setTimeout(() => {
      setCheckingIn(null);
      setUser(prev => prev ? {
        ...prev,
        xp: prev.xp + 50,
        hoursLogged: prev.hoursLogged + 4,
        badges: prev.xp + 50 >= 500 && !prev.badges.includes('Elite Contributor') 
                ? [...prev.badges, 'Elite Contributor'] 
                : prev.badges
      } : null);
    }, 2000);
  };

  if (user.applicationStatus === ApplicationStatus.PENDING) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 max-w-lg mx-auto p-8 bg-white rounded-3xl border border-slate-100 shadow-xl">
        <div className="p-6 bg-amber-50 rounded-full text-amber-500 animate-pulse">
          <Clock size={64} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Application Under Review</h2>
        <p className="text-slate-500 leading-relaxed">Our clinical lead is currently reviewing your credentials. We prioritize safety and community trust. Expect an SMS update within 48 hours.</p>
        <button disabled className="w-full py-4 bg-slate-100 text-slate-400 font-bold rounded-2xl">Pending Verification</button>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-700 max-w-7xl mx-auto">
      {/* Gamification Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Level {user.level} Advocate</p>
              <h3 className="text-4xl font-extrabold text-slate-900">{user.xp} <span className="text-lg font-bold text-slate-300">XP</span></h3>
            </div>
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl"><Trophy size={32} /></div>
          </div>
          <div className="space-y-3 mt-8">
            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Progress to Level {user.level + 1}</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden p-1 border border-slate-200/50">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-1000 shadow-sm shadow-blue-300/50" style={{ width: `${progressPercent}%` }} />
            </div>
            <p className="text-xs text-center text-slate-400 font-medium">{getNextLevelXp(user.level) - user.xp} XP remaining until next promotion</p>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white flex flex-col justify-between">
          <div className="space-y-1">
            <div className="text-amber-400"><Heart size={24} /></div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 pt-2">Impact Total</h4>
            <p className="text-3xl font-extrabold">{user.hoursLogged} <span className="text-base text-slate-500">Hrs</span></p>
          </div>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 font-medium">
            Helping ~{user.hoursLogged * 3} neighbors monthly
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <Star size={14} className="text-amber-400" /> Achievements
          </h4>
          <div className="flex flex-wrap gap-3">
            {user.badges.map((b, i) => (
              <div key={i} title={b} className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100 hover:scale-110 transition-all">
                <Trophy size={20} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shifts Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <LayoutGrid size={24} className="text-blue-600" />
            Service Opportunities
          </h2>
          <div className="flex bg-slate-100 p-1 rounded-2xl">
            <button 
              onClick={() => setActiveTab('available')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'available' ? 'bg-white shadow-lg text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Available
            </button>
            <button 
              onClick={() => setActiveTab('my-shifts')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'my-shifts' ? 'bg-white shadow-lg text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              My Registered
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shifts.filter(s => activeTab === 'available' ? s.status === 'Open' : s.currentSignups > 0).map((shift) => (
            <div key={shift.id} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col group relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${shift.status === 'Filled' ? 'bg-slate-100 text-slate-400' : 'bg-blue-50 text-blue-600'}`}>
                  {shift.status === 'Filled' ? 'Waitlist Open' : 'Claim Now'}
                </span>
                <span className="text-xs font-bold text-slate-400">{shift.capacity - shift.currentSignups} spots left</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{shift.name}</h3>
              <p className="text-sm text-slate-500 line-clamp-2 mb-6">{shift.description}</p>
              
              <div className="space-y-4 text-sm text-slate-600 flex-1">
                <div className="flex items-center gap-3 font-medium"><Calendar size={18} className="text-blue-500" /> {shift.date}</div>
                <div className="flex items-center gap-3 font-medium"><Clock size={18} className="text-blue-500" /> {shift.startTime} - {shift.endTime}</div>
                <div className="flex items-center gap-3 font-medium"><MapPin size={18} className="text-blue-500" /> {shift.location}</div>
              </div>

              {activeTab === 'my-shifts' ? (
                <button 
                  onClick={() => handleCheckIn(shift.id)}
                  disabled={checkingIn === shift.id}
                  className="mt-8 w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
                >
                  {checkingIn === shift.id ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/> Verifying Location...</>
                  ) : 'Check In (QR)'}
                </button>
              ) : (
                <button 
                  onClick={() => claimShift(shift.id)}
                  disabled={shift.currentSignups >= shift.capacity}
                  className={`mt-8 w-full py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95 ${
                    shift.currentSignups >= shift.capacity 
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200'
                  }`}
                >
                  {shift.currentSignups >= shift.capacity ? 'Join Waitlist' : 'Claim Shift'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
