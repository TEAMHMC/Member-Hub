import React from 'react';
import { Phone, Globe, MapPin, Clock, AlertCircle, CheckCircle2, Hourglass } from 'lucide-react';
import type { ClientMe } from '../../services/api';
import {
  stageCopy, isOpen, isUrgent, requestedOn, hasContact, telHref, websiteHref,
  HMC_PHONE, HMC_PHONE_HREF, HMC_EMAIL, type Referral,
} from './referralCopy';

/**
 * A member's own referrals, said in terms they can act on.
 *
 * The Hub has known about referrals since it was built and showed one thing about them: a
 * pill reading "1 referral in progress". A member could not tell whether a request had been
 * opened, whether a navigator had already tried to call them, or how to reach the
 * organization they were sent to. On August 27 a caseworker's referral started reaching the
 * member it was about for the first time, which made that pill the whole of what those
 * members could see.
 *
 * Everything here is either the member's own referral or public directory contact for the
 * organization. No case note, service category, screening or clinical flag crosses into the
 * Hub, and a test in the portal fails if one starts to.
 */

const STAGE_TONE: Record<string, { pill: string; icon: React.ReactNode }> = {
  received: { pill: 'bg-zinc-100 text-zinc-600', icon: <Hourglass size={13} /> },
  matched: { pill: 'bg-blue-50 text-[#233DFF]', icon: <Hourglass size={13} /> },
  in_touch: { pill: 'bg-blue-50 text-[#233DFF]', icon: <Phone size={13} /> },
  completed: { pill: 'bg-emerald-50 text-emerald-700', icon: <CheckCircle2 size={13} /> },
  closed: { pill: 'bg-zinc-100 text-zinc-500', icon: <AlertCircle size={13} /> },
};

const ContactLine: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
  <p className="flex items-start gap-2.5 text-[13.5px] text-zinc-600 leading-relaxed">
    <span className="text-zinc-400 mt-0.5 shrink-0">{icon}</span>
    <span className="min-w-0 break-words">{children}</span>
  </p>
);

const ReferralCard: React.FC<{ referral: Referral }> = ({ referral }) => {
  const copy = stageCopy(referral);
  const stage = referral.stage || (isOpen(referral) ? 'received' : 'completed');
  const tone = STAGE_TONE[stage] || STAGE_TONE.received;
  const raised = requestedOn(referral.createdAt);
  const tel = telHref(referral.resource?.phone);
  const site = websiteHref(referral.resource?.website);

  return (
    <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-6 space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 space-y-1">
          <h4 className="text-[17px] font-semibold text-zinc-900 leading-snug">
            {/* A referral can exist before it has been matched to anywhere. Saying so is
                better than a card with a blank where the organization should be. */}
            {referral.resourceName || 'Being matched to an organization'}
          </h4>
          {raised && <p className="text-[12px] text-zinc-400">Requested {raised}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {isUrgent(referral) && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#FF6F91]/15 text-[#c2185b]">
              Urgent
            </span>
          )}
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${tone.pill}`}>
            {tone.icon}{copy.label}
          </span>
        </div>
      </div>

      <p className="text-[14.5px] text-zinc-600 leading-relaxed">{copy.meaning}</p>

      {hasContact(referral) && (
        <div className="rounded-xl bg-zinc-50/80 border border-zinc-200/60 p-4 space-y-2">
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">How to reach them directly</p>
          {referral.resource?.phone && (
            <ContactLine icon={<Phone size={14} />}>
              {tel
                ? <a href={tel} className="font-semibold text-[#233DFF] underline">{referral.resource.phone}</a>
                : referral.resource.phone}
            </ContactLine>
          )}
          {referral.resource?.website && (
            <ContactLine icon={<Globe size={14} />}>
              {site
                ? <a href={site} target="_blank" rel="noreferrer" className="font-semibold text-[#233DFF] underline">{referral.resource.website}</a>
                : referral.resource.website}
            </ContactLine>
          )}
          {referral.resource?.address && <ContactLine icon={<MapPin size={14} />}>{referral.resource.address}</ContactLine>}
          {referral.resource?.hours && <ContactLine icon={<Clock size={14} />}>{referral.resource.hours}</ContactLine>}
        </div>
      )}

      {referral.awaitingResponse && (
        /* The state that used to be invisible. A member waiting on a referral nobody has
           picked up should not have to guess whether it is moving. */
        <p className="text-[13.5px] text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
          Not heard anything? Call{' '}
          <a href={HMC_PHONE_HREF} className="font-semibold text-[#233DFF] underline">{HMC_PHONE}</a>{' '}
          or email{' '}
          <a href={`mailto:${HMC_EMAIL}`} className="font-semibold text-[#233DFF] underline">{HMC_EMAIL}</a>{' '}
          and we will find out where it stands.
        </p>
      )}
    </div>
  );
};

const MemberReferrals: React.FC<{ me: ClientMe | null }> = ({ me }) => {
  const referrals = me?.referrals || [];
  if (!referrals.length) return null;

  const open = referrals.filter(isOpen);
  const settled = referrals.filter((r) => !isOpen(r));

  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">Your referrals</h3>
        <p className="text-[14.5px] text-zinc-500 leading-relaxed">
          Every connection we are making for you, and where each one stands right now.
        </p>
      </div>

      {open.length > 0 && (
        <div className="space-y-4">
          {open.map((r) => <ReferralCard key={r.id} referral={r} />)}
        </div>
      )}

      {settled.length > 0 && (
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Closed and completed</p>
          {settled.map((r) => <ReferralCard key={r.id} referral={r} />)}
        </div>
      )}
    </section>
  );
};

export default MemberReferrals;
