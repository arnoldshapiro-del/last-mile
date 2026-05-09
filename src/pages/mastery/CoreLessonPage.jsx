var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Clock, ArrowLeft, ArrowRight, Target, ChevronDown, ChevronRight, HelpCircle } from "lucide-react";
import { coreLessons, principles } from "../../data/mastery";
import { ChartGallery } from "../../components/charts/day-2026-05-07/ChartGallery";
import { CORE_LESSON_CHARTS } from "../../components/charts/mastery";
import { ReadAloudButton } from "../../components/ReadAloudButton";
import { buildCoreLessonScript } from "../../lib/narrator";
function CoreLessonPage() {
  const { lessonId } = useParams();
  const [openUnits, setOpenUnits] = useState(/* @__PURE__ */ new Set([0]));
  const idx = coreLessons.findIndex((l) => l.id === lessonId);
  if (idx === -1) return /* @__PURE__ */ jsx(Navigate, { to: "/mastery/lessons", replace: true });
  const lesson = coreLessons[idx];
  const prev = idx > 0 ? coreLessons[idx - 1] : null;
  const next = idx < coreLessons.length - 1 ? coreLessons[idx + 1] : null;
  const charts = CORE_LESSON_CHARTS[lesson.id];
  const toggleUnit = /* @__PURE__ */ __name((i) => {
    setOpenUnits((prev2) => {
      const n = new Set(prev2);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  }, "toggleUnit");
  return /* @__PURE__ */ jsxs("article", { className: "max-w-[860px] mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxs("header", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/mastery/lessons",
          className: "inline-flex items-center gap-1.5 text-xs no-underline",
          style: { color: "#94a3b8" },
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3 h-3" }),
            "All Core Lessons"
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxs(
          "span",
          {
            className: "num text-xs px-2.5 py-1 rounded-full",
            style: {
              background: "rgba(20, 184, 166, 0.12)",
              color: "#5eead4",
              border: "1px solid rgba(20, 184, 166, 0.30)"
            },
            children: [
              "Lesson ",
              String(lesson.number).padStart(2, "0")
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1 text-xs",
            style: { color: "#94a3b8" },
            children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3" }),
              /* @__PURE__ */ jsx("span", { className: "num", children: lesson.duration })
            ]
          }
        ),
        charts && /* @__PURE__ */ jsxs(
          "span",
          {
            className: "text-xs px-2 py-0.5 rounded-full num",
            style: {
              background: "rgba(94, 234, 212, 0.10)",
              color: "#5eead4",
              border: "1px solid rgba(94, 234, 212, 0.30)"
            },
            children: [
              charts.length,
              " teaching charts"
            ]
          }
        ),
        lesson.teachingUnits && /* @__PURE__ */ jsxs(
          "span",
          {
            className: "text-xs px-2 py-0.5 rounded-full num",
            style: {
              background: "rgba(167, 139, 250, 0.10)",
              color: "#c4b5fd",
              border: "1px solid rgba(167, 139, 250, 0.30)"
            },
            children: [
              lesson.teachingUnits.length,
              " Q&A units"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl m-0 leading-tight", children: lesson.title }),
      /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed m-0", style: { color: "#cbd5e1" }, children: lesson.summary }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        ReadAloudButton,
        {
          buildScript: () => buildCoreLessonScript(lesson),
          label: "Read this lesson aloud"
        }
      ) })
    ] }),
    charts && /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5 md:p-6",
        style: {
          background: "linear-gradient(135deg, rgba(94, 234, 212, 0.06) 0%, rgba(15, 23, 42, 0.40) 100%)",
          border: "1px solid rgba(94, 234, 212, 0.20)"
        },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl m-0 mb-3 leading-tight", children: "Visual Teaching" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed mb-4", style: { color: "#cbd5e1" }, children: "Six charts that teach the lesson without a single paragraph. Scroll horizontally \u2014 each chart is a self-contained teaching example with annotations, verdict, and caption." }),
          /* @__PURE__ */ jsx(ChartGallery, { conceptId: "lesson-" + lesson.id, charts })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "space-y-5", children: lesson.sections.map((s, i) => /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5 md:p-6",
        style: {
          background: "rgba(255, 255, 255, 0.025)",
          border: "1px solid rgba(255, 255, 255, 0.08)"
        },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl m-0 mb-3 leading-tight", children: s.heading }),
          /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed m-0", style: { color: "#e2e8f0" }, children: s.body }),
          s.callout && /* @__PURE__ */ jsxs(
            "div",
            {
              className: `mt-4 ${s.callout.type === "principle" ? "principle-callout" : s.callout.type === "warning" ? "warning-callout" : "rule-callout"}`,
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "text-[10px] uppercase tracking-[0.22em] num mb-1",
                    style: {
                      color: s.callout.type === "principle" ? "#fbbf24" : s.callout.type === "warning" ? "#fca5a5" : "#5eead4"
                    },
                    children: s.callout.type === "principle" ? "PRINCIPLE" : s.callout.type === "warning" ? "WARNING" : "RULE"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "text-sm leading-relaxed", style: { color: "#f5f9ff" }, children: s.callout.text })
              ]
            }
          )
        ]
      },
      i
    )) }),
    lesson.teachingUnits && lesson.teachingUnits.length > 0 && /* @__PURE__ */ jsxs("section", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-4 h-4", style: { color: "#c4b5fd" } }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl m-0", children: "Teaching Q&A" })
      ] }),
      lesson.teachingUnits.map((u, i) => {
        const open = openUnits.has(i);
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
                  onClick: () => toggleUnit(i),
                  className: "w-full flex items-start gap-3 p-5 text-left",
                  style: { background: "transparent", border: "none", cursor: "pointer" },
                  "aria-expanded": open,
                  children: [
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: "num shrink-0 mt-0.5",
                        style: { color: "#c4b5fd", fontSize: "0.85rem", fontWeight: 700 },
                        children: [
                          "Q",
                          i + 1
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsx("h3", { className: "text-base md:text-lg m-0 leading-snug", style: { color: "#f5f9ff" }, children: u.question }) }),
                    /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-1", style: { color: "#94a3b8" }, children: open ? /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" }) })
                  ]
                }
              ),
              open && /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "px-5 pb-5 pl-[3.5rem] space-y-3",
                  style: { borderTop: "1px solid rgba(255, 255, 255, 0.06)" },
                  children: [
                    /* @__PURE__ */ jsx(
                      "p",
                      {
                        className: "text-base leading-relaxed mt-4 m-0",
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
          i
        );
      })
    ] }),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5 md:p-6",
        style: {
          background: "rgba(20, 184, 166, 0.06)",
          border: "1px solid rgba(20, 184, 166, 0.25)"
        },
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base m-0 mb-3", style: { color: "#5eead4" }, children: "Key Rules from This Lesson" }),
          /* @__PURE__ */ jsx("ul", { className: "list-none p-0 m-0 space-y-2", children: lesson.keyRules.map((r, i) => /* @__PURE__ */ jsxs(
            "li",
            {
              className: "flex gap-3 text-sm leading-relaxed",
              style: { color: "#e2e8f0" },
              children: [
                /* @__PURE__ */ jsx("span", { className: "num shrink-0", style: { color: "#5eead4" }, children: String(i + 1).padStart(2, "0") }),
                /* @__PURE__ */ jsx("span", { children: r })
              ]
            },
            i
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "rounded-2xl p-5",
        style: {
          background: "rgba(251, 191, 36, 0.06)",
          border: "1px solid rgba(251, 191, 36, 0.25)"
        },
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm m-0 mb-3 uppercase tracking-[0.2em]", style: { color: "#fbbf24" }, children: "Principles Reinforced" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: lesson.principlesUsed.map((n) => {
            const p = principles.find((x) => x.number === n);
            if (!p) return null;
            return /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/mastery/principles",
                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium no-underline",
                style: {
                  background: "rgba(251, 191, 36, 0.10)",
                  border: "1px solid rgba(251, 191, 36, 0.30)",
                  color: "#fcd34d",
                  fontFamily: "Oxanium, system-ui, sans-serif"
                },
                children: [
                  /* @__PURE__ */ jsx(Target, { className: "w-3 h-3" }),
                  /* @__PURE__ */ jsx("span", { className: "num", children: String(n).padStart(2, "0") }),
                  /* @__PURE__ */ jsx("span", { children: p.title })
                ]
              },
              n
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("nav", { className: "flex items-stretch gap-3 pt-4", children: [
      prev ? /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/mastery/lesson/${prev.id}`,
          className: "flex-1 mastery-card no-underline",
          style: { color: "inherit" },
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-1", style: { color: "#94a3b8" }, children: "Previous" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 shrink-0", style: { color: "#5eead4" } }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold truncate", children: prev.title })
            ] })
          ]
        }
      ) : /* @__PURE__ */ jsx("div", { className: "flex-1" }),
      next ? /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/mastery/lesson/${next.id}`,
          className: "flex-1 mastery-card no-underline text-right",
          style: { color: "inherit" },
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-1", style: { color: "#94a3b8" }, children: "Next" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 justify-end", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold truncate", children: next.title }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 shrink-0", style: { color: "#5eead4" } })
            ] })
          ]
        }
      ) : /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/mastery/checklists",
          className: "flex-1 mastery-card no-underline text-right",
          style: { color: "inherit" },
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] num mb-1", style: { color: "#94a3b8" }, children: "Up Next" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 justify-end", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "Master Checklists" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 shrink-0", style: { color: "#5eead4" } })
            ] })
          ]
        }
      )
    ] })
  ] });
}
__name(CoreLessonPage, "CoreLessonPage");
export default CoreLessonPage;