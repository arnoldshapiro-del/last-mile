// Vertical stack of large, full-width charts for one teaching unit.
// Each chart is its own big card — Arnie studies these, so they render large
// and break out of the accordion's left indent to use the full card width.

import React from 'react';
import { CandlestickChart } from './CandlestickChart.jsx';

export function ChartGallery({ conceptId, charts }) {
  if (!charts || charts.length === 0) return null;
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2 mb-3">
        <span style={{ color: '#00D9A0', fontSize: '0.85rem' }}>👁</span>
        <span
          className="text-[10px] uppercase tracking-[0.22em] num font-display font-medium"
          style={{ color: '#00D9A0' }}
        >
          Visual Examples · {charts.length} charts
        </span>
      </div>
      <div
        className="flex flex-col gap-5"
        style={{ marginLeft: '-3.25rem', marginRight: '-1.25rem' }}
      >
        {charts.map((c, i) => (
          <div
            key={conceptId + '-' + i}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid #262626',
              borderRadius: 14,
              padding: 10,
            }}
          >
            <CandlestickChart chart={c} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChartGallery;
