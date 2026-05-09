var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { Library, Plus, Search, Filter, Eye, ChevronDown, ChevronRight } from "lucide-react";
import {
  fetchAllEntries,
  addEntriesBatch,
  findDuplicates,
  normalizeImported,
  todayISO
} from "../../lib/journal";
import MasteryEntryCard from "./MasteryEntryCard";
import { QA_CONCEPTS, findConceptForEntry } from "../../components/charts/qa-concepts";
import { ChartGallery } from "../../components/charts/day-2026-05-07/ChartGallery";
const PAGE_SIZE = 12;
const SAMPLE_JSON = `[
  {
    "entry_date": "${todayISO()}",
    "title": "Where to Measure Flagpole Length From",
    "context": "Bear flag on RTY 2-min after MBR",
    "question": "Where exactly do you measure from?",
    "answer": "The flagpole length is projected from the breakdown point of the flag, NOT from the bottom of the flagpole.",
    "key_takeaways": "1. Measure flagpole top-to-bottom\\n2. Find breakdown point\\n3. Subtract flagpole length from breakdown",
    "tags": ["bear-flag", "measured-move", "targets"],
    "pattern_type": "bear-flag",
    "instrument": "RTY",
    "time_of_day": "afternoon",
    "entry_type": "asked"
  }
]`;
function MasteryLibrary() {
  const [mode, setMode] = useState("browse");
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [patternFilter, setPatternFilter] = useState("");
  const [page, setPage] = useState(1);
  const [text, setText] = useState("");
  const [parseError, setParseError] = useState("");
  const [parsed, setParsed] = useState(null);
  const [saving, setSaving] = useState(false);
  const [savedCount, setSavedCount] = useState(0);
  const [openConcept, setOpenConcept] = useState(null);
  useEffect(() => {
    fetchAllEntries().then(setEntries).catch((e) => setError(e?.message || "Failed to load entries")).finally(() => setLoading(false));
  }, []);
  const allTags = useMemo(() => {
    const s = /* @__PURE__ */ new Set();
    for (const e of entries) for (const t of e.tags || []) s.add(t);
    return [...s].sort();
  }, [entries]);
  const allPatterns = useMemo(() => {
    const s = /* @__PURE__ */ new Set();
    for (const e of entries) if (e.pattern_type) s.add(e.pattern_type);
    return [...s].sort();
  }, [entries]);
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return entries.filter((e) => {
      if (q) {
        const hay = (e.title + " " + e.question + " " + e.answer + " " + (e.context || "")).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (tagFilter && !(e.tags || []).includes(tagFilter)) return false;
      if (patternFilter && e.pattern_type !== patternFilter) return false;
      return true;
    });
  }, [entries, search, tagFilter, patternFilter]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageEntries = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const handleParse = /* @__PURE__ */ __name(() => {
    setParseError("");
    setSavedCount(0);
    try {
      const data = JSON.parse(text);
      if (!Array.isArray(data)) {
        setParseError("Top-level value must be an array of entries.");
        return;
      }
      const normalized = [];
      for (let i = 0; i < data.length; i++) {
        const result = normalizeImported(data[i]);
        if ("error" in result) {
          setParseError(`Entry #${i + 1}: ${result.error}`);
          return;
        }
        normalized.push(result);
      }
      setParsed(normalized);
    } catch (e) {
      setParseError("Invalid JSON: " + e.message);
    }
  }, "handleParse");
  const handleSave = /* @__PURE__ */ __name(async () => {
    if (!parsed) return;
    setSaving(true);
    try {
      const n = await addEntriesBatch(parsed);
      setSavedCount(n);
      setParsed(null);
      setText("");
      const fresh = await fetchAllEntries();
      setEntries(fresh);
    } catch (e) {
      setParseError("Save failed: " + (e?.message || "Unknown error"));
    } finally {
      setSaving(false);
    }
  }, "handleSave");
  const dupes = parsed ? findDuplicates(parsed.map((p) => ({ title: p.title, entry_date: p.entry_date })), entries) : /* @__PURE__ */ new Set();
  const groupedByCategory = useMemo(() => {
    const groups = { pattern: [], concept: [], psychology: [] };
    for (const c of QA_CONCEPTS) groups[c.category].push(c);
    return groups;
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5 md:p-6",
        style: {
          background: "linear-gradient(135deg, rgba(94, 234, 212, 0.08) 0%, rgba(15, 23, 42, 0.40) 100%)",
          border: "1px solid rgba(94, 234, 212, 0.25)"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex items-center justify-center w-10 h-10 rounded-xl",
                style: { background: "rgba(94, 234, 212, 0.15)", border: "1px solid rgba(94, 234, 212, 0.35)" },
                children: /* @__PURE__ */ jsx(Library, { className: "w-5 h-5", style: { color: "#5eead4" } })
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "text-xl m-0", children: "Library" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed m-0", style: { color: "#cbd5e1" }, children: "Your personal trading wiki. Browse every Q&A you have ever logged, search by pattern, add new entries from a Claude paste, or step into the Chart Library to study any pattern visually with annotated examples." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex gap-2 flex-wrap", children: ["browse", "concepts", "add"].map((m) => {
      const isActive = mode === m;
      const labels = { browse: "Browse Entries", concepts: "Chart Library", add: "Add Entry" };
      const Icons = { browse: Search, concepts: Eye, add: Plus };
      const Icon = Icons[m];
      return /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setMode(m),
          className: "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold",
          style: {
            background: isActive ? "rgba(20, 184, 166, 0.18)" : "rgba(255, 255, 255, 0.025)",
            border: `1px solid ${isActive ? "rgba(20, 184, 166, 0.50)" : "rgba(255, 255, 255, 0.08)"}`,
            color: isActive ? "#5eead4" : "#94a3b8",
            fontFamily: "Oxanium, system-ui, sans-serif",
            cursor: "pointer"
          },
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }),
            labels[m]
          ]
        },
        m
      );
    }) }),
    loading && /* @__PURE__ */ jsx("p", { style: { color: "#94a3b8" }, children: "Loading entries..." }),
    error && /* @__PURE__ */ jsx("div", { className: "rounded-xl px-4 py-3", style: { background: "rgba(239, 68, 68, 0.10)", border: "1px solid rgba(239, 68, 68, 0.40)", color: "#fca5a5" }, children: error.includes("permissions") || error.includes("insufficient") ? "Sign in to load your journal entries. The Chart Library below works without sign-in." : `Error: ${error}` }),
    !loading && !error && mode === "browse" && /* @__PURE__ */ jsxs("div", { className: "grid gap-4", style: { gridTemplateColumns: "minmax(220px, 260px) 1fr" }, children: [
      /* @__PURE__ */ jsx("aside", { className: "space-y-3", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl p-4", style: { background: "rgba(255, 255, 255, 0.025)", border: "1px solid rgba(255, 255, 255, 0.08)" }, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsx(Filter, { className: "w-4 h-4", style: { color: "#5eead4" } }),
          /* @__PURE__ */ jsx("h3", { className: "text-sm m-0", style: { color: "#5eead4", fontFamily: "Oxanium, system-ui, sans-serif" }, children: "Filters" })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search title / question / answer",
            value: search,
            onChange: (e) => {
              setSearch(e.target.value);
              setPage(1);
            },
            className: "w-full text-sm rounded-lg px-3 py-2 mb-2",
            style: {
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.10)",
              color: "#e2e8f0"
            }
          }
        ),
        /* @__PURE__ */ jsxs(
          "select",
          {
            value: patternFilter,
            onChange: (e) => {
              setPatternFilter(e.target.value);
              setPage(1);
            },
            className: "w-full text-sm rounded-lg px-3 py-2 mb-2",
            style: {
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.10)",
              color: "#e2e8f0"
            },
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "All patterns" }),
              allPatterns.map((p) => /* @__PURE__ */ jsx("option", { value: p, children: p }, p))
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "select",
          {
            value: tagFilter,
            onChange: (e) => {
              setTagFilter(e.target.value);
              setPage(1);
            },
            className: "w-full text-sm rounded-lg px-3 py-2 mb-2",
            style: {
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.10)",
              color: "#e2e8f0"
            },
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "All tags" }),
              allTags.map((t) => /* @__PURE__ */ jsx("option", { value: t, children: t }, t))
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setSearch("");
              setTagFilter("");
              setPatternFilter("");
              setPage(1);
            },
            className: "w-full text-xs px-3 py-2 rounded-lg",
            style: {
              background: "rgba(255, 255, 255, 0.025)",
              border: "1px solid rgba(255, 255, 255, 0.10)",
              color: "#94a3b8",
              cursor: "pointer"
            },
            children: "Clear filters"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-xs", style: { color: "#94a3b8" }, children: filtered.length === entries.length ? `${entries.length} entries` : `${filtered.length} of ${entries.length} entries` }) }),
        pageEntries.length === 0 ? /* @__PURE__ */ jsx("div", { className: "rounded-2xl p-8 text-center", style: { background: "rgba(255, 255, 255, 0.025)", border: "1px solid rgba(255, 255, 255, 0.08)" }, children: /* @__PURE__ */ jsx("p", { style: { color: "#94a3b8" }, children: entries.length === 0 ? "No entries yet \u2014 switch to Add Entry to paste your first batch." : "No entries match your filters." }) }) : /* @__PURE__ */ jsx("div", { className: "space-y-3", children: pageEntries.map((e) => /* @__PURE__ */ jsx(MasteryEntryCard, { entry: e }, e.id)) }),
        totalPages > 1 && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mt-5", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              disabled: page === 1,
              onClick: () => setPage((p) => Math.max(1, p - 1)),
              className: "text-xs px-3 py-1.5 rounded-lg",
              style: {
                background: "rgba(255, 255, 255, 0.025)",
                border: "1px solid rgba(255, 255, 255, 0.10)",
                color: page === 1 ? "#475569" : "#94a3b8",
                cursor: page === 1 ? "not-allowed" : "pointer"
              },
              children: "\u2190 Prev"
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "text-xs num", style: { color: "#94a3b8" }, children: [
            "Page ",
            page,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              disabled: page === totalPages,
              onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
              className: "text-xs px-3 py-1.5 rounded-lg",
              style: {
                background: "rgba(255, 255, 255, 0.025)",
                border: "1px solid rgba(255, 255, 255, 0.10)",
                color: page === totalPages ? "#475569" : "#94a3b8",
                cursor: page === totalPages ? "not-allowed" : "pointer"
              },
              children: "Next \u2192"
            }
          )
        ] })
      ] })
    ] }),
    !loading && mode === "concepts" && /* @__PURE__ */ jsx("div", { className: "space-y-6", children: ["pattern", "concept", "psychology"].map((cat) => /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-base mb-3", style: { color: "#5eead4", fontFamily: "Oxanium, system-ui, sans-serif" }, children: cat === "pattern" ? "Patterns" : cat === "concept" ? "Concepts" : "Psychology & Discipline" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: groupedByCategory[cat].map((c) => {
        const open = openConcept === c.slug;
        const matching = entries.filter((e) => findConceptForEntry(e.pattern_type, e.tags)?.slug === c.slug);
        return /* @__PURE__ */ jsxs(
          "article",
          {
            className: "rounded-2xl overflow-hidden",
            style: { background: "rgba(255, 255, 255, 0.025)", border: "1px solid rgba(255, 255, 255, 0.08)" },
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenConcept((o) => o === c.slug ? null : c.slug),
                  className: "w-full flex items-start gap-3 p-4 text-left",
                  style: { background: "transparent", border: "none", cursor: "pointer" },
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-base m-0", style: { color: "#f5f9ff", fontFamily: "Oxanium, system-ui, sans-serif" }, children: c.title }),
                        /* @__PURE__ */ jsxs("span", { className: "text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full num uppercase", style: { background: "rgba(94, 234, 212, 0.10)", color: "#5eead4", border: "1px solid rgba(94, 234, 212, 0.30)" }, children: [
                          c.charts.length,
                          " CHARTS"
                        ] }),
                        matching.length > 0 && /* @__PURE__ */ jsxs("span", { className: "text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full num uppercase", style: { background: "rgba(167, 139, 250, 0.10)", color: "#c4b5fd", border: "1px solid rgba(167, 139, 250, 0.30)" }, children: [
                          matching.length,
                          " ENTR",
                          matching.length === 1 ? "Y" : "IES"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs m-0", style: { color: "#94a3b8" }, children: c.description })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-1", style: { color: "#94a3b8" }, children: open ? /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" }) })
                  ]
                }
              ),
              open && /* @__PURE__ */ jsxs("div", { className: "px-4 pb-4 space-y-4", style: { borderTop: "1px solid rgba(255, 255, 255, 0.06)" }, children: [
                /* @__PURE__ */ jsx("div", { className: "pt-3", children: /* @__PURE__ */ jsx(ChartGallery, { conceptId: "concept-" + c.slug, charts: c.charts }) }),
                matching.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-2", style: { color: "#c4b5fd" }, children: "Your entries on this topic" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: matching.slice(0, 5).map((e) => /* @__PURE__ */ jsx(MasteryEntryCard, { entry: e }, e.id)) })
                ] })
              ] })
            ]
          },
          c.slug
        );
      }) })
    ] }, cat)) }),
    !loading && mode === "add" && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl p-5", style: { background: "rgba(255, 255, 255, 0.025)", border: "1px solid rgba(255, 255, 255, 0.08)" }, children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base m-0 mb-1", style: { color: "#5eead4", fontFamily: "Oxanium, system-ui, sans-serif" }, children: "Smart Paste" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs mb-3", style: { color: "#94a3b8" }, children: "Paste a JSON array from Claude. Required fields per entry: entry_date (YYYY-MM-DD), title, question, answer." }),
        savedCount > 0 && /* @__PURE__ */ jsxs("div", { className: "rounded-xl px-4 py-3 mb-3", style: { background: "rgba(34, 197, 94, 0.10)", border: "1px solid rgba(34, 197, 94, 0.40)", color: "#86efac" }, children: [
          "\u2705 ",
          savedCount,
          " ",
          savedCount === 1 ? "entry" : "entries",
          " saved."
        ] }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            value: text,
            onChange: (e) => setText(e.target.value),
            placeholder: SAMPLE_JSON,
            className: "w-full text-sm rounded-lg p-3",
            style: {
              background: "rgba(0, 0, 0, 0.30)",
              border: "1px solid rgba(255, 255, 255, 0.10)",
              color: "#e2e8f0",
              fontFamily: "Space Mono, ui-monospace, monospace",
              minHeight: 220
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mt-3 flex-wrap", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: handleParse,
              disabled: !text.trim(),
              className: "text-sm px-4 py-2 rounded-lg font-semibold",
              style: {
                background: text.trim() ? "linear-gradient(135deg, #14b8a6, #0d9488)" : "rgba(255,255,255,0.05)",
                color: text.trim() ? "#070c18" : "#475569",
                border: "none",
                cursor: text.trim() ? "pointer" : "not-allowed",
                fontFamily: "Oxanium, system-ui, sans-serif"
              },
              children: "Parse & Preview"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setText(SAMPLE_JSON);
                setParsed(null);
                setParseError("");
              },
              className: "text-sm px-4 py-2 rounded-lg",
              style: {
                background: "rgba(255, 255, 255, 0.025)",
                border: "1px solid rgba(255, 255, 255, 0.10)",
                color: "#94a3b8",
                cursor: "pointer"
              },
              children: "Load example"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setText("");
                setParsed(null);
                setParseError("");
              },
              className: "text-sm px-4 py-2 rounded-lg",
              style: {
                background: "rgba(255, 255, 255, 0.025)",
                border: "1px solid rgba(255, 255, 255, 0.10)",
                color: "#94a3b8",
                cursor: "pointer"
              },
              children: "Clear"
            }
          )
        ] }),
        parseError && /* @__PURE__ */ jsx("div", { className: "rounded-xl px-4 py-3 mt-3", style: { background: "rgba(239, 68, 68, 0.10)", border: "1px solid rgba(239, 68, 68, 0.40)", color: "#fca5a5" }, children: parseError })
      ] }),
      parsed && parsed.length > 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-base m-0", style: { color: "#5eead4", fontFamily: "Oxanium, system-ui, sans-serif" }, children: [
            "Preview \xB7 ",
            parsed.length,
            " ",
            parsed.length === 1 ? "entry" : "entries",
            dupes.size > 0 && /* @__PURE__ */ jsxs("span", { className: "text-xs ml-2", style: { color: "#fbbf24" }, children: [
              "\xB7 ",
              dupes.size,
              " possible duplicate",
              dupes.size > 1 ? "s" : ""
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: handleSave,
              disabled: saving,
              className: "text-sm px-4 py-2 rounded-lg font-semibold",
              style: {
                background: saving ? "rgba(255,255,255,0.05)" : "linear-gradient(135deg, #14b8a6, #0d9488)",
                color: saving ? "#475569" : "#070c18",
                border: "none",
                cursor: saving ? "not-allowed" : "pointer",
                fontFamily: "Oxanium, system-ui, sans-serif"
              },
              children: saving ? "Saving..." : `Save All (${parsed.length})`
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: parsed.map((p, i) => /* @__PURE__ */ jsxs(
          "article",
          {
            className: "rounded-xl p-4",
            style: {
              background: dupes.has(i) ? "rgba(251, 191, 36, 0.06)" : "rgba(255, 255, 255, 0.025)",
              border: `1px solid ${dupes.has(i) ? "rgba(251, 191, 36, 0.45)" : "rgba(255, 255, 255, 0.08)"}`
            },
            children: [
              dupes.has(i) && /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-2", style: { color: "#fbbf24" }, children: "\u26A0 DUPLICATE OF EXISTING (same title + date)" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "num text-xs", style: { color: "#94a3b8" }, children: p.entry_date }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full num uppercase", style: { background: "rgba(94, 234, 212, 0.10)", color: "#5eead4", border: "1px solid rgba(94, 234, 212, 0.30)" }, children: p.entry_type }),
                p.pattern_type && /* @__PURE__ */ jsx("span", { className: "text-[11px] num px-2 py-0.5 rounded-full", style: { background: "rgba(167, 139, 250, 0.10)", color: "#c4b5fd", border: "1px solid rgba(167, 139, 250, 0.30)" }, children: p.pattern_type })
              ] }),
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold m-0 mb-2", style: { color: "#f5f9ff" }, children: p.title }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs m-0 mb-2", style: { color: "#cbd5e1" }, children: [
                /* @__PURE__ */ jsx("strong", { children: "Q:" }),
                " ",
                p.question
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs m-0", style: { color: "#cbd5e1" }, children: [
                /* @__PURE__ */ jsx("strong", { children: "A:" }),
                " ",
                p.answer.substring(0, 200),
                p.answer.length > 200 ? "..." : ""
              ] })
            ]
          },
          i
        )) })
      ] })
    ] })
  ] });
}
__name(MasteryLibrary, "MasteryLibrary");
export default MasteryLibrary;