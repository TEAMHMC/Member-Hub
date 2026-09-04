
import React, { useEffect, useState } from 'react';
import { Lock, Check, ArrowRight, Loader2 } from 'lucide-react';
import { UserRole, User } from '../../types';
import { client as clientApi, context as ctxApi, ApiError } from '../../services/api';

interface LoginProps {
  onLogin: (userData: Partial<User>, role?: UserRole) => void;
}

// Whether an invitation is needed is the server's answer, read from
// /api/public/auth-config, not a flag compiled into this bundle.
//
// It was a build-time flag defaulting to invitation-only, and that is how the Hub
// came to show an invitation wall while the server had already stopped requiring
// one. The two could disagree indefinitely, because changing the server's mind
// meant rebuilding and redeploying this site. Asking the server removes the
// possibility of disagreeing with it.
//
// The codes themselves were never a security boundary: they ship in this bundle
// and anyone reading it can find them. The real check is on
// /api/client/auth/request-link.
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
  /**
   * Which experience this member is here for.
   *
   * Asked once, in their words rather than in ours. The Hub has always had two audiences
   * and no way for anybody to indicate which they were, so a person who came to take a
   * training was given a screening surface, a health playbook and results they will never
   * have. Nothing derived from behaviour is as good as the person saying it.
   */
  const [audience, setAudience] = useState<'care' | 'learner' | 'both' | null>(null);
  const [invite, setInvite] = useState('');
  // Starts on the email step. If the server says signup is closed, the invitation
  // step is shown once that answer arrives. Defaulting the other way would put a
  // wall in front of every member for as long as the request took, and put one
  // there permanently if the request failed.
  const [step, setStep] = useState<'invite' | 'email' | 'code' | 'onboarding'>('email');
  const [googleClientId, setGoogleClientId] = useState<string | null>(null);
  // One resend per visit to the code step, so a stuck person is not walked into
  // the five-per-hour limit on the endpoint by tapping it repeatedly.
  const [resent, setResent] = useState(false);
  /**
   * An age band, never a date of birth.
   *
   * Every youth and TAY funder asks for an age disaggregation, and a member who signs up
   * here rather than being enrolled at an event was invisible to it. A band answers that
   * without the Hub holding a birth date, which is a Safe Harbor identifier and something
   * the profile allowlist explicitly forbids.
   *
   * The bands are split finer than LA County reports them so the county roll-up stays an
   * exact sum while TAY, which straddles the county bands, is still derivable.
   */
  const AGE_BANDS = ['Under 16', '16-17', '18-24', '25', '26-34', '35-44', '45-54', '55-64', '65+', 'Prefer not to say'] as const;
  const [ageBand, setAgeBand] = useState<string>('');

  /**
   * What brought them, in their words, asked once and optional.
   *
   * Onboarding collected a name, a zip, an age band and two consents. That is everything
   * HMC needs to report on somebody and nothing at all about what they came for, so the
   * Hub's first personalised moment had nothing to personalise from. A member who arrived
   * in housing trouble met the same four cards as everybody else.
   *
   * These options map onto the determinants the Playbook already knows how to answer, so
   * an answer here can be acted on immediately instead of being stored as a preference.
   * It is skippable on purpose. Making somebody declare a hardship before they can get in
   * is the wrong trade, and the Snapshot asks properly later on.
   */
  const [needs, setNeeds] = useState<string[]>([]);
  const toggleNeed = (id: string) =>
    setNeeds((n) => (n.includes(id) ? n.filter((x) => x !== id) : [...n, id]));
  const [consentData, setConsentData] = useState(false);
  const [consentSms, setConsentSms] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  // Ask the server what sign-in looks like: whether Google is available, and
  // whether an invitation is required. A failure here leaves the email step
  // showing, which is the working path, rather than a wall nobody can pass.
  useEffect(() => {
    let cancelled = false;
    clientApi.authConfig()
      .then((cfg) => {
        if (cancelled) return;
        setGoogleClientId(cfg.googleClientId);
        if (cfg.signupMode === 'invite' && !inviteAlreadyCleared()) setStep('invite');
      })
      .catch(() => { /* email sign-in still works; nothing to show differently */ });
    return () => { cancelled = true; };
  }, []);

  // Google Identity Services, loaded only if the server gave us a client id.
  // Rendered into the button container below once the script is ready.
  useEffect(() => {
    if (!googleClientId || step !== 'email') return;
    let cancelled = false;

    const render = () => {
      const g = (window as any).google?.accounts?.id;
      const host = document.getElementById('hmc-google-btn');
      if (cancelled || !g || !host) return;
      g.initialize({
        client_id: googleClientId,
        callback: async (resp: { credential?: string }) => {
          if (!resp?.credential) return;
          setBusy(true);
          setErr(null);
          try {
            const r = await clientApi.googleSignIn(resp.credential);
            onLogin({ email: r.email }, UserRole.CLIENT);
          } catch {
            setErr('Google could not sign you in. You can use a code instead.');
          } finally {
            setBusy(false);
          }
        },
      });
      host.innerHTML = '';
      g.renderButton(host, { theme: 'outline', size: 'large', width: 300, text: 'continue_with' });
    };

    if ((window as any).google?.accounts?.id) { render(); return; }
    const existing = document.getElementById('hmc-gsi-script') as HTMLScriptElement | null;
    if (existing) { existing.addEventListener('load', render); return () => existing.removeEventListener('load', render); }
    const sc = document.createElement('script');
    sc.id = 'hmc-gsi-script';
    sc.src = 'https://accounts.google.com/gsi/client';
    sc.async = true;
    sc.defer = true;
    sc.onload = render;
    document.head.appendChild(sc);
    return () => { cancelled = true; };
  }, [googleClientId, step, onLogin]);

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
      await clientApi.requestLink(email.trim().toLowerCase(), invite.trim() || undefined);
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
    } catch (e) {
      // The server distinguishes four outcomes and this used to show one message
      // for all of them, which gave wrong advice twice over: it told somebody to
      // try again when they had been locked out after five wrong attempts, and it
      // said a code did not match when no code had ever been issued for that
      // address, which is what happens if the address here is not the address the
      // email went to. Each case now says what to do about it.
      const code = e instanceof ApiError ? e.code : null;
      if (code === 'code_not_found') {
        setErr(`We have no sign-in code on file for ${email.trim().toLowerCase()}. If the email arrived at a different address, sign in with that one, or ask for a new code.`);
      } else if (code === 'code_expired') {
        setErr('That code has expired. Codes last 15 minutes. Ask for a new one.');
      } else if (code === 'too_many_attempts') {
        setErr('Too many attempts, so that code is now void. Ask for a new one.');
      } else if (code === 'invalid_code') {
        setErr('That code is not right. Check the most recent email, since asking again replaces the previous code.');
      } else {
        setErr('We could not sign you in just then. Please try again.');
      }
    } finally {
      setBusy(false);
    }
  };

  const handleOnboardingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentData || !consentSms || !audience || !ageBand) return;
    setBusy(true);
    setErr(null);
    // Record cross-tool memory consent so the Navigator can remember them.
    ctxApi.consent(true).catch(() => {});
    try {
      // The part that was missing entirely. Without this the answers live in localStorage
      // and nowhere else, `identified` stays false because no clients record exists, and
      // this same form is shown again on the next sign-in, and the one after that.
      await clientApi.saveProfile({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        phone,
        zipCode: zipCode.trim(),
        ageBand,
        audience,
        consentToShare: consentData,
        consentToContact: consentSms,
      });
    } catch {
      // Not fatal to the sign-in. They are already authenticated, and blocking entry on a
      // profile write would lock somebody out of the Hub over a saved name. They will be
      // asked once more next time, which is the old behaviour rather than a new failure.
      setErr('We signed you in, but could not save your details just then. We may ask again next time.');
    } finally {
      setBusy(false);
    }

    /**
     * Tell the Navigator what they came for, so day one is not generic.
     *
     * This is sent as a search and not as a screening result, on purpose. A screening
     * signal carries a severity and nobody has stated one. Ticking "food" on the way in
     * says what someone is looking for and says nothing about how bad it is. The engine's
     * existing needs rule matches on exactly these words, so a real next step appears
     * immediately without inventing a score the member never gave.
     */
    if (needs.length) {
      ctxApi.event('tool_search', { via: 'onboarding', query: needs.join(' ') });
      try { localStorage.setItem('hmc_onboarding_needs', JSON.stringify(needs)); } catch { /* private mode */ }
    }

    onLogin(
      { email: email.trim().toLowerCase(), phone, firstName, lastName, zipCode, audience, badges: ['First Login'] },
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
            <button
              type="button"
              onClick={() => { setErr(null); setStep('email'); }}
              className="block w-full text-center text-sm font-semibold text-[#233DFF] hover:underline"
            >
              Already a member? Sign in
            </button>
            <a
              href="https://www.healthmatters.clinic/contact-us"
              className="block w-full text-center text-xs text-zinc-400 underline"
            >
              Need an invitation?
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
              {busy ? <Loader2 size={18} className="animate-spin" /> : <>Email me a code <ArrowRight size={18} /></>}
            </button>

            {/* Shown only when the server supplied a client id, so nothing renders
                a dead button if Google is not configured. Staff and volunteers
                already sign in to the portal this way. */}
            {googleClientId && (
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <span className="h-px flex-1 bg-zinc-100" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">or</span>
                  <span className="h-px flex-1 bg-zinc-100" />
                </div>
                <div id="hmc-google-btn" className="flex justify-center" />
              </div>
            )}
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
            {/* Every message above can end in "ask for a new one", so there has to
                be a way to do that without going back and retyping the address. */}
            <button
              type="button"
              className="w-full text-xs font-semibold text-[#233DFF] hover:underline disabled:opacity-50"
              disabled={busy || resent}
              onClick={async () => {
                setBusy(true);
                setErr(null);
                try {
                  await clientApi.requestLink(email.trim().toLowerCase(), invite.trim() || undefined);
                  setCode('');
                  setResent(true);
                } catch {
                  setErr('We could not send another code just then. Please try again.');
                } finally {
                  setBusy(false);
                }
              }}
            >
              {resent ? 'New code sent' : 'Send a new code'}
            </button>
            <button type="button" className="w-full text-xs text-zinc-400 underline" onClick={() => { setStep('email'); setCode(''); setErr(null); setResent(false); }}>
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

            {/* Asked once, in their words. Everything the Hub shows a member branches on
                this, and until now nothing set it, so a person who came for a training was
                shown a screening surface and a health playbook. */}
            <div className="space-y-3 pt-6 border-t border-zinc-100">
              <label className={labelStyle}>YOUR AGE</label>
              <div className="grid grid-cols-3 gap-2">
                {AGE_BANDS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setAgeBand(b)}
                    className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition-all ${
                      ageBand === b
                        ? 'border-[#233DFF] bg-[#233DFF]/5 text-[#233DFF]'
                        : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300'
                    } ${b === 'Prefer not to say' ? 'col-span-3' : ''}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed ml-1">
                Asked so we can report who we reach to the programs that fund this work. We do
                not ask for your date of birth.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-zinc-100">
              <label className={labelStyle}>WHAT BRINGS YOU TO HMC</label>
              <div className="grid grid-cols-1 gap-3">
                {([
                  { id: 'care', title: 'Health support for myself or my family',
                    detail: 'Screenings, results, help with food, housing and care, and a plan you can follow.' },
                  { id: 'learner', title: 'Courses and training',
                    detail: 'Free self-paced courses and scheduled trainings that open doors into health careers.' },
                  { id: 'both', title: 'Both', detail: 'You get everything. You can change this later in your profile.' },
                ] as const).map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setAudience(o.id)}
                    aria-pressed={audience === o.id}
                    className={`text-left rounded-2xl border p-4 transition-all ${
                      audience === o.id
                        ? 'border-[#233DFF] bg-blue-50/60 ring-4 ring-[#233DFF]/10'
                        : 'border-zinc-200 bg-white hover:border-zinc-300'
                    }`}
                  >
                    <p className="text-sm font-semibold text-zinc-900 leading-tight">{o.title}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1">{o.detail}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Only for somebody who came for care. An Academy learner has no care
                relationship with HMC, so asking them what they are struggling with on the
                way into a course is the wrong question at the wrong moment. */}
            {(audience === 'care' || audience === 'both') && (
              <div className="space-y-3 pt-6 border-t border-zinc-100">
                <label className={labelStyle}>ANYTHING WE CAN HELP WITH RIGHT NOW</label>
                <div className="grid grid-cols-2 gap-2">
                  {([
                    { id: 'food', label: 'Food' },
                    { id: 'housing', label: 'Housing' },
                    { id: 'health insurance clinic', label: 'Getting covered' },
                    { id: 'mental health', label: 'Feeling overwhelmed' },
                    { id: 'transport', label: 'Getting around' },
                    { id: 'safety', label: 'Safety' },
                  ] as const).map((n) => (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => toggleNeed(n.id)}
                      aria-pressed={needs.includes(n.id)}
                      className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition-all ${
                        needs.includes(n.id)
                          ? 'border-[#233DFF] bg-[#233DFF]/5 text-[#233DFF]'
                          : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300'
                      }`}
                    >
                      {n.label}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed ml-1">
                  Optional, and you can skip it. It just means we can point you somewhere
                  useful straight away instead of showing you everything at once.
                </p>
              </div>
            )}

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
              disabled={!consentData || !consentSms || !audience || busy}
            >
               {busy ? 'Saving' : 'Create My Account'}
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
