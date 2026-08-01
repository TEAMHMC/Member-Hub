import React from 'react';
import { Phone } from 'lucide-react';

// Persistent safety + privacy footer. Required for a member-facing mental
// health app: crisis resources must always be reachable.
const Footer: React.FC = () => (
  <footer className="mt-12 border-t border-zinc-200/70 px-4 md:px-8 py-6 text-center space-y-3">
    <div className="inline-flex items-center gap-2 rounded-full bg-[#FF6F91]/10 px-4 py-2 text-xs font-semibold text-zinc-700">
      <Phone size={14} className="text-[#FF6F91]" />
      In crisis or emergency? Call or text{' '}
      <a href="sms:988" className="font-bold text-[#FF6F91] underline">988</a>
      , or call{' '}
      <a href="tel:911" className="font-bold text-[#FF6F91] underline">911</a>.
    </div>
    <p className="text-[11px] text-zinc-400 max-w-lg mx-auto leading-relaxed">
      The Member Hub offers wellness support and navigation. It is not a substitute for
      emergency care or professional medical advice.
    </p>
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] font-medium text-zinc-400">
      <a href="https://www.healthmatters.clinic/privacy" target="_blank" rel="noreferrer" className="hover:text-zinc-700">Privacy Policy</a>
      <a href="https://www.healthmatters.clinic/terms" target="_blank" rel="noreferrer" className="hover:text-zinc-700">Terms</a>
      <a href="https://www.healthmatters.clinic" target="_blank" rel="noreferrer" className="hover:text-zinc-700">healthmatters.clinic</a>
      <span>© Health Matters Clinic</span>
    </div>
  </footer>
);

export default Footer;
