import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// ================================================================
// COLOR CONSTANTS
// ================================================================
const C_BULL = '#22c55e';     // bullish green
const C_BEAR = '#ef4444';     // bearish red
const C_VWAP = '#fbbf24';     // golden VWAP line
const C_BAND = '#fbbf24';     // VWAP std-dev bands (lower opacity)
const C_BREAK = '#f97316';    // orange rejection / break marker
const C_ENTRY = '#10b981';    // entry green
const C_STOP = '#ef4444';     // stop red
const C_TARGET = '#f59e0b';   // target amber
const C_LABEL = '#e8e8e8';    // white label

// ================================================================
// VWAP COMPUTATION HELPERS
// ================================================================
// Compute true VWAP series from candle data (volume-weighted typical price).
// Returns array same length as candles, each value = cumulative VWAP through that bar.
function computeVWAP(candles) {
  let cumPV = 0, cumV = 0;
  return candles.map(c => {
    const tp = (c.h + c.l + c.c) / 3;
    const v = c.vol || 1;
    cumPV += tp * v;
    cumV += v;
    return cumPV / cumV;
  });
}

// Compute 1-sigma volume-weighted standard deviation bands around VWAP.
function computeVWAPBands(candles, vwapSeries) {
  let cumV = 0, cumDevSq = 0;
  const upper = [], lower = [];
  candles.forEach((c, i) => {
    const tp = (c.h + c.l + c.c) / 3;
    const v = c.vol || 1;
    cumV += v;
    cumDevSq += v * Math.pow(tp - vwapSeries[i], 2);
    const sigma = Math.sqrt(cumDevSq / cumV);
    upper.push(vwapSeries[i] + sigma);
    lower.push(vwapSeries[i] - sigma);
  });
  return { upper, lower };
}

// ================================================================
// ROOT
// ================================================================
export default function VWAPRejection() {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      <Header />
      <Section1Plain />
      <Section2ThreeParts />
      <Section2_5IDGuide />
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
      <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-3">VWAP Rejection</h1>
      <p className="text-text/80 text-lg max-w-3xl leading-relaxed mb-3">
        The single line institutions live and die by — Volume Weighted Average Price.
        Twelve large worked examples, a step-by-step identification guide, decision tree,
        and target calculator. Every chart shows VWAP drawn as the curving line it actually is.
      </p>
      <div className="card-tight max-w-3xl" style={{ borderColor: 'rgba(251,191,36,0.4)', background: 'rgba(251,191,36,0.05)' }}>
        <p className="leading-relaxed" style={{ color: C_VWAP }}>
          <span className="font-display font-semibold">VWAP is THE focal point of every chart in this lab.</span> When
          price tags VWAP and rejects with a long-wicked candle, you have one of the most reliable
          scalping setups in futures — institutions are publicly defending their benchmark.
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
    <SectionShell n={1} title="What VWAP Rejection Actually Is (Plain Language)">
      <p className="mb-4">
        VWAP stands for <span className="font-semibold" style={{color: C_VWAP}}>Volume Weighted Average Price</span>.
        It's the average price that traders have paid during the trading session, weighted by how much
        volume traded at each price. Big institutional traders use VWAP as their benchmark — they want
        to buy <span className="text-green font-semibold">below</span> it and sell <span className="text-red font-semibold">above</span> it.
        This makes VWAP a magnet that price keeps coming back to throughout the day.
      </p>
      <p className="mb-4">
        When price moves <span className="font-semibold">AWAY</span> from VWAP and then comes back to <span className="font-semibold">TOUCH</span> VWAP,
        two things can happen: either price <span className="text-green font-semibold">bounces off VWAP</span> (rejection — VWAP holds as support
        or resistance) or price <span className="text-amber font-semibold">breaks through VWAP</span> (which often becomes its own kind of trade).
        The "rejection" trade is when you see price tag VWAP and clearly reject from it with a long-wicked
        candle. You enter in the direction of the rejection.
      </p>
      <p>
        For futures (NQ, RTY, ES), VWAP is religiously watched by institutions, so its levels are real —
        not arbitrary. If price is <span className="text-green font-semibold">ABOVE</span> VWAP, the bias is bullish. If price is
        <span className="text-red font-semibold"> BELOW</span> VWAP, the bias is bearish. Trading WITH the VWAP bias and at VWAP touches
        is one of the most reliable scalping setups in futures.
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
      <p className="mb-5">A textbook VWAP rejection, fully labeled. The golden VWAP line is the focal point — every other element flows from it.</p>
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <ThreePartsSVG />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        <Tile color="vwap" title="1. Price Tags VWAP" body="Price moves away then comes back to touch the institutional benchmark line." />
        <Tile color="amber" title="2. Rejection Candle" body="Long wick into VWAP, body firmly AWAY from it. The wick = failed test. The body = the bounce." />
        <Tile color="green" title="3. Entry on Close" body="Enter at the close of the rejection candle. Stop just past the wick. Target = prior swing." />
      </div>
    </SectionShell>
  );
}

function ThreePartsSVG() {
  const W = 1200, H = 600;
  const chartL = 60, chartT = 40, chartR = 1140, chartB = 540;
  // Above-VWAP scenario: price trends up, pulls back to VWAP, rejects, continues
  // Build candle data so VWAP curves through the middle
  const candles = [
    // 9:50 - opening drive up
    { o: 22000, h: 22015, l: 21998, c: 22012, vol: 90 },
    { o: 22012, h: 22025, l: 22010, c: 22023, vol: 88 },
    { o: 22023, h: 22035, l: 22020, c: 22033, vol: 82 },
    { o: 22033, h: 22045, l: 22030, c: 22042, vol: 78 },
    // 10:00 - sustained move higher
    { o: 22042, h: 22055, l: 22040, c: 22052, vol: 75 },
    { o: 22052, h: 22062, l: 22050, c: 22060, vol: 70 },
    { o: 22060, h: 22068, l: 22056, c: 22063, vol: 65 },
    // pullback toward VWAP
    { o: 22063, h: 22064, l: 22050, c: 22052, vol: 60 },
    { o: 22052, h: 22054, l: 22038, c: 22040, vol: 65 },
    { o: 22040, h: 22042, l: 22025, c: 22028, vol: 70 },
    // rejection candle at idx 10 - long lower wick INTO VWAP
    { o: 22028, h: 22038, l: 22012, c: 22034, vol: 110 },
    // continuation up
    { o: 22034, h: 22048, l: 22032, c: 22046, vol: 90 },
    { o: 22046, h: 22058, l: 22044, c: 22056, vol: 80 },
    { o: 22056, h: 22070, l: 22054, c: 22068, vol: 75 },
    { o: 22068, h: 22075, l: 22062, c: 22070, vol: 65 },
  ];
  const vwap = computeVWAP(candles);
  const rejectIdx = 10;
  const entryPrice = candles[rejectIdx].c;
  const stopPrice = candles[rejectIdx].l - 3;
  const priorSwingHigh = 22068;

  const allHigh = Math.max(...candles.map(c => c.h), priorSwingHigh + 5);
  const allLow = Math.min(...candles.map(c => c.l)) - 5;
  const yMax = allHigh + 3;
  const yMin = allLow - 3;
  const yRange = yMax - yMin;

  const innerW = chartR - chartL;
  const innerH = chartB - chartT;
  const slot = innerW / candles.length;
  const bodyW = Math.max(8, slot * 0.62);
  const xFor = i => chartL + i * slot + slot / 2;
  const yFor = price => chartT + ((yMax - price) / yRange) * innerH;

  const vwapPath = vwap.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(v)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block rounded-xl border border-border w-full h-auto"
      style={{ background: '#0a0a0a', minWidth: '900px' }}>
      <text x={W / 2} y={24} fill={C_VWAP} fontSize={14} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">
        VWAP REJECTION — THE THREE PARTS
      </text>

      {/* Grid */}
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={chartL} x2={chartR} y1={chartT + innerH * t} y2={chartT + innerH * t}
          stroke="#262626" strokeWidth={1} />
      ))}

      {/* Candles (under the VWAP line so VWAP overlays on top) */}
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

      {/* VWAP line - 3px solid golden, the focal point */}
      <path d={vwapPath} stroke={C_VWAP} strokeWidth={3} fill="none" strokeLinejoin="round" />
      <text x={chartR - 8} y={yFor(vwap[vwap.length - 1]) - 8} fill={C_VWAP}
        fontSize={13} fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="end">
        VWAP — institutional benchmark price
      </text>

      {/* Pullback approach arrow toward VWAP */}
      <line x1={xFor(7) + 14} y1={yFor(22063) - 6} x2={xFor(rejectIdx) - 14} y2={yFor(22020)}
        stroke={C_VWAP} strokeWidth={2} strokeDasharray="6 4" opacity={0.6} markerEnd="url(#arrowVwap)" />
      <text x={xFor(8.5)} y={yFor(22034) - 18} fill={C_VWAP} fontSize={12}
        fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="middle">
        1. PRICE TAGS VWAP
      </text>

      {/* Rejection candle highlight box */}
      <rect x={xFor(rejectIdx) - bodyW * 0.95} y={yFor(candles[rejectIdx].h) - 4}
        width={bodyW * 1.9} height={yFor(candles[rejectIdx].l) - yFor(candles[rejectIdx].h) + 8}
        fill="none" stroke={C_BREAK} strokeWidth={2} rx={3} />
      <text x={xFor(rejectIdx)} y={yFor(candles[rejectIdx].l) + 28} fill={C_BREAK}
        fontSize={12} fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="middle">
        2. REJECTION CANDLE
      </text>
      <text x={xFor(rejectIdx)} y={yFor(candles[rejectIdx].l) + 44} fill={C_BREAK}
        fontSize={10} fontFamily="'Space Mono', monospace" textAnchor="middle">
        long wick into VWAP, body bounces away
      </text>

      {/* Entry arrow */}
      <line x1={xFor(rejectIdx) + 28} x2={xFor(rejectIdx) + 14}
        y1={yFor(entryPrice) - 28} y2={yFor(entryPrice) - 6}
        stroke={C_ENTRY} strokeWidth={2.5} markerEnd="url(#arrowEntry)" />
      <text x={xFor(rejectIdx) + 36} y={yFor(entryPrice) - 30} fill={C_ENTRY}
        fontSize={12} fontFamily="'Space Mono', monospace" fontWeight="bold">
        3. ENTRY @ {entryPrice}
      </text>

      {/* Stop line */}
      <line x1={chartL} y1={yFor(stopPrice)} x2={chartR - 220} y2={yFor(stopPrice)}
        stroke={C_STOP} strokeWidth={1.8} strokeDasharray="6 4" opacity={0.8} />
      <text x={chartL + 6} y={yFor(stopPrice) + 14} fill={C_STOP}
        fontSize={11} fontFamily="'Space Mono', monospace">
        STOP @ {stopPrice} (just past rejection wick)
      </text>

      {/* Target line */}
      <line x1={chartL} y1={yFor(priorSwingHigh)} x2={chartR} y2={yFor(priorSwingHigh)}
        stroke={C_TARGET} strokeWidth={2.2} strokeDasharray="8 4" opacity={0.85} />
      <text x={chartL + 6} y={yFor(priorSwingHigh) - 6} fill={C_TARGET}
        fontSize={12} fontFamily="'Space Mono', monospace" fontWeight="bold">
        TARGET @ {priorSwingHigh} (prior swing high)
      </text>

      {/* Time axis */}
      <line x1={chartL} y1={chartB + 8} x2={chartR} y2={chartB + 8} stroke="#262626" />
      {[
        { i: 0, t: '9:50' },
        { i: 7, t: '10:04' },
        { i: 10, t: '10:10' },
        { i: 14, t: '10:18' }
      ].map((m, i) => (
        <g key={i}>
          <line x1={xFor(m.i)} x2={xFor(m.i)} y1={chartB} y2={chartB + 14} stroke="#666" />
          <text x={xFor(m.i)} y={chartB + 28} fill="#aaa" fontSize={11} textAnchor="middle"
            fontFamily="'Space Mono', monospace">{m.t}</text>
        </g>
      ))}

      {/* Marker defs */}
      <defs>
        <marker id="arrowVwap" markerWidth={10} markerHeight={10} refX={8} refY={5} orient="auto">
          <polygon points="0 0, 10 5, 0 10" fill={C_VWAP} />
        </marker>
        <marker id="arrowEntry" markerWidth={10} markerHeight={10} refX={8} refY={5} orient="auto">
          <polygon points="0 0, 10 5, 0 10" fill={C_ENTRY} />
        </marker>
      </defs>
    </svg>
  );
}

// ================================================================
// SECTION 2.5 — STEP BY STEP IDENTIFICATION
// ================================================================
function Section2_5IDGuide() {
  return (
    <SectionShell n="2.5" title="How to Identify a VWAP Rejection (Step by Step)">
      <p className="mb-5">
        Five numbered steps. Master these and you can spot a tradable VWAP rejection in seconds — and skip the false ones.
      </p>
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <IDGuideSVG />
      </div>
      <div className="mt-5 card border-green/40 bg-green/[0.04]">
        <div className="font-display font-semibold text-green mb-3">To trade a VWAP rejection:</div>
        <ol className="space-y-1.5 text-text/90 leading-relaxed">
          <li><span className="text-green num">1.</span> Identify the VWAP line on your chart.</li>
          <li><span className="text-green num">2.</span> Determine your bias (above = long-only, below = short-only).</li>
          <li><span className="text-green num">3.</span> Wait for price to pull back to VWAP.</li>
          <li><span className="text-green num">4.</span> Look for a rejection candle (long wick into VWAP, body away from it).</li>
          <li><span className="text-green num">5.</span> Enter on the rejection candle's close. Stop just past the wick. Target = prior swing.</li>
        </ol>
      </div>
    </SectionShell>
  );
}

function IDGuideSVG() {
  const W = 1200, H = 600;
  const chartL = 30, chartT = 30, chartR = 720, chartB = 540;
  const capX = 750;
  // 14 candles building an above-VWAP rejection setup
  const candles = [
    { o: 22000, h: 22012, l: 21998, c: 22010, vol: 80 },
    { o: 22010, h: 22020, l: 22008, c: 22018, vol: 78 },
    { o: 22018, h: 22028, l: 22015, c: 22025, vol: 75 },
    { o: 22025, h: 22035, l: 22022, c: 22032, vol: 72 },
    { o: 22032, h: 22045, l: 22030, c: 22042, vol: 70 },
    { o: 22042, h: 22052, l: 22040, c: 22050, vol: 68 },
    { o: 22050, h: 22055, l: 22045, c: 22048, vol: 60 },
    { o: 22048, h: 22050, l: 22035, c: 22038, vol: 65 },
    { o: 22038, h: 22040, l: 22025, c: 22028, vol: 70 },
    // Rejection at idx 9 — long lower wick into VWAP
    { o: 22028, h: 22038, l: 22014, c: 22035, vol: 105 },
    { o: 22035, h: 22048, l: 22033, c: 22045, vol: 85 },
    { o: 22045, h: 22055, l: 22043, c: 22052, vol: 75 },
    { o: 22052, h: 22060, l: 22050, c: 22058, vol: 70 },
    { o: 22058, h: 22065, l: 22055, c: 22062, vol: 65 },
  ];
  const vwap = computeVWAP(candles);
  const minP = Math.min(...candles.map(c => c.l)) - 4;
  const maxP = Math.max(...candles.map(c => c.h)) + 6;
  const innerW = chartR - chartL;
  const innerH = chartB - chartT;
  const slot = innerW / candles.length;
  const bodyW = Math.max(8, slot * 0.6);
  const xFor = i => chartL + i * slot + slot / 2;
  const yFor = price => chartT + ((maxP - price) / (maxP - minP)) * innerH;
  const vwapPath = vwap.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(v)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block rounded-xl border border-border w-full h-auto"
      style={{ background: '#0a0a0a', minWidth: '880px' }}>
      <text x={W / 2} y={20} fill={C_VWAP} fontSize={14} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif" textAnchor="middle">
        VWAP REJECTION — 5 STEPS
      </text>
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={chartL} x2={chartR} y1={chartT + innerH * t} y2={chartT + innerH * t} stroke="#262626" strokeWidth={1} />
      ))}

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

      {/* VWAP curving line */}
      <path d={vwapPath} stroke={C_VWAP} strokeWidth={3} fill="none" strokeLinejoin="round" />

      {/* Marker 1 — at VWAP line, mid chart */}
      <NumCircle x={xFor(2)} y={yFor(vwap[2])} n="1" color={C_VWAP} />

      {/* Marker 2 — at price (clearly above VWAP) */}
      <NumCircle x={xFor(5)} y={yFor(candles[5].c) - 18} n="2" color={C_BULL} />

      {/* Marker 3 — pullback arrow */}
      <NumCircle x={xFor(7)} y={yFor(candles[7].h) - 18} n="3" color={C_VWAP} />
      <line x1={xFor(7) + 6} y1={yFor(candles[7].h) - 8} x2={xFor(9) - 6} y2={yFor(candles[9].l) + 4}
        stroke={C_VWAP} strokeWidth={1.6} strokeDasharray="3 3" opacity={0.7} />

      {/* Marker 4 — at rejection candle */}
      <NumCircle x={xFor(9)} y={yFor(candles[9].l) + 24} n="4" color={C_BREAK} />
      <rect x={xFor(9) - bodyW * 0.9} y={yFor(candles[9].h) - 3}
        width={bodyW * 1.8} height={yFor(candles[9].l) - yFor(candles[9].h) + 6}
        fill="none" stroke={C_BREAK} strokeWidth={1.8} rx={2} />

      {/* Marker 5 — entry at next candle close */}
      <NumCircle x={xFor(10)} y={yFor(candles[10].c) - 18} n="5" color={C_ENTRY} />

      {/* Divider */}
      <line x1={chartR + 8} y1={chartT} x2={chartR + 8} y2={chartB} stroke="#262626" strokeWidth={1} />

      {/* Captions */}
      <CaptionBlock x={capX} y={32} num={1} color={C_VWAP}
        title="Identify the VWAP line"
        body="Most platforms show it as a moving curving line — gold by default in NinjaTrader. Make sure it's enabled." />
      <CaptionBlock x={capX} y={132} num={2} color={C_BULL}
        title="Determine your bias"
        body="Above VWAP = bullish (longs only). Below VWAP = bearish (shorts only). Trade the bias direction." />
      <CaptionBlock x={capX} y={232} num={3} color={C_VWAP}
        title="Watch for pullback to VWAP"
        body="In an uptrend, price dips down to tag VWAP. In a downtrend, price rallies up to tag it. Tag = setup forming." />
      <CaptionBlock x={capX} y={350} num={4} color={C_BREAK}
        title="Spot the rejection candle"
        body="Long wick INTO VWAP, body firmly AWAY from VWAP. The wick = failed test. The body = the bounce." />
      <CaptionBlock x={capX} y={470} num={5} color={C_ENTRY}
        title="Enter on the close"
        body="Enter at rejection candle's close. Stop just past the wick. Target = prior swing high or low." />
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
// SECTION 3 — VWAP TRADING VARIANTS (table)
// ================================================================
function Section3Variants() {
  const rows = [
    { type: 'Bounce (with bias)',  desc: 'Price tags VWAP from above and bounces (uptrend)',     reliability: 'High' },
    { type: 'Bounce (with bias)',  desc: 'Price tags VWAP from below and rejects (downtrend)',  reliability: 'High' },
    { type: 'Reclaim Trade',       desc: 'Price crosses VWAP, retests from new side, continues up', reliability: 'Highest', highlight: true },
    { type: 'Lose Trade',          desc: 'Same as reclaim but bearish direction (cross + retest down)', reliability: 'Highest', highlight: true },
    { type: 'Range Bounce',        desc: 'Price oscillating around VWAP (range day)',            reliability: 'Lower — smaller targets' },
    { type: 'Multi-Touch',         desc: 'Price tags VWAP multiple times in a session',          reliability: 'Decreases each touch' }
  ];
  return (
    <SectionShell n={3} title="VWAP Trading Variants (Comparison Table)">
      <p className="mb-5">Not every interaction with VWAP is the same setup. Six variants — three are A+ scalps, three are situational.</p>
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-sm border-collapse">
          <thead>
            <tr className="text-left text-muted uppercase tracking-wider text-xs">
              <th className="py-2 px-3 border-b border-border">Setup Type</th>
              <th className="py-2 px-3 border-b border-border">Description</th>
              <th className="py-2 px-3 border-b border-border">Reliability</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={r.highlight ? 'bg-green/10 border-l-4 border-green' : ''}>
                <td className={`py-2 px-3 border-b border-border ${r.highlight ? 'text-green font-bold' : ''}`}>{r.type}</td>
                <td className="py-2 px-3 border-b border-border text-text/90">{r.desc}</td>
                <td className={`py-2 px-3 border-b border-border ${r.highlight ? 'text-green font-bold' : ''}`}>{r.reliability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 card-tight border-green/40 bg-green/5">
        <p className="text-green font-display font-bold text-base md:text-lg leading-relaxed">
          For 2-minute scalping, the highest-reliability VWAP setups are: (1) bounce trades in trending
          markets, and (2) reclaim/lose trades when price decisively breaks VWAP and retests. Avoid VWAP
          setups in choppy ranges — too many false signals.
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
    <SectionShell n={4} title="Twelve Large Examples — VWAP Drawn on Every Chart">
      <p className="mb-6">Each example is its own exhibit. The chart, then a short caption explaining what to learn from it. Read both. The golden VWAP line is the focal point of every chart — it bends and curves through price action just like it does live.</p>
      <div className="space-y-8">
        {VWAP_EXAMPLES.map((ex) => (
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
        <div className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-lg shrink-0"
          style={{ background: 'rgba(251,191,36,0.15)', color: C_VWAP, border: '1px solid rgba(251,191,36,0.4)' }}>
          {ex.n}
        </div>
        <h3 className="font-display font-semibold text-xl md:text-2xl">{ex.title}</h3>
      </div>
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <VWAPChart ex={ex} />
      </div>
      <p className="mt-4 leading-relaxed text-text/90 max-w-4xl">{ex.caption}</p>
    </div>
  );
}

// Reusable VWAP chart renderer — every example provides candles, computes VWAP, and renders annotations.
function VWAPChart({ ex }) {
  const W = 1200, H = 540;
  const padL = 60, padR = 60, padT = 40, padB = 60;
  const volH = 80;
  const chartL = padL, chartR = W - padR;
  const chartT = padT, chartB = H - padB - volH - 10;
  const candles = ex.candles;
  const vwap = computeVWAP(candles);
  const bands = ex.showBands ? computeVWAPBands(candles, vwap) : null;
  const allHigh = Math.max(
    ...candles.map(c => c.h),
    ex.targetPrice ?? -Infinity,
    bands ? Math.max(...bands.upper) : -Infinity
  );
  const allLow = Math.min(
    ...candles.map(c => c.l),
    ex.stopPrice ?? Infinity,
    bands ? Math.min(...bands.lower) : Infinity
  );
  const padding = (allHigh - allLow) * 0.08;
  const yMax = allHigh + padding;
  const yMin = allLow - padding;
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

  const vwapPath = vwap.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(v)}`).join(' ');
  const upperPath = bands ? bands.upper.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(v)}`).join(' ') : null;
  const lowerPath = bands ? bands.lower.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(v)}`).join(' ') : null;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block rounded-xl border border-border w-full h-auto"
      style={{ background: '#0a0a0a', minWidth: '900px' }}>
      {/* Grid */}
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={chartL} x2={chartR} y1={chartT + innerH * t} y2={chartT + innerH * t}
          stroke="#262626" strokeWidth={1} />
      ))}

      {/* News marker line if present */}
      {ex.newsAtIndex != null && (
        <g>
          <line x1={xFor(ex.newsAtIndex)} x2={xFor(ex.newsAtIndex)}
            y1={chartT} y2={chartB} stroke="#FFB44A" strokeWidth={1.5} strokeDasharray="6 4" opacity={0.7} />
          <text x={xFor(ex.newsAtIndex)} y={chartT + 16} fill="#FFB44A" fontSize={11}
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

      {/* VWAP standard deviation bands (if enabled) */}
      {bands && (
        <g>
          <path d={upperPath} stroke={C_BAND} strokeWidth={1.5} strokeDasharray="4 4" fill="none" opacity={0.3} />
          <path d={lowerPath} stroke={C_BAND} strokeWidth={1.5} strokeDasharray="4 4" fill="none" opacity={0.3} />
        </g>
      )}

      {/* VWAP line - golden 3px solid - the focal point */}
      <path d={vwapPath} stroke={C_VWAP} strokeWidth={3} fill="none" strokeLinejoin="round" />
      <text x={chartL + 6} y={yFor(vwap[0]) - 6} fill={C_VWAP}
        fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">VWAP</text>

      {/* Other-level overlay (Example 8 confluence) */}
      {ex.otherLevel != null && (
        <g>
          <line x1={chartL} y1={yFor(ex.otherLevel)} x2={chartR} y2={yFor(ex.otherLevel)}
            stroke="#06b6d4" strokeWidth={1.8} strokeDasharray="3 5" opacity={0.85} />
          <text x={chartL + 8} y={yFor(ex.otherLevel) - 4} fill="#06b6d4"
            fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">
            {ex.otherLevelLabel || 'Prior Day High'}
          </text>
        </g>
      )}

      {/* Volume bars (rejection bar emphasized) */}
      {candles.map((c, i) => {
        if (c.vol == null) return null;
        const x = xFor(i);
        const isUp = c.c >= c.o;
        const color = isUp ? C_BULL : C_BEAR;
        const yT = yVol(c.vol);
        const isRejection = i === ex.rejectIdx;
        return (
          <rect key={`v${i}`} x={x - bodyW / 2} y={yT}
            width={bodyW} height={volBottom - yT}
            fill={isRejection ? C_BREAK : color} opacity={isRejection ? 0.95 : 0.45} />
        );
      })}

      {/* Rejection candle highlight + label */}
      {ex.rejectIdx != null && !ex.failed && (
        <g>
          <rect x={xFor(ex.rejectIdx) - bodyW * 0.95}
            y={yFor(candles[ex.rejectIdx].h) - 4}
            width={bodyW * 1.9}
            height={yFor(candles[ex.rejectIdx].l) - yFor(candles[ex.rejectIdx].h) + 8}
            fill="none" stroke={C_BREAK} strokeWidth={2} rx={3} />
          <text x={xFor(ex.rejectIdx)}
            y={ex.direction === 'up' ? yFor(candles[ex.rejectIdx].l) + 22 : yFor(candles[ex.rejectIdx].h) - 16}
            fill={C_BREAK} fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold" textAnchor="middle">
            {ex.rejectLabel || 'REJECTION'}
          </text>
        </g>
      )}

      {/* Failed marker (X over the failed entry) */}
      {ex.failed && ex.failedIdx != null && (
        <g transform={`translate(${xFor(ex.failedIdx)},${yFor(ex.failedPrice)})`}>
          <g stroke={C_STOP} strokeWidth={4} strokeLinecap="round" opacity={0.9}>
            <line x1={-14} y1={-14} x2={14} y2={14} />
            <line x1={14} y1={-14} x2={-14} y2={14} />
          </g>
          <text x={20} y={-14} fill={C_STOP} fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">
            {ex.failedReason || 'FAILED'}
          </text>
        </g>
      )}

      {/* Entry arrow (mint green) */}
      {ex.entryIdx != null && (
        <g>
          <line x1={xFor(ex.entryIdx) + 26} x2={xFor(ex.entryIdx) + 8}
            y1={yFor(ex.entryPrice) + (ex.direction === 'up' ? -32 : 32)}
            y2={yFor(ex.entryPrice) + (ex.direction === 'up' ? -8 : 8)}
            stroke={C_ENTRY} strokeWidth={2.5} markerEnd={`url(#arrowEntry-${ex.n})`} />
          <text x={xFor(ex.entryIdx) + 32}
            y={yFor(ex.entryPrice) + (ex.direction === 'up' ? -34 : 42)}
            fill={C_ENTRY} fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">
            ENTRY @ {ex.entryPrice}
          </text>
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
      {(ex.timeMarkers || [
        { i: 0, t: '9:50' },
        { i: Math.floor(candles.length / 2), t: '10:15' },
        { i: candles.length - 1, t: '10:45' }
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

      <defs>
        <marker id={`arrowEntry-${ex.n}`} markerWidth={10} markerHeight={10} refX={8} refY={5} orient="auto">
          <polygon points="0 0, 10 5, 0 10" fill={C_ENTRY} />
        </marker>
      </defs>
    </svg>
  );
}

// ================================================================
// 12 EXAMPLES — DATA (injected separately to keep file modular)
// ================================================================
const C2 = (o, h, l, c, vol) => ({ o, h, l, c, vol });

const VWAP_EXAMPLES = buildExamples();

function buildExamples() {
  return [
    ex1TextbookBounce(),
    ex2TextbookRejection(),
    ex3ReclaimTrade(),
    ex4LoseTrade(),
    ex5MultipleTouches(),
    ex6FailedRejection(),
    ex7VolumeConfluence(),
    ex8LevelConfluence(),
    ex9EndOfDay(),
    ex10PreNewsTrap(),
    ex11WickRejection(),
    ex12YourWindow()
  ];
}

// EX 1 — TEXTBOOK BOUNCE (Long Setup)
function ex1TextbookBounce() {
  const candles = [
    C2(22000, 22012, 21998, 22010, 80),
    C2(22010, 22022, 22008, 22020, 78),
    C2(22020, 22032, 22018, 22030, 75),
    C2(22030, 22042, 22028, 22040, 72),
    C2(22040, 22052, 22038, 22050, 70),
    C2(22050, 22060, 22048, 22057, 68),
    C2(22057, 22063, 22050, 22052, 60),
    C2(22052, 22054, 22042, 22045, 65),
    C2(22045, 22047, 22030, 22033, 70),
    // REJECTION at idx 9 — long lower wick INTO VWAP, body bounces up
    C2(22033, 22042, 22018, 22040, 115),
    // confirmation candle
    C2(22040, 22052, 22038, 22050, 90),
    C2(22050, 22062, 22048, 22060, 80),
    C2(22060, 22070, 22058, 22068, 75),
    C2(22068, 22075, 22065, 22072, 65),
  ];
  return {
    n: 1, title: 'The Textbook Bounce (Long Setup)',
    candles, direction: 'up',
    rejectIdx: 9, rejectLabel: 'REJECTION — long wick into VWAP',
    entryIdx: 9, entryPrice: 22040,
    targetPrice: 22063, stopPrice: 22015,
    showBands: true,
    timeMarkers: [{ i: 0, t: '9:50' }, { i: 9, t: '10:08' }, { i: 13, t: '10:16' }],
    caption: "Above VWAP = long bias. Pullback to VWAP = entry zone. Long wick into VWAP, body bounces up = your trigger. Enter on the close of the rejection candle. Stop below the wick low. Target the prior swing high. The faint dashed bands on either side of VWAP are the 1-sigma standard deviation bands — they show how far price has wandered from VWAP this session."
  };
}

// EX 2 — TEXTBOOK REJECTION (Short Setup)
function ex2TextbookRejection() {
  const candles = [
    C2(15890, 15892, 15880, 15882, 80),
    C2(15882, 15884, 15870, 15872, 78),
    C2(15872, 15874, 15860, 15862, 75),
    C2(15862, 15864, 15850, 15852, 72),
    C2(15852, 15854, 15840, 15842, 70),
    C2(15842, 15844, 15832, 15835, 68),
    C2(15835, 15848, 15833, 15846, 60),
    C2(15846, 15858, 15844, 15856, 65),
    C2(15856, 15870, 15854, 15868, 70),
    // REJECTION at idx 9 — long upper wick INTO VWAP, body rejects down
    C2(15868, 15885, 15860, 15862, 115),
    C2(15862, 15864, 15850, 15852, 90),
    C2(15852, 15854, 15840, 15842, 80),
    C2(15842, 15844, 15830, 15832, 75),
    C2(15832, 15834, 15825, 15828, 65),
  ];
  return {
    n: 2, title: 'The Textbook Rejection (Short Setup)',
    candles, direction: 'down',
    rejectIdx: 9, rejectLabel: 'REJECTION — long wick into VWAP',
    entryIdx: 9, entryPrice: 15862,
    targetPrice: 15832, stopPrice: 15888,
    showBands: true,
    timeMarkers: [{ i: 0, t: '9:50' }, { i: 9, t: '10:08' }, { i: 13, t: '10:16' }],
    caption: "Below VWAP = short bias. Rally to VWAP = entry zone. Long wick into VWAP, body rejects back down = your trigger. Same mechanics, opposite direction. Notice how VWAP curves DOWN over time as new lower-priced volume enters — VWAP follows the dominant flow."
  };
}

// EX 3 — RECLAIM TRADE (Highest Probability Long)
function ex3ReclaimTrade() {
  const candles = [
    // Below VWAP all morning
    C2(22000, 22008, 21988, 21990, 70),
    C2(21990, 21998, 21978, 21980, 75),
    C2(21980, 21988, 21968, 21972, 72),
    C2(21972, 21982, 21965, 21978, 68),
    C2(21978, 21988, 21972, 21985, 65),
    C2(21985, 21992, 21978, 21982, 60),
    C2(21982, 21988, 21972, 21978, 58),
    // Strong reclaim candle - decisively crosses VWAP
    C2(21978, 22018, 21976, 22015, 130),
    C2(22015, 22025, 22008, 22020, 95),
    // Pullback to retest VWAP from above
    C2(22020, 22022, 22000, 22002, 80),
    // RETEST at idx 10 - VWAP now acts as support
    C2(22002, 22012, 21998, 22010, 110),
    // Continuation up
    C2(22010, 22025, 22008, 22023, 95),
    C2(22023, 22038, 22020, 22035, 85),
    C2(22035, 22048, 22033, 22045, 75),
  ];
  return {
    n: 3, title: 'The Reclaim Trade (Highest Probability Long)',
    candles, direction: 'up',
    rejectIdx: 10, rejectLabel: 'RETEST — VWAP now support',
    entryIdx: 10, entryPrice: 22010,
    targetPrice: 22045, stopPrice: 21992,
    showBands: true,
    timeMarkers: [{ i: 0, t: '9:50' }, { i: 7, t: '10:04' }, { i: 10, t: '10:10' }, { i: 13, t: '10:16' }],
    caption: "When price decisively crosses VWAP and successfully retests it from the new side, the bias has FLIPPED. The retest is the confirmation — VWAP that was resistance is now support. This is the highest-probability VWAP trade — institutional flows have officially shifted. Take size."
  };
}

// EX 4 — LOSE TRADE (Highest Probability Short)
function ex4LoseTrade() {
  const candles = [
    // Above VWAP all morning
    C2(15870, 15890, 15868, 15888, 70),
    C2(15888, 15902, 15885, 15900, 75),
    C2(15900, 15912, 15897, 15908, 72),
    C2(15908, 15918, 15904, 15912, 68),
    C2(15912, 15920, 15905, 15910, 65),
    C2(15910, 15915, 15900, 15905, 60),
    C2(15905, 15910, 15895, 15900, 58),
    // Strong losing candle - decisively crosses below VWAP
    C2(15900, 15902, 15860, 15862, 130),
    C2(15862, 15870, 15852, 15858, 95),
    // Pullback (rally) to retest VWAP from below
    C2(15858, 15880, 15856, 15878, 80),
    // RETEST at idx 10 - VWAP now acts as resistance
    C2(15878, 15882, 15868, 15870, 110),
    // Continuation down
    C2(15870, 15872, 15855, 15858, 95),
    C2(15858, 15860, 15842, 15845, 85),
    C2(15845, 15848, 15832, 15835, 75),
  ];
  return {
    n: 4, title: 'The Lose Trade (Highest Probability Short)',
    candles, direction: 'down',
    rejectIdx: 10, rejectLabel: 'RETEST — VWAP now resistance',
    entryIdx: 10, entryPrice: 15870,
    targetPrice: 15835, stopPrice: 15885,
    showBands: true,
    timeMarkers: [{ i: 0, t: '9:50' }, { i: 7, t: '10:04' }, { i: 10, t: '10:10' }, { i: 13, t: '10:16' }],
    caption: "Same mechanics as the reclaim trade but bearish. Decisive break below VWAP, retest from below where VWAP becomes resistance, then continue down. Highest-probability short setup. Notice VWAP started flat then bent down as the losing volume reshaped it."
  };
}

// EX 5 — MULTIPLE TOUCHES (Range Day)
function ex5MultipleTouches() {
  const candles = [
    // Range oscillating around VWAP
    C2(22030, 22045, 22025, 22042, 75),
    C2(22042, 22048, 22035, 22038, 70),
    C2(22038, 22040, 22020, 22023, 80),
    // First touch & bounce
    C2(22023, 22038, 22020, 22035, 90),
    C2(22035, 22045, 22033, 22042, 75),
    C2(22042, 22048, 22038, 22040, 65),
    C2(22040, 22042, 22025, 22028, 70),
    // Second touch (smaller bounce)
    C2(22028, 22035, 22022, 22033, 78),
    C2(22033, 22040, 22030, 22037, 60),
    C2(22037, 22040, 22032, 22035, 55),
    C2(22035, 22037, 22025, 22027, 65),
    // Third touch (weakest bounce)
    C2(22027, 22030, 22022, 22029, 65),
    C2(22029, 22032, 22025, 22028, 50),
    C2(22028, 22030, 22022, 22025, 45),
  ];
  return {
    n: 5, title: 'Multiple Touches (Range Day)',
    candles, direction: 'up',
    rejectIdx: 3, rejectLabel: 'Touch 1 — strongest bounce',
    entryIdx: 3, entryPrice: 22035,
    showBands: true,
    timeMarkers: [{ i: 0, t: '9:50' }, { i: 3, t: '9:56' }, { i: 7, t: '10:04' }, { i: 11, t: '10:12' }, { i: 13, t: '10:16' }],
    caption: "On range days, VWAP becomes a magnet. Each tag can produce a smaller bounce trade. Take partials early — by the third or fourth touch, the range is exhausting and the bounce becomes weaker. After 3 tags, expect a break. The first touch (orange highlight) is the highest-quality. Each subsequent touch is progressively less reliable."
  };
}

// EX 6 — FAILED REJECTION (Break Through)
function ex6FailedRejection() {
  const candles = [
    C2(22000, 22012, 21998, 22010, 80),
    C2(22010, 22022, 22008, 22020, 78),
    C2(22020, 22032, 22018, 22030, 75),
    C2(22030, 22042, 22028, 22040, 72),
    C2(22040, 22052, 22038, 22050, 70),
    C2(22050, 22060, 22048, 22057, 68),
    C2(22057, 22063, 22050, 22052, 60),
    C2(22052, 22054, 22042, 22045, 65),
    C2(22045, 22047, 22030, 22033, 70),
    // Looks like rejection at idx 9 — long lower wick into VWAP
    C2(22033, 22040, 22018, 22037, 95),
    // FAILS — next candle closes BELOW VWAP, breaking through
    C2(22037, 22038, 22015, 22018, 110),
    // Continuation DOWN
    C2(22018, 22022, 22000, 22005, 95),
    // Retest from below (VWAP now resistance) — short opportunity
    C2(22005, 22020, 22002, 22008, 85),
    C2(22008, 22010, 21988, 21992, 90),
  ];
  return {
    n: 6, title: 'FAILED Rejection (Break Through)',
    candles, direction: 'down',
    failed: true, failedIdx: 9, failedPrice: 22037, failedReason: 'long entry FAILED',
    showBands: true,
    timeMarkers: [{ i: 0, t: '9:50' }, { i: 9, t: '10:08' }, { i: 11, t: '10:12' }, { i: 13, t: '10:16' }],
    caption: "When the rejection 'should' work but doesn't, that's a tell — price wanted to break through. The break itself becomes the trade — in the OPPOSITE direction of the failed bounce. Watch for the retest from the new side (here at candle 12, where price rallies back to VWAP from below) and trade in the direction of the break. Failed rejections quickly become reclaim/lose trades."
  };
}

// EX 7 — VOLUME CONFLUENCE (A+ Setup)
function ex7VolumeConfluence() {
  const candles = [
    C2(22000, 22012, 21998, 22010, 65),
    C2(22010, 22022, 22008, 22020, 62),
    C2(22020, 22032, 22018, 22030, 58),
    C2(22030, 22042, 22028, 22040, 55),
    C2(22040, 22052, 22038, 22050, 52),
    C2(22050, 22060, 22048, 22057, 48),
    C2(22057, 22063, 22050, 22052, 45),
    C2(22052, 22054, 22042, 22045, 50),
    C2(22045, 22047, 22030, 22033, 55),
    // REJECTION at idx 9 with MASSIVE volume (3x avg)
    C2(22033, 22045, 22018, 22042, 220),
    C2(22042, 22055, 22040, 22052, 110),
    C2(22052, 22065, 22050, 22062, 95),
    C2(22062, 22075, 22060, 22072, 80),
    C2(22072, 22080, 22068, 22075, 70),
  ];
  return {
    n: 7, title: 'Volume Confluence (A+ Setup)',
    candles, direction: 'up',
    rejectIdx: 9, rejectLabel: 'REJECTION — volume 3x avg',
    entryIdx: 9, entryPrice: 22042,
    targetPrice: 22075, stopPrice: 22015,
    showBands: true,
    timeMarkers: [{ i: 0, t: '9:50' }, { i: 9, t: '10:08' }, { i: 13, t: '10:16' }],
    caption: "When a VWAP rejection comes with huge volume — clearly the largest bar of the morning, here ~3x the average — institutions are publicly defending the level. Look at the volume subchart: the orange rejection bar dwarfs every other bar. This is your A+ setup. Take full size. The big players are showing their hand. These are the trades you wait for."
  };
}

// EX 9 — END OF DAY VWAP (Less Reliable)
function ex9EndOfDay() {
  const candles = [
    // Late-session VWAP — already heavy with cumulative volume, slow to move
    C2(22020, 22030, 22015, 22028, 45),
    C2(22028, 22038, 22025, 22035, 42),
    C2(22035, 22042, 22030, 22038, 40),
    C2(22038, 22045, 22033, 22040, 38),
    C2(22040, 22048, 22038, 22045, 35),
    C2(22045, 22050, 22040, 22042, 32),
    C2(22042, 22045, 22030, 22033, 35),
    C2(22033, 22038, 22020, 22023, 38),
    // Looks like rejection — long lower wick
    C2(22023, 22035, 22010, 22030, 50),
    // BUT no follow-through — stalls here
    C2(22030, 22033, 22018, 22020, 42),
    // Slowly drifts down through VWAP without clear reaction
    C2(22020, 22025, 22012, 22015, 38),
    C2(22015, 22020, 22008, 22012, 35),
    C2(22012, 22018, 22005, 22008, 32),
    C2(22008, 22012, 22002, 22005, 28),
  ];
  return {
    n: 9, title: 'End of Day VWAP (Less Reliable)',
    candles, direction: 'up',
    failed: true, failedIdx: 8, failedPrice: 22030, failedReason: 'no follow-through · drift',
    showBands: true,
    timeMarkers: [{ i: 0, t: '14:30' }, { i: 8, t: '14:46' }, { i: 13, t: '14:56' }],
    caption: "VWAP becomes less reliable late in the session because (a) cumulative volume makes the line slow to move, and (b) end-of-day positioning ignores intraday levels. The 'rejection' at candle 8 looks valid in real time but never gets confirmation — price slowly drifts back through VWAP without reaction. Trade VWAP earlier in the session — your 10:15-12:00 window is ideal."
  };
}

// EX 10 — PRE-NEWS VWAP TRAP
function ex10PreNewsTrap() {
  const candles = [
    C2(22000, 22012, 21998, 22010, 70),
    C2(22010, 22022, 22008, 22020, 68),
    C2(22020, 22032, 22018, 22030, 65),
    C2(22030, 22042, 22028, 22040, 62),
    C2(22040, 22052, 22038, 22050, 60),
    C2(22050, 22060, 22048, 22057, 58),
    C2(22057, 22063, 22050, 22053, 55),
    C2(22053, 22055, 22043, 22045, 60),
    C2(22045, 22047, 22035, 22038, 65),
    // Looks like rejection at idx 9
    C2(22038, 22045, 22020, 22042, 95),
    // NEWS DROPS at idx 10 (10:00 ET) — slams through VWAP regardless
    C2(22042, 22045, 22000, 22005, 250),
    C2(22005, 22008, 21978, 21982, 180),
    C2(21982, 21985, 21955, 21960, 140),
    C2(21960, 21972, 21955, 21968, 110),
  ];
  return {
    n: 10, title: 'Pre-News VWAP Trap',
    candles, direction: 'up',
    failed: true, failedIdx: 9, failedPrice: 22042, failedReason: 'NEWS — setup destroyed',
    newsAtIndex: 10,
    showBands: false,
    timeMarkers: [{ i: 0, t: '9:42' }, { i: 9, t: '9:58' }, { i: 10, t: '10:00 NEWS' }, { i: 13, t: '10:08' }],
    caption: "Always check the economic calendar. The rejection setup at candle 9 looks valid — clean wick into VWAP, body away. Then news drops at 10:00 ET (FOMC/CPI/etc.) and price slams through VWAP regardless of the technical setup. News-driven moves don't respect VWAP. If high-impact news is scheduled within 5 minutes of your potential entry, sit out."
  };
}

// EX 11 — THE WICK REJECTION (Cleanest Signal)
function ex11WickRejection() {
  const candles = [
    C2(22000, 22012, 21998, 22010, 75),
    C2(22010, 22022, 22008, 22020, 72),
    C2(22020, 22032, 22018, 22030, 70),
    C2(22030, 22042, 22028, 22040, 68),
    C2(22040, 22052, 22038, 22050, 65),
    C2(22050, 22062, 22048, 22060, 62),
    C2(22060, 22068, 22055, 22058, 58),
    C2(22058, 22060, 22045, 22048, 60),
    C2(22048, 22050, 22035, 22038, 65),
    // PERFECT WICK REJECTION at idx 9 — long wick way down to 22015, body small at 22043-22048
    C2(22038, 22050, 22014, 22048, 130),
    C2(22048, 22060, 22045, 22057, 95),
    C2(22057, 22070, 22055, 22068, 85),
    C2(22068, 22078, 22065, 22075, 75),
    C2(22075, 22082, 22072, 22078, 65),
  ];
  return {
    n: 11, title: 'The Wick Rejection (Cleanest Signal)',
    candles, direction: 'up',
    rejectIdx: 9, rejectLabel: 'WICK 30+ pts · body 5 pts · 6:1 ratio',
    entryIdx: 9, entryPrice: 22048,
    targetPrice: 22075, stopPrice: 22011,
    showBands: true,
    timeMarkers: [{ i: 0, t: '9:50' }, { i: 9, t: '10:08' }, { i: 13, t: '10:16' }],
    caption: "The long-wick rejection candle is the cleanest VWAP signal you can get. Look at candle 9 — the wick stretches nearly 30 points down INTO VWAP territory while the body is only ~5 points. That's a 6:1 wick-to-body ratio. The wick = price tested VWAP and found heavy support. The body close way back up = the test failed decisively. Wick-to-body ratio of 2:1 or more is the gold standard. This is the cleanest setup on the page."
  };
}

// EX 12 — VWAP IN YOUR TRADE WINDOW (The Bread & Butter)
function ex12YourWindow() {
  const candles = [
    // Opening drive up (9:30 - 10:00 ET, prior to your window)
    C2(22000, 22020, 21996, 22018, 95),
    C2(22018, 22038, 22015, 22035, 88),
    C2(22035, 22055, 22032, 22052, 82),
    C2(22052, 22070, 22048, 22068, 75),
    C2(22068, 22075, 22060, 22063, 65),
    // Gradual pullback into your window
    C2(22063, 22068, 22055, 22058, 60),
    C2(22058, 22060, 22048, 22050, 65),
    // Approaching VWAP
    C2(22050, 22052, 22040, 22043, 70),
    C2(22043, 22045, 22033, 22036, 75),
    // REJECTION at idx 9 — 10:30 ET, clean tag of VWAP
    C2(22036, 22045, 22020, 22043, 120),
    C2(22043, 22058, 22041, 22055, 95),
    C2(22055, 22070, 22052, 22067, 85),
    C2(22067, 22078, 22065, 22075, 75),
    C2(22075, 22082, 22072, 22078, 65),
  ];
  return {
    n: 12, title: 'VWAP in Your Trade Window (Common Setup)',
    candles, direction: 'up',
    rejectIdx: 9, rejectLabel: 'REJECTION @ 10:30 ET',
    entryIdx: 9, entryPrice: 22043,
    targetPrice: 22075, stopPrice: 22017,
    showBands: true,
    timeMarkers: [{ i: 0, t: '9:30' }, { i: 5, t: '10:15 (window opens)' }, { i: 9, t: '10:30' }, { i: 13, t: '10:42' }],
    caption: "VWAP setups are abundant in your 10:15-12:00 window because the morning's first VWAP touch often comes mid-morning as price pulls back from the opening drive. Here the opening drive ran from 9:30 to 10:00, then price slowly faded toward VWAP. By 10:30, institutions know where they want to defend. The rejection is your trade. This is one of the most reliable setups available to you — VWAP rejection in your prime trade window."
  };
}

// EX 8 — VWAP + OTHER LEVEL CONFLUENCE
function ex8LevelConfluence() {
  const candles = [
    C2(22000, 22012, 21998, 22010, 75),
    C2(22010, 22022, 22008, 22020, 72),
    C2(22020, 22032, 22018, 22030, 70),
    C2(22030, 22042, 22028, 22040, 68),
    C2(22040, 22052, 22038, 22050, 65),
    C2(22050, 22060, 22048, 22057, 62),
    C2(22057, 22063, 22050, 22053, 58),
    C2(22053, 22055, 22043, 22045, 60),
    C2(22045, 22047, 22035, 22038, 65),
    // REJECTION at idx 9 — both VWAP AND prior day high overlap here
    C2(22038, 22045, 22020, 22043, 130),
    C2(22043, 22055, 22041, 22053, 95),
    C2(22053, 22065, 22050, 22062, 85),
    C2(22062, 22075, 22060, 22072, 75),
    C2(22072, 22078, 22068, 22075, 65),
  ];
  return {
    n: 8, title: 'VWAP + Other Level Confluence',
    candles, direction: 'up',
    rejectIdx: 9, rejectLabel: 'REJECTION at confluence',
    entryIdx: 9, entryPrice: 22043,
    targetPrice: 22075, stopPrice: 22018,
    showBands: false,
    otherLevel: 22025, otherLevelLabel: 'Prior Day High @ 22025 — confluence with VWAP',
    timeMarkers: [{ i: 0, t: '9:50' }, { i: 9, t: '10:08' }, { i: 13, t: '10:16' }],
    caption: "When VWAP aligns with another important level — here the prior day's high (cyan dashed line) sits very close to where VWAP curves through — the confluence amplifies the setup. Two reasons price should bounce stacked at the same spot. Multi-level rejections are the highest-quality trades. Always check higher-timeframe levels alongside VWAP."
  };
}

// ================================================================
// SECTION 5 — DECISION TREE
// ================================================================
function Section5DecisionTree() {
  const [step, setStep] = useState(1);
  const [path, setPath] = useState([]);

  const reset = () => { setStep(1); setPath([]); };
  const choose = (label, next, terminal, advice) => {
    setPath([...path, { step, label, terminal, advice }]);
    if (terminal) setStep('end');
    else setStep(next);
  };

  return (
    <SectionShell n={5} title="The VWAP Decision Tree">
      <p className="mb-5">Click through the questions to walk a real-time decision. Use this until the logic is automatic.</p>
      <div className="card border-border">
        {step === 1 && (
          <Question
            title="Q1: Is current price clearly ABOVE or BELOW VWAP (not exactly on it)?"
            options={[
              { label: 'On VWAP / unclear', advice: 'No bias. Wait for clear separation before trading.', terminal: true },
              { label: 'Above VWAP', advice: 'Bullish bias — look for LONG setups on pullbacks to VWAP.', next: 2 },
              { label: 'Below VWAP', advice: 'Bearish bias — look for SHORT setups on rallies to VWAP.', next: 2 }
            ]}
            onChoose={(o) => choose(o.label, o.next, o.terminal, o.advice)}
          />
        )}
        {step === 2 && (
          <Question
            title="Q2: Has price now PULLED BACK to tag VWAP, AND has a candle formed with a long wick into VWAP and body firmly AWAY from VWAP?"
            options={[
              { label: 'No / not yet', advice: 'Wait. Don\'t anticipate. Let the rejection complete.', terminal: true },
              { label: 'Yes — clear rejection candle', advice: 'Good. Move to Q3 for confirmation.', next: 3 }
            ]}
            onChoose={(o) => choose(o.label, o.next, o.terminal, o.advice)}
          />
        )}
        {step === 3 && (
          <Question
            title="Q3: What does the candle right AFTER the rejection candle look like?"
            options={[
              { label: 'Same direction (away from VWAP), good body, rising volume',
                advice: '✅ CONFIRMED. Enter on this candle\'s close. Stop just past the rejection wick. Target = prior swing in the rejection direction.',
                terminal: true },
              { label: 'Small body / doji / retracing back to VWAP',
                advice: '⏸️ STALLED. Wait one more candle. If price closes back at or through VWAP, abort.',
                terminal: true },
              { label: 'Closes through VWAP',
                advice: '❌ FAILED REJECTION. Stand down. The break is now the trade — watch for the reclaim/lose setup in the OPPOSITE direction.',
                terminal: true }
            ]}
            onChoose={(o) => choose(o.label, o.next, o.terminal, o.advice)}
          />
        )}
        {step === 'end' && (
          <div>
            <div className="label text-amber mb-3">Decision path</div>
            <div className="space-y-2 mb-5">
              {path.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="font-mono text-sm text-muted shrink-0">Q{p.step} →</div>
                  <div className="flex-1">
                    <div className="text-text/90 mb-1">{p.label}</div>
                    {p.terminal && (
                      <div className="text-sm leading-relaxed font-display font-semibold"
                        style={{ color: p.advice.startsWith('✅') ? C_ENTRY : p.advice.startsWith('❌') ? C_STOP : C_TARGET }}>
                        {p.advice}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-ghost" onClick={reset}>↻ Run again</button>
          </div>
        )}
      </div>
    </SectionShell>
  );
}

function Question({ title, options, onChoose }) {
  return (
    <div>
      <h4 className="font-display font-semibold text-lg md:text-xl mb-4">{title}</h4>
      <div className="space-y-2">
        {options.map((o, i) => (
          <button key={i} onClick={() => onChoose(o)}
            className="w-full text-left card-tight bg-surface2 hover:border-green/40 hover:bg-green/5 transition-colors">
            <div className="font-display font-medium">{o.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ================================================================
// SECTION 6 — THREE ENTRY TIERS
// ================================================================
function Section6EntryTiers() {
  const tiers = [
    {
      n: 1, kind: 'AGGRESSIVE', color: 'amber',
      when: 'Enter on the close of the rejection candle itself',
      stop: 'Just past the rejection wick',
      rr: '3:1 — 4:1',
      win: 'Lower win rate',
      size: '25-50% size'
    },
    {
      n: 2, kind: 'CONFIRMATION', color: 'green',
      when: 'Enter on the close of the candle AFTER the rejection (only if it follows through)',
      stop: 'Past rejection wick',
      rr: '2:1 — 3:1',
      win: 'Standard',
      size: 'Full size'
    },
    {
      n: 3, kind: 'PULLBACK', color: 'cyan',
      when: 'After confirmation, wait for a small pullback toward VWAP that holds, then enter on the bounce',
      stop: 'Past the pullback low/high',
      rr: '2:1',
      win: 'Highest win rate',
      size: 'Full size, tight stop'
    }
  ];
  const colors = {
    amber: { border: 'border-amber/40', text: 'text-amber', bg: 'bg-amber/10' },
    green: { border: 'border-green/40', text: 'text-green', bg: 'bg-green/10' },
    cyan:  { border: 'border-cyan-400/40', text: 'text-cyan-400', bg: 'bg-cyan-400/10' }
  };
  return (
    <SectionShell n={6} title="The Three Entry Tiers">
      <p className="mb-5">Three ways to enter a VWAP rejection — different risk/reward, different size, different win rate. Pick by your conviction and the cleanliness of the setup.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map((t) => (
          <div key={t.n} className={`card ${colors[t.color].border}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-lg ${colors[t.color].bg} ${colors[t.color].text} ${colors[t.color].border} border flex items-center justify-center font-display font-bold`}>
                T{t.n}
              </div>
              <div className={`font-display font-semibold ${colors[t.color].text}`}>{t.kind}</div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <div className="label mb-1">When to enter</div>
                <p className="text-text/90 leading-relaxed">{t.when}</p>
              </div>
              <div>
                <div className="label mb-1">Stop</div>
                <p className="text-text/90">{t.stop}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border">
                <div>
                  <div className="label">R:R</div>
                  <div className={`font-mono ${colors[t.color].text} font-bold`}>{t.rr}</div>
                </div>
                <div>
                  <div className="label">Win rate</div>
                  <div className="font-mono text-text/90">{t.win}</div>
                </div>
                <div>
                  <div className="label">Size</div>
                  <div className="font-mono text-text/90">{t.size}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

// ================================================================
// SECTION 7 — TARGET CALCULATOR
// ================================================================
function Section7Calculator() {
  const [direction, setDirection] = useState('long');
  const [entry, setEntry] = useState('');
  const [stop, setStop] = useState('');
  const [swing, setSwing] = useState('');

  const calc = useMemo(() => {
    const e = parseFloat(entry), s = parseFloat(stop), sw = parseFloat(swing);
    if (isNaN(e) || isNaN(s) || isNaN(sw)) return null;
    const risk = direction === 'long' ? e - s : s - e;
    const reward = direction === 'long' ? sw - e : e - sw;
    if (risk <= 0 || reward <= 0) return { invalid: true, risk, reward };
    const rr = reward / risk;
    return { risk, reward, rr };
  }, [direction, entry, stop, swing]);

  return (
    <SectionShell n={7} title="Target Calculator (Prior Swing Method)">
      <p className="mb-5">Enter your numbers. The calculator returns risk, reward, and R:R. Take only if R:R ≥ 2:1.</p>
      <div className="card border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div className="label mb-2">Direction</div>
            <div className="flex gap-2">
              <button onClick={() => setDirection('long')}
                className={`flex-1 btn ${direction === 'long' ? 'btn-primary' : 'btn-ghost'}`}>LONG</button>
              <button onClick={() => setDirection('short')}
                className={`flex-1 btn ${direction === 'short' ? 'btn-red' : 'btn-ghost'}`}>SHORT</button>
            </div>
          </div>
          <div>
            <div className="label mb-2">Entry price</div>
            <input className="input" inputMode="decimal" value={entry}
              onChange={(e) => setEntry(e.target.value)} placeholder="e.g. 22034" />
          </div>
          <div>
            <div className="label mb-2">Stop price</div>
            <input className="input" inputMode="decimal" value={stop}
              onChange={(e) => setStop(e.target.value)}
              placeholder={direction === 'long' ? 'below entry' : 'above entry'} />
          </div>
          <div>
            <div className="label mb-2">{direction === 'long' ? 'Prior swing high (target)' : 'Prior swing low (target)'}</div>
            <input className="input" inputMode="decimal" value={swing}
              onChange={(e) => setSwing(e.target.value)}
              placeholder={direction === 'long' ? 'above entry' : 'below entry'} />
          </div>
        </div>

        {calc && !calc.invalid && (
          <div className="mt-6 grid grid-cols-3 gap-3">
            <ResultCard label="Risk" value={calc.risk.toFixed(2)} color="text-red" />
            <ResultCard label="Reward" value={calc.reward.toFixed(2)} color="text-amber" />
            <ResultCard label="R:R" value={calc.rr.toFixed(2) + ' : 1'}
              color={calc.rr >= 2 ? 'text-green' : 'text-red'}
              extra={calc.rr >= 2 ? '✓ Take the trade' : '✗ Skip — R:R too low'} />
          </div>
        )}
        {calc && calc.invalid && (
          <div className="mt-6 card-tight border-red/40 bg-red/5">
            <p className="text-red text-sm">
              Numbers don't make sense for a {direction.toUpperCase()}. Stop should be on the opposite side of entry from the target.
            </p>
          </div>
        )}
        {!calc && (
          <div className="mt-6 text-muted text-sm">Fill all three prices to calculate.</div>
        )}
      </div>
    </SectionShell>
  );
}

function ResultCard({ label, value, color, extra }) {
  return (
    <div className="card-tight border-border text-center">
      <div className="label mb-1">{label}</div>
      <div className={`font-mono text-2xl font-bold ${color}`}>{value}</div>
      {extra && <div className={`text-xs mt-1 ${color}`}>{extra}</div>}
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
      title: '2-3 ticks past the rejection wick',
      body: 'Survives normal noise. If VWAP truly breaks through, you\'re out cleanly with minimum damage. This is the default for almost all VWAP rejection trades.',
      svg: <StopSVG variant="correct" />
    },
    {
      kind: 'TOO TIGHT', color: 'red',
      title: 'Stop ON VWAP itself',
      body: 'Tempting because risk looks tiny. Reality: gets wicked out by minor volatility around the level — the very thing you\'re trying to trade. Right idea, dead trader.',
      svg: <StopSVG variant="tight" />
    },
    {
      kind: 'TOO LOOSE', color: 'red',
      title: 'Stop way past the wick',
      body: 'Wide stop makes R:R unworkable. You\'ll need a 3x normal target to justify the risk. Wastes capital on a too-loose envelope.',
      svg: <StopSVG variant="loose" />
    }
  ];
  const colors = {
    green: { border: 'border-green/40', text: 'text-green' },
    red:   { border: 'border-red/40',   text: 'text-red' }
  };
  return (
    <SectionShell n={8} title="Stop Placement">
      <p className="mb-5">Three options. One is correct. Two are wrong.</p>
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

function StopSVG({ variant }) {
  const w = 280, h = 170;
  // Shared: VWAP curving line, candles, rejection candle with wick into VWAP
  const baseChart = (
    <g>
      {/* curving VWAP line */}
      <path d="M 20 90 Q 80 80, 140 85 T 260 95" stroke={C_VWAP} strokeWidth={2.5} fill="none" />
      <text x={22} y={84} fill={C_VWAP} fontSize={9} fontFamily="'Space Mono', monospace">VWAP</text>
      {/* trending candles above VWAP */}
      {[40, 60, 80, 100].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={50 + i * 3} y2={70 + i * 2} stroke={C_BULL} strokeWidth={1.2} />
          <rect x={x - 4} y={55 + i * 3} width={8} height={12} fill={C_BULL} />
        </g>
      ))}
      {/* pullback candles down */}
      {[120, 140].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={62 + i * 6} y2={88 + i * 4} stroke={C_BEAR} strokeWidth={1.2} />
          <rect x={x - 4} y={65 + i * 6} width={8} height={18} fill={C_BEAR} />
        </g>
      ))}
      {/* REJECTION candle - wick down to 110 (well past VWAP), body close at 70 */}
      <line x1={160} x2={160} y1={68} y2={115} stroke={C_BULL} strokeWidth={1.5} />
      <rect x={156} y={68} width={8} height={20} fill={C_BULL} />
      <text x={160} y={62} fill={C_BREAK} fontSize={8} textAnchor="middle" fontFamily="'Space Mono', monospace">reject</text>
      {/* Entry circle */}
      <circle cx={160} cy={72} r={4.5} fill={C_ENTRY} stroke="#000" strokeWidth={1.2} />
      {/* continuation candles up */}
      {[180, 200, 220].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={48 - i * 4} y2={70} stroke={C_BULL} strokeWidth={1.2} />
          <rect x={x - 4} y={52 - i * 4} width={8} height={14} fill={C_BULL} />
        </g>
      ))}
    </g>
  );
  let stop;
  if (variant === 'correct') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={120} y2={120} stroke={C_STOP} strokeWidth={2} strokeDasharray="6 3" />
        <text x={140} y={138} fill={C_STOP} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · 2-3 ticks past wick</text>
        <text x={140} y={156} fill={C_BULL} fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">survives noise · clean exit if VWAP breaks</text>
      </g>
    );
  } else if (variant === 'tight') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={92} y2={92} stroke={C_STOP} strokeWidth={2} strokeDasharray="6 3" />
        <text x={140} y={108} fill={C_STOP} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · ON VWAP (too tight)</text>
        <text x={140} y={156} fill={C_STOP} fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">wicked out before bounce confirms</text>
      </g>
    );
  } else if (variant === 'loose') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={150} y2={150} stroke={C_STOP} strokeWidth={2} strokeDasharray="6 3" />
        <text x={140} y={164} fill={C_STOP} fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · way past wick (too loose)</text>
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
    <SectionShell n={9} title="Volume Rules">
      <p className="mb-5">Three volume profiles side by side. Only one is a tradable VWAP rejection.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <VolCard tag="VALID" color="green"
          body="HIGH volume on the rejection candle — the largest bar on the chart. Institutions are publicly defending VWAP. A+ setup."
          svg={<VolSVG variant="valid" />} />
        <VolCard tag="SUSPECT" color="amber"
          body="Average volume on rejection. Could go either way. Half size or skip."
          svg={<VolSVG variant="suspect" />} />
        <VolCard tag="INVALID" color="red"
          body="LOW volume on the rejection candle. Institutions aren't there. Skip — no edge."
          svg={<VolSVG variant="invalid" />} />
      </div>
    </SectionShell>
  );
}

function VolCard({ tag, color, body, svg }) {
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

function VolSVG({ variant }) {
  const w = 280, h = 130;
  let bars;
  if (variant === 'valid') bars = [50, 55, 50, 48, 52, 55, 48, 130];
  else if (variant === 'suspect') bars = [55, 50, 52, 48, 50, 52, 50, 60];
  else bars = [60, 55, 50, 48, 45, 42, 40, 35];
  const colors = bars.map((_, i) => i < 7 ? C_BULL : C_BREAK);
  const max = Math.max(...bars);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      <text x={20} y={20} fill="#666" fontSize={10} fontFamily="'Space Mono', monospace">VOLUME</text>
      {bars.map((b, i) => {
        const barH = (b / max) * 95;
        return (
          <rect key={i} x={30 + i * 30} y={120 - barH} width={20} height={barH}
            fill={colors[i]} opacity={i === 7 ? 0.95 : 0.55} />
        );
      })}
      <line x1={235} x2={235} y1={20} y2={125} stroke="#262626" strokeDasharray="3 3" />
      <text x={245} y={20} fill="#666" fontSize={9} fontFamily="'Space Mono', monospace">reject</text>
    </svg>
  );
}

// ================================================================
// SECTION 10 — SIX MISTAKES
// ================================================================
function Section10Mistakes() {
  const mistakes = [
    { n: 1, title: 'Trading VWAP in choppy ranges',                     body: 'No directional bias = no edge. Range days produce too many false signals around VWAP. Skip them and wait for clear above-or-below sessions.' },
    { n: 2, title: 'Counter-trend trades against VWAP bias',             body: 'Taking shorts when price is above VWAP, or longs when below. You\'re fighting institutional flow. Trade WITH the bias — the side price is currently on.' },
    { n: 3, title: 'Stop too tight (right on VWAP)',                     body: 'Stops placed exactly on VWAP get wicked out constantly. Place 2-3 ticks past the rejection wick — the wick low (or high) is your real invalidation point.' },
    { n: 4, title: 'Trading the late-session VWAP',                      body: 'After 14:30 ET, VWAP becomes a slow lagging line. Cumulative volume makes it sluggish; end-of-day positioning ignores it. Reliability drops sharply. Stick to your 10:15-12:00 window.' },
    { n: 5, title: 'Ignoring volume on the rejection candle',            body: 'No volume = no institutions defending the level = no real rejection. The rejection candle should be among the largest volume bars of the morning. Skip if it isn\'t.' },
    { n: 6, title: 'Trading VWAP within 5 minutes of high-impact news',  body: 'FOMC, NFP, CPI, earnings — news-driven moves don\'t respect VWAP. Always check the economic calendar before pulling the trigger. If news is scheduled, sit out.' }
  ];
  return (
    <SectionShell n={10} title="Six Mistakes That Kill VWAP Trades">
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
// SECTION 11 — VWAP vs LOOKALIKES
// ================================================================
function Section11Lookalikes() {
  return (
    <SectionShell n={11} title="VWAP vs Lookalike Levels">
      <p className="mb-5">Three lines that look similar to VWAP on a chart but trade very differently. Know which is which.</p>
      <div className="space-y-4">
        <LookalikeCard title="VWAP vs Moving Average (e.g. 20 EMA)"
          body="VWAP is volume-weighted; moving averages are time-weighted. They look similar but VWAP responds to where the BIG money trades, not just where price has been. VWAP is more reliable as institutional support/resistance. Watch both, but trust VWAP first.">
          <LookalikePair leftLabel="VWAP (volume-weighted)" rightLabel="20 EMA (time-weighted)"
            left={<MiniCompareSVG variant="vwap" />}
            right={<MiniCompareSVG variant="ema" />} />
        </LookalikeCard>
        <LookalikeCard title="VWAP vs Pivot Points"
          body="Pivot points are CALCULATED from prior day's high/low/close — static lines all day. VWAP is DYNAMIC, updating every tick based on volume. Pivots are useful for context; VWAP is your real-time benchmark.">
          <LookalikePair leftLabel="VWAP (dynamic)" rightLabel="Pivots (static)"
            left={<MiniCompareSVG variant="vwap" />}
            right={<MiniCompareSVG variant="pivots" />} />
        </LookalikeCard>
        <LookalikeCard title="VWAP vs Anchored VWAP from Major Event"
          body="Standard VWAP anchors at session open. Anchored VWAP can be set from any significant event — a gap, a major news release, a swing high. Both work; standard session VWAP is what you use day-to-day. Multiple anchored VWAPs can be confusing — keep it simple.">
          <LookalikePair leftLabel="Session VWAP" rightLabel="Anchored VWAP (from event)"
            left={<MiniCompareSVG variant="vwap" />}
            right={<MiniCompareSVG variant="anchored" />} />
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

function MiniCompareSVG({ variant }) {
  const w = 480, h = 180;
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
  const candles = [40, 70, 100, 130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430].map((x, i) =>
    ({ x, o: 95 + Math.sin(i * 0.7) * 18, c: 92 + Math.sin(i * 0.7 + 0.5) * 18, hi: 75, lo: 115 }));

  if (variant === 'vwap') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {candles.map((c, i) => drawCandle(c.x, c.o, c.c, 60, 130, i))}
        <path d="M 30 100 Q 110 92, 200 96 T 380 100 T 460 95" stroke={C_VWAP} strokeWidth={3} fill="none" />
        <text x={36} y={94} fill={C_VWAP} fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">VWAP</text>
        <text x={240} y={170} fill="#888" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">curving — bends with volume flow</text>
      </svg>
    );
  }
  if (variant === 'ema') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {candles.map((c, i) => drawCandle(c.x, c.o, c.c, 60, 130, i))}
        <path d="M 30 105 Q 100 98, 180 100 T 360 102 T 460 102" stroke="#a78bfa" strokeWidth={2.5} fill="none" />
        <text x={36} y={94} fill="#a78bfa" fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">20 EMA</text>
        <text x={240} y={170} fill="#888" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">smoother — lags price more</text>
      </svg>
    );
  }
  if (variant === 'pivots') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {candles.map((c, i) => drawCandle(c.x, c.o, c.c, 60, 130, i))}
        <line x1={20} x2={460} y1={70} y2={70} stroke="#06b6d4" strokeWidth={2} strokeDasharray="6 4" />
        <text x={26} y={64} fill="#06b6d4" fontSize={10} fontFamily="'Space Mono', monospace">R1</text>
        <line x1={20} x2={460} y1={100} y2={100} stroke="#06b6d4" strokeWidth={2.5} />
        <text x={26} y={94} fill="#06b6d4" fontSize={10} fontFamily="'Space Mono', monospace" fontWeight="bold">PP</text>
        <line x1={20} x2={460} y1={130} y2={130} stroke="#06b6d4" strokeWidth={2} strokeDasharray="6 4" />
        <text x={26} y={146} fill="#06b6d4" fontSize={10} fontFamily="'Space Mono', monospace">S1</text>
        <text x={240} y={170} fill="#888" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">static all day · doesn't update with volume</text>
      </svg>
    );
  }
  if (variant === 'anchored') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {candles.map((c, i) => drawCandle(c.x, c.o, c.c, 60, 130, i))}
        <line x1={150} x2={150} y1={20} y2={160} stroke="#FFB44A" strokeWidth={1.3} strokeDasharray="3 4" opacity={0.7} />
        <text x={154} y={32} fill="#FFB44A" fontSize={9} fontFamily="'Space Mono', monospace">⚓ event</text>
        <path d="M 150 110 Q 220 100, 300 95 T 460 92" stroke="#fb923c" strokeWidth={3} fill="none" />
        <text x={310} y={88} fill="#fb923c" fontSize={11} fontFamily="'Space Mono', monospace" fontWeight="bold">Anchored VWAP</text>
        <text x={240} y={170} fill="#888" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">starts at chosen event · custom anchor</text>
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
    { from: '9:30',  to: '10:00', label: 'VWAP UNSTABLE',     desc: 'Early in session, VWAP swings wildly with new volume. Don\'t trade rejections yet — the line hasn\'t settled.', tag: 'do not trade', color: 'red' },
    { from: '10:00', to: '10:15', label: 'VWAP STABILIZES',   desc: 'Line starts to settle into its true position as cumulative volume grows. Watch for setups forming.', tag: 'watch closely', color: 'amber' },
    { from: '10:15', to: '12:00', label: 'YOUR PRIME WINDOW', desc: 'VWAP is now stable and institutional. The first major pullback to VWAP often happens here. The 10:30-11:30 stretch produces the cleanest rejections.', tag: 'highest quality', color: 'green', highlight: true },
    { from: '12:00', to: '14:00', label: 'LUNCH CHOP',        desc: 'Setups still form but volume is thin and reliability drops. Skip unless extremely clean.', tag: 'skip', color: 'red' },
    { from: '14:00', to: '14:30', label: 'AFTERNOON SETUP',   desc: 'VWAP setups return as volume comes back into the market. Decent quality but smaller follow-through.', tag: 'decent quality', color: 'amber' },
    { from: '14:30', to: '16:00', label: 'RELIABILITY DECLINES', desc: 'Late in session, VWAP becomes a slow lagging line. Setups still appear but follow-through is muted. End-of-day positioning ignores it.', tag: 'variable', color: 'red' }
  ];
  const colors = {
    red:   { border: 'border-red/40',   bar: 'bg-red',    text: 'text-red' },
    amber: { border: 'border-amber/40', bar: 'bg-amber',  text: 'text-amber' },
    green: { border: 'border-green/40', bar: 'bg-green',  text: 'text-green' }
  };
  return (
    <SectionShell n={12} title="Time of Day">
      <p className="mb-5">A horizontal timeline of the trading day with VWAP quality zones. Your 10:15-12:00 window is the sweet spot.</p>
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
          <span className="font-display font-semibold">VWAP rejections are abundant in your 10:15-12:00 window.</span> The
          morning's first VWAP touch is usually the highest-quality setup of the day. This is bread-and-butter scalping for futures.
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
          <span className="font-semibold" style={{color: C_VWAP}}>1.</span> Big institutional traders use VWAP as a benchmark — they want to buy at or below VWAP and sell at or above VWAP, so they actively defend it as support or resistance throughout the day.
        </p>
        <p>
          <span className="font-semibold" style={{color: C_VWAP}}>2.</span> When price moves away from VWAP, eventually some traders take profits and price gets pulled back toward the VWAP "magnet" by mean reversion.
        </p>
        <p>
          <span className="text-amber font-semibold">3.</span> As price approaches VWAP, the institutions whose orders are sitting at that level get filled, creating the rejection — buyers absorb selling pressure (or sellers absorb buying pressure) and price moves away again.
        </p>
        <p>
          <span className="text-green font-semibold">4.</span> This dynamic — institutional defense of VWAP — is what makes VWAP rejections statistically reliable, especially in actively-traded futures.
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
    'VWAP is visible and stable on the chart',
    'Current price is clearly ABOVE or BELOW VWAP (clear bias)',
    'Trade direction matches the VWAP bias (long if above, short if below)',
    'Price has pulled back to TAG VWAP',
    'Rejection candle has long wick into VWAP and body firmly away',
    'Volume on rejection candle is above average (ideally largest of session)',
    'Candle AFTER rejection confirmed (continued in rejection direction with body close, rising volume)',
    'No major news within next 5 minutes',
    'Time of day favorable (10:15-14:00 ideal, NOT after 14:30)',
    'Stop is past the rejection wick (not on VWAP itself)',
    'Target = prior swing high (long) or prior swing low (short)',
    'R:R ≥ 2:1',
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
        <div className="font-mono text-sm tracking-tight" style={{color: C_VWAP}}>§ {String(n).padStart(2, '0')}</div>
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
    vwap: ''
  };
  const className = color === 'vwap'
    ? 'card-tight border'
    : `card-tight border ${colors[color]}`;
  const style = color === 'vwap'
    ? { borderColor: 'rgba(251,191,36,0.4)' }
    : {};
  const titleStyle = color === 'vwap' ? { color: C_VWAP } : {};
  return (
    <div className={className} style={style}>
      <div className="font-display font-bold mb-2" style={titleStyle}>{title}</div>
      <p className="text-sm text-text/80 leading-relaxed">{body}</p>
    </div>
  );
}

function NumCircle({ x, y, n, color = C_VWAP }) {
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
        <div className="text-muted text-sm">2-minute scalper's complete VWAP rejection treatment.</div>
        <Link to="/drill" className="btn btn-primary px-6">Drill this pattern →</Link>
      </div>
    </footer>
  );
}
