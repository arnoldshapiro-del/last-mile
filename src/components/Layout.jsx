import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import AskClaudeHandoff from './AskClaudeHandoff.jsx';

const NAV = [
  { to: '/',                       label: 'Home',     icon: HomeIcon },
  { to: '/drill',                  label: 'Drill',    icon: DrillIcon },
  { to: '/mastery',                label: 'Live Trading Mastery', icon: TargetIcon, accent: 'mastery' },
  { to: '/trend-master-class',     label: 'The Trend Master Class', icon: CompassIcon, accent: 'tmc' },
  { kind: 'group', label: 'Setup Labs' },
  { to: '/lab/bull-flag',          label: 'Bull Flag',     icon: BullFlagIcon },
  { to: '/lab/bear-flag',          label: 'Bear Flag',     icon: BearFlagIcon },
  { to: '/lab/double-top',         label: 'Double Top',    icon: DoubleTopIcon },
  { to: '/lab/double-bottom',      label: 'Double Bottom', icon: DoubleBottomIcon },
  { to: '/lab/breakouts',          label: 'Breakouts',     icon: BreakoutIcon },
  { to: '/lab/opening-range-breakout', label: 'Opening Range', icon: SunriseIcon },
  { to: '/lab/inside-bar',         label: 'Inside Bar',     icon: BoxIcon },
  { to: '/lab/vwap-rejection',     label: 'VWAP Rejection', icon: AnchorIcon },
  { kind: 'group', label: 'Session' },
  { to: '/protocol/pre-session',      label: 'Protocol',        icon: ShieldIcon },
  { to: '/protocol/brooks-discipline', label: 'Brooks Discipline', icon: GradCapIcon },
  { to: '/checkin',                   label: 'Check-In',        icon: BookIcon },
  { to: '/progress',                  label: 'Progress',        icon: ChartIcon }
];

export default function Layout() {
  const loc = useLocation();
  const isInSession = loc.pathname === '/protocol/in-session';
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-bg">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col w-60 shrink-0 border-r border-border bg-surface px-4 py-6 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-10 pl-1">
          <Logo />
          <div>
            <div className="font-display font-bold text-lg leading-none">Last Mile</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted mt-1">Discipline Engine</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          {NAV.map((item, i) => {
            if (item.kind === 'group') {
              return (
                <div key={`g${i}`} className="text-[10px] uppercase tracking-[0.18em] text-muted mt-3 mb-1 pl-3">
                  {item.label}
                </div>
              );
            }
            const accentClasses = item.accent === 'qa'
              ? ({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-display font-medium transition-colors ` +
                  (isActive ? 'bg-blue/15 text-blue border border-blue/30' : 'text-blue/80 hover:bg-blue/10 border border-blue/20')
              : item.accent === 'mastery'
              ? ({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-display font-medium transition-colors ` +
                  (isActive ? 'bg-amber/15 text-amber border border-amber/40 shadow-glowAmber' : 'text-amber/80 hover:bg-amber/10 border border-amber/25')
              : item.accent === 'tmc'
              ? ({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-display font-medium transition-colors ` +
                  (isActive ? 'bg-blue/15 text-blue border border-blue/40' : 'text-blue/80 hover:bg-blue/10 border border-blue/25')
              : ({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-display font-medium transition-colors ` +
                  (isActive ? 'bg-green/10 text-green border border-green/20' : 'text-text/80 hover:bg-surface2 border border-transparent');
            return (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={accentClasses}>
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="mt-auto pt-6 border-t border-border">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted mb-2">Reminder</div>
          <p className="text-xs text-muted leading-relaxed">
            Trade window: 10:15 — 12:00 ET. Two patterns only. Stop at target.
          </p>
          {/* Discreet locked journal link — small, lowercase, intentionally easy to miss. */}
          <NavLink
            to="/journal"
            className="block mt-4 text-[11px] lowercase tracking-wider text-muted hover:text-text transition-colors"
          >
            journal
          </NavLink>
        </div>
      </aside>

      {/* Mobile top nav — full lab list with horizontal scroll */}
      <nav className="md:hidden sticky top-0 z-40 bg-surface/95 backdrop-blur border-b border-border order-first">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-border/50">
          <Logo />
          <div className="font-display font-bold text-base leading-none">Last Mile</div>
        </div>
        <div className="flex overflow-x-auto gap-1 px-2 py-2 -mx-px">
          {NAV.filter(i => i.kind !== 'group').map(item => {
            const mobileClasses = item.accent === 'qa'
              ? ({ isActive }) => `flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-display font-medium whitespace-nowrap shrink-0 ` +
                  (isActive ? 'bg-blue/20 text-blue border border-blue/40' : 'text-blue/80 border border-blue/20')
              : item.accent === 'mastery'
              ? ({ isActive }) => `flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-display font-medium whitespace-nowrap shrink-0 ` +
                  (isActive ? 'bg-amber/20 text-amber border border-amber/40' : 'text-amber/80 border border-amber/25')
              : item.accent === 'tmc'
              ? ({ isActive }) => `flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-display font-medium whitespace-nowrap shrink-0 ` +
                  (isActive ? 'bg-blue/20 text-blue border border-blue/40' : 'text-blue/80 border border-blue/25')
              : ({ isActive }) => `flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-display font-medium whitespace-nowrap shrink-0 ` +
                  (isActive ? 'bg-green/15 text-green border border-green/30' : 'text-text/70 border border-transparent');
            return (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={mobileClasses}>
                <item.icon className="w-3.5 h-3.5" />
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Main */}
      <main className={`flex-1 min-w-0 ${isInSession ? '' : 'pb-8 md:pb-8'}`}>
        <Outlet />
      </main>

      <AskClaudeHandoff />
    </div>
  );
}

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect width="32" height="32" rx="7" fill="#0a0a0a" stroke="#262626" />
      <rect x="6" y="11" width="3" height="13" fill="#00D9A0" />
      <rect x="12" y="7" width="3" height="20" fill="#00D9A0" />
      <rect x="18" y="13" width="3" height="11" fill="#FF3D5A" />
      <rect x="24" y="11" width="3" height="13" fill="#FF3D5A" />
    </svg>
  );
}

function HomeIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12 12 4l9 8" /><path d="M5 10v10h14V10" /></svg>);
}
// Target — Live Trading Mastery (concentric circles, amber accent)
function TargetIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>);
}
// Compass — The Trend Master Class (direction + timing)
function CompassIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="16,8 13,13 8,16 11,11" fill="currentColor" stroke="none" /></svg>);
}
function DrillIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
}
function LabIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3h4M9 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V3" /></svg>);
}
// Bull Flag — pole rising then small flag
function BullFlagIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V8" /><path d="M4 8h6l-1 4h6l-1 3" /><path d="M16 12 20 8" /></svg>);
}
// Bear Flag — pole dropping then small flag
function BearFlagIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v12" /><path d="M4 16h6l-1-4h6l-1-3" /><path d="M16 12l4 4" /></svg>);
}
// Double Top — M shape
function DoubleTopIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 19 7 7l5 8 5-8 4 12" /></svg>);
}
// Double Bottom — W shape
function DoubleBottomIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5 7 17l5-8 5 8 4-12" /></svg>);
}
// Breakouts — arrow piercing a horizontal line
function BreakoutIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h18" /><path d="M12 21V7" /><path d="m7 12 5-5 5 5" /></svg>);
}
// Sunrise — sun rising over horizon (Lucide-style)
function SunriseIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6" /><path d="m4.93 8.93 1.41 1.41" /><path d="m17.66 10.34 1.41-1.41" /><path d="M2 18h20" /><path d="M22 22H2" /><path d="m8 6 4-4 4 4" /><path d="M16 18a4 4 0 0 0-8 0" /></svg>);
}
// Box — inside bar contained within mother bar (Lucide-style)
function BoxIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>);
}
// Anchor — VWAP is anchored to session open (Lucide-style)
function AnchorIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3" /><path d="M12 22V8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /></svg>);
}
function ShieldIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6l-8-3Z" /></svg>);
}
function BookIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4Z" /><path d="M4 4v14" /></svg>);
}
// Brooks Discipline — graduation cap (mirrors Bootcamp Brooks Hub nav icon)
function GradCapIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 10 12 5l10 5-10 5L2 10Z" /><path d="M6 12v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" /><path d="M22 10v6" /></svg>);
}
function ChartIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 15v-4" /><path d="M12 15V8" /><path d="M16 15v-2" /></svg>);
}
// Notebook with bookmark — Q&A Journal
function NotebookIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4Z" /><path d="M4 4v14" /><path d="M10 2v6l2-2 2 2V2" /></svg>);
}
