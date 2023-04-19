"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const server = require("react-dom/server");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const jsxRuntime__namespace = /* @__PURE__ */ _interopNamespaceDefault(jsxRuntime);
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
const Fragment = jsxRuntime__namespace.Fragment;
const jsx = jsxRuntime__namespace.jsx;
const jsxs = jsxRuntime__namespace.jsxs;
/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes2, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(
      branches[i],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes2.forEach((route, index2) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index2) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index2) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n, i) => n === b2[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a2[a2.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index2) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
class ErrorResponse {
  constructor(status, statusText, data) {
    this.status = status;
    this.statusText = statusText || "";
    this.data = data;
  }
}
function isRouteErrorResponse(e) {
  return e instanceof ErrorResponse;
}
const validActionMethods = /* @__PURE__ */ new Set(["POST", "PUT", "PATCH", "DELETE"]);
/* @__PURE__ */ new Set(["GET", "HEAD", ...validActionMethods]);
/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}
const is = typeof Object.is === "function" ? Object.is : isPolyfill;
const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = React__namespace;
let didWarnOld18Alpha = false;
let didWarnUncachedGetSnapshot = false;
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnOld18Alpha) {
      if ("startTransition" in React__namespace) {
        didWarnOld18Alpha = true;
        console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
      }
    }
  }
  const value = getSnapshot();
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();
      if (!is(value, cachedValue)) {
        console.error("The result of getSnapshot should be cached to avoid an infinite loop");
        didWarnUncachedGetSnapshot = true;
      }
    }
  }
  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  });
  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
"useSyncExternalStore" in React__namespace ? ((module2) => module2.useSyncExternalStore)(React__namespace) : shim;
const DataStaticRouterContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataStaticRouterContext.displayName = "DataStaticRouterContext";
}
const DataRouterContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}
const NavigationContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}
const RouteContext = /* @__PURE__ */ React__namespace.createContext({
  outlet: null,
  matches: []
});
if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /* @__PURE__ */ React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}
function useInRouterContext() {
  return React__namespace.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  return React__namespace.useContext(LocationContext).location;
}
function useRoutes(routes2, locationArg) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let dataRouterStateContext = React__namespace.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = React__namespace.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (process.env.NODE_ENV !== "production") {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? process.env.NODE_ENV !== "production" ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes2, {
    pathname: remainingPathname
  });
  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ') : void 0;
    process.env.NODE_ENV !== "production" ? warning(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
  }
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches, dataRouterStateContext || void 0);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ React__namespace.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorElement() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement("h2", null, "Unhandled Thrown Error!"), /* @__PURE__ */ React__namespace.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ React__namespace.createElement("pre", {
    style: preStyles
  }, stack) : null, /* @__PURE__ */ React__namespace.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ React__namespace.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React__namespace.createElement("code", {
    style: codeStyles
  }, "errorElement"), " props on ", /* @__PURE__ */ React__namespace.createElement("code", {
    style: codeStyles
  }, "<Route>")));
}
class RenderErrorBoundary extends React__namespace.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ React__namespace.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    }) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataStaticRouterContext = React__namespace.useContext(DataStaticRouterContext);
  if (dataStaticRouterContext && match.route.errorElement) {
    dataStaticRouterContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ React__namespace.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not find a matching route for the current errors: " + errors) : invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index2) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    let errorElement = dataRouterState ? match.route.errorElement || /* @__PURE__ */ React__namespace.createElement(DefaultErrorElement, null) : null;
    let getChildren = () => /* @__PURE__ */ React__namespace.createElement(RenderedRoute, {
      match,
      routeContext: {
        outlet,
        matches: parentMatches.concat(renderedMatches.slice(0, index2 + 1))
      }
    }, error ? errorElement : match.route.element !== void 0 ? match.route.element : outlet);
    return dataRouterState && (match.route.errorElement || index2 === 0) ? /* @__PURE__ */ React__namespace.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error,
      children: getChildren()
    }) : getChildren();
  }, null);
}
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.";
}
function useDataRouterState(hookName) {
  let state = React__namespace.useContext(DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return state;
}
function useRouteError() {
  var _state$errors;
  let error = React__namespace.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let route = React__namespace.useContext(RouteContext);
  let thisRoute = route.matches[route.matches.length - 1];
  if (error) {
    return error;
  }
  !route ? process.env.NODE_ENV !== "production" ? invariant(false, "useRouteError must be used inside a RouteContext") : invariant(false) : void 0;
  !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? invariant(false, 'useRouteError can only be used on routes that contain a unique "id"') : invariant(false) : void 0;
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[thisRoute.route.id];
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    process.env.NODE_ENV !== "production" ? warning(false, message) : void 0;
  }
}
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React__namespace.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = React__namespace.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  process.env.NODE_ENV !== "production" ? warning(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ React__namespace.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ React__namespace.createElement(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
function B$1() {
  return /* @__PURE__ */ jsx("div", { children: "B 页面" });
}
const b$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B$1
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = void 0;
const toc$1 = [{
  "id": "背景介绍",
  "text": "背景介绍：",
  "depth": 2
}, {
  "id": "框架区别",
  "text": "框架区别：",
  "depth": 2
}, {
  "id": "1-源码方面",
  "text": "1. 源码方面：",
  "depth": 3
}, {
  "id": "2-结构方面",
  "text": "2. 结构方面：",
  "depth": 3
}, {
  "id": "框架使用",
  "text": "框架使用：",
  "depth": 2
}, {
  "id": "express",
  "text": "express：",
  "depth": 3
}, {
  "id": "koa",
  "text": "koa：",
  "depth": 3
}];
function _createMdxContent$1(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    code: "code",
    h3: "h3",
    div: "div",
    span: "span",
    pre: "pre",
    strong: "strong"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "koa-vs-express",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#koa-vs-express",
        children: "#"
      }), "Koa vs Express"]
    }), "\n", jsxs(_components.h2, {
      id: "背景介绍",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#背景介绍",
        children: "#"
      }), "背景介绍："]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "koa"
      }), "和", jsx(_components.code, {
        children: "express"
      }), "都是nodejs用来搭建服务器的框架，express较早出现，koa被称为node下一代的http框架，两者由一个团队设计产生，tj作为核心人物，使用两个框架中的任意一个都可以灵活简洁的搭建一个服务器。目前tj本人主要投入于koa的研发，express已经交给团队去维护。"]
    }), "\n", jsxs(_components.h2, {
      id: "框架区别",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#框架区别",
        children: "#"
      }), "框架区别："]
    }), "\n", jsxs(_components.h3, {
      id: "1-源码方面",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-源码方面",
        children: "#"
      }), "1. 源码方面："]
    }), "\n", jsx(_components.p, {
      children: "首先koa的源码设计本身更加优秀，koa本身主要是ES6及以上的代码写成，而express主要以ES5代码为主，相比于ES5的var和其他形式，ES6本身在语言层面就有着优势。"
    }), "\n", jsxs(_components.p, {
      children: ["其次koa设计比起express代码量更小，express相比之下体系工具更加完善，拥有各种强大的功能。而koa的各项功能主要依靠第三方库，但是依靠外库功能也比较完善。(", jsx(_components.code, {
        children: "multer/bodyparser/morgan"
      }), ")"]
    }), "\n", jsx(_components.p, {
      children: "koa在处理中间件的时候，依靠其dispatch函数，对中间件stack进行调度，而express使用next函数对中间件进行调度，dispatch会返回一个Promise，可以对异步函数进行管理，而express则采用的直接调用的方式，不利于对异步函数进行管理，只是在同步函数的管理中保持一致，而koa可以配合async和await对异步函数进行同步化，进一步规划函数运行。"
    }), "\n", jsxs(_components.h3, {
      id: "2-结构方面",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-结构方面",
        children: "#"
      }), "2. 结构方面："]
    }), "\n", jsx(_components.p, {
      children: "两者的设计结构基本类似。"
    }), "\n", jsx(_components.p, {
      children: "运作结构方面，同步函数作为中间件时，则两者都符合洋葱模型。但异步函数作为中间件时，koa符合洋葱模型而express不符合洋葱模型。"
    }), "\n", jsxs(_components.h2, {
      id: "框架使用",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#框架使用",
        children: "#"
      }), "框架使用："]
    }), "\n", jsxs(_components.h3, {
      id: "express",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#express",
        children: "#"
      }), "express："]
    }), "\n", jsx(_components.p, {
      children: "首先express本身是一个createApplication函数，因为是函数，则使用express时调用函数即可，"
    }), "\n", jsxs(_components.div, {
      className: "language-jsx",
      children: [jsx(_components.span, {
        className: "lang",
        children: "jsx"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "express"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "require"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "express"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "app"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "express"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["而当调用listen函数时，本质上是新建原生http服务器", jsx(_components.code, {
        children: "http.createServer"
      }), " 然后调用", jsx(_components.code, {
        children: "listen"
      }), " 方法。"]
    }), "\n", jsxs(_components.p, {
      children: ["而使用", jsx(_components.code, {
        children: "app.use()"
      }), " 时，本质上是寻找router中的", jsx(_components.code, {
        children: "use"
      }), "方法，然后在router中进行处理。而router处理需要传入一个回调函数，router本身会返回一个", jsx(_components.code, {
        children: "request_handle"
      }), " ，也就是本质上调用的是你传入的回调函数。"]
    }), "\n", jsxs(_components.p, {
      children: ["当使用express的", jsx(_components.code, {
        children: "next"
      }), "方法时，处理原理是本身源码app中会有一个", jsx(_components.code, {
        children: "middleware"
      }), " 数组，内部成为stack，然后调用use/get/post等方法时传入的中间件，都会被放入这个数组中，然后express设计内部有一个计数器idx，调用一个", jsx(_components.code, {
        children: "next()"
      }), " ，则", jsx(_components.code, {
        children: "idx + 1"
      }), "，然后重复一遍调用，因为idx对数组的指向向后移了一位，则调用下一个中间件。"]
    }), "\n", jsxs(_components.h3, {
      id: "koa",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#koa",
        children: "#"
      }), "koa："]
    }), "\n", jsx(_components.p, {
      children: "koa本身是一个Application类，因为是类，则使用koa时需要新建一个类，"
    }), "\n", jsxs(_components.div, {
      className: "language-jsx",
      children: [jsx(_components.span, {
        className: "lang",
        children: "jsx"
      }), jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Koa"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "require"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "koa"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "app"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Koa"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "koa的listen函数相似。"
    }), "\n", jsxs(_components.p, {
      children: ["koa调用use函数时，多个中间件也需要进行调用", jsx(_components.code, {
        children: "next()"
      }), "才能执行下一个中间件，因为koa源码本身不带有", jsx(_components.code, {
        children: "router"
      }), "，所以本身他的运行就是在application中调用的use，但是koa本身只有use方法，没有get/post/put/delete/patch等方法，需要借助", jsx(_components.code, {
        children: "@koa/router"
      }), "来进行请求或接口地址的过滤。在调用use方法时，内部也有一个", jsx(_components.code, {
        children: "muddleware"
      }), "数组，但是不同的是，koa在执行中间件时，会将所有的中间件进行整合，然后一起作为", jsx(_components.code, {
        children: "compose"
      }), "方法的参数，然后compose方法又去调用", jsx(_components.code, {
        children: "handleRequest"
      }), "方法，最终调用", jsx(_components.code, {
        children: "fnMiddleware"
      }), "函数，对中间件进行处理，中间件的处理方式和express类似，也是设置一个指针i，然后", jsx(_components.code, {
        children: "dispatch(0)"
      }), "调用第一个中间件，然后调用midllware数组中的i+1，继续调用下一个中间件，等到所有的中间件执行完成后，才对返回体进行处理，将结果返回。", jsxs(_components.strong, {
        children: ["也就是说，koa是先把所有的中间件处理完成后，才会对body进行返回，不会设置一次", jsx(_components.code, {
          children: "ctx.response.body"
        }), "就返回一次响应。"]
      })]
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent$1, props)
  })) : _createMdxContent$1(props);
}
const a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1,
  toc: toc$1
}, Symbol.toStringTag, { value: "Module" }));
function B() {
  return /* @__PURE__ */ jsx("div", { children: "Hello world B" });
}
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B
}, Symbol.toStringTag, { value: "Module" }));
function C() {
  return /* @__PURE__ */ jsx("div", { children: "Hello world C" });
}
const c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: C
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "pageType": "home",
  "hero": {
    "name": "Vigor",
    "text": "基于 Vite & MDX 语法的静态站点生成器",
    "tagline": "简单、强大、高性能的现代化 SSG 方案",
    "image": {
      "src": "/vigor.png",
      "alt": "vigor"
    },
    "actions": [{
      "theme": "brand",
      "text": "快速开始",
      "link": "/guide/a"
    }, {
      "theme": "alt",
      "text": "GitHub 地址",
      "link": "https://github.com/Flandre3569/vigor.js"
    }]
  },
  "features": [{
    "title": "Vite: 极速的开发响应速度",
    "details": "基于 Vite 构建，开发时的响应速度极快，即时的热更新，带给你极致的开发体验。",
    "icon": "✨"
  }, {
    "title": "MDX: Markdown & React 组件来写内容",
    "details": "MDX 是一种强大的方式来写内容。你可以在 Markdown 中使用 React 组件。",
    "icon": "🪄"
  }, {
    "title": "TypeScript: JavaScript超集",
    "details": "使用TypeScript作为开发语言，拥有强大的类型检测，大型项目的极致享受。",
    "icon": "🪐"
  }, {
    "title": "SSG: Static Site Generate",
    "details": "SSG是一种用于构建静态网站的工具，它可以根据预先定义的模板和内容来生成静态的 HTML 文件。",
    "icon": "🎉"
  }, {
    "title": "Vercel: 开箱即用的网站托管平台",
    "details": "vercel 的定位是零配置的静态资源和无服务器云计算(serverless) 部署平台。",
    "icon": "🦄"
  }, {
    "title": "React: 用于构建用户界面的JavaScript库",
    "details": "React 是一种开源框架，用于创建用户界面。 它最常用于创建 Web 应用程序。",
    "icon": "🍕"
  }]
};
const toc = [];
function _createMdxContent(props) {
  return jsx(Fragment, {});
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent, props)
  })) : _createMdxContent();
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter,
  toc
}, Symbol.toStringTag, { value: "Module" }));
const routes = [
  { path: "/b", element: React.createElement(B$1), preload: () => Promise.resolve().then(() => b$1) },
  { path: "/guide/a", element: React.createElement(MDXContent$1), preload: () => Promise.resolve().then(() => a) },
  { path: "/guide/b", element: React.createElement(B), preload: () => Promise.resolve().then(() => b) },
  { path: "/guide/c", element: React.createElement(C), preload: () => Promise.resolve().then(() => c) },
  { path: "/", element: React.createElement(MDXContent), preload: () => Promise.resolve().then(() => index) }
];
const Content = () => {
  const rootElement = useRoutes(routes);
  return rootElement;
};
const contextData = React.createContext({});
const useContextData = () => {
  return React.useContext(contextData);
};
const base = "";
const vars = "";
const __uno = "";
const link$1 = "_link_w94wm_1";
const socialLinkIcon = "_social-link-icon_w94wm_12";
const bgColor = "_bg-color_w94wm_22";
const styles$9 = {
  link: link$1,
  socialLinkIcon,
  bgColor
};
const GITHUB_LINK_HREF = "https://github.com/Flandre3569/vigor.js";
function MenuItem(item2) {
  return /* @__PURE__ */ jsx("div", { className: "text-sm font-medium mx-3", children: /* @__PURE__ */ jsxs("a", { href: item2.link, className: styles$9.link, children: [
    " ",
    item2.text,
    " "
  ] }) });
}
function Nav() {
  var _a;
  const { siteData } = useContextData();
  const nav = ((_a = siteData == null ? void 0 : siteData.themeConfig) == null ? void 0 : _a.nav) || [];
  return /* @__PURE__ */ jsx("header", { fixed: "~", w: "full", z: "10", className: styles$9.bgColor, children: /* @__PURE__ */ jsxs("div", { flex: "~", justify: "between", items: "center", className: "px-8 h-14 divider-bottom", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "/", className: "w-full h-full text-1rem flex items-center", hover: "opacity-60", children: "vigor.js" }) }),
    /* @__PURE__ */ jsxs("div", { flex: "~", children: [
      /* @__PURE__ */ jsx("div", { flex: "~", children: nav.map((item2) => /* @__PURE__ */ React.createElement(MenuItem, { ...item2, key: item2.text })) }),
      /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx("div", { className: styles$9.socialLinkIcon, children: /* @__PURE__ */ jsx("a", { href: GITHUB_LINK_HREF, children: /* @__PURE__ */ jsx("div", { className: "i-carbon-logo-github w-5 h-5 fill-current" }) }) })
    ] })
  ] }) });
}
const link = "_link_h8tgh_1";
const styles$8 = {
  link
};
const EXTERNAL_URL = /^https?/;
function Link(props) {
  const { href = "/", children, className = "" } = props;
  const isExternal = EXTERNAL_URL.test(href);
  const target = isExternal ? "_blank" : "";
  const rel = isExternal ? "noopener noreferrer" : void 0;
  return /* @__PURE__ */ jsxs("a", { href, rel, target, className: `${className} ${styles$8.link}`, children: [
    children,
    " "
  ] });
}
const button = "_button_5uvhl_1";
const medium = "_medium_5uvhl_14";
const big = "_big_5uvhl_21";
const brand = "_brand_5uvhl_28";
const alt = "_alt_5uvhl_32";
const styles$7 = {
  button,
  medium,
  big,
  brand,
  alt
};
function Button(props) {
  const {
    theme = "brand",
    href = "/",
    size = "big",
    external = false,
    className = ""
  } = props;
  let type = null;
  if (props.type === "button") {
    type = "button";
  } else if (props.type === "a") {
    type = external ? "a" : Link;
  }
  return React.createElement(
    type ?? "a",
    {
      href,
      className: `${styles$7.button} ${styles$7[size]} ${styles$7[theme]} ${className}`
    },
    props.text
  );
}
const title = "_title_1xxnm_1";
const styles$6 = {
  title
};
function HeroComponent(props) {
  const { hero } = props;
  return /* @__PURE__ */ jsxs("div", { flex: "~", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-1/2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-5xl font-semibold pb-5", children: /* @__PURE__ */ jsxs("span", { className: styles$6.title, children: [
          " ",
          hero.name,
          " "
        ] }) }),
        /* @__PURE__ */ jsxs("p", { className: "text-6xl font-semibold", children: [
          " ",
          hero.text,
          " "
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-2xl pt-3 pb-6 opacity-65", children: [
          " ",
          hero.tagline,
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { flex: "~", children: hero.actions.map((action) => /* @__PURE__ */ jsx("div", { className: "pr-3", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "a",
          text: action.text,
          href: action.link,
          theme: action.theme
        }
      ) }, action.link)) })
    ] }),
    /* @__PURE__ */ jsx("div", { w: "1/2", flex: "center", children: hero.image && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { h: "85", src: hero.image.src, alt: hero.image.alt }) }) })
  ] });
}
const bg = "_bg_16d6n_1";
const iconBg = "_icon-bg_16d6n_7";
const styles$5 = {
  bg,
  iconBg
};
function FeatureComponent(props) {
  return /* @__PURE__ */ jsx("div", { flex: "~ wrap", justify: "between", pt: "20", children: props.features.map((feature) => {
    const {
      title: title2,
      details,
      icon = ""
    } = feature;
    return /* @__PURE__ */ jsx("div", { border: "rounded-md", pb: "1.3%", w: "32.4%", children: /* @__PURE__ */ jsxs("article", { p: "6", className: styles$5.bg, "h-full": "true", children: [
      /* @__PURE__ */ jsx("div", { className: `flex-center text-3xl w-13 h-11 ${styles$5.iconBg}`, border: "rounded-xl solid", children: icon }),
      /* @__PURE__ */ jsx("h2", { className: "font-semibold py-4", children: title2 }),
      /* @__PURE__ */ jsx("p", { className: "text-3.5 font-medium opacity-90", children: details })
    ] }) }, title2);
  }) });
}
function HomePage() {
  const { frontmatter: frontmatter2 } = useContextData();
  return /* @__PURE__ */ jsxs("div", { className: "px-24 pt-30 pb-10", children: [
    /* @__PURE__ */ jsx(HeroComponent, { hero: frontmatter2.hero }),
    /* @__PURE__ */ jsx(FeatureComponent, { features: frontmatter2.features })
  ] });
}
const sidebar = "_sidebar_byf93_1";
const itemOnfocus = "_item-onfocus_byf93_15";
const item = "_item_byf93_15";
const styles$4 = {
  sidebar,
  itemOnfocus,
  item
};
function Sidebar(props) {
  const { sidebarData, pathname } = props;
  const renderItem = (item2) => {
    const onFocus = item2.link === pathname;
    return /* @__PURE__ */ jsx("div", { pl: "2", pt: "2", children: /* @__PURE__ */ jsx("div", { className: `${onFocus ? styles$4.itemOnfocus : styles$4.item}`, children: /* @__PURE__ */ jsx(Link, { href: item2.link, children: item2.text }) }) });
  };
  const renderItems = (item2) => {
    var _a;
    return /* @__PURE__ */ jsxs("section", { className: "divider-bottom pb-3", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-semibold", children: item2.text }) }),
      /* @__PURE__ */ jsx("div", { children: (_a = item2.items) == null ? void 0 : _a.map((item22) => /* @__PURE__ */ jsx("div", { children: renderItem(item22) }, item22.link)) })
    ] }, item2.text);
  };
  return /* @__PURE__ */ jsx("aside", { className: styles$4.sidebar, children: /* @__PURE__ */ jsx("nav", { children: sidebarData.map(renderItems) }) });
}
const prevPage = "_prev-page_1iinb_1";
const nextPage = "_next-page_1iinb_12";
const prevPageTitle = "_prev-page-title_1iinb_23";
const nextPageTitle = "_next-page-title_1iinb_29";
const prevPageContent = "_prev-page-content_1iinb_35";
const nextPageContent = "_next-page-content_1iinb_40";
const styles$3 = {
  prevPage,
  nextPage,
  prevPageTitle,
  nextPageTitle,
  prevPageContent,
  nextPageContent
};
function getNextPageData() {
  var _a;
  const { pathname } = useLocation();
  const { siteData } = useContextData();
  const sidebar2 = ((_a = siteData.themeConfig) == null ? void 0 : _a.sidebar) || {};
  const itemArray = [];
  Object.keys(sidebar2).forEach((key) => {
    const itemGroup = sidebar2[key] || [];
    itemGroup.forEach((group) => {
      group.items.forEach((item2) => {
        itemArray.push(item2);
      });
    });
  });
  const pageIndex = itemArray.findIndex((item2) => item2.link === pathname);
  const prevPage2 = itemArray[pageIndex - 1] || null;
  const nextPage2 = itemArray[pageIndex + 1] || null;
  return {
    prevPage: prevPage2,
    nextPage: nextPage2
  };
}
function NextPage() {
  const { prevPage: prevPage2, nextPage: nextPage2 } = getNextPageData();
  return /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsxs("div", { flex: "~", justify: "between", className: "py-5", children: [
    /* @__PURE__ */ jsx("div", { children: prevPage2 && /* @__PURE__ */ jsxs("a", { href: prevPage2.link, className: `${styles$3.prevPage}`, children: [
      /* @__PURE__ */ jsx("span", { mr: "5", className: styles$3.prevPageTitle, children: "上一页" }),
      /* @__PURE__ */ jsx("span", { className: styles$3.prevPageContent, children: prevPage2.text })
    ] }) }),
    /* @__PURE__ */ jsx("div", { children: nextPage2 && /* @__PURE__ */ jsxs("a", { href: nextPage2.link, className: `${styles$3.nextPage}`, children: [
      /* @__PURE__ */ jsx("span", { mr: "5", className: styles$3.nextPageTitle, children: "下一页" }),
      /* @__PURE__ */ jsxs("span", { className: styles$3.nextPageContent, children: [
        nextPage2.text,
        " "
      ] })
    ] }) })
  ] }) });
}
const tocLink = "_toc-link_7b492_1";
const styles$2 = {
  tocLink
};
const NAV_HEIGHT = 60;
function scrollToTarget(target, isSmooth) {
  const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
  const targetTop = window.scrollY + target.getBoundingClientRect().top + targetPadding - NAV_HEIGHT;
  window.scrollTo({
    left: 0,
    top: targetTop,
    behavior: isSmooth ? "smooth" : "auto"
  });
}
function TocComponent(props) {
  const { headers = [] } = props;
  const tocLength = headers.length > 0;
  const markRef = React.useRef(null);
  const renderToc = (tocTree) => {
    return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      "a",
      {
        href: `#${tocTree.id}`,
        className: `block leading-7 ${styles$2.tocLink} opacity-70`,
        transition: "color duration-300",
        style: {
          paddingLeft: (tocTree.depth - 2) * 12
        },
        onClick: (e) => {
          e.preventDefault();
          const target = document.getElementById(tocTree.id);
          target && scrollToTarget(target, false);
        },
        children: tocTree.text
      }
    ) }, tocTree.id);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { children: tocLength && /* @__PURE__ */ jsxs("div", { id: "toc-container", className: "relative divider-left pl-4 text-13px font-medium", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: markRef,
        id: "toc-maker"
      }
    ),
    /* @__PURE__ */ jsx("div", { "leading-7": "~", text: "13px", font: "semibold", children: "On this Page" }),
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { relative: "~", children: headers.map(renderToc) }) })
  ] }) }) });
}
const vigorDoc$1 = "_vigor-doc_1vfmz_2";
const tocContainer$1 = "_toc-container_1vfmz_36";
const headerAnchor$1 = "_header-anchor_1vfmz_45";
const styles$1 = {
  vigorDoc: vigorDoc$1,
  tocContainer: tocContainer$1,
  headerAnchor: headerAnchor$1
};
const vigorDoc = "_vigor-doc_1vfmz_2";
const tocContainer = "_toc-container_1vfmz_36";
const headerAnchor = "_header-anchor_1vfmz_45";
const index_module = {
  vigorDoc,
  tocContainer,
  headerAnchor
};
function DocPage() {
  var _a;
  const { siteData, toc: toc2 } = useContextData();
  const sidebarData = ((_a = siteData.themeConfig) == null ? void 0 : _a.sidebar) || {};
  const { pathname } = useLocation();
  const matchedSidebarKey = Object.keys(sidebarData).find((key) => {
    if (pathname.startsWith(key)) {
      return true;
    }
  });
  const matchedSidebar = sidebarData[matchedSidebarKey] || [];
  return /* @__PURE__ */ jsxs("div", { flex: "~", children: [
    /* @__PURE__ */ jsx("div", { w: "1/4", children: /* @__PURE__ */ jsx(Sidebar, { sidebarData: matchedSidebar, pathname }) }),
    /* @__PURE__ */ jsxs("div", { pt: "22", w: "3/4", className: styles$1.vigorDoc, flex: "~", children: [
      /* @__PURE__ */ jsxs("div", { w: "2/3", className: "vigor-doc", children: [
        /* @__PURE__ */ jsx("div", { className: "divider-bottom", children: /* @__PURE__ */ jsx(Content, {}) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(NextPage, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles$1.tocContainer, w: "1/4", h: "100vw", pl: "20", children: /* @__PURE__ */ jsx(TocComponent, { headers: toc2 }) })
    ] })
  ] });
}
const h1 = "_h1_2hjpi_1";
const styles = {
  h1
};
const imgOssPath = "http://mingxuan3569.oss-cn-beijing.aliyuncs.com/image/404.png";
function NotFoundPage() {
  return /* @__PURE__ */ jsxs("div", { flex: "~", h: "full", children: [
    /* @__PURE__ */ jsxs("div", { w: "1/2", h: "full", children: [
      /* @__PURE__ */ jsx("h1", { className: styles.h1, children: "404" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          "inline-block": "",
          border: "1px solid brand",
          rounded: "2xl",
          p: "y-2 x-4",
          text: "sm brand",
          "font-medium": "",
          href: "/",
          "aria-label": "go to home",
          relative: "~",
          className: "left-58 top-20",
          children: "Take me home"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { relative: "~", className: "top-10", children: /* @__PURE__ */ jsx("img", { className: "w-250 left-0", src: imgOssPath, alt: "404" }) })
  ] });
}
function Layout() {
  const pageData = useContextData();
  const { pageType } = pageData;
  const Content2 = () => {
    if (pageType === "home") {
      return /* @__PURE__ */ jsx(HomePage, {});
    } else if (pageType === "doc") {
      return /* @__PURE__ */ jsx(DocPage, {});
    } else {
      return /* @__PURE__ */ jsx(NotFoundPage, {});
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Nav, {}),
    Content2()
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Layout, {});
}
function StaticRouter({
  basename,
  children,
  location: locationProp = "/"
}) {
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let action = Action.Pop;
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state || null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return /* @__PURE__ */ React__namespace.createElement(Router, {
    basename,
    children,
    location,
    navigationType: action,
    navigator: staticNavigator,
    static: true
  });
}
function getStatelessNavigator() {
  return {
    createHref(to) {
      return typeof to === "string" ? to : createPath(to);
    },
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    }
  };
}
function render(pagePath) {
  return server.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: pagePath, children: /* @__PURE__ */ jsx(App, {}) })
  );
}
exports.render = render;
exports.routes = routes;
