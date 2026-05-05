// Twelve hand-tuned bull flag exhibits. Long-side mirror of the bear flag set.
// Each candle is a real OHLC tuple — body, wicks, and volume are all proportional.

const C = (o, h, l, c, vol) => ({ o, h, l, c, vol });

// --------------------------------------------------------------------------
// 1. THE TEXTBOOK BULL FLAG
// --------------------------------------------------------------------------
function textbook() {
  const out = [];
  // 2 small lead-in candles
  out.push(C(2510.0, 2510.6, 2509.6, 2510.4, 32));
  out.push(C(2510.4, 2511.0, 2510.0, 2510.6, 28));
  // 4-candle pole — sharp green bodies, small wicks
  out.push(C(2510.6, 2513.4, 2510.4, 2513.2, 88));
  out.push(C(2513.2, 2516.0, 2513.0, 2515.8, 96));
  out.push(C(2515.8, 2518.6, 2515.6, 2518.4, 102));
  out.push(C(2518.4, 2521.2, 2518.2, 2521.0, 110));
  // 6-candle flag drifting DOWN at ~15° on declining volume
  out.push(C(2521.0, 2521.2, 2520.0, 2520.4, 70));
  out.push(C(2520.4, 2520.7, 2519.6, 2519.8, 60));
  out.push(C(2519.8, 2520.0, 2519.0, 2519.2, 52));
  out.push(C(2519.2, 2519.4, 2518.4, 2518.6, 46));
  out.push(C(2518.6, 2518.8, 2518.0, 2518.2, 40));
  out.push(C(2518.2, 2518.4, 2517.6, 2517.8, 35));
  // breakout — long green, body close 2 ticks above flag's upper trendline
  out.push(C(2517.8, 2521.6, 2517.6, 2521.4, 145));
  // continuation
  out.push(C(2521.4, 2523.6, 2521.2, 2523.4, 92));
  out.push(C(2523.4, 2525.4, 2523.2, 2525.2, 78));

  return {
    candles: out,
    flagLow: 2517.6,
    flagUpper: 2521.0,
    poleStart: 2510.6,
    poleEnd: 2521.0,
    breakoutPrice: 2521.4,
    breakoutIndex: 12,
    target: 2521.4 + (2521.0 - 2510.6),
    markers: [
      { kind: 'hline', price: 2517.6, color: '#ef4444', label: 'Stop · flag low', dashed: true },
      { kind: 'hline', price: 2521.4, color: '#10b981', label: 'Entry · breakout close', dashed: true },
      { kind: 'hline', price: 2521.4 + (2521.0 - 2510.6), color: '#f59e0b', label: 'Target · measured move', dashed: true }
    ]
  };
}

// --------------------------------------------------------------------------
// 2. THE TIGHT BULL FLAG
// --------------------------------------------------------------------------
function tight() {
  const out = [];
  out.push(C(2510.0, 2510.4, 2509.6, 2510.2, 30));
  // 3-candle pole
  out.push(C(2510.2, 2513.4, 2510.0, 2513.2, 95));
  out.push(C(2513.2, 2516.4, 2513.0, 2516.2, 105));
  out.push(C(2516.2, 2519.0, 2516.0, 2518.8, 115));
  // 4-candle flag — small drift down
  out.push(C(2518.8, 2519.0, 2518.0, 2518.2, 65));
  out.push(C(2518.2, 2518.4, 2517.6, 2517.8, 55));
  out.push(C(2517.8, 2518.0, 2517.2, 2517.4, 48));
  out.push(C(2517.4, 2517.8, 2517.0, 2517.2, 42));
  // immediate continuation up
  out.push(C(2517.2, 2520.0, 2517.0, 2519.8, 130));
  out.push(C(2519.8, 2522.4, 2519.6, 2522.2, 88));
  out.push(C(2522.2, 2524.8, 2522.0, 2524.6, 76));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 3. THE LOOSE BULL FLAG
// --------------------------------------------------------------------------
function loose() {
  const out = [];
  out.push(C(2515.0, 2515.4, 2514.6, 2515.2, 32));
  // 5-candle pole
  out.push(C(2515.2, 2517.6, 2515.0, 2517.4, 80));
  out.push(C(2517.4, 2519.8, 2517.2, 2519.6, 88));
  out.push(C(2519.6, 2522.0, 2519.4, 2521.8, 96));
  out.push(C(2521.8, 2524.2, 2521.6, 2524.0, 102));
  out.push(C(2524.0, 2526.4, 2523.8, 2526.2, 100));
  // 8-candle wider flag — wider range, more wicks, drifting down
  out.push(C(2526.2, 2526.6, 2525.0, 2525.6, 75));
  out.push(C(2525.6, 2526.4, 2524.8, 2525.0, 68));
  out.push(C(2525.0, 2525.8, 2523.4, 2524.2, 70));
  out.push(C(2524.2, 2525.0, 2523.4, 2524.6, 60));
  out.push(C(2524.6, 2525.0, 2523.0, 2523.6, 55));
  out.push(C(2523.6, 2524.6, 2522.6, 2524.4, 50));
  out.push(C(2524.4, 2525.0, 2523.2, 2523.6, 45));
  out.push(C(2523.6, 2524.4, 2522.6, 2524.0, 42));
  // breakout up
  out.push(C(2524.0, 2527.0, 2523.8, 2526.8, 130));
  out.push(C(2526.8, 2529.2, 2526.6, 2529.0, 88));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 4. THE RETEST ENTRY
// --------------------------------------------------------------------------
function retest() {
  const out = [];
  out.push(C(2520.0, 2520.4, 2519.6, 2520.2, 30));
  // 4-candle pole
  out.push(C(2520.2, 2522.8, 2520.0, 2522.6, 90));
  out.push(C(2522.6, 2525.0, 2522.4, 2524.8, 98));
  out.push(C(2524.8, 2527.2, 2524.6, 2527.0, 105));
  out.push(C(2527.0, 2529.4, 2526.8, 2529.2, 100));
  // 5-candle flag drifting down
  out.push(C(2529.2, 2529.4, 2528.4, 2528.6, 60));
  out.push(C(2528.6, 2528.8, 2528.0, 2528.2, 52));
  out.push(C(2528.2, 2528.4, 2527.6, 2527.8, 46));
  out.push(C(2527.8, 2528.0, 2527.0, 2527.2, 42));
  out.push(C(2527.2, 2527.4, 2526.6, 2526.8, 38));
  // breakout above flag upper trendline (~2528.6)
  out.push(C(2526.8, 2530.4, 2526.6, 2530.2, 130));
  // small continuation up
  out.push(C(2530.2, 2532.4, 2530.0, 2532.2, 90));
  // pullback / retest DOWN to broken trendline
  out.push(C(2532.2, 2532.4, 2530.2, 2530.4, 60));
  // touch from above — wick into trendline, green bounce
  out.push(C(2530.4, 2531.0, 2528.6, 2530.6, 55));
  // bounce candle — long green body
  out.push(C(2530.6, 2533.0, 2530.4, 2532.8, 95));
  // continuation higher
  out.push(C(2532.8, 2535.2, 2532.6, 2535.0, 88));
  out.push(C(2535.0, 2537.6, 2534.8, 2537.4, 80));
  return {
    candles: out,
    markers: [
      { kind: 'hline', price: 2528.6, color: '#888', dashed: true, label: 'Broken trendline' },
      { kind: 'entry', x: 10, y: 2530.2, color: '#fbbf24', label: 'Aggressive · breakout close' },
      { kind: 'entry', x: 11, y: 2532.2, color: '#10b981', label: 'Confirmation · next candle close' },
      { kind: 'entry', x: 14, y: 2530.6, color: '#06b6d4', label: 'Retest · bounce off trendline' }
    ]
  };
}

// --------------------------------------------------------------------------
// 5. THE FAILED BULL FLAG (BULL TRAP)
// --------------------------------------------------------------------------
function failed() {
  const out = [];
  out.push(C(2530.0, 2530.4, 2529.6, 2530.2, 28));
  // 4-candle pole
  out.push(C(2530.2, 2532.8, 2530.0, 2532.6, 90));
  out.push(C(2532.6, 2535.0, 2532.4, 2534.8, 98));
  out.push(C(2534.8, 2537.2, 2534.6, 2537.0, 102));
  out.push(C(2537.0, 2539.4, 2536.8, 2539.2, 95));
  // 5-candle flag drifting down
  out.push(C(2539.2, 2539.4, 2538.4, 2538.6, 60));
  out.push(C(2538.6, 2538.8, 2537.8, 2538.0, 52));
  out.push(C(2538.0, 2538.2, 2537.4, 2537.6, 46));
  out.push(C(2537.6, 2537.8, 2537.0, 2537.2, 40));
  out.push(C(2537.2, 2537.4, 2536.8, 2537.0, 36));
  // breakout — looks legit
  out.push(C(2537.0, 2539.6, 2536.8, 2539.4, 110));
  // FAILURE — long red body that closes back BELOW the flag's upper trendline (~2538.6)
  out.push(C(2539.4, 2539.6, 2536.6, 2536.8, 145));
  // continues lower, taking out longs
  out.push(C(2536.8, 2537.0, 2535.0, 2535.2, 105));
  out.push(C(2535.2, 2535.4, 2533.4, 2533.6, 88));
  out.push(C(2533.6, 2533.8, 2532.4, 2532.6, 72));
  return {
    candles: out,
    markers: [
      { kind: 'hline', price: 2539.2, color: '#888', dashed: true, label: 'Flag high' }
    ]
  };
}

// --------------------------------------------------------------------------
// 6. PREMATURE ENTRY DISASTER (LONG-SIDE)
// --------------------------------------------------------------------------
function premature() {
  const out = [];
  out.push(C(2540.0, 2540.4, 2539.6, 2540.2, 30));
  out.push(C(2540.2, 2542.8, 2540.0, 2542.6, 90));
  out.push(C(2542.6, 2545.2, 2542.4, 2545.0, 95));
  out.push(C(2545.0, 2547.6, 2544.8, 2547.4, 100));
  out.push(C(2547.4, 2550.0, 2547.2, 2549.8, 95));
  // 5-candle flag drifting down
  out.push(C(2549.8, 2550.0, 2549.0, 2549.2, 60));
  out.push(C(2549.2, 2549.4, 2548.4, 2548.6, 52));
  out.push(C(2548.6, 2548.8, 2548.0, 2548.2, 46));
  out.push(C(2548.2, 2548.4, 2547.6, 2547.8, 40));
  out.push(C(2547.8, 2548.0, 2547.4, 2547.6, 36));
  // "trader buys on breakout candle close" — breakout candle
  out.push(C(2547.6, 2550.2, 2547.4, 2550.0, 105));
  // STOP HUNT — long red WICK below prior flag low (their stop was here)
  out.push(C(2550.0, 2550.2, 2547.0, 2548.6, 130));
  // then continues UP WITHOUT them
  out.push(C(2548.6, 2551.6, 2548.4, 2551.4, 95));
  out.push(C(2551.4, 2554.4, 2551.2, 2554.2, 85));
  out.push(C(2554.2, 2557.0, 2554.0, 2556.8, 75));
  return {
    candles: out,
    markers: [
      { kind: 'hline', price: 2547.4, color: '#ef4444', dashed: true, label: "Trader's stop (too tight)" }
    ]
  };
}

// --------------------------------------------------------------------------
// 7. VOLUME FAILURE (LONG-SIDE)
// --------------------------------------------------------------------------
function volumeFail() {
  const out = [];
  out.push(C(2550.0, 2550.4, 2549.6, 2550.2, 50));
  out.push(C(2550.2, 2552.8, 2550.0, 2552.6, 95));
  out.push(C(2552.6, 2555.0, 2552.4, 2554.8, 100));
  out.push(C(2554.8, 2557.2, 2554.6, 2557.0, 105));
  out.push(C(2557.0, 2559.4, 2556.8, 2559.2, 102));
  // flag with FLAT/RISING volume — sellers distributing
  out.push(C(2559.2, 2559.4, 2558.4, 2558.6, 70));
  out.push(C(2558.6, 2558.8, 2557.8, 2558.0, 75));
  out.push(C(2558.0, 2558.2, 2557.4, 2557.6, 78));
  out.push(C(2557.6, 2557.8, 2557.0, 2557.2, 82));
  out.push(C(2557.2, 2557.4, 2556.8, 2557.0, 80));
  // breakout w/ LOWER volume than flag avg
  out.push(C(2557.0, 2559.6, 2556.8, 2559.4, 60));
  // drifts back into the flag
  out.push(C(2559.4, 2559.6, 2558.4, 2558.6, 65));
  out.push(C(2558.6, 2558.8, 2557.4, 2557.6, 72));
  out.push(C(2557.6, 2557.8, 2556.4, 2556.6, 80));
  // breaks DOWN through flag bottom
  out.push(C(2556.6, 2556.8, 2554.4, 2554.6, 110));
  out.push(C(2554.6, 2554.8, 2552.6, 2552.8, 90));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 8. BULL FLAG INSIDE A DOWNTREND (DON'T TRADE)
// --------------------------------------------------------------------------
function inDowntrend() {
  // The chart shows the local bull flag setup; the inset shows the larger downtrend
  const out = [];
  out.push(C(2562.0, 2562.4, 2561.6, 2562.2, 60));
  out.push(C(2562.2, 2562.6, 2561.4, 2561.6, 50));
  // 4-candle small pole UP
  out.push(C(2561.6, 2563.4, 2561.4, 2563.2, 80));
  out.push(C(2563.2, 2565.0, 2563.0, 2564.8, 88));
  out.push(C(2564.8, 2566.6, 2564.6, 2566.4, 92));
  out.push(C(2566.4, 2568.0, 2566.2, 2567.8, 90));
  // 5-candle flag drifting down slightly
  out.push(C(2567.8, 2568.0, 2567.0, 2567.2, 55));
  out.push(C(2567.2, 2567.4, 2566.6, 2566.8, 50));
  out.push(C(2566.8, 2567.0, 2566.2, 2566.4, 45));
  out.push(C(2566.4, 2566.6, 2565.8, 2566.0, 42));
  out.push(C(2566.0, 2566.2, 2565.4, 2565.6, 38));
  // brief breakout up
  out.push(C(2565.6, 2568.4, 2565.4, 2568.2, 95));
  // larger downtrend resumes — crushes the long
  out.push(C(2568.2, 2568.4, 2566.8, 2567.0, 80));
  out.push(C(2567.0, 2567.2, 2564.6, 2564.8, 110));
  out.push(C(2564.8, 2565.0, 2562.0, 2562.2, 130));
  out.push(C(2562.2, 2562.4, 2559.6, 2559.8, 145));
  out.push(C(2559.8, 2560.0, 2557.4, 2557.6, 130));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 9. TWO-STAGE BULL FLAG (STACKED CONTINUATION)
// --------------------------------------------------------------------------
function twoStage() {
  const out = [];
  // First pole UP
  out.push(C(2580.0, 2580.4, 2579.6, 2580.2, 35));
  out.push(C(2580.2, 2582.8, 2580.0, 2582.6, 90));
  out.push(C(2582.6, 2585.0, 2582.4, 2584.8, 100));
  out.push(C(2584.8, 2587.2, 2584.6, 2587.0, 105));
  // First flag — drifts down
  out.push(C(2587.0, 2587.2, 2586.4, 2586.6, 60));
  out.push(C(2586.6, 2586.8, 2586.0, 2586.2, 52));
  out.push(C(2586.2, 2586.4, 2585.6, 2585.8, 46));
  out.push(C(2585.8, 2586.0, 2585.4, 2585.6, 40));
  // First breakout UP
  out.push(C(2585.6, 2588.6, 2585.4, 2588.4, 130));
  // Rally continues
  out.push(C(2588.4, 2590.6, 2588.2, 2590.4, 95));
  out.push(C(2590.4, 2592.8, 2590.2, 2592.6, 90));
  // SECOND flag forms at higher level
  out.push(C(2592.6, 2592.8, 2592.0, 2592.2, 55));
  out.push(C(2592.2, 2592.4, 2591.6, 2591.8, 48));
  out.push(C(2591.8, 2592.0, 2591.2, 2591.4, 42));
  out.push(C(2591.4, 2591.6, 2590.8, 2591.0, 38));
  // SECOND breakout UP — also works
  out.push(C(2591.0, 2594.0, 2590.8, 2593.8, 120));
  out.push(C(2593.8, 2596.4, 2593.6, 2596.2, 88));
  out.push(C(2596.2, 2598.6, 2596.0, 2598.4, 78));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 10. WIDE FLAG SIDEWAYS TOO LONG (LONG-SIDE)
// --------------------------------------------------------------------------
function tooLong() {
  const out = [];
  out.push(C(2600.0, 2600.4, 2599.6, 2600.2, 32));
  out.push(C(2600.2, 2602.8, 2600.0, 2602.6, 90));
  out.push(C(2602.6, 2605.2, 2602.4, 2605.0, 100));
  out.push(C(2605.0, 2607.6, 2604.8, 2607.4, 102));
  out.push(C(2607.4, 2610.0, 2607.2, 2609.8, 95));
  // 13-candle sideways flag — pattern decays
  for (let i = 0; i < 13; i++) {
    const base = 2609.8 - (i % 3 === 0 ? 0.4 : i % 3 === 1 ? 0.6 : 0.2);
    const op = base + 0.4 + (Math.sin(i) * 0.4);
    const cl = base + 0.1 + (Math.cos(i) * 0.4);
    const hi = Math.max(op, cl) + 0.4;
    const lo = Math.min(op, cl) - 0.3;
    out.push(C(op, hi, lo, cl, 50 - i * 2));
  }
  // weak breakout
  out.push(C(2609.0, 2610.4, 2608.8, 2610.2, 60));
  // reverses down
  out.push(C(2610.2, 2610.4, 2607.8, 2608.0, 90));
  out.push(C(2608.0, 2608.2, 2606.0, 2606.2, 95));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 11. STEEP FLAG (WARNING SIGN — LONG-SIDE)
// --------------------------------------------------------------------------
function steep() {
  const out = [];
  out.push(C(2620.0, 2620.4, 2619.6, 2620.2, 32));
  out.push(C(2620.2, 2622.8, 2620.0, 2622.6, 90));
  out.push(C(2622.6, 2625.6, 2622.4, 2625.4, 100));
  out.push(C(2625.4, 2628.6, 2625.2, 2628.4, 110));
  out.push(C(2628.4, 2631.6, 2628.2, 2631.4, 105));
  // STEEP drop — sellers aggressive
  out.push(C(2631.4, 2631.6, 2629.6, 2629.8, 80));
  out.push(C(2629.8, 2630.0, 2627.6, 2627.8, 95));
  out.push(C(2627.8, 2628.0, 2625.6, 2625.8, 110));
  out.push(C(2625.8, 2626.0, 2623.4, 2623.6, 125));
  // continues down — full reversal
  out.push(C(2623.6, 2623.8, 2620.6, 2620.8, 140));
  out.push(C(2620.8, 2621.0, 2618.4, 2618.6, 110));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 12. OPENING DRIVE BULL FLAG (Best of the Day)
// --------------------------------------------------------------------------
function openingDrive() {
  const out = [];
  // Strong opening rally — 4-candle pole right off the open with massive vol
  out.push(C(2700.0, 2703.6, 2699.8, 2703.4, 220));
  out.push(C(2703.4, 2707.0, 2703.2, 2706.8, 240));
  out.push(C(2706.8, 2710.4, 2706.6, 2710.2, 260));
  out.push(C(2710.2, 2713.8, 2710.0, 2713.6, 280));
  // Tight 5-candle flag — controlled, fast pullback
  out.push(C(2713.6, 2713.8, 2712.6, 2712.8, 110));
  out.push(C(2712.8, 2713.0, 2711.8, 2712.0, 95));
  out.push(C(2712.0, 2712.2, 2711.0, 2711.2, 80));
  out.push(C(2711.2, 2711.4, 2710.4, 2710.6, 70));
  out.push(C(2710.6, 2710.8, 2710.0, 2710.2, 65));
  // Decisive breakout with MASSIVE volume
  out.push(C(2710.2, 2714.4, 2710.0, 2714.2, 320));
  // Strong continuation
  out.push(C(2714.2, 2717.6, 2714.0, 2717.4, 250));
  out.push(C(2717.4, 2721.0, 2717.2, 2720.8, 220));
  out.push(C(2720.8, 2724.0, 2720.6, 2723.8, 200));
  return { candles: out, openMarker: true };
}

// --------------------------------------------------------------------------
// EXPORTS
// --------------------------------------------------------------------------
export const examples = [
  {
    n: 1,
    title: 'The Textbook Bull Flag',
    pattern: textbook(),
    caption:
      "This is the platonic ideal. Sharp 4-candle pole rallies 10 ticks. 6-candle flag drifts down at a shallow angle on visibly fading volume. Breakout candle is the longest green body on the chart and prints the highest volume — both confirmations align. Take it without overthinking. Entry on the breakout's close, stop below the flag's low, target a measured move up."
  },
  {
    n: 2,
    title: 'The Tight Bull Flag (Strong Trend Day)',
    pattern: tight(),
    caption:
      "On powerful trend days the flag barely forms — only 3 pole candles and a 4-candle pause before continuation. Don't wait for textbook duration. If structure is there, take it. Strong trends compress patterns. Hesitation costs you the move."
  },
  {
    n: 3,
    title: 'The Loose Bull Flag (Acceptable but Riskier)',
    pattern: loose(),
    caption:
      "Wider flags have more candles, more wicks, and more noise. The pattern is still valid but less precise. Wait for the breakout candle's CLOSE above the upper trendline, not just a wick poking through. Use smaller size when the day's range is already wide."
  },
  {
    n: 4,
    title: 'The Retest Entry (Highest Probability)',
    pattern: retest(),
    caption:
      "Pattern breaks up. Price rises 3-4 ticks. Then pulls DOWN to the broken trendline, touches it from above, gets bought with a green candle, and continues higher. Three entry points marked: yellow = aggressive (on break), green = confirmation (next candle close), cyan = retest (bounce off trendline). The retest is the highest-probability long. Patient traders get paid here."
  },
  {
    n: 5,
    title: 'The FAILED Bull Flag (Bull Trap)',
    pattern: failed(),
    caption:
      "Looks identical to a real bull flag right through the breakout. Then the next candle prints a long red body that closes back BELOW the flag's upper trendline. Longs are trapped. Price reverses down. This is exactly why you wait for the candle AFTER the breakout. The breakout candle alone is not confirmation. Bull traps catch the impatient."
  },
  {
    n: 6,
    title: 'The Premature Entry Disaster',
    pattern: premature(),
    caption:
      "Trader buys on the breakout candle's close with stop just below the breakout candle's low. Next candle is a long red wick that spikes through the stop — then price continues higher without him. He was right about direction but wrong about timing AND stop placement. The candle AFTER the breakout is non-negotiable."
  },
  {
    n: 7,
    title: 'Volume Failure',
    pattern: volumeFail(),
    caption:
      "Bull flag forms perfectly. Volume during the flag is FLAT/RISING (sellers were distributing into the rally). Breakout candle has SMALLER volume than the flag's average. Five candles later price drifts back into the flag and breaks out the BOTTOM. Skip these 80% of the time. Take half-size 20% of the time only when the rest of the chart is a strong uptrend."
  },
  {
    n: 8,
    title: "Bull Flag Inside a Downtrend (Don't Trade)",
    pattern: inDowntrend(),
    caption:
      "On the small inset chart, the larger trend is clearly DOWN. Inside that downtrend, a small bull flag forms. It breaks up briefly — then the larger downtrend resumes and crushes the long. A bull flag inside a downtrend is just a bear flag pullback in disguise. Always check the larger context (zoom out one timeframe) before entering."
  },
  {
    n: 9,
    title: 'The Two-Stage Bull Flag (Stacked Continuation)',
    pattern: twoStage(),
    caption:
      "First bull flag completes, price rallies to a new high. Then a SECOND bull flag forms at that higher level. Both work. Strong trend days produce stacked bull flags. After the first one fires successfully, watch the higher zone for a second one. Two clean continuations beat one home-run swing."
  },
  {
    n: 10,
    title: 'The Wide Flag That Went Sideways Too Long',
    pattern: tooLong(),
    caption:
      "Pole forms cleanly. Flag goes sideways for 13+ candles. Buyers' urgency dissipates — the longer the pause, the more sellers have time to organize. Eventually the flag breaks up weakly, then reverses down. Time kills bull flags. If the flag drifts beyond ~8-10 candles on a 2-min, buyers have lost their edge. Skip it."
  },
  {
    n: 11,
    title: 'The Steep Flag (Warning Sign)',
    pattern: steep(),
    caption:
      "Pole forms. Flag drops STEEPLY downward — much more than a shallow 15° drift. Steep pullbacks in the flag mean sellers are aggressive, not just passive profit-takers. This setup often becomes a reversal, not a continuation. Wait for proof (a clear failure of the selling) or skip the trade entirely."
  },
  {
    n: 12,
    title: 'The Opening Drive Bull Flag (Best of the Day)',
    pattern: openingDrive(),
    caption:
      "First bull flag forms in the 30-45 minutes after RTH open at 9:30 ET. Sharp 4-candle pole right off the open, tight 5-candle pullback, decisive break with massive volume — institutional buying confirms direction. If your trade window opens at 10:15, the second-wave bull flag forming around 10:15-10:45 frequently extends the opening drive's gains. Often the highest-quality setup of the day."
  }
];
