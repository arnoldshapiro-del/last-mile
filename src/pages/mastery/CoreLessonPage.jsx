import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { coreLessons, principles } from '../../data/mastery/index.js';

const calloutStyle = {
  principle: { bg: 'rgba(255, 180, 74, 0.10)', border: 'rgba(255, 180, 74, 0.35)', color: '#FFB44A', label: 'PRINCIPLE' },
  rule:      { bg: 'rgba(0, 217, 160, 0.07)',   border: 'rgba(0, 217, 160, 0.30)',  color: '#00D9A0', label: 'RULE' },
  warning:   { bg: 'rgba(255, 61, 90, 0.08)',   border: 'rgba(255, 61, 90, 0.30)',  color: '#FF3D5A', label: 'WARNING' },
};

export default function CoreLessonPage() {
  const { lessonId } = useParams();
  const idx = coreLessons.findIndex(l => l.id === lessonId);
  if (idx === -1) return <Navigate to="/mastery/lessons" replace />;
  const lesson = coreLessons[idx];
  const prev = idx > 0 ? coreLessons[idx - 1] : null;
  const next = idx < coreLessons.length - 1 ? coreLessons[idx + 1] : null;

  return (
    <article className="max-w-[820px] mx-auto space-y-6">
      <header className="space-y-3">
        <Link to="/mastery/lessons" className="inline-flex items-center gap-1.5 text-xs text-muted no-underline hover:text-text">
          ← All Core Lessons
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="pill-amber num">Lesson {String(lesson.number).padStart(2, '0')}</span>
          <span className="text-xs text-muted num">{lesson.duration}</span>
        </div>
        <h1 className="font-display font-bold text-3xl md:text-4xl m-0 leading-tight">{lesson.title}</h1>
        <p className="text-base leading-relaxed m-0 text-text/80">{lesson.summary}</p>
      </header>

      {/* Sections */}
      <div className="space-y-5">
        {lesson.sections.map((s, i) => (
          <section key={i} className="card">
            <h2 className="font-display font-semibold text-xl m-0 mb-3 leading-tight">{s.heading}</h2>
            <p className="text-base leading-relaxed m-0 text-text">{s.body}</p>
            {s.callout && (
              <div
                className="mt-4 p-4 rounded-xl border-l-4 border"
                style={{
                  background: calloutStyle[s.callout.type].bg,
                  borderColor: calloutStyle[s.callout.type].border,
                  borderLeftColor: calloutStyle[s.callout.type].color,
                }}
              >
                <div className="text-[10px] uppercase tracking-[0.22em] num font-display font-medium mb-1" style={{ color: calloutStyle[s.callout.type].color }}>
                  {calloutStyle[s.callout.type].label}
                </div>
                <div className="text-sm leading-relaxed text-text">{s.callout.text}</div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Key rules */}
      <section
        className="rounded-2xl p-5 md:p-6 border"
        style={{ background: 'rgba(0, 217, 160, 0.06)', borderColor: 'rgba(0, 217, 160, 0.25)' }}
      >
        <h3 className="font-display font-semibold text-base m-0 mb-3" style={{ color: '#00D9A0' }}>
          Key Rules from This Lesson
        </h3>
        <ul className="list-none p-0 m-0 space-y-2">
          {lesson.keyRules.map((r, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-text">
              <span className="num shrink-0" style={{ color: '#00D9A0' }}>{String(i + 1).padStart(2, '0')}</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Principles */}
      <section
        className="rounded-2xl p-5 border"
        style={{ background: 'rgba(255, 180, 74, 0.06)', borderColor: 'rgba(255, 180, 74, 0.25)' }}
      >
        <h3 className="font-display font-semibold text-sm m-0 mb-3 uppercase tracking-[0.2em]" style={{ color: '#FFB44A' }}>
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

      {/* Prev / Next */}
      <nav className="flex items-stretch gap-3 pt-4">
        {prev ? (
          <Link to={`/mastery/lesson/${prev.id}`} className="flex-1 card hover:border-amber/40 no-underline" style={{ color: 'inherit' }}>
            <div className="text-[10px] uppercase tracking-[0.22em] num text-muted mb-1">Previous</div>
            <div className="flex items-center gap-2">
              <span className="text-amber">←</span>
              <span className="text-sm font-display font-semibold truncate">{prev.title}</span>
            </div>
          </Link>
        ) : <div className="flex-1" />}
        {next ? (
          <Link to={`/mastery/lesson/${next.id}`} className="flex-1 card hover:border-amber/40 no-underline text-right" style={{ color: 'inherit' }}>
            <div className="text-[10px] uppercase tracking-[0.22em] num text-muted mb-1">Next</div>
            <div className="flex items-center gap-2 justify-end">
              <span className="text-sm font-display font-semibold truncate">{next.title}</span>
              <span className="text-amber">→</span>
            </div>
          </Link>
        ) : (
          <Link to="/mastery/checklists" className="flex-1 card hover:border-amber/40 no-underline text-right" style={{ color: 'inherit' }}>
            <div className="text-[10px] uppercase tracking-[0.22em] num text-muted mb-1">Up Next</div>
            <div className="flex items-center gap-2 justify-end">
              <span className="text-sm font-display font-semibold">Master Checklists</span>
              <span className="text-amber">→</span>
            </div>
          </Link>
        )}
      </nav>
    </article>
  );
}
