import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { formatDailyDate, principles } from '../../data/mastery/index.js';
import { useDailyLessons, findLesson } from '../../data/mastery/useFirestoreDailyLessons.js';
import { ChartGallery, CHARTS_BY_UNIT_INDEX, CONCEPT_SLUGS } from '../../components/charts/day-2026-05-07/index.js';

export default function DailyLessonPage() {
  const { date } = useParams();
  const { lessons, loading } = useDailyLessons();
  const lesson = date ? findLesson(lessons, date) : null;
  const [openUnits, setOpenUnits] = useState(new Set([0]));

  if (loading && !lesson) {
    return <div className="text-center py-12 text-muted">Loading lesson...</div>;
  }
  if (!lesson) return <Navigate to="/mastery/daily" replace />;

  const toggleUnit = i => {
    const next = new Set(openUnits);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setOpenUnits(next);
  };

  return (
    <article className="max-w-[860px] mx-auto space-y-6">
      <header>
        <Link to="/mastery/daily" className="inline-flex items-center gap-1.5 text-xs text-muted no-underline mb-3 hover:text-text">
          ← All Daily Lessons
        </Link>
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className="pill num" style={{ background: 'rgba(255, 61, 90, 0.12)', color: '#FF3D5A', border: '1px solid rgba(255, 61, 90, 0.30)' }}>
            {formatDailyDate(lesson.date)}
          </span>
          <span className="pill-amber num">{lesson.teachingUnits.length} teaching units</span>
        </div>
        <h1 className="font-display font-bold text-3xl md:text-4xl m-0 leading-tight">{lesson.title}</h1>
      </header>

      {/* Session summary */}
      <section
        className="rounded-2xl p-5 md:p-6 border"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 217, 160, 0.08) 0%, rgba(31, 31, 31, 0.40) 100%)',
          borderColor: 'rgba(0, 217, 160, 0.25)',
        }}
      >
        <div className="text-[10px] uppercase tracking-[0.22em] mb-2 num font-display font-medium" style={{ color: '#00D9A0' }}>
          Session Summary
        </div>
        <p className="text-base leading-relaxed m-0 text-text">{lesson.sessionSummary}</p>
      </section>

      {/* Teaching units */}
      <section className="space-y-3">
        <h2 className="font-display font-semibold text-xl m-0">Teaching Units</h2>
        {lesson.teachingUnits.map((u, i) => {
          const principle = principles.find(p => p.number === u.principleReinforced);
          const isOpen = openUnits.has(i);
          return (
            <div key={i} className="card overflow-hidden p-0">
              <button
                type="button"
                onClick={() => toggleUnit(i)}
                className="w-full flex items-start gap-3 p-5 text-left bg-transparent border-none cursor-pointer"
              >
                <div className="num shrink-0 mt-0.5 font-bold text-sm" style={{ color: '#00D9A0' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-base md:text-lg m-0 leading-snug text-text">
                    {u.question}
                  </h3>
                </div>
                <div className="shrink-0 mt-1 text-muted">{isOpen ? '−' : '+'}</div>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pl-[3.25rem] space-y-4 border-t border-border">
                  <p className="text-base leading-relaxed mt-4 m-0 text-text">{u.answer}</p>
                  {/* Visual Examples — chart gallery for May 7 lesson */}
                  {lesson.date === '2026-05-07' && CHARTS_BY_UNIT_INDEX[i] && (
                    <ChartGallery conceptId={CONCEPT_SLUGS[i] || ('unit-' + i)} charts={CHARTS_BY_UNIT_INDEX[i]} />
                  )}
                  {u.rules.length > 0 && (
                    <div
                      className="p-4 rounded-xl border-l-4 border"
                      style={{
                        background: 'rgba(0, 217, 160, 0.07)',
                        borderColor: 'rgba(0, 217, 160, 0.30)',
                        borderLeftColor: '#00D9A0',
                      }}
                    >
                      <div className="text-[10px] uppercase tracking-[0.22em] num font-display font-medium mb-2" style={{ color: '#00D9A0' }}>
                        Rules Extracted
                      </div>
                      <ul className="list-none p-0 m-0 space-y-1.5">
                        {u.rules.map((r, j) => (
                          <li key={j} className="text-sm leading-relaxed flex gap-2 text-text">
                            <span style={{ color: '#00D9A0' }}>•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {principle && (
                    <Link
                      to="/mastery/principles"
                      className="block p-4 rounded-xl border-l-4 border no-underline"
                      style={{
                        background: 'rgba(255, 180, 74, 0.10)',
                        borderColor: 'rgba(255, 180, 74, 0.35)',
                        borderLeftColor: '#FFB44A',
                        color: 'inherit',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase tracking-[0.22em] num font-display font-medium" style={{ color: '#FFB44A' }}>
                          ⊙ Principle {String(principle.number).padStart(2, '0')} Reinforced
                        </span>
                      </div>
                      <div className="font-display font-semibold text-sm mb-0.5 text-text">{principle.title}</div>
                      <div className="text-xs leading-relaxed text-text/80">{principle.short}</div>
                    </Link>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Charts */}
      {lesson.chartReferences.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display font-semibold text-xl m-0">Charts Referenced</h2>
          {lesson.chartReferences.map((c, i) => (
            <div key={i} className="card">
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span style={{ color: '#00D9A0' }}>📊</span>
                <span className="text-sm font-display font-semibold text-text">{c.caption}</span>
                {c.symbol && <span className="pill-green num">{c.symbol}</span>}
                {c.timeframe && <span className="text-[10px] num text-muted">{c.timeframe}</span>}
              </div>
              <p className="text-sm leading-relaxed m-0 text-text/80">{c.analysis}</p>
            </div>
          ))}
        </section>
      )}

      {/* Key rules */}
      <section
        className="rounded-2xl p-5 md:p-6 border"
        style={{ background: 'rgba(0, 217, 160, 0.06)', borderColor: 'rgba(0, 217, 160, 0.25)' }}
      >
        <h2 className="font-display font-semibold text-base m-0 mb-3" style={{ color: '#00D9A0' }}>
          Key Rules from Today
        </h2>
        <ul className="list-none p-0 m-0 space-y-2">
          {lesson.keyRules.map((r, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-text">
              <span className="num shrink-0" style={{ color: '#00D9A0' }}>{String(i + 1).padStart(2, '0')}</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Principles reinforced */}
      <section
        className="rounded-2xl p-5 border"
        style={{ background: 'rgba(255, 180, 74, 0.06)', borderColor: 'rgba(255, 180, 74, 0.25)' }}
      >
        <h2 className="font-display font-semibold text-sm m-0 mb-3 uppercase tracking-[0.2em]" style={{ color: '#FFB44A' }}>
          Principles Reinforced
        </h2>
        <div className="flex flex-wrap gap-2">
          {lesson.principlesReinforced.map(n => {
            const p = principles.find(x => x.number === n);
            if (!p) return null;
            return (
              <Link
                key={n}
                to="/mastery/principles"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-display font-medium border no-underline"
                style={{
                  background: 'rgba(255, 180, 74, 0.10)',
                  borderColor: 'rgba(255, 180, 74, 0.30)',
                  color: '#FFB44A',
                }}
              >
                <span className="num">{String(n).padStart(2, '0')}</span>
                <span>{p.title}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* What I'll do differently */}
      <section
        className="rounded-2xl p-5 md:p-6 border"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 61, 90, 0.10) 0%, rgba(31, 31, 31, 0.45) 100%)',
          borderColor: 'rgba(255, 61, 90, 0.30)',
        }}
      >
        <h2 className="font-display font-semibold text-base m-0 mb-3" style={{ color: '#FF3D5A' }}>
          💡 What I'll Do Differently
        </h2>
        <p className="text-base leading-relaxed m-0 italic text-text">{lesson.whatIllDoDifferently}</p>
      </section>
    </article>
  );
}
