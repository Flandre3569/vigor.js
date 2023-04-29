import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-e3655d60.js";
const frontmatter = void 0;
const toc = [{
  "id": "下载-vigor-moon-publisher",
  "text": "下载 vigor-moon-publisher",
  "depth": 2
}];
const title = "文档更新";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    h2: "h2",
    div: "div",
    span: "span",
    pre: "pre",
    code: "code"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "文档更新",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#文档更新",
        children: "#"
      }), "文档更新"]
    }), "\n", jsx(_components.p, {
      children: "当你完成新文章的编写之后，如何进行更新自己的网站呢？难道每次都要使用一次部署器重新连接一次吗？当然不用，vigor 提供了专门的发布器。"
    }), "\n", jsxs(_components.h2, {
      id: "下载-vigor-moon-publisher",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#下载-vigor-moon-publisher",
        children: "#"
      }), "下载 vigor-moon-publisher"]
    }), "\n", jsxs(_components.div, {
      className: "language-bash",
      children: [jsx(_components.span, {
        className: "lang",
        children: "bash"
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
                color: "#D8DEE9FF"
              },
              children: "npm "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "install"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vigor-moon-publisher"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "当你写完新的文章之后，只需要在控制台执行"
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "vigor-moon-publish\n"
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "按照命令行的提示逐步交互控制，vigor 的发布器就会执行打包并进行发布。"
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
