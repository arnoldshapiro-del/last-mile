import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import BullFlagChart from '../components/BullFlagChart.jsx';
import { examples } from '../data/bullFlagExamples.js';

export default function BullFlag() {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      <Header />
      <Section1Plain />
      <Section2ThreeParts />
      <Section3Timeframe />
      <Section4Gallery />
      <Section5DecisionTree />
      <Section6EntryTiers />
      <Section7Calculator />
      <Section8Stops />
      <Section9Volume />
      <Section10Mistakes />
      <Section11Lookalikes />
      <Section12TimeOfDay />
      <Section13Psychology />
      <Section14Checklist />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Link to="/" className="text-muted hover:text-text">←</Link>
        <div className="label">Setup Lab</div>
      </div>
      <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-3">Bull Flag</h1>
      <p className="text-text/80 text-lg max-w-3xl leading-relaxed">
        The 2-minute scalper's complete bull flag treatment. Twelve large worked examples, a breakout decision tree, three entry tiers, lookalike-pattern comparisons, and a time-of-day guide.
      </p>
    </div>
  );
}

// ============================================================
// 1
// ============================================================
function Section1Plain() {
  return (
    <SectionShell n={1} title="What a Bull Flag Actually Is">
      <p className="mb-4">
        Price rises hard. That sharp rally is called the <span className="text-green font-semibold">POLE</span>.
        The rally happens because a lot of buyers piled in at the same time — usually after good news, a key level break, or strong momentum.
      </p>
      <p className="mb-4">
        After that rally, price stops climbing and drifts sideways or slightly downward for a few minutes.
        This drift is called the <span className="text-blue font-semibold">FLAG</span>.
        The drift happens because some buyers take profits and a few sellers try to catch the top.
      </p>
      <p>
        When sellers fail and price breaks back UP above the flag, that's your signal that buyers are back in control and the next leg up is starting. That third move is the <span className="text-amber font-semibold">BREAKOUT</span>. You go long.
      </p>
    </SectionShell>
  );
}

// ============================================================
// 2
// ============================================================
function Section2ThreeParts() {
  const ex = examples[0].pattern;
  return (
    <SectionShell n={2} title="The Three Parts">
      <p className="mb-5">A perfect bull flag, fully labeled. Take 30 seconds and trace each part with your eye.</p>
      <BullFlagChart
        pattern={ex}
        width={1100}
        height={520}
        zonePole={[2, 5]}
        zoneFlag={[6, 11]}
        zoneBreakout={[12, 12]}
        poleLabel="1. THE RALLY (POLE)"
        flagLabel="2. THE PAUSE (FLAG)"
        breakoutLabel="3. THE CONTINUATION"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        <Tile color="green" title="The Rally (Pole)" body="3-6 sharp green candles. High volume. Buyers in control." />
        <Tile color="blue" title="The Pause (Flag)" body="4-8 candles drifting down shallowly. Volume fades. Profit-taking." />
        <Tile color="amber" title="The Continuation (Breakout)" body="A green candle closes above the flag's upper line. Volume surges. Buyers back." />
      </div>
    </SectionShell>
  );
}

// ============================================================
// 3
// ============================================================
function Section3Timeframe() {
  const rows = [
    { tf: '1-minute',  pole: '3-5',   flag: '4-7',   total: '~8-12'  },
    { tf: '2-minute',  pole: '3-6',   flag: '4-8',   total: '~8-14',  highlight: true },
    { tf: '5-minute',  pole: '5-10',  flag: '6-12',  total: '~12-22' },
    { tf: '15-minute', pole: '5-12',  flag: '6-15',  total: '~12-25' },
    { tf: 'Daily',     pole: '5-15',  flag: '5-20',  total: '~10-35' }
  ];
  return (
    <SectionShell n={3} title="How Many Candles? (Timeframe Table)">
      <p className="mb-5">The "5-15 candles" guidance you've seen elsewhere is a <em>daily-chart</em> rule. On the 2-minute it's wrong.</p>
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-sm border-collapse">
          <thead>
            <tr className="text-left text-muted uppercase tracking-wider text-xs">
              <th className="py-2 px-3 border-b border-border">Timeframe</th>
              <th className="py-2 px-3 border-b border-border">Pole candles</th>
              <th className="py-2 px-3 border-b border-border">Flag candles</th>
              <th className="py-2 px-3 border-b border-border">Total pattern</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={r.highlight ? 'bg-green/10 border-l-4 border-green' : ''}>
                <td className={`py-2 px-3 border-b border-border ${r.highlight ? 'text-green font-bold' : ''}`}>{r.tf}</td>
                <td className="py-2 px-3 border-b border-border">{r.pole}</td>
                <td className="py-2 px-3 border-b border-border">{r.flag}</td>
                <td className="py-2 px-3 border-b border-border">{r.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 card-tight border-green/40 bg-green/5">
        <p className="text-green font-display font-bold text-base md:text-lg leading-relaxed">
          On the 2-minute chart you scalp, expect roughly 3-6 pole candles and 4-8 flag candles. Anything claiming you need 10+ pole candles is using daily-chart rules.
        </p>
      </div>
    </SectionShell>
  );
}

// ============================================================
// 4 — 12 EXAMPLES
// ============================================================
function Section4Gallery() {
  return (
    <SectionShell n={4} title="Twelve Large Examples — Study Each One">
      <p className="mb-6">Each example is its own exhibit. The chart, then a short caption explaining what to learn from it. Read both.</p>
      <BullFlagGallery />
    </SectionShell>
  );
}

function BullFlagGallery() {
  return (
    <div className="space-y-8">
      {examples.map(ex => (
        <Exhibit key={ex.n} ex={ex} />
      ))}
    </div>
  );
}

function Exhibit({ ex }) {
  const isInDowntrend = ex.n === 8;
  return (
    <div className="card border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-green/20 text-green border border-green/40 flex items-center justify-center font-display font-bold text-lg shrink-0">
          {ex.n}
        </div>
        <h3 className="font-display font-semibold text-xl md:text-2xl">{ex.title}</h3>
      </div>
      <BullFlagChart
        pattern={ex.pattern}
        width={1100}
        height={520}
        inset={isInDowntrend ? { kind: 'downtrend' } : null}
      />
      <p className="mt-4 leading-relaxed text-text/90 max-w-4xl">{ex.caption}</p>
    </div>
  );
}

// ============================================================
// 5 — DECISION TREE
// ============================================================
function Section5DecisionTree() {
  return (
    <SectionShell n={5} title="The Breakout Decision Tree">
      <p className="mb-5">Three sequential questions. Click your answer; the next question reveals — or you get a verdict.</p>
      <BullFlagDecisionTree />
    </SectionShell>
  );
}

function BullFlagDecisionTree() {
  const [step, setStep] = useState(1);
  const [verdict, setVerdict] = useState(null);
  const [path, setPath] = useState([]);

  const reset = () => { setStep(1); setVerdict(null); setPath([]); };

  return (
    <div className="space-y-3">
      {path.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
          {path.map((p, i) => (
            <React.Fragment key={i}>
              <span className="pill-blue">{p}</span>
              {i < path.length - 1 && <span className="text-muted">→</span>}
            </React.Fragment>
          ))}
          <button onClick={reset} className="ml-auto text-muted hover:text-text underline text-xs">Reset</button>
        </div>
      )}

      {step === 1 && (
        <DTQuestion
          n={1}
          q={"Did a candle CLOSE (not just wick) above the flag's upper trendline by at least 1 tick?"}
          svg={<MiniBreakoutSVG variant="close-above" />}
          options={[
            { label: 'No — only wicked through', verdict: { kind: 'red', text: "Not a valid breakout. Wait. Don't anticipate. A wick poke is not a close." } },
            { label: 'Yes — body closed above', next: 2 }
          ]}
          choose={(label, next, fv) => {
            setPath([...path, label]);
            if (fv) { setVerdict(fv); setStep(0); } else setStep(next);
          }}
        />
      )}

      {step === 2 && (
        <DTQuestion
          n={2}
          q="What does the candle right AFTER the breakout candle look like?"
          svg={<MiniBreakoutSVG variant="after-candle" />}
          options={[
            { label: 'Green body, higher close, rising volume', verdict: { kind: 'green', text: "Confirmed. Long on this candle's close. Stop below the flag's low. Target = pole length projected up from the breakout point." }, gotoNext: true },
            { label: 'Small body / doji / low volume', verdict: { kind: 'amber', text: 'Stalled. Wait one more candle. If still stalled or turning red, abort.' } },
            { label: 'Red body that closes back below the broken trendline', verdict: { kind: 'red', text: 'Failed breakout. Stand down. Watch for longs on the pullback to a deeper support level instead.' } }
          ]}
          choose={(label, _next, fv, opt) => {
            setPath([...path, label]);
            if (opt?.gotoNext) {
              setStep(3);
            } else {
              setVerdict(fv);
              setStep(0);
            }
          }}
        />
      )}

      {step === 3 && (
        <DTQuestion
          n={3}
          q="Was breakout volume higher than the average flag volume?"
          svg={<MiniBreakoutSVG variant="volume" />}
          options={[
            { label: 'Yes — clearly higher', verdict: { kind: 'green', text: 'High-confidence trade. Full size. This is exactly what you want — body close + follow-through + volume.' } },
            { label: 'No / about the same', verdict: { kind: 'amber', text: 'Half size or skip. Low-volume breaks fail more than half the time even with confirmation.' } }
          ]}
          choose={(label, _next, fv) => {
            setPath([...path, label]);
            setVerdict(fv);
            setStep(0);
          }}
        />
      )}

      {verdict && (
        <div className={`card-tight ${
          verdict.kind === 'green' ? 'border-green/50 bg-green/10' :
          verdict.kind === 'amber' ? 'border-amber/50 bg-amber/10' :
          'border-red/50 bg-red/10'
        } animate-slideUp`}>
          <div className={`label mb-2 ${
            verdict.kind === 'green' ? 'text-green' : verdict.kind === 'amber' ? 'text-amber' : 'text-red'
          }`}>Verdict</div>
          <p className="leading-relaxed text-base">{verdict.text}</p>
          <button onClick={reset} className="btn btn-ghost text-sm py-2 mt-4">Run again</button>
        </div>
      )}
    </div>
  );
}

function DTQuestion({ n, q, svg, options, choose }) {
  return (
    <div className="card animate-fadeIn">
      <div className="label mb-2">Question {n}</div>
      <h4 className="font-display font-semibold text-lg mb-4">{q}</h4>
      {svg && <div className="mb-4">{svg}</div>}
      <div className="space-y-2">
        {options.map((opt, i) => (
          <button key={i}
            onClick={() => choose(opt.label, opt.next, opt.verdict, opt)}
            className="w-full card-tight text-left hover:border-green/40 transition-colors flex items-center gap-3">
            <span className="num text-xs text-muted">{String.fromCharCode(65 + i)}</span>
            <span className="flex-1">{opt.label}</span>
            <span className="text-muted">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function MiniBreakoutSVG({ variant }) {
  const w = 600, h = 160;
  if (variant === 'close-above') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} y1={70} x2={580} y2={70} stroke="#06b6d4" strokeWidth={1.5} strokeDasharray="6 4" />
        <text x={24} y={64} fill="#06b6d4" fontSize={10} fontFamily="'Space Mono', monospace">flag upper trendline</text>
        {/* wick-only */}
        <g transform="translate(180,0)">
          <line x1={0} x2={0} y1={50} y2={110} stroke="#22c55e" strokeWidth={1.5} />
          <rect x={-8} y={80} width={16} height={20} fill="#22c55e" />
          <text x={0} y={130} fill="#ef4444" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">wick only</text>
          <text x={0} y={144} fill="#ef4444" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">NOT valid</text>
        </g>
        {/* body close above */}
        <g transform="translate(420,0)">
          <line x1={0} x2={0} y1={30} y2={120} stroke="#22c55e" strokeWidth={1.5} />
          <rect x={-8} y={45} width={16} height={45} fill="#22c55e" />
          <text x={0} y={148} fill="#22c55e" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">body closed above</text>
          <text x={0} y={158} fill="#22c55e" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">VALID ✓</text>
        </g>
      </svg>
    );
  }
  if (variant === 'after-candle') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} y1={90} x2={580} y2={90} stroke="#06b6d4" strokeWidth={1.2} strokeDasharray="6 4" opacity={0.5} />
        {/* breakout candle */}
        <g transform="translate(70,0)">
          <line x1={0} x2={0} y1={50} y2={110} stroke="#22c55e" strokeWidth={1.5} />
          <rect x={-8} y={55} width={16} height={45} fill="#22c55e" />
          <text x={0} y={130} fill="#888" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">breakout</text>
        </g>
        {/* A: green continuation */}
        <g transform="translate(180,0)">
          <line x1={0} x2={0} y1={25} y2={85} stroke="#22c55e" strokeWidth={1.5} />
          <rect x={-8} y={30} width={16} height={45} fill="#22c55e" />
          <text x={0} y={150} fill="#22c55e" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">A — confirm</text>
        </g>
        {/* B: doji */}
        <g transform="translate(330,0)">
          <line x1={0} x2={0} y1={50} y2={100} stroke="#888" strokeWidth={1.5} />
          <rect x={-8} y={74} width={16} height={4} fill="#888" />
          <text x={0} y={150} fill="#f59e0b" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">B — stalled</text>
        </g>
        {/* C: red reversal */}
        <g transform="translate(480,0)">
          <line x1={0} x2={0} y1={50} y2={110} stroke="#ef4444" strokeWidth={1.5} />
          <rect x={-8} y={60} width={16} height={45} fill="#ef4444" />
          <text x={0} y={130} fill="#ef4444" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">C — failed</text>
        </g>
      </svg>
    );
  }
  if (variant === 'volume') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <text x={20} y={20} fill="#666" fontSize={10} fontFamily="'Space Mono', monospace">VOLUME PROFILE</text>
        {[60, 50, 42, 36].map((h2, i) => (
          <rect key={i} x={70 + i * 30} y={140 - h2} width={20} height={h2} fill="#22c55e" opacity={0.5} />
        ))}
        <rect x={220} y={40} width={20} height={100} fill="#22c55e" opacity={0.85} />
        <text x={230} y={30} fill="#22c55e" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">YES — high</text>
        <line x1={290} x2={290} y1={20} y2={150} stroke="#262626" />
        {[50, 48, 50, 52].map((h2, i) => (
          <rect key={i} x={320 + i * 30} y={140 - h2} width={20} height={h2} fill="#22c55e" opacity={0.5} />
        ))}
        <rect x={460} y={95} width={20} height={45} fill="#22c55e" opacity={0.85} />
        <text x={470} y={85} fill="#f59e0b" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">NO — same</text>
      </svg>
    );
  }
  return null;
}

// ============================================================
// 6 — ENTRY TIERS
// ============================================================
function Section6EntryTiers() {
  const tiers = [
    {
      name: 'Aggressive', tag: 'TIER 1', color: 'amber',
      entry: "Close of the candle that breaks above the flag's upper trendline",
      stop: "Below the flag's lower trendline (or below its lowest wick)",
      rr: '3:1 to 4:1',
      win: 'Lower (more false signals)',
      use: 'Strong uptrend day, several flags have already worked',
      size: '25-50%',
      svg: <TierSVG variant="aggressive" />
    },
    {
      name: 'Confirmation', tag: 'TIER 2', color: 'green',
      entry: 'Close of the candle AFTER the breakout, only if it follows through',
      stop: "Below the flag's lower trendline",
      rr: '2:1 to 3:1',
      win: 'Higher',
      use: 'Balance of speed and confirmation — the daily default',
      size: 'Full size',
      svg: <TierSVG variant="confirm" />
    },
    {
      name: 'Retest', tag: 'TIER 3', color: 'blue',
      entry: 'Bounce candle after price pulls back to the broken trendline from above',
      stop: "Below the bounce candle's low",
      rr: '1.5:1 to 2.5:1',
      win: 'Highest',
      use: 'You missed Tier 1 and Tier 2, or you only take A+ setups',
      size: 'Full size, tight stop',
      svg: <TierSVG variant="retest" />
    }
  ];
  const colors = {
    amber: 'border-amber/40 hover:border-amber',
    green: 'border-green/40 hover:border-green',
    blue: 'border-blue/40 hover:border-blue'
  };
  const accents = { amber: 'text-amber', green: 'text-green', blue: 'text-blue' };
  return (
    <SectionShell n={6} title="The Three Entry Tiers">
      <p className="mb-5">Three valid entry timings, each with a different risk/reward and win-rate trade-off.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map((t, i) => (
          <div key={i} className={`card transition-colors ${colors[t.color]}`}>
            <div className={`label mb-1 ${accents[t.color]}`}>{t.tag}</div>
            <h3 className={`font-display font-bold text-2xl mb-3 ${accents[t.color]}`}>{t.name}</h3>
            <div className="mb-4">{t.svg}</div>
            <dl className="space-y-2 text-sm">
              <Row label="Entry" v={t.entry} />
              <Row label="Stop" v={t.stop} />
              <Row label="Typical R:R" v={t.rr} />
              <Row label="Win rate" v={t.win} />
              <Row label="Use when" v={t.use} />
              <Row label="Size" v={t.size} />
            </dl>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Row({ label, v }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-wider text-muted font-display">{label}</dt>
      <dd className="text-text/90">{v}</dd>
    </div>
  );
}

function TierSVG({ variant }) {
  const w = 280, h = 130;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      {/* flag upper trendline */}
      <line x1={20} y1={50} x2={260} y2={50} stroke="#06b6d4" strokeWidth={1.2} strokeDasharray="4 3" opacity={0.5} />
      {/* pole — green going up */}
      {[
        [40, 90, 50, 28],
        [60, 80, 50, 28],
        [80, 70, 50, 28],
        [100, 60, 50, 28]
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={y - 6} y2={y + 14} stroke="#22c55e" strokeWidth={1.2} />
          <rect x={x - 4} y={y} width={8} height={12} fill="#22c55e" />
        </g>
      ))}
      {/* flag drifting down */}
      {[120, 135, 150, 165].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={48 + i * 1.5} y2={68 + i * 1.5} stroke="#ef4444" strokeWidth={1.2} />
          <rect x={x - 4} y={52 + i * 1.5} width={8} height={12} fill="#ef4444" />
        </g>
      ))}
      {variant === 'aggressive' && (
        <g>
          <line x1={185} x2={185} y1={28} y2={62} stroke="#22c55e" strokeWidth={1.5} />
          <rect x={181} y={32} width={8} height={26} fill="#22c55e" />
          <circle cx={185} cy={36} r={6} fill="#f59e0b" stroke="#000" strokeWidth={1.5} />
          <text x={195} y={40} fill="#f59e0b" fontSize={10} fontFamily="'Space Mono', monospace">enter</text>
        </g>
      )}
      {variant === 'confirm' && (
        <g>
          <line x1={185} x2={185} y1={30} y2={62} stroke="#22c55e" strokeWidth={1.5} />
          <rect x={181} y={34} width={8} height={24} fill="#22c55e" />
          <line x1={205} x2={205} y1={18} y2={50} stroke="#22c55e" strokeWidth={1.5} />
          <rect x={201} y={22} width={8} height={20} fill="#22c55e" />
          <circle cx={205} cy={26} r={6} fill="#10b981" stroke="#000" strokeWidth={1.5} />
          <text x={215} y={30} fill="#10b981" fontSize={10} fontFamily="'Space Mono', monospace">enter</text>
        </g>
      )}
      {variant === 'retest' && (
        <g>
          <line x1={185} x2={185} y1={30} y2={60} stroke="#22c55e" strokeWidth={1.5} />
          <rect x={181} y={34} width={8} height={24} fill="#22c55e" />
          <line x1={205} x2={205} y1={28} y2={56} stroke="#ef4444" strokeWidth={1.5} />
          <rect x={201} y={32} width={8} height={18} fill="#ef4444" />
          <line x1={225} x2={225} y1={20} y2={56} stroke="#22c55e" strokeWidth={1.5} />
          <rect x={221} y={28} width={8} height={20} fill="#22c55e" />
          <circle cx={225} cy={36} r={6} fill="#06b6d4" stroke="#000" strokeWidth={1.5} />
          <text x={234} y={40} fill="#06b6d4" fontSize={10} fontFamily="'Space Mono', monospace">enter</text>
        </g>
      )}
    </svg>
  );
}

// ============================================================
// 7 — CALCULATOR
// ============================================================
function Section7Calculator() {
  const [poleStart, setPoleStart] = useState(22000);
  const [poleEnd, setPoleEnd] = useState(22050);
  const [breakoutPrice, setBreakoutPrice] = useState(22045);
  const poleLength = useMemo(() => poleEnd - poleStart, [poleEnd, poleStart]);
  const target = useMemo(() => breakoutPrice + poleLength, [breakoutPrice, poleLength]);
  const valid = poleLength > 0;

  return (
    <SectionShell n={7} title="Measured-Move Target Calculator">
      <p className="mb-5">Pole length projected up from the breakout = your measured-move target.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
        <NumInput label="Pole start price (low)" v={poleStart} onChange={setPoleStart} />
        <NumInput label="Pole end price (high)" v={poleEnd} onChange={setPoleEnd} />
        <NumInput label="Breakout price (body close)" v={breakoutPrice} onChange={setBreakoutPrice} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <Outcome label="Pole length" v={valid ? poleLength.toFixed(2) : '—'} accent="green" />
        <Outcome label="Up projection" v={valid ? `+${poleLength.toFixed(2)}` : '—'} accent="amber" />
        <Outcome label="Target price" v={valid ? target.toFixed(2) : '—'} accent="amber" />
      </div>
      <CalculatorChart poleStart={poleStart} poleEnd={poleEnd} breakoutPrice={breakoutPrice} target={target} valid={valid} />
      <div className="mt-5 card-tight bg-blue/5 border-blue/30">
        <p className="text-sm text-text/85 leading-relaxed">
          On <strong>NQ</strong> this target is in points (4 ticks per point, $5 per tick). On <strong>RTY</strong> similar. On <strong>ES</strong>, 4 ticks per point, $12.50 per tick. Always know your dollar risk before entry.
        </p>
      </div>
    </SectionShell>
  );
}

function NumInput({ label, v, onChange }) {
  return (
    <div>
      <div className="label mb-2">{label}</div>
      <input type="number" step="0.25" value={v}
        onChange={e => onChange(parseFloat(e.target.value || 0))}
        className="input" />
    </div>
  );
}

function Outcome({ label, v, accent }) {
  const colors = { green: 'text-green', red: 'text-red', amber: 'text-amber' };
  return (
    <div className="card-tight">
      <div className="label mb-1">{label}</div>
      <div className={`num text-2xl ${colors[accent]}`}>{v}</div>
    </div>
  );
}

function CalculatorChart({ poleStart, poleEnd, breakoutPrice, target, valid }) {
  if (!valid) return null;
  const w = 1100, h = 320;
  const padL = 60, padR = 110, padT = 30, padB = 30;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const yMax = target + (target - poleStart) * 0.05;
  const yMin = poleStart - (target - poleStart) * 0.05;
  const yRange = yMax - yMin;
  const y = price => padT + ((yMax - price) / yRange) * innerH;

  const xStart = padL + innerW * 0.1;
  const xEnd = padL + innerW * 0.4;
  const xBreakout = padL + innerW * 0.55;
  const xTarget = padL + innerW * 0.85;

  return (
    <div className="overflow-x-auto -mx-2 md:mx-0">
      <svg viewBox={`0 0 ${w} ${h}`} className="block rounded-xl border border-border" style={{ background: '#0a0a0a', minWidth: '880px' }}>
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <line key={i} x1={padL} x2={w - padR} y1={padT + innerH * t} y2={padT + innerH * t} stroke="#262626" strokeWidth={1} />
        ))}
        {/* Pole arrow (green, going up) */}
        <line x1={xStart} x2={xEnd} y1={y(poleStart)} y2={y(poleEnd)} stroke="#22c55e" strokeWidth={3} />
        <polygon points={`${xEnd},${y(poleEnd)} ${xEnd - 8},${y(poleEnd) + 8} ${xEnd - 8},${y(poleEnd) - 8}`} fill="#22c55e" />
        <text x={(xStart + xEnd) / 2} y={y((poleStart + poleEnd) / 2) + 14} fill="#22c55e"
          fontSize={13} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight="bold">
          POLE = {(poleEnd - poleStart).toFixed(2)}
        </text>
        {/* Flag */}
        <line x1={xEnd} x2={xBreakout} y1={y(poleEnd) + 6} y2={y(poleEnd) + 6} stroke="#06b6d4" strokeWidth={2} strokeDasharray="4 3" />
        <text x={(xEnd + xBreakout) / 2} y={y(poleEnd) + 18} fill="#06b6d4" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">flag</text>
        {/* Breakout marker */}
        <circle cx={xBreakout} cy={y(breakoutPrice)} r={6} fill="#f97316" stroke="#000" strokeWidth={1.5} />
        <text x={xBreakout} y={y(breakoutPrice) + 22} fill="#f97316" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">
          breakout {breakoutPrice.toFixed(2)}
        </text>
        {/* Projection arrow up */}
        <line x1={xBreakout} x2={xTarget} y1={y(breakoutPrice)} y2={y(target)} stroke="#f59e0b" strokeWidth={3} strokeDasharray="6 5" />
        <polygon points={`${xTarget},${y(target)} ${xTarget - 8},${y(target) + 8} ${xTarget - 8},${y(target) - 8}`} fill="#f59e0b" />
        <text x={(xBreakout + xTarget) / 2} y={y((breakoutPrice + target) / 2) - 10} fill="#f59e0b"
          fontSize={13} textAnchor="middle" fontFamily="'Oxanium', sans-serif" fontWeight="bold">
          PROJECTION = {(poleEnd - poleStart).toFixed(2)}
        </text>
        {/* Target line */}
        <line x1={padL} x2={w - padR} y1={y(target)} y2={y(target)} stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="6 4" opacity={0.85} />
        <rect x={w - padR + 6} y={y(target) - 11} width={padR - 10} height={22} rx={3} fill="#0a0a0a" stroke="#f59e0b" />
        <text x={w - padR + 12} y={y(target) + 5} fill="#f59e0b" fontSize={12} fontFamily="'Space Mono', monospace">
          TARGET {target.toFixed(2)}
        </text>
        <text x={padL - 8} y={y(poleStart) + 4} fill="#22c55e" fontSize={11} textAnchor="end" fontFamily="'Space Mono', monospace">
          {poleStart.toFixed(2)}
        </text>
        <text x={padL - 8} y={y(poleEnd) + 4} fill="#22c55e" fontSize={11} textAnchor="end" fontFamily="'Space Mono', monospace">
          {poleEnd.toFixed(2)}
        </text>
      </svg>
    </div>
  );
}

// ============================================================
// 8 — STOPS
// ============================================================
function Section8Stops() {
  const stops = [
    { kind: 'CORRECT', color: 'green', title: "Below the flag's lowest wick",
      body: "Stop sits below the lowest point any candle in the flag reached. Survives normal noise and stop-hunt wicks. This is the default.",
      svg: <StopSVG variant="correct" /> },
    { kind: 'TOO TIGHT', color: 'red', title: "Just below the breakout candle's low",
      body: "Tempting because risk looks small. Reality: gets stop-hunted by the very-common retest move. Right idea, dead trader.",
      svg: <StopSVG variant="tight" /> },
    { kind: 'TOO LOOSE', color: 'amber', title: "Below the pole's start",
      body: "Now risk is so large the R:R doesn't work. Even if you're right about direction, you can't take a fair size — so the win is too small to matter.",
      svg: <StopSVG variant="loose" /> }
  ];
  const colors = {
    green: { border: 'border-green/40', text: 'text-green' },
    red:   { border: 'border-red/40',   text: 'text-red' },
    amber: { border: 'border-amber/40', text: 'text-amber' }
  };
  return (
    <SectionShell n={8} title="Stop Placement">
      <p className="mb-5">Three options. Only one is correct.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stops.map((s, i) => (
          <div key={i} className={`card ${colors[s.color].border}`}>
            <div className={`label mb-2 ${colors[s.color].text}`}>{s.kind}</div>
            <h4 className={`font-display font-semibold mb-3 ${colors[s.color].text}`}>{s.title}</h4>
            <div className="mb-3">{s.svg}</div>
            <p className="text-sm text-text/85 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function StopSVG({ variant }) {
  const w = 280, h = 160;
  // Bull-flag pattern: pole going up, flag drifting down, breakout up
  const candles = (
    <g>
      <line x1={20} y1={72} x2={260} y2={72} stroke="#06b6d4" strokeWidth={1.2} strokeDasharray="4 3" opacity={0.5} />
      {/* pole 4 candles going up */}
      {[40, 60, 80, 100].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={120 - i * 8 - 8} y2={140 - i * 8} stroke="#22c55e" strokeWidth={1.2} />
          <rect x={x - 4} y={120 - i * 8 - 6} width={8} height={18} fill="#22c55e" />
        </g>
      ))}
      {/* flag 5 candles drifting down slightly */}
      {[120, 135, 150, 165, 180].map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x} y1={70 + i * 1.5} y2={92 + i * 1.5} stroke="#ef4444" strokeWidth={1.2} />
          <rect x={x - 4} y={74 + i * 1.5} width={8} height={14} fill="#ef4444" />
        </g>
      ))}
      {/* breakout candle up */}
      <line x1={200} x2={200} y1={50} y2={92} stroke="#22c55e" strokeWidth={1.5} />
      <rect x={196} y={54} width={8} height={32} fill="#22c55e" />
    </g>
  );
  let stop;
  if (variant === 'correct') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={106} y2={106} stroke="#22c55e" strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={120} fill="#22c55e" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · below flag low</text>
      </g>
    );
  } else if (variant === 'tight') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={92} y2={92} stroke="#ef4444" strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={104} fill="#ef4444" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · breakout low (too tight)</text>
      </g>
    );
  } else if (variant === 'loose') {
    stop = (
      <g>
        <line x1={20} x2={260} y1={148} y2={148} stroke="#f59e0b" strokeWidth={2} strokeDasharray="6 3" />
        <text x={150} y={158} fill="#f59e0b" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">stop · pole start (too loose)</text>
      </g>
    );
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      {candles}
      {stop}
    </svg>
  );
}

// ============================================================
// 9 — VOLUME RULES
// ============================================================
function Section9Volume() {
  return (
    <SectionShell n={9} title="Volume Rules">
      <p className="mb-5">Three volume profiles side by side. Only one is a tradable bull flag.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <VolCard tag="VALID" color="green"
          body="Volume falls during the flag (buyers paused, sellers timid). Volume SURGES on the breakout candle. Buyers re-engage. This is the only profile to trade."
          svg={<VolSVG variant="valid" />} />
        <VolCard tag="SUSPECT" color="amber"
          body="Volume is flat through the flag. Modest, unconvincing volume on breakout. The break may work, but the probability is half what a valid setup gives you. Half size or skip."
          svg={<VolSVG variant="suspect" />} />
        <VolCard tag="INVALID" color="red"
          body="Volume RISES during the flag — sellers distributing into longs. Tiny volume on breakout. Do not trade. These flip down almost every time."
          svg={<VolSVG variant="invalid" />} />
      </div>
    </SectionShell>
  );
}

function VolCard({ tag, color, body, svg }) {
  const colors = {
    green: { border: 'border-green/40', text: 'text-green' },
    amber: { border: 'border-amber/40', text: 'text-amber' },
    red:   { border: 'border-red/40',   text: 'text-red' }
  };
  return (
    <div className={`card ${colors[color].border}`}>
      <div className={`label mb-2 ${colors[color].text}`}>{tag}</div>
      <div className="mb-3">{svg}</div>
      <p className="text-sm text-text/85 leading-relaxed">{body}</p>
    </div>
  );
}

function VolSVG({ variant }) {
  const w = 280, h = 130;
  let bars;
  if (variant === 'valid') bars = [70, 60, 50, 38, 32, 26, 22, 110];
  else if (variant === 'suspect') bars = [55, 50, 52, 48, 50, 52, 50, 60];
  else bars = [30, 38, 48, 58, 68, 78, 84, 38];
  const colors = bars.map((_, i) => i < 7 ? '#22c55e' : '#22c55e');
  const max = Math.max(...bars);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
      <text x={20} y={20} fill="#666" fontSize={10} fontFamily="'Space Mono', monospace">VOLUME</text>
      {bars.map((b, i) => {
        const barH = (b / max) * 90;
        return (
          <rect key={i} x={30 + i * 30} y={120 - barH} width={20} height={barH} fill={i === 7 ? (variant === 'valid' ? '#22c55e' : '#ef4444') : '#22c55e'} opacity={i === 7 ? 0.85 : 0.5} />
        );
      })}
      <line x1={235} x2={235} y1={20} y2={125} stroke="#262626" strokeDasharray="3 3" />
      <text x={245} y={20} fill="#666" fontSize={9} fontFamily="'Space Mono', monospace">brk</text>
    </svg>
  );
}

// ============================================================
// 10 — SIX MISTAKES
// ============================================================
function Section10Mistakes() {
  const mistakes = [
    { n: 1, title: 'Buying in a downtrend (context blindness)', body: "You spotted a tiny bull flag inside a falling market. The larger structure crushes you. Always zoom out one timeframe first.", svg: <MistakeSVG variant="downtrend" /> },
    { n: 2, title: 'Entering before the flag has 4 candles', body: 'Two-candle "flag"? That is a continuation in progress, not a setup. Wait. Let the structure form.', svg: <MistakeSVG variant="early" /> },
    { n: 3, title: 'Ignoring volume divergence', body: "Flag shows rising volume = sellers distributing. The pattern looks textbook but the tape says no. Trust the tape.", svg: <MistakeSVG variant="vol" /> },
    { n: 4, title: 'Stop too tight (just below the breakout candle)', body: "Right direction, wrong stop. Standard retest moves wick out tight stops, then continue up without you.", svg: <MistakeSVG variant="tight" /> },
    { n: 5, title: 'Holding past the measured-move target hoping for more', body: "Pole length is the projection. Past that you're on hope. Banks who built the move are taking profits — and so should you.", svg: <MistakeSVG variant="greed" /> },
    { n: 6, title: 'Trading within 5 minutes of FOMC, NFP, CPI, earnings, or any scheduled news', body: "Scheduled news invalidates technical setups. The pattern can be perfect — news drops, price rips against you, and your stop gets gapped through. Always check the economic calendar before entering.", svg: <MistakeSVG variant="news" /> }
  ];
  return (
    <SectionShell n={10} title="Six Mistakes That Kill Bull Flag Trades">
      <div className="space-y-3">
        {mistakes.map(m => (
          <div key={m.n} className="card flex flex-col md:flex-row gap-4 items-start">
            <div className="w-12 h-12 rounded-lg bg-red/15 text-red border border-red/40 flex items-center justify-center font-display font-bold text-xl shrink-0">
              {m.n}
            </div>
            <div className="flex-1">
              <h4 className="font-display font-semibold text-lg mb-2">{m.title}</h4>
              <p className="text-text/85 leading-relaxed">{m.body}</p>
            </div>
            <div className="w-full md:w-48 shrink-0">{m.svg}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function MistakeSVG({ variant }) {
  const w = 200, h = 110;
  if (variant === 'downtrend') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {[
          [20, 30, 70, 16],
          [40, 40, 60, 16],
          [60, 50, 50, 16],
          [80, 60, 40, 16],
          [100, 70, 30, 16]
        ].map(([x, y, hi, hg], i) => (
          <g key={i}>
            <line x1={x} x2={x} y1={y - 8} y2={y + 18} stroke="#ef4444" strokeWidth={1.2} />
            <rect x={x - 4} y={y} width={8} height={hg} fill="#ef4444" />
          </g>
        ))}
        <g transform="translate(120,0)">
          <line x1={20} x2={20} y1={50} y2={64} stroke="#22c55e" strokeWidth={1} />
          <rect x={16} y={53} width={8} height={9} fill="#22c55e" />
          <line x1={36} x2={36} y1={56} y2={70} stroke="#22c55e" strokeWidth={1} />
          <rect x={32} y={58} width={8} height={9} fill="#22c55e" />
        </g>
        <text x={100} y={104} fill="#ef4444" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">larger trend wins</text>
      </svg>
    );
  }
  if (variant === 'early') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {[40, 60, 80, 100].map((x, i) => (
          <g key={i}>
            <line x1={x} x2={x} y1={80 - i * 12} y2={100 - i * 12} stroke="#22c55e" strokeWidth={1.2} />
            <rect x={x - 4} y={82 - i * 12} width={8} height={16} fill="#22c55e" />
          </g>
        ))}
        <line x1={120} x2={120} y1={50} y2={64} stroke="#ef4444" strokeWidth={1} />
        <rect x={116} y={52} width={8} height={10} fill="#ef4444" />
        <text x={150} y={56} fill="#f59e0b" fontSize={9} fontFamily="'Space Mono', monospace">entry?</text>
        <text x={150} y={68} fill="#f59e0b" fontSize={9} fontFamily="'Space Mono', monospace">no flag yet</text>
      </svg>
    );
  }
  if (variant === 'vol') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {[20, 30, 40, 50, 60, 70].map((vol, i) => (
          <rect key={i} x={20 + i * 24} y={100 - vol} width={16} height={vol} fill="#22c55e" opacity={0.6} />
        ))}
        <text x={100} y={20} fill="#ef4444" fontSize={11} textAnchor="middle" fontFamily="'Space Mono', monospace">RISING VOL</text>
        <text x={100} y={104} fill="#666" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">sellers distributing</text>
      </svg>
    );
  }
  if (variant === 'tight') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} x2={180} y1={62} y2={62} stroke="#ef4444" strokeWidth={2} strokeDasharray="4 3" />
        <text x={100} y={56} fill="#ef4444" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">stop too tight</text>
        <line x1={80} x2={80} y1={22} y2={70} stroke="#22c55e" strokeWidth={1.5} />
        <rect x={76} y={28} width={8} height={32} fill="#22c55e" />
        <line x1={110} x2={110} y1={20} y2={80} stroke="#ef4444" strokeWidth={1.5} />
        <rect x={106} y={32} width={8} height={26} fill="#ef4444" />
        <text x={140} y={66} fill="#f59e0b" fontSize={9} fontFamily="'Space Mono', monospace">wicked!</text>
      </svg>
    );
  }
  if (variant === 'greed') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <line x1={20} x2={180} y1={40} y2={40} stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 3" />
        <text x={100} y={32} fill="#f59e0b" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">target — TAKE IT</text>
        {[40, 60, 80, 100].map((x, i) => (
          <g key={i}>
            <line x1={x} x2={x} y1={86 - i * 8} y2={108 - i * 8} stroke="#22c55e" strokeWidth={1.2} />
            <rect x={x - 4} y={88 - i * 8} width={8} height={14} fill="#22c55e" />
          </g>
        ))}
        <line x1={130} x2={130} y1={32} y2={48} stroke="#ef4444" strokeWidth={1} />
        <rect x={126} y={36} width={8} height={10} fill="#ef4444" />
        <line x1={150} x2={150} y1={40} y2={56} stroke="#ef4444" strokeWidth={1} />
        <rect x={146} y={44} width={8} height={10} fill="#ef4444" />
      </svg>
    );
  }
  if (variant === 'news') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        <rect x={75} y={20} width={50} height={20} rx={4} fill="#f97316" />
        <text x={100} y={34} fill="#000" fontSize={11} fontWeight="bold" textAnchor="middle" fontFamily="'Space Mono', monospace">CPI</text>
        <line x1={100} x2={100} y1={40} y2={100} stroke="#f97316" strokeWidth={1.5} strokeDasharray="3 3" />
        {/* setup before */}
        {[30, 50, 70].map((x, i) => (
          <g key={i}>
            <line x1={x} x2={x} y1={60 - i * 4} y2={80 - i * 4} stroke="#22c55e" strokeWidth={1.2} />
            <rect x={x - 4} y={62 - i * 4} width={8} height={14} fill="#22c55e" />
          </g>
        ))}
        {/* news rip */}
        {[125, 145, 165].map((x, i) => (
          <g key={i}>
            <line x1={x} x2={x} y1={50 + i * 8} y2={90 + i * 8} stroke="#ef4444" strokeWidth={1.5} />
            <rect x={x - 4} y={54 + i * 8} width={8} height={32} fill="#ef4444" />
          </g>
        ))}
      </svg>
    );
  }
  return null;
}

// ============================================================
// 11 — LOOKALIKES
// ============================================================
function Section11Lookalikes() {
  const cards = [
    {
      title: 'Bull Flag vs Ascending Triangle',
      leftSVG: <PatternSVG variant="bullflag" />,
      rightSVG: <PatternSVG variant="ascending" />,
      caption:
        "Both are bullish continuation patterns but they trade differently. Bull flag breaks up out of a downward channel. Ascending triangle breaks up through a flat ceiling. The triangle usually takes longer to form and the breakout is sharper."
    },
    {
      title: 'Bull Flag vs Rising Wedge',
      leftSVG: <PatternSVG variant="bullflag" />,
      rightSVG: <PatternSVG variant="risingWedge" />,
      caption:
        "These look similar at first glance but trade in opposite directions. A bull flag is a continuation pattern — long it. A rising wedge is a reversal pattern that usually breaks DOWN — short it or stand aside. The convergence is the tell. Get this wrong and you're long at the top of a wedge that's about to fail."
    },
    {
      title: 'Bull Flag vs Cup and Handle',
      leftSVG: <PatternSVG variant="bullflag" />,
      rightSVG: <PatternSVG variant="cupHandle" />,
      caption:
        "Cup and handle is a multi-hour or multi-day pattern. Don't confuse a bull flag with one — they operate on completely different timeframes. If you see something rounding for 30+ minutes on a 2-min chart, you're probably watching a cup form, not a flag."
    }
  ];
  return (
    <SectionShell n={11} title="Bull Flag vs Lookalike Patterns">
      <p className="mb-5">Three patterns that are easy to confuse with a bull flag. Get the difference right and you stop taking the wrong trade.</p>
      <div className="space-y-4">
        {cards.map((c, i) => (
          <div key={i} className="card">
            <h3 className="font-display font-semibold text-xl mb-4">{c.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="label text-green mb-2">Bull Flag</div>
                {c.leftSVG}
              </div>
              <div>
                <div className="label text-amber mb-2">{c.title.split(' vs ')[1]}</div>
                {c.rightSVG}
              </div>
            </div>
            <p className="text-sm text-text/90 leading-relaxed">{c.caption}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function PatternSVG({ variant }) {
  const w = 480, h = 220;
  if (variant === 'bullflag') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {/* parallel down-sloping channel */}
        <line x1={200} y1={70} x2={420} y2={120} stroke="#06b6d4" strokeWidth={1.5} strokeDasharray="6 4" />
        <line x1={200} y1={100} x2={420} y2={150} stroke="#06b6d4" strokeWidth={1.5} strokeDasharray="6 4" />
        {/* pole */}
        {[40, 70, 100, 130, 160].map((x, i) => (
          <g key={i}>
            <line x1={x} x2={x} y1={180 - i * 22} y2={200 - i * 22} stroke="#22c55e" strokeWidth={1.2} />
            <rect x={x - 4} y={180 - i * 22} width={8} height={20 - 2} fill="#22c55e" />
          </g>
        ))}
        {/* flag candles drifting in channel */}
        {[200, 230, 260, 290, 320, 350, 380, 410].map((x, i) => (
          <g key={i}>
            <line x1={x} x2={x} y1={75 + i * 7} y2={105 + i * 7} stroke="#ef4444" strokeWidth={1} />
            <rect x={x - 4} y={80 + i * 7} width={8} height={18} fill="#ef4444" />
          </g>
        ))}
        <text x={20} y={196} fill="#22c55e" fontSize={10} fontFamily="'Space Mono', monospace">POLE</text>
        <text x={300} y={196} fill="#06b6d4" fontSize={10} fontFamily="'Space Mono', monospace">parallel ↘ channel</text>
      </svg>
    );
  }
  if (variant === 'ascending') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {/* flat top */}
        <line x1={40} y1={70} x2={460} y2={70} stroke="#06b6d4" strokeWidth={1.5} strokeDasharray="6 4" />
        {/* rising bottom */}
        <line x1={40} y1={180} x2={460} y2={110} stroke="#06b6d4" strokeWidth={1.5} strokeDasharray="6 4" />
        {/* candles getting tighter */}
        {[60, 100, 140, 180, 220, 260, 300, 340, 380, 420].map((x, i) => {
          const top = 76 + Math.sin(i) * 4;
          const bot = 174 - i * 7;
          return (
            <g key={i}>
              <line x1={x} x2={x} y1={top} y2={bot} stroke={i % 2 === 0 ? '#22c55e' : '#ef4444'} strokeWidth={1} />
              <rect x={x - 4} y={top + 4} width={8} height={Math.max(8, bot - top - 8)} fill={i % 2 === 0 ? '#22c55e' : '#ef4444'} />
            </g>
          );
        })}
        <text x={20} y={66} fill="#06b6d4" fontSize={10} fontFamily="'Space Mono', monospace">flat top</text>
        <text x={20} y={196} fill="#06b6d4" fontSize={10} fontFamily="'Space Mono', monospace">rising bottom ↗</text>
      </svg>
    );
  }
  if (variant === 'risingWedge') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {/* converging UP lines */}
        <line x1={40} y1={130} x2={460} y2={60} stroke="#ef4444" strokeWidth={1.5} strokeDasharray="6 4" />
        <line x1={40} y1={180} x2={460} y2={80} stroke="#ef4444" strokeWidth={1.5} strokeDasharray="6 4" />
        {/* candles converging */}
        {[60, 100, 140, 180, 220, 260, 300, 340, 380, 420].map((x, i) => {
          const top = 130 - i * 7.2;
          const bot = 178 - i * 10.4;
          return (
            <g key={i}>
              <line x1={x} x2={x} y1={top - 4} y2={bot + 4} stroke={i % 2 === 0 ? '#22c55e' : '#ef4444'} strokeWidth={1} />
              <rect x={x - 4} y={top} width={8} height={Math.max(8, bot - top)} fill={i % 2 === 0 ? '#22c55e' : '#ef4444'} />
            </g>
          );
        })}
        {/* break-down arrow */}
        <line x1={440} y1={75} x2={460} y2={140} stroke="#ef4444" strokeWidth={2} />
        <polygon points="460,140 452,134 452,144" fill="#ef4444" />
        <text x={20} y={196} fill="#ef4444" fontSize={10} fontFamily="'Space Mono', monospace">↗↗ converging — usually breaks DOWN</text>
      </svg>
    );
  }
  if (variant === 'cupHandle') {
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto rounded-lg" style={{ background: '#0a0a0a' }}>
        {/* U-shape rounded base */}
        <path d="M 50 60 Q 50 180, 200 180 Q 350 180, 350 60" stroke="#06b6d4" strokeWidth={1.5} strokeDasharray="6 4" fill="none" />
        {/* handle */}
        <path d="M 350 60 L 380 60 L 410 90 L 440 70" stroke="#06b6d4" strokeWidth={1.5} strokeDasharray="6 4" fill="none" />
        {/* candles tracing it */}
        {[
          [60, 64], [80, 78], [100, 100], [125, 130], [150, 158], [180, 172],
          [220, 172], [250, 158], [280, 130], [310, 100], [335, 78], [360, 64],
          [390, 70], [420, 86], [455, 78]
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1={x} x2={x} y1={y - 6} y2={y + 12} stroke={i < 6 ? '#ef4444' : (i < 12 ? '#22c55e' : '#ef4444')} strokeWidth={1} />
            <rect x={x - 3} y={y - 4} width={6} height={10} fill={i < 6 ? '#ef4444' : (i < 12 ? '#22c55e' : '#ef4444')} />
          </g>
        ))}
        <text x={170} y={196} fill="#06b6d4" fontSize={10} fontFamily="'Space Mono', monospace">multi-hour rounded U + handle</text>
      </svg>
    );
  }
  return null;
}

// ============================================================
// 12 — TIME OF DAY
// ============================================================
function Section12TimeOfDay() {
  const zones = [
    { from: '9:30',  to: '10:00', label: 'OPENING DRIVE',     quality: 'Highest', color: '#22c55e', body: "The first bull flag forming after a strong opening rally is often the day's best setup. Institutional buying confirms direction. Volume is highest here. If you scalp this window, take size." },
    { from: '10:00', to: '10:15', label: 'TRANSITION',        quality: 'Mixed',   color: '#06b6d4', body: 'Opening drive finishing, second wave starting. Often a brief consolidation. Watch but don\'t force trades.' },
    { from: '10:15', to: '12:00', label: 'YOUR TRADE WINDOW', quality: 'High',    color: '#10b981', body: 'The second-wave bull flag in this window frequently extends the opening drive. This is your zone. Two patterns max per your discipline. The 10:30-11:00 stretch tends to produce the cleanest setups.' },
    { from: '12:00', to: '14:00', label: 'LUNCH CHOP',        quality: 'Avoid',   color: '#ef4444', body: 'Volume dries up. Bull flags fail at 60-70% rates here. Patterns look right but follow-through dies. Step away from the screen.' },
    { from: '14:00', to: '15:00', label: 'AFTERNOON RESTART', quality: 'Decent',  color: '#f59e0b', body: 'Volume returns. Bull flags work again but with less extension than the morning. Take partial profits earlier.' },
    { from: '15:00', to: '16:00', label: 'POWER HOUR',        quality: 'Variable',color: '#f97316', body: 'End-of-day positioning creates sharp moves. Bull flags can work but reversals are common in the last 15 minutes. Risk widens. Not ideal for scalping unless you\'re seasoned at the close.' }
  ];
  return (
    <SectionShell n={12} title="Time of Day — When Bull Flags Actually Work (ES, NQ, RTY)">
      <p className="mb-5">Not all hours of the trading day produce equal setups. Here's how the day breaks down for ES/NQ/RTY bull flags.</p>
      <TimelineSVG zones={zones} />
      <div className="space-y-3 mt-6">
        {zones.map((z, i) => (
          <div key={i} className="card-tight" style={{ borderColor: z.color + '66' }}>
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <span className="num text-sm" style={{ color: z.color }}>{z.from}–{z.to} ET</span>
                <span className="font-display font-bold" style={{ color: z.color }}>{z.label}</span>
              </div>
              <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{ background: z.color + '22', color: z.color, border: `1px solid ${z.color}55` }}>
                {z.quality}
              </span>
            </div>
            <p className="text-sm text-text/85 leading-relaxed">{z.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 card-tight border-green/40 bg-green/5">
        <p className="text-green font-display font-medium leading-relaxed">
          Your discipline window of 10:15-12:00 ET is well-chosen. It captures the second-wave continuation of opening drives without the lunch chop. Stay disciplined.
        </p>
      </div>
    </SectionShell>
  );
}

function TimelineSVG({ zones }) {
  const w = 1100, h = 110;
  const padL = 20, padR = 20;
  const innerW = w - padL - padR;
  const startMin = 9 * 60 + 30;
  const endMin = 16 * 60;
  const totalMin = endMin - startMin;
  const toMin = t => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };
  return (
    <div className="overflow-x-auto -mx-2 md:mx-0">
      <svg viewBox={`0 0 ${w} ${h}`} className="block rounded-xl border border-border" style={{ background: '#0a0a0a', minWidth: '880px' }}>
        {/* Hour ticks */}
        {[10, 11, 12, 13, 14, 15, 16].map(hr => {
          const x = padL + ((hr * 60 - startMin) / totalMin) * innerW;
          return (
            <g key={hr}>
              <line x1={x} x2={x} y1={70} y2={80} stroke="#444" strokeWidth={1} />
              <text x={x} y={95} fill="#888" fontSize={10} textAnchor="middle" fontFamily="'Space Mono', monospace">{hr}:00</text>
            </g>
          );
        })}
        {/* Zone bars */}
        {zones.map((z, i) => {
          const x1 = padL + ((toMin(z.from) - startMin) / totalMin) * innerW;
          const x2 = padL + ((toMin(z.to) - startMin) / totalMin) * innerW;
          return (
            <g key={i}>
              <rect x={x1} y={20} width={x2 - x1} height={45} rx={4} fill={z.color} opacity={0.85} />
              <text x={(x1 + x2) / 2} y={42} fill="#000" fontSize={10} fontWeight="bold" textAnchor="middle" fontFamily="'Oxanium', sans-serif">
                {z.label.length > 12 ? z.label.slice(0, 12) + '…' : z.label}
              </text>
              <text x={(x1 + x2) / 2} y={56} fill="#000" fontSize={9} textAnchor="middle" fontFamily="'Space Mono', monospace">{z.quality}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ============================================================
// 13 — PSYCHOLOGY
// ============================================================
function Section13Psychology() {
  return (
    <SectionShell n={13} title="Why the Pattern Forms (Psychology)">
      <div className="space-y-3 text-text/90 leading-relaxed">
        <p><span className="text-green font-semibold">1.</span> Big buyers load up at a key level → price rallies sharply. <span className="text-muted">(the pole)</span></p>
        <p><span className="text-blue font-semibold">2.</span> Some buyers take profits and a few late sellers try to short the top → price drifts down or sideways. <span className="text-muted">(the flag)</span></p>
        <p><span className="text-amber font-semibold">3.</span> The late sellers run out of selling power and the original buyers return to add → price breaks up. <span className="text-muted">(the breakout)</span></p>
        <p><span className="text-green font-semibold">4.</span> The same big buyers continue, often hitting the same percentage gain again before they're done. <span className="text-muted">(the measured move)</span></p>
      </div>
    </SectionShell>
  );
}

// ============================================================
// 14 — CHECKLIST
// ============================================================
function Section14Checklist() {
  const items = [
    'Larger trend is up (or at minimum, neutral)',
    'Pole has 3-6 sharp green candles',
    'Flag has 4-8 candles drifting down or sideways',
    "Flag's slope is shallow (under 30 degrees), not steep",
    'Volume declined during the flag',
    "A candle CLOSED above the flag's upper trendline",
    'The candle AFTER the breakout confirmed (green body, higher close, rising volume)',
    'No major economic news within next 5 minutes',
    'Time of day is favorable (avoid 12:00-14:00 ET)',
    "Stop is below the flag's low (not just below the breakout candle)",
    'Measured-move target is at least 2x my risk',
    'This is one of my two trades for the session'
  ];
  return (
    <SectionShell n={14} title="Scalping Checklist (Print This)">
      <p className="mb-5">Mentally run this list before every entry. If any answer is "no" — pass.</p>
      <div className="card border-green/40 bg-green/[0.03]">
        <ul className="space-y-3">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-3">
              <input type="checkbox" />
              <span className="text-base">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

// ============================================================
// SHELL
// ============================================================
function SectionShell({ n, title, children }) {
  return (
    <section className="mb-12">
      <div className="flex items-baseline gap-3 mb-5">
        <div className="font-mono text-sm text-green tracking-tight">§ {String(n).padStart(2, '0')}</div>
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Tile({ color, title, body }) {
  const colors = {
    blue: 'border-blue/40 text-blue',
    green: 'border-green/40 text-green',
    amber: 'border-amber/40 text-amber'
  };
  return (
    <div className={`card-tight border ${colors[color]}`}>
      <div className="font-display font-bold mb-2">{title}</div>
      <p className="text-sm text-text/80 leading-relaxed">{body}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted text-sm">2-minute scalper's complete bull flag treatment.</div>
        <Link to="/drill" className="btn btn-primary px-6">Drill this pattern →</Link>
      </div>
    </footer>
  );
}
