import React, { useMemo } from 'react';

/**
 * Hand-coded SVG renderer for the Bull Flag lab.
 * Bullish #22c55e, bearish #ef4444. Markers, zones, news, RTH-open marker,
 * plus the annotated trendline overlay (upper/lower flag trendline,
 * pole boundary, breakout/retest/failure markers) driven by pattern.annotation.
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
  showAnnotations = true,
  className = ''
}) {
  const padding = { top: 28, right: 110, bottom: 28, left: 60 };
  const candles = pattern.candles;
  const markers = pattern.markers || [];
  const annotation = showAnnotations ? pattern.annotation : null;

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

  const rightEdgeIdx = candles.length - 1;

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

        {/* Annotation overlay — pole boundary box (drawn first, behind candles) */}
        {annotation?.poleRange && (
          <PoleBoundary chart={chart} from={annotation.poleRange[0]} to={annotation.poleRange[1]} candles={candles} />
        )}
        {annotation?.secondPoleRange && (
          <PoleBoundary chart={chart} from={annotation.secondPoleRange[0]} to={annotation.secondPoleRange[1]} candles={candles} label="POLE 2" />
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

        {/* Annotation overlay — trendlines + start/end markers + breakout/retest/failure */}
        {annotation?.upperTrendline && (
          <TrendlinePair chart={chart} annotation={annotation} candles={candles} rightEdgeIdx={rightEdgeIdx} />
        )}
        {annotation?.secondUpperTrendline && (
          <TrendlinePair chart={chart} annotation={{
            upperTrendline: annotation.secondUpperTrendline,
            lowerTrendline: annotation.secondLowerTrendline,
            breakoutIdx: annotation.secondBreakoutIdx,
            failed: false,
            failureIdx: null,
            retestIdx: null
          }} candles={candles} rightEdgeIdx={rightEdgeIdx} variant="second" />
        )}
      </svg>
    </div>
  );
}

// --------------------------------------------------------------------------
// ANNOTATION SUB-COMPONENTS
// --------------------------------------------------------------------------

function PoleBoundary({ chart, from, to, candles, label = 'POLE' }) {
  const x1 = chart.xFor(from) - chart.slot / 2;
  const x2 = chart.xFor(to) + chart.slot / 2;
  const poleHigh = Math.max(...candles.slice(from, to + 1).map(c => c.h));
  const poleLow = Math.min(...candles.slice(from, to + 1).map(c => c.l));
  const yTop = chart.yFor(poleHigh) - 6;
  const yBot = chart.yFor(poleLow) + 6;
  return (
    <g>
      <rect x={x1} y={yTop} width={x2 - x1} height={yBot - yTop}
        fill="none" stroke="#86efac" strokeWidth={1.4}
        strokeDasharray="5 4" opacity={0.85} rx={3} />
      <rect x={x1 + 4} y={yTop - 16} width={56} height={14} rx={3}
        fill="#86efac" opacity={0.95} />
      <text x={x1 + 10} y={yTop - 5}
        fill="#000" fontSize={10} fontWeight="bold"
        fontFamily="'Oxanium', sans-serif">
        {label}
      </text>
    </g>
  );
}

function TrendlinePair({ chart, annotation, candles, rightEdgeIdx, variant = 'primary' }) {
  const upper = annotation.upperTrendline;
  const lower = annotation.lowerTrendline;
  if (!upper) return null;

  // Compute slope from the upper trendline anchors
  const dxIdx = upper.endIdx - upper.startIdx;
  const dyPrice = upper.endPrice - upper.startPrice;
  const slopePerIdx = dxIdx === 0 ? 0 : dyPrice / dxIdx;
  const upperPriceAt = idx => upper.startPrice + slopePerIdx * (idx - upper.startIdx);

  // Lower line slope (parallel, anchored at lower's start)
  let lowerPriceAt = null;
  if (lower) {
    const ldx = lower.endIdx - lower.startIdx;
    const ldy = lower.endPrice - lower.startPrice;
    const lslope = ldx === 0 ? 0 : ldy / ldx;
    lowerPriceAt = idx => lower.startPrice + lslope * (idx - lower.startIdx);
  }

  // Upper line: extend from start across to (rightEdgeIdx + 0.6) so it visibly extrapolates past the last candle
  const extendIdx = rightEdgeIdx + 0.6;
  const x1 = chart.xFor(upper.startIdx);
  const y1 = chart.yFor(upper.startPrice);
  const xExt = chart.xFor(extendIdx);
  const yExt = chart.yFor(upperPriceAt(extendIdx));

  // Lower extension end
  let lx1, ly1, lxExt, lyExt;
  if (lower && lowerPriceAt) {
    lx1 = chart.xFor(lower.startIdx);
    ly1 = chart.yFor(lower.startPrice);
    lxExt = chart.xFor(extendIdx);
    lyExt = chart.yFor(lowerPriceAt(extendIdx));
  }

  // Start/end labels
  const xEnd = chart.xFor(upper.endIdx);
  const yEnd = chart.yFor(upper.endPrice);

  const breakoutIdx = annotation.breakoutIdx;
  const breakoutCandle = breakoutIdx != null ? candles[breakoutIdx] : null;
  const failureIdx = annotation.failureIdx;
  const failureCandle = failureIdx != null ? candles[failureIdx] : null;
  const retestIdx = annotation.retestIdx;
  const retestCandle = retestIdx != null ? candles[retestIdx] : null;

  // Position a compact "UPPER TRENDLINE" tag at the right edge of the line —
  // past the last candle in the margin area so it doesn't overlap candles.
  const tagX = xExt - 8;
  const tagY = yExt + 4;

  return (
    <g>
      {/* Lower (parallel) trendline — drawn first, behind */}
      {lower && (
        <line x1={lx1} y1={ly1} x2={lxExt} y2={lyExt}
          stroke="#06b6d4" strokeWidth={1.5} strokeDasharray="6 4" opacity={0.5} />
      )}
      {lower && (
        <text x={lxExt - 4} y={lyExt + 14}
          fill="#06b6d4" fontSize={10} opacity={0.7}
          textAnchor="end" fontFamily="'Space Mono', monospace">
          Lower trendline (parallel)
        </text>
      )}

      {/* Upper trendline — the critical line */}
      <line x1={x1} y1={y1} x2={xExt} y2={yExt}
        stroke="#06b6d4" strokeWidth={3} strokeDasharray="8 4" />

      {/* Compact trendline tag — pinned to the right end of the line, in the margin */}
      <g>
        <rect x={tagX - 110} y={tagY} width={108} height={18} rx={3}
          fill="#0a0a0a" stroke="#06b6d4" strokeWidth={1.4} />
        <text x={tagX - 56} y={tagY + 13}
          fill="#06b6d4" fontSize={10} fontWeight="bold"
          textAnchor="middle" fontFamily="'Space Mono', monospace">
          UPPER TRENDLINE
        </text>
      </g>

      {/* Start point — mint green circle + numbered label */}
      {variant === 'primary' && (
        <g>
          <circle cx={x1} cy={y1} r={8} fill="#86efac" stroke="#000" strokeWidth={1.8} />
          <text x={x1} y={y1 + 3.5}
            fill="#000" fontSize={10} fontWeight="bold"
            textAnchor="middle" fontFamily="'Oxanium', sans-serif">
            1
          </text>
          {/* Connector to label box */}
          <line x1={x1} y1={y1 - 8} x2={x1 - 18} y2={y1 - 30}
            stroke="#86efac" strokeWidth={1.2} />
          <rect x={x1 - 192} y={y1 - 44} width={176} height={18} rx={3}
            fill="#0a0a0a" stroke="#86efac" strokeWidth={1.2} />
          <text x={x1 - 184} y={y1 - 31}
            fill="#86efac" fontSize={10.5}
            fontFamily="'Space Mono', monospace">
            1. Start here (top of pole)
          </text>
        </g>
      )}

      {/* End point — circle + numbered label (skip if breakout would overlap) */}
      {variant === 'primary' && (
        <g>
          <circle cx={xEnd} cy={yEnd} r={7} fill="#86efac" stroke="#000" strokeWidth={1.5} />
          <text x={xEnd} y={yEnd + 3}
            fill="#000" fontSize={9} fontWeight="bold"
            textAnchor="middle" fontFamily="'Oxanium', sans-serif">
            2
          </text>
          <line x1={xEnd} y1={yEnd + 7} x2={xEnd + 14} y2={yEnd + 32}
            stroke="#86efac" strokeWidth={1.2} />
          <rect x={xEnd + 12} y={yEnd + 22} width={168} height={18} rx={3}
            fill="#0a0a0a" stroke="#86efac" strokeWidth={1.2} />
          <text x={xEnd + 18} y={yEnd + 35}
            fill="#86efac" fontSize={10}
            fontFamily="'Space Mono', monospace">
            2. Extend to last flag high
          </text>
        </g>
      )}

      {/* Breakout arrow + label */}
      {breakoutCandle != null && (
        <BreakoutArrow chart={chart} idx={breakoutIdx} candle={breakoutCandle} failed={annotation.failed} />
      )}

      {/* Failure marker (red X) */}
      {annotation.failed && failureCandle != null && (
        <FailureMark chart={chart} idx={failureIdx} candle={failureCandle} />
      )}

      {/* Retest arrow */}
      {retestCandle != null && (
        <RetestArrow chart={chart} idx={retestIdx} candle={retestCandle} />
      )}
    </g>
  );
}

function BreakoutArrow({ chart, idx, candle, failed }) {
  const x = chart.xFor(idx);
  const y = chart.yFor(candle.h) - 6;
  const arrowEndY = y - 38;
  const labelText = failed
    ? 'BREAK appears here — but watch the next candle'
    : 'BREAK — 2-min candle closes ABOVE the line. LONG here.';
  return (
    <g>
      {/* Arrow shaft */}
      <line x1={x} y1={arrowEndY} x2={x} y2={y - 4}
        stroke="#f97316" strokeWidth={2.5} />
      {/* Arrowhead */}
      <polygon points={`${x},${y - 2} ${x - 6},${y - 12} ${x + 6},${y - 12}`}
        fill="#f97316" />
      {/* Label box */}
      <rect x={x - 145} y={arrowEndY - 22} width={290} height={20} rx={3}
        fill="#0a0a0a" stroke="#f97316" strokeWidth={1.4} />
      <text x={x} y={arrowEndY - 8}
        fill="#f97316" fontSize={10.5} fontWeight="bold"
        textAnchor="middle" fontFamily="'Space Mono', monospace">
        {labelText}
      </text>
    </g>
  );
}

function FailureMark({ chart, idx, candle }) {
  const x = chart.xFor(idx);
  const y = chart.yFor((candle.h + candle.l) / 2);
  const r = 16;
  return (
    <g>
      {/* Red X strokes */}
      <line x1={x - r} y1={y - r} x2={x + r} y2={y + r}
        stroke="#ef4444" strokeWidth={4} strokeLinecap="round" />
      <line x1={x + r} y1={y - r} x2={x - r} y2={y + r}
        stroke="#ef4444" strokeWidth={4} strokeLinecap="round" />
      {/* Label box */}
      <rect x={x - 165} y={y + r + 6} width={330} height={20} rx={3}
        fill="#0a0a0a" stroke="#ef4444" strokeWidth={1.4} />
      <text x={x} y={y + r + 20}
        fill="#ef4444" fontSize={10.5} fontWeight="bold"
        textAnchor="middle" fontFamily="'Space Mono', monospace">
        FAILED — closed back below the line, abort
      </text>
    </g>
  );
}

function RetestArrow({ chart, idx, candle }) {
  const x = chart.xFor(idx);
  const y = chart.yFor(candle.l) + 8;
  const arrowEndY = y + 38;
  return (
    <g>
      {/* Arrow shaft going UP into wick */}
      <line x1={x} y1={arrowEndY} x2={x} y2={y + 4}
        stroke="#f97316" strokeWidth={2.5} />
      {/* Arrowhead pointing up */}
      <polygon points={`${x},${y + 2} ${x - 6},${y + 12} ${x + 6},${y + 12}`}
        fill="#f97316" />
      {/* Label box */}
      <rect x={x - 130} y={arrowEndY + 4} width={260} height={20} rx={3}
        fill="#0a0a0a" stroke="#f97316" strokeWidth={1.4} />
      <text x={x} y={arrowEndY + 18}
        fill="#f97316" fontSize={10.5} fontWeight="bold"
        textAnchor="middle" fontFamily="'Space Mono', monospace">
        RETEST — best entry, long on bounce
      </text>
    </g>
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
