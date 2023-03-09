"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ssrEntry = require("../ssr-entry.js");
require("react/jsx-runtime");
require("react");
require("@loadable/component");
require("react-dom/server");
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components);
  return ssrEntry.jsx(_components.h1, {
    children: "123123"
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? ssrEntry.jsx(MDXLayout, Object.assign({}, props, {
    children: ssrEntry.jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
exports.default = MDXContent;
