import React, { useMemo } from 'react';

const COLOR_BULL_FILL = '#22C55E';
const COLOR_BULL_STROKE = '#16A34A';
const COLOR_BEAR_FILL = '#EF4444';
const COLOR_BEAR_STROKE = '#DC2626';
const COLOR_WARN = '#F59E0B';
const COLOR_NEUTRAL = '#475569';
const COLOR_BG = '#0F172A';
const COLOR_GRID = '#1E293B';
const COLOR_TEXT = '#F1F5F9';
const COLOR_MUTED = '#94A3B8';
const COLOR_ACCENT = '#38BDF8';
const COLOR_BULL_DIM = '#16A34A';
const COLOR_BEAR_DIM = '#DC2626';

/**
 * CandlestickChart — renders a candle array as inline SVG.
 *
 * props:
 *   candles       — array of {open, high, low, close, volume?, label?, highlight?}
 *   annotations   — array of {type, x?, y?, text?, color?, dashed?}
 *   size          — "inline" (default) or "fullscreen"
 *   width         — override (defaults to container or computed)
 *   height        — override
 *   showVolume    — boolean, default false
 *   ariaLabel     — string for screen readers
 *   animateTo     — integer N, only draw first N candles (for animated reveal)
 */
export default function CandlestickChart({
  candles,
  annotations = [],
  size = 'inline',
  width,
  height,
  showVolume = false,
  ariaLabel,
  animateTo,
}) {
  const isFullscreen = size === 'fullscreen';
  const candleWidth = isFullscreen ? 26 : 16;
  const candleGap = isFullscreen ? 8 : 4;
  const padLeft = isFullscreen ? 56 : 40;
  const padRight = isFullscreen ? 64 : 44;
  const padTop = isFullscreen ? 24 : 18;
  const padBottom = isFullscreen ? 36 : 28;
  const volumePaneHeight = showVolume ? (isFullscreen ? 60 : 40) : 0;
  const labelFontSize = isFullscreen ? 16 : 12;
  const axisFontSize = isFullscreen ? 13 : 11;

  const n = candles.length;
  const visibleCount = animateTo != null ? Math.min(n, animateTo) : n;
  const innerWidth = n * candleWidth + (n - 1) * candleGap;
  const totalWidth = width != null ? width : padLeft + innerWidth + padRight;
  const chartHeight = (height != null ? height : (isFullscreen ? 520 : 240)) - volumePaneHeight - padTop - padBottom;
  const totalHeight = (height != null ? height : (isFullscreen ? 520 : 240));

  const { minY, maxY, padY } = useMemo(() => {
    let mn = Infinity, mx = -Infinity;
    candles.forEach((c) => {
      if (c.low < mn) mn = c.low;
      if (c.high > mx) mx = c.high;
    });
    annotations.forEach((a) => {
      if (a.y != null) {
        if (a.y < mn) mn = a.y;
        if (a.y > mx) mx = a.y;
      }
    });
    const pad = (mx - mn) * 0.08;
    return { minY: mn - pad, maxY: mx + pad, padY: pad };
  }, [candles, annotations]);

  const yScale = (price) => {
    if (maxY === minY) return padTop + chartHeight / 2;
    return padTop + (1 - (price - minY) / (maxY - minY)) * chartHeight;
  };
  const xForCandle = (i) => padLeft + i * (candleWidth + candleGap) + candleWidth / 2;

  // Build grid lines (5 horizontal levels)
  const gridLines = useMemo(() => {
    const lines = [];
    for (let i = 0; i <= 4; i++) {
      const price = minY + (maxY - minY) * (i / 4);
      lines.push({ y: yScale(price), price });
    }
    return lines;
  }, [minY, maxY, chartHeight]);

  const maxVolume = useMemo(
    () => Math.max(...candles.map((c) => c.volume || 1)),
    [candles]
  );

  return (
    <svg
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={ariaLabel || `Candlestick chart with ${n} candles`}
      style={{ display: 'block', width: '100%', height: '100%', background: COLOR_BG, borderRadius: 8 }}
    >
      {/* Grid */}
      {gridLines.map((g, i) => (
        <g key={`grid-${i}`}>
          <line
            x1={padLeft}
            x2={totalWidth - padRight}
            y1={g.y}
            y2={g.y}
            stroke={COLOR_GRID}
            strokeWidth={1}
          />
          <text
            x={padLeft - 6}
            y={g.y + axisFontSize / 3}
            fontSize={axisFontSize}
            fill={COLOR_MUTED}
            fontFamily="'Space Mono', monospace"
            textAnchor="end"
          >
            {g.price.toFixed(1)}
          </text>
        </g>
      ))}

      {/* Annotations (lines first so they sit behind candles) */}
      {annotations
        .filter((a) => a.type === 'hline')
        .map((a, i) => {
          const stroke = a.color === 'bear' ? COLOR_BEAR_STROKE : a.color === 'warn' ? COLOR_WARN : COLOR_BULL_STROKE;
          return (
            <g key={`hl-${i}`}>
              <line
                x1={padLeft}
                x2={totalWidth - padRight}
                y1={yScale(a.y)}
                y2={yScale(a.y)}
                stroke={stroke}
                strokeWidth={1.5}
                strokeDasharray={a.dashed === false ? '0' : '6 4'}
                opacity={0.85}
              />
              {a.text && (
                <text
                  x={totalWidth - padRight + 4}
                  y={yScale(a.y) + axisFontSize / 3}
                  fontSize={axisFontSize}
                  fill={stroke}
                  fontFamily="'Space Mono', monospace"
                >
                  {a.text}
                </text>
              )}
            </g>
          );
        })}

      {/* Candles */}
      {candles.slice(0, visibleCount).map((c, i) => {
        const isBull = c.close >= c.open;
        const fill = isBull ? COLOR_BULL_FILL : COLOR_BEAR_FILL;
        const stroke = isBull ? COLOR_BULL_DIM : COLOR_BEAR_DIM;
        const x = xForCandle(i);
        const bodyTop = yScale(Math.max(c.open, c.close));
        const bodyBottom = yScale(Math.min(c.open, c.close));
        const wickTop = yScale(c.high);
        const wickBottom = yScale(c.low);
        const bodyHeight = Math.max(1.5, bodyBottom - bodyTop);
        const isHighlighted = !!c.highlight;
        return (
          <g key={`c-${i}`} opacity={animateTo != null && i >= visibleCount ? 0 : 1}>
            {/* Wick */}
            <line
              x1={x}
              x2={x}
              y1={wickTop}
              y2={wickBottom}
              stroke={stroke}
              strokeWidth={1.5}
              strokeLinecap="round"
            />
            {/* Body */}
            <rect
              x={x - candleWidth / 2}
              y={bodyTop}
              width={candleWidth}
              height={bodyHeight}
              fill={fill}
              stroke={stroke}
              strokeWidth={1}
              rx={1.5}
            />
            {/* Highlight ring */}
            {isHighlighted && (
              <rect
                x={x - candleWidth / 2 - 3}
                y={Math.min(wickTop, bodyTop) - 3}
                width={candleWidth + 6}
                height={Math.max(wickBottom, bodyBottom) - Math.min(wickTop, bodyTop) + 6}
                fill="none"
                stroke={COLOR_ACCENT}
                strokeWidth={1.5}
                strokeDasharray="3 2"
                rx={3}
              />
            )}
            {/* Label above bar */}
            {c.label && (
              <text
                x={x}
                y={wickTop - 6}
                fontSize={labelFontSize}
                fontFamily="'Space Mono', monospace"
                fontWeight="700"
                fill={
                  c.highlight === 'h2' || c.highlight === 'h1'
                    ? COLOR_BULL_FILL
                    : c.highlight === 'l1' || c.highlight === 'l2'
                    ? COLOR_BEAR_FILL
                    : c.highlight === 'skip'
                    ? COLOR_WARN
                    : COLOR_ACCENT
                }
                textAnchor="middle"
              >
                {c.label}
              </text>
            )}
          </g>
        );
      })}

      {/* Entry arrows / stop annotations (on top of candles) */}
      {annotations
        .filter((a) => a.type === 'entry' || a.type === 'entry-short')
        .map((a, i) => {
          const isLong = a.type === 'entry';
          const x = xForCandle(a.x);
          const y = yScale(a.y);
          const color = isLong ? COLOR_BULL_FILL : COLOR_BEAR_FILL;
          // Long: arrow pointing up-right at bar's high; Short: pointing down-right at bar's low
          const sx = padLeft - 24;
          return (
            <g key={`an-${i}`}>
              <line
                x1={sx}
                y1={y}
                x2={x - candleWidth / 2 - 6}
                y2={y}
                stroke={color}
                strokeWidth={1.8}
                strokeDasharray="3 2"
              />
              <polygon
                points={
                  isLong
                    ? `${x - candleWidth / 2 - 6},${y - 5} ${x - candleWidth / 2 - 6},${y + 5} ${x - candleWidth / 2},${y}`
                    : `${x - candleWidth / 2 - 6},${y - 5} ${x - candleWidth / 2 - 6},${y + 5} ${x - candleWidth / 2},${y}`
                }
                fill={color}
              />
              <text
                x={sx + 2}
                y={y - 6}
                fontSize={axisFontSize}
                fontFamily="'Space Mono', monospace"
                fill={color}
                fontWeight="700"
              >
                {a.text || (isLong ? 'Buy' : 'Sell')}
              </text>
            </g>
          );
        })}

      {/* Stop lines */}
      {annotations
        .filter((a) => a.type === 'stop')
        .map((a, i) => {
          const color = a.color === 'bear' ? COLOR_BEAR_STROKE : COLOR_WARN;
          return (
            <g key={`stop-${i}`}>
              <line
                x1={padLeft}
                x2={totalWidth - padRight}
                y1={yScale(a.y)}
                y2={yScale(a.y)}
                stroke={color}
                strokeWidth={1.5}
                strokeDasharray="4 3"
                opacity={0.9}
              />
              <text
                x={totalWidth - padRight + 4}
                y={yScale(a.y) + axisFontSize / 3}
                fontSize={axisFontSize}
                fontFamily="'Space Mono', monospace"
                fill={color}
              >
                {a.text || 'Stop'}
              </text>
            </g>
          );
        })}

      {/* Volume pane */}
      {showVolume && (
        <g>
          <line
            x1={padLeft}
            x2={totalWidth - padRight}
            y1={padTop + chartHeight + 8}
            y2={padTop + chartHeight + 8}
            stroke={COLOR_NEUTRAL}
            strokeWidth={1}
          />
          {candles.slice(0, visibleCount).map((c, i) => {
            const isBull = c.close >= c.open;
            const fill = isBull ? COLOR_BULL_FILL : COLOR_BEAR_FILL;
            const v = (c.volume || 1) / maxVolume;
            const h = v * (volumePaneHeight - 12);
            const x = xForCandle(i) - candleWidth / 2;
            const y0 = padTop + chartHeight + 12 + (volumePaneHeight - 12 - h);
            return (
              <rect
                key={`v-${i}`}
                x={x}
                y={y0}
                width={candleWidth}
                height={h}
                fill={fill}
                opacity={0.55}
              />
            );
          })}
        </g>
      )}
    </svg>
  );
}
