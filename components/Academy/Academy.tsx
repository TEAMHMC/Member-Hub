// HMC Academy — the learning experience inside the Member Hub.
//
// Three views, one component: the catalog (browse), the course (syllabus), and
// the lesson (read and complete). State lives in ./progress.ts so the view
// layer stays presentational and progress survives a reload.

import React, { useMemo, useState, useEffect } from 'react';
import {
  ArrowLeft, ArrowRight, Award, BookOpen, Check, CheckCircle2, ChevronRight,
  Clock, ExternalLink, GraduationCap, Layers, PenLine, Play, Search, Sparkles, X,
} from 'lucide-react';
import {
  COURSES, PATHS, CATEGORIES, CATEGORY_ACCENT, courseById, courseMinutes,
  type Course, type Lesson, type Category,
} from './catalog';
import {
  loadState, saveState, coursePercent, isCourseComplete, lessonsDoneIn,
  pathPercent, earnedCredits, earnedBadges, nextUp, type AcademyState,
} from './progress';

interface AcademyProps {
  userId: string;
  memberName: string;
  /** Switch the Hub to another tab (used by lessons that hand off to Events, Snapshot, etc). */
  onNavigateTab: (tab: string) => void;
  /** Fire-and-forget analytics signal. */
  onSignal?: (type: string, payload: Record<string, unknown>) => void;
  /** Award Health Credits and a badge when a course is completed. */
  onCourseComplete?: (course: Course) => void;
}

type View =
  | { name: 'catalog' }
  | { name: 'course'; courseId: string }
  | { name: 'lesson'; courseId: string; index: number };

// ── Shared bits ──────────────────────────────────────────────────────────

const Pill: React.FC<{ children: React.ReactNode; tone?: 'blue' | 'orange' | 'yellow' | 'neutral' }> = ({
  children,
  tone = 'neutral',
}) => <span className={`pill pill-${tone}`}>{children}</span>;

const ProgressBar: React.FC<{ percent: number; className?: string }> = ({ percent, className = '' }) => (
  <div className={`h-1.5 w-full rounded-full bg-zinc-100 overflow-hidden ${className}`}>
    <div
      className="h-full rounded-full bg-[#233DFF] transition-all duration-500"
      style={{ width: `${Math.max(percent, percent > 0 ? 4 : 0)}%` }}
    />
  </div>
);

const Btn: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}> = ({ children, onClick, variant = 'primary', className = '', disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={
      variant === 'primary'
        ? `px-8 py-3.5 bg-[#233DFF] text-white rounded-full font-bold uppercase tracking-wider text-xs transition-all hover:bg-[#1a2acc] active:scale-95 disabled:opacity-40 shadow-md shadow-[#233DFF]/20 inline-flex items-center justify-center gap-2 ${className}`
        : `px-8 py-3.5 border border-zinc-200 bg-white text-zinc-900 rounded-full font-bold uppercase tracking-wider text-xs transition-all hover:bg-zinc-50 active:scale-95 disabled:opacity-40 inline-flex items-center justify-center gap-2 ${className}`
    }
  >
    {children}
  </button>
);

const KIND_LABEL: Record<Lesson['kind'], string> = {
  read: 'Lesson',
  activity: 'Practice',
  tool: 'Hands-on',
  reflect: 'Reflection',
};

// ── Component ────────────────────────────────────────────────────────────

const Academy: React.FC<AcademyProps> = ({
  userId,
  memberName,
  onNavigateTab,
  onSignal,
  onCourseComplete,
}) => {
  const [state, setState] = useState<AcademyState>(() => loadState(userId));
  const [view, setView] = useState<View>({ name: 'catalog' });
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const [celebrate, setCelebrate] = useState<Course | null>(null);

  useEffect(() => saveState(userId, state), [userId, state]);
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [view]);

  const done = state.done;

  const visibleCourses = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter((c) => {
      if (filter !== 'All' && c.category !== filter) return false;
      if (!q) return true;
      return (
        c.title.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.lessons.some((l) => l.title.toLowerCase().includes(q))
      );
    });
  }, [query, filter]);

  const resume = useMemo(() => nextUp(state), [state]);
  const credits = earnedCredits(state);
  const badges = earnedBadges(state);
  const coursesDone = Object.keys(state.completedCourses).length;

  // ── Actions ────────────────────────────────────────────────────────────

  const openLesson = (courseId: string, index: number) => {
    setView({ name: 'lesson', courseId, index });
    const lesson = courseById(courseId)?.lessons[index];
    setState((s) => ({ ...s, last: { courseId, lessonId: lesson?.id || '' } }));
    onSignal?.('academy_lesson_open', { courseId, lessonId: lesson?.id });
  };

  const completeLesson = (course: Course, index: number) => {
    const lesson = course.lessons[index];
    const alreadyDone = state.done.includes(lesson.id);

    const nextDone = alreadyDone ? state.done : [...state.done, lesson.id];
    const finishesCourse =
      !state.completedCourses[course.id] &&
      course.lessons.every((l) => nextDone.includes(l.id));

    setState((s) => ({
      ...s,
      done: nextDone,
      completedCourses: finishesCourse
        ? { ...s.completedCourses, [course.id]: new Date().toISOString() }
        : s.completedCourses,
    }));

    if (!alreadyDone) onSignal?.('academy_lesson_complete', { courseId: course.id, lessonId: lesson.id });

    if (finishesCourse) {
      onSignal?.('academy_course_complete', { courseId: course.id, credits: course.credits });
      onCourseComplete?.(course);
      setCelebrate(course);
      setView({ name: 'course', courseId: course.id });
      return;
    }

    if (index + 1 < course.lessons.length) openLesson(course.id, index + 1);
    else setView({ name: 'course', courseId: course.id });
  };

  const setNote = (lessonId: string, text: string) =>
    setState((s) => ({ ...s, notes: { ...s.notes, [lessonId]: text } }));

  /** Lesson tool links either hand off to a Hub tab or open a sibling tool. */
  const followTool = (url: string) => {
    if (url.startsWith('#tab:')) {
      onNavigateTab(url.slice(5));
      return;
    }
    onSignal?.('academy_tool_open', { url });
    window.open(url, '_blank', 'noopener');
  };

  // ── Catalog ────────────────────────────────────────────────────────────

  const CourseCard: React.FC<{ course: Course; compact?: boolean }> = ({ course, compact }) => {
    const percent = coursePercent(course, done);
    const complete = isCourseComplete(course, done);
    const accent = CATEGORY_ACCENT[course.category];
    return (
      <button
        onClick={() => setView({ name: 'course', courseId: course.id })}
        className="text-left bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-6 flex flex-col gap-4 hover:border-[#233DFF]/30 hover:shadow-md transition-all group h-full"
      >
        <div className="flex items-start justify-between gap-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${accent.bg} ${accent.text}`}>
            {course.category}
          </span>
          {complete ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 shrink-0">
              <CheckCircle2 size={13} /> Complete
            </span>
          ) : percent > 0 ? (
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#233DFF] shrink-0">{percent}%</span>
          ) : null}
        </div>

        <div className="space-y-2 flex-1">
          <h3 className="text-lg font-semibold text-zinc-900 leading-snug group-hover:text-[#233DFF] transition-colors">
            {course.title}
          </h3>
          {!compact && <p className="text-sm text-zinc-500 leading-relaxed">{course.summary}</p>}
        </div>

        <div className="flex items-center gap-4 text-[11px] font-semibold text-zinc-400">
          <span className="inline-flex items-center gap-1.5"><BookOpen size={13} /> {course.lessons.length} lessons</span>
          <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {courseMinutes(course)} min</span>
          <span className="inline-flex items-center gap-1.5 text-[#233DFF]"><Sparkles size={13} /> {course.credits}</span>
        </div>

        {percent > 0 && !complete && <ProgressBar percent={percent} />}
      </button>
    );
  };

  const renderCatalog = () => {
    const featured = COURSES.filter((c) => c.featured);
    return (
      <div className="max-w-6xl mx-auto py-8 space-y-14 animate-in fade-in duration-500">
        {/* Hero */}
        <div className="text-center space-y-4">
          <div className="pill pill-blue mx-auto">HMC Academy</div>
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-900">
            Learn how to work the system.
          </h1>
          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed text-lg">
            Short, self-paced courses on wellness, coverage, and community power. Built from the
            programs Health Matters Clinic actually runs. Free, always.
          </p>
        </div>

        {/* Member progress strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Courses complete', value: `${coursesDone} of ${COURSES.length}`, icon: <GraduationCap size={18} /> },
            { label: 'Lessons complete', value: String(done.length), icon: <CheckCircle2 size={18} /> },
            { label: 'Credits earned', value: String(credits), icon: <Sparkles size={18} /> },
            { label: 'Badges', value: String(badges.length), icon: <Award size={18} /> },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-5 space-y-2">
              <div className="text-zinc-300">{s.icon}</div>
              <p className="text-2xl font-semibold text-zinc-900">{s.value}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Continue */}
        {resume && (
          <div className="bg-[#18181b] rounded-3xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                {done.length ? 'Pick up where you left off' : 'Start here'}
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-white truncate">
                {resume.course.lessons[resume.lessonIndex].title}
              </h3>
              <p className="text-sm text-zinc-400">
                {resume.course.title} · Lesson {resume.lessonIndex + 1} of {resume.course.lessons.length}
              </p>
            </div>
            <div className="shrink-0">
              <Btn onClick={() => openLesson(resume.course.id, resume.lessonIndex)}>
                <Play size={14} /> {done.length ? 'Continue' : 'Start learning'}
              </Btn>
            </div>
          </div>
        )}

        {/* Paths */}
        <section className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Learning paths</h2>
              <p className="text-sm text-zinc-500 mt-1">Sequenced sets of courses, built around what you are trying to do.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PATHS.map((path) => {
              const percent = pathPercent(path, done);
              const courses = path.courseIds.map(courseById).filter(Boolean) as Course[];
              return (
                <div key={path.id} className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-7 space-y-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5">
                      <Pill tone="orange">{path.tagline}</Pill>
                      <h3 className="text-xl font-semibold text-zinc-900">{path.title}</h3>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center text-[#233DFF] shrink-0">
                      <Layers size={20} />
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">{path.description}</p>
                  <div className="space-y-2">
                    {courses.map((c) => {
                      const cDone = isCourseComplete(c, done);
                      return (
                        <button
                          key={c.id}
                          onClick={() => setView({ name: 'course', courseId: c.id })}
                          className="w-full flex items-center justify-between gap-3 text-left rounded-xl px-4 py-3 hover:bg-zinc-50 transition-colors"
                        >
                          <span className="flex items-center gap-3 min-w-0">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${cDone ? 'bg-emerald-50 border-emerald-100 text-emerald-500' : 'bg-white border-zinc-200 text-zinc-300'}`}>
                              {cDone ? <Check size={13} strokeWidth={3} /> : <span className="w-1.5 h-1.5 rounded-full bg-current" />}
                            </span>
                            <span className={`text-sm font-semibold truncate ${cDone ? 'text-zinc-400' : 'text-zinc-800'}`}>{c.title}</span>
                          </span>
                          <ChevronRight size={16} className="text-zinc-300 shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                  <div className="space-y-2 pt-1">
                    <ProgressBar percent={percent} />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{percent}% complete</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Featured courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((c) => <CourseCard key={c.id} course={c} />)}
          </div>
        </section>

        {/* All courses with search + filter */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">All courses</h2>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={17} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses and lessons"
                aria-label="Search courses"
                className="w-full pl-11 pr-4 py-3 bg-white border border-zinc-200 rounded-full outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-200 transition-all text-sm font-medium shadow-sm"
              />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {(['All', ...CATEGORIES] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as Category | 'All')}
                className={`px-5 py-2.5 rounded-full shrink-0 font-bold uppercase tracking-wider text-[11px] transition-all ${
                  filter === cat ? 'bg-[#233DFF] text-white shadow-md shadow-[#233DFF]/20' : 'bg-white text-zinc-500 border border-zinc-200 hover:text-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {visibleCourses.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-zinc-200 py-20 text-center space-y-3">
              <BookOpen size={40} className="mx-auto text-zinc-200" strokeWidth={1} />
              <p className="text-sm font-semibold text-zinc-600">No courses match that search</p>
              <button onClick={() => { setQuery(''); setFilter('All'); }} className="text-xs font-bold uppercase tracking-widest text-[#233DFF]">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleCourses.map((c) => <CourseCard key={c.id} course={c} />)}
            </div>
          )}
        </section>

        {/* Badges earned */}
        {badges.length > 0 && (
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Your badges</h2>
            <div className="flex flex-wrap gap-3">
              {badges.map((b) => (
                <span key={b} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-zinc-200/60 shadow-sm">
                  <Award size={16} className="text-[#F9C74F]" />
                  <span className="text-sm font-semibold text-zinc-800">{b}</span>
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  };

  // ── Course detail ──────────────────────────────────────────────────────

  const renderCourse = (courseId: string) => {
    const course = courseById(courseId);
    if (!course) return renderCatalog();

    const percent = coursePercent(course, done);
    const complete = isCourseComplete(course, done);
    const firstUnfinished = course.lessons.findIndex((l) => !done.includes(l.id));
    const accent = CATEGORY_ACCENT[course.category];

    return (
      <div className="max-w-4xl mx-auto py-8 space-y-10 animate-in fade-in duration-500">
        <button
          onClick={() => setView({ name: 'catalog' })}
          className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 font-bold text-xs uppercase tracking-widest transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> All courses
        </button>

        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${accent.bg} ${accent.text}`}>
              {course.category}
            </span>
            <Pill>{course.level}</Pill>
            {complete && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600">
                <CheckCircle2 size={11} /> Complete
              </span>
            )}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">{course.title}</h1>
          <p className="text-lg text-zinc-500 leading-relaxed">{course.summary}</p>
          <div className="flex flex-wrap items-center gap-5 text-[11px] font-semibold text-zinc-400">
            <span className="inline-flex items-center gap-1.5"><BookOpen size={14} /> {course.lessons.length} lessons</span>
            <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {courseMinutes(course)} minutes total</span>
            <span className="inline-flex items-center gap-1.5 text-[#233DFF]"><Sparkles size={14} /> {course.credits} Health Credits</span>
            <span className="inline-flex items-center gap-1.5 text-[#8B6D00]"><Award size={14} /> {course.badge} badge</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-7 space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Your progress</p>
              <p className="text-2xl font-semibold text-zinc-900">
                {lessonsDoneIn(course, done)} of {course.lessons.length} lessons
              </p>
            </div>
            <Btn onClick={() => openLesson(course.id, complete ? 0 : Math.max(firstUnfinished, 0))}>
              {complete ? 'Review course' : percent > 0 ? 'Continue' : 'Start course'} <ArrowRight size={14} />
            </Btn>
          </div>
          <ProgressBar percent={percent} />
        </div>

        <div className="space-y-3">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Lessons</h2>
          {course.lessons.map((lesson, i) => {
            const lessonDone = done.includes(lesson.id);
            return (
              <button
                key={lesson.id}
                onClick={() => openLesson(course.id, i)}
                className={`w-full text-left flex items-center justify-between gap-4 p-5 px-6 rounded-2xl border transition-all ${
                  lessonDone ? 'bg-zinc-50/50 border-zinc-100' : 'bg-white border-zinc-200 hover:border-[#233DFF]/40 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-5 min-w-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm border shrink-0 ${
                    lessonDone ? 'bg-emerald-50 text-emerald-500 border-emerald-100' : 'bg-blue-50 text-[#233DFF] border-blue-100'
                  }`}>
                    {lessonDone ? <Check size={18} strokeWidth={3} /> : <span className="text-xs font-black">{i + 1}</span>}
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-semibold truncate ${lessonDone ? 'text-zinc-400' : 'text-zinc-800'}`}>{lesson.title}</p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">{KIND_LABEL[lesson.kind]} · {lesson.minutes} min</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-zinc-300 shrink-0" />
              </button>
            );
          })}
        </div>

        {complete && (
          <div className="bg-[#18181b] rounded-3xl p-9 text-white space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#233DFF]/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative z-10 space-y-4">
              <Award size={32} className="text-[#F9C74F]" />
              <div className="space-y-1.5">
                <h3 className="text-2xl font-semibold tracking-tight">Course complete</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {memberName}, you finished {course.title} and earned the {course.badge} badge
                  plus {course.credits} Health Credits.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <Btn onClick={() => setCelebrate(course)}>View certificate</Btn>
                <Btn variant="secondary" onClick={() => setView({ name: 'catalog' })}>Find the next course</Btn>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // ── Lesson ─────────────────────────────────────────────────────────────

  const renderLesson = (courseId: string, index: number) => {
    const course = courseById(courseId);
    if (!course) return renderCatalog();
    const lesson = course.lessons[index];
    if (!lesson) return renderCourse(courseId);

    const lessonDone = done.includes(lesson.id);
    const isLast = index === course.lessons.length - 1;

    return (
      <div className="max-w-3xl mx-auto py-8 space-y-8 animate-in fade-in duration-500">
        <button
          onClick={() => setView({ name: 'course', courseId })}
          className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 font-bold text-xs uppercase tracking-widest transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {course.title}
        </button>

        <div className="space-y-3">
          <ProgressBar percent={Math.round(((index + (lessonDone ? 1 : 0)) / course.lessons.length) * 100)} />
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Lesson {index + 1} of {course.lessons.length} · {KIND_LABEL[lesson.kind]} · {lesson.minutes} min
          </p>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">{lesson.title}</h1>

        <div className="space-y-6">
          {lesson.body?.map((para, i) => (
            <p key={i} className="text-lg text-zinc-700 leading-relaxed">{para}</p>
          ))}
        </div>

        {lesson.takeaways && lesson.takeaways.length > 0 && (
          <div className="bg-blue-50/50 border border-[#233DFF]/15 rounded-2xl p-7 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#233DFF]">Key takeaways</p>
            <ul className="space-y-3">
              {lesson.takeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} strokeWidth={3} className="text-[#233DFF] mt-1 shrink-0" />
                  <span className="text-[15px] text-zinc-700 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.kind === 'reflect' && lesson.prompt && (
          <div className="bg-white border border-zinc-200 rounded-2xl p-7 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#FF6E40]">
              <PenLine size={16} />
              <p className="text-[10px] font-bold uppercase tracking-widest">Your turn</p>
            </div>
            <label htmlFor={`note-${lesson.id}`} className="block text-base font-semibold text-zinc-900 leading-snug">
              {lesson.prompt}
            </label>
            <textarea
              id={`note-${lesson.id}`}
              value={state.notes[lesson.id] || ''}
              onChange={(e) => setNote(lesson.id, e.target.value)}
              rows={4}
              placeholder="Write as much or as little as you want."
              className="w-full p-4 border border-zinc-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-200 transition-all text-base leading-relaxed resize-none"
            />
            <p className="text-[11px] text-zinc-400">
              This stays on your device. It is not sent to HMC and no one else can read it.
            </p>
          </div>
        )}

        {lesson.kind === 'tool' && lesson.tool && (
          <button
            onClick={() => followTool(lesson.tool!.url)}
            className="w-full flex items-center justify-between gap-4 rounded-2xl border border-[#233DFF]/20 bg-blue-50/40 p-6 hover:border-[#233DFF]/40 transition-all text-left"
          >
            <div className="flex items-start gap-4 min-w-0">
              <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-[#233DFF] shrink-0 shadow-sm">
                <ExternalLink size={19} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-900">{lesson.tool.label}</p>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{lesson.tool.blurb}</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-[#233DFF] shrink-0" />
          </button>
        )}

        <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => (index > 0 ? openLesson(courseId, index - 1) : setView({ name: 'course', courseId }))}
            className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            {index > 0 ? 'Previous lesson' : 'Back to syllabus'}
          </button>
          <Btn onClick={() => completeLesson(course, index)} className="w-full sm:w-auto">
            {lessonDone && !isLast ? (
              <>Next lesson <ArrowRight size={14} /></>
            ) : isLast ? (
              <>Finish course <Check size={14} strokeWidth={3} /></>
            ) : (
              <>Mark complete <ArrowRight size={14} /></>
            )}
          </Btn>
        </div>
      </div>
    );
  };

  // ── Certificate ────────────────────────────────────────────────────────

  const renderCertificate = (course: Course) => {
    const iso = state.completedCourses[course.id];
    const dateLabel = iso
      ? new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      : new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
      <div className="fixed inset-0 z-[100] bg-zinc-900/60 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
        <div className="bg-white max-w-lg w-full rounded-[32px] p-10 space-y-7 animate-in zoom-in-95 duration-500 shadow-2xl relative">
          <button
            onClick={() => setCelebrate(null)}
            aria-label="Close certificate"
            className="absolute top-6 right-6 text-zinc-300 hover:text-zinc-900 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center">
              <Award size={32} className="text-[#F9C74F]" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Certificate of completion</p>
            <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">{course.title}</h2>
            <p className="text-zinc-500 leading-relaxed">
              Awarded to {memberName} on {dateLabel}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 py-5 border-y border-zinc-100">
            {[
              { label: 'Lessons', value: String(course.lessons.length) },
              { label: 'Credits', value: String(course.credits) },
              { label: 'Badge', value: course.badge },
            ].map((s) => (
              <div key={s.label} className="text-center space-y-1">
                <p className="text-sm font-semibold text-zinc-900 leading-tight">{s.value}</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-zinc-400 text-center leading-relaxed">
            Health Matters Clinic Academy. This certificate recognizes completion of a community
            education course. It is not a clinical or professional credential.
          </p>

          <Btn onClick={() => setCelebrate(null)} className="w-full">Continue</Btn>
        </div>
      </div>
    );
  };

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <div className="w-full">
      {view.name === 'catalog' && renderCatalog()}
      {view.name === 'course' && renderCourse(view.courseId)}
      {view.name === 'lesson' && renderLesson(view.courseId, view.index)}
      {celebrate && renderCertificate(celebrate)}
    </div>
  );
};

export default Academy;
