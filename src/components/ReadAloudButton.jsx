var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsx, jsxs } from "react/jsx-runtime";
import { Headphones } from "lucide-react";
import { getNarrator } from "../lib/narrator";
function ReadAloudButton({ buildScript, label = "Read this aloud", size = "md" }) {
  const narrator = getNarrator();
  const handleClick = /* @__PURE__ */ __name(async () => {
    const script = buildScript();
    await narrator.awaitReady();
    narrator.setScript(script);
    setTimeout(() => narrator.play(), 100);
  }, "handleClick");
  const padding = size === "sm" ? "6px 12px" : "8px 16px";
  const fontSize = size === "sm" ? 12 : 13;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick: handleClick,
      className: "inline-flex items-center gap-2 rounded-full no-underline",
      style: {
        padding,
        fontSize,
        background: "rgba(20, 184, 166, 0.12)",
        border: "1px solid rgba(20, 184, 166, 0.40)",
        color: "#5eead4",
        fontFamily: "Oxanium, system-ui, sans-serif",
        fontWeight: 600,
        cursor: "pointer"
      },
      children: [
        /* @__PURE__ */ jsx(Headphones, { className: size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4" }),
        label
      ]
    }
  );
}
__name(ReadAloudButton, "ReadAloudButton");
export {
  ReadAloudButton
};
