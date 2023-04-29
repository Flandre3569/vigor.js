import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-e3655d60.js";
const frontmatter = void 0;
const toc = [{
  "id": "什么是-mpa-和-spa-",
  "text": "什么是 MPA 和 SPA ?",
  "depth": 2
}, {
  "id": "对比",
  "text": "对比",
  "depth": 2
}, {
  "id": "1-性能",
  "text": "1. 性能",
  "depth": 3
}, {
  "id": "2-seo",
  "text": "2. SEO",
  "depth": 3
}, {
  "id": "3-路由",
  "text": "3. 路由",
  "depth": 3
}, {
  "id": "4-状态管理",
  "text": "4. 状态管理",
  "depth": 3
}, {
  "id": "取舍",
  "text": "取舍",
  "depth": 2
}];
const title = "MPA 和 SPA 对比";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h2: "h2",
    h3: "h3"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "mpa-和-spa-对比",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#mpa-和-spa-对比",
        children: "#"
      }), "MPA 和 SPA 对比"]
    }), "\n", jsx(_components.p, {
      children: "理解多页应用程序(MPA)和单页应用程序(SPA)的区别和取舍是理解 vigorjs 架构的关键，这也可以让你更好的使用 vigor.js。"
    }), "\n", jsxs(_components.h2, {
      id: "什么是-mpa-和-spa-",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#什么是-mpa-和-spa-",
        children: "#"
      }), "什么是 MPA 和 SPA ?"]
    }), "\n", jsx(_components.p, {
      children: "MPA 和 SPA 是构建前端页面常见的两种方式。"
    }), "\n", jsx(_components.p, {
      children: "MPA (Multi-page application) 即多页应用，是从服务器加载多个 HTML 页面的应用程序。每个页面都彼此独立，有自己的 URL。当单击 a 标签链接导航到另一个页面时，浏览器将向服务器发送请求并加载新页面。例如，传统的模板技术如 JSP、Python、Django、PHP、Laravel 等都是基于 MPA 的框架。"
    }), "\n", jsx(_components.p, {
      children: "SPA (Single-page application) 即单页应用，它只有一个不包含具体页面内容的 HTML，当浏览器拿到这份 HTML 之后，会请求页面所需的 JavaScript 代码，通过执行 JavaScript 代码完成 DOM 树的构建和 DOM 的事件绑定，从而让页面可以交互。如现在使用的大多数 Vue、React 中后台应用都是 SPA 应用。"
    }), "\n", jsxs(_components.h2, {
      id: "对比",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#对比",
        children: "#"
      }), "对比"]
    }), "\n", jsxs(_components.h3, {
      id: "1-性能",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-性能",
        children: "#"
      }), "1. 性能"]
    }), "\n", jsx(_components.p, {
      children: "在 MPA 中，服务器将响应完整的 HTML 页面给浏览器，但是 SPA 需要先请求客户端的 JS Bundle 然后执行 JS 以渲染页面。因此，MPA 中的页面的首屏加载性能比 SPA 更好。"
    }), "\n", jsx(_components.p, {
      children: "但 SPA 在后续页面加载方面有更好的性能和体验。因为 SPA 在完成首屏加载之后，在访问其它的页面时只需要动态加载页面的一部分组件，而不是整个页面。而且，当页面发生跳转时，SPA 不会重新加载页面，对用户更友好。"
    }), "\n", jsxs(_components.h3, {
      id: "2-seo",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-seo",
        children: "#"
      }), "2. SEO"]
    }), "\n", jsx(_components.p, {
      children: "MPA 中服务端会针对每个页面返回完整的 HTML 内容，对 SEO 更加友好；而 SPA 的页面内容则需要执行 JS 才能拉取到，不利于 SEO。"
    }), "\n", jsxs(_components.h3, {
      id: "3-路由",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-路由",
        children: "#"
      }), "3. 路由"]
    }), "\n", jsx(_components.p, {
      children: "MPA 在浏览器侧其实不需要路由，每个页面都在服务端都有一份 URL 地址，浏览器拿到 URL 直接请求服务端即可。"
    }), "\n", jsx(_components.p, {
      children: "但 SPA 则不同，它需要 JS 掌管后续所有路由跳转的逻辑，因此会引入一些路由方案来管理前端的路由，比如基于 hashchange 事件或者浏览器 history API 来实现。"
    }), "\n", jsxs(_components.h3, {
      id: "4-状态管理",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#4-状态管理",
        children: "#"
      }), "4. 状态管理"]
    }), "\n", jsx(_components.p, {
      children: "除了路由，SPA 另外一个复杂的点在于状态管理。SPA 当中所有路由的状态都是由 JS 进行管理，在不同的路由进行跳转时通过 JS 代码进行一些状态的流转，在页面的规模越来越大的时候，状态管理就变得越来越复杂了。因此，社区也诞生了不少的状态管理方案，如传统的 Redux、社区新秀 Valtio、Zustand 包括字节自研的 Reduck，都是为了解决 SPA 状态管理的问题，一方面降低操作的复杂度、另一方面引入一些规范和限制(比如 Redux 中的 action 机制)来提高项目可维护性。"
    }), "\n", jsxs(_components.h2, {
      id: "取舍",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#取舍",
        children: "#"
      }), "取舍"]
    }), "\n", jsx(_components.p, {
      children: "总而言之，MPA 有更好的首屏性能，SPA 在后续页面的访问中有更好的性能和体验，但 SPA 也带来了更高的工程复杂度、略差的首屏性能和 SEO。这样就需要在不同的应用场景中做一些取舍。"
    }), "\n", jsx(_components.p, {
      children: "不过，MPA 和 SPA 也并不是完全割裂的，两者也是能够有所结合的，比如 SSR/SSG 同构方案就是一个典型的体现，首先框架侧会在服务端生成完整的 HTML 内容，并且同时注入客户端所需要的 SPA 脚本。这样浏览器会拿到完整的 HTML 内容，然后执行客户端的脚本事件的绑定(这个过程也叫 hydrate)，后续路由的跳转由 JS 来掌管。当下很多的框架都是采用这样的方案，比如 Next.js、Gatsby。"
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, Object.assign({}, props, {
    children: jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export {
  MDXContent as default,
  frontmatter,
  title,
  toc
};
