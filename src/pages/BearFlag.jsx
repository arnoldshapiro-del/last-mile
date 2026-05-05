import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CandlestickChart from '../components/CandlestickChart.jsx';

// Sample candle sets used by the lessons
function buildBearFlag() {
  const out = [];
  let p = 100;
  out.push({ o: p, h: p + 0.5, l: p - 0.5, c: p, vol: 30 });
  for (let i = 0; i < 6; i++) { out.push({ o: p, h: p + 0.5, l: p - 3, c: p - 2.7, vol: 70 + i * 10 }); p -= 2.7; }
  for (let i = 0; i < 6; i++) { out.push({ o: p, h: p + 0.7, l: p - 0.2, c: p + 0.5, vol: 55 - i * 7 }); p += 0.5; }
  // Breakout
  out.push({ o: p, h: p + 0.1, l: p - 3.5, c: p - 3.2, vol: 95 });
  out.push({ o: p - 3.2, h: p - 2.9, l: p - 6, c: p - 5.5, vol: 75 });
  return out;
}

function buildDoubleBottom() {
  const out = [];
  let p = 100;
  for (let i = 0; i < 5; i++) { out.push({ o: p, h: p + 0.4, l: p - 1.6, c: p - 1.4, vol: 55 }); p -= 1.4; }
  for (let i = 0; i < 4; i++) { out.push({ o: p, h: p + 1.2, l: p - 0.2, c: p + 1, vol: 50 }); p += 1; }
  for (let i = 0; i < 4; i++) { out.push({ o: p, h: p + 0.4, l: p - 1.4, c: p - 1.2, vol: 50 }); p -= 1.2; }
  for (let i = 0; i < 4; i++) { out.push({ o: p, h: p + 1.4, l: p - 0.2, c: p + 1.2, vol: 60 }); p += 1.2; }
  return out;
}

const SECTIONS = [
  {
    title: '1. What it is',
    body:
      'Bear flag = continuation pattern in a downtrend. Pole = sharp down move. Flag = brief upward consolidation as shorts take profit. Breakout = next leg down. The pattern is a pause in selling, not a reversal.'
  },
  {
    title: '2. Anatomy',
    body:
      'Three parts: Pole (5–15 candles, sharp aggressive selling, ideally heavy volume). Flag (4–12 candles, slight upward drift on declining volume — bears taking profit). Breakout (body close below flag\'s lower trendline = pattern complete).'
  },
  {
    title: '3. The trap — bear flag vs double bottom',
    body:
      'Bear flag REQUIRES a prior 2–3 leg downtrend before the flag forms. A double bottom forms at known support after extended decline. The flag drifts UP slightly. The double bottom builds a clear W shape with two equal lows.'
  },
  {
    title: '4. Entry method',
    body:
      'Method 2 (recommended): wait for body close below the flag trendline. Body close, NOT a wick break. A long lower wick is bears testing — not bears winning. Wait for the candle to close.'
  },
  {
    title: '5. Wick quality grading',
    body:
      'Under 20% wick = STRONG (full position). 20–30% = DECENT (enter or wait for retest). 30–40% = WEAK (reduce size or wait). Over 40% = SKIP (wait for retest entry).'
  },
  {
    title: '6. Stop placement',
    body:
      'Above the flag high. Let chart structure define risk, not arbitrary tick counts. If the flag fails, you want price to invalidate the pattern, not your gut.'
  },
  {
    title: '7. Targets',
    body:
      'Half off at 1:1 risk-reward. Trail remainder toward measured move (pole height projected from breakout). Banking half early secures the win; the trail captures the home run if it comes.'
  },
  {
    title: '8. Time stop',
    body:
      'No movement within 3 candles (6 minutes on the 2-min chart) → exit at scratch. Failed flags grind sideways. If it isn\'t working in 6 minutes, the trade is dead, even if your stop hasn\'t been hit.'
  },
  {
    title: '9. Volume confirmation',
    body:
      'Volume DECLINES during flag (profit-taking, not new buying). Volume EXPANDS on breakout candle. If volume is rising during the flag, that\'s real buying interest — pattern probability drops.'
  },
  {
    title: '10. The checklist (memorize)',
    checklist: [
      'Prior 2-3 leg downtrend',
      'Flag is 4-12 candles',
      'Volume declining in flag',
      'Body close below trendline (not wick)',
      'Wick under 30% on breakout',
      'Stop above flag high',
      'Half off at 1:1, trail rest',
      'Time stop: out at 6 min if no follow-through'
    ]
  }
];

export default function BearFlag() {
  const [idx, setIdx] = useState(0);
  const section = SECTIONS[idx];
  const flag = buildBearFlag();
  const dbl = buildDoubleBottom();

  return (
    <div className="max-w-2xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      <div className="flex items-center gap-2 mb-4">
        <Link to="/" className="text-muted hover:text-text">←</Link>
        <div className="label">Setup Lab</div>
      </div>
      <h1 className="h1 mb-1">Bear Flag</h1>
      <p className="text-text/70 mb-6">Continuation pattern in a downtrend. Ten sections.</p>

      {/* Progress */}
      <div className="flex gap-1 mb-6">
        {SECTIONS.map((_, i) => (
          <div key={i}
            className={`h-1 flex-1 rounded-full transition-all ${
              i === idx ? 'bg-green' : i < idx ? 'bg-green/40' : 'bg-surface2'
            }`} />
        ))}
      </div>

      {/* Visual: section 2 (anatomy) gets the live chart */}
      {idx === 1 && (
        <div className="card mb-5">
          <CandlestickChart candles={flag} height={260}
            annotations={[
              { kind: 'box', fromIndex: 1, toIndex: 6, high: flag[1].h, low: flag[6].l, color: '#FF3D5A', fill: 'rgba(255,61,90,0.05)', dashed: true },
              { kind: 'box', fromIndex: 7, toIndex: 12, high: Math.max(...flag.slice(7, 13).map(c => c.h)), low: Math.min(...flag.slice(7, 13).map(c => c.l)), color: '#4A9EFF', fill: 'rgba(74,158,255,0.05)', dashed: true },
              { kind: 'label', x: 80, y: 30, text: 'POLE', color: '#FF3D5A' },
              { kind: 'label', x: 230, y: 60, text: 'FLAG', color: '#4A9EFF' },
              { kind: 'label', x: 360, y: 110, text: 'BREAKOUT', color: '#FFB44A' }
            ]}
          />
          <div className="text-xs text-muted mt-2 text-center">Pole — Flag — Breakout</div>
        </div>
      )}

      {idx === 2 && (
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="card-tight">
            <div className="label text-red mb-2">Bear Flag</div>
            <CandlestickChart candles={flag} height={180} showVolume={false} />
          </div>
          <div className="card-tight">
            <div className="label text-green mb-2">Double Bottom (NOT this)</div>
            <CandlestickChart candles={dbl} height={180} showVolume={false} />
          </div>
        </div>
      )}

      {/* Section content */}
      <div className="card mb-6">
        <h2 className="h2 mb-3">{section.title}</h2>
        {section.body && <p className="text-text/85 leading-relaxed">{section.body}</p>}
        {section.checklist && (
          <ul className="space-y-2.5">
            {section.checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <input type="checkbox" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Nav */}
      <div className="flex gap-3">
        <button disabled={idx === 0} onClick={() => setIdx(idx - 1)} className="btn btn-ghost flex-1">← Previous</button>
        {idx < SECTIONS.length - 1 ? (
          <button onClick={() => setIdx(idx + 1)} className="btn btn-primary flex-1">Next →</button>
        ) : (
          <Link to="/drill" className="btn btn-primary flex-1 text-center">Drill this pattern →</Link>
        )}
      </div>
    </div>
  );
}
