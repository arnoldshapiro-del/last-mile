import { useState } from 'react';
import { ChevronDown, ChevronRight, Eye, Tag, Target } from 'lucide-react';
import { ChartGallery } from '../../components/charts/day-2026-05-07/ChartGallery';
import { findConceptForEntry } from '../../components/charts/qa-concepts';


const ENTRY_TYPE_COLORS = {
  asked:    '#5eead4',
  observed: '#a78bfa',
  mistake:  '#ef4444',
  insight:  '#fbbf24',
};

export default function MasteryEntryCard({ entry, defaultOpen = false, showChartByDefault = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const [chartOpen, setChartOpen] = useState(showChartByDefault);

  const concept = findConceptForEntry(entry.pattern_type, entry.tags);
  const typeColor = ENTRY_TYPE_COLORS[entry.entry_type] || '#94a3b8';

  return (
    <article
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.025)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start gap-3 p-4 text-left"
        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span
              className="num text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full uppercase"
              style={{
                background: typeColor + '22',
                border: `1px solid ${typeColor}55`,
                color: typeColor,
              }}
            >
              {entry.entry_type}
            </span>
            <span className="num text-xs" style={{ color: '#94a3b8' }}>
              {entry.entry_date}
            </span>
            {entry.instrument && (
              <span className="num text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(94, 234, 212, 0.10)', color: '#5eead4', border: '1px solid rgba(94, 234, 212, 0.30)' }}>
                {entry.instrument}
              </span>
            )}
            {entry.confidence_rating != null && (
              <span className="num text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(251, 191, 36, 0.10)', color: '#fbbf24', border: '1px solid rgba(251, 191, 36, 0.30)' }}>
                {entry.confidence_rating}/5
              </span>
            )}
            {concept && (
              <span className="text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full num" style={{ background: 'rgba(167, 139, 250, 0.10)', color: '#c4b5fd', border: '1px solid rgba(167, 139, 250, 0.30)' }}>
                {concept.charts.length} CHARTS
              </span>
            )}
          </div>
          <h3 className="text-base md:text-lg m-0 leading-snug" style={{ color: '#f5f9ff', fontFamily: 'Oxanium, system-ui, sans-serif' }}>
            {entry.title}
          </h3>
          {entry.context && !open && (
            <p className="text-xs mt-1 m-0" style={{ color: '#94a3b8', fontStyle: 'italic' }}>
              {entry.context}
            </p>
          )}
        </div>
        <div className="shrink-0 mt-1" style={{ color: '#94a3b8' }}>
          {open ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
          {entry.context && (
            <p className="text-sm mt-3 mb-0" style={{ color: '#94a3b8', fontStyle: 'italic' }}>
              Context: {entry.context}
            </p>
          )}

          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] num mb-1.5" style={{ color: '#5eead4' }}>
              Question
            </div>
            <p className="text-base font-semibold m-0" style={{ color: '#f5f9ff' }}>
              {entry.question}
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] num mb-1.5" style={{ color: '#5eead4' }}>
              Answer
            </div>
            <div className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: '#e2e8f0' }}>
              {entry.answer}
            </div>
          </div>

          {entry.key_takeaways && (
            <div className="rule-callout">
              <div className="text-[10px] uppercase tracking-[0.22em] num mb-2" style={{ color: '#5eead4' }}>
                Key Takeaways
              </div>
              <div className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: '#e2e8f0' }}>
                {entry.key_takeaways}
              </div>
            </div>
          )}

          {/* Chart gallery — collapsible to avoid spoiling Quiz answers */}
          {concept && (
            <div>
              <button
                type="button"
                onClick={() => setChartOpen(o => !o)}
                className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(167, 139, 250, 0.10)',
                  color: '#c4b5fd',
                  border: '1px solid rgba(167, 139, 250, 0.30)',
                  cursor: 'pointer',
                  fontFamily: 'Oxanium, system-ui, sans-serif',
                }}
              >
                <Eye className="w-3.5 h-3.5" />
                {chartOpen ? 'Hide' : 'Show'} {concept.charts.length} teaching charts · {concept.title}
              </button>
              {chartOpen && (
                <div className="mt-3">
                  <ChartGallery conceptId={'entry-' + (entry.id || 'x')} charts={concept.charts} />
                </div>
              )}
            </div>
          )}

          {(entry.tags?.length || entry.pattern_type || entry.time_of_day) && (
            <div className="flex flex-wrap gap-1.5 pt-2" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
              {entry.pattern_type && (
                <span className="num text-[11px] px-2 py-0.5 rounded-full inline-flex items-center gap-1" style={{ background: 'rgba(94, 234, 212, 0.10)', color: '#5eead4', border: '1px solid rgba(94, 234, 212, 0.20)' }}>
                  <Target className="w-2.5 h-2.5" />
                  {entry.pattern_type}
                </span>
              )}
              {entry.time_of_day && (
                <span className="num text-[11px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.04)', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  {entry.time_of_day}
                </span>
              )}
              {(entry.tags || []).map(t => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded-full inline-flex items-center gap-1" style={{ background: 'rgba(167, 139, 250, 0.06)', color: '#c4b5fd', border: '1px solid rgba(167, 139, 250, 0.16)' }}>
                  <Tag className="w-2.5 h-2.5" />
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
