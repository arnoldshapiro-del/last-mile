import React from 'react';
import { Link } from 'react-router-dom';

export default function DoubleBottom() {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-8 py-6 md:py-10 animate-fadeIn">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Link to="/" className="text-muted hover:text-text">←</Link>
          <div className="label">Setup Lab</div>
        </div>
        <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-3">Double Bottom</h1>
        <p className="text-text/80 text-lg max-w-3xl leading-relaxed">
          The 2-minute scalper's complete double bottom treatment.
        </p>
      </div>
      <div className="card border-amber/40 bg-amber/5">
        <div className="label text-amber mb-2">Coming Soon</div>
        <p className="text-text/85 leading-relaxed">
          Twelve large worked examples, a reversal decision tree, three entry tiers, and a time-of-day guide are queued up. The Bull Flag and Bear Flag treatments are the templates — Double Bottom will get the same depth.
        </p>
      </div>
    </div>
  );
}
