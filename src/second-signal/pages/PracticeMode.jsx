import React, { useState, useMemo, useEffect } from 'react';
import ExpandableChart from '../components/ExpandableChart.jsx';
import { generatePattern, PRACTICE_QUESTIONS } from '../patterns.js';
import {
  getPracticeStats,
  recordPracticeAnswer,
  resetPracticeStats,
  markLessonComplete,
} from '../storage.js';

const ANSWER_OPTIONS = [
  { key: 'skip-h1-l1',    label: 'This is H1 / L1 (skip)',                   tone: 'muted' },
  { key: 'take-h2',       label: 'This is H2 (take it)',                     tone: 'bull' },
  { key: 'take-l2',       label: 'This is L2 (take it)',                     tone: 'bear' },
  { key: 'skip-restart',  label: 'Skip — count restarted (low/high broke)',  tone: 'warn' },
  { key: 'skip-not-clean', label: 'Skip — not a clean setup',                tone: 'muted' },
];

// Stable shuffle each session — uses a session-stamped seed so questions
// stay in the same order until "Restart" clears them.
function seededShuffle(arr, seed) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function StatsDashboard({ stats, onReset }) {
  const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
  const perBuckets = [
    { key: 'double-bottom', label: 'Double Bottom' },
    { key: 'double-top',    label: 'Double Top' },
    { key: 'bull-flag',     label: 'Bull Flag' },
    { key: 'bear-flag',     label: 'Bear Flag' },
  ];
  return (
    <div className="card space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="mono text-xs uppercase text-text-muted tracking-wider">Total attempts</p>
          <p className="mono text-4xl font-bold text-text-primary mt-1">{stats.total}</p>
        </div>
        <div>
          <p className="mono text-xs uppercase text-text-muted tracking-wider">Accuracy</p>
          <p className={`mono text-4xl font-bold mt-1 ${
            pct >= 70 ? 'text-bull-light' : pct >= 50 ? 'text-warn' : 'text-bear-light'
          }`}>
            {stats.total > 0 ? `${pct}%` : '—'}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2 border-t border-default">
        {perBuckets.map((b) => {
          const bucket = stats.perPattern[b.key] || { total: 0, correct: 0 };
          const p = bucket.total > 0 ? Math.round((bucket.correct / bucket.total) * 100) : null;
          return (
            <div key={b.key} className="flex justify-between items-baseline">
              <span className="mono text-sm text-text-muted">{b.label}</span>
              <span className="mono text-base text-text-primary">
                {p == null ? '—' : `${p}%`}
                <span className="text-xs text-text-dim ml-1">({bucket.total})</span>
              </span>
            </div>
          );
        })}
      </div>
      <div className="pt-2 border-t border-default">
        <button
          type="button"
          className="btn-ghost mono text-sm"
          onClick={() => {
            if (window.confirm('Reset all practice stats? This cannot be undone.')) onReset();
          }}
        >
          Reset stats
        </button>
      </div>
    </div>
  );
}

export default function PracticeMode() {
  useEffect(() => { markLessonComplete('practice'); }, []);

  // Persisted stats
  const [stats, setStats] = useState(getPracticeStats());
  // Session seed — re-shuffled each time the user hits Restart Quiz
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e9));
  const questions = useMemo(() => seededShuffle(PRACTICE_QUESTIONS, seed), [seed]);

  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [sessionScore, setSessionScore] = useState({ correct: 0, total: 0 });
  const [done, setDone] = useState(false);
  // Track which pattern buckets the session answered, for end-of-session breakdown
  const [sessionByPattern, setSessionByPattern] = useState({
    'double-bottom': { total: 0, correct: 0 },
    'double-top':    { total: 0, correct: 0 },
    'bull-flag':     { total: 0, correct: 0 },
    'bear-flag':     { total: 0, correct: 0 },
    other:           { total: 0, correct: 0 },
  });

  const q = questions[idx];
  const chart = useMemo(
    () => (q ? generatePattern(q.type, q.variant) : null),
    [q]
  );

  function pick(answerKey) {
    if (picked || !q) return;
    const correct = answerKey === q.answer;
    setPicked({ key: answerKey, correct });
    setSessionScore((s) => ({
      correct: s.correct + (correct ? 1 : 0),
      total: s.total + 1,
    }));
    setSessionByPattern((p) => {
      const bucket = p[q.patternKey] || p.other;
      return {
        ...p,
        [q.patternKey]: {
          total: bucket.total + 1,
          correct: bucket.correct + (correct ? 1 : 0),
        },
      };
    });
    setStats(recordPracticeAnswer(q.patternKey, correct));
  }

  function nextQ() {
    if (idx + 1 >= questions.length) {
      setDone(true);
    } else {
      setIdx((i) => i + 1);
      setPicked(null);
    }
  }

  function restart() {
    setSeed(Math.floor(Math.random() * 1e9));
    setIdx(0);
    setPicked(null);
    setSessionScore({ correct: 0, total: 0 });
    setSessionByPattern({
      'double-bottom': { total: 0, correct: 0 },
      'double-top':    { total: 0, correct: 0 },
      'bull-flag':     { total: 0, correct: 0 },
      'bear-flag':     { total: 0, correct: 0 },
      other:           { total: 0, correct: 0 },
    });
    setDone(false);
  }

  function resetAll() {
    resetPracticeStats();
    setStats(getPracticeStats());
  }

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="mono text-xs uppercase tracking-widest text-text-muted">Section 4</p>
        <h1 className="section-h1">Practice Mode</h1>
        <p className="body-muted">Train your eye until H2 jumps off the screen.</p>
      </header>

      <StatsDashboard stats={stats} onReset={resetAll} />

      {done ? (
        <section className="card space-y-5 text-center">
          <h2 className="section-h2">Session complete</h2>
          <p className="mono text-5xl font-bold text-accent">
            {sessionScore.correct} / {sessionScore.total}
          </p>
          <div className="grid grid-cols-2 gap-3 text-left max-w-md mx-auto">
            {Object.entries(sessionByPattern).map(([key, val]) => {
              if (val.total === 0) return null;
              const p = Math.round((val.correct / val.total) * 100);
              const label = {
                'double-bottom': 'Double Bottom',
                'double-top':    'Double Top',
                'bull-flag':     'Bull Flag',
                'bear-flag':     'Bear Flag',
                other:           'Skip / not clean',
              }[key];
              return (
                <div key={key} className="flex justify-between mono text-sm">
                  <span className="text-text-muted">{label}</span>
                  <span className="text-text-primary">{val.correct}/{val.total} ({p}%)</span>
                </div>
              );
            })}
          </div>
          <button type="button" className="btn-primary" onClick={restart}>
            Run another 30
          </button>
        </section>
      ) : (
        <section className="card space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="mono text-text-muted">
              Question {idx + 1} / {questions.length}
            </span>
            <span className="mono text-text-muted">
              Session: {sessionScore.correct} / {sessionScore.total}
            </span>
          </div>

          {chart && (
            <ExpandableChart
              candles={chart.candles}
              annotations={chart.annotations}
              ariaLabel="Practice chart — pick what this bar is"
              borderClass={picked ? (picked.correct ? 'flash-correct' : 'flash-wrong') : ''}
              inlineHeight={260}
            />
          )}

          {!picked ? (
            <div className="grid grid-cols-1 gap-3">
              {ANSWER_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => pick(opt.key)}
                  className="w-full text-left px-4 py-4 rounded-lg border border-default bg-bg-elevated hover:border-accent hover:bg-bg-card transition-colors mono text-sm sm:text-base text-text-primary tap-target"
                  style={{ minHeight: 56 }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          ) : (
            <div
              className={`p-4 rounded border ${
                picked.correct ? 'border-bull bg-bull/10' : 'border-bear bg-bear/10'
              }`}
            >
              <p className="mono font-bold">
                {picked.correct ? (
                  <span className="text-bull-light">✓ Correct</span>
                ) : (
                  <span className="text-bear-light">
                    ✗ Correct answer: {ANSWER_OPTIONS.find((a) => a.key === q.answer)?.label}
                  </span>
                )}
              </p>
              <p className="text-sm mt-2 text-text-primary leading-relaxed">{q.explanation}</p>
              <button type="button" className="btn-primary mt-4" onClick={nextQ}>
                {idx + 1 >= questions.length ? 'See session score' : 'Next question'}
              </button>
            </div>
          )}
        </section>
      )}

      {!done && (
        <button type="button" className="btn-ghost" onClick={restart}>
          Restart quiz (re-shuffle questions)
        </button>
      )}
    </article>
  );
}
