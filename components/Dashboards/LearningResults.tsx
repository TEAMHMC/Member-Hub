import React, { useEffect, useMemo, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { academyRecord } from '../../services/api';
import { PATHWAYS } from '../Academy/catalog';
import { loadState, saveState, knowledgeGain, type LearnerState } from '../Academy/progress';
import { mergeServerRecord, toServerRecord, baselineOffered, lessonsStarted } from '../Academy/outcomesSync';

/**
 * A learner's own results, on their profile.
 *
 * Baseline, post-test and the change between them, for every pathway they have started. This
 * reads the server's copy and folds in whatever this browser holds, so results taken on
 * another device appear here too, and results that only ever lived in this browser are sent
 * up the first time the profile opens. Renders nothing for somebody who has not enrolled, so
 * the page is unchanged for them.
 */
const LearningResults: React.FC<{ userId: string; memberName: string; onOpenAcademy: () => void }> = ({
  userId, memberName, onOpenAcademy,
}) => {
  const [state, setState] = useState<LearnerState>(() => loadState(userId));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    academyRecord.get()
      .then(({ record }) => {
        if (cancelled) return;
        const merged = mergeServerRecord(loadState(userId), record);
        saveState(userId, merged);
        setState(merged);
      })
      .catch(() => { /* this browser's copy is still shown */ })
      .finally(() => { if (!cancelled) setLoaded(true); });
    return () => { cancelled = true; };
  }, [userId]);

  // Once the server's copy is in, send up whatever only this browser knew. Idempotent.
  useEffect(() => {
    if (!loaded) return;
    academyRecord.put(toServerRecord(state), memberName).catch(() => { /* next visit */ });
    // Once per load. Sending on every state change here would only repeat the same thing.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  const rows = useMemo(() => PATHWAYS
    .filter((p) => state.enrolled.includes(p.id) || state.preTest[p.id] || state.postTest[p.id])
    .map((p) => ({ p, ...knowledgeGain(p.id, state) })), [state]);

  if (rows.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl border border-zinc-200/70 p-8 space-y-6">
      <div className="flex items-center gap-2 text-zinc-400">
        <TrendingUp size={16} />
        <p className="text-[10px] font-bold uppercase tracking-widest">Your learning results</p>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed">
        Your baseline is where you started. Your post-test shows where you ended up. The difference is what you gained.
      </p>

      <div className="divide-y divide-zinc-100">
        {rows.map(({ p, pre, post, gain }) => {
          const late = state.preTest[p.id] && state.preTest[p.id].beforeLearning === false;
          return (
            <div key={p.id} className="py-5 first:pt-0 last:pb-0 space-y-3">
              <p className="text-base font-semibold text-zinc-900">{p.title}</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-semibold text-zinc-900">{pre === null ? '--' : `${pre}%`}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Baseline</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-zinc-900">{post === null ? 'Not taken' : `${post}%`}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Post-test</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-zinc-900">{gain === null ? '--' : `${gain >= 0 ? '+' : ''}${gain} pts`}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Change</p>
                </div>
              </div>
              {late && (
                <p className="text-[13px] text-zinc-500 leading-relaxed">
                  You took this baseline after you had started the lessons, so it may understate how much you learned.
                </p>
              )}
              {baselineOffered(p, state) && (
                <p className="text-[13px] text-zinc-600 leading-relaxed">
                  {lessonsStarted(p, state) ? 'You have not taken the baseline for this pathway. ' : 'Take your baseline before your first lesson. '}
                  <button onClick={onOpenAcademy} className="font-bold text-[#233DFF] hover:underline">Open the Academy</button>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningResults;
