import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  getCommitments,
  getActiveSession,
  startSession,
  updateSession,
  endSession,
  clearSession,
  logOverride
} from '../lib/store.js';
import { sounds } from '../lib/audio.js';
import { fmtMoney, fmtClock, clamp } from '../lib/util.js';
import BrooksPerTradeModal from '../components/BrooksPerTradeModal.jsx';
import BrooksPostTradeModal from '../components/BrooksPostTradeModal.jsx';

export default function InSession() {
  const nav = useNavigate();
  const commitments = getCommitments();
  const [session, setSession] = useState(null);
  const [now, setNow] = useState(new Date());
  const [pnlInput, setPnlInput] = useState('');
  const [tradeInput, setTradeInput] = useState(0);
  const [overlay, setOverlay] = useState(null); // 'profit' | 'giveback' | 'lossWarn' | null
  const [overrideText, setOverrideText] = useState('');
  const [showOverrideForm, setShowOverrideForm] = useState(false);
  const [overrideKey, setOverrideKey] = useState('');
  const [showBrooksPerTrade, setShowBrooksPerTrade] = useState(false);
  const [showBrooksPostTrade, setShowBrooksPostTrade] = useState(false);
  const fired = useRef({ profit: false, lossWarn: false, giveback: false });

  // Bootstrap: must have commitments
  useEffect(() => {
    if (!commitments) {
      nav('/protocol/pre-session');
      return;
    }
    let s = getActiveSession();
    if (!s || s.ended) {
      s = startSession();
    }
    setSession(s);
  }, []);

  // Tick clock
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  if (!commitments || !session) return null;

  // Window
  const h = now.getHours(), m = now.getMinutes();
  const minsNow = h * 60 + m;
  const winEnd = 12 * 60;
  const minsLeft = Math.max(0, winEnd - minsNow);
  const hrsLeft = Math.floor(minsLeft / 60);
  const minsRem = minsLeft % 60;

  const peak = session.peakPnl || 0;
  const giveBackPct = peak > 0 ? ((peak - session.pnl) / peak) * 100 : 0;

  const submitTrade = () => {
    const newPnl = Number(pnlInput);
    if (isNaN(newPnl)) return;
    const tradeCount = Number(tradeInput) || (session.tradesTaken + 1);
    const next = updateSession({ pnl: newPnl, tradesTaken: tradeCount });
    setSession(next);
    setPnlInput('');
    setTradeInput(0);

    // Fire alerts
    if (!fired.current.profit && next.pnl >= commitments.profitTarget) {
      fired.current.profit = true;
      sounds.profitTargetGong();
      const lockOutEndsAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
      const updated = updateSession({ profitTargetHit: true, lockOutEndsAt });
      setSession(updated);
      setOverlay('profit');
      return;
    }
    // Loss approach
    const lossLimit = commitments.lossLimit;
    if (!fired.current.lossWarn && next.pnl <= -(lossLimit * 0.83)) {
      fired.current.lossWarn = true;
      sounds.warn();
      setOverlay('lossWarn');
      return;
    }
    // Give-back: peak ≥ ~67% of profit target AND give-back ≥ 40% (60% of peak remaining)
    if (!fired.current.giveback && peak >= commitments.profitTarget * 0.66 && giveBackPct >= 40) {
      fired.current.giveback = true;
      sounds.giveBackWarning();
      setOverlay('giveback');
      return;
    }

    // Routine trade logged — auto-open the post-trade Brooks review.
    // (Skipped above when an overlay fires, which takes precedence.)
    setShowBrooksPostTrade(true);
  };

  const endSessionAndJournal = () => {
    sounds.sessionEnd();
    endSession('completed');
    nav('/checkin');
  };

  const submitOverride = () => {
    if (overrideText.length < 30) return;
    logOverride(overrideText);
    updateSession({ overrides: [...(session.overrides || []), { at: new Date().toISOString(), text: overrideText }] });
    setOverrideText('');
    setShowOverrideForm(false);
    setOverlay(null);
  };

  // Profit-target lock countdown
  let lockSecondsLeft = 0;
  if (session.lockOutEndsAt) {
    lockSecondsLeft = Math.max(0, Math.floor((new Date(session.lockOutEndsAt).getTime() - Date.now()) / 1000));
  }

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-6 md:py-10">
      {/* Floating Brooks per-trade button — fixed top-right so it's always
          one click away during an active session. Doesn't enforce anything;
          it's a quality filter prompt before pulling the trigger. */}
      <button
        onClick={() => setShowBrooksPerTrade(true)}
        className="fixed top-3 right-3 md:top-5 md:right-5 z-30 px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-xs md:text-sm font-display font-semibold bg-green/15 text-green border border-green/40 hover:bg-green/25 shadow-lg shadow-green/10"
        title="Open the per-trade Brooks quality filter"
      >
        ⚡ TRADE ABOUT TO TAKE
      </button>

      <header className="flex items-baseline justify-between mb-6 pr-32 md:pr-44">
        <div>
          <div className="label mb-1">Live Session</div>
          <h1 className="h2">In-Session Companion</h1>
        </div>
        <button onClick={endSessionAndJournal} className="btn btn-ghost py-2 px-3 text-xs">
          End → Journal
        </button>
      </header>

      {/* Quick link to the Brooks Discipline page (for the wider context) */}
      <div className="-mt-3 mb-4">
        <Link to="/protocol/brooks-discipline" className="text-xs text-muted hover:text-text underline-offset-2 hover:underline">
          Open full Brooks Discipline Layer →
        </Link>
      </div>

      {/* Vital stats grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <Tile label="Session clock" value={fmtClock((Date.now() - new Date(session.startedAt).getTime()) / 1000)} />
        <Tile label="Window left" value={minsLeft > 0 ? `${hrsLeft}h ${minsRem}m` : 'CLOSED'} accent={minsLeft > 0 ? 'blue' : 'red'} />
        <Tile label="Trades" value={`${session.tradesTaken} / ${commitments.maxTrades}`} accent={session.tradesTaken >= commitments.maxTrades ? 'red' : null} />
        <Tile label="Current P&L" value={fmtMoney(session.pnl)} accent={session.pnl >= 0 ? 'green' : 'red'} mono />
      </section>

      <section className="grid grid-cols-2 gap-3 mb-6">
        <Tile label="Peak P&L" value={fmtMoney(session.peakPnl)} accent="green" mono />
        <Tile label="Give-back from peak" value={`${giveBackPct.toFixed(0)}%`} accent={giveBackPct >= 40 ? 'amber' : null} mono />
      </section>

      {/* Update form */}
      <section className="card mb-6">
        <h3 className="h3 mb-1">Log a trade</h3>
        <p className="text-sm text-muted mb-4">After each trade, enter your updated session P&L. Trade count auto-increments.</p>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="number"
            placeholder="Updated P&L (e.g. 150 or -75)"
            value={pnlInput}
            onChange={e => setPnlInput(e.target.value)}
            className="input flex-1"
          />
          <button onClick={submitTrade} disabled={pnlInput === ''} className="btn btn-primary px-6">
            Log trade
          </button>
        </div>
      </section>

      {/* Rules ticker */}
      <section className="card-tight mb-6">
        <div className="label mb-2">Today's locked rules</div>
        <ul className="text-sm space-y-1 text-text/80">
          <li>• Profit target: <span className="num text-green">${commitments.profitTarget}</span></li>
          <li>• Loss limit: <span className="num text-red">${commitments.lossLimit}</span></li>
          <li>• Max trades: <span className="num">{commitments.maxTrades}</span></li>
          <li>• Approved patterns: {commitments.patterns?.join(', ').replace('bearFlag','Bear Flag').replace('doubleTop','Double Top')}</li>
          <li>• Trade window: 10:15 — 12:00 ET (Ambien Principle)</li>
        </ul>
      </section>

      {/* Overrides log */}
      {session.overrides?.length > 0 && (
        <section className="card-tight border-amber/40">
          <div className="label text-amber mb-2">Override log</div>
          <ul className="text-xs space-y-1 text-text/70">
            {session.overrides.map((o, i) => (
              <li key={i}>• {new Date(o.at).toLocaleTimeString()} — "{o.text}"</li>
            ))}
          </ul>
        </section>
      )}

      {/* Overlays */}
      {overlay === 'profit' && (
        <ProfitLockOverlay
          target={commitments.profitTarget}
          lockSecondsLeft={lockSecondsLeft}
          onEnd={endSessionAndJournal}
          onOverride={() => { setShowOverrideForm(true); setOverlay(null); setOverrideKey('PROFIT'); }}
        />
      )}
      {overlay === 'giveback' && (
        <GiveBackOverlay
          peak={session.peakPnl}
          current={session.pnl}
          onEnd={endSessionAndJournal}
          onOverride={() => { setShowOverrideForm(true); setOverlay(null); setOverrideKey('GIVEBACK'); }}
        />
      )}
      {overlay === 'lossWarn' && (
        <LossWarnOverlay
          lossLimit={commitments.lossLimit}
          current={session.pnl}
          onAck={() => setOverlay(null)}
        />
      )}
      {showOverrideForm && (
        <OverrideForm
          context={overrideKey}
          text={overrideText}
          setText={setOverrideText}
          onCancel={() => { setShowOverrideForm(false); setOverrideText(''); }}
          onConfirm={submitOverride}
        />
      )}

      <BrooksPerTradeModal
        open={showBrooksPerTrade}
        onClose={() => setShowBrooksPerTrade(false)}
      />
      <BrooksPostTradeModal
        open={showBrooksPostTrade}
        onClose={() => setShowBrooksPostTrade(false)}
      />
    </div>
  );
}

function Tile({ label, value, accent, mono }) {
  const colors = { green: 'text-green', red: 'text-red', blue: 'text-blue', amber: 'text-amber' };
  return (
    <div className="card-tight">
      <div className="label mb-1">{label}</div>
      <div className={`${mono ? 'num' : 'font-display font-semibold'} text-2xl ${colors[accent] || 'text-text'}`}>
        {value}
      </div>
    </div>
  );
}

function ProfitLockOverlay({ target, lockSecondsLeft, onEnd, onOverride }) {
  return (
    <div className="fullscreen-takeover bg-green/95 text-black">
      <div className="max-w-lg w-full text-center">
        <div className="text-6xl mb-4">🎯</div>
        <h2 className="font-display font-bold text-3xl mb-6">You hit your target.</h2>
        <p className="text-lg leading-relaxed mb-2">
          The casino is always open. You are not a gambler. You are a professional.
        </p>
        <p className="text-lg leading-relaxed mb-8 font-semibold">
          Professionals cash out and walk away.
        </p>

        <div className="bg-black/15 rounded-2xl p-5 mb-6">
          <div className="text-xs uppercase tracking-[0.18em] mb-2 opacity-80">60-minute lock</div>
          <div className="font-mono text-5xl font-bold">{fmtClock(lockSecondsLeft)}</div>
        </div>

        {lockSecondsLeft > 0 ? (
          <p className="text-sm opacity-90 mb-4">
            Lock active. End the session officially when the timer reaches zero.
          </p>
        ) : (
          <button onClick={onEnd} className="btn bg-black text-green w-full text-lg py-4 mb-3">
            End session officially
          </button>
        )}

        <button onClick={onOverride} className="text-xs underline opacity-50 hover:opacity-80">
          Override (logged)
        </button>
      </div>
    </div>
  );
}

function GiveBackOverlay({ peak, current, onEnd, onOverride }) {
  return (
    <div className="fullscreen-takeover bg-amber/95 text-black">
      <div className="max-w-lg w-full">
        <div className="text-6xl mb-4 text-center">⚠️</div>
        <h2 className="font-display font-bold text-3xl mb-4 text-center">Give-back alert</h2>
        <p className="text-lg leading-relaxed mb-2">
          You were up <span className="num font-bold">{fmtMoney(peak)}</span>. You're now at <span className="num font-bold">{fmtMoney(current)}</span>.
        </p>
        <p className="text-lg leading-relaxed mb-6 font-semibold">
          This is the give-back pattern. The exact pattern that has cost you 5.5 years.
        </p>
        <p className="text-base mb-8">
          End the session and lock in the win that's still on the table.
        </p>

        <div className="space-y-3">
          <button onClick={onEnd} className="btn bg-green text-black w-full text-lg py-4 shadow-lg">
            End Session — Lock In Win
          </button>
          <button onClick={onOverride} className="text-xs underline opacity-50 hover:opacity-80 block w-full text-center">
            Continue — type why
          </button>
        </div>
      </div>
    </div>
  );
}

function LossWarnOverlay({ lossLimit, current, onAck }) {
  return (
    <div className="fullscreen-takeover bg-amber/95 text-black">
      <div className="max-w-lg w-full text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="font-display font-bold text-2xl mb-4">Approaching daily loss limit</h2>
        <p className="text-base leading-relaxed mb-6">
          You're at <span className="num font-bold">{fmtMoney(current)}</span>. Limit is <span className="num font-bold">${lossLimit}</span>.
        </p>
        <p className="text-base mb-8">
          NinjaTrader will auto-shutoff at full limit. Step away now — the day is done.
        </p>
        <button onClick={onAck} className="btn bg-black text-amber w-full">Acknowledged</button>
      </div>
    </div>
  );
}

function OverrideForm({ context, text, setText, onCancel, onConfirm }) {
  const REQUIRED = 'I am about to break my own rule';
  const [confirmType, setConfirmType] = useState('');
  const phraseOk = confirmType === REQUIRED;
  return (
    <div className="fullscreen-takeover bg-bg/95 backdrop-blur">
      <div className="card max-w-lg w-full border-red/40">
        <div className="label text-red mb-2">Override — {context}</div>
        <h2 className="h2 mb-4">Are you sure?</h2>
        <p className="text-sm text-text/80 mb-2">
          To proceed, type exactly:
        </p>
        <p className="font-mono text-amber mb-2 text-sm">"{REQUIRED}"</p>
        <input value={confirmType} onChange={e => setConfirmType(e.target.value)} className="input mb-4" placeholder="Type the phrase exactly" />

        <div className="label mb-2">Then explain why this is NOT the gambling pattern (≥ 30 chars)</div>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={4}
          className="input font-body text-base mb-2"
          placeholder="I am breaking the rule because..."
        />
        <div className={`text-xs mb-5 ${text.length < 30 ? 'text-muted' : 'text-green'}`}>
          {text.length}/30 chars
        </div>

        <div className="flex gap-3">
          <button onClick={onCancel} className="btn btn-ghost flex-1">Cancel</button>
          <button disabled={!phraseOk || text.length < 30} onClick={onConfirm} className="btn btn-red flex-1">Log & continue</button>
        </div>
      </div>
    </div>
  );
}
