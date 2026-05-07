import React from 'react';
import { Link } from 'react-router-dom';
import { coreLessons } from '../../data/mastery/index.js';

const pillarColor = {
  pole:         '#00D9A0',
  flag:         '#00D9A0',
  entry:        '#FFB44A',
  confirmation: '#FFB44A',
  session:      '#4A9EFF',
  staircase:    '#00D9A0',
  psychology:   '#FF3D5A',
};

export default function CoreLessonsIndex() {
  return (
    <div className="space-y-4">
      <section
        className="card border"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 217, 160, 0.08) 0%, rgba(31, 31, 31, 0.40) 100%)',
          borderColor: 'rgba(0, 217, 160, 0.25)',
        }}
      >
        <h2 className="font-display font-semibold text-xl m-0 mb-2" style={{ color: '#00D9A0' }}>
          10 Core Lessons
        </h2>
        <p className="text-sm leading-relaxed m-0 text-text/80">
          The deep dives behind the principles. Each lesson takes one principle (or two) and
          breaks it into the why, the how, and the trap to avoid. Read in order the first time —
          the order builds the decision tree top-down.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {coreLessons.map(l => {
          const color = pillarColor[l.pillar] || '#00D9A0';
          return (
            <Link
              key={l.id}
              to={`/mastery/lesson/${l.id}`}
              className="card hover:border-amber/40 transition-colors block no-underline"
              style={{ color: 'inherit' }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="num flex items-center justify-center shrink-0 rounded-lg font-bold border"
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    background: `${color}1f`,
                    borderColor: `${color}55`,
                    color: color,
                  }}
                >
                  {String(l.number).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span
                      className="text-[10px] tracking-[0.2em] num font-display font-medium uppercase"
                      style={{ color: color }}
                    >
                      {l.pillar}
                    </span>
                    <span className="text-[10px] text-muted">·</span>
                    <span className="text-[10px] num text-muted">{l.duration}</span>
                  </div>
                  <h3 className="font-display font-semibold text-base md:text-lg m-0 mb-1.5 leading-tight">
                    {l.title}
                  </h3>
                  <p className="text-xs leading-relaxed m-0 text-muted">{l.summary}</p>
                </div>
                <span className="shrink-0 mt-1 text-muted">→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
