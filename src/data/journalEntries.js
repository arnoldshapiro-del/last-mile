// Personal Trading Journal & Reflection — sensitive financial content.
// Locked behind Firebase auth + ALLOWED_EMAILS whitelist via JournalGate.
//
// Each entry uses a section-based shape so the renderer can produce a
// sticky table of contents and consistent typography.
//
// Shape (no TypeScript here, but documented):
//   JournalSection: { id: string, heading: string, body: string }
//   JournalEntry:   { date: string, displayDate: string, title: string,
//                     subtitle?: string, sections: JournalSection[] }
//
// Markdown-lite body syntax (matches Bootcamp renderer):
//   **bold**, - bullets, > blockquote, ### sub-heading,
//   "ALLCAPS LABEL: text..." for callouts (auto-toned by keyword).

export const journalEntries = [
  // PHASE 7 will append the May 15, 2026 entry here.
];
