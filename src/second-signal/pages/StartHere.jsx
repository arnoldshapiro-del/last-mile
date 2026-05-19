import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExpandableChart from '../components/ExpandableChart.jsx';
import { WPatternSVG, MPatternSVG } from '../components/PatternSVG.jsx';
import { generatePattern } from '../patterns.js';
import { getCompletedLessons, markLessonComplete, isLessonComplete } from '../storage.js';

const BASE = '/second-signal';
const LEARNING_PATH = [
  { id: 'start-here', title: 'Start Here (foundation)', mins: 5, to: `${BASE}` },
  { id: 'defended', title: 'Defended vs Failed (visual training)', mins: 15, to: `${BASE}/defended` },
  { id: 'double-bottom', title: 'Double Bottom H2 (first pattern)', mins: 20, to: `${BASE}/patterns/double-bottom` },
  { id: 'double-top', title: 'Double Top L2 (mirror image)', mins: 15, to: `${BASE}/patterns/double-top` },
  { id: 'bull-flag', title: 'Bull Flag H2 (continuation)', mins: 20, to: `${BASE}/patterns/bull-flag` },
  { id: 'bear-flag', title: 'Bear Flag L2 (mirror image)', mins: 15, to: `${BASE}/patterns/bear-flag` },
  { id: 'practice', title: 'Practice Mode (30 questions)', mins: 30, to: `${BASE}/practice` },
  { id: 'advanced', title: 'Optional — Level 3 Advanced', mins: null, to: `${BASE}/advanced` },
];

export default function StartHere() {
  const [completed, setCompleted] = useState(getCompletedLessons());

  // Mark "start-here" as visited on mount
  useEffect(() => {
    if (!isLessonComplete('start-here')) {
      markLessonComplete('start-here');
      setCompleted(getCompletedLessons());
    }
  }, []);

  // The two simple pattern charts (procedurally generated)
  const dbChart = generatePattern('double-bottom', 'clean-1');
  const dtChart = generatePattern('double-top', 'clean-1');

  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="mono text-xs uppercase tracking-widest text-text-muted">Start here</p>
        <h1 className="section-h1 leading-tight">
          The market needs two tries to turn around.<br/>
          <span className="text-accent">Wait for the second try.</span>
        </h1>
      </header>

      <section className="card space-y-5">
        <p>
          When price stops going down and tries to go up, the first try usually fails.
          Sellers are still around. They push it back down. But when the second try
          comes — and the market did not make a new low between the two tries — that
          is the high-probability turn. That second try is called <span className="text-bull-light mono font-bold">H2</span>.
          That is what you buy.
        </p>
        <p>
          When price stops going up and tries to go down, the first try usually fails.
          Buyers are still around. They push it back up. But when the second try comes —
          and the market did not make a new high between the two tries — that is the
          high-probability turn. That second try is called <span className="text-bear-light mono font-bold">L2</span>.
          That is what you sell.
        </p>
        <p>
          <span className="mono text-text-primary">H1</span> means "first buy signal."
          <span className="mono text-text-primary"> H2</span> means "second buy signal."
          <span className="mono text-text-primary"> L1</span> and <span className="mono text-text-primary">L2</span> are the same idea for sells.
          The number is which try you are on.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="section-h2">The picture, both ways</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ExpandableChart
            ariaLabel="W pattern: drop into support, H1 grayed out, H2 highlighted"
            caption={
              <span className="block text-center">
                <span className="mono text-text-dim">Skip H1.</span>{' '}
                <span className="mono text-bull-light font-bold">Take H2.</span>
              </span>
            }
          >
            <WPatternSVG />
          </ExpandableChart>

          <ExpandableChart
            ariaLabel="M pattern: rally into resistance, L1 grayed out, L2 highlighted"
            caption={
              <span className="block text-center">
                <span className="mono text-text-dim">Skip L1.</span>{' '}
                <span className="mono text-bear-light font-bold">Take L2.</span>
              </span>
            }
          >
            <MPatternSVG />
          </ExpandableChart>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="section-h2">A real-looking sequence</h2>
        <p className="body-muted">
          Two procedurally drawn charts that show the exact moment H2 fires.
          Tap either to expand to fullscreen — that's how every chart in this app works.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ExpandableChart
            candles={dbChart.candles}
            annotations={dbChart.annotations}
            ariaLabel="Double bottom with H1 and H2 labeled"
            caption="Double bottom: drop into support, H1 fails, pullback stays above H1 low, H2 fires."
            captionTone="bull"
          />
          <ExpandableChart
            candles={dtChart.candles}
            annotations={dtChart.annotations}
            ariaLabel="Double top with L1 and L2 labeled"
            caption="Double top: rally into resistance, L1 fails, pullback stays below L1 high, L2 fires."
            captionTone="bear"
          />
        </div>
      </section>

      <section className="card space-y-3">
        <h2 className="section-h2">What "defended" means</h2>
        <p>
          "Defended" means buyers (or sellers) showed up at the same price level twice.
          The first time creates H1. The second time creates H2. The defending is what
          makes the trade work.
        </p>
        <p className="text-text-muted text-base">
          If a level isn't defended — if price slices straight through it — there's no
          trade. Wait for the next setup.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="section-h2">Suggested path</h2>
        <p className="body-muted">
          Work through these in order. Each section marks itself complete the first time you visit.
        </p>
        <ol className="card !p-0 divide-y divide-[var(--border)] overflow-hidden">
          {LEARNING_PATH.map((step, idx) => {
            const done = completed.includes(step.id);
            return (
              <li key={step.id}>
                <Link
                  to={step.to}
                  className="flex items-center gap-4 px-5 py-4 no-underline hover:bg-bg-elevated transition-colors"
                >
                  <span
                    className={`mono text-xs w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                      done
                        ? 'border-bull bg-bull/20 text-bull-light'
                        : 'border-default text-text-muted'
                    }`}
                    aria-label={done ? 'completed' : `step ${idx + 1}`}
                  >
                    {done ? '✓' : idx + 1}
                  </span>
                  <span className="flex-1 text-text-primary">{step.title}</span>
                  {step.mins != null && (
                    <span className="mono text-xs text-text-muted shrink-0">{step.mins} min</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <Link to={`${BASE}/defended`} className="btn-primary text-center no-underline">→ Defended vs Failed</Link>
        <Link to={`${BASE}/patterns`} className="btn-secondary text-center no-underline">→ The Four Patterns</Link>
        <Link to={`${BASE}/practice`} className="btn-secondary text-center no-underline">→ Practice Mode</Link>
      </section>
    </article>
  );
}
