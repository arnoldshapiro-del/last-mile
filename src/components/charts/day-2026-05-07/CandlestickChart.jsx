// Generic candlestick SVG renderer for the daily-lesson chart galleries.
// LARGE-FORMAT BY DESIGN — Arnie studies these on a second monitor, so every
// chart renders big with oversized labels. Do not shrink this coordinate space
// or the fonts. Mirrors the unis-ta-bootcamp-day1 version with the same API.

import React from 'react';

const VERDICT_COLOR = {
  good: { bg: 'rgba(0, 217, 160, 0.18)',  border: 'rgba(0, 217, 160, 0.55)',  text: '#86efac' },
  bad:  { bg: 'rgba(255, 61, 90, 0.18)',  border: 'rgba(255, 61, 90, 0.55)',  text: '#fca5a5' },
  warn: { bg: 'rgba(255, 180, 74, 0.18)', border: 'rgba(255, 180, 74, 0.55)', text: '#fcd34d' },
  info: { bg: 'rgba(74, 158, 255, 0.18)', border: 'rgba(74, 158, 255, 0.55)', text: '#93c5fd' },
};

// Large-format coordinate space — these charts are meant to be studied, not glanced at.
const W = 760;
const H = 560;
const PADDING_L = 30;
const PADDING_R = 96;
const TITLE_H = 56;
const CHART_TOP = TITLE_H + 16;
const VERDICT_H = 44;
const CAPTION_H = 66;
const VOLUME_H = 64;
const CHART_BOTTOM_PADDING = VERDICT_H + CAPTION_H + 10;

function priceToY(price, min, max, top, bottom) {
  if (max === min) return (top + bottom) / 2;
  return bottom - ((price - min) / (max - min)) * (bottom - top);
}
function indexToX(i, total) {
  const gridW = W - PADDING_L - PADDING_R;
  const cellW = gridW / total;
  return PADDING_L + cellW * (i + 0.5);
}

// Split a caption into at most two balanced lines so nothing gets clipped.
function wrapCaption(text) {
  const MAX = 66;
  if (!text) return [''];
  if (text.length <= MAX) return [text];
  const mid = Math.floor(text.length / 2);
  let split = text.lastIndexOf(' ', mid + 14);
  if (split < mid - 14) split = text.indexOf(' ', mid);
  if (split === -1) split = mid;
  const line1 = text.slice(0, split).trim();
  let line2 = text.slice(split).trim();
  if (line2.length > MAX + 14) line2 = line2.slice(0, MAX + 13).trim() + '…';
  return [line1, line2];
}

export function CandlestickChart({ chart }) {
  const { title, candles, annotations = [], verdict, caption } = chart;
  const hasVolume = annotations.some(a => a.type === 'volume');
  const chartBottom = H - CHART_BOTTOM_PADDING - (hasVolume ? VOLUME_H : 0);

  const prices = [];
  candles.forEach(c => prices.push(c.h, c.l));
  annotations.forEach(a => {
    if (a.type === 'level') prices.push(a.price);
    if (a.type === 'trendline') prices.push(a.from.price, a.to.price);
    if (a.type === 'zone') prices.push(a.topPrice, a.bottomPrice);
    if (a.type === 'arrow') prices.push(a.at.price);
    if (a.type === 'badge') prices.push(a.at.price);
    if (a.type === 'pivot') {
      const c = candles[a.at.i];
      if (c) prices.push(a.at.side === 'high' ? c.h : c.l);
    }
  });
  const dataMin = Math.min(...prices);
  const dataMax = Math.max(...prices);
  const range = Math.max(dataMax - dataMin, 0.001);
  const min = dataMin - range * 0.08;
  const max = dataMax + range * 0.08;

  const cellW = (W - PADDING_L - PADDING_R) / candles.length;
  const candleW = Math.max(3, Math.min(40, cellW * 0.6));
  const captionLines = wrapCaption(caption);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ width: '100%', height: 'auto', display: 'block' }}
      role="img"
      aria-label={title + ' — ' + caption}
    >
      <rect x={0} y={0} width={W} height={H} fill="#070c18" rx={12} />
      <rect x={0} y={0} width={W} height={H} fill="url(#chart-grid)" rx={12} opacity={0.45} />

      <defs>
        <pattern id="chart-grid" width="60" height="48" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={1} />
        </pattern>
        <linearGradient id="title-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#101828" />
          <stop offset="100%" stopColor="#070c18" />
        </linearGradient>
      </defs>

      <rect x={0} y={0} width={W} height={TITLE_H} fill="url(#title-bg)" rx={12} ry={12} />
      <rect x={0} y={TITLE_H - 2} width={W} height={2} fill="rgba(0, 217, 160, 0.35)" />
      <text
        x={W / 2}
        y={TITLE_H / 2 + 8}
        textAnchor="middle"
        fill="#f5f9ff"
        fontSize={22}
        fontFamily="Oxanium, system-ui, sans-serif"
        fontWeight={600}
      >
        {title}
      </text>

      {[0, 0.25, 0.5, 0.75, 1].map((p, i) => {
        const y = chartBottom - (chartBottom - CHART_TOP) * p;
        const price = min + (max - min) * p;
        return (
          <g key={i}>
            <line x1={PADDING_L} y1={y} x2={W - PADDING_R} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
            <text x={W - PADDING_R + 8} y={y + 5} fill="rgba(148,163,184,0.7)" fontSize={14} fontFamily="Space Mono, ui-monospace, monospace">
              {price.toFixed(2)}
            </text>
          </g>
        );
      })}

      {annotations.filter(a => a.type === 'zone').map((a, i) => {
        const yTop = priceToY(a.topPrice, min, max, CHART_TOP, chartBottom);
        const yBot = priceToY(a.bottomPrice, min, max, CHART_TOP, chartBottom);
        const color = a.color || 'rgba(94, 234, 212, 0.10)';
        return (
          <g key={'z' + i}>
            <rect x={PADDING_L} y={Math.min(yTop, yBot)} width={W - PADDING_L - PADDING_R} height={Math.abs(yBot - yTop)} fill={color} />
            {a.label && (
              <text x={PADDING_L + 10} y={Math.min(yTop, yBot) + 19} fill="rgba(255,255,255,0.80)" fontSize={13.5} fontFamily="Inter, system-ui, sans-serif">
                {a.label}
              </text>
            )}
          </g>
        );
      })}

      {candles.map((candle, i) => {
        const x = indexToX(i, candles.length);
        const yH = priceToY(candle.h, min, max, CHART_TOP, chartBottom);
        const yL = priceToY(candle.l, min, max, CHART_TOP, chartBottom);
        const yO = priceToY(candle.o, min, max, CHART_TOP, chartBottom);
        const yC = priceToY(candle.c, min, max, CHART_TOP, chartBottom);
        const bullish = candle.c >= candle.o;
        const fill = bullish ? '#00D9A0' : '#FF3D5A';
        const stroke = bullish ? '#00b386' : '#cc2e47';
        const yBodyTop = Math.min(yO, yC);
        const yBodyBot = Math.max(yO, yC);
        const bodyH = Math.max(3, yBodyBot - yBodyTop);
        return (
          <g key={i}>
            <line x1={x} y1={yH} x2={x} y2={yL} stroke={stroke} strokeWidth={2.5} />
            <rect x={x - candleW / 2} y={yBodyTop} width={candleW} height={bodyH} fill={fill} stroke={stroke} strokeWidth={1.5} rx={2} />
          </g>
        );
      })}

      {annotations.filter(a => a.type === 'level').map((a, i) => {
        const y = priceToY(a.price, min, max, CHART_TOP, chartBottom);
        const color = a.color || '#FFB44A';
        const dasharray = a.dash ? '6 4' : undefined;
        return (
          <g key={'l' + i}>
            <line x1={PADDING_L} y1={y} x2={W - PADDING_R} y2={y} stroke={color} strokeWidth={2.5} strokeDasharray={dasharray} opacity={0.9} />
            {a.label && (
              <g>
                <rect x={PADDING_L + 6} y={y - 21} width={(a.label.length * 8.4) + 16} height={24} fill={color} opacity={0.92} rx={4} />
                <text x={PADDING_L + 14} y={y - 4} fill="#070c18" fontSize={14} fontFamily="Oxanium, system-ui, sans-serif" fontWeight={700}>{a.label}</text>
              </g>
            )}
          </g>
        );
      })}

      {annotations.filter(a => a.type === 'trendline').map((a, i) => {
        const x1 = indexToX(a.from.i, candles.length);
        const y1 = priceToY(a.from.price, min, max, CHART_TOP, chartBottom);
        const x2 = indexToX(a.to.i, candles.length);
        const y2 = priceToY(a.to.price, min, max, CHART_TOP, chartBottom);
        const color = a.color || '#5eead4';
        const dasharray = a.dash ? '7 4' : undefined;
        return (
          <g key={'t' + i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={3} strokeDasharray={dasharray} opacity={0.9} />
            {a.label && (
              <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 10} fill={color} fontSize={14} fontFamily="Oxanium, system-ui, sans-serif" fontWeight={600} textAnchor="middle">
                {a.label}
              </text>
            )}
          </g>
        );
      })}

      {annotations.filter(a => a.type === 'arrow').map((a, i) => {
        const x = indexToX(a.at.i, candles.length);
        const y = priceToY(a.at.price, min, max, CHART_TOP, chartBottom);
        const color = a.color || '#FFB44A';
        const isUp = a.direction === 'up';
        const offset = isUp ? 30 : -30;
        const arrowY1 = y + offset;
        const arrowY2 = y + (isUp ? 7 : -7);
        return (
          <g key={'a' + i}>
            <line x1={x} y1={arrowY1} x2={x} y2={arrowY2} stroke={color} strokeWidth={3} />
            <polygon
              points={`${x - 7},${arrowY2 + (isUp ? -2 : 2)} ${x + 7},${arrowY2 + (isUp ? -2 : 2)} ${x},${y + (isUp ? -2 : 2)}`}
              fill={color}
            />
            {a.label && (
              <g>
                <rect
                  x={x - (a.label.length * 4.5) - 6}
                  y={arrowY1 + (isUp ? -1 : -19)}
                  width={(a.label.length * 9) + 12}
                  height={20}
                  fill={color}
                  rx={3}
                  opacity={0.96}
                />
                <text x={x} y={arrowY1 + (isUp ? 13 : -5)} textAnchor="middle" fill="#070c18" fontSize={13} fontWeight={700} fontFamily="Oxanium, system-ui, sans-serif">
                  {a.label}
                </text>
              </g>
            )}
          </g>
        );
      })}

      {annotations.filter(a => a.type === 'badge').map((a, i) => {
        const x = indexToX(a.at.i, candles.length);
        const y = priceToY(a.at.price, min, max, CHART_TOP, chartBottom);
        const color = a.color || '#a78bfa';
        const w = (a.text.length * 8.6) + 18;
        return (
          <g key={'b' + i}>
            <rect x={x - w / 2} y={y - 12} width={w} height={24} fill={color} rx={5} opacity={0.94} />
            <text x={x} y={y + 5} textAnchor="middle" fill="#070c18" fontSize={13.5} fontWeight={700} fontFamily="Oxanium, system-ui, sans-serif">
              {a.text}
            </text>
          </g>
        );
      })}

      {/* PIVOT — labeled circle at a candle's wick high or low. */}
      {annotations.filter(a => a.type === 'pivot').map((a, i) => {
        const candle = candles[a.at.i];
        if (!candle) return null;
        const isHigh = a.at.side === 'high';
        const price = isHigh ? candle.h : candle.l;
        const x = indexToX(a.at.i, candles.length);
        const y = priceToY(price, min, max, CHART_TOP, chartBottom);
        const offsetY = isHigh ? -11 : 11;
        const cy = y + offsetY;
        const color = a.color || (isHigh ? '#FBBF24' : '#22D3EE');
        const labelY = isHigh ? cy - 11 : cy + 23;
        return (
          <g key={'p' + i}>
            <circle cx={x} cy={cy} r={7} fill={color} stroke="#070c18" strokeWidth={2} />
            {a.label && (
              <text x={x} y={labelY} textAnchor="middle" fill={color} fontSize={14} fontWeight={700} fontFamily="Oxanium, system-ui, sans-serif">
                {a.label}
              </text>
            )}
          </g>
        );
      })}

      {hasVolume && (() => {
        const volAnn = annotations.find(a => a.type === 'volume');
        if (!volAnn || !volAnn.bars) return null;
        const volTop = chartBottom + 14;
        const volBottom = volTop + VOLUME_H - 12;
        const volMax = Math.max(...volAnn.bars, 1);
        return (
          <g>
            <line x1={PADDING_L} y1={volTop} x2={W - PADDING_R} y2={volTop} stroke="rgba(255,255,255,0.10)" strokeWidth={1} />
            <text x={PADDING_L} y={volTop - 5} fill="rgba(148,163,184,0.7)" fontSize={12} fontFamily="Oxanium, system-ui, sans-serif">VOL</text>
            {volAnn.bars.map((v, i) => {
              const barX = indexToX(i, candles.length);
              const candle = candles[i];
              const bullish = candle && candle.c >= candle.o;
              const h = (v / volMax) * (volBottom - volTop);
              return (
                <rect
                  key={'v' + i}
                  x={barX - candleW / 2}
                  y={volBottom - h}
                  width={candleW}
                  height={h}
                  fill={bullish ? '#00D9A0' : '#FF3D5A'}
                  opacity={0.55}
                />
              );
            })}
          </g>
        );
      })()}

      {verdict && (() => {
        const colors = VERDICT_COLOR[verdict.type];
        const padX = 16;
        const verdictY = H - VERDICT_H - CAPTION_H + 12;
        const verdictW = (verdict.label.length * 9.6) + padX * 2;
        return (
          <g>
            <rect x={PADDING_L} y={verdictY} width={verdictW} height={30} fill={colors.bg} stroke={colors.border} strokeWidth={1.5} rx={15} />
            <text x={PADDING_L + verdictW / 2} y={verdictY + 20} textAnchor="middle" fill={colors.text} fontSize={15} fontWeight={700} fontFamily="Oxanium, system-ui, sans-serif">
              {verdict.label}
            </text>
          </g>
        );
      })()}

      {captionLines.map((line, i) => (
        <text
          key={'cap' + i}
          x={PADDING_L}
          y={captionLines.length === 1 ? H - 22 : H - 39 + i * 21}
          fill="rgba(232, 232, 232, 0.88)"
          fontSize={15}
          fontFamily="Inter, system-ui, sans-serif"
        >
          {line}
        </text>
      ))}
    </svg>
  );
}

export default CandlestickChart;
