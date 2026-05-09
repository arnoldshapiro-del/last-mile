var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
const VOICE_PROFILES = [
  {
    id: "aria-warm",
    label: "Aria \u2014 warm US female",
    blurb: "Microsoft Aria (Edge) \xB7 Samantha (mac) \xB7 Google US English (Chrome). Warm, conversational.",
    cascade: [
      "Microsoft Aria Online (Natural) - English (United States)",
      "Microsoft Zira - English (United States)",
      "Samantha",
      "Google US English",
      /^Aria/i,
      (v) => v.lang.startsWith("en-US") && /female|woman/i.test(v.name)
    ]
  },
  {
    id: "jenny-conversational",
    label: "Jenny \u2014 friendly US female",
    blurb: "Microsoft Jenny \xB7 Ava (mac) \xB7 Google US English. Bright, conversational pacing.",
    cascade: [
      "Microsoft Jenny Online (Natural) - English (United States)",
      "Ava (Premium)",
      "Ava (Enhanced)",
      "Ava",
      "Allison",
      "Google US English",
      (v) => v.lang.startsWith("en-US") && /female|woman|jenny/i.test(v.name)
    ]
  },
  {
    id: "emma-multilingual",
    label: "Emma \u2014 clear US female",
    blurb: "Microsoft Emma Multilingual (Edge) \xB7 Zoe (mac) \xB7 Susan. Crisp, neutral, easy to follow at speed.",
    cascade: [
      "Microsoft EmmaMultilingual Online (Natural) - English (United States)",
      "Microsoft Emma Online (Natural) - English (United States)",
      "Zoe (Premium)",
      "Zoe",
      "Susan",
      "Microsoft Zira - English (United States)",
      (v) => v.lang.startsWith("en-US") && /female|woman|emma|zoe/i.test(v.name)
    ]
  },
  {
    id: "serena-uk",
    label: "Serena \u2014 British female",
    blurb: "Microsoft Sonia (Edge) \xB7 Serena (mac) \xB7 Google UK English Female. Calm UK accent.",
    cascade: [
      "Microsoft Sonia Online (Natural) - English (United Kingdom)",
      "Microsoft Hazel - English (Great Britain)",
      "Serena (Premium)",
      "Serena",
      "Kate",
      "Google UK English Female",
      (v) => v.lang.startsWith("en-GB") && /female|woman/i.test(v.name)
    ]
  },
  {
    id: "andrew-male",
    label: "Andrew \u2014 calm US male",
    blurb: "Microsoft Andrew (Edge) \xB7 Alex (mac) \xB7 Google US English. Lower-register option.",
    cascade: [
      "Microsoft AndrewMultilingual Online (Natural) - English (United States)",
      "Microsoft Andrew Online (Natural) - English (United States)",
      "Alex",
      "Microsoft David - English (United States)",
      "Google US English",
      (v) => v.lang.startsWith("en-US") && /male/i.test(v.name) && !/female/i.test(v.name)
    ]
  }
];
const DEFAULT_PROFILE_ID = "aria-warm";
async function ensureVoicesLoaded(timeoutMs = 2500) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return [];
  const existing = window.speechSynthesis.getVoices();
  if (existing.length > 0) return existing;
  return new Promise((resolve) => {
    const t = setTimeout(() => resolve(window.speechSynthesis.getVoices()), timeoutMs);
    const handler = /* @__PURE__ */ __name(() => {
      clearTimeout(t);
      window.speechSynthesis.removeEventListener("voiceschanged", handler);
      resolve(window.speechSynthesis.getVoices());
    }, "handler");
    window.speechSynthesis.addEventListener("voiceschanged", handler);
  });
}
__name(ensureVoicesLoaded, "ensureVoicesLoaded");
function pickVoiceForProfile(profileId, voices) {
  const profile = VOICE_PROFILES.find((p) => p.id === profileId);
  if (!profile || voices.length === 0) return null;
  for (const matcher of profile.cascade) {
    const v = voices.find(
      (v2) => typeof matcher === "string" ? v2.name === matcher : matcher instanceof RegExp ? matcher.test(v2.name) : matcher(v2)
    );
    if (v) return v;
  }
  return voices.find((v) => v.default) || voices[0] || null;
}
__name(pickVoiceForProfile, "pickVoiceForProfile");
export {
  DEFAULT_PROFILE_ID,
  VOICE_PROFILES,
  ensureVoicesLoaded,
  pickVoiceForProfile
};
