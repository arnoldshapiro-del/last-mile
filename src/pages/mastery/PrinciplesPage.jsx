var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronDown, ChevronRight, Target, HelpCircle } from "lucide-react";
import { principles } from "../../data/mastery";
import { ChartGallery } from "../../components/charts/day-2026-05-07/ChartGallery";
import { PRINCIPLE_CHARTS } from "../../components/charts/mastery";
import { ReadAloudButton } from "../../components/ReadAloudButton";
import { buildPrincipleScript } from "../../lib/narrator";
const pillarColors = {
  structure: { bg: "rgba(20, 184, 166, 0.10)", border: "rgba(20, 184, 166, 0.40)", text: "#5eead4", label: "STRUCTURE" },
  context: { bg: "rgba(99, 102, 241, 0.10)", border: "rgba(99, 102, 241, 0.40)", text: "#a5b4fc", label: "CONTEXT" },
  confirmation: { bg: "rgba(168, 85, 247, 0.10)", border: "rgba(168, 85, 247, 0.40)", text: "#c4b5fd", label: "CONFIRMATION" },
  execution: { bg: "rgba(20, 184, 166, 0.10)", border: "rgba(20, 184, 166, 0.40)", text: "#5eead4", label: "EXECUTION" },
  psychology: { bg: "rgba(251, 191, 36, 0.10)", border: "rgba(251, 191, 36, 0.40)", text: "#fcd34d", label: "PSYCHOLOGY" }
};
function PrinciplesPage() {
  const [expanded, setExpanded] = useState(/* @__PURE__ */ new Set([1]));
  const [openUnits, setOpenUnits] = useState(/* @__PURE__ */ new Set());
  const toggle = /* @__PURE__ */ __name((n) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });
  }, "toggle");
  const toggleUnit = /* @__PURE__ */ __name((key) => {
    setOpenUnits((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, "toggleUnit");
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5 md:p-6",
        style: {
          background: "linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(15, 23, 42, 0.40) 100%)",
          border: "1px solid rgba(251, 191, 36, 0.25)"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "flex items-center justify-center w-10 h-10 rounded-xl",
                style: {
                  background: "rgba(251, 191, 36, 0.15)",
                  border: "1px solid rgba(251, 191, 36, 0.35)"
                },
                children: /* @__PURE__ */ jsx(Target, { className: "w-5 h-5", style: { color: "#fbbf24" } })
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "text-xl m-0", children: "The Spine" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed m-0", style: { color: "#cbd5e1" }, children: "These 10 principles are the constants. Every daily lesson reinforces one or more of them. Every core lesson goes deeper into one. Every checklist item references one. Click any principle to expand it \u2014 you'll find a deep teaching dive, six teaching charts, and Q&A units exactly like the daily lessons." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: principles.map((p) => {
      const colors = pillarColors[p.pillar];
      const isOpen = expanded.has(p.number);
      const charts = PRINCIPLE_CHARTS[p.number];
      return /* @__PURE__ */ jsxs(
        "article",
        {
          className: "rounded-2xl overflow-hidden",
          style: {
            background: "rgba(255, 255, 255, 0.025)",
            border: "1px solid rgba(255, 255, 255, 0.08)"
          },
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => toggle(p.number),
                className: "w-full flex items-start gap-4 p-5 text-left",
                style: { background: "transparent", border: "none", cursor: "pointer" },
                "aria-expanded": isOpen,
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "num flex items-center justify-center shrink-0 rounded-xl",
                      style: {
                        width: "3.5rem",
                        height: "3.5rem",
                        background: "linear-gradient(135deg, #14b8a6, #0d9488)",
                        color: "#070c18",
                        fontWeight: 700,
                        fontSize: "1.5rem",
                        boxShadow: "0 4px 16px rgba(20, 184, 166, 0.30)"
                      },
                      children: String(p.number).padStart(2, "0")
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1.5", children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl m-0 leading-tight", children: p.title }),
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "text-[10px] tracking-[0.2em] px-2 py-0.5 rounded-full num",
                          style: {
                            background: colors.bg,
                            border: `1px solid ${colors.border}`,
                            color: colors.text
                          },
                          children: colors.label
                        }
                      ),
                      charts && /* @__PURE__ */ jsxs(
                        "span",
                        {
                          className: "text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full num",
                          style: {
                            background: "rgba(94, 234, 212, 0.10)",
                            border: "1px solid rgba(94, 234, 212, 0.30)",
                            color: "#5eead4"
                          },
                          children: [
                            charts.length,
                            " CHARTS"
                          ]
                        }
                      ),
                      p.teachingUnits && /* @__PURE__ */ jsxs(
                        "span",
                        {
                          className: "text-[10px] tracking-[0.18em] px-2 py-0.5 rounded-full num",
                          style: {
                            background: "rgba(167, 139, 250, 0.10)",
                            border: "1px solid rgba(167, 139, 250, 0.30)",
                            color: "#c4b5fd"
                          },
                          children: [
                            p.teachingUnits.length,
                            " Q&A"
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed m-0", style: { color: "#cbd5e1" }, children: p.short })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-1", style: { color: "#94a3b8" }, children: isOpen ? /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" }) })
                ]
              }
            ),
            isOpen && /* @__PURE__ */ jsxs(
              "div",
              {
                className: "px-5 pb-5 pl-[5.25rem] space-y-5",
                style: {
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)"
                },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
                    ReadAloudButton,
                    {
                      buildScript: () => buildPrincipleScript(p),
                      label: `Read Principle ${p.number} aloud`,
                      size: "sm"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "text-base leading-relaxed m-0",
                      style: { color: "#e2e8f0" },
                      children: p.body
                    }
                  ),
                  charts && /* @__PURE__ */ jsx(ChartGallery, { conceptId: "principle-" + p.number, charts }),
                  p.teachingUnits && p.teachingUnits.length > 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-3 mt-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(HelpCircle, { className: "w-3.5 h-3.5", style: { color: "#c4b5fd" } }),
                      /* @__PURE__ */ jsxs(
                        "span",
                        {
                          className: "text-[10px] uppercase tracking-[0.22em] num",
                          style: { color: "#c4b5fd", fontFamily: "Oxanium, system-ui, sans-serif" },
                          children: [
                            "Teaching Q&A \xB7 ",
                            p.teachingUnits.length,
                            " units"
                          ]
                        }
                      )
                    ] }),
                    p.teachingUnits.map((u, i) => {
                      const key = `${p.number}-${i}`;
                      const open = openUnits.has(key);
                      return /* @__PURE__ */ jsxs(
                        "div",
                        {
                          className: "rounded-2xl overflow-hidden",
                          style: {
                            background: "rgba(255, 255, 255, 0.025)",
                            border: "1px solid rgba(255, 255, 255, 0.08)"
                          },
                          children: [
                            /* @__PURE__ */ jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => toggleUnit(key),
                                className: "w-full flex items-start gap-3 p-4 text-left",
                                style: { background: "transparent", border: "none", cursor: "pointer" },
                                "aria-expanded": open,
                                children: [
                                  /* @__PURE__ */ jsxs(
                                    "div",
                                    {
                                      className: "num shrink-0 mt-0.5",
                                      style: { color: "#c4b5fd", fontSize: "0.8rem", fontWeight: 700 },
                                      children: [
                                        "Q",
                                        i + 1
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsx("h4", { className: "text-sm md:text-base m-0 leading-snug", style: { color: "#f5f9ff" }, children: u.question }) }),
                                  /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-0.5", style: { color: "#94a3b8" }, children: open ? /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" }) })
                                ]
                              }
                            ),
                            open && /* @__PURE__ */ jsxs(
                              "div",
                              {
                                className: "px-4 pb-4 pl-12 space-y-3",
                                style: { borderTop: "1px solid rgba(255, 255, 255, 0.06)" },
                                children: [
                                  /* @__PURE__ */ jsx(
                                    "p",
                                    {
                                      className: "text-sm leading-relaxed mt-3 m-0",
                                      style: { color: "#e2e8f0" },
                                      children: u.answer
                                    }
                                  ),
                                  u.rules.length > 0 && /* @__PURE__ */ jsxs("div", { className: "rule-callout", children: [
                                    /* @__PURE__ */ jsx(
                                      "div",
                                      {
                                        className: "text-[10px] uppercase tracking-[0.22em] num mb-2",
                                        style: { color: "#5eead4" },
                                        children: "Rules Extracted"
                                      }
                                    ),
                                    /* @__PURE__ */ jsx("ul", { className: "list-none p-0 m-0 space-y-1.5", children: u.rules.map((r, j) => /* @__PURE__ */ jsxs(
                                      "li",
                                      {
                                        className: "text-sm leading-relaxed flex gap-2",
                                        style: { color: "#e2e8f0" },
                                        children: [
                                          /* @__PURE__ */ jsx("span", { style: { color: "#5eead4" }, children: "\u2022" }),
                                          /* @__PURE__ */ jsx("span", { children: r })
                                        ]
                                      },
                                      j
                                    )) })
                                  ] })
                                ]
                              }
                            )
                          ]
                        },
                        key
                      );
                    })
                  ] })
                ]
              }
            )
          ]
        },
        p.number
      );
    }) }),
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "rounded-2xl p-5 text-center",
        style: {
          background: "rgba(20, 184, 166, 0.06)",
          border: "1px solid rgba(20, 184, 166, 0.25)"
        },
        children: /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed m-0", style: { color: "#cbd5e1" }, children: "Re-read these before every trading day. Re-read them after every loss. The principles do not change; the discipline of applying them is the entire game." })
      }
    )
  ] });
}
__name(PrinciplesPage, "PrinciplesPage");
export default PrinciplesPage;