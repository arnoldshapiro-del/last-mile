import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const C = {
  green: '#10b981',
  greenDeep: '#22c55e',
  red: '#FF3D5A',
  amber: '#FFB44A',
  blue: '#4A9EFF',
  cyan: '#06b6d4',
  orange: '#f97316',
  white: '#e8e8e8',
  muted: '#888888',
  bg: '#0a0a0a',
  grid: '#262626'
};

export default function DoubleBottom() {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      <Header />
      <Section1Plain />
      <Section2ThreeParts />
      <Section2_5DrawingGuide />
      <Section3Timeframe />
      <Section4Gallery />
      <Section5DecisionTree />
      <Section6EntryTiers />
      <Section7Calculator />
      <Section8Stops />
      <Section9Volume />
      <Section10Mistakes />
      <Section11Lookalikes />
      <Section12TimeOfDay />
      <Section13Psychology />
      <Section14Checklist />
      <Footer />
    </div>
  );
}

// =============================== SHARED UTILITIES ===============================
function SectionShell({ n, title, children }) {
  return (
    <section className="mb-12">
      <div className="flex items-baseline gap-3 mb-5">
        <div className="font-mono text-sm text-green tracking-tight">§ {String(n).padStart(2, '0')}</div>
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Tile({ color, title, body }) {
  const colors = {
    red: 'border-red/40 text-red',
    green: 'border-green/40 text-green',
    amber: 'border-amber/40 text-amber',
    blue: 'border-blue/40 text-blue',
    cyan: 'border-cyan-500/40 text-cyan-400'
  };
  return (
    <div className={`card-tight border ${colors[color] || colors.green}`}>
      <div className="font-display font-bold mb-2">{title}</div>
      <p className="text-sm text-text/80 leading-relaxed">{body}</p>
    </div>
  );
}

function NumCircle({ x, y, n, color = C.green }) {
  return (
    <g>
      <circle cx={x} cy={y} r={11} fill={color} stroke="#000" strokeWidth={2} />
      <text x={x} y={y + 4.5} fill="#000" fontSize={13} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">{n}</text>
    </g>
  );
}

function CaptionBlock({ x, y, num, color, title, body }) {
  const words = body.split(' ');
  const lines = [];
  let line = [];
  let lineLen = 0;
  for (const w of words) {
    if (lineLen + w.length + 1 > 50) { lines.push(line.join(' ')); line = [w]; lineLen = w.length; }
    else { line.push(w); lineLen += w.length + 1; }
  }
  if (line.length) lines.push(line.join(' '));
  return (
    <g>
      <NumCircle x={x + 14} y={y + 14} n={num} color={color} />
      <text x={x + 36} y={y + 18} fill={color} fontSize={14} fontWeight="bold" fontFamily="'Oxanium', sans-serif">{title}</text>
      {lines.map((ln, i) => (
        <text key={i} x={x + 36} y={y + 38 + i * 14} fill="#cbd5e1" fontSize={11} fontFamily="'Inter', sans-serif">{ln}</text>
      ))}
    </g>
  );
}

function Header() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Link to="/" className="text-muted hover:text-text">←</Link>
        <div className="label">Setup Lab</div>
      </div>
      <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-3">Double Bottom</h1>
      <p className="text-text/80 text-lg max-w-3xl leading-relaxed mb-4">
        The 2-minute scalper's complete double bottom treatment. Twelve large worked examples,
        a step-by-step neckline drawing guide, a confirmation decision tree, three entry tiers,
        and a measured-move calculator. The neckline is the focal point of every chart.
      </p>
      <Link
        to="/second-signal/patterns/double-bottom"
        className="inline-flex items-center gap-2 text-sm border border-blue/30 bg-blue/5 text-text/85 hover:bg-blue/10 hover:border-blue/50 transition-colors px-3 py-2 rounded-lg no-underline max-w-3xl"
      >
        <span className="text-blue font-display font-medium">New to H2/L2?</span>
        <span>Learn the method first in Second Signal: Double Bottom</span>
        <span className="text-blue ml-auto">→</span>
      </Link>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted text-sm">2-minute scalper's complete double bottom treatment.</div>
        <Link to="/drill" className="btn btn-primary px-6">Drill this pattern →</Link>
      </div>
    </footer>
  );
}

// =============================== SECTIONS ===============================
function Section1Plain() {
  return (
    <SectionShell n={1} title="What a Double Bottom Actually Is">
      <p className="mb-4">
        Price drops to a low, rallies — that's the <span className="text-green font-semibold">FIRST TROUGH</span>.
        Drops again, hits roughly the same low, gets bought — that's the <span className="text-green font-semibold">SECOND TROUGH</span>.
        Two failed attempts at the same level means sellers are exhausted.
      </p>
      <p className="mb-4">
        Between troughs is a high — the <span className="text-amber font-semibold">PEAK</span>. The horizontal line drawn at the peak is the
        <span className="font-semibold" style={{ color: C.cyan }}> NECKLINE</span>. As long as price stays below the neckline, the pattern is
        forming — not yet complete.
      </p>
      <p>
        When price breaks <em>up</em> through the neckline with a candle <strong>CLOSE</strong> above it, the double bottom is confirmed.
        Buyers have taken control. You go long.
        <span className="block mt-2 text-text/85">
          Target = pattern height (trough to neckline) projected <strong>up</strong> from the neckline.
        </span>
      </p>
    </SectionShell>
  );
}
function Section2ThreeParts() {
  return (
    <SectionShell n={2} title="The Three Parts">
      <p className="mb-5">A textbook double bottom, fully labeled. Take 30 seconds and trace each part with your eye.</p>
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <ThreePartsSVG />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        <Tile color="green" title="1. First Bounce" body="Price tests resistance for the first time and gets bought. This is the first trough. Note the level." />
        <Tile color="green" title="2. Second Bounce" body="Price returns to roughly the same low and bounces again. Sellers have failed twice." />
        <Tile color="amber" title="3. Neckline Break = LONG" body="A 2-minute candle CLOSES above the neckline. Buyers in control. Long entry, target = pattern height up." />
      </div>
    </SectionShell>
  );
}

function ThreePartsSVG() {
  const W = 1200, H = 600;
  const padL = 60, padR = 40, padT = 40, padB = 40;
  const candles = [
    { o: 100, h: 100.6, l: 99.5, c: 99.8 },
    { o: 99.8, h: 100, l: 96, c: 96.2 },
    { o: 96.2, h: 96.4, l: 92.5, c: 92.7 },
    { o: 92.7, h: 92.9, l: 89.5, c: 89.9 },
    { o: 89.9, h: 90.1, l: 87.6, c: 88.0 },
    { o: 88.0, h: 89.0, l: 87.5, c: 88.8 },
    { o: 88.8, h: 90.4, l: 88.6, c: 90.2 },
    { o: 90.2, h: 92.0, l: 90.0, c: 91.7 },
    { o: 91.7, h: 93.2, l: 91.4, c: 92.9 },
    { o: 92.9, h: 94.0, l: 92.6, c: 93.7 },
    { o: 93.7, h: 94.0, l: 92.0, c: 92.2 },
    { o: 92.2, h: 92.4, l: 90.4, c: 90.7 },
    { o: 90.7, h: 91.0, l: 88.8, c: 89.2 },
    { o: 89.2, h: 89.7, l: 87.7, c: 88.3 },
    { o: 88.3, h: 89.0, l: 87.6, c: 88.7 },
    { o: 88.7, h: 90.6, l: 88.5, c: 90.4 },
    { o: 90.4, h: 92.4, l: 90.2, c: 92.1 },
    { o: 92.1, h: 94.2, l: 91.9, c: 93.9 },
    { o: 93.9, h: 95.4, l: 93.7, c: 95.2 },
    { o: 95.2, h: 96.6, l: 95.0, c: 96.3 }
  ];
  const minP = Math.min(...candles.map(c => c.l)) - 1.5;
  const maxP = Math.max(...candles.map(c => c.h)) + 2.5;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const slot = innerW / candles.length;
  const bodyW = Math.max(8, slot * 0.65);
  const xFor = i => padL + i * slot + slot / 2;
  const yFor = price => padT + ((maxP - price) / (maxP - minP)) * innerH;
  const neckPrice = 94.0; // peak body close
  const trough1Idx = 4, trough2Idx = 13, peakIdx = 9, breakIdx = 17;
  const xN1 = xFor(0) - slot * 0.4;
  const xN2 = xFor(candles.length - 1) + slot * 0.4;
  // W overlay
  const wPath = `M ${xFor(0)} ${yFor(99.5)} L ${xFor(trough1Idx)} ${yFor(87.6)} L ${xFor(peakIdx)} ${yFor(94.0)} L ${xFor(trough2Idx)} ${yFor(87.7)} L ${xFor(candles.length - 1)} ${yFor(96.6)}`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet"
      className="block rounded-xl border border-border w-full h-auto"
      style={{ background: C.bg, minWidth: '880px' }}>
      {/* Title */}
      <text x={W / 2} y={22} fill={C.green} fontSize={14} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">
        DOUBLE BOTTOM — THE THREE PARTS
      </text>
      {/* Grid */}
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={padL} x2={W - padR} y1={padT + innerH * t} y2={padT + innerH * t}
          stroke={C.grid} strokeWidth={1} />
      ))}
      {/* Soft "W" overlay */}
      <path d={wPath} fill="none" stroke="#ffffff" strokeWidth={3} opacity={0.06} />
      <text x={xFor(peakIdx)} y={yFor(89) + 5} fill="#ffffff" opacity={0.18}
        fontSize={140} fontWeight="bold" textAnchor="middle" fontFamily="'Oxanium', sans-serif">W</text>

      {/* Candles */}
      {candles.map((c, i) => {
        const isUp = c.c >= c.o;
        const color = isUp ? C.green : C.red;
        return (
          <g key={i}>
            <line x1={xFor(i)} x2={xFor(i)} y1={yFor(c.h)} y2={yFor(c.l)} stroke={color} strokeWidth={1.5} />
            <rect x={xFor(i) - bodyW / 2} y={Math.min(yFor(c.o), yFor(c.c))}
              width={bodyW} height={Math.max(2, Math.abs(yFor(c.c) - yFor(c.o)))} fill={color} />
          </g>
        );
      })}

      {/* NECKLINE — full chart width */}
      <line x1={xN1} x2={xN2} y1={yFor(neckPrice)} y2={yFor(neckPrice)}
        stroke={C.cyan} strokeWidth={4} strokeDasharray="10 5" />
      <circle cx={xN1} cy={yFor(neckPrice)} r={9} fill={C.green} stroke="#000" strokeWidth={2} />
      <text x={xN1} y={yFor(neckPrice) + 4} fill="#000" fontSize={12} fontWeight="bold"
        textAnchor="middle" fontFamily="'Oxanium', sans-serif">A</text>
      <text x={xN1 - 12} y={yFor(neckPrice) - 12} fill={C.green} fontSize={11}
        textAnchor="end" fontFamily="'Space Mono', monospace">Start drawing here</text>
      <circle cx={xN2} cy={yFor(neckPrice)} r={9} fill={C.green} stroke="#000" strokeWidth={2} />
      <text x={xN2} y={yFor(neckPrice) + 4} fill="#000" fontSize={12} fontWeight="bold"
        textAnchor="middle" fontFamily="'Oxanium', sans-serif">B</text>
      <text x={xN2 + 12} y={yFor(neckPrice) - 12} fill={C.green} fontSize={11}
        textAnchor="start" fontFamily="'Space Mono', monospace">Extend to here</text>
      {/* Neckline label */}
      <rect x={W / 2 - 220} y={yFor(neckPrice) - 30} width={440} height={20} rx={4} fill={C.bg} stroke={C.cyan} strokeWidth={1.4} />
      <text x={W / 2} y={yFor(neckPrice) - 16} fill={C.cyan} fontSize={11.5} fontWeight="bold"
        textAnchor="middle" fontFamily="'Space Mono', monospace">
        NECKLINE — long trigger when 2-min candle closes above this line
      </text>

      {/* Trough 1 arrow */}
      <line x1={xFor(trough1Idx)} y1={yFor(85)} x2={xFor(trough1Idx)} y2={yFor(87.6) + 14}
        stroke={C.green} strokeWidth={2.5} />
      <polygon points={`${xFor(trough1Idx)},${yFor(87.6) + 8} ${xFor(trough1Idx) - 7},${yFor(87.6) + 20} ${xFor(trough1Idx) + 7},${yFor(87.6) + 20}`} fill={C.green} />
      <rect x={xFor(trough1Idx) - 80} y={yFor(85) - 22} width={160} height={20} rx={4} fill={C.bg} stroke={C.green} strokeWidth={1.4} />
      <text x={xFor(trough1Idx)} y={yFor(85) - 8} fill={C.green} fontSize={11} fontWeight="bold"
        textAnchor="middle" fontFamily="'Space Mono', monospace">1. FIRST BOUNCE</text>

      {/* Trough 2 arrow */}
      <line x1={xFor(trough2Idx)} y1={yFor(85)} x2={xFor(trough2Idx)} y2={yFor(87.7) + 14}
        stroke={C.green} strokeWidth={2.5} />
      <polygon points={`${xFor(trough2Idx)},${yFor(87.7) + 8} ${xFor(trough2Idx) - 7},${yFor(87.7) + 20} ${xFor(trough2Idx) + 7},${yFor(87.7) + 20}`} fill={C.green} />
      <rect x={xFor(trough2Idx) - 110} y={yFor(85) - 22} width={220} height={20} rx={4} fill={C.bg} stroke={C.green} strokeWidth={1.4} />
      <text x={xFor(trough2Idx)} y={yFor(85) - 8} fill={C.green} fontSize={11} fontWeight="bold"
        textAnchor="middle" fontFamily="'Space Mono', monospace">2. SECOND BOUNCE (same level)</text>

      {/* Breakout arrow */}
      <line x1={xFor(breakIdx)} y1={yFor(98)} x2={xFor(breakIdx)} y2={yFor(94.2) - 14}
        stroke={C.orange} strokeWidth={2.5} />
      <polygon points={`${xFor(breakIdx)},${yFor(94.2) - 8} ${xFor(breakIdx) - 7},${yFor(94.2) - 20} ${xFor(breakIdx) + 7},${yFor(94.2) - 20}`} fill={C.orange} />
      <rect x={xFor(breakIdx) - 110} y={yFor(98) - 4} width={220} height={20} rx={4} fill={C.bg} stroke={C.orange} strokeWidth={1.4} />
      <text x={xFor(breakIdx)} y={yFor(98) + 11} fill={C.orange} fontSize={11} fontWeight="bold"
        textAnchor="middle" fontFamily="'Space Mono', monospace">3. NECKLINE BREAK = LONG</text>
    </svg>
  );
}
function Section2_5DrawingGuide() {
  return (
    <SectionShell n="2.5" title="How to Draw the Neckline (Step by Step)">
      <p className="mb-5">
        Five numbered steps. Master these and you can mark up any 2-minute chart in seconds — and
        avoid the two most expensive mistakes (wick-poke entry and entering at the second trough).
      </p>
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <DrawingGuideSVG />
      </div>
      <div className="mt-5 card border-green/40 bg-green/[0.04]">
        <div className="font-display font-semibold text-green mb-3">To draw the double bottom neckline</div>
        <ol className="space-y-1.5 text-text/90 leading-relaxed">
          <li><span className="text-green num">1.</span> Find the highest body <strong>CLOSE</strong> in the peak between the troughs.</li>
          <li><span className="text-green num">2.</span> Draw a horizontal line from there to the right.</li>
          <li><span className="text-green num">3.</span> Extend past the current candle.</li>
          <li><span className="text-green num">4.</span> Long only when a 2-minute candle <strong>BODY CLOSES</strong> above the line.</li>
          <li><span className="text-green num">5.</span> Confirm by waiting for the candle <em>after</em> the break to follow through.</li>
        </ol>
      </div>
    </SectionShell>
  );
}

function DrawingGuideSVG() {
  const W = 1200, H = 600;
  const chartL = 30, chartT = 30, chartR = 720, chartB = 540;
  const capX = 750;
  const candles = [
    { o: 100, h: 100.4, l: 99.5, c: 99.7 },
    { o: 99.7, h: 99.8, l: 96, c: 96.1 },
    { o: 96.1, h: 96.3, l: 92.5, c: 92.6 },
    { o: 92.6, h: 92.8, l: 89, c: 89.2 },
    { o: 89.2, h: 89.4, l: 86, c: 86.4 },
    { o: 86.4, h: 87.2, l: 86.0, c: 87.0 },
    { o: 87.0, h: 88.2, l: 86.8, c: 88.0 },
    { o: 88.0, h: 89.6, l: 87.8, c: 89.4 },
    { o: 89.4, h: 90.6, l: 89.2, c: 90.4 },
    { o: 90.4, h: 91.5, l: 90.2, c: 91.2 },
    { o: 91.2, h: 91.5, l: 89.6, c: 89.8 },
    { o: 89.8, h: 89.9, l: 87.4, c: 87.6 },
    { o: 87.6, h: 88.0, l: 86.2, c: 86.5 },
    { o: 86.5, h: 87.8, l: 86.2, c: 87.6 },
    { o: 87.6, h: 91.7, l: 87.4, c: 91.4 }, // wick-poke (step 4 illustrator)
    { o: 91.4, h: 92.4, l: 91.0, c: 92.0 }, // body close above (step 3)
    { o: 92.0, h: 93.4, l: 91.7, c: 93.2 }  // follow-through confirm (step 5)
  ];
  const minP = Math.min(...candles.map(c => c.l)) - 1.5;
  const maxP = Math.max(...candles.map(c => c.h)) + 1.5;
  const innerW = chartR - chartL;
  const innerH = chartB - chartT;
  const slot = innerW / candles.length;
  const bodyW = Math.max(8, slot * 0.65);
  const xFor = i => chartL + i * slot + slot / 2;
  const yFor = price => chartT + ((maxP - price) / (maxP - minP)) * innerH;
  const peakClose = 91.2;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block rounded-xl border border-border w-full h-auto"
      style={{ background: C.bg, minWidth: '880px' }}>
      <text x={W / 2} y={20} fill={C.green} fontSize={14} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">
        DOUBLE BOTTOM NECKLINE — 5 STEPS
      </text>
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={chartL} x2={chartR} y1={chartT + innerH * t} y2={chartT + innerH * t}
          stroke={C.grid} strokeWidth={1} />
      ))}

      {/* Candles */}
      {candles.map((c, i) => {
        const isUp = c.c >= c.o;
        const color = isUp ? C.green : C.red;
        return (
          <g key={i}>
            <line x1={xFor(i)} x2={xFor(i)} y1={yFor(c.h)} y2={yFor(c.l)} stroke={color} strokeWidth={1.5} />
            <rect x={xFor(i) - bodyW / 2} y={Math.min(yFor(c.o), yFor(c.c))}
              width={bodyW} height={Math.max(2, Math.abs(yFor(c.c) - yFor(c.o)))} fill={color} />
          </g>
        );
      })}

      {/* Horizontal NECKLINE — Step 2 visualization */}
      <line x1={xFor(9)} y1={yFor(peakClose)} x2={chartR + 6} y2={yFor(peakClose)}
        stroke={C.cyan} strokeWidth={3} strokeDasharray="8 4" />
      <polygon points={`${chartR + 6},${yFor(peakClose)} ${chartR - 6},${yFor(peakClose) - 7} ${chartR - 6},${yFor(peakClose) + 7}`} fill={C.cyan} />

      {/* Step markers */}
      {/* 1. Peak body close */}
      <NumCircle x={xFor(9)} y={yFor(peakClose)} n="1" color={C.green} />
      {/* 2. Mid-line annotation */}
      <NumCircle x={(xFor(11) + xFor(13)) / 2} y={yFor(peakClose) - 14} n="2" color={C.cyan} />
      {/* 3. Body close above */}
      <NumCircle x={xFor(15)} y={yFor(91.4) - 18} n="3" color={C.orange} />
      {/* 4. Wick-only candle (red X) */}
      <g transform={`translate(${xFor(14)},${yFor(91.7) - 30})`}>
        <g stroke={C.red} strokeWidth={3.5} opacity={0.9} strokeLinecap="round">
          <line x1={-10} y1={-10} x2={10} y2={10} />
          <line x1={10} y1={-10} x2={-10} y2={10} />
        </g>
        <NumCircle x={18} y={-15} n="4" color={C.red} />
      </g>
      {/* 5. Follow-through */}
      <g>
        <polyline points={`${xFor(16) - 10},${yFor(93.4) - 10} ${xFor(16) - 4},${yFor(93.4) - 4} ${xFor(16) + 10},${yFor(93.4) - 18}`}
          fill="none" stroke={C.green} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
        <NumCircle x={xFor(16) + 22} y={yFor(93.4) - 22} n="5" color={C.green} />
      </g>

      {/* Trough markers (subtle, not numbered) */}
      <text x={xFor(4)} y={yFor(86) + 24} fill={C.green} fontSize={9.5}
        textAnchor="middle" fontFamily="'Space Mono', monospace" opacity={0.85}>trough 1</text>
      <text x={xFor(12)} y={yFor(86.2) + 24} fill={C.green} fontSize={9.5}
        textAnchor="middle" fontFamily="'Space Mono', monospace" opacity={0.85}>trough 2</text>

      {/* Divider */}
      <line x1={chartR + 8} y1={chartT} x2={chartR + 8} y2={chartB} stroke={C.grid} strokeWidth={1} />

      <CaptionBlock x={capX} y={40} num={1} color={C.green}
        title="Find the highest CLOSE in the peak"
        body="Use the highest body close of any candle in the peak between the two troughs. Body close, NOT the highest wick." />
      <CaptionBlock x={capX} y={140} num={2} color={C.cyan}
        title="Draw a horizontal line from there"
        body="The neckline is always horizontal for a double bottom. Extend it to the right past the most recent candle." />
      <CaptionBlock x={capX} y={240} num={3} color={C.orange}
        title="Wait for a body close ABOVE"
        body="A 2-minute candle must CLOSE above the line. Body close, not just a wick poke." />
      <CaptionBlock x={capX} y={340} num={4} color={C.red}
        title="Wicks above are NOT signals"
        body="Wicks above the line aren't a break. Sellers often slap the level back down. Wait for a body close above." />
      <CaptionBlock x={capX} y={440} num={5} color={C.green}
        title="Confirm with the next candle"
        body="Once a body has closed above, watch the NEXT candle. If it follows through with another green close, long on its close. Stop below the lower trough." />
    </svg>
  );
}
function Section3Timeframe() {
  const rows = [
    { tf: '1-minute',  tt: '8-20',   total: '15-40' },
    { tf: '2-minute',  tt: '8-20',   total: '15-40', highlight: true },
    { tf: '5-minute',  tt: '10-25',  total: '20-50' },
    { tf: '15-minute', tt: '10-25',  total: '20-50' },
    { tf: 'Daily',     tt: 'weeks-months', total: 'months' }
  ];
  return (
    <SectionShell n={3} title="How Long Should It Take? (Timeframe Table)">
      <p className="mb-5">Two-minute scalper guidance. The "weeks of formation" advice you've seen is daily-chart talk.</p>
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-sm border-collapse">
          <thead>
            <tr className="text-left text-muted uppercase tracking-wider text-xs">
              <th className="py-2 px-3 border-b border-border">Timeframe</th>
              <th className="py-2 px-3 border-b border-border">Trough-to-trough</th>
              <th className="py-2 px-3 border-b border-border">Total pattern</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={r.highlight ? 'bg-green/10 border-l-4 border-green' : ''}>
                <td className={`py-2 px-3 border-b border-border ${r.highlight ? 'text-green font-bold' : ''}`}>{r.tf}</td>
                <td className="py-2 px-3 border-b border-border">{r.tt} candles</td>
                <td className="py-2 px-3 border-b border-border">{r.total} candles</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 card-tight border-green/40 bg-green/5">
        <p className="text-green font-display font-bold text-base md:text-lg leading-relaxed">
          On 2-min: 15-40 minutes from first trough to neckline break. Within 5 min = noise.
          Beyond 60 min = stale, skip.
        </p>
      </div>
    </SectionShell>
  );
}
function Section4Gallery() {
  return (
    <SectionShell n={4} title="Twelve Large Examples — Each with the Neckline Drawn">
      <p className="mb-6">
        Each example is its own exhibit: a chart, then a short caption explaining what to learn from it.
        Read both. Every chart shows the neckline as the focal point.
      </p>
      <div className="space-y-8">
        {EXAMPLES.map(ex => (
          <ExhibitCard key={ex.n} ex={ex} />
        ))}
      </div>
    </SectionShell>
  );
}

function ExhibitCard({ ex }) {
  return (
    <div className="card border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-green/20 text-green border border-green/40 flex items-center justify-center font-display font-bold text-lg shrink-0">
          {ex.n}
        </div>
        <h3 className="font-display font-semibold text-xl md:text-2xl">{ex.title}</h3>
      </div>
      <DoubleBottomExhibit ex={ex} />
      <p className="mt-4 leading-relaxed text-text/90 max-w-4xl">{ex.caption}</p>
    </div>
  );
}
function Section5DecisionTree() {
  return (
    <SectionShell n={5} title="The Confirmation Decision Tree">
      <p className="mb-5">Three sequential questions. Click your answer; the next question reveals — or you get a verdict.</p>
      <ConfirmDecisionTree />
    </SectionShell>
  );
}

function ConfirmDecisionTree() {
  const [step, setStep] = useState(1);
  const [verdict, setVerdict] = useState(null);
  const [path, setPath] = useState([]);

  const reset = () => { setStep(1); setVerdict(null); setPath([]); };

  const choose = (label, nextStep, finalVerdict) => {
    setPath([...path, label]);
    if (finalVerdict) { setVerdict(finalVerdict); setStep(0); }
    else setStep(nextStep);
  };

  return (
    <div className="space-y-3">
      {path.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
          {path.map((p, i) => (
            <React.Fragment key={i}>
              <span className="pill-blue">{p}</span>
              {i < path.length - 1 && <span className="text-muted">→</span>}
            </React.Fragment>
          ))}
          <button onClick={reset} className="ml-auto text-muted hover:text-text underline text-xs">Reset</button>
        </div>
      )}

      {step === 1 && (
        <DTQuestion
          n={1}
          q="Have BOTH troughs formed AND has a candle CLOSED above the neckline by ≥1 tick?"
          svg={<MiniDTSVG variant="break" />}
          options={[
            { label: 'No — pattern not complete', verdict: { kind: 'red', text: 'Pattern not complete. Wait. Don\'t anticipate.' } },
            { label: 'Yes — body closed above neckline', next: 2 }
          ]}
          choose={choose}
        />
      )}

      {step === 2 && (
        <DTQuestion
          n={2}
          q="What does the candle right AFTER the neckline break look like?"
          svg={<MiniDTSVG variant="after" />}
          options={[
            { label: 'Green body, higher close, rising volume', verdict: { kind: 'green', text: 'Confirmed. Long on this candle\'s close. Stop below the lower of the two troughs. Target = pattern height projected above the neckline.' }, next: 3, gotoNext: true },
            { label: 'Small body / doji / low volume', verdict: { kind: 'amber', text: 'Stalled. Wait one more candle. If still stalled or turning red, abort.' } },
            { label: 'Red body closes back below the neckline', verdict: { kind: 'red', text: 'Failed break. Stand down. Watch for shorts on the rejection — but don\'t flip impulsively.' } }
          ]}
          choose={(label, _next, fv, opt) => {
            setPath([...path, label]);
            if (opt?.gotoNext) setStep(3);
            else { setVerdict(fv); setStep(0); }
          }}
        />
      )}

      {step === 3 && (
        <DTQuestion
          n={3}
          q="Was breakout volume higher than the average peak volume?"
          svg={<MiniDTSVG variant="vol" />}
          options={[
            { label: 'Yes — clearly higher', verdict: { kind: 'green', text: 'High-confidence trade. Full size. This is exactly what you want — body close + follow-through + volume.' } },
            { label: 'No / about the same', verdict: { kind: 'amber', text: 'Half size or skip. Low-volume breaks fail more than half the time even with confirmation.' } }
          ]}
          choose={choose}
        />
      )}

      {verdict && (
        <div className={`card-tight ${
          verdict.kind === 'green' ? 'border-green/50 bg-green/10' :
          verdict.kind === 'amber' ? 'border-amber/50 bg-amber/10' :
          'border-red/50 bg-red/10'
        } animate-slideUp`}>
          <div className={`label mb-2 ${
            verdict.kind === 'green' ? 'text-green' : verdict.kind === 'amber' ? 'text-amber' : 'text-red'
          }`}>Verdict</div>
          <p className="leading-relaxed text-base">{verdict.text}</p>
          <button onClick={reset} className="btn btn-ghost text-sm py-2 mt-4">Run again</button>
        </div>
      )}
    </div>
  );
}

function DTQuestion({ n, q, svg, options, choose }) {
  return (
    <div className="card animate-fadeIn">
      <div className="label mb-2">Question {n}</div>
      <h4 className="font-display font-semibold text-lg mb-4">{q}</h4>
      {svg && <div className="mb-4">{svg}</div>}
      <div className="space-y-2">
        {options.map((opt, i) => (
          <button key={i}
            onClick={() => choose(opt.label, opt.next, opt.verdict, opt)}
            className="w-full card-tight text-left hover:border-green/40 transition-colors flex items-center gap-3">
            <span className="num text-xs text-muted">{String.fromCharCode(65 + i)}</span>
            <span className="flex-1">{opt.label}</span>
            <span className="text-muted">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function MiniDTSVG({ variant }) {
  const w = 600, h = 160;
  if (variant === 'break') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: C.bg }}>
        <line x1={20} y1={70} x2={580} y2={70} stroke={C.cyan} strokeWidth={2} strokeDasharray="6 4" />
        <text x={24} y={64} fill={C.cyan} fontSize={10} fontFamily="'Space Mono', monospace">neckline</text>
        <g transform="translate(180,0)">
          <line x1={0} x2={0} y1={50} y2={92} stroke={C.green} strokeWidth={1.5} />
          <rect x={-8} y={56} width={16} height={20} fill={C.green} />
          <text x={0} y={130} fill={C.red} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">wick only</text>
          <text x={0} y={144} fill={C.red} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">NOT valid</text>
        </g>
        <g transform="translate(420,0)">
          <line x1={0} x2={0} y1={40} y2={110} stroke={C.green} strokeWidth={1.5} />
          <rect x={-8} y={50} width={16} height={45} fill={C.green} />
          <text x={0} y={130} fill={C.green} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">body closed above</text>
          <text x={0} y={144} fill={C.green} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">VALID ✓</text>
        </g>
      </svg>
    );
  }
  if (variant === 'after') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: C.bg }}>
        <line x1={20} y1={70} x2={580} y2={70} stroke={C.cyan} strokeWidth={1.4} strokeDasharray="6 4" opacity={0.6} />
        <g transform="translate(70,0)">
          <line x1={0} x2={0} y1={50} y2={110} stroke={C.green} strokeWidth={1.5} />
          <rect x={-8} y={55} width={16} height={45} fill={C.green} />
          <text x={0} y={130} fill="#888" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">break</text>
        </g>
        <g transform="translate(180,0)">
          <line x1={0} x2={0} y1={30} y2={85} stroke={C.green} strokeWidth={1.5} />
          <rect x={-8} y={35} width={16} height={45} fill={C.green} />
          <text x={0} y={150} fill={C.green} fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">A — confirm</text>
        </g>
        <g transform="translate(330,0)">
          <line x1={0} x2={0} y1={50} y2={100} stroke="#888" strokeWidth={1.5} />
          <rect x={-8} y={73} width={16} height={4} fill="#888" />
          <text x={0} y={150} fill={C.amber} fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">B — stalled</text>
        </g>
        <g transform="translate(480,0)">
          <line x1={0} x2={0} y1={50} y2={110} stroke={C.red} strokeWidth={1.5} />
          <rect x={-8} y={60} width={16} height={45} fill={C.red} />
          <text x={0} y={130} fill={C.red} fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">C — failed</text>
        </g>
      </svg>
    );
  }
  if (variant === 'vol') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: C.bg }}>
        <text x={20} y={20} fill="#666" fontSize={10} fontFamily="'Space Mono', monospace">VOLUME PROFILE</text>
        {[60, 50, 42, 36].map((h2, i) => (
          <rect key={i} x={70 + i * 30} y={140 - h2} width={20} height={h2} fill={C.green} opacity={0.5} />
        ))}
        <rect x={220} y={40} width={20} height={100} fill={C.green} opacity={0.85} />
        <text x={230} y={30} fill={C.green} fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">YES — surge</text>
        <line x1={290} x2={290} y1={20} y2={150} stroke={C.grid} />
        {[50, 48, 50, 52].map((h2, i) => (
          <rect key={i} x={320 + i * 30} y={140 - h2} width={20} height={h2} fill={C.green} opacity={0.5} />
        ))}
        <rect x={460} y={95} width={20} height={45} fill={C.green} opacity={0.7} />
        <text x={470} y={85} fill={C.amber} fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">NO — same</text>
      </svg>
    );
  }
  return null;
}
function Section6EntryTiers() {
  const tiers = [
    {
      name: 'Aggressive', tag: 'TIER 1', color: 'amber',
      entry: 'Close of the candle that breaks above the neckline',
      stop: 'Below the lower of the two troughs',
      rr: '2:1 to 3:1',
      win: 'Lower (more false signals)',
      use: 'Strong reversal day, several setups already worked',
      size: '25-50%',
      svg: <DBTierSVG variant="aggressive" />
    },
    {
      name: 'Confirmation', tag: 'TIER 2', color: 'green',
      entry: 'Close of the candle AFTER the break, only if it follows through',
      stop: 'Below the lower of the two troughs',
      rr: '2:1 to 2.5:1',
      win: 'Higher',
      use: 'Balance of speed and confirmation — the daily default',
      size: 'Full size',
      svg: <DBTierSVG variant="confirm" />
    },
    {
      name: 'Retest', tag: 'TIER 3', color: 'blue',
      entry: 'Bounce candle after price pulls back to the neckline from above',
      stop: 'Below the bounce candle\'s low',
      rr: '1.5:1 to 2:1',
      win: 'Highest',
      use: 'You missed Tier 1 and Tier 2, or you only take A+ setups',
      size: 'Full size, tight stop',
      svg: <DBTierSVG variant="retest" />
    }
  ];
  const colors = {
    amber: 'border-amber/40 hover:border-amber',
    green: 'border-green/40 hover:border-green',
    blue: 'border-blue/40 hover:border-blue'
  };
  const accents = { amber: 'text-amber', green: 'text-green', blue: 'text-blue' };
  return (
    <SectionShell n={6} title="The Three Entry Tiers">
      <p className="mb-5">Three valid entry timings, each with a different risk/reward and win-rate trade-off.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map((t, i) => (
          <div key={i} className={`card transition-colors ${colors[t.color]}`}>
            <div className={`label mb-1 ${accents[t.color]}`}>{t.tag}</div>
            <h3 className={`font-display font-bold text-2xl mb-3 ${accents[t.color]}`}>{t.name}</h3>
            <div className="mb-4">{t.svg}</div>
            <dl className="space-y-2 text-sm">
              <Row label="Entry" v={t.entry} />
              <Row label="Stop" v={t.stop} />
              <Row label="Typical R:R" v={t.rr} />
              <Row label="Win rate" v={t.win} />
              <Row label="Use when" v={t.use} />
              <Row label="Size" v={t.size} />
            </dl>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Row({ label, v }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-wider text-muted font-display">{label}</dt>
      <dd className="text-text/90">{v}</dd>
    </div>
  );
}

function DBTierSVG({ variant }) {
  const w = 280, h = 130;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: C.bg }}>
      {/* neckline horizontal */}
      <line x1={20} y1={45} x2={260} y2={45} stroke={C.cyan} strokeWidth={1.5} strokeDasharray="4 3" opacity={0.7} />
      <text x={30} y={40} fill={C.cyan} fontSize={9} fontFamily="'Space Mono', monospace">neckline</text>
      {/* W shape: t1, peak rise, t2, then break */}
      {/* trough 1 */}
      <line x1={50} y1={80} x2={50} y2={110} stroke={C.red} strokeWidth={1.4} />
      <rect x={46} y={82} width={8} height={20} fill={C.red} />
      {/* peak */}
      <line x1={90} y1={42} x2={90} y2={70} stroke={C.green} strokeWidth={1.4} />
      <rect x={86} y={44} width={8} height={20} fill={C.green} />
      {/* trough 2 */}
      <line x1={130} y1={80} x2={130} y2={108} stroke={C.red} strokeWidth={1.4} />
      <rect x={126} y={84} width={8} height={20} fill={C.red} />
      {/* breakout candle */}
      <line x1={170} y1={30} x2={170} y2={60} stroke={C.green} strokeWidth={1.5} />
      <rect x={166} y={34} width={8} height={26} fill={C.green} />
      {variant === 'aggressive' && (
        <g>
          <circle cx={170} cy={36} r={6} fill={C.amber} stroke="#000" strokeWidth={1.5} />
          <text x={180} y={40} fill={C.amber} fontSize={10} fontFamily="'Space Mono', monospace">enter</text>
        </g>
      )}
      {variant === 'confirm' && (
        <g>
          <line x1={195} y1={20} x2={195} y2={50} stroke={C.green} strokeWidth={1.5} />
          <rect x={191} y={22} width={8} height={26} fill={C.green} />
          <circle cx={195} cy={24} r={6} fill={C.green} stroke="#000" strokeWidth={1.5} />
          <text x={205} y={28} fill={C.green} fontSize={10} fontFamily="'Space Mono', monospace">enter</text>
        </g>
      )}
      {variant === 'retest' && (
        <g>
          <line x1={195} y1={20} x2={195} y2={50} stroke={C.green} strokeWidth={1.5} />
          <rect x={191} y={22} width={8} height={26} fill={C.green} />
          {/* pullback candle (red) */}
          <line x1={215} y1={30} x2={215} y2={60} stroke={C.red} strokeWidth={1.5} />
          <rect x={211} y={36} width={8} height={20} fill={C.red} />
          {/* bounce off neckline */}
          <line x1={235} y1={20} x2={235} y2={56} stroke={C.green} strokeWidth={1.5} />
          <rect x={231} y={24} width={8} height={26} fill={C.green} />
          <circle cx={235} cy={28} r={6} fill={C.blue} stroke="#000" strokeWidth={1.5} />
          <text x={244} y={32} fill={C.blue} fontSize={10} fontFamily="'Space Mono', monospace">enter</text>
        </g>
      )}
    </svg>
  );
}
function Section7Calculator() {
  const [trough, setTrough] = useState(22000);
  const [neckline, setNeckline] = useState(22020);
  const [breakout, setBreakout] = useState(22022);
  const patternHeight = useMemo(() => neckline - trough, [trough, neckline]);
  const target = useMemo(() => breakout + patternHeight, [breakout, patternHeight]);
  const valid = patternHeight > 0;

  return (
    <SectionShell n={7} title="Measured-Move Target Calculator">
      <p className="mb-5">
        Pattern height (neckline − trough) projected <strong>up</strong> from the breakout = your measured-move target.
        Default values pre-loaded for quick verification: trough 22000, neckline 22020, breakout 22022 → target 22042.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <NumInput label="Trough price (lowest)" v={trough} onChange={setTrough} />
        <NumInput label="Neckline price (peak body close)" v={neckline} onChange={setNeckline} />
        <NumInput label="Breakout price (body close)" v={breakout} onChange={setBreakout} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <Outcome label="Pattern height" v={valid ? patternHeight.toFixed(2) : '—'} accent="green" />
        <Outcome label="Up projection" v={valid ? `+${patternHeight.toFixed(2)}` : '—'} accent="amber" />
        <Outcome label="Target price" v={valid ? target.toFixed(2) : '—'} accent="green" />
      </div>
      <CalculatorChart trough={trough} neckline={neckline} breakout={breakout} target={target} valid={valid} />
    </SectionShell>
  );
}

function NumInput({ label, v, onChange }) {
  return (
    <div>
      <div className="label mb-2">{label}</div>
      <input type="number" step="0.1" value={v}
        onChange={e => onChange(parseFloat(e.target.value || 0))}
        className="input" />
    </div>
  );
}

function Outcome({ label, v, accent }) {
  const colors = { green: 'text-green', red: 'text-red', amber: 'text-amber' };
  return (
    <div className="card-tight">
      <div className="label mb-1">{label}</div>
      <div className={`num text-2xl ${colors[accent]}`}>{v}</div>
    </div>
  );
}

function CalculatorChart({ trough, neckline, breakout, target, valid }) {
  if (!valid) return null;
  const w = 1100, h = 320;
  const padL = 70, padR = 130, padT = 30, padB = 30;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const yMax = target + (target - trough) * 0.05;
  const yMin = trough - (target - trough) * 0.05;
  const yRange = yMax - yMin;
  const yF = price => padT + ((yMax - price) / yRange) * innerH;
  const xT = padL + innerW * 0.1;
  const xN = padL + innerW * 0.4;
  const xBreak = padL + innerW * 0.55;
  const xTarget = padL + innerW * 0.85;
  return (
    <div className="overflow-x-auto -mx-2 md:mx-0">
      <svg viewBox={`0 0 ${w} ${h}`} className="block rounded-xl border border-border"
        style={{ background: C.bg, minWidth: '880px' }}>
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <line key={i} x1={padL} x2={w - padR} y1={padT + innerH * t} y2={padT + innerH * t}
            stroke={C.grid} strokeWidth={1} />
        ))}
        {/* W trace: trough → peak → trough → break → target */}
        <polyline
          points={`${xT},${yF(trough)} ${(xT + xN) / 2},${yF(neckline)} ${xN + 8},${yF(trough)} ${xBreak},${yF(neckline)}`}
          fill="none" stroke="#ffffff" strokeWidth={1.5} opacity={0.18} />
        {/* Trough marker */}
        <circle cx={xT} cy={yF(trough)} r={6} fill={C.red} stroke="#000" strokeWidth={1.5} />
        <text x={xT} y={yF(trough) + 22} fill={C.red} fontSize={11} textAnchor="middle"
          fontFamily="'Space Mono', monospace">trough {trough.toFixed(1)}</text>
        {/* Neckline horizontal */}
        <line x1={padL} x2={w - padR} y1={yF(neckline)} y2={yF(neckline)}
          stroke={C.cyan} strokeWidth={3} strokeDasharray="8 4" />
        <text x={padL + 6} y={yF(neckline) - 6} fill={C.cyan} fontSize={11}
          fontFamily="'Space Mono', monospace">neckline {neckline.toFixed(1)}</text>
        {/* Pattern height arrow (vertical, on left) */}
        <line x1={padL + 14} y1={yF(trough)} x2={padL + 14} y2={yF(neckline)}
          stroke={C.green} strokeWidth={2.5} strokeDasharray="4 3" />
        <polygon points={`${padL + 14},${yF(neckline) + 2} ${padL + 8},${yF(neckline) + 12} ${padL + 20},${yF(neckline) + 12}`} fill={C.green} />
        <text x={padL + 22} y={(yF(trough) + yF(neckline)) / 2 + 4} fill={C.green}
          fontSize={12} fontWeight="bold" fontFamily="'Oxanium', sans-serif">
          height = {(neckline - trough).toFixed(2)}
        </text>
        {/* Breakout marker */}
        <circle cx={xBreak} cy={yF(breakout)} r={6} fill={C.orange} stroke="#000" strokeWidth={1.5} />
        <text x={xBreak} y={yF(breakout) - 12} fill={C.orange} fontSize={11} textAnchor="middle"
          fontFamily="'Space Mono', monospace">breakout {breakout.toFixed(1)}</text>
        {/* Up projection arrow */}
        <line x1={xBreak} y1={yF(breakout)} x2={xTarget} y2={yF(target)}
          stroke={C.amber} strokeWidth={3} strokeDasharray="6 5" />
        <polygon points={`${xTarget},${yF(target)} ${xTarget - 8},${yF(target) + 8} ${xTarget - 8},${yF(target) - 8}`} fill={C.amber} />
        <text x={(xBreak + xTarget) / 2} y={(yF(breakout) + yF(target)) / 2 - 8} fill={C.amber}
          fontSize={13} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight="bold">
          PROJECTION = +{(neckline - trough).toFixed(2)}
        </text>
        {/* Target line */}
        <line x1={padL} x2={w - padR} y1={yF(target)} y2={yF(target)}
          stroke={C.amber} strokeWidth={1.5} strokeDasharray="6 4" opacity={0.85} />
        <rect x={w - padR + 6} y={yF(target) - 11} width={padR - 10} height={22} rx={3} fill={C.bg} stroke={C.amber} />
        <text x={w - padR + 12} y={yF(target) + 5} fill={C.amber} fontSize={12}
          fontFamily="'Space Mono', monospace">TARGET {target.toFixed(2)}</text>
      </svg>
    </div>
  );
}
function Section8Stops() {
  const stops = [
    { kind: 'CORRECT', color: 'green', title: 'Below the LOWER trough by 1-2 ticks',
      body: 'Stop sits below whichever trough printed lower. Survives normal noise and stop-hunt wicks. This is the default.',
      svg: <DBStopSVG variant="correct" /> },
    { kind: 'TOO TIGHT', color: 'red', title: 'Just below the second trough',
      body: 'Tempting because risk looks small. Reality: the same stop-run wick that creates the most reliable double bottoms takes you out before the reversal. Right idea, dead trader.',
      svg: <DBStopSVG variant="tight" /> },
    { kind: 'TOO LOOSE', color: 'amber', title: 'Way below the lower trough',
      body: 'Now risk is so large the R:R doesn\'t work. Even if you\'re right about direction, you can\'t take a fair size — and the win becomes too small to justify the trade.',
      svg: <DBStopSVG variant="loose" /> }
  ];
  const colors = {
    green: { border: 'border-green/40', text: 'text-green' },
    red:   { border: 'border-red/40',   text: 'text-red' },
    amber: { border: 'border-amber/40', text: 'text-amber' }
  };
  return (
    <SectionShell n={8} title="Stop Placement">
      <p className="mb-5">Three options. Only one is correct.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stops.map((s, i) => (
          <div key={i} className={`card ${colors[s.color].border}`}>
            <div className={`label mb-2 ${colors[s.color].text}`}>{s.kind}</div>
            <h4 className={`font-display font-semibold mb-3 ${colors[s.color].text}`}>{s.title}</h4>
            <div className="mb-3">{s.svg}</div>
            <p className="text-sm text-text/85 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function DBStopSVG({ variant }) {
  const w = 280, h = 160;
  // Common: W shape with t1 lower than t2 (so "lower trough" is t1)
  const candles = (
    <g>
      {/* neckline */}
      <line x1={20} y1={50} x2={260} y2={50} stroke={C.cyan} strokeWidth={1.4} strokeDasharray="4 3" opacity={0.7} />
      {/* trough 1 — 4 candles down + low candle */}
      {[40, 55, 70].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={56 + i * 8} y2={80 + i * 8} stroke={C.red} strokeWidth={1.2} />
          <rect x={x - 4} y={58 + i * 8} width={8} height={20} fill={C.red} />
        </g>
      ))}
      {/* peak rise */}
      {[90, 105, 120].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={80 - i * 8} y2={104 - i * 8} stroke={C.green} strokeWidth={1.2} />
          <rect x={x - 4} y={82 - i * 8} width={8} height={20} fill={C.green} />
        </g>
      ))}
      {/* return down — t2 candles */}
      {[140, 155, 170].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={68 + i * 6} y2={92 + i * 6} stroke={C.red} strokeWidth={1.2} />
          <rect x={x - 4} y={70 + i * 6} width={8} height={20} fill={C.red} />
        </g>
      ))}
      {/* breakout candle (green, above neckline) */}
      <line x1={195} y1={20} x2={195} y2={60} stroke={C.green} strokeWidth={1.5} />
      <rect x={191} y={22} width={8} height={32} fill={C.green} />
    </g>
  );
  let stop;
  if (variant === 'correct') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={108} y2={108} stroke={C.green} strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={120} fill={C.green} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · below lower trough</text>
      </g>
    );
  } else if (variant === 'tight') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={92} y2={92} stroke={C.red} strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={86} fill={C.red} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · 2nd trough (too tight)</text>
        {/* show stop-hunt wick that takes them out */}
        <line x1={235} y1={88} x2={235} y2={130} stroke={C.red} strokeWidth={1.4} />
        <text x={246} y={120} fill={C.amber} fontSize={9} fontFamily="'Space Mono', monospace">wicked!</text>
      </g>
    );
  } else if (variant === 'loose') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={148} y2={148} stroke={C.amber} strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={142} fill={C.amber} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · way below (too loose)</text>
      </g>
    );
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: C.bg }}>
      {candles}
      {stop}
    </svg>
  );
}
function Section9Volume() {
  return (
    <SectionShell n={9} title="Volume Rules">
      <p className="mb-5">Three volume profiles side by side. Only one is a tradable double bottom.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DBVolCard tag="VALID" color="green"
          body="Volume is highest on the first trough (climactic selling). Lower on the second trough — sellers are exhausted. Surge on the breakout candle as buyers re-engage. Only this profile to trade."
          svg={<DBVolSVG variant="valid" />} />
        <DBVolCard tag="SUSPECT" color="amber"
          body="Volume is roughly equal on both troughs. Modest, unconvincing volume on breakout. The break may work but probability is half what a valid setup gives you. Half size or skip."
          svg={<DBVolSVG variant="suspect" />} />
        <DBVolCard tag="INVALID" color="red"
          body="Volume RISES on the second trough — sellers are still pushing harder. Skip. These flip down more often than they reverse up."
          svg={<DBVolSVG variant="invalid" />} />
      </div>
    </SectionShell>
  );
}

function DBVolCard({ tag, color, body, svg }) {
  const colors = {
    green: { border: 'border-green/40', text: 'text-green' },
    amber: { border: 'border-amber/40', text: 'text-amber' },
    red:   { border: 'border-red/40',   text: 'text-red' }
  };
  return (
    <div className={`card ${colors[color].border}`}>
      <div className={`label mb-2 ${colors[color].text}`}>{tag}</div>
      <div className="mb-3">{svg}</div>
      <p className="text-sm text-text/85 leading-relaxed">{body}</p>
    </div>
  );
}

function DBVolSVG({ variant }) {
  const w = 280, h = 130;
  // Bars: t1 spike, low between, t2 spike, low between, breakout spike
  let bars;
  if (variant === 'valid') {
    bars = [40, 36, 110, 50, 40, 60, 45, 36, 70, 48, 35, 120]; // t1 high, t2 lower, breakout big
  } else if (variant === 'suspect') {
    bars = [40, 40, 80, 50, 40, 55, 45, 40, 80, 50, 40, 60]; // t1=t2 same, mild break
  } else {
    bars = [40, 36, 70, 50, 40, 60, 45, 50, 95, 60, 45, 30]; // t2 > t1, tiny break
  }
  const max = Math.max(...bars);
  const colors = bars.map((_, i) => {
    if (i === 2) return C.red;
    if (i === 8) return C.red;
    if (i === 11) return C.green;
    return C.green;
  });
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: C.bg }}>
      <text x={20} y={20} fill="#666" fontSize={10} fontFamily="'Space Mono', monospace">VOLUME</text>
      {bars.map((b, i) => {
        const barH = (b / max) * 90;
        return (
          <rect key={i} x={20 + i * 20} y={120 - barH} width={14} height={barH}
            fill={colors[i]} opacity={i === 11 ? 0.85 : 0.5} />
        );
      })}
      {/* labels under troughs/break */}
      <text x={48} y={128} fill="#666" fontSize={8} textAnchor="middle" fontFamily="'Space Mono', monospace">t1</text>
      <text x={188} y={128} fill="#666" fontSize={8} textAnchor="middle" fontFamily="'Space Mono', monospace">t2</text>
      <text x={248} y={128} fill="#666" fontSize={8} textAnchor="middle" fontFamily="'Space Mono', monospace">brk</text>
    </svg>
  );
}
function Section10Mistakes() {
  const mistakes = [
    { n: 1, title: 'Buying at the second trough before the neckline breaks',
      body: 'The most expensive mistake. You see a "double bottom forming" and try to front-run the move. A stop-run wick takes you out, then price reverses without you. Wait for the neckline break.' },
    { n: 2, title: 'Drawing the neckline at the wrong level',
      body: 'Use the highest body CLOSE in the peak between troughs — not the highest wick. Wick-based necklines fire false signals all session.' },
    { n: 3, title: 'Trading inside a strong downtrend',
      body: 'Counter-trend on a 2-min chart is low-edge. The pattern needs a neutral or recovering larger trend to work. Zoom out one timeframe before every entry.' },
    { n: 4, title: 'Stop too tight (below second trough instead of below the lower trough)',
      body: 'Right direction, wrong stop. The stop-run undercut that creates the most reliable double bottoms takes out tight stops first.' },
    { n: 5, title: 'Holding past the measured-move target',
      body: 'Pattern height is the projection. Past that, you\'re on hope. Take the target. The whole reason you do this work is to build the muscle of taking profit when the chart says to.' },
    { n: 6, title: 'Trading within 5 minutes of scheduled news',
      body: 'CPI, FOMC, payrolls — any scheduled release can flush the entire pattern in two candles. Check the calendar before every entry. If news is coming, stand down.' }
  ];
  return (
    <SectionShell n={10} title="Six Mistakes That Kill Double Bottom Trades">
      <div className="space-y-3">
        {mistakes.map(m => (
          <div key={m.n} className="card flex flex-col md:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded-lg bg-red/15 text-red border border-red/40 flex items-center justify-center font-display font-bold text-xl shrink-0">
              {m.n}
            </div>
            <div className="flex-1">
              <h4 className="font-display font-semibold text-lg mb-2">{m.title}</h4>
              <p className="text-text/85 leading-relaxed">{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
function Section11Lookalikes() {
  const cards = [
    {
      title: 'vs Triple Bottom',
      svg: <LookalikeSVG variant="triple" />,
      body: 'Two tests of a level often resolve up. Three tests often resolve DOWN — buyers tried, buyers failed, sellers know it. If price returns to the level a third time, cut and reassess. Don\'t treat the third trough as confirmation.'
    },
    {
      title: 'vs Inverse Head & Shoulders',
      svg: <LookalikeSVG variant="ihs" />,
      body: 'Inverse H&S has a MIDDLE trough that is the lowest of three (the head). The two outer troughs are higher (shoulders). Different pattern. The neckline is drawn through the two PEAKS between troughs, not at a single peak.'
    },
    {
      title: 'vs Range',
      svg: <LookalikeSVG variant="range" />,
      body: 'True double bottoms have SHARP bounces — long lower wicks, decisive green follow-through after each trough. Ranges have lazy drifts in both directions, no urgency. If the bounces look listless, it\'s a range, not a setup.'
    }
  ];
  return (
    <SectionShell n={11} title="Lookalike Patterns (Don't Confuse These)">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <div key={i} className="card border-amber/30">
            <h4 className="font-display font-semibold text-lg mb-3 text-amber">{c.title}</h4>
            <div className="mb-3">{c.svg}</div>
            <p className="text-sm text-text/85 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function LookalikeSVG({ variant }) {
  const w = 280, h = 130;
  if (variant === 'triple') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: C.bg }}>
        <line x1={20} y1={45} x2={260} y2={45} stroke={C.cyan} strokeWidth={1.4} strokeDasharray="4 3" opacity={0.7} />
        <polyline points="20,55 60,100 100,55 140,100 180,55 220,100 260,115"
          fill="none" stroke={C.red} strokeWidth={2} />
        <text x={140} y={20} fill={C.red} fontSize={11} textAnchor="middle"
          fontFamily="'Space Mono', monospace" fontWeight="bold">3 tests → down</text>
      </svg>
    );
  }
  if (variant === 'ihs') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: C.bg }}>
        {/* Two peaks at same level (necklines), middle trough lowest */}
        <line x1={20} y1={45} x2={260} y2={45} stroke={C.cyan} strokeWidth={1.4} strokeDasharray="4 3" opacity={0.7} />
        <polyline points="20,55 50,90 80,55 140,115 200,55 230,90 260,30"
          fill="none" stroke={C.green} strokeWidth={2} />
        <text x={50} y={104} fill="#aaa" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">L</text>
        <text x={140} y={125} fill={C.red} fontSize={11} textAnchor="middle" fontWeight="bold" fontFamily="'Space Mono', monospace">head (lowest)</text>
        <text x={230} y={104} fill="#aaa" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">R</text>
      </svg>
    );
  }
  if (variant === 'range') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: C.bg }}>
        <line x1={20} y1={40} x2={260} y2={40} stroke={C.muted} strokeWidth={1.2} strokeDasharray="3 3" opacity={0.7} />
        <line x1={20} y1={100} x2={260} y2={100} stroke={C.muted} strokeWidth={1.2} strokeDasharray="3 3" opacity={0.7} />
        <polyline points="20,60 50,90 80,55 110,95 140,60 170,95 200,55 230,90 260,60"
          fill="none" stroke="#aaa" strokeWidth={2} />
        <text x={140} y={20} fill={C.muted} fontSize={11} textAnchor="middle" fontWeight="bold" fontFamily="'Space Mono', monospace">no urgency</text>
      </svg>
    );
  }
  return null;
}
function Section12TimeOfDay() {
  const slots = [
    { time: '9:30 — 10:00 ET', label: 'Morning low forms', tone: 'amber',
      body: 'Opening drive selloff. The morning low often becomes your future first trough. Don\'t trade — observe and note the level.' },
    { time: '10:00 — 10:15 ET', label: 'Watch for retreat', tone: 'amber',
      body: 'Price retraces from the open. Initial bounce off the morning low. Building the peak between troughs.' },
    { time: '10:15 — 12:00 ET', label: 'YOUR WINDOW — highest quality', tone: 'green',
      body: 'Second-wave selloff testing the morning low. If it holds and the neckline (morning high) breaks, this is one of the cleanest setups available. Take it.' },
    { time: '12:00 — 14:00 ET', label: 'Lunch chop — AVOID', tone: 'red',
      body: 'Volume dies, ranges expand and contract erratically. Patterns that "form" in this window fail more often than not. Skip entirely.' },
    { time: '14:00 — 15:00 ET', label: 'Decent quality on retests', tone: 'amber',
      body: 'Volume returns. Afternoon bottoms can re-test morning lows. Quality OK if structure is clean and your A.M. discipline isn\'t broken.' },
    { time: '15:00 — 16:00 ET', label: 'Variable — squeeze risk', tone: 'amber',
      body: 'Trapped shorts can squeeze any reversal hard. Quick pop, quick reversal. Trade only with tight risk and small size.' }
  ];
  const tones = {
    green: { border: 'border-green/50', bg: 'bg-green/5', text: 'text-green' },
    amber: { border: 'border-amber/40', bg: 'bg-amber/5', text: 'text-amber' },
    red:   { border: 'border-red/50', bg: 'bg-red/5', text: 'text-red' }
  };
  return (
    <SectionShell n={12} title="Time of Day">
      <p className="mb-5">When during the session each part of the pattern typically forms — and when not to trade.</p>
      <div className="space-y-2.5">
        {slots.map((s, i) => {
          const t = tones[s.tone];
          return (
            <div key={i} className={`card-tight border ${t.border} ${t.bg} flex flex-col md:flex-row md:items-center gap-3`}>
              <div className={`shrink-0 md:w-44 font-mono text-sm ${t.text}`}>{s.time}</div>
              <div className="flex-1">
                <div className={`font-display font-semibold mb-1 ${t.text}`}>{s.label}</div>
                <p className="text-sm text-text/85 leading-relaxed">{s.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
function Section13Psychology() {
  return (
    <SectionShell n={13} title="Psychology in 4 Sentences">
      <div className="space-y-3 text-text/90 leading-relaxed text-base md:text-lg">
        <p><span className="text-red font-semibold">1.</span> Sellers push price to a new low but big buyers defend → <span className="text-muted">first trough</span>.</p>
        <p><span className="text-green font-semibold">2.</span> Bounce as profit-taking on shorts and longs lift it up → <span className="text-muted">peak</span>.</p>
        <p><span className="text-red font-semibold">3.</span> Sellers retry, same buyers defend the same level → <span className="text-muted">second trough</span>.</p>
        <p><span className="text-amber font-semibold">4.</span> When sellers fail twice and price breaks the peak's resistance, trapped shorts and sidelined longs both buy aggressively → <span className="text-muted">measured move up equal to the pattern height</span>.</p>
      </div>
    </SectionShell>
  );
}
function Section14Checklist() {
  const items = [
    'Larger trend up or neutral (not strongly down)',
    'Two distinct troughs within 2-3 ticks (or slight stop run)',
    'Troughs 8-25 candles apart',
    'Volume on second trough ≤ first trough',
    'Neckline at highest CLOSE of peak (not wick)',
    'A candle CLOSED above neckline by ≥1 tick',
    'Candle AFTER break confirmed (green body, higher close, rising volume)',
    'No major news within next 5 minutes',
    'Time of day favorable (avoid 12:00-14:00 ET)',
    'Stop below lower of the two troughs',
    'Target ≥2x risk',
    'One of my two trades for the session'
  ];
  return (
    <SectionShell n={14} title="Scalping Checklist (Print This)">
      <p className="mb-5">Mentally run this list before every entry. If any answer is "no" — pass.</p>
      <div className="card border-green/40 bg-green/[0.03]">
        <ul className="space-y-3">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-3">
              <input type="checkbox" />
              <span className="text-base">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

// =============================== HELPER: DOUBLE-BOTTOM CHART RENDERER ===============================
// Generic renderer for a hand-coded double-bottom example.
// `ex` shape:
//   { candles: [{o,h,l,c,vol}, ...],
//     trough1Idx, trough2Idx, peakIdx, neckline, breakoutIdx, breakoutPrice,
//     failed, retestIdx, prevTrough1Level (for stop-run), entryTiers, news,
//     extras (free-form annotations array), inset (optional larger-trend miniature) }
function DoubleBottomExhibit({ ex }) {
  const W = 1100, H = 540;
  const padL = 60, padR = 110, padT = 70, padB = 40;
  const volH = 90;
  const candles = ex.candles;
  const allHigh = Math.max(...candles.map(c => c.h));
  const allLow = Math.min(...candles.map(c => c.l));
  const range = allHigh - allLow || 1;
  const pad = range * 0.08;
  const yMax = allHigh + pad;
  const yMin = allLow - pad;
  const yRange = yMax - yMin;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB - volH;
  const slot = innerW / candles.length;
  const bodyW = Math.max(5, Math.min(slot * 0.74, 26));
  const xFor = i => padL + i * slot + slot / 2;
  const yFor = price => padT + ((yMax - price) / yRange) * innerH;
  const maxVol = Math.max(1, ...candles.map(c => c.vol || 0));
  const volTop = padT + innerH + 14;
  const volBottom = volTop + volH - 6;
  const yVol = v => volBottom - (v / maxVol) * (volH - 12);

  const ticks = [];
  for (let i = 0; i <= 4; i++) ticks.push(yMin + (yMax - yMin) * (i / 4));

  const trough1 = candles[ex.trough1Idx];
  const trough2 = candles[ex.trough2Idx];
  const t1y = yFor(trough1.l);
  const t2y = yFor(trough2.l);
  const xN1 = xFor(0) - slot * 0.4;
  const xN2 = xFor(candles.length - 1) + slot * 0.4;
  const yN = yFor(ex.neckline);
  const lowerOfTroughs = Math.min(trough1.l, trough2.l);
  const patternHeight = ex.neckline - lowerOfTroughs;
  const targetPrice = ex.neckline + patternHeight;

  return (
    <div className="overflow-x-auto -mx-2 md:mx-0">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet"
        className="block rounded-xl border border-border w-full h-auto"
        style={{ background: C.bg, minWidth: '880px' }}>
        {/* Y-axis ticks */}
        {ticks.map((p, i) => (
          <g key={i}>
            <line x1={padL} x2={W - padR} y1={yFor(p)} y2={yFor(p)} stroke={C.grid} strokeWidth={1} />
            <text x={padL - 8} y={yFor(p) + 4} fill="#666" fontSize={10}
              fontFamily="'Space Mono', monospace" textAnchor="end">{p.toFixed(1)}</text>
          </g>
        ))}

        {/* Inset (larger trend) */}
        {ex.inset && <InsetMini inset={ex.inset} W={W} padR={padR} padT={padT} />}

        {/* Candles */}
        {candles.map((c, i) => {
          const isUp = c.c >= c.o;
          const color = isUp ? C.green : C.red;
          return (
            <g key={i}>
              <line x1={xFor(i)} x2={xFor(i)} y1={yFor(c.h)} y2={yFor(c.l)} stroke={color} strokeWidth={1.5} />
              <rect x={xFor(i) - bodyW / 2} y={Math.min(yFor(c.o), yFor(c.c))}
                width={bodyW} height={Math.max(1.5, Math.abs(yFor(c.c) - yFor(c.o)))} fill={color} />
            </g>
          );
        })}

        {/* Volume */}
        {candles.map((c, i) => {
          const isUp = c.c >= c.o;
          const color = isUp ? C.green : C.red;
          const yT = yVol(c.vol || 0);
          return <rect key={`v${i}`} x={xFor(i) - bodyW / 2} y={yT}
            width={bodyW} height={volBottom - yT} fill={color} opacity={0.5} />;
        })}
        <text x={padL - 8} y={volTop + 14} fill="#666" fontSize={10}
          fontFamily="'Space Mono', monospace" textAnchor="end">VOL</text>

        {/* Optional dotted line marking first trough's level (used by stop-run example) */}
        {ex.prevTrough1Level != null && (
          <g>
            <line x1={padL} x2={W - padR} y1={yFor(ex.prevTrough1Level)} y2={yFor(ex.prevTrough1Level)}
              stroke={C.muted} strokeWidth={1.2} strokeDasharray="3 3" opacity={0.6} />
            <text x={W - padR - 8} y={yFor(ex.prevTrough1Level) - 4} fill={C.muted}
              fontSize={9.5} textAnchor="end" fontFamily="'Space Mono', monospace">trough 1 level</text>
          </g>
        )}

        {/* NECKLINE */}
        <line x1={xN1} x2={xN2} y1={yN} y2={yN}
          stroke={C.cyan} strokeWidth={4} strokeDasharray="10 5" />
        <circle cx={xN1} cy={yN} r={9} fill={C.green} stroke="#000" strokeWidth={2} />
        <text x={xN1} y={yN + 4} fill="#000" fontSize={12} fontWeight="bold"
          textAnchor="middle" fontFamily="'Oxanium', sans-serif">A</text>
        <circle cx={xN2} cy={yN} r={9} fill={C.green} stroke="#000" strokeWidth={2} />
        <text x={xN2} y={yN + 4} fill="#000" fontSize={12} fontWeight="bold"
          textAnchor="middle" fontFamily="'Oxanium', sans-serif">B</text>
        {/* Neckline label */}
        <rect x={padL + 8} y={padT + 6} width={260} height={20} rx={4} fill={C.bg} stroke={C.cyan} strokeWidth={1.4} />
        <text x={padL + 18} y={padT + 21} fill={C.cyan} fontSize={11} fontWeight="bold"
          fontFamily="'Space Mono', monospace">NECKLINE @ {ex.neckline.toFixed(2)}</text>

        {/* Trough 1 arrow */}
        <line x1={xFor(ex.trough1Idx)} y1={t1y + 60} x2={xFor(ex.trough1Idx)} y2={t1y + 14}
          stroke={C.green} strokeWidth={2.2} />
        <polygon points={`${xFor(ex.trough1Idx)},${t1y + 8} ${xFor(ex.trough1Idx) - 6},${t1y + 18} ${xFor(ex.trough1Idx) + 6},${t1y + 18}`} fill={C.green} />
        <rect x={xFor(ex.trough1Idx) - 38} y={t1y + 60} width={76} height={16} rx={3} fill={C.bg} stroke={C.green} strokeWidth={1.2} />
        <text x={xFor(ex.trough1Idx)} y={t1y + 72} fill={C.green} fontSize={10} fontWeight="bold"
          textAnchor="middle" fontFamily="'Space Mono', monospace">Trough 1</text>

        {/* Trough 2 arrow */}
        <line x1={xFor(ex.trough2Idx)} y1={t2y + 60} x2={xFor(ex.trough2Idx)} y2={t2y + 14}
          stroke={C.green} strokeWidth={2.2} />
        <polygon points={`${xFor(ex.trough2Idx)},${t2y + 8} ${xFor(ex.trough2Idx) - 6},${t2y + 18} ${xFor(ex.trough2Idx) + 6},${t2y + 18}`} fill={C.green} />
        <rect x={xFor(ex.trough2Idx) - 38} y={t2y + 60} width={76} height={16} rx={3} fill={C.bg} stroke={C.green} strokeWidth={1.2} />
        <text x={xFor(ex.trough2Idx)} y={t2y + 72} fill={C.green} fontSize={10} fontWeight="bold"
          textAnchor="middle" fontFamily="'Space Mono', monospace">Trough 2</text>

        {/* Pattern-height arrow (trough-to-neckline) */}
        {!ex.failed && (
          <g opacity={0.85}>
            <line x1={padL + 24} y1={t2y - 2} x2={padL + 24} y2={yN + 2}
              stroke={C.amber} strokeWidth={1.3} strokeDasharray="3 3" />
            <polygon points={`${padL + 24},${yN + 2} ${padL + 19},${yN + 12} ${padL + 29},${yN + 12}`} fill={C.amber} />
            <polygon points={`${padL + 24},${t2y - 2} ${padL + 19},${t2y - 12} ${padL + 29},${t2y - 12}`} fill={C.amber} />
            <text x={padL + 30} y={(t2y + yN) / 2 + 4} fill={C.amber} fontSize={9}
              fontFamily="'Space Mono', monospace">height</text>
          </g>
        )}

        {/* Breakout candle annotation */}
        {ex.breakoutIdx != null && !ex.failed && (() => {
          const bx = xFor(ex.breakoutIdx);
          const by = yFor(ex.breakoutPrice);
          return (
            <g>
              <line x1={bx} y1={by - 70} x2={bx} y2={by - 14} stroke={C.orange} strokeWidth={2.5} />
              <polygon points={`${bx},${by - 10} ${bx - 7},${by - 22} ${bx + 7},${by - 22}`} fill={C.orange} />
              <rect x={bx - 165} y={by - 96} width={330} height={22} rx={4} fill={C.bg} stroke={C.orange} strokeWidth={1.5} />
              <text x={bx} y={by - 80} fill={C.orange} fontSize={11} fontWeight="bold"
                textAnchor="middle" fontFamily="'Space Mono', monospace">
                LONG — body close above neckline
              </text>
            </g>
          );
        })()}

        {/* Failed pattern overlay */}
        {ex.failed && ex.failIdx != null && (() => {
          const fx = xFor(ex.failIdx);
          const fy = yFor(candles[ex.failIdx].l);
          return (
            <g>
              <g stroke={C.red} strokeWidth={5} opacity={0.95} strokeLinecap="round">
                <line x1={fx - 18} y1={fy - 18} x2={fx + 18} y2={fy + 18} />
                <line x1={fx + 18} y1={fy - 18} x2={fx - 18} y2={fy + 18} />
              </g>
              <rect x={fx - 130} y={fy + 28} width={260} height={22} rx={4}
                fill={C.bg} stroke={C.red} strokeWidth={1.5} />
              <text x={fx} y={fy + 44} fill={C.red} fontSize={11} fontWeight="bold"
                textAnchor="middle" fontFamily="'Space Mono', monospace">
                {ex.failReason || 'FAILED — abort'}
              </text>
            </g>
          );
        })()}

        {/* Retest arrow */}
        {ex.retestIdx != null && (() => {
          const rx = xFor(ex.retestIdx);
          const ry = yFor(candles[ex.retestIdx].l);
          return (
            <g>
              <line x1={rx} y1={ry + 70} x2={rx} y2={ry + 14} stroke={C.cyan} strokeWidth={2.2} />
              <polygon points={`${rx},${ry + 8} ${rx - 6},${ry + 18} ${rx + 6},${ry + 18}`} fill={C.cyan} />
              <rect x={rx - 90} y={ry + 70} width={180} height={20} rx={4} fill={C.bg} stroke={C.cyan} strokeWidth={1.4} />
              <text x={rx} y={ry + 84} fill={C.cyan} fontSize={10.5} fontWeight="bold"
                textAnchor="middle" fontFamily="'Space Mono', monospace">RETEST — bounce = LONG</text>
            </g>
          );
        })()}

        {/* Entry tier markers (for example 4 — three tiers) */}
        {ex.entryTiers && ex.entryTiers.map((t, i) => {
          const tx = xFor(t.idx);
          const ty = yFor(t.price);
          const colorMap = { aggr: C.amber, conf: C.green, retest: C.cyan };
          const col = colorMap[t.kind] || C.green;
          return (
            <g key={`et${i}`}>
              <circle cx={tx} cy={ty} r={9} fill={col} stroke="#000" strokeWidth={2} />
              <text x={tx} y={ty + 4} fill="#000" fontSize={11} fontWeight="bold"
                textAnchor="middle" fontFamily="'Oxanium', sans-serif">{t.label}</text>
            </g>
          );
        })}

        {/* Time labels for time-of-day example */}
        {ex.timeMarkers && ex.timeMarkers.map((m, i) => (
          <g key={`tm${i}`}>
            <line x1={xFor(m.idx)} x2={xFor(m.idx)} y1={padT - 12} y2={padT + innerH}
              stroke={C.amber} strokeWidth={1} strokeDasharray="2 4" opacity={0.5} />
            <rect x={xFor(m.idx) - 32} y={padT - 14} width={64} height={16} rx={3} fill={C.bg} stroke={C.amber} strokeWidth={1.1} />
            <text x={xFor(m.idx)} y={padT - 3} fill={C.amber} fontSize={10} fontWeight="bold"
              textAnchor="middle" fontFamily="'Space Mono', monospace">{m.label}</text>
          </g>
        ))}

        {/* Right-rail labels: Stop / Entry / Target */}
        {!ex.failed && (
          <g>
            {/* Stop */}
            <line x1={padL} x2={W - padR} y1={yFor(lowerOfTroughs - 0.5)} y2={yFor(lowerOfTroughs - 0.5)}
              stroke={C.red} strokeWidth={1.2} strokeDasharray="6 4" opacity={0.7} />
            <rect x={W - padR + 6} y={yFor(lowerOfTroughs - 0.5) - 9} width={padR - 10} height={18} rx={3}
              fill={C.bg} stroke={C.red} />
            <text x={W - padR + 10} y={yFor(lowerOfTroughs - 0.5) + 4} fill={C.red} fontSize={9.5}
              fontFamily="'Space Mono', monospace">stop</text>
            {/* Target */}
            <line x1={padL} x2={W - padR} y1={yFor(targetPrice)} y2={yFor(targetPrice)}
              stroke={C.amber} strokeWidth={1.4} strokeDasharray="6 4" opacity={0.85} />
            <rect x={W - padR + 6} y={yFor(targetPrice) - 9} width={padR - 10} height={18} rx={3}
              fill={C.bg} stroke={C.amber} />
            <text x={W - padR + 10} y={yFor(targetPrice) + 4} fill={C.amber} fontSize={9.5}
              fontFamily="'Space Mono', monospace">target {targetPrice.toFixed(1)}</text>
          </g>
        )}

      </svg>
    </div>
  );
}

function InsetMini({ inset, W, padR, padT }) {
  const w = 180, h = 80;
  const x0 = W - padR - w - 12;
  const y0 = padT + 6;
  const candles = inset.candles;
  const allHigh = Math.max(...candles.map(c => c.h));
  const allLow = Math.min(...candles.map(c => c.l));
  const range = allHigh - allLow || 1;
  const slot = (w - 16) / candles.length;
  const xF = i => x0 + 8 + i * slot + slot / 2;
  const yF = p => y0 + 8 + ((allHigh - p) / range) * (h - 16);
  return (
    <g>
      <rect x={x0} y={y0} width={w} height={h} rx={6} fill={C.bg} stroke={C.muted} strokeWidth={1} />
      <text x={x0 + 6} y={y0 + 12} fill={C.muted} fontSize={9}
        fontFamily="'Space Mono', monospace">larger trend</text>
      {candles.map((c, i) => {
        const isUp = c.c >= c.o;
        const color = isUp ? C.green : C.red;
        return (
          <g key={i}>
            <line x1={xF(i)} x2={xF(i)} y1={yF(c.h)} y2={yF(c.l)} stroke={color} strokeWidth={1} />
            <rect x={xF(i) - slot * 0.3} y={Math.min(yF(c.o), yF(c.c))}
              width={Math.max(2, slot * 0.6)}
              height={Math.max(1, Math.abs(yF(c.c) - yF(c.o)))} fill={color} />
          </g>
        );
      })}
    </g>
  );
}

// =============================== EXAMPLE GALLERY DATA ===============================
const Cb = (o, h, l, c, vol) => ({ o, h, l, c, vol });

// Helper for a "follow-through" tail of green candles after a breakout
const followUp = (start, count, step = 0.4) => {
  const out = [];
  let p = start;
  for (let i = 0; i < count; i++) {
    out.push(Cb(p, p + step + 0.2, p - 0.1, p + step, 90 - i * 10));
    p += step;
  }
  return out;
};

// Helper for inset candles
const insetDown = (start, count, step = 0.6) => {
  const out = [];
  let p = start;
  for (let i = 0; i < count; i++) {
    out.push(Cb(p, p + 0.2, p - step - 0.1, p - step, 0));
    p -= step;
  }
  return out;
};

// ============================================================
// EXAMPLE 1 — THE TEXTBOOK DOUBLE BOTTOM
// ============================================================
const EX1 = {
  n: 1,
  title: 'The Textbook Double Bottom',
  caption: 'Two troughs within 2 ticks, declining volume on the second, clean neckline break with a volume surge. Take it without overthinking. This is the pattern as drawn in any textbook — every other example in this gallery is a deviation from this baseline.',
  candles: [
    Cb(2510.0, 2510.6, 2509.8, 2510.2, 30),
    Cb(2510.2, 2510.4, 2507.8, 2508.0, 80),
    Cb(2508.0, 2508.2, 2505.4, 2505.6, 88),
    Cb(2505.6, 2505.8, 2502.6, 2502.8, 96),
    Cb(2502.8, 2503.0, 2500.2, 2500.4, 110), // trough 1 low
    Cb(2500.4, 2502.0, 2500.4, 2501.8, 95),
    Cb(2501.8, 2503.4, 2501.6, 2503.2, 80),
    Cb(2503.2, 2505.0, 2503.0, 2504.8, 70),
    Cb(2504.8, 2506.2, 2504.6, 2506.0, 60), // peak body close
    Cb(2506.0, 2506.2, 2504.4, 2504.6, 55),
    Cb(2504.6, 2504.8, 2502.6, 2502.8, 48),
    Cb(2502.8, 2503.0, 2500.6, 2500.8, 42),
    Cb(2500.8, 2501.0, 2500.2, 2500.6, 38), // trough 2 low (same as t1)
    Cb(2500.6, 2502.4, 2500.4, 2502.2, 70),
    Cb(2502.2, 2504.4, 2502.0, 2504.0, 95),
    Cb(2504.0, 2506.4, 2503.8, 2506.3, 130), // breakout candle close above 2506
    Cb(2506.3, 2508.0, 2506.0, 2507.8, 120),
    Cb(2507.8, 2509.4, 2507.6, 2509.2, 95),
    Cb(2509.2, 2510.6, 2509.0, 2510.4, 80)
  ],
  trough1Idx: 4,
  trough2Idx: 12,
  peakIdx: 8,
  neckline: 2506.0,
  breakoutIdx: 15,
  breakoutPrice: 2506.3
};

// ============================================================
// EXAMPLE 2 — STOP RUN (most reliable)
// ============================================================
const EX2 = {
  n: 2,
  title: 'The Stop Run (Slightly Lower Second Trough) — Most Reliable',
  caption: 'Counter-intuitive but powerful: when the second trough briefly undercuts the first then reverses, this is the highest-probability double bottom. The undercut runs stops on aggressive longs and trapped shorts — both groups become forced buyers when it reverses. Highest reliability. The dotted line shows the original first-trough level.',
  prevTrough1Level: 2500.4,
  candles: [
    Cb(2510.0, 2510.4, 2509.6, 2510.2, 30),
    Cb(2510.2, 2510.3, 2507.6, 2507.8, 85),
    Cb(2507.8, 2508.0, 2505.0, 2505.2, 92),
    Cb(2505.2, 2505.4, 2502.4, 2502.6, 100),
    Cb(2502.6, 2502.8, 2500.4, 2500.6, 115), // t1 low
    Cb(2500.6, 2502.4, 2500.4, 2502.2, 95),
    Cb(2502.2, 2504.0, 2502.0, 2503.8, 80),
    Cb(2503.8, 2505.4, 2503.6, 2505.2, 65),
    Cb(2505.2, 2506.4, 2505.0, 2506.0, 55), // peak body close
    Cb(2506.0, 2506.2, 2504.4, 2504.6, 50),
    Cb(2504.6, 2504.8, 2502.6, 2502.8, 45),
    Cb(2502.8, 2503.0, 2500.4, 2500.6, 50),
    Cb(2500.6, 2500.8, 2498.6, 2499.0, 70), // undercut — t2 spikes 1.4 below t1
    Cb(2499.0, 2502.6, 2498.8, 2502.4, 100), // immediate reversal — long lower wick
    Cb(2502.4, 2504.6, 2502.2, 2504.4, 110),
    Cb(2504.4, 2506.4, 2504.2, 2506.4, 130), // break above neckline
    Cb(2506.4, 2508.4, 2506.2, 2508.2, 115),
    Cb(2508.2, 2510.0, 2508.0, 2509.8, 95),
    Cb(2509.8, 2511.0, 2509.6, 2510.8, 80)
  ],
  trough1Idx: 4,
  trough2Idx: 12,
  peakIdx: 8,
  neckline: 2506.0,
  breakoutIdx: 15,
  breakoutPrice: 2506.4
};

// ============================================================
// EXAMPLE 3 — BULLISH DIVERGENCE (HIGHER SECOND TROUGH)
// ============================================================
const EX3 = {
  n: 3,
  title: 'The Bullish Divergence Double Bottom',
  caption: 'When the second trough fails to even reach the first, momentum has already shifted. Buyers stepped in earlier than they did the first time. Strong setup. Note the small RSI panel showing a higher low while price made a similar one — that\'s your divergence.',
  candles: [
    Cb(100.0, 100.4, 99.6, 100.2, 30),
    Cb(100.2, 100.3, 97.6, 97.8, 85),
    Cb(97.8, 98.0, 95.0, 95.2, 92),
    Cb(95.2, 95.4, 92.4, 92.6, 100),
    Cb(92.6, 92.8, 90.4, 90.6, 115), // t1 low
    Cb(90.6, 92.4, 90.4, 92.2, 95),
    Cb(92.2, 94.0, 92.0, 93.8, 80),
    Cb(93.8, 95.4, 93.6, 95.2, 65),
    Cb(95.2, 96.4, 95.0, 96.0, 55), // peak
    Cb(96.0, 96.2, 94.4, 94.6, 50),
    Cb(94.6, 94.8, 93.0, 93.2, 45),
    Cb(93.2, 93.4, 91.6, 91.8, 42),
    Cb(91.8, 92.0, 91.4, 91.6, 38), // t2 — 1 tick higher than t1
    Cb(91.6, 93.4, 91.4, 93.2, 70),
    Cb(93.2, 94.8, 93.0, 94.6, 90),
    Cb(94.6, 96.4, 94.4, 96.4, 130),
    Cb(96.4, 98.2, 96.2, 98.0, 115),
    Cb(98.0, 99.6, 97.8, 99.4, 95),
    Cb(99.4, 100.6, 99.2, 100.4, 80)
  ],
  trough1Idx: 4,
  trough2Idx: 12,
  peakIdx: 8,
  neckline: 96.0,
  breakoutIdx: 15,
  breakoutPrice: 96.4,
  rsiPanel: { t1: 28, t2: 38 } // higher low on RSI
};

// ============================================================
// EXAMPLE 4 — RETEST (THREE TIERS)
// ============================================================
const EX4 = {
  n: 4,
  title: 'The Retest Entry (Highest Probability)',
  caption: 'Pattern breaks up. Price rises 3-5 ticks above the neckline, pulls back DOWN to the neckline from above, bounces with a green candle and continues up. This chart shows all three entries: yellow Tier 1 aggressive at the break, green Tier 2 confirmation on the next-candle close, cyan Tier 3 retest on the bounce from above. Tier 3 has the tightest stop and the highest win rate.',
  candles: [
    Cb(2510.0, 2510.4, 2509.6, 2510.2, 30),
    Cb(2510.2, 2510.4, 2507.8, 2508.0, 80),
    Cb(2508.0, 2508.2, 2505.6, 2505.8, 90),
    Cb(2505.8, 2506.0, 2503.0, 2503.2, 100),
    Cb(2503.2, 2503.4, 2501.0, 2501.2, 110), // t1
    Cb(2501.2, 2503.0, 2501.0, 2502.8, 90),
    Cb(2502.8, 2504.4, 2502.6, 2504.2, 75),
    Cb(2504.2, 2506.0, 2504.0, 2505.8, 60),
    Cb(2505.8, 2507.0, 2505.6, 2506.6, 50), // peak body close
    Cb(2506.6, 2506.8, 2505.0, 2505.2, 45),
    Cb(2505.2, 2505.4, 2503.4, 2503.6, 42),
    Cb(2503.6, 2503.8, 2501.6, 2501.8, 40),
    Cb(2501.8, 2502.0, 2501.0, 2501.4, 38), // t2
    Cb(2501.4, 2503.4, 2501.2, 2503.2, 65),
    Cb(2503.2, 2505.2, 2503.0, 2505.0, 80),
    Cb(2505.0, 2507.4, 2504.8, 2507.2, 130), // breakout (Tier 1 entry)
    Cb(2507.2, 2509.4, 2507.0, 2509.2, 110), // Tier 2 confirmation
    Cb(2509.2, 2509.6, 2507.4, 2507.6, 75),
    Cb(2507.6, 2507.8, 2505.6, 2505.8, 60), // pulls down to neckline 2506.6 area
    Cb(2505.8, 2507.6, 2505.6, 2507.4, 90), // bounce off neckline (Tier 3)
    Cb(2507.4, 2509.6, 2507.2, 2509.4, 110),
    Cb(2509.4, 2511.4, 2509.2, 2511.2, 120)
  ],
  trough1Idx: 4,
  trough2Idx: 12,
  peakIdx: 8,
  neckline: 2506.6,
  breakoutIdx: 15,
  breakoutPrice: 2507.2,
  retestIdx: 19,
  entryTiers: [
    { kind: 'aggr', idx: 15, price: 2507.2, label: 'T1' },
    { kind: 'conf', idx: 16, price: 2509.2, label: 'T2' },
    { kind: 'retest', idx: 19, price: 2507.4, label: 'T3' }
  ]
};

// ============================================================
// EXAMPLE 5 — FAILED (TRIPLE BOTTOM, BROKE DOWN)
// ============================================================
const EX5 = {
  n: 5,
  title: 'The FAILED Double Bottom (Triple Bottom, Broke DOWN)',
  caption: 'Two troughs, neckline appears intact, third test, breaks DOWN instead of up. Three tests of the same level often resolve down — buyers tried, buyers failed, sellers know it. Wait for the neckline break before entering. Never anticipate.',
  failed: true,
  failIdx: 16,
  failReason: 'Broke down — abort',
  candles: [
    Cb(100.0, 100.4, 99.6, 100.2, 30),
    Cb(100.2, 100.3, 97.6, 97.8, 85),
    Cb(97.8, 98.0, 95.0, 95.2, 92),
    Cb(95.2, 95.4, 92.6, 92.8, 100),
    Cb(92.8, 93.0, 90.6, 90.8, 110), // t1
    Cb(90.8, 92.6, 90.6, 92.4, 90),
    Cb(92.4, 93.8, 92.2, 93.6, 75),
    Cb(93.6, 94.8, 93.4, 94.6, 65),
    Cb(94.6, 95.6, 94.4, 95.2, 55), // peak
    Cb(95.2, 95.4, 93.4, 93.6, 50),
    Cb(93.6, 93.8, 92.0, 92.2, 45),
    Cb(92.2, 92.4, 91.0, 91.2, 42),
    Cb(91.2, 91.4, 90.6, 90.8, 38), // t2
    Cb(90.8, 92.4, 90.6, 92.2, 60),
    Cb(92.2, 93.4, 92.0, 93.2, 55),
    Cb(93.2, 93.6, 91.4, 91.6, 60),
    Cb(91.6, 91.8, 88.6, 88.8, 110), // BREAK DOWN
    Cb(88.8, 89.0, 86.4, 86.6, 95),
    Cb(86.6, 86.8, 84.6, 84.8, 80)
  ],
  trough1Idx: 4,
  trough2Idx: 12,
  peakIdx: 8,
  neckline: 95.2
};

// ============================================================
// EXAMPLE 6 — PREMATURE LONG (STOPPED AT T2)
// ============================================================
const EX6 = {
  n: 6,
  title: 'The Premature Long (Stopped at the Second Trough)',
  caption: 'Trader buys AT the second trough before the neckline breaks. A sharp wick spikes 4-5 ticks lower, taking out the stop. Then price reverses — without them. Buying AT the second trough instead of waiting for the neckline break is the most expensive mistake. Patience costs nothing.',
  candles: [
    Cb(100.0, 100.4, 99.6, 100.2, 30),
    Cb(100.2, 100.3, 97.6, 97.8, 85),
    Cb(97.8, 98.0, 95.0, 95.2, 92),
    Cb(95.2, 95.4, 92.4, 92.6, 100),
    Cb(92.6, 92.8, 90.0, 90.2, 110), // t1
    Cb(90.2, 92.0, 90.0, 91.8, 90),
    Cb(91.8, 93.4, 91.6, 93.2, 75),
    Cb(93.2, 94.8, 93.0, 94.6, 65),
    Cb(94.6, 95.8, 94.4, 95.6, 55), // peak
    Cb(95.6, 95.8, 94.0, 94.2, 50),
    Cb(94.2, 94.4, 92.4, 92.6, 45),
    Cb(92.6, 92.8, 91.0, 91.2, 42),
    Cb(91.2, 91.4, 90.0, 90.2, 50), // t2-area open — BUYER ENTERS
    Cb(90.2, 90.4, 86.0, 86.4, 105), // stop-hunt wick: deep undercut
    Cb(86.4, 90.6, 86.2, 90.4, 95), // long lower wick — reversal AFTER they're stopped
    Cb(90.4, 92.4, 90.2, 92.2, 80),
    Cb(92.2, 94.4, 92.0, 94.2, 95),
    Cb(94.2, 96.0, 94.0, 95.8, 130),
    Cb(95.8, 97.4, 95.6, 97.2, 110)
  ],
  trough1Idx: 4,
  trough2Idx: 13,
  peakIdx: 8,
  neckline: 95.6,
  breakoutIdx: 17,
  breakoutPrice: 96.0,
  prevTrough1Level: 90.0
};

const EXAMPLES_FIRST_HALF = [EX1, EX2, EX3, EX4, EX5, EX6];

// ============================================================
// EXAMPLE 7 — VOLUME FAILURE
// ============================================================
const EX7 = {
  n: 7,
  title: 'Volume Failure (Weak Break, Drift Sideways, Reverses)',
  caption: 'Two troughs, neckline break — but on weak volume. Price drifts sideways for a few candles instead of running, then reverses down. Real double bottoms break on rising volume; weak-volume breaks fail more than half the time. Half size or skip.',
  failed: true,
  failIdx: 17,
  failReason: 'Weak volume — fakeout',
  candles: [
    Cb(100.0, 100.4, 99.6, 100.2, 30),
    Cb(100.2, 100.3, 97.6, 97.8, 78),
    Cb(97.8, 98.0, 95.0, 95.2, 70),
    Cb(95.2, 95.4, 92.4, 92.6, 65),
    Cb(92.6, 92.8, 90.0, 90.2, 60), // t1 (lower vol than usual)
    Cb(90.2, 91.8, 90.0, 91.6, 55),
    Cb(91.6, 93.2, 91.4, 93.0, 50),
    Cb(93.0, 94.4, 92.8, 94.2, 45),
    Cb(94.2, 95.4, 94.0, 95.0, 40), // peak
    Cb(95.0, 95.2, 93.6, 93.8, 38),
    Cb(93.8, 94.0, 92.4, 92.6, 35),
    Cb(92.6, 92.8, 91.2, 91.4, 32),
    Cb(91.4, 91.6, 90.2, 90.4, 30), // t2
    Cb(90.4, 92.0, 90.2, 91.8, 35),
    Cb(91.8, 93.0, 91.6, 92.8, 38),
    Cb(92.8, 94.0, 92.6, 93.8, 42),
    Cb(93.8, 95.4, 93.6, 95.2, 48), // weak break
    Cb(95.2, 95.4, 94.4, 94.6, 32),
    Cb(94.6, 94.8, 93.6, 93.8, 28),
    Cb(93.8, 93.9, 92.0, 92.2, 60),
    Cb(92.2, 92.4, 90.4, 90.6, 55)
  ],
  trough1Idx: 4,
  trough2Idx: 12,
  peakIdx: 8,
  neckline: 95.0
};

// ============================================================
// EXAMPLE 8 — DOUBLE BOTTOM INSIDE STRONG DOWNTREND (don't trade)
// ============================================================
const EX8 = {
  n: 8,
  title: 'Double Bottom Inside a Strong Downtrend (Don\'t Trade)',
  caption: 'The chart inside looks like a clean double bottom. The inset shows the bigger picture: it\'s sitting inside a strong downtrend. Breaks up 3 ticks, then the larger downtrend reasserts. A double bottom inside a strong downtrend is just a relief bounce — counter-trend trades on the 2-min are low-edge. Skip.',
  failed: true,
  failIdx: 17,
  failReason: 'Larger downtrend wins',
  inset: {
    candles: insetDown(120, 12, 1.4)
  },
  candles: [
    Cb(100.0, 100.4, 99.6, 100.2, 30),
    Cb(100.2, 100.3, 97.6, 97.8, 80),
    Cb(97.8, 98.0, 95.0, 95.2, 88),
    Cb(95.2, 95.4, 92.4, 92.6, 96),
    Cb(92.6, 92.8, 90.0, 90.2, 105), // t1
    Cb(90.2, 92.0, 90.0, 91.8, 85),
    Cb(91.8, 93.4, 91.6, 93.2, 70),
    Cb(93.2, 94.8, 93.0, 94.6, 60),
    Cb(94.6, 95.6, 94.4, 95.2, 55), // peak
    Cb(95.2, 95.4, 93.4, 93.6, 48),
    Cb(93.6, 93.8, 92.0, 92.2, 45),
    Cb(92.2, 92.4, 90.6, 90.8, 42),
    Cb(90.8, 91.0, 90.0, 90.4, 40), // t2
    Cb(90.4, 92.4, 90.2, 92.2, 60),
    Cb(92.2, 94.0, 92.0, 93.8, 70),
    Cb(93.8, 95.6, 93.6, 95.4, 90),
    Cb(95.4, 95.8, 94.4, 94.6, 55), // 3 ticks above neckline then sells
    Cb(94.6, 94.8, 92.6, 92.8, 80),
    Cb(92.8, 93.0, 90.8, 91.0, 75),
    Cb(91.0, 91.2, 88.4, 88.6, 90),
    Cb(88.6, 88.8, 86.0, 86.2, 80)
  ],
  trough1Idx: 4,
  trough2Idx: 12,
  peakIdx: 8,
  neckline: 95.2
};

// ============================================================
// EXAMPLE 9 — TIGHT (FAST REVERSAL)
// ============================================================
const EX9 = {
  n: 9,
  title: 'Tight Double Bottom (Fast Reversal)',
  caption: 'Troughs only 8-10 candles apart, narrow trough-to-neckline distance. Pattern resolves quickly. Smaller measured-move target — don\'t oversize. Take what the chart gives you; don\'t imagine more.',
  candles: [
    Cb(100.0, 100.4, 99.6, 100.2, 30),
    Cb(100.2, 100.3, 98.6, 98.8, 75),
    Cb(98.8, 99.0, 97.4, 97.6, 80),
    Cb(97.6, 97.8, 96.4, 96.6, 90), // t1
    Cb(96.6, 97.6, 96.4, 97.4, 70),
    Cb(97.4, 98.4, 97.2, 98.2, 60),
    Cb(98.2, 99.0, 98.0, 98.8, 50), // peak
    Cb(98.8, 99.0, 97.8, 98.0, 45),
    Cb(98.0, 98.2, 96.8, 97.0, 42),
    Cb(97.0, 97.2, 96.4, 96.6, 38), // t2
    Cb(96.6, 97.6, 96.4, 97.4, 60),
    Cb(97.4, 98.6, 97.2, 98.4, 80),
    Cb(98.4, 99.6, 98.2, 99.4, 130), // breakout
    Cb(99.4, 100.4, 99.2, 100.2, 100),
    Cb(100.2, 101.0, 100.0, 100.8, 80)
  ],
  trough1Idx: 3,
  trough2Idx: 9,
  peakIdx: 6,
  neckline: 98.8,
  breakoutIdx: 12,
  breakoutPrice: 99.4
};

// ============================================================
// EXAMPLE 10 — WIDE (SLOWER, BIGGER MOVE)
// ============================================================
const EX10 = {
  n: 10,
  title: 'Wide Double Bottom (Slower, Bigger Move)',
  caption: 'Troughs 25-30 candles apart, wider trough-to-neckline distance. Bigger measured-move target. Requires more patience to wait through — and more discipline to actually exit at the target instead of holding for "more".',
  candles: [
    Cb(100.0, 100.4, 99.6, 100.2, 30),
    Cb(100.2, 100.4, 98.4, 98.6, 70),
    Cb(98.6, 98.8, 96.6, 96.8, 78),
    Cb(96.8, 97.0, 94.6, 94.8, 86),
    Cb(94.8, 95.0, 92.4, 92.6, 95),
    Cb(92.6, 92.8, 90.2, 90.4, 105), // t1
    Cb(90.4, 92.0, 90.2, 91.8, 90),
    Cb(91.8, 93.4, 91.6, 93.2, 80),
    Cb(93.2, 94.6, 93.0, 94.4, 70),
    Cb(94.4, 95.8, 94.2, 95.6, 60),
    Cb(95.6, 96.6, 95.4, 96.4, 55), // peak
    Cb(96.4, 96.6, 95.4, 95.6, 50),
    Cb(95.6, 95.8, 94.4, 94.6, 47),
    Cb(94.6, 94.8, 93.4, 93.6, 45),
    Cb(93.6, 93.8, 92.6, 92.8, 42),
    Cb(92.8, 93.0, 91.8, 92.0, 40),
    Cb(92.0, 92.2, 91.0, 91.2, 38),
    Cb(91.2, 91.4, 90.4, 90.6, 36),
    Cb(90.6, 90.8, 90.0, 90.4, 35),
    Cb(90.4, 90.6, 90.2, 90.4, 32), // t2
    Cb(90.4, 92.0, 90.2, 91.8, 60),
    Cb(91.8, 93.4, 91.6, 93.2, 75),
    Cb(93.2, 95.0, 93.0, 94.8, 90),
    Cb(94.8, 96.8, 94.6, 96.6, 130), // breakout
    Cb(96.6, 98.4, 96.4, 98.2, 110),
    Cb(98.2, 99.6, 98.0, 99.4, 95)
  ],
  trough1Idx: 5,
  trough2Idx: 19,
  peakIdx: 10,
  neckline: 96.4,
  breakoutIdx: 23,
  breakoutPrice: 96.6
};

// ============================================================
// EXAMPLE 11 — TIME-DECAY (STALE, FAILS)
// ============================================================
const EX11 = {
  n: 11,
  title: 'Time-Decay Double Bottom (Stale)',
  caption: 'Troughs 50+ candles apart. The break finally comes but follow-through is weak — price drifts a few ticks above and reverses back into the range. Stale patterns fail. If the second trough takes more than ~60 minutes to form on a 2-min chart, skip — the imbalance has been resolved by time and other traders. Move on.',
  failed: true,
  failIdx: 24,
  failReason: 'Stale — no follow-through',
  candles: [
    Cb(100.0, 100.4, 99.6, 100.2, 30),
    Cb(100.2, 100.4, 98.4, 98.6, 60),
    Cb(98.6, 98.8, 96.6, 96.8, 65),
    Cb(96.8, 97.0, 94.8, 95.0, 75),
    Cb(95.0, 95.2, 93.2, 93.4, 80),
    Cb(93.4, 93.6, 91.6, 91.8, 85),
    Cb(91.8, 92.0, 90.0, 90.2, 95), // t1
    Cb(90.2, 91.6, 90.0, 91.4, 80),
    Cb(91.4, 92.6, 91.2, 92.4, 70),
    Cb(92.4, 93.4, 92.2, 93.2, 60),
    Cb(93.2, 94.0, 93.0, 93.8, 55),
    Cb(93.8, 94.6, 93.6, 94.4, 48),
    Cb(94.4, 95.0, 94.2, 94.8, 42), // peak (low)
    Cb(94.8, 94.9, 94.0, 94.2, 40),
    Cb(94.2, 94.3, 93.4, 93.6, 38),
    Cb(93.6, 93.7, 92.8, 93.0, 36),
    Cb(93.0, 93.1, 92.2, 92.4, 35),
    Cb(92.4, 92.5, 91.6, 91.8, 33),
    Cb(91.8, 91.9, 91.0, 91.2, 32),
    Cb(91.2, 91.3, 90.6, 90.8, 30),
    Cb(90.8, 90.9, 90.4, 90.6, 28),
    Cb(90.6, 90.7, 90.2, 90.4, 25),
    Cb(90.4, 90.6, 90.2, 90.4, 22), // t2 (very late)
    Cb(90.4, 91.6, 90.2, 91.4, 30),
    Cb(91.4, 95.2, 91.2, 95.0, 70), // weak break
    Cb(95.0, 95.2, 93.6, 93.8, 35),
    Cb(93.8, 93.9, 92.0, 92.2, 50),
    Cb(92.2, 92.4, 90.6, 90.8, 60)
  ],
  trough1Idx: 6,
  trough2Idx: 22,
  peakIdx: 12,
  neckline: 94.8
};

// ============================================================
// EXAMPLE 12 — OPENING-RANGE (COMMON IN YOUR WINDOW)
// ============================================================
const EX12 = {
  n: 12,
  title: 'Opening Range Double Bottom (Common in Your Window)',
  caption: 'First trough at ~9:45 ET during the opening drive selloff. Second trough at ~10:30 ET — squarely in your 10:15-12:00 trade window. Neckline at the morning high. When the morning low gets tested twice in your window with declining volume on the second test, this is one of the cleanest setups available. Take it.',
  timeMarkers: [
    { idx: 4, label: '9:45' },
    { idx: 13, label: '10:30' }
  ],
  candles: [
    Cb(2510.0, 2510.6, 2509.4, 2510.0, 30), // ~9:30 open
    Cb(2510.0, 2510.2, 2507.6, 2507.8, 100),
    Cb(2507.8, 2508.0, 2505.4, 2505.6, 110),
    Cb(2505.6, 2505.8, 2503.0, 2503.2, 120),
    Cb(2503.2, 2503.4, 2500.6, 2500.8, 130), // t1 — opening drive low
    Cb(2500.8, 2502.4, 2500.6, 2502.2, 100),
    Cb(2502.2, 2503.8, 2502.0, 2503.6, 85),
    Cb(2503.6, 2505.0, 2503.4, 2504.8, 75),
    Cb(2504.8, 2506.0, 2504.6, 2505.6, 65), // peak — morning high
    Cb(2505.6, 2505.8, 2504.0, 2504.2, 55),
    Cb(2504.2, 2504.4, 2502.6, 2502.8, 50),
    Cb(2502.8, 2503.0, 2501.4, 2501.6, 48),
    Cb(2501.6, 2501.8, 2500.8, 2501.0, 45),
    Cb(2501.0, 2501.2, 2500.6, 2500.8, 42), // t2 ~ 10:30 — declining vol
    Cb(2500.8, 2502.6, 2500.6, 2502.4, 70),
    Cb(2502.4, 2504.2, 2502.2, 2504.0, 90),
    Cb(2504.0, 2506.2, 2503.8, 2506.0, 130), // break
    Cb(2506.0, 2507.8, 2505.8, 2507.6, 115),
    Cb(2507.6, 2509.0, 2507.4, 2508.8, 95)
  ],
  trough1Idx: 4,
  trough2Idx: 13,
  peakIdx: 8,
  neckline: 2505.6,
  breakoutIdx: 16,
  breakoutPrice: 2506.0
};

const EXAMPLES = [...EXAMPLES_FIRST_HALF, EX7, EX8, EX9, EX10, EX11, EX12];
