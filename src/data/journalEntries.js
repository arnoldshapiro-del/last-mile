// Personal Trading Journal & Reflection — sensitive financial content.
// Locked behind Firebase auth + ALLOWED_EMAILS whitelist via JournalGate.
//
// Each entry uses a section-based shape so the renderer can produce a
// sticky table of contents and consistent typography.
//
// Shape (no TypeScript here, but documented):
//   JournalSection: { id: string, heading: string, body: string }
//   JournalEntry:   { date: string, displayDate: string, title: string,
//                     subtitle?: string, sections: JournalSection[] }
//
// Markdown-lite body syntax (matches Bootcamp renderer):
//   **bold**, - bullets, > blockquote, ### sub-heading,
//   "ALLCAPS LABEL: text..." for callouts (auto-toned by keyword).

export const journalEntries = [
  {
    date: '2026-05-15',
    displayDate: 'May 15, 2026',
    title: 'The Day the Framework Came Together',
    subtitle: 'Inaugural entry. The integrated 4-layer framework, three mistakes, and the bigger truth behind the journey.',
    sections: [
      {
        id: 'numbers',
        heading: 'The Day in Numbers',
        body:
`- **Risk per trade:** $400
- **Net P&L:** +$700 (sim)
- **Risk-reward of the day:** 1.75:1
- **Method:** Integrated 4-Layer Framework
- **Outcome:** Successful application despite mid-session setbacks`,
      },
      {
        id: 'framework',
        heading: 'The 4-Layer Framework',
        body:
`LAYER 1 — DIRECTION (15-minute chart): Identify the overall trend before any trade. Five states: Clean Uptrend, Topping, Chop, Bottoming, Clean Downtrend. Trade ONLY in the direction of the 15-min trend. If chop or transition: stand aside.

LAYER 2 — LOCATION (5-minute chart): Identify the 5-min swing high (for shorts) or swing low (for longs). INCLUDE THE WICK, not just the body. The swing high/low is where the thesis lives or dies.

LAYER 3 — PATTERN (5-minute chart): Watch for reversal patterns AT the swing high/low. Bearish engulfings, double tops, hammers (inverse for longs). Pattern confirms the location is meaningful.

LAYER 4 — TIMING (2-minute chart): Drop to 2-min for entry signal. Wait for trendline break PLUS 2-min lower low (for shorts). Trendline break alone = warning. Lower low = confirmation. Wait for CLOSE, not wick.`,
      },
      {
        id: 'rules',
        heading: 'The Critical Rules',
        body:
`WICKS vs CLOSES: A wick above a level = a TEST (often strong rejection signal). A close above a level = a BREAK (invalidation). For entry: wait for close. For invalidation: wait for close.

STOP PLACEMENT: Place stops ABOVE the wick of the swing high, not at the body. Gives the level room to be tested without killing the trade. Stop goes where the thesis dies, not at an arbitrary distance.

STOP MANAGEMENT — TWO PHASES: Setup Phase (first 30 sec after entry, before price moves): Both stop and targets can be adjusted to structure. Widening is OK if structure demands it. Management Phase (after price moves): Stops only tighten or trail. NEVER widen.

THE CRITICAL SELF-CHECK: "Am I widening this because structure tells me to, or because I don't want to take this loss?" Structure: do it (in setup phase only). Emotional: don't touch it. That's the trade trying to kill you.

POSITION SIZING: Size the trade based on the structural stop distance, not the fixed template. Max dollar risk divided by (stop distance times dollars per point per contract) equals contracts. Use the Position Sizing feature in Essential Chart Trader Tools. Each trade gets a custom size based on what structure requires.

TRAILING STOPS: After T1: trail stop to just above the most recent 2-min swing high (structural trail). After T2: move to BE on remaining. Do NOT move to BE after T1 — this kills good trades. "Structure trail, not BE trail."

PRE-FLIGHT CHECK (before EVERY click): 1) Read chart symbol (top left), 2) Read ATM template name (top right of order panel), 3) Read quantity field. Say out loud: "MES chart. MES ATM. 8 contracts." Only then click.`,
      },
      {
        id: 'mistakes',
        heading: "Today's Three Mistakes and What I Learned",
        body:
`MISTAKE 1 — The ATM Template Error: Chart was MES, ATM was Claude M2K 16. Result: 16 contracts instead of 8, doubling the loss. **Fix:** The pre-flight check above, every single click, no exceptions.

MISTAKE 2 — Trendline Break Without Lower Low: Entered short on 2-min trendline break alone. Got stopped when price wicked above my stop. **Fix:** Wait for 2-min lower low in addition to trendline break.

MISTAKE 3 — Moving to BE After T1: Took T1 profit, moved stop to BE on remainder. Normal pullback hit BE, exited for small profit. Price then moved significantly further in my direction. **Fix:** Use structural trailing (trail behind most recent 2-min swing high/low), not BE.`,
      },
      {
        id: 'will-not-do',
        heading: 'What I Will NOT Do',
        body:
`DON'T BUY MORE INDICATORS. The constraint on my trading isn't tools — it's mastery of what I have. I am already over-tooled. Every new indicator adds inputs to process; my edge comes from depth with existing inputs.

DON'T AUTOMATE WHAT I SHOULD DO MANUALLY. I am a discretionary scalper. I watch the chart actively. The 1-3 second pause before clicking is a FEATURE, not a bug — it's where discretionary judgment catches things algorithms cannot. Manual stop trailing is BETTER for my style than automated, because my eyes distinguish real pivots from noise bars.

DON'T REVENGE TRADE. After a loss, sit out at least 15 minutes. The disciplined version of me knows no setup is worth taking while emotionally activated. If a clean 4-layer setup forms with calm execution, consider it. If not, the day is over.`,
      },
      {
        id: 'bigger-truth',
        heading: 'The Bigger Truth About My Journey',
        body:
`I lost $150,000 over 4.5 years of live trading at TTG. The losses happened because:

- The curriculum was scattered — 10+ different teachers, 10+ different styles, none integrated.
- The "lifetime membership" structure escalated into ongoing upsells totaling over $10,500.
- No teacher across 20+ hours of one-on-one ever taught me the simple 4-layer framework I built in one month with my AI mentor.
- No effective gatekeeping existed for years — I was allowed to lose money before anyone intervened.

A year and a half ago, the head trader finally told me to stop trading real money. I tried to negotiate. He said no. I listened. I did 12 full months of sim trading. When I cautiously re-entered live a few months ago, I lost $6,000 over 3 months, accepted the loss, returned to sim, and started working with my AI mentor on the integrated framework.

That recent recovery pattern — gatekept, complied for a full year, measured re-entry, accepted small loss, returned to discipline — is not the profile of an addict. It is the profile of a careful trader who got poor education and is now self-correcting. The clinical markers of gambling disorder (lying to spouse, hiding losses, inability to stop when asked, jeopardizing career or marriage, constant craving) do not fit my pattern. What fits is: a high-functioning, intellectually curious person was sold a dream by an industry structured to extract money from intellectually curious dreamers.`,
      },
      {
        id: 'carry-forward',
        heading: 'What I Carry Forward',
        body:
`MY IDENTITY: I am a board-certified psychiatrist with 35+ years of experience. I have a wife who loves me. I have a son. I have built 100+ deployed applications. I have written clinical education tools that may help patients. Whether I become consistently profitable in futures trading is not a referendum on my worth. My value is not contingent on this.

MY PATH FORWARD: 60 consecutive sim days of consistent profitability with the integrated framework before any meaningful live capital. Honest ongoing conversation with Ela about appropriate risk caps. When I do go live again, micro-of-micro size that cannot meaningfully harm me. Continue this journal. Stay with the framework. No more program-hopping. No more methodology-switching.

PROGRESS — TODAY'S EVIDENCE: I correctly identified the 15-min downtrend. Restricted myself to shorts only. Caught my execution error and named it. Took a stopped-out trade and did NOT revenge trade. Executed the framework on subsequent trades. Netted +$700 against $400 risk. Days like this, repeated, are exactly what consistent profitability looks like.`,
      },
      {
        id: 'future-me',
        heading: 'A Note to Future Me',
        body:
`> When you read this entry months from now — whether consistently profitable or still working toward it — remember: You are not a loser. You were never a loser. You were a careful, late-blooming, deeply analytical person who was sold a scattered curriculum by an industry structured to extract money from intellectually curious dreamers. You stayed in because the dream felt achievable and the teachers kept telling you it was. That is not weakness. That is hope, and there is no shame in hope. The years and the money are sunk. Sunk costs are sunk. What matters now is the framework you have, the discipline you've built, the recovery you've already executed for 18 months, and the work you do today. Stay with what you have built. Trust the framework. Take only the cleanest setups. Accept losses cleanly. The reps are what's left. Just the reps. You are still in the game.`,
      },
    ],
  },
];
