import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, ArrowLeft, ArrowRight, Target, ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';
import { coreLessons, principles } from '../../data/mastery';
import { ChartGallery } from '../../components/charts/day-2026-05-07/ChartGallery';
import { CORE_LESSON_CHARTS } from '../../components/charts/mastery';

export default function CoreLessonPage() {
  const { lessonId } = useParams();
  const [openUnits, setOpenUnits] = useState(new Set([0]));
  const idx = coreLessons.findIndex(l => l.id === lessonId);
  if (idx === -1) return <Navigate to="/mastery/lessons" replace />;
  const lesson = coreLessons[idx];
  const prev = idx > 0 ? coreLessons[idx - 1] : null;
  const next = idx < coreLessons.length - 1 ? coreLessons[idx + 1] : null;
  const charts = CORE_LESSON_CHARTS[lesson.id];

  const toggleUnit = (i) => {
    setOpenUnits(prev => {
      const n = new Set(prev);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  };

  return (
    <article className="max-w-[860px] mx-auto space-y-6">
      {/* Header */}
      <header className="space-y-3">
        <Link
          to="/mastery/lessons"
          className="inline-flex items-center gap-1.5 text-xs no-underline"
          style={{ color: '#94a3b8' }}
        >
          <ArrowLeft className="w-3 h-3" />
          All Core Lessons
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="num text-xs px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(20, 184, 166, 0.12)',
              color: '#5eead4',
              border: '1px solid rgba(20, 184, 166, 0.30)',
            }}
          >
            Lesson {String(lesson.number).padStart(2, '0')}
          </span>
          <span
            className="inline-flex items-center gap-1 text-xs"
            style={{ color: '#94a3b8' }}
          >
            <Clock className="w-3 h-3" />
            <span className="num">{lesson.duration}</span>
          </span>
          {charts && (
            <span
              className="text-xs px-2 py-0.5 rounded-full num"
              style={{
                background: 'rgba(94, 234, 212, 0.10)',
                color: '#5eead4',
                border: '1px solid rgba(94, 234, 212, 0.30)',
              }}
            >
              {charts.length} teaching charts
            </span>
          )}
          {lesson.teachingUnits && (
            <span
              className="text-xs px-2 py-0.5 rounded-full num"
              style={{
                background: 'rgba(167, 139, 250, 0.10)',
                color: '#c4b5fd',
                border: '1px solid rgba(167, 139, 250, 0.30)',
              }}
            >
              {lesson.teachingUnits.length} Q&A units
            </span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl m-0 leading-tight">{lesson.title}</h1>
        <p className="text-base leading-relaxed m-0" style={{ color: '#cbd5e1' }}>
          {lesson.summary}
        </p>
      </header>

      {/* Visual Gallery — chart-first teaching */}
      {charts && (
        <section
          className="rounded-2xl p-5 md:p-6"
          style={{
            background:
              'linear-gradient(135deg, rgba(94, 234, 212, 0.06) 0%, rgba(15, 23, 42, 0.40) 100%)',
            border: '1px solid rgba(94, 234, 212, 0.20)',
          }}
        >
          <h2 className="text-xl m-0 mb-3 leading-tight">Visual Teaching</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#cbd5e1' }}>
            Six charts that teach the lesson without a single paragraph. Scroll horizontally — each
            chart is a self-contained teaching example with annotations, verdict, and caption.
          </p>
          <ChartGallery conceptId={'lesson-' + lesson.id} charts={charts} />
        </section>
      )}

      {/* Sections */}
      <div className="space-y-5">
        {lesson.sections.map((s, i) => (
          <section
            key={i}
            className="rounded-2xl p-5 md:p-6"
            style={{
              background: 'rgba(255, 255, 255, 0.025)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <h2 className="text-xl m-0 mb-3 leading-tight">{s.heading}</h2>
            <p className="text-base leading-relaxed m-0" style={{ color: '#e2e8f0' }}>
              {s.body}
            </p>
            {s.callout && (
              <div
                className={`mt-4 ${
                  s.callout.type === 'principle'
                    ? 'principle-callout'
                    : s.callout.type === 'warning'
                    ? 'warning-callout'
                    : 'rule-callout'
                }`}
              >
                <div
                  className="text-[10px] uppercase tracking-[0.22em] num mb-1"
                  style={{
                    color:
                      s.callout.type === 'principle'
                        ? '#fbbf24'
                        : s.callout.type === 'warning'
                        ? '#fca5a5'
                        : '#5eead4',
                  }}
                >
                  {s.callout.type === 'principle'
                    ? 'PRINCIPLE'
                    : s.callout.type === 'warning'
                    ? 'WARNING'
                    : 'RULE'}
                </div>
                <div className="text-sm leading-relaxed" style={{ color: '#f5f9ff' }}>
                  {s.callout.text}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Q&A teaching units */}
      {lesson.teachingUnits && lesson.teachingUnits.length > 0 && (
        <section className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-4 h-4" style={{ color: '#c4b5fd' }} />
            <h2 className="text-xl m-0">Teaching Q&amp;A</h2>
          </div>
          {lesson.teachingUnits.map((u, i) => {
            const open = openUnits.has(i);
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleUnit(i)}
                  className="w-full flex items-start gap-3 p-5 text-left"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                  aria-expanded={open}
                >
                  <div
                    className="num shrink-0 mt-0.5"
                    style={{ color: '#c4b5fd', fontSize: '0.85rem', fontWeight: 700 }}
                  >
                    Q{i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg m-0 leading-snug" style={{ color: '#f5f9ff' }}>
                      {u.question}
                    </h3>
                  </div>
                  <div className="shrink-0 mt-1" style={{ color: '#94a3b8' }}>
                    {open ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </div>
                </button>
                {open && (
                  <div
                    className="px-5 pb-5 pl-[3.5rem] space-y-3"
                    style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}
                  >
                    <p
                      className="text-base leading-relaxed mt-4 m-0"
                      style={{ color: '#e2e8f0' }}
                    >
                      {u.answer}
                    </p>
                    {u.rules.length > 0 && (
                      <div className="rule-callout">
                        <div
                          className="text-[10px] uppercase tracking-[0.22em] num mb-2"
                          style={{ color: '#5eead4' }}
                        >
                          Rules Extracted
                        </div>
                        <ul className="list-none p-0 m-0 space-y-1.5">
                          {u.rules.map((r, j) => (
                            <li
                              key={j}
                              className="text-sm leading-relaxed flex gap-2"
                              style={{ color: '#e2e8f0' }}
                            >
                              <span style={{ color: '#5eead4' }}>•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      )}

      {/* Key rules */}
      <section
        className="rounded-2xl p-5 md:p-6"
        style={{
          background: 'rgba(20, 184, 166, 0.06)',
          border: '1px solid rgba(20, 184, 166, 0.25)',
        }}
      >
        <h3 className="text-base m-0 mb-3" style={{ color: '#5eead4' }}>
          Key Rules from This Lesson
        </h3>
        <ul className="list-none p-0 m-0 space-y-2">
          {lesson.keyRules.map((r, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed"
              style={{ color: '#e2e8f0' }}
            >
              <span className="num shrink-0" style={{ color: '#5eead4' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Principles cross-reference */}
      <section
        className="rounded-2xl p-5"
        style={{
          background: 'rgba(251, 191, 36, 0.06)',
          border: '1px solid rgba(251, 191, 36, 0.25)',
        }}
      >
        <h3 className="text-sm m-0 mb-3 uppercase tracking-[0.2em]" style={{ color: '#fbbf24' }}>
          Principles Reinforced
        </h3>
        <div className="flex flex-wrap gap-2">
          {lesson.principlesUsed.map(n => {
            const p = principles.find(x => x.number === n);
            if (!p) return null;
            return (
              <Link
                key={n}
                to="/mastery/principles"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium no-underline"
                style={{
                  background: 'rgba(251, 191, 36, 0.10)',
                  border: '1px solid rgba(251, 191, 36, 0.30)',
                  color: '#fcd34d',
                  fontFamily: 'Oxanium, system-ui, sans-serif',
                }}
              >
                <Target className="w-3 h-3" />
                <span className="num">{String(n).padStart(2, '0')}</span>
                <span>{p.title}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Prev / Next */}
      <nav className="flex items-stretch gap-3 pt-4">
        {prev ? (
          <Link
            to={`/mastery/lesson/${prev.id}`}
            className="flex-1 mastery-card no-underline"
            style={{ color: 'inherit' }}
          >
            <div className="text-[10px] uppercase tracking-[0.22em] num mb-1" style={{ color: '#94a3b8' }}>
              Previous
            </div>
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 shrink-0" style={{ color: '#5eead4' }} />
              <span className="text-sm font-semibold truncate">{prev.title}</span>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            to={`/mastery/lesson/${next.id}`}
            className="flex-1 mastery-card no-underline text-right"
            style={{ color: 'inherit' }}
          >
            <div className="text-[10px] uppercase tracking-[0.22em] num mb-1" style={{ color: '#94a3b8' }}>
              Next
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span className="text-sm font-semibold truncate">{next.title}</span>
              <ArrowRight className="w-4 h-4 shrink-0" style={{ color: '#5eead4' }} />
            </div>
          </Link>
        ) : (
          <Link
            to="/mastery/checklists"
            className="flex-1 mastery-card no-underline text-right"
            style={{ color: 'inherit' }}
          >
            <div className="text-[10px] uppercase tracking-[0.22em] num mb-1" style={{ color: '#94a3b8' }}>
              Up Next
            </div>
            <div className="flex items-center gap-2 justify-end">
              <span className="text-sm font-semibold">Master Checklists</span>
              <ArrowRight className="w-4 h-4 shrink-0" style={{ color: '#5eead4' }} />
            </div>
          </Link>
        )}
      </nav>
    </article>
  );
}
