// 10 Core Lessons — the permanent foundation curriculum.
// These lessons are the deep dives behind the 10 principles. Daily lessons
// reinforce them. They never change unless Arnie explicitly rewrites them.

export const coreLessons = [
  {
    id: 'pole-mastery',
    number: 1,
    title: "The Pole — Direction's Truth-Teller",
    pillar: 'pole',
    duration: '8 min',
    summary: 'Why pole-first thinking changes everything. The flag tells you the shape; only the pole tells you the direction.',
    sections: [
      {
        heading: 'What the Pole Is',
        body: 'The pole is the impulsive move that earned the right to a continuation pattern. It is the thrust — the surge of conviction — before the pause. On a 2-minute chart, a textbook pole is 4-8 bars of one-direction movement with above-average volume. Gaps inside the pole are bullish for that pole; long wicks against the pole direction are warning signs.',
      },
      {
        heading: 'Why Direction Lives in the Pole',
        body: 'A bull flag and a bear flag are visually similar — both are shallow pullbacks against the prior move. The shape does not tell you direction; the prior move does. If you read the flag without first identifying the pole, you are guessing direction. If you find the pole first, the flag becomes a confirmation tool: does it sit cleanly in the pause zone, or has it grown into a fight?',
        callout: { type: 'principle', text: 'Principle 1: Pole First' },
      },
      {
        heading: 'The Five-Second Test',
        body: 'When a chart loads, give yourself five seconds to identify the pole. If you cannot point to it in five seconds, there is no setup. This is not a soft rule — it is a filter. Most missed trades and most chased trades come from skipping this step. The pole is either obvious or it is not there.',
      },
      {
        heading: 'What a Pole Is Not',
        body: 'A choppy 6-bar drift higher with two red bars and a wick is not a pole. A pole is a conviction move — directional bars in series, expanding range, expanding volume. If you have to argue for it, it is not one. The market does not require you to take this trade; the next pole is coming.',
      },
    ],
    keyRules: [
      'Identify the pole before looking at the flag — five-second test',
      'Pole = 4-8 bars, one direction, expanding volume',
      "If you have to argue for the pole, it isn't one — pass",
    ],
    principlesUsed: [1, 2],
  },
  {
    id: 'flag-mechanics',
    number: 2,
    title: 'Flag Mechanics — Anatomy of the Pause',
    pillar: 'flag',
    duration: '9 min',
    summary: 'The flag is a pause, not a reversal. What a healthy flag looks like, what a fighting flag looks like, and how to tell the difference in real time.',
    sections: [
      {
        heading: 'What a Healthy Flag Looks Like',
        body: 'A healthy flag drifts gently against the pole, on contracting volume, in 3-7 bars. The bars are smaller than the pole bars. There is no panic, no acceleration, no big counter-bars. It looks like a market catching its breath. The trendline drawn across the highs (in a bull flag) or lows (in a bear flag) should be clean — two or three touches.',
      },
      {
        heading: 'What a Fighting Flag Looks Like',
        body: 'A fighting flag has expanding range, growing counter-volume, and large counter-bars. It is not catching its breath; it is being attacked. The 50% line of the pole is the boundary: once a flag retraces past 50%, you are no longer in a pause — you are in a fight, and the original participants have lost control.',
        callout: { type: 'principle', text: 'Principle 4: The 50% Rule' },
      },
      {
        heading: 'The Three Flag Shapes',
        body: 'Three healthy shapes appear most often: (1) the parallel channel — clean drift between two parallel lines, (2) the triangle — converging trendlines, (3) the simple pullback — 1-3 bars and a continuation. All three carry the same edge when the pole is healthy and the flag stays inside its zone.',
      },
      {
        heading: 'When the Flag Talks Back',
        body: 'If the flag puts up a counter-bar that is bigger than any pole bar, listen. That is the flag talking back. It does not always kill the trade, but it raises the bar for confirmation. One big counter-bar and the trade now needs the close, the volume, and the delta to all confirm. Not three out of four — four out of four.',
      },
    ],
    keyRules: [
      'Healthy flag: 3-7 bars, contracting volume, smaller than pole bars',
      'Fighting flag: expanding range, growing counter-volume — danger',
      'Past 50% retrace = thesis dead, no exceptions',
    ],
    principlesUsed: [4, 7],
  },
  {
    id: 'fifty-percent-rule',
    number: 3,
    title: 'The 50% Rule — When the Flag Kills the Pole',
    pillar: 'flag',
    duration: '6 min',
    summary: 'The single most important number on the chart. Why 50% is a hard line and what to do the moment it breaks.',
    sections: [
      {
        heading: 'Why 50% Is the Line',
        body: 'A pause that gives back less than half the pole means the participants who built the pole are still in control. A pause that gives back more than half means control has shifted. There is no "almost." There is no "wait and see." The math is binary: under 50% the trade is alive, over 50% the trade is dead.',
      },
      {
        heading: 'How to Mark the 50% Line',
        body: "Draw a horizontal line at the midpoint between the pole's start and end. That line is the boundary. As price retraces in the flag, watch the line. A close beyond the line — not a wick — is the death of the thesis. Wicks may be tested; closes are decisions.",
      },
      {
        heading: 'What to Do the Moment It Breaks',
        body: "Cancel the trade. Do not move the stop. Do not 'give it room.' Do not flip to the opposite side reflexively — instead, reassess from a clean slate. The new context may produce a setup in the opposite direction, or it may produce nothing. The old setup is over.",
        callout: { type: 'rule', text: 'Past 50%, the only valid action is cancel and reassess.' },
      },
      {
        heading: 'The Trap of Hope',
        body: "The hardest moment in trading is the close past 50% on a setup you've been watching for ten minutes. Hope says 'maybe it bounces.' Hope is wrong here. The data has changed; the trade is no longer the trade. Walk away from this one. The next flag is coming.",
      },
    ],
    keyRules: [
      'Mark the 50% line on every pole — non-negotiable',
      'Close past 50% = thesis dead — cancel, do not adjust',
      'Reassess from scratch; do not flip on reflex',
    ],
    principlesUsed: [4, 9],
  },
  {
    id: 'entry-rules',
    number: 4,
    title: 'Entry Rules — Wait for the Close',
    pillar: 'entry',
    duration: '7 min',
    summary: 'Why 95% of valid entries require a fully-closed 2-minute bar beyond the trendline. The other 5% — and how to know when you are in it.',
    sections: [
      {
        heading: 'Wicks Lie',
        body: 'A wick is a probe. Many wicks reverse before the bar finishes — the buyers (or sellers) ran out of strength inside the 2-minute window and the close came back inside the trendline. Entering on the wick puts you on the wrong side of that reversal with full size.',
      },
      {
        heading: 'Closes Are Decisions',
        body: 'A 2-minute candle that closes beyond the trendline is a market decision: the participants on the other side capitulated within the window. That is a different signal from a wick. The close commits; the wick speculates. Enter on commitments.',
        callout: { type: 'principle', text: 'Principle 3: Wait for the Close' },
      },
      {
        heading: 'The 5% Exception',
        body: "There is a narrow exception: when multi-confirmation has all fired pre-close — pattern, MACD, delta, volume — and the bar is already 80%+ through its range with strong momentum, an early entry is defensible. Even then, the close must agree. If the bar reverses and closes back inside, the trade is wrong; cut and stand aside. The exception is rare, and it is not a license to skip the close.",
      },
      {
        heading: 'The Entry Window',
        body: 'The entry window is the 1-3 bars immediately after the breakout close. Outside that window, the math has shifted: stop is further, target is closer, R:R has degraded. The same pattern entered three bars late is a different trade. Take the window or wait for the next setup.',
      },
    ],
    keyRules: [
      'Wait for the 2-minute bar to fully close beyond the trendline',
      'Entry window = 1-3 bars after the breakout close',
      'Late entry = different trade, worse math — pass',
    ],
    principlesUsed: [3, 6],
  },
  {
    id: 'multi-confirmation',
    number: 5,
    title: 'Multi-Confirmation — The Four-Pillar Test',
    pillar: 'confirmation',
    duration: '10 min',
    summary: 'No single signal is enough. The four pillars and why majority-vote is not allowed.',
    sections: [
      {
        heading: 'The Four Pillars',
        body: '(1) Pattern integrity — the structure is clean and the 50% rule holds. (2) MACD direction — the histogram and signal line agree with the pole direction at the breakout bar. (3) Order Flow Delta — net delta over the breakout bars agrees with the trade direction. (4) Volume — the breakout bar carries volume above the recent average. All four must align before the trade is taken.',
      },
      {
        heading: 'Why Not Three Out of Four',
        body: 'Three out of four is what every losing trade looks like before the loss. Almost-confirmation is the most expensive signal in trading because it feels like a green light but lacks the one pillar that would have warned you. The cost of waiting for the fourth pillar is missing some trades; the cost of skipping it is paying for trades that should not have been taken.',
        callout: { type: 'principle', text: 'Principle 7: Four out of four, or it is not a trade' },
      },
      {
        heading: 'When MACD Disagrees',
        body: 'MACD disagreement on a clean pattern is the most common reason a setup fails. The pattern looks valid, but MACD is rolling the other direction or flat. This is the market telling you the pole is not as strong as it looks — momentum is fading underneath the structure. Pass.',
      },
      {
        heading: 'When Volume Disagrees',
        body: 'A breakout on weak volume is a fake. Real breakouts carry committed participants — and committed participants leave a footprint in volume. A breakout on average or below-average volume is the algos painting the chart. Pass.',
      },
      {
        heading: 'When Delta Disagrees',
        body: 'Delta is the most direct read of who is winning the bar. If price closes above the trendline but delta on that bar is negative, sellers absorbed the breakout. The pattern says one thing; the tape says another. Trust the tape.',
      },
    ],
    keyRules: [
      'Pattern + MACD + Delta + Volume must all align',
      'Three out of four = pass — no exceptions',
      'Delta disagrees → pattern is a fake — trust the tape',
    ],
    principlesUsed: [7, 9],
  },
  {
    id: 'session-reading',
    number: 6,
    title: 'Reading the Session — Trending vs Ranging',
    pillar: 'session',
    duration: '9 min',
    summary: 'Same setup, opposite outcome. How to read the session before you read the chart.',
    sections: [
      {
        heading: 'Two Sessions a Day',
        body: 'Most days hold two sessions: a directional first hour and a balance-seeking middle. The first hour is for trend trades (poles and flags carry); the middle is for range trades (fades, double tops, balance). Trying to use a trend-trade setup in a balance session is the most common path to a 1-2-3-loss day.',
      },
      {
        heading: 'How to Tell Which Session You Are In',
        body: 'Three reads: (1) Is the open driving in one direction or chopping at the prior close? (2) Is volume expanding or contracting? (3) Is range building or compressing? Trending = drive + expansion + range. Ranging = chop + contraction + compression. Make the read in the first 15 minutes; revise as the session evolves.',
        callout: { type: 'principle', text: 'Principle 2: Context Is Everything' },
      },
      {
        heading: 'The Transition Bar',
        body: 'Sessions transition. A trending morning becomes a ranging midday around 10:30-11:00 ET. The transition bar is usually a wide-range, low-conviction reversal that fails to follow through. After the transition, trend-trade setups stop carrying and range-trade setups start working. Read the transition; do not fight it.',
      },
      {
        heading: 'Why The Same Setup Wins or Loses',
        body: 'A bull flag at 10:15 in a trending tape carries because the buyers driving the pole are still committed; their flag is a pause, not a fight. The same bull flag at 11:30 in a ranging tape fails because the buyers are gone — the flag is built by algos painting structure, not by committed money. Same shape, opposite outcome.',
      },
    ],
    keyRules: [
      'Read the session in the first 15 minutes',
      'Trending = trend trades; ranging = range trades — do not mix',
      'Identify the transition bar; switch playbook on transition',
    ],
    principlesUsed: [2, 8],
  },
  {
    id: 'staircase',
    number: 7,
    title: 'The Staircase — Independent Flags in a Trend',
    pillar: 'staircase',
    duration: '7 min',
    summary: 'A trend is a stack of independent setups. How to take the second flag after missing the first.',
    sections: [
      {
        heading: 'A Trend Is Not One Trade',
        body: 'A trend is a sequence of independent setups: pole → flag → pole → flag → pole → flag. Each step in the staircase is judged on its own merits, with the same rules. Missing the first flag is not a failure; it is data. The next flag is the next trade.',
      },
      {
        heading: 'Why Each Flag Is Independent',
        body: 'The participants who built the second pole are not the same participants who built the first. The volume signature is fresh; the multi-confirmation is fresh. The fact that flag #1 carried does not entitle flag #2 to carry — and the fact that flag #1 was missed does not disqualify flag #2.',
        callout: { type: 'principle', text: 'Principle 5: Each Flag Is Independent' },
      },
      {
        heading: 'The Trap of Chasing the First',
        body: "After missing flag #1, the temptation is to chase — to enter mid-pole on flag #2 because 'the trend is strong.' This is a different trade with worse math. Treat flag #2 as if you had just walked up to the chart cold. Apply the same rules. If the rules do not fire, pass.",
      },
      {
        heading: 'When the Staircase Ends',
        body: 'The staircase ends when (1) a flag retraces past 50% (Principle 4), (2) the session transitions out of trend (Principle 2), or (3) multi-confirmation fails on a fresh setup (Principle 7). One of these will happen; the trend is not infinite. Stop after the end-signal fires; the next trend is not today.',
      },
    ],
    keyRules: [
      'Each flag judged on its own — same rules every time',
      'Missing flag #1 does not disqualify flag #2',
      'Staircase ends on 50% break, session transition, or failed multi-confirm',
    ],
    principlesUsed: [5, 4, 2, 7],
  },
  {
    id: 'missed-and-chasing',
    number: 8,
    title: 'Missed Trades & Chasing — When the Door Closes',
    pillar: 'psychology',
    duration: '6 min',
    summary: 'Why chasing kills accounts and how to detach from the trade you missed.',
    sections: [
      {
        heading: 'The Window Closes',
        body: "Every setup has a window — usually 1-3 bars after the breakout close. Inside the window, the math works: stop is reasonable, target is reachable, R:R is favorable. Outside the window, the math degrades: stop has to widen, target has not, R:R erodes. Late entry is not 'the same trade a few seconds later'; it is a different trade with worse math.",
      },
      {
        heading: 'Why Chasing Feels Right',
        body: 'Chasing feels right because the trend is real. Buyers driving the pole keep buying after you missed it. The chart goes higher. You feel late. Late feels like missing free money. But late is also where the trend ends — chasers buy the top because they are the last buyers. By the time chasing feels easy, the trade is over.',
        callout: { type: 'principle', text: 'Principle 6: Missed = Gone' },
      },
      {
        heading: 'Detachment Drill',
        body: "When you miss a setup, do this: name it ('I missed flag #1'), accept it ('that one is gone'), and reset to the chart cold. The next setup is not penance for the missed one; it is its own trade. The hardest professional skill in trading is the ability to walk away clean from a missed trade.",
      },
      {
        heading: "The 'Just This Once' Trap",
        body: "The single most expensive sentence in trading: 'just this once, I'll chase a little.' Just this once becomes the 7-cent slippage that becomes the 12-tick stop that becomes the loss. Rules are rules because the moment you let one slide, you have no rules. Chase once and you will chase again.",
      },
    ],
    keyRules: [
      'Window closed = trade gone — do not chase',
      'Late entry is a different trade with worse math',
      "'Just this once' is how rules die — never",
    ],
    principlesUsed: [6, 8],
  },
  {
    id: 'daily-reset',
    number: 9,
    title: 'The Daily Reset — Three Strikes Rule',
    pillar: 'psychology',
    duration: '5 min',
    summary: 'Three same-direction losses end the day. Why walking away IS the trade.',
    sections: [
      {
        heading: 'Three Is the Number',
        body: 'Three losses in the same direction in a single session is the market telling you the regime has shifted and your bias is wrong. The fourth attempt does not solve the prior three; it compounds them. The data is unambiguous: traders who keep going past three average significantly worse outcomes than traders who stop.',
      },
      {
        heading: 'Why Walking Away Is the Trade',
        body: "Trading is not about working harder when something fails — it is about recognizing when today is not your day and stopping the bleed. The professional discipline is not 'find a way to make today work'; it is 'preserve capital so tomorrow can work.' The day you walk away clean is the day you stop losing tomorrow's trades to today's frustration.",
        callout: { type: 'principle', text: 'Principle 8: The Daily Reset' },
      },
      {
        heading: 'The Hardest Press of the Button',
        body: "Closing the platform after three same-direction losses is the hardest button in trading. Every reflex says 'one more — I see the right setup now.' The reflex is wrong. The right setup after three same-direction losses is statistically a regime change you have not yet read. Tomorrow is a new session.",
      },
      {
        heading: 'What to Do Instead',
        body: "Close the platform. Walk outside. Do not journal at the desk — distance the day from the chart. When you do journal, journal the three losses honestly. What was the regime read? What did multi-confirmation say? What ignored signal preceded each loss? Tomorrow's session begins with that read.",
      },
    ],
    keyRules: [
      '3 same-direction losses → stop, no exceptions',
      'Close the platform; do not journal at the desk',
      "Tomorrow begins with honest review of today's three",
    ],
    principlesUsed: [8, 9],
  },
  {
    id: 'capitulation',
    number: 10,
    title: 'Capitulation & Reversal Reading',
    pillar: 'psychology',
    duration: '8 min',
    summary: 'Big drops at the open are short-seller traps. How to read capitulation flushes and play the reversal.',
    sections: [
      {
        heading: 'The Trap',
        body: 'A vertical drop on huge volume in the first 30 minutes looks like a trend start to an unprepared eye. More often it is the last sellers running out of inventory — a flush, not a trend. Chasers short the bottom; the trapped shorts then power the reversal back up.',
      },
      {
        heading: 'Capitulation Signature',
        body: 'Three signs: (1) volume on the drop is 2-3x the average, (2) the drop is steep and short — 4-8 bars, not 20, (3) within 10-15 minutes after the low, a long-tail hammer or violent reclaim appears. When all three are present, you are looking at capitulation, not trend.',
        callout: { type: 'principle', text: 'Principle 10: Capitulation Drops Reverse' },
      },
      {
        heading: 'The Reversal Play',
        body: 'The play is not to short the drop. The play is to wait for the floor — the long-tail hammer or the reclaim bar — and look for the long reversal. The first valid bull setup after the floor is the trade. Multi-confirmation still applies; the regime change does not relax the rules.',
      },
      {
        heading: 'When It Is Not Capitulation',
        body: 'Not every drop is a capitulation. A drop on average volume that breaks key support and continues lower is a real trend, not a flush. The volume signature is the tell: capitulation has a volume spike that visibly stands out on the volume pane. Trends have steadily expanding volume without the spike. If the spike is not there, treat it as a trend, not a trap.',
      },
    ],
    keyRules: [
      'Big drop + 2-3x volume + 4-8 bars = likely capitulation',
      'Wait for the floor (hammer or reclaim) — do not short the drop',
      'First valid long setup after the floor is the trade',
    ],
    principlesUsed: [10, 2, 7],
  },
];
