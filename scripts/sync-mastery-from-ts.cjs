/**
 * One-shot sync script — copies the mastery chart galleries + extended
 * data + updated page components from unis-ta-bootcamp-day1 (TS) into
 * last-mile (JS). Strips TypeScript-specific syntax.
 *
 * Run from anywhere: `node scripts/sync-mastery-from-ts.cjs`
 */

const fs = require('fs');
const path = require('path');

const SRC = 'C:\\Users\\arnol\\Desktop\\Project Files Do Not Delete\\unis-ta-bootcamp-day1';
const DST = 'C:\\Users\\arnol\\Desktop\\Project Files Do Not Delete\\last-mile';

function read(p) { return fs.readFileSync(p, 'utf8'); }
function write(p, c) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, c, 'utf8');
}

// ---- Chart files (no inline types, just an import-type + annotation) ----
function stripChartFile(src) {
  return src
    .replace(/^import type \{[^}]+\} from [^;]+;\n?/gm, '')
    .replace(/: ChartDef\[\]/g, '')
    .replace(/: Record<[^>]+>/g, '');
}

// principles index has a Record<number, ChartDef[]> → drop both type annotations and the type-only import.
// qa-concepts index has its own exported ConceptGallery interface + ConceptGallery[] annotation.
function stripPrinciplesIndex(src) {
  return src
    .replace(/^import type \{[^}]+\} from [^;]+;\n?/gm, '')
    .replace(/^export interface [\s\S]*?^\}\n?/gm, '') // strip ConceptGallery interface
    .replace(/: Record<number, ChartDef\[\]>/g, '')
    .replace(/: Record<string, ChartDef\[\]>/g, '')
    .replace(/: ConceptGallery\[\]/g, '')
    // findConceptForEntry has param/return type annotations
    .replace(/export function findConceptForEntry\(patternType: string \| null \| undefined, tags\?: string\[\] \| null\): ConceptGallery \| null \{/, 'export function findConceptForEntry(patternType, tags) {')
    .replace(/new Map<string, ConceptGallery>\(\)/g, 'new Map()');
}

// ---- Data files (principles.ts, coreLessons.ts) ----
// Strip exported interfaces, drop type annotations on the const, keep everything else.
function stripPrinciplesTs(src) {
  // Remove exported interfaces
  src = src.replace(/export interface [\s\S]*?^\}\n?/gm, '');
  // Remove `: Principle[]` annotation on the export
  src = src.replace(/: Principle\[\]/g, '');
  return src;
}

function stripCoreLessonsTs(src) {
  src = src.replace(/export interface [\s\S]*?^\}\n?/gm, '');
  src = src.replace(/: CoreLesson\[\]/g, '');
  return src;
}

// ---- Page components (.tsx → .jsx) ----
// Use a balanced-bracket walker for generics so we handle nested <> correctly.
function stripGenerics(src) {
  // Walk through the source character by character. When we find an identifier
  // followed by `<`, we treat it as a generic only if the next chars form a
  // valid TS type (uppercase ident or known builtins) — and we walk to the
  // matching `>` accounting for nested generics.
  let out = '';
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (ch === '<') {
      // Generics have NO space between identifier and `<`: useState<X>, Set<string>, Record<K, V>.
      // JSX always has whitespace, `>`, `}`, `(`, `,`, `;`, etc. before `<`.
      // So only treat as generic if the IMMEDIATELY preceding character is a JS identifier char.
      const prevChar = out[out.length - 1];
      const isIdentChar = prevChar && /[A-Za-z_$0-9\]]/.test(prevChar);
      const ahead = src.slice(i + 1, i + 3);
      if (isIdentChar && /^[A-Za-z?{]/.test(ahead)) {
        // Walk to matching >
        let depth = 1;
        let j = i + 1;
        while (j < src.length && depth > 0) {
          if (src[j] === '<') depth++;
          else if (src[j] === '>') depth--;
          if (depth === 0) break;
          j++;
        }
        if (depth === 0) {
          // Skip the generic block entirely
          i = j + 1;
          continue;
        }
      }
    }
    out += ch;
    i++;
  }
  return out;
}

function stripTsx(src) {
  let s = src;
  // Strip type-only imports
  s = s.replace(/^import type \{[^}]+\} from [^;]+;\n?/gm, '');
  // Strip mixed imports — remove `type X,` and `, type X` from named-imports lists
  s = s.replace(/^(import \{[^}]*?)(?:\s*type\s+[A-Za-z_$][\w$]*\s*,?\s*)+(\}[^;]*;)/gm, (_m, head, tail) => {
    // Pull out the remaining (non-type) names from `head`, drop the `type X` ones.
    const inner = head.replace(/import \{/, '').replace(/\n/g, ' ');
    const names = inner.split(',').map(n => n.trim()).filter(n => n && !n.startsWith('type '));
    if (names.length === 0) {
      // Whole import was types — drop the line entirely
      return '';
    }
    return `import { ${names.join(', ')} ${tail}`;
  });
  // Strip non-exported interfaces (export interfaces handled in data files; here in pages too)
  s = s.replace(/^(?:export )?interface [\s\S]*?^\}\n?/gm, '');
  // Strip type aliases at top level
  s = s.replace(/^(?:export )?type [A-Za-z_$][\w$]* = [^;]+;\n?/gm, '');
  // Walk generics first (handles useState<Set<number>>, Record<X, Y>, etc)
  s = stripGenerics(s);
  // After generics removed, strip explicit param types in arrow functions: (n: number) → (n)
  // Also handle optional params: (n?: number) → (n)
  // Also handle destructuring with simple type: ({ children }: { children: ReactNode })
  s = s.replace(/\(([a-zA-Z_$][\w$]*)\??: [^)]+\)/g, '($1)');
  s = s.replace(/\}: \{[^}]*\}\)/g, '})');
  s = s.replace(/\}: [A-Za-z_$][\w$\s.,]*\)/g, '})');
  // Strip return type annotations like ): JSX.Element {
  s = s.replace(/\): [A-Za-z_$][\w$.\s,|\[\]]* \{/g, ') {');
  // Strip type assertions `as X`
  s = s.replace(/ as [A-Za-z_$][\w$.\s,|\[\]]*/g, '');
  // Strip `: TYPE = ` annotation on const/let
  s = s.replace(/^(\s*(?:const|let|var) [a-zA-Z_$][\w$]*): [^=\n]+ =/gm, '$1 =');
  // Convert `export function X` to `export default function X` for page components
  s = s.replace(/^export function ([A-Z][\w$]*)\(/m, 'export default function $1(');
  return s;
}

// ---- Files to copy ----

// Chart files — direct copy, strip type-only imports + annotations
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
  // qa-concepts — pattern-type chart galleries (Q&A merger)
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

// Index files (have Record<...> / interface / type annotations to strip)
const indexFiles = [
  'src/components/charts/mastery/principles/index.ts',
  'src/components/charts/mastery/core-lessons/index.ts',
  'src/components/charts/mastery/index.ts',
  'src/components/charts/qa-concepts/index.ts',
];

let count = 0;

for (const rel of chartFiles) {
  const src = read(path.join(SRC, rel));
  const out = stripChartFile(src);
  const dst = path.join(DST, rel.replace(/\.ts$/, '.js'));
  write(dst, out);
  count++;
}

for (const rel of indexFiles) {
  const src = read(path.join(SRC, rel));
  const out = stripPrinciplesIndex(src);
  const dst = path.join(DST, rel.replace(/\.ts$/, '.js'));
  write(dst, out);
  count++;
}

// Data files
{
  const src = read(path.join(SRC, 'src/data/mastery/principles.ts'));
  write(path.join(DST, 'src/data/mastery/principles.js'), stripPrinciplesTs(src));
  count++;
}
{
  const src = read(path.join(SRC, 'src/data/mastery/coreLessons.ts'));
  write(path.join(DST, 'src/data/mastery/coreLessons.js'), stripCoreLessonsTs(src));
  count++;
}

// Page components — go to .jsx
const pageFiles = [
  ['src/pages/mastery/PrinciplesPage.tsx',     'src/pages/mastery/PrinciplesPage.jsx'],
  ['src/pages/mastery/CoreLessonPage.tsx',     'src/pages/mastery/CoreLessonPage.jsx'],
  ['src/pages/mastery/ChecklistsPage.tsx',     'src/pages/mastery/ChecklistsPage.jsx'],
  ['src/pages/mastery/MasteryOverview.tsx',    'src/pages/mastery/MasteryOverview.jsx'],
  // Q&A merger pages
  ['src/pages/mastery/MasteryEntryCard.tsx',   'src/pages/mastery/MasteryEntryCard.jsx'],
  ['src/pages/mastery/MasteryDrill.tsx',       'src/pages/mastery/MasteryDrill.jsx'],
  ['src/pages/mastery/MasteryLibrary.tsx',     'src/pages/mastery/MasteryLibrary.jsx'],
  ['src/pages/mastery/MasteryProgress.tsx',    'src/pages/mastery/MasteryProgress.jsx'],
];

for (const [srcRel, dstRel] of pageFiles) {
  const src = read(path.join(SRC, srcRel));
  const out = stripTsx(src);
  write(path.join(DST, dstRel), out);
  count++;
}

console.log(`Synced ${count} files to last-mile.`);
