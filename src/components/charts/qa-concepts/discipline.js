const charts = [
  {
    title: "3-STRIKE STOP \u2014 same direction losses end the day",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 100.4, l: 99, c: 99.1 },
      { o: 99.1, h: 99.7, l: 99, c: 99.6 },
      { o: 99.6, h: 100.6, l: 99.5, c: 100.5 },
      { o: 100.5, h: 100.6, l: 99.5, c: 99.6 },
      { o: 99.6, h: 100, l: 99.4, c: 99.9 },
      { o: 99.9, h: 101.2, l: 99.85, c: 101.1 },
      { o: 101.1, h: 101.3, l: 100, c: 100.1 }
    ],
    annotations: [
      { type: "badge", at: { i: 1, price: 99.1 }, text: "L1", color: "#fbbf24" },
      { type: "badge", at: { i: 4, price: 99.6 }, text: "L2", color: "#fbbf24" },
      { type: "badge", at: { i: 7, price: 100.1 }, text: "L3 \u2014 STOP", color: "#ef4444" }
    ],
    verdict: { label: "3 SAME-SIDE = OUT", type: "warn" },
    caption: "Three losses in the same direction means your read is wrong today. Walking away preserves capital for tomorrow."
  },
  {
    title: "GIVE-BACK PATTERN \u2014 winning, then giving it all back",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102.5, l: 99.95, c: 102.4 },
      // big winner
      { o: 102.4, h: 103, l: 102, c: 102.8 },
      { o: 102.8, h: 102.9, l: 101, c: 101.1 },
      // started giving back
      { o: 101.1, h: 101.3, l: 100, c: 100.1 },
      { o: 100.1, h: 100.4, l: 99, c: 99.1 },
      { o: 99.1, h: 99.4, l: 98, c: 98.1 }
      // back near start, full give-back
    ],
    annotations: [
      { type: "level", price: 102.4, color: "#22c55e", label: "PEAK +2.4", dash: true },
      { type: "level", price: 98.1, color: "#ef4444", label: "CLOSE \u22121.9 from start", dash: true },
      { type: "badge", at: { i: 6, price: 98.1 }, text: "GAVE BACK +4.3", color: "#ef4444" }
    ],
    verdict: { label: "PROFIT-LOCK NEEDED", type: "bad" },
    caption: "Hit a profit target? Lock it. The give-back pattern is what destroys accounts \u2014 keep trading green-becomes-red."
  },
  {
    title: "PROFIT LOCK \u2014 close half at target, runner with BE stop",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.5, l: 103.7, c: 103.8 },
      { o: 103.8, h: 103.9, l: 103.3, c: 103.4 },
      { o: 103.4, h: 105, l: 103.35, c: 104.9 },
      // entry
      { o: 104.9, h: 106.5, l: 104.8, c: 106.4 },
      // 1st target — TAKE HALF
      { o: 106.4, h: 106.5, l: 105.5, c: 105.6 },
      // pullback
      { o: 105.6, h: 105.7, l: 104.95, c: 105 }
      // BE stop on runner — break-even
    ],
    annotations: [
      { type: "arrow", at: { i: 7, price: 106.4 }, direction: "up", color: "#22c55e", label: "PARTIAL +1.5" },
      { type: "level", price: 104.9, color: "#fbbf24", label: "BE STOP \u2014 runner exit", dash: true }
    ],
    verdict: { label: "BANKED PARTIAL, RUNNER FLAT", type: "good" },
    caption: "Took half off at 1st target. Runner stopped at break-even. Net: +1.5/2 contracts = +0.75pt locked, no give-back."
  },
  {
    title: "FOMO ENTRY \u2014 chased after seeing the move",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 101.5, l: 99.95, c: 101.4 },
      { o: 101.4, h: 102.7, l: 101.3, c: 102.6 },
      { o: 102.6, h: 103.9, l: 102.5, c: 103.8 },
      { o: 103.8, h: 105.5, l: 103.7, c: 105.4 },
      { o: 105.4, h: 106.6, l: 105.3, c: 106.5 },
      // chasers in here
      { o: 106.5, h: 106.7, l: 105, c: 105.1 },
      // top printed
      { o: 105.1, h: 105.3, l: 103.5, c: 103.6 }
      // pullback
    ],
    annotations: [
      { type: "arrow", at: { i: 5, price: 106.5 }, direction: "up", color: "#ef4444", label: "FOMO BUY" },
      { type: "badge", at: { i: 7, price: 103.6 }, text: "TRAPPED", color: "#ef4444" }
    ],
    verdict: { label: "CHASE FEELS GOOD AT THE TOP", type: "bad" },
    caption: "When chasing feels easy, you are buying from the people taking profit. Wait for the next setup."
  },
  {
    title: "OVERTRADING \u2014 too many setups in one session",
    candles: [
      { o: 100, h: 100.5, l: 99.5, c: 100.4 },
      { o: 100.4, h: 100.7, l: 99.9, c: 100 },
      { o: 100, h: 100.5, l: 99.7, c: 100.4 },
      { o: 100.4, h: 100.8, l: 100, c: 100.1 },
      { o: 100.1, h: 100.5, l: 99.9, c: 100.4 },
      { o: 100.4, h: 100.7, l: 100, c: 100.2 },
      { o: 100.2, h: 100.5, l: 99.95, c: 100.3 },
      { o: 100.3, h: 100.5, l: 100.05, c: 100.4 }
    ],
    annotations: [
      { type: "badge", at: { i: 0, price: 100.5 }, text: "T1", color: "#fbbf24" },
      { type: "badge", at: { i: 2, price: 100.5 }, text: "T2", color: "#fbbf24" },
      { type: "badge", at: { i: 4, price: 100.5 }, text: "T3", color: "#fbbf24" },
      { type: "badge", at: { i: 6, price: 100.5 }, text: "T4", color: "#ef4444" }
    ],
    verdict: { label: "CHOPPY DAY = TOO MANY TRADES", type: "warn" },
    caption: "Range days seduce overtrading. 6+ trades on a flat day means commissions and slippage eat a profit you barely earned."
  },
  {
    title: "WALKING AWAY EARLY \u2014 the green day takeaway",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.5, l: 103, c: 103.1 },
      // pullback
      { o: 103.1, h: 103.5, l: 102.5, c: 102.6 },
      // chop continues
      { o: 102.6, h: 103, l: 102, c: 102.1 },
      { o: 102.1, h: 102.5, l: 101.5, c: 101.6 }
    ],
    annotations: [
      { type: "arrow", at: { i: 3, price: 104.4 }, direction: "up", color: "#22c55e", label: "TARGET HIT" },
      { type: "badge", at: { i: 4, price: 104 }, text: "\u{1F6AA} WALKED", color: "#22c55e" },
      { type: "badge", at: { i: 7, price: 101.6 }, text: "GIVE-BACK AVOIDED", color: "#22c55e" }
    ],
    verdict: { label: "GREEN DAY LOCKED", type: "good" },
    caption: "Hit profit target \u2192 walk. The afternoon chop and pullback that comes after costs the no-rule trader half the day's gain."
  }
];
export {
  charts
};
