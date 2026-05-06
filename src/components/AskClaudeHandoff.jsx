import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PATTERNS = {
  '/lab/bear-flag': {
    name: 'Bear Flag',
    context: "I'm studying Bear Flag patterns in Arnie's Last Mile. Bear Flag = strong downward pole, then tight upward-sloping consolidation, then breakdown through the lower trendline. Entry on close below the trendline. Stop above the consolidation high. Target = pole length projected from breakdown point. I trade NQ and RTY on 2-min charts, 10:15-12:00 ET window."
  },
  '/lab/bull-flag': {
    name: 'Bull Flag',
    context: "I'm studying Bull Flag patterns in Arnie's Last Mile. Bull Flag = strong upward pole, then tight downward-sloping consolidation, then breakout through the upper trendline. Entry on close above the trendline. Stop below the consolidation low. Target = pole length projected from breakout point. I trade NQ and RTY on 2-min charts, 10:15-12:00 ET window."
  },
  '/lab/double-top': {
    name: 'Double Top',
    context: "I'm studying Double Top patterns in Arnie's Last Mile. Two failed attempts at the same high, with a neckline drawn at the trough between them. Entry on close below neckline. Stop above the second peak. Target = height of pattern projected down from neckline. I trade NQ and RTY on 2-min charts, 10:15-12:00 ET window."
  },
  '/lab/double-bottom': {
    name: 'Double Bottom',
    context: "I'm studying Double Bottom patterns in Arnie's Last Mile. Two failed attempts at the same low, with a neckline drawn at the peak between them. Entry on close above neckline. Stop below the second trough. Target = height of pattern projected up from neckline. I trade NQ and RTY on 2-min charts, 10:15-12:00 ET window."
  }
};

const ACCENT = '#06b6d4';
const ACCENT_DIM = '#0891b2';

export default function AskClaudeHandoff() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState('');

  const pattern = PATTERNS[loc.pathname];

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  if (!pattern) return null;

  async function copyAndOpen(url) {
    try {
      await navigator.clipboard.writeText(pattern.context);
      setToast('✓ Lesson context copied. Paste in Claude with Ctrl+V.');
    } catch {
      setToast('Couldn’t copy automatically — select & copy manually.');
    }
    window.open(url, 'claude-helper-tab');
  }

  return (
    <>
      {toast && (
        <div
          role="status"
          className="fixed left-1/2 -translate-x-1/2 bottom-24 md:bottom-28 z-[60] px-4 py-2.5 rounded-xl text-sm font-display font-medium animate-fadeIn"
          style={{
            background: '#161616',
            color: '#e8e8e8',
            border: `1px solid ${ACCENT}55`,
            boxShadow: `0 0 24px ${ACCENT}33, 0 8px 24px rgba(0,0,0,0.5)`
          }}
        >
          {toast}
        </div>
      )}

      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        {!open && (
          <button
            type="button"
            aria-label={`Ask Claude about ${pattern.name}`}
            onClick={() => setOpen(true)}
            className="flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
            style={{
              width: 56,
              height: 56,
              borderRadius: '9999px',
              background: ACCENT,
              color: '#0a0a0a',
              boxShadow: `0 0 24px ${ACCENT}55, 0 6px 18px rgba(0,0,0,0.5)`,
              border: `1px solid ${ACCENT_DIM}`
            }}
          >
            <ChatIcon />
          </button>
        )}

        {open && (
          <div
            className="animate-fadeIn"
            style={{
              width: 280,
              height: 160,
              background: '#161616',
              border: `1px solid ${ACCENT}66`,
              borderRadius: 16,
              boxShadow: `0 0 32px ${ACCENT}22, 0 12px 32px rgba(0,0,0,0.6)`,
              padding: 12,
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}
          >
            <div className="flex items-start justify-between">
              <div
                className="font-display font-semibold text-sm leading-tight"
                style={{ color: '#e8e8e8' }}
              >
                Ask Claude — <span style={{ color: ACCENT }}>{pattern.name}</span>
              </div>
              <button
                type="button"
                aria-label="Close Ask Claude panel"
                onClick={() => setOpen(false)}
                className="leading-none transition-colors"
                style={{
                  color: '#888888',
                  fontSize: 18,
                  lineHeight: 1,
                  padding: '0 2px',
                  marginTop: -2
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#e8e8e8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
              >
                ×
              </button>
            </div>

            <button
              type="button"
              onClick={() => copyAndOpen('https://claude.ai')}
              className="w-full font-display font-semibold text-sm rounded-lg transition-all active:scale-[0.98]"
              style={{
                background: ACCENT,
                color: '#0a0a0a',
                padding: '8px 10px',
                border: `1px solid ${ACCENT_DIM}`
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT_DIM)}
              onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT)}
            >
              💬 Ask Claude (continue)
            </button>

            <button
              type="button"
              onClick={() => copyAndOpen('https://claude.ai/new')}
              className="w-full font-display font-semibold text-sm rounded-lg transition-all active:scale-[0.98]"
              style={{
                background: 'transparent',
                color: '#e8e8e8',
                padding: '8px 10px',
                border: `1px solid ${ACCENT}55`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1f1f1f';
                e.currentTarget.style.borderColor = ACCENT;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = `${ACCENT}55`;
              }}
            >
              ✨ Start fresh chat
            </button>

            <div
              className="text-[10px] leading-tight"
              style={{ color: '#888888' }}
            >
              Lesson context will copy automatically. Paste in Claude with Ctrl+V.
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
