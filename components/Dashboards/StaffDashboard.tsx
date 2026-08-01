
import React, { useState, useEffect } from 'react';
import { User, Referral } from '../../types';
import { MOCK_REFERRALS } from '../../services/mockData';
import { generateTaskSummary } from '../../services/geminiService';
import { 
  Bell, Clock, CheckCircle2, AlertTriangle, Search, 
  Phone, ArrowRight, XCircle, Timer, Zap, Activity
} from 'lucide-react';

interface StaffDashboardProps {
  user: User;
  activeTab?: string;
}

const StaffDashboard: React.FC<StaffDashboardProps> = ({ user, activeTab = 'dash' }) => {
  const [referrals, setReferrals] = useState<Referral[]>(MOCK_REFERRALS);
  const [activeRef, setActiveRef] = useState<Referral | null>(null);
  const [aiSummary, setAiSummary] = useState<string>('');
  const [loadingSummary, setLoadingSummary] = useState(false);

  const getHoursRemaining = (deadline: string) => {
    const diff = new Date(deadline).getTime() - Date.now();
    return Math.max(0, Math.floor(diff / (1000 * 60 * 60)));
  };

  // Fix: Use React.FC to correctly handle standard React props like children and key
  const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
    <div className={`bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 ${className}`}>
      {children}
    </div>
  );

  const renderOps = () => (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto py-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight">Operations Center</h1>
          <p className="text-zinc-500 text-sm">Real-time referral performance and compliance data.</p>
        </div>
        <div className="pill pill-blue">System Active</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Pending Queue', value: referrals.length, icon: <Clock />, tone: 'pill-neutral' },
          { label: '72h SLA Rate', value: '98.5%', icon: <Zap />, tone: 'pill-blue' },
          { label: 'High Priority', value: referrals.filter(r => r.riskLevel === 'High').length, icon: <AlertTriangle />, tone: 'pill-orange' },
        ].map((stat, i) => (
          <Card key={i} className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-400">
               {stat.icon}
            </div>
            <div>
               <p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">{stat.label}</p>
               <p className="text-3xl font-semibold tracking-tight text-zinc-900">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="flex flex-col items-center justify-center py-16 text-center space-y-4">
         <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-[#233DFF] shadow-sm mb-2">
            <Activity size={32} />
         </div>
         <div className="space-y-1">
            <h2 className="text-xl font-semibold text-zinc-900">Efficiency Is High</h2>
            <p className="text-sm text-zinc-500 max-w-sm mx-auto">System-wide performance is within acceptable clinical parameters. No immediate escalations required.</p>
         </div>
      </Card>
    </div>
  );

  const renderQueue = () => (
    <div className="max-w-6xl mx-auto py-8 space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
         <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Compliance Queue</h2>
            <p className="text-sm text-zinc-500">Active 72h handoff handlings.</p>
         </div>
         <div className="relative w-full max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input type="text" placeholder="Search neighbor name..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-50 text-sm font-medium" />
         </div>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-zinc-50 border-b border-zinc-100">
              <tr className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                <th className="px-8 py-4">Neighbor</th>
                <th className="px-8 py-4">Partner</th>
                <th className="px-8 py-4">SLA Countdown</th>
                <th className="px-8 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {referrals.map((ref) => (
                <tr key={ref.id} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <p className="font-semibold text-zinc-900">{ref.clientName}</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5 uppercase tracking-tighter">#{ref.clientId}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-medium text-zinc-600">{ref.resourceName}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className={`pill ${getHoursRemaining(ref.deadline72h) < 12 ? 'pill-orange' : 'pill-blue'}`}>
                       <Timer size={12} /> {getHoursRemaining(ref.deadline72h)}h Left
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button onClick={() => setActiveRef(ref)} className="text-[#233DFF] text-xs font-semibold hover:underline">Process</button>
                  </td>
                </tr>
              ))}
              {referrals.length === 0 && (
                <tr>
                   <td colSpan={4} className="px-8 py-20 text-center text-zinc-400 text-sm italic">Queue is currently clear. Good work.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen">
      {activeTab === 'dash' ? renderOps() : renderQueue()}
      {/* Detail overlay would go here for processing */}
    </div>
  );
};

export default StaffDashboard;
