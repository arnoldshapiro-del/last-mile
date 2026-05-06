import React, { useMemo } from 'react';

/**
 * Double Top chart renderer.
 * When pattern.annotation is present, draws explicit neckline annotations:
 *   - both peaks marked with red downward arrows ("Peak 1", "Peak 2")
 *   - horizontal NECKLINE (4px dashed cyan) at the trough body close
 *   - A and B markers at the left and right ends of the neckline
 *   - pattern-height arrow on the right showing peak-to-neckline distance
 *   - breakdown arrow at the body-close-below candle
 *   - optional retest overlay and failed (red X) overlay
 */
export default function DoubleTopChart({
  pattern,
  width = 1100,
  height,
  showVolume = true,
  newsAtIndex,
  className = ''
}) {
  const hasAnnotation = !!pattern.annotation;
  const finalHeight = height || (hasAnnotation ? 600 : 540);
  const padding = { top: hasAnnotation ? 70 : 28, right: 130, bottom: 28, left: 60 };
  const candles = pattern.candles;
  const markers = pattern.markers || [];

  const chart = useMemo(() => {
    const volH = showVolume ? 110 : 0;
    const innerW = width - padding.left - padding.right;
    const innerH = finalHeight - padding.top - padding.bottom - volH;
    const allHigh = Math.max(...candles.map(c => c.h));
    const allLow = Math.min(...candles.map(c => c.l));
    const range = allHigh - allLow || 1;
    const pad = range * 0.10;
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

        {/* Inline price-line markers */}
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
          <NecklineOverlay annotation={pattern.annotation} chart={chart} candles={candles} width={width} height={finalHeight} padding={padding} />
        )}
      </svg>
    </div>
  );
}

function NecklineOverlay({ annotation: a, chart, candles, width, height, padding }) {
  const necklineY = chart.yFor(a.necklinePrice);
  const necklineLeftX = chart.xFor(a.necklineFromIdx);
  const necklineRightX = chart.xFor(Math.min(candles.length - 1 + 1.2, a.necklineToIdx ?? candles.length - 1 + 1.2));

  const peak1X = chart.xFor(a.peak1Idx);
  const peak1Y = chart.yFor(a.peak1Price);
  const peak2X = chart.xFor(a.peak2Idx);
  const peak2Y = chart.yFor(a.peak2Price);
  const higherPeakPrice = Math.max(a.peak1Price, a.peak2Price);
  const heightAmt = higherPeakPrice - a.necklinePrice;

  const breakoutY = chart.volTop - 28;

  return (
    <g>
      {/* SOFT M OVERLAY (light watermark behind candles) */}
      {a.showM && (
        <path d={`M ${chart.xFor(a.peak1Idx - 3)} ${chart.yFor(a.necklinePrice)} L ${peak1X} ${peak1Y} L ${chart.xFor((a.peak1Idx + a.peak2Idx) / 2)} ${chart.yFor(a.necklinePrice)} L ${peak2X} ${peak2Y} L ${chart.xFor(a.peak2Idx + 3)} ${chart.yFor(a.necklinePrice)}`}
          stroke="#ffffff" strokeWidth={1.3} fill="none" opacity={0.16} strokeDasharray="3 3" />
      )}

      {/* PEAK 1 — red downward arrow with label */}
      <g>
        <line x1={peak1X} y1={peak1Y - 38} x2={peak1X} y2={peak1Y - 12} stroke="#FF3D5A" strokeWidth={2.5} />
        <polygon points={`${peak1X},${peak1Y - 8} ${peak1X - 7},${peak1Y - 20} ${peak1X + 7},${peak1Y - 20}`} fill="#FF3D5A" />
        <rect x={peak1X - 88} y={peak1Y - 60} width={176} height={20} rx={4} fill="#0a0a0a" stroke="#FF3D5A" strokeWidth={1.3} />
        <text x={peak1X} y={peak1Y - 46} fill="#FF3D5A" fontSize={11} fontWeight="bold"
          fontFamily="'Space Mono', monospace" textAnchor="middle">
          1. FIRST REJECTION
        </text>
      </g>

      {/* PEAK 2 — red downward arrow with label */}
      <g>
        <line x1={peak2X} y1={peak2Y - 38} x2={peak2X} y2={peak2Y - 12} stroke="#FF3D5A" strokeWidth={2.5} />
        <polygon points={`${peak2X},${peak2Y - 8} ${peak2X - 7},${peak2Y - 20} ${peak2X + 7},${peak2Y - 20}`} fill="#FF3D5A" />
        <rect x={peak2X - 110} y={peak2Y - 60} width={220} height={20} rx={4} fill="#0a0a0a" stroke="#FF3D5A" strokeWidth={1.3} />
        <text x={peak2X} y={peak2Y - 46} fill="#FF3D5A" fontSize={11} fontWeight="bold"
          fontFamily="'Space Mono', monospace" textAnchor="middle">
          2. SECOND REJECTION (same level)
        </text>
      </g>

      {/* NECKLINE — thick cyan dashed horizontal line */}
      <line x1={necklineLeftX} y1={necklineY} x2={necklineRightX} y2={necklineY}
        stroke="#06b6d4" strokeWidth={4} strokeDasharray="10 5" />

      {/* Centered NECKLINE label above the line */}
      <rect x={(necklineLeftX + necklineRightX) / 2 - 215} y={necklineY - 30} width={430} height={20} rx={4}
        fill="#0a0a0a" stroke="#06b6d4" strokeWidth={1.3} />
      <text x={(necklineLeftX + necklineRightX) / 2} y={necklineY - 16} fill="#06b6d4" fontSize={11} fontWeight="bold"
        fontFamily="'Space Mono', monospace" textAnchor="middle">
        NECKLINE @ {a.necklinePrice.toFixed(2)} — short trigger when 2-min candle closes below
      </text>

      {/* MARKER A — left end */}
      <g>
        <circle cx={necklineLeftX} cy={necklineY} r={11} fill="#10b981" stroke="#000" strokeWidth={2} />
        <text x={necklineLeftX} y={necklineY + 4.5} fill="#000" fontSize={13} fontWeight="bold"
          fontFamily="'Oxanium', sans-serif" textAnchor="middle">A</text>
        <rect x={necklineLeftX - 70} y={necklineY + 18} width={140} height={20} rx={4}
          fill="#0a0a0a" stroke="#10b981" strokeWidth={1.2} />
        <text x={necklineLeftX} y={necklineY + 32} fill="#10b981" fontSize={10.5} fontWeight="bold"
          fontFamily="'Space Mono', monospace" textAnchor="middle">A — start drawing</text>
      </g>

      {/* MARKER B — right end */}
      <g>
        <circle cx={necklineRightX} cy={necklineY} r={11} fill="#10b981" stroke="#000" strokeWidth={2} />
        <text x={necklineRightX} y={necklineY + 4.5} fill="#000" fontSize={13} fontWeight="bold"
          fontFamily="'Oxanium', sans-serif" textAnchor="middle">B</text>
        <rect x={necklineRightX - 70} y={necklineY + 18} width={140} height={20} rx={4}
          fill="#0a0a0a" stroke="#10b981" strokeWidth={1.2} />
        <text x={necklineRightX} y={necklineY + 32} fill="#10b981" fontSize={10.5} fontWeight="bold"
          fontFamily="'Space Mono', monospace" textAnchor="middle">B — extend right</text>
      </g>

      {/* PATTERN HEIGHT bracket on far right */}
      {a.showHeightBracket !== false && (() => {
        const bx = width - padding.right + 22;
        const peakY = chart.yFor(higherPeakPrice);
        return (
          <g>
            <line x1={bx - 6} y1={peakY} x2={bx + 6} y2={peakY} stroke="#FFB44A" strokeWidth={2} />
            <line x1={bx - 6} y1={necklineY} x2={bx + 6} y2={necklineY} stroke="#FFB44A" strokeWidth={2} />
            <line x1={bx} y1={peakY} x2={bx} y2={necklineY} stroke="#FFB44A" strokeWidth={2} />
            <text x={bx + 10} y={(peakY + necklineY) / 2 + 4} fill="#FFB44A" fontSize={10}
              fontFamily="'Space Mono', monospace">
              H={heightAmt.toFixed(1)}
            </text>
          </g>
        );
      })()}

      {/* BREAKOUT arrow (down through neckline) */}
      {a.breakoutIdx != null && !a.failed && (() => {
        const bx = chart.xFor(a.breakoutIdx);
        const by = chart.yFor(a.breakoutPrice);
        return (
          <g>
            <line x1={bx} y1={by + 14} x2={bx} y2={by + 50} stroke="#f97316" strokeWidth={2.5} />
            <polygon points={`${bx},${by + 56} ${bx - 7},${by + 44} ${bx + 7},${by + 44}`} fill="#f97316" />
            <rect x={bx - 145} y={breakoutY - 4} width={290} height={22} rx={4} fill="#0a0a0a" stroke="#f97316" strokeWidth={1.5} />
            <text x={bx} y={breakoutY + 11} fill="#f97316" fontSize={11} fontWeight="bold"
              fontFamily="'Space Mono', monospace" textAnchor="middle">
              3. NECKLINE BREAK = SHORT
            </text>
          </g>
        );
      })()}

      {/* FAILED overlay — red X with reason */}
      {a.failed && a.breakoutIdx != null && (() => {
        const bx = chart.xFor(a.breakoutIdx);
        const by = chart.yFor(a.breakoutPrice);
        return (
          <g>
            <g stroke="#FF3D5A" strokeWidth={4.5} opacity={0.9} strokeLinecap="round">
              <line x1={bx - 18} y1={by - 18} x2={bx + 18} y2={by + 18} />
              <line x1={bx + 18} y1={by - 18} x2={bx - 18} y2={by + 18} />
            </g>
            <rect x={bx - 130} y={breakoutY - 4} width={260} height={22} rx={4} fill="#0a0a0a" stroke="#FF3D5A" strokeWidth={1.5} />
            <text x={bx} y={breakoutY + 11} fill="#FF3D5A" fontSize={11} fontWeight="bold"
              fontFamily="'Space Mono', monospace" textAnchor="middle">
              FAILED — {a.failReason || 'abort'}
            </text>
          </g>
        );
      })()}

      {/* RETEST arrow */}
      {a.retestIdx != null && (() => {
        const c = candles[a.retestIdx];
        const rx = chart.xFor(a.retestIdx);
        const ry = chart.yFor(c.h);
        return (
          <g>
            <line x1={rx} y1={ry - 80} x2={rx} y2={ry - 14} stroke="#06b6d4" strokeWidth={2.5} />
            <polygon points={`${rx},${ry - 10} ${rx - 7},${ry - 22} ${rx + 7},${ry - 22}`} fill="#06b6d4" />
            <rect x={rx - 140} y={ry - 110} width={280} height={26} rx={4} fill="#0a0a0a" stroke="#06b6d4" strokeWidth={1.5} />
            <text x={rx} y={ry - 92} fill="#06b6d4" fontSize={11} fontWeight="bold"
              fontFamily="'Space Mono', monospace" textAnchor="middle">
              RETEST — sell rejection from underside
            </text>
          </g>
        );
      })()}

      {/* THIRD-PEAK marker (for the failed/triple top example) */}
      {a.thirdPeakIdx != null && (() => {
        const px = chart.xFor(a.thirdPeakIdx);
        const py = chart.yFor(a.thirdPeakPrice);
        return (
          <g>
            <line x1={px} y1={py - 38} x2={px} y2={py - 12} stroke="#FFB44A" strokeWidth={2.5} />
            <polygon points={`${px},${py - 8} ${px - 7},${py - 20} ${px + 7},${py - 20}`} fill="#FFB44A" />
            <rect x={px - 80} y={py - 60} width={160} height={20} rx={4} fill="#0a0a0a" stroke="#FFB44A" strokeWidth={1.3} />
            <text x={px} y={py - 46} fill="#FFB44A" fontSize={11} fontWeight="bold"
              fontFamily="'Space Mono', monospace" textAnchor="middle">
              3rd test → broke UP
            </text>
          </g>
        );
      })()}

      {/* Inset uptrend chart (for "in uptrend" example) */}
      {a.inset && (() => {
        const ix = padding.left + 20;
        const iy = padding.top + 80;
        const iw = 180, ih = 90;
        return (
          <g>
            <rect x={ix} y={iy} width={iw} height={ih} rx={6} fill="#161616" stroke="#262626" strokeWidth={1.2} opacity={0.95} />
            <text x={ix + 8} y={iy + 14} fill="#888" fontSize={9} fontFamily="'Space Mono', monospace">LARGER UPTREND CONTEXT</text>
            <polyline points={`${ix + 10},${iy + 80} ${ix + 40},${iy + 70} ${ix + 70},${iy + 60} ${ix + 100},${iy + 45} ${ix + 130},${iy + 35} ${ix + 165},${iy + 22}`}
              fill="none" stroke="#10b981" strokeWidth={1.8} />
            <circle cx={ix + 105} cy={iy + 47} r={4} fill="#FFB44A" />
            <text x={ix + 110} y={iy + 78} fill="#FFB44A" fontSize={9} fontFamily="'Space Mono', monospace">← tiny dbl top here</text>
          </g>
        );
      })()}

      {/* RSI subchart (for divergence example) */}
      {a.rsiDivergence && (() => {
        const sx = chart.xFor(0) - 20;
        const sw = chart.xFor(candles.length - 1) - sx + 40;
        const sy = chart.volTop - 95;
        const sh = 60;
        const r1x = chart.xFor(a.peak1Idx);
        const r2x = chart.xFor(a.peak2Idx);
        return (
          <g opacity={0.9}>
            <rect x={sx} y={sy} width={sw} height={sh} rx={4} fill="#161616" stroke="#262626" />
            <text x={sx + 6} y={sy + 12} fill="#888" fontSize={9} fontFamily="'Space Mono', monospace">RSI</text>
            <polyline points={`${sx + 20},${sy + 30} ${sx + 50},${sy + 22} ${r1x},${sy + 14} ${(r1x + r2x) / 2},${sy + 36} ${r2x},${sy + 26} ${chart.xFor(candles.length - 1)},${sy + 44}`}
              fill="none" stroke="#FFB44A" strokeWidth={1.6} />
            <line x1={r1x} y1={sy + 14} x2={r2x} y2={sy + 26} stroke="#FF3D5A" strokeWidth={1.4} strokeDasharray="3 2" />
            <text x={r2x + 4} y={sy + 24} fill="#FF3D5A" fontSize={9} fontFamily="'Space Mono', monospace">lower high</text>
          </g>
        );
      })()}

      {/* TIME LABELS (for opening-range example) */}
      {a.timeLabels && a.timeLabels.map((tl, i) => {
        const tx = chart.xFor(tl.idx);
        return (
          <g key={i}>
            <line x1={tx} x2={tx} y1={chart.volBottom + 4} y2={chart.volBottom + 14} stroke="#FFB44A" strokeWidth={1.2} />
            <text x={tx} y={chart.volBottom + 26} fill="#FFB44A" fontSize={10} fontFamily="'Space Mono', monospace" textAnchor="middle">{tl.label}</text>
          </g>
        );
      })}

      {/* SHORT trade-bracket markers (entry/stop/target visualisation) */}
      {a.tradeBracket && (() => {
        const eX = chart.xFor(a.tradeBracket.entryIdx);
        const eY = chart.yFor(a.tradeBracket.entryPrice);
        const sY = chart.yFor(a.tradeBracket.stopPrice);
        const tY = chart.yFor(a.tradeBracket.targetPrice);
        return (
          <g>
            <line x1={padding.left} x2={width - padding.right} y1={sY} y2={sY} stroke="#FF3D5A" strokeWidth={1.2} strokeDasharray="4 3" opacity={0.7} />
            <line x1={padding.left} x2={width - padding.right} y1={tY} y2={tY} stroke="#10b981" strokeWidth={1.2} strokeDasharray="4 3" opacity={0.7} />
            <rect x={width - padding.right + 6} y={sY - 9} width={padding.right - 10} height={18} rx={3} fill="#0a0a0a" stroke="#FF3D5A" />
            <text x={width - padding.right + 10} y={sY + 4} fill="#FF3D5A" fontSize={10} fontFamily="'Space Mono', monospace">STOP {a.tradeBracket.stopPrice.toFixed(1)}</text>
            <rect x={width - padding.right + 6} y={tY - 9} width={padding.right - 10} height={18} rx={3} fill="#0a0a0a" stroke="#10b981" />
            <text x={width - padding.right + 10} y={tY + 4} fill="#10b981" fontSize={10} fontFamily="'Space Mono', monospace">TARGET {a.tradeBracket.targetPrice.toFixed(1)}</text>
          </g>
        );
      })()}
    </g>
  );
}
