import React from 'react';
import { CandlestickChart } from './CandlestickChart.jsx';

export function ChartGallery({ conceptId, charts }) {
  if (!charts || charts.length === 0) return null;
  return (
    <div className="mt-4">
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
        className="overflow-x-auto pb-2 -mx-2 px-2 no-scrollbar"
        style={{ scrollbarWidth: 'thin' }}
      >
        <div className="flex gap-3" style={{ minWidth: 'min-content' }}>
          {charts.map((c, i) => (
            <div
              key={conceptId + '-' + i}
              style={{
                flex: '0 0 auto',
                width: 'min(420px, 80vw)',
                background: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid #262626',
                borderRadius: 12,
                padding: 6,
              }}
            >
              <CandlestickChart chart={c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChartGallery;
