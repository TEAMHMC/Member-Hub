import React, { useEffect, useState } from 'react';
import { Coins, ArrowUpRight, ArrowDownRight, AlertTriangle } from 'lucide-react';
import { credits as creditsApi, type CreditWallet } from '../../services/api';

/**
 * A member's Health Credits.
 *
 * ARCH-02 in the architecture review: every credits endpoint authenticated a
 * Firebase volunteer account, and the wallet was rendered behind user.isAdmin. A
 * community member could not see a credit, let alone hold one, which left the
 * earning side of the model reachable only by staff.
 *
 * The ledger was never the problem. healthCredits is keyed by account id, so a
 * member has always been able to hold credits. What was missing was somewhere to
 * look and any history behind the number.
 *
 * A balance with no history is the thing people complain about, so the list is the
 * point of this screen rather than decoration on it. Zero is shown plainly, with
 * what earning looks like, because an empty wallet is a normal state and hiding it
 * would make the whole mechanism invisible to exactly the people it is for.
 */

const LABEL: Record<string, string> = {
  screening: 'Health screening',
  workshop: 'Workshop',
  event: 'Community event',
  volunteer: 'Volunteering',
  navigator: 'Working with a navigator',
  referral: 'Referral',
  admin: 'Adjustment',
};

const HealthCredits: React.FC = () => {
  const [wallet, setWallet] = useState<CreditWallet | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    creditsApi.wallet()
      .then((w) => { if (!cancelled) setWallet(w); })
      .catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; };
  }, []);

  if (failed) {
    return (
      <div className="max-w-3xl mx-auto py-10">
        <div className="flex items-start gap-3 rounded-3xl border border-amber-200 bg-amber-50 p-5">
          <AlertTriangle size={18} className="text-amber-600 mt-0.5 shrink-0" />
          <p className="text-sm font-semibold text-amber-900">
            We could not load your credits just now. Your balance is safe; please try again shortly.
          </p>
        </div>
      </div>
    );
  }

  if (!wallet) {
    return (
      <div className="max-w-3xl mx-auto py-10">
        <p className="text-sm text-zinc-500">Loading your credits…</p>
      </div>
    );
  }

  const rates = Object.entries(wallet.earnRates || {});

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6 animate-in fade-in duration-500">
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Your account</p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mt-1">Health Credits</h1>
        <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
          Credits recognise the time you put into your own health and into your community.
          They are awarded by HMC staff and they never expire.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-zinc-200/70 p-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#233DFF] shrink-0">
            <Coins size={26} />
          </div>
          <div>
            <p className="text-4xl font-semibold text-zinc-900 tabular-nums">{wallet.balance}</p>
            <p className="text-sm text-zinc-500">available now</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-7 pt-6 border-t border-zinc-100">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Earned all time</p>
            <p className="text-xl font-semibold text-zinc-900 tabular-nums">{wallet.lifetimeEarned}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Used</p>
            <p className="text-xl font-semibold text-zinc-900 tabular-nums">{wallet.lifetimeSpent}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-zinc-200/70 p-6">
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Activity</p>
        {wallet.transactions.length === 0 ? (
          <div className="space-y-4">
            <p className="text-sm text-zinc-600 leading-relaxed">
              Nothing here yet. Credits are added when staff record something you have taken part in.
            </p>
            {rates.length > 0 && (
              <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">What earns credits</p>
                <ul className="space-y-1.5">
                  {rates.map(([k, v]) => (
                    <li key={k} className="flex items-center justify-between text-sm">
                      <span className="text-zinc-700">{LABEL[k] || k}</span>
                      <span className="font-semibold text-zinc-900 tabular-nums">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="divide-y divide-zinc-100">
            {wallet.transactions.map((t) => {
              const isCredit = t.direction !== 'debit';
              return (
                <div key={t.id} className="flex items-start justify-between gap-4 py-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isCredit ? 'bg-emerald-50 text-emerald-700' : 'bg-orange-50 text-[#FF6E40]'}`}>
                      {isCredit ? <ArrowUpRight size={15} /> : <ArrowDownRight size={15} />}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-zinc-900">{t.reason || (t.category ? LABEL[t.category] || t.category : 'Adjustment')}</p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">
                        {t.category ? LABEL[t.category] || t.category : 'Adjustment'}
                        {t.createdAt ? ` · ${new Date(t.createdAt).toLocaleDateString()}` : ''}
                      </p>
                    </div>
                  </div>
                  <p className={`text-sm font-semibold tabular-nums shrink-0 ${isCredit ? 'text-emerald-700' : 'text-[#FF6E40]'}`}>
                    {isCredit ? '+' : '-'}{Math.abs(t.amount)}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <p className="text-xs text-zinc-400 leading-relaxed">
        Credits are recognition, not money, and cannot be exchanged for cash. If something here looks
        wrong, email volunteer@healthmatters.clinic and a person will check the record.
      </p>
    </div>
  );
};

export default HealthCredits;
