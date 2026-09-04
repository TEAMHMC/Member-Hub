// Registration for a live Academy training, and the bridge into a Hub account.
//
// The flow exists because live trainings are announced, not always open:
//
//   details  → who is registering, plus the license details a CE certificate
//              must carry. Prefilled and mostly skipped for signed-in members.
//   account  → passwordless Hub account, using the same request-link/verify-link
//              identity as sign-in. Skipped entirely if they are already signed in.
//   done     → what actually happens next, in plain terms.
//
// Registration is saved BEFORE account creation is attempted. A learner who
// abandons the account step is still registered and still gets the confirmation
// email, because the training is the thing they came for.

import React, { useState } from 'react';
import { ArrowRight, Check, Loader2, ShieldCheck } from 'lucide-react';
import type { Course } from './catalog';
import { training as trainingApi, client as clientApi, ApiError } from '../../services/api';

interface Props {
  course: Course;
  /** Session with a real date, when one is scheduled. */
  session?: { id: string; startsAt: string; title: string };
  /** Signed-in member. When present the account step is skipped. */
  member?: { firstName?: string; lastName?: string; email?: string; phone?: string } | null;
  onClose: () => void;
  /** Called after a signed-out learner finishes creating their Hub account. */
  onAccountCreated?: (email: string, firstName: string, lastName: string) => void;
}

// Boards named in the LACDMH approval. Free text would produce certificates that
// do not match what the approval recognizes.
const LICENSE_TYPES = ['LCSW', 'LMFT', 'LPCC', 'LEP', 'RN', 'Psychologist', 'CCAPP', 'Other'];

const input =
  'w-full h-[48px] px-4 rounded-2xl border border-zinc-200 bg-white text-[15px] focus:ring-4 focus:ring-[#233DFF]/10 focus:border-[#233DFF]/30 outline-none transition-all placeholder:text-zinc-300';
const label = 'block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1';

const TrainingRegistration: React.FC<Props> = ({ course, session, member, onClose, onAccountCreated }) => {
  const signedIn = !!member?.email;

  const [step, setStep] = useState<'details' | 'account' | 'code' | 'done'>('details');
  const [firstName, setFirstName] = useState(member?.firstName || '');
  const [lastName, setLastName] = useState(member?.lastName || '');
  const [email, setEmail] = useState(member?.email || '');
  const [phone, setPhone] = useState(member?.phone || '');
  const [modality, setModality] = useState<'virtual' | 'in-person' | 'either'>('either');

  const [nameOnLicense, setNameOnLicense] = useState('');
  const [licenseType, setLicenseType] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [accommodations, setAccommodations] = useState('');

  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [already, setAlready] = useState(false);

  const needsCe = !!course.ce;
  const price = course.price;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const detailsValid = firstName.trim() && lastName.trim() && emailValid && (!needsCe || licenseType);

  const submitRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!detailsValid || busy) return;
    setBusy(true);
    setErr(null);

    const payload = {
      courseId: course.id,
      courseTitle: course.ce?.approvedTitle || course.title,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      modality,
      ceProfile: needsCe
        ? {
            nameOnLicense: nameOnLicense.trim() || `${firstName.trim()} ${lastName.trim()}`,
            licenseType,
            licenseNumber: licenseNumber.trim(),
            accommodations: accommodations.trim(),
          }
        : accommodations.trim()
        ? { accommodations: accommodations.trim() }
        : undefined,
    };

    try {
      const res = session
        ? await trainingApi.rsvp({ ...payload, eventId: session.id, eventDate: session.startsAt })
        : await trainingApi.registerInterest(payload);
      setAlready(!!(res as any).alreadyRegistered);
      /**
       * A paid seat goes to payment, and the place is already held.
       *
       * Registration is recorded first and payment second, deliberately. If PayPal fails,
       * or somebody closes the tab at the checkout, HMC still knows they wanted the seat
       * and can take the money another way. Taking payment first and recording second
       * would mean a failed write loses a paying attendee silently.
       */
      setStep(signedIn ? 'done' : 'account');
    } catch (e) {
      const status = e instanceof ApiError ? e.status : 0;
      // 404 means the registration endpoint is not deployed yet. Say so plainly
      // and give a route that actually works, rather than a generic retry that
      // will fail again. Never report a registration we did not record.
      setErr(
        status === 429
          ? 'Too many attempts from this connection. Please wait a minute and try again.'
          : status === 404
          ? 'Online registration for this training is not open yet. Email contact@healthmatters.clinic or call (323) 990-4325 and we will register you directly and hold your place.'
          : 'We could not record your registration. Please try again, or call (323) 990-4325 and we will register you directly.',
      );
    } finally {
      setBusy(false);
    }
  };

  const requestCode = async () => {
    setBusy(true);
    setErr(null);
    try {
      await clientApi.requestLink(email.trim().toLowerCase());
      setStep('code');
    } catch {
      setErr('We could not send your code. Your training registration is saved either way.');
    } finally {
      setBusy(false);
    }
  };

  const verifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().length !== 6 || busy) return;
    setBusy(true);
    setErr(null);
    try {
      await clientApi.verifyLink(email.trim().toLowerCase(), code.trim());
      onAccountCreated?.(email.trim().toLowerCase(), firstName.trim(), lastName.trim());
      setStep('done');
    } catch {
      setErr('That code did not match or has expired. You can request a new one.');
    } finally {
      setBusy(false);
    }
  };

  const Shell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="fixed inset-0 z-[80] bg-zinc-900/40 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-lg bg-white rounded-[32px] p-7 sm:p-9 my-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {children}
      </div>
    </div>
  );

  // ── Confirmation ───────────────────────────────────────────────────────
  if (step === 'done') {
    return (
      <Shell>
        <div className="text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <Check size={26} strokeWidth={3} />
          </div>
          <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">
            {already ? 'You were already registered' : 'You are registered'}
          </h2>
          <p className="text-[15px] text-zinc-600 leading-relaxed">
            {session ? (
              <>
                Your place is held for {course.title} on{' '}
                {new Date(session.startsAt).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}. A
                confirmation is on its way to {email}.
              </>
            ) : (
              <>
                This training is delivered live, so it runs on scheduled dates rather than on demand. We will email{' '}
                {email} as soon as the next session is scheduled. Nothing else is needed from you now.
              </>
            )}
          </p>
          {needsCe && (
            <p className="text-[13px] text-zinc-500 leading-relaxed bg-zinc-50 rounded-2xl p-4 text-left">
              Your continuing education certificate will be issued in the name and license number you gave, after you
              attend the full session and complete the evaluation.
            </p>
          )}
          {price && (
            /* Payment comes after the place is held, on purpose. If PayPal fails or the
               tab is closed at checkout, HMC still knows this person wanted the seat and
               can take the money another way. The other order loses a paying attendee
               silently. */
            <div className="rounded-2xl border border-[#0f0f0f]/20 p-5 text-left space-y-3">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[15px] font-semibold text-zinc-900">Seat fee</p>
                <p className="text-2xl font-semibold text-zinc-900 tabular-nums">${price.amountUsd}</p>
              </div>
              {price.note && <p className="text-[13px] text-zinc-500 leading-relaxed">{price.note}</p>}
              <a href={price.payUrl} target="_blank" rel="noreferrer" className="hmc-btn hmc-btn-primary w-full h-[50px] justify-center">
                Pay with PayPal
              </a>
              <p className="text-[12px] text-zinc-400 leading-relaxed">
                Your place is already held. If you would rather pay another way, call (323) 990-4325.
              </p>
            </div>
          )}
        </div>
        <button onClick={onClose} className={`hmc-btn w-full h-[50px] justify-center ${price ? 'hmc-btn-secondary' : 'hmc-btn-primary'}`}>
          Done
        </button>
      </Shell>
    );
  }

  // ── Hub account, for learners who do not have one ──────────────────────
  if (step === 'account' || step === 'code') {
    return (
      <Shell>
        <div className="space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#233DFF] flex items-center justify-center">
            <ShieldCheck size={22} />
          </div>
          <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">
            {step === 'account' ? 'Create your Member Hub account' : 'Enter your code'}
          </h2>
          <p className="text-[14.5px] text-zinc-600 leading-relaxed">
            {step === 'account' ? (
              <>
                You are registered for the training. Your Hub account is where your attendance, evaluation and
                certificate live. There is no password. We email a six-digit code to {email}.
              </>
            ) : (
              <>We sent a six-digit code to {email}. It expires shortly.</>
            )}
          </p>
        </div>

        {err && <p className="text-[13px] text-[#FF6F91] bg-pink-50/60 rounded-xl p-3 leading-relaxed">{err}</p>}

        {step === 'account' ? (
          <div className="space-y-3">
            <button
              onClick={requestCode}
              disabled={busy}
              className="hmc-btn hmc-btn-primary w-full h-[50px] justify-center disabled:opacity-50"
            >
              {busy ? <Loader2 size={16} className="animate-spin" /> : <>Email me a code <ArrowRight size={15} /></>}
            </button>
            <button
              onClick={onClose}
              className="w-full text-[12px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 py-2"
            >
              Skip for now
            </button>
            <p className="text-[12px] text-zinc-400 text-center leading-relaxed">
              Skipping does not cancel your registration.
            </p>
          </div>
        ) : (
          <form onSubmit={verifyCode} className="space-y-3">
            <input
              autoFocus
              inputMode="numeric"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="000000"
              className={`${input} text-center tracking-[0.5em] text-xl font-semibold`}
            />
            <button
              type="submit"
              disabled={busy || code.length !== 6}
              className="hmc-btn hmc-btn-primary w-full h-[50px] justify-center disabled:opacity-50"
            >
              {busy ? <Loader2 size={16} className="animate-spin" /> : <>Verify <ArrowRight size={15} /></>}
            </button>
            <button
              type="button"
              onClick={requestCode}
              className="w-full text-[12px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 py-2"
            >
              Send a new code
            </button>
          </form>
        )}
      </Shell>
    );
  }

  // ── Details ────────────────────────────────────────────────────────────
  return (
    <Shell>
      <div className="space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#233DFF]">
          {session ? 'Register for this session' : 'Register your interest'}
        </p>
        <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight leading-tight">{course.title}</h2>
        {!session && (
          <p className="text-[14px] text-zinc-600 leading-relaxed">
            This training is delivered live. No date is scheduled right now, so we will hold your details and email you
            when the next session opens.
          </p>
        )}
      </div>

      {err && <p className="text-[13px] text-[#FF6F91] bg-pink-50/60 rounded-xl p-3 leading-relaxed">{err}</p>}

      <form onSubmit={submitRegistration} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={label}>First name</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className={input} required />
          </div>
          <div>
            <label className={label}>Last name</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className={input} required />
          </div>
        </div>

        <div>
          <label className={label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={input}
            placeholder="you@example.org"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={label}>Phone (optional)</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className={input} />
          </div>
          <div>
            <label className={label}>Preferred format</label>
            <select value={modality} onChange={(e) => setModality(e.target.value as any)} className={input}>
              <option value="either">Either works</option>
              <option value="virtual">Virtual</option>
              <option value="in-person">In person</option>
            </select>
          </div>
        </div>

        {needsCe && (
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5 space-y-4">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Continuing education details
              </p>
              <p className="text-[12.5px] text-zinc-500 leading-relaxed">
                {course.ce!.hours} CE hour, approved by {course.ce!.agency}. The certificate must carry your name
                exactly as it appears on your license, so we collect it now rather than at the session.
              </p>
            </div>
            <div>
              <label className={label}>Name as it appears on your license</label>
              <input
                value={nameOnLicense}
                onChange={(e) => setNameOnLicense(e.target.value)}
                className={input}
                placeholder={`${firstName} ${lastName}`.trim() || 'Full legal name'}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={label}>License type</label>
                <select value={licenseType} onChange={(e) => setLicenseType(e.target.value)} className={input} required>
                  <option value="">Select</option>
                  {LICENSE_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label}>License number</label>
                <input value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} className={input} />
              </div>
            </div>
          </div>
        )}

        <div>
          <label className={label}>Accessibility or language needs (optional)</label>
          <textarea
            value={accommodations}
            onChange={(e) => setAccommodations(e.target.value)}
            rows={2}
            className={`${input} h-auto py-3 resize-none`}
            placeholder="ASL interpretation, Spanish materials, captioning, anything else"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <button
            type="submit"
            disabled={!detailsValid || busy}
            className="hmc-btn hmc-btn-primary flex-1 h-[50px] justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {busy ? <Loader2 size={16} className="animate-spin" /> : <>Register <ArrowRight size={15} /></>}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-[12px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 px-6"
          >
            Cancel
          </button>
        </div>

        <p className="text-[12px] text-zinc-400 leading-relaxed">
          We use these details to register you and to issue your certificate. Academy learning records are kept
          separate from clinical records, and registering for education does not create a patient relationship.
        </p>
      </form>
    </Shell>
  );
};

export default TrainingRegistration;
