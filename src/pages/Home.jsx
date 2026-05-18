import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  getCommitments,
  isRitualDoneToday,
  isJournalDoneToday,
  getStreak,
  getDrillStats,
  getActiveSession,
  todayKey
} from '../lib/store.js';
import { recentAccuracy, fmtPct } from '../lib/util.js';
import SaveLessonsButton from '../components/SaveLessonsButton.jsx';

const PRINCIPLES = [
  {
    key: 'thunder',
    icon: '🌩️',
    title: 'Thunderstorm',
    line: 'Run in, grab profits, run back to safety.',
    body: 'You are a raider, not a resident. Markets are dangerous weather. Get in, take what is offered, get out. Long stays in storms get people killed.'
  },
  {
    key: 'casino',
    icon: '🎰',
    title: 'Casino',
    line: 'At target, walk away. The casino wants you to keep playing.',
    body: 'The market never closes. The casino never closes. Their entire business model is keeping you at the table. Your job is to leave when the chips are stacked, not when they are gone.'
  },
  {
    key: 'ambien',
    icon: '💊',
    title: 'Ambien',
    line: 'No trading after 12:00 PM. Your judgment is impaired.',
    body: 'You would not prescribe a controlled substance after a 4-hour shift on stimulants. By noon, your trading brain is the same: chemically altered, overconfident, cognitively narrowed. Hard cutoff.'
  },
  {
    key: 'calm',
    icon: '🧘',
    title: 'Calm State',
    line: 'Only trade when peaceful, not revved up.',
    body: 'Excitement and trading are incompatible. If you feel "fired up" or "ready to crush it," that is a contraindication, not a green light. Calm = competent.'
  }
];

const PATTERN_FOCUS = ['bearFlag', 'bullFlag', 'doubleTop'];
const FOCUS_COPY = {
  bearFlag: {
    title: 'Bear Flag',
    line: '2-minute scalper\'s complete bear flag treatment — 12 examples, decision tree, entry tiers.',
    href: '/lab/bear-flag'
  },
  bullFlag: {
    title: 'Bull Flag',
    line: '2-minute scalper\'s complete bull flag treatment — 12 examples, decision tree, entry tiers, lookalike patterns, time-of-day guide.',
    href: '/lab/bull-flag'
  },
  doubleTop: {
    title: 'Double Top → Reversal',
    line: 'Reversal pattern. Two equal tops at resistance, second confirmed by candle pattern + volume divergence. Entry on body close below the valley low.',
    href: '/lab/double-top'
  }
};

export default function Home() {
  const nav = useNavigate();
  const [now, setNow] = useState(new Date());
  const [tick, setTick] = useState(0);
  const [openPrinciple, setOpenPrinciple] = useState(null);

  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(i);
  }, []);

  const commitments = getCommitments();
  const ritualDone = isRitualDoneToday();
  const journalDone = isJournalDoneToday();
  const streak = getStreak();
  const drillStats = getDrillStats();
  const activeSession = getActiveSession();

  const dayIdx = Math.floor(new Date().getTime() / 86400000) % PATTERN_FOCUS.length;
  const focusKey = PATTERN_FOCUS[dayIdx];
  const focus = FOCUS_COPY[focusKey];

  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

  // Trade window status
  const h = now.getHours(), m = now.getMinutes();
  const minsNow = h * 60 + m;
  const winStart = 10 * 60 + 15;
  const winEnd = 12 * 60;
  let windowState = 'before';
  if (minsNow >= winEnd) windowState = 'after';
  else if (minsNow >= winStart) windowState = 'open';

  // Drill quota: 10/day
  const drillsToday = (drillStats.lastDrillDate === todayKey()) ? drillStats.drillsToday : 0;
  const drillProgress = Math.min(100, (drillsToday / 10) * 100);

  // Recent accuracy across all patterns
  let totalAtt = 0, totalCorrect = 0;
  for (const p of Object.values(drillStats.byPattern)) {
    const slice = p.last20 || [];
    totalAtt += slice.length;
    totalCorrect += slice.filter(x => x.correct).length;
  }
  const overallAcc = totalAtt > 0 ? (totalCorrect / totalAtt) * 100 : null;

  const beginSession = () => {
    if (!ritualDone) nav('/protocol/pre-session');
    else nav('/protocol/in-session');
  };

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      {/* Header */}
      <header className="flex items-baseline justify-between mb-6">
        <div>
          <div className="label mb-1">{dateStr}</div>
          <h1 className="h1">Today is the day.</h1>
        </div>
        <div className="text-right">
          <div className="num text-2xl">{timeStr}</div>
          <div className={`text-xs mt-1 ${windowState === 'open' ? 'text-green' : 'text-muted'}`}>
            {windowState === 'before' && 'Trade window: 10:15 ET'}
            {windowState === 'open' && 'Trade window: OPEN'}
            {windowState === 'after' && 'Trade window: closed'}
          </div>
        </div>
      </header>

      {/* In-app save button — replaces the desktop .bat workflow */}
      <div className="mb-6 -mt-2">
        <SaveLessonsButton
          onSaved={() => {
            // Give Netlify ~45s to redeploy the data side, then hard-reload.
            setTimeout(() => window.location.reload(), 45000);
          }}
        />
      </div>

      {/* Status pills row */}
      <div className="flex flex-wrap gap-2 mb-8">
        {ritualDone ? <span className="pill-green">✓ Pre-session ritual</span> : <span className="pill-amber">○ Pre-session ritual pending</span>}
        {commitments ? <span className="pill-blue">Commitments locked</span> : <span className="pill-muted">No commitments yet</span>}
        {journalDone ? <span className="pill-green">✓ Journal complete</span> : <span className="pill-muted">○ Journal pending</span>}
        {streak.count > 0 && <span className="pill-green">{streak.count}-day discipline streak</span>}
      </div>

      {/* Today's commitments — locked card */}
      <section className="card mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="h3 flex items-center gap-2">
              <LockGlyph done={!!commitments} />
              Today's Commitments
            </h2>
            {commitments && <span className="pill-green">LOCKED</span>}
          </div>

          {commitments ? (
            <div className="grid grid-cols-3 gap-4">
              <Stat label="Profit Target" value={`$${commitments.profitTarget}`} accent="green" />
              <Stat label="Loss Limit" value={`$${commitments.lossLimit}`} accent="red" />
              <Stat label="Max Trades" value={commitments.maxTrades} accent="blue" />
              <div className="col-span-3 pt-4 border-t border-border mt-2">
                <div className="label mb-2">Approved patterns today</div>
                <div className="flex flex-wrap gap-2">
                  {commitments.patterns?.includes('bearFlag') && <span className="pill-green">Bear Flag</span>}
                  {commitments.patterns?.includes('doubleTop') && <span className="pill-green">Double Top → Reversal</span>}
                </div>
                <div className="text-xs text-muted mt-3">
                  Locked at {new Date(commitments.lockedAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}.
                  Cannot edit until tomorrow.
                </div>
              </div>
            </div>
          ) : (
            <div className="text-muted">
              <p className="mb-4">You have not run today's pre-session ritual.</p>
              <p className="text-sm">No commitments locked = no session. The ritual takes about 90 seconds.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bridge: Brooks Discipline Layer — between pre-market prep and live session */}
      <Link
        to="/protocol/brooks-discipline"
        className="card-tight mb-4 flex items-center justify-between gap-3 no-underline border-green/20 hover:border-green/40 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-green/10 border border-green/30 flex items-center justify-center text-green text-lg shrink-0">🎓</div>
          <div className="min-w-0">
            <div className="font-display font-semibold text-text leading-tight">Brooks Discipline Layer</div>
            <div className="text-xs text-muted leading-snug mt-0.5">Pre-market check, per-trade filter, post-trade review, today's lessons</div>
          </div>
        </div>
        <span className="text-muted shrink-0">→</span>
      </Link>

      {/* Big primary CTA */}
      <button onClick={beginSession}
        className="btn btn-primary w-full text-lg py-5 mb-8 shadow-glow">
        {activeSession && !activeSession.ended ? 'RESUME LIVE SESSION' :
          ritualDone ? 'BEGIN LIVE SESSION' : 'BEGIN PRE-SESSION RITUAL'}
      </button>

      {/* Four Principles */}
      <section className="mb-8">
        <h2 className="h3 mb-3">The Four Principles</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PRINCIPLES.map(p => (
            <button key={p.key}
              onClick={() => setOpenPrinciple(openPrinciple === p.key ? null : p.key)}
              className={`card-tight text-left transition-all ${openPrinciple === p.key ? 'border-blue ring-1 ring-blue/30' : 'hover:border-blue/40'}`}>
              <div className="text-2xl mb-1">{p.icon}</div>
              <div className="font-display font-semibold text-blue mb-1">{p.title}</div>
              <div className="text-xs text-text/80 leading-snug">{p.line}</div>
            </button>
          ))}
        </div>
        {openPrinciple && (
          <div className="card-tight mt-3 border-blue/30 animate-fadeIn">
            <p className="text-sm leading-relaxed">{PRINCIPLES.find(x => x.key === openPrinciple).body}</p>
          </div>
        )}
      </section>

      {/* Today's Pattern Focus */}
      <section className="mb-8">
        <h2 className="h3 mb-3">Today's Pattern Focus</h2>
        <Link to={focus.href} className="card flex items-start gap-4 hover:border-green/40 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-green/10 border border-green/30 flex items-center justify-center font-display font-bold text-green text-xl shrink-0">
            {focus.title[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-display font-semibold mb-1">{focus.title}</div>
            <p className="text-sm text-text/80 leading-relaxed">{focus.line}</p>
            <div className="text-xs text-green mt-2 font-display">Tap to drill this pattern →</div>
          </div>
        </Link>
      </section>

      {/* Quick stats */}
      <section className="grid grid-cols-3 gap-3 mb-8">
        <QuickStat label="Discipline streak" value={`${streak.count}d`} hint="100% sessions" />
        <QuickStat label="Pattern accuracy" value={overallAcc != null ? fmtPct(overallAcc) : '—'} hint="last 20 drills/pattern" />
        <QuickStat label="Drills today" value={`${drillsToday}/10`} hint="daily quota" progress={drillProgress} />
      </section>

      {/* End-of-day journal nudge */}
      {ritualDone && !journalDone && (
        <div className="card border-amber/30">
          <div className="flex items-center gap-3">
            <div className="text-amber text-2xl">📓</div>
            <div className="flex-1">
              <div className="font-display font-semibold">Today's journal is not done yet</div>
              <div className="text-sm text-muted">Five questions. Sixty seconds. Required to start tomorrow.</div>
            </div>
            <Link to="/checkin" className="btn btn-amber py-2 px-4 text-sm">Open</Link>
          </div>
        </div>
      )}
    </div>
  );
}

function LockGlyph({ done }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none"
      stroke={done ? '#00D9A0' : '#888'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d={done ? 'M8 11V8a4 4 0 0 1 8 0v3' : 'M8 11V8a4 4 0 0 1 8 0'} />
    </svg>
  );
}

function Stat({ label, value, accent }) {
  const colors = {
    green: 'text-green',
    red: 'text-red',
    blue: 'text-blue',
    amber: 'text-amber'
  };
  return (
    <div>
      <div className="label mb-1">{label}</div>
      <div className={`num text-2xl ${colors[accent] || 'text-text'}`}>{value}</div>
    </div>
  );
}

function QuickStat({ label, value, hint, progress }) {
  return (
    <div className="card-tight">
      <div className="label mb-1">{label}</div>
      <div className="num text-2xl mb-0.5">{value}</div>
      <div className="text-[11px] text-muted">{hint}</div>
      {progress != null && (
        <div className="mt-2 h-1 bg-surface2 rounded-full overflow-hidden">
          <div className="h-full bg-green transition-all" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}
