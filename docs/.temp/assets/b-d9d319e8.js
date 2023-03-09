"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ssrEntry = require("../ssr-entry.js");
require("react/jsx-runtime");
require("react");
require("@loadable/component");
require("react-dom/server");
function B() {
  return /* @__PURE__ */ ssrEntry.jsx("div", { children: "B 页面" });
}
exports.default = B;
