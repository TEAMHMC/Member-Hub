
import React, { useState } from 'react';
import { Lock, Check, ArrowRight, Loader2 } from 'lucide-react';
import { UserRole, User } from '../../types';
import { client as clientApi, context as ctxApi } from '../../services/api';

interface LoginProps {
  onLogin: (userData: Partial<User>, role?: UserRole) => void;
}

// Member accounts are invitation-only for now. The sign-in step below emails a
// code to any address that asks for one, which is right at launch and wrong
// before it, so an invitation code has to be cleared first.
//
// This is a launch control, not a security boundary: the codes ship in this
// bundle and anyone reading it can find them. The durable fix is an allowlist on
// /api/client/auth/request-link in the portal, so an uninvited address gets no
// code at all. Until that ships this stops the public creating accounts.
// Set VITE_INVITE_ONLY=false to open the Hub, VITE_INVITE_CODES to rotate codes.
const INVITE_ONLY = String((import.meta as any).env?.VITE_INVITE_ONLY ?? 'true') !== 'false';
const INVITE_CODES: string[] = String((import.meta as any).env?.VITE_INVITE_CODES || 'HMC-MEMBER-2026')
  .split(',')
  .map((c) => c.trim().toLowerCase())
  .filter(Boolean);
const INVITE_CLEARED_KEY = 'hmc.inviteCleared';
// Storage throws in some private modes, and a member who cleared the gate should
// not be sent back to it by a failed read.
const inviteAlreadyCleared = (): boolean => {
  try { return sessionStorage.getItem(INVITE_CLEARED_KEY) === '1'; } catch { return false; }
};

// Passwordless email magic-link, wired to the live backend
// (/api/client/auth/request-link + verify-link). SMS/phone sign-in turns on
// once the Twilio client pipeline (HIPAA BAA + A2P campaign) is live.
const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [invite, setInvite] = useState('');
  const [step, setStep] = useState<'invite' | 'email' | 'code' | 'onboarding'>(
    INVITE_ONLY && !inviteAlreadyCleared() ? 'invite' : 'email',
  );
  const [consentData, setConsentData] = useState(false);
  const [consentSms, setConsentSms] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleInviteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const given = invite.trim().toLowerCase();
    if (!given) return;
    if (!INVITE_CODES.includes(given)) {
      setErr('That invitation code was not recognized. Check the message we sent you, or request an invitation below.');
      return;
    }
    try { sessionStorage.setItem(INVITE_CLEARED_KEY, '1'); } catch { /* private mode: they re-enter it next visit */ }
    setErr(null);
    setStep('email');
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValid) return;
    setBusy(true);
    setErr(null);
    try {
      await clientApi.requestLink(email.trim().toLowerCase());
      setStep('code');
    } catch {
      setErr('We could not send a code to that email. Please check it and try again.');
    } finally {
      setBusy(false);
    }
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().length !== 6) return;
    setBusy(true);
    setErr(null);
    try {
      const res = await clientApi.verifyLink(email.trim().toLowerCase(), code.trim());
      if (res.identified) {
        // Existing client record — go straight in.
        onLogin({ email: email.trim().toLowerCase() }, UserRole.CLIENT);
      } else {
        setStep('onboarding');
      }
    } catch {
      setErr('That code did not match or has expired. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  const handleOnboardingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentData || !consentSms) return;
    // Record cross-tool memory consent so the Navigator can remember them.
    ctxApi.consent(true).catch(() => {});
    onLogin(
      { email: email.trim().toLowerCase(), phone, firstName, lastName, zipCode, badges: ['First Login'] },
      UserRole.CLIENT
    );
  };

  const inputStyle = "w-full h-[52px] px-5 rounded-2xl border border-zinc-200 bg-white text-base font-medium focus:ring-4 focus:ring-[#233DFF]/10 focus:border-[#233DFF]/30 outline-none transition-all placeholder:text-zinc-300";
  const labelStyle = "block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 ml-1";
  // Shape, colour, dot and roll-up hover come from the shared HMC button system
  // (loaded in index.html) so the Hub matches healthmatters.clinic. Only the
  // full-width sizing and disabled handling are specific to this form.
  const buttonStyle = "hmc-btn hmc-btn-primary w-full h-[52px] justify-center disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#f7f7f7]">
      <div className={`w-full bg-white rounded-[40px] p-10 md:p-12 space-y-10 animate-in fade-in zoom-in-95 duration-500 shadow-2xl shadow-zinc-200/40 border border-zinc-100/50 ${step === 'onboarding' ? 'max-w-xl' : 'max-w-sm'}`}>

        <div className="text-center space-y-5">
          <img src="/hmc-logo.png" alt="Health Matters Clinic" className="w-16 h-16 rounded-3xl mx-auto shadow-lg shadow-[#233DFF]/20" />
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#233DFF]">Health Matters Clinic</p>
            <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">Member Hub</h1>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">
            Free screenings, community events, help with food, housing and care, and self-paced
            courses that open doors into health careers. All in one place, at no cost.
          </p>
          {step === 'invite' && (
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#233DFF]">
              Member access is by invitation
            </p>
          )}
        </div>

        {step === 'invite' && (
          <form onSubmit={handleInviteSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className={labelStyle}>INVITATION CODE</label>
              <input
                type="text"
                placeholder="HMC-0000-0000"
                className={`${inputStyle} tracking-widest uppercase`}
                value={invite}
                onChange={(e) => { setInvite(e.target.value); if (err) setErr(null); }}
                autoComplete="off"
                autoCapitalize="characters"
                spellCheck={false}
                required
                autoFocus
              />
            </div>
            {err ? <p className="text-xs font-medium text-[#FF6F91] ml-1">{err}</p> : null}
            <button type="submit" className={buttonStyle} disabled={!invite.trim()}>
              Continue <ArrowRight size={18} />
            </button>
            <a
              href="https://www.healthmatters.clinic/contact-us"
              className="block w-full text-center text-xs text-zinc-400 underline"
            >
              Request an invitation
            </a>
          </form>
        )}

        {step === 'email' && (
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className={labelStyle}>EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="you@example.com"
                className={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>
            {err ? <p className="text-xs font-medium text-[#FF6F91] ml-1">{err}</p> : null}
            <button type="submit" className={buttonStyle} disabled={busy || !emailValid}>
              {busy ? <Loader2 size={18} className="animate-spin" /> : <>Continue <ArrowRight size={18} /></>}
            </button>
          </form>
        )}

        {step === 'code' && (
          <form onSubmit={handleCodeSubmit} className="space-y-8">
            <div className="space-y-1 text-center">
              <label className={labelStyle}>VERIFY YOUR CODE</label>
              <input
                type="text"
                maxLength={6}
                inputMode="numeric"
                placeholder="000 000"
                className="w-full h-[60px] text-center text-3xl font-semibold tracking-[0.2em] rounded-2xl border border-zinc-100 bg-zinc-50 focus:bg-white focus:border-[#233DFF]/30 focus:ring-4 focus:ring-[#233DFF]/10 outline-none transition-all"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                autoFocus
              />
              <p className="text-xs text-zinc-400 font-medium pt-2">We emailed a 6-digit code to {email}</p>
              {err ? <p className="text-xs font-medium text-[#FF6F91] pt-1">{err}</p> : null}
            </div>
            <button type="submit" className={buttonStyle} disabled={busy || code.length !== 6}>
              {busy ? <Loader2 size={18} className="animate-spin" /> : 'Sign in'}
            </button>
            <button type="button" className="w-full text-xs text-zinc-400 underline" onClick={() => { setStep('email'); setCode(''); setErr(null); }}>
              Use a different email
            </button>
          </form>
        )}

        {step === 'onboarding' && (
          <form onSubmit={handleOnboardingSubmit} className="space-y-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className={labelStyle}>FIRST NAME</label>
                <input type="text" placeholder="Alex" className={inputStyle} value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              </div>
              <div className="space-y-1">
                <label className={labelStyle}>LAST NAME</label>
                <input type="text" placeholder="Rivera" className={inputStyle} value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className={labelStyle}>PHONE (OPTIONAL)</label>
                <input type="tel" placeholder="(555) 000-0000" className={inputStyle} value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="space-y-1">
                <label className={labelStyle}>ZIP CODE</label>
                <input type="text" placeholder="90210" className={inputStyle} value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
              </div>
            </div>

            <div className="space-y-5 pt-6 border-t border-zinc-100">
               <label className="flex items-start gap-4 cursor-pointer group" onClick={() => setConsentData(!consentData)}>
                  <div className={`w-6 h-6 rounded-lg border flex items-center justify-center mt-0.5 transition-all ${consentData ? 'bg-[#233DFF] border-[#233DFF] text-white shadow-md shadow-blue-200' : 'border-zinc-200 bg-white group-hover:border-zinc-300'}`}>
                    {consentData && <Check size={14} strokeWidth={4} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-zinc-900 leading-tight">Health Support Agreement</p>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1">I allow HMC to share non-medical needs with partners who provide food, housing, and social services.</p>
                  </div>
               </label>
               <label className="flex items-start gap-4 cursor-pointer group" onClick={() => setConsentSms(!consentSms)}>
                  <div className={`w-6 h-6 rounded-lg border flex items-center justify-center mt-0.5 transition-all ${consentSms ? 'bg-[#233DFF] border-[#233DFF] text-white shadow-md shadow-blue-200' : 'border-zinc-200 bg-white group-hover:border-zinc-300'}`}>
                    {consentSms && <Check size={14} strokeWidth={4} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-zinc-900 leading-tight">Communication</p>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1">I agree to receive messages about health events and updates to my plan.</p>
                  </div>
               </label>
            </div>

            <button
              type="submit"
              className={`${buttonStyle} h-[60px]`}
              disabled={!consentData || !consentSms}
            >
               Create My Account
            </button>
          </form>
        )}

        <div className="pt-6 border-t border-zinc-100 text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-zinc-100/60 text-[10px] text-zinc-500 font-bold uppercase tracking-widest border border-zinc-200/50">
            <Lock size={12} className="opacity-60" /> SECURE &amp; PRIVATE
          </div>
          <p className="text-[11px] text-zinc-400 mt-4 leading-relaxed">
            In crisis? Call or text{' '}
            <a href="sms:988" className="font-bold text-[#FF6F91] underline">988</a>
            {' '}any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
