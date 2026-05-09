const charts = [
  {
    title: "CHASE ANATOMY \u2014 entered 4 bars after breakout",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105, l: 103.15, c: 104.9 },
      // ideal entry — bar 8
      { o: 104.9, h: 106, l: 104.8, c: 105.9 },
      // window bar 9
      { o: 105.9, h: 107, l: 105.85, c: 106.9 },
      // bar 10
      { o: 106.9, h: 107.4, l: 106, c: 106.2 },
      // bar 11 — chased here
      { o: 106.2, h: 106.4, l: 104.5, c: 104.7 }
      // pullback
    ],
    annotations: [
      { type: "arrow", at: { i: 7, price: 104.9 }, direction: "up", color: "#22c55e", label: "IDEAL" },
      { type: "arrow", at: { i: 10, price: 106.2 }, direction: "up", color: "#ef4444", label: "CHASE" },
      { type: "level", price: 103.1, color: "#94a3b8", label: "STOP either way", dash: true }
    ],
    verdict: { label: "CHASE = WIDE STOP", type: "bad" },
    caption: "Same stop required (103.1) regardless of entry. Ideal R:R = 3:1. Chase R:R = 1:0.5 \u2014 flipped because of timing alone."
  },
  {
    title: "WAIT FOR THE NEXT FLAG \u2014 patience replaces chasing",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105, l: 103.15, c: 104.9 },
      // missed
      { o: 104.9, h: 106, l: 104.8, c: 105.9 },
      { o: 105.9, h: 106, l: 105.4, c: 105.5 },
      // flag forming
      { o: 105.5, h: 105.7, l: 105.1, c: 105.2 },
      { o: 105.2, h: 106.7, l: 105.15, c: 106.6 }
      // new flag entry
    ],
    annotations: [
      { type: "badge", at: { i: 7, price: 104.9 }, text: "MISSED", color: "#94a3b8" },
      { type: "arrow", at: { i: 11, price: 106.6 }, direction: "up", color: "#22c55e", label: "NEW ENTRY" }
    ],
    verdict: { label: "NEXT FLAG = NEXT TRADE", type: "good" },
    caption: "Missed flag #1. Did not chase. Next flag formed 3 bars later. Took it cleanly \u2014 same risk profile as the original."
  },
  {
    title: "CHASING THE TOP \u2014 the last buyer is the trapped one",
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.6, l: 100, c: 101.5 },
      { o: 101.5, h: 103, l: 101.4, c: 102.95 },
      { o: 102.95, h: 104.4, l: 102.9, c: 104.3 },
      { o: 104.3, h: 105.5, l: 104.2, c: 105.4 },
      { o: 105.4, h: 106.4, l: 105.3, c: 106.3 },
      { o: 106.3, h: 107, l: 106.2, c: 106.95 },
      // chasers in
      { o: 106.95, h: 107.05, l: 105.5, c: 105.6 },
      { o: 105.6, h: 105.8, l: 104.5, c: 104.6 },
      { o: 104.6, h: 104.8, l: 103.5, c: 103.6 }
    ],
    annotations: [
      { type: "arrow", at: { i: 6, price: 106.95 }, direction: "up", color: "#ef4444", label: "CHASE TOP" },
      { type: "badge", at: { i: 9, price: 103.6 }, text: "TRAPPED", color: "#ef4444" }
    ],
    verdict: { label: "TOP = WHERE CHASES GO", type: "bad" },
    caption: "When chasing feels easy and obvious, you are buying from the people taking profit. The top is built on chasers."
  },
  {
    title: "DETACHMENT DRILL \u2014 name it, accept it, move",
    candles: [
      { o: 100, h: 100.3, l: 99.8, c: 100.1 },
      { o: 100.1, h: 101.6, l: 100, c: 101.5 },
      { o: 101.5, h: 102.8, l: 101.4, c: 102.7 },
      { o: 102.7, h: 102.9, l: 102, c: 102.1 },
      { o: 102.1, h: 103.3, l: 102.05, c: 103.2 },
      // missed
      { o: 103.2, h: 104.5, l: 103.1, c: 104.4 },
      { o: 104.4, h: 104.7, l: 103.7, c: 103.8 },
      // setup #2 forms
      { o: 103.8, h: 104, l: 103.5, c: 103.6 },
      { o: 103.6, h: 103.8, l: 103.3, c: 103.5 },
      { o: 103.5, h: 105, l: 103.45, c: 104.95 }
      // new entry
    ],
    annotations: [
      { type: "badge", at: { i: 4, price: 103.2 }, text: '"missed it"', color: "#94a3b8" },
      { type: "badge", at: { i: 5, price: 104.4 }, text: `"that's gone"`, color: "#94a3b8" },
      { type: "arrow", at: { i: 9, price: 104.95 }, direction: "up", color: "#22c55e", label: "NEW TRADE" }
    ],
    verdict: { label: "DETACHMENT = NEXT WIN", type: "good" },
    caption: `Three sentences: "Missed it." "That's gone." "Next setup is the next trade." Drill until automatic.`
  },
  {
    title: "WINDOW MATH \u2014 why bar +3 is the cliff",
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 104.6, l: 103.7, c: 103.8 },
      { o: 103.8, h: 104, l: 103.4, c: 103.5 },
      { o: 103.5, h: 103.7, l: 103.1, c: 103.2 },
      { o: 103.2, h: 105, l: 103.15, c: 104.9 },
      // bar 8
      { o: 104.9, h: 105.4, l: 104.7, c: 105.2 },
      // bar +1
      { o: 105.2, h: 105.6, l: 105, c: 105.4 },
      // bar +2
      { o: 105.4, h: 105.7, l: 105, c: 105.3 },
      // bar +3 — CLIFF
      { o: 105.3, h: 105.6, l: 105, c: 105.4 }
    ],
    annotations: [
      { type: "zone", topPrice: 105.4, bottomPrice: 104.7, color: "rgba(34, 197, 94, 0.10)", label: "WINDOW (bars 8-10)" },
      { type: "badge", at: { i: 10, price: 105.7 }, text: "CLIFF", color: "#ef4444" }
    ],
    verdict: { label: "OUTSIDE 3 BARS = CHASE", type: "warn" },
    caption: "R:R degrades smoothly bar by bar. By bar +3 it has fallen below 1.5:1 minimum. That is the practical cliff."
  },
  {
    title: '"JUST THIS ONCE" \u2014 the rule-killer',
    candles: [
      { o: 100, h: 100.3, l: 99.7, c: 100 },
      { o: 100, h: 102, l: 99.95, c: 101.95 },
      { o: 101.95, h: 103.5, l: 101.85, c: 103.4 },
      { o: 103.4, h: 104.5, l: 103.3, c: 104.4 },
      { o: 104.4, h: 105.5, l: 104.3, c: 105.4 },
      { o: 105.4, h: 106.5, l: 105.3, c: 106.4 },
      // window long gone
      { o: 106.4, h: 107, l: 106.2, c: 106.5 },
      // chase #1
      { o: 106.5, h: 106.8, l: 105, c: 105.1 },
      { o: 105.1, h: 105.4, l: 104, c: 104.1 }
    ],
    annotations: [
      { type: "arrow", at: { i: 6, price: 106.5 }, direction: "up", color: "#ef4444", label: "CHASE" },
      { type: "badge", at: { i: 6, price: 107 }, text: '"just this once"', color: "#ef4444" }
    ],
    verdict: { label: "ONE EXCEPTION = NO RULES", type: "bad" },
    caption: 'The single sentence that breaks every system: "just this once." The rule has to be absolute or it is not a rule at all.'
  }
];
export {
  charts
};
