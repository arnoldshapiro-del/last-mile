import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const subnav = [
  { to: '/mastery',             label: 'Overview',          end: true },
  { to: '/mastery/principles',  label: '10 Principles',     end: false },
  { to: '/mastery/lessons',     label: 'Core Lessons',      end: false },
  { to: '/mastery/checklists',  label: 'Master Checklists', end: false },
  { to: '/mastery/daily',       label: 'Daily Lessons',     end: false },
];

function TargetIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export default function MasteryLayout() {
  const loc = useLocation();
  return (
    <div className="px-4 md:px-8 py-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, #FFB44A, #D08F2E)',
            boxShadow: '0 8px 24px rgba(255, 180, 74, 0.30)',
          }}
        >
          <TargetIcon className="w-6 h-6 text-black" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="font-display font-bold text-2xl md:text-3xl m-0 leading-tight" style={{ color: '#FFB44A' }}>
            Live Trading Mastery
          </h1>
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted mt-1">
            The Living Teaching System
          </div>
        </div>
      </div>

      {/* Subnav */}
      <nav className="flex gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
        {subnav.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-display font-medium whitespace-nowrap shrink-0 transition-colors border ` +
              (isActive
                ? 'bg-amber/15 text-amber border-amber/40'
                : 'bg-surface text-muted border-border hover:bg-surface2')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </div>
  );
}
