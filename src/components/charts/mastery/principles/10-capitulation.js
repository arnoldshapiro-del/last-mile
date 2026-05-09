const charts = [
  {
    title: "CAPITULATION SIGNATURE \u2014 vertical drop, 2-3x volume, 4-8 bars",
    candles: [
      { o: 105, h: 105.4, l: 104.6, c: 105 },
      { o: 105, h: 105.2, l: 104.8, c: 104.9 },
      { o: 104.9, h: 105, l: 102.5, c: 102.6 },
      // big drop bar 1
      { o: 102.6, h: 102.7, l: 100.5, c: 100.6 },
      // bar 2
      { o: 100.6, h: 100.8, l: 98.5, c: 98.7 },
      // bar 3
      { o: 98.7, h: 98.9, l: 96.5, c: 96.6 },
      // bar 4 — climax
      { o: 96.6, h: 99, l: 96.4, c: 98.8 },
      // long-tail hammer
      { o: 98.8, h: 100.6, l: 98.7, c: 100.5 }
      // reclaim
    ],
    annotations: [
      { type: "volume", bars: [40, 35, 130, 145, 155, 200, 180, 120] },
      { type: "badge", at: { i: 5, price: 96.6 }, text: "CAPITULATION", color: "#ef4444" },
      { type: "badge", at: { i: 6, price: 96.4 }, text: "LONG-TAIL HAMMER", color: "#22c55e" },
      { type: "arrow", at: { i: 7, price: 100.5 }, direction: "up", color: "#22c55e", label: "REVERSAL" }
    ],
    verdict: { label: "EXHAUSTION \u2192 REVERSAL", type: "good" },
    caption: "4 vertical drops on 3-5x volume, then long-tail hammer. Signature is unmistakable. The play is the reversal, not the continuation."
  },
  {
    title: "NOT CAPITULATION \u2014 steady volume, real downtrend",
    candles: [
      { o: 105, h: 105.4, l: 104.6, c: 105 },
      { o: 105, h: 105.1, l: 104.4, c: 104.5 },
      { o: 104.5, h: 104.6, l: 103.8, c: 103.9 },
      { o: 103.9, h: 104, l: 103.2, c: 103.3 },
      { o: 103.3, h: 103.4, l: 102.6, c: 102.7 },
      { o: 102.7, h: 102.8, l: 102, c: 102.1 },
      { o: 102.1, h: 102.2, l: 101.4, c: 101.5 },
      { o: 101.5, h: 101.6, l: 100.8, c: 100.9 },
      { o: 100.9, h: 101, l: 100.2, c: 100.3 }
    ],
    annotations: [
      { type: "volume", bars: [50, 60, 65, 60, 70, 65, 70, 75, 80] },
      { type: "badge", at: { i: 5, price: 102.1 }, text: "STEADY VOL", color: "#fbbf24" }
    ],
    verdict: { label: "TRUE TREND \u2014 NOT A FLUSH", type: "warn" },
    caption: "No volume spike. Steady distribution. This is a real downtrend. Treat it like a trend (poles & flags) \u2014 do not look for reversal here."
  },
  {
    title: "SHORT-INTO-CAPITULATION TRAP \u2014 chasing the bottom",
    candles: [
      { o: 105, h: 105.4, l: 104.6, c: 105 },
      { o: 105, h: 105.2, l: 104.8, c: 104.9 },
      { o: 104.9, h: 105, l: 102.5, c: 102.6 },
      { o: 102.6, h: 102.7, l: 100.5, c: 100.6 },
      { o: 100.6, h: 100.8, l: 98.5, c: 98.7 },
      // chasing entered HERE
      { o: 98.7, h: 98.9, l: 96.5, c: 96.6 },
      { o: 96.6, h: 99, l: 96.4, c: 98.8 },
      // hammer — short stopped
      { o: 98.8, h: 100.6, l: 98.7, c: 100.5 },
      { o: 100.5, h: 102.5, l: 100.4, c: 102.4 }
    ],
    annotations: [
      { type: "arrow", at: { i: 4, price: 98.7 }, direction: "down", color: "#ef4444", label: "CHASE SHORT" },
      { type: "level", price: 100, color: "#ef4444", label: "STOP \u2014 hit on reversal", dash: true },
      { type: "badge", at: { i: 8, price: 102.4 }, text: "TRAPPED", color: "#ef4444" }
    ],
    verdict: { label: "CHASE = BOTTOM TICK", type: "bad" },
    caption: "Shorting after the climax bar is buying the bottom from the panickers. The reversal stops you out within minutes."
  },
  {
    title: "WAIT FOR THE FLOOR \u2014 the long-tail hammer is the signal",
    candles: [
      { o: 105, h: 105.4, l: 104.6, c: 105 },
      { o: 105, h: 105.2, l: 104.8, c: 104.9 },
      { o: 104.9, h: 105, l: 102.5, c: 102.6 },
      { o: 102.6, h: 102.7, l: 100.5, c: 100.6 },
      { o: 100.6, h: 100.8, l: 98.5, c: 98.7 },
      { o: 98.7, h: 98.9, l: 96.5, c: 96.6 },
      { o: 96.6, h: 99.5, l: 96.4, c: 99.3 },
      // LONG-TAIL HAMMER — floor
      { o: 99.3, h: 100.5, l: 99.2, c: 100.4 },
      { o: 100.4, h: 101.6, l: 100.3, c: 101.5 }
    ],
    annotations: [
      { type: "badge", at: { i: 6, price: 96.4 }, text: "FLOOR PRINTED", color: "#22c55e" },
      { type: "arrow", at: { i: 7, price: 100.4 }, direction: "up", color: "#22c55e", label: "CONFIRM ENTRY" }
    ],
    verdict: { label: "WAIT FOR THE WICK", type: "good" },
    caption: "Do not enter until the long-tail hammer prints AND the next bar confirms with a higher close. Patience beats prediction."
  },
  {
    title: "TRAPPED SHORTS POWER THE RALLY \u2014 short-covering rip",
    candles: [
      { o: 105, h: 105.4, l: 104.6, c: 105 },
      { o: 104.9, h: 105, l: 102.5, c: 102.6 },
      { o: 102.6, h: 102.7, l: 100.5, c: 100.6 },
      { o: 100.6, h: 100.8, l: 98.5, c: 98.7 },
      { o: 98.7, h: 98.9, l: 96.5, c: 96.6 },
      { o: 96.6, h: 99.5, l: 96.4, c: 99.3 },
      { o: 99.3, h: 102, l: 99.2, c: 101.95 },
      // short-covering
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      // continuation
      { o: 103.4, h: 104.8, l: 103.3, c: 104.7 }
    ],
    annotations: [
      { type: "volume", bars: [40, 130, 140, 150, 200, 130, 220, 180, 140] },
      { type: "badge", at: { i: 6, price: 102 }, text: "SHORT COVER", color: "#22c55e" },
      { type: "badge", at: { i: 8, price: 104.7 }, text: "+8 PTS", color: "#22c55e" }
    ],
    verdict: { label: "TRAPPED SHORTS = FUEL", type: "good" },
    caption: "Capitulation shorts are still in the trade after the floor. They cover into the bounce \u2014 adding fuel. Reversals after capitulation are violent."
  },
  {
    title: "CAPITULATION CHECKLIST \u2014 three signs in 30 minutes",
    candles: [
      { o: 105, h: 105.4, l: 104.6, c: 105 },
      { o: 104.9, h: 105, l: 103.5, c: 103.6 },
      // 1️⃣ steep
      { o: 103.6, h: 103.7, l: 101.8, c: 101.9 },
      { o: 101.9, h: 102, l: 100, c: 100.1 },
      { o: 100.1, h: 100.3, l: 98, c: 98.1 },
      // 4 bars — short
      { o: 98.1, h: 99.5, l: 97.8, c: 99.4 },
      // 3️⃣ hammer
      { o: 99.4, h: 101, l: 99.3, c: 100.9 }
    ],
    annotations: [
      { type: "volume", bars: [50, 130, 150, 170, 220, 180, 130] },
      { type: "badge", at: { i: 1, price: 103.6 }, text: "\u2460STEEP", color: "#ef4444" },
      { type: "badge", at: { i: 4, price: 98.1 }, text: "\u24612-3x VOL", color: "#fbbf24" },
      { type: "badge", at: { i: 5, price: 97.8 }, text: "\u2462HAMMER", color: "#22c55e" }
    ],
    verdict: { label: "ALL 3 PRESENT \u2014 REVERSAL PLAY", type: "good" },
    caption: "Steep + 2-3x volume + long-tail wick within 10-15 minutes of the low. All three = capitulation. Plan the long, not the short."
  }
];
export {
  charts
};
