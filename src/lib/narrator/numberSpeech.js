var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const TEENS = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
function intToWords(n) {
  if (n < 0) return "negative " + intToWords(-n);
  if (n < 10) return ONES[n];
  if (n < 20) return TEENS[n - 10];
  if (n < 100) {
    const t = Math.floor(n / 10), r = n % 10;
    return r === 0 ? TENS[t] : `${TENS[t]}-${ONES[r]}`;
  }
  if (n < 1e3) {
    const h = Math.floor(n / 100), r = n % 100;
    return r === 0 ? `${ONES[h]} hundred` : `${ONES[h]} hundred ${intToWords(r)}`;
  }
  if (n < 1e6) {
    const k = Math.floor(n / 1e3), r = n % 1e3;
    return r === 0 ? `${intToWords(k)} thousand` : `${intToWords(k)} thousand ${intToWords(r)}`;
  }
  return n.toString();
}
__name(intToWords, "intToWords");
function speakPrice(p) {
  if (!isFinite(p)) return "";
  const rounded = Math.round(p * 100) / 100;
  const whole = Math.trunc(rounded);
  const frac = Math.round(Math.abs(rounded - whole) * 100);
  const wholeWords = intToWords(whole);
  if (frac === 0) return wholeWords;
  if (frac % 10 === 0) {
    return `${wholeWords} point ${ONES[frac / 10]}`;
  }
  return `${wholeWords} point ${ONES[Math.floor(frac / 10)]} ${ONES[frac % 10]}`;
}
__name(speakPrice, "speakPrice");
function speakPoints(p, unit = "point") {
  const rounded = Math.round(p * 100) / 100;
  const whole = Math.trunc(rounded);
  const frac = Math.round(Math.abs(rounded - whole) * 100);
  const word = whole === 1 && frac === 0 ? unit : `${unit}s`;
  if (frac === 0) return `${intToWords(whole)} ${word}`;
  return `${intToWords(whole)} point ${frac} ${word}`;
}
__name(speakPoints, "speakPoints");
function speakBarIndex(i) {
  const ordinals = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
  if (i < 0) return "the bar";
  if (i < ordinals.length) return `the ${ordinals[i]} bar`;
  return `bar ${i + 1}`;
}
__name(speakBarIndex, "speakBarIndex");
function expandTraderTerms(s) {
  return s.replace(/\bR:R\b/g, "risk-to-reward").replace(/\bR\/R\b/g, "risk-to-reward").replace(/\bMACD\b/g, "M-A-C-D").replace(/\bATR\b/g, "A-T-R").replace(/\bORB\b/g, "O-R-B").replace(/\bVWAP\b/g, "V-WAP").replace(/\bOBv\b/g, "O-B-V").replace(/\bHL\b/g, "higher low").replace(/\bLH\b/g, "lower high").replace(/\bLL\b/g, "lower low").replace(/\bHH\b/g, "higher high").replace(/\bRTY\b/g, "Russell").replace(/\bM2K\b/g, "Micro Russell").replace(/\bES\b/g, "E-S").replace(/\bNQ\b/g, "N-Q").replace(/\bMNQ\b/g, "Micro N-Q").replace(/\bMES\b/g, "Micro E-S").replace(/\bPDH\b/g, "prior day high").replace(/\bPDL\b/g, "prior day low").replace(/\b50%\b/g, "fifty percent").replace(/(\d+)%/g, (_m, n) => `${intToWords(Number(n))} percent`).replace(/(\d+(?:\.\d+)?)pt\b/g, (_m, n) => speakPoints(parseFloat(n), "point")).replace(/—/g, ", ");
}
__name(expandTraderTerms, "expandTraderTerms");
export {
  expandTraderTerms,
  speakBarIndex,
  speakPoints,
  speakPrice
};
