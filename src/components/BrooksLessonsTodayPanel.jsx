import React, { useEffect, useState } from 'react';

const INDEX_URL = 'https://unis-ta-bootcamp-day1.netlify.app/lessons/index.json';
const ARCHIVE_URL = 'https://unis-ta-bootcamp-day1.netlify.app/brooks/lessons';

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// Reads the same `public/lessons/index.json` the Bootcamp Brooks Hub
// reads (we fetch it from the deployed Bootcamp origin since Last Mile
// doesn't ship a local copy). Filters to today + brooks/tape_reading.
export default function BrooksLessonsTodayPanel() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(INDEX_URL, { cache: 'no-store' })
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(all => {
        if (cancelled) return;
        const today = todayISO();
        const filtered = (Array.isArray(all) ? all : [])
          .filter(r => r.date === today && (r.category === 'brooks' || r.category === 'tape_reading'))
          .sort((a, b) => (b.lesson_id || '').localeCompare(a.lesson_id || ''));
        setRows(filtered);
        setLoading(false);
      })
      .catch(e => {
        if (cancelled) return;
        setError(e.message);
        setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  if (loading) {
    return <p className="text-sm text-muted m-0">Loading today's Brooks lessons…</p>;
  }
  if (error) {
    return (
      <p className="text-sm text-amber m-0">
        Could not reach lesson index ({error}). Check the Brooks Hub on Bootcamp directly.
      </p>
    );
  }

  if (rows.length === 0) {
    return (
      <div>
        <p className="text-sm text-muted m-0 mb-3">
          No Brooks-tagged lessons saved for today yet.
        </p>
        <a
          href={ARCHIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-display font-medium text-green hover:underline"
        >
          Open Brooks Hub archive →
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="label">{rows.length} lesson{rows.length === 1 ? '' : 's'} today</div>
      <ul className="list-none p-0 m-0 space-y-2">
        {rows.map(r => {
          const sign = (r.pnl_dollars ?? 0) >= 0 ? '+' : '';
          const outcomeColor =
            r.outcome === 'win' ? 'text-green' :
            r.outcome === 'loss' ? 'text-red' : 'text-muted';
          return (
            <li key={r.lesson_id} className="p-3 rounded-lg border border-border bg-bg">
              <div className="flex items-baseline gap-2 mb-1 flex-wrap text-xs text-muted">
                <span className="font-display font-semibold text-text">{r.lesson_id}</span>
                <span>·</span>
                <span>{r.category}</span>
                {r.instrument && <><span>·</span><span>{r.instrument}</span></>}
                {r.pnl_dollars != null && (
                  <>
                    <span>·</span>
                    <span className={outcomeColor + ' num font-semibold'}>
                      {sign}${r.pnl_dollars.toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              <div className="text-sm text-text leading-snug">
                {r.key_lesson || <span className="text-muted italic">no key lesson recorded</span>}
              </div>
            </li>
          );
        })}
      </ul>
      <a
        href={ARCHIVE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-1 text-sm font-display font-medium text-green hover:underline"
      >
        Full archive in Brooks Hub →
      </a>
    </div>
  );
}
