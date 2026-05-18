import React, { useState } from 'react';
import { logBrooksPerTrade } from '../lib/store.js';

const CHECKS = [
  { key: 'trend_15m',     label: '15-min trend aligned with my direction?' },
  { key: 'structure_5m',  label: '5-min structure confirms?' },
  { key: 'pattern',       label: 'Pattern visible on my chosen timeframe (2-min primary)?' },
  { key: 'signal_bar',    label: 'Strong signal bar with 4/4 quality checks?' },
  { key: 'stop_in_300',   label: 'Stop within $300 daily risk budget?' },
  { key: 'context_clean', label: 'Context clean (no tight range, no news, not at session extremes)?' },
];

// Per-trade Brooks check (Card 2 — modal). Logs decision to localStorage
// for end-of-day review. SUGGESTION not enforcement — Arnie still pulls
// the trigger in NinjaTrader manually.
export default function BrooksPerTradeModal({ open, onClose, onDecision }) {
  const [checks, setChecks] = useState({});
  const [done, setDone] = useState(null); // null | 'taken' | 'skipped'

  if (!open) return null;

  const checkedCount = CHECKS.filter(c => checks[c.key]).length;
  const allChecked = checkedCount === CHECKS.length;

  const reset = () => { setChecks({}); setDone(null); };
  const close = () => { reset(); onClose?.(); };

  const decide = (decision) => {
    logBrooksPerTrade({ checks, decision });
    setDone(decision);
    onDecision?.({ decision, checks, allChecked });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-surface border border-border rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        <header className="px-5 py-4 border-b border-border flex items-baseline justify-between">
          <div>
            <div className="label">Per-trade check</div>
            <h2 className="h2">Brooks Quality Filter</h2>
          </div>
          <button onClick={close} className="text-muted hover:text-text text-xl leading-none" aria-label="Close">×</button>
        </header>

        <div className="p-5 space-y-3">
          <p className="text-sm text-muted">
            Mental run-through before pulling the trigger. <strong className="text-text">Suggestion, not enforcement.</strong>
          </p>

          <ul className="space-y-2 list-none p-0 m-0">
            {CHECKS.map(item => {
              const on = !!checks[item.key];
              return (
                <li key={item.key}>
                  <label className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer border transition-colors ${
                    on
                      ? 'border-green/40 bg-green/5'
                      : 'border-border bg-bg hover:border-text/30'
                  }`}>
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => setChecks(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                      className="mt-0.5 accent-green w-4 h-4 shrink-0"
                    />
                    <span className="text-sm leading-snug">{item.label}</span>
                  </label>
                </li>
              );
            })}
          </ul>

          {/* Banner */}
          {allChecked ? (
            <div className="p-3 rounded-lg border border-green/40 bg-green/10 text-green text-sm font-semibold">
              ✓ Quality setup — proceed
            </div>
          ) : (
            <div className="p-3 rounded-lg border border-red/40 bg-red/10 text-red text-sm font-semibold">
              ⚠ {CHECKS.length - checkedCount} of {CHECKS.length} unchecked — consider SKIPPING this trade
            </div>
          )}

          {done && (
            <div className="p-3 rounded-lg border border-blue/40 bg-blue/10 text-blue text-sm">
              Logged: <strong>{done === 'taken' ? 'Trade taken' : 'Skipped'}</strong>. Visible in end-of-day review.
            </div>
          )}
        </div>

        <footer className="px-5 py-4 border-t border-border flex flex-col md:flex-row gap-2">
          <button
            onClick={() => decide('taken')}
            disabled={done !== null}
            className={`btn flex-1 ${allChecked ? 'btn-primary' : 'bg-amber/15 text-amber border border-amber/40'} disabled:opacity-50`}
          >
            Trade taken
          </button>
          <button
            onClick={() => decide('skipped')}
            disabled={done !== null}
            className="btn btn-ghost flex-1 disabled:opacity-50"
          >
            Skipped
          </button>
          {done && (
            <button onClick={close} className="btn btn-ghost px-4">
              Close
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
