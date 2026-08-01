
import React from 'react';
import { UserRole, User } from '../../types';
import { Users, Briefcase, HeartHandshake } from 'lucide-react';

interface RoleSelectProps {
  user: User;
  onRoleSelected: (role: UserRole) => void;
}

const RoleSelect: React.FC<RoleSelectProps> = ({ onRoleSelected }) => {
  const roles = [
    {
      id: UserRole.CLIENT,
      title: 'I need services',
      description: 'Find health screenings, events, and community resources.',
      icon: <HeartHandshake size={32} />,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      id: UserRole.VOLUNTEER,
      title: 'I want to help',
      description: 'Claim shifts, track your impact, and join our mission.',
      icon: <Briefcase size={32} />,
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      id: UserRole.STAFF,
      title: 'Clinic Staff',
      description: 'Manage referrals, task queues, and volunteer data.',
      icon: <Users size={32} />,
      color: 'bg-slate-50 text-slate-600 border-slate-100'
    }
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-slate-900">Welcome to HMC</h2>
          <p className="text-slate-500">Please select how you'll be using the platform today</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => onRoleSelected(role.id)}
              className={`flex flex-col items-center text-center p-8 rounded-3xl border-2 hover:scale-105 transition-all bg-white shadow-sm hover:shadow-xl group ${role.color}`}
            >
              <div className="p-4 rounded-2xl bg-white shadow-sm mb-4 group-hover:bg-opacity-50 transition-colors">
                {role.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{role.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {role.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelect;
