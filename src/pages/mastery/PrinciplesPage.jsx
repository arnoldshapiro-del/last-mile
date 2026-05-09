import { useState } from 'react';
import { ChevronDown, ChevronRight, Target, HelpCircle } from 'lucide-react';
import { principles } from '../../data/mastery';
import { ChartGallery } from '../../components/charts/day-2026-05-07/ChartGallery';
import { PRINCIPLE_CHARTS } from '../../components/charts/mastery';

const pillarColors = {
  structure:    { bg: 'rgba(20, 184, 166, 0.10)', border: 'rgba(20, 184, 166, 0.40)', text: '#5eead4', label: 'STRUCTURE' },
  context:      { bg: 'rgba(99, 102, 241, 0.10)', border: 'rgba(99, 102, 241, 0.40)', text: '#a5b4fc', label: 'CONTEXT' },
  confirmation: { bg: 'rgba(168, 85, 247, 0.10)', border: 'rgba(168, 85, 247, 0.40)', text: '#c4b5fd', label: 'CONFIRMATION' },
  execution:    { bg: 'rgba(20, 184, 166, 0.10)', border: 'rgba(20, 184, 166, 0.40)', text: '#5eead4', label: 'EXECUTION' },
  psychology:   { bg: 'rgba(251, 191, 36, 0.10)', border: 'rgba(251, 191, 36, 0.40)', text: '#fcd34d', label: 'PSYCHOLOGY' },
};

export default function PrinciplesPage() {
  const [expanded, setExpanded] = useState(new Set([1]));
  const [openUnits, setOpenUnits] = useState(new Set());

  const toggle = (n) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });
  };

  const toggleUnit = (key) => {
    setOpenUnits(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div className="space-y-4">
      {/* Intro */}
      <section
        className="rounded-2xl p-5 md:p-6"
        style={{
          background:
            'linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(15, 23, 42, 0.40) 100%)',
          border: '1px solid rgba(251, 191, 36, 0.25)',
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl"
            style={{
              background: 'rgba(251, 191, 36, 0.15)',
              border: '1px solid rgba(251, 191, 36, 0.35)',
            }}
          >
            <Target className="w-5 h-5" style={{ color: '#fbbf24' }} />
          </div>
          <h2 className="text-xl m-0">The Spine</h2>
        </div>
        <p className="text-sm leading-relaxed m-0" style={{ color: '#cbd5e1' }}>
          These 10 principles are the constants. Every daily lesson reinforces one or more of them.
          Every core lesson goes deeper into one. Every checklist item references one. Click any
          principle to expand it — you'll find a deep teaching dive, six teaching charts, and Q&A
          units exactly like the daily lessons.
        </p>
      </section>

      {/* Principles */}
      <div className="space-y-3">
        {principles.map(p => {
          const colors = pillarColors[p.pillar];
          const isOpen = expanded.has(p.number);
          const charts = PRINCIPLE_CHARTS[p.number];
          return (
            <article
              key={p.number}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <button
                type="button"
                onClick={() => toggle(p.number)}
                className="w-full flex items-start gap-4 p-5 text-left"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                aria-expanded={isOpen}
              >
                <div
                  className="num flex items-center justify-center shrink-0 rounded-xl"
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
                    color: '#070c18',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    boxShadow: '0 4px 16px rgba(20, 184, 166, 0.30)',
                  }}
                >
                  {String(p.number).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <h3 className="text-lg md:text-xl m-0 leading-tight">{p.title}</h3>
                    <span
                      className="text-[10px] tracking-[0.2em] px-2 py-0.5 rounded-full num"
                      style={{
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                        color: colors.text,
                      }}
                    >
                      {colors.label}
                    </span>
                    {charts && (
                      <span
                        className="text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full num"
                        style={{
                          background: 'rgba(94, 234, 212, 0.10)',
                          border: '1px solid rgba(94, 234, 212, 0.30)',
                          color: '#5eead4',
                        }}
                      >
                        {charts.length} CHARTS
                      </span>
                    )}
                    {p.teachingUnits && (
                      <span
                        className="text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full num"
                        style={{
                          background: 'rgba(167, 139, 250, 0.10)',
                          border: '1px solid rgba(167, 139, 250, 0.30)',
                          color: '#c4b5fd',
                        }}
                      >
                        {p.teachingUnits.length} Q&A
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed m-0" style={{ color: '#cbd5e1' }}>
                    {p.short}
                  </p>
                </div>
                <div className="shrink-0 mt-1" style={{ color: '#94a3b8' }}>
                  {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </div>
              </button>
              {isOpen && (
                <div
                  className="px-5 pb-5 pl-[5.25rem] space-y-5"
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <p
                    className="text-base leading-relaxed mt-4 m-0"
                    style={{ color: '#e2e8f0' }}
                  >
                    {p.body}
                  </p>

                  {/* Chart Gallery */}
                  {charts && (
                    <ChartGallery conceptId={'principle-' + p.number} charts={charts} />
                  )}

                  {/* Q&A teaching units */}
                  {p.teachingUnits && p.teachingUnits.length > 0 && (
                    <div className="space-y-3 mt-2">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="w-3.5 h-3.5" style={{ color: '#c4b5fd' }} />
                        <span
                          className="text-[10px] uppercase tracking-[0.22em] num"
                          style={{ color: '#c4b5fd', fontFamily: 'Oxanium, system-ui, sans-serif' }}
                        >
                          Teaching Q&amp;A · {p.teachingUnits.length} units
                        </span>
                      </div>
                      {p.teachingUnits.map((u, i) => {
                        const key = `${p.number}-${i}`;
                        const open = openUnits.has(key);
                        return (
                          <div
                            key={key}
                            className="rounded-2xl overflow-hidden"
                            style={{
                              background: 'rgba(255, 255, 255, 0.025)',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => toggleUnit(key)}
                              className="w-full flex items-start gap-3 p-4 text-left"
                              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                              aria-expanded={open}
                            >
                              <div
                                className="num shrink-0 mt-0.5"
                                style={{ color: '#c4b5fd', fontSize: '0.8rem', fontWeight: 700 }}
                              >
                                Q{i + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm md:text-base m-0 leading-snug" style={{ color: '#f5f9ff' }}>
                                  {u.question}
                                </h4>
                              </div>
                              <div className="shrink-0 mt-0.5" style={{ color: '#94a3b8' }}>
                                {open ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                              </div>
                            </button>
                            {open && (
                              <div
                                className="px-4 pb-4 pl-12 space-y-3"
                                style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}
                              >
                                <p
                                  className="text-sm leading-relaxed mt-3 m-0"
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
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Closer */}
      <section
        className="rounded-2xl p-5 text-center"
        style={{
          background: 'rgba(20, 184, 166, 0.06)',
          border: '1px solid rgba(20, 184, 166, 0.25)',
        }}
      >
        <p className="text-sm leading-relaxed m-0" style={{ color: '#cbd5e1' }}>
          Re-read these before every trading day. Re-read them after every loss.
          The principles do not change; the discipline of applying them is the entire game.
        </p>
      </section>
    </div>
  );
}
