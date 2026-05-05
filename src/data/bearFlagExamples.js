// Twelve hand-tuned bear flag exhibits.
// Each candle is a real OHLC tuple — body, wicks, and volume are all proportional.
// `marker` arrays add labeled price lines (entry/stop/target etc).

const C = (o, h, l, c, vol) => ({ o, h, l, c, vol });

// --------------------------------------------------------------------------
// 1. THE TEXTBOOK BEAR FLAG
// --------------------------------------------------------------------------
function textbook() {
  const out = [];
  // 2 small lead-in green candles to show prior swing high
  out.push(C(2510.0, 2511.2, 2509.8, 2510.8, 32));
  out.push(C(2510.8, 2511.5, 2510.2, 2510.4, 28));
  // 4-candle pole — sharp red bodies, small wicks
  out.push(C(2510.4, 2510.6, 2507.8, 2508.0, 88));
  out.push(C(2508.0, 2508.3, 2505.5, 2505.7, 96));
  out.push(C(2505.7, 2506.0, 2502.8, 2503.0, 102));
  out.push(C(2503.0, 2503.2, 2500.4, 2500.6, 110));
  // 6-candle flag drifting up at ~15° on declining volume
  out.push(C(2500.6, 2501.4, 2500.4, 2501.0, 70));
  out.push(C(2501.0, 2501.8, 2500.7, 2501.6, 60));
  out.push(C(2501.6, 2502.3, 2501.2, 2502.1, 52));
  out.push(C(2502.1, 2502.8, 2501.7, 2502.5, 46));
  out.push(C(2502.5, 2503.2, 2502.2, 2503.0, 40));
  out.push(C(2503.0, 2503.5, 2502.6, 2503.2, 35));
  // breakout — long red, body close 2 ticks below flag's lower trendline
  out.push(C(2503.2, 2503.4, 2499.6, 2499.8, 145));
  // continuation
  out.push(C(2499.8, 2500.0, 2497.4, 2497.6, 92));
  out.push(C(2497.6, 2498.0, 2495.8, 2496.0, 78));

  return {
    candles: out,
    flagHigh: 2503.5,
    flagLowTrendline: 2500.0,
    poleStart: 2510.4,
    poleEnd: 2500.6,
    breakoutPrice: 2499.8,
    breakoutIndex: 12,
    target: 2499.8 - (2510.4 - 2500.6),
    markers: [
      { kind: 'hline', price: 2503.5, color: '#FF3D5A', label: 'Stop · flag high', dashed: true },
      { kind: 'hline', price: 2499.8, color: '#FFB44A', label: 'Entry · breakout close', dashed: true },
      { kind: 'hline', price: 2499.8 - (2510.4 - 2500.6), color: '#00D9A0', label: 'Target · measured move', dashed: true }
    ]
  };
}

// --------------------------------------------------------------------------
// 2. THE TIGHT BEAR FLAG
// --------------------------------------------------------------------------
function tight() {
  const out = [];
  out.push(C(2510.0, 2510.4, 2509.6, 2510.2, 30));
  // 3-candle pole
  out.push(C(2510.2, 2510.3, 2507.0, 2507.2, 95));
  out.push(C(2507.2, 2507.4, 2504.0, 2504.2, 105));
  out.push(C(2504.2, 2504.4, 2501.4, 2501.6, 115));
  // 4-candle flag — small drift up
  out.push(C(2501.6, 2502.2, 2501.4, 2502.0, 65));
  out.push(C(2502.0, 2502.6, 2501.7, 2502.4, 55));
  out.push(C(2502.4, 2503.0, 2502.2, 2502.8, 48));
  out.push(C(2502.8, 2503.2, 2502.5, 2502.9, 42));
  // immediate continuation
  out.push(C(2502.9, 2503.0, 2500.0, 2500.2, 130));
  out.push(C(2500.2, 2500.4, 2497.6, 2497.8, 88));
  out.push(C(2497.8, 2498.0, 2495.0, 2495.2, 76));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 3. THE LOOSE BEAR FLAG
// --------------------------------------------------------------------------
function loose() {
  const out = [];
  out.push(C(2515.0, 2516.0, 2514.6, 2515.6, 32));
  // 5-candle pole
  out.push(C(2515.6, 2515.8, 2513.0, 2513.2, 80));
  out.push(C(2513.2, 2513.5, 2510.8, 2511.0, 88));
  out.push(C(2511.0, 2511.4, 2508.6, 2508.8, 96));
  out.push(C(2508.8, 2509.0, 2506.4, 2506.6, 102));
  out.push(C(2506.6, 2506.9, 2504.4, 2504.6, 100));
  // 8-candle wider flag — wider range, more wicks, drifting up
  out.push(C(2504.6, 2506.0, 2504.0, 2505.5, 75));
  out.push(C(2505.5, 2506.4, 2504.8, 2505.1, 68));
  out.push(C(2505.1, 2506.8, 2504.4, 2506.5, 70));
  out.push(C(2506.5, 2507.2, 2505.6, 2506.0, 60));
  out.push(C(2506.0, 2507.4, 2505.4, 2507.0, 55));
  out.push(C(2507.0, 2508.0, 2506.2, 2506.6, 50));
  out.push(C(2506.6, 2507.6, 2505.8, 2507.2, 45));
  out.push(C(2507.2, 2508.0, 2506.0, 2506.4, 42));
  // breakout
  out.push(C(2506.4, 2506.6, 2503.2, 2503.4, 130));
  out.push(C(2503.4, 2503.6, 2501.0, 2501.2, 88));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 4. THE RETEST ENTRY
// --------------------------------------------------------------------------
function retest() {
  const out = [];
  out.push(C(2520.0, 2520.4, 2519.6, 2520.2, 30));
  // 4-candle pole
  out.push(C(2520.2, 2520.3, 2517.4, 2517.6, 90));
  out.push(C(2517.6, 2517.8, 2515.0, 2515.2, 98));
  out.push(C(2515.2, 2515.4, 2512.6, 2512.8, 105));
  out.push(C(2512.8, 2513.0, 2510.2, 2510.4, 100));
  // 5-candle flag drifting up
  out.push(C(2510.4, 2511.2, 2510.2, 2511.0, 60));
  out.push(C(2511.0, 2511.8, 2510.8, 2511.6, 52));
  out.push(C(2511.6, 2512.2, 2511.3, 2512.0, 46));
  out.push(C(2512.0, 2512.8, 2511.7, 2512.6, 42));
  out.push(C(2512.6, 2513.2, 2512.2, 2512.8, 38));
  // breakout below flag low trendline (~2510.4)
  out.push(C(2512.8, 2513.0, 2509.4, 2509.6, 130));
  // small continuation down
  out.push(C(2509.6, 2509.8, 2507.6, 2507.8, 90));
  // pullback / retest UP to broken trendline
  out.push(C(2507.8, 2509.4, 2507.7, 2509.2, 60));
  // touch from below — wick into trendline, red rejection
  out.push(C(2509.2, 2510.4, 2509.0, 2509.4, 55));
  // rejection candle — long red body
  out.push(C(2509.4, 2509.6, 2507.0, 2507.2, 95));
  // continuation lower
  out.push(C(2507.2, 2507.4, 2504.8, 2505.0, 88));
  out.push(C(2505.0, 2505.2, 2502.4, 2502.6, 80));
  return {
    candles: out,
    markers: [
      { kind: 'hline', price: 2510.4, color: '#888', dashed: true, label: 'Broken trendline' },
      { kind: 'entry', x: 10, y: 2509.6, color: '#FFB44A', label: 'Aggressive · breakout close' },
      { kind: 'entry', x: 11, y: 2507.8, color: '#00D9A0', label: 'Confirmation · next candle close' },
      { kind: 'entry', x: 14, y: 2509.4, color: '#4A9EFF', label: 'Retest · rejection from underside' }
    ]
  };
}

// --------------------------------------------------------------------------
// 5. THE FAILED BEAR FLAG (BEAR TRAP)
// --------------------------------------------------------------------------
function failed() {
  const out = [];
  out.push(C(2530.0, 2530.4, 2529.6, 2530.2, 28));
  // 4-candle pole
  out.push(C(2530.2, 2530.3, 2527.6, 2527.8, 90));
  out.push(C(2527.8, 2528.0, 2525.4, 2525.6, 98));
  out.push(C(2525.6, 2525.8, 2523.0, 2523.2, 102));
  out.push(C(2523.2, 2523.4, 2520.8, 2521.0, 95));
  // 5-candle flag
  out.push(C(2521.0, 2521.8, 2520.8, 2521.6, 60));
  out.push(C(2521.6, 2522.4, 2521.3, 2522.2, 52));
  out.push(C(2522.2, 2522.8, 2521.9, 2522.6, 46));
  out.push(C(2522.6, 2523.0, 2522.3, 2522.8, 40));
  out.push(C(2522.8, 2523.2, 2522.5, 2523.0, 36));
  // breakout — looks legit
  out.push(C(2523.0, 2523.2, 2520.4, 2520.6, 110));
  // FAILURE — long green body that closes back above the flag's lower trendline
  out.push(C(2520.6, 2523.6, 2520.5, 2523.4, 145));
  // continues higher, taking out shorts
  out.push(C(2523.4, 2525.0, 2523.2, 2524.8, 105));
  out.push(C(2524.8, 2526.6, 2524.6, 2526.4, 88));
  out.push(C(2526.4, 2527.6, 2526.2, 2527.4, 72));
  return {
    candles: out,
    markers: [
      { kind: 'hline', price: 2521.0, color: '#888', dashed: true, label: 'Flag low' }
    ]
  };
}

// --------------------------------------------------------------------------
// 6. PREMATURE ENTRY DISASTER
// --------------------------------------------------------------------------
function premature() {
  const out = [];
  out.push(C(2540.0, 2540.4, 2539.6, 2540.2, 30));
  out.push(C(2540.2, 2540.3, 2537.6, 2537.8, 90));
  out.push(C(2537.8, 2538.0, 2535.2, 2535.4, 95));
  out.push(C(2535.4, 2535.6, 2532.8, 2533.0, 100));
  out.push(C(2533.0, 2533.2, 2530.4, 2530.6, 95));
  // 5-candle flag
  out.push(C(2530.6, 2531.4, 2530.4, 2531.2, 60));
  out.push(C(2531.2, 2532.0, 2530.9, 2531.8, 52));
  out.push(C(2531.8, 2532.4, 2531.5, 2532.2, 46));
  out.push(C(2532.2, 2532.8, 2531.9, 2532.6, 40));
  out.push(C(2532.6, 2533.0, 2532.3, 2532.8, 36));
  // "trader shorts on breakout candle close" — breakout candle
  out.push(C(2532.8, 2533.0, 2530.2, 2530.4, 105));
  // STOP HUNT — long green WICK above prior flag high (their stop was here)
  out.push(C(2530.4, 2533.4, 2530.2, 2531.6, 130));
  // then continues down WITHOUT them
  out.push(C(2531.6, 2531.8, 2528.6, 2528.8, 95));
  out.push(C(2528.8, 2529.0, 2525.8, 2526.0, 85));
  out.push(C(2526.0, 2526.2, 2523.0, 2523.2, 75));
  return {
    candles: out,
    markers: [
      { kind: 'hline', price: 2533.0, color: '#FF3D5A', dashed: true, label: "Trader's stop (too tight)" }
    ]
  };
}

// --------------------------------------------------------------------------
// 7. VOLUME FAILURE
// --------------------------------------------------------------------------
function volumeFail() {
  const out = [];
  out.push(C(2550.0, 2550.4, 2549.6, 2550.2, 50));
  out.push(C(2550.2, 2550.4, 2547.6, 2547.8, 95));
  out.push(C(2547.8, 2548.0, 2545.2, 2545.4, 100));
  out.push(C(2545.4, 2545.6, 2542.8, 2543.0, 105));
  out.push(C(2543.0, 2543.2, 2540.4, 2540.6, 102));
  // flag with FLAT/RISING volume — buyers accumulating
  out.push(C(2540.6, 2541.4, 2540.4, 2541.2, 70));
  out.push(C(2541.2, 2542.0, 2540.9, 2541.8, 75));
  out.push(C(2541.8, 2542.4, 2541.5, 2542.2, 78));
  out.push(C(2542.2, 2542.8, 2541.9, 2542.6, 82));
  out.push(C(2542.6, 2543.0, 2542.3, 2542.8, 80));
  // breakout w/ LOWER volume than flag avg
  out.push(C(2542.8, 2543.0, 2540.2, 2540.4, 60));
  // drifts back into the flag
  out.push(C(2540.4, 2541.4, 2540.2, 2541.2, 65));
  out.push(C(2541.2, 2542.4, 2540.9, 2542.2, 72));
  out.push(C(2542.2, 2543.4, 2542.0, 2543.2, 80));
  // breaks UP through flag top
  out.push(C(2543.2, 2545.4, 2543.0, 2545.2, 110));
  out.push(C(2545.2, 2547.0, 2545.0, 2546.8, 90));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 8. BEAR FLAG INSIDE AN UPTREND (DON'T TRADE)
// --------------------------------------------------------------------------
function inUptrend() {
  // Show only the local bear flag setup; the inset shows the larger uptrend
  const out = [];
  out.push(C(2562.0, 2563.0, 2561.6, 2562.8, 60));
  out.push(C(2562.8, 2563.4, 2562.4, 2562.6, 50));
  // 4-candle small pole
  out.push(C(2562.6, 2562.8, 2560.4, 2560.6, 80));
  out.push(C(2560.6, 2560.8, 2558.6, 2558.8, 88));
  out.push(C(2558.8, 2559.0, 2557.0, 2557.2, 92));
  out.push(C(2557.2, 2557.4, 2555.6, 2555.8, 90));
  // 5-candle flag
  out.push(C(2555.8, 2556.6, 2555.6, 2556.4, 55));
  out.push(C(2556.4, 2557.2, 2556.1, 2557.0, 50));
  out.push(C(2557.0, 2557.6, 2556.7, 2557.4, 45));
  out.push(C(2557.4, 2558.0, 2557.1, 2557.8, 42));
  out.push(C(2557.8, 2558.4, 2557.5, 2558.2, 38));
  // brief breakdown
  out.push(C(2558.2, 2558.4, 2555.2, 2555.4, 95));
  // larger uptrend resumes — crushes the short
  out.push(C(2555.4, 2557.0, 2555.2, 2557.0, 80));
  out.push(C(2557.0, 2559.4, 2556.8, 2559.2, 110));
  out.push(C(2559.2, 2562.0, 2559.0, 2561.8, 130));
  out.push(C(2561.8, 2564.4, 2561.6, 2564.2, 145));
  out.push(C(2564.2, 2566.6, 2564.0, 2566.4, 130));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 9. TWO-STAGE BEAR FLAG (STACKED)
// --------------------------------------------------------------------------
function twoStage() {
  const out = [];
  // First pole
  out.push(C(2580.0, 2580.4, 2579.6, 2580.2, 35));
  out.push(C(2580.2, 2580.4, 2577.4, 2577.6, 90));
  out.push(C(2577.6, 2577.8, 2574.8, 2575.0, 100));
  out.push(C(2575.0, 2575.2, 2572.2, 2572.4, 105));
  // First flag
  out.push(C(2572.4, 2573.2, 2572.2, 2573.0, 60));
  out.push(C(2573.0, 2573.8, 2572.7, 2573.6, 52));
  out.push(C(2573.6, 2574.2, 2573.3, 2574.0, 46));
  out.push(C(2574.0, 2574.6, 2573.7, 2574.4, 40));
  // First breakout
  out.push(C(2574.4, 2574.6, 2571.4, 2571.6, 130));
  // Drop continues
  out.push(C(2571.6, 2571.8, 2569.0, 2569.2, 95));
  out.push(C(2569.2, 2569.4, 2566.6, 2566.8, 90));
  // SECOND flag forms at lower level
  out.push(C(2566.8, 2567.6, 2566.6, 2567.4, 55));
  out.push(C(2567.4, 2568.2, 2567.1, 2568.0, 48));
  out.push(C(2568.0, 2568.6, 2567.7, 2568.4, 42));
  out.push(C(2568.4, 2569.0, 2568.1, 2568.8, 38));
  // SECOND breakout — also works
  out.push(C(2568.8, 2569.0, 2566.0, 2566.2, 120));
  out.push(C(2566.2, 2566.4, 2563.6, 2563.8, 88));
  out.push(C(2563.8, 2564.0, 2561.4, 2561.6, 78));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 10. WIDE FLAG SIDEWAYS TOO LONG
// --------------------------------------------------------------------------
function tooLong() {
  const out = [];
  out.push(C(2600.0, 2600.4, 2599.6, 2600.2, 32));
  out.push(C(2600.2, 2600.3, 2597.6, 2597.8, 90));
  out.push(C(2597.8, 2598.0, 2595.2, 2595.4, 100));
  out.push(C(2595.4, 2595.6, 2592.6, 2592.8, 102));
  out.push(C(2592.8, 2593.0, 2590.4, 2590.6, 95));
  // 13-candle sideways flag — pattern decays
  for (let i = 0; i < 13; i++) {
    const base = 2590.6 + (i % 3 === 0 ? 1.4 : i % 3 === 1 ? 1.6 : 1.0);
    const op = base - 0.4 + (Math.sin(i) * 0.4);
    const cl = base - 0.1 + (Math.cos(i) * 0.4);
    const hi = Math.max(op, cl) + 0.4;
    const lo = Math.min(op, cl) - 0.3;
    out.push(C(op, hi, lo, cl, 50 - i * 2));
  }
  // weak breakout
  out.push(C(2591.0, 2591.2, 2589.6, 2589.8, 60));
  // reverses up
  out.push(C(2589.8, 2592.4, 2589.6, 2592.2, 90));
  out.push(C(2592.2, 2594.0, 2592.0, 2593.8, 95));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 11. STEEP FLAG (WARNING SIGN)
// --------------------------------------------------------------------------
function steep() {
  const out = [];
  out.push(C(2620.0, 2620.4, 2619.6, 2620.2, 32));
  out.push(C(2620.2, 2620.3, 2617.4, 2617.6, 90));
  out.push(C(2617.6, 2617.8, 2614.6, 2614.8, 100));
  out.push(C(2614.8, 2615.0, 2611.6, 2611.8, 110));
  out.push(C(2611.8, 2612.0, 2608.4, 2608.6, 105));
  // STEEP rally — buyers aggressive
  out.push(C(2608.6, 2610.4, 2608.4, 2610.2, 80));
  out.push(C(2610.2, 2612.4, 2610.0, 2612.2, 95));
  out.push(C(2612.2, 2614.6, 2612.0, 2614.4, 110));
  out.push(C(2614.4, 2617.0, 2614.2, 2616.8, 125));
  // breakout up — full reversal
  out.push(C(2616.8, 2620.0, 2616.6, 2619.8, 140));
  out.push(C(2619.8, 2622.4, 2619.6, 2622.2, 110));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 12. PRE-NEWS FAKE-OUT
// --------------------------------------------------------------------------
function preNews() {
  const out = [];
  out.push(C(2640.0, 2640.4, 2639.6, 2640.2, 30));
  out.push(C(2640.2, 2640.3, 2637.6, 2637.8, 90));
  out.push(C(2637.8, 2638.0, 2635.2, 2635.4, 95));
  out.push(C(2635.4, 2635.6, 2632.8, 2633.0, 100));
  out.push(C(2633.0, 2633.2, 2630.4, 2630.6, 95));
  out.push(C(2630.6, 2631.4, 2630.4, 2631.2, 55));
  out.push(C(2631.2, 2632.0, 2630.9, 2631.8, 48));
  out.push(C(2631.8, 2632.4, 2631.5, 2632.2, 42));
  out.push(C(2632.2, 2632.8, 2631.9, 2632.6, 38));
  // breakout — looks valid
  out.push(C(2632.6, 2632.8, 2629.6, 2629.8, 110));
  // NEWS DROPS — massive green spike
  out.push(C(2629.8, 2638.0, 2629.6, 2637.6, 280));
  out.push(C(2637.6, 2641.4, 2637.4, 2641.0, 220));
  out.push(C(2641.0, 2643.2, 2640.8, 2643.0, 180));
  return {
    candles: out,
    newsAtIndex: 10
  };
}

// --------------------------------------------------------------------------
// EXPORTS
// --------------------------------------------------------------------------
export const examples = [
  {
    n: 1,
    title: 'The Textbook Bear Flag',
    pattern: textbook(),
    caption:
      "Sharp 4-candle pole drops 10 ticks. 6-candle flag drifts up at a shallow angle on visibly fading volume. Breakout candle is the longest red body on the chart and prints the highest volume — both confirmations align. Entry is the close of that candle, stop above the flag's high, target a measured move down."
  },
  {
    n: 2,
    title: 'The Tight Bear Flag (Fast Trend Day)',
    pattern: tight(),
    caption:
      "On strong trend days the flag barely forms — only 3 pole candles and a 4-candle pause before continuation. Don't wait for textbook duration. If the structure (sharp pole, shallow drift, declining volume, body close below) is there, take the trade. Strong days reward fast triggers."
  },
  {
    n: 3,
    title: 'The Loose Bear Flag (Acceptable but Riskier)',
    pattern: loose(),
    caption:
      "Wider flags have more candles, more wicks, and more noise. The pattern is still valid but less precise. Wait for the breakout candle's CLOSE, not just a wick poking through the trendline. Smaller size or skip if the day's range is already wide."
  },
  {
    n: 4,
    title: 'The Retest Entry (Highest Probability)',
    pattern: retest(),
    caption:
      "Pattern breaks down. Price drops 3-4 ticks. Then rallies UP to the broken trendline, touches it from below, gets rejected with a red candle, and continues lower. Three entry points are marked: yellow = aggressive (on break), green = confirmation (next candle close), cyan = retest (rejection from underside). The retest is the highest-probability entry because the pattern has now been confirmed twice."
  },
  {
    n: 5,
    title: 'The FAILED Bear Flag (Bear Trap)',
    pattern: failed(),
    caption:
      "Looks identical to a real bear flag right through the breakout. Then the next candle prints a long green body that closes back ABOVE the flag's lower trendline. Shorts are trapped. Price runs higher. This is exactly why you wait for the candle AFTER the breakout. The breakout candle alone is not confirmation."
  },
  {
    n: 6,
    title: 'The Premature Entry Disaster',
    pattern: premature(),
    caption:
      "Trader shorts on the breakout candle's close with stop just above the breakout candle's high. Next candle is a long green wick that spikes through the stop — then price continues lower without him. He was right about direction but wrong about timing AND stop placement. Two errors compounding."
  },
  {
    n: 7,
    title: 'Volume Failure',
    pattern: volumeFail(),
    caption:
      "Bear flag forms perfectly. Volume during the flag is FLAT/RISING (someone was accumulating long). Breakout candle has SMALLER volume than the flag's average. Five candles later price drifts back into the flag and breaks out the TOP. Skip these 80% of the time. Take half-size 20% of the time only if the rest of the chart is a strong downtrend."
  },
  {
    n: 8,
    title: "Bear Flag Inside an Uptrend (Don't Trade)",
    pattern: inUptrend(),
    caption:
      "On the small inset chart, the larger trend is clearly UP. Inside that uptrend, a small bear flag forms. It breaks down briefly — then the larger uptrend resumes and crushes the short. Bear flags only work inside established downtrends. Always check the larger context (zoom out one timeframe) before entering."
  },
  {
    n: 9,
    title: 'The Two-Stage Bear Flag (Bonus Continuation)',
    pattern: twoStage(),
    caption:
      "First bear flag completes, price drops to a new low. Then a SECOND bear flag forms at that lower level. Both work. Strong trend days produce stacked bear flags. After the first one fires successfully, watch the lower zone for a second one. Same rules apply — pole, flag, body close below, volume confirmation."
  },
  {
    n: 10,
    title: 'The Wide Flag That Went Sideways Too Long',
    pattern: tooLong(),
    caption:
      "Pole forms cleanly. Flag goes sideways for 13+ candles. The sellers' urgency dissipates — the longer the pause, the more buyers have time to step in. Eventually the flag breaks down weakly, then reverses up. Time kills bear flags. If the flag drifts beyond ~8-10 candles on a 2-min, sellers have lost their edge. Skip it."
  },
  {
    n: 11,
    title: 'The Steep Flag (Warning Sign)',
    pattern: steep(),
    caption:
      "Pole forms. Flag rallies STEEPLY upward — much more than a shallow 15° drift. Steep rallies in the flag mean buyers are aggressive, not just passive profit-takers. This setup often becomes a reversal, not a continuation. Wait for proof (a clear failure of the rally) or skip the trade entirely."
  },
  {
    n: 12,
    title: 'The Pre-Earnings / Pre-News Fake-Out',
    pattern: preNews(),
    caption:
      "Bear flag forms 5 minutes before a scheduled news release. Breakout looks valid. News drops, price rips up violently. ALWAYS check the economic calendar before entering. Never enter a 2-min pattern within 5 minutes of FOMC, NFP, CPI, or earnings releases. Scheduled news invalidates technical setups."
  }
];
