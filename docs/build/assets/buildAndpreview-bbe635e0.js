import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-e3655d60.js";
const frontmatter = void 0;
const toc = [{
  "id": "step-1---构建打包",
  "text": "step 1 - 构建打包",
  "depth": 2
}, {
  "id": "step-2---本地预览",
  "text": "step 2 - 本地预览",
  "depth": 2
}];
const title = "项目构建打包";
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
      id: "项目构建打包",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#项目构建打包",
        children: "#"
      }), "项目构建打包"]
    }), "\n", jsx(_components.p, {
      children: "接下来我们对项目进行构建打包，并进行产物的预览。"
    }), "\n", jsxs(_components.h2, {
      id: "step-1---构建打包",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#step-1---构建打包",
        children: "#"
      }), "step 1 - 构建打包"]
    }), "\n", jsx(_components.p, {
      children: "在项目根目录下执行以下命令："
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
              children: "run"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "build"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["执行完毕后，会在 ", jsx(_components.code, {
        children: "docs"
      }), " 目录下生成一个 ", jsx(_components.code, {
        children: "dist"
      }), " 目录，里面就是我们的打包产物。"]
    }), "\n", jsxs(_components.h2, {
      id: "step-2---本地预览",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#step-2---本地预览",
        children: "#"
      }), "step 2 - 本地预览"]
    }), "\n", jsx(_components.p, {
      children: "在项目根目录下执行以下命令："
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
              children: "run"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "preview"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "执行完毕后，终端会显示一个本地预览地址，在浏览器打开即可看到预览页面。"
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
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "E:\\github\\vigor.js\\docs"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Preview "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "server"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "is"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "running"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "at"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "http://localhost:"
            }), jsx(_components.span, {
              style: {
                color: "#B48EAD"
              },
              children: "9999"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
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
