import React, { useMemo } from 'react';

/**
 * Hand-coded SVG renderer for the Bull Flag lab.
 * Bullish #22c55e, bearish #ef4444. Markers, zones, news, RTH-open marker.
 */
export default function BullFlagChart({
  pattern,
  width = 1100,
  height = 540,
  showVolume = true,
  zonePole,
  zoneFlag,
  zoneBreakout,
  poleLabel,
  flagLabel,
  breakoutLabel,
  inset,
  className = ''
}) {
  const padding = { top: 28, right: 110, bottom: 28, left: 60 };
  const candles = pattern.candles;
  const markers = pattern.markers || [];

  const chart = useMemo(() => {
    const volH = showVolume ? 110 : 0;
    const innerW = width - padding.left - padding.right;
    const innerH = height - padding.top - padding.bottom - volH;

    const allHigh = Math.max(...candles.map(c => c.h));
    const allLow = Math.min(...candles.map(c => c.l));
    const range = allHigh - allLow || 1;
    const pad = range * 0.08;
    const yMax = allHigh + pad;
    const yMin = allLow - pad;
    const yRange = yMax - yMin;

    const slot = innerW / candles.length;
    const bodyW = Math.max(5, Math.min(slot * 0.74, 26));

    const xFor = i => padding.left + i * slot + slot / 2;
    const yFor = price => padding.top + ((yMax - price) / yRange) * innerH;

    const maxVol = Math.max(1, ...candles.map(c => c.vol || 0));
    const volTop = padding.top + innerH + 14;
    const volBottom = volTop + volH - 6;
    const yVol = v => volBottom - (v / maxVol) * (volH - 12);

    return { innerW, innerH, slot, bodyW, xFor, yFor, yMax, yMin, yRange, volTop, volBottom, yVol, maxVol };
  }, [candles, width, height, showVolume, padding.left, padding.right, padding.top, padding.bottom]);

  const ticks = [];
  for (let i = 0; i <= 4; i++) {
    const p = chart.yMin + (chart.yMax - chart.yMin) * (i / 4);
    ticks.push(p);
  }

  return (
    <div className={`overflow-x-auto -mx-2 md:mx-0 ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        className="block rounded-xl border border-border"
        style={{ background: '#0a0a0a', minWidth: width >= 1000 ? '880px' : undefined }}
        aria-label="Bull flag chart"
      >
        {/* Grid + Y-axis */}
        {ticks.map((p, i) => (
          <g key={i}>
            <line x1={padding.left} x2={width - padding.right}
              y1={chart.yFor(p)} y2={chart.yFor(p)}
              stroke="#262626" strokeWidth={1} />
            <text x={padding.left - 8} y={chart.yFor(p) + 4}
              fill="#666" fontSize={11} fontFamily="'Space Mono', monospace" textAnchor="end">
              {p.toFixed(1)}
            </text>
          </g>
        ))}

        {/* Zones */}
        {zonePole && (
          <ZoneBox chart={chart} fromIndex={zonePole[0]} toIndex={zonePole[1]} color="#22c55e" label={poleLabel} top={chart.yFor(chart.yMax) + 4} />
        )}
        {zoneFlag && (
          <ZoneBox chart={chart} fromIndex={zoneFlag[0]} toIndex={zoneFlag[1]} color="#06b6d4" label={flagLabel} top={chart.yFor(chart.yMax) + 4} />
        )}
        {zoneBreakout && (
          <ZoneBox chart={chart} fromIndex={zoneBreakout[0]} toIndex={zoneBreakout[1]} color="#f97316" label={breakoutLabel} top={chart.yFor(chart.yMax) + 4} />
        )}

        {/* Candles */}
        {candles.map((c, i) => {
          const x = chart.xFor(i);
          const isUp = c.c >= c.o;
          const color = isUp ? '#22c55e' : '#ef4444';
          const yOpen = chart.yFor(c.o);
          const yClose = chart.yFor(c.c);
          const yHigh = chart.yFor(c.h);
          const yLow = chart.yFor(c.l);
          const top = Math.min(yOpen, yClose);
          const bodyH = Math.max(1.5, Math.abs(yClose - yOpen));
          return (
            <g key={i}>
              <line x1={x} x2={x} y1={yHigh} y2={yLow} stroke={color} strokeWidth={1.5} />
              <rect x={x - chart.bodyW / 2} y={top} width={chart.bodyW} height={bodyH} fill={color} />
            </g>
          );
        })}

        {/* Volume bars */}
        {showVolume && candles.map((c, i) => {
          const x = chart.xFor(i);
          const isUp = c.c >= c.o;
          const color = isUp ? '#22c55e' : '#ef4444';
          const yT = chart.yVol(c.vol || 0);
          return (
            <rect key={`v${i}`} x={x - chart.bodyW / 2} y={yT}
              width={chart.bodyW} height={chart.volBottom - yT}
              fill={color} opacity={0.5} />
          );
        })}

        {showVolume && (
          <text x={padding.left - 8} y={chart.volTop + 14}
            fill="#666" fontSize={10} fontFamily="'Space Mono', monospace" textAnchor="end">VOL</text>
        )}

        {/* Inset (used for "in a downtrend" example) */}
        {inset && <Inset width={width} chart={chart} {...inset} />}

        {/* RTH Open marker (for opening-drive example) */}
        {pattern.openMarker && (
          <g>
            <line x1={chart.xFor(0) - chart.slot / 2} x2={chart.xFor(0) - chart.slot / 2}
              y1={padding.top} y2={chart.volBottom}
              stroke="#22c55e" strokeWidth={1.5} strokeDasharray="3 3" opacity={0.6} />
            <rect x={chart.xFor(0) - chart.slot / 2 - 35} y={padding.top + 6}
              width={70} height={20} rx={4} fill="#22c55e" opacity={0.95} />
            <text x={chart.xFor(0) - chart.slot / 2} y={padding.top + 20}
              fill="#000" fontSize={11} fontWeight="bold"
              fontFamily="'Space Mono', monospace" textAnchor="middle">
              9:30 ET
            </text>
          </g>
        )}

        {/* Markers */}
        {markers.map((m, idx) => {
          if (m.kind === 'hline') {
            const y = chart.yFor(m.price);
            return (
              <g key={idx}>
                <line x1={padding.left} x2={width - padding.right} y1={y} y2={y}
                  stroke={m.color || '#f59e0b'} strokeWidth={1.4}
                  strokeDasharray={m.dashed ? '6 4' : ''} opacity={0.85} />
                {m.label && (
                  <g>
                    <rect x={width - padding.right + 6} y={y - 9} width={padding.right - 10} height={18} rx={3}
                      fill="#0a0a0a" stroke={m.color || '#f59e0b'} strokeWidth={1} />
                    <text x={width - padding.right + 10} y={y + 4}
                      fill={m.color || '#f59e0b'} fontSize={10} fontFamily="'Space Mono', monospace">
                      {m.label}
                    </text>
                  </g>
                )}
              </g>
            );
          }
          if (m.kind === 'entry') {
            const x = chart.xFor(m.x);
            const y = chart.yFor(m.y);
            return (
              <g key={idx}>
                <circle cx={x} cy={y} r={7} fill={m.color} stroke="#000" strokeWidth={1.5} />
                <line x1={x} x2={x + 18} y1={y} y2={y - 30} stroke={m.color} strokeWidth={1.2} />
                <rect x={x + 16} y={y - 44} width={150} height={20} rx={3}
                  fill="#0a0a0a" stroke={m.color} strokeWidth={1.2} />
                <text x={x + 22} y={y - 30} fill={m.color}
                  fontSize={10.5} fontFamily="'Space Mono', monospace">
                  {m.label}
                </text>
              </g>
            );
          }
          return null;
        })}
      </svg>
    </div>
  );
}

function ZoneBox({ chart, fromIndex, toIndex, color, label, top }) {
  const x1 = chart.xFor(fromIndex) - chart.slot / 2;
  const x2 = chart.xFor(toIndex) + chart.slot / 2;
  const w = x2 - x1;
  return (
    <g>
      <rect x={x1} y={chart.yFor(chart.yMax)} width={w} height={chart.innerH + 4}
        fill={color} opacity={0.06} />
      <line x1={x1} x2={x1} y1={chart.yFor(chart.yMax)} y2={chart.yFor(chart.yMin)}
        stroke={color} strokeWidth={1} strokeDasharray="3 3" opacity={0.4} />
      <line x1={x2} x2={x2} y1={chart.yFor(chart.yMax)} y2={chart.yFor(chart.yMin)}
        stroke={color} strokeWidth={1} strokeDasharray="3 3" opacity={0.4} />
      {label && (
        <g>
          <rect x={x1 + 4} y={top - 18} width={Math.min(w - 8, 220)} height={22} rx={4}
            fill={color} opacity={0.95} />
          <text x={x1 + 12} y={top - 3}
            fill="#000" fontSize={11.5} fontWeight="bold" fontFamily="'Oxanium', sans-serif">
            {label}
          </text>
        </g>
      )}
    </g>
  );
}

function Inset({ width, chart, kind = 'downtrend' }) {
  // Tiny inset chart in top-right corner showing the larger context
  const w = 200, h = 90;
  const x = width - w - 130;
  const y = 30;

  // Build a stylized larger trend
  const candles = [];
  if (kind === 'downtrend') {
    let p = 70;
    for (let i = 0; i < 14; i++) {
      const drop = i % 4 === 3 ? -2 : 1.4;
      candles.push({ o: p, c: p + drop, h: Math.max(p, p + drop) + 0.7, l: Math.min(p, p + drop) - 0.7 });
      p += drop;
    }
  }
  const ph = candles.map(c => [c.h, c.l]).flat();
  const minP = Math.min(...ph), maxP = Math.max(...ph);
  const yFor = price => 8 + ((maxP - price) / (maxP - minP)) * (h - 16);
  const slot = (w - 16) / candles.length;
  const bodyW = Math.max(2, slot * 0.6);

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={5} fill="#0a0a0a" stroke="#444" strokeWidth={1} />
      <text x={x + 8} y={y + 12} fill="#888" fontSize={9} fontFamily="'Space Mono', monospace">
        ZOOMED OUT — larger trend
      </text>
      <g transform={`translate(${x + 8}, ${y + 14})`}>
        {candles.map((c, i) => {
          const cx = i * slot + slot / 2;
          const isUp = c.c >= c.o;
          const color = isUp ? '#22c55e' : '#ef4444';
          const yO = yFor(c.o), yC = yFor(c.c), yH = yFor(c.h), yL = yFor(c.l);
          return (
            <g key={i}>
              <line x1={cx} x2={cx} y1={yH} y2={yL} stroke={color} strokeWidth={0.8} />
              <rect x={cx - bodyW / 2} y={Math.min(yO, yC)} width={bodyW} height={Math.max(1, Math.abs(yC - yO))} fill={color} />
            </g>
          );
        })}
      </g>
    </g>
  );
}
