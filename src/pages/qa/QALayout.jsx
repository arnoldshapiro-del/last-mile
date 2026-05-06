import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const NAV = [
  { to: '/qa', label: "Today", end: true },
  { to: '/qa/browse', label: 'Browse All' },
  { to: '/qa/review', label: 'Review' },
  { to: '/qa/quiz', label: 'Quiz' },
  { to: '/qa/add', label: 'Add Entry' },
  { to: '/qa/progress', label: 'Progress' }
];

export default function QALayout() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      {/* Persistent banner — visually distinct from Last Mile's protocol/lab sections */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
        color: '#dbeafe',
        padding: '12px 16px',
        borderBottom: '1px solid #1e40af',
        textAlign: 'center',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 13,
        fontWeight: 500
      }}>
        📓 My Real-Time Trading Questions — Separate from Last Mile's Curriculum
      </div>

      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        background: 'rgba(15, 18, 24, 0.95)',
        borderBottom: '1px solid #1e293b',
        backdropFilter: 'blur(8px)',
        padding: '8px 16px'
      }}>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', maxWidth: 1400, margin: '0 auto' }}>
          {NAV.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => 'qa-tab' + (isActive ? ' qa-tab-active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <main style={{ maxWidth: 1400, margin: '0 auto', padding: '20px 16px 36px' }}>
        <Outlet />
      </main>

      <footer style={{
        padding: '16px',
        borderTop: '1px solid #1e293b',
        color: '#64748b',
        fontSize: 11,
        textAlign: 'center'
      }}>
        These are my own questions answered by Claude during live trading. Last Mile's curriculum is in the other sections.
      </footer>

      <style>{`
        .qa-tab {
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #94a3b8;
          text-decoration: none;
          font-family: 'Oxanium', system-ui, sans-serif;
          transition: background 0.15s, color 0.15s;
        }
        .qa-tab:hover { background: rgba(74, 158, 255, 0.10); color: #dbeafe; }
        .qa-tab-active {
          background: #4A9EFF;
          color: #0a0a0a !important;
        }
        .qa-card {
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 12px;
          padding: 16px;
          color: #e2e8f0;
        }
        .qa-tag {
          display: inline-block;
          padding: 2px 8px;
          background: rgba(74, 158, 255, 0.12);
          color: #93c5fd;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 600;
          margin: 2px;
        }
        .qa-input, .qa-textarea {
          width: 100%;
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 8px;
          padding: 8px 12px;
          color: #e2e8f0;
          font-family: inherit;
          font-size: 14px;
        }
        .qa-textarea { font-family: ui-monospace, monospace; min-height: 200px; }
        .qa-input:focus, .qa-textarea:focus {
          outline: 2px solid #4A9EFF;
          outline-offset: 2px;
          border-color: #4A9EFF;
        }
        .qa-btn {
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          border: 1px solid #4A9EFF;
          background: #4A9EFF;
          color: #0a0a0a;
          font-family: 'Oxanium', system-ui, sans-serif;
          transition: filter 0.15s;
        }
        .qa-btn:hover { filter: brightness(1.1); }
        .qa-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .qa-btn-ghost {
          background: transparent;
          color: #93c5fd;
          border: 1px solid #1e293b;
        }
        .qa-btn-ghost:hover { background: rgba(74, 158, 255, 0.10); }
      `}</style>
    </div>
  );
}
