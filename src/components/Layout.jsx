import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const NAV = [
  { to: '/',                       label: 'Home',     icon: HomeIcon },
  { to: '/drill',                  label: 'Drill',    icon: DrillIcon },
  { to: '/lab/double-top',         label: 'Lab',      icon: LabIcon },
  { to: '/protocol/pre-session',   label: 'Protocol', icon: ShieldIcon },
  { to: '/journal',                label: 'Journal',  icon: BookIcon },
  { to: '/progress',               label: 'Progress', icon: ChartIcon }
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
          {NAV.map(item => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-display font-medium transition-colors ` +
                (isActive ? 'bg-green/10 text-green border border-green/20' : 'text-text/80 hover:bg-surface2 border border-transparent')
              }>
              <item.icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-border">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted mb-2">Reminder</div>
          <p className="text-xs text-muted leading-relaxed">
            Trade window: 10:15 — 12:00 ET. Two patterns only. Stop at target.
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className={`flex-1 min-w-0 ${isInSession ? '' : 'pb-20 md:pb-8'}`}>
        <Outlet />
      </main>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur border-t border-border">
        <div className="flex justify-around">
          {NAV.map(item => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-2 px-2 flex-1 text-[10px] font-display font-medium ` +
                (isActive ? 'text-green' : 'text-muted')
              }>
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
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
function DrillIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
}
function LabIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3h4M9 3v6L4 19a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V3" /></svg>);
}
function ShieldIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6l-8-3Z" /></svg>);
}
function BookIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4Z" /><path d="M4 4v14" /></svg>);
}
function ChartIcon({ className }) {
  return (<svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 15v-4" /><path d="M12 15V8" /><path d="M16 15v-2" /></svg>);
}
