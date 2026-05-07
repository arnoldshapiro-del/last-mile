import React, { useEffect, useState } from 'react';
import { preTradeChecklist, inTradeChecklist, postTradeChecklist } from '../../data/mastery/index.js';

const phaseConfig = {
  pre:  { title: 'Pre-Trade',  desc: 'Run this before you take any setup. Eight checks; all must pass.', items: preTradeChecklist,  accent: '#00D9A0' },
  in:   { title: 'In-Trade',   desc: 'Run this while in a position. Six checks; do not break any.',      items: inTradeChecklist,   accent: '#FFB44A' },
  post: { title: 'Post-Trade', desc: 'Run this after every trade — win or loss. Eight honest answers.',  items: postTradeChecklist, accent: '#4A9EFF' },
};

const STORAGE_KEY = 'lastmile:mastery:checklists';

export default function ChecklistsPage() {
  const [active, setActive] = useState('pre');
  const [state, setState] = useState({ pre: {}, in: {}, post: {} });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ pre: {}, in: {}, post: {}, ...JSON.parse(raw) });
    } catch { /* ignore */ }
  }, []);

  const persist = next => {
    setState(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  };
  const toggle = (phase, id) => persist({ ...state, [phase]: { ...state[phase], [id]: !state[phase][id] } });
  const reset = phase => persist({ ...state, [phase]: {} });

  const cfg = phaseConfig[active];
  const checked = cfg.items.filter(i => state[active][i.id]).length;

  return (
    <div className="space-y-5">
      <section
        className="card border"
        style={{
          background: 'linear-gradient(135deg, rgba(74, 158, 255, 0.08) 0%, rgba(31, 31, 31, 0.40) 100%)',
          borderColor: 'rgba(74, 158, 255, 0.25)',
        }}
      >
        <h2 className="font-display font-semibold text-xl m-0 mb-2" style={{ color: '#4A9EFF' }}>
          Master Checklists
        </h2>
        <p className="text-sm leading-relaxed m-0 text-text/80">
          Three rituals that make the principles operational. Pre-trade before any entry; In-trade
          while in a position; Post-trade after every result. Check items as you go — your state
          saves locally and resets when you click Reset.
        </p>
      </section>

      <div className="flex gap-2 flex-wrap items-center">
        {Object.entries(phaseConfig).map(([phase, c]) => {
          const isActive = active === phase;
          const count = c.items.filter(i => state[phase][i.id]).length;
          return (
            <button
              key={phase}
              type="button"
              onClick={() => setActive(phase)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-display font-semibold border cursor-pointer"
              style={{
                background: isActive ? `${c.accent}22` : '#161616',
                borderColor: isActive ? `${c.accent}66` : '#262626',
                color: isActive ? c.accent : '#888888',
              }}
            >
              {c.title}
              <span className="num text-xs" style={{ color: isActive ? c.accent : '#666' }}>
                {count}/{c.items.length}
              </span>
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => reset(active)}
          className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs btn-ghost"
          style={{ cursor: 'pointer' }}
        >
          ↻ Reset {cfg.title}
        </button>
      </div>

      <section
        className="rounded-2xl p-5 md:p-6 border"
        style={{ background: `${cfg.accent}0d`, borderColor: `${cfg.accent}40` }}
      >
        <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
          <div>
            <h3 className="font-display font-semibold text-lg m-0" style={{ color: cfg.accent }}>
              {cfg.title} Checklist
            </h3>
            <p className="text-sm m-0 mt-0.5 text-muted">{cfg.desc}</p>
          </div>
          <div
            className="num text-xs px-2.5 py-1 rounded-full border"
            style={{
              background: `${cfg.accent}22`,
              borderColor: `${cfg.accent}55`,
              color: cfg.accent,
            }}
          >
            {checked} / {cfg.items.length} done
          </div>
        </div>

        <ul className="list-none p-0 m-0 space-y-2">
          {cfg.items.map((item, i) => {
            const isDone = state[active][item.id];
            return (
              <li
                key={item.id}
                className="rounded-xl border transition-all"
                style={{
                  background: isDone ? `${cfg.accent}11` : '#161616',
                  borderColor: isDone ? `${cfg.accent}55` : '#1f1f1f',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(active, item.id)}
                  className="w-full flex items-start gap-3 p-4 text-left bg-transparent border-none cursor-pointer"
                >
                  <div className="num shrink-0 mt-0.5 text-xs" style={{ color: cfg.accent }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div
                    className="shrink-0 mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center"
                    style={{
                      borderColor: isDone ? cfg.accent : '#262626',
                      background: isDone ? cfg.accent : 'transparent',
                    }}
                  >
                    {isDone && <span style={{ color: '#0a0a0a', fontWeight: 'bold' }}>✓</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-sm md:text-base font-display font-semibold mb-1 leading-tight"
                      style={{
                        color: isDone ? cfg.accent : '#e8e8e8',
                        textDecoration: isDone ? 'line-through' : 'none',
                      }}
                    >
                      {item.text}
                    </div>
                    <div className="text-xs leading-relaxed text-muted">{item.detail}</div>
                    {item.principleRef !== undefined && (
                      <div className="mt-2 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] num" style={{ color: '#FFB44A' }}>
                        ⊙ Principle {String(item.principleRef).padStart(2, '0')}
                      </div>
                    )}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
