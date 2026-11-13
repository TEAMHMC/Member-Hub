import React, { useEffect, useMemo, useState } from 'react';
import { staffApi, ApiError, type HubDraft, type HubDraftListItem, type HubDraftLive, type HubDraftStatus, type HubValidation } from '../../services/api';
import { findCourse, editableSections } from '../Academy/editorSource';
import { StructureEditor, TestsEditor } from './StructureEditor';
import { diffStructure, tidy, type FullStructure, type PathwayTests } from '../Academy/courseStructure';
import { editorStart } from '../Academy/editorStart';

/**
 * The review queue for course drafts that authors have submitted.
 *
 * Authors, usually students, write course content and hand it over. Nothing they write
 * reaches a learner. Somebody holding the approve capability reads it here, may correct
 * the lesson text, and either releases it or sends it back with a note. Anyone who can see
 * curriculum can read the queue, but only a clinical reviewer or an administrator gets the
 * buttons. The server enforces that. Hiding the buttons here is a courtesy, not the gate.
 */

const card = 'bg-white rounded-3xl border border-zinc-200/70 p-6';
const label = 'text-[10px] font-black uppercase tracking-widest text-zinc-400';
const input = 'w-full px-4 py-3 rounded-2xl border border-zinc-300 text-sm focus:border-[#233DFF] focus:outline-none';
const primary = 'px-5 py-3 rounded-full bg-[#233DFF] text-white text-[11px] font-black uppercase tracking-wider disabled:opacity-50';
const secondary = 'px-5 py-3 rounded-full border border-zinc-300 text-[11px] font-black uppercase tracking-wider text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 disabled:opacity-50';

const STATUS_LABEL: Record<HubDraftStatus, string> = {
  draft: 'In progress',
  submitted: 'Waiting for review',
  returned: 'Sent back',
  approved: 'Released',
};

const FILTERS: { id: 'submitted' | 'returned' | 'approved'; label: string }[] = [
  { id: 'submitted', label: 'Waiting for review' },
  { id: 'returned', label: 'Sent back' },
  { id: 'approved', label: 'Released' },
];

const norm = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase();
const day = (iso: string | null) => (iso ? iso.slice(0, 10) : '');

const ERRORS: Record<string, string> = {
  own_draft: 'You cannot decide on a draft you wrote.',
  not_a_reviewer: 'Only a Clinical Reviewer or a Hub Administrator can decide on a draft.',
  not_submitted: 'That draft is no longer waiting for review. It may have been withdrawn or decided already.',
  note_required: 'Say what needs to change, so the author knows what to fix.',
  nothing_to_release: 'There is nothing in this draft to release.',
};

const CurriculumReview: React.FC<{ onCount?: (n: number) => void }> = ({ onCount }) => {
  const [filter, setFilter] = useState<'submitted' | 'returned' | 'approved'>('submitted');
  const [items, setItems] = useState<HubDraftListItem[] | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [draft, setDraft] = useState<HubDraft | null>(null);
  const [live, setLive] = useState<HubDraftLive | null>(null);
  const [liveChanged, setLiveChanged] = useState(false);
  const [canDecide, setCanDecide] = useState(false);
  const [sections, setSections] = useState<{ heading: string; body: string }[]>([]);
  const [edited, setEdited] = useState(false);
  // The authored structure or tests in the draft. The reviewer may correct them, and only what
  // they changed from what was submitted is sent back, so approving untouched sends nothing.
  const [struct, setStruct] = useState<FullStructure | null>(null);
  const [submittedStruct, setSubmittedStruct] = useState<FullStructure | null>(null);
  const [compiled, setCompiled] = useState<FullStructure | null>(null);
  const [tests, setTests] = useState<PathwayTests | null>(null);
  const [submittedTests, setSubmittedTests] = useState<PathwayTests | null>(null);
  const [validation, setValidation] = useState<HubValidation | null>(null);
  const [ack, setAck] = useState(false);
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);

  const load = (status = filter) => {
    staffApi.reviewQueue(status)
      .then((r) => {
        setItems(r.drafts);
        if (status === 'submitted') onCount?.(r.drafts.length);
      })
      .catch(() => setErr('The review queue could not load.'));
  };
  useEffect(() => { load(filter); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [filter]);

  const open = (id: string) => {
    setOpenId(id); setDraft(null); setErr(null); setDone(null); setNote(''); setEdited(false);
    setStruct(null); setSubmittedStruct(null); setCompiled(null); setTests(null); setSubmittedTests(null); setValidation(null); setAck(false);
    staffApi.reviewDraft(id)
      .then((r) => {
        setDraft(r.draft); setLive(r.live); setLiveChanged(r.liveChangedSinceDraft); setCanDecide(r.canDecide);
        setSections(r.draft.sections.map((s) => ({ ...s })));
        setValidation(r.validation || null);
        const st = editorStart(r.draft.moduleId, r.draft.kind, {
          content: r.live.content, sections: r.live.sections, page: r.live.page, version: r.live.version,
          structure: r.live.structure, pathwayTests: r.live.pathwayTests,
        }, { structure: r.draft.structure, pathwayTests: r.draft.pathwayTests });
        if (st.kind === 'tests') {
          if (r.draft.pathwayTests) { setTests(st.start); setSubmittedTests(JSON.parse(JSON.stringify(st.start))); }
        } else if (st.start && r.draft.structure) {
          setCompiled(st.compiled); setStruct(st.start); setSubmittedStruct(JSON.parse(JSON.stringify(st.start)));
        }
      })
      .catch(() => setErr('That draft could not be opened.'));
  };

  const close = () => { setOpenId(null); setDraft(null); load(); };

  /** What a learner reads for one lesson today, from the catalogue with any release over it. */
  const liveText = useMemo(() => {
    if (!draft || !live) return () => '';
    const found = findCourse(draft.moduleId);
    if (!found) return (h: string) => (live.sections.find((s) => norm(s.heading) === norm(h))?.body || '');
    const secs = editableSections(found.course, { content: live.content, sections: live.sections, page: live.page || undefined, version: live.version });
    return (h: string) => secs.find((s) => norm(s.heading) === norm(h))?.body || '';
  }, [draft, live]);

  const fail = (e: unknown, fallback: string) => {
    const code = e instanceof ApiError ? e.code : null;
    setErr((code && ERRORS[code]) || fallback);
  };

  const approve = async () => {
    if (!draft) return;
    setBusy(true); setErr(null); setDone(null);
    try {
      const body: Record<string, unknown> = { note: note.trim() };
      if (edited) { body.content = draft.content || ''; body.sections = sections; }
      const sEdited = Boolean(struct && submittedStruct && JSON.stringify(tidy(struct)) !== JSON.stringify(tidy(submittedStruct)));
      if (sEdited && compiled && struct) body.structure = diffStructure(compiled, struct);
      const tEdited = Boolean(tests && submittedTests && JSON.stringify(tidy(tests)) !== JSON.stringify(tidy(submittedTests)));
      if (tEdited && tests) body.pathwayTests = tests;
      if (ack) body.acknowledgeFailures = true;
      const r = await staffApi.approveDraft(draft.id, body);
      setDone(`Released as version ${r.version}. Members reading this course see it now.`);
      setOpenId(null); setDraft(null); load();
    } catch (e) {
      const code = e instanceof ApiError ? e.code : null;
      let parsed: { failures?: HubValidation['failures']; debt?: string[]; detail?: string } = {};
      if (e instanceof ApiError) { try { parsed = JSON.parse(e.message); } catch { /* generic below */ } }
      if (code === 'validation_failures' && parsed.failures) {
        setValidation({ ok: false, failures: parsed.failures, debt: parsed.debt || [] });
        setAck(false);
        setErr('The portal\'s curriculum rules stopped this release. Read what they found above. If you judge it acceptable, tick the box and release again.');
      } else if ((code === 'invalid_structure' || code === 'invalid_tests') && parsed.detail) {
        setErr(`It cannot be released yet. ${parsed.detail[0].toUpperCase()}${parsed.detail.slice(1)}.`);
      } else fail(e, 'That could not be released. Nothing was changed.');
    }
    finally { setBusy(false); }
  };

  const sendBack = async () => {
    if (!draft) return;
    if (!note.trim()) { setErr(ERRORS.note_required); return; }
    setBusy(true); setErr(null); setDone(null);
    try {
      await staffApi.returnDraft(draft.id, note.trim());
      setDone('Sent back to the author with your note.');
      setOpenId(null); setDraft(null); load();
    } catch (e) { fail(e, 'That could not be sent back. Nothing was changed.'); }
    finally { setBusy(false); }
  };

  if (openId) {
    const pg = draft?.page || null;
    const waiting = draft?.status === 'submitted';
    return (
      <div className="space-y-3">
        <button onClick={close} className="text-[11px] font-black uppercase tracking-wider text-zinc-500 hover:text-zinc-900">
          &larr; Back to the queue
        </button>
        {err && !draft && <div className={card}><p className="text-sm font-semibold text-[#FF6F91]">{err}</p></div>}
        {draft && live && (
          <>
            <div className={card}>
              <p className={label}>{STATUS_LABEL[draft.status]}</p>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mt-1">{draft.moduleTitle}</h2>
              <p className="text-sm text-zinc-600 mt-2">
                Written by {draft.authorName || draft.authorEmail}
                {draft.submittedAt ? `, submitted ${day(draft.submittedAt)}` : ''}.
              </p>
              {draft.authorNote && (
                <p className="text-sm text-zinc-700 mt-3 rounded-2xl bg-zinc-50 p-4 leading-relaxed">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Note from the author</span>
                  {draft.authorNote}
                </p>
              )}
              {liveChanged && waiting && (
                <p className="text-sm text-amber-900 mt-3 rounded-2xl bg-amber-50 border border-amber-200 p-4 leading-relaxed">
                  This course was released again after the author started this draft, so what is live may not match what they were working from. Check the live text under each lesson before you release.
                </p>
              )}
              {draft.decisionNote && (
                <p className="text-sm text-zinc-700 mt-3 rounded-2xl bg-zinc-50 p-4 leading-relaxed">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">
                    {draft.status === 'approved' ? 'Release note' : 'Sent back with'}
                  </span>
                  {draft.decisionNote}
                </p>
              )}
            </div>

            {pg && (
              <div className={card}>
                <p className={label}>The course page, as the author wrote it</p>
                <dl className="mt-3 space-y-4 text-sm text-zinc-700">
                  {pg.promise ? <div><dt className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Line on the course card</dt><dd className="mt-1">{pg.promise}</dd></div> : null}
                  {pg.about?.length ? <div><dt className="text-[10px] font-black uppercase tracking-widest text-zinc-400">About this course</dt>{pg.about.map((t, i) => <dd key={i} className="mt-1 leading-relaxed">{t}</dd>)}</div> : null}
                  {pg.objectives?.length ? <div><dt className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Learning objectives</dt>{pg.objectives.map((t, i) => <dd key={i} className="mt-1">{t}</dd>)}</div> : null}
                  {pg.prerequisites ? <div><dt className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Prerequisites</dt><dd className="mt-1">{pg.prerequisites}</dd></div> : null}
                  {pg.whoFor ? <div><dt className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Who this is for</dt><dd className="mt-1">{pg.whoFor}</dd></div> : null}
                </dl>
              </div>
            )}

            {validation && (
              <div className={card}>
                <p className={label}>The portal's curriculum rules</p>
                {validation.ok ? (
                  <p className="mt-3 text-sm text-emerald-700">Every rule passes for what this draft changes.</p>
                ) : (
                  <>
                    <p className="mt-3 text-sm text-amber-900">
                      {validation.failures.length} {validation.failures.length === 1 ? 'rule is' : 'rules are'} not met. These are advice to you and not a wall. Releasing with any of them open needs your acknowledgement, which is recorded.
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {validation.failures.map((x, i) => (
                        <li key={i} className="text-sm text-amber-900 rounded-xl bg-amber-50 border border-amber-200 px-4 py-2">
                          <span className="font-semibold">{x.label}</span>{x.detail ? `. ${x.detail}` : ''}
                        </li>
                      ))}
                    </ul>
                    {waiting && canDecide && (
                      <label className="mt-4 flex items-start gap-3 text-sm text-zinc-800">
                        <input type="checkbox" className="mt-1" checked={ack} onChange={(e) => setAck(e.target.checked)} />
                        I have read these and want to release anyway. This is recorded.
                      </label>
                    )}
                  </>
                )}
              </div>
            )}

            {tests && (
              <fieldset disabled={!(canDecide && waiting)} className="min-w-0 border-0 p-0 m-0">
                <TestsEditor value={tests} onChange={setTests} />
              </fieldset>
            )}
            {struct && (
              <fieldset disabled={!(canDecide && waiting)} className="min-w-0 border-0 p-0 m-0">
                <StructureEditor value={struct} onChange={setStruct} />
              </fieldset>
            )}

            <div className={sections.length > 0 ? card : 'hidden'}>
              <p className={label}>{sections.length} {sections.length === 1 ? 'lesson' : 'lessons'} in this draft</p>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                {canDecide && waiting
                  ? 'You can correct the text before you release it. Whatever is in the boxes below is what goes live.'
                  : 'Read only.'}
              </p>
            </div>

            {sections.map((s, i) => {
              const was = liveText(s.heading);
              return (
                <div key={i} className={card}>
                  <p className={label}>Lesson {i + 1}</p>
                  <p className="text-sm font-semibold text-zinc-900 mt-1">{s.heading}</p>
                  <textarea
                    className={`${input} mt-3 min-h-[200px]`}
                    value={s.body}
                    readOnly={!(canDecide && waiting)}
                    aria-label={`Text of ${s.heading}`}
                    onChange={(e) => { setSections((xs) => xs.map((x, n) => (n === i ? { ...x, body: e.target.value } : x))); setEdited(true); }}
                  />
                  <details className="mt-3">
                    <summary className="text-[11px] font-black uppercase tracking-wider text-zinc-500 cursor-pointer">What a learner reads now</summary>
                    <p className="text-sm text-zinc-600 mt-3 whitespace-pre-line leading-relaxed">
                      {was || 'Nothing yet. This lesson is new.'}
                    </p>
                  </details>
                </div>
              );
            })}

            {waiting && (
              <div className={card}>
                {canDecide ? (
                  <>
                    <label className={label} htmlFor="rev-note">Your note</label>
                    <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                      Required when you send a draft back. When you release it, the note is kept with the version.
                    </p>
                    <textarea
                      id="rev-note"
                      className={`${input} mt-3 min-h-[90px]`}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Checked the statistics against the cited source and corrected the second lesson."
                    />
                    {err && <p className="text-sm font-semibold text-[#FF6F91] mt-4">{err}</p>}
                    <div className="mt-5 flex flex-wrap gap-3">
                      <button onClick={approve} className={primary} disabled={busy}>
                        {busy ? 'Working' : 'Release to members'}
                      </button>
                      <button onClick={sendBack} className={secondary} disabled={busy}>
                        Send back to the author
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Only a Clinical Reviewer or a Hub Administrator can release a draft or send it back. You can read it here.
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className={card}>
        <p className={label}>Drafts from authors</p>
        <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
          Course content written by authors waits here. Nothing in this list is visible to members until it is released.
        </p>
        <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Draft status">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => { setItems(null); setFilter(f.id); }}
              className={`px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider border ${
                filter === f.id ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-500 border-zinc-200 hover:text-zinc-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {done && <div className={card}><p className="text-sm font-semibold text-emerald-700">{done}</p></div>}
      {err && <div className={card}><p className="text-sm text-zinc-500">{err}</p></div>}

      {items && (
        <div className={card}>
          <p className={label}>{items.length} {items.length === 1 ? 'draft' : 'drafts'}</p>
          {items.length === 0 ? (
            <p className="text-sm text-zinc-500 mt-3">
              {filter === 'submitted' ? 'Nothing is waiting for review.' : 'Nothing here yet.'}
            </p>
          ) : (
            <div className="mt-3 divide-y divide-zinc-100">
              {items.map((d) => (
                <button key={d.id} onClick={() => open(d.id)} className="w-full flex flex-wrap items-center justify-between gap-3 py-3.5 text-left group">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-zinc-900 group-hover:text-[#233DFF] truncate">{d.moduleTitle}</p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      {d.authorName || d.authorEmail}
                      {d.submittedAt ? ` · submitted ${day(d.submittedAt)}` : ''}
                      {d.sectionCount ? ` · ${d.sectionCount} ${d.sectionCount === 1 ? 'lesson' : 'lessons'}` : ''}
                      {d.lessonCount ? ` · ${d.lessonCount} ${d.lessonCount === 1 ? 'lesson' : 'lessons'}` : ''}
                      {d.questionCount ? ` · ${d.questionCount} ${d.questionCount === 1 ? 'question' : 'questions'}` : ''}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0 bg-zinc-100 text-zinc-500">
                    {STATUS_LABEL[d.status]}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CurriculumReview;
