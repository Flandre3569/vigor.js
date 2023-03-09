"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ssrEntry = require("../ssr-entry.js");
require("react/jsx-runtime");
require("react");
require("@loadable/component");
require("react-dom/server");
function A() {
  return /* @__PURE__ */ ssrEntry.jsx("div", { children: "A 页面" });
}
exports.default = A;
