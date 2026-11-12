import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { staffApi, type AcademyOutcomes as Outcomes } from '../../services/api';
import { pathwayById } from '../Academy/catalog';

/**
 * What the Academy is achieving: who enrolled, who took the baseline, who took the post-test,
 * and how much they gained.
 *
 * Individual scores are learner data, so the server holds this behind staffAdmin and records
 * every read and every export. The averages cover only learners with a baseline taken before
 * any lesson and a post-test, because a baseline taken after learning began cannot show what
 * was learned. The counts beside them say how many were left out, so the numbers are not
 * read as more than they are.
 */

const card = 'bg-white rounded-3xl border border-zinc-200/70 p-6';
const label = 'text-[10px] font-black uppercase tracking-widest text-zinc-400';

const title = (id: string) => pathwayById(id)?.title || id;
const day = (iso: string | null) => (iso ? iso.slice(0, 10) : '');
const pts = (n: number | null) => (n === null ? '--' : `${n >= 0 ? '+' : ''}${n}`);
const pct = (n: number | null) => (n === null ? '--' : `${n}%`);

const SHOWN = 200;

const AcademyOutcomes: React.FC = () => {
  const [data, setData] = useState<Outcomes | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [pathway, setPathway] = useState<string>('all');

  useEffect(() => {
    staffApi.outcomes()
      .then(setData)
      .catch(() => setErr('The outcomes could not load. Your access may have changed, or the service is unreachable.'));
  }, []);

  const download = async () => {
    setBusy(true); setErr(null);
    try {
      const blob = await staffApi.outcomesCsv();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `academy-outcomes-${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setErr('The export did not download. Nothing was changed.');
    } finally { setBusy(false); }
  };

  if (err && !data) return <div className={card}><p className="text-sm font-semibold text-[#FF6F91]" role="alert">{err}</p></div>;
  if (!data) return <div className={card}><p className="text-sm text-zinc-500">Loading</p></div>;

  const rows = data.rows.filter((r) => pathway === 'all' || r.pathwayId === pathway);

  return (
    <div className="space-y-3">
      <div className={card}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-xl">
            <p className={label}>Academy outcomes</p>
            <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
              {data.learnerCount} {data.learnerCount === 1 ? 'learner has' : 'learners have'} a record. Every view and export of this page is logged.
            </p>
            <p className="text-xs text-zinc-500 mt-3 leading-relaxed">{data.note}</p>
            {data.truncated && (
              <p className="text-xs font-semibold text-amber-800 mt-3">This shows the first records only. The export has the same limit, so ask for it to be raised.</p>
            )}
          </div>
          <button
            onClick={download}
            disabled={busy}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#233DFF] text-white text-[11px] font-black uppercase tracking-wider disabled:opacity-50"
          >
            <Download size={14} /> {busy ? 'Preparing' : 'Download CSV'}
          </button>
        </div>
        {err && <p className="text-sm font-semibold text-[#FF6F91] mt-4" role="alert">{err}</p>}
      </div>

      <div className={card}>
        <p className={label}>By pathway</p>
        {data.totals.length === 0 ? (
          <p className="text-sm text-zinc-500 mt-3">Nothing has been recorded yet.</p>
        ) : (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  <th scope="col" className="py-2 pr-4">Pathway</th>
                  <th scope="col" className="py-2 pr-4 text-right">Enrolled</th>
                  <th scope="col" className="py-2 pr-4 text-right">Baseline</th>
                  <th scope="col" className="py-2 pr-4 text-right">Post-test</th>
                  <th scope="col" className="py-2 pr-4 text-right">Measured</th>
                  <th scope="col" className="py-2 pr-4 text-right">Avg baseline</th>
                  <th scope="col" className="py-2 pr-4 text-right">Avg post-test</th>
                  <th scope="col" className="py-2 text-right">Avg gain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {data.totals.map((t) => (
                  <tr key={t.pathwayId}>
                    <th scope="row" className="py-3 pr-4 font-semibold text-zinc-900">{title(t.pathwayId)}</th>
                    <td className="py-3 pr-4 text-right tabular-nums">{t.enrolled}</td>
                    <td className="py-3 pr-4 text-right tabular-nums">{t.tookBaseline}</td>
                    <td className="py-3 pr-4 text-right tabular-nums">{t.tookPost}</td>
                    <td className="py-3 pr-4 text-right tabular-nums">{t.measured}</td>
                    <td className="py-3 pr-4 text-right tabular-nums">{pct(t.meanBaseline)}</td>
                    <td className="py-3 pr-4 text-right tabular-nums">{pct(t.meanPost)}</td>
                    <td className="py-3 text-right tabular-nums font-semibold">{t.meanGain === null ? '--' : `${pts(t.meanGain)} pts`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="text-xs text-zinc-500 mt-4 leading-relaxed">
          Measured is the number of learners with a baseline taken before any lesson and a post-test. The averages describe only them.
        </p>
      </div>

      <div className={card}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className={label}>Learners</p>
          <label className="text-xs text-zinc-500 flex items-center gap-2">
            Pathway
            <select
              value={pathway}
              onChange={(e) => setPathway(e.target.value)}
              className="px-3 py-2 rounded-xl border border-zinc-300 text-sm"
            >
              <option value="all">All pathways</option>
              {data.totals.map((t) => <option key={t.pathwayId} value={t.pathwayId}>{title(t.pathwayId)}</option>)}
            </select>
          </label>
        </div>
        {rows.length === 0 ? (
          <p className="text-sm text-zinc-500 mt-3">No learners to show.</p>
        ) : (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  <th scope="col" className="py-2 pr-4">Learner</th>
                  <th scope="col" className="py-2 pr-4">Pathway</th>
                  <th scope="col" className="py-2 pr-4 text-right">Baseline</th>
                  <th scope="col" className="py-2 pr-4 text-right">Post-test</th>
                  <th scope="col" className="py-2 text-right">Gain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {rows.slice(0, SHOWN).map((r) => (
                  <tr key={`${r.email}|${r.pathwayId}`}>
                    <td className="py-3 pr-4">
                      <span className="block font-semibold text-zinc-900">{r.name || r.email}</span>
                      {r.name && <span className="block text-[11px] text-zinc-400">{r.email}</span>}
                    </td>
                    <td className="py-3 pr-4 text-zinc-600">{title(r.pathwayId)}</td>
                    <td className="py-3 pr-4 text-right tabular-nums">
                      {pct(r.baselineScore)}
                      {r.baselineScore !== null && r.baselineClean === false && (
                        <span className="block text-[10px] text-amber-700">taken late</span>
                      )}
                      {r.baselineAt && <span className="block text-[10px] text-zinc-400">{day(r.baselineAt)}</span>}
                    </td>
                    <td className="py-3 pr-4 text-right tabular-nums">
                      {pct(r.postScore)}
                      {r.postScore !== null && <span className="block text-[10px] text-zinc-400">{r.postAttempts} {r.postAttempts === 1 ? 'try' : 'tries'}</span>}
                    </td>
                    <td className="py-3 text-right tabular-nums font-semibold">{r.gain === null ? '--' : `${pts(r.gain)} pts`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {rows.length > SHOWN && (
          <p className="text-xs text-zinc-500 mt-4">Showing {SHOWN} of {rows.length}. The CSV has all of them.</p>
        )}
      </div>
    </div>
  );
};

export default AcademyOutcomes;
