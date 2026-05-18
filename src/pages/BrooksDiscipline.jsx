import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import {
  getBrooksPreMarket,
  setBrooksPreMarket,
  isBrooksPreMarketComplete,
  BROOKS_PRE_ITEMS,
  getBrooksPerTradeToday,
  getBrooksPostTradeToday,
} from '../lib/store.js';
import BrooksPerTradeModal from '../components/BrooksPerTradeModal.jsx';
import BrooksPostTradeModal from '../components/BrooksPostTradeModal.jsx';
import BrooksLessonsTodayPanel from '../components/BrooksLessonsTodayPanel.jsx';

const PRE_LABELS = {
  reviewed_15min_trend:   "I've reviewed the 15-min chart for overall trend direction",
  identified_sr:          "I've identified key support and resistance levels for the day",
  method_chosen:          "I've decided which method I'm using today",
  max_risk_300:           'My maximum daily risk is set at $300 — not negotiable',
  starting_size_1_2:      'My starting position size is 1-2 contracts',
  reviewed_decision_tree: "I've reviewed the 7-question decision tree",
  skip_first_15:          "I'm not trading the first 15 minutes (whipsaw zone)",
};

export default function BrooksDiscipline() {
  const [pre, setPre] = useState(() => getBrooksPreMarket());
  const [openCards, setOpenCards] = useState({ card1: true, card2: false, card3: false, card4: false });
  const [showPerTrade, setShowPerTrade] = useState(false);
  const [showPostTrade, setShowPostTrade] = useState(false);
  // perTradeTick/postTradeTick force the today counts to re-render after a modal logs.
  const [tick, setTick] = useState(0);

  const perTradeToday = useMemo(() => getBrooksPerTradeToday(), [tick]);
  const postTradeToday = useMemo(() => getBrooksPostTradeToday(), [tick]);

  const toggleCheck = (key) => {
    const next = {
      ...pre,
      checks: { ...pre.checks, [key]: !pre.checks?.[key] },
    };
    setPre(setBrooksPreMarket(next));
  };

  const setMethod = (m) => {
    const next = { ...pre, method: m };
    setPre(setBrooksPreMarket(next));
  };

  const card1Done = isBrooksPreMarketComplete(pre);
  const card1Count = BROOKS_PRE_ITEMS.filter(k => pre.checks?.[k]).length;

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-8 py-6 md:py-10">
      {/* Cross-app ribbon — only on this page, doesn't clutter the rest of Last Mile */}
      <div className="flex items-center justify-end gap-2 flex-wrap mb-4 text-[11px]">
        <span className="label mr-1 hidden md:inline">Jump to</span>
        <a
          href="https://brooks-scalping-lab.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border bg-bg text-text/80 hover:text-green hover:border-green/40 transition-colors no-underline font-display font-medium tracking-wider uppercase"
        >
          → Brooks Scalping Lab
          <ExternalLink className="w-3 h-3" />
        </a>
        <a
          href="https://unis-ta-bootcamp-day1.netlify.app/brooks"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border bg-bg text-text/80 hover:text-green hover:border-green/40 transition-colors no-underline font-display font-medium tracking-wider uppercase"
        >
          → Uni's Brooks Hub
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <header className="mb-6">
        <div className="label mb-1">Daily Checklist</div>
        <h1 className="h1">Brooks Discipline Layer</h1>
        <p className="text-sm text-muted mt-2 max-w-prose">
          The connective tissue between pre-market prep and live trading.
          Pre-market scan, per-trade quality filter, post-trade review, and
          today's Brooks-tagged lessons — in one place.
        </p>
      </header>

      {/* Card 1 */}
      <CollapsibleCard
        title="Pre-Market Brooks Check"
        sub="Run before market open"
        open={openCards.card1}
        onToggle={() => setOpenCards(o => ({ ...o, card1: !o.card1 }))}
        statusPill={
          card1Done
            ? <span className="pill-green">{card1Count}/{BROOKS_PRE_ITEMS.length} complete</span>
            : <span className="pill-amber">{card1Count}/{BROOKS_PRE_ITEMS.length}</span>
        }
      >
        <ul className="list-none p-0 m-0 space-y-2">
          {BROOKS_PRE_ITEMS.map(key => {
            if (key === 'method_chosen') {
              const on = !!pre.checks?.[key];
              return (
                <li key={key}>
                  <label className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer border transition-colors ${on ? 'border-green/40 bg-green/5' : 'border-border bg-bg hover:border-text/30'}`}>
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => toggleCheck(key)}
                      className="mt-0.5 accent-green w-4 h-4 shrink-0"
                    />
                    <span className="text-sm leading-snug">
                      {PRE_LABELS[key]}:
                      <span className="block mt-2 flex flex-wrap gap-2">
                        <MethodRadio
                          label="PATTERNS ON 2-MIN (primary)"
                          selected={pre.method === 'patterns_on_2min'}
                          onSelect={() => setMethod('patterns_on_2min')}
                        />
                        <MethodRadio
                          label="PATTERNS ON 5-MIN (stricter)"
                          selected={pre.method === 'patterns_on_5min'}
                          onSelect={() => setMethod('patterns_on_5min')}
                        />
                      </span>
                    </span>
                  </label>
                </li>
              );
            }
            const on = !!pre.checks?.[key];
            return (
              <li key={key}>
                <label className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer border transition-colors ${on ? 'border-green/40 bg-green/5' : 'border-border bg-bg hover:border-text/30'}`}>
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={() => toggleCheck(key)}
                    className="mt-0.5 accent-green w-4 h-4 shrink-0"
                  />
                  <span className="text-sm leading-snug">{PRE_LABELS[key]}</span>
                </label>
              </li>
            );
          })}
        </ul>
        <p className="text-xs text-muted mt-4">Persists for today only — resets at midnight.</p>
      </CollapsibleCard>

      {/* Card 2 */}
      <CollapsibleCard
        title="Per-Trade Brooks Check"
        sub="Mental run before pulling the trigger"
        open={openCards.card2}
        onToggle={() => setOpenCards(o => ({ ...o, card2: !o.card2 }))}
        statusPill={
          perTradeToday.length > 0
            ? <span className="pill-blue">{perTradeToday.length} logged today</span>
            : <span className="pill-muted">none logged</span>
        }
      >
        <p className="text-sm text-text/80 leading-relaxed mb-3">
          Six quick checks. <strong>Suggestion, not enforcement</strong> — you still pull the trigger in NinjaTrader. The decision (taken or skipped) is logged for end-of-day review.
        </p>
        <p className="text-sm text-text/80 leading-relaxed mb-4">
          During an active session, a floating <strong>TRADE ABOUT TO TAKE</strong> button is also pinned to the top-right of the In-Session page.
        </p>
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => setShowPerTrade(true)} className="btn btn-primary">
            Open per-trade check
          </button>
          <Link to="/protocol/in-session" className="btn btn-ghost">
            Go to In-Session →
          </Link>
        </div>

        {perTradeToday.length > 0 && (
          <div className="mt-4">
            <div className="label mb-2">Today's per-trade checks</div>
            <ul className="list-none p-0 m-0 space-y-1 text-sm">
              {perTradeToday.slice(0, 5).map((r, i) => {
                const t = new Date(r.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const n = Object.values(r.checks || {}).filter(Boolean).length;
                const colorClass = r.decision === 'taken' ? 'text-green' : 'text-amber';
                return (
                  <li key={i} className={colorClass}>
                    {t} — {r.decision} ({n}/6 checks passed)
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </CollapsibleCard>

      {/* Card 3 */}
      <CollapsibleCard
        title="Post-Trade Brooks Review"
        sub="After each trade closes"
        open={openCards.card3}
        onToggle={() => setOpenCards(o => ({ ...o, card3: !o.card3 }))}
        statusPill={
          postTradeToday.length > 0
            ? <span className="pill-green">{postTradeToday.length} reviewed today</span>
            : <span className="pill-muted">none reviewed</span>
        }
      >
        <p className="text-sm text-text/80 leading-relaxed mb-3">
          Five quick fields capturing setup type, signal-bar quality, stop placement, exit discipline, and the one lesson. This data feeds your daily JSON workflow (the rough draft for the per-trade JSON you'll paste later).
        </p>
        <p className="text-sm text-text/80 leading-relaxed mb-4">
          On the In-Session page, this modal opens automatically after each logged trade. You can also open it manually here.
        </p>
        <button onClick={() => setShowPostTrade(true)} className="btn btn-primary">
          Open post-trade review
        </button>

        {postTradeToday.length > 0 && (
          <div className="mt-4">
            <div className="label mb-2">Today's post-trade reviews</div>
            <ul className="list-none p-0 m-0 space-y-2 text-sm">
              {postTradeToday.slice(0, 5).map((r, i) => {
                const t = new Date(r.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                return (
                  <li key={i} className="p-2 rounded border border-border bg-bg">
                    <div className="text-xs text-muted mb-0.5">{t} · {r.fields?.pattern || '—'}</div>
                    <div className="text-text">"{r.fields?.lesson?.slice(0, 100)}"</div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </CollapsibleCard>

      {/* Card 4 */}
      <CollapsibleCard
        title="Today's Brooks Lessons"
        sub="Live from your Brooks Hub archive"
        open={openCards.card4}
        onToggle={() => setOpenCards(o => ({ ...o, card4: !o.card4 }))}
      >
        <BrooksLessonsTodayPanel />
      </CollapsibleCard>

      {/* Modals */}
      <BrooksPerTradeModal
        open={showPerTrade}
        onClose={() => { setShowPerTrade(false); setTick(t => t + 1); }}
      />
      <BrooksPostTradeModal
        open={showPostTrade}
        onClose={() => { setShowPostTrade(false); setTick(t => t + 1); }}
      />
    </div>
  );
}

function CollapsibleCard({ title, sub, open, onToggle, statusPill, children }) {
  return (
    <section className="card mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <h3 className="h3 m-0">{title}</h3>
          <div className="text-xs text-muted mt-0.5">{sub}</div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {statusPill}
          <span className={`text-muted transition-transform inline-block ${open ? 'rotate-90' : ''}`}>▶</span>
        </div>
      </button>
      {open && <div className="mt-5">{children}</div>}
    </section>
  );
}

function MethodRadio({ label, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={(e) => { e.preventDefault(); onSelect(); }}
      className={`px-3 py-1.5 rounded-lg text-xs font-display font-medium border transition-colors ${
        selected
          ? 'bg-green/15 text-green border-green/40'
          : 'bg-bg text-text/80 border-border hover:border-text/30'
      }`}
    >
      {label}
    </button>
  );
}
