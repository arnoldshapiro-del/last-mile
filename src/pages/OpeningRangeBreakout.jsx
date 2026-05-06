import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// ================================================================
// COLOR CONSTANTS
// ================================================================
const C_BULL = '#10b981';     // bullish green
const C_BEAR = '#FF3D5A';     // bearish red
const C_RANGE = '#06b6d4';    // cyan range lines
const C_BREAK = '#f97316';    // orange breakout marker
const C_ENTRY = '#10b981';    // entry green
const C_STOP = '#ef4444';     // stop red
const C_TARGET = '#f59e0b';   // target amber
const C_LABEL = '#e8e8e8';    // white label

// ================================================================
// ROOT
// ================================================================
export default function OpeningRangeBreakout() {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      <Header />
      <Section1Plain />
      <Section2ThreeParts />
      <Section2_5DrawingGuide />
      <Section3RangeLength />
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

// ================================================================
// HEADER
// ================================================================
function Header() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Link to="/" className="text-muted hover:text-text">←</Link>
        <div className="label">Setup Lab</div>
      </div>
      <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-3">Opening Range Breakout</h1>
      <p className="text-text/80 text-lg max-w-3xl leading-relaxed mb-3">
        The 9:30-9:45 ET range becomes the day's pivot. Twelve large worked examples,
        a step-by-step drawing guide, decision tree, and measured-move calculator.
      </p>
      <div className="card-tight border-green/40 bg-green/[0.04] max-w-3xl">
        <p className="text-green leading-relaxed">
          <span className="font-display font-semibold">This is YOUR pattern.</span> The range forms before
          your 10:15-12:00 ET window opens. The breakouts trigger inside it. ORB is the most precisely
          calibrated setup for your trading discipline.
        </p>
      </div>
    </div>
  );
}

// ================================================================
// SECTION 1 — PLAIN LANGUAGE
// ================================================================
function Section1Plain() {
  return (
    <SectionShell n={1} title="What an Opening Range Breakout Actually Is (Plain Language)">
      <p className="mb-4">
        When the regular trading session opens at 9:30 AM ET, big institutional buyers and sellers fight
        to establish where price should be for the day. They push price up and down, hunting for liquidity.
        After roughly 15-30 minutes, the highest price reached is the <span className="font-semibold" style={{color: C_RANGE}}>RANGE HIGH</span> and
        the lowest price reached is the <span className="font-semibold" style={{color: C_RANGE}}>RANGE LOW</span>. These two levels become the most
        important horizontal lines on your chart for the rest of the morning.
      </p>
      <p className="mb-4">
        As long as price stays inside the range (between the high and low), the market is undecided.
        When price breaks <span className="text-green font-semibold">ABOVE</span> the range high with a candle close, buyers have won — that's
        a long signal. When price breaks <span className="text-red font-semibold">BELOW</span> the range low with a candle close, sellers
        have won — that's a short signal.
      </p>
      <p>
        The expected move equals the height of the range projected from the breakout. If the range is 30 points
        tall and price breaks above the high, you target 30 points above the breakout. This pattern is uniquely
        powerful for your trade window because the range forms before 10:15, and the breakouts typically happen
        in your 10:15-12:00 window. <span className="text-green font-semibold">This is YOUR pattern.</span>
      </p>
    </SectionShell>
  );
}

// ================================================================
// SECTION 2 — THE THREE PARTS (large annotated SVG)
// ================================================================
function Section2ThreeParts() {
  return (
    <SectionShell n={2} title="The Three Parts">
      <p className="mb-5">A textbook opening range breakout, fully labeled. The range high and range low are the focal points. Everything else flows from them.</p>
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <ThreePartsSVG />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        <Tile color="cyan" title="1. Range Forms (first 15 min)" body="9:30-9:45 ET. Big players fight. Mark the highest wick (range high) and lowest wick (range low)." />
        <Tile color="amber" title="2. Break Above = Long" body="A 2-minute candle CLOSES above the range high. Buyers win. Enter on the close." />
        <Tile color="green" title="3. Target = Range Height" body="Project the height of the range from the breakout. That's your measured-move target." />
      </div>
    </SectionShell>
  );
}

function ThreePartsSVG() {
  const W = 1200, H = 600;
  const chartL = 60, chartT = 40, chartR = 1140, chartB = 540;
  // Range: 9:30-9:45 (3 candles at 5-min, but we'll use 2-min: candles 0-7 are 9:30-9:44)
  // For visual clarity at 1200px, we'll use 24 candles of 2-min spacing
  const candles = [
    // 9:30-9:44 RANGE FORMATION (8 candles, 2-min each)
    { o: 22030, h: 22045, l: 22025, c: 22042, vol: 95 },   // 9:30
    { o: 22042, h: 22048, l: 22035, c: 22038, vol: 88 },   // 9:32
    { o: 22038, h: 22044, l: 22022, c: 22025, vol: 92 },   // 9:34
    { o: 22025, h: 22040, l: 22021, c: 22037, vol: 80 },   // 9:36
    { o: 22037, h: 22050, l: 22034, c: 22048, vol: 75 },   // 9:38
    { o: 22048, h: 22050, l: 22030, c: 22033, vol: 70 },   // 9:40
    { o: 22033, h: 22042, l: 22023, c: 22040, vol: 65 },   // 9:42
    { o: 22040, h: 22046, l: 22035, c: 22041, vol: 60 },   // 9:44
    // 9:46-10:14 BUILD-UP (price chops inside range)
    { o: 22041, h: 22046, l: 22034, c: 22036, vol: 55 },
    { o: 22036, h: 22042, l: 22028, c: 22030, vol: 50 },
    { o: 22030, h: 22038, l: 22027, c: 22037, vol: 48 },
    { o: 22037, h: 22044, l: 22032, c: 22042, vol: 45 },
    { o: 22042, h: 22048, l: 22038, c: 22044, vol: 42 },
    { o: 22044, h: 22049, l: 22039, c: 22041, vol: 40 },
    // 10:14 BREAKOUT
    { o: 22041, h: 22068, l: 22040, c: 22065, vol: 130 },  // breakout above 22050
    // 10:16-10:30 CONTINUATION
    { o: 22065, h: 22074, l: 22062, c: 22072, vol: 95 },
    { o: 22072, h: 22082, l: 22068, c: 22080, vol: 88 },   // hits target 22080
    { o: 22080, h: 22084, l: 22075, c: 22078, vol: 70 },
  ];
  const rangeHigh = 22050;
  const rangeLow = 22020;
  const rangeHeight = rangeHigh - rangeLow;
  const breakoutPrice = 22050;
  const target = breakoutPrice + rangeHeight; // 22080
  const breakoutIdx = 14;

  const allHigh = Math.max(...candles.map(c => c.h), target + 5);
  const allLow = Math.min(...candles.map(c => c.l), rangeLow - 5);
  const yMax = allHigh + 3;
  const yMin = allLow - 3;
  const yRange = yMax - yMin;

  const innerW = chartR - chartL;
  const innerH = chartB - chartT;
  const slot = innerW / candles.length;
  const bodyW = Math.max(8, slot * 0.62);
  const xFor = i => chartL + i * slot + slot / 2;
  const yFor = price => chartT + ((yMax - price) / yRange) * innerH;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block rounded-xl border border-border w-full h-auto"
      style={{ background: '#0a0a0a', minWidth: '900px' }}>
      {/* Title */}
      <text x={W / 2} y={24} fill={C_BULL} fontSize={14} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">
        OPENING RANGE BREAKOUT — THE THREE PARTS
      </text>

      {/* Grid */}
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={chartL} x2={chartR} y1={chartT + innerH * t} y2={chartT + innerH * t}
          stroke="#262626" strokeWidth={1} />
      ))}

      {/* Range formation tinted box (candles 0-7, 9:30-9:44) */}
      <rect x={xFor(0) - slot / 2} y={chartT}
        width={(8) * slot} height={chartB - chartT}
        fill="rgba(6, 182, 212, 0.08)" stroke={C_RANGE} strokeWidth={1} strokeDasharray="3 3" opacity={0.85} />
      <text x={xFor(3.5)} y={chartT + 18} fill={C_RANGE} fontSize={12} textAnchor="middle"
        fontFamily="'Space Mono', monospace" fontWeight="bold">1. RANGE FORMS (first 15 min)</text>

      {/* Range HIGH solid 4px cyan */}
      <line x1={chartL} y1={yFor(rangeHigh)} x2={chartR} y2={yFor(rangeHigh)}
        stroke={C_RANGE} strokeWidth={4} />
      <circle cx={chartL + 8} cy={yFor(rangeHigh)} r={11} fill={C_BULL} stroke="#000" strokeWidth={2} />
      <text x={chartL + 8} y={yFor(rangeHigh) + 4.5} fill="#000" fontSize={13} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">A</text>
      <text x={chartL + 26} y={yFor(rangeHigh) - 6} fill={C_RANGE} fontSize={13} fontWeight="bold"
        fontFamily="'Space Mono', monospace">Range High @ {rangeHigh}</text>

      {/* Range LOW solid 4px cyan */}
      <line x1={chartL} y1={yFor(rangeLow)} x2={chartR} y2={yFor(rangeLow)}
        stroke={C_RANGE} strokeWidth={4} />
      <circle cx={chartL + 8} cy={yFor(rangeLow)} r={11} fill={C_BULL} stroke="#000" strokeWidth={2} />
      <text x={chartL + 8} y={yFor(rangeLow) + 4.5} fill="#000" fontSize={13} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">B</text>
      <text x={chartL + 26} y={yFor(rangeLow) + 18} fill={C_RANGE} fontSize={13} fontWeight="bold"
        fontFamily="'Space Mono', monospace">Range Low @ {rangeLow}</text>

      {/* Range height arrow */}
      <line x1={chartR - 30} x2={chartR - 30} y1={yFor(rangeHigh)} y2={yFor(rangeLow)}
        stroke={C_RANGE} strokeWidth={1.5} markerStart="url(#arrowdown)" markerEnd="url(#arrowup)" />
      <text x={chartR - 38} y={yFor((rangeHigh + rangeLow) / 2) + 4} fill={C_RANGE}
        fontSize={11} fontFamily="'Space Mono', monospace" textAnchor="end" fontWeight="bold">
        height = {rangeHeight}
      </text>

      {/* Candles */}
      {candles.map((c, i) => {
        const x = xFor(i);
        const isUp = c.c >= c.o;
        const color = isUp ? C_BULL : C_BEAR;
        const yO = yFor(c.o), yC = yFor(c.c), yH = yFor(c.h), yL = yFor(c.l);
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={yH} y2={yL} stroke={color} strokeWidth={1.5} />
            <rect x={x - bodyW / 2} y={Math.min(yO, yC)} width={bodyW}
              height={Math.max(2, Math.abs(yC - yO))} fill={color} />
          </g>
        );
      })}

      {/* Breakout arrow above breakout candle */}
      <line x1={xFor(breakoutIdx)} y1={yFor(rangeHigh) - 60}
        x2={xFor(breakoutIdx)} y2={yFor(rangeHigh) - 12}
        stroke={C_BREAK} strokeWidth={3} />
      <polygon points={`${xFor(breakoutIdx)},${yFor(rangeHigh) - 8}
        ${xFor(breakoutIdx) - 8},${yFor(rangeHigh) - 22}
        ${xFor(breakoutIdx) + 8},${yFor(rangeHigh) - 22}`}
        fill={C_BREAK} />
      <text x={xFor(breakoutIdx)} y={yFor(rangeHigh) - 70} fill={C_BREAK}
        fontSize={12} fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="middle">
        2. BREAK ABOVE = LONG
      </text>

      {/* Target line — soft amber dashed */}
      <line x1={chartL} y1={yFor(target)} x2={chartR} y2={yFor(target)}
        stroke={C_TARGET} strokeWidth={2.5} strokeDasharray="8 4" opacity={0.9} />
      <text x={chartR - 8} y={yFor(target) - 6} fill={C_TARGET}
        fontSize={12} fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="end">
        3. TARGET @ {target} (range height projected)
      </text>

      {/* Stop line (red dashed below breakout) */}
      <line x1={xFor(breakoutIdx) - slot} y1={yFor(rangeLow + 2)}
        x2={chartR - 200} y2={yFor(rangeLow + 2)}
        stroke={C_STOP} strokeWidth={1.8} strokeDasharray="6 4" opacity={0.7} />
      <text x={xFor(breakoutIdx) - slot} y={yFor(rangeLow + 2) + 14} fill={C_STOP}
        fontSize={11} fontFamily="'Space Mono', monospace">
        STOP @ range low side
      </text>

      {/* Time markers below candles */}
      <line x1={chartL} y1={chartB + 8} x2={chartR} y2={chartB + 8} stroke="#262626" />
      {[
        { i: 0, t: '9:30' },
        { i: 7, t: '9:44' },
        { i: 14, t: '10:14' },
        { i: 17, t: '10:20' }
      ].map((m, i) => (
        <g key={i}>
          <line x1={xFor(m.i)} x2={xFor(m.i)} y1={chartB} y2={chartB + 14} stroke="#666" />
          <text x={xFor(m.i)} y={chartB + 28} fill="#aaa" fontSize={11} textAnchor="middle"
            fontFamily="'Space Mono', monospace">{m.t}</text>
        </g>
      ))}
      <text x={xFor(3.5)} y={chartB + 46} fill={C_RANGE} fontSize={11} textAnchor="middle"
        fontFamily="'Space Mono', monospace" fontWeight="bold">range close</text>
      <text x={xFor(14)} y={chartB + 46} fill={C_BREAK} fontSize={11} textAnchor="middle"
        fontFamily="'Space Mono', monospace" fontWeight="bold">your window opens</text>
    </svg>
  );
}

// ================================================================
// PLACEHOLDER SECTIONS — INJECTED VIA EDIT BELOW
// ================================================================
// ================================================================
// SECTION 2.5 — HOW TO DRAW THE OPENING RANGE
// ================================================================
function Section2_5DrawingGuide() {
  return (
    <SectionShell n="2.5" title="How to Draw the Opening Range (Step by Step)">
      <p className="mb-5">
        Five numbered steps. Master these and you can mark up any 2-minute chart in seconds — and avoid the two biggest entry mistakes.
      </p>
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <DrawingGuideSVG />
      </div>
      <div className="mt-5 card border-green/40 bg-green/[0.04]">
        <div className="font-display font-semibold text-green mb-3">Plain-language summary</div>
        <ol className="space-y-1.5 text-text/90 leading-relaxed">
          <li><span className="text-green num">1.</span> Mark the 9:30 AM candle (start of opening range).</li>
          <li><span className="text-green num">2.</span> Mark the 9:45 AM candle (end of opening range — 15 minutes later).</li>
          <li><span className="text-green num">3.</span> Draw the RANGE HIGH at the highest price (including wicks) reached between those markers.</li>
          <li><span className="text-green num">4.</span> Draw the RANGE LOW at the lowest price reached.</li>
          <li><span className="text-green num">5.</span> Long when a 2-min candle CLOSES above the high. Short when it closes below the low.</li>
          <li className="text-text/70 pt-2 italic">Target = range height projected from the breakout.</li>
        </ol>
      </div>
    </SectionShell>
  );
}

function DrawingGuideSVG() {
  const W = 1200, H = 600;
  const chartL = 30, chartT = 30, chartR = 720, chartB = 540;
  const capX = 750;
  // 12 candles: 0-7 are the 9:30-9:44 range, 8-11 are post-range with breakout
  const candles = [
    { o: 22030, h: 22045, l: 22025, c: 22042 },   // 9:30 — first candle
    { o: 22042, h: 22048, l: 22035, c: 22038 },
    { o: 22038, h: 22044, l: 22022, c: 22025 },   // touches range low
    { o: 22025, h: 22040, l: 22021, c: 22037 },
    { o: 22037, h: 22050, l: 22034, c: 22048 },   // touches range high
    { o: 22048, h: 22050, l: 22030, c: 22033 },
    { o: 22033, h: 22042, l: 22023, c: 22040 },
    { o: 22040, h: 22046, l: 22035, c: 22041 },   // 9:44 — last candle of range
    // post-range
    { o: 22041, h: 22046, l: 22034, c: 22036 },
    { o: 22036, h: 22042, l: 22028, c: 22033 },
    { o: 22033, h: 22045, l: 22032, c: 22043 },
    { o: 22043, h: 22064, l: 22041, c: 22062 },   // BREAKOUT candle
  ];
  const rangeHigh = 22050;
  const rangeLow = 22021;
  const minP = Math.min(...candles.map(c => c.l)) - 4;
  const maxP = Math.max(...candles.map(c => c.h)) + 6;
  const innerW = chartR - chartL;
  const innerH = chartB - chartT;
  const slot = innerW / candles.length;
  const bodyW = Math.max(8, slot * 0.6);
  const xFor = i => chartL + i * slot + slot / 2;
  const yFor = price => chartT + ((maxP - price) / (maxP - minP)) * innerH;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block rounded-xl border border-border w-full h-auto"
      style={{ background: '#0a0a0a', minWidth: '880px' }}>
      <text x={W / 2} y={20} fill={C_BULL} fontSize={14} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">
        OPENING RANGE — 5 STEPS
      </text>
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={chartL} x2={chartR} y1={chartT + innerH * t} y2={chartT + innerH * t} stroke="#262626" strokeWidth={1} />
      ))}

      {/* Tinted range box (candles 0-7) */}
      <rect x={xFor(0) - slot / 2} y={chartT}
        width={8 * slot} height={chartB - chartT}
        fill="rgba(6, 182, 212, 0.07)" stroke={C_RANGE} strokeWidth={1} strokeDasharray="3 3" opacity={0.7} />
      <text x={xFor(3.5)} y={chartT + 14} fill={C_RANGE} fontSize={10} textAnchor="middle"
        fontFamily="'Space Mono', monospace" fontWeight="bold">9:30 - 9:44 RANGE</text>

      {/* Candles */}
      {candles.map((c, i) => {
        const x = xFor(i);
        const isUp = c.c >= c.o;
        const color = isUp ? C_BULL : C_BEAR;
        const yO = yFor(c.o), yC = yFor(c.c), yH = yFor(c.h), yL = yFor(c.l);
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={yH} y2={yL} stroke={color} strokeWidth={1.5} />
            <rect x={x - bodyW / 2} y={Math.min(yO, yC)} width={bodyW}
              height={Math.max(2, Math.abs(yC - yO))} fill={color} />
          </g>
        );
      })}

      {/* RANGE HIGH solid 4px cyan with marker 3 */}
      <line x1={xFor(0) - slot / 2} y1={yFor(rangeHigh)} x2={chartR} y2={yFor(rangeHigh)}
        stroke={C_RANGE} strokeWidth={4} />
      {/* RANGE LOW solid 4px cyan with marker 4 */}
      <line x1={xFor(0) - slot / 2} y1={yFor(rangeLow)} x2={chartR} y2={yFor(rangeLow)}
        stroke={C_RANGE} strokeWidth={4} />

      {/* Marker 1 — at 9:30 candle */}
      <NumCircle x={xFor(0)} y={yFor(candles[0].l) + 28} n="1" color={C_BULL} />

      {/* Marker 2 — at 9:44 candle (last of range) */}
      <NumCircle x={xFor(7)} y={yFor(candles[7].l) + 28} n="2" color={C_BULL} />

      {/* Marker 3 — on RANGE HIGH line */}
      <NumCircle x={xFor(11) + 25} y={yFor(rangeHigh)} n="3" color={C_RANGE} />
      <text x={xFor(11) + 42} y={yFor(rangeHigh) - 6} fill={C_RANGE} fontSize={11}
        fontFamily="'Space Mono', monospace" fontWeight="bold">RANGE HIGH</text>

      {/* Marker 4 — on RANGE LOW line */}
      <NumCircle x={xFor(11) + 25} y={yFor(rangeLow)} n="4" color={C_RANGE} />
      <text x={xFor(11) + 42} y={yFor(rangeLow) + 16} fill={C_RANGE} fontSize={11}
        fontFamily="'Space Mono', monospace" fontWeight="bold">RANGE LOW</text>

      {/* Marker 5 — orange arrow at breakout (candle 11) */}
      <line x1={xFor(11)} y1={yFor(rangeHigh) - 80} x2={xFor(11)} y2={yFor(rangeHigh) - 12}
        stroke={C_BREAK} strokeWidth={3} />
      <polygon points={`${xFor(11)},${yFor(rangeHigh) - 8}
        ${xFor(11) - 7},${yFor(rangeHigh) - 22}
        ${xFor(11) + 7},${yFor(rangeHigh) - 22}`}
        fill={C_BREAK} />
      <NumCircle x={xFor(11)} y={yFor(rangeHigh) - 95} n="5" color={C_BREAK} />

      {/* Divider */}
      <line x1={chartR + 8} y1={chartT} x2={chartR + 8} y2={chartB} stroke="#262626" strokeWidth={1} />

      {/* Captions */}
      <CaptionBlock x={capX} y={40} num={1} color={C_BULL}
        title="Mark the 9:30 AM candle"
        body="The candle that opened the regular session. This is the start of your opening range." />
      <CaptionBlock x={capX} y={140} num={2} color={C_BULL}
        title="Mark the 9:45 AM candle"
        body="15 minutes later. Everything between markers 1 and 2 is your opening range." />
      <CaptionBlock x={capX} y={240} num={3} color={C_RANGE}
        title="Draw the RANGE HIGH"
        body="Highest price reached during the 15 min — including wicks. Horizontal line, extend right past the most recent candle." />
      <CaptionBlock x={capX} y={350} num={4} color={C_RANGE}
        title="Draw the RANGE LOW"
        body="Lowest price reached during the 15 min — including wicks. Horizontal line, extend right." />
      <CaptionBlock x={capX} y={460} num={5} color={C_BREAK}
        title="Wait for a body close"
        body="A 2-min candle closes above the high (long) or below the low (short). Body close — not a wick poke." />
    </svg>
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
// ================================================================
// SECTION 3 — WHICH RANGE LENGTH?
// ================================================================
function Section3RangeLength() {
  const rows = [
    { tf: '5-min (9:30-9:35)',   when: 'Strong trend days',           tradeoff: 'Many false breakouts, narrow range' },
    { tf: '15-min (9:30-9:45)',  when: 'RECOMMENDED for 2-min scalp', tradeoff: 'Balanced reliability and tradeable size', highlight: true },
    { tf: '30-min (9:30-10:00)', when: 'Slower, more choppy days',    tradeoff: 'Larger range = bigger target, but breakout often after your window opens' },
    { tf: '60-min (9:30-10:30)', when: 'Wider context',               tradeoff: 'Range too wide for scalping targets' }
  ];
  return (
    <SectionShell n={3} title="Which Range Length? (Comparison Table)">
      <p className="mb-5">Different traders use different opening-range lengths. For your 2-min scalping, only one is right.</p>
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-sm border-collapse">
          <thead>
            <tr className="text-left text-muted uppercase tracking-wider text-xs">
              <th className="py-2 px-3 border-b border-border">Range Window</th>
              <th className="py-2 px-3 border-b border-border">When it works</th>
              <th className="py-2 px-3 border-b border-border">Tradeoff</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={r.highlight ? 'bg-green/10 border-l-4 border-green' : ''}>
                <td className={`py-2 px-3 border-b border-border ${r.highlight ? 'text-green font-bold' : ''}`}>{r.tf}</td>
                <td className="py-2 px-3 border-b border-border">{r.when}</td>
                <td className="py-2 px-3 border-b border-border">{r.tradeoff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 card-tight border-green/40 bg-green/5">
        <p className="text-green font-display font-bold text-base md:text-lg leading-relaxed">
          For your 2-min scalping in the 10:15-12:00 ET window, the 15-minute opening range is the standard.
          The range is set by 9:45 ET, leaving 30 minutes for setups to develop before your window opens.
          Most ORB breakouts in your window come from this 15-minute range.
        </p>
      </div>
    </SectionShell>
  );
}
// ================================================================
// SECTION 4 — TWELVE LARGE EXAMPLES
// ================================================================
function Section4Gallery() {
  return (
    <SectionShell n={4} title="Twelve Large Examples — Each with Range Lines Drawn Explicitly">
      <p className="mb-6">Each example is its own exhibit. The chart, then a short caption explaining what to learn from it. Read both. Range high and range low are the focal points of every chart.</p>
      <div className="space-y-8">
        {ORB_EXAMPLES.map((ex) => (
          <Exhibit key={ex.n} ex={ex} />
        ))}
      </div>
    </SectionShell>
  );
}

function Exhibit({ ex }) {
  return (
    <div className="card border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-green/20 text-green border border-green/40 flex items-center justify-center font-display font-bold text-lg shrink-0">
          {ex.n}
        </div>
        <h3 className="font-display font-semibold text-xl md:text-2xl">{ex.title}</h3>
      </div>
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <ORBChart ex={ex} />
      </div>
      <p className="mt-4 leading-relaxed text-text/90 max-w-4xl">{ex.caption}</p>
    </div>
  );
}

// Reusable ORB chart renderer — each example provides candles, range, breakout idx/type, etc.
function ORBChart({ ex }) {
  const W = 1200, H = 540;
  const padL = 60, padR = 60, padT = 40, padB = 60;
  const volH = 80;
  const chartL = padL, chartR = W - padR;
  const chartT = padT, chartB = H - padB - volH - 10;
  const candles = ex.candles;
  const rangeHigh = ex.rangeHigh;
  const rangeLow = ex.rangeLow;
  const rangeHeight = rangeHigh - rangeLow;
  const allHigh = Math.max(...candles.map(c => c.h), ex.targetPrice ?? -Infinity);
  const allLow = Math.min(...candles.map(c => c.l), ex.targetPrice ?? Infinity);
  const yMax = allHigh + rangeHeight * 0.15;
  const yMin = allLow - rangeHeight * 0.15;
  const yRange = yMax - yMin;
  const innerW = chartR - chartL;
  const innerH = chartB - chartT;
  const slot = innerW / candles.length;
  const bodyW = Math.max(7, slot * 0.62);
  const xFor = i => chartL + i * slot + slot / 2;
  const yFor = price => chartT + ((yMax - price) / yRange) * innerH;
  const maxVol = Math.max(...candles.map(c => c.vol || 0), 1);
  const volTop = chartB + 16;
  const volBottom = volTop + volH;
  const yVol = v => volBottom - (v / maxVol) * volH;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block rounded-xl border border-border w-full h-auto"
      style={{ background: '#0a0a0a', minWidth: '900px' }}>
      {/* Grid */}
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={chartL} x2={chartR} y1={chartT + innerH * t} y2={chartT + innerH * t}
          stroke="#262626" strokeWidth={1} />
      ))}

      {/* Range formation tinted box */}
      <rect x={xFor(0) - slot / 2} y={chartT}
        width={ex.rangeEndIdx ? (ex.rangeEndIdx + 1) * slot : 8 * slot} height={chartB - chartT}
        fill="rgba(6, 182, 212, 0.07)" stroke={C_RANGE} strokeWidth={1} strokeDasharray="3 3" opacity={0.85} />
      <text x={xFor((ex.rangeEndIdx ?? 7) / 2)} y={chartT + 16} fill={C_RANGE} fontSize={11} textAnchor="middle"
        fontFamily="'Space Mono', monospace" fontWeight="bold">9:30 - 9:45 RANGE</text>

      {/* Range HIGH solid 4px cyan */}
      <line x1={chartL} y1={yFor(rangeHigh)} x2={chartR} y2={yFor(rangeHigh)}
        stroke={C_RANGE} strokeWidth={4} />
      <text x={chartL + 6} y={yFor(rangeHigh) - 6} fill={C_RANGE}
        fontSize={12} fontFamily="'Space Mono', monospace" fontWeight="bold">
        Range High @ {rangeHigh}
      </text>

      {/* Range LOW solid 4px cyan */}
      <line x1={chartL} y1={yFor(rangeLow)} x2={chartR} y2={yFor(rangeLow)}
        stroke={C_RANGE} strokeWidth={4} />
      <text x={chartL + 6} y={yFor(rangeLow) + 18} fill={C_RANGE}
        fontSize={12} fontFamily="'Space Mono', monospace" fontWeight="bold">
        Range Low @ {rangeLow}
      </text>

      {/* Range height arrow */}
      <line x1={chartR - 28} x2={chartR - 28} y1={yFor(rangeHigh)} y2={yFor(rangeLow)}
        stroke={C_RANGE} strokeWidth={1.5} />
      <polygon points={`${chartR - 28},${yFor(rangeHigh)} ${chartR - 32},${yFor(rangeHigh) + 8} ${chartR - 24},${yFor(rangeHigh) + 8}`} fill={C_RANGE} />
      <polygon points={`${chartR - 28},${yFor(rangeLow)} ${chartR - 32},${yFor(rangeLow) - 8} ${chartR - 24},${yFor(rangeLow) - 8}`} fill={C_RANGE} />
      <text x={chartR - 36} y={yFor((rangeHigh + rangeLow) / 2) + 4} fill={C_RANGE}
        fontSize={11} fontFamily="'Space Mono', monospace" textAnchor="end" fontWeight="bold">
        h={rangeHeight}
      </text>

      {/* News marker line if present */}
      {ex.newsAtIndex != null && (
        <g>
          <line x1={xFor(ex.newsAtIndex)} x2={xFor(ex.newsAtIndex)}
            y1={chartT} y2={chartB} stroke="#FFB44A" strokeWidth={1.5} strokeDasharray="6 4" opacity={0.7} />
          <text x={xFor(ex.newsAtIndex)} y={chartT + 36} fill="#FFB44A" fontSize={11}
            textAnchor="middle" fontFamily="'Space Mono', monospace" fontWeight="bold">⚠ NEWS</text>
        </g>
      )}

      {/* Candles */}
      {candles.map((c, i) => {
        const x = xFor(i);
        const isUp = c.c >= c.o;
        const color = isUp ? C_BULL : C_BEAR;
        const yO = yFor(c.o), yC = yFor(c.c), yH = yFor(c.h), yL = yFor(c.l);
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={yH} y2={yL} stroke={color} strokeWidth={1.5} />
            <rect x={x - bodyW / 2} y={Math.min(yO, yC)} width={bodyW}
              height={Math.max(2, Math.abs(yC - yO))} fill={color} />
          </g>
        );
      })}

      {/* Volume bars */}
      {candles.map((c, i) => {
        if (c.vol == null) return null;
        const x = xFor(i);
        const isUp = c.c >= c.o;
        const color = isUp ? C_BULL : C_BEAR;
        const yT = yVol(c.vol);
        const isBreakout = i === ex.breakoutIdx;
        return (
          <rect key={`v${i}`} x={x - bodyW / 2} y={yT}
            width={bodyW} height={volBottom - yT}
            fill={color} opacity={isBreakout ? 0.95 : 0.45} />
        );
      })}

      {/* Breakout marker (or failed marker) */}
      {ex.breakoutType === 'up' && ex.breakoutIdx != null && (
        <g>
          <line x1={xFor(ex.breakoutIdx)} y1={yFor(rangeHigh) - 56}
            x2={xFor(ex.breakoutIdx)} y2={yFor(rangeHigh) - 12}
            stroke={C_BREAK} strokeWidth={3} />
          <polygon points={`${xFor(ex.breakoutIdx)},${yFor(rangeHigh) - 8}
            ${xFor(ex.breakoutIdx) - 7},${yFor(rangeHigh) - 22}
            ${xFor(ex.breakoutIdx) + 7},${yFor(rangeHigh) - 22}`}
            fill={C_BREAK} />
          <text x={xFor(ex.breakoutIdx)} y={yFor(rangeHigh) - 64} fill={C_BREAK}
            fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="middle">
            {ex.breakLabel || 'BREAK — body close above'}
          </text>
        </g>
      )}
      {ex.breakoutType === 'down' && ex.breakoutIdx != null && (
        <g>
          <line x1={xFor(ex.breakoutIdx)} y1={yFor(rangeLow) + 56}
            x2={xFor(ex.breakoutIdx)} y2={yFor(rangeLow) + 12}
            stroke={C_BREAK} strokeWidth={3} />
          <polygon points={`${xFor(ex.breakoutIdx)},${yFor(rangeLow) + 8}
            ${xFor(ex.breakoutIdx) - 7},${yFor(rangeLow) + 22}
            ${xFor(ex.breakoutIdx) + 7},${yFor(rangeLow) + 22}`}
            fill={C_BREAK} />
          <text x={xFor(ex.breakoutIdx)} y={yFor(rangeLow) + 70} fill={C_BREAK}
            fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="middle">
            {ex.breakLabel || 'BREAK — body close below'}
          </text>
        </g>
      )}

      {/* Failed marker */}
      {ex.failed && ex.failedIdx != null && (
        <g transform={`translate(${xFor(ex.failedIdx)},${yFor(ex.failedPrice)})`}>
          <g stroke={C_STOP} strokeWidth={4} strokeLinecap="round" opacity={0.9}>
            <line x1={-14} y1={-14} x2={14} y2={14} />
            <line x1={14} y1={-14} x2={-14} y2={14} />
          </g>
          <text x={20} y={-14} fill={C_STOP} fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">{ex.failedReason || 'FAILED'}</text>
        </g>
      )}

      {/* Retest entry markers */}
      {ex.retestIdx != null && (
        <g>
          <circle cx={xFor(ex.retestIdx)} cy={yFor(ex.retestPrice)} r={9} fill={C_RANGE} stroke="#000" strokeWidth={2} />
          <line x1={xFor(ex.breakoutIdx) + 8} y1={yFor(rangeHigh)} x2={xFor(ex.retestIdx) - 8} y2={yFor(ex.retestPrice)} stroke={C_RANGE} strokeWidth={1} strokeDasharray="3 3" opacity={0.6} />
          <text x={xFor(ex.retestIdx) + 14} y={yFor(ex.retestPrice) + 4} fill={C_RANGE}
            fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">retest entry</text>
        </g>
      )}

      {/* Tier markers (Tier 1 yellow, Tier 2 green, Tier 3 cyan) */}
      {ex.showTiers && (
        <g>
          <circle cx={xFor(ex.breakoutIdx)} cy={yFor(rangeHigh) + 6} r={7} fill="#FFB44A" stroke="#000" strokeWidth={1.5} />
          <text x={xFor(ex.breakoutIdx) - 14} y={yFor(rangeHigh) + 22} fill="#FFB44A" fontSize={10} fontFamily="'Space Mono', monospace" textAnchor="end" fontWeight="bold">T1</text>
        </g>
      )}

      {/* Target line */}
      {ex.targetPrice != null && (
        <g>
          <line x1={chartL} y1={yFor(ex.targetPrice)} x2={chartR} y2={yFor(ex.targetPrice)}
            stroke={C_TARGET} strokeWidth={2.2} strokeDasharray="8 4" opacity={0.85} />
          <text x={chartR - 8} y={yFor(ex.targetPrice) - 6} fill={C_TARGET}
            fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="end">
            TARGET @ {ex.targetPrice}
          </text>
        </g>
      )}

      {/* Stop line */}
      {ex.stopPrice != null && (
        <g>
          <line x1={chartL} y1={yFor(ex.stopPrice)} x2={chartR} y2={yFor(ex.stopPrice)}
            stroke={C_STOP} strokeWidth={1.6} strokeDasharray="6 4" opacity={0.7} />
          <text x={chartR - 8} y={yFor(ex.stopPrice) + 14} fill={C_STOP}
            fontSize={11} fontFamily="'Space Mono', monospace" textAnchor="end">
            STOP @ {ex.stopPrice}
          </text>
        </g>
      )}

      {/* Prior day high overlay (Example 8) */}
      {ex.priorDayHigh != null && (
        <g>
          <line x1={chartL} y1={yFor(ex.priorDayHigh)} x2={chartR} y2={yFor(ex.priorDayHigh)}
            stroke="#eab308" strokeWidth={1.6} strokeDasharray="3 5" opacity={0.85} />
          <text x={chartL + 8} y={yFor(ex.priorDayHigh) - 4} fill="#eab308"
            fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">
            Prior Day High
          </text>
        </g>
      )}

      {/* Time markers below candles */}
      <line x1={chartL} y1={chartB + 6} x2={chartR} y2={chartB + 6} stroke="#262626" />
      {(ex.timeMarkers || [
        { i: 0, t: '9:30' },
        { i: 7, t: '9:44' },
        { i: ex.breakoutIdx, t: ex.breakoutTime || '10:25' }
      ]).map((m, i) => m.i != null && (
        <g key={i}>
          <line x1={xFor(m.i)} x2={xFor(m.i)} y1={chartB} y2={chartB + 12} stroke="#666" />
          <text x={xFor(m.i)} y={chartB + 26} fill="#aaa" fontSize={11} textAnchor="middle"
            fontFamily="'Space Mono', monospace">{m.t}</text>
        </g>
      ))}

      {/* Volume label */}
      <text x={chartL + 6} y={volTop - 4} fill="#666" fontSize={10}
        fontFamily="'Space Mono', monospace">VOLUME</text>
    </svg>
  );
}

// ================================================================
// 12 EXAMPLES — DATA
// ================================================================
const C2 = (o, h, l, c, vol) => ({ o, h, l, c, vol });

function buildExamples() {
  // Each example: candles[{o,h,l,c,vol}], rangeHigh, rangeLow, breakoutIdx, breakoutType, etc.
  // Index 0-7 = 9:30-9:44 (range), index 14+ = post-10:14 (your window)
  return [
    ex1Textbook(),
    ex2TextbookDownside(),
    ex3HighVolume(),
    ex4Retest(),
    ex5Failed(),
    ex6Premature(),
    ex7VolumeFailure(),
    ex8Confluence(),
    ex9NarrowRange(),
    ex10WideRange(),
    ex11PreNews(),
    ex12YourWindow()
  ];
}

const ORB_EXAMPLES = buildExamples();

// EX 1 - TEXTBOOK UPSIDE
function ex1Textbook() {
  const candles = [
    // RANGE 9:30-9:44 (8 candles, 22020-22050)
    C2(22030, 22045, 22025, 22042, 95),
    C2(22042, 22048, 22035, 22038, 88),
    C2(22038, 22044, 22022, 22025, 92),
    C2(22025, 22040, 22021, 22037, 80),
    C2(22037, 22050, 22034, 22048, 75),
    C2(22048, 22050, 22030, 22033, 70),
    C2(22033, 22042, 22023, 22040, 65),
    C2(22040, 22046, 22035, 22041, 60),
    // BUILD-UP (price stays inside range)
    C2(22041, 22046, 22034, 22036, 55),
    C2(22036, 22042, 22028, 22030, 50),
    C2(22030, 22038, 22027, 22037, 48),
    C2(22037, 22044, 22032, 22042, 45),
    C2(22042, 22048, 22038, 22044, 42),
    C2(22044, 22049, 22039, 22041, 40),
    // BREAKOUT at idx 14
    C2(22041, 22064, 22040, 22062, 130),
    C2(22062, 22072, 22060, 22070, 95),
    C2(22070, 22082, 22068, 22080, 88),
    C2(22080, 22084, 22075, 22078, 70),
  ];
  return {
    n: 1, title: 'The Textbook Upside Breakout',
    candles, rangeHigh: 22050, rangeLow: 22020, breakoutIdx: 14, breakoutType: 'up',
    breakoutTime: '10:14',
    targetPrice: 22080, stopPrice: 22020,
    timeMarkers: [
      { i: 0, t: '9:30' }, { i: 7, t: '9:44' }, { i: 14, t: '10:14' }, { i: 17, t: '10:20' }
    ],
    caption: "Range forms in the first 15 minutes. Price respects the high and low for 40 minutes. Then a clean break above the high with volume. Target = range height (30) projected from breakout (22050) = 22080. This is what you want to see."
  };
}

// EX 2 - TEXTBOOK DOWNSIDE
function ex2TextbookDownside() {
  const candles = [
    C2(15870, 15885, 15865, 15882, 95),
    C2(15882, 15888, 15875, 15878, 88),
    C2(15878, 15884, 15862, 15865, 92),
    C2(15865, 15880, 15861, 15877, 80),
    C2(15877, 15890, 15874, 15888, 75),
    C2(15888, 15890, 15870, 15873, 70),
    C2(15873, 15882, 15863, 15880, 65),
    C2(15880, 15886, 15875, 15881, 60),
    C2(15881, 15886, 15874, 15876, 55),
    C2(15876, 15882, 15868, 15870, 50),
    C2(15870, 15878, 15867, 15877, 48),
    C2(15877, 15884, 15872, 15882, 45),
    C2(15882, 15888, 15878, 15884, 42),
    C2(15884, 15889, 15879, 15881, 40),
    // BREAKOUT DOWN at idx 14
    C2(15881, 15882, 15858, 15860, 130),
    C2(15860, 15863, 15850, 15852, 95),
    C2(15852, 15856, 15840, 15842, 88),
    C2(15842, 15847, 15838, 15844, 70),
  ];
  return {
    n: 2, title: 'The Textbook Downside Breakout',
    candles, rangeHigh: 15890, rangeLow: 15860, breakoutIdx: 14, breakoutType: 'down',
    breakLabel: 'BREAK — body close below',
    breakoutTime: '10:14',
    targetPrice: 15830, stopPrice: 15890,
    timeMarkers: [
      { i: 0, t: '9:30' }, { i: 7, t: '9:44' }, { i: 14, t: '10:14' }, { i: 17, t: '10:20' }
    ],
    caption: "ORB works equally well in both directions. Same mechanics: clean range, patient wait, decisive break, ride the move. Range height (30) projected DOWN from 15860 = target 15830."
  };
}

// EX 3 - HIGH VOLUME CONFIRMATION
function ex3HighVolume() {
  const candles = [
    C2(5780, 5784, 5778, 5783, 65),
    C2(5783, 5786, 5779, 5780, 58),
    C2(5780, 5783, 5775, 5776, 62),
    C2(5776, 5781, 5774, 5779, 55),
    C2(5779, 5786, 5778, 5784, 50),
    C2(5784, 5787, 5780, 5781, 45),
    C2(5781, 5784, 5775, 5783, 42),
    C2(5783, 5786, 5779, 5781, 40),
    C2(5781, 5784, 5776, 5778, 38),
    C2(5778, 5782, 5775, 5781, 35),
    C2(5781, 5785, 5778, 5784, 33),
    C2(5784, 5786, 5780, 5782, 30),
    C2(5782, 5785, 5779, 5783, 28),
    C2(5783, 5786, 5780, 5781, 26),
    // BREAKOUT — DRAMATICALLY HIGH VOLUME (3x range)
    C2(5781, 5798, 5780, 5796, 220),
    C2(5796, 5803, 5793, 5801, 110),
    C2(5801, 5808, 5799, 5806, 95),
    C2(5806, 5810, 5803, 5805, 75),
  ];
  return {
    n: 3, title: 'The High-Volume Confirmation Break',
    candles, rangeHigh: 5787, rangeLow: 5774, breakoutIdx: 14, breakoutType: 'up',
    breakLabel: 'BREAK — volume 3x range avg',
    breakoutTime: '10:14',
    targetPrice: 5800, stopPrice: 5774,
    timeMarkers: [
      { i: 0, t: '9:30' }, { i: 7, t: '9:44' }, { i: 14, t: '10:14' }, { i: 17, t: '10:20' }
    ],
    caption: "Volume on the breakout is the single best confirmation signal you have. Notice the breakout volume bar is dramatically larger than the entire range — clearly 2-3x the average. When this happens, the move is real and you can size up."
  };
}

// EX 4 - RETEST ENTRY
function ex4Retest() {
  const candles = [
    C2(22030, 22045, 22025, 22042, 90),
    C2(22042, 22048, 22035, 22038, 85),
    C2(22038, 22044, 22022, 22025, 88),
    C2(22025, 22040, 22021, 22037, 80),
    C2(22037, 22050, 22034, 22048, 72),
    C2(22048, 22050, 22030, 22033, 68),
    C2(22033, 22042, 22023, 22040, 60),
    C2(22040, 22046, 22035, 22041, 55),
    C2(22041, 22046, 22034, 22036, 50),
    C2(22036, 22042, 22028, 22030, 48),
    C2(22030, 22038, 22027, 22037, 45),
    // BREAK at 11
    C2(22037, 22062, 22036, 22060, 125),
    // pullback toward range high
    C2(22060, 22063, 22052, 22054, 80),
    C2(22054, 22056, 22050, 22052, 75),
    // RETEST at 14 — bounces off 22050
    C2(22052, 22058, 22050, 22057, 110),
    C2(22057, 22068, 22055, 22066, 95),
    C2(22066, 22082, 22064, 22080, 90),
    C2(22080, 22084, 22075, 22078, 70),
  ];
  return {
    n: 4, title: 'The Retest Entry (Highest Probability)',
    candles, rangeHigh: 22050, rangeLow: 22020, breakoutIdx: 11, breakoutType: 'up',
    breakLabel: 'INITIAL BREAK',
    retestIdx: 14, retestPrice: 22052,
    showTiers: true,
    breakoutTime: '10:08',
    targetPrice: 22080, stopPrice: 22045,
    timeMarkers: [
      { i: 0, t: '9:30' }, { i: 7, t: '9:44' }, { i: 11, t: '10:08' }, { i: 14, t: '10:14' }, { i: 17, t: '10:20' }
    ],
    caption: "Broken resistance becomes support. The retest entry has the highest win rate because the market is offering you the trade twice — once on the break, once on the bounce. Three entry tiers shown: T1 (initial break, yellow), implied T2 (confirmation candle), T3 (retest bounce, cyan). Tight stop below the retest wick. This is the A+ entry."
  };
}

// EX 5 - FAILED BREAKOUT (FAKEOUT)
function ex5Failed() {
  const candles = [
    C2(22030, 22045, 22025, 22042, 90),
    C2(22042, 22048, 22035, 22038, 85),
    C2(22038, 22044, 22022, 22025, 88),
    C2(22025, 22040, 22021, 22037, 80),
    C2(22037, 22050, 22034, 22048, 72),
    C2(22048, 22050, 22030, 22033, 68),
    C2(22033, 22042, 22023, 22040, 60),
    C2(22040, 22046, 22035, 22041, 55),
    C2(22041, 22046, 22034, 22036, 50),
    C2(22036, 22042, 22028, 22030, 48),
    C2(22030, 22038, 22027, 22037, 45),
    C2(22037, 22050, 22035, 22045, 50),
    C2(22045, 22049, 22041, 22047, 45),
    C2(22047, 22052, 22045, 22049, 48),
    // FAKE BREAKOUT — wicks above 22050 but closes back below
    C2(22049, 22055, 22048, 22049, 60),
    // Reverses back into range
    C2(22049, 22050, 22041, 22042, 70),
    C2(22042, 22045, 22035, 22037, 80),
    C2(22037, 22039, 22022, 22025, 95),
    // breaks LOW instead
    C2(22025, 22027, 22012, 22015, 130),
  ];
  return {
    n: 5, title: 'The FAILED Breakout (Fakeout / Reversal)',
    candles, rangeHigh: 22050, rangeLow: 22020,
    breakoutIdx: 18, breakoutType: 'down',
    breakLabel: 'REAL break the OTHER way',
    failed: true, failedIdx: 14, failedPrice: 22055, failedReason: 'FAKEOUT — closes back inside',
    breakoutTime: '10:26',
    timeMarkers: [
      { i: 0, t: '9:30' }, { i: 7, t: '9:44' }, { i: 14, t: '10:14' }, { i: 18, t: '10:26' }
    ],
    caption: "The 'fakeout' is the trader's nightmare AND opportunity. A breakout that fails and reverses often produces a strong move in the OPPOSITE direction — trapped longs become forced sellers. If the candle after the breakout closes back inside the range, the breakout failed. Watch for the opposite-direction setup."
  };
}

// EX 6 - PREMATURE ENTRY
function ex6Premature() {
  const candles = [
    C2(22030, 22045, 22025, 22042, 90),
    C2(22042, 22048, 22035, 22038, 85),
    // Trader enters long at idx 2 INSIDE the range — fail
    C2(22038, 22044, 22022, 22025, 88),
    C2(22025, 22040, 22021, 22037, 80),
    C2(22037, 22050, 22034, 22048, 72),
    C2(22048, 22050, 22030, 22033, 68),
    C2(22033, 22042, 22023, 22040, 60),
    C2(22040, 22046, 22035, 22041, 55),
    C2(22041, 22046, 22034, 22036, 50),
    C2(22036, 22042, 22028, 22030, 48),
    C2(22030, 22038, 22027, 22037, 45),
    C2(22037, 22043, 22032, 22041, 42),
    C2(22041, 22045, 22038, 22043, 40),
    // Range chops, eventually breaks high LATER
    C2(22043, 22049, 22039, 22045, 38),
    C2(22045, 22052, 22043, 22050, 65),
    C2(22050, 22064, 22049, 22062, 110),
    C2(22062, 22070, 22060, 22068, 90),
    C2(22068, 22080, 22066, 22078, 80),
  ];
  return {
    n: 6, title: 'The Premature Entry (Inside the Range)',
    candles, rangeHigh: 22050, rangeLow: 22020, breakoutIdx: 15, breakoutType: 'up',
    breakLabel: 'REAL BREAK (much later)',
    failed: true, failedIdx: 2, failedPrice: 22038, failedReason: 'EARLY ENTRY → STOPPED OUT',
    breakoutTime: '10:18',
    timeMarkers: [
      { i: 0, t: '9:30' }, { i: 2, t: '9:34' }, { i: 7, t: '9:44' }, { i: 15, t: '10:18' }
    ],
    caption: "Never enter inside the range. The range exists because both buyers and sellers are active there. The trader who enters at 22038 anticipating the break gets stopped out near the range low. Then the actual break comes 30 minutes later — too late, capital already burned. Wait for the resolution. Patience is mechanical here."
  };
}

// EX 7 - VOLUME FAILURE
function ex7VolumeFailure() {
  const candles = [
    C2(22030, 22045, 22025, 22042, 95),
    C2(22042, 22048, 22035, 22038, 88),
    C2(22038, 22044, 22022, 22025, 92),
    C2(22025, 22040, 22021, 22037, 80),
    C2(22037, 22050, 22034, 22048, 75),
    C2(22048, 22050, 22030, 22033, 70),
    C2(22033, 22042, 22023, 22040, 65),
    C2(22040, 22046, 22035, 22041, 60),
    C2(22041, 22046, 22034, 22036, 55),
    C2(22036, 22042, 22028, 22030, 50),
    C2(22030, 22038, 22027, 22037, 48),
    C2(22037, 22044, 22032, 22042, 45),
    C2(22042, 22048, 22038, 22044, 42),
    C2(22044, 22049, 22039, 22041, 40),
    // BREAKOUT — but with WEAK volume (lower than range avg)
    C2(22041, 22055, 22040, 22052, 32),
    // drift back into range
    C2(22052, 22054, 22046, 22048, 28),
    C2(22048, 22049, 22042, 22044, 26),
    C2(22044, 22046, 22038, 22040, 25),
    C2(22040, 22043, 22035, 22037, 24),
  ];
  return {
    n: 7, title: 'Volume Failure on Breakout',
    candles, rangeHigh: 22050, rangeLow: 22020, breakoutIdx: 14, breakoutType: 'up',
    breakLabel: 'WEAK VOLUME break',
    failed: true, failedIdx: 14, failedPrice: 22055, failedReason: 'NO VOLUME → fades',
    breakoutTime: '10:14',
    timeMarkers: [
      { i: 0, t: '9:30' }, { i: 7, t: '9:44' }, { i: 14, t: '10:14' }, { i: 18, t: '10:22' }
    ],
    caption: "Without volume, the breakout is fake. Look at the volume bar at the breakout — smaller than the average bars during the range itself. The big institutional players who set the range aren't participating. Skip these entirely or take half size if other context is strong."
  };
}

// EX 8 - CONFLUENCE WITH PRIOR DAY HIGH
function ex8Confluence() {
  const candles = [
    C2(22030, 22045, 22025, 22042, 95),
    C2(22042, 22048, 22035, 22038, 88),
    C2(22038, 22044, 22022, 22025, 92),
    C2(22025, 22040, 22021, 22037, 80),
    C2(22037, 22050, 22034, 22048, 75),
    C2(22048, 22050, 22030, 22033, 70),
    C2(22033, 22042, 22023, 22040, 65),
    C2(22040, 22046, 22035, 22041, 60),
    C2(22041, 22046, 22034, 22036, 55),
    C2(22036, 22042, 22028, 22030, 50),
    C2(22030, 22038, 22027, 22037, 48),
    C2(22037, 22044, 22032, 22042, 45),
    C2(22042, 22048, 22038, 22044, 42),
    C2(22044, 22049, 22039, 22041, 40),
    // BREAK above range high AND prior day high
    C2(22041, 22070, 22040, 22068, 165),
    C2(22068, 22082, 22065, 22080, 130),
    C2(22080, 22094, 22078, 22092, 110),
    C2(22092, 22098, 22088, 22095, 85),
  ];
  return {
    n: 8, title: 'ORB at Confluence with Prior Day High',
    candles, rangeHigh: 22050, rangeLow: 22020, breakoutIdx: 14, breakoutType: 'up',
    breakLabel: 'CONFLUENCE BREAK',
    priorDayHigh: 22050,
    breakoutTime: '10:14',
    targetPrice: 22080, stopPrice: 22020,
    timeMarkers: [
      { i: 0, t: '9:30' }, { i: 7, t: '9:44' }, { i: 14, t: '10:14' }, { i: 17, t: '10:20' }
    ],
    caption: "When the opening range high or low aligns with a major prior level — yesterday's high/low, key round number, weekly pivot — the breakout is far more reliable. Here the range high (22050) sits exactly on the prior day high. The break is exceptionally clean and runs through the measured-move target. Confluence is your edge multiplier. Always check higher-timeframe levels."
  };
}

// EX 9 - NARROW RANGE (BIG BREAKOUT)
function ex9NarrowRange() {
  const candles = [
    C2(22034, 22038, 22033, 22037, 70),
    C2(22037, 22039, 22034, 22036, 65),
    C2(22036, 22039, 22033, 22034, 60),
    C2(22034, 22038, 22033, 22037, 55),
    C2(22037, 22040, 22035, 22039, 50),
    C2(22039, 22040, 22034, 22035, 48),
    C2(22035, 22038, 22033, 22037, 45),
    C2(22037, 22039, 22034, 22038, 42),
    C2(22038, 22040, 22035, 22037, 40),
    C2(22037, 22040, 22034, 22036, 38),
    C2(22036, 22039, 22034, 22038, 36),
    C2(22038, 22040, 22035, 22037, 34),
    C2(22037, 22040, 22034, 22039, 32),
    C2(22039, 22040, 22036, 22038, 30),
    // BREAKOUT — big move because pent-up energy
    C2(22038, 22062, 22037, 22060, 180),
    C2(22060, 22075, 22058, 22072, 130),
    C2(22072, 22086, 22070, 22084, 110),
    C2(22084, 22094, 22080, 22090, 85),
  ];
  return {
    n: 9, title: 'The Narrow Range Day (Big Breakout)',
    candles, rangeHigh: 22040, rangeLow: 22033, breakoutIdx: 14, breakoutType: 'up',
    breakLabel: 'EXPLOSIVE BREAK',
    breakoutTime: '10:14',
    targetPrice: 22047, stopPrice: 22033,
    timeMarkers: [
      { i: 0, t: '9:30' }, { i: 7, t: '9:44' }, { i: 14, t: '10:14' }, { i: 17, t: '10:20' }
    ],
    caption: "Narrow ranges produce explosive breakouts. Here the range is tight — only 7 points (22033-22040). When the breakout finally comes, the market has been compressing — pent-up energy releases. Take size. The measured-move target (22047, +7) is small but the reality often runs much further (here, to 22090+)."
  };
}

// EX 10 - WIDE RANGE (MODEST BREAKOUT)
function ex10WideRange() {
  const candles = [
    C2(22030, 22055, 22020, 22050, 130),
    C2(22050, 22060, 22030, 22035, 125),
    C2(22035, 22045, 22015, 22020, 120),
    C2(22020, 22050, 22010, 22045, 115),
    C2(22045, 22070, 22040, 22065, 110),
    C2(22065, 22075, 22050, 22055, 105),
    C2(22055, 22065, 22030, 22035, 100),
    C2(22035, 22050, 22020, 22045, 95),
    C2(22045, 22055, 22038, 22042, 80),
    C2(22042, 22050, 22035, 22045, 70),
    C2(22045, 22055, 22040, 22050, 60),
    C2(22050, 22060, 22045, 22055, 55),
    C2(22055, 22065, 22050, 22060, 50),
    C2(22060, 22070, 22055, 22065, 48),
    // BREAKOUT — but follow-through is smaller
    C2(22065, 22082, 22063, 22080, 100),
    C2(22080, 22088, 22075, 22078, 80),
    C2(22078, 22084, 22072, 22074, 65),
    C2(22074, 22078, 22068, 22072, 55),
  ];
  return {
    n: 10, title: 'The Wide Range Day (Modest Breakout)',
    candles, rangeHigh: 22075, rangeLow: 22010, breakoutIdx: 14, breakoutType: 'up',
    breakLabel: 'BREAK — short follow-through',
    breakoutTime: '10:14',
    targetPrice: 22140, stopPrice: 22055,
    timeMarkers: [
      { i: 0, t: '9:30' }, { i: 7, t: '9:44' }, { i: 14, t: '10:14' }, { i: 17, t: '10:20' }
    ],
    caption: "Wide ranges have already burned a lot of energy. Here the range is 65 points wide — much of the daily move already happened during 9:30-9:44. The break works but stalls quickly because most participants who wanted to buy already bought, and most who wanted to sell already sold. The measured-move target (22140) is far away; reality stalls at 22088. Take partial profits earlier."
  };
}

// EX 11 - PRE-NEWS (AVOID)
function ex11PreNews() {
  const candles = [
    C2(22030, 22045, 22025, 22042, 95),
    C2(22042, 22048, 22035, 22038, 88),
    C2(22038, 22044, 22022, 22025, 92),
    C2(22025, 22040, 22021, 22037, 80),
    C2(22037, 22050, 22034, 22048, 75),
    C2(22048, 22050, 22030, 22033, 70),
    C2(22033, 22042, 22023, 22040, 65),
    C2(22040, 22046, 22035, 22041, 60),
    C2(22041, 22046, 22034, 22036, 55),
    C2(22036, 22042, 22028, 22030, 50),
    C2(22030, 22038, 22027, 22037, 48),
    C2(22037, 22044, 22032, 22042, 45),
    C2(22042, 22048, 22038, 22044, 42),
    C2(22044, 22049, 22039, 22041, 40),
    // 10:00 NEWS — slams price
    C2(22041, 22042, 21970, 21975, 280),
    C2(21975, 21985, 21940, 21948, 220),
    C2(21948, 21960, 21930, 21935, 180),
    C2(21935, 21948, 21925, 21940, 130),
  ];
  return {
    n: 11, title: 'The Pre-News ORB (Avoid)',
    candles, rangeHigh: 22050, rangeLow: 22020, breakoutIdx: 14, breakoutType: 'down',
    breakLabel: 'NEWS-DRIVEN — not a real ORB',
    failed: true, failedIdx: 14, failedPrice: 21970, failedReason: '⚠ FOMC 10:00',
    newsAtIndex: 14,
    breakoutTime: '10:00',
    timeMarkers: [
      { i: 0, t: '9:30' }, { i: 7, t: '9:44' }, { i: 14, t: '10:00 NEWS' }
    ],
    caption: "Always check the economic calendar before market open. Major scheduled releases (FOMC, NFP, CPI, GDP, earnings) invalidate technical setups. Here a 10:00 ET FOMC announcement slams price 80 points lower in 6 minutes — blowing through the range with no respect for the levels. ORB requires organic price discovery, not news-driven gaps. If high-impact news is scheduled before your window closes, sit out."
  };
}

// EX 12 - YOUR WINDOW
function ex12YourWindow() {
  const candles = [
    C2(22030, 22045, 22025, 22042, 95),
    C2(22042, 22048, 22035, 22038, 88),
    C2(22038, 22044, 22022, 22025, 92),
    C2(22025, 22040, 22021, 22037, 80),
    C2(22037, 22050, 22034, 22048, 75),
    C2(22048, 22050, 22030, 22033, 70),
    C2(22033, 22042, 22023, 22040, 65),
    C2(22040, 22046, 22035, 22041, 60),
    // 9:46-10:14 build up
    C2(22041, 22046, 22034, 22036, 55),
    C2(22036, 22042, 22028, 22030, 50),
    C2(22030, 22038, 22027, 22037, 48),
    C2(22037, 22044, 22032, 22042, 45),
    C2(22042, 22048, 22038, 22044, 42),
    C2(22044, 22049, 22039, 22041, 40),
    // 10:14-10:24 inside window
    C2(22041, 22046, 22037, 22043, 42),
    C2(22043, 22050, 22041, 22048, 50),
    // 10:26 BREAKOUT inside window
    C2(22048, 22064, 22047, 22062, 135),
    C2(22062, 22075, 22060, 22072, 105),
    C2(22072, 22082, 22070, 22080, 88),
  ];
  return {
    n: 12, title: 'The Opening Range Breakout in Your Window (Common Setup)',
    candles, rangeHigh: 22050, rangeLow: 22020, breakoutIdx: 16, breakoutType: 'up',
    breakLabel: 'BREAK — inside your window',
    breakoutTime: '10:26',
    targetPrice: 22080, stopPrice: 22020,
    timeMarkers: [
      { i: 0, t: '9:30' }, { i: 7, t: '9:44' }, { i: 14, t: '10:14' }, { i: 16, t: '10:26' }, { i: 18, t: '10:32' }
    ],
    caption: "This is YOUR pattern. The range is set by 9:45 (idx 7), before your window opens. From 9:45-10:15 (idx 8-13), the market consolidates inside the range, building energy. Your window opens at 10:15 (idx 14). At 10:26 (idx 16), inside your prime window, a clean breakout occurs above the range high with strong volume. The opening range was practically designed for your trading discipline."
  };
}
// ================================================================
// SECTION 5 — INTERACTIVE DECISION TREE
// ================================================================
function Section5DecisionTree() {
  return (
    <SectionShell n={5} title="The Breakout Decision Tree">
      <p className="mb-5">Three sequential questions. Click your answer; the next question reveals — or you get a verdict.</p>
      <ORBDecisionTree />
    </SectionShell>
  );
}

function ORBDecisionTree() {
  const [step, setStep] = useState(1);
  const [verdict, setVerdict] = useState(null);
  const [path, setPath] = useState([]);

  const reset = () => { setStep(1); setVerdict(null); setPath([]); };

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
          q="Has a 2-minute candle CLOSED above the range high (or below the range low) by at least 1 tick?"
          svg={<MiniDTSVG variant="closed-through" />}
          options={[
            { label: 'No — pattern not triggered',
              verdict: { kind: 'red', text: 'Pattern not triggered. Wait. Don\'t enter inside the range.' } },
            { label: 'Yes — body closed past the level',
              next: 2 }
          ]}
          choose={(label, next, fv) => {
            setPath([...path, label]);
            if (fv) { setVerdict(fv); setStep(0); } else { setStep(next); }
          }}
        />
      )}

      {step === 2 && (
        <DTQuestion
          n={2}
          q="What does the candle right AFTER the breakout candle look like?"
          svg={<MiniDTSVG variant="after-candle" />}
          options={[
            { label: 'Same direction, follows through with another close beyond the level',
              next: 3 },
            { label: 'Small body / doji / low volume',
              verdict: { kind: 'amber', text: 'Stalled. Wait one more candle. If still stalled or reversing, abort.' } },
            { label: 'Closes back inside the range',
              verdict: { kind: 'red', text: 'FAKEOUT. Stand down. Watch for opposite-direction breakout — fake breaks often reverse hard.' } }
          ]}
          choose={(label, next, fv) => {
            setPath([...path, label]);
            if (fv) { setVerdict(fv); setStep(0); } else { setStep(next); }
          }}
        />
      )}

      {step === 3 && (
        <DTQuestion
          n={3}
          q="Was breakout volume higher than the average volume of the range itself?"
          svg={<MiniDTSVG variant="volume" />}
          options={[
            { label: 'Yes — clearly higher',
              verdict: { kind: 'green', text: 'High-confidence trade. Full size. Enter on the close. Stop opposite side of range or below breakout low. Target = range height projected from breakout.' } },
            { label: 'No / about the same',
              verdict: { kind: 'amber', text: 'Half size. Low-volume breaks fail at high rates. Take confirmed entry with reduced exposure.' } }
          ]}
          choose={(label, next, fv) => {
            setPath([...path, label]);
            if (fv) { setVerdict(fv); setStep(0); }
          }}
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
            onClick={() => choose(opt.label, opt.next, opt.verdict)}
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
  if (variant === 'closed-through') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} y1={70} x2={580} y2={70} stroke={C_RANGE} strokeWidth={3} />
        <text x={24} y={64} fill={C_RANGE} fontSize={10} fontFamily="'Space Mono', monospace">range high</text>
        <g transform="translate(180,0)">
          <line x1={0} x2={0} y1={45} y2={95} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={-8} y={75} width={16} height={20} fill={C_BULL} />
          <text x={0} y={120} fill={C_STOP} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">wick poke only</text>
          <text x={0} y={134} fill={C_STOP} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">NOT valid</text>
        </g>
        <g transform="translate(420,0)">
          <line x1={0} x2={0} y1={30} y2={120} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={-8} y={45} width={16} height={45} fill={C_BULL} />
          <text x={0} y={138} fill={C_BULL} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">body closed above</text>
          <text x={0} y={152} fill={C_BULL} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">VALID ✓</text>
        </g>
      </svg>
    );
  }
  if (variant === 'after-candle') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} y1={70} x2={580} y2={70} stroke={C_RANGE} strokeWidth={2.5} opacity={0.7} />
        <g transform="translate(70,0)">
          <line x1={0} x2={0} y1={45} y2={100} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={-8} y={50} width={16} height={45} fill={C_BULL} />
          <text x={0} y={120} fill="#888" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">breakout</text>
        </g>
        <g transform="translate(180,0)">
          <line x1={0} x2={0} y1={20} y2={75} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={-8} y={28} width={16} height={45} fill={C_BULL} />
          <text x={0} y={148} fill={C_BULL} fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">A — confirmed</text>
        </g>
        <g transform="translate(330,0)">
          <line x1={0} x2={0} y1={50} y2={90} stroke="#888" strokeWidth={1.5} />
          <rect x={-8} y={68} width={16} height={4} fill="#888" />
          <text x={0} y={148} fill={C_TARGET} fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">B — stalled</text>
        </g>
        <g transform="translate(480,0)">
          <line x1={0} x2={0} y1={45} y2={105} stroke={C_BEAR} strokeWidth={1.5} />
          <rect x={-8} y={70} width={16} height={30} fill={C_BEAR} />
          <text x={0} y={120} fill={C_STOP} fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">C — fake</text>
        </g>
      </svg>
    );
  }
  if (variant === 'volume') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <text x={20} y={20} fill="#666" fontSize={10} fontFamily="'Space Mono', monospace">VOLUME</text>
        {[55, 50, 48, 45].map((h2, i) => (
          <rect key={i} x={70 + i * 30} y={140 - h2} width={20} height={h2} fill={C_BULL} opacity={0.5} />
        ))}
        <rect x={220} y={30} width={20} height={110} fill={C_BREAK} opacity={0.85} />
        <text x={230} y={20} fill={C_BULL} fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">YES — high</text>
        <line x1={290} x2={290} y1={20} y2={150} stroke="#262626" />
        {[50, 48, 50, 52].map((h2, i) => (
          <rect key={i} x={320 + i * 30} y={140 - h2} width={20} height={h2} fill={C_BULL} opacity={0.5} />
        ))}
        <rect x={460} y={85} width={20} height={55} fill={C_BREAK} opacity={0.7} />
        <text x={470} y={75} fill={C_TARGET} fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">NO — same</text>
      </svg>
    );
  }
  return null;
}
// ================================================================
// SECTION 6 — THREE ENTRY TIERS
// ================================================================
function Section6EntryTiers() {
  const tiers = [
    {
      name: 'Aggressive', tag: 'TIER 1', color: 'amber',
      entry: 'Close of the candle that breaks above the range high (or below the range low)',
      stop: 'Opposite side of range (range low for longs, range high for shorts)',
      rr: '2:1 to 3:1',
      win: 'Lower (more false signals)',
      use: 'Strong trend day, you trust the breakout',
      size: '25-50%',
      svg: <ORBTierSVG variant="aggressive" />
    },
    {
      name: 'Confirmation', tag: 'TIER 2', color: 'green',
      entry: 'Close of the candle AFTER the break, only if it follows through',
      stop: 'Just inside the broken level (above broken high or below broken low)',
      rr: '2:1 to 2.5:1',
      win: 'Higher',
      use: 'Standard trade — balance of speed and confirmation',
      size: 'Full size',
      svg: <ORBTierSVG variant="confirm" />
    },
    {
      name: 'Retest', tag: 'TIER 3', color: 'blue',
      entry: 'Bounce / rejection candle after price pulls back to the broken level',
      stop: 'Just past the retest wick',
      rr: '1.5:1 to 2:1',
      win: 'Highest',
      use: 'You missed Tier 1 and Tier 2, or you only take A+ setups',
      size: 'Full size, tight stop',
      svg: <ORBTierSVG variant="retest" />
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

function ORBTierSVG({ variant }) {
  const w = 280, h = 130;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      <line x1={20} y1={50} x2={260} y2={50} stroke={C_RANGE} strokeWidth={2.5} />
      <line x1={20} y1={90} x2={260} y2={90} stroke={C_RANGE} strokeWidth={2.5} />
      <text x={22} y={46} fill={C_RANGE} fontSize={8} fontFamily="'Space Mono', monospace">RH</text>
      <text x={22} y={102} fill={C_RANGE} fontSize={8} fontFamily="'Space Mono', monospace">RL</text>
      {/* range candles */}
      {[40, 60, 80, 100, 120].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={56} y2={86} stroke={C_BULL} strokeWidth={1.2} />
          <rect x={x - 4} y={62 + (i % 2) * 4} width={8} height={14} fill={C_BULL} />
        </g>
      ))}
      {variant === 'aggressive' && (
        <g>
          <line x1={155} x2={155} y1={30} y2={70} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={151} y={35} width={8} height={30} fill={C_BULL} />
          <circle cx={155} cy={42} r={6} fill="#FFB44A" stroke="#000" strokeWidth={1.5} />
          <text x={166} y={46} fill="#FFB44A" fontSize={10} fontFamily="'Space Mono', monospace">T1 enter</text>
        </g>
      )}
      {variant === 'confirm' && (
        <g>
          <line x1={155} x2={155} y1={30} y2={70} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={151} y={35} width={8} height={30} fill={C_BULL} />
          <line x1={175} x2={175} y1={20} y2={60} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={171} y={25} width={8} height={30} fill={C_BULL} />
          <circle cx={175} cy={32} r={6} fill={C_BULL} stroke="#000" strokeWidth={1.5} />
          <text x={186} y={36} fill={C_BULL} fontSize={10} fontFamily="'Space Mono', monospace">T2 enter</text>
        </g>
      )}
      {variant === 'retest' && (
        <g>
          <line x1={155} x2={155} y1={30} y2={70} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={151} y={35} width={8} height={30} fill={C_BULL} />
          <line x1={175} x2={175} y1={36} y2={65} stroke={C_BEAR} strokeWidth={1.5} />
          <rect x={171} y={45} width={8} height={18} fill={C_BEAR} />
          <line x1={195} x2={195} y1={28} y2={56} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={191} y={32} width={8} height={20} fill={C_BULL} />
          <circle cx={195} cy={42} r={6} fill="#4A9EFF" stroke="#000" strokeWidth={1.5} />
          <text x={206} y={46} fill="#4A9EFF" fontSize={10} fontFamily="'Space Mono', monospace">T3 enter</text>
        </g>
      )}
    </svg>
  );
}
// ================================================================
// SECTION 7 — MEASURED MOVE CALCULATOR
// ================================================================
function Section7Calculator() {
  const [rangeHigh, setRangeHigh] = useState(22050);
  const [rangeLow, setRangeLow] = useState(22020);
  const [breakoutPrice, setBreakoutPrice] = useState(22052);
  const [direction, setDirection] = useState('up');
  const rangeHeight = useMemo(() => rangeHigh - rangeLow, [rangeHigh, rangeLow]);
  const target = useMemo(
    () => direction === 'up' ? breakoutPrice + rangeHeight : breakoutPrice - rangeHeight,
    [direction, breakoutPrice, rangeHeight]
  );
  const valid = rangeHeight > 0;

  return (
    <SectionShell n={7} title="Measured-Move Target Calculator">
      <p className="mb-5">Range height projected from the breakout = your measured-move target.</p>

      {/* Direction toggle */}
      <div className="mb-5 flex gap-2">
        <button onClick={() => setDirection('up')}
          className={`btn flex-1 ${direction === 'up' ? 'btn-primary' : 'btn-ghost'}`}>
          ↑ Upside (Long)
        </button>
        <button onClick={() => setDirection('down')}
          className={`btn flex-1 ${direction === 'down' ? 'btn-red' : 'btn-ghost'}`}>
          ↓ Downside (Short)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <NumInput label="Range High price" v={rangeHigh} onChange={setRangeHigh} />
        <NumInput label="Range Low price" v={rangeLow} onChange={setRangeLow} />
        <NumInput label="Breakout price (body close)" v={breakoutPrice} onChange={setBreakoutPrice} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <Outcome label="Range height" v={valid ? rangeHeight.toFixed(2) : '—'} accent="cyan" />
        <Outcome label={direction === 'up' ? 'Upside projection' : 'Downside projection'} v={valid ? `${direction === 'up' ? '+' : '-'}${rangeHeight.toFixed(2)}` : '—'} accent="amber" />
        <Outcome label="Target price" v={valid ? target.toFixed(2) : '—'} accent="green" />
      </div>
      <CalculatorChart
        rangeHigh={rangeHigh} rangeLow={rangeLow}
        breakoutPrice={breakoutPrice} target={target}
        direction={direction} valid={valid} />
      <div className="mt-4 card-tight border-border bg-surface2">
        <p className="text-sm text-text/85 leading-relaxed">
          <span className="text-green font-semibold">Note:</span> On NQ, range height is in points (4 ticks/point, $5/tick). On RTY similar. On ES, 4 ticks/point, $12.50/tick. Always know your dollar risk and reward before entry.
        </p>
      </div>
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
  const colors = { green: 'text-green', red: 'text-red', amber: 'text-amber', cyan: '' };
  const cyanStyle = accent === 'cyan' ? { color: C_RANGE } : {};
  return (
    <div className="card-tight">
      <div className="label mb-1">{label}</div>
      <div className={`num text-2xl ${colors[accent]}`} style={cyanStyle}>{v}</div>
    </div>
  );
}

function CalculatorChart({ rangeHigh, rangeLow, breakoutPrice, target, direction, valid }) {
  if (!valid) return null;
  const w = 1100, h = 360;
  const padL = 70, padR = 130, padT = 30, padB = 30;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const allHigh = Math.max(rangeHigh, breakoutPrice, target);
  const allLow = Math.min(rangeLow, breakoutPrice, target);
  const span = allHigh - allLow;
  const yMax = allHigh + span * 0.1;
  const yMin = allLow - span * 0.1;
  const yRange = yMax - yMin;
  const y = price => padT + ((yMax - price) / yRange) * innerH;

  const xRangeStart = padL + innerW * 0.05;
  const xRangeEnd = padL + innerW * 0.4;
  const xBreakout = padL + innerW * 0.55;
  const xTarget = padL + innerW * 0.85;

  return (
    <div className="overflow-x-auto -mx-2 md:mx-0">
      <svg viewBox={`0 0 ${w} ${h}`} className="block rounded-xl border border-border" style={{ background: '#0a0a0a', minWidth: '880px' }}>
        {/* Grid */}
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <line key={i} x1={padL} x2={w - padR} y1={padT + innerH * t} y2={padT + innerH * t} stroke="#262626" strokeWidth={1} />
        ))}

        {/* Range tinted box */}
        <rect x={xRangeStart} y={y(rangeHigh)} width={xRangeEnd - xRangeStart} height={y(rangeLow) - y(rangeHigh)}
          fill="rgba(6, 182, 212, 0.07)" stroke={C_RANGE} strokeWidth={1.5} strokeDasharray="3 3" />
        <text x={(xRangeStart + xRangeEnd) / 2} y={y(rangeHigh) - 6} fill={C_RANGE}
          fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace" fontWeight="bold">
          opening range
        </text>

        {/* Range high & low solid 4px lines extending right */}
        <line x1={padL} y1={y(rangeHigh)} x2={w - padR} y2={y(rangeHigh)} stroke={C_RANGE} strokeWidth={3} />
        <line x1={padL} y1={y(rangeLow)} x2={w - padR} y2={y(rangeLow)} stroke={C_RANGE} strokeWidth={3} />

        {/* Range height arrow */}
        <line x1={xRangeStart - 16} y1={y(rangeHigh)} x2={xRangeStart - 16} y2={y(rangeLow)}
          stroke={C_RANGE} strokeWidth={1.5} />
        <polygon points={`${xRangeStart - 16},${y(rangeHigh)} ${xRangeStart - 20},${y(rangeHigh) + 6} ${xRangeStart - 12},${y(rangeHigh) + 6}`} fill={C_RANGE} />
        <polygon points={`${xRangeStart - 16},${y(rangeLow)} ${xRangeStart - 20},${y(rangeLow) - 6} ${xRangeStart - 12},${y(rangeLow) - 6}`} fill={C_RANGE} />
        <text x={xRangeStart - 22} y={y((rangeHigh + rangeLow) / 2) + 4} fill={C_RANGE}
          fontSize={12} textAnchor="end" fontFamily="'Oxanium', sans-serif" fontWeight="bold">
          h={(rangeHigh - rangeLow).toFixed(2)}
        </text>

        {/* Breakout marker */}
        <circle cx={xBreakout} cy={y(breakoutPrice)} r={7} fill={C_BREAK} stroke="#000" strokeWidth={1.5} />
        <text x={xBreakout} y={y(breakoutPrice) - 12} fill={C_BREAK}
          fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace" fontWeight="bold">
          breakout @ {breakoutPrice.toFixed(2)}
        </text>

        {/* Projection arrow */}
        <line x1={xBreakout} y1={y(breakoutPrice)} x2={xTarget} y2={y(target)}
          stroke="#00D9A0" strokeWidth={3} strokeDasharray="6 5" />
        <polygon points={`${xTarget},${y(target)} ${xTarget - 9},${y(target) - 9} ${xTarget - 9},${y(target) + 9}`} fill="#00D9A0" />
        <text x={(xBreakout + xTarget) / 2} y={y((breakoutPrice + target) / 2) + (direction === 'up' ? -10 : 18)}
          fill="#00D9A0" fontSize={13} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight="bold">
          {direction === 'up' ? '+' : '-'}{(rangeHigh - rangeLow).toFixed(2)}
        </text>

        {/* Target line */}
        <line x1={padL} y1={y(target)} x2={w - padR} y2={y(target)}
          stroke={C_TARGET} strokeWidth={2.2} strokeDasharray="6 4" opacity={0.85} />
        <rect x={w - padR + 6} y={y(target) - 11} width={padR - 10} height={22} rx={3} fill="#0a0a0a" stroke={C_TARGET} />
        <text x={w - padR + 12} y={y(target) + 5} fill={C_TARGET}
          fontSize={12} fontFamily="'Space Mono', monospace" fontWeight="bold">
          TARGET {target.toFixed(2)}
        </text>

        {/* Range high & low labels (left edge) */}
        <text x={padL - 8} y={y(rangeHigh) + 4} fill={C_RANGE}
          fontSize={11} textAnchor="end" fontFamily="'Space Mono', monospace">
          RH {rangeHigh.toFixed(2)}
        </text>
        <text x={padL - 8} y={y(rangeLow) + 4} fill={C_RANGE}
          fontSize={11} textAnchor="end" fontFamily="'Space Mono', monospace">
          RL {rangeLow.toFixed(2)}
        </text>
      </svg>
    </div>
  );
}
// ================================================================
// SECTION 8 — STOP PLACEMENT
// ================================================================
function Section8Stops() {
  const stops = [
    {
      kind: 'CORRECT (conservative)', color: 'green',
      title: 'Opposite side of the range',
      body: 'Stop sits on the opposite side from your entry. Big stop but full target room. Survives normal noise and stop-hunt wicks. This is the default for confirmation entries (Tier 2).',
      svg: <ORBStopSVG variant="conservative" />
    },
    {
      kind: 'CORRECT (aggressive)', color: 'green',
      title: 'Just inside the broken level',
      body: 'Stop 1-2 ticks below the broken range high (for longs) or above the broken range low (for shorts). Tighter stop, larger size possible. Used with Tier 3 retest entries.',
      svg: <ORBStopSVG variant="aggressive" />
    },
    {
      kind: 'TOO LOOSE', color: 'red',
      title: 'Far beyond the range',
      body: 'Stop placed way outside the range. R:R becomes unworkable, target rarely reached even when right about direction. Wastes capital on a too-loose risk envelope.',
      svg: <ORBStopSVG variant="loose" />
    }
  ];
  const colors = {
    green: { border: 'border-green/40', text: 'text-green' },
    red:   { border: 'border-red/40',   text: 'text-red' },
    amber: { border: 'border-amber/40', text: 'text-amber' }
  };
  return (
    <SectionShell n={8} title="Stop Placement (with diagrams)">
      <p className="mb-5">Three options. Two are correct, one is wrong.</p>
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

function ORBStopSVG({ variant }) {
  const w = 280, h = 160;
  const baseChart = (
    <g>
      <line x1={20} y1={60} x2={260} y2={60} stroke={C_RANGE} strokeWidth={2.5} />
      <line x1={20} y1={100} x2={260} y2={100} stroke={C_RANGE} strokeWidth={2.5} />
      <text x={22} y={56} fill={C_RANGE} fontSize={9} fontFamily="'Space Mono', monospace">RH</text>
      <text x={22} y={114} fill={C_RANGE} fontSize={9} fontFamily="'Space Mono', monospace">RL</text>
      {[40, 60, 80, 100, 120].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={66} y2={94} stroke={C_BULL} strokeWidth={1.2} />
          <rect x={x - 4} y={72 + (i % 2) * 4} width={8} height={14} fill={C_BULL} />
        </g>
      ))}
      {/* breakout */}
      <line x1={155} x2={155} y1={36} y2={70} stroke={C_BULL} strokeWidth={1.5} />
      <rect x={151} y={42} width={8} height={28} fill={C_BULL} />
      {/* entry circle */}
      <circle cx={155} cy={50} r={5} fill={C_ENTRY} stroke="#000" strokeWidth={1.5} />
    </g>
  );
  let stop;
  if (variant === 'conservative') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={108} y2={108} stroke={C_STOP} strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={124} fill={C_STOP} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · opposite side of range</text>
      </g>
    );
  } else if (variant === 'aggressive') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={66} y2={66} stroke={C_STOP} strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={80} fill={C_STOP} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · just inside broken high</text>
      </g>
    );
  } else if (variant === 'loose') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={140} y2={140} stroke={C_STOP} strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={154} fill={C_STOP} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · way past range (too loose)</text>
      </g>
    );
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      {baseChart}
      {stop}
    </svg>
  );
}
// ================================================================
// SECTION 9 — VOLUME RULES
// ================================================================
function Section9Volume() {
  return (
    <SectionShell n={9} title="Volume Rules (visual)">
      <p className="mb-5">Three volume profiles side by side. Only one is a tradable opening range breakout.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ORBVolCard tag="VALID" color="green"
          body="Volume builds during the range and surges sharply on the breakout candle. The breakout volume bar is the largest visible bar — clearly larger than every range bar."
          svg={<ORBVolSVG variant="valid" />} />
        <ORBVolCard tag="SUSPECT" color="amber"
          body="Volume is flat through the range and only modestly higher on the break. Could go either way. Half size or skip."
          svg={<ORBVolSVG variant="suspect" />} />
        <ORBVolCard tag="INVALID" color="red"
          body="Volume DECLINES through the range and is small on the breakout. Skip. The big players aren't participating."
          svg={<ORBVolSVG variant="invalid" />} />
      </div>
    </SectionShell>
  );
}

function ORBVolCard({ tag, color, body, svg }) {
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

function ORBVolSVG({ variant }) {
  const w = 280, h = 130;
  let bars;
  if (variant === 'valid') {
    // builds during range, surges on breakout
    bars = [40, 50, 55, 60, 65, 70, 75, 115];
  } else if (variant === 'suspect') {
    bars = [55, 50, 52, 48, 50, 52, 50, 65];
  } else {
    // declines through range, tiny breakout
    bars = [80, 70, 60, 50, 42, 35, 28, 32];
  }
  const colors = bars.map((_, i) => i < 7 ? C_BULL : C_BREAK);
  const max = Math.max(...bars);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      <text x={20} y={20} fill="#666" fontSize={10} fontFamily="'Space Mono', monospace">VOLUME</text>
      {bars.map((b, i) => {
        const barH = (b / max) * 95;
        return (
          <rect key={i} x={30 + i * 30} y={120 - barH} width={20} height={barH}
            fill={colors[i]} opacity={i === 7 ? 0.9 : 0.55} />
        );
      })}
      <line x1={235} x2={235} y1={20} y2={125} stroke="#262626" strokeDasharray="3 3" />
      <text x={245} y={20} fill="#666" fontSize={9} fontFamily="'Space Mono', monospace">brk</text>
    </svg>
  );
}
// ================================================================
// SECTION 10 — SIX MISTAKES
// ================================================================
function Section10Mistakes() {
  const mistakes = [
    { n: 1, title: 'Entering BEFORE the range is fully established',     body: 'Trading at 9:38 inside the still-forming range. The range needs to complete (9:45 for the 15-min ORB). Entering early means you are betting on incomplete information.' },
    { n: 2, title: 'Trading ORB without checking the economic calendar', body: 'FOMC, NFP, CPI, GDP at 8:30 or 10:00 ET will obliterate any technical setup. Always check the calendar before market open. If high-impact news is scheduled, sit out.' },
    { n: 3, title: 'Drawing the range incorrectly',                       body: 'Use WICKS, not just bodies, for the range high and low. The range is the literal extreme price reached during 9:30-9:45 — including spikes and wicks.' },
    { n: 4, title: 'Ignoring the candle AFTER the breakout',              body: 'The breakout candle is your trigger; the candle after is your CONFIRMATION. Without follow-through, the break is suspect. Many fakeouts look like real breaks until the next bar prints.' },
    { n: 5, title: 'Stop too tight (1-2 ticks above the broken level)',   body: 'Tempting because risk looks small. Reality: gets stop-hunted by the very-common retest move. Right idea, dead trader. Use opposite-side-of-range or just past the breakout candle low.' },
    { n: 6, title: 'Holding past the measured-move target hoping for more', body: 'Target = range height projected. Past that you are on hope. Banks who built the move are taking profits — and so should you. Respect the math.' }
  ];
  return (
    <SectionShell n={10} title="Six Mistakes That Kill ORB Trades">
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
// ================================================================
// SECTION 11 — ORB vs LOOKALIKES
// ================================================================
function Section11Lookalikes() {
  return (
    <SectionShell n={11} title="ORB vs Lookalike Setups">
      <p className="mb-5">Not every range breakout is an ORB. Three setups that look similar but trade differently.</p>
      <div className="space-y-4">
        <LookalikeCard title="ORB vs Mid-Day Range Breakout" body="Mid-day ranges (12:00-14:00) form during low-volume lunch chop and break at lower reliability. ORB has institutional volume behind it; mid-day breaks usually don't. Trade ORB, skip lunch ranges.">
          <LookalikePair leftLabel="ORB (9:30-9:45)" rightLabel="Mid-day range (12:00-14:00)"
            left={<MiniRangeSVG variant="orb-good" />}
            right={<MiniRangeSVG variant="midday-bad" />} />
        </LookalikeCard>
        <LookalikeCard title="ORB vs Trend Continuation Breakout" body="If the market is already in a strong trend at 9:30 (gapped up or down with momentum), the 'opening range' may just be a brief consolidation in an existing trend. The break in the direction of the trend is less of a true ORB and more of a trend continuation. Both can work but the ORB rules apply less strictly.">
          <LookalikePair leftLabel="True ORB" rightLabel="Trend continuation (gap day)"
            left={<MiniRangeSVG variant="orb-true" />}
            right={<MiniRangeSVG variant="trend-cont" />} />
        </LookalikeCard>
        <LookalikeCard title="ORB vs Gap Fill" body="On gap-up or gap-down opens, the opening range may form near unfilled price levels (the gap). Sometimes price 'fills the gap' before the real ORB direction emerges. If you see price moving aggressively toward the prior day's close inside the range, it's filling the gap — the breakout often comes after the gap is filled.">
          <LookalikePair leftLabel="Clean ORB (no gap)" rightLabel="Gap-fill day (wait for fill first)"
            left={<MiniRangeSVG variant="orb-clean" />}
            right={<MiniRangeSVG variant="gap-fill" />} />
        </LookalikeCard>
      </div>
    </SectionShell>
  );
}

function LookalikeCard({ title, body, children }) {
  return (
    <div className="card border-border">
      <h4 className="font-display font-semibold text-lg mb-3">{title}</h4>
      {children}
      <p className="mt-4 text-text/85 leading-relaxed text-sm">{body}</p>
    </div>
  );
}

function LookalikePair({ leftLabel, rightLabel, left, right }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div>
        <div className="label text-green mb-2">{leftLabel}</div>
        {left}
      </div>
      <div>
        <div className="label text-amber mb-2">{rightLabel}</div>
        {right}
      </div>
    </div>
  );
}

function MiniRangeSVG({ variant }) {
  const w = 480, h = 180;
  // shared range lines positions
  const rh = 60, rl = 130;
  // Default candle generator
  const drawCandle = (x, o, c, hi, lo, key) => {
    const isUp = c >= o;
    const color = isUp ? C_BULL : C_BEAR;
    return (
      <g key={key}>
        <line x1={x} x2={x} y1={hi} y2={lo} stroke={color} strokeWidth={1.4} />
        <rect x={x - 4} y={Math.min(o, c)} width={8} height={Math.max(2, Math.abs(c - o))} fill={color} />
      </g>
    );
  };
  if (variant === 'orb-good' || variant === 'orb-true' || variant === 'orb-clean') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <rect x={20} y={50} width={150} height={90} fill="rgba(6,182,212,0.07)" stroke={C_RANGE} strokeWidth={1} strokeDasharray="3 3" />
        <line x1={10} x2={460} y1={rh} y2={rh} stroke={C_RANGE} strokeWidth={3} />
        <line x1={10} x2={460} y1={rl} y2={rl} stroke={C_RANGE} strokeWidth={3} />
        <text x={14} y={46} fill={C_RANGE} fontSize={9} fontFamily="'Space Mono', monospace">range high</text>
        <text x={14} y={144} fill={C_RANGE} fontSize={9} fontFamily="'Space Mono', monospace">range low</text>
        {/* range candles */}
        {[40, 60, 80, 100, 120, 140, 160].map((x, i) => drawCandle(x, 100 - i % 3 * 5, 95 - i % 4 * 6, 70, 130, i))}
        {/* breakout */}
        <g>
          <line x1={210} x2={210} y1={45} y2={90} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={206} y={48} width={8} height={40} fill={C_BULL} />
        </g>
        <line x1={210} x2={300} y1={75} y2={30} stroke={C_BREAK} strokeWidth={2} strokeDasharray="4 3" />
        <text x={310} y={32} fill={C_BREAK} fontSize={10} fontFamily="'Space Mono', monospace">clean break + run</text>
        <text x={150} y={170} fill="#888" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">9:30 - 9:45 (range)</text>
        <text x={300} y={170} fill="#888" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">10:15+ (your window)</text>
      </svg>
    );
  }
  if (variant === 'midday-bad') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <rect x={20} y={70} width={150} height={50} fill="rgba(255,180,74,0.06)" stroke="#FFB44A" strokeWidth={1} strokeDasharray="3 3" />
        <line x1={10} x2={460} y1={70} y2={70} stroke={C_RANGE} strokeWidth={2.5} opacity={0.6} />
        <line x1={10} x2={460} y1={120} y2={120} stroke={C_RANGE} strokeWidth={2.5} opacity={0.6} />
        {[40, 60, 80, 100, 120, 140, 160].map((x, i) => drawCandle(x, 95 + (i % 2) * 4, 92 + (i % 3) * 4, 80, 110, i))}
        {/* fake break that fades */}
        <g>
          <line x1={210} x2={210} y1={60} y2={92} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={206} y={64} width={8} height={26} fill={C_BULL} />
        </g>
        {[230, 260, 290].map((x, i) => drawCandle(x, 75 + i * 4, 80 + i * 5, 65, 105, `b${i}`))}
        <text x={300} y={50} fill={C_STOP} fontSize={10} fontFamily="'Space Mono', monospace">fades back</text>
        <text x={150} y={170} fill="#888" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">12:00-14:00 (lunch chop)</text>
      </svg>
    );
  }
  if (variant === 'trend-cont') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {/* prior trend candles rising before market open */}
        {[30, 50, 70, 90].map((x, i) => drawCandle(x, 130 - i * 8, 122 - i * 8, 115 - i * 8, 138 - i * 8, `t${i}`))}
        <text x={60} y={152} fill="#888" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">overnight rally</text>
        {/* tight range as continuation pause */}
        <rect x={130} y={70} width={100} height={30} fill="rgba(6,182,212,0.07)" stroke={C_RANGE} strokeWidth={1} strokeDasharray="3 3" />
        <line x1={120} x2={460} y1={70} y2={70} stroke={C_RANGE} strokeWidth={2.5} opacity={0.7} />
        <line x1={120} x2={460} y1={100} y2={100} stroke={C_RANGE} strokeWidth={2.5} opacity={0.7} />
        {[140, 160, 180, 200, 220].map((x, i) => drawCandle(x, 85 + (i%2)*3, 82 + (i%2)*3, 75, 95, `r${i}`))}
        {/* breakout in same direction as trend */}
        <g>
          <line x1={250} x2={250} y1={50} y2={80} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={246} y={54} width={8} height={24} fill={C_BULL} />
        </g>
        <line x1={250} x2={350} y1={62} y2={20} stroke={C_BREAK} strokeWidth={2} strokeDasharray="4 3" />
        <text x={355} y={20} fill="#FFB44A" fontSize={10} fontFamily="'Space Mono', monospace">trend continues</text>
      </svg>
    );
  }
  if (variant === 'gap-fill') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {/* prior day close */}
        <line x1={10} x2={460} y1={150} y2={150} stroke="#FFB44A" strokeWidth={1.8} strokeDasharray="6 4" opacity={0.7} />
        <text x={14} y={146} fill="#FFB44A" fontSize={9} fontFamily="'Space Mono', monospace">prior day close</text>
        {/* gap-up open + range forming up high */}
        <rect x={50} y={50} width={130} height={50} fill="rgba(6,182,212,0.07)" stroke={C_RANGE} strokeWidth={1} strokeDasharray="3 3" />
        <line x1={10} x2={460} y1={50} y2={50} stroke={C_RANGE} strokeWidth={2.5} opacity={0.7} />
        <line x1={10} x2={460} y1={100} y2={100} stroke={C_RANGE} strokeWidth={2.5} opacity={0.7} />
        {[60, 80, 100, 120, 140, 160].map((x, i) => drawCandle(x, 75 + (i%2)*4, 72 + (i%2)*4, 60, 90, `g${i}`))}
        {/* fall to fill gap */}
        {[180, 200, 220, 240].map((x, i) => drawCandle(x, 80 + i * 12, 85 + i * 14, 70 + i * 10, 100 + i * 14, `f${i}`))}
        <text x={250} y={158} fill={C_STOP} fontSize={10} fontFamily="'Space Mono', monospace">filling gap...</text>
        {/* then real breakout */}
        <line x1={260} x2={350} y1={140} y2={50} stroke={C_BREAK} strokeWidth={1.5} strokeDasharray="4 3" opacity={0.6} />
        <text x={355} y={50} fill={C_BREAK} fontSize={10} fontFamily="'Space Mono', monospace">real ORB after fill</text>
      </svg>
    );
  }
  return null;
}
// ================================================================
// SECTION 12 — TIME OF DAY
// ================================================================
function Section12TimeOfDay() {
  const zones = [
    { from: '9:30',  to: '9:45',  label: 'RANGE FORMATION', desc: 'Range is being SET. Don\'t enter trades. Watch and mark the high and low.', tag: 'do not trade', color: 'red' },
    { from: '9:45',  to: '10:15', label: 'BUILD-UP',        desc: 'Range is set. Price often consolidates inside the range, building energy. Wait for your window.', tag: 'watch closely', color: 'amber' },
    { from: '10:15', to: '11:30', label: 'YOUR PRIME WINDOW', desc: 'Most ORB breakouts trigger here. Volume is still high from the open. The 10:25-11:00 stretch is statistically the cleanest.', tag: 'highest quality', color: 'green', highlight: true },
    { from: '11:30', to: '12:00', label: 'END OF YOUR WINDOW', desc: 'Late-morning breakouts still work but with smaller follow-through. Last clean window if you haven\'t taken a trade.', tag: 'decent quality', color: 'green' },
    { from: '12:00', to: '14:00', label: 'LUNCH CHOP',      desc: 'Volume dries up. ORB levels often get probed with weak conviction. Avoid.', tag: 'skip', color: 'red' },
    { from: '14:00', to: '16:00', label: 'AFTERNOON',       desc: 'ORB levels still matter as support/resistance but the main breakout opportunity has passed. Reliability drops.', tag: 'variable', color: 'amber' }
  ];
  const colors = {
    red:   { border: 'border-red/40',   bar: 'bg-red',    text: 'text-red' },
    amber: { border: 'border-amber/40', bar: 'bg-amber',  text: 'text-amber' },
    green: { border: 'border-green/40', bar: 'bg-green',  text: 'text-green' }
  };
  return (
    <SectionShell n={12} title="Time of Day — Why ORB Is Made For Your Window">
      <p className="mb-5">A horizontal timeline of the trading day with quality zones. ORB is the most precisely calibrated pattern for your 10:15-12:00 ET window.</p>
      <div className="space-y-2">
        {zones.map((z, i) => (
          <div key={i} className={`card-tight flex flex-col md:flex-row md:items-center gap-3 ${z.highlight ? 'bg-green/[0.05] ' : ''}${colors[z.color].border}`}>
            <div className="flex items-center gap-3 md:w-72 shrink-0">
              <div className={`font-mono text-sm ${colors[z.color].text} font-bold`}>
                {z.from} - {z.to} ET
              </div>
              <div className={`pill ${z.color === 'green' ? 'pill-green' : z.color === 'red' ? 'pill-red' : 'pill-amber'}`}>{z.tag}</div>
            </div>
            <div className="flex-1">
              <div className={`font-display font-semibold ${colors[z.color].text} mb-1`}>{z.label}</div>
              <p className="text-sm text-text/85 leading-relaxed">{z.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 card border-green/40 bg-green/[0.04]">
        <p className="text-green leading-relaxed">
          <span className="font-display font-semibold">Of all the patterns you trade, ORB is the most precisely calibrated to your 10:15-12:00 ET window.</span> The
          setup forms before your window opens; the trade triggers during your window. This is your bread-and-butter pattern.
        </p>
      </div>
    </SectionShell>
  );
}
// ================================================================
// SECTION 13 — PSYCHOLOGY
// ================================================================
function Section13Psychology() {
  return (
    <SectionShell n={13} title="Why the Pattern Forms (Psychology)">
      <div className="space-y-3 text-text/90 leading-relaxed">
        <p>
          <span className="text-green font-semibold">1.</span> At market open, big institutional buyers and sellers fight to find the day's fair price — they push price up and down testing for liquidity, establishing the day's high and low for the first 15-30 minutes <span className="text-muted">(the range)</span>.
        </p>
        <p>
          <span className="font-semibold" style={{color: C_RANGE}}>2.</span> Once the range is set, both sides know where the boundaries are and a tug-of-war begins inside it.
        </p>
        <p>
          <span className="text-amber font-semibold">3.</span> When one side accumulates enough force to break a boundary with a body close, the losing side's stops are taken out, fueling continuation in the breakout direction.
        </p>
        <p>
          <span className="text-green font-semibold">4.</span> The expected move equals the height of the range because that's how much disagreement existed during formation — once the disagreement is resolved, price tends to travel the same distance from the breakout.
        </p>
      </div>
    </SectionShell>
  );
}
// ================================================================
// SECTION 14 — SCALPING CHECKLIST
// ================================================================
function Section14Checklist() {
  const items = [
    'Range formed during 9:30-9:45 ET (15-minute window)',
    'Range high and range low clearly drawn (using wicks, not just bodies)',
    'No major economic news scheduled for the morning (FOMC/NFP/CPI/earnings)',
    'A 2-minute candle CLOSED above range high (or below range low) by ≥1 tick',
    'The candle AFTER the breakout confirmed (same direction, good body, rising volume)',
    'Volume on the breakout was higher than the average range volume',
    'My entry is during the 10:15-12:00 window (not after 12:00)',
    'Stop is on the opposite side of the range, OR just inside the broken level (your choice based on size)',
    'Target = range height projected from breakout',
    'R:R is at least 2:1',
    'This is one of my two trades for the session',
    'I will not hold past target — I respect the math'
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

// ================================================================
// SHELL + UTILITIES
// ================================================================
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
    cyan: 'border-cyan-400/40'
  };
  const titleColor = color === 'cyan' ? { color: C_RANGE } : {};
  return (
    <div className={`card-tight border ${colors[color]}`}>
      <div className="font-display font-bold mb-2" style={titleColor}>{title}</div>
      <p className="text-sm text-text/80 leading-relaxed">{body}</p>
    </div>
  );
}

function NumCircle({ x, y, n, color = C_BULL }) {
  return (
    <g>
      <circle cx={x} cy={y} r={12} fill={color} stroke="#000" strokeWidth={2} />
      <text x={x} y={y + 4.5} fill="#000" fontSize={13} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">{n}</text>
    </g>
  );
}

function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted text-sm">2-minute scalper's complete opening range breakout treatment.</div>
        <Link to="/drill" className="btn btn-primary px-6">Drill this pattern →</Link>
      </div>
    </footer>
  );
}
