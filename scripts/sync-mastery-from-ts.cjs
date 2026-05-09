/**
 * One-shot sync script — copies the mastery chart galleries + extended
 * data + updated page components from unis-ta-bootcamp-day1 (TS) into
 * last-mile (JS).
 *
 * Uses esbuild to strip TypeScript (proper AST-based conversion). The
 * bootcamp app is the source of truth; whenever it changes, run:
 *
 *   node scripts/sync-mastery-from-ts.cjs
 *
 * from the last-mile root and the JS mirror updates.
 */

const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const SRC = 'C:\\Users\\arnol\\Desktop\\Project Files Do Not Delete\\unis-ta-bootcamp-day1';
const DST = 'C:\\Users\\arnol\\Desktop\\Project Files Do Not Delete\\last-mile';

function read(p) { return fs.readFileSync(p, 'utf8'); }
function write(p, c) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, c, 'utf8');
}

/**
 * Strip TypeScript using esbuild's transformSync. Preserves comments.
 * Returns valid JavaScript with all type syntax removed.
 */
function stripTs(src, isJsx) {
  const result = esbuild.transformSync(src, {
    loader: isJsx ? 'tsx' : 'ts',
    target: 'esnext',
    format: 'esm',
    // Don't minify; keep readable JS
    minify: false,
    // Preserve comments where possible (esbuild drops some by default)
    legalComments: 'inline',
    // Keep names so React DevTools etc. work
    keepNames: true,
    // Don't add any source-map URLs
    sourcemap: false,
  });
  return result.code;
}

/**
 * For the page components: rewrite esbuild's named-export footer
 *   export { MasteryOverview };
 * into a default export so last-mile's App.jsx (which uses default imports) works:
 *   export default MasteryOverview;
 *
 * esbuild always emits `export { Name }` for top-level `export function Name()`
 * (because of keepNames: true and ESM normalization). We can't change that, so
 * we postprocess the footer.
 */
function toDefaultExport(src) {
  // Match the very last `export { Name };` (esbuild puts it at the end of the file).
  const match = src.match(/export \{\s*([A-Z][\w$]*)\s*\};?\s*$/);
  if (!match) return src;
  const name = match[1];
  return src.replace(match[0], `export default ${name};`);
}

// ─── Files to copy ────────────────────────────────────────────────────────

// Chart files — pure data, esbuild strips the type-only import
const chartFiles = [
  'src/components/charts/mastery/principles/01-pole-first.ts',
  'src/components/charts/mastery/principles/02-context.ts',
  'src/components/charts/mastery/principles/03-wait-for-close.ts',
  'src/components/charts/mastery/principles/04-fifty-percent.ts',
  'src/components/charts/mastery/principles/05-staircase.ts',
  'src/components/charts/mastery/principles/06-missed-gone.ts',
  'src/components/charts/mastery/principles/07-multi-confirmation.ts',
  'src/components/charts/mastery/principles/08-daily-reset.ts',
  'src/components/charts/mastery/principles/09-listen-to-tools.ts',
  'src/components/charts/mastery/principles/10-capitulation.ts',
  'src/components/charts/mastery/core-lessons/01-pole-mastery.ts',
  'src/components/charts/mastery/core-lessons/02-flag-mechanics.ts',
  'src/components/charts/mastery/core-lessons/03-fifty-percent-deep.ts',
  'src/components/charts/mastery/core-lessons/04-entry-rules.ts',
  'src/components/charts/mastery/core-lessons/05-multi-confirmation-deep.ts',
  'src/components/charts/mastery/core-lessons/06-session-reading.ts',
  'src/components/charts/mastery/core-lessons/07-staircase-deep.ts',
  'src/components/charts/mastery/core-lessons/08-missed-chasing.ts',
  'src/components/charts/mastery/core-lessons/09-daily-reset-deep.ts',
  'src/components/charts/mastery/core-lessons/10-capitulation-deep.ts',
  'src/components/charts/mastery/overview/hero.ts',
  'src/components/charts/mastery/checklists/checklist-charts.ts',
  // qa-concepts
  'src/components/charts/qa-concepts/bull-flag.ts',
  'src/components/charts/qa-concepts/bear-flag.ts',
  'src/components/charts/qa-concepts/double-top.ts',
  'src/components/charts/qa-concepts/double-bottom.ts',
  'src/components/charts/qa-concepts/breakouts.ts',
  'src/components/charts/qa-concepts/opening-range-breakout.ts',
  'src/components/charts/qa-concepts/vwap-rejection.ts',
  'src/components/charts/qa-concepts/inside-bar.ts',
  'src/components/charts/qa-concepts/capitulation.ts',
  'src/components/charts/qa-concepts/measured-move.ts',
  'src/components/charts/qa-concepts/stop-placement.ts',
  'src/components/charts/qa-concepts/discipline.ts',
  'src/components/charts/qa-concepts/trend-trading.ts',
  'src/components/charts/qa-concepts/support-resistance.ts',
  'src/components/charts/qa-concepts/candlestick-patterns.ts',
];

// Index files — same loader, esbuild handles `export type { ... }` correctly
const indexFiles = [
  'src/components/charts/mastery/principles/index.ts',
  'src/components/charts/mastery/core-lessons/index.ts',
  'src/components/charts/mastery/index.ts',
  'src/components/charts/qa-concepts/index.ts',
];

// Data files (principles.ts, coreLessons.ts) — ts loader
const dataFiles = [
  'src/data/mastery/principles.ts',
  'src/data/mastery/coreLessons.ts',
];

// Page components (.tsx → .jsx) — App.jsx imports these as DEFAULTS
const pageFiles = [
  'src/pages/mastery/PrinciplesPage.tsx',
  'src/pages/mastery/CoreLessonPage.tsx',
  'src/pages/mastery/ChecklistsPage.tsx',
  'src/pages/mastery/MasteryOverview.tsx',
  'src/pages/mastery/MasteryEntryCard.tsx',
  'src/pages/mastery/MasteryDrill.tsx',
  'src/pages/mastery/MasteryLibrary.tsx',
  'src/pages/mastery/MasteryProgress.tsx',
];

// Inner UI components — imported as NAMED elsewhere; keep named export
const innerComponentFiles = [
  'src/components/NarratorBar.tsx',
  'src/components/ReadAloudButton.tsx',
];

// Narrator lib files — ts loader (no JSX)
const narratorLibFiles = [
  'src/lib/narrator/types.ts',
  'src/lib/narrator/voices.ts',
  'src/lib/narrator/sentenceSplitter.ts',
  'src/lib/narrator/numberSpeech.ts',
  'src/lib/narrator/chartNarrator.ts',
  'src/lib/narrator/scriptBuilders.ts',
  'src/lib/narrator/Narrator.ts',
  'src/lib/narrator/index.ts',
];

let count = 0;

function syncOne(rel, { isJsx, defaultExport }) {
  const ts = read(path.join(SRC, rel));
  let js = stripTs(ts, isJsx);
  if (defaultExport) js = toDefaultExport(js);
  // Output extension
  const dstExt = isJsx ? '.jsx' : '.js';
  const dstRel = rel.replace(/\.tsx?$/, dstExt);
  write(path.join(DST, dstRel), js);
  count++;
}

for (const rel of chartFiles)            syncOne(rel, { isJsx: false });
for (const rel of indexFiles)            syncOne(rel, { isJsx: false });
for (const rel of dataFiles)             syncOne(rel, { isJsx: false });
for (const rel of narratorLibFiles)      syncOne(rel, { isJsx: false });
for (const rel of pageFiles)             syncOne(rel, { isJsx: true, defaultExport: true });
for (const rel of innerComponentFiles)   syncOne(rel, { isJsx: true, defaultExport: false });

console.log(`Synced ${count} files to last-mile (esbuild TS→JS).`);
