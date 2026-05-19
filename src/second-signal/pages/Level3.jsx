import React, { useState, useEffect } from 'react';
import ExpandableChart from '../components/ExpandableChart.jsx';
import { generatePattern } from '../patterns.js';
import { markLessonComplete } from '../storage.js';

function Section({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card !p-0 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-bg-elevated transition-colors tap-target"
        style={{ minHeight: 56 }}
      >
        <span className="mono font-bold text-base text-text-primary">{title}</span>
        <span className="mono text-accent text-xl" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-6 pt-2 border-t border-default space-y-4">{children}</div>
      )}
    </div>
  );
}

export default function Level3() {
  useEffect(() => { markLessonComplete('advanced'); }, []);

  // A few representative charts for the Level 3 sections
  const realSignal   = generatePattern('double-bottom', 'clean-1');
  const fakeSignal   = generatePattern('double-bottom', 'near-miss');
  const bullTrend    = generatePattern('bull-flag', 'clean-1');
  const climacticBot = generatePattern('double-bottom', 'clean-3');
  const tradingRange = generatePattern('practice', 'not-clean-1');
  const twoLeg       = generatePattern('double-bottom', 'clean-2');
  const tightStop    = generatePattern('double-bottom', 'clean-1');
  const wideStop     = generatePattern('double-bottom', 'clean-2');

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="mono text-xs uppercase tracking-widest text-text-muted">Section 5</p>
        <h1 className="section-h1">Level 3 — Advanced</h1>
        <div className="card border-warn/40 bg-warn/5">
          <p className="leading-relaxed">
            These are the details Brooks and the pros use. You don't need them to be profitable
            with the basic method. <span className="mono font-bold text-warn">Come back when you've drilled the basics for a month.</span>
          </p>
        </div>
      </header>

      <div className="space-y-3">
        <Section title="1. Signal bar anatomy deep dive">
          <p>
            A real signal bar has all four of these. Anything less is a maybe.
          </p>
          <ol className="space-y-2 list-decimal pl-5">
            <li><span className="mono text-text-primary">Meaty body</span> — body is at least 50% of the bar's range.</li>
            <li><span className="mono text-text-primary">Close near the extreme</span> — bull bar closes in top quarter; bear bar closes in bottom quarter.</li>
            <li><span className="mono text-text-primary">Small opposing tail</span> — bull bar has tiny upper wick; bear bar has tiny lower wick.</li>
            <li><span className="mono text-text-primary">Opens at or beyond prior close</span> — for a bull signal, opens at or above the prior bar's close.</li>
          </ol>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <ExpandableChart
              candles={realSignal.candles}
              annotations={realSignal.annotations}
              ariaLabel="Real signal bar example"
              caption="Real signal bar at H2 — body fills the bar, closes near the high, tiny upper wick."
              captionTone="bull"
              inlineHeight={220}
            />
            <ExpandableChart
              candles={fakeSignal.candles}
              annotations={fakeSignal.annotations}
              ariaLabel="Fake signal bar example"
              caption="Fake — small body, big upper wick, not a real signal. Skip."
              captionTone="warn"
              inlineHeight={220}
            />
          </div>
        </Section>

        <Section title="2. The always-in concept">
          <p>
            "Always-in" is Brooks's term for which side is currently in control of the chart.
            At any moment, if you had to be either long or short, which would you be? That's
            the always-in direction.
          </p>
          <p>
            High-probability {`H2/L2`} trades are <span className="mono text-accent">with</span> the always-in direction.
            Counter-trend setups exist but require tighter management and lower size.
          </p>
          <ExpandableChart
            candles={bullTrend.candles}
            annotations={bullTrend.annotations}
            ariaLabel="Bull flag illustrating always-in long"
            caption="Always-in long: every pullback is a buy opportunity. H2 in this context is highest probability."
            captionTone="bull"
            inlineHeight={220}
          />
        </Section>

        <Section title="3. Climactic exhaustion exceptions">
          <p>
            Most of the time H1/L1 fails — that's why you wait for H2/L2.
            But after a true climactic exhaustion (3+ consecutive trend bars closing on the extreme,
            often with a gap), the first opposing signal can work as a reversal.
          </p>
          <p className="body-muted">
            Rare. Don't make this your default. The vast majority of H1/L1 entries still lose.
          </p>
          <ExpandableChart
            candles={climacticBot.candles}
            annotations={climacticBot.annotations}
            ariaLabel="Climactic bottom example"
            caption="After several big red bars closing on the lows, the first H1 sometimes works. Treat as exception, not rule."
            captionTone="bull"
            inlineHeight={220}
          />
        </Section>

        <Section title="4. Trading range vs reversal">
          <p>
            H2/L2 logic assumes you're at the edge of a reversal — buyers actually defending support,
            sellers actually defending resistance. Inside a trading range, "H2" prints over and over
            without leading anywhere because nobody is defending anything strongly.
          </p>
          <p>
            <span className="mono text-warn font-bold">Heuristic:</span> If the chart has chopped sideways for 30+ bars
            with no clear trend in or out, the second-entry edge is gone. Wait for a real move first.
          </p>
          <ExpandableChart
            candles={tradingRange.candles}
            annotations={tradingRange.annotations}
            ariaLabel="Trading range example"
            caption="Choppy sideways action — no clean down move, no clean defense, no edge. Skip."
            captionTone="warn"
            inlineHeight={220}
          />
        </Section>

        <Section title="5. Two-legged corrections">
          <p>
            The H1→pullback→H2 sequence is itself a "two-legged correction" — the pullback off H1 is leg one,
            the pullback off the bar after H1 is leg two. Brooks teaches that markets correct in two legs
            far more often than one. The H2 entry is literally a bet that the correction is now over.
          </p>
          <p className="body-muted">
            When a correction extends to three or four legs, the original move is probably done — start
            looking for the opposite-direction setup instead.
          </p>
          <ExpandableChart
            candles={twoLeg.candles}
            annotations={twoLeg.annotations}
            ariaLabel="Two-legged correction example"
            caption="Classic two-leg pullback into H2. Two legs is the modal correction; three legs is often the end."
            captionTone="bull"
            inlineHeight={220}
          />
        </Section>

        <Section title="6. Scaling in">
          <div className="card border-bear/50 bg-bear/10">
            <p className="mono font-bold text-bear-light">
              ⚠ DO NOT do this for at least 12 months of consistent profitability with the basic method.
            </p>
          </div>
          <p>
            Scaling in means adding to a losing position at predetermined levels (e.g., 1 contract at H2, add 1
            at the midpoint of the stop). It can improve average price and dramatically increase win rate.
            It can also wreck an account when a stop finally hits because you're now full size at the worst price.
          </p>
          <p className="body-muted">
            For now, one entry, one stop, one exit. Earn the right to scale.
          </p>
        </Section>

        <Section title="7. 2-min vs 5-min confluence rules">
          <p>
            The 5-minute is the higher-timeframe filter for the 2-minute chart you trade on.
            Simple rule of thumb:
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>If the 5-min is in a strong push <span className="mono text-bull-light">up</span>, only take H2 longs. Skip every L2 short.</li>
            <li>If the 5-min is in a strong push <span className="mono text-bear-light">down</span>, only take L2 shorts. Skip every H2 long.</li>
            <li>If the 5-min is sideways or unclear, both directions are fair game with normal size.</li>
          </ul>
          <p className="body-muted">
            This single filter cuts the worst losing trades from a method that already works.
          </p>
        </Section>

        <Section title="8. Stop placement variations">
          <p>
            Three ways to place the stop on H2 / L2 entries, each with trade-offs:
          </p>
          <ul className="space-y-2">
            <li>
              <span className="mono text-accent">1 tick beyond signal bar:</span>{' '}
              Tightest. Best R-multiple if it works. Most stop-outs from random noise.
            </li>
            <li>
              <span className="mono text-accent">3 ticks beyond signal bar (default):</span>{' '}
              Empirical sweet spot for MES 2-min. Survives the first re-test wick most of the time.
            </li>
            <li>
              <span className="mono text-accent">Swing high/low:</span>{' '}
              Widest stop. Highest win rate. Worst R-multiple. Only acceptable when the swing
              is genuinely tight (within 4-5 ticks of the signal bar).
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <ExpandableChart
              candles={tightStop.candles}
              annotations={tightStop.annotations}
              ariaLabel="Tight stop example"
              caption="Tight stop right under the signal bar — best R but more stop-outs."
              captionTone="bull"
              inlineHeight={220}
            />
            <ExpandableChart
              candles={wideStop.candles}
              annotations={wideStop.annotations}
              ariaLabel="Wider stop example"
              caption="Wider stop under the swing low — fewer stop-outs but worse R-multiple."
              captionTone="bull"
              inlineHeight={220}
            />
          </div>
        </Section>
      </div>
    </article>
  );
}
