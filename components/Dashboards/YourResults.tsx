import React, { useCallback, useEffect, useState } from 'react';
import { Activity, ShieldCheck, KeyRound, AlertTriangle, Check } from 'lucide-react';
import { memberResults, ApiError, type MemberResult } from '../../services/api';

/**
 * A member's own screening results.
 *
 * The screen this replaces was a hard-coded empty state. It said "No screenings
 * recorded yet" to everybody, including people who had been screened, because it
 * never asked the server anything.
 *
 * Two gates sit in front of the data and both are answered here rather than
 * failing shut. Being signed in proves control of an email address; it does not
 * prove which clinical record is yours, so a record is shown only once it has
 * been claimed with a code. Consent to view results is a separate decision from
 * consent to share them, and is asked for separately.
 */

const LEVEL_STYLES: Record<string, string> = {
  normal: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  low: 'bg-sky-50 text-sky-700 border-sky-200',
  elevated: 'bg-amber-50 text-amber-800 border-amber-200',
  high: 'bg-red-50 text-red-700 border-red-200',
  critical: 'bg-red-100 text-red-800 border-red-300',
};

const MEASURE_LABEL: Record<string, string> = {
  bloodPressure: 'Blood pressure',
  heartRate: 'Heart rate',
  glucose: 'Blood sugar',
  oxygenSaturation: 'Oxygen',
  bmi: 'BMI',
};

const readableDate = (iso: string | null): string => {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
};

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl border border-zinc-200/50 shadow-sm p-6 ${className}`}>{children}</div>
);

const PrimaryButton = ({ children, onClick, disabled = false, className = '' }: any) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-8 py-3.5 bg-[#233DFF] text-white rounded-full font-bold uppercase tracking-wider text-xs transition-all hover:bg-[#1a2acc] active:scale-95 disabled:opacity-50 shadow-md shadow-[#233DFF]/20 inline-flex items-center justify-center gap-2 ${className}`}
  >
    {children}
  </button>
);

/** Vitals as a person reads them, not as they are stored. */
const VitalRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-baseline justify-between gap-4 py-2 border-b border-zinc-100 last:border-0">
    <span className="text-sm text-zinc-500">{label}</span>
    <span className="text-base font-semibold text-zinc-900 tabular-nums">{value}</span>
  </div>
);

const ResultCard: React.FC<{ result: MemberResult }> = ({ result }) => {
  const v = result.vitals || {};
  const rows: { label: string; value: string }[] = [];
  if (v.bloodPressure) rows.push({ label: 'Blood pressure', value: `${v.bloodPressure.systolic}/${v.bloodPressure.diastolic}` });
  if (typeof v.heartRate === 'number') rows.push({ label: 'Heart rate', value: `${v.heartRate} bpm` });
  if (typeof v.glucose === 'number') rows.push({ label: 'Blood sugar', value: `${v.glucose} mg/dL` });
  if (typeof v.oxygenSaturation === 'number') rows.push({ label: 'Oxygen', value: `${v.oxygenSaturation}%` });
  if (typeof v.bmi === 'number') rows.push({ label: 'BMI', value: v.bmi.toFixed(1) });

  return (
    <Card>
      <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
        <p className="text-sm font-semibold text-zinc-900">{readableDate(result.at) || 'Screening'}</p>
        {result.followUpRecommended && (
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            <AlertTriangle size={12} /> Follow up recommended
          </span>
        )}
      </div>

      <div className="mb-4">
        {rows.map((r) => <VitalRow key={r.label} {...r} />)}
      </div>

      {result.flags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {result.flags.map((f) => (
            <span
              key={f.measure}
              className={`text-[11px] font-semibold px-3 py-1.5 rounded-full border ${LEVEL_STYLES[f.level] || 'bg-zinc-50 text-zinc-600 border-zinc-200'}`}
            >
              {MEASURE_LABEL[f.measure] || f.measure}: {f.label}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
};

const YourResults: React.FC<{ onBrowseEvents?: () => void }> = ({ onBrowseEvents }) => {
  const [state, setState] = useState<'loading' | 'ok' | 'not_linked' | 'no_consent' | 'error'>('loading');
  const [results, setResults] = useState<MemberResult[]>([]);
  const [disclaimer, setDisclaimer] = useState('');
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const load = useCallback(async () => {
    setNotice(null);
    try {
      const data = await memberResults.results();
      setResults(data.results || []);
      setDisclaimer(data.disclaimer || '');
      setState('ok');
    } catch (e) {
      // The server names which gate stopped it, so the screen can act on the
      // reason rather than showing everyone the same dead end.
      const code = e instanceof ApiError ? e.code : null;
      if (code === 'not_linked') setState('not_linked');
      else if (code === 'no_consent') setState('no_consent');
      else setState('error');
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const submitCode = async () => {
    setBusy(true); setNotice(null);
    try {
      await memberResults.claim(code.trim().toUpperCase());
      setCode('');
      await load();
    } catch (e) {
      const c = e instanceof ApiError ? e.code : null;
      setNotice(
        c === 'code_not_recognised' ? 'That code was not recognised. Check it and try again.'
        : c === 'code_expired' ? 'That code has expired. Ask the team for a new one.'
        : c === 'too_many_attempts' ? 'Too many attempts on this code. Ask the team for a new one.'
        : c === 'already_claimed' ? 'That record is already linked to another account. Contact us and we will sort it out.'
        : 'Something went wrong. Try again in a moment.',
      );
    } finally { setBusy(false); }
  };

  const giveConsent = async () => {
    setBusy(true); setNotice(null);
    try { await memberResults.consent(); await load(); }
    catch { setNotice('We could not save that just then. Try again in a moment.'); }
    finally { setBusy(false); }
  };

  const Header = (
    <div className="text-center space-y-3">
      <h2 className="text-4xl font-semibold tracking-tight">Latest Results</h2>
      <p className="text-zinc-500 text-lg">Your clinical screening history and health metrics.</p>
    </div>
  );

  if (state === 'loading') {
    return (
      <div className="max-w-4xl mx-auto py-10 space-y-10 text-left">
        {Header}
        <Card className="py-16 text-center text-sm text-zinc-400">Loading your results...</Card>
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className="max-w-4xl mx-auto py-10 space-y-10 text-left">
        {Header}
        <Card className="flex gap-3">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-zinc-900">Your results could not be loaded</p>
            <p className="text-sm text-zinc-600 mt-1">
              Nothing has been lost. Refresh the page, and if it keeps happening let us know at contact@healthmatters.clinic.
            </p>
          </div>
        </Card>
      </div>
    );
  }

  if (state === 'not_linked') {
    return (
      <div className="max-w-4xl mx-auto py-10 space-y-10 text-left">
        {Header}
        <Card className="space-y-5">
          <div className="w-14 h-14 rounded-full bg-[#233DFF]/5 border border-[#233DFF]/10 flex items-center justify-center text-[#233DFF]">
            <KeyRound size={24} strokeWidth={1.5} />
          </div>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-zinc-900">Connect your screening record</p>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-lg">
              Signing in tells us your email address. It does not tell us which screening record is
              yours, and we will not guess. Enter the code from the team who screened you and your
              results will appear here.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="Enter your code"
              maxLength={16}
              // Wide tracking and caps are for a code being read back, and they were
              // being applied to the whole field, so the placeholder rendered as
              // spaced-out capitals instead of a sentence. text-transform cannot be
              // undone by a placeholder: variant, so the styling is applied only once
              // there is a value to style. onChange already uppercases the value.
              // Letter spacing is an inline style, not tracking-[0.2em]. This app loads
              // Tailwind from the CDN, whose JIT generates rules from classes it can see
              // in the DOM, and an arbitrary value that only appears once a field has a
              // value is not reliably picked up. Verified in the browser: the class
              // produced letterSpacing "normal", the inline style produces 0.2em.
              style={code ? { letterSpacing: '0.2em' } : undefined}
              className={`flex-1 h-[52px] px-5 rounded-2xl border border-zinc-200 bg-white text-base focus:ring-4 focus:ring-[#233DFF]/10 focus:border-[#233DFF]/30 outline-none transition-all placeholder:text-zinc-400 placeholder:font-medium ${
                code ? 'font-semibold uppercase' : 'font-medium'
              }`}
            />
            <PrimaryButton onClick={submitCode} disabled={busy || code.trim().length < 6}>
              {busy ? 'Checking...' : 'Connect'}
            </PrimaryButton>
          </div>
          {notice && <p className="text-sm text-red-600">{notice}</p>}
          <p className="text-xs text-zinc-400">
            No code? Ask at your next event, or email contact@healthmatters.clinic.
          </p>
        </Card>
      </div>
    );
  }

  if (state === 'no_consent') {
    return (
      <div className="max-w-4xl mx-auto py-10 space-y-10 text-left">
        {Header}
        <Card className="space-y-5">
          <div className="w-14 h-14 rounded-full bg-[#233DFF]/5 border border-[#233DFF]/10 flex items-center justify-center text-[#233DFF]">
            <ShieldCheck size={24} strokeWidth={1.5} />
          </div>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-zinc-900">Show your results here?</p>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-lg">
              Your record is connected. Before we show clinical results in the Hub we ask you once,
              because seeing them here is a separate choice from sharing them with a provider. You
              can change your mind at any time.
            </p>
          </div>
          <PrimaryButton onClick={giveConsent} disabled={busy}>
            {busy ? 'Saving...' : <><Check size={14} /> Yes, show my results</>}
          </PrimaryButton>
          {notice && <p className="text-sm text-red-600">{notice}</p>}
        </Card>
      </div>
    );
  }

  if (!results.length) {
    return (
      <div className="max-w-4xl mx-auto py-10 space-y-10 text-left">
        {Header}
        <Card className="text-center py-24 space-y-6 bg-zinc-50/30 border-dashed border-zinc-200">
          <div className="w-20 h-20 rounded-full bg-white border border-zinc-100 flex items-center justify-center text-zinc-200 mx-auto shadow-sm">
            <Activity size={40} strokeWidth={1} />
          </div>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-zinc-900">No screenings recorded yet</p>
            <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
              Attend an HMC Health Fair to get your first official blood pressure and vitals reading.
            </p>
          </div>
          {onBrowseEvents && <PrimaryButton onClick={onBrowseEvents} className="px-12">Browse Fair Schedule</PrimaryButton>}
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-8 text-left animate-in fade-in duration-500">
      {Header}

      {/* Rendered from the payload rather than written here, so a result can never
          appear on a screen that forgot to say what it is. */}
      {disclaimer && (
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 px-5 py-4">
          <p className="text-sm text-zinc-600 leading-relaxed">{disclaimer}</p>
        </div>
      )}

      <div className="space-y-4">
        {results.map((r) => <ResultCard key={r.id} result={r} />)}
      </div>
    </div>
  );
};

export default YourResults;
