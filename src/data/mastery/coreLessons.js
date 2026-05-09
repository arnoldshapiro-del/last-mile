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
        heading: "The Five-Second Test",
        body: 'When a chart loads, give yourself five seconds to identify the pole. If you cannot point to it in five seconds, there is no setup. This is not a soft rule — it is a filter. Most missed trades and most chased trades come from skipping this step. The pole is either obvious or it is not there.',
      },
      {
        heading: "What a Pole Is Not",
        body: "A choppy 6-bar drift higher with two red bars and a wick is not a pole. A pole is a conviction move — directional bars in series, expanding range, expanding volume. If you have to argue for it, it is not one. The market does not require you to take this trade; the next pole is coming.",
      },
    ],
    teachingUnits: [
      {
        question: 'Can a single candle on a 2-minute chart count as a complete pole?',
        answer:
          'Yes — absolutely. Especially on news-driven moves or open spikes. The pole is defined by character, not candle count. A single bar covering 4+ points on 5-7x recent volume is a complete pole. Treat it as you would a 5-bar pole: mark the 50% line, wait for the flag, look for the breakout. Many of the best setups of the day come from single-bar poles.',
        rules: [
          'Single big candle on high volume = complete pole',
          'News moves and open spikes are the most common',
          'Trade the same way as a multi-bar pole',
        ],
      },
      {
        question: 'How do I tell a pole from a slow uptrend?',
        answer:
          'A pole has minimal body overlap, expanding volume, and a steep angle. A slow uptrend has overlapping bodies, steady volume, and a gradual slope. The 5-minute zoom-out is the truth-filter: if it still looks impulsive on 5-min, it is a pole. If it looks like a steady drift, it is just a trend — and trends without poles do not have flag setups.',
        rules: [
          'Pole = minimal overlap, expanding volume, steep angle',
          'Trend = overlapping bodies, steady volume, gradual',
          'Zoom-out test on 5-min confirms or denies',
        ],
      },
      {
        question: 'Is a gap inside the pole bullish or bearish?',
        answer:
          'A gap inside the pole is bullish for that pole. It is committed money jumping price levels with no orders in between — a strength signal, not a structure break. Treat the pole as continuous through the gap and measure 50% from the pole-start close to the pole-end close as normal.',
        rules: [
          'Mid-pole gap = strength signal',
          'Treat pole as continuous through the gap',
          'Measure 50% normally',
        ],
      },
    ],
    keyRules: [
      "Identify the pole before looking at the flag — five-second test",
      "Pole = 4-8 bars, one direction, expanding volume",
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
        body: "If the flag puts up a counter-bar that is bigger than any pole bar, listen. That is the flag talking back. It does not always kill the trade, but it raises the bar for confirmation. One big counter-bar and the trade now needs the close, the volume, and the delta to all confirm. Not three out of four — four out of four.",
      },
    ],
    teachingUnits: [
      {
        question: 'How many bars should a flag have?',
        answer:
          '3-7 bars is the healthy range. Fewer than 3 (a 1-bar pause) can work if the next bar is a clean breakout — but it is the exception. More than 7 bars and the "pause" has turned into "consolidation," which is a different setup with different math. If a flag is taking 10+ bars to resolve, the pole-and-flag thesis is weakening; either it breaks soon or it dies.',
        rules: [
          'Healthy flag: 3-7 bars',
          'Under 3 = sometimes valid (simple pullback)',
          'Over 7 = consolidation, weakening setup',
        ],
      },
      {
        question: 'Volume should contract during the flag — what if it doesn\'t?',
        answer:
          'Steady or expanding volume during the flag is a warning. A real pause has participants stepping back; volume should fall to half or less of the pole-bar volume. If volume stays elevated through the flag, that means there is active fighting going on inside the pause — which usually means the breakout will be either a fake or a reversal. Add the close-and-delta requirement; do not enter on pattern alone.',
        rules: [
          'Healthy flag: volume contracts to ≤50% of pole-bar volume',
          'Steady volume in flag = fight, not pause',
          'Expanding volume in flag = breakdown brewing',
        ],
      },
      {
        question: 'What retrace depth is the sweet spot?',
        answer:
          '25-50% of the pole. Less than 25% means the pause is too shallow — the participants who took profit at the pole top have not finished yet, and a deeper pullback is likely coming. More than 50% means the thesis is dead (Principle 4). The 25-50% zone is where buyers (in a bull flag) have absorbed the profit-taking and are ready to push again.',
        rules: [
          'Sweet spot: 25-50% retrace',
          'Under 25% = too shallow, deeper pullback likely',
          'Over 50% = thesis dead (Principle 4)',
        ],
      },
    ],
    keyRules: [
      "Healthy flag: 3-7 bars, contracting volume, smaller than pole bars",
      "Fighting flag: expanding range, growing counter-volume — danger",
      "Past 50% retrace = thesis dead, no exceptions",
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
        heading: "How to Mark the 50% Line",
        body: "Draw a horizontal line at the midpoint between the pole's start and end. That line is the boundary. As price retraces in the flag, watch the line. A close beyond the line — not a wick — is the death of the thesis. Wicks may be tested; closes are decisions.",
      },
      {
        heading: "What to Do the Moment It Breaks",
        body: "Cancel the trade. Do not move the stop. Do not 'give it room.' Do not flip to the opposite side reflexively — instead, reassess from a clean slate. The new context may produce a setup in the opposite direction, or it may produce nothing. The old setup is over.",
        callout: { type: 'rule', text: 'Past 50%, the only valid action is cancel and reassess.' },
      },
      {
        heading: 'The Trap of Hope',
        body: "The hardest moment in trading is the close past 50% on a setup you've been watching for ten minutes. Hope says 'maybe it bounces.' Hope is wrong here. The data has changed; the trade is no longer the trade. Walk away from this one. The next flag is coming.",
      },
    ],
    teachingUnits: [
      {
        question: 'Should I measure 50% from the wicks or the closes?',
        answer:
          'Closes. The pole is defined by what participants committed to, and commitments are recorded in closes. Use the close of the first pole bar as the start, the close of the last pole bar as the end, and find the midpoint. Wicks are noise — they record probes, not commitments. Measuring from wicks gives you a different (usually wrong) line.',
        rules: [
          'Measure pole start = close of first pole bar',
          'Measure pole end = close of last pole bar',
          'Wicks are noise, not data',
        ],
      },
      {
        question: 'What if the wick tags 50% but the bar closes above? Trade still alive?',
        answer:
          'Yes. A wick into the 50% with a close back above is a successful retest, not a thesis kill. The bar tested whether the line held — it did. Hold the trade. The rule fires only on a fully-closed bar below the line.',
        rules: [
          'Wick to 50% + close above = retest passed',
          'Trade only dies on a close below the line',
          'Successful retests often precede strong continuations',
        ],
      },
      {
        question: 'What does "reassess from scratch" actually mean in practice?',
        answer:
          'It means: cancel the active trade, take 60 seconds away from the chart, and approach the new picture cold. Do not assume the opposite trade is now valid; do not assume any trade is valid. Apply the full pre-trade checklist as if just walking up. Sometimes the reassessment produces nothing — that is fine. The discipline is to not let the old trade poison the new read.',
        rules: [
          'Cancel the trade',
          '60 seconds away from chart',
          'Apply full pre-trade checklist as if walking up cold',
        ],
      },
    ],
    keyRules: [
      "Mark the 50% line on every pole — non-negotiable",
      "Close past 50% = thesis dead — cancel, do not adjust",
      "Reassess from scratch; do not flip on reflex",
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
    teachingUnits: [
      {
        question: 'Where exactly should the stop go on a bull-flag breakout?',
        answer:
          'One to two ticks below the flag low. Tight enough to give clean R:R; wide enough that one wick will not take it out. Stops placed AT the flag low get hit by noise; stops placed BELOW it survive. If the flag low is unclear (long lower wicks during the flag), use the lowest CLOSE of the flag bars instead of the lowest wick.',
        rules: [
          'Stop = 1-2 ticks below flag low',
          'AT the flag low gets hit by noise; below survives',
          'Use lowest close if wicks make low unclear',
        ],
      },
      {
        question: 'What R:R minimum should I require before pulling the trigger?',
        answer:
          '1.5:1 minimum. Below that, the math does not justify the trade. Compute it before clicking: (target − entry) ÷ (entry − stop). The target should be a measured-move projection from the pole length, added to the breakout price. If R:R is 1.4:1 or less, the entry is in the chase zone or the stop is too wide — pass.',
        rules: [
          'Minimum R:R = 1.5:1',
          'Target = pole length projected from breakout',
          'Below 1.5:1 means timing or structure is off',
        ],
      },
      {
        question: 'Is bar +3 always too late, or are there exceptions?',
        answer:
          'Bar +3 is the practical cliff. R:R has degraded below 1.5:1 by then. There is no exception that changes the math — the stop has to live below the flag low regardless of when you entered, so every bar later means more distance to the stop. The only valid response to missing the entry window is waiting for the NEXT flag in the staircase.',
        rules: [
          'Bar +3 = practical cliff (R:R below 1.5:1)',
          'Stop position is fixed regardless of entry timing',
          'Missed window = wait for next flag',
        ],
      },
    ],
    keyRules: [
      "Wait for the 2-minute bar to fully close beyond the trendline",
      "Entry window = 1-3 bars after the breakout close",
      "Late entry = different trade, worse math — pass",
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
        heading: "When MACD Disagrees",
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
    teachingUnits: [
      {
        question: 'In what order should I check the four pillars in real-time?',
        answer:
          'Pattern → MACD → Delta → Volume. Pattern is fastest to read (you have been watching the chart). MACD is the second-fastest read on a quick glance. Delta requires reading the order-flow panel — slower. Volume is read at the moment of the breakout bar — last. The whole scan should take under 5 seconds. If any pillar is unclear, the answer is pass.',
        rules: [
          'Order: Pattern → MACD → Delta → Volume',
          'Total scan time: under 5 seconds',
          'Unclear on any pillar = pass',
        ],
      },
      {
        question: 'How "above average" does the volume bar need to be?',
        answer:
          'At least 1.5x the recent 5-bar average. 2x or higher is the sweet spot. Anything at or below the recent average is a fake — committed participants leave volume footprints, and a breakout without that footprint is algos painting price. The visual cue: the breakout bar should clearly stand out on the volume pane vs the bars before it.',
        rules: [
          'Minimum: 1.5x recent 5-bar average',
          'Sweet spot: 2x or higher',
          'At or below average = fake breakout',
        ],
      },
      {
        question: 'What if MACD is "flat" — does that count as agreement or disagreement?',
        answer:
          'Disagreement. Flat MACD on a clean pattern means momentum is dead — the pole has used its energy. A pole-and-flag setup needs continuing momentum to break out and run; without it, the breakout typically fails within 2-3 bars. Wait for MACD to either curl in the trade direction OR pass on the trade entirely. Flat MACD is not a green light.',
        rules: [
          'Flat MACD = disagreement',
          'Need MACD curling in trade direction',
          'Flat momentum = breakout typically fails 2-3 bars in',
        ],
      },
    ],
    keyRules: [
      "Pattern + MACD + Delta + Volume must all align",
      "Three out of four = pass — no exceptions",
      "Delta disagrees → pattern is a fake — trust the tape",
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
        body: "Three reads: (1) Is the open driving in one direction or chopping at the prior close? (2) Is volume expanding or contracting? (3) Is range building or compressing? Trending = drive + expansion + range. Ranging = chop + contraction + compression. Make the read in the first 15 minutes; revise as the session evolves.",
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
    teachingUnits: [
      {
        question: 'When during the day are flag setups most reliable?',
        answer:
          '9:45-10:30 ET (after the opening range establishes and the first directional move develops) and 2:00-3:30 ET (afternoon resumption when institutional desks come back). 10:30-1:30 ET is midday balance and most flag setups fail there. The lunch hour (12:00-1:00 ET) is the worst — low volume, no commitment, false breaks everywhere.',
        rules: [
          'Best windows: 9:45-10:30 ET and 2:00-3:30 ET',
          'Avoid: 10:30-1:30 ET (midday balance)',
          'Worst: 12:00-1:00 ET (lunch)',
        ],
      },
      {
        question: 'How long should I wait for the session to "show its hand" before trading?',
        answer:
          '15 minutes. The opening range (first 30 minutes) gives you the floor and ceiling for the morning. The first 15 minutes show whether the session is driving or balancing. Trying to take setups in the first 5 minutes (before the regime is clear) is gambling — the open often whips both ways before settling.',
        rules: [
          'Wait 15 minutes for regime clarity',
          'First 30 minutes = opening range',
          'First 5 minutes = whippy, do not trade',
        ],
      },
      {
        question: 'What if I cannot tell whether it is trending or ranging?',
        answer:
          'Pass. Ambiguous regime = pass. The cost of skipping a session is small (no trades, flat day). The cost of trading the wrong setup in an unclear regime is large (typical 1-2-3 loss day). When the session refuses to show its hand, the right play is to wait — it will declare itself eventually, or it will be a balance day with no good directional trades.',
        rules: [
          'Ambiguous regime = pass',
          'A flat day is better than a 1-2-3 loss day',
          'Patience is itself a position',
        ],
      },
    ],
    keyRules: [
      "Read the session in the first 15 minutes",
      "Trending = trend trades; ranging = range trades — do not mix",
      "Identify the transition bar; switch playbook on transition",
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
        heading: "The Trap of Chasing the First",
        body: "After missing flag #1, the temptation is to chase — to enter mid-pole on flag #2 because 'the trend is strong.' This is a different trade with worse math. Treat flag #2 as if you had just walked up to the chart cold. Apply the same rules. If the rules do not fire, pass.",
      },
      {
        heading: 'When the Staircase Ends',
        body: 'The staircase ends when (1) a flag retraces past 50% (Principle 4), (2) the session transitions out of trend (Principle 2), or (3) multi-confirmation fails on a fresh setup (Principle 7). One of these will happen; the trend is not infinite. Stop after the end-signal fires; the next trend is not today.',
      },
    ],
    teachingUnits: [
      {
        question: 'How many flags can I expect in a typical trend day?',
        answer:
          '2-4 in a clean trend; sometimes more on extended-range days. Each flag is its own trade with its own R:R. Compounded, they often produce 2-3x the result of a single buy-and-hold trend trade — because each pole-flag step locks profit at the breakout and takes a fresh measured-move target. The staircase is the high-edge trade structure.',
        rules: [
          'Typical: 2-4 flags per trend day',
          'Compound entries beat buy-and-hold',
          'Each flag = own R:R',
        ],
      },
      {
        question: 'Are flags 2 and 3 statistically as reliable as flag 1?',
        answer:
          'Yes — sometimes more reliable. Flag #1 happens before the trend is confirmed; #2 and #3 happen after the trend has demonstrated itself. As long as the same rules fire (pole, 50% line, healthy flag, four-pillar test), the hit rate is comparable. The "diminishing pole" warning is the only caveat — if poles are getting visibly smaller step by step, the trend is tiring and target sizes should shrink.',
        rules: [
          'Same rules → same hit rate',
          'Confirmed trend often boosts hit rate slightly',
          'Caveat: diminishing pole sizes = tiring trend',
        ],
      },
      {
        question: 'How do I know when the staircase is over and I should stop entering?',
        answer:
          'Three signals: (1) the most recent pole\'s 50% line is broken on a close, (2) the session transitions (trend → range), (3) multi-confirmation fails on what looks like a clean setup. Any one of these = staircase done. Do not try to find one more entry; the next trend will be a fresh structure, not a continuation.',
        rules: [
          '50% break of most recent pole = end',
          'Session transition = end',
          'Multi-confirm failure on clean setup = end',
        ],
      },
    ],
    keyRules: [
      "Each flag judged on its own — same rules every time",
      "Missing flag #1 does not disqualify flag #2",
      "Staircase ends on 50% break, session transition, or failed multi-confirm",
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
        heading: "Why Chasing Feels Right",
        body: "Chasing feels right because the trend is real. Buyers driving the pole keep buying after you missed it. The chart goes higher. You feel late. Late feels like missing free money. But late is also where the trend ends — chasers buy the top because they are the last buyers. By the time chasing feels easy, the trade is over.",
        callout: { type: 'principle', text: 'Principle 6: Missed = Gone' },
      },
      {
        heading: "Detachment Drill",
        body: "When you miss a setup, do this: name it ('I missed flag #1'), accept it ('that one is gone'), and reset to the chart cold. The next setup is not penance for the missed one; it is its own trade. The hardest professional skill in trading is the ability to walk away clean from a missed trade.",
      },
      {
        heading: "The 'Just This Once' Trap",
        body: "The single most expensive sentence in trading: 'just this once, I'll chase a little.' Just this once becomes the 7-cent slippage that becomes the 12-tick stop that becomes the loss. Rules are rules because the moment you let one slide, you have no rules. Chase once and you will chase again.",
      },
    ],
    teachingUnits: [
      {
        question: 'Why do late entries always have worse R:R if the target is the same?',
        answer:
          'Because the stop placement is structural — it sits below the flag low regardless of when you entered. If the entry moves up by 1 point but the stop stays put, the risk leg of the R:R grew by 1 point while the reward leg shrank by 1 point. R:R that was 3:1 at the breakout becomes 1:1 three bars later. The math is not optional.',
        rules: [
          'Stop is structural, not negotiable',
          'Late entry = wider risk leg + narrower reward leg',
          'R:R decays roughly 1pt per bar',
        ],
      },
      {
        question: 'What separates a "chase" from a legitimate late entry on bar +1?',
        answer:
          'Bar +1 is still inside the window — R:R has degraded slightly but still meets the 1.5:1 minimum. A chase is bar +3 or beyond, where R:R has fallen below 1.5:1. The line is mathematical, not emotional. Use the calculator, not the gut: if R:R ≥ 1.5:1, OK; if R:R < 1.5:1, chase.',
        rules: [
          'Bar +1 = legit late entry (R:R still ≥ 1.5:1)',
          'Bar +3 onward = chase (R:R < 1.5:1)',
          'Math, not feeling, draws the line',
        ],
      },
      {
        question: 'How do I actually run the detachment drill in real-time?',
        answer:
          'Out loud, three sentences, in order: "I missed it." "That one is gone." "Next setup is the next trade." This is not optional repetition — saying it out loud cuts the chase reflex faster than thinking it. After saying it, look away from the chart for 10 seconds. Then come back fresh. The drill takes 15 seconds; it saves 15 minutes of chase pressure.',
        rules: [
          'Three sentences, out loud, in order',
          'Look away for 10 seconds',
          'Return to chart cold',
        ],
      },
    ],
    keyRules: [
      "Window closed = trade gone — do not chase",
      "Late entry is a different trade with worse math",
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
    teachingUnits: [
      {
        question: 'Does the rule reset if I switch direction (3 short losses, then go long)?',
        answer:
          'No — the rule is per-session, total losses (any direction). Switching direction after 3 losses is recovery psychology — the brain trying to "make it back" by inversion. The 4th attempt in any direction has the same compromised judgment. The rule is about emotional state, not direction. 3 losses, period, then close the platform.',
        rules: [
          'Rule is per-session, any direction',
          'Switching direction does not reset the count',
          'Emotional state is the issue, not direction',
        ],
      },
      {
        question: 'What if the setup after L3 looks objectively perfect?',
        answer:
          'It almost always looks perfect — that is the trap. The 4th setup AFTER 3 losses appears more compelling because the brain is hungry for resolution. The probability that you would have taken the same setup at 8 AM cold is much lower than the probability you take it at 11 AM after 3 losses. The chart is biased by your state; the rule is the corrective.',
        rules: [
          'Post-L3 setups appear more compelling than they are',
          'Compare: would I have taken this cold at 8 AM?',
          'The rule corrects state-biased reads',
        ],
      },
      {
        question: 'Should I journal during the session or after?',
        answer:
          'After. Journaling at the desk during the session keeps the brain on the chart, which keeps the chase reflex alive. Walk outside, get distance, then journal — the perspective shift is the value. Journal each loss: what was the regime read, did all 4 pillars fire, did I see and ignore a signal, what was my emotional state. Tomorrow opens with that read.',
        rules: [
          'Journal AFTER the session, with distance',
          'Cover: regime, 4 pillars, ignored signals, emotional state',
          'Tomorrow opens with the read',
        ],
      },
    ],
    keyRules: [
      "3 same-direction losses → stop, no exceptions",
      "Close the platform; do not journal at the desk",
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
        body: "Not every drop is a capitulation. A drop on average volume that breaks key support and continues lower is a real trend, not a flush. The volume signature is the tell: capitulation has a volume spike that visibly stands out on the volume pane. Trends have steadily expanding volume without the spike. If the spike is not there, treat it as a trend, not a trap.",
      },
    ],
    teachingUnits: [
      {
        question: 'What time window is "first 30 minutes" exactly?',
        answer:
          '9:30-10:00 ET for stock index futures and equities. The first 15 minutes are most likely to capitulate; 9:45-10:00 is where the climax bar typically prints if the open was a flush. Capitulations OUTSIDE this window are usually news-driven and follow the same shape but at a different time of day.',
        rules: [
          'Equities/indexes: 9:30-10:00 ET highest probability',
          'Climax bar usually at 9:45-10:00',
          'Outside window = usually news-driven, same shape',
        ],
      },
      {
        question: 'How do I size the reversal trade after a capitulation?',
        answer:
          'Same as any other trade — risk 1R based on stop distance from entry. The temptation is to oversize because "the bounce will be huge" — resist it. Sizing is a function of risk, not opportunity. The capitulation reversal target is often 1.5-2x the original drop, but that does not justify breaking the sizing rule. Same R, larger expected return = the structural edge.',
        rules: [
          'Size by risk, not by expected reward',
          'Target is often 1.5-2x the original drop',
          'Same R, larger reward = structural edge',
        ],
      },
      {
        question: 'What do I do if the hammer prints but the next bar fails to confirm?',
        answer:
          'Pass. The hammer alone is not enough — the confirmation bar is required. If the bar after the hammer prints lower or fails to break the hammer high, the floor signal is invalid. Wait for a NEW hammer or move on to the next setup. Do not "give it more time" — the cost of being wrong on a capitulation entry is unusually large because the position is held against the dominant direction.',
        rules: [
          'Hammer alone = not enough',
          'Confirmation bar must print higher',
          'Failed confirmation = pass, not "more time"',
        ],
      },
    ],
    keyRules: [
      "Big drop + 2-3x volume + 4-8 bars = likely capitulation",
      "Wait for the floor (hammer or reclaim) — do not short the drop",
      "First valid long setup after the floor is the trade",
    ],
    principlesUsed: [10, 2, 7],
  },
];
