
import React from 'react';
import { User } from '../../types';
import { LifeBuoy } from 'lucide-react';

interface StaffDashboardProps {
  user: User;
  activeTab?: string;
}

// Placeholder for the upcoming tech-support console (non-PHI). No mock data.
// Member case management / clinical PHI stays in the volunteer portal and the EHR.
const StaffDashboard: React.FC<StaffDashboardProps> = () => {
  return (
    <div className="max-w-3xl mx-auto py-20 text-center animate-in fade-in duration-500">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#233DFF] mx-auto mb-6">
        <LifeBuoy size={32} />
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Support console</h1>
      <p className="text-zinc-500 mt-3 max-w-md mx-auto leading-relaxed">
        The member tech-support console is being set up. It will help the team answer
        member questions and triage help requests. Clinical case management stays in the
        volunteer portal and the EHR.
      </p>
    </div>
  );
};

export default StaffDashboard;
