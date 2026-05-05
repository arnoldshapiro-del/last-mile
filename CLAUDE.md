# CLAUDE.md — Last Mile

## Project name
**Last Mile** — Discipline-engineering app for futures traders

## Purpose
Arnie has 5.5 years of pattern recognition and a persistent give-back problem (sessions go green, then he keeps trading and gives the gains back). This app is the mechanical solution: rule-locked sessions, pre-trade rituals, profit-target lockouts, and pattern-reflex training. It is NOT a charting tool, NOT a trading platform, NOT connected to any broker. It is a behavior-change tool.

## GitHub repo (planned)
`arnoldshapiro-del/last-mile` — not yet pushed. Awaiting Arnie's go-ahead per the spec's build-order rule #14.

## Netlify URL (planned)
`last-mile.netlify.app` — not yet deployed.

## Tech stack
- Vite 5 + React 18 + React Router 6
- Tailwind CSS 3 (CommonJS config — `tailwind.config.cjs`, `postcss.config.cjs`)
- Recharts (Progress module charts)
- localStorage for all persistence (prefix `lastmile:`)
- Web Audio API (no audio files — synthesized brief acoustic cues)

## Status
- **Initial build complete (2026-05-05).**
- All 6 modules implemented per spec.
- Dev server runs on port 5300 via launch.json config "last-mile".
- Verified end-to-end in preview: Home, Pre-Session Ritual, Drill, Setup Labs, Journal, Progress — all rendering and functioning.
- NOT yet deployed. NOT yet pushed to GitHub. Awaiting explicit instruction.

## Modules built (per spec)
1. **Home (`/`)** — locked commitments display, four principles cards, today's pattern focus, quick stats
2. **Pre-Session Ritual (`/protocol/pre-session`)** — 4-step flow: calm check → lock commitments → read aloud → today's threat
3. **In-Session Companion (`/protocol/in-session`)** — vital tiles, P&L logging, 3 full-screen takeover alerts (profit lock, give-back, loss warn), override-with-friction form
4. **5-Question Journal (`/journal`)** — onboarding card, 5 questions, compliance score, streak update
5. **Drill (`/drill`)** — 40 drills across 8 patterns, 5-second study phase, weakness map, adaptive 3× weighting under 70%
6. **Setup Labs** — Bear Flag (`/lab/bear-flag`, 10 sections) and Double Top (`/lab/double-top`, 7 sections including interactive scrubber + live RTY May 5 example)
7. **Progress (`/progress`)** — 4 Recharts charts + Honesty Zone auto-text generator

## Key files
- `src/App.jsx` — routes
- `src/components/Layout.jsx` — sidebar (desktop) + bottom nav (mobile)
- `src/components/CandlestickChart.jsx` — generic SVG candle/volume renderer with annotation primitives (hline, trendline, box, label, arrow)
- `src/data/drills.js` — 40 drills built procedurally from candle-data generators (5 per pattern × 8 patterns)
- `src/data/threats.js` — 10 threat phrasings for the pre-session ritual step 4
- `src/lib/store.js` — localStorage wrapper + commitments/session/journal/streak/drill helpers
- `src/lib/audio.js` — Web Audio synthesized cues
- `src/lib/util.js` — formatters + adaptive pool builder

## Important decisions
- **No real-time market data.** Per spec.
- **No account/login.** Single-user local app.
- **localStorage, not sessionStorage.** Persists across browser closes.
- **Tailwind config is `.cjs`** because `package.json` is `"type": "module"` and Tailwind v3 PostCSS resolution had trouble with ESM config. Content paths are absolute via `path.join(__dirname, ...)` to avoid the "no utility classes detected" issue.
- **Ports:** Dev server uses 5300 (added to root `Desktop\.claude\launch.json` as `last-mile`).

## Known issues
None at end of build. React Router v7 future-flag warnings silenced via opt-in flags in main.jsx.

## What's next
Per the spec's build order, next steps require Arnie's go-ahead:
- **Step 14:** push to GitHub (`arnoldshapiro-del/last-mile`)
- Then connect Netlify auto-build (installation_id 77160536)
- Add to gallery (arnies-app-showcase) once live
- Create .url shortcut in "All Of My Working Apps That Are Beautiful"

## Project-specific rules
- **DO NOT** add patterns beyond the 8 in the drill module. Only the 8 specified.
- **DO NOT** soften the Honesty Zone copy in Progress. It must show real data plainly.
- **DO NOT** touch GitHub or attempt deployment without explicit instruction.
- **DO NOT** attempt Vercel CLI under any circumstances.
- The Double Top lab's live RTY example chart references Arnie's actual May 5, 2026 setup. Keep that section faithful to reality — Bearish Engulfing #111 at 2850-2851, valley ~2840.
