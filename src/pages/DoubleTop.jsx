import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CandlestickChart from '../components/CandlestickChart.jsx';

// ===== Build the canonical Double Top chart =====
function buildFullDoubleTop() {
  // Mirrors Arnie's RTY JUN26 setup at 2850-2851 (first/second top), valley ~2840
  const out = [];
  let p = 2828;
  // Rally up
  for (let i = 0; i < 6; i++) { out.push({ o: p, h: p + 1.5, l: p - 0.3, c: p + 1.3, vol: 60 + i * 5 }); p += 1.3; }
  // Approaching first top
  for (let i = 0; i < 3; i++) { out.push({ o: p, h: p + 1, l: p - 0.4, c: p + 0.6, vol: 70 }); p += 0.6; }
  // First top — Bearish Engulfing (#111)
  out.push({ o: p, h: p + 2.2, l: p - 0.4, c: p + 1.8, vol: 60 }); // big green into resistance
  p += 1.8;
  out.push({ o: p, h: p + 0.5, l: p - 2.5, c: p - 2.2, vol: 85 }); // engulfing red rejection
  p -= 2.2;
  // Pullback to valley
  for (let i = 0; i < 4; i++) { out.push({ o: p, h: p + 0.6, l: p - 1.4, c: p - 1.2, vol: 50 - i * 4 }); p -= 1.2; }
  const valley = p;
  // Rally back up — declining volume
  for (let i = 0; i < 5; i++) { out.push({ o: p, h: p + 1.6, l: p - 0.3, c: p + 1.4, vol: 55 - i * 8 }); p += 1.4; }
  // Second top — 3BR forming (this is "the moment")
  // Bar 1: large green at level
  out.push({ o: p, h: p + 1.4, l: p - 0.3, c: p + 1.2, vol: 50 });
  p += 1.2;
  // Bar 2: indecision
  out.push({ o: p, h: p + 0.4, l: p - 0.4, c: p + 0.05, vol: 40 });
  // Bar 3: red engulfing (the trigger to short — the moment in the chart)
  out.push({ o: p + 0.05, h: p + 0.3, l: p - 2.5, c: p - 2.3, vol: 80 });
  p -= 2.3;
  // Continued red into neckline
  for (let i = 0; i < 3; i++) { out.push({ o: p, h: p + 0.4, l: p - 1.2, c: p - 1.0, vol: 65 }); p -= 1.0; }
  // Neckline break (body close below valley)
  out.push({ o: p, h: p + 0.2, l: valley - 1.5, c: valley - 1.2, vol: 95 });
  return { candles: out, valley, peak: 2851 };
}

const SECTIONS = [
  { id: 'switch', title: '1. The Three-Stage Switch' },
  { id: 'stack', title: '2. The Confirmation Stack (7 must-haves)' },
  { id: 'live', title: '3. The Live Example — your May 5 chart' },
  { id: 'failures', title: '4. The Three Failure Modes' },
  { id: 'scrubber', title: '5. The "Switch" Visualization' },
  { id: 'stops', title: '6. Stop and target' },
  { id: 'check', title: '7. Quick checklist' }
];

const STACK = [
  { n: 1, label: 'Prior trend', detail: 'Extended uptrend or rally into the level. Reversals need something to reverse.' },
  { n: 2, label: 'Known resistance', detail: 'PDH, prior swing high, round number. The level must already exist before today.' },
  { n: 3, label: 'Equal tops', detail: 'Second top at or slightly below first top. Higher high invalidates the pattern.' },
  { n: 4, label: 'Confirming candle', detail: 'Shooting Star / Bearish Engulfing / Evening Star / 3BR / Gravestone Doji at second top.' },
  { n: 5, label: 'Volume divergence', detail: 'Lower volume on second push than the first. Buyers are exhausting.' },
  { n: 6, label: 'Stochastics divergence', detail: 'Lower stoch high or rolling over from above 80.' },
  { n: 7, label: 'Body close below valley', detail: 'Neckline break = entry. Body close, not a wick.' }
];

const FAILURES = [
  { title: 'Entering at the FIRST top', body: 'No second touch yet. That is a guess, not a setup. Patience or pass.' },
  { title: 'Entering before the neckline break', body: 'Pattern is not confirmed until body closes below the valley low.' },
  { title: 'Confusing this with a bull flag pause', body: 'Bull flag has only ONE prior leg up. Double top forms after extended rally.' }
];

const STAGES = [
  { range: [0, 0.25], label: 'WATCH', color: 'blue', sub: 'First top forming. No action.', detail: 'Price tests resistance for the first time and gets rejected. You are an observer right now. Note the level.' },
  { range: [0.25, 0.5], label: 'WAIT', color: 'amber', sub: 'Valley forming. Observe volume.', detail: 'Pullback into the valley. Watch volume — strong volume on the pullback weakens the case for a reversal.' },
  { range: [0.5, 0.75], label: 'WATCH CLOSELY', color: 'amber', sub: 'Second top approaching. Look for confirmation candle + volume divergence.', detail: 'Price rallies back up to test the prior high. This is when you check the confirmation stack: declining volume? Stoch divergence? Confirming candle at the level?' },
  { range: [0.75, 1.0], label: 'TRIGGER', color: 'green', sub: 'Body close below neckline. ENTRY.', detail: 'Body close below the valley low. This is the confirmed entry. Stop above the second top. Target 1 = 1:1, Target 2 = measured move.' }
];

export default function DoubleTop() {
  const [idx, setIdx] = useState(0);
  const data = useMemo(() => buildFullDoubleTop(), []);
  const section = SECTIONS[idx];

  return (
    <div className="max-w-2xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      <div className="flex items-center gap-2 mb-4">
        <Link to="/" className="text-muted hover:text-text">←</Link>
        <div className="label">Setup Lab</div>
      </div>
      <h1 className="h1 mb-1">Double Top → Reversal</h1>
      <p className="text-text/70 mb-6">
        The pattern that has cost you 5.5 years. Build it as muscle memory.
      </p>

      <div className="flex gap-1 mb-6">
        {SECTIONS.map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-all ${
            i === idx ? 'bg-green' : i < idx ? 'bg-green/40' : 'bg-surface2'
          }`} />
        ))}
      </div>

      <div className="card mb-6 min-h-[200px]">
        <h2 className="h2 mb-4">{section.title}</h2>

        {section.id === 'switch' && (
          <div className="space-y-3">
            <StageRow num={1} title="Stage 1 — TOP FORMS" body="Price tests resistance, gets rejected, pulls back." />
            <StageRow num={2} title="Stage 2 — NEUTRAL ZONE" body="Consolidation between resistance and prior support. The hardest stage to wait through." />
            <StageRow num={3} title="Stage 3 — BREAKDOWN" body="Body close below neckline (valley low) confirms downtrend reversal. ENTRY." />
          </div>
        )}

        {section.id === 'stack' && (
          <div>
            <p className="text-text/85 mb-4">All 7 must align before you take this trade.</p>
            <div className="space-y-2">
              {STACK.map(s => (
                <div key={s.n} className="flex items-start gap-3 card-tight">
                  <div className="w-7 h-7 rounded-full bg-green/20 text-green border border-green/30 flex items-center justify-center font-display font-bold shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <div className="font-display font-semibold">{s.label}</div>
                    <div className="text-sm text-text/80">{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section.id === 'live' && (
          <LiveExample data={data} />
        )}

        {section.id === 'failures' && (
          <div className="space-y-3">
            {FAILURES.map((f, i) => (
              <div key={i} className="card-tight border-red/30">
                <div className="font-display font-semibold text-red mb-1">#{i + 1} — {f.title}</div>
                <div className="text-sm text-text/85">{f.body}</div>
              </div>
            ))}
          </div>
        )}

        {section.id === 'scrubber' && <Scrubber />}

        {section.id === 'stops' && (
          <div className="space-y-3 text-text/85 leading-relaxed">
            <div className="card-tight">
              <div className="label text-red mb-1">Stop</div>
              1–2 ticks above the second top (or higher of the confirming candle's wick).
            </div>
            <div className="card-tight">
              <div className="label text-green mb-1">Target 1 — bank half</div>
              1:1 risk-reward. Banking half secures the win and removes the give-back risk on the runner.
            </div>
            <div className="card-tight">
              <div className="label text-green mb-1">Target 2 — runner</div>
              Measured move (M-pattern height projected down from neckline).
            </div>
          </div>
        )}

        {section.id === 'check' && (
          <ul className="space-y-2.5">
            {[
              'Extended uptrend before the level',
              'Two tops at roughly equal price',
              'Confirming candle pattern at second top',
              'Volume divergence (declining on second push)',
              'Stochastics divergence',
              'Body close below valley low',
              'Stop above second top',
              'Targets pre-set'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <input type="checkbox" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

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

function StageRow({ num, title, body }) {
  return (
    <div className="flex items-start gap-3 card-tight">
      <div className="w-9 h-9 rounded-lg bg-blue/15 text-blue border border-blue/30 flex items-center justify-center font-display font-bold shrink-0">{num}</div>
      <div>
        <div className="font-display font-semibold">{title}</div>
        <div className="text-sm text-text/80">{body}</div>
      </div>
    </div>
  );
}

function LiveExample({ data }) {
  return (
    <div>
      <div className="card-tight mb-4 bg-amber/5 border-amber/30">
        <div className="text-xs text-amber font-display mb-1">YOUR ACTUAL CHART — May 5, 2026</div>
        <div className="text-sm text-text/85">RTY JUN26, 2-minute. The textbook moment.</div>
      </div>

      <div className="mb-4 -mx-1">
        <CandlestickChart
          candles={data.candles}
          showVolume={true}
          height={320}
          annotations={[
            { kind: 'hline', price: data.peak, color: '#FFB44A' },
            { kind: 'hline', price: data.valley, color: '#4A9EFF' },
            { kind: 'label', x: 12, y: 28, text: 'RESISTANCE 2850-2851', color: '#FFB44A', size: 9 },
            { kind: 'label', x: 12, y: 168, text: 'NECKLINE / VALLEY ~2840', color: '#4A9EFF', size: 9 }
          ]}
        />
      </div>

      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          You sent this chart to Claude on May 5, 2026. Bearish Engulfing #111 hit at 2850–2851 (first top). Pullback to ~2840 (valley). Rally back to 2849 testing 2850–2851 (second top). 3BR signal printing. Volume bars fading on the rally. Stochastics around 62.
        </p>
        <p className="font-display font-semibold text-green">
          This was the textbook moment.
        </p>
        <p>
          Here's exactly what to wait for next: a shooting star, evening star, or bearish engulfing at 2850–2851 followed by a body close below 2840. <strong>That</strong> is your short. Not before. Not when price is "almost" there. Wait for the body close.
        </p>
      </div>
    </div>
  );
}

function Scrubber() {
  const [pos, setPos] = useState(0);
  const stage = STAGES.find(s => pos >= s.range[0] && pos <= s.range[1]) || STAGES[0];
  const colorMap = {
    blue: { border: 'border-blue', bg: 'bg-blue/10', text: 'text-blue' },
    amber: { border: 'border-amber', bg: 'bg-amber/10', text: 'text-amber' },
    green: { border: 'border-green', bg: 'bg-green/10', text: 'text-green' }
  };
  const c = colorMap[stage.color];

  // Build chart that progressively reveals
  const full = useMemo(() => buildFullDoubleTop().candles, []);
  const visibleCount = Math.max(4, Math.floor(full.length * pos));
  const visible = full.slice(0, Math.max(visibleCount, 2));

  return (
    <div>
      <p className="text-text/85 mb-5 leading-relaxed">
        Drag to walk through the four phases. The chart reveals as the pattern develops. Watch what the discipline asks of you at each stage.
      </p>

      <div className="card-tight mb-4 bg-bg">
        <CandlestickChart candles={visible} showVolume={false} height={200} />
      </div>

      <input type="range" min="0" max="1" step="0.01" value={pos}
        onChange={e => setPos(parseFloat(e.target.value))} className="mb-5" />

      <div className={`card-tight ${c.border} ${c.bg} animate-fadeIn`}>
        <div className="flex items-center justify-between mb-2">
          <div className={`font-display font-bold text-xl ${c.text}`}>{stage.label}</div>
          <div className="text-xs text-muted num">{Math.round(pos * 100)}%</div>
        </div>
        <div className={`font-display font-medium mb-2 ${c.text}`}>{stage.sub}</div>
        <p className="text-sm leading-relaxed text-text/85">{stage.detail}</p>
      </div>

      {/* Stage map */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {STAGES.map((s, i) => {
          const active = stage.label === s.label;
          const cm = colorMap[s.color];
          return (
            <div key={i} className={`p-2 rounded-lg border text-center text-[10px] font-display font-medium tracking-wide transition-all ${
              active ? `${cm.border} ${cm.bg} ${cm.text}` : 'border-border text-muted'
            }`}>
              {s.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
