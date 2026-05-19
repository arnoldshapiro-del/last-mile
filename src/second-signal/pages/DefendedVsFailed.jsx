import React, { useState, useEffect, useMemo } from 'react';
import ExpandableChart from '../components/ExpandableChart.jsx';
import { generatePattern } from '../patterns.js';
import { markLessonComplete } from '../storage.js';

const SIGNS = [
  {
    title: 'Long lower wicks at the level',
    body: 'Tails show price tried to go lower and got rejected. A wick that is 50% or more of the candle\'s range means strong rejection.',
  },
  {
    title: 'Strong bull bars right after the touch',
    body: 'Big green body, closes near the high, small upper wick. The bigger and cleaner this bar, the stronger the defense.',
  },
  {
    title: 'The retest makes a higher low',
    body: 'When price comes back down toward the level, it stops a tick or two above. This is the most important visual confirmation.',
  },
  {
    title: 'Volume spikes on the bull bars',
    body: 'Volume is noticeably higher on the green defense bars than surrounding red bars. Big volume equals real buyers.',
  },
];

const PAIRED_EXAMPLES = [
  { id: 1, leftVar: 'w-strong-wicks',      rightVar: 'descending-no-wicks',
    note: 'Left: classic W with strong rejection wicks. Right: lower lows with no wicks — no defense.' },
  { id: 2, leftVar: 'double-bot-volume',   rightVar: 'double-bot-no-vol',
    note: 'Left: double bottom WITH volume spike on the bull bars. Right: same shape, no volume — sellers may still be in control.' },
  { id: 3, leftVar: 'higher-low-retest',   rightVar: 'lower-low-break',
    note: 'Left: retest forms a higher low above support. Right: retest breaks support — count is dead.' },
  { id: 4, leftVar: 'strong-bull-at-low',  rightVar: 'weak-bull-at-low',
    note: 'Left: meaty bull bar at the low. Right: small body, big upper wick — buyers tried and failed.' },
  { id: 5, leftVar: 'defended-top',        rightVar: 'failed-top',
    note: 'Defense works at tops too. Left: sellers show up at resistance. Right: price slices through — no defense.' },
  { id: 6, leftVar: 'defended-top-wicks',  rightVar: 'failed-top-no-wicks',
    note: 'Upper wicks at resistance = real selling. No wicks = no rejection.' },
  { id: 7, leftVar: 'multi-touch-defended', rightVar: 'single-touch-break',
    note: 'Multiple defended touches build a stronger floor. A single touch followed by a break is weak.' },
  { id: 8, leftVar: 'defense-confluence',  rightVar: 'defense-no-confluence',
    note: 'Defense at a round number or prior swing has confluence. Defense in no-man\'s-land is weaker.' },
  { id: 9, leftVar: 'slow-defense',        rightVar: 'fast-defense',
    note: 'Slow defense (several bars at the level) and fast defense (one explosive bar) both work — what fails is no defense at all.' },
  { id: 10, leftVar: 'defense-in-bull-trend', rightVar: 'defense-against-bear',
    note: 'Defense in the always-in direction is highest probability. Defense against a strong trend is lower probability.' },
];

// Mini-quiz: 8 charts, user calls Defended or Failed
const QUIZ_QUESTIONS = [
  { id: 'q1', variant: 'w-strong-wicks',     answer: 'defended', explain: 'Long lower wicks at support followed by strong green body — textbook defense.' },
  { id: 'q2', variant: 'descending-no-wicks', answer: 'failed',  explain: 'Lower lows with no rejection wicks — sellers in full control.' },
  { id: 'q3', variant: 'higher-low-retest',  answer: 'defended', explain: 'Retest made a higher low above support. That is the cleanest signal.' },
  { id: 'q4', variant: 'lower-low-break',    answer: 'failed',   explain: 'Price broke through the level on the retest. Count is dead.' },
  { id: 'q5', variant: 'defended-top',       answer: 'defended', explain: 'Sellers stepped in at resistance with strong red bars — defense.' },
  { id: 'q6', variant: 'failed-top-no-wicks', answer: 'failed',  explain: 'Price punched through resistance with no upper wicks. No defense.' },
  { id: 'q7', variant: 'strong-bull-at-low', answer: 'defended', explain: 'Big meaty green bar right at support is the bar you wait for.' },
  { id: 'q8', variant: 'weak-bull-at-low',   answer: 'failed',   explain: 'Small body and big upper wick — buyers showed up but got rejected.' },
];

function MiniQuiz() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = QUIZ_QUESTIONS[idx];
  const chart = useMemo(() => generatePattern('defended', q.variant), [q.variant]);

  function pick(ans) {
    if (picked) return;
    const correct = ans === q.answer;
    setPicked({ ans, correct });
    if (correct) setScore((s) => s + 1);
  }
  function next() {
    if (idx + 1 >= QUIZ_QUESTIONS.length) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setPicked(null);
    }
  }
  function restart() {
    setIdx(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className="card space-y-4 text-center">
        <h3 className="section-h3">Score: <span className="text-accent">{score}</span> / {QUIZ_QUESTIONS.length}</h3>
        <p className="body-muted">
          {score >= 7 && 'Sharp eye. You can tell defense from a chart that just looks like one.'}
          {score === 5 || score === 6 ? 'Solid. Re-skim the 4 signs and try again.' : null}
          {score < 5 && 'Re-read the 4 signs above, then run it again. The eye trains fast.'}
        </p>
        <button type="button" className="btn-primary" onClick={restart}>Try again</button>
      </div>
    );
  }

  return (
    <div className="card space-y-4">
      <div className="flex items-center justify-between">
        <span className="mono text-sm text-text-muted">Question {idx + 1} / {QUIZ_QUESTIONS.length}</span>
        <span className="mono text-sm text-text-muted">Score: {score}</span>
      </div>

      <ExpandableChart
        candles={chart.candles}
        annotations={chart.annotations}
        ariaLabel="Quiz chart — call defended or failed"
        borderClass={picked ? (picked.correct ? 'flash-correct' : 'flash-wrong') : ''}
        inlineHeight={240}
      />

      {!picked ? (
        <div className="grid grid-cols-2 gap-3">
          <button type="button" className="btn-primary !bg-bull-light hover:!opacity-90" onClick={() => pick('defended')}>
            Defended
          </button>
          <button type="button" className="btn-primary !bg-bear-light hover:!opacity-90" onClick={() => pick('failed')}>
            Failed
          </button>
        </div>
      ) : (
        <div
          className={`p-4 rounded border ${
            picked.correct ? 'border-bull bg-bull/10' : 'border-bear bg-bear/10'
          }`}
        >
          <p className="mono font-bold">
            {picked.correct ? (
              <span className="text-bull-light">✓ Correct — {q.answer.toUpperCase()}</span>
            ) : (
              <span className="text-bear-light">✗ It was {q.answer.toUpperCase()}</span>
            )}
          </p>
          <p className="text-sm mt-1 text-text-primary">{q.explain}</p>
          <button type="button" className="btn-primary mt-3" onClick={next}>
            {idx + 1 >= QUIZ_QUESTIONS.length ? 'See score' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  );
}

export default function DefendedVsFailed() {
  useEffect(() => {
    markLessonComplete('defended');
  }, []);

  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <p className="mono text-xs uppercase tracking-widest text-text-muted">Section 2</p>
        <h1 className="section-h1">Defended vs Failed</h1>
        <p className="body-muted">
          When buyers defend a low, they leave footprints on the chart. When sellers defend a high,
          they leave footprints too. Learning to spot these footprints is the difference between
          taking high-probability trades and getting trapped.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="section-h2">The four signs of defense</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SIGNS.map((s, i) => (
            <div key={s.title} className="card">
              <div className="flex items-start gap-3">
                <span className="mono text-accent text-base shrink-0 w-7 h-7 rounded-full bg-bg-elevated flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="section-h3 mb-1">{s.title}</h3>
                  <p className="text-text-muted text-base leading-relaxed">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="card-elevated">
          <p>
            <span className="mono font-bold text-text-primary">Rule:</span>{' '}
            See 3 or 4 of these → buyers defended.
            See 1 or 2 → questionable, wait or skip.
            See 0 → sellers in control, skip.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-h2">Defended examples</h2>
        <p className="body-muted">
          Ten paired charts. Defended on the left, failed on the right.
          Tap any to expand and study the wicks, bodies, and retest.
        </p>
        <div className="space-y-7">
          {PAIRED_EXAMPLES.map((p) => {
            const left = generatePattern('defended', p.leftVar);
            const right = generatePattern('defended', p.rightVar);
            return (
              <div key={p.id} className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="mono text-xs text-text-muted w-7 h-7 rounded-full bg-bg-card flex items-center justify-center border border-default">
                    {p.id}
                  </span>
                  <p className="text-sm text-text-muted">{p.note}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ExpandableChart
                    candles={left.candles}
                    annotations={left.annotations}
                    ariaLabel={`Example ${p.id} — defended`}
                    caption="Defended"
                    captionTone="bull"
                    inlineHeight={220}
                  />
                  <ExpandableChart
                    candles={right.candles}
                    annotations={right.annotations}
                    ariaLabel={`Example ${p.id} — failed`}
                    caption="Failed"
                    captionTone="bear"
                    inlineHeight={220}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-h2">Quick quiz — can you spot defense?</h2>
        <p className="body-muted">
          Eight questions. Tap "Defended" or "Failed." You'll get immediate feedback.
        </p>
        <MiniQuiz />
      </section>
    </article>
  );
}
