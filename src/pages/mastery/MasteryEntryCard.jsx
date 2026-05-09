var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { useState } from "react";
import { ChevronDown, ChevronRight, Eye, Tag, Target } from "lucide-react";
import { ChartGallery } from "../../components/charts/day-2026-05-07/ChartGallery";
import { findConceptForEntry } from "../../components/charts/qa-concepts";
import { ReadAloudButton } from "../../components/ReadAloudButton";
import { buildJournalEntryScript } from "../../lib/narrator";
const ENTRY_TYPE_COLORS = {
  asked: "#5eead4",
  observed: "#a78bfa",
  mistake: "#ef4444",
  insight: "#fbbf24"
};
function MasteryEntryCard({ entry, defaultOpen = false, showChartByDefault = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const [chartOpen, setChartOpen] = useState(showChartByDefault);
  const concept = findConceptForEntry(entry.pattern_type, entry.tags);
  const typeColor = ENTRY_TYPE_COLORS[entry.entry_type] || "#94a3b8";
  return /* @__PURE__ */ React.createElement(
    "article",
    {
      className: "rounded-2xl overflow-hidden",
      style: {
        background: "rgba(255, 255, 255, 0.025)",
        border: "1px solid rgba(255, 255, 255, 0.08)"
      }
    },
    /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        className: "w-full flex items-start gap-3 p-4 text-left",
        style: { background: "transparent", border: "none", cursor: "pointer" },
        "aria-expanded": open
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 flex-wrap mb-1.5" }, /* @__PURE__ */ React.createElement(
        "span",
        {
          className: "num text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full uppercase",
          style: {
            background: typeColor + "22",
            border: `1px solid ${typeColor}55`,
            color: typeColor
          }
        },
        entry.entry_type
      ), /* @__PURE__ */ React.createElement("span", { className: "num text-xs", style: { color: "#94a3b8" } }, entry.entry_date), entry.instrument && /* @__PURE__ */ React.createElement("span", { className: "num text-xs px-2 py-0.5 rounded-full", style: { background: "rgba(94, 234, 212, 0.10)", color: "#5eead4", border: "1px solid rgba(94, 234, 212, 0.30)" } }, entry.instrument), entry.confidence_rating != null && /* @__PURE__ */ React.createElement("span", { className: "num text-xs px-2 py-0.5 rounded-full", style: { background: "rgba(251, 191, 36, 0.10)", color: "#fbbf24", border: "1px solid rgba(251, 191, 36, 0.30)" } }, entry.confidence_rating, "/5"), concept && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full num", style: { background: "rgba(167, 139, 250, 0.10)", color: "#c4b5fd", border: "1px solid rgba(167, 139, 250, 0.30)" } }, concept.charts.length, " CHARTS")), /* @__PURE__ */ React.createElement("h3", { className: "text-base md:text-lg m-0 leading-snug", style: { color: "#f5f9ff", fontFamily: "Oxanium, system-ui, sans-serif" } }, entry.title), entry.context && !open && /* @__PURE__ */ React.createElement("p", { className: "text-xs mt-1 m-0", style: { color: "#94a3b8", fontStyle: "italic" } }, entry.context)),
      /* @__PURE__ */ React.createElement("div", { className: "shrink-0 mt-1", style: { color: "#94a3b8" } }, open ? /* @__PURE__ */ React.createElement(ChevronDown, { className: "w-5 h-5" }) : /* @__PURE__ */ React.createElement(ChevronRight, { className: "w-5 h-5" }))
    ),
    open && /* @__PURE__ */ React.createElement("div", { className: "px-4 pb-4 space-y-4", style: { borderTop: "1px solid rgba(255, 255, 255, 0.06)" } }, /* @__PURE__ */ React.createElement("div", { className: "mt-3" }, /* @__PURE__ */ React.createElement(
      ReadAloudButton,
      {
        buildScript: () => buildJournalEntryScript(entry),
        label: "Read this entry aloud",
        size: "sm"
      }
    )), entry.context && /* @__PURE__ */ React.createElement("p", { className: "text-sm m-0", style: { color: "#94a3b8", fontStyle: "italic" } }, "Context: ", entry.context), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-1.5", style: { color: "#5eead4" } }, "Question"), /* @__PURE__ */ React.createElement("p", { className: "text-base font-semibold m-0", style: { color: "#f5f9ff" } }, entry.question)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-1.5", style: { color: "#5eead4" } }, "Answer"), /* @__PURE__ */ React.createElement("div", { className: "text-sm leading-relaxed whitespace-pre-wrap", style: { color: "#e2e8f0" } }, entry.answer)), entry.key_takeaways && /* @__PURE__ */ React.createElement("div", { className: "rule-callout" }, /* @__PURE__ */ React.createElement("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-2", style: { color: "#5eead4" } }, "Key Takeaways"), /* @__PURE__ */ React.createElement("div", { className: "text-sm leading-relaxed whitespace-pre-wrap", style: { color: "#e2e8f0" } }, entry.key_takeaways)), concept && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setChartOpen((o) => !o),
        className: "inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full",
        style: {
          background: "rgba(167, 139, 250, 0.10)",
          color: "#c4b5fd",
          border: "1px solid rgba(167, 139, 250, 0.30)",
          cursor: "pointer",
          fontFamily: "Oxanium, system-ui, sans-serif"
        }
      },
      /* @__PURE__ */ React.createElement(Eye, { className: "w-3.5 h-3.5" }),
      chartOpen ? "Hide" : "Show",
      " ",
      concept.charts.length,
      " teaching charts \xB7 ",
      concept.title
    ), chartOpen && /* @__PURE__ */ React.createElement("div", { className: "mt-3" }, /* @__PURE__ */ React.createElement(ChartGallery, { conceptId: "entry-" + (entry.id || "x"), charts: concept.charts }))), (entry.tags?.length || entry.pattern_type || entry.time_of_day) && /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-1.5 pt-2", style: { borderTop: "1px solid rgba(255, 255, 255, 0.04)" } }, entry.pattern_type && /* @__PURE__ */ React.createElement("span", { className: "num text-[11px] px-2 py-0.5 rounded-full inline-flex items-center gap-1", style: { background: "rgba(94, 234, 212, 0.10)", color: "#5eead4", border: "1px solid rgba(94, 234, 212, 0.20)" } }, /* @__PURE__ */ React.createElement(Target, { className: "w-2.5 h-2.5" }), entry.pattern_type), entry.time_of_day && /* @__PURE__ */ React.createElement("span", { className: "num text-[11px] px-2 py-0.5 rounded-full", style: { background: "rgba(255, 255, 255, 0.04)", color: "#94a3b8", border: "1px solid rgba(255, 255, 255, 0.08)" } }, entry.time_of_day), (entry.tags || []).map((t) => /* @__PURE__ */ React.createElement("span", { key: t, className: "text-[11px] px-2 py-0.5 rounded-full inline-flex items-center gap-1", style: { background: "rgba(167, 139, 250, 0.06)", color: "#c4b5fd", border: "1px solid rgba(167, 139, 250, 0.16)" } }, /* @__PURE__ */ React.createElement(Tag, { className: "w-2.5 h-2.5" }), t))))
  );
}
__name(MasteryEntryCard, "MasteryEntryCard");
export {
  MasteryEntryCard as default
};
