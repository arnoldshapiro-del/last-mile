import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

// All routes are prefixed with /second-signal because this app is embedded
// under the host's /second-signal/* route in Last Mile.
const BASE = '/second-signal';
const HOST_HOME = '/';
const HOST_LABEL = 'Last Mile';

const NAV_ITEMS = [
  { to: `${BASE}`,           label: 'Start Here',           short: 'Start',    icon: '◉', end: true },
  { to: `${BASE}/defended`,  label: 'Defended vs Failed',   short: 'Defense',  icon: '⚖' },
  { to: `${BASE}/patterns`,  label: 'The Four Patterns',    short: 'Patterns', icon: '▦' },
  { to: `${BASE}/practice`,  label: 'Practice Mode',        short: 'Practice', icon: '◎' },
  { to: `${BASE}/advanced`,  label: 'Level 3 — Advanced',   short: 'Level 3',  icon: '⚝' },
  { to: `${BASE}/notes`,     label: 'My Notes',             short: 'Notes',    icon: '✎' },
];

export default function Nav({ children }) {
  const loc = useLocation();
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [loc.pathname]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-bg-deep text-text-primary">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-default p-6 sticky top-0 h-screen overflow-y-auto">
        {/* Back to host */}
        <Link
          to={HOST_HOME}
          className="mono text-xs text-text-muted no-underline hover:text-accent mb-4 inline-flex items-center gap-1"
        >
          ← Back to {HOST_LABEL}
        </Link>
        <NavLink to={BASE} end className="block mb-8 no-underline">
          <h1 className="mono font-bold text-xl leading-tight text-text-primary">
            Arnie's<br/>Second Signal
          </h1>
          <p className="mt-2 text-xs text-text-muted leading-snug">
            H2 / L2 — the second-try method.
          </p>
        </NavLink>
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) =>
                `mono text-sm px-3 py-2.5 rounded transition-colors no-underline flex items-center gap-3 tap-target ${
                  isActive
                    ? 'bg-bg-elevated text-accent'
                    : 'text-text-primary hover:bg-bg-card'
                }`
              }
            >
              <span className="text-base w-5 text-center" aria-hidden="true">{it.icon}</span>
              <span>{it.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto pt-6 text-xs text-text-dim">
          <p className="mono">Built for one trader. v1.0</p>
        </div>
      </aside>

      {/* Mobile top header — compact branding + back link */}
      <header className="md:hidden sticky top-0 z-30 bg-bg-deep/95 backdrop-blur border-b border-default px-4 py-3 flex items-center justify-between">
        <Link
          to={HOST_HOME}
          className="mono text-xs text-text-muted no-underline hover:text-accent inline-flex items-center gap-1"
          aria-label={`Back to ${HOST_LABEL}`}
        >
          ← {HOST_LABEL}
        </Link>
        <NavLink to={BASE} end className="no-underline flex items-center gap-2">
          <span className="mono font-bold text-base text-accent">H2</span>
          <span className="mono font-bold text-base text-text-primary">Second Signal</span>
        </NavLink>
      </header>

      {/* Page content */}
      <main className="flex-1 min-w-0 pb-24 md:pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-10">
          {children}
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-bg-card border-t border-default bottom-nav-safe">
        <ul className="grid grid-cols-6">
          {NAV_ITEMS.map((it) => (
            <li key={it.to}>
              <NavLink
                to={it.to}
                end={it.end}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center px-1 py-2 tap-target no-underline gap-0.5 ${
                    isActive ? 'text-accent' : 'text-text-muted'
                  }`
                }
                aria-label={it.label}
              >
                <span className="text-lg leading-none" aria-hidden="true">{it.icon}</span>
                <span className="mono text-[10px] leading-tight text-center">{it.short}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
