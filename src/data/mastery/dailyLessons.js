// Daily Lessons — the living, growing part of Live Trading Mastery.
// Reverse-chronological by date. New lessons get added by the daily prompt.

const may12_2026 = {
  date: '2026-05-12',
  title: 'The Day The Runner Ran',
  subtitle: 'From capped winners to a $1,227 sim breakthrough — and the structural framework that produced it.',
  sessionSummary:
    "A breakthrough day. After 5.5 years of capped winners, today the system finally produced what 5 years of pattern recognition could not — a +$1,227 sim session driven by a single change: letting the runner run. The conversation moved through three nested layers of the same lesson. Layer 1 was structural — how to read a double bottom honestly (where IS the neckline?), and when the textbook 'early entry' setup is gambling vs edge. Layer 2 was the trendline course Arnie has needed for years — what to connect, when to redraw, the 2-touch vs 3-touch rule, body vs wick, and the four trades a trendline gives you. Layer 3 was the mechanical fix that made the breakthrough possible — stops from STRUCTURE not from how much pain feels tolerable, take-profits from a GEOMETRIC ladder not from arbitrary tick counts, and one ATM template (1R / 2R / 4R / 8R) that uncaps the upside without changing the entry or stop. The session closed with a real lived proof: the same setups Arnie has been taking for years, with one structural change to the exits, produced his first +$1,227 sim session. The micros-vs-fulls commission question came last — answer was to stay on micros until the discipline is muscle memory. Today is the day the system started doing its job.",
  tradesReview: [
    {
      instrument: 'M2K JUN26 + MES JUN26 (sim)',
      setup: 'Same setups Arnie has read for 5.5 years — double bottoms, bullish engulfings, trend reversals — but executed with new ATM template (16 contracts split 4/4/4/4 on M2K; 8 contracts split 2/2/2/2 on MES) and a TP ladder of 1R / 2R / 4R / 8R instead of the prior capped 1R-2.67R range.',
      decision: 'ENTERED LONG, LET T3 AND T4 FILL — the discipline change Arnie has been told to make for years and never made until today.',
      outcome: 'WIN — sim P&L +$1,227. T3 and T4 both filled on the same session for the first time. Arnie watched the price climb past his old comfort zone and DID NOT close — exactly the discipline that has eluded him for 5.5 years.',
      lesson: "Same charts. Same hands. Same brain. Different ceiling. The entire difference between 5.5 years of struggling and a profitable session was sitting in the take-profit boxes of the ATM template — not in the analysis, not in the timing. The market kept paying because it wasn't told to stop. The breakthrough is locked in by the template — the discipline is mechanical now, not heroic.",
    },
  ],
  teachingUnits: [
    {
      id: 1,
      title: "Three entry strategies on a double bottom — pick by environment, not by feel",
      concept:
        "Every double bottom offers three entries, not one. Strategy A (Mentor's Early) — enter 2 ticks above the prior candle, tight stop below the troughs, brutal R:R if it works (3:1+). Strategy B (Conservative Neckline) — wait for body close above the wick high of the swing-high candle, worse entry, much higher win rate. Middle Path — wait for a higher low to confirm after the second trough, then enter on the break of the intervening swing high. Each has a use case.",
      detail:
        "Strategy A wins big when conditions are clean (no upper wick on the engulfing, follow-through within 1-3 candles, volume sustained, HTF trend supportive). Strategy A LOSES BIG when the chart is counter-trend, has a meaningful upper wick rejection, fails follow-through, and the current candle is still red testing the lows. The Middle Path is what's missing from most retail education — it's not 'as early as possible' and it's not 'wait for full pattern' — it's 'wait for structural proof that buyers are stepping back in, then enter.'",
      applicationToday:
        "On the RTY chart that started the conversation, all six warning signals were lit — strong downtrend, wick rejection on the engulfing, 5+ candles of failed follow-through, fading volume, current red candle testing the lows again. Strategy A here was gambling, not edge. The Middle Path was the right call. On the MES chart it was the opposite — trendline break, minimal wick, shallow pullback, elevated volume. There Strategy A was justified.",
      rule: 'Strategy A only when 5+ of 6 confirmation signals are present. Middle Path when 3-4. Skip entirely when 0-2. The chart tells you which one you are allowed to use.',
    },
    {
      id: 2,
      title: 'Wick high vs body high — two necklines, two jobs',
      concept:
        'The BODY high of the swing candle between two troughs is the STRUCTURAL neckline — it is the consensus zone, the price level where most volume traded, the level used for measuring pattern depth and projecting targets. The WICK high is the CONFIRMATION trigger — the level a candle must body-close above to prove sellers have been absorbed.',
      detail:
        "The body shows where buyers and sellers AGREED to stop trading. The wick shows where sellers were present and pushed price back down — it is the footprint of supply. So you measure FROM the body (structural truth), but you enter ABOVE the wick (sold-stop). Using wick high as entry trigger protects you from the exact 'got faked out by a wick' scenario Arnie was worried about.",
      applicationToday:
        "On the RTY chart, body high was ~2830 and wick high ~2831.5. The 1.5-point gap was where Arnie's mentor wanted him to enter (2-ticks-above style). The 'safer' answer: measure depth using 2830 (so measured move target stays accurate), but only pull the trigger on a candle close above 2831.5 (so the upper wick is broken, not just touched).",
      rule: 'Measure from the body. Enter above the wick. Two different levels, two different jobs — never confuse them.',
    },
    {
      id: 3,
      title: "The 6-signal warning panel — when 'early entry' becomes gambling",
      concept:
        'Before pulling the trigger on an aggressive early entry, score the setup against six confirmation signals. Each signal answers a different question about whether the reversal is real or just a pause in the trend. Five or six lit = green light. Three or four = middle path only. Two or fewer = skip entirely.',
      detail:
        "The six signals: (1) Higher-timeframe trend supportive or neutral. (2) Bullish engulfing candle clean — minimal upper wick. (3) Volume on engulfing above average AND sustained on follow-through. (4) Double bottom forming at a known HTF demand zone. (5) Subsequent 1-3 candles continuing higher, not stalling. (6) Current candle bullish or at minimum not red and testing the lows. Each is binary — yes or no. No 'kinda.'",
      applicationToday:
        'RTY scored 1 of 6. MES scored 4 of 6. Same setup TYPE (double bottom + engulfing). Wildly different read. The signal panel is what separates pattern-recognition from edge.',
      rule: "Score every early-entry setup against the 6-signal panel BEFORE clicking buy. If you can't honestly score 5+ green, you don't get to take the aggressive entry. No exceptions.",
    },
    {
      id: 4,
      title: 'The real neckline = the top of the bounce between the two troughs (not every shelf below it)',
      concept:
        "The neckline of a double bottom is the SWING HIGH between the two troughs — the middle peak of the 'W' shape. It is not 'whatever resistance level looks closest.' It is not 'the highest shelf inside the right-side decline.' It is specifically the top of the up-leg that separates the two bottoms.",
      detail:
        'Inside the right leg of a W there are often minor consolidation shelves — pauses on the way down. Those shelves can cause small bounces or rejections, but they are NOT the neckline. The neckline is the price level that, once broken cleanly upward, confirms that buyers have overpowered the sellers who created the middle peak. Trace the W. The top of the middle stroke = neckline.',
      applicationToday:
        'On the MES chart, Claude originally called 7387 the neckline. Arnie pushed back — he traced the W himself and saw the actual middle peak was at 7395, where the prior swing high formed. Arnie was right. 7387 was a minor consolidation level inside the right-leg decline. The correction reshuffled everything — measured move went from ~7400 to ~7427, and the early entry suddenly had a 3.8:1 R:R instead of 1:1.',
      rule: "Trace the W. The middle peak is the neckline. Don't draft other lines into it just because they're closer to current price.",
    },
    {
      id: 5,
      title: 'Measured move = pattern depth projected ABOVE the neckline',
      concept:
        "The textbook target for a double bottom is the pattern's depth projected upward from the neckline. Depth = neckline price minus the lowest trough price. Target = neckline + depth. This is not magic; it is the assumption that the buyers who absorbed the sellers will keep going at least as far as the sellers pushed.",
      detail:
        "If the neckline is wrong, the measured move is wrong. That's why the wick-vs-body-vs-shelf debate matters — pull the neckline up to the right peak, and the measured move target moves with it. A wrong neckline can shave 50% off your target and turn a 3:1 trade into a 1:1 trade without you realizing it.",
      applicationToday:
        'MES correction: neckline 7395 - trough 7378 = 17-point depth. Target 7395 + 17 = ~7412. That lined up exactly with the 7410.63 level already marked on the chart — confirmation that the right neckline produces the right target.',
      rule: "Always measure pattern depth from the structurally correct neckline (the body high of the W's middle peak). Then project that depth upward. The measured move is non-negotiable once the pattern is correctly identified.",
    },
    {
      id: 6,
      title: "Four faster-than-W entries — when you don't need to wait for the full pattern",
      concept:
        "You don't have to wait 4-6-8 more candles for a textbook double bottom to complete. Four reversal entries exist that fire FASTER than the full W: (1) Bullish rejection at known support, (2) Trendline break entry, (3) First higher low confirmation, (4) Failed breakdown (stop-hunt reclaim).",
      detail:
        'Entry 1: Price reaches a known support level (e.g. S3 pivot, prior structural low) and prints a hammer or bullish engulfing right at that level — enter on the close, stop below the level. Entry 2: A 2-minute candle CLOSES above the descending trendline — enter on the close or on a retest. Entry 3: A swing low forms HIGHER than the prior low (2 candles each side rule), AND price breaks the intervening swing high — enter on the break. Entry 4: Price pokes below known support, then reclaims within 1-2 candles — enter on the reclaim.',
      applicationToday:
        "When Arnie asked 'do I have to wait for the full W?' — the honest answer was no, but ALSO none of these four triggers had fired yet either. The chart was still in active decline. The discipline was to wait for ONE of the four to trigger before risking capital — not to invent an entry because the wait felt boring.",
      rule: "You don't need the full W. You DO need at least one of the four faster triggers to actually fire. Until one fires, the trade does not exist.",
    },
    {
      id: 7,
      title: 'Fibonacci pivots — what S3 actually is and why traders care',
      concept:
        "Fibonacci pivot points are mechanically calculated at the start of each day from yesterday's high, low, and close. PP = (H + L + C) ÷ 3 is the central pivot. S1, S2, S3 are supports below, calculated as PP minus 0.382, 0.618, and 1.000 of yesterday's range. R1, R2, R3 are resistances above. S3 specifically is yesterday's full range projected downward from today's pivot.",
      detail:
        "These levels are not magic — they work because thousands of algorithms and day traders watch the same numbers, so behavior clusters there. At S3, two opposing forces meet: mean-reversion buyers ('a full range down is a lot') and breakdown traders ('S3 broken = capitulation'). That's why S3 is a battle zone, not a guaranteed bounce. It's a reference level, never a destiny.",
      applicationToday:
        "On Arnie's MES chart, S3 was at 7363.08 — calculated by his Fibonacci Pivots indicator from yesterday's intraday data. The chart was a few points above S3. The right play was to watch S3 — if price tested it and printed a rejection candle, that was Entry 1 from the previous unit. If it broke and reclaimed, Entry 4.",
      rule: 'Treat pivot levels as battle zones, not destinies. Combine them with rejection candles, trendline breaks, or higher-low confirmations — never trade them in isolation.',
    },
    {
      id: 8,
      title: 'Trendline anatomy — what you connect, what counts as a swing, 2-touch vs 3-touch',
      concept:
        "A trendline measures the RATE of a trend. Downtrend lines connect SWING HIGHS. Uptrend lines connect SWING LOWS. You never mix highs and lows on the same line. A swing low is a candle with at least 2 candles on each side that have higher lows; a swing high is a candle with 2 candles on each side with lower highs. That's the fractal/pivot definition — and it's what protects you from drawing lines off random noise.",
      detail:
        "Two touches make a HYPOTHESIS. Don't bet money on it. Three touches make a CONFIRMED trendline — that's the threshold where the line is real and other traders are seeing it too. Four or more touches make it SIGNIFICANT — a break is meaningful. On 2-minute charts, draw lines body-to-body (less noisy than wick-to-wick). Use wicks as your break confirmation: a body close past the line's wick anchor = clean break.",
      applicationToday:
        "Arnie's frustration with disappearing trendlines was the universal new-trader frustration — he was drawing lines from non-swing points and not redrawing as new swings formed. The 2-touch hypothesis kept getting broken because it was never real to begin with. The fix: only anchor to CONFIRMED swings (2 candles each side), and don't risk money until you have 3 touches.",
      rule: 'Two touches = hypothesis. Three touches = confirmed line. Anchor only to confirmed swings. Body-to-body on 2-minute charts.',
    },
    {
      id: 9,
      title: 'When to redraw a trendline (and when NOT to)',
      concept:
        'Redraw a trendline when (1) a new confirmed swing high forms above your current line — the rate of decline has slowed; (2) a new confirmed swing high forms below the line — the decline has accelerated; (3) price decisively breaks the line on a body close — the line is dead and you wait for a new structure; (4) you realize you anchored to a non-swing point — common rookie error, fix immediately.',
      detail:
        "DO NOT redraw just because time has passed. A good trendline drawn from real swing points stays valid for hours or days. If your line keeps becoming irrelevant after 20 minutes, the problem is not the trendline — it's that you anchored to noise, not to confirmed swings. The line itself isn't 'wrong' for going stale; it was wrong the moment you drew it from random candles.",
      applicationToday:
        "In active markets on a 2-minute chart, expect to update your major trendline every 30-90 minutes as new swing highs form. In strong trends or calm markets, the same line can stay valid for half a day. Arnie's lines disappearing after 4-12-20 minutes was a symptom of anchoring to non-swings, not a problem with trendlines as a concept.",
      rule: "Redraw only when a new confirmed swing point forms OR price decisively breaks the line. Never redraw to 'make it fit' the current candle.",
    },
    {
      id: 10,
      title: 'The four trades a trendline gives you',
      concept:
        "A trendline isn't one signal — it's four. (1) Fade the line: at the trendline, look for a rejection candle in the trend's direction and enter the continuation. (2) Break the line: a body close on the wrong side = enter in the break direction. (3) Retest after break: former resistance becomes support (and vice versa) — enter on the retouch. (4) Target identification: extend the line forward to spot where future rejections may occur.",
      detail:
        'Trade 1 keeps you trading with the trend. Trade 2 catches the trend change. Trade 3 is the highest-probability of the four — a clean retest with a tight stop on the wrong side of the line. Trade 4 is more art than science. Most traders only know about trade 1 and 2 and miss the highest-probability one entirely.',
      applicationToday:
        "On the MES chart, the descending trendline had already been broken by the bullish engulfing — so Trade 2 was already in play. Arnie's question was whether to enter the break entry now or wait. Honest answer: wait for the next candle confirmation. If price retested and held, that would have been Trade 3 — the cleanest of the four.",
      rule: 'Know which of the four trendline trades you are taking BEFORE you enter. Each has a different stop, a different R:R, a different win rate. Confusing them is what blows up trades.',
    },
    {
      id: 11,
      title: 'Stop from structure. Size from wallet. Never tighten a stop to fit a wallet.',
      concept:
        'The chart tells you WHERE the stop goes. Your account tells you HOW MUCH you can risk. Position size is what bridges them. If the structural stop costs more than your max risk, you reduce CONTRACTS — you do not tighten the STOP. This is the single most important rule in trade construction.',
      detail:
        '5-step protocol: (1) Find your invalidation point — the swing low for a long, the swing high for a short. (2) Add 2-4 ticks of buffer below the WICK, not the body — protects against stop-hunt wicks. (3) Measure dollar risk: (entry − stop) × point value × contracts. (4) Decide max dollar risk BEFORE the trade — typically 0.5-1% of account. (5) If the math does not fit at current size, REDUCE size. Stop stays where structure says.',
      applicationToday:
        "Arnie's live M2K trade had a 2.2-point stop. Structural stop should have been ~5.9 points below the recent swing low. The 2.2 stop was at a level where normal price wiggle would hit it. Same on MES — 6.75 point stop instead of the structurally correct 15. He was choosing stops based on what felt tolerable in dollars, not where the market would prove him wrong. The fix going forward: structural stop first, then size to fit.",
      rule: 'The stop is set by the chart, not your wallet. Position size flexes. A 4-contract trade with a proper stop outperforms an 8-contract trade with a tight stop every single time over 100 trades.',
    },
    {
      id: 12,
      title: 'The take-profit death trap — why capping winners is what 5.5 years has cost',
      concept:
        'Capping your take-profits at 2.67R or 3.33R means your absolute MAXIMUM blended reward is single-digit R. Average filled R is much lower. You need 55-65% win rate just to stay alive. Trading is asymmetric — most of the profit comes from a small number of huge winners. A capped TP structure makes a huge winner literally impossible.',
      detail:
        'Same 50% win rate, same stop, two different exit structures. Trader A with tight TPs: 50 wins × 1.25R = +62.5R, 50 losses × 1R = -50R, net +12.5R over 100 trades. Trader B with 1R/2R partial-and-runner: 50 wins split as partial fills + 25 runners hit 2R + 8 runners hit 5R, 50 losses × 1R, net +57R. Same win rate. Same stop. 4.5x more profit. The entire difference between struggling and succeeding lives in the exit structure, not the entry signal.',
      applicationToday:
        "Arnie's prior M2K setup: 4 contracts each at TPs of 15, 22, 30, 40 ticks. Max blended reward 1.78R. Arnie's prior MES setup: 8 contracts at 15, 30, 40, 50 ticks. Max 2.25R. Both had T4 capped BELOW the actual neckline of the patterns Arnie was trading. He was structurally exiting before the move even confirmed.",
      rule: 'The market decides how far it runs. Your job is to not get in its way. A capped TP is you dictating to the market how much it owes you. Stop dictating.',
    },
    {
      id: 13,
      title: 'The 1-2-Runner framework — three pieces, three jobs',
      concept:
        "Split every position into three equal pieces. Piece 1 = 'confidence locker' — exits at 1R, hits ~70-75% of the time, the instant it fills move stop to break-even. Piece 2 = 'structural win' — exits at the next major structural level (prior swing high, neckline, MA cluster). Piece 3 = 'runner' — NO fixed target, trail behind each new confirmed higher low until structure breaks.",
      detail:
        "Piece 1 is psychological foundation — without locking in something quickly, you cannot hold the rest. Piece 2 is the real money. Piece 3 is where the asymmetric edge lives — the runner is what pays for many losing trades when it hits the home-run zone. Mathematically: you only need a few runners per month to triple your blended R. The runner replaces 'pre-set T4' with 'market-set runner exit' — you set entry and stop; market sets the runner's exit.",
      applicationToday:
        "Arnie's MES trade reframed: 6 contracts (2/2/2) at entry 7377.25, stop 7370.50 (or wider to swing low). Piece 1 = 7381 (1R confidence locker). Piece 2 = 7387 (structural). Piece 3 = trail above neckline 7395 toward measured move 7412 (and beyond if the market wants). Same entry, same stop, vastly larger upside.",
      rule: 'Three pieces. Three jobs. Piece 1 locks confidence. Piece 2 books the structural win. Piece 3 catches what the day actually wants to pay.',
    },
    {
      id: 14,
      title: 'The ATM template — 1R / 2R / 4R / 8R geometric progression',
      concept:
        "The recommended NinjaTrader ATM template uses a GEOMETRIC progression of take-profits: T1 at 1R, T2 at 2R, T3 at 4R, T4 at 8R. The stop stays constant on all targets (15 ticks). Quantity splits evenly across the four targets. This is not Fibonacci — it's a doubling ladder that uncaps the runner without forcing every trade to be a home run.",
      detail:
        'M2K template: 16 contracts (4-4-4-4), stop 15 ticks all targets, TPs at 15 / 30 / 60 / 120 ticks. Total risk $120 → max possible reward $450 → blended 3.75R if all hit. MES template: 8 contracts (2-2-2-2), stop 15 ticks all targets, TPs at 15 / 30 / 60 / 120 ticks. Total risk $150 → max possible reward $562.50 → blended 3.75R if all hit. T4 at 120 ticks hits ~5-10% of the time — exactly the rate that makes it function as a runner.',
      applicationToday:
        "Save these as 'M2K_1R_2R_4R_8R_RUNNER' and 'MES_1R_2R_4R_8R_RUNNER' templates in NinjaTrader. The discipline becomes mechanical — every trade starts from the same template, then in-trade adjustments tune to structure (drag stop to swing low + 3 ticks; drag T2/T3 to visible structural levels; LEAVE T4 alone or extend it).",
      rule: '1R / 2R / 4R / 8R is the standard. Stop from structure. T4 stays at 8R or further — never pulled in. The discipline is in the template, not in heroic willpower.',
    },
    {
      id: 15,
      title: 'The stop ladder — move stops UP as targets fill, never down',
      concept:
        "Stops are not set-and-forget after entry. They ratchet UP in stages as targets fill — each stage locks in incremental profit without giving the trade structural room to breathe. Stage 0: initial structural stop. Stage 1: T1 fills → move stop to BREAK-EVEN. Stage 2: T2 fills → move stop to T1's price (locks in +1R minimum on remaining). Stage 3: T3 fills → move stop to T2's price (locks in +2R minimum on the runner).",
      detail:
        "Critical rule: you only move stops in ONE direction — toward profit. Never widen a stop mid-trade to 'give it room.' That's the disease that turns a $200 planned loss into a $1,200 actual loss. If structure forces a wider stop, that decision must be made BEFORE entry, not after the trade is going against you.",
      applicationToday:
        'The breakthrough today happened because Arnie left T3 and T4 in place. With the stop ladder discipline added, the runner is structurally protected — once T1 fills, the worst-case becomes break-even. Once T2 fills, the worst-case becomes +1R minimum. Once T3 fills, +2R minimum with up to +8R upside on the runner. The math works at every step.',
      rule: 'Stops only ratchet toward profit. T1 fills → BE. T2 fills → lock T1. T3 fills → lock T2. Never the other direction.',
    },
    {
      id: 16,
      title: "Today's breakthrough — same charts, same brain, different ceiling",
      concept:
        "Today produced Arnie's first +$1,227 sim session not because the setups were better, not because the market was generous, not because timing was sharper. The only change was the take-profit ceiling. Same patterns. Same hands. Same eyes. The entire difference between 5.5 years of being almost-profitable and being profitable was sitting in the TP boxes of the ATM template.",
      detail:
        "Watch what your brain does the next time T1 fills and the urge to 'flatten before it pulls back' returns. That is the 5.5-year-old voice. The new voice — the one that produced +$1,227 today — knows the runner is where the money lives, that it hits maybe 1 in 10 trades, but when it does it pays for all the losers. This is the discipline that distinguishes profitable traders from everyone else. It is now PROVEN in your own account, not theoretical.",
      applicationToday:
        "Save the templates. Run the same discipline another 50 trades in sim before scaling to real money. Track each trade in a journal — entry, stop, T1/T2/T3/T4 hits, what you FELT at each one. The journal is where the discipline gets locked in permanently. Don't increase contract size for at least a month of consistent profitable sim runs — adding leverage to a brand-new habit is how breakthroughs get given back.",
      rule: "The runner is the edge. Lock in the template. Same discipline 50+ more times before scaling up. Don't trade the breakthrough for a commission discount — micros stay until the habit is muscle memory.",
    },
  ],
  chartReferences: [
    {
      caption: 'RTY 2-min — Strategy A vs Strategy B vs Middle Path',
      analysis:
        "The original double bottom + bullish engulfing chart that started the conversation. Strategy A (Mentor's Early) called for entry 2 ticks above the prior candle near 2825. Strategy B (Conservative Neckline) waited for body close above 2831.5. Middle Path waited for a higher low to form above 2823 and then a break of the most recent swing high. The chart scored 1 of 6 warning signals green — meaning only the Middle Path or skip were valid choices.",
      symbol: 'RTY',
      timeframe: '2-minute',
      date: '2026-05-12',
    },
    {
      caption: 'MES 2-min — trendline break + 4-of-6 confirmation, middle path entry',
      analysis:
        'The MES chart that produced the corrected neckline at 7395. Bullish engulfing broke the descending trendline, minimal upper wick, shallow pullback, elevated volume — 4 of 6 confirmation signals green. Middle path entry triggered above 7384.75, structural stop below 7378, scaled targets ladder 7387 / 7395 / 7412.',
      symbol: 'MES',
      timeframe: '2-minute',
      date: '2026-05-12',
    },
    {
      caption: 'M2K JUN26 sim — the +$1,227 session, where T3 and T4 actually filled',
      analysis:
        "First sim session in 5.5 years where T3 and T4 both filled on the same trade. Same setup type Arnie has read for years. The only structural change: the 1R / 2R / 4R / 8R ladder replaced the prior 1R / 1.47R / 2R / 2.67R ceiling. The market kept paying because it wasn't told to stop.",
      symbol: 'M2K',
      timeframe: '2-minute',
      date: '2026-05-12',
    },
  ],
  keyRules: [
    'Strategy A only if 5+ of 6 confirmation signals are present — otherwise middle path or skip',
    'Measure the neckline from the BODY high; pull the trigger above the WICK high',
    'Trace the W — the middle peak is the neckline, not every shelf below it',
    'Faster-than-W entries: rejection at support, trendline break, higher low, failed breakdown — at least one must fire',
    'Trendlines: 2 touches = hypothesis, 3 touches = confirmed, never anchor to non-swing candles',
    "Redraw a trendline only when a new confirmed swing forms or price breaks — never to 'make it fit'",
    'Stop comes from structure. Size flexes to the wallet. NEVER tighten the stop to fit dollar risk',
    'T1 at 1R is the confidence locker. The runner is the edge — never cap it below 8R or further',
    'Save M2K_1R_2R_4R_8R_RUNNER and MES_1R_2R_4R_8R_RUNNER ATM templates today',
    'Stops only ratchet TOWARD profit — T1 fills → BE; T2 fills → lock T1; T3 fills → lock T2',
    'Stay on micros until 50+ profitable sim trades + 100+ profitable live trades cement the discipline',
    'The market decides how far it runs. Your job is to not get in its way',
    "Score every entry against the 6-signal panel BEFORE the click — no 'kinda' allowed",
    "The 5-step stop protocol replaces every prior 'tighter feels safer' habit",
    'The breakthrough is mechanical, not heroic — the template enforces the discipline',
  ],
  principlesReinforced: [1, 3, 4, 5, 6, 7, 8, 9, 10],
  whatIllDoDifferently:
    "Tomorrow opens with the new ATM templates saved in NinjaTrader and ready to fire from the first trade. Before any click, I score the setup against the 6-signal panel — five or six green for early entry, three or four for middle path, two or fewer means skip. I draw trendlines only from confirmed swing highs (downtrend) or swing lows (uptrend), 2 candles each side, body-to-body. I trace every double bottom W to find the real neckline at the top of the middle peak, not the closest shelf below it. I measure pattern depth from the body high and project the measured move target so I know where the trade is allowed to run. I set my stop from structure — swing low + 3 ticks below the wick — and if dollar risk exceeds my max, I reduce contracts, not the stop. I split entries into 4 equal pieces with the 1R / 2R / 4R / 8R ladder. The instant T1 fills, stop to break-even. T2 fills, lock T1's price. T3 fills, lock T2's price. T4 stays untouched as the runner. The market decides when the move is over — I just stay out of its way. 5.5 years of capped winners ends today. The breakthrough is locked into the template — the discipline is mechanical now, not heroic.",
  closingThought:
    "Same charts. Same hands. Same brain. Different ceiling. The breakthrough wasn't a discovery — it was a permission slip. Today the system finally let the market pay what it wanted to pay.",
};

const foundationDay = {
  date: '2026-05-06',
  title: 'Foundation Day — Building the Spine',
  sessionSummary:
    "The first conversation establishing the 10 Master Principles framework. Aligned on pole-first thinking, the bull-flag-as-spine concept, and the move from pattern recognition (5.5 years of it) to systematic execution. The framework's purpose is not to teach more patterns; it is to enforce one decision tree consistently every time.",
  teachingUnits: [
    {
      question: 'Why has 5.5 years of pattern recognition not produced consistent profitability?',
      answer:
        'Pattern recognition without a decision tree leaves every setup re-litigated in the moment. The chart triggers an emotional read; the read triggers a take or a pass; the take or pass is rationalized after the fact. The fix is not more patterns; the fix is one decision tree applied identically every time. The 10 Master Principles are that decision tree. The job from here is not to learn more shapes — it is to apply the same rules with no exceptions.',
      rules: [
        'Pattern recognition is a prerequisite, not a strategy',
        'A decision tree applied identically every time beats more patterns applied inconsistently',
      ],
      principleReinforced: 7,
    },
    {
      question: 'Why "pole first" before any other read?',
      answer:
        'A bull flag and a bear flag are visually identical except for direction. The shape of the flag does not tell you the direction of the trade — only the prior pole does. Reading the flag without first identifying the pole is guessing direction. Five-second test: if the pole is not obvious in five seconds, there is no setup. This filter eliminates 60-70% of "almost-trades" that have been the source of the missed-reset losses.',
      rules: [
        'Find the pole within 5 seconds — or pass',
        'Pole defines direction; flag is confirmation only',
      ],
      principleReinforced: 1,
    },
    {
      question: 'What does the 50% line do that nothing else can?',
      answer:
        "The 50% retrace line is the single binary signal on the chart that does not require interpretation. Under 50%, the pole's participants are still in control. Over 50%, control has shifted. There is no 'almost' or 'wait and see.' Closing past 50% is the cleanest thesis-kill signal and is the line that should have ended dozens of past trades 5-15 minutes earlier than they were closed.",
      rules: [
        'Mark the 50% line on every pole — non-negotiable',
        'Close past 50% = cancel and reassess; do not adjust',
      ],
      principleReinforced: 4,
    },
    {
      question: 'How does the staircase change how to handle a missed first flag?',
      answer:
        'A trend is not one trade — it is a stack of independent flags. The participants who built pole #2 are not the same participants who built pole #1; the volume signature, MACD agreement, and delta are all fresh. Missing flag #1 is not a reason to chase, and it is not a reason to skip flag #2. Flag #2 is a clean trade with clean rules. The professional move is to detach from flag #1 the moment the window closes and approach flag #2 as if walking up to the chart cold.',
      rules: [
        'Each flag judged independently — same rules every time',
        'Detach from missed trade the moment the window closes',
      ],
      principleReinforced: 5,
    },
    {
      question: 'Why "wait for the close" is non-negotiable',
      answer:
        'Wicks are probes. A wick through the trendline that closes back inside means the participants on the other side were stronger than the wick suggested. A close beyond the trendline is a market commitment — the other side capitulated within the 2-minute window. The cost of waiting for the close is missing a small fraction of the move. The cost of entering on the wick is being on the wrong side of every probe-and-reverse. The math favors the close every time.',
      rules: [
        '95% of valid entries require a fully-closed bar beyond the trendline',
        'Wicks lie; closes are commitments',
      ],
      principleReinforced: 3,
    },
  ],
  chartReferences: [
    {
      caption: 'Reference: Bull Flag template from Uni at TTG',
      analysis:
        'The textbook bull flag is the visual reference for what a healthy pole-and-flag looks like: a 4-8 bar pole on expanding volume, a 3-7 bar drift on contracting volume, the flag staying inside the upper half of the pole (above the 50% line), and a breakout close on volume confirmation. This is the shape the eye is being trained to find — and only when found, to act on.',
      symbol: 'Reference',
    },
  ],
  keyRules: [
    'Pole first, every time — five-second test or pass',
    'Mark the 50% line on every pole',
    'Wait for the 2-minute close — wicks lie',
    'Each flag in a staircase is independent',
    'Pattern + MACD + Delta + Volume must all align — four out of four',
  ],
  principlesReinforced: [1, 3, 4, 5, 7],
  whatIllDoDifferently:
    'Stop reacting to flag shape. Identify the pole first, every single time. Mark the 50% line as soon as the pole forms. Wait for the close. Apply the four-pillar test to every entry — no exceptions, no "this one looks too good to wait."',
};

const may7_2026 = {
  date: '2026-05-07',
  title: 'The Day Five Years Started to Turn',
  sessionSummary:
    'A foundational deep-dive covering pole identification, flag mechanics, entry timing, the 50% retracement rule, multiple-flag staircase trading, capitulation drops vs trend starts, trending vs ranging environments, and the psychological patterns behind repeated same-direction losses. Six losing live trades analyzed in detail, each producing a specific rule. Established the 10 Master Principles foundation. Built and verified the Live Trading Mastery module across both training programs. Final live attempt — long into OBv resistance — confirmed the value of the Daily Reset Rule and became the reason to stop. Today is the day the system started doing its job.',
  teachingUnits: [
    {
      question: 'Where should the stop go on a double bottom — below the trough, below the neckline, or in between?',
      answer:
        "There's no universal answer — it depends on entry quality and R:R needs. Bulkowski's research shows tight stops near recent lows get hit 61.5% of the time within a month, while throwbacks routinely test or dip 1-3% below the neckline on winning patterns. The hybrid solution: hard stop at the midpoint between neckline and second trough — that's the 'I was wrong about this trade' line. Add a mental rule that any candle CLOSING below the neckline = exit immediately, regardless of where the hard stop is. Verify before entry that the midpoint distance is at least 1.5x ATR. If it's tighter than that, the noise band will eat the stop.",
      rules: [
        'Hard stop at midpoint between neckline and second trough',
        'Mental exit rule: candle close below neckline = out, regardless of stop',
        'ATR check: midpoint distance must be at least 1.5x current ATR',
        'If midpoint is too tight for ATR, default to below the second trough',
      ],
      principleReinforced: 7,
    },
    {
      question: 'How do I tell if a chart is showing a bull flag or a bear flag when the consolidation looks identical in both?',
      answer:
        "They ARE identical in shape. The flag never tells you direction. Only the pole does. A flag is always a continuation of whatever came before it. Strong move up + pause = bull flag. Strong move down + pause = bear flag. The consolidation in the middle looks the same in both cases. Pros don't try to read it — they look at the prior impulse. Find the pole first. Always.",
      rules: [
        'Before any flag analysis, identify the prior impulsive move (the pole)',
        'Pole direction equals trade direction — flag shape never decides it',
        "If you can't immediately identify a clear pole, there is no flag — just noise",
        'Use the 5-minute timeframe to confirm pole quality if 2-minute is unclear',
      ],
      principleReinforced: 1,
    },
    {
      question: 'What actually counts as a valid pole? Can it be just one candle on a 2-minute chart?',
      answer:
        "Yes — a single large candle absolutely qualifies, especially on news-driven moves or open spikes. The pole is defined by character, not candle count. Valid poles include: one big candle, 3-5 consecutive candles with minimal body overlap, or candles with one shallow bounce inside (if the bounce retraces less than 30% of the prior move). What's NOT a pole: choppy back-and-forth where each down move retraces 50% or more before continuing. Test: zoom out to 5-minute. If it still looks like one strong impulse, it's a pole.",
      rules: [
        'Single candle on high volume can be a complete pole',
        'Multiple candles need minimal body overlap and steep angle',
        'A bounce within the pole is OK only if it retraces less than 30 percent',
        'Choppy with 50%+ retracements equals not a pole, just a trend',
        'Zoom-out test on the 5-minute confirms or denies pole quality',
      ],
      principleReinforced: 1,
    },
    {
      question: 'On a flag breakout entry, do I wait for the full candle to close, or can I enter when it breaks the trendline?',
      answer:
        "Wait for the close. 95% of entries should require a full 2-minute candle to close beyond the trendline. Wicks pierce trendlines constantly on fast timeframes and snap back — the close is your confirmation that buyers or sellers actually won that bar. There's a narrow exception: if price breaks with explosive velocity (4-6 points already past the line with time still left in the bar), and volume is surging, AND delta has flipped strongly in your direction. But this exception requires all three together. Make 'wait for the close' automatic.",
      rules: [
        'Default rule: a 2-minute candle must CLOSE beyond the trendline',
        'Wicks lie. Closes are truth.',
        'Exception requires explosive velocity AND volume surge AND delta flip',
        'When in doubt, wait for the close every single time',
      ],
      principleReinforced: 3,
    },
    {
      question: 'Are breakout entries always risky? You said the bull flag breakout was risky but the double bottom neckline breakout is fine — why?',
      answer:
        "Breakouts aren't the problem — stop logic is. Every entry, breakout or pullback, is only valid if the pattern structure gives a nearby, logical stop that creates acceptable R:R. The double bottom neckline breakout works because the pattern defines the stop. The bull flag trendline breakout works because the flag's low defines the stop. The risky breakout is the 'immediate resumption' move where there's no flag structure formed yet. Unifying rule: never enter where you can't immediately answer 'where exactly is my stop?' If you can't answer in 5 seconds, don't take the trade.",
      rules: [
        'Every entry needs a structurally defined stop that creates acceptable R:R',
        'Pattern structure (flag low, second trough, neckline) gives clean stops',
        'No defined structure equals no logical stop equals pass',
        '5-second test: can you state your stop and R:R immediately?',
      ],
      principleReinforced: 7,
    },
    {
      question: 'When does a flag setup get invalidated? How much retracement is too much?',
      answer:
        'When the flag retraces more than 50% of the pole, the flag thesis is dead. Cancel it. A clean flag retraces 25-50% of the pole. When the retrace exceeds 50-60%, you no longer have a flag — you have a reversal in progress. This is exactly what happened on the RTY capitulation chart today: the bounce retraced 80-90% of the initial drop, which meant the bear flag thesis died. Continuing to short into that retracement was fighting a market that had clearly changed direction.',
      rules: [
        'Flag retraces less than 50% of pole = setup intact',
        'Flag retraces 50-60% = warning, weakening setup',
        'Flag retraces more than 60% = setup is DEAD, cancel the trade idea',
        "Don't search for new entries on a setup that has been invalidated",
      ],
      principleReinforced: 4,
    },
    {
      question: 'If I missed the first flag in a trend, can I take the second or third flag that forms?',
      answer:
        'Yes — absolutely. A trending market makes a staircase. Each pole-flag-pole-flag step is its own independent trade with the same rules. Second and third flags are often CLEANER setups because the trend has now confirmed itself. Apply the same checklist every time. Warning sign: if poles are getting noticeably shorter step by step, the trend is tiring — take a smaller target or skip.',
      rules: [
        'Each flag in a sequence is its own independent trade',
        'Second and third flags are often more reliable because trend is confirmed',
        'Apply identical entry rules every time',
        'Diminishing pole sizes step-to-step means trend is tiring',
      ],
      principleReinforced: 5,
    },
    {
      question: 'I missed the entry but the setup still looks valid. Can I just enter late?',
      answer:
        "No. When the entry window passes, the trade no longer exists. There is no 'late entry' on a flag setup. Once price has moved meaningfully past the entry candle, you're chasing. Chasing means worse stop, worse R:R, no structural support. This is the impulse that costs the most money: 'I was right about direction, I just want to get in anyway.' Right about direction, wrong about timing — that combination compounds into the biggest losses.",
      rules: [
        "No such thing as a 'late entry' on a flag setup",
        'Once the entry candle has passed, that specific trade no longer exists',
        "Don't chase — entering late means bad stop, bad R:R, no structure",
        'Missing the entry is free; chasing the entry is expensive',
      ],
      principleReinforced: 6,
    },
    {
      question: "What's a capitulation drop and why does it often reverse instead of continue?",
      answer:
        'A capitulation drop is a massive-volume waterfall, usually in the first 30 minutes, that LOOKS like the start of a downtrend but is actually selling exhaustion. Every seller who wanted out sells at once. After that, no sellers left. Going short here is the trap. Counterintuitively, a huge volume spike on a sharp drop at the open is often a buy signal. Clues: volume several times the recent average, sharper than the prior trend, retraces more than 50% of the drop within the first hour. When all three are true, the bear thesis is dead.',
      rules: [
        'Big-volume waterfall in first 30 minutes does not equal trend start',
        'Capitulation means exhaustion, not initiation',
        'If price retraces more than 50% of the drop quickly, the short setup is dead',
        'Watch for the reversal trade after capitulation, not the continuation trade',
      ],
      principleReinforced: 10,
    },
    {
      question: 'How do I know if a session is trending or ranging — and why does it matter?',
      answer:
        "It matters more than the setup itself. Flags only work in trending sessions. In ranging sessions, breakouts get faded. Identify by looking at the prior 30-45 minutes. Higher highs + higher lows = trending up. Lower highs + lower lows = trending down. Oscillation between two levels with reversals at both ends = ranging. If your own system's trend lines are crossing in conflicting directions, that's the system telling you 'trend unclear' — pass on directional trades. The ES choppy day was the example: clean bear engulfings kept firing, real shorts kept getting reversed, because the environment was a range.",
      rules: [
        'Identify trending vs ranging BEFORE looking at any setup',
        'Higher highs + higher lows OR lower highs + lower lows = trending',
        'Oscillation with reversals at both ends = ranging — skip flag setups',
        'Conflicting or crossing trend lines = trend unclear = pass',
      ],
      principleReinforced: 2,
    },
    {
      question: "When my own pattern detector fires the opposite signal while I'm in a position, what should I do?",
      answer:
        "Listen to it. When you're short and a Bullish Engulfing fires on your chart, that is your tool literally telling you 'buyers just overpowered sellers in this candle.' That's not background noise. Same for Bearish Engulfing while long, Evening Star while long, Morning Star while short. Reversal signals = balance just shifted. At minimum raise your stop. More often, close the position on your own terms before the stop hits.",
      rules: [
        'Opposite-direction reversal pattern while in position = take it seriously',
        'Bullish Engulfing while short = consider exit or tighten stop immediately',
        'Bearish Engulfing while long = consider exit or tighten stop immediately',
        'Tools exist to inform you, not to be ignored when they go against your bias',
      ],
      principleReinforced: 9,
    },
    {
      question: 'How many losing trades before I should stop trading for the day?',
      answer:
        "Three same-direction losses in a session equals stop trading. Today is not your day. Walking away IS the trade. After three failed shorts (or three failed longs), the market is telling you this direction is not working today. The fourth attempt is almost always worse because by then your judgment is compromised by recovery psychology — you're not analyzing, you're trying to make back losses. Today's session ended with multiple losses culminating in a long entry into known OBv resistance at 7370. The Daily Reset Rule existed precisely for that moment.",
      rules: [
        'Three same-direction losses = stop trading the rest of the session',
        "Don't switch to opposite direction either if you're emotionally hot",
        'Recovery psychology produces worse trades, not better ones',
        'Walking away is a valid — and often the best — trade',
      ],
      principleReinforced: 8,
    },
  ],
  chartReferences: [
    {
      caption: 'RTY 2-min: Double bottom counter-trend trade',
      analysis:
        'Entered long on a perceived double bottom in the middle of an established intraday downtrend. Setup was technically valid in shape but invalid in environment. Counter-trend setups need higher confirmation than trend-aligned setups, and none of the secondary signals (delta flip, MACD cross, higher-timeframe alignment) were present.',
      symbol: 'RTY',
      timeframe: '2-minute',
      date: '2026-05-07',
    },
    {
      caption: 'ES 2-min: Bull flag in bearish session context',
      analysis:
        "Right pattern shape, wrong environment. The 'pole' was actually a recovery bounce within a larger downtrend (not a clean impulse), the flag candles were choppy, and delta was net negative through the consolidation. Entry into the breakout failed because the underlying flow was still bearish.",
      symbol: 'ES',
      timeframe: '2-minute',
      date: '2026-05-07',
    },
    {
      caption: 'RTY 2-min: Missed bear flag entry then chased',
      analysis:
        "After a clean morning waterfall and Evening Star formation, the ideal short entry was at the close of the Evening Star's third candle. Hesitated through that window. By the time entry was taken, price had recovered most of the original drop. Trade entered against an active recovery — a continuation entry into a reversal already in motion.",
      symbol: 'RTY',
      timeframe: '2-minute',
      date: '2026-05-07',
    },
    {
      caption: 'RTY 2-min: Capitulation reversal mistaken for bear flag',
      analysis:
        'Massive-volume waterfall at 9:00 looked like a bear flag setup. Entered short expecting continuation. Bounce retraced 80-90% of the drop — invalidating the bear flag thesis (50% rule) — and continued into a sustained reversal. Initial drop was a capitulation event, not a trend start.',
      symbol: 'RTY',
      timeframe: '2-minute',
      date: '2026-05-07',
    },
    {
      caption: 'ES 2-min: Multiple shorts in a choppy ranging session',
      analysis:
        "Took multiple short entries on bearish engulfing signals throughout a session that turned out to be a range, not a trend. Conflicting trend lines should have been read as 'trend unclear' — a hard pass on directional trades. Position sizing remained full despite repeated losses. Total commissions over $2,300 on a losing day. Symptom of being married to short direction.",
      symbol: 'ES',
      timeframe: '2-minute',
      date: '2026-05-07',
    },
    {
      caption: 'ES 2-min: Long entry into OBv resistance — the final loss',
      analysis:
        "After multiple losses, attempted to switch direction and go long on a green candle close above 7365. Entry was 2-5 points below an Order Block Validated zone at 7370 where institutional sellers were active. Bearish Engulfing #65 fired immediately at the OBv level. Trade had no room to develop — straight into resistance, reversed in one candle for $700 loss. Structural error: bought on first approach to developing neckline rather than waiting for confirmed breakout AFTER second low forms. Behavioral error: continued trading after multiple losses. This was the trade that proved the Daily Reset Rule's value.",
      symbol: 'ES',
      timeframe: '2-minute',
      date: '2026-05-07',
    },
  ],
  keyRules: [
    'Find the pole BEFORE looking at any flag — pole direction equals trade direction',
    'Identify trending vs ranging environment before considering any directional trade',
    'Wait for the 2-minute candle to fully CLOSE beyond the trendline — wicks lie',
    'Flag retracement greater than 50% of the pole means the thesis is dead — cancel the trade',
    'Each flag in a staircase is independent — apply the same rules every time',
    "When the entry window passes, the trade no longer exists — don't chase",
    'Pattern + MACD direction + Order Flow Delta + Volume must all align before entry',
    'Three same-direction losses in a session means stop trading immediately',
    "When your own system fires the opposite signal while you're in a position, listen to it",
    'Massive-volume drops in the first 30 minutes are often capitulation reversals, not trend starts',
    'Stop logic is everything — every entry needs a structurally defined stop nearby',
    "Don't buy into a known resistance level (OBv overhead) — wait for the break and close above it",
    'The 5-minute chart is the truth-filter for setups visible on the 2-minute chart',
    'Hybrid stop on double bottoms: hard stop at midpoint plus mental exit on neckline close',
    'Recovery psychology produces worse trades — the 4th trade after 3 losses is rarely better than the 1st',
  ],
  principlesReinforced: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  whatIllDoDifferently:
    "Tomorrow opens a fresh session and a fresh chat with Claude. The first thing I do before any trade is identify whether the session is trending or ranging — if it's not clearly trending, I pass on flag setups entirely. The first thing I do before any flag is find the pole — if I can't immediately point to a clean impulsive move, there's no trade. I wait for every entry candle to fully close before pulling the trigger, no exceptions. I count my losses — three in the same direction and I stop trading for the day, no matter how good the next setup looks. I respect my own tools — when a Bullish Engulfing fires while I'm short, or a Bearish Engulfing fires while I'm long, I take it seriously. Today proved every one of these rules in real losses. Tomorrow they're not theory — they're reflexes. The system is built. The principles are written. The losses today became the curriculum. Five years end here.",
};


export const dailyLessons = [may12_2026, may7_2026, foundationDay];

export function getDailyLesson(date) {
  return dailyLessons.find(l => l.date === date);
}

export function formatDailyDate(date) {
  const [y, m, d] = date.split('-').map(Number);
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[m - 1]} ${d}, ${y}`;
}
