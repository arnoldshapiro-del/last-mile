import React from 'react';
import { Link } from 'react-router-dom';
import { PatternThumb } from '../components/PatternSVG.jsx';

const PATTERNS = [
  {
    slug: 'double-bottom',
    name: 'Double Bottom H2',
    blurb: 'Buy the second try after a strong down move at support.',
    tone: 'bull',
  },
  {
    slug: 'double-top',
    name: 'Double Top L2',
    blurb: 'Sell the second try after a strong up move at resistance.',
    tone: 'bear',
  },
  {
    slug: 'bull-flag',
    name: 'Bull Flag H2',
    blurb: 'Buy the continuation after a pullback inside an uptrend.',
    tone: 'bull',
  },
  {
    slug: 'bear-flag',
    name: 'Bear Flag L2',
    blurb: 'Sell the continuation after a pullback inside a downtrend.',
    tone: 'bear',
  },
];

export default function FourPatterns() {
  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="mono text-xs uppercase tracking-widest text-text-muted">Section 3</p>
        <h1 className="section-h1">The Four Patterns</h1>
        <p className="body-muted">
          Four setups. That's it. Two for buying second tries, two for selling second tries.
          Pick one to start — they all share the same underlying logic.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {PATTERNS.map((p) => (
          <Link
            key={p.slug}
            to={`/second-signal/patterns/${p.slug}`}
            className="card hover:bg-bg-elevated transition-colors no-underline space-y-4 group"
          >
            <div className="rounded overflow-hidden bg-bg-deep">
              <PatternThumb type={p.slug} />
            </div>
            <div>
              <h3 className="mono font-bold text-lg text-text-primary">{p.name}</h3>
              <p className="text-text-muted text-base mt-1 leading-relaxed">{p.blurb}</p>
            </div>
            <p
              className={`mono text-sm ${
                p.tone === 'bull' ? 'text-bull-light' : 'text-bear-light'
              } group-hover:underline`}
            >
              Open lesson →
            </p>
          </Link>
        ))}
      </section>

      <section className="card-elevated">
        <p className="text-text-muted">
          <span className="mono font-bold text-text-primary">Tip:</span>{' '}
          Drill one pattern until it jumps off the screen before moving to the next.
          Double Bottom H2 is the natural starting point — the others are just rotations of it.
        </p>
      </section>
    </article>
  );
}
