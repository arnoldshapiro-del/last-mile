var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const ABBREV_GUARDS = [
  /\bMr\.\s/g,
  /\bMrs\.\s/g,
  /\bMs\.\s/g,
  /\bDr\.\s/g,
  /\be\.g\.\s/g,
  /\bi\.e\.\s/g,
  /\bU\.S\.A?\.\s/g,
  /\bvs\.\s/g,
  /\bSt\.\s/g,
  /\bMt\.\s/g,
  /\betc\.\s/g,
  /\bNo\.\s/g,
  /\bInc\.\s/g,
  /\bATR\.\s/g,
  /\bMACD\.\s/g,
  /\bORB\.\s/g,
  /\bVWAP\.\s/g,
  /\bRTY\.\s/g
];
const PLACEHOLDER = "";
function splitIntoSentences(raw) {
  if (!raw || !raw.trim()) return [];
  let s = raw;
  ABBREV_GUARDS.forEach((re) => {
    s = s.replace(re, (m) => m.replace(/\./g, PLACEHOLDER));
  });
  const rough = s.split(/(?<=[.!?])\s+/);
  const restored = rough.map((t) => t.replace(new RegExp(PLACEHOLDER, "g"), "."));
  const out = [];
  for (const sentence of restored) {
    const trimmed = sentence.trim();
    if (!trimmed) continue;
    if (trimmed.length <= 200) {
      out.push(trimmed);
      continue;
    }
    out.push(...chunkLong(trimmed, 200));
  }
  return out;
}
__name(splitIntoSentences, "splitIntoSentences");
function chunkLong(text, maxLen) {
  const out = [];
  let remaining = text;
  while (remaining.length > maxLen) {
    let cut = remaining.lastIndexOf(", ", maxLen);
    if (cut < maxLen / 2) cut = remaining.lastIndexOf(" ", maxLen);
    if (cut < maxLen / 2) cut = maxLen;
    out.push(remaining.slice(0, cut).trim());
    remaining = remaining.slice(cut).trim();
  }
  if (remaining) out.push(remaining);
  return out;
}
__name(chunkLong, "chunkLong");
function estimateDurationMs(sentence, rate = 1, wordsPerSecond = 2.6) {
  const words = sentence.trim().split(/\s+/).length || 1;
  return Math.max(400, Math.round(words / (wordsPerSecond * rate) * 1e3));
}
__name(estimateDurationMs, "estimateDurationMs");
export {
  estimateDurationMs,
  splitIntoSentences
};
