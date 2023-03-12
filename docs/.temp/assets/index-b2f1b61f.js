"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ssrEntry = require("../ssr-entry.js");
require("react/jsx-runtime");
require("react");
require("@loadable/component");
require("react-dom/server");
const frontmatter = {
  "title": "vigor"
};
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    code: "code",
    em: "em",
    strong: "strong",
    del: "del",
    div: "div",
    span: "span",
    pre: "pre"
  }, props.components);
  return ssrEntry.jsxs(ssrEntry.Fragment, {
    children: [ssrEntry.jsxs(_components.h1, {
      id: "一级标题",
      children: [ssrEntry.jsx(_components.a, {
        className: "header-anchor",
        href: "#一级标题",
        children: "#"
      }), "一级标题"]
    }), "\n", ssrEntry.jsxs(_components.h2, {
      id: "二级标题",
      children: [ssrEntry.jsx(_components.a, {
        className: "header-anchor",
        href: "#二级标题",
        children: "#"
      }), "二级标题"]
    }), "\n", ssrEntry.jsxs(_components.h3, {
      id: "三级标题",
      children: [ssrEntry.jsx(_components.a, {
        className: "header-anchor",
        href: "#三级标题",
        children: "#"
      }), "三级标题"]
    }), "\n", ssrEntry.jsxs(_components.h4, {
      id: "四级标题",
      children: [ssrEntry.jsx(_components.a, {
        className: "header-anchor",
        href: "#四级标题",
        children: "#"
      }), "四级标题"]
    }), "\n", ssrEntry.jsxs(_components.h5, {
      id: "五级标题",
      children: [ssrEntry.jsx(_components.a, {
        className: "header-anchor",
        href: "#五级标题",
        children: "#"
      }), "五级标题"]
    }), "\n", ssrEntry.jsxs(_components.h6, {
      id: "六级标题",
      children: [ssrEntry.jsx(_components.a, {
        className: "header-anchor",
        href: "#六级标题",
        children: "#"
      }), "六级标题"]
    }), "\n", ssrEntry.jsxs(_components.p, {
      children: [ssrEntry.jsx(_components.code, {
        children: "linux"
      }), " ", ssrEntry.jsx(_components.code, {
        children: "网络编程"
      }), " ", ssrEntry.jsx(_components.code, {
        children: "socket"
      }), " ", ssrEntry.jsx(_components.code, {
        children: "epoll"
      })]
    }), "\n", ssrEntry.jsx(_components.p, {
      children: ssrEntry.jsx(_components.em, {
        children: "斜体1"
      })
    }), "\n", ssrEntry.jsx(_components.p, {
      children: ssrEntry.jsx(_components.em, {
        children: "斜体2"
      })
    }), "\n", ssrEntry.jsx(_components.p, {
      children: ssrEntry.jsx(_components.strong, {
        children: "粗体1"
      })
    }), "\n", ssrEntry.jsx(_components.p, {
      children: ssrEntry.jsx(_components.strong, {
        children: "粗体2"
      })
    }), "\n", ssrEntry.jsxs(_components.p, {
      children: ["这是一个 ", ssrEntry.jsx(_components.del, {
        children: "删除线"
      })]
    }), "\n", ssrEntry.jsx(_components.p, {
      children: ssrEntry.jsx(_components.em, {
        children: ssrEntry.jsx(_components.strong, {
          children: "斜粗体1"
        })
      })
    }), "\n", ssrEntry.jsx(_components.p, {
      children: ssrEntry.jsx(_components.em, {
        children: ssrEntry.jsx(_components.strong, {
          children: ssrEntry.jsx(_components.del, {
            children: "斜粗体删除线1"
          })
        })
      })
    }), "\n", ssrEntry.jsxs(_components.div, {
      className: "language-java",
      children: [ssrEntry.jsx(_components.span, {
        className: "lang",
        children: "java"
      }), ssrEntry.jsx(_components.pre, {
        className: "shiki nord",
        style: {
          backgroundColor: "#2e3440ff"
        },
        tabIndex: "0",
        children: ssrEntry.jsxs(_components.code, {
          children: [ssrEntry.jsxs(_components.span, {
            className: "line",
            children: [ssrEntry.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "public"
            }), ssrEntry.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), ssrEntry.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "static"
            }), ssrEntry.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), ssrEntry.jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "void"
            }), ssrEntry.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), ssrEntry.jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "main"
            }), ssrEntry.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), ssrEntry.jsx(_components.span, {
              style: {
                color: "#8FBCBB"
              },
              children: "String"
            }), ssrEntry.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "[]"
            }), ssrEntry.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "args"
            }), ssrEntry.jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "){}"
            }), ssrEntry.jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            })]
          }), "\n", ssrEntry.jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? ssrEntry.jsx(MDXLayout, Object.assign({}, props, {
    children: ssrEntry.jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
exports.default = MDXContent;
exports.frontmatter = frontmatter;
