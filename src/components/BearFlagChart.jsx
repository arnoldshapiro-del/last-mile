import React, { useMemo } from 'react';

/**
 * Bear Flag chart renderer.
 * When pattern.annotation is present, draws explicit trendline annotations:
 *  pole boundary, lower trendline (thick cyan dashed), upper trendline (thinner),
 *  numbered start/end markers, breakout arrow, and optional failed/retest overlays.
 */
export default function BearFlagChart({
  pattern,
  width = 1100,
  height,
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
  const hasAnnotation = !!pattern.annotation;
  const finalHeight = height || (hasAnnotation ? 600 : 540);
  const padding = { top: hasAnnotation ? 70 : 28, right: 110, bottom: 28, left: 60 };
  const candles = pattern.candles;
  const markers = pattern.markers || [];

  const chart = useMemo(() => {
    const volH = showVolume ? 110 : 0;
    const innerW = width - padding.left - padding.right;
    const innerH = finalHeight - padding.top - padding.bottom - volH;
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
  }, [candles, width, finalHeight, showVolume, padding.left, padding.right, padding.top, padding.bottom]);

  const ticks = [];
  for (let i = 0; i <= 4; i++) ticks.push(chart.yMin + (chart.yMax - chart.yMin) * (i / 4));

  return (
    <div className={`overflow-x-auto -mx-2 md:mx-0 ${className}`}>
      <svg viewBox={`0 0 ${width} ${finalHeight}`} preserveAspectRatio="xMidYMid meet"
        className="block rounded-xl border border-border"
        style={{ background: '#0a0a0a', minWidth: width >= 1000 ? '880px' : undefined }}>
        {ticks.map((p, i) => (
          <g key={i}>
            <line x1={padding.left} x2={width - padding.right} y1={chart.yFor(p)} y2={chart.yFor(p)} stroke="#262626" strokeWidth={1} />
            <text x={padding.left - 8} y={chart.yFor(p) + 4} fill="#666" fontSize={11} fontFamily="'Space Mono', monospace" textAnchor="end">{p.toFixed(1)}</text>
          </g>
        ))}

        {zonePole && <ZoneBox chart={chart} fromIndex={zonePole[0]} toIndex={zonePole[1]} color="#FF3D5A" label={poleLabel} top={chart.yFor(chart.yMax) + 4} />}
        {zoneFlag && <ZoneBox chart={chart} fromIndex={zoneFlag[0]} toIndex={zoneFlag[1]} color="#10b981" label={flagLabel} top={chart.yFor(chart.yMax) + 4} />}
        {zoneBreakout && <ZoneBox chart={chart} fromIndex={zoneBreakout[0]} toIndex={zoneBreakout[1]} color="#FFB44A" label={breakoutLabel} top={chart.yFor(chart.yMax) + 4} />}

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
          const yO = chart.yFor(c.o), yC = chart.yFor(c.c), yH = chart.yFor(c.h), yL = chart.yFor(c.l);
          return (
            <g key={i}>
              <line x1={x} x2={x} y1={yH} y2={yL} stroke={color} strokeWidth={1.5} />
              <rect x={x - chart.bodyW / 2} y={Math.min(yO, yC)} width={chart.bodyW}
                height={Math.max(1.5, Math.abs(yC - yO))} fill={color} />
            </g>
          );
        })}

        {/* Volume */}
        {showVolume && candles.map((c, i) => {
          const x = chart.xFor(i);
          const isUp = c.c >= c.o;
          const color = isUp ? '#10b981' : '#FF3D5A';
          const yT = chart.yVol(c.vol || 0);
          return <rect key={`v${i}`} x={x - chart.bodyW / 2} y={yT} width={chart.bodyW} height={chart.volBottom - yT} fill={color} opacity={0.5} />;
        })}
        {showVolume && <text x={padding.left - 8} y={chart.volTop + 14} fill="#666" fontSize={10} fontFamily="'Space Mono', monospace" textAnchor="end">VOL</text>}

        {/* News marker */}
        {newsAtIndex != null && (
          <g>
            <line x1={chart.xFor(newsAtIndex) - chart.slot / 2} x2={chart.xFor(newsAtIndex) - chart.slot / 2}
              y1={padding.top} y2={chart.volBottom} stroke="#FFB44A" strokeWidth={1.5} strokeDasharray="4 4" opacity={0.85} />
            <rect x={chart.xFor(newsAtIndex) - 36} y={padding.top + 6} width={72} height={20} rx={4} fill="#FFB44A" opacity={0.95} />
            <text x={chart.xFor(newsAtIndex)} y={padding.top + 20} fill="#000" fontSize={11} fontWeight="bold" fontFamily="'Space Mono', monospace" textAnchor="middle">NEWS</text>
          </g>
        )}

        {/* Inline price-line markers (entry, etc.) */}
        {markers.map((m, idx) => {
          if (m.kind === 'hline') {
            const y = chart.yFor(m.price);
            return (
              <g key={idx}>
                <line x1={padding.left} x2={width - padding.right} y1={y} y2={y} stroke={m.color || '#FFB44A'} strokeWidth={1.4} strokeDasharray={m.dashed ? '6 4' : ''} opacity={0.85} />
                {m.label && (
                  <g>
                    <rect x={width - padding.right + 6} y={y - 9} width={padding.right - 10} height={18} rx={3} fill="#0a0a0a" stroke={m.color || '#FFB44A'} strokeWidth={1} />
                    <text x={width - padding.right + 10} y={y + 4} fill={m.color || '#FFB44A'} fontSize={10} fontFamily="'Space Mono', monospace">{m.label}</text>
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
                <rect x={x + 16} y={y - 44} width={150} height={20} rx={3} fill="#0a0a0a" stroke={m.color} strokeWidth={1.2} />
                <text x={x + 22} y={y - 30} fill={m.color} fontSize={10.5} fontFamily="'Space Mono', monospace">{m.label}</text>
              </g>
            );
          }
          return null;
        })}

        {hasAnnotation && (
          <AnnotationOverlay annotation={pattern.annotation} chart={chart} candles={candles} width={width} height={finalHeight} padding={padding} />
        )}
      </svg>
    </div>
  );
}

function AnnotationOverlay({ annotation: a, chart, candles, width, height, padding }) {
  const tl = a.flagTrendline;
  const slope = (tl.endPrice - tl.startPrice) / (tl.endIdx - tl.startIdx);
  const extendIdx = candles.length - 1 + 1.5;
  const extendPrice = tl.endPrice + slope * (extendIdx - tl.endIdx);

  const u = a.upperTrendline;
  let upperExtIdx, upperExtPrice;
  if (u) {
    const us = (u.endPrice - u.startPrice) / (u.endIdx - u.startIdx);
    upperExtIdx = candles.length - 1 + 0.5;
    upperExtPrice = u.endPrice + us * (upperExtIdx - u.endIdx);
  }

  const startX = chart.xFor(tl.startIdx);
  const startY = chart.yFor(tl.startPrice);
  const endX = chart.xFor(tl.endIdx);
  const endY = chart.yFor(tl.endPrice);
  const extX = chart.xFor(extendIdx);
  const extY = chart.yFor(extendPrice);

  const poleX1 = chart.xFor(a.poleRange[0]) - chart.slot / 2;
  const poleX2 = chart.xFor(a.poleRange[1]) + chart.slot / 2;
  const poleTop = chart.yFor(chart.yMax) + 6;
  const poleBot = chart.yFor(chart.yMin);

  const startLabel = { x: 70, y: 14, w: 230, h: 32 };
  const endLabel = { x: width - 270, y: 14, w: 230, h: 32 };
  const breakoutY = chart.volTop - 28;

  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;
  const angleDeg = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;

  return (
    <g>
      {/* POLE BOUNDARY */}
      <rect x={poleX1} y={poleTop} width={poleX2 - poleX1} height={poleBot - poleTop}
        fill="rgba(255, 61, 90, 0.05)" stroke="#FF3D5A" strokeWidth={1} strokeDasharray="3 3" opacity={0.7} />
      <text x={(poleX1 + poleX2) / 2} y={poleTop + 14} fill="#FF3D5A" fontSize={10}
        fontFamily="'Space Mono', monospace" textAnchor="middle" fontWeight="bold">POLE</text>

      {/* UPPER TRENDLINE */}
      {u && (
        <g opacity={0.55}>
          <line x1={chart.xFor(u.startIdx)} y1={chart.yFor(u.startPrice)}
            x2={chart.xFor(upperExtIdx)} y2={chart.yFor(upperExtPrice)}
            stroke="#06b6d4" strokeWidth={1.5} strokeDasharray="6 4" />
          <text x={chart.xFor(upperExtIdx) - 4} y={chart.yFor(upperExtPrice) - 5}
            fill="#06b6d4" fontSize={9.5} fontFamily="'Space Mono', monospace" textAnchor="end">
            upper trendline (parallel)
          </text>
        </g>
      )}

      {/* LOWER TRENDLINE — thick cyan dashed */}
      <line x1={startX} y1={startY} x2={endX} y2={endY} stroke="#06b6d4" strokeWidth={3} strokeDasharray="8 4" />
      <line x1={endX} y1={endY} x2={extX} y2={extY} stroke="#06b6d4" strokeWidth={3} strokeDasharray="8 4" opacity={0.55} />

      <text x={midX} y={midY - 9} fill="#10b981" fontSize={10} fontWeight="bold"
        fontFamily="'Space Mono', monospace" textAnchor="middle"
        transform={`rotate(${angleDeg}, ${midX}, ${midY - 9})`}>
        LOWER TRENDLINE — short trigger when candle closes below
      </text>

      {/* START POINT */}
      <circle cx={startX} cy={startY} r={9} fill="#10b981" stroke="#000" strokeWidth={2} />
      <text x={startX} y={startY + 4} fill="#000" fontSize={12} fontWeight="bold" fontFamily="'Oxanium', sans-serif" textAnchor="middle">1</text>
      <rect x={startLabel.x} y={startLabel.y} width={startLabel.w} height={startLabel.h} rx={4} fill="#0a0a0a" stroke="#10b981" strokeWidth={1.2} />
      <text x={startLabel.x + 8} y={startLabel.y + 13} fill="#10b981" fontSize={10.5} fontFamily="'Space Mono', monospace" fontWeight="bold">1. Start drawing here</text>
      <text x={startLabel.x + 8} y={startLabel.y + 26} fill="#10b981" fontSize={9.5} fontFamily="'Space Mono', monospace">bottom of pole</text>
      <line x1={startLabel.x + startLabel.w / 2} y1={startLabel.y + startLabel.h} x2={startX} y2={startY - 9} stroke="#10b981" strokeWidth={1.2} strokeDasharray="4 3" opacity={0.7} />

      {/* END POINT */}
      <circle cx={endX} cy={endY} r={9} fill="#10b981" stroke="#000" strokeWidth={2} />
      <text x={endX} y={endY + 4} fill="#000" fontSize={12} fontWeight="bold" fontFamily="'Oxanium', sans-serif" textAnchor="middle">2</text>
      <rect x={endLabel.x} y={endLabel.y} width={endLabel.w} height={endLabel.h} rx={4} fill="#0a0a0a" stroke="#10b981" strokeWidth={1.2} />
      <text x={endLabel.x + 8} y={endLabel.y + 13} fill="#10b981" fontSize={10.5} fontFamily="'Space Mono', monospace" fontWeight="bold">2. Extend to here</text>
      <text x={endLabel.x + 8} y={endLabel.y + 26} fill="#10b981" fontSize={9.5} fontFamily="'Space Mono', monospace">last flag low — line continues right</text>
      <line x1={endLabel.x + endLabel.w / 2} y1={endLabel.y + endLabel.h} x2={endX} y2={endY - 9} stroke="#10b981" strokeWidth={1.2} strokeDasharray="4 3" opacity={0.7} />

      {/* BREAKOUT ARROW */}
      {a.breakoutIdx != null && !a.failed && (
        <g>
          <line x1={chart.xFor(a.breakoutIdx)} y1={breakoutY + 6} x2={chart.xFor(a.breakoutIdx)} y2={chart.yFor(a.breakoutPrice) + 14} stroke="#f97316" strokeWidth={2.5} />
          <polygon points={`${chart.xFor(a.breakoutIdx)},${chart.yFor(a.breakoutPrice) + 8} ${chart.xFor(a.breakoutIdx) - 7},${chart.yFor(a.breakoutPrice) + 20} ${chart.xFor(a.breakoutIdx) + 7},${chart.yFor(a.breakoutPrice) + 20}`} fill="#f97316" />
          <rect x={chart.xFor(a.breakoutIdx) - 130} y={breakoutY - 4} width={260} height={22} rx={4} fill="#0a0a0a" stroke="#f97316" strokeWidth={1.5} />
          <text x={chart.xFor(a.breakoutIdx)} y={breakoutY + 11} fill="#f97316" fontSize={11} fontWeight="bold" fontFamily="'Space Mono', monospace" textAnchor="middle">
            BREAK — 2-min candle CLOSES below. SHORT.
          </text>
        </g>
      )}

      {/* FAILED OVERLAY */}
      {a.failed && a.breakoutIdx != null && (
        <g>
          <g stroke="#FF3D5A" strokeWidth={4.5} opacity={0.9} strokeLinecap="round">
            <line x1={chart.xFor(a.breakoutIdx) - 16} y1={chart.yFor(a.breakoutPrice) - 16} x2={chart.xFor(a.breakoutIdx) + 16} y2={chart.yFor(a.breakoutPrice) + 16} />
            <line x1={chart.xFor(a.breakoutIdx) + 16} y1={chart.yFor(a.breakoutPrice) - 16} x2={chart.xFor(a.breakoutIdx) - 16} y2={chart.yFor(a.breakoutPrice) + 16} />
          </g>
          <rect x={chart.xFor(a.breakoutIdx) - 130} y={breakoutY - 4} width={260} height={22} rx={4} fill="#0a0a0a" stroke="#FF3D5A" strokeWidth={1.5} />
          <text x={chart.xFor(a.breakoutIdx)} y={breakoutY + 11} fill="#FF3D5A" fontSize={11} fontWeight="bold" fontFamily="'Space Mono', monospace" textAnchor="middle">
            FAILED — abort
          </text>
        </g>
      )}

      {/* RETEST */}
      {a.retestIdx != null && (() => {
        const c = candles[a.retestIdx];
        const rx = chart.xFor(a.retestIdx);
        const ry = chart.yFor(c.h);
        return (
          <g>
            <line x1={rx} y1={ry - 80} x2={rx} y2={ry - 14} stroke="#f97316" strokeWidth={2.5} />
            <polygon points={`${rx},${ry - 10} ${rx - 7},${ry - 22} ${rx + 7},${ry - 22}`} fill="#f97316" />
            <rect x={rx - 140} y={ry - 110} width={280} height={26} rx={4} fill="#0a0a0a" stroke="#f97316" strokeWidth={1.5} />
            <text x={rx} y={ry - 92} fill="#f97316" fontSize={11} fontWeight="bold" fontFamily="'Space Mono', monospace" textAnchor="middle">
              RETEST — best entry, short on rejection
            </text>
          </g>
        );
      })()}

      {/* SECOND-STAGE TRENDLINE */}
      {a.secondTrendline && (() => {
        const s = a.secondTrendline;
        const ss = (s.lowerEndPrice - s.lowerStartPrice) / (s.lowerEndIdx - s.lowerStartIdx);
        const sExt = candles.length - 1 + 1.5;
        const sExtP = s.lowerEndPrice + ss * (sExt - s.lowerEndIdx);
        return (
          <g>
            <line x1={chart.xFor(s.lowerStartIdx)} y1={chart.yFor(s.lowerStartPrice)} x2={chart.xFor(s.lowerEndIdx)} y2={chart.yFor(s.lowerEndPrice)} stroke="#06b6d4" strokeWidth={2.5} strokeDasharray="8 4" />
            <line x1={chart.xFor(s.lowerEndIdx)} y1={chart.yFor(s.lowerEndPrice)} x2={chart.xFor(sExt)} y2={chart.yFor(sExtP)} stroke="#06b6d4" strokeWidth={2.5} strokeDasharray="8 4" opacity={0.55} />
            {s.breakoutIdx != null && (
              <g>
                <line x1={chart.xFor(s.breakoutIdx)} y1={chart.yFor(s.breakoutPrice) + 50} x2={chart.xFor(s.breakoutIdx)} y2={chart.yFor(s.breakoutPrice) + 14} stroke="#f97316" strokeWidth={2.5} />
                <polygon points={`${chart.xFor(s.breakoutIdx)},${chart.yFor(s.breakoutPrice) + 8} ${chart.xFor(s.breakoutIdx) - 6},${chart.yFor(s.breakoutPrice) + 18} ${chart.xFor(s.breakoutIdx) + 6},${chart.yFor(s.breakoutPrice) + 18}`} fill="#f97316" />
              </g>
            )}
          </g>
        );
      })()}
    </g>
  );
}

function ZoneBox({ chart, fromIndex, toIndex, color, label, top }) {
  const x1 = chart.xFor(fromIndex) - chart.slot / 2;
  const x2 = chart.xFor(toIndex) + chart.slot / 2;
  const w = x2 - x1;
  return (
    <g>
      <rect x={x1} y={chart.yFor(chart.yMax)} width={w} height={chart.innerH + 4} fill={color} opacity={0.06} />
      <line x1={x1} x2={x1} y1={chart.yFor(chart.yMax)} y2={chart.yFor(chart.yMin)} stroke={color} strokeWidth={1} strokeDasharray="3 3" opacity={0.4} />
      <line x1={x2} x2={x2} y1={chart.yFor(chart.yMax)} y2={chart.yFor(chart.yMin)} stroke={color} strokeWidth={1} strokeDasharray="3 3" opacity={0.4} />
      {label && (
        <g>
          <rect x={x1 + 4} y={top - 18} width={Math.min(w - 8, 220)} height={22} rx={4} fill={color} opacity={0.95} />
          <text x={x1 + 12} y={top - 3} fill="#000" fontSize={11.5} fontWeight="bold" fontFamily="'Oxanium', sans-serif">{label}</text>
        </g>
      )}
    </g>
  );
}
