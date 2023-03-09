"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ssrEntry = require("../ssr-entry.js");
require("react/jsx-runtime");
require("react");
require("@loadable/component");
require("react-dom/server");
function Index() {
  return /* @__PURE__ */ ssrEntry.jsx("div", { children: /* @__PURE__ */ ssrEntry.jsx("h1", { children: "Index页面" }) });
}
exports.default = Index;
