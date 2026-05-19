// patterns.js — procedural candlestick pattern generator.
//
// Each pattern returns: { candles: [{open, high, low, close, volume, label?, highlight?}],
//                         annotations: [{type, ...}] }
//
// Deterministic via mulberry32 seeded PRNG so the same (type, variant) always
// produces the same chart — no flicker on re-render.

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = t;
    r = Math.imul(r ^ (r >>> 15), r | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function seedFor(type, variant) {
  let h = 2166136261 >>> 0;
  const s = `${type}::${variant}`;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Helper — make one candle with sensible wicks given direction and strength.
function mkCandle(prev, dir, bodyAtr, rng, opts = {}) {
  const open = opts.openOverride != null ? opts.openOverride : prev.close;
  const body = bodyAtr * (0.6 + rng() * 0.8); // 0.6 - 1.4 ATR body
  let close = dir > 0 ? open + body : open - body;
  if (opts.closeOverride != null) close = opts.closeOverride;

  const topWick = (opts.topWickAtr != null ? opts.topWickAtr : (0.05 + rng() * 0.25)) * bodyAtr;
  const botWick = (opts.botWickAtr != null ? opts.botWickAtr : (0.05 + rng() * 0.25)) * bodyAtr;

  const high = Math.max(open, close) + topWick;
  const low = Math.min(open, close) - botWick;

  return {
    open,
    high,
    low,
    close,
    volume: opts.volume != null ? opts.volume : 1 + rng() * 0.6,
    label: opts.label,
    highlight: opts.highlight,
  };
}

// Generic seed candle to start a sequence from.
function startCandle(rng, basePrice = 100, atr = 1) {
  const close = basePrice + (rng() - 0.5) * atr;
  return { open: basePrice, high: basePrice + atr * 0.4, low: basePrice - atr * 0.4, close, volume: 1 };
}

// ---------------------------------------------------------------------------
// Pattern: double-bottom H2 — clean win and variants
// ---------------------------------------------------------------------------
function genDoubleBottomH2(variant) {
  const rng = mulberry32(seedFor('double-bottom', variant));
  const atr = 1.0;
  const supportLevel = 100;
  const startPrice = supportLevel + 7;

  let candles = [];
  let prev = startCandle(rng, startPrice, atr);
  candles.push(prev);

  // 5-7 bear bars dropping toward support
  const dropBars = 5 + Math.floor(rng() * 3);
  for (let i = 0; i < dropBars; i++) {
    const target = startPrice - ((i + 1) * (startPrice - supportLevel)) / dropBars;
    const c = mkCandle(prev, -1, atr, rng, {
      closeOverride: target + (rng() - 0.5) * atr * 0.4,
      botWickAtr: 0.2,
      topWickAtr: 0.1,
      volume: 1.1 + rng() * 0.4,
    });
    candles.push(c);
    prev = c;
  }

  // H1 bar — first bull bar near support
  let h1Idx, h2Idx, h1Low, h2Low;
  {
    const c = mkCandle(prev, +1, atr, rng, {
      openOverride: supportLevel + 0.1 + rng() * 0.2,
      closeOverride: supportLevel + 0.9 + rng() * 0.4,
      botWickAtr: 0.9,
      topWickAtr: 0.15,
      label: 'H1',
      volume: 1.5 + rng() * 0.3,
      highlight: 'h1',
    });
    candles.push(c);
    h1Idx = candles.length - 1;
    h1Low = c.low;
    prev = c;
  }

  // Pullback 2-3 bars — staying above support
  const pullbackBars = 2 + Math.floor(rng() * 2);
  for (let i = 0; i < pullbackBars; i++) {
    const target = supportLevel + 0.4 + rng() * 0.4;
    const c = mkCandle(prev, -1, atr, rng, {
      closeOverride: target,
      botWickAtr: 0.25,
      topWickAtr: 0.1,
      volume: 0.8 + rng() * 0.2,
    });
    candles.push(c);
    prev = c;
  }

  // Variant-specific second-test behavior
  if (variant === 'count-restart') {
    // Price breaks H1 low — count restarts
    const breakBar = mkCandle(prev, -1, atr, rng, {
      closeOverride: h1Low - 0.3,
      botWickAtr: 0.3,
      topWickAtr: 0.05,
      volume: 1.3,
    });
    candles.push(breakBar);
    prev = breakBar;
    // New H1 forms at lower level
    const newH1 = mkCandle(prev, +1, atr, rng, {
      openOverride: breakBar.close,
      closeOverride: breakBar.close + 1.0,
      botWickAtr: 0.5,
      topWickAtr: 0.1,
      label: 'New H1',
      volume: 1.4,
      highlight: 'h1',
    });
    candles.push(newH1);
    prev = newH1;
    // A couple more bars to show "wait for new H2"
    for (let i = 0; i < 2; i++) {
      const c = mkCandle(prev, rng() > 0.5 ? +1 : -1, atr, rng);
      candles.push(c);
      prev = c;
    }
  } else if (variant === 'failed-h2') {
    // H2 fires but then fails
    const h2 = mkCandle(prev, +1, atr, rng, {
      openOverride: supportLevel + 0.4,
      closeOverride: supportLevel + 1.4,
      botWickAtr: 0.7,
      topWickAtr: 0.15,
      label: 'H2',
      volume: 1.6,
      highlight: 'h2',
    });
    candles.push(h2);
    h2Idx = candles.length - 1;
    prev = h2;
    // Failure bars — price drops through entry & stop
    for (let i = 0; i < 4; i++) {
      const c = mkCandle(prev, -1, atr, rng, {
        closeOverride: prev.close - 0.7 - rng() * 0.3,
        botWickAtr: 0.2,
        topWickAtr: 0.05,
        volume: 1.2 + rng() * 0.2,
      });
      candles.push(c);
      prev = c;
    }
  } else if (variant === 'near-miss') {
    // Weak signal bar at H2 — should skip
    const weakH2 = mkCandle(prev, +1, atr, rng, {
      openOverride: supportLevel + 0.5,
      closeOverride: supportLevel + 0.8, // tiny body
      botWickAtr: 0.4,
      topWickAtr: 0.7, // big upper wick = doji-ish
      label: 'Weak H2?',
      volume: 0.9,
      highlight: 'skip',
    });
    candles.push(weakH2);
    prev = weakH2;
    // Choppy aftermath
    for (let i = 0; i < 3; i++) {
      const c = mkCandle(prev, i % 2 === 0 ? -1 : +1, atr, rng, { volume: 0.8 });
      candles.push(c);
      prev = c;
    }
  } else {
    // Clean H2 + winning trade (variants: clean-1, clean-2, clean-3, default)
    const h2 = mkCandle(prev, +1, atr, rng, {
      openOverride: supportLevel + 0.4 + rng() * 0.2,
      closeOverride: supportLevel + 1.6 + rng() * 0.4,
      botWickAtr: 0.8,
      topWickAtr: 0.12,
      label: 'H2',
      volume: 1.8,
      highlight: 'h2',
    });
    candles.push(h2);
    h2Idx = candles.length - 1;
    h2Low = h2.low;
    prev = h2;
    // Winning rally bars
    const rallyBars = 4 + Math.floor(rng() * 3);
    for (let i = 0; i < rallyBars; i++) {
      const c = mkCandle(prev, +1, atr, rng, {
        closeOverride: prev.close + 0.6 + rng() * 0.5,
        botWickAtr: 0.15,
        topWickAtr: 0.2,
        volume: 1.2,
      });
      candles.push(c);
      prev = c;
    }
  }

  // Build annotations
  const annotations = [
    { type: 'hline', y: supportLevel, color: 'bull', dashed: true, text: 'Support' },
  ];
  if (h2Idx != null && variant !== 'failed-h2' && variant !== 'near-miss') {
    annotations.push({ type: 'entry', x: h2Idx, y: candles[h2Idx].high + 0.1, text: 'Entry' });
    annotations.push({ type: 'stop', y: candles[h2Idx].low - 0.3, text: 'Stop' });
  }
  if (h2Idx != null && variant === 'failed-h2') {
    annotations.push({ type: 'entry', x: h2Idx, y: candles[h2Idx].high + 0.1, text: 'Entry' });
    annotations.push({ type: 'stop', y: candles[h2Idx].low - 0.3, text: 'Stop hit', color: 'bear' });
  }

  return { candles, annotations };
}

// ---------------------------------------------------------------------------
// Pattern: double-top L2 — mirror of double-bottom
// ---------------------------------------------------------------------------
function genDoubleTopL2(variant) {
  const rng = mulberry32(seedFor('double-top', variant));
  const atr = 1.0;
  const resistanceLevel = 100;
  const startPrice = resistanceLevel - 7;

  let candles = [];
  let prev = startCandle(rng, startPrice, atr);
  candles.push(prev);

  const riseBars = 5 + Math.floor(rng() * 3);
  for (let i = 0; i < riseBars; i++) {
    const target = startPrice + ((i + 1) * (resistanceLevel - startPrice)) / riseBars;
    const c = mkCandle(prev, +1, atr, rng, {
      closeOverride: target + (rng() - 0.5) * atr * 0.4,
      topWickAtr: 0.2,
      botWickAtr: 0.1,
      volume: 1.1 + rng() * 0.4,
    });
    candles.push(c);
    prev = c;
  }

  let l1Idx, l2Idx, l1High;
  {
    const c = mkCandle(prev, -1, atr, rng, {
      openOverride: resistanceLevel - 0.1 - rng() * 0.2,
      closeOverride: resistanceLevel - 0.9 - rng() * 0.4,
      topWickAtr: 0.9,
      botWickAtr: 0.15,
      label: 'L1',
      volume: 1.5 + rng() * 0.3,
      highlight: 'l1',
    });
    candles.push(c);
    l1Idx = candles.length - 1;
    l1High = c.high;
    prev = c;
  }

  const pullbackBars = 2 + Math.floor(rng() * 2);
  for (let i = 0; i < pullbackBars; i++) {
    const target = resistanceLevel - 0.4 - rng() * 0.4;
    const c = mkCandle(prev, +1, atr, rng, {
      closeOverride: target,
      topWickAtr: 0.25,
      botWickAtr: 0.1,
      volume: 0.8 + rng() * 0.2,
    });
    candles.push(c);
    prev = c;
  }

  if (variant === 'count-restart') {
    const breakBar = mkCandle(prev, +1, atr, rng, {
      closeOverride: l1High + 0.3,
      topWickAtr: 0.3,
      botWickAtr: 0.05,
      volume: 1.3,
    });
    candles.push(breakBar);
    prev = breakBar;
    const newL1 = mkCandle(prev, -1, atr, rng, {
      openOverride: breakBar.close,
      closeOverride: breakBar.close - 1.0,
      topWickAtr: 0.5,
      botWickAtr: 0.1,
      label: 'New L1',
      volume: 1.4,
      highlight: 'l1',
    });
    candles.push(newL1);
    prev = newL1;
    for (let i = 0; i < 2; i++) {
      const c = mkCandle(prev, rng() > 0.5 ? -1 : +1, atr, rng);
      candles.push(c);
      prev = c;
    }
  } else if (variant === 'failed-h2' || variant === 'failed-l2') {
    const l2 = mkCandle(prev, -1, atr, rng, {
      openOverride: resistanceLevel - 0.4,
      closeOverride: resistanceLevel - 1.4,
      topWickAtr: 0.7,
      botWickAtr: 0.15,
      label: 'L2',
      volume: 1.6,
      highlight: 'l2',
    });
    candles.push(l2);
    l2Idx = candles.length - 1;
    prev = l2;
    for (let i = 0; i < 4; i++) {
      const c = mkCandle(prev, +1, atr, rng, {
        closeOverride: prev.close + 0.7 + rng() * 0.3,
        topWickAtr: 0.2,
        botWickAtr: 0.05,
        volume: 1.2,
      });
      candles.push(c);
      prev = c;
    }
  } else if (variant === 'near-miss') {
    const weakL2 = mkCandle(prev, -1, atr, rng, {
      openOverride: resistanceLevel - 0.5,
      closeOverride: resistanceLevel - 0.8,
      topWickAtr: 0.4,
      botWickAtr: 0.7,
      label: 'Weak L2?',
      volume: 0.9,
      highlight: 'skip',
    });
    candles.push(weakL2);
    prev = weakL2;
    for (let i = 0; i < 3; i++) {
      const c = mkCandle(prev, i % 2 === 0 ? +1 : -1, atr, rng, { volume: 0.8 });
      candles.push(c);
      prev = c;
    }
  } else {
    const l2 = mkCandle(prev, -1, atr, rng, {
      openOverride: resistanceLevel - 0.4 - rng() * 0.2,
      closeOverride: resistanceLevel - 1.6 - rng() * 0.4,
      topWickAtr: 0.8,
      botWickAtr: 0.12,
      label: 'L2',
      volume: 1.8,
      highlight: 'l2',
    });
    candles.push(l2);
    l2Idx = candles.length - 1;
    prev = l2;
    const dropBars = 4 + Math.floor(rng() * 3);
    for (let i = 0; i < dropBars; i++) {
      const c = mkCandle(prev, -1, atr, rng, {
        closeOverride: prev.close - 0.6 - rng() * 0.5,
        topWickAtr: 0.15,
        botWickAtr: 0.2,
        volume: 1.2,
      });
      candles.push(c);
      prev = c;
    }
  }

  const annotations = [
    { type: 'hline', y: resistanceLevel, color: 'bear', dashed: true, text: 'Resistance' },
  ];
  if (l2Idx != null && variant !== 'failed-l2' && variant !== 'failed-h2' && variant !== 'near-miss') {
    annotations.push({ type: 'entry-short', x: l2Idx, y: candles[l2Idx].low - 0.1, text: 'Entry' });
    annotations.push({ type: 'stop', y: candles[l2Idx].high + 0.3, text: 'Stop' });
  }
  if (l2Idx != null && (variant === 'failed-h2' || variant === 'failed-l2')) {
    annotations.push({ type: 'entry-short', x: l2Idx, y: candles[l2Idx].low - 0.1, text: 'Entry' });
    annotations.push({ type: 'stop', y: candles[l2Idx].high + 0.3, text: 'Stop hit', color: 'bear' });
  }

  return { candles, annotations };
}

// ---------------------------------------------------------------------------
// Pattern: bull-flag H2 — pullback in uptrend, second-try buy
// ---------------------------------------------------------------------------
function genBullFlagH2(variant) {
  const rng = mulberry32(seedFor('bull-flag', variant));
  const atr = 1.0;
  let candles = [];
  let prev = startCandle(rng, 100, atr);
  candles.push(prev);

  // Flagpole — 4-5 strong bull bars
  const poleBars = 4 + Math.floor(rng() * 2);
  for (let i = 0; i < poleBars; i++) {
    const c = mkCandle(prev, +1, atr, rng, {
      closeOverride: prev.close + 1.0 + rng() * 0.4,
      botWickAtr: 0.1,
      topWickAtr: 0.15,
      volume: 1.3 + rng() * 0.3,
    });
    candles.push(c);
    prev = c;
  }
  const flagTop = prev.close;

  // Flag — 2-3 bar pullback (small reds + tiny green)
  for (let i = 0; i < 2; i++) {
    const c = mkCandle(prev, -1, atr, rng, {
      closeOverride: prev.close - 0.5 - rng() * 0.2,
      botWickAtr: 0.2,
      topWickAtr: 0.15,
      volume: 0.7 + rng() * 0.2,
    });
    candles.push(c);
    prev = c;
  }

  // H1
  let h1Idx, h2Idx;
  const h1 = mkCandle(prev, +1, atr, rng, {
    closeOverride: prev.close + 0.6,
    botWickAtr: 0.3,
    topWickAtr: 0.1,
    label: 'H1',
    volume: 1.1,
    highlight: 'h1',
  });
  candles.push(h1);
  h1Idx = candles.length - 1;
  prev = h1;
  const h1Low = h1.low;

  // Mini-pullback (1-2 bars)
  for (let i = 0; i < 2; i++) {
    const c = mkCandle(prev, -1, atr, rng, {
      closeOverride: prev.close - 0.3 - rng() * 0.2,
      botWickAtr: 0.2,
      topWickAtr: 0.1,
      volume: 0.7,
    });
    candles.push(c);
    prev = c;
  }

  if (variant === 'count-restart') {
    const breakBar = mkCandle(prev, -1, atr, rng, {
      closeOverride: h1Low - 0.4,
      botWickAtr: 0.2,
      volume: 1.4,
    });
    candles.push(breakBar);
    prev = breakBar;
    const newH1 = mkCandle(prev, +1, atr, rng, {
      closeOverride: prev.close + 0.7,
      botWickAtr: 0.5,
      label: 'New H1',
      volume: 1.3,
      highlight: 'h1',
    });
    candles.push(newH1);
    prev = newH1;
    for (let i = 0; i < 2; i++) {
      const c = mkCandle(prev, rng() > 0.5 ? +1 : -1, atr, rng);
      candles.push(c);
      prev = c;
    }
  } else if (variant === 'failed-h2') {
    const h2 = mkCandle(prev, +1, atr, rng, {
      closeOverride: prev.close + 1.0,
      botWickAtr: 0.5,
      topWickAtr: 0.1,
      label: 'H2',
      volume: 1.6,
      highlight: 'h2',
    });
    candles.push(h2);
    h2Idx = candles.length - 1;
    prev = h2;
    for (let i = 0; i < 4; i++) {
      const c = mkCandle(prev, -1, atr, rng, {
        closeOverride: prev.close - 0.6,
        volume: 1.2,
      });
      candles.push(c);
      prev = c;
    }
  } else if (variant === 'near-miss') {
    const weakH2 = mkCandle(prev, +1, atr, rng, {
      closeOverride: prev.close + 0.3,
      botWickAtr: 0.6,
      topWickAtr: 0.6,
      label: 'Weak H2?',
      volume: 0.8,
      highlight: 'skip',
    });
    candles.push(weakH2);
    prev = weakH2;
    for (let i = 0; i < 3; i++) {
      const c = mkCandle(prev, i % 2 === 0 ? -1 : +1, atr, rng, { volume: 0.7 });
      candles.push(c);
      prev = c;
    }
  } else {
    const h2 = mkCandle(prev, +1, atr, rng, {
      closeOverride: prev.close + 1.1 + rng() * 0.3,
      botWickAtr: 0.5,
      topWickAtr: 0.1,
      label: 'H2',
      volume: 1.8,
      highlight: 'h2',
    });
    candles.push(h2);
    h2Idx = candles.length - 1;
    prev = h2;
    const rallyBars = 4 + Math.floor(rng() * 2);
    for (let i = 0; i < rallyBars; i++) {
      const c = mkCandle(prev, +1, atr, rng, {
        closeOverride: prev.close + 0.7 + rng() * 0.3,
        volume: 1.2,
      });
      candles.push(c);
      prev = c;
    }
  }

  const annotations = [];
  if (h2Idx != null && variant !== 'failed-h2' && variant !== 'near-miss') {
    annotations.push({ type: 'entry', x: h2Idx, y: candles[h2Idx].high + 0.1, text: 'Entry' });
    annotations.push({ type: 'stop', y: candles[h2Idx].low - 0.3, text: 'Stop' });
  }
  if (h2Idx != null && variant === 'failed-h2') {
    annotations.push({ type: 'entry', x: h2Idx, y: candles[h2Idx].high + 0.1, text: 'Entry' });
    annotations.push({ type: 'stop', y: candles[h2Idx].low - 0.3, text: 'Stop hit', color: 'bear' });
  }
  return { candles, annotations };
}

// ---------------------------------------------------------------------------
// Pattern: bear-flag L2 — mirror of bull-flag
// ---------------------------------------------------------------------------
function genBearFlagL2(variant) {
  const rng = mulberry32(seedFor('bear-flag', variant));
  const atr = 1.0;
  let candles = [];
  let prev = startCandle(rng, 100, atr);
  candles.push(prev);

  const poleBars = 4 + Math.floor(rng() * 2);
  for (let i = 0; i < poleBars; i++) {
    const c = mkCandle(prev, -1, atr, rng, {
      closeOverride: prev.close - 1.0 - rng() * 0.4,
      topWickAtr: 0.1,
      botWickAtr: 0.15,
      volume: 1.3 + rng() * 0.3,
    });
    candles.push(c);
    prev = c;
  }

  for (let i = 0; i < 2; i++) {
    const c = mkCandle(prev, +1, atr, rng, {
      closeOverride: prev.close + 0.5 + rng() * 0.2,
      topWickAtr: 0.2,
      botWickAtr: 0.15,
      volume: 0.7 + rng() * 0.2,
    });
    candles.push(c);
    prev = c;
  }

  let l1Idx, l2Idx;
  const l1 = mkCandle(prev, -1, atr, rng, {
    closeOverride: prev.close - 0.6,
    topWickAtr: 0.3,
    botWickAtr: 0.1,
    label: 'L1',
    volume: 1.1,
    highlight: 'l1',
  });
  candles.push(l1);
  l1Idx = candles.length - 1;
  prev = l1;
  const l1High = l1.high;

  for (let i = 0; i < 2; i++) {
    const c = mkCandle(prev, +1, atr, rng, {
      closeOverride: prev.close + 0.3 + rng() * 0.2,
      topWickAtr: 0.2,
      botWickAtr: 0.1,
      volume: 0.7,
    });
    candles.push(c);
    prev = c;
  }

  if (variant === 'count-restart') {
    const breakBar = mkCandle(prev, +1, atr, rng, {
      closeOverride: l1High + 0.4,
      topWickAtr: 0.2,
      volume: 1.4,
    });
    candles.push(breakBar);
    prev = breakBar;
    const newL1 = mkCandle(prev, -1, atr, rng, {
      closeOverride: prev.close - 0.7,
      topWickAtr: 0.5,
      label: 'New L1',
      volume: 1.3,
      highlight: 'l1',
    });
    candles.push(newL1);
    prev = newL1;
    for (let i = 0; i < 2; i++) {
      const c = mkCandle(prev, rng() > 0.5 ? -1 : +1, atr, rng);
      candles.push(c);
      prev = c;
    }
  } else if (variant === 'failed-l2' || variant === 'failed-h2') {
    const l2 = mkCandle(prev, -1, atr, rng, {
      closeOverride: prev.close - 1.0,
      topWickAtr: 0.5,
      botWickAtr: 0.1,
      label: 'L2',
      volume: 1.6,
      highlight: 'l2',
    });
    candles.push(l2);
    l2Idx = candles.length - 1;
    prev = l2;
    for (let i = 0; i < 4; i++) {
      const c = mkCandle(prev, +1, atr, rng, {
        closeOverride: prev.close + 0.6,
        volume: 1.2,
      });
      candles.push(c);
      prev = c;
    }
  } else if (variant === 'near-miss') {
    const weakL2 = mkCandle(prev, -1, atr, rng, {
      closeOverride: prev.close - 0.3,
      topWickAtr: 0.6,
      botWickAtr: 0.6,
      label: 'Weak L2?',
      volume: 0.8,
      highlight: 'skip',
    });
    candles.push(weakL2);
    prev = weakL2;
    for (let i = 0; i < 3; i++) {
      const c = mkCandle(prev, i % 2 === 0 ? +1 : -1, atr, rng, { volume: 0.7 });
      candles.push(c);
      prev = c;
    }
  } else {
    const l2 = mkCandle(prev, -1, atr, rng, {
      closeOverride: prev.close - 1.1 - rng() * 0.3,
      topWickAtr: 0.5,
      botWickAtr: 0.1,
      label: 'L2',
      volume: 1.8,
      highlight: 'l2',
    });
    candles.push(l2);
    l2Idx = candles.length - 1;
    prev = l2;
    const dropBars = 4 + Math.floor(rng() * 2);
    for (let i = 0; i < dropBars; i++) {
      const c = mkCandle(prev, -1, atr, rng, {
        closeOverride: prev.close - 0.7 - rng() * 0.3,
        volume: 1.2,
      });
      candles.push(c);
      prev = c;
    }
  }

  const annotations = [];
  if (l2Idx != null && variant !== 'failed-l2' && variant !== 'failed-h2' && variant !== 'near-miss') {
    annotations.push({ type: 'entry-short', x: l2Idx, y: candles[l2Idx].low - 0.1, text: 'Entry' });
    annotations.push({ type: 'stop', y: candles[l2Idx].high + 0.3, text: 'Stop' });
  }
  if (l2Idx != null && (variant === 'failed-l2' || variant === 'failed-h2')) {
    annotations.push({ type: 'entry-short', x: l2Idx, y: candles[l2Idx].low - 0.1, text: 'Entry' });
    annotations.push({ type: 'stop', y: candles[l2Idx].high + 0.3, text: 'Stop hit', color: 'bear' });
  }
  return { candles, annotations };
}

// ---------------------------------------------------------------------------
// Pattern: defended (low or high) — used in Defended-vs-Failed paired charts
// ---------------------------------------------------------------------------
function genDefended(variant) {
  // variants: w-strong-wicks, descending-no-wicks, double-bot-volume, double-bot-no-vol,
  //           higher-low-retest, lower-low-break, strong-bull-at-low, weak-bull-at-low,
  //           defended-top, failed-top, defended-top-wicks, failed-top-no-wicks,
  //           multi-touch-defended, single-touch-break, defense-confluence, defense-no-confluence,
  //           slow-defense, fast-defense, defense-in-bull-trend, defense-against-bear
  const rng = mulberry32(seedFor('defended', variant));
  const atr = 1.0;

  // Decide if it's a "top" (sellers defend high) or "bottom" (buyers defend low)
  const isTop = variant.includes('top');
  const isFailed =
    variant.includes('failed') ||
    variant.includes('descending') ||
    variant.includes('lower-low-break') ||
    variant.includes('weak-bull') ||
    variant.includes('failed-top-no-wicks') ||
    variant.includes('single-touch') ||
    variant.includes('no-vol') ||
    variant.includes('no-confluence') ||
    variant.includes('against-bear');

  let candles = [];
  const baseLevel = 100;
  let prev = startCandle(rng, isTop ? baseLevel - 7 : baseLevel + 7, atr);
  candles.push(prev);

  if (isTop) {
    // Approach high
    for (let i = 0; i < 5; i++) {
      const c = mkCandle(prev, +1, atr, rng, {
        closeOverride: prev.close + 1.2,
        topWickAtr: 0.15,
        volume: 1.1,
      });
      candles.push(c);
      prev = c;
    }
    if (isFailed) {
      // First touch — barely rejected
      const touch = mkCandle(prev, +1, atr, rng, {
        closeOverride: baseLevel + 0.2,
        topWickAtr: 0.1,
        volume: 0.9,
      });
      candles.push(touch);
      prev = touch;
      for (let i = 0; i < 5; i++) {
        const c = mkCandle(prev, +1, atr, rng, {
          closeOverride: prev.close + 0.4,
          volume: 1.0,
        });
        candles.push(c);
        prev = c;
      }
    } else {
      // Defended top — strong wicks at level + bear reversal
      const wick1 = mkCandle(prev, -1, atr, rng, {
        openOverride: baseLevel - 0.1,
        closeOverride: baseLevel - 1.4,
        topWickAtr: 1.1,
        botWickAtr: 0.15,
        volume: 1.7,
        highlight: 'l1',
        label: 'L1',
      });
      candles.push(wick1);
      prev = wick1;
      for (let i = 0; i < 2; i++) {
        const c = mkCandle(prev, +1, atr, rng, {
          closeOverride: prev.close + 0.4,
          volume: 0.8,
        });
        candles.push(c);
        prev = c;
      }
      const wick2 = mkCandle(prev, -1, atr, rng, {
        openOverride: baseLevel - 0.3,
        closeOverride: baseLevel - 1.7,
        topWickAtr: 0.95,
        botWickAtr: 0.15,
        volume: 1.8,
        highlight: 'l2',
        label: 'L2',
      });
      candles.push(wick2);
      prev = wick2;
      for (let i = 0; i < 4; i++) {
        const c = mkCandle(prev, -1, atr, rng, {
          closeOverride: prev.close - 0.7,
          volume: 1.2,
        });
        candles.push(c);
        prev = c;
      }
    }
    candles[0].__sr = baseLevel; // ignored, just informational
    return {
      candles,
      annotations: [
        { type: 'hline', y: baseLevel, color: 'bear', dashed: true, text: 'Resistance' },
      ],
    };
  }

  // Bottom-style charts
  for (let i = 0; i < 5; i++) {
    const c = mkCandle(prev, -1, atr, rng, {
      closeOverride: prev.close - 1.2,
      botWickAtr: 0.15,
      volume: 1.1,
    });
    candles.push(c);
    prev = c;
  }
  if (isFailed) {
    // Weak first touch, then break lower
    const touch = mkCandle(prev, -1, atr, rng, {
      closeOverride: baseLevel - 0.2,
      botWickAtr: 0.1,
      volume: 0.9,
    });
    candles.push(touch);
    prev = touch;
    for (let i = 0; i < 5; i++) {
      const c = mkCandle(prev, -1, atr, rng, {
        closeOverride: prev.close - 0.5,
        volume: 1.0,
      });
      candles.push(c);
      prev = c;
    }
  } else {
    const wick1 = mkCandle(prev, +1, atr, rng, {
      openOverride: baseLevel + 0.1,
      closeOverride: baseLevel + 1.4,
      botWickAtr: 1.1,
      topWickAtr: 0.15,
      volume: 1.7,
      highlight: 'h1',
      label: 'H1',
    });
    candles.push(wick1);
    prev = wick1;
    for (let i = 0; i < 2; i++) {
      const c = mkCandle(prev, -1, atr, rng, {
        closeOverride: prev.close - 0.4,
        volume: 0.8,
      });
      candles.push(c);
      prev = c;
    }
    const wick2 = mkCandle(prev, +1, atr, rng, {
      openOverride: baseLevel + 0.3,
      closeOverride: baseLevel + 1.7,
      botWickAtr: 0.95,
      topWickAtr: 0.15,
      volume: 1.8,
      highlight: 'h2',
      label: 'H2',
    });
    candles.push(wick2);
    prev = wick2;
    for (let i = 0; i < 4; i++) {
      const c = mkCandle(prev, +1, atr, rng, {
        closeOverride: prev.close + 0.7,
        volume: 1.2,
      });
      candles.push(c);
      prev = c;
    }
  }
  return {
    candles,
    annotations: [
      { type: 'hline', y: baseLevel, color: 'bull', dashed: true, text: 'Support' },
    ],
  };
}

// ---------------------------------------------------------------------------
// Pattern: practice — question variants for Practice Mode
// ---------------------------------------------------------------------------
function genPractice(variant) {
  // variants: clean-h2-N, clean-l2-N, count-restart-N, h1-only-N, l1-only-N, not-clean-N
  if (variant.startsWith('clean-h2'))
    return genDoubleBottomH2('clean-' + variant.split('-').pop());
  if (variant.startsWith('clean-l2'))
    return genDoubleTopL2('clean-' + variant.split('-').pop());
  if (variant.startsWith('count-restart-bot'))
    return genDoubleBottomH2('count-restart');
  if (variant.startsWith('count-restart-top'))
    return genDoubleTopL2('count-restart');
  if (variant.startsWith('h1-only')) {
    // H1 only — pullback hasn't completed yet
    const rng = mulberry32(seedFor('practice', variant));
    const atr = 1.0;
    const supportLevel = 100;
    let candles = [];
    let prev = startCandle(rng, supportLevel + 7, atr);
    candles.push(prev);
    for (let i = 0; i < 6; i++) {
      const c = mkCandle(prev, -1, atr, rng, {
        closeOverride: prev.close - 1.1,
        botWickAtr: 0.2,
        volume: 1.1,
      });
      candles.push(c);
      prev = c;
    }
    const h1 = mkCandle(prev, +1, atr, rng, {
      openOverride: supportLevel + 0.1,
      closeOverride: supportLevel + 1.1,
      botWickAtr: 0.9,
      topWickAtr: 0.15,
      label: 'H1',
      volume: 1.5,
      highlight: 'h1',
    });
    candles.push(h1);
    prev = h1;
    // Just a couple ambiguous bars after
    for (let i = 0; i < 3; i++) {
      const c = mkCandle(prev, i === 0 ? -1 : (rng() > 0.5 ? -1 : +1), atr, rng, {
        volume: 0.9,
      });
      candles.push(c);
      prev = c;
    }
    return {
      candles,
      annotations: [
        { type: 'hline', y: supportLevel, color: 'bull', dashed: true, text: 'Support' },
      ],
    };
  }
  if (variant.startsWith('l1-only')) {
    const rng = mulberry32(seedFor('practice', variant));
    const atr = 1.0;
    const resLevel = 100;
    let candles = [];
    let prev = startCandle(rng, resLevel - 7, atr);
    candles.push(prev);
    for (let i = 0; i < 6; i++) {
      const c = mkCandle(prev, +1, atr, rng, {
        closeOverride: prev.close + 1.1,
        topWickAtr: 0.2,
        volume: 1.1,
      });
      candles.push(c);
      prev = c;
    }
    const l1 = mkCandle(prev, -1, atr, rng, {
      openOverride: resLevel - 0.1,
      closeOverride: resLevel - 1.1,
      topWickAtr: 0.9,
      botWickAtr: 0.15,
      label: 'L1',
      volume: 1.5,
      highlight: 'l1',
    });
    candles.push(l1);
    prev = l1;
    for (let i = 0; i < 3; i++) {
      const c = mkCandle(prev, i === 0 ? +1 : (rng() > 0.5 ? +1 : -1), atr, rng, {
        volume: 0.9,
      });
      candles.push(c);
      prev = c;
    }
    return {
      candles,
      annotations: [
        { type: 'hline', y: resLevel, color: 'bear', dashed: true, text: 'Resistance' },
      ],
    };
  }
  if (variant.startsWith('not-clean')) {
    // Choppy nonsense at a level — small bodies, mixed colors, no defense
    const rng = mulberry32(seedFor('practice', variant));
    const atr = 1.0;
    const level = 100;
    let candles = [];
    let prev = startCandle(rng, level + (rng() - 0.5) * 4, atr);
    candles.push(prev);
    for (let i = 0; i < 17; i++) {
      const dir = rng() > 0.5 ? +1 : -1;
      const c = mkCandle(prev, dir, atr, rng, {
        closeOverride: prev.close + dir * (0.2 + rng() * 0.5),
        botWickAtr: 0.3 + rng() * 0.3,
        topWickAtr: 0.3 + rng() * 0.3,
        volume: 0.7 + rng() * 0.3,
      });
      candles.push(c);
      prev = c;
    }
    return {
      candles,
      annotations: [
        { type: 'hline', y: level, color: 'bull', dashed: true, text: 'Maybe support?' },
      ],
    };
  }
  return genDoubleBottomH2('clean-1');
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------
export function generatePattern(type, variant) {
  switch (type) {
    case 'double-bottom':
      return genDoubleBottomH2(variant);
    case 'double-top':
      return genDoubleTopL2(variant);
    case 'bull-flag':
      return genBullFlagH2(variant);
    case 'bear-flag':
      return genBearFlagL2(variant);
    case 'defended':
      return genDefended(variant);
    case 'practice':
      return genPractice(variant);
    default:
      return genDoubleBottomH2('clean-1');
  }
}

// The 30 practice questions — defines the correct answer for each.
// answer keys: "take-h2", "take-l2", "skip-restart", "skip-h1-l1", "skip-not-clean"
export const PRACTICE_QUESTIONS = [
  // 8 clean H2 — "take it"
  ...['1', '2', '3', '4', '5', '6', '7', '8'].map((n) => ({
    id: `clean-h2-${n}`,
    type: 'practice',
    variant: `clean-h2-${n === '8' ? 'win' + n : n}`,
    answer: 'take-h2',
    patternKey: 'double-bottom',
    explanation:
      'Clean H2 setup at support: real down move, H1 prints, pullback stays above H1 low, H2 signal bar is strong. Take it.',
  })),
  // 8 clean L2 — "take it"
  ...['1', '2', '3', '4', '5', '6', '7', '8'].map((n) => ({
    id: `clean-l2-${n}`,
    type: 'practice',
    variant: `clean-l2-${n === '8' ? 'win' + n : n}`,
    answer: 'take-l2',
    patternKey: 'double-top',
    explanation:
      'Clean L2 at resistance: real up move, L1 prints, pullback stays below L1 high, L2 signal bar is strong. Take it.',
  })),
  // 4 count restarts — "skip"
  { id: 'count-restart-bot-1', type: 'practice', variant: 'count-restart-bot-1', answer: 'skip-restart', patternKey: 'double-bottom',
    explanation: 'Price broke the original H1 low. The count restarted. The "new H1" is fresh — wait for H2 at the new low.' },
  { id: 'count-restart-bot-2', type: 'practice', variant: 'count-restart-bot-2', answer: 'skip-restart', patternKey: 'double-bottom',
    explanation: 'Original H1 low broken by more than a tick. Count is reset. Don\'t call the next bar H2 — it isn\'t.' },
  { id: 'count-restart-top-1', type: 'practice', variant: 'count-restart-top-1', answer: 'skip-restart', patternKey: 'double-top',
    explanation: 'Price broke the original L1 high. Count restarted. The "new L1" is fresh — wait for L2 at the new high.' },
  { id: 'count-restart-top-2', type: 'practice', variant: 'count-restart-top-2', answer: 'skip-restart', patternKey: 'double-top',
    explanation: 'L1 high taken out. The structure reset. Skip until a fresh L2 forms.' },
  // 4 H1/L1 first signals — "skip H1/L1"
  { id: 'h1-only-1', type: 'practice', variant: 'h1-only-1', answer: 'skip-h1-l1', patternKey: 'double-bottom',
    explanation: 'This is H1 — the FIRST try. H1 typically fails. Mark it and watch for the pullback and the H2 signal bar.' },
  { id: 'h1-only-2', type: 'practice', variant: 'h1-only-2', answer: 'skip-h1-l1', patternKey: 'double-bottom',
    explanation: 'H1 bar at support. Don\'t enter on H1 — wait for H2 (the second try) before pulling the trigger.' },
  { id: 'l1-only-1', type: 'practice', variant: 'l1-only-1', answer: 'skip-h1-l1', patternKey: 'double-top',
    explanation: 'L1 at resistance. First sellers usually get absorbed. Wait for the pullback and L2.' },
  { id: 'l1-only-2', type: 'practice', variant: 'l1-only-2', answer: 'skip-h1-l1', patternKey: 'double-top',
    explanation: 'L1 just printed. Don\'t short the first try — mark it, wait for the pullback higher, then L2.' },
  // 6 not-clean — "skip not-clean"
  ...['1', '2', '3', '4', '5', '6'].map((n) => ({
    id: `not-clean-${n}`,
    type: 'practice',
    variant: `not-clean-${n}`,
    answer: 'skip-not-clean',
    patternKey: 'other',
    explanation:
      'Choppy sideways action with weak signal bars and mixed bodies. No clean down/up move into the level, no real defense. Skip.',
  })),
];
