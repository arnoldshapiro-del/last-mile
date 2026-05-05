import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CandlestickChart from '../components/CandlestickChart.jsx';
import { allDrills, drillsByPattern, PATTERN_NAMES } from '../data/drills.js';
import { recordDrill, getDrillStats } from '../lib/store.js';
import { sounds } from '../lib/audio.js';
import { buildWeightedPool, pick, shuffle, recentAccuracy, avgResponseMs, fmtPct, fmtMs } from '../lib/util.js';

export default function Drill() {
  const [stats, setStats] = useState(getDrillStats());
  const [phase, setPhase] = useState('intro'); // intro | study | answer | review | weakness
  const [drill, setDrill] = useState(null);
  const [shownAt, setShownAt] = useState(null);
  const [studyMs, setStudyMs] = useState(5000);
  const [picked, setPicked] = useState(null);
  const [responseMs, setResponseMs] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const intervalRef = useRef(null);

  const pool = useMemo(() => buildWeightedPool(stats.byPattern, drillsByPattern), [stats]);

  const beginDrill = () => {
    const d = pick(pool);
    const opts = shuffle(d.options.map((label, idx) => ({ label, isCorrect: idx === d.correctIndex })));
    setShuffledOptions(opts);
    setDrill(d);
    setPicked(null);
    setStudyMs(5000);
    setShownAt(Date.now());
    setPhase('study');
  };

  // Study countdown
  useEffect(() => {
    if (phase !== 'study') return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setStudyMs(ms => {
        if (ms <= 100) {
          clearInterval(intervalRef.current);
          setPhase('answer');
          return 0;
        }
        return ms - 100;
      });
    }, 100);
    return () => clearInterval(intervalRef.current);
  }, [phase]);

  const choose = (opt) => {
    if (phase !== 'answer') return;
    const ms = Date.now() - shownAt;
    setResponseMs(ms);
    setPicked(opt);
    const correct = opt.isCorrect;
    if (correct) sounds.correct(); else sounds.wrong();
    const nextStats = recordDrill({ patternId: drill.patternId, correct, responseMs: ms });
    setStats(nextStats);
    setPhase('review');
  };

  const nextDrill = () => beginDrill();

  if (phase === 'intro') {
    return <Intro stats={stats} onBegin={beginDrill} onWeakness={() => setPhase('weakness')} />;
  }
  if (phase === 'weakness') {
    return <WeaknessMap stats={stats} onBack={() => setPhase('intro')} />;
  }

  return (
    <div className="max-w-2xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="label">Drill</div>
          <div className="font-display font-medium text-sm text-text/80">Goal: identify in under 5 seconds</div>
        </div>
        <div className="text-right">
          <div className="label">Today</div>
          <div className="num">{stats.drillsToday} / 10</div>
        </div>
      </div>

      {/* Chart */}
      <div className="card mb-5">
        <CandlestickChart
          candles={drill.candles}
          annotations={drill.annotations || []}
          showVolume={drill.showVolume}
          height={300}
        />
        {phase === 'study' && (
          <div className="mt-4 flex items-center gap-3">
            <div className="text-sm text-muted shrink-0">Study</div>
            <div className="flex-1 h-1.5 bg-surface2 rounded-full overflow-hidden">
              <div className="h-full bg-green transition-all" style={{ width: `${(studyMs / 5000) * 100}%` }} />
            </div>
            <div className="num text-sm text-green w-10 text-right">{(studyMs / 1000).toFixed(1)}s</div>
          </div>
        )}
      </div>

      {/* Question */}
      <h2 className="h3 mb-3">{drill.question}</h2>

      {/* Options */}
      <div className="space-y-2 mb-5">
        {shuffledOptions.map((opt, i) => {
          const showResult = phase === 'review';
          const isPicked = picked === opt;
          const correct = opt.isCorrect;
          const cls = !showResult ? (
            phase === 'answer'
              ? 'card-tight text-left hover:border-green/40'
              : 'card-tight text-left opacity-60 pointer-events-none'
          ) : (
            correct ? 'card-tight border-green bg-green/10 text-green' :
            isPicked ? 'card-tight border-red bg-red/5 text-red' :
            'card-tight opacity-50'
          );
          return (
            <button key={i} onClick={() => choose(opt)} className={`w-full ${cls} flex items-center gap-3`}>
              <span className="num text-xs text-muted">{String.fromCharCode(65 + i)}</span>
              <span className="flex-1">{opt.label}</span>
              {showResult && correct && <span>✓</span>}
              {showResult && isPicked && !correct && <span>✗</span>}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {phase === 'review' && (
        <div className={`card mb-5 ${picked.isCorrect ? 'border-green/40' : 'border-red/40'} animate-slideUp`}>
          <div className="flex items-center justify-between mb-3">
            <div className={`font-display font-semibold ${picked.isCorrect ? 'text-green' : 'text-red'}`}>
              {picked.isCorrect ? 'Correct' : 'Wrong'}
            </div>
            <div className="text-xs text-muted num">{fmtMs(responseMs)}</div>
          </div>
          <p className="text-sm leading-relaxed">{drill.explanation}</p>
          <div className="mt-3 text-xs text-muted">
            Pattern: {PATTERN_NAMES[drill.patternId]}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        {phase === 'review' && (
          <button onClick={nextDrill} className="btn btn-primary flex-1">Next drill</button>
        )}
        <button onClick={() => setPhase('intro')} className="btn btn-ghost px-5">Pause</button>
      </div>
    </div>
  );
}

function Intro({ stats, onBegin, onWeakness }) {
  // Overall stats
  let totalAtt = 0, totalCorrect = 0, totalMs = 0;
  for (const p of Object.values(stats.byPattern)) {
    totalAtt += p.attempts;
    totalCorrect += p.correct;
    totalMs += p.totalTimeMs;
  }
  const acc = totalAtt > 0 ? (totalCorrect / totalAtt) * 100 : null;
  const avg = totalAtt > 0 ? totalMs / totalAtt : null;

  return (
    <div className="max-w-xl mx-auto px-5 md:px-8 py-6 md:py-10">
      <div className="label mb-1">Pattern Reflex Training</div>
      <h1 className="h1 mb-2">Drill</h1>
      <p className="text-text/70 mb-6">
        Five-second flashcards. Pattern recognition becomes muscle memory only when forced under time pressure.
      </p>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <Box label="Drills today" value={`${stats.drillsToday} / 10`} hint="Daily quota" />
        <Box label="Lifetime accuracy" value={acc != null ? fmtPct(acc) : '—'} hint={`${totalAtt} drills`} />
        <Box label="Avg response" value={avg != null ? fmtMs(Math.round(avg)) : '—'} hint="Lower = better" />
      </div>

      <div className="card mb-6">
        <h3 className="h3 mb-2">How it works</h3>
        <ul className="text-sm space-y-2 text-text/85">
          <li>• Chart shows for 5 seconds. Study it.</li>
          <li>• At zero, four answer choices appear.</li>
          <li>• Tap your guess. The app reveals the answer + explanation.</li>
          <li>• Patterns you score below 70% on get weighted 3× until you fix them.</li>
        </ul>
      </div>

      <button onClick={onBegin} className="btn btn-primary w-full text-lg py-4 mb-3">
        Begin Drill
      </button>
      <button onClick={onWeakness} className="btn btn-ghost w-full">View weakness map</button>
    </div>
  );
}

function WeaknessMap({ stats, onBack }) {
  const items = Object.entries(stats.byPattern).map(([pid, p]) => {
    const recent = recentAccuracy(p, 20);
    const avg = avgResponseMs(p);
    return { pid, name: PATTERN_NAMES[pid], attempts: p.attempts, recent, avg, weighted: recent != null && recent < 70 };
  }).sort((a, b) => {
    if (a.recent == null && b.recent == null) return 0;
    if (a.recent == null) return 1;
    if (b.recent == null) return -1;
    return a.recent - b.recent;
  });

  return (
    <div className="max-w-2xl mx-auto px-5 md:px-8 py-6 md:py-10">
      <button onClick={onBack} className="btn btn-ghost py-2 px-3 text-sm mb-4">← Back to drill</button>
      <h1 className="h1 mb-2">Weakness Map</h1>
      <p className="text-text/70 mb-6">Patterns under 70% accuracy are weighted 3× in random selection until you bring them up.</p>

      <div className="space-y-2">
        {items.map(item => (
          <div key={item.pid} className={`card-tight ${item.weighted ? 'border-amber/40' : ''}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="font-display font-medium">{item.name}</div>
              {item.weighted && <span className="pill-amber">3× weight</span>}
              {!item.weighted && item.recent != null && item.recent >= 90 && <span className="pill-green">Mastered</span>}
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div>
                <div className="label">Recent acc</div>
                <div className={`num ${item.recent != null && item.recent < 70 ? 'text-amber' : item.recent != null && item.recent >= 90 ? 'text-green' : ''}`}>
                  {item.recent != null ? fmtPct(item.recent) : '—'}
                </div>
              </div>
              <div>
                <div className="label">Avg time</div>
                <div className="num">{item.avg != null ? fmtMs(Math.round(item.avg)) : '—'}</div>
              </div>
              <div>
                <div className="label">Attempts</div>
                <div className="num">{item.attempts}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Box({ label, value, hint }) {
  return (
    <div className="card-tight">
      <div className="label mb-1">{label}</div>
      <div className="num text-2xl mb-0.5">{value}</div>
      <div className="text-[11px] text-muted">{hint}</div>
    </div>
  );
}
