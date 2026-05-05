import React, { useMemo } from 'react';

/**
 * Generic candlestick + volume renderer.
 * candles: [{ o, h, l, c, vol? }]
 * annotations: [{ kind: 'line'|'box'|'label'|'arrow', ... }]
 */
export default function CandlestickChart({
  candles,
  annotations = [],
  width = 480,
  height = 280,
  showVolume = true,
  padding = { top: 14, right: 16, bottom: 14, left: 16 },
  className = ''
}) {
  const chart = useMemo(() => {
    const volH = showVolume ? 60 : 0;
    const innerW = width - padding.left - padding.right;
    const innerH = height - padding.top - padding.bottom - volH;

    const allHigh = Math.max(...candles.map(c => c.h));
    const allLow = Math.min(...candles.map(c => c.l));
    const range = allHigh - allLow || 1;
    const pad = range * 0.08;
    const yMax = allHigh + pad;
    const yMin = allLow - pad;
    const yRange = yMax - yMin;

    const n = candles.length;
    const slot = innerW / n;
    const bodyW = Math.max(3, Math.min(slot * 0.7, 18));

    const xFor = (i) => padding.left + i * slot + slot / 2;
    const yFor = (price) => padding.top + ((yMax - price) / yRange) * innerH;

    const maxVol = showVolume ? Math.max(1, ...candles.map(c => c.vol || 0)) : 1;
    const volTop = padding.top + innerH + 4;
    const volBottom = volTop + volH - 4;
    const yVol = (v) => volBottom - (v / maxVol) * (volH - 4);

    return { innerW, innerH, slot, bodyW, xFor, yFor, yMax, yMin, yRange, n, volTop, volBottom, yVol, maxVol };
  }, [candles, width, height, padding, showVolume]);

  const renderAnnotations = () => annotations.map((a, idx) => {
    if (a.kind === 'hline') {
      return <line key={idx}
        x1={padding.left} x2={width - padding.right}
        y1={chart.yFor(a.price)} y2={chart.yFor(a.price)}
        stroke={a.color || '#FFB44A'} strokeDasharray="4 4" strokeWidth={1.5} opacity={a.opacity || 0.8} />;
    }
    if (a.kind === 'trendline') {
      return <line key={idx}
        x1={chart.xFor(a.fromIndex)} x2={chart.xFor(a.toIndex)}
        y1={chart.yFor(a.fromPrice)} y2={chart.yFor(a.toPrice)}
        stroke={a.color || '#4A9EFF'} strokeWidth={1.5} strokeDasharray={a.dashed ? '5 4' : ''} opacity={a.opacity || 0.85} />;
    }
    if (a.kind === 'box') {
      const x1 = chart.xFor(a.fromIndex) - chart.slot / 2;
      const x2 = chart.xFor(a.toIndex) + chart.slot / 2;
      const y1 = chart.yFor(a.high);
      const y2 = chart.yFor(a.low);
      return <rect key={idx}
        x={x1} y={y1} width={x2 - x1} height={y2 - y1}
        fill={a.fill || 'rgba(74,158,255,0.08)'} stroke={a.color || '#4A9EFF'} strokeWidth={1.2}
        strokeDasharray={a.dashed ? '4 4' : ''} rx={3} />;
    }
    if (a.kind === 'label') {
      return <text key={idx}
        x={a.x ?? chart.xFor(a.atIndex || 0)}
        y={a.y ?? chart.yFor(a.price || chart.yMax)}
        fill={a.color || '#888'}
        fontSize={a.size || 10}
        fontFamily="'Space Mono', ui-monospace, monospace"
        textAnchor={a.anchor || 'start'}>
        {a.text}
      </text>;
    }
    if (a.kind === 'arrow') {
      const x1 = chart.xFor(a.fromIndex);
      const y1 = chart.yFor(a.fromPrice);
      const x2 = chart.xFor(a.toIndex);
      const y2 = chart.yFor(a.toPrice);
      return (
        <g key={idx} stroke={a.color || '#FFB44A'} strokeWidth={1.5} fill={a.color || '#FFB44A'}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} />
          <polygon points={`${x2},${y2} ${x2 - 6},${y2 - 6} ${x2 - 6},${y2 + 6}`} transform={`rotate(${Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI},${x2},${y2})`} />
        </g>
      );
    }
    return null;
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`block w-full h-auto rounded-lg ${className}`}
      style={{ background: '#0a0a0a' }}
      aria-label="Candlestick chart"
    >
      {/* Grid */}
      {[0.25, 0.5, 0.75].map(t => (
        <line key={t}
          x1={padding.left} x2={width - padding.right}
          y1={padding.top + chart.innerH * t} y2={padding.top + chart.innerH * t}
          stroke="#262626" strokeWidth={1} />
      ))}
      {/* Candles */}
      {candles.map((c, i) => {
        const x = chart.xFor(i);
        const isUp = c.c >= c.o;
        const color = isUp ? '#00D9A0' : '#FF3D5A';
        const yOpen = chart.yFor(c.o);
        const yClose = chart.yFor(c.c);
        const yHigh = chart.yFor(c.h);
        const yLow = chart.yFor(c.l);
        const top = Math.min(yOpen, yClose);
        const bodyH = Math.max(1, Math.abs(yClose - yOpen));
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={yHigh} y2={yLow} stroke={color} strokeWidth={1.2} />
            <rect x={x - chart.bodyW / 2} y={top} width={chart.bodyW} height={bodyH}
              fill={isUp ? color : color} opacity={isUp ? 1 : 1} />
          </g>
        );
      })}
      {/* Volume */}
      {showVolume && candles.map((c, i) => {
        if (c.vol == null) return null;
        const x = chart.xFor(i);
        const isUp = c.c >= c.o;
        const color = isUp ? '#00D9A0' : '#FF3D5A';
        const yT = chart.yVol(c.vol);
        return (
          <rect key={`v${i}`}
            x={x - chart.bodyW / 2} y={yT}
            width={chart.bodyW} height={chart.volBottom - yT}
            fill={color} opacity={0.4} />
        );
      })}
      {/* Annotations on top */}
      {renderAnnotations()}
    </svg>
  );
}
