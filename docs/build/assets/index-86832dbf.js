import { j as jsx, F as Fragment } from "./client-entry-e3655d60.js";
const frontmatter = {
  "pageType": "home",
  "hero": {
    "name": "Vigor",
    "text": "基于 Vite & MDX 语法的静态站点生成器",
    "tagline": "简单、强大、高性能的现代化 SSG 方案",
    "image": {
      "src": "/coding.png",
      "alt": "vigor"
    },
    "actions": [{
      "theme": "brand",
      "text": "快速开始",
      "link": "/guide/introduction/quickStart"
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
    "details": "通过 SSR 把动态化的 Web 应用渲染为多个静态页面，并且也保留了 CSR 的能力。",
    "icon": "🎉"
  }, {
    "title": "Vercel: 开箱即用的网站托管平台",
    "details": "vercel 的定位是零配置的静态资源和无服务器云计算(serverless) 部署平台。",
    "icon": "🦄"
  }, {
    "title": "React: 用于构建用户界面的JavaScript库",
    "details": "React 是一种开源框架，用于创建用户界面。 它最常用于创建 Web 应用程序。",
    "icon": "🍕"
  }],
  "footer": {
    "copyright": "sungMoon",
    "message": "Released under the MIT License."
  }
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
export {
  MDXContent as default,
  frontmatter,
  toc
};
