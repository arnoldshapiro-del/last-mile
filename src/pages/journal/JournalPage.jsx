import React, { useEffect, useRef, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase.js';
import { journalEntries } from '../../data/journalEntries.js';

const PALETTE = {
  bg: '#0a0a0f',
  panel: '#14141a',
  panelElevated: '#1a1a22',
  border: '#2a2a35',
  borderSubtle: 'rgba(255, 255, 255, 0.04)',
  textPrimary: '#f5f5f7',
  textMuted: '#94a3b8',
  textDim: '#64748b',
  amber: '#f59e0b',
  amberSoft: 'rgba(245, 158, 11, 0.15)',
  loss: 'rgba(239, 68, 68, 0.85)',
  lossSoft: 'rgba(239, 68, 68, 0.08)',
  win: 'rgba(16, 185, 129, 0.85)',
  winSoft: 'rgba(16, 185, 129, 0.08)',
};

const FONT_TECH = '"Space Mono", "JetBrains Mono", "Courier New", monospace';
const FONT_DISPLAY = '"Oxanium", "Space Grotesk", system-ui, sans-serif';
const FONT_PROSE = '"Oxanium", system-ui, sans-serif';

export default function JournalPage() {
  const userEmail = (auth.currentUser && auth.currentUser.email) || '';
  const entries = journalEntries;
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (obsEntries) => {
        const visible = obsEntries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [entries]);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  const handleTocClick = (id) => {
    const el = sectionRefs.current.get(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={pageStyle}>
      <style>{`
        @keyframes journalFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .journal-section { animation: journalFadeIn 0.6s ease-out both; }
        .journal-section:nth-child(1) { animation-delay: 0.05s; }
        .journal-section:nth-child(2) { animation-delay: 0.10s; }
        .journal-section:nth-child(3) { animation-delay: 0.15s; }
        .journal-section:nth-child(4) { animation-delay: 0.20s; }
        .journal-section:nth-child(5) { animation-delay: 0.25s; }
        .journal-section:nth-child(n+6) { animation-delay: 0.30s; }
      `}</style>

      <div style={topBarStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: PALETTE.amber, boxShadow: `0 0 12px ${PALETTE.amber}`,
          }} />
          <span style={{
            fontFamily: FONT_TECH, fontSize: 11, color: PALETTE.textMuted,
            letterSpacing: '0.05em',
          }}>
            signed in as {userEmail || 'unknown'}
          </span>
        </div>
        <button onClick={handleSignOut} style={signOutButtonStyle}>
          Sign Out
        </button>
      </div>

      <div style={containerStyle}>
        <main style={mainColumnStyle}>
          <header style={{ marginBottom: '3rem', paddingTop: '1rem' }}>
            <div style={{
              display: 'inline-block',
              padding: '4px 12px',
              background: PALETTE.amberSoft,
              border: `1px solid ${PALETTE.amber}`,
              borderRadius: 4,
              fontFamily: FONT_TECH,
              fontSize: 10,
              letterSpacing: '0.15em',
              color: PALETTE.amber,
              marginBottom: '1.5rem',
            }}>
              PRIVATE / LOCKED
            </div>
            <h1 style={{
              margin: 0,
              fontFamily: FONT_DISPLAY,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              color: PALETTE.textPrimary,
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              marginBottom: '0.75rem',
            }}>
              Personal Trading Journal & Reflection
            </h1>
            <p style={{
              margin: 0,
              fontFamily: FONT_PROSE,
              fontSize: 16,
              color: PALETTE.textMuted,
              lineHeight: 1.6,
              maxWidth: 640,
            }}>
              End-of-day reflections. The work behind the work — what I did, what I learned,
              and what I carry forward. Read with kindness.
            </p>
          </header>

          {entries.length === 0 && (
            <div style={emptyStateStyle}>
              <p style={{
                fontFamily: FONT_TECH,
                fontSize: 13,
                color: PALETTE.textDim,
                margin: 0,
                lineHeight: 1.6,
              }}>
                No entries yet. The first reflection will appear here when written.
              </p>
            </div>
          )}

          {entries.map((entry) => (
            <article key={entry.date} style={{ marginBottom: '4rem' }}>
              <EntryHeader entry={entry} />
              {entry.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  ref={(el) => {
                    if (el) sectionRefs.current.set(section.id, el);
                    else sectionRefs.current.delete(section.id);
                  }}
                  className="journal-section"
                  style={sectionStyle}
                >
                  <h2 style={sectionHeadingStyle}>{section.heading}</h2>
                  <SectionBody body={section.body} />
                </section>
              ))}
            </article>
          ))}

          <footer style={footerStyle}>
            <span style={{ fontFamily: FONT_TECH, fontSize: 10, color: PALETTE.textDim, letterSpacing: '0.1em' }}>
              END OF RECORD
            </span>
          </footer>
        </main>

        {entries.length > 0 && (
          <aside style={asideStyle} className="journal-toc">
            <div style={{
              fontFamily: FONT_TECH,
              fontSize: 10,
              letterSpacing: '0.18em',
              color: PALETTE.textDim,
              marginBottom: 12,
              paddingBottom: 8,
              borderBottom: `1px solid ${PALETTE.border}`,
            }}>
              ON THIS PAGE
            </div>
            {entries.map((entry) => (
              <div key={entry.date} style={{ marginBottom: 16 }}>
                <div style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 11,
                  fontWeight: 700,
                  color: PALETTE.amber,
                  letterSpacing: '0.04em',
                  marginBottom: 6,
                }}>
                  {entry.displayDate}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {entry.sections.map((s) => {
                    const isActive = activeSection === s.id;
                    return (
                      <li key={s.id} style={{ marginBottom: 4 }}>
                        <button
                          onClick={() => handleTocClick(s.id)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            padding: '4px 8px',
                            margin: 0,
                            width: '100%',
                            textAlign: 'left',
                            cursor: 'pointer',
                            fontFamily: FONT_TECH,
                            fontSize: 11,
                            lineHeight: 1.45,
                            color: isActive ? PALETTE.textPrimary : PALETTE.textDim,
                            borderLeft: isActive
                              ? `2px solid ${PALETTE.amber}`
                              : `2px solid transparent`,
                            transition: 'color 0.15s, border-color 0.15s',
                          }}
                        >
                          {s.heading}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </aside>
        )}
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .journal-toc { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function EntryHeader({ entry }) {
  return (
    <div style={{
      marginBottom: '2.5rem',
      paddingBottom: '1.25rem',
      borderBottom: `1px solid ${PALETTE.border}`,
    }}>
      <div style={{
        fontFamily: FONT_TECH,
        fontSize: 10,
        letterSpacing: '0.2em',
        color: PALETTE.amber,
        marginBottom: '0.6rem',
      }}>
        ENTRY · {entry.date}
      </div>
      <h2 style={{
        margin: 0,
        fontFamily: FONT_DISPLAY,
        fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
        fontWeight: 700,
        color: PALETTE.textPrimary,
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
        marginBottom: '0.4rem',
      }}>
        {entry.title}
      </h2>
      {entry.subtitle && (
        <p style={{
          margin: 0,
          fontFamily: FONT_PROSE,
          fontSize: 16,
          color: PALETTE.textMuted,
          fontStyle: 'italic',
        }}>
          {entry.subtitle}
        </p>
      )}
    </div>
  );
}

function SectionBody({ body }) {
  const blocks = parseBlocks(body);
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.kind) {
          case 'paragraph':
            return <p key={i} style={paragraphStyle} dangerouslySetInnerHTML={{ __html: renderInline(b.text) }} />;
          case 'subheading':
            return <h3 key={i} style={subheadingStyle}>{b.text}</h3>;
          case 'bullets':
            return (
              <ul key={i} style={bulletListStyle}>
                {b.items.map((item, j) => (
                  <li key={j} style={bulletItemStyle} dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
                ))}
              </ul>
            );
          case 'callout':
            return (
              <div key={i} style={calloutStyle(b.tone)}>
                {b.label && <div style={calloutLabelStyle(b.tone)}>{b.label}</div>}
                <div style={calloutBodyStyle} dangerouslySetInnerHTML={{ __html: renderInline(b.text) }} />
              </div>
            );
          case 'blockquote':
            return (
              <blockquote key={i} style={blockquoteStyle}>
                <span dangerouslySetInnerHTML={{ __html: renderInline(b.text) }} />
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

// --- Markdown-lite parsing ---------------------------------------------------

const LOSS_KEYWORDS = ['MISTAKE', "DON'T", 'DONT', 'NEVER', 'LOSS', 'WARNING'];
const WIN_KEYWORDS = ['WIN', 'PROGRESS', 'SUCCESS'];
const AMBER_KEYWORDS = [
  'LAYER',
  'RULE',
  'STOP',
  'POSITION',
  'TRAILING',
  'PRE-FLIGHT',
  'WICKS',
  'CRITICAL',
  'THE CRITICAL SELF-CHECK',
];

function classifyTone(label) {
  const upper = label.toUpperCase();
  if (LOSS_KEYWORDS.some((k) => upper.startsWith(k))) return 'loss';
  if (WIN_KEYWORDS.some((k) => upper.startsWith(k))) return 'win';
  if (AMBER_KEYWORDS.some((k) => upper.startsWith(k) || upper.includes(k))) return 'amber';
  return 'neutral';
}

function parseBlocks(body) {
  const lines = body.split(/\r?\n/);
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    if (trimmed.startsWith('### ')) {
      blocks.push({ kind: 'subheading', text: trimmed.slice(4) });
      i++;
      continue;
    }

    if (trimmed.startsWith('> ')) {
      let buf = trimmed.slice(2);
      i++;
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        buf += '\n' + lines[i].trim().slice(2);
        i++;
      }
      blocks.push({ kind: 'blockquote', text: buf });
      continue;
    }

    if (trimmed.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ kind: 'bullets', items });
      continue;
    }

    const calloutMatch = /^([A-Z][A-Z0-9 \-'/]{1,80})(?:\s+—\s+|:\s+|\s+-\s+)(.+)$/u.exec(trimmed);
    if (calloutMatch && calloutMatch[1].length >= 3 && /[A-Z]/.test(calloutMatch[1])) {
      const labelOnly = calloutMatch[1].replace(/[^A-Z]/g, '');
      const totalLetters = calloutMatch[1].replace(/[^A-Za-z]/g, '');
      if (totalLetters.length > 0 && labelOnly.length / totalLetters.length >= 0.85) {
        let text = calloutMatch[2];
        i++;
        while (i < lines.length) {
          const next = lines[i];
          if (!next.trim()) break;
          if (next.trim().startsWith('- ')) break;
          if (next.trim().startsWith('### ')) break;
          if (next.trim().startsWith('> ')) break;
          if (/^[A-Z][A-Z0-9 \-'/]{2,80}(?:\s+—\s+|:\s+|\s+-\s+)/u.test(next.trim())) break;
          text += ' ' + next.trim();
          i++;
        }
        blocks.push({
          kind: 'callout',
          label: calloutMatch[1].trim(),
          text,
          tone: classifyTone(calloutMatch[1]),
        });
        continue;
      }
    }

    let para = trimmed;
    i++;
    while (i < lines.length) {
      const next = lines[i];
      const t = next.trim();
      if (!t) break;
      if (t.startsWith('- ')) break;
      if (t.startsWith('### ')) break;
      if (t.startsWith('> ')) break;
      if (/^[A-Z][A-Z0-9 \-'/]{2,80}(?:\s+—\s+|:\s+|\s+-\s+)/u.test(t)) break;
      para += ' ' + t;
      i++;
    }
    blocks.push({ kind: 'paragraph', text: para });
  }

  return blocks;
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderInline(text) {
  const escaped = escapeHtml(text);
  return escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

// --- Styles ------------------------------------------------------------------

const pageStyle = {
  minHeight: '100vh',
  background: PALETTE.bg,
  color: PALETTE.textPrimary,
  paddingBottom: '4rem',
};

const topBarStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.6rem 1.25rem',
  background: 'rgba(10, 10, 15, 0.85)',
  backdropFilter: 'blur(12px)',
  borderBottom: `1px solid ${PALETTE.border}`,
};

const signOutButtonStyle = {
  background: 'transparent',
  color: PALETTE.textMuted,
  border: `1px solid ${PALETTE.border}`,
  padding: '4px 12px',
  borderRadius: 4,
  fontFamily: FONT_TECH,
  fontSize: 10,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  cursor: 'pointer',
};

const containerStyle = {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '2.5rem 1.5rem 0',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 800px) 240px',
  gap: '3rem',
  justifyContent: 'center',
};

const mainColumnStyle = {
  maxWidth: 800,
  minWidth: 0,
};

const asideStyle = {
  position: 'sticky',
  top: '5rem',
  alignSelf: 'start',
  padding: '1.25rem 0.75rem',
  maxHeight: 'calc(100vh - 6rem)',
  overflowY: 'auto',
};

const emptyStateStyle = {
  padding: '3rem 1.5rem',
  border: `1px dashed ${PALETTE.border}`,
  borderRadius: 8,
  textAlign: 'center',
};

const sectionStyle = {
  marginBottom: '2.5rem',
  scrollMarginTop: '5rem',
};

const sectionHeadingStyle = {
  margin: 0,
  marginBottom: '1.1rem',
  fontFamily: FONT_DISPLAY,
  fontSize: 'clamp(1.2rem, 2.4vw, 1.5rem)',
  fontWeight: 700,
  color: PALETTE.textPrimary,
  letterSpacing: '0.005em',
  paddingBottom: '0.5rem',
  borderBottom: `1px solid ${PALETTE.borderSubtle}`,
};

const paragraphStyle = {
  fontFamily: FONT_PROSE,
  fontSize: 16,
  lineHeight: 1.75,
  color: '#cbd5e1',
  margin: '0 0 1.1rem 0',
};

const subheadingStyle = {
  fontFamily: FONT_DISPLAY,
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: PALETTE.amber,
  margin: '1.5rem 0 0.75rem 0',
};

const bulletListStyle = {
  fontFamily: FONT_TECH,
  fontSize: 13,
  lineHeight: 1.8,
  color: '#cbd5e1',
  paddingLeft: '1.25rem',
  margin: '0 0 1.25rem 0',
};

const bulletItemStyle = {
  marginBottom: '0.35rem',
};

const blockquoteStyle = {
  margin: '1.25rem 0',
  padding: '0.85rem 1.1rem',
  borderLeft: `3px solid ${PALETTE.amber}`,
  background: PALETTE.amberSoft,
  fontFamily: FONT_PROSE,
  fontSize: 15.5,
  lineHeight: 1.7,
  color: '#e2e8f0',
  fontStyle: 'italic',
};

function calloutStyle(tone) {
  let borderColor = PALETTE.border;
  let background = PALETTE.panel;
  if (tone === 'loss') {
    borderColor = 'rgba(239, 68, 68, 0.35)';
    background = PALETTE.lossSoft;
  } else if (tone === 'win') {
    borderColor = 'rgba(16, 185, 129, 0.35)';
    background = PALETTE.winSoft;
  } else if (tone === 'amber') {
    borderColor = 'rgba(245, 158, 11, 0.30)';
    background = 'rgba(245, 158, 11, 0.05)';
  }
  return {
    padding: '0.85rem 1rem',
    marginBottom: '0.9rem',
    background,
    border: `1px solid ${borderColor}`,
    borderLeftWidth: 3,
    borderRadius: 6,
  };
}

function calloutLabelStyle(tone) {
  let color = PALETTE.amber;
  if (tone === 'loss') color = PALETTE.loss;
  else if (tone === 'win') color = PALETTE.win;
  else if (tone === 'neutral') color = PALETTE.textMuted;
  return {
    fontFamily: FONT_TECH,
    fontSize: 10,
    letterSpacing: '0.14em',
    color,
    marginBottom: 6,
  };
}

const calloutBodyStyle = {
  fontFamily: FONT_TECH,
  fontSize: 13,
  lineHeight: 1.7,
  color: '#cbd5e1',
};

const footerStyle = {
  marginTop: '3rem',
  paddingTop: '2rem',
  borderTop: `1px solid ${PALETTE.border}`,
  textAlign: 'center',
};
