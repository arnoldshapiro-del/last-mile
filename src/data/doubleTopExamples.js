// Twelve hand-tuned double top exhibits.
// Each candle is a real OHLC tuple — body, wicks, and volume are all proportional.
// `marker` arrays add labeled price lines (entry/stop/target etc).
// All charts feature an explicit horizontal NECKLINE drawn at the trough body close.

const C = (o, h, l, c, vol) => ({ o, h, l, c, vol });

// --------------------------------------------------------------------------
// 1. THE TEXTBOOK DOUBLE TOP — peaks within 2 ticks, declining volume
// --------------------------------------------------------------------------
function textbook() {
  const out = [];
  // Lead-in rally to first peak
  out.push(C(2480.0, 2482.0, 2479.6, 2481.6, 60));
  out.push(C(2481.6, 2484.4, 2481.2, 2484.0, 78));
  out.push(C(2484.0, 2487.6, 2483.6, 2487.2, 92));
  // FIRST PEAK at 2490.4 (idx 3)
  out.push(C(2487.2, 2490.4, 2486.8, 2490.0, 130));
  // Reject down — sellers
  out.push(C(2490.0, 2490.2, 2486.6, 2486.8, 95));
  out.push(C(2486.8, 2487.0, 2483.4, 2483.6, 80));
  // Trough — body close at 2482.0 (idx 6)
  out.push(C(2483.6, 2483.8, 2481.8, 2482.0, 65));
  // Second rally — buyers retest
  out.push(C(2482.0, 2484.6, 2481.8, 2484.4, 60));
  out.push(C(2484.4, 2487.6, 2484.2, 2487.4, 70));
  // SECOND PEAK at 2490.2 (idx 9) — within 2 ticks of first
  out.push(C(2487.4, 2490.2, 2487.0, 2489.8, 85)); // visibly lower vol than first peak (130 -> 85)
  // Sellers reject again
  out.push(C(2489.8, 2490.0, 2486.4, 2486.6, 88));
  out.push(C(2486.6, 2486.8, 2483.2, 2483.4, 75));
  // BREAKOUT — body close decisively below 2482.0 neckline (idx 12)
  out.push(C(2483.4, 2483.6, 2480.0, 2480.2, 145));
  // Continuation
  out.push(C(2480.2, 2480.4, 2477.4, 2477.6, 110));
  out.push(C(2477.6, 2477.8, 2474.6, 2474.8, 95));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 2. TEST FAILURE — second peak slightly higher then immediately reverses
// --------------------------------------------------------------------------
function testFailure() {
  const out = [];
  out.push(C(2510.0, 2512.0, 2509.6, 2511.6, 55));
  out.push(C(2511.6, 2514.4, 2511.2, 2514.0, 70));
  out.push(C(2514.0, 2517.4, 2513.6, 2517.0, 88));
  // FIRST PEAK at 2520.4 (idx 3)
  out.push(C(2517.0, 2520.4, 2516.8, 2520.0, 120));
  out.push(C(2520.0, 2520.2, 2516.6, 2516.8, 90));
  out.push(C(2516.8, 2517.0, 2513.4, 2513.6, 78));
  // Trough — body close 2512.0 (idx 6)
  out.push(C(2513.6, 2513.8, 2511.8, 2512.0, 60));
  out.push(C(2512.0, 2514.4, 2511.8, 2514.2, 58));
  out.push(C(2514.2, 2517.6, 2514.0, 2517.4, 70));
  // SECOND PEAK BRIEFLY HIGHER — wick to 2522.0, body close lower (idx 9)
  out.push(C(2517.4, 2522.0, 2517.0, 2519.8, 95));
  // Immediate reversal — sellers attack
  out.push(C(2519.8, 2520.0, 2516.0, 2516.2, 105));
  out.push(C(2516.2, 2516.4, 2513.0, 2513.2, 95));
  // BREAKOUT (idx 12)
  out.push(C(2513.2, 2513.4, 2510.0, 2510.2, 160));
  out.push(C(2510.2, 2510.4, 2507.0, 2507.2, 120));
  out.push(C(2507.2, 2507.4, 2504.0, 2504.2, 100));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 3. BEARISH DIVERGENCE — second peak LOWER than first
// --------------------------------------------------------------------------
function bearishDivergence() {
  const out = [];
  out.push(C(2540.0, 2542.0, 2539.6, 2541.6, 60));
  out.push(C(2541.6, 2544.4, 2541.2, 2544.0, 75));
  out.push(C(2544.0, 2547.6, 2543.6, 2547.2, 90));
  // FIRST PEAK at 2550.4 (idx 3)
  out.push(C(2547.2, 2550.4, 2546.8, 2550.0, 125));
  out.push(C(2550.0, 2550.2, 2546.6, 2546.8, 95));
  out.push(C(2546.8, 2547.0, 2543.4, 2543.6, 80));
  // Trough body close 2542.0 (idx 6)
  out.push(C(2543.6, 2543.8, 2541.8, 2542.0, 65));
  out.push(C(2542.0, 2544.4, 2541.8, 2544.2, 55));
  out.push(C(2544.2, 2546.8, 2544.0, 2546.6, 60));
  // SECOND PEAK LOWER at 2548.6 (idx 9) — sellers rejecting earlier
  out.push(C(2546.6, 2548.6, 2546.4, 2548.2, 75));
  out.push(C(2548.2, 2548.4, 2545.0, 2545.2, 90));
  out.push(C(2545.2, 2545.4, 2543.0, 2543.2, 85));
  // BREAKOUT (idx 12)
  out.push(C(2543.2, 2543.4, 2540.0, 2540.2, 140));
  out.push(C(2540.2, 2540.4, 2537.0, 2537.2, 110));
  out.push(C(2537.2, 2537.4, 2534.0, 2534.2, 92));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 4. RETEST ENTRY — break, drop, then rally back to neckline from below
// --------------------------------------------------------------------------
function retest() {
  const out = [];
  out.push(C(2570.0, 2572.0, 2569.6, 2571.6, 55));
  out.push(C(2571.6, 2574.4, 2571.2, 2574.0, 70));
  out.push(C(2574.0, 2577.6, 2573.6, 2577.2, 88));
  // FIRST PEAK 2580.4 (idx 3)
  out.push(C(2577.2, 2580.4, 2576.8, 2580.0, 125));
  out.push(C(2580.0, 2580.2, 2576.6, 2576.8, 92));
  out.push(C(2576.8, 2577.0, 2573.4, 2573.6, 78));
  // Trough body 2572.0 (idx 6)
  out.push(C(2573.6, 2573.8, 2571.8, 2572.0, 65));
  out.push(C(2572.0, 2574.4, 2571.8, 2574.2, 60));
  out.push(C(2574.2, 2577.4, 2573.8, 2577.0, 72));
  // SECOND PEAK 2580.2 (idx 9)
  out.push(C(2577.0, 2580.2, 2576.6, 2579.6, 86));
  out.push(C(2579.6, 2579.8, 2575.6, 2575.8, 88));
  out.push(C(2575.8, 2576.0, 2573.0, 2573.2, 78));
  // BREAKOUT below neckline (idx 12)
  out.push(C(2573.2, 2573.4, 2570.6, 2570.8, 130));
  // Drop
  out.push(C(2570.8, 2570.8, 2568.4, 2568.6, 100));
  // RETEST — rally back UP touches the broken neckline (idx 14)
  out.push(C(2568.6, 2572.2, 2568.6, 2571.8, 75));
  // Rejection from underside — red candle
  out.push(C(2571.8, 2572.0, 2569.4, 2569.6, 110));
  out.push(C(2569.6, 2569.8, 2566.4, 2566.6, 100));
  out.push(C(2566.6, 2566.8, 2563.4, 2563.6, 90));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 5. FAILED — became triple top, broke UP
// --------------------------------------------------------------------------
function tripleFail() {
  const out = [];
  out.push(C(2600.0, 2602.0, 2599.6, 2601.6, 55));
  out.push(C(2601.6, 2604.4, 2601.2, 2604.0, 70));
  out.push(C(2604.0, 2607.6, 2603.6, 2607.2, 88));
  // FIRST PEAK 2610.4 (idx 3)
  out.push(C(2607.2, 2610.4, 2606.8, 2610.0, 120));
  out.push(C(2610.0, 2610.2, 2606.6, 2606.8, 92));
  out.push(C(2606.8, 2607.0, 2603.4, 2603.6, 78));
  // Trough 2602.0 (idx 6)
  out.push(C(2603.6, 2603.8, 2601.8, 2602.0, 60));
  out.push(C(2602.0, 2604.4, 2601.8, 2604.2, 58));
  out.push(C(2604.2, 2607.4, 2603.8, 2607.0, 72));
  // SECOND PEAK 2610.2 (idx 9)
  out.push(C(2607.0, 2610.2, 2606.6, 2609.6, 88));
  out.push(C(2609.6, 2609.8, 2606.0, 2606.2, 78));
  // Pulls back briefly but neckline holds
  out.push(C(2606.2, 2606.4, 2603.6, 2603.8, 70));
  out.push(C(2603.8, 2604.0, 2602.4, 2603.6, 60));
  // Stalls at neckline (no body close below)
  out.push(C(2603.6, 2606.6, 2603.4, 2606.2, 75));
  out.push(C(2606.2, 2609.4, 2606.0, 2609.0, 85));
  // THIRD PEAK actually breaks UP through resistance (idx 15)
  out.push(C(2609.0, 2614.6, 2608.8, 2614.2, 130));
  out.push(C(2614.2, 2618.0, 2613.8, 2617.6, 115));
  out.push(C(2617.6, 2620.4, 2617.2, 2619.8, 95));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 6. PREMATURE SHORT — stopped at second peak wick spike
// --------------------------------------------------------------------------
function premature() {
  const out = [];
  out.push(C(2630.0, 2632.0, 2629.6, 2631.6, 55));
  out.push(C(2631.6, 2634.4, 2631.2, 2634.0, 70));
  out.push(C(2634.0, 2637.6, 2633.6, 2637.2, 88));
  // FIRST PEAK 2640.4 (idx 3)
  out.push(C(2637.2, 2640.4, 2636.8, 2640.0, 120));
  out.push(C(2640.0, 2640.2, 2636.6, 2636.8, 90));
  out.push(C(2636.8, 2637.0, 2633.4, 2633.6, 78));
  // Trough 2632.0 (idx 6)
  out.push(C(2633.6, 2633.8, 2631.8, 2632.0, 62));
  out.push(C(2632.0, 2634.4, 2631.8, 2634.2, 55));
  out.push(C(2634.2, 2637.6, 2634.0, 2637.4, 70));
  // SECOND PEAK with WICK 4-5 ticks above 1st peak (stop hunt) idx 9
  out.push(C(2637.4, 2641.0, 2637.2, 2639.4, 110));
  // Then real rejection — pattern still works
  out.push(C(2639.4, 2639.6, 2636.0, 2636.2, 95));
  out.push(C(2636.2, 2636.4, 2633.0, 2633.2, 85));
  out.push(C(2633.2, 2633.4, 2630.4, 2630.6, 130));
  out.push(C(2630.6, 2630.8, 2627.4, 2627.6, 105));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 7. VOLUME FAILURE — neckline breaks but on weak volume, then reverses
// --------------------------------------------------------------------------
function volumeFail() {
  const out = [];
  out.push(C(2660.0, 2662.0, 2659.6, 2661.6, 55));
  out.push(C(2661.6, 2664.4, 2661.2, 2664.0, 65));
  out.push(C(2664.0, 2667.6, 2663.6, 2667.2, 80));
  // FIRST PEAK 2670.4 (idx 3)
  out.push(C(2667.2, 2670.4, 2666.8, 2670.0, 90));
  out.push(C(2670.0, 2670.2, 2666.6, 2666.8, 75));
  out.push(C(2666.8, 2667.0, 2663.4, 2663.6, 65));
  // Trough 2662.0 (idx 6)
  out.push(C(2663.6, 2663.8, 2661.8, 2662.0, 55));
  out.push(C(2662.0, 2664.4, 2661.8, 2664.2, 50));
  out.push(C(2664.2, 2667.6, 2664.0, 2667.4, 60));
  // SECOND PEAK 2670.2 (idx 9)
  out.push(C(2667.4, 2670.2, 2667.0, 2669.6, 70));
  out.push(C(2669.6, 2669.8, 2666.0, 2666.2, 60));
  out.push(C(2666.2, 2666.4, 2663.0, 2663.2, 55));
  // BREAKOUT but on WEAK volume (idx 12, vol only 50)
  out.push(C(2663.2, 2663.4, 2661.4, 2661.6, 50));
  // Drifts sideways then reverses
  out.push(C(2661.6, 2663.0, 2661.2, 2662.6, 45));
  out.push(C(2662.6, 2664.4, 2662.4, 2664.0, 55));
  out.push(C(2664.0, 2666.4, 2663.8, 2666.0, 60));
  out.push(C(2666.0, 2668.6, 2665.8, 2668.2, 70));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 8. INSIDE STRONG UPTREND — don't trade
// --------------------------------------------------------------------------
function inUptrend() {
  const out = [];
  // The visible chart starts mid-uptrend already
  out.push(C(2690.0, 2693.0, 2689.6, 2692.6, 70));
  out.push(C(2692.6, 2695.4, 2692.2, 2695.0, 78));
  out.push(C(2695.0, 2698.0, 2694.6, 2697.6, 85));
  // FIRST PEAK 2700.4 (idx 3) — but in larger context just a pullback shelf
  out.push(C(2697.6, 2700.4, 2697.2, 2700.0, 100));
  out.push(C(2700.0, 2700.2, 2697.4, 2697.6, 75));
  out.push(C(2697.6, 2697.8, 2695.0, 2695.2, 65));
  // Trough 2694.0 (idx 6)
  out.push(C(2695.2, 2695.4, 2693.8, 2694.0, 55));
  out.push(C(2694.0, 2696.0, 2693.8, 2695.8, 60));
  out.push(C(2695.8, 2698.4, 2695.6, 2698.2, 70));
  // SECOND PEAK 2700.2 (idx 9)
  out.push(C(2698.2, 2700.2, 2697.8, 2699.6, 80));
  out.push(C(2699.6, 2699.8, 2696.6, 2696.8, 75));
  // Brief break below neckline (idx 11)
  out.push(C(2696.8, 2697.0, 2693.2, 2693.4, 90));
  // Then UPTREND RESUMES — large green candles
  out.push(C(2693.4, 2697.6, 2693.2, 2697.2, 110));
  out.push(C(2697.2, 2702.4, 2697.0, 2702.0, 130));
  out.push(C(2702.0, 2706.8, 2701.8, 2706.4, 140));
  out.push(C(2706.4, 2710.6, 2706.2, 2710.2, 130));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 9. TIGHT — only 8-10 candles between peaks, fast reversal
// --------------------------------------------------------------------------
function tight() {
  const out = [];
  out.push(C(2720.0, 2723.0, 2719.6, 2722.6, 70));
  out.push(C(2722.6, 2727.0, 2722.2, 2726.6, 95));
  // FIRST PEAK 2730.0 (idx 2)
  out.push(C(2726.6, 2730.0, 2726.4, 2729.6, 130));
  out.push(C(2729.6, 2729.8, 2725.6, 2725.8, 95));
  // Trough 2724.0 (idx 4)
  out.push(C(2725.8, 2726.0, 2723.8, 2724.0, 70));
  out.push(C(2724.0, 2727.6, 2723.8, 2727.4, 80));
  // SECOND PEAK 2729.8 (idx 6) — tight, only 4 candles apart
  out.push(C(2727.4, 2729.8, 2727.2, 2729.4, 100));
  out.push(C(2729.4, 2729.6, 2725.6, 2725.8, 88));
  // BREAKOUT (idx 8)
  out.push(C(2725.8, 2726.0, 2722.4, 2722.6, 130));
  out.push(C(2722.6, 2722.8, 2720.0, 2720.2, 100));
  out.push(C(2720.2, 2720.4, 2718.0, 2718.2, 88));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 10. WIDE — 25-30 candles between peaks, slower bigger move
// --------------------------------------------------------------------------
function wide() {
  const out = [];
  out.push(C(2750.0, 2752.0, 2749.6, 2751.6, 50));
  out.push(C(2751.6, 2754.0, 2751.2, 2753.6, 60));
  out.push(C(2753.6, 2756.6, 2753.2, 2756.2, 75));
  out.push(C(2756.2, 2758.4, 2755.8, 2758.0, 85));
  // FIRST PEAK 2762.0 (idx 4)
  out.push(C(2758.0, 2762.0, 2757.6, 2761.6, 115));
  out.push(C(2761.6, 2761.8, 2758.4, 2758.6, 95));
  out.push(C(2758.6, 2758.8, 2755.4, 2755.6, 80));
  out.push(C(2755.6, 2755.8, 2752.4, 2752.6, 75));
  // Trough 2750.0 (idx 8)
  out.push(C(2752.6, 2752.8, 2749.8, 2750.0, 65));
  // Long flat consolidation
  out.push(C(2750.0, 2751.4, 2749.8, 2751.0, 50));
  out.push(C(2751.0, 2752.6, 2750.6, 2752.2, 55));
  out.push(C(2752.2, 2754.0, 2751.8, 2753.6, 60));
  out.push(C(2753.6, 2754.6, 2753.0, 2754.2, 50));
  out.push(C(2754.2, 2755.6, 2753.8, 2755.2, 55));
  out.push(C(2755.2, 2757.0, 2754.8, 2756.6, 60));
  out.push(C(2756.6, 2758.2, 2756.2, 2757.8, 65));
  out.push(C(2757.8, 2759.4, 2757.4, 2759.0, 70));
  out.push(C(2759.0, 2760.6, 2758.6, 2760.2, 78));
  // SECOND PEAK 2761.8 (idx 18)
  out.push(C(2760.2, 2761.8, 2759.8, 2761.4, 90));
  out.push(C(2761.4, 2761.6, 2758.4, 2758.6, 80));
  out.push(C(2758.6, 2758.8, 2755.4, 2755.6, 75));
  out.push(C(2755.6, 2755.8, 2752.4, 2752.6, 80));
  // BREAKOUT (idx 22)
  out.push(C(2752.6, 2752.8, 2749.4, 2749.6, 130));
  out.push(C(2749.6, 2749.8, 2746.4, 2746.6, 105));
  out.push(C(2746.6, 2746.8, 2743.4, 2743.6, 92));
  out.push(C(2743.6, 2743.8, 2740.4, 2740.6, 88));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 11. TIME DECAY — peaks too far apart, weak follow-through
// --------------------------------------------------------------------------
function timeDecay() {
  const out = [];
  // First peak block
  out.push(C(2780.0, 2783.0, 2779.6, 2782.6, 70));
  out.push(C(2782.6, 2786.4, 2782.2, 2786.0, 90));
  // FIRST PEAK 2790.4 (idx 2)
  out.push(C(2786.0, 2790.4, 2785.6, 2790.0, 115));
  out.push(C(2790.0, 2790.2, 2786.4, 2786.6, 90));
  out.push(C(2786.6, 2786.8, 2783.4, 2783.6, 75));
  // Trough 2782.0 (idx 5)
  out.push(C(2783.6, 2783.8, 2781.8, 2782.0, 60));
  // Very long sideways drift
  out.push(C(2782.0, 2783.4, 2781.6, 2783.0, 50));
  out.push(C(2783.0, 2784.4, 2782.6, 2784.0, 50));
  out.push(C(2784.0, 2785.4, 2783.6, 2785.0, 48));
  out.push(C(2785.0, 2786.4, 2784.6, 2786.0, 45));
  out.push(C(2786.0, 2787.4, 2785.6, 2787.0, 50));
  out.push(C(2787.0, 2788.4, 2786.6, 2788.0, 52));
  out.push(C(2788.0, 2789.4, 2787.6, 2789.0, 55));
  out.push(C(2789.0, 2790.4, 2788.6, 2790.0, 60));
  out.push(C(2790.0, 2791.0, 2789.6, 2790.6, 58));
  out.push(C(2790.6, 2791.0, 2789.8, 2790.6, 50));
  // SECOND PEAK 2790.2 (idx 16)
  out.push(C(2790.6, 2790.8, 2789.6, 2790.0, 55));
  out.push(C(2790.0, 2790.2, 2787.6, 2787.8, 70));
  out.push(C(2787.8, 2788.0, 2785.4, 2785.6, 60));
  out.push(C(2785.6, 2785.8, 2783.4, 2783.6, 55));
  // BREAKOUT but weak (idx 20)
  out.push(C(2783.6, 2783.8, 2781.4, 2781.6, 75));
  // Quick reversal
  out.push(C(2781.6, 2783.6, 2781.4, 2783.4, 65));
  out.push(C(2783.4, 2785.6, 2783.2, 2785.4, 70));
  out.push(C(2785.4, 2787.6, 2785.2, 2787.4, 75));
  return { candles: out };
}

// --------------------------------------------------------------------------
// 12. OPENING RANGE — first peak ~9:45, second peak ~10:30
// --------------------------------------------------------------------------
function openingRange() {
  const out = [];
  // 9:32-9:44 — opening drive
  out.push(C(2810.0, 2812.6, 2809.6, 2812.2, 80));
  out.push(C(2812.2, 2815.4, 2811.8, 2815.0, 110));
  out.push(C(2815.0, 2818.6, 2814.6, 2818.2, 130));
  // FIRST PEAK 2822.0 (~9:45) (idx 3)
  out.push(C(2818.2, 2822.0, 2817.8, 2821.6, 140));
  // Pullback toward morning low
  out.push(C(2821.6, 2821.8, 2818.4, 2818.6, 100));
  out.push(C(2818.6, 2818.8, 2815.4, 2815.6, 85));
  out.push(C(2815.6, 2815.8, 2813.0, 2813.2, 75));
  // MORNING LOW / future neckline 2812.0 (idx 7)
  out.push(C(2813.2, 2813.4, 2811.8, 2812.0, 70));
  // Second wave rally during 10:00-10:30
  out.push(C(2812.0, 2814.0, 2811.8, 2813.8, 65));
  out.push(C(2813.8, 2816.4, 2813.6, 2816.2, 75));
  out.push(C(2816.2, 2819.6, 2816.0, 2819.4, 90));
  // SECOND PEAK 2821.8 (~10:30) (idx 11)
  out.push(C(2819.4, 2821.8, 2819.0, 2821.4, 105));
  // Rejection
  out.push(C(2821.4, 2821.6, 2818.6, 2818.8, 95));
  out.push(C(2818.8, 2819.0, 2815.6, 2815.8, 90));
  out.push(C(2815.8, 2816.0, 2813.0, 2813.2, 85));
  // BREAKOUT — neckline at morning low (idx 15)
  out.push(C(2813.2, 2813.4, 2810.4, 2810.6, 145));
  out.push(C(2810.6, 2810.8, 2807.6, 2807.8, 110));
  out.push(C(2807.8, 2808.0, 2804.6, 2804.8, 95));
  return { candles: out };
}

// --------------------------------------------------------------------------
// ANNOTATION HELPER + EXPORT
// --------------------------------------------------------------------------
function ann(opts) {
  return {
    peak1Idx: opts.peak1[0],
    peak1Price: opts.peak1[1],
    peak2Idx: opts.peak2[0],
    peak2Price: opts.peak2[1],
    necklinePrice: opts.neckline,
    necklineFromIdx: opts.necklineFromIdx ?? 0,
    necklineToIdx: opts.necklineToIdx,
    breakoutIdx: opts.breakout?.[0],
    breakoutPrice: opts.breakout?.[1],
    failed: !!opts.failed,
    failReason: opts.failReason,
    retestIdx: opts.retest,
    thirdPeakIdx: opts.thirdPeak?.[0],
    thirdPeakPrice: opts.thirdPeak?.[1],
    inset: !!opts.inset,
    rsiDivergence: !!opts.rsiDivergence,
    timeLabels: opts.timeLabels,
    showM: opts.showM !== false,
    showHeightBracket: opts.showHeightBracket !== false,
    tradeBracket: opts.tradeBracket
  };
}

export const examples = [
  {
    n: 1,
    title: 'The Textbook Double Top',
    pattern: { ...textbook(), annotation: ann({
      peak1: [3, 2490.4], peak2: [9, 2490.2], neckline: 2482.0,
      breakout: [12, 2480.2],
      tradeBracket: { entryIdx: 12, entryPrice: 2480.2, stopPrice: 2491.0, targetPrice: 2473.6 }
    })},
    caption:
      "Two peaks within 2 ticks of each other, declining volume on the second peak (130 → 85), and a clean neckline break with rising volume. The break candle is the longest red body and prints the highest volume on the chart. Take this without overthinking. Stop above higher peak, target = pattern height projected down."
  },
  {
    n: 2,
    title: 'The Test Failure (Slightly Higher Second Peak) — Most Reliable',
    pattern: { ...testFailure(), annotation: ann({
      peak1: [3, 2520.4], peak2: [9, 2522.0], neckline: 2512.0,
      breakout: [12, 2510.2],
      tradeBracket: { entryIdx: 12, entryPrice: 2510.2, stopPrice: 2522.6, targetPrice: 2502.0 }
    })},
    caption:
      "Counter-intuitive but true: when the second peak briefly exceeds the first then immediately fails, this is the highest-probability double top. The brief overshoot stops out aggressive shorts AND traps the latest longs — both groups become forced sellers when it reverses. Called a 'test failure' or 'stop run'. Highest reliability of all double top variants."
  },
  {
    n: 3,
    title: 'The Bearish Divergence Double Top',
    pattern: { ...bearishDivergence(), annotation: ann({
      peak1: [3, 2550.4], peak2: [9, 2548.6], neckline: 2542.0,
      breakout: [12, 2540.2],
      rsiDivergence: true,
      tradeBracket: { entryIdx: 12, entryPrice: 2540.2, stopPrice: 2551.0, targetPrice: 2531.8 }
    })},
    caption:
      "When the second peak fails to even reach the first, momentum has already left. Sellers are rejecting earlier than they did the first time — RSI confirms by making a lower high. Buyers ran out of fuel two ticks before the prior level. Strong setup with confirmation from both price and indicator."
  },
  {
    n: 4,
    title: 'The Retest Entry (Highest Probability)',
    pattern: { ...retest(), annotation: ann({
      peak1: [3, 2580.4], peak2: [9, 2580.2], neckline: 2572.0,
      breakout: [12, 2570.8], retest: 14
    })},
    caption:
      "Pattern breaks down (idx 12). Price drops 3-5 ticks below neckline. Then rallies back UP to the neckline from below (idx 14), touches it, gets rejected with a red candle, and continues lower. Three entry tiers: yellow=Tier 1 aggressive (on break), green=Tier 2 confirmation (close after break), cyan=Tier 3 retest (rejection from underside). The retest is the textbook 'sell the bounce' entry. Broken support becomes resistance — highest probability of the three because the market is offering you confirmation."
  },
  {
    n: 5,
    title: 'The FAILED Double Top (Became Triple Top, Broke UP)',
    pattern: { ...tripleFail(), annotation: ann({
      peak1: [3, 2610.4], peak2: [9, 2610.2], neckline: 2602.0,
      breakout: [11, 2603.6], failed: true, failReason: 'no body close below neckline',
      thirdPeak: [15, 2614.6]
    })},
    caption:
      "Two peaks form, neckline appears intact. Price tests the same level a THIRD time, briefly stalls, then breaks ABOVE the prior peaks. Three tests of the same level often resolve UP, not down. If you shorted anticipating a double top at peak 2, you got run over. Wait for the neckline body close — never anticipate."
  },
  {
    n: 6,
    title: 'The Premature Short (Stopped at Second Peak)',
    pattern: { ...premature(), annotation: ann({
      peak1: [3, 2640.4], peak2: [9, 2641.0], neckline: 2632.0,
      breakout: [12, 2630.6]
    })},
    caption:
      "Trader shorts AT the second peak BEFORE the neckline breaks. Price wicks higher than the first peak by 4-5 ticks (idx 9), taking out their stop. Then it reverses and would have worked. Shorting at the peak instead of waiting for the neckline break is the most expensive mistake new traders make on this pattern. Patience costs nothing. Impatience costs money."
  },
  {
    n: 7,
    title: 'Volume Failure',
    pattern: { ...volumeFail(), annotation: ann({
      peak1: [3, 2670.4], peak2: [9, 2670.2], neckline: 2662.0,
      breakout: [12, 2661.6], failed: true, failReason: 'breakout volume too weak'
    })},
    caption:
      "Two peaks form perfectly, neckline breaks but on weak / average volume (50 vs flag avg ~55). Next 4-5 candles drift sideways then reverse back up. Real double tops break on RISING volume. Weak-volume breaks fail at high rates. If volume isn't there, take half size or skip entirely."
  },
  {
    n: 8,
    title: "Double Top Inside a Strong Uptrend (Don't Trade)",
    pattern: { ...inUptrend(), annotation: ann({
      peak1: [3, 2700.4], peak2: [9, 2700.2], neckline: 2694.0,
      breakout: [11, 2693.4], failed: true, failReason: 'larger uptrend resumed',
      inset: true
    })},
    caption:
      "Inset chart shows the larger uptrend. Inside that uptrend, a small double top forms. Neckline breaks, price drops 3 ticks (idx 11), then larger uptrend reasserts and price rallies past both peaks (idx 13-15). A double top inside a strong uptrend is just a pullback in disguise. Counter-trend trades on 2-min scalps are low-edge. Only trade double tops in neutral or downtrending context."
  },
  {
    n: 9,
    title: 'The Tight Double Top (Fast Reversal)',
    pattern: { ...tight(), annotation: ann({
      peak1: [2, 2730.0], peak2: [6, 2729.8], neckline: 2724.0,
      breakout: [8, 2722.6],
      tradeBracket: { entryIdx: 8, entryPrice: 2722.6, stopPrice: 2730.6, targetPrice: 2718.0 }
    })},
    caption:
      "Peaks only 4 candles apart, narrow neckline-to-peak distance (6 ticks). Tight double tops produce fast moves but smaller targets. R:R is still favorable but expect to take profit quickly. Don't oversize — the tight structure means a tighter stop, but also a tighter target."
  },
  {
    n: 10,
    title: 'The Wide Double Top (Slower, Bigger Move)',
    pattern: { ...wide(), annotation: ann({
      peak1: [4, 2762.0], peak2: [18, 2761.8], neckline: 2750.0,
      breakout: [22, 2749.6],
      tradeBracket: { entryIdx: 22, entryPrice: 2749.6, stopPrice: 2762.6, targetPrice: 2737.6 }
    })},
    caption:
      "Peaks 14 candles apart (~28 minutes), wider distance from peaks to neckline (~12 ticks). Wider patterns produce larger moves but take longer to develop. The measured-move target is bigger. More patience required while it sets up — but pays off with a multi-handle drop."
  },
  {
    n: 11,
    title: 'The Time-Decay Double Top',
    pattern: { ...timeDecay(), annotation: ann({
      peak1: [2, 2790.4], peak2: [16, 2790.2], neckline: 2782.0,
      breakout: [20, 2781.6], failed: true, failReason: 'pattern stale, sellers gone'
    })},
    caption:
      "Peaks 14 candles apart but with a long flat drift between them (idx 6-15). Pattern looks valid but neckline break (idx 20) produces weak follow-through that quickly reverses. When peaks are too far apart in time AND the trough drifts higher, market context has shifted. The pattern is technically valid but psychologically stale. Skip."
  },
  {
    n: 12,
    title: 'The Opening Range Double Top (Common in Your Window)',
    pattern: { ...openingRange(), annotation: ann({
      peak1: [3, 2822.0], peak2: [11, 2821.8], neckline: 2812.0,
      breakout: [15, 2810.6],
      timeLabels: [{ idx: 3, label: '9:45' }, { idx: 11, label: '10:30' }, { idx: 15, label: '10:36' }],
      tradeBracket: { entryIdx: 15, entryPrice: 2810.6, stopPrice: 2822.6, targetPrice: 2798.6 }
    })},
    caption:
      "First peak forms around 9:45 (opening drive). Second peak forms around 10:30 (in your trade window). Neckline at the morning low. When the morning high gets tested twice and rejects, this is one of the cleanest setups in your 10:15-12:00 window. The opening drive provides the first peak, the second-wave rally provides the second peak, and the morning low becomes a clear neckline."
  }
];
