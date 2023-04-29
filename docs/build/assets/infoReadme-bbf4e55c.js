import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-e3655d60.js";
const frontmatter = void 0;
const toc = [{
  "id": "什么是-readmemd-",
  "text": "什么是 README.md ？",
  "depth": 2
}, {
  "id": "为什么要写-readmemd-",
  "text": "为什么要写 README.md ？",
  "depth": 2
}, {
  "id": "如何编写-readmemd-",
  "text": "如何编写 README.md ？",
  "depth": 2
}];
const title = "关于README.md";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    code: "code",
    div: "div",
    span: "span",
    pre: "pre",
    blockquote: "blockquote",
    ul: "ul",
    li: "li",
    ol: "ol"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "关于readmemd",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#关于readmemd",
        children: "#"
      }), "关于README.md"]
    }), "\n", jsxs(_components.h2, {
      id: "什么是-readmemd-",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#什么是-readmemd-",
        children: "#"
      }), "什么是 README.md ？"]
    }), "\n", jsxs(_components.p, {
      children: ["README（顾名思义：“read me“）是启动新项目时应该阅读的第一个文件。它既包含了一系列关于项目的有用信息又是一个项目的手册。它是别人在 Github 或任何 Git 托管网站点，打开你仓库时看到的第一个文件。当然在 vercel 中，进入你的项目页面第一眼看到的也是你的", jsx(_components.code, {
        children: "README"
      }), "文件。"]
    }), "\n", jsxs(_components.h2, {
      id: "为什么要写-readmemd-",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#为什么要写-readmemd-",
        children: "#"
      }), "为什么要写 README.md ？"]
    }), "\n", jsxs(_components.p, {
      children: ["当一个路人或者说你的朋友甚至是接任你职位的接任者打开你的项目的第一件事是进入", jsx(_components.code, {
        children: "src/index.ts"
      }), "中去看你的项目代码吗？自然不会。那么如果有一个方法可以让他们打开你的项目时花费几分钟就能了解你项目的方向、使用方法甚至是开发手段时，你会不会花费一点功夫来使用这个方法呢？这就是 ", jsx(_components.code, {
        children: "README.md"
      }), " 文件的作用。学会正确编写 ", jsx(_components.code, {
        children: "README.md"
      }), " 文件，既能让你的项目带给使用者更好的体验，也能体现你的严谨性和专业性，给你的项目提供更佳的吸引力。"]
    }), "\n", jsxs(_components.h2, {
      id: "如何编写-readmemd-",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#如何编写-readmemd-",
        children: "#"
      }), "如何编写 README.md ？"]
    }), "\n", jsxs(_components.p, {
      children: ["将 ", jsx(_components.code, {
        children: "README.md"
      }), " 文件存放在根目录下"]
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
                color: "#88C0D0"
              },
              children: "."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "├─ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "docs"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "├─ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "README.md"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "└─ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "package.json"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["内容的编写只需要按照 ", jsx(_components.code, {
        children: "markdown"
      }), " 的语法正常编写即可。"]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsxs(_components.p, {
        children: ["关于 markdown 语法详细请见 ", jsx(_components.a, {
          href: "/guide/relatedInformation/mdGrammer",
          children: "markdown"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["关键在于， ", jsx(_components.code, {
        children: "README"
      }), " 中要包括哪些内容呢？"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          children: ["\n", jsx(_components.li, {
            children: "标题，最好是带logo的。附带一点项目的基本数据，比如下载量之类的，可以用 icon 的形式展示。"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "2",
          children: ["\n", jsx(_components.li, {
            children: "说明文档链接或 demo 链接。简单展示一下项目。"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "3",
          children: ["\n", jsx(_components.li, {
            children: "描述，用文字和图片来描述项目。"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "4",
          children: ["\n", jsx(_components.li, {
            children: "使用的技术栈。"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "5",
          children: ["\n", jsx(_components.li, {
            children: "安装、使用的简介和入口。"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "6",
          children: ["\n", jsx(_components.li, {
            children: "贡献者。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
