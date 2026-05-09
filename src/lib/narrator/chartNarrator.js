var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { speakPrice, speakPoints, speakBarIndex, expandTraderTerms } from "./numberSpeech";
function computeStats(candles) {
  let high = -Infinity, low = Infinity;
  let bullishBars = 0, bearishBars = 0;
  let largestBar = { i: 0, bullish: true, size: 0 };
  candles.forEach((c, i) => {
    if (c.h > high) high = c.h;
    if (c.l < low) low = c.l;
    const bullish = c.c >= c.o;
    if (bullish) bullishBars++;
    else bearishBars++;
    const size = Math.abs(c.c - c.o);
    if (size > largestBar.size) largestBar = { i, bullish, size };
  });
  const firstClose = candles[0]?.c ?? 0;
  const lastClose = candles[candles.length - 1]?.c ?? 0;
  const drift = lastClose - firstClose;
  const netDirection = Math.abs(drift) < (high - low) * 0.2 ? "mixed" : drift > 0 ? "up" : "down";
  return {
    high,
    low,
    range: high - low,
    bars: candles.length,
    bullishBars,
    bearishBars,
    netDirection,
    largestBar
  };
}
__name(computeStats, "computeStats");
function findLevels(annotations = []) {
  const levels = annotations.filter((a) => a.type === "level").map((a) => a);
  const trendlines = annotations.filter((a) => a.type === "trendline").map((a) => a);
  const arrows = annotations.filter((a) => a.type === "arrow").map((a) => a);
  const badges = annotations.filter((a) => a.type === "badge").map((a) => a);
  const zones = annotations.filter((a) => a.type === "zone").map((a) => a);
  return { levels, trendlines, arrows, badges, zones };
}
__name(findLevels, "findLevels");
function verdictPhrase(v) {
  if (!v) return { phrase: "", emphasize: false };
  const label = v.label;
  switch (v.type) {
    case "good":
      return { phrase: `The verdict on this one is good. ${label}.`, emphasize: true };
    case "bad":
      return { phrase: `Verdict, this one is a fail. ${label}.`, emphasize: true };
    case "warn":
      return { phrase: `Verdict, with caution. ${label}.`, emphasize: true };
    case "info":
      return { phrase: `The reference point here. ${label}.`, emphasize: false };
    default:
      return { phrase: label, emphasize: false };
  }
}
__name(verdictPhrase, "verdictPhrase");
function chartToNarration(chart, opts = {}) {
  const { candles, annotations = [], verdict, caption, title } = chart;
  const stats = computeStats(candles);
  const { levels, trendlines, arrows, badges } = findLevels(annotations);
  const items = [];
  const { index, total } = opts;
  const intro = total ? `Chart ${(index ?? 0) + 1} of ${total}. ${title}.` : `${title}.`;
  items.push({ text: expandTraderTerms(intro), gapAfterMs: 600, section: "setup" });
  const directionPhrase = stats.netDirection === "up" ? `with price drifting higher across the session` : stats.netDirection === "down" ? `with price drifting lower across the session` : `with price oscillating in a range`;
  items.push({
    text: expandTraderTerms(
      `${stats.bars} bars on screen, ${directionPhrase}. Price runs from ${speakPrice(stats.low)} to ${speakPrice(stats.high)}, a range of about ${speakPoints(stats.range)}.`
    ),
    gapAfterMs: 500,
    section: "context"
  });
  if (levels.length > 0) {
    const levelDescriptions = levels.slice(0, 3).map((l) => {
      const labelText = l.label ? l.label.replace(/\d+\.\d+/g, "") : "a key level";
      return `${labelText.trim() || "a key level"} at ${speakPrice(l.price)}`;
    }).join(", ");
    items.push({
      text: expandTraderTerms(`Notice the marked levels \u2014 ${levelDescriptions}.`),
      gapAfterMs: 700,
      section: "observe"
    });
  }
  if (trendlines.length > 0) {
    const tl = trendlines[0];
    items.push({
      text: expandTraderTerms(
        `A trendline is drawn ${tl.label ? `labeled ${tl.label.toLowerCase()}` : ""}, connecting the structure across the chart.`
      ),
      gapAfterMs: 500,
      section: "observe"
    });
  }
  if (badges.length > 0) {
    const interesting = badges.slice(0, 3);
    interesting.forEach((b) => {
      items.push({
        text: expandTraderTerms(`At ${speakBarIndex(b.at.i)}, the chart marks: ${b.text}.`),
        gapAfterMs: 400,
        section: "observe"
      });
    });
  }
  if (verdict && verdict.type === "good" && arrows.length > 0) {
    items.push({
      text: "Now \u2014 what would you expect to happen next?",
      gapAfterMs: 1500,
      emphasize: true,
      section: "predict"
    });
  } else if (verdict && verdict.type === "bad") {
    items.push({
      text: "Now \u2014 watch closely. This one is a trap.",
      gapAfterMs: 1500,
      emphasize: true,
      section: "predict"
    });
  } else if (verdict && verdict.type === "warn") {
    items.push({
      text: "Now \u2014 the question is whether to take this trade or pass.",
      gapAfterMs: 1200,
      emphasize: true,
      section: "predict"
    });
  }
  if (verdict) {
    const { phrase, emphasize } = verdictPhrase(verdict);
    if (phrase) items.push({ text: expandTraderTerms(phrase), gapAfterMs: 700, emphasize, section: "verdict" });
  }
  if (arrows.length > 0) {
    const a = arrows[0];
    const direction = a.direction === "up" ? "long" : "short";
    const where = `at ${speakPrice(a.at.price)}`;
    items.push({
      text: expandTraderTerms(
        `The marked entry is a ${direction} trade ${where}${a.label ? `, labeled ${a.label.toLowerCase()}` : ""}.`
      ),
      gapAfterMs: 500,
      section: "verdict"
    });
  }
  if (caption) {
    items.push({
      text: expandTraderTerms(`The takeaway. ${caption}`),
      gapAfterMs: 1e3,
      emphasize: true,
      pitch: 1.04,
      rate: 0.95,
      section: "lesson"
    });
  }
  return items;
}
__name(chartToNarration, "chartToNarration");
function chartGalleryToNarration(charts, galleryTitle) {
  if (!charts || charts.length === 0) return [];
  const items = [];
  if (galleryTitle) {
    items.push({
      text: expandTraderTerms(`Now stepping through ${charts.length} teaching ${charts.length === 1 ? "chart" : "charts"} on ${galleryTitle}.`),
      gapAfterMs: 800,
      section: "gallery-intro"
    });
  }
  charts.forEach((c, i) => {
    items.push(...chartToNarration(c, { index: i, total: charts.length }));
  });
  if (charts.length > 1) {
    items.push({
      text: "That completes this chart series.",
      gapAfterMs: 600,
      section: "gallery-outro"
    });
  }
  return items;
}
__name(chartGalleryToNarration, "chartGalleryToNarration");
export {
  chartGalleryToNarration,
  chartToNarration
};
