import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-e3655d60.js";
const frontmatter = void 0;
const toc = [{
  "id": "crs",
  "text": "CRS",
  "depth": 2
}, {
  "id": "优点",
  "text": "优点：",
  "depth": 3
}, {
  "id": "缺点",
  "text": "缺点：",
  "depth": 3
}, {
  "id": "服务器端渲染ssr",
  "text": "服务器端渲染（SSR）",
  "depth": 2
}, {
  "id": "优点-1",
  "text": "优点：",
  "depth": 3
}, {
  "id": "缺点-1",
  "text": "缺点：",
  "depth": 3
}, {
  "id": "静态站点生成ssg",
  "text": "静态站点生成（SSG）",
  "depth": 2
}, {
  "id": "优点-2",
  "text": "优点：",
  "depth": 3
}, {
  "id": "缺点-2",
  "text": "缺点：",
  "depth": 3
}, {
  "id": "跨请求状态污染",
  "text": "跨请求状态污染",
  "depth": 2
}];
const title = "SSG架构";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    h3: "h3",
    ul: "ul",
    li: "li",
    strong: "strong",
    img: "img",
    div: "div",
    span: "span",
    pre: "pre",
    code: "code"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "ssg架构",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#ssg架构",
        children: "#"
      }), "SSG架构"]
    }), "\n", jsxs(_components.h2, {
      id: "crs",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#crs",
        children: "#"
      }), "CRS"]
    }), "\n", jsx(_components.p, {
      children: "客户端渲染（crs），是指在browser在生成页面时，向客户端所在的服务器进行请求（nginx），然后客户端服务器将通过Javascript动态加载，最后形成一个单页面应用（SPA）。"
    }), "\n", jsx(_components.p, {
      children: "SPA默认只返回一个空的HTML页面，在切换页面的时候实际上只是切换的前端路由而不是再请求一个新的页面。"
    }), "\n", jsxs(_components.h3, {
      id: "优点",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#优点",
        children: "#"
      }), "优点："]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "1.只需要加载一次，所以速度会比传统的web应用程序更快。"
      }), "\n", jsx(_components.li, {
        children: "2.更好的用户体验。切换页面只需要内容发生变化，页面并没有重新加载，从而使体验变得更流畅。"
      }), "\n", jsx(_components.li, {
        children: "3.可以更轻松地构建功能丰富的web应用程序。"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "缺点",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#缺点",
        children: "#"
      }), "缺点："]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "1.SPA应用默认只返回一个空的HTML页面，不利于SEO（search engine optimization）"
      }), "\n", jsx(_components.li, {
        children: "2.首屏加载的资源过大时，一样会影响首屏的渲染速度。"
      }), "\n", jsx(_components.li, {
        children: "3.不利于构建复杂的项目，复杂的Web应用程序的大文件可能会变得难以维护。"
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "服务器端渲染ssr",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#服务器端渲染ssr",
        children: "#"
      }), "服务器端渲染（SSR）"]
    }), "\n", jsx(_components.p, {
      children: "SSR → Server Side Render"
    }), "\n", jsx(_components.p, {
      children: "在服务端渲染页面，并将渲染好的HTML返回给浏览器呈现。"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.strong, {
        children: "水合（hydration）："
      })
    }), "\n", jsx(_components.p, {
      children: "把客户端项目用webpack打包成一个js脚本，然后通过这个脚本对应用程序进行激活，激活后静态页面就可以进行交互了，也就区别于SSG的静态站点作为动态站点进行交互操作了。"
    }), "\n", jsx(_components.p, {
      children: "SSR应用也称为同构应用。"
    }), "\n", jsx(_components.p, {
      children: "构建SSR的常见库和框架有：Vue Nuxt 和 React Next.js"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "http://mingxuan3569.oss-cn-beijing.aliyuncs.com/image/ssrArch.png",
        alt: "ssrArch"
      })
    }), "\n", jsxs(_components.h3, {
      id: "优点-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#优点-1",
        children: "#"
      }), "优点："]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "1.更快的首屏渲染速度"
      }), "\n", jsx(_components.li, {
        children: "2.更好的SEO"
      }), "\n", jsx(_components.li, {
        children: "3.SSR应用程序在Hydration之后依然可以保留Web应用程序的交互性，比如：前端路由、响应式数据和虚拟DOM等。"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "缺点-1",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#缺点-1",
        children: "#"
      }), "缺点："]
    }), "\n", jsx(_components.p, {
      children: "SSR通常需要对服务器进行更多的API调用，以及在服务器渲染需要消耗更多的服务器资源，成本高。"
    }), "\n", jsx(_components.p, {
      children: "增加了一定的开发成本，用户需要关心哪些代码是运行在服务器端，哪些代码是运行在浏览器端。"
    }), "\n", jsx(_components.p, {
      children: "SSR配置站点的缓存通常会比SPA站点要复杂。"
    }), "\n", jsxs(_components.h2, {
      id: "静态站点生成ssg",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#静态站点生成ssg",
        children: "#"
      }), "静态站点生成（SSG）"]
    }), "\n", jsx(_components.p, {
      children: "SSG → static site generate"
    }), "\n", jsx(_components.p, {
      children: "预先生成好的静态网站。"
    }), "\n", jsxs(_components.h3, {
      id: "优点-2",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#优点-2",
        children: "#"
      }), "优点："]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "1.访问速度非常快。"
      }), "\n", jsx(_components.li, {
        children: "2.直接给浏览器返回静态HTML，也有利于SEO"
      }), "\n", jsx(_components.li, {
        children: "3.SSG应用依然保留了SPA应用的特性，比如：前端路由、响应式数据、虚拟DOM等。"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "缺点-2",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#缺点-2",
        children: "#"
      }), "缺点："]
    }), "\n", jsx(_components.p, {
      children: "页面都是静态的，不利于展示实时性的内容，实时性的更适合SSR。"
    }), "\n", jsx(_components.p, {
      children: "如果站点内容更新了，那必须重新再次构建和部署。"
    }), "\n", jsxs(_components.h2, {
      id: "跨请求状态污染",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#跨请求状态污染",
        children: "#"
      }), "跨请求状态污染"]
    }), "\n", jsx(_components.p, {
      children: "在SPA中，遵循单例模式，也就是只能存在一个实例，每个用户在使用浏览器访问访问SPA应用时，应用模块都会重新初始化。"
    }), "\n", jsx(_components.p, {
      children: "然而在SSR模式下，App应用模块通常只会初始化一次，同一个应用模块会在多个服务器请求之间被复用，而我们的单例状态状态对象也会在多个请求中被复用，比如当一个用户对一个共享的单例状态进行修改时，有可能会将这个状态意外的泄露给另一个正在使用的用户。"
    }), "\n", jsx(_components.p, {
      children: "这种现象称之为 — 跨请求状态污染。"
    }), "\n", jsx(_components.p, {
      children: "为解决这个问题，也就是使用函数创建多个实例，然后将实例分别处理，所以SSR模式的压力集中在服务端，因为如果项目很大的时候，实例也会相应的变得很多，服务端处理的压力就会变大。"
    }), "\n", jsxs(_components.div, {
      className: "language-js",
      children: [jsx(_components.span, {
        className: "lang",
        children: "js"
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
              children: "let"
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
              children: "createSSRApp"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "后期在使用路由或者使用Store时也是一样的道理。"
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
