import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { formatDailyDate, principles } from '../../data/mastery/index.js';
import { useDailyLessons, findLesson } from '../../data/mastery/useFirestoreDailyLessons.js';
import { ChartGallery } from '../../components/charts/day-2026-05-07/ChartGallery.jsx';
import { CHARTS_BY_UNIT_INDEX as MAY7_CHARTS, CONCEPT_SLUGS as MAY7_SLUGS } from '../../components/charts/day-2026-05-07/index.js';
import { CHARTS_BY_UNIT_INDEX as MAY11_CHARTS, CONCEPT_SLUGS as MAY11_SLUGS } from '../../components/charts/day-2026-05-11/index.js';
import { CHARTS_BY_UNIT_INDEX as MAY12_CHARTS, CONCEPT_SLUGS as MAY12_SLUGS } from '../../components/charts/day-2026-05-12/index.js';

// Per-date chart bundle registry. Add new entries here as more daily lessons
// gain their own chart galleries. Renderer falls back gracefully when a date
// has no charts (returns null → no gallery rendered).
const CHARTS_BY_DATE = {
  '2026-05-07': { charts: MAY7_CHARTS, slugs: MAY7_SLUGS },
  '2026-05-11': { charts: MAY11_CHARTS, slugs: MAY11_SLUGS },
  '2026-05-12': { charts: MAY12_CHARTS, slugs: MAY12_SLUGS },
};

// Detect a unit's schema. Old units have `question` + `answer` + `rules`;
// new units have `title` + `concept` + `detail` + `rule`.
function isNewUnit(u) {
  return u && (u.concept !== undefined || u.detail !== undefined || u.rule !== undefined || u.applicationToday !== undefined);
}

// Convert whatIllDoDifferently (string with newlines/bullets OR array) into
// a normalized array of bullet items.
function parseDifferently(value) {
  if (Array.isArray(value)) {
    return value.map(s => String(s).trim()).filter(Boolean);
  }
  if (typeof value !== 'string') return [];
  const s = value.trim();
  if (!s) return [];
  // If it contains line breaks, split on them; strip leading bullets.
  if (s.includes('\n')) {
    return s
      .split('\n')
      .map(line => line.replace(/^\s*[•\-*]\s*/, '').trim())
      .filter(Boolean);
  }
  // Otherwise treat as a single paragraph.
  return [s];
}

// Classify a trade outcome to choose accent color.
function tradeAccent(trade) {
  const blob = ((trade.outcome || '') + ' ' + (trade.decision || '')).toLowerCase();
  if (/(stood aside|stand aside|paused|avoided|skipped|pause)/.test(blob)) return 'amber';
  if (/(\bloss\b|losing|max stop|hit before|stop hit)/.test(blob)) return 'red';
  if (/(\bwin\b|won|target|booked|captured|profit|favorable|validated)/.test(blob)) return 'green';
  return 'blue';
}

const ACCENT = {
  green: { color: '#00D9A0', bg: 'rgba(0, 217, 160, 0.08)', border: 'rgba(0, 217, 160, 0.30)', soft: 'rgba(0, 217, 160, 0.06)' },
  red:   { color: '#FF3D5A', bg: 'rgba(255, 61, 90, 0.08)', border: 'rgba(255, 61, 90, 0.30)', soft: 'rgba(255, 61, 90, 0.06)' },
  amber: { color: '#FFB44A', bg: 'rgba(255, 180, 74, 0.08)', border: 'rgba(255, 180, 74, 0.30)', soft: 'rgba(255, 180, 74, 0.06)' },
  blue:  { color: '#4A9EFF', bg: 'rgba(74, 158, 255, 0.08)', border: 'rgba(74, 158, 255, 0.30)', soft: 'rgba(74, 158, 255, 0.06)' },
};

export default function DailyLessonPage() {
  const { date } = useParams();
  const { lessons, loading } = useDailyLessons();
  const lesson = date ? findLesson(lessons, date) : null;
  const [openUnits, setOpenUnits] = useState(new Set([0]));
  const [openQAs, setOpenQAs] = useState(new Set());

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
  const toggleQA = i => {
    const next = new Set(openQAs);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setOpenQAs(next);
  };

  // Defensive defaults — every list-shaped field must be iterable.
  const teachingUnits = Array.isArray(lesson.teachingUnits) ? lesson.teachingUnits : [];
  const chartReferences = Array.isArray(lesson.chartReferences) ? lesson.chartReferences : [];
  const keyRules = Array.isArray(lesson.keyRules) ? lesson.keyRules : [];
  const principlesReinforced = Array.isArray(lesson.principlesReinforced) ? lesson.principlesReinforced : [];
  const tradesReview = Array.isArray(lesson.tradesReview) ? lesson.tradesReview : [];
  const qaCards = Array.isArray(lesson.qaCards) ? lesson.qaCards : [];
  const differentlyItems = parseDifferently(lesson.whatIllDoDifferently);

  return (
    <article className="max-w-[860px] mx-auto space-y-6">
      {/* Header */}
      <header>
        <Link to="/mastery/daily" className="inline-flex items-center gap-1.5 text-xs text-muted no-underline mb-3 hover:text-text">
          ← All Daily Lessons
        </Link>
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className="pill num" style={{ background: 'rgba(255, 61, 90, 0.12)', color: '#FF3D5A', border: '1px solid rgba(255, 61, 90, 0.30)' }}>
            {formatDailyDate(lesson.date)}
          </span>
          <span className="pill-amber num">{teachingUnits.length} teaching units</span>
        </div>
        <h1 className="font-display font-bold text-3xl md:text-4xl m-0 leading-tight">{lesson.title}</h1>
        {lesson.subtitle && (
          <p className="text-base md:text-lg leading-snug mt-2 mb-0 text-muted font-light italic">
            {lesson.subtitle}
          </p>
        )}
      </header>

      {/* Session summary */}
      {lesson.sessionSummary && (
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
          <p className="text-base md:text-lg leading-relaxed m-0 text-text">{lesson.sessionSummary}</p>
        </section>
      )}

      {/* Trades Review (new schema) */}
      {tradesReview.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display font-semibold text-xl m-0">Trades Review</h2>
          {tradesReview.map((t, i) => {
            const accent = ACCENT[tradeAccent(t)];
            return (
              <div
                key={i}
                className="rounded-2xl p-5 border-l-4 border"
                style={{
                  background: accent.soft,
                  borderColor: accent.border,
                  borderLeftColor: accent.color,
                }}
              >
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  {t.instrument && (
                    <span className="pill num" style={{ background: accent.bg, color: accent.color, border: '1px solid ' + accent.border }}>
                      {t.instrument}
                    </span>
                  )}
                  {t.decision && (
                    <span className="text-[10px] uppercase tracking-[0.22em] num font-display font-medium" style={{ color: accent.color }}>
                      {t.decision}
                    </span>
                  )}
                </div>
                {t.setup && (
                  <div className="mb-2">
                    <div className="text-[10px] uppercase tracking-[0.22em] mb-1 font-display font-medium text-muted">Setup</div>
                    <div className="text-sm leading-relaxed text-text">{t.setup}</div>
                  </div>
                )}
                {t.outcome && (
                  <div className="mb-2">
                    <div className="text-[10px] uppercase tracking-[0.22em] mb-1 font-display font-medium text-muted">Outcome</div>
                    <div className="text-sm leading-relaxed text-text">{t.outcome}</div>
                  </div>
                )}
                {t.lesson && (
                  <div
                    className="mt-3 p-3 rounded-xl border-l-2"
                    style={{ background: 'rgba(255, 255, 255, 0.025)', borderColor: accent.color }}
                  >
                    <div className="text-[10px] uppercase tracking-[0.22em] mb-1 font-display font-medium" style={{ color: accent.color }}>
                      Lesson
                    </div>
                    <div className="text-sm leading-relaxed italic text-text">{t.lesson}</div>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      )}

      {/* Teaching units — handles both old and new schemas */}
      {teachingUnits.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display font-semibold text-xl m-0">Teaching Units</h2>
          {teachingUnits.map((u, i) => {
            const isOpen = openUnits.has(i);
            const newShape = isNewUnit(u);
            const headerText = newShape ? (u.title || '') : (u.question || '');
            const rulesList = Array.isArray(u.rules) ? u.rules : [];
            const principleNum = typeof u.principleReinforced === 'number' ? u.principleReinforced : null;
            const principle = principleNum != null ? principles.find(p => p.number === principleNum) : null;
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
                      {headerText}
                    </h3>
                  </div>
                  <div className="shrink-0 mt-1 text-muted">{isOpen ? '−' : '+'}</div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pl-[3.25rem] space-y-4 border-t border-border">
                    {/* Old shape: answer paragraph */}
                    {!newShape && u.answer && (
                      <p className="text-base leading-relaxed mt-4 m-0 text-text">{u.answer}</p>
                    )}

                    {/* New shape: concept (amber callout) */}
                    {newShape && u.concept && (
                      <div
                        className="mt-4 p-4 rounded-xl border-l-4 border"
                        style={{
                          background: 'rgba(255, 180, 74, 0.08)',
                          borderColor: 'rgba(255, 180, 74, 0.30)',
                          borderLeftColor: '#FFB44A',
                        }}
                      >
                        <div className="text-[10px] uppercase tracking-[0.22em] mb-2 num font-display font-medium" style={{ color: '#FFB44A' }}>
                          Concept
                        </div>
                        <p className="text-base leading-relaxed m-0 text-text">{u.concept}</p>
                      </div>
                    )}

                    {/* New shape: detail body */}
                    {newShape && u.detail && (
                      <p className="text-base leading-relaxed m-0 text-text">{u.detail}</p>
                    )}

                    {/* New shape: today's chart example */}
                    {newShape && u.applicationToday && (
                      <div
                        className="p-4 rounded-xl border"
                        style={{
                          background: 'rgba(74, 158, 255, 0.06)',
                          borderColor: 'rgba(74, 158, 255, 0.25)',
                        }}
                      >
                        <div className="text-[10px] uppercase tracking-[0.22em] mb-2 num font-display font-medium" style={{ color: '#4A9EFF' }}>
                          Today's Chart Example
                        </div>
                        <p className="text-sm md:text-base leading-relaxed m-0 text-text">{u.applicationToday}</p>
                      </div>
                    )}

                    {/* Visual Examples — per-date chart gallery */}
                    {(() => {
                      const bundle = CHARTS_BY_DATE[lesson.date];
                      const unitCharts = bundle?.charts?.[i];
                      if (!unitCharts) return null;
                      const slug = bundle?.slugs?.[i] || ('unit-' + i);
                      return <ChartGallery conceptId={slug} charts={unitCharts} />;
                    })()}

                    {/* Old shape: rules list */}
                    {!newShape && rulesList.length > 0 && (
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
                          {rulesList.map((r, j) => (
                            <li key={j} className="text-sm leading-relaxed flex gap-2 text-text">
                              <span style={{ color: '#00D9A0' }}>•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* New shape: single rule highlight bar */}
                    {newShape && u.rule && (
                      <div
                        className="p-4 rounded-xl border-l-4 border flex gap-3 items-start"
                        style={{
                          background: 'rgba(0, 217, 160, 0.10)',
                          borderColor: 'rgba(0, 217, 160, 0.35)',
                          borderLeftColor: '#00D9A0',
                        }}
                      >
                        <span className="shrink-0 text-base mt-0.5" style={{ color: '#00D9A0' }}>★</span>
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.22em] num font-display font-medium mb-1" style={{ color: '#00D9A0' }}>
                            Rule
                          </div>
                          <p className="text-sm md:text-base leading-relaxed m-0 text-text font-medium">{u.rule}</p>
                        </div>
                      </div>
                    )}

                    {/* Old shape: principle reinforced */}
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
      )}

      {/* Charts */}
      {chartReferences.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display font-semibold text-xl m-0">Charts Referenced</h2>
          {chartReferences.map((c, i) => (
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
      {keyRules.length > 0 && (
        <section
          className="rounded-2xl p-5 md:p-6 border"
          style={{ background: 'rgba(0, 217, 160, 0.06)', borderColor: 'rgba(0, 217, 160, 0.25)' }}
        >
          <h2 className="font-display font-semibold text-base m-0 mb-3" style={{ color: '#00D9A0' }}>
            Key Rules from Today
          </h2>
          <ul className="list-none p-0 m-0 space-y-2">
            {keyRules.map((r, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-text">
                <span className="num shrink-0" style={{ color: '#00D9A0' }}>{String(i + 1).padStart(2, '0')}</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Principles reinforced — handles numbers (old) and strings (new) */}
      {principlesReinforced.length > 0 && (
        <section
          className="rounded-2xl p-5 border"
          style={{ background: 'rgba(255, 180, 74, 0.06)', borderColor: 'rgba(255, 180, 74, 0.25)' }}
        >
          <h2 className="font-display font-semibold text-sm m-0 mb-3 uppercase tracking-[0.2em]" style={{ color: '#FFB44A' }}>
            Principles Reinforced
          </h2>
          {/* Numbers map to principles[] table → compact pills.
              Strings render as full-text callouts. */}
          {principlesReinforced.every(n => typeof n === 'number') ? (
            <div className="flex flex-wrap gap-2">
              {principlesReinforced.map(n => {
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
          ) : (
            <ul className="list-none p-0 m-0 space-y-2">
              {principlesReinforced.map((p, i) => (
                <li
                  key={i}
                  className="flex gap-3 p-3 rounded-xl border-l-2"
                  style={{
                    background: 'rgba(255, 180, 74, 0.06)',
                    borderColor: '#FFB44A',
                  }}
                >
                  <span className="num shrink-0 mt-0.5 text-xs" style={{ color: '#FFB44A' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-text">{String(p)}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Q&A Cards (new schema) */}
      {qaCards.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-display font-semibold text-xl m-0">Q&amp;A</h2>
          {qaCards.map((qa, i) => {
            const isOpen = openQAs.has(i);
            return (
              <div key={i} className="card overflow-hidden p-0">
                <button
                  type="button"
                  onClick={() => toggleQA(i)}
                  className="w-full flex items-start gap-3 p-5 text-left bg-transparent border-none cursor-pointer"
                >
                  <span className="shrink-0 mt-0.5 font-display font-bold text-sm" style={{ color: '#4A9EFF' }}>Q.</span>
                  <span className="flex-1 font-display font-semibold text-sm md:text-base text-text leading-snug">
                    {qa.question}
                  </span>
                  <span className="shrink-0 mt-1 text-muted">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && qa.answer && (
                  <div
                    className="px-5 pb-5 pl-[3.25rem] border-t border-border"
                    style={{ background: 'rgba(74, 158, 255, 0.04)' }}
                  >
                    <div className="flex gap-2 mt-4">
                      <span className="shrink-0 mt-0.5 font-display font-bold text-sm" style={{ color: '#00D9A0' }}>A.</span>
                      <p className="text-sm md:text-base leading-relaxed m-0 text-text">{qa.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      )}

      {/* What I'll do differently — renders as a commitment list */}
      {differentlyItems.length > 0 && (
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
          {differentlyItems.length === 1 ? (
            <p className="text-base leading-relaxed m-0 italic text-text">{differentlyItems[0]}</p>
          ) : (
            <ul className="list-none p-0 m-0 space-y-2.5">
              {differentlyItems.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm md:text-base leading-relaxed text-text">
                  <span className="shrink-0 mt-0.5" style={{ color: '#FF3D5A' }}>☐</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Closing thought */}
      {lesson.closingThought && (
        <section
          className="rounded-2xl p-5 md:p-6 border-l-4 border"
          style={{
            background: 'rgba(31, 31, 31, 0.45)',
            borderColor: 'rgba(255, 255, 255, 0.10)',
            borderLeftColor: '#FFB44A',
          }}
        >
          <div className="text-[10px] uppercase tracking-[0.22em] mb-2 num font-display font-medium" style={{ color: '#FFB44A' }}>
            Closing Thought
          </div>
          <p className="text-base md:text-lg leading-relaxed m-0 italic text-text/90">
            {lesson.closingThought}
          </p>
        </section>
      )}
    </article>
  );
}
