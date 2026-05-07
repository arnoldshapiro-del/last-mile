import React, { useState } from 'react';
import { principles } from '../../data/mastery/index.js';

const pillarMeta = {
  structure:    { color: '#00D9A0', label: 'STRUCTURE' },
  context:      { color: '#4A9EFF', label: 'CONTEXT' },
  confirmation: { color: '#FFB44A', label: 'CONFIRMATION' },
  execution:    { color: '#00D9A0', label: 'EXECUTION' },
  psychology:   { color: '#FFB44A', label: 'PSYCHOLOGY' },
};

export default function PrinciplesPage() {
  const [open, setOpen] = useState(new Set([1]));
  const toggle = n => {
    const next = new Set(open);
    if (next.has(n)) next.delete(n);
    else next.add(n);
    setOpen(next);
  };

  return (
    <div className="space-y-4">
      <section
        className="card border"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 180, 74, 0.08) 0%, rgba(31, 31, 31, 0.40) 100%)',
          borderColor: 'rgba(255, 180, 74, 0.25)',
        }}
      >
        <h2 className="font-display font-semibold text-xl m-0 mb-2" style={{ color: '#FFB44A' }}>
          The Spine
        </h2>
        <p className="text-sm leading-relaxed m-0 text-text/80">
          These 10 principles are the constants. Every daily lesson reinforces one or more of them.
          Every core lesson goes deeper into one. Every checklist item references one. When a setup
          fires and you do not know what to do — re-read these. The decision tree is here.
        </p>
      </section>

      <div className="space-y-3">
        {principles.map(p => {
          const meta = pillarMeta[p.pillar];
          const isOpen = open.has(p.number);
          return (
            <article key={p.number} className="card overflow-hidden p-0">
              <button
                type="button"
                onClick={() => toggle(p.number)}
                className="w-full flex items-start gap-4 p-5 text-left bg-transparent border-none cursor-pointer"
              >
                <div
                  className="num flex items-center justify-center shrink-0 rounded-xl text-2xl font-bold"
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    background: 'linear-gradient(135deg, #FFB44A, #D08F2E)',
                    color: '#0a0a0a',
                    boxShadow: '0 4px 16px rgba(255, 180, 74, 0.25)',
                  }}
                >
                  {String(p.number).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <h3 className="font-display font-semibold text-lg md:text-xl m-0 leading-tight">{p.title}</h3>
                    <span
                      className="text-[10px] tracking-[0.2em] px-2 py-0.5 rounded-full num font-display font-medium border"
                      style={{
                        background: `${meta.color}1f`,
                        borderColor: `${meta.color}55`,
                        color: meta.color,
                      }}
                    >
                      {meta.label}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed m-0 text-text/80">{p.short}</p>
                </div>
                <div className="shrink-0 mt-1 text-muted">{isOpen ? '−' : '+'}</div>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pl-[5.25rem] border-t border-border">
                  <p className="text-base leading-relaxed mt-4 m-0 text-text">{p.body}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <section
        className="rounded-2xl p-5 text-center border"
        style={{
          background: 'rgba(255, 180, 74, 0.06)',
          borderColor: 'rgba(255, 180, 74, 0.25)',
        }}
      >
        <p className="text-sm leading-relaxed m-0 text-text/80">
          Re-read these before every trading day. Re-read them after every loss.
          The principles do not change; the discipline of applying them is the entire game.
        </p>
      </section>
    </div>
  );
}
