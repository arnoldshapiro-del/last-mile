// 40 drill definitions across 8 patterns — 5 variations per pattern.
// Each drill has structured candle data. The CandlestickChart component renders SVG.

// Helpers to build patterns
const c = (o, h, l, cl, vol) => ({ o, h, l, c: cl, vol });

// ============ BEAR FLAG (5 variants) ============
function bearFlagBase(seed) {
  // Pole: 6 sharp red candles down. Flag: 5 small consolidating up. Breakout red.
  const startPrice = 2860 + seed;
  const candles = [];
  // Pre-pole drift
  candles.push(c(startPrice + 2, startPrice + 3, startPrice, startPrice + 1, 30 + seed));
  candles.push(c(startPrice + 1, startPrice + 2, startPrice - 1, startPrice, 32));
  // Pole — 6 strong red candles
  let p = startPrice;
  for (let i = 0; i < 6; i++) {
    const drop = 2 + (i % 2);
    candles.push(c(p, p + 0.5, p - drop - 0.5, p - drop, 80 + i * 8 - seed));
    p -= drop;
  }
  // Flag — 5 smallish bullish/consolidating candles, declining volume
  for (let i = 0; i < 5; i++) {
    const up = i % 2 === 0 ? 0.6 : 0.3;
    candles.push(c(p, p + up + 0.2, p - 0.2, p + up, 50 - i * 6));
    p += up * (i % 2 === 0 ? 1 : 0.5);
  }
  // Breakout
  candles.push(c(p, p + 0.2, p - 3.2, p - 3, 95));
  candles.push(c(p - 3, p - 2.5, p - 5.5, p - 5, 70));
  return candles;
}

// ============ DOUBLE TOP STAGE 1 (first top forming) ============
function doubleTopS1Base(seed) {
  const start = 2820 + seed;
  let p = start;
  const candles = [];
  // Uptrend rally (6 candles up)
  for (let i = 0; i < 6; i++) {
    const up = 1.5 + (i % 3) * 0.3;
    candles.push(c(p, p + up + 0.4, p - 0.2, p + up, 50 + i * 5));
    p += up;
  }
  // Approach resistance
  for (let i = 0; i < 3; i++) {
    candles.push(c(p, p + 1, p - 0.5, p + 0.6, 45));
    p += 0.6;
  }
  // First top — rejection candle (long upper wick, small body)
  candles.push(c(p, p + 2.5, p - 0.3, p + 0.2, 60));
  // Pull back (3 reds)
  for (let i = 0; i < 3; i++) {
    candles.push(c(p + 0.2 - i * 1.2, p + 0.5 - i * 1.2, p - 1.5 - i * 1.2, p - 1.2 - i * 1.2, 40 - i * 3));
  }
  return candles;
}

// ============ DOUBLE TOP STAGE 2 (second top with confirmation candle) ============
function doubleTopS2Base(seed) {
  const start = 2820 + seed;
  let p = start;
  const candles = [];
  // Up to first top
  for (let i = 0; i < 5; i++) { candles.push(c(p, p + 1.6, p - 0.3, p + 1.4, 55 + i * 4)); p += 1.4; }
  // First top
  const peak = p + 2;
  candles.push(c(p, peak, p - 0.5, p + 0.3, 75));
  p += 0.3;
  // Pullback to valley
  for (let i = 0; i < 4; i++) { candles.push(c(p, p + 0.3, p - 1.4, p - 1.2, 50 - i * 4)); p -= 1.2; }
  const valley = p;
  // Rally back up — declining volume
  for (let i = 0; i < 4; i++) { candles.push(c(p, p + 1.4, p - 0.2, p + 1.2, 50 - i * 8)); p += 1.2; }
  // Second top — shooting star (long upper wick, small red/green body, tiny lower wick)
  candles.push(c(p, peak + 0.2, p - 0.3, p - 0.4, 45));
  // After-shooting star confirmation candle (red body)
  candles.push(c(p - 0.4, p - 0.2, p - 2.5, p - 2.2, 70));
  return candles;
}

// ============ DOUBLE TOP STAGE 3 (neckline break) ============
function doubleTopS3Base(seed) {
  const start = 2820 + seed;
  let p = start;
  const candles = [];
  for (let i = 0; i < 4; i++) { candles.push(c(p, p + 1.5, p - 0.3, p + 1.3, 55)); p += 1.3; }
  const peak = p + 2;
  candles.push(c(p, peak, p - 0.4, p + 0.2, 75));
  p += 0.2;
  for (let i = 0; i < 3; i++) { candles.push(c(p, p + 0.4, p - 1.4, p - 1.2, 50)); p -= 1.2; }
  const valley = p;
  for (let i = 0; i < 3; i++) { candles.push(c(p, p + 1.4, p - 0.2, p + 1.2, 50 - i * 8)); p += 1.2; }
  candles.push(c(p, peak, p - 0.4, p - 0.8, 50));
  p -= 0.8;
  for (let i = 0; i < 3; i++) { candles.push(c(p, p + 0.4, p - 1.4, p - 1.2, 60)); p -= 1.2; }
  // Body close BELOW valley = breakout
  candles.push(c(p, p + 0.2, valley - 1.5, valley - 1.2, 95));
  candles.push(c(valley - 1.2, valley - 0.8, valley - 3, valley - 2.7, 80));
  return { candles, valley };
}

// ============ BEARISH ENGULFING ============
function bearEngBase(seed) {
  const start = 2840 + seed;
  let p = start;
  const candles = [];
  // Uptrend
  for (let i = 0; i < 7; i++) { candles.push(c(p, p + 1.4, p - 0.3, p + 1.2, 55)); p += 1.2; }
  // One small green at top
  candles.push(c(p, p + 0.7, p - 0.2, p + 0.5, 50));
  p += 0.5;
  // Bearish engulfing (red body engulfs prior green completely)
  candles.push(c(p + 0.5, p + 0.7, p - 1.5, p - 1.3, 90));
  return candles;
}

// ============ 3BR (3-Bar Reversal) AT TOP ============
function threeBRBase(seed) {
  const start = 2840 + seed;
  let p = start;
  const candles = [];
  for (let i = 0; i < 6; i++) { candles.push(c(p, p + 1.4, p - 0.2, p + 1.2, 55)); p += 1.2; }
  // Bar 1: large green
  candles.push(c(p, p + 2.2, p - 0.2, p + 2, 65));
  p += 2;
  // Bar 2: indecision (small body, possibly doji)
  candles.push(c(p, p + 0.6, p - 0.6, p + 0.05, 50));
  // Bar 3: large red engulfing — closes BELOW bar 1's open (= 3BR sell signal)
  const bar1Open = p - 2;
  candles.push(c(p + 0.05, p + 0.4, bar1Open - 0.5, bar1Open - 0.3, 88));
  return candles;
}

// ============ SHOOTING STAR ============
function shootingStarBase(seed) {
  const start = 2845 + seed;
  let p = start;
  const candles = [];
  for (let i = 0; i < 7; i++) { candles.push(c(p, p + 1.3, p - 0.2, p + 1.1, 55)); p += 1.1; }
  // Shooting star: small body near low, long upper wick, tiny lower wick
  // body ~ 0.3 wide, upper wick 2.5
  candles.push(c(p, p + 2.5, p - 0.2, p - 0.05, 50));
  return candles;
}

// ============ VOLUME DIVERGENCE (rally w/ fading volume) ============
function volDivBase(seed) {
  const start = 2820 + seed;
  let p = start;
  const candles = [];
  for (let i = 0; i < 6; i++) {
    candles.push(c(p, p + 1.3, p - 0.2, p + 1.1, 90 - i * 12));
    p += 1.1;
  }
  return candles;
}

// =================== Build all 40 drills ===================
const POOL = [];

// 5 Bear Flag drills
for (let i = 0; i < 5; i++) {
  POOL.push({
    id: `bf-${i}`,
    patternId: 'bearFlag',
    candles: bearFlagBase(i * 3),
    showVolume: true,
    question: i % 2 === 0 ? 'What pattern is this?' : 'Identify the chart pattern.',
    options: ['Bull Flag', 'Bear Flag', 'Double Bottom', 'Inverse Head and Shoulders'],
    correctIndex: 1,
    explanation:
      'Bear flag — continuation pattern. Pole = aggressive selling. Flag = profit-taking by shorts on declining volume. Breakout = next leg down. Entry on body close below trendline. Stop above flag high. Target = pole height projected from breakout.'
  });
}

// 5 Double Top S1 drills
for (let i = 0; i < 5; i++) {
  POOL.push({
    id: `dts1-${i}`,
    patternId: 'doubleTopS1',
    candles: doubleTopS1Base(i * 2),
    showVolume: false,
    question: 'What stage of pattern is forming here?',
    options: [
      'Bull flag forming',
      'Double top stage 1 — first top forming',
      'Confirmed reversal — enter short now',
      'Continuation — buy the dip'
    ],
    correctIndex: 1,
    explanation:
      'Stage 1 — first top forming with rejection at resistance. Do NOT enter yet. Pattern needs at least a second touch + confirmation candle. Entering here is guessing. Wait for stage 2.'
  });
}

// 5 Double Top S2 drills
for (let i = 0; i < 5; i++) {
  POOL.push({
    id: `dts2-${i}`,
    patternId: 'doubleTopS2',
    candles: doubleTopS2Base(i * 2),
    showVolume: true,
    question: "What's happening at the second top?",
    options: [
      'Continuation rally — go long',
      'Double top stage 2 with shooting star confirmation',
      'Bull flag pause',
      '3BR buy signal'
    ],
    correctIndex: 1,
    explanation:
      'Classic double top stage 2. Shooting star at the second top confirms rejection. Wait — do NOT enter yet. Entry trigger is body close below valley low (neckline). Stop above shooting star high.'
  });
}

// 5 Double Top S3 drills (neckline break — entry trigger)
for (let i = 0; i < 5; i++) {
  const built = doubleTopS3Base(i * 2);
  POOL.push({
    id: `dts3-${i}`,
    patternId: 'doubleTopS3',
    candles: built.candles,
    annotations: [{ kind: 'hline', price: built.valley, color: '#FFB44A' }],
    showVolume: true,
    question: 'What is the trigger now?',
    options: [
      'Wait — pattern not confirmed',
      'Double top neckline break confirmed — short trigger',
      'Buy the dip',
      'Bear flag breakdown — already too late'
    ],
    correctIndex: 1,
    explanation:
      'Body close below the valley low (neckline) = entry. This is the trigger. Stop above the second top. Target 1 = 1:1 R:R. Target 2 = measured move (M-pattern height projected down from neckline).'
  });
}

// 5 Bearish Engulfing drills
for (let i = 0; i < 5; i++) {
  POOL.push({
    id: `be-${i}`,
    patternId: 'bearishEng',
    candles: bearEngBase(i * 3),
    showVolume: true,
    question: 'What candle pattern just printed at this resistance?',
    options: [
      'Bullish engulfing — go long',
      'Doji — wait',
      'Bearish engulfing — short setup at resistance',
      'Hammer reversal'
    ],
    correctIndex: 2,
    explanation:
      'Bearish engulfing — red candle body fully engulfs the prior green body. At resistance after an extended rally, this is a high-probability short signal. Wait for body close, stop above engulfing high.'
  });
}

// 5 3BR (3-Bar Reversal) drills
for (let i = 0; i < 5; i++) {
  POOL.push({
    id: `tbr-${i}`,
    patternId: 'threeBR',
    candles: threeBRBase(i * 3),
    showVolume: true,
    question: "What's the 3-Bar Reversal showing?",
    options: ['3BR Buy signal', '3BR Sell signal', 'Continuation — stay long', 'Bull flag forming'],
    correctIndex: 1,
    explanation:
      "3BR Sell — three-bar reversal at top. Bar 1: green momentum. Bar 2: indecision. Bar 3: red engulfing closing BELOW bar 1's open. Reversal trigger when bar 3 closes."
  });
}

// 5 Shooting Star drills
for (let i = 0; i < 5; i++) {
  POOL.push({
    id: `ss-${i}`,
    patternId: 'shootingStar',
    candles: shootingStarBase(i * 2),
    showVolume: false,
    question: 'What is the candle that just formed at the top?',
    options: [
      'Hammer — bullish reversal',
      'Doji — neutral',
      'Shooting star — bearish reversal at resistance',
      'Engulfing — continuation'
    ],
    correctIndex: 2,
    explanation:
      'Shooting star — small body near the low, long upper wick (2× body or more), tiny lower wick. At resistance after an extended rally, this signals seller rejection. Pair with volume/structure for short setup.'
  });
}

// 5 Volume Divergence drills
for (let i = 0; i < 5; i++) {
  POOL.push({
    id: `vd-${i}`,
    patternId: 'volDiv',
    candles: volDivBase(i * 3),
    showVolume: true,
    question: "What's wrong with this rally?",
    options: [
      'Nothing — bullish, hold long',
      'Volume divergence — fading volume on rally to resistance',
      'Stochastics oversold',
      'Bull flag forming'
    ],
    correctIndex: 1,
    explanation:
      'Fading volume on a rally to resistance is a classic warning sign. Buyers are exhausting. Combined with a bearish candle pattern at the level, this is a high-probability short setup.'
  });
}

// Group by pattern for adaptive selection
const BY_PATTERN = {};
for (const d of POOL) {
  if (!BY_PATTERN[d.patternId]) BY_PATTERN[d.patternId] = [];
  BY_PATTERN[d.patternId].push(d);
}

export const allDrills = POOL;
export const drillsByPattern = BY_PATTERN;

export const PATTERN_NAMES = {
  bearFlag: 'Bear Flag',
  doubleTopS1: 'Double Top — Stage 1',
  doubleTopS2: 'Double Top — Stage 2',
  doubleTopS3: 'Double Top — Stage 3 (break)',
  bearishEng: 'Bearish Engulfing',
  threeBR: '3-Bar Reversal',
  shootingStar: 'Shooting Star',
  volDiv: 'Volume Divergence'
};
