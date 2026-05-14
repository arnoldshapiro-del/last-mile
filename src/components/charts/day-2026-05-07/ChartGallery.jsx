// Vertical stack of large, full-width charts for one teaching unit.
// Each chart is its own big card; CLICK any chart to blow it up fullscreen.
// Arnie studies these, so they render large and break out of the accordion's
// left indent to use the full card width. Fullscreen closes on click/Esc/✕.

import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { CandlestickChart } from './CandlestickChart.jsx';

export function ChartGallery({ conceptId, charts }) {
  const [expanded, setExpanded] = useState(null);
  const close = useCallback(() => setExpanded(null), []);

  useEffect(() => {
    if (expanded === null) return undefined;
    const onKey = e => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [expanded, close]);

  if (!charts || charts.length === 0) return null;

  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span style={{ color: '#00D9A0', fontSize: '0.85rem' }}>👁</span>
        <span
          className="text-[10px] uppercase tracking-[0.22em] num font-display font-medium"
          style={{ color: '#00D9A0' }}
        >
          Visual Examples · {charts.length} charts
        </span>
        <span className="text-[10px] num" style={{ color: 'rgba(232,232,232,0.45)' }}>
          · click any chart to fill the screen
        </span>
      </div>
      <div
        className="flex flex-col gap-5"
        style={{ marginLeft: '-3.25rem', marginRight: '-1.25rem' }}
      >
        {charts.map((c, i) => (
          <div
            key={conceptId + '-' + i}
            onClick={() => setExpanded(i)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpanded(i); }
            }}
            role="button"
            tabIndex={0}
            title="Click to fill the screen"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid #262626',
              borderRadius: 14,
              padding: 10,
              cursor: 'zoom-in',
            }}
          >
            <CandlestickChart chart={c} />
          </div>
        ))}
      </div>

      {expanded !== null && createPortal(
        <div
          onClick={close}
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(3, 6, 12, 0.96)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3vh 2vw',
            cursor: 'zoom-out',
          }}
        >
          <div style={{ width: 'min(97vw, 128vh)' }}>
            <CandlestickChart chart={charts[expanded]} />
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close fullscreen chart"
            style={{
              position: 'fixed',
              top: 16,
              right: 20,
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#f5f9ff',
              borderRadius: 10,
              padding: '8px 16px',
              fontSize: 14,
              fontFamily: 'Oxanium, system-ui, sans-serif',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            ✕ Close
          </button>
          <div
            style={{
              position: 'fixed',
              bottom: 14,
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(232,232,232,0.55)',
              fontSize: 12,
              fontFamily: 'Oxanium, system-ui, sans-serif',
              whiteSpace: 'nowrap',
            }}
          >
            {expanded + 1} / {charts.length} · click anywhere or press Esc to close
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default ChartGallery;
