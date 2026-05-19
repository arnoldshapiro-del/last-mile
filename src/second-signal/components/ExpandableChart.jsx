import React, { useEffect, useState, useCallback, useRef } from 'react';
import CandlestickChart from './CandlestickChart.jsx';

// Pass either `candles` (renders CandlestickChart) or `children` (renders arbitrary
// SVG/markup). In both cases clicking opens fullscreen; clicking anywhere in
// fullscreen (except the Replay button) closes.
export default function ExpandableChart({
  candles,
  annotations = [],
  children,
  showVolume = false,
  ariaLabel,
  inlineHeight = 260,
  caption,
  captionTone = 'muted',
  borderClass = '',
  animateInline = false,
}) {
  const isCandle = !!candles;
  const [open, setOpen] = useState(false);
  const [animateTo, setAnimateTo] = useState(animateInline && isCandle ? 0 : undefined);
  const [fsAnimateTo, setFsAnimateTo] = useState(undefined);
  const animTimer = useRef(null);
  const fsAnimTimer = useRef(null);
  const candleCount = isCandle ? candles.length : 0;

  // Inline reveal animation — candles only
  useEffect(() => {
    if (!animateInline || !isCandle) return;
    setAnimateTo(0);
    let i = 0;
    const tick = () => {
      i += 1;
      setAnimateTo(i);
      if (i < candleCount) {
        animTimer.current = setTimeout(tick, 90);
      }
    };
    animTimer.current = setTimeout(tick, 200);
    return () => clearTimeout(animTimer.current);
  }, [animateInline, isCandle, candleCount]);

  const replayInline = useCallback(() => {
    if (!isCandle) return;
    clearTimeout(animTimer.current);
    setAnimateTo(0);
    let i = 0;
    const tick = () => {
      i += 1;
      setAnimateTo(i);
      if (i < candleCount) animTimer.current = setTimeout(tick, 90);
    };
    animTimer.current = setTimeout(tick, 150);
  }, [isCandle, candleCount]);

  // Modal open/close
  const handleOpen = useCallback(() => {
    setOpen(true);
    setFsAnimateTo(undefined);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
    clearTimeout(fsAnimTimer.current);
  }, []);

  // Escape to close + body scroll lock
  useEffect(() => {
    if (!open) return;
    document.body.classList.add('ss-modal-open');
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('ss-modal-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [open, handleClose]);

  // Replay fullscreen
  const replayFs = useCallback(() => {
    if (!isCandle) return;
    clearTimeout(fsAnimTimer.current);
    setFsAnimateTo(0);
    let i = 0;
    const tick = () => {
      i += 1;
      setFsAnimateTo(i);
      if (i < candleCount) fsAnimTimer.current = setTimeout(tick, 120);
    };
    fsAnimTimer.current = setTimeout(tick, 200);
  }, [isCandle, candleCount]);

  const toneClass =
    {
      muted: 'text-text-muted',
      bull: 'text-bull-light',
      bear: 'text-bear-light',
      warn: 'text-warn',
      accent: 'text-accent',
    }[captionTone] || 'text-text-muted';

  return (
    <div className="w-full">
      <div
        className={`relative card !p-2 sm:!p-3 cursor-zoom-in transition-shadow border-default ${borderClass}`}
        role="button"
        tabIndex={0}
        aria-label={ariaLabel || 'Tap to expand chart'}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpen();
          }
        }}
        style={isCandle ? { height: inlineHeight } : undefined}
      >
        {isCandle ? (
          <CandlestickChart
            candles={candles}
            annotations={annotations}
            size="inline"
            height={inlineHeight - 16}
            showVolume={showVolume}
            ariaLabel={ariaLabel}
            animateTo={animateTo}
          />
        ) : (
          <div className="w-full">{children}</div>
        )}
        <div
          className="pointer-events-none absolute top-2 right-2 mono text-[10px] sm:text-xs text-text-muted bg-bg-deep/70 px-2 py-0.5 rounded"
          aria-hidden="true"
        >
          ⤢ Tap to expand
        </div>
        {animateInline && isCandle && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              replayInline();
            }}
            className="absolute bottom-2 right-2 mono text-xs px-2 py-1 rounded bg-bg-elevated text-text-primary border border-default tap-target"
            style={{ minHeight: 32, minWidth: 60 }}
            aria-label="Replay animation"
          >
            ↻ Replay
          </button>
        )}
      </div>
      {caption && (
        <p className={`mt-2 text-sm sm:text-base leading-snug ${toneClass}`}>{caption}</p>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 bg-bg-deep/90 backdrop-blur-sm flex flex-col fullscreen-safe-top cursor-zoom-out"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded chart — tap anywhere to close"
        >
          <div className="flex items-center justify-between px-4 pb-2">
            <span className="mono text-sm text-text-muted">Tap anywhere to close</span>
            <div className="flex items-center gap-2">
              {isCandle && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    replayFs();
                  }}
                  className="mono text-sm px-3 py-2 rounded bg-bg-elevated text-text-primary border border-default tap-target"
                  style={{ minHeight: 40 }}
                  aria-label="Replay candle animation"
                >
                  ↻ Replay
                </button>
              )}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="mono text-sm px-3 py-2 rounded bg-bg-elevated text-text-primary border border-default tap-target"
                style={{ minHeight: 40 }}
                aria-label="Close fullscreen"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="flex-1 px-2 sm:px-6 pb-4 overflow-auto">
            <div
              className="card-elevated w-full h-full !p-2 sm:!p-4"
              style={{ minHeight: 'calc(100vh - 140px)' }}
            >
              <div className="w-full h-full" style={{ minHeight: 'calc(100vh - 180px)' }}>
                {isCandle ? (
                  <CandlestickChart
                    candles={candles}
                    annotations={annotations}
                    size="fullscreen"
                    height={Math.max(420, window.innerHeight - 200)}
                    showVolume={showVolume}
                    ariaLabel={ariaLabel}
                    animateTo={fsAnimateTo}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {children}
                  </div>
                )}
              </div>
              {caption && (
                <p className={`mt-3 ${toneClass} text-base sm:text-lg leading-relaxed`}>{caption}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
