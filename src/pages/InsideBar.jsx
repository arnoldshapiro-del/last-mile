import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// ================================================================
// COLOR CONSTANTS
// ================================================================
const C_BULL = '#10b981';     // bullish green
const C_BEAR = '#FF3D5A';     // bearish red
const C_MOTHER = '#06b6d4';   // cyan mother bar boundary
const C_INSIDE = '#a78bfa';   // violet inside bar
const C_BREAK = '#f97316';    // orange breakout marker
const C_ENTRY = '#10b981';    // entry green
const C_STOP = '#ef4444';     // stop red
const C_TARGET = '#f59e0b';   // target amber
const C_LABEL = '#e8e8e8';    // white label

// ================================================================
// ROOT
// ================================================================
export default function InsideBar() {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      <Header />
      <Section1Plain />
      <Section2ThreeParts />
      <Section2_5Identify />
      <Section3Variants />
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
      <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-3">Inside Bar Compression</h1>
      <p className="text-text/80 text-lg max-w-3xl leading-relaxed mb-3">
        A 2-minute candle whose entire range fits inside the previous candle. Compression that always
        precedes expansion. Twelve large worked examples, identification guide, decision tree, and target calculator.
      </p>
      <div className="card-tight border-green/40 bg-green/[0.04] max-w-3xl">
        <p className="text-green leading-relaxed">
          <span className="font-display font-semibold">The mother bar's high and low are everything.</span> They
          are the trigger lines for both directions. Every chart on this page draws them as solid cyan
          lines extending the full chart width — exactly how you should mark them on your own screen.
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
    <SectionShell n={1} title="What an Inside Bar Compression Actually Is (Plain Language)">
      <p className="mb-4">
        An <span className="font-semibold" style={{color: C_INSIDE}}>INSIDE BAR</span> is a 2-minute candle whose
        entire range — high to low — fits completely inside the previous candle's range. The previous candle
        (the larger one) is called the <span className="font-semibold" style={{color: C_MOTHER}}>MOTHER BAR</span>.
        The inside bar's high is lower than the mother bar's high. The inside bar's low is higher than the mother bar's
        low. Fully contained.
      </p>
      <p className="mb-4">
        When you see one or more inside bars after a strong mother bar, the market is COMPRESSING. Buyers and sellers
        are agreeing on a tight range — they've stopped fighting for now. But this calm is temporary. Compression
        always precedes expansion. The longer or tighter the compression, the bigger the eventual move.
      </p>
      <p>
        When price breaks <span className="text-green font-semibold">ABOVE</span> the mother bar's high with a candle
        close, you go LONG. When price breaks <span className="text-red font-semibold">BELOW</span> the mother bar's
        low with a candle close, you go SHORT. Stop on the opposite side of the mother bar. Target is typically 1-2x
        the mother bar's range projected from the breakout.
      </p>
    </SectionShell>
  );
}

// ================================================================
// SECTION 2 — THE THREE PARTS
// ================================================================
function Section2ThreeParts() {
  return (
    <SectionShell n={2} title="The Three Parts">
      <p className="mb-5">A textbook inside bar compression, fully labeled. The mother bar's high and low are the focal points. Everything else flows from them.</p>
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <ThreePartsSVG />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        <Tile color="cyan" title="1. Mother Bar (the container)" body="A wide-range 2-min candle. Its high and low define the trigger lines. The wider its range, the better the eventual move." />
        <Tile color="violet" title="2. Inside Bar (compression)" body="Next candle is fully contained — high lower than mother high, low higher than mother low. Buyers and sellers paused." />
        <Tile color="amber" title="3. Body Close = Trigger" body="A 2-min candle CLOSES above the mother high (long) or below the mother low (short). Stop opposite side, target 1-2× mother range." />
      </div>
    </SectionShell>
  );
}

function ThreePartsSVG() {
  const W = 1200, H = 600;
  const chartL = 60, chartT = 40, chartR = 1140, chartB = 540;
  const candles = [
    // Build-up
    { o: 22018, h: 22026, l: 22014, c: 22024, vol: 60 },
    { o: 22024, h: 22030, l: 22020, c: 22028, vol: 65 },
    { o: 22028, h: 22034, l: 22025, c: 22032, vol: 70 },
    // MOTHER BAR (idx 3) — wide range
    { o: 22032, h: 22050, l: 22030, c: 22048, vol: 130 },
    // INSIDE BAR (idx 4) — fully contained
    { o: 22045, h: 22047, l: 22035, c: 22041, vol: 55 },
    // Build-up inside range
    { o: 22041, h: 22046, l: 22037, c: 22044, vol: 50 },
    { o: 22044, h: 22049, l: 22039, c: 22045, vol: 48 },
    // BREAKOUT (idx 7)
    { o: 22045, h: 22064, l: 22043, c: 22062, vol: 145 },
    // Continuation
    { o: 22062, h: 22072, l: 22060, c: 22070, vol: 95 },
    { o: 22070, h: 22082, l: 22068, c: 22080, vol: 88 },
    { o: 22080, h: 22084, l: 22075, c: 22078, vol: 65 }
  ];
  const motherIdx = 3;
  const insideIdx = 4;
  const breakoutIdx = 7;
  const motherHigh = 22050;
  const motherLow = 22030;
  const motherRange = motherHigh - motherLow;
  const target = motherHigh + motherRange;

  const allHigh = Math.max(...candles.map(c => c.h), target + 5);
  const allLow = Math.min(...candles.map(c => c.l), motherLow - 5);
  const yMax = allHigh + 3;
  const yMin = allLow - 3;
  const yRange = yMax - yMin;

  const innerW = chartR - chartL;
  const innerH = chartB - chartT;
  const slot = innerW / candles.length;
  const bodyW = Math.max(10, slot * 0.62);
  const xFor = i => chartL + i * slot + slot / 2;
  const yFor = price => chartT + ((yMax - price) / yRange) * innerH;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block rounded-xl border border-border w-full h-auto"
      style={{ background: '#0a0a0a', minWidth: '900px' }}>
      {/* Title */}
      <text x={W / 2} y={24} fill={C_BULL} fontSize={14} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">
        INSIDE BAR COMPRESSION — THE THREE PARTS
      </text>

      {/* Grid */}
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={chartL} x2={chartR} y1={chartT + innerH * t} y2={chartT + innerH * t}
          stroke="#262626" strokeWidth={1} />
      ))}

      {/* MOTHER BAR — green dashed rectangle */}
      <rect x={xFor(motherIdx) - bodyW / 2 - 6} y={yFor(motherHigh) - 6}
        width={bodyW + 12} height={yFor(motherLow) - yFor(motherHigh) + 12}
        fill="none" stroke={C_BULL} strokeWidth={3} strokeDasharray="6 4" />
      <text x={xFor(motherIdx)} y={yFor(motherHigh) - 14} fill={C_BULL}
        fontSize={12} fontWeight="bold" fontFamily="'Space Mono', monospace" textAnchor="middle">
        1. MOTHER BAR
      </text>

      {/* INSIDE BAR — violet dashed rectangle */}
      <rect x={xFor(insideIdx) - bodyW / 2 - 5} y={yFor(candles[insideIdx].h) - 5}
        width={bodyW + 10} height={yFor(candles[insideIdx].l) - yFor(candles[insideIdx].h) + 10}
        fill="none" stroke={C_INSIDE} strokeWidth={2} strokeDasharray="4 3" />
      <text x={xFor(insideIdx)} y={yFor(candles[insideIdx].l) + 22} fill={C_INSIDE}
        fontSize={12} fontWeight="bold" fontFamily="'Space Mono', monospace" textAnchor="middle">
        2. INSIDE BAR
      </text>

      {/* MOTHER BAR HIGH — solid 4px cyan extending full chart width */}
      <line x1={chartL} y1={yFor(motherHigh)} x2={chartR} y2={yFor(motherHigh)}
        stroke={C_MOTHER} strokeWidth={4} />
      <circle cx={chartL + 8} cy={yFor(motherHigh)} r={11} fill={C_BULL} stroke="#000" strokeWidth={2} />
      <text x={chartL + 8} y={yFor(motherHigh) + 4.5} fill="#000" fontSize={13} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">A</text>
      <text x={chartL + 26} y={yFor(motherHigh) - 6} fill={C_MOTHER} fontSize={13} fontWeight="bold"
        fontFamily="'Space Mono', monospace">Mother Bar High @ {motherHigh}</text>

      {/* MOTHER BAR LOW — solid 4px cyan */}
      <line x1={chartL} y1={yFor(motherLow)} x2={chartR} y2={yFor(motherLow)}
        stroke={C_MOTHER} strokeWidth={4} />
      <circle cx={chartL + 8} cy={yFor(motherLow)} r={11} fill={C_BULL} stroke="#000" strokeWidth={2} />
      <text x={chartL + 8} y={yFor(motherLow) + 4.5} fill="#000" fontSize={13} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">B</text>
      <text x={chartL + 26} y={yFor(motherLow) + 18} fill={C_MOTHER} fontSize={13} fontWeight="bold"
        fontFamily="'Space Mono', monospace">Mother Bar Low @ {motherLow}</text>

      {/* Mother bar range arrow */}
      <line x1={chartR - 30} x2={chartR - 30} y1={yFor(motherHigh)} y2={yFor(motherLow)}
        stroke={C_MOTHER} strokeWidth={1.5} />
      <polygon points={`${chartR - 30},${yFor(motherHigh)} ${chartR - 34},${yFor(motherHigh) + 8} ${chartR - 26},${yFor(motherHigh) + 8}`} fill={C_MOTHER} />
      <polygon points={`${chartR - 30},${yFor(motherLow)} ${chartR - 34},${yFor(motherLow) - 8} ${chartR - 26},${yFor(motherLow) - 8}`} fill={C_MOTHER} />
      <text x={chartR - 38} y={yFor((motherHigh + motherLow) / 2) + 4} fill={C_MOTHER}
        fontSize={11} fontFamily="'Space Mono', monospace" textAnchor="end" fontWeight="bold">
        range = {motherRange}
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

      {/* Breakout arrow */}
      <line x1={xFor(breakoutIdx)} y1={yFor(motherHigh) - 70}
        x2={xFor(breakoutIdx)} y2={yFor(motherHigh) - 14}
        stroke={C_BREAK} strokeWidth={3} />
      <polygon points={`${xFor(breakoutIdx)},${yFor(motherHigh) - 10}
        ${xFor(breakoutIdx) - 8},${yFor(motherHigh) - 24}
        ${xFor(breakoutIdx) + 8},${yFor(motherHigh) - 24}`}
        fill={C_BREAK} />
      <text x={xFor(breakoutIdx)} y={yFor(motherHigh) - 80} fill={C_BREAK}
        fontSize={12} fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="middle">
        3. BODY CLOSE ABOVE = LONG
      </text>

      {/* Target line */}
      <line x1={chartL} y1={yFor(target)} x2={chartR} y2={yFor(target)}
        stroke={C_TARGET} strokeWidth={2.5} strokeDasharray="8 4" opacity={0.9} />
      <text x={chartR - 8} y={yFor(target) - 6} fill={C_TARGET}
        fontSize={12} fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="end">
        TARGET @ {target} (1× mother range projected)
      </text>

      {/* Stop line */}
      <line x1={xFor(breakoutIdx) - slot} y1={yFor(motherLow + 1)}
        x2={chartR - 220} y2={yFor(motherLow + 1)}
        stroke={C_STOP} strokeWidth={1.8} strokeDasharray="6 4" opacity={0.7} />
      <text x={xFor(breakoutIdx) - slot} y={yFor(motherLow + 1) + 14} fill={C_STOP}
        fontSize={11} fontFamily="'Space Mono', monospace">
        STOP @ opposite side of mother bar
      </text>

      {/* Inset alternate scenario */}
      <g transform="translate(880, 380)">
        <rect x={0} y={0} width={250} height={150} fill="#111" stroke="#444" strokeWidth={1} rx={4} />
        <text x={125} y={16} fill="#888" fontSize={10} textAnchor="middle"
          fontFamily="'Space Mono', monospace">ALT: same setup, downside resolution</text>
        <line x1={10} x2={240} y1={40} y2={40} stroke={C_MOTHER} strokeWidth={2.5} />
        <line x1={10} x2={240} y1={90} y2={90} stroke={C_MOTHER} strokeWidth={2.5} />
        <text x={14} y={36} fill={C_MOTHER} fontSize={9} fontFamily="'Space Mono', monospace">mother high</text>
        <text x={14} y={102} fill={C_MOTHER} fontSize={9} fontFamily="'Space Mono', monospace">mother low</text>
        {/* mother bar */}
        <line x1={70} x2={70} y1={40} y2={90} stroke={C_BEAR} strokeWidth={1.5} />
        <rect x={66} y={45} width={8} height={40} fill={C_BEAR} />
        {/* inside bar */}
        <line x1={100} x2={100} y1={55} y2={80} stroke={C_BEAR} strokeWidth={1.5} />
        <rect x={96} y={60} width={8} height={15} fill={C_BEAR} />
        {/* downside breakout */}
        <line x1={150} x2={150} y1={75} y2={130} stroke={C_BEAR} strokeWidth={1.5} />
        <rect x={146} y={88} width={8} height={40} fill={C_BEAR} />
        <text x={170} y={120} fill={C_BREAK} fontSize={9} fontFamily="'Space Mono', monospace">→ SHORT</text>
      </g>

      {/* Time labels */}
      <line x1={chartL} y1={chartB + 8} x2={chartR} y2={chartB + 8} stroke="#262626" />
      {[
        { i: 0, t: '10:20' }, { i: motherIdx, t: '10:26' }, { i: insideIdx, t: '10:28' }, { i: breakoutIdx, t: '10:34' }
      ].map((m, i) => (
        <g key={i}>
          <line x1={xFor(m.i)} x2={xFor(m.i)} y1={chartB} y2={chartB + 14} stroke="#666" />
          <text x={xFor(m.i)} y={chartB + 28} fill="#aaa" fontSize={11} textAnchor="middle"
            fontFamily="'Space Mono', monospace">{m.t}</text>
        </g>
      ))}
    </svg>
  );
}

// ================================================================
// SECTION 2.5 — IDENTIFY AND TRADE
// ================================================================
function Section2_5Identify() {
  return (
    <SectionShell n="2.5" title="How to Identify and Trade Inside Bars (Step by Step)">
      <p className="mb-5">
        Five numbered markers. Master these and you can spot inside bar setups instantly on a 2-min chart — and avoid the most common entry mistakes.
      </p>
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <IdentifyGuideSVG />
      </div>
      <div className="mt-5 card border-green/40 bg-green/[0.04]">
        <div className="font-display font-semibold text-green mb-3">To trade an inside bar:</div>
        <ol className="space-y-1.5 text-text/90 leading-relaxed">
          <li><span className="text-green num">1.</span> Find a wide-range candle (mother bar).</li>
          <li><span className="text-green num">2.</span> Check if the next candle is fully contained (inside bar).</li>
          <li><span className="text-green num">3.</span> Draw horizontal lines at the mother bar's high and low.</li>
          <li><span className="text-green num">4.</span> Long when a 2-min candle closes above the high. Short when it closes below the low.</li>
          <li><span className="text-green num">5.</span> Stop on the opposite side of the mother bar. Target = 1-2× mother bar range.</li>
        </ol>
      </div>
    </SectionShell>
  );
}

function IdentifyGuideSVG() {
  const W = 1200, H = 600;
  const chartL = 30, chartT = 30, chartR = 720, chartB = 540;
  const capX = 750;
  const candles = [
    { o: 22018, h: 22024, l: 22014, c: 22022 },
    { o: 22022, h: 22028, l: 22020, c: 22026 },
    // MOTHER BAR (idx 2)
    { o: 22026, h: 22050, l: 22024, c: 22048 },
    // INSIDE BAR (idx 3)
    { o: 22045, h: 22047, l: 22032, c: 22038 },
    // Build-up
    { o: 22038, h: 22044, l: 22033, c: 22042 },
    { o: 22042, h: 22049, l: 22039, c: 22045 },
    // Wick fail (idx 6) — wicks above mother high but closes back inside
    { o: 22045, h: 22055, l: 22043, c: 22047 },
    { o: 22047, h: 22049, l: 22043, c: 22046 },
    // BREAKOUT (idx 8) — body close above
    { o: 22046, h: 22064, l: 22045, c: 22062 }
  ];
  const motherIdx = 2;
  const insideIdx = 3;
  const wickIdx = 6;
  const breakoutIdx = 8;
  const motherHigh = 22050;
  const motherLow = 22024;
  const minP = Math.min(...candles.map(c => c.l)) - 4;
  const maxP = Math.max(...candles.map(c => c.h)) + 6;
  const innerW = chartR - chartL;
  const innerH = chartB - chartT;
  const slot = innerW / candles.length;
  const bodyW = Math.max(10, slot * 0.62);
  const xFor = i => chartL + i * slot + slot / 2;
  const yFor = price => chartT + ((maxP - price) / (maxP - minP)) * innerH;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block rounded-xl border border-border w-full h-auto"
      style={{ background: '#0a0a0a', minWidth: '880px' }}>
      <text x={W / 2} y={20} fill={C_BULL} fontSize={14} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">
        INSIDE BAR — 5 STEPS
      </text>
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={chartL} x2={chartR} y1={chartT + innerH * t} y2={chartT + innerH * t} stroke="#262626" strokeWidth={1} />
      ))}

      {/* MOTHER BAR — green dashed rect */}
      <rect x={xFor(motherIdx) - bodyW / 2 - 5} y={yFor(motherHigh) - 5}
        width={bodyW + 10} height={yFor(motherLow) - yFor(motherHigh) + 10}
        fill="none" stroke={C_BULL} strokeWidth={3} strokeDasharray="6 4" />

      {/* INSIDE BAR — violet dashed rect */}
      <rect x={xFor(insideIdx) - bodyW / 2 - 4} y={yFor(candles[insideIdx].h) - 4}
        width={bodyW + 8} height={yFor(candles[insideIdx].l) - yFor(candles[insideIdx].h) + 8}
        fill="none" stroke={C_INSIDE} strokeWidth={2} strokeDasharray="4 3" />

      {/* MOTHER BAR HIGH — solid 4px cyan */}
      <line x1={chartL} y1={yFor(motherHigh)} x2={chartR} y2={yFor(motherHigh)}
        stroke={C_MOTHER} strokeWidth={4} />
      {/* MOTHER BAR LOW — solid 4px cyan */}
      <line x1={chartL} y1={yFor(motherLow)} x2={chartR} y2={yFor(motherLow)}
        stroke={C_MOTHER} strokeWidth={4} />

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

      {/* Marker 1 — at mother bar */}
      <NumCircle x={xFor(motherIdx)} y={yFor(motherHigh) - 26} n="1" color={C_BULL} />

      {/* Marker 2 — at inside bar */}
      <NumCircle x={xFor(insideIdx)} y={yFor(candles[insideIdx].l) + 28} n="2" color={C_INSIDE} />

      {/* Marker 3 — labels on mother high/low lines */}
      <NumCircle x={chartR - 18} y={yFor(motherHigh)} n="3" color={C_MOTHER} />
      <text x={chartR - 36} y={yFor(motherHigh) - 8} fill={C_MOTHER} fontSize={11}
        fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="end">MOTHER HIGH</text>
      <NumCircle x={chartR - 18} y={yFor(motherLow)} n="3" color={C_MOTHER} />
      <text x={chartR - 36} y={yFor(motherLow) + 16} fill={C_MOTHER} fontSize={11}
        fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="end">MOTHER LOW</text>

      {/* Marker 4 — orange arrow at breakout */}
      <line x1={xFor(breakoutIdx)} y1={yFor(motherHigh) - 70} x2={xFor(breakoutIdx)} y2={yFor(motherHigh) - 14}
        stroke={C_BREAK} strokeWidth={3} />
      <polygon points={`${xFor(breakoutIdx)},${yFor(motherHigh) - 10}
        ${xFor(breakoutIdx) - 7},${yFor(motherHigh) - 24}
        ${xFor(breakoutIdx) + 7},${yFor(motherHigh) - 24}`}
        fill={C_BREAK} />
      <NumCircle x={xFor(breakoutIdx)} y={yFor(motherHigh) - 85} n="4" color={C_BREAK} />

      {/* Marker 5 — red X at wick fail */}
      <g transform={`translate(${xFor(wickIdx)},${yFor(candles[wickIdx].h) - 14})`}>
        <g stroke={C_STOP} strokeWidth={3} strokeLinecap="round" opacity={0.95}>
          <line x1={-9} y1={-9} x2={9} y2={9} />
          <line x1={9} y1={-9} x2={-9} y2={9} />
        </g>
      </g>
      <NumCircle x={xFor(wickIdx)} y={yFor(candles[wickIdx].h) - 36} n="5" color={C_STOP} />

      {/* Divider */}
      <line x1={chartR + 8} y1={chartT} x2={chartR + 8} y2={chartB} stroke="#262626" strokeWidth={1} />

      {/* Captions */}
      <CaptionBlock x={capX} y={40} num={1} color={C_BULL}
        title="Find a wide-range candle"
        body="Look for a candle with a notably wide range — strong directional move, long body or wicks. This is your potential MOTHER BAR. Wider = better setup." />
      <CaptionBlock x={capX} y={140} num={2} color={C_INSIDE}
        title="Check if next candle is contained"
        body="Is its high LOWER than the mother high AND its low HIGHER than the mother low? If yes → INSIDE BAR. Compression is forming." />
      <CaptionBlock x={capX} y={240} num={3} color={C_MOTHER}
        title="Draw the trigger lines"
        body="Two horizontal lines extending right — one at mother high, one at mother low. These are your trigger lines for both directions." />
      <CaptionBlock x={capX} y={340} num={4} color={C_BREAK}
        title="Wait for body close"
        body="A 2-min candle CLOSES above the high → LONG. Below the low → SHORT. Body close, not just a wick. Patience pays here." />
      <CaptionBlock x={capX} y={450} num={5} color={C_STOP}
        title="A wick poke is NOT a signal"
        body="If a candle pokes through but closes back inside the mother range, the compression has not released. Stay patient — wait for the real body close." />
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
// SECTION 3 — VARIANTS COMPARISON TABLE
// ================================================================
function Section3Variants() {
  const rows = [
    { v: 'Single Inside Bar',   d: 'One candle fully inside the mother bar',                  r: 'Standard — moderate signal' },
    { v: 'Double Inside Bar',   d: 'Two consecutive inside bars (each smaller)',              r: 'Stronger — coiling' },
    { v: 'Triple+ Coil',        d: '3+ inside bars stacking',                                  r: 'Strongest — explosive break', highlight: true },
    { v: 'NR4',                 d: "Today's range = narrowest of last 4 candles",             r: 'Statistical edge' },
    { v: 'NR7',                 d: "Today's range = narrowest of last 7 candles",             r: 'Highest statistical edge', highlight: true },
    { v: 'Inside Bar at Level', d: 'Inside bar forms at major support/resistance',            r: 'Direction biased by level' }
  ];
  return (
    <SectionShell n={3} title="Compression Variants (Comparison Table)">
      <p className="mb-5">Inside bar compressions come in flavors. Coils and NR7 are the highest-quality variants for a 2-min scalp.</p>
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-sm border-collapse">
          <thead>
            <tr className="text-left text-muted uppercase tracking-wider text-xs">
              <th className="py-2 px-3 border-b border-border">Variant</th>
              <th className="py-2 px-3 border-b border-border">Description</th>
              <th className="py-2 px-3 border-b border-border">Reliability</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={r.highlight ? 'bg-green/10 border-l-4 border-green' : ''}>
                <td className={`py-2 px-3 border-b border-border ${r.highlight ? 'text-green font-bold' : ''}`}>{r.v}</td>
                <td className="py-2 px-3 border-b border-border">{r.d}</td>
                <td className="py-2 px-3 border-b border-border">{r.r}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 card-tight border-green/40 bg-green/5">
        <p className="text-green font-display font-bold text-base md:text-lg leading-relaxed">
          On a 2-minute chart, a single inside bar is common but moderate-signal. A double inside bar is meaningful.
          A triple+ coil is rare but produces explosive breakouts. Always favor coils over single inside bars when you can find them.
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
    <SectionShell n={4} title="Twelve Large Examples — Each with Mother Bar Lines Drawn Explicitly">
      <p className="mb-6">Each example is its own exhibit. Mother bar high and low are drawn as solid 4px cyan lines extending the full chart width. Mother bar in green dashed rectangle. Inside bar(s) in violet dashed rectangle.</p>
      <div className="space-y-8">
        {IB_EXAMPLES.map((ex) => (
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
        <IBChart ex={ex} />
      </div>
      <p className="mt-4 leading-relaxed text-text/90 max-w-4xl">{ex.caption}</p>
    </div>
  );
}

function IBChart({ ex }) {
  const W = 1200, H = 540;
  const padL = 60, padR = 60, padT = 40, padB = 60;
  const volH = 80;
  const chartL = padL, chartR = W - padR;
  const chartT = padT, chartB = H - padB - volH - 10;
  const candles = ex.candles;
  const motherHigh = ex.motherHigh;
  const motherLow = ex.motherLow;
  const motherRange = motherHigh - motherLow;
  const allHigh = Math.max(...candles.map(c => c.h), ex.targetPrice ?? -Infinity, motherHigh);
  const allLow = Math.min(...candles.map(c => c.l), ex.targetPrice ?? Infinity, motherLow);
  const yMax = allHigh + motherRange * 0.18;
  const yMin = allLow - motherRange * 0.18;
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

  const motherIdx = ex.motherIdx;
  const insideIdxs = ex.insideIdxs || [];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block rounded-xl border border-border w-full h-auto"
      style={{ background: '#0a0a0a', minWidth: '900px' }}>
      {/* Grid */}
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={chartL} x2={chartR} y1={chartT + innerH * t} y2={chartT + innerH * t}
          stroke="#262626" strokeWidth={1} />
      ))}

      {/* Horizontal level overlay (resistance/support) */}
      {ex.levelPrice != null && (
        <g>
          <line x1={chartL} y1={yFor(ex.levelPrice)} x2={chartR} y2={yFor(ex.levelPrice)}
            stroke={ex.levelKind === 'support' ? '#22c55e' : '#ef4444'} strokeWidth={2}
            strokeDasharray="2 4" opacity={0.8} />
          <text x={chartL + 8} y={yFor(ex.levelPrice) - 5}
            fill={ex.levelKind === 'support' ? '#22c55e' : '#ef4444'} fontSize={11}
            fontFamily="'Space Mono', monospace" fontWeight="bold">
            {ex.levelKind === 'support' ? 'SUPPORT' : 'RESISTANCE'} @ {ex.levelPrice}
          </text>
        </g>
      )}

      {/* MOTHER BAR HIGH — solid 4px cyan, full chart width */}
      <line x1={chartL} y1={yFor(motherHigh)} x2={chartR} y2={yFor(motherHigh)}
        stroke={C_MOTHER} strokeWidth={4} />
      <text x={chartL + 6} y={yFor(motherHigh) - 6} fill={C_MOTHER}
        fontSize={12} fontFamily="'Space Mono', monospace" fontWeight="bold">
        Mother High @ {motherHigh}
      </text>

      {/* MOTHER BAR LOW — solid 4px cyan, full chart width */}
      <line x1={chartL} y1={yFor(motherLow)} x2={chartR} y2={yFor(motherLow)}
        stroke={C_MOTHER} strokeWidth={4} />
      <text x={chartL + 6} y={yFor(motherLow) + 18} fill={C_MOTHER}
        fontSize={12} fontFamily="'Space Mono', monospace" fontWeight="bold">
        Mother Low @ {motherLow}
      </text>

      {/* Mother range arrow */}
      <line x1={chartR - 28} x2={chartR - 28} y1={yFor(motherHigh)} y2={yFor(motherLow)}
        stroke={C_MOTHER} strokeWidth={1.5} />
      <polygon points={`${chartR - 28},${yFor(motherHigh)} ${chartR - 32},${yFor(motherHigh) + 8} ${chartR - 24},${yFor(motherHigh) + 8}`} fill={C_MOTHER} />
      <polygon points={`${chartR - 28},${yFor(motherLow)} ${chartR - 32},${yFor(motherLow) - 8} ${chartR - 24},${yFor(motherLow) - 8}`} fill={C_MOTHER} />
      <text x={chartR - 36} y={yFor((motherHigh + motherLow) / 2) + 4} fill={C_MOTHER}
        fontSize={11} fontFamily="'Space Mono', monospace" textAnchor="end" fontWeight="bold">
        r={motherRange}
      </text>

      {/* Mother bar — green dashed rectangle */}
      {motherIdx != null && (
        <g>
          <rect x={xFor(motherIdx) - bodyW / 2 - 5} y={yFor(motherHigh) - 5}
            width={bodyW + 10} height={yFor(motherLow) - yFor(motherHigh) + 10}
            fill="none" stroke={C_BULL} strokeWidth={3} strokeDasharray="6 4" />
          <text x={xFor(motherIdx)} y={yFor(motherHigh) - 14} fill={C_BULL}
            fontSize={11} fontWeight="bold" fontFamily="'Space Mono', monospace" textAnchor="middle">
            MOTHER BAR
          </text>
        </g>
      )}

      {/* Inside bar(s) — violet dashed rectangles */}
      {insideIdxs.map((idx, k) => {
        const c = candles[idx];
        return (
          <g key={`ib-${idx}`}>
            <rect x={xFor(idx) - bodyW / 2 - 4} y={yFor(c.h) - 4}
              width={bodyW + 8} height={yFor(c.l) - yFor(c.h) + 8}
              fill="none" stroke={C_INSIDE} strokeWidth={2} strokeDasharray="4 3" />
            <text x={xFor(idx)} y={yFor(c.l) + 16} fill={C_INSIDE}
              fontSize={10} fontWeight="bold" fontFamily="'Space Mono', monospace" textAnchor="middle">
              {insideIdxs.length > 1 ? `IB ${k + 1}` : 'INSIDE BAR'}
            </text>
          </g>
        );
      })}

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
        const isInside = insideIdxs.includes(i);
        return (
          <rect key={`v${i}`} x={x - bodyW / 2} y={yT}
            width={bodyW} height={volBottom - yT}
            fill={color} opacity={isBreakout ? 0.95 : isInside ? 0.35 : 0.5} />
        );
      })}

      {/* Breakout marker */}
      {ex.breakoutType === 'up' && ex.breakoutIdx != null && (
        <g>
          <line x1={xFor(ex.breakoutIdx)} y1={yFor(motherHigh) - 56}
            x2={xFor(ex.breakoutIdx)} y2={yFor(motherHigh) - 12}
            stroke={C_BREAK} strokeWidth={3} />
          <polygon points={`${xFor(ex.breakoutIdx)},${yFor(motherHigh) - 8}
            ${xFor(ex.breakoutIdx) - 7},${yFor(motherHigh) - 22}
            ${xFor(ex.breakoutIdx) + 7},${yFor(motherHigh) - 22}`}
            fill={C_BREAK} />
          <text x={xFor(ex.breakoutIdx)} y={yFor(motherHigh) - 64} fill={C_BREAK}
            fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="middle">
            {ex.breakLabel || 'BODY CLOSE — LONG'}
          </text>
        </g>
      )}
      {ex.breakoutType === 'down' && ex.breakoutIdx != null && (
        <g>
          <line x1={xFor(ex.breakoutIdx)} y1={yFor(motherLow) + 56}
            x2={xFor(ex.breakoutIdx)} y2={yFor(motherLow) + 12}
            stroke={C_BREAK} strokeWidth={3} />
          <polygon points={`${xFor(ex.breakoutIdx)},${yFor(motherLow) + 8}
            ${xFor(ex.breakoutIdx) - 7},${yFor(motherLow) + 22}
            ${xFor(ex.breakoutIdx) + 7},${yFor(motherLow) + 22}`}
            fill={C_BREAK} />
          <text x={xFor(ex.breakoutIdx)} y={yFor(motherLow) + 70} fill={C_BREAK}
            fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="middle">
            {ex.breakLabel || 'BODY CLOSE — SHORT'}
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

      {/* Retest marker */}
      {ex.retestIdx != null && (
        <g>
          <circle cx={xFor(ex.retestIdx)} cy={yFor(ex.retestPrice)} r={9} fill={C_MOTHER} stroke="#000" strokeWidth={2} />
          <line x1={xFor(ex.breakoutIdx) + 8} y1={yFor(motherHigh)} x2={xFor(ex.retestIdx) - 8} y2={yFor(ex.retestPrice)} stroke={C_MOTHER} strokeWidth={1} strokeDasharray="3 3" opacity={0.6} />
          <text x={xFor(ex.retestIdx) + 14} y={yFor(ex.retestPrice) + 4} fill={C_MOTHER}
            fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">retest entry</text>
        </g>
      )}

      {/* Tier markers (T1 yellow, T2 green, T3 cyan) */}
      {ex.showTiers && (
        <g>
          <circle cx={xFor(ex.breakoutIdx)} cy={yFor(motherHigh) + 8} r={7} fill="#FFB44A" stroke="#000" strokeWidth={1.5} />
          <text x={xFor(ex.breakoutIdx) - 14} y={yFor(motherHigh) + 26} fill="#FFB44A" fontSize={10} fontFamily="'Space Mono', monospace" textAnchor="end" fontWeight="bold">T1</text>
          <circle cx={xFor(ex.breakoutIdx + 1)} cy={yFor(candles[ex.breakoutIdx + 1].c) - 4} r={7} fill={C_BULL} stroke="#000" strokeWidth={1.5} />
          <text x={xFor(ex.breakoutIdx + 1) - 14} y={yFor(candles[ex.breakoutIdx + 1].c) + 14} fill={C_BULL} fontSize={10} fontFamily="'Space Mono', monospace" textAnchor="end" fontWeight="bold">T2</text>
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

      {/* Time markers */}
      <line x1={chartL} y1={chartB + 6} x2={chartR} y2={chartB + 6} stroke="#262626" />
      {(ex.timeMarkers || []).map((m, i) => m.i != null && (
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

const C2 = (o, h, l, c, vol) => ({ o, h, l, c, vol });

const IB_EXAMPLES = buildIBExamples();

function buildIBExamples() {
  return [
    ex1Single(),
    ex2Double(),
    ex3TripleCoil(),
    ex4NR7(),
    ex5AtResistance(),
    ex6AtSupport(),
    ex7Retest(),
    ex8FailedReversal(),
    ex9TrendContinuation(),
    ex10InRange(),
    ex11VolumeConfirmation(),
    ex12YourWindow()
  ];
}

// EX 1 — SINGLE INSIDE BAR (TEXTBOOK)
function ex1Single() {
  const candles = [
    C2(22018, 22025, 22014, 22022, 60),
    C2(22022, 22028, 22020, 22026, 65),
    C2(22026, 22032, 22022, 22030, 70),
    // MOTHER BAR (idx 3) wide range 22030-22060
    C2(22030, 22060, 22028, 22058, 145),
    // INSIDE BAR (idx 4)
    C2(22055, 22057, 22038, 22042, 55),
    // build
    C2(22042, 22050, 22038, 22048, 50),
    C2(22048, 22056, 22045, 22052, 48),
    C2(22052, 22059, 22050, 22055, 45),
    // BREAKOUT (idx 8)
    C2(22055, 22074, 22054, 22072, 160),
    C2(22072, 22082, 22070, 22080, 110),
    C2(22080, 22094, 22078, 22090, 95),
    C2(22090, 22094, 22086, 22090, 70)
  ];
  return {
    n: 1, title: 'The Single Inside Bar Breakout (Textbook)',
    candles, motherHigh: 22060, motherLow: 22028,
    motherIdx: 3, insideIdxs: [4],
    breakoutIdx: 8, breakoutType: 'up',
    targetPrice: 22092, stopPrice: 22028,
    timeMarkers: [{ i: 0, t: '10:14' }, { i: 3, t: '10:20' }, { i: 4, t: '10:22' }, { i: 8, t: '10:30' }],
    caption: "Wide-range mother bar, one inside bar, decisive break above with volume. Take it. The cleanest single-inside-bar setup you'll see. Mother range = 32 points. Target = breakout (22060) + 32 = 22092."
  };
}

// EX 2 — DOUBLE INSIDE BAR (COILING)
function ex2Double() {
  const candles = [
    C2(22018, 22024, 22014, 22022, 60),
    C2(22022, 22028, 22020, 22026, 62),
    // MOTHER BAR (idx 2)
    C2(22026, 22055, 22024, 22053, 140),
    // IB 1 (idx 3) — fully inside mother
    C2(22050, 22052, 22034, 22040, 60),
    // IB 2 (idx 4) — fully inside IB 1
    C2(22040, 22049, 22037, 22043, 42),
    // build
    C2(22043, 22050, 22040, 22047, 38),
    C2(22047, 22054, 22045, 22051, 36),
    // BREAKOUT (idx 7)
    C2(22051, 22074, 22050, 22072, 165),
    C2(22072, 22084, 22070, 22082, 115),
    C2(22082, 22094, 22080, 22092, 95),
    C2(22092, 22096, 22088, 22090, 70)
  ];
  return {
    n: 2, title: 'The Double Inside Bar (Coiling)',
    candles, motherHigh: 22055, motherLow: 22024,
    motherIdx: 2, insideIdxs: [3, 4],
    breakoutIdx: 7, breakoutType: 'up',
    targetPrice: 22086, stopPrice: 22024,
    timeMarkers: [{ i: 0, t: '10:18' }, { i: 2, t: '10:22' }, { i: 4, t: '10:26' }, { i: 7, t: '10:32' }],
    caption: "Two inside bars in a row = stronger compression = bigger expansion. Volume contracts each candle (140 → 60 → 42). When the breakout comes, it runs hard — the energy has been building. Mother range = 31, target = 22082+ but the move often extends further with a double IB."
  };
}

// EX 3 — TRIPLE COIL (EXPLOSIVE)
function ex3TripleCoil() {
  const candles = [
    C2(22018, 22024, 22014, 22022, 60),
    C2(22022, 22028, 22020, 22026, 62),
    // MOTHER BAR (idx 2)
    C2(22026, 22060, 22024, 22056, 155),
    // IB 1
    C2(22054, 22056, 22034, 22040, 65),
    // IB 2 (smaller)
    C2(22040, 22050, 22038, 22046, 45),
    // IB 3 (smaller still)
    C2(22046, 22049, 22042, 22045, 32),
    // IB 4 (tiny)
    C2(22045, 22048, 22044, 22046, 25),
    // BREAKOUT (idx 7) — explosive
    C2(22046, 22082, 22045, 22080, 200),
    C2(22080, 22102, 22078, 22100, 165),
    C2(22100, 22120, 22098, 22118, 130),
    C2(22118, 22125, 22113, 22120, 95),
    C2(22120, 22128, 22116, 22122, 70)
  ];
  return {
    n: 3, title: 'The Triple+ Coil (Explosive)',
    candles, motherHigh: 22060, motherLow: 22024,
    motherIdx: 2, insideIdxs: [3, 4, 5, 6],
    breakoutIdx: 7, breakoutType: 'up',
    targetPrice: 22096, stopPrice: 22024,
    timeMarkers: [{ i: 0, t: '10:14' }, { i: 2, t: '10:18' }, { i: 6, t: '10:26' }, { i: 7, t: '10:28' }],
    caption: "Coils are rare but produce the largest moves. Four inside bars stacking, each smaller than the last. The compression has built so much energy that the release blasts past the standard 1× target. Mother range = 36, conservative target = 22096; reality runs to 22128. Trail your stop and let it run."
  };
}

// EX 4 — NR7 BREAKOUT
function ex4NR7() {
  // First 7 candles set context, the 7th is narrowest
  const candles = [
    C2(22020, 22035, 22018, 22030, 90),  // range = 17
    C2(22030, 22042, 22028, 22038, 85),  // range = 14
    C2(22038, 22050, 22034, 22045, 80),  // range = 16
    C2(22045, 22054, 22041, 22050, 75),  // range = 13
    C2(22050, 22056, 22045, 22052, 70),  // range = 11
    C2(22052, 22056, 22048, 22054, 60),  // range = 8
    C2(22054, 22056, 22052, 22055, 45),  // range = 4 — NR7 (narrowest)
    // BREAKOUT (idx 7)
    C2(22055, 22078, 22054, 22076, 175),
    C2(22076, 22090, 22074, 22088, 120),
    C2(22088, 22102, 22086, 22100, 95),
    C2(22100, 22106, 22095, 22102, 75)
  ];
  return {
    n: 4, title: 'The NR7 Breakout (Statistical Edge)',
    candles, motherHigh: 22056, motherLow: 22052,
    motherIdx: 5, insideIdxs: [6],
    breakoutIdx: 7, breakoutType: 'up',
    targetPrice: 22060, stopPrice: 22052,
    timeMarkers: [{ i: 0, t: '10:18' }, { i: 6, t: '10:30' }, { i: 7, t: '10:32' }, { i: 10, t: '10:38' }],
    caption: "NR7 = narrowest range of the last 7 candles. The 7th candle's range (4 points) is clearly smaller than every prior candle (8, 11, 13, 16, 14, 17). Statistically, the candle following an NR7 expands its range significantly — one of the most reliable mechanical signals in scalping. The break runs far past the small mother target."
  };
}

// EX 5 — INSIDE BAR AT RESISTANCE (DOWNSIDE BREAK)
function ex5AtResistance() {
  const candles = [
    C2(22020, 22030, 22018, 22028, 75),
    C2(22028, 22038, 22025, 22035, 80),
    C2(22035, 22048, 22033, 22045, 90),
    C2(22045, 22052, 22042, 22050, 95),
    // MOTHER BAR (idx 4) — right at resistance 22055
    C2(22050, 22055, 22035, 22038, 130),
    // INSIDE BAR (idx 5)
    C2(22038, 22045, 22037, 22042, 55),
    C2(22042, 22048, 22039, 22043, 50),
    C2(22043, 22049, 22038, 22041, 48),
    // DOWNSIDE BREAKOUT (idx 8) — sellers defend the resistance
    C2(22041, 22042, 22020, 22022, 155),
    C2(22022, 22024, 22008, 22010, 120),
    C2(22010, 22014, 21998, 22002, 95),
    C2(22002, 22006, 21992, 21998, 75)
  ];
  return {
    n: 5, title: 'Inside Bar at Resistance (Downside Break)',
    candles, motherHigh: 22055, motherLow: 22035,
    motherIdx: 4, insideIdxs: [5],
    breakoutIdx: 8, breakoutType: 'down',
    levelPrice: 22055, levelKind: 'resistance',
    targetPrice: 22015, stopPrice: 22055,
    timeMarkers: [{ i: 0, t: '10:14' }, { i: 4, t: '10:22' }, { i: 5, t: '10:24' }, { i: 8, t: '10:30' }],
    caption: "When compression happens AT a key level, the breakout direction is biased toward the level holding. Mother bar wicks up to resistance (22055) but closes back inside. Inside bar follows. Sellers defend the level. The compression resolves DOWN. Always note where compression is forming relative to higher-timeframe levels — they are direction filters."
  };
}

// EX 6 — INSIDE BAR AT SUPPORT (UPSIDE BREAK)
function ex6AtSupport() {
  const candles = [
    C2(22080, 22082, 22068, 22070, 80),
    C2(22070, 22074, 22058, 22060, 85),
    C2(22060, 22064, 22050, 22052, 90),
    C2(22052, 22054, 22045, 22048, 95),
    // MOTHER BAR (idx 4) — right at support 22030
    C2(22048, 22055, 22030, 22052, 130),
    // INSIDE BAR (idx 5)
    C2(22050, 22054, 22038, 22042, 55),
    C2(22042, 22048, 22038, 22045, 50),
    C2(22045, 22052, 22041, 22048, 48),
    // UPSIDE BREAKOUT (idx 8)
    C2(22048, 22070, 22047, 22068, 155),
    C2(22068, 22084, 22066, 22080, 120),
    C2(22080, 22094, 22078, 22090, 95),
    C2(22090, 22096, 22086, 22092, 70)
  ];
  return {
    n: 6, title: 'Inside Bar at Support (Upside Break)',
    candles, motherHigh: 22055, motherLow: 22030,
    motherIdx: 4, insideIdxs: [5],
    breakoutIdx: 8, breakoutType: 'up',
    levelPrice: 22030, levelKind: 'support',
    targetPrice: 22080, stopPrice: 22030,
    timeMarkers: [{ i: 0, t: '10:14' }, { i: 4, t: '10:22' }, { i: 5, t: '10:24' }, { i: 8, t: '10:30' }],
    caption: "Mirror of Example 5. Mother bar wicks down to support (22030) but holds. Inside bar forms. Buyers defend the level. The compression resolves UP. Inside bar at support = upside break is more likely. Use the level as your context filter — when you have BOTH compression AND a higher-timeframe level, your win rate jumps significantly."
  };
}

// EX 7 — RETEST ENTRY (HIGHEST PROBABILITY)
function ex7Retest() {
  const candles = [
    C2(22018, 22024, 22014, 22022, 60),
    C2(22022, 22028, 22020, 22026, 65),
    // MOTHER BAR (idx 2)
    C2(22026, 22050, 22024, 22048, 135),
    // INSIDE BAR (idx 3)
    C2(22045, 22048, 22034, 22040, 55),
    C2(22040, 22046, 22038, 22044, 48),
    // BREAKOUT (idx 5)
    C2(22044, 22064, 22043, 22062, 145),
    // pullback toward mother high
    C2(22062, 22063, 22052, 22054, 80),
    C2(22054, 22056, 22050, 22052, 70),
    // RETEST (idx 8) — bounces off 22052
    C2(22052, 22058, 22050, 22056, 105),
    C2(22056, 22070, 22054, 22068, 95),
    C2(22068, 22084, 22066, 22082, 88),
    C2(22082, 22086, 22078, 22080, 65)
  ];
  return {
    n: 7, title: 'The Retest Entry (Highest Probability)',
    candles, motherHigh: 22050, motherLow: 22024,
    motherIdx: 2, insideIdxs: [3],
    breakoutIdx: 5, breakoutType: 'up',
    breakLabel: 'INITIAL BREAK',
    retestIdx: 8, retestPrice: 22052,
    showTiers: true,
    targetPrice: 22076, stopPrice: 22045,
    timeMarkers: [{ i: 0, t: '10:14' }, { i: 2, t: '10:18' }, { i: 5, t: '10:24' }, { i: 8, t: '10:30' }, { i: 11, t: '10:36' }],
    caption: "The retest is the standard A+ entry. Broken resistance becomes support. Three entry tiers shown: T1 yellow (initial break, aggressive), T2 green (confirmation candle), T3 cyan (retest bounce — tight stop, highest win rate). The retest gives you the trade twice. Tight stop below the retest wick. This is the entry to wait for when you can."
  };
}

// EX 8 — FAILED INSIDE BAR (REVERSAL)
function ex8FailedReversal() {
  const candles = [
    C2(22018, 22024, 22014, 22022, 60),
    C2(22022, 22028, 22020, 22026, 65),
    // MOTHER BAR (idx 2)
    C2(22026, 22050, 22024, 22048, 130),
    // INSIDE BAR (idx 3)
    C2(22045, 22047, 22034, 22040, 55),
    C2(22040, 22046, 22038, 22044, 48),
    // FAKE break up (idx 5)
    C2(22044, 22054, 22043, 22049, 70),
    // closes back inside
    C2(22049, 22050, 22038, 22041, 80),
    C2(22041, 22043, 22030, 22033, 95),
    // REAL break DOWN (idx 8)
    C2(22033, 22034, 22014, 22018, 145),
    C2(22018, 22020, 22002, 22008, 115),
    C2(22008, 22012, 21992, 21998, 90),
    C2(21998, 22002, 21988, 21994, 70)
  ];
  return {
    n: 8, title: 'The FAILED Inside Bar (Reversal)',
    candles, motherHigh: 22050, motherLow: 22024,
    motherIdx: 2, insideIdxs: [3],
    breakoutIdx: 8, breakoutType: 'down',
    breakLabel: 'REAL break the OTHER way',
    failed: true, failedIdx: 5, failedPrice: 22054, failedReason: 'FAKE — closes back inside',
    timeMarkers: [{ i: 0, t: '10:14' }, { i: 2, t: '10:18' }, { i: 5, t: '10:24' }, { i: 8, t: '10:30' }],
    caption: "Fakeouts on inside bars happen because the compression genuinely had buyers AND sellers. Idx 5 wicks above the mother high but closes back inside the range — failed long. If the candle after the break closes back inside, the breakout failed. Watch for the opposite-direction setup — these often run hard because trapped traders fuel them. The downside break at idx 8 is the real trade."
  };
}

// EX 9 — INSIDE BAR IN A STRONG TREND (CONTINUATION)
function ex9TrendContinuation() {
  const candles = [
    // strong uptrend
    C2(21990, 22002, 21988, 22000, 120),
    C2(22000, 22014, 21998, 22012, 115),
    C2(22012, 22025, 22010, 22023, 110),
    C2(22023, 22035, 22021, 22033, 105),
    C2(22033, 22045, 22031, 22043, 100),
    // MOTHER BAR (idx 5) — pause within trend
    C2(22043, 22055, 22041, 22052, 130),
    // INSIDE BAR (idx 6)
    C2(22050, 22053, 22042, 22045, 55),
    C2(22045, 22050, 22043, 22048, 48),
    // BREAKOUT (idx 8) in trend direction
    C2(22048, 22072, 22047, 22070, 155),
    C2(22070, 22085, 22068, 22083, 115),
    C2(22083, 22094, 22081, 22092, 90),
    C2(22092, 22098, 22088, 22094, 70)
  ];
  return {
    n: 9, title: 'Inside Bar in a Strong Trend (Continuation)',
    candles, motherHigh: 22055, motherLow: 22041,
    motherIdx: 5, insideIdxs: [6],
    breakoutIdx: 8, breakoutType: 'up',
    targetPrice: 22069, stopPrice: 22041,
    timeMarkers: [{ i: 0, t: '10:14' }, { i: 5, t: '10:24' }, { i: 6, t: '10:26' }, { i: 8, t: '10:30' }],
    caption: "Inside bars in established trends almost always break in the trend direction. Five rising candles establish the uptrend. Mother bar pauses, inside bar compresses, breakout continues UP. Trend + compression + break = full size with confidence. The trend is your direction filter — the compression is your timing trigger."
  };
}

// EX 10 — INSIDE BAR IN A RANGE (LOWER RELIABILITY)
function ex10InRange() {
  const candles = [
    C2(22038, 22044, 22034, 22041, 65),
    C2(22041, 22045, 22035, 22038, 60),
    C2(22038, 22043, 22033, 22040, 58),
    C2(22040, 22046, 22036, 22039, 55),
    // MOTHER BAR (idx 4) — inside larger choppy range
    C2(22039, 22048, 22032, 22045, 75),
    // INSIDE BAR (idx 5)
    C2(22043, 22046, 22038, 22041, 42),
    C2(22041, 22045, 22037, 22043, 40),
    // FAKE break up
    C2(22043, 22052, 22041, 22046, 55),
    // reverses back
    C2(22046, 22047, 22038, 22039, 50),
    C2(22039, 22043, 22033, 22041, 45),
    C2(22041, 22045, 22035, 22038, 42),
    C2(22038, 22044, 22034, 22040, 40)
  ];
  return {
    n: 10, title: 'Inside Bar in a Range (Lower Reliability)',
    candles, motherHigh: 22048, motherLow: 22032,
    motherIdx: 4, insideIdxs: [5],
    breakoutIdx: 7, breakoutType: 'up',
    breakLabel: 'fake break (no follow-through)',
    failed: true, failedIdx: 7, failedPrice: 22052, failedReason: 'CHOP — no direction',
    timeMarkers: [{ i: 0, t: '12:30' }, { i: 4, t: '12:38' }, { i: 5, t: '12:40' }, { i: 7, t: '12:44' }],
    caption: "Inside bars inside larger choppy ranges are noise. Without a directional context, the compression has nowhere to release. Look at the surrounding candles — they're all overlapping with no trend. The fake break at idx 7 quickly reverses back into chop. Skip — wait for compression in trending markets or at key levels."
  };
}

// EX 11 — VOLUME CONTRACTION CONFIRMATION
function ex11VolumeConfirmation() {
  const candles = [
    C2(22018, 22024, 22014, 22022, 70),
    C2(22022, 22028, 22020, 22026, 75),
    // MOTHER BAR (idx 2) — HIGH volume (160)
    C2(22026, 22055, 22024, 22052, 160),
    // IB 1 (idx 3) — LOW volume (45)
    C2(22050, 22052, 22034, 22038, 45),
    // IB 2 (idx 4) — even LOWER volume (28)
    C2(22038, 22046, 22036, 22042, 28),
    C2(22042, 22049, 22040, 22046, 30),
    C2(22046, 22052, 22043, 22049, 35),
    // BREAKOUT (idx 7) — HIGH volume (180) again
    C2(22049, 22074, 22048, 22072, 180),
    C2(22072, 22086, 22070, 22084, 130),
    C2(22084, 22094, 22082, 22090, 95),
    C2(22090, 22096, 22086, 22092, 70)
  ];
  return {
    n: 11, title: 'Volume Contraction Confirmation',
    candles, motherHigh: 22055, motherLow: 22024,
    motherIdx: 2, insideIdxs: [3, 4],
    breakoutIdx: 7, breakoutType: 'up',
    targetPrice: 22086, stopPrice: 22024,
    timeMarkers: [{ i: 0, t: '10:14' }, { i: 2, t: '10:18' }, { i: 4, t: '10:22' }, { i: 7, t: '10:28' }],
    caption: "Volume tells the story. Look at the volume bars carefully: mother bar 160 (HIGH) → IB 1 45 (LOW) → IB 2 28 (LOWER) → breakout 180 (HIGH). The pattern matches the price pattern: high → low → high. This is institutional confirmation — big players paused during compression, then committed on the break. When the volume profile matches, you have your gold standard."
  };
}

// EX 12 — INSIDE BAR IN YOUR TRADE WINDOW
function ex12YourWindow() {
  const candles = [
    // 9:30 morning drive (existing trend)
    C2(21970, 21990, 21968, 21986, 130),
    C2(21986, 22008, 21984, 22005, 125),
    C2(22005, 22020, 22002, 22018, 120),
    C2(22018, 22030, 22015, 22028, 110),
    C2(22028, 22038, 22025, 22035, 100),
    C2(22035, 22042, 22033, 22040, 90),
    C2(22040, 22045, 22037, 22042, 80),
    // 10:30 — MOTHER BAR (idx 7)
    C2(22042, 22055, 22040, 22052, 130),
    // 10:32 — INSIDE BAR (idx 8)
    C2(22050, 22053, 22042, 22045, 55),
    C2(22045, 22050, 22042, 22048, 48),
    // 10:36 — BREAKOUT (idx 10)
    C2(22048, 22070, 22047, 22068, 155),
    C2(22068, 22084, 22066, 22082, 115),
    C2(22082, 22094, 22080, 22090, 90),
    C2(22090, 22096, 22086, 22092, 70)
  ];
  return {
    n: 12, title: 'Inside Bar in Your Trade Window (10:15-12:00 ET)',
    candles, motherHigh: 22055, motherLow: 22040,
    motherIdx: 7, insideIdxs: [8],
    breakoutIdx: 10, breakoutType: 'up',
    targetPrice: 22070, stopPrice: 22040,
    timeMarkers: [{ i: 0, t: '9:30' }, { i: 6, t: '10:14' }, { i: 7, t: '10:30' }, { i: 10, t: '10:36' }, { i: 13, t: '10:42' }],
    caption: "Inside bars in your 10:15-12:00 window are common because the morning opening drive often pauses around this time. The pause forms compression; the continuation provides the trade. Here at 10:30, after a strong morning rally, a mother bar prints. An inside bar follows at 10:32. Breakout at 10:36 — squarely inside your prime window. Watch for compression in your window — it's one of the most frequent setups available to you."
  };
}

// ================================================================
// SECTION 5 — DECISION TREE
// ================================================================
function Section5DecisionTree() {
  return (
    <SectionShell n={5} title="The Inside Bar Decision Tree">
      <p className="mb-5">Three sequential questions. Click your answer; the next question reveals — or you get a verdict.</p>
      <InsideBarDecisionTree />
    </SectionShell>
  );
}

function InsideBarDecisionTree() {
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
          q="Has a 2-minute candle CLOSED above the mother bar's high (or below the mother bar's low) by ≥1 tick?"
          svg={<MiniDTSVG variant="closed-through" />}
          options={[
            { label: 'No — wick poke or still inside',
              verdict: { kind: 'red', text: 'Compression hasn\'t released yet. Wait. Don\'t enter inside the mother bar\'s range.' } },
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
            { label: 'Same direction, follows through with another close in that direction',
              next: 3 },
            { label: 'Small body / doji / low volume',
              verdict: { kind: 'amber', text: 'Stalled. Wait one more candle. If still stalled or reversing, abort.' } },
            { label: 'Closes back inside mother bar\'s range',
              verdict: { kind: 'red', text: 'FAKEOUT. Stand down. Watch for opposite-direction break — fake breaks often run hard the other way.' } }
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
          q="Was breakout volume higher than the average volume of the inside bar(s)?"
          svg={<MiniDTSVG variant="volume" />}
          options={[
            { label: 'Yes — clearly higher',
              verdict: { kind: 'green', text: 'High-confidence trade. Full size. Enter on the close. Stop opposite side of mother bar. Target = 1-2× mother bar range projected from breakout.' } },
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
        <line x1={20} y1={70} x2={580} y2={70} stroke={C_MOTHER} strokeWidth={3} />
        <text x={24} y={64} fill={C_MOTHER} fontSize={10} fontFamily="'Space Mono', monospace">mother high</text>
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
        <line x1={20} y1={70} x2={580} y2={70} stroke={C_MOTHER} strokeWidth={2.5} opacity={0.7} />
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
        {[55, 28, 22].map((h2, i) => (
          <rect key={i} x={70 + i * 30} y={140 - h2} width={20} height={h2} fill={C_INSIDE} opacity={0.5} />
        ))}
        <rect x={170} y={30} width={20} height={110} fill={C_BREAK} opacity={0.85} />
        <text x={180} y={20} fill={C_BULL} fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">YES — high</text>
        <line x1={290} x2={290} y1={20} y2={150} stroke="#262626" />
        {[35, 30, 28].map((h2, i) => (
          <rect key={i} x={320 + i * 30} y={140 - h2} width={20} height={h2} fill={C_INSIDE} opacity={0.5} />
        ))}
        <rect x={420} y={100} width={20} height={40} fill={C_BREAK} opacity={0.7} />
        <text x={430} y={90} fill={C_TARGET} fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">NO — same</text>
      </svg>
    );
  }
  return null;
}

// ================================================================
// SECTION 6 — ENTRY TIERS
// ================================================================
function Section6EntryTiers() {
  const tiers = [
    {
      name: 'Aggressive', tag: 'TIER 1', color: 'amber',
      entry: 'Close of the candle that breaks above the mother high (or below the mother low)',
      stop: 'Opposite side of mother bar',
      rr: '2:1 to 3:1',
      win: 'Lower (more false signals)',
      use: 'Strong trend, confluence with key level',
      size: '25-50%',
      svg: <IBTierSVG variant="aggressive" />
    },
    {
      name: 'Confirmation', tag: 'TIER 2', color: 'green',
      entry: 'Close of the candle AFTER the break (only if it follows through)',
      stop: 'Opposite side of mother bar',
      rr: '2:1 to 2.5:1',
      win: 'Higher',
      use: 'Standard trade — balance of speed and confirmation',
      size: 'Full size',
      svg: <IBTierSVG variant="confirm" />
    },
    {
      name: 'Retest', tag: 'TIER 3', color: 'blue',
      entry: 'Bounce / rejection candle after price pulls back to broken mother level',
      stop: 'Just past the retest wick',
      rr: '1.5:1 to 2:1',
      win: 'Highest',
      use: 'You missed Tier 1 and Tier 2, or you only take A+ setups',
      size: 'Full size, tight stop',
      svg: <IBTierSVG variant="retest" />
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

function IBTierSVG({ variant }) {
  const w = 280, h = 140;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      {/* Mother high/low lines */}
      <line x1={20} y1={50} x2={260} y2={50} stroke={C_MOTHER} strokeWidth={2.5} />
      <line x1={20} y1={100} x2={260} y2={100} stroke={C_MOTHER} strokeWidth={2.5} />
      <text x={22} y={46} fill={C_MOTHER} fontSize={8} fontFamily="'Space Mono', monospace">MH</text>
      <text x={22} y={114} fill={C_MOTHER} fontSize={8} fontFamily="'Space Mono', monospace">ML</text>
      {/* mother bar */}
      <line x1={70} x2={70} y1={50} y2={100} stroke={C_BULL} strokeWidth={1.5} />
      <rect x={66} y={56} width={8} height={40} fill={C_BULL} />
      <rect x={62} y={46} width={16} height={58} fill="none" stroke={C_BULL} strokeWidth={1.5} strokeDasharray="3 2" />
      {/* inside bar */}
      <line x1={100} x2={100} y1={68} y2={88} stroke={C_BULL} strokeWidth={1.5} />
      <rect x={96} y={72} width={8} height={12} fill={C_BULL} />
      <rect x={92} y={64} width={16} height={28} fill="none" stroke={C_INSIDE} strokeWidth={1.2} strokeDasharray="2 2" />
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
          <line x1={185} x2={185} y1={20} y2={60} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={181} y={25} width={8} height={30} fill={C_BULL} />
          <circle cx={185} cy={32} r={6} fill={C_BULL} stroke="#000" strokeWidth={1.5} />
          <text x={196} y={36} fill={C_BULL} fontSize={10} fontFamily="'Space Mono', monospace">T2 enter</text>
        </g>
      )}
      {variant === 'retest' && (
        <g>
          <line x1={155} x2={155} y1={30} y2={70} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={151} y={35} width={8} height={30} fill={C_BULL} />
          <line x1={185} x2={185} y1={36} y2={65} stroke={C_BEAR} strokeWidth={1.5} />
          <rect x={181} y={45} width={8} height={18} fill={C_BEAR} />
          <line x1={215} x2={215} y1={28} y2={56} stroke={C_BULL} strokeWidth={1.5} />
          <rect x={211} y={32} width={8} height={20} fill={C_BULL} />
          <circle cx={215} cy={42} r={6} fill="#4A9EFF" stroke="#000" strokeWidth={1.5} />
          <text x={226} y={46} fill="#4A9EFF" fontSize={10} fontFamily="'Space Mono', monospace">T3 enter</text>
        </g>
      )}
    </svg>
  );
}

// ================================================================
// SECTION 7 — MEASURED MOVE CALCULATOR
// ================================================================
function Section7Calculator() {
  const [motherHigh, setMotherHigh] = useState(22050);
  const [motherLow, setMotherLow] = useState(22030);
  const [breakoutPrice, setBreakoutPrice] = useState(22052);
  const [direction, setDirection] = useState('up');
  const motherRange = useMemo(() => motherHigh - motherLow, [motherHigh, motherLow]);
  const conservative = useMemo(
    () => direction === 'up' ? breakoutPrice + motherRange : breakoutPrice - motherRange,
    [direction, breakoutPrice, motherRange]
  );
  const aggressive = useMemo(
    () => direction === 'up' ? breakoutPrice + 2 * motherRange : breakoutPrice - 2 * motherRange,
    [direction, breakoutPrice, motherRange]
  );
  const valid = motherRange > 0;

  return (
    <SectionShell n={7} title="Measured-Move Target Calculator">
      <p className="mb-5">Mother bar range projected from the breakout = your conservative target. 2× range = aggressive target.</p>

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
        <NumInput label="Mother Bar High" v={motherHigh} onChange={setMotherHigh} />
        <NumInput label="Mother Bar Low" v={motherLow} onChange={setMotherLow} />
        <NumInput label="Breakout price (body close)" v={breakoutPrice} onChange={setBreakoutPrice} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        <Outcome label="Mother bar range" v={valid ? motherRange.toFixed(2) : '—'} accent="cyan" />
        <Outcome label={direction === 'up' ? 'Projection' : 'Projection'} v={valid ? `${direction === 'up' ? '+' : '-'}${motherRange.toFixed(2)}` : '—'} accent="amber" />
        <Outcome label="Conservative target (1×)" v={valid ? conservative.toFixed(2) : '—'} accent="green" />
        <Outcome label="Aggressive target (2×)" v={valid ? aggressive.toFixed(2) : '—'} accent="green" />
      </div>
      <CalculatorChart
        motherHigh={motherHigh} motherLow={motherLow}
        breakoutPrice={breakoutPrice} conservative={conservative} aggressive={aggressive}
        direction={direction} valid={valid} />
      <div className="mt-4 card-tight border-border bg-surface2">
        <p className="text-sm text-text/85 leading-relaxed">
          <span className="text-green font-semibold">Note:</span> On NQ, range is in points (4 ticks/point, $5/tick).
          On RTY similar. On ES, 4 ticks/point, $12.50/tick. On M2K, 1 tick = 0.10 = $0.50. Always know your dollar
          risk and reward before entry.
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
  const cyanStyle = accent === 'cyan' ? { color: C_MOTHER } : {};
  return (
    <div className="card-tight">
      <div className="label mb-1">{label}</div>
      <div className={`num text-2xl ${colors[accent]}`} style={cyanStyle}>{v}</div>
    </div>
  );
}

function CalculatorChart({ motherHigh, motherLow, breakoutPrice, conservative, aggressive, direction, valid }) {
  if (!valid) return null;
  const w = 1100, h = 380;
  const padL = 70, padR = 130, padT = 30, padB = 30;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const allHigh = Math.max(motherHigh, breakoutPrice, conservative, aggressive);
  const allLow = Math.min(motherLow, breakoutPrice, conservative, aggressive);
  const span = allHigh - allLow;
  const yMax = allHigh + span * 0.12;
  const yMin = allLow - span * 0.12;
  const yRange = yMax - yMin;
  const y = price => padT + ((yMax - price) / yRange) * innerH;

  const xMotherStart = padL + innerW * 0.05;
  const xMotherEnd = padL + innerW * 0.30;
  const xBreakout = padL + innerW * 0.50;
  const xCons = padL + innerW * 0.72;
  const xAgg = padL + innerW * 0.92;

  return (
    <div className="overflow-x-auto -mx-2 md:mx-0">
      <svg viewBox={`0 0 ${w} ${h}`} className="block rounded-xl border border-border" style={{ background: '#0a0a0a', minWidth: '880px' }}>
        {/* Grid */}
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <line key={i} x1={padL} x2={w - padR} y1={padT + innerH * t} y2={padT + innerH * t} stroke="#262626" strokeWidth={1} />
        ))}

        {/* Mother bar tinted box */}
        <rect x={xMotherStart} y={y(motherHigh)} width={xMotherEnd - xMotherStart} height={y(motherLow) - y(motherHigh)}
          fill="rgba(6, 182, 212, 0.07)" stroke={C_MOTHER} strokeWidth={1.5} strokeDasharray="3 3" />
        <text x={(xMotherStart + xMotherEnd) / 2} y={y(motherHigh) - 6} fill={C_MOTHER}
          fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace" fontWeight="bold">
          mother bar
        </text>

        {/* Mother high & low solid 4px lines extending right */}
        <line x1={padL} y1={y(motherHigh)} x2={w - padR} y2={y(motherHigh)} stroke={C_MOTHER} strokeWidth={3} />
        <line x1={padL} y1={y(motherLow)} x2={w - padR} y2={y(motherLow)} stroke={C_MOTHER} strokeWidth={3} />

        {/* Mother range arrow */}
        <line x1={xMotherStart - 16} y1={y(motherHigh)} x2={xMotherStart - 16} y2={y(motherLow)}
          stroke={C_MOTHER} strokeWidth={1.5} />
        <polygon points={`${xMotherStart - 16},${y(motherHigh)} ${xMotherStart - 20},${y(motherHigh) + 6} ${xMotherStart - 12},${y(motherHigh) + 6}`} fill={C_MOTHER} />
        <polygon points={`${xMotherStart - 16},${y(motherLow)} ${xMotherStart - 20},${y(motherLow) - 6} ${xMotherStart - 12},${y(motherLow) - 6}`} fill={C_MOTHER} />
        <text x={xMotherStart - 22} y={y((motherHigh + motherLow) / 2) + 4} fill={C_MOTHER}
          fontSize={12} textAnchor="end" fontFamily="'Oxanium', sans-serif" fontWeight="bold">
          r={(motherHigh - motherLow).toFixed(2)}
        </text>

        {/* Breakout marker */}
        <circle cx={xBreakout} cy={y(breakoutPrice)} r={7} fill={C_BREAK} stroke="#000" strokeWidth={1.5} />
        <text x={xBreakout} y={y(breakoutPrice) - 12} fill={C_BREAK}
          fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace" fontWeight="bold">
          breakout @ {breakoutPrice.toFixed(2)}
        </text>

        {/* Conservative projection arrow */}
        <line x1={xBreakout} y1={y(breakoutPrice)} x2={xCons} y2={y(conservative)}
          stroke="#00D9A0" strokeWidth={3} strokeDasharray="6 5" />
        <polygon points={`${xCons},${y(conservative)} ${xCons - 9},${y(conservative) - 9} ${xCons - 9},${y(conservative) + 9}`} fill="#00D9A0" />
        <text x={(xBreakout + xCons) / 2} y={y((breakoutPrice + conservative) / 2) + (direction === 'up' ? -10 : 18)}
          fill="#00D9A0" fontSize={12} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight="bold">
          {direction === 'up' ? '+' : '-'}{(motherHigh - motherLow).toFixed(2)} (1×)
        </text>

        {/* Aggressive projection arrow */}
        <line x1={xCons} y1={y(conservative)} x2={xAgg} y2={y(aggressive)}
          stroke="#FFB44A" strokeWidth={2.5} strokeDasharray="6 5" opacity={0.85} />
        <polygon points={`${xAgg},${y(aggressive)} ${xAgg - 9},${y(aggressive) - 9} ${xAgg - 9},${y(aggressive) + 9}`} fill="#FFB44A" />
        <text x={(xCons + xAgg) / 2} y={y((conservative + aggressive) / 2) + (direction === 'up' ? -10 : 18)}
          fill="#FFB44A" fontSize={12} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight="bold">
          {direction === 'up' ? '+' : '-'}{(motherHigh - motherLow).toFixed(2)} (2×)
        </text>

        {/* Conservative target line */}
        <line x1={padL} y1={y(conservative)} x2={w - padR} y2={y(conservative)}
          stroke="#00D9A0" strokeWidth={2} strokeDasharray="6 4" opacity={0.85} />
        <rect x={w - padR + 6} y={y(conservative) - 11} width={padR - 10} height={22} rx={3} fill="#0a0a0a" stroke="#00D9A0" />
        <text x={w - padR + 12} y={y(conservative) + 5} fill="#00D9A0"
          fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">
          T1 {conservative.toFixed(2)}
        </text>

        {/* Aggressive target line */}
        <line x1={padL} y1={y(aggressive)} x2={w - padR} y2={y(aggressive)}
          stroke="#FFB44A" strokeWidth={2} strokeDasharray="6 4" opacity={0.75} />
        <rect x={w - padR + 6} y={y(aggressive) - 11} width={padR - 10} height={22} rx={3} fill="#0a0a0a" stroke="#FFB44A" />
        <text x={w - padR + 12} y={y(aggressive) + 5} fill="#FFB44A"
          fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">
          T2 {aggressive.toFixed(2)}
        </text>

        {/* Mother high & low labels (left edge) */}
        <text x={padL - 8} y={y(motherHigh) + 4} fill={C_MOTHER}
          fontSize={11} textAnchor="end" fontFamily="'Space Mono', monospace">
          MH {motherHigh.toFixed(2)}
        </text>
        <text x={padL - 8} y={y(motherLow) + 4} fill={C_MOTHER}
          fontSize={11} textAnchor="end" fontFamily="'Space Mono', monospace">
          ML {motherLow.toFixed(2)}
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
      kind: 'CORRECT', color: 'green',
      title: 'Opposite side of the mother bar',
      body: 'Stop on the opposite side of the mother bar from your entry. Survives normal volatility and the very-common retest. This is the default — use this stop unless you have a specific reason not to.',
      svg: <IBStopSVG variant="correct" />
    },
    {
      kind: 'TOO TIGHT', color: 'red',
      title: 'Just past the breakout candle',
      body: 'Stop placed 1-2 ticks above (or below) the breakout candle. Tempting because risk looks small. Reality: gets stop-hunted by the very-common retest move. Right idea, dead trader.',
      svg: <IBStopSVG variant="tight" />
    },
    {
      kind: 'TOO LOOSE', color: 'red',
      title: 'Further than mother bar opposite side',
      body: 'Stop placed way beyond the opposite side of the mother bar. R:R becomes unworkable, target rarely reached even when right. Wastes capital on a too-loose risk envelope.',
      svg: <IBStopSVG variant="loose" />
    }
  ];
  const colors = {
    green: { border: 'border-green/40', text: 'text-green' },
    red:   { border: 'border-red/40',   text: 'text-red' }
  };
  return (
    <SectionShell n={8} title="Stop Placement (with diagrams)">
      <p className="mb-5">Three options. One is correct, two are wrong.</p>
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

function IBStopSVG({ variant }) {
  const w = 280, h = 160;
  const baseChart = (
    <g>
      {/* mother high & low */}
      <line x1={20} y1={60} x2={260} y2={60} stroke={C_MOTHER} strokeWidth={2.5} />
      <line x1={20} y1={110} x2={260} y2={110} stroke={C_MOTHER} strokeWidth={2.5} />
      <text x={22} y={56} fill={C_MOTHER} fontSize={9} fontFamily="'Space Mono', monospace">MH</text>
      <text x={22} y={124} fill={C_MOTHER} fontSize={9} fontFamily="'Space Mono', monospace">ML</text>
      {/* mother bar */}
      <line x1={70} x2={70} y1={60} y2={110} stroke={C_BULL} strokeWidth={1.5} />
      <rect x={66} y={66} width={8} height={40} fill={C_BULL} />
      <rect x={62} y={56} width={16} height={58} fill="none" stroke={C_BULL} strokeWidth={1.2} strokeDasharray="3 2" />
      {/* inside bar */}
      <line x1={100} x2={100} y1={75} y2={100} stroke={C_BULL} strokeWidth={1.5} />
      <rect x={96} y={80} width={8} height={15} fill={C_BULL} />
      {/* breakout */}
      <line x1={150} x2={150} y1={36} y2={70} stroke={C_BULL} strokeWidth={1.5} />
      <rect x={146} y={42} width={8} height={28} fill={C_BULL} />
      {/* entry circle */}
      <circle cx={150} cy={50} r={5} fill={C_ENTRY} stroke="#000" strokeWidth={1.5} />
    </g>
  );
  let stop;
  if (variant === 'correct') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={118} y2={118} stroke={C_STOP} strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={134} fill={C_STOP} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · opposite side of mother bar</text>
      </g>
    );
  } else if (variant === 'tight') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={66} y2={66} stroke={C_STOP} strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={80} fill={C_STOP} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · 1-2 ticks past breakout</text>
      </g>
    );
  } else {
    stop = (
      <g>
        <line x1={20} x2={260} y1={146} y2={146} stroke={C_STOP} strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={158} fill={C_STOP} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · far past mother low (loose)</text>
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
      <p className="mb-5">Three volume profiles side by side. Only one is a tradable inside bar setup.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <IBVolCard tag="VALID" color="green"
          body="Volume HIGH on the mother bar, LOWER on the inside bar(s), HIGH again on the breakout. Clear contraction-expansion cycle. Big players paused, then committed. Take it."
          svg={<IBVolSVG variant="valid" />} />
        <IBVolCard tag="SUSPECT" color="amber"
          body="Volume flat throughout — modest on mother, modest on inside, modest on break. The compression had no real participation. Half size or skip."
          svg={<IBVolSVG variant="suspect" />} />
        <IBVolCard tag="INVALID" color="red"
          body="Volume RISING during inside bar(s) — wrong direction. The compression is actually building distribution. Skip — most of these break and reverse fast."
          svg={<IBVolSVG variant="invalid" />} />
      </div>
    </SectionShell>
  );
}

function IBVolCard({ tag, color, body, svg }) {
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

function IBVolSVG({ variant }) {
  const w = 280, h = 130;
  // [mother, ib1, ib2, break]
  let bars, labels;
  if (variant === 'valid') {
    bars = [110, 45, 30, 120];
    labels = ['MB', 'IB1', 'IB2', 'BRK'];
  } else if (variant === 'suspect') {
    bars = [55, 50, 48, 60];
    labels = ['MB', 'IB1', 'IB2', 'BRK'];
  } else {
    bars = [70, 75, 85, 50];
    labels = ['MB', 'IB1', 'IB2', 'BRK'];
  }
  const max = Math.max(...bars);
  const colors = [C_BULL, C_INSIDE, C_INSIDE, C_BREAK];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      <text x={20} y={20} fill="#666" fontSize={10} fontFamily="'Space Mono', monospace">VOLUME</text>
      {bars.map((b, i) => {
        const barH = (b / max) * 90;
        return (
          <g key={i}>
            <rect x={50 + i * 55} y={120 - barH} width={36} height={barH}
              fill={colors[i]} opacity={i === 3 ? 0.9 : 0.55} />
            <text x={68 + i * 55} y={132} fill="#888" fontSize={9} textAnchor="middle"
              fontFamily="'Space Mono', monospace">{labels[i]}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ================================================================
// SECTION 10 — SIX MISTAKES
// ================================================================
function Section10Mistakes() {
  const mistakes = [
    { n: 1, title: 'Trading every inside bar (most are noise)',
      body: 'Inside bars print constantly on a 2-min chart. Most are nothing — just normal pause candles inside larger choppy ranges. Without context (trend, level, coil), the compression has no edge. Skip 80% of inside bars you see.' },
    { n: 2, title: 'Entering inside the mother bar\'s range (premature)',
      body: 'Entering before the breakout is just gambling on direction. The whole point of the pattern is to wait for the resolution. The compression exists because BOTH sides are still in there — entering early means picking a side without information.' },
    { n: 3, title: 'Stop too tight (just past the breakout candle)',
      body: 'Tempting because the risk looks small. Reality: gets stop-hunted by the very-common retest move. The retest is part of the pattern — your stop must survive it. Use the opposite side of the mother bar.' },
    { n: 4, title: 'Ignoring volume (compression without volume contraction is meaningless)',
      body: 'A real compression has decreasing volume on each inside bar — that\'s what shows the pause is genuine. If volume stays flat or rises during the inside bar, the compression is fake and the breakout will likely fail.' },
    { n: 5, title: 'Trading inside bars in choppy ranges (no directional context)',
      body: 'Inside bars inside larger sideways chop are noise. Without a trend or key level to bias direction, the compression has nowhere to release — the breakout fakes one way then reverses. Wait for compression in trending markets or at key levels.' },
    { n: 6, title: 'Trading within 5 minutes of FOMC, NFP, CPI, earnings, or scheduled news',
      body: 'Major scheduled releases obliterate technical setups. Even a clean inside bar setup gets blown through with no respect for levels when news drops. Always check the economic calendar before you trade — if news is within 5 minutes, sit out.' }
  ];
  return (
    <SectionShell n={10} title="Six Mistakes That Kill Inside Bar Trades">
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
// SECTION 11 — LOOKALIKE PATTERNS
// ================================================================
function Section11Lookalikes() {
  return (
    <SectionShell n={11} title="Inside Bar vs Lookalike Patterns">
      <p className="mb-5">Three patterns that can be confused with an inside bar. Knowing the difference keeps you out of the wrong trade.</p>
      <div className="space-y-4">
        <LookalikeCard
          title="Inside Bar vs Engulfing Pattern"
          body="An engulfing pattern is the OPPOSITE — the second candle's range fully contains the first. Engulfings are reversal signals (especially at extremes); inside bars are compression-expansion signals. Don't confuse them.">
          <LookalikePair leftLabel="Inside Bar" rightLabel="Engulfing"
            left={<MiniIBSVG variant="inside-bar" />}
            right={<MiniIBSVG variant="engulfing" />} />
        </LookalikeCard>
        <LookalikeCard
          title="Inside Bar vs Doji"
          body="A doji is a single candle with a tiny body (open and close near same price) with possibly long wicks. It signals indecision. An inside bar is a relationship between TWO candles. They can occur together (a doji as the inside bar is common) but they're conceptually different.">
          <LookalikePair leftLabel="Inside Bar (relationship)" rightLabel="Doji (single candle)"
            left={<MiniIBSVG variant="inside-bar" />}
            right={<MiniIBSVG variant="doji" />} />
        </LookalikeCard>
        <LookalikeCard
          title="Inside Bar vs Tight Range / Sideways Drift"
          body="A real inside bar has a clearly DEFINED mother bar with notable range. A 'tight range' of multiple small candles drifting sideways without a clear mother bar is just chop, not compression. The mother bar is what gives the setup its tradable boundaries — without it, you have nothing to trigger off.">
          <LookalikePair leftLabel="Real Inside Bar" rightLabel="Tight Range (chop)"
            left={<MiniIBSVG variant="inside-bar" />}
            right={<MiniIBSVG variant="tight-range" />} />
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

function MiniIBSVG({ variant }) {
  const w = 480, h = 200;
  const drawCandle = (x, o, c, hi, lo, key, color) => {
    const useColor = color || (c >= o ? C_BULL : C_BEAR);
    return (
      <g key={key}>
        <line x1={x} x2={x} y1={hi} y2={lo} stroke={useColor} strokeWidth={1.4} />
        <rect x={x - 5} y={Math.min(o, c)} width={10} height={Math.max(2, Math.abs(c - o))} fill={useColor} />
      </g>
    );
  };
  if (variant === 'inside-bar') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={10} x2={470} y1={50} y2={50} stroke={C_MOTHER} strokeWidth={3} />
        <line x1={10} x2={470} y1={140} y2={140} stroke={C_MOTHER} strokeWidth={3} />
        <text x={14} y={46} fill={C_MOTHER} fontSize={9} fontFamily="'Space Mono', monospace">mother high</text>
        <text x={14} y={156} fill={C_MOTHER} fontSize={9} fontFamily="'Space Mono', monospace">mother low</text>
        {/* mother bar (idx 1) */}
        {drawCandle(140, 130, 60, 50, 140, 'm')}
        <rect x={130} y={45} width={20} height={100} fill="none" stroke={C_BULL} strokeWidth={2} strokeDasharray="3 2" />
        <text x={140} y={185} fill={C_BULL} fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">mother</text>
        {/* inside bar (idx 2) */}
        {drawCandle(200, 95, 80, 70, 110, 'i')}
        <rect x={193} y={66} width={14} height={48} fill="none" stroke={C_INSIDE} strokeWidth={1.5} strokeDasharray="2 2" />
        <text x={200} y={185} fill={C_INSIDE} fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">inside</text>
        {/* breakout */}
        {drawCandle(260, 90, 30, 25, 100, 'b')}
        <text x={260} y={185} fill={C_BREAK} fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">break ↑</text>
      </svg>
    );
  }
  if (variant === 'engulfing') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {/* small candle first */}
        {drawCandle(140, 90, 110, 80, 120, 's', C_BEAR)}
        <text x={140} y={185} fill="#888" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">small</text>
        {/* engulfing candle (larger) */}
        {drawCandle(200, 115, 70, 60, 130, 'e', C_BULL)}
        <rect x={190} y={56} width={20} height={80} fill="none" stroke={C_BULL} strokeWidth={2} strokeDasharray="3 2" />
        <text x={200} y={185} fill={C_BULL} fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">engulfs</text>
        <text x={300} y={100} fill="#FFB44A" fontSize={11} fontFamily="'Space Mono', monospace">2nd CONTAINS 1st</text>
        <text x={300} y={120} fill="#FFB44A" fontSize={11} fontFamily="'Space Mono', monospace">→ reversal signal</text>
      </svg>
    );
  }
  if (variant === 'doji') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {/* prior candle */}
        {drawCandle(140, 130, 70, 60, 140, 'p', C_BULL)}
        <text x={140} y={185} fill="#888" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">prior</text>
        {/* doji */}
        <line x1={200} x2={200} y1={50} y2={150} stroke="#cbd5e1" strokeWidth={1.5} />
        <line x1={188} x2={212} y1={100} y2={100} stroke="#cbd5e1" strokeWidth={2.5} />
        <text x={200} y={185} fill="#cbd5e1" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">doji</text>
        <text x={300} y={100} fill="#FFB44A" fontSize={11} fontFamily="'Space Mono', monospace">SINGLE candle —</text>
        <text x={300} y={120} fill="#FFB44A" fontSize={11} fontFamily="'Space Mono', monospace">tiny body, indecision</text>
      </svg>
    );
  }
  if (variant === 'tight-range') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={10} x2={470} y1={70} y2={70} stroke="#888" strokeWidth={1.5} strokeDasharray="3 3" />
        <line x1={10} x2={470} y1={130} y2={130} stroke="#888" strokeWidth={1.5} strokeDasharray="3 3" />
        <text x={14} y={66} fill="#888" fontSize={9} fontFamily="'Space Mono', monospace">drift band</text>
        {/* small candles drifting sideways */}
        {[60, 100, 140, 180, 220, 260, 300, 340].map((x, i) => drawCandle(x, 95 + (i%2)*4, 92 + (i%2)*4, 80 + (i%3), 108 - (i%2)*2, `t${i}`, i % 2 === 0 ? C_BULL : C_BEAR))}
        <text x={200} y={185} fill="#FFB44A" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">no clear MOTHER → just chop</text>
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
    { from: '9:30',  to: '10:00', label: 'OPENING DRIVE',     desc: 'Inside bars rare during strong opening moves. Watch for the first signs of compression as the morning trend matures.', tag: 'watch', color: 'amber' },
    { from: '10:00', to: '10:15', label: 'TRANSITION',        desc: 'Opening drive often pauses; inside bars start forming. Set up alerts. Don\'t take trades yet — wait for your window.', tag: 'set up', color: 'amber' },
    { from: '10:15', to: '12:00', label: 'YOUR PRIME WINDOW', desc: 'Inside bars in this window are abundant. Morning trend pauses → compression → continuation breaks. The 10:30-11:30 stretch is statistically the cleanest.', tag: 'highest quality', color: 'green', highlight: true },
    { from: '12:00', to: '14:00', label: 'LUNCH CHOP',        desc: 'Inside bars form constantly here but most are noise. Volume dries up, breaks fail. Avoid.', tag: 'skip', color: 'red' },
    { from: '14:00', to: '15:00', label: 'AFTERNOON RESTART', desc: 'Inside bars work again as volume returns. Reliability is decent but you\'re past your trading window — observe but don\'t trade.', tag: 'observe only', color: 'amber' },
    { from: '15:00', to: '16:00', label: 'POWER HOUR',        desc: 'Inside bars are reliable when they form, but moves are sharp and reversals common. Outside your window — don\'t trade.', tag: 'volatile', color: 'red' }
  ];
  const colors = {
    red:   { border: 'border-red/40',   text: 'text-red' },
    amber: { border: 'border-amber/40', text: 'text-amber' },
    green: { border: 'border-green/40', text: 'text-green' }
  };
  return (
    <SectionShell n={12} title="Time of Day — Inside Bars Are Frequent in Your Window">
      <p className="mb-5">A horizontal timeline of the trading day with quality zones. Inside bars are one of the most frequent setups in your prime window.</p>
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
          <span className="font-display font-semibold">Inside bars are one of the most frequent setups in your trade window.</span> Set
          alerts for compression formation around 10:30 ET — you'll see them often. The morning trend pauses to digest,
          compression forms, and the continuation gives you the trade.
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
    <SectionShell n={13} title="Why the Pattern Forms (Psychology in 4 Sentences)">
      <div className="space-y-3 text-text/90 leading-relaxed">
        <p>
          <span className="text-green font-semibold">1.</span> After a strong directional candle (the mother bar),
          the market needs to digest — buyers and sellers stop aggressively pushing while participants reassess
          → an inside bar forms with reduced range and volume.
        </p>
        <p>
          <span className="font-semibold" style={{color: C_INSIDE}}>2.</span> As long as no new information arrives,
          the market continues to compress, with each new inside bar reflecting deeper consensus on the temporary
          tight range.
        </p>
        <p>
          <span className="text-amber font-semibold">3.</span> Eventually one side accumulates conviction (or a key
          level is broken) and the compression releases — the breakout candle reflects the pent-up energy of all
          those participants who were waiting on the sidelines.
        </p>
        <p>
          <span className="text-green font-semibold">4.</span> The expansion typically equals or exceeds the mother
          bar's range because the same kind of move that formed the mother bar is now starting again with built-up
          energy behind it.
        </p>
      </div>
    </SectionShell>
  );
}

// ================================================================
// SECTION 14 — CHECKLIST
// ================================================================
function Section14Checklist() {
  const items = [
    'Mother bar has notably wide range (not just a small candle)',
    'Inside bar is fully contained (high lower than mother high, low higher than mother low)',
    'Volume contracted during inside bar(s) compared to mother bar',
    'Context favors the breakout direction (trend, key level)',
    'A 2-min candle CLOSED above mother bar high (or below mother bar low) by ≥1 tick',
    'Candle AFTER break confirmed (same direction, body close, rising volume)',
    'Breakout volume exceeds inside bar volume',
    'No major news within next 5 minutes',
    'Time of day favorable (10:15-12:00 ideal)',
    'Stop on opposite side of mother bar',
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
    cyan: 'border-cyan-400/40',
    violet: 'border-violet-400/40'
  };
  const titleColor = color === 'cyan' ? { color: C_MOTHER } : color === 'violet' ? { color: C_INSIDE } : {};
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
        <div className="text-muted text-sm">2-minute scalper's complete inside bar compression treatment.</div>
        <Link to="/drill" className="btn btn-primary px-6">Drill this pattern →</Link>
      </div>
    </footer>
  );
}
