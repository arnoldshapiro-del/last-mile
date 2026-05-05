import React, { useMemo } from 'react';

/**
 * Hand-coded SVG renderer specialized for the Bear Flag lab.
 * Renders proportional OHLC candles, volume histogram, and per-pattern markers
 * (horizontal price lines, entry tier labels, news-event markers).
 *
 * Designed to be ≥1000px wide on desktop. The viewBox preserves aspect ratio so
 * that on mobile it scales down inside a horizontal scroll wrapper.
 */
export default function BearFlagChart({
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
  flagLowTrendline,
  flagHighTrendline,
  newsAtIndex,
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

  // Y-axis price ticks (5 evenly spaced)
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
        aria-label="Bear flag chart"
      >
        {/* Grid + Y-axis labels */}
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

        {/* Pole / Flag / Breakout zones (background highlights) */}
        {zonePole && (
          <ZoneBox chart={chart} fromIndex={zonePole[0]} toIndex={zonePole[1]} color="#FF3D5A" label={poleLabel} top={chart.yFor(chart.yMax) + 4} />
        )}
        {zoneFlag && (
          <ZoneBox chart={chart} fromIndex={zoneFlag[0]} toIndex={zoneFlag[1]} color="#10b981" label={flagLabel} top={chart.yFor(chart.yMax) + 4} />
        )}
        {zoneBreakout && (
          <ZoneBox chart={chart} fromIndex={zoneBreakout[0]} toIndex={zoneBreakout[1]} color="#FFB44A" label={breakoutLabel} top={chart.yFor(chart.yMax) + 4} />
        )}

        {/* Trendlines for flag */}
        {flagLowTrendline && (
          <line x1={chart.xFor(flagLowTrendline.fromIndex)} y1={chart.yFor(flagLowTrendline.fromPrice)}
            x2={chart.xFor(flagLowTrendline.toIndex)} y2={chart.yFor(flagLowTrendline.toPrice)}
            stroke="#10b981" strokeWidth={1.5} strokeDasharray="6 4" opacity={0.85} />
        )}
        {flagHighTrendline && (
          <line x1={chart.xFor(flagHighTrendline.fromIndex)} y1={chart.yFor(flagHighTrendline.fromPrice)}
            x2={chart.xFor(flagHighTrendline.toIndex)} y2={chart.yFor(flagHighTrendline.toPrice)}
            stroke="#10b981" strokeWidth={1.5} strokeDasharray="6 4" opacity={0.85} />
        )}

        {/* Candles */}
        {candles.map((c, i) => {
          const x = chart.xFor(i);
          const isUp = c.c >= c.o;
          const color = isUp ? '#10b981' : '#FF3D5A';
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
          const color = isUp ? '#10b981' : '#FF3D5A';
          const yT = chart.yVol(c.vol || 0);
          return (
            <rect key={`v${i}`} x={x - chart.bodyW / 2} y={yT}
              width={chart.bodyW} height={chart.volBottom - yT}
              fill={color} opacity={0.5} />
          );
        })}

        {/* Volume axis label */}
        {showVolume && (
          <text x={padding.left - 8} y={chart.volTop + 14}
            fill="#666" fontSize={10} fontFamily="'Space Mono', monospace" textAnchor="end">VOL</text>
        )}

        {/* News marker */}
        {newsAtIndex != null && (
          <g>
            <line
              x1={chart.xFor(newsAtIndex) - chart.slot / 2}
              x2={chart.xFor(newsAtIndex) - chart.slot / 2}
              y1={padding.top}
              y2={chart.volBottom}
              stroke="#FFB44A" strokeWidth={1.5} strokeDasharray="4 4" opacity={0.85}
            />
            <rect
              x={chart.xFor(newsAtIndex) - 36} y={padding.top + 6}
              width={72} height={20} rx={4}
              fill="#FFB44A" opacity={0.95}
            />
            <text x={chart.xFor(newsAtIndex)} y={padding.top + 20}
              fill="#000" fontSize={11} fontWeight="bold" fontFamily="'Space Mono', monospace" textAnchor="middle">
              NEWS
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
                  stroke={m.color || '#FFB44A'} strokeWidth={1.4}
                  strokeDasharray={m.dashed ? '6 4' : ''} opacity={0.85} />
                {m.label && (
                  <g>
                    <rect x={width - padding.right + 6} y={y - 9} width={padding.right - 10} height={18} rx={3}
                      fill="#0a0a0a" stroke={m.color || '#FFB44A'} strokeWidth={1} />
                    <text x={width - padding.right + 10} y={y + 4}
                      fill={m.color || '#FFB44A'} fontSize={10} fontFamily="'Space Mono', monospace">
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
