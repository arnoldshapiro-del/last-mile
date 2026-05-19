import React from 'react';

// W pattern (double bottom): two bull bars labeled H1 (grayed) and H2 (highlighted)
export function WPatternSVG() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="W pattern with H1 grayed and H2 highlighted">
      <defs>
        <pattern id="grid-w" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="320" height="200" fill="#0F172A" />
      <rect width="320" height="200" fill="url(#grid-w)" />

      {/* Support line */}
      <line x1="20" y1="150" x2="300" y2="150" stroke="#16A34A" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.85" />
      <text x="304" y="153" fontSize="11" fill="#16A34A" fontFamily="'Space Mono', monospace">Support</text>

      {/* Bear bars dropping down */}
      <g fill="#EF4444" stroke="#DC2626">
        <rect x="30"  y="35"  width="14" height="38" />
        <rect x="55"  y="55"  width="14" height="40" />
        <rect x="80"  y="78"  width="14" height="42" />
        <rect x="105" y="105" width="14" height="38" />
      </g>

      {/* H1 bar (grayed out) */}
      <g opacity="0.35">
        <line x1="137" y1="148" x2="137" y2="105" stroke="#64748B" strokeWidth="1.5" />
        <rect x="130" y="105" width="14" height="40" fill="#64748B" stroke="#475569" />
      </g>
      <text x="137" y="98" fontSize="13" fontFamily="'Space Mono', monospace" fontWeight="700" fill="#94A3B8" textAnchor="middle">H1</text>

      {/* Pullback bars */}
      <g fill="#EF4444" stroke="#DC2626" opacity="0.7">
        <rect x="155" y="115" width="14" height="22" />
        <rect x="180" y="125" width="14" height="20" />
      </g>

      {/* H2 bar (highlighted) */}
      <g>
        <line x1="212" y1="148" x2="212" y2="80" stroke="#16A34A" strokeWidth="1.8" />
        <rect x="205" y="80" width="14" height="60" fill="#22C55E" stroke="#16A34A" strokeWidth="1.5" />
        <rect x="201" y="76" width="22" height="68" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 2" rx="2" />
      </g>
      <text x="212" y="70" fontSize="14" fontFamily="'Space Mono', monospace" fontWeight="700" fill="#22C55E" textAnchor="middle">H2 ← take this</text>

      {/* Rally bars */}
      <g fill="#22C55E" stroke="#16A34A">
        <rect x="230" y="60" width="14" height="32" />
        <rect x="255" y="40" width="14" height="40" />
        <rect x="280" y="25" width="14" height="42" />
      </g>
    </svg>
  );
}

// M pattern (double top): two bear bars labeled L1 (grayed) and L2 (highlighted)
export function MPatternSVG() {
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label="M pattern with L1 grayed and L2 highlighted">
      <defs>
        <pattern id="grid-m" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="320" height="200" fill="#0F172A" />
      <rect width="320" height="200" fill="url(#grid-m)" />

      {/* Resistance line */}
      <line x1="20" y1="50" x2="300" y2="50" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.85" />
      <text x="304" y="53" fontSize="11" fill="#DC2626" fontFamily="'Space Mono', monospace">Resistance</text>

      {/* Bull bars rising up */}
      <g fill="#22C55E" stroke="#16A34A">
        <rect x="30"  y="125" width="14" height="38" />
        <rect x="55"  y="105" width="14" height="40" />
        <rect x="80"  y="78"  width="14" height="42" />
        <rect x="105" y="57"  width="14" height="38" />
      </g>

      {/* L1 bar (grayed out) */}
      <g opacity="0.35">
        <line x1="137" y1="55" x2="137" y2="95" stroke="#64748B" strokeWidth="1.5" />
        <rect x="130" y="55" width="14" height="40" fill="#64748B" stroke="#475569" />
      </g>
      <text x="137" y="115" fontSize="13" fontFamily="'Space Mono', monospace" fontWeight="700" fill="#94A3B8" textAnchor="middle">L1</text>

      {/* Pullback bars */}
      <g fill="#22C55E" stroke="#16A34A" opacity="0.7">
        <rect x="155" y="63" width="14" height="22" />
        <rect x="180" y="55" width="14" height="20" />
      </g>

      {/* L2 bar (highlighted) */}
      <g>
        <line x1="212" y1="52" x2="212" y2="120" stroke="#DC2626" strokeWidth="1.8" />
        <rect x="205" y="60" width="14" height="60" fill="#EF4444" stroke="#DC2626" strokeWidth="1.5" />
        <rect x="201" y="56" width="22" height="68" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 2" rx="2" />
      </g>
      <text x="212" y="138" fontSize="14" fontFamily="'Space Mono', monospace" fontWeight="700" fill="#EF4444" textAnchor="middle">L2 ← take this</text>

      {/* Drop bars */}
      <g fill="#EF4444" stroke="#DC2626">
        <rect x="230" y="108" width="14" height="32" />
        <rect x="255" y="120" width="14" height="40" />
        <rect x="280" y="133" width="14" height="42" />
      </g>
    </svg>
  );
}

// Thumbnail used on Four-Patterns index cards
export function PatternThumb({ type }) {
  if (type === 'double-bottom') {
    return (
      <svg viewBox="0 0 160 80" role="img" aria-label="Double bottom thumbnail">
        <rect width="160" height="80" fill="#0F172A" />
        <line x1="10" y1="62" x2="150" y2="62" stroke="#16A34A" strokeDasharray="4 3" strokeWidth="1" opacity="0.7" />
        <polyline
          points="10,15 25,30 40,50 55,60 70,42 85,55 100,30 120,12 140,4"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.6"
        />
        <circle cx="55" cy="60" r="3" fill="#94A3B8" />
        <circle cx="85" cy="55" r="3.5" fill="#22C55E" />
        <text x="85" y="50" fontSize="9" fill="#22C55E" fontFamily="'Space Mono', monospace" textAnchor="middle" fontWeight="700">H2</text>
      </svg>
    );
  }
  if (type === 'double-top') {
    return (
      <svg viewBox="0 0 160 80" role="img" aria-label="Double top thumbnail">
        <rect width="160" height="80" fill="#0F172A" />
        <line x1="10" y1="18" x2="150" y2="18" stroke="#DC2626" strokeDasharray="4 3" strokeWidth="1" opacity="0.7" />
        <polyline
          points="10,65 25,50 40,30 55,20 70,38 85,25 100,50 120,68 140,76"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.6"
        />
        <circle cx="55" cy="20" r="3" fill="#94A3B8" />
        <circle cx="85" cy="25" r="3.5" fill="#EF4444" />
        <text x="85" y="38" fontSize="9" fill="#EF4444" fontFamily="'Space Mono', monospace" textAnchor="middle" fontWeight="700">L2</text>
      </svg>
    );
  }
  if (type === 'bull-flag') {
    return (
      <svg viewBox="0 0 160 80" role="img" aria-label="Bull flag thumbnail">
        <rect width="160" height="80" fill="#0F172A" />
        <polyline
          points="10,70 20,60 30,50 40,38 50,28 60,18 75,28 85,34 95,30 110,18 125,8 145,2"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.6"
        />
        <circle cx="75" cy="28" r="3" fill="#94A3B8" />
        <circle cx="95" cy="30" r="3.5" fill="#22C55E" />
        <text x="95" y="46" fontSize="9" fill="#22C55E" fontFamily="'Space Mono', monospace" textAnchor="middle" fontWeight="700">H2</text>
      </svg>
    );
  }
  if (type === 'bear-flag') {
    return (
      <svg viewBox="0 0 160 80" role="img" aria-label="Bear flag thumbnail">
        <rect width="160" height="80" fill="#0F172A" />
        <polyline
          points="10,10 20,20 30,30 40,42 50,52 60,62 75,52 85,46 95,50 110,62 125,72 145,78"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.6"
        />
        <circle cx="75" cy="52" r="3" fill="#94A3B8" />
        <circle cx="95" cy="50" r="3.5" fill="#EF4444" />
        <text x="95" y="40" fontSize="9" fill="#EF4444" fontFamily="'Space Mono', monospace" textAnchor="middle" fontWeight="700">L2</text>
      </svg>
    );
  }
  return null;
}
