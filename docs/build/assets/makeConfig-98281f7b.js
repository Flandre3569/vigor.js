import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-e3655d60.js";
const frontmatter = void 0;
const toc = [{
  "id": "创建配置文件",
  "text": "创建配置文件",
  "depth": 2
}, {
  "id": "导航栏配置",
  "text": "导航栏配置",
  "depth": 2
}, {
  "id": "侧边栏配置",
  "text": "侧边栏配置",
  "depth": 2
}];
const title = "配置目录";
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
    ul: "ul",
    li: "li",
    strong: "strong"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "配置目录",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#配置目录",
        children: "#"
      }), "配置目录"]
    }), "\n", jsxs(_components.h2, {
      id: "创建配置文件",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#创建配置文件",
        children: "#"
      }), "创建配置文件"]
    }), "\n", jsxs(_components.p, {
      children: ["首先，在", jsx(_components.code, {
        children: "docs"
      }), "目录下创建", jsx(_components.code, {
        children: "config.ts"
      }), "文件，创建完成之后目录结构如下所示："]
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
              children: "│  "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "└─"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "config.ts"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "│  "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "└─"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "index.md"
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
    }), "\n", jsx(_components.p, {
      children: "然后你可以尝试在config.ts中添加以下配置代码:"
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "lang",
        children: "ts"
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
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "defineConfig"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vigor-moon"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "default"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "defineConfig"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "title"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "my-site"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "你也可以显式的通过 --config 命令行选项指定一个配置文件（配置文件仍然需要放在 docs/ 路径下）。"
    }), "\n", jsx(_components.p, {
      children: "另外，关于配置文件有以下两个注意事项："
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["1.vigor.js支持", jsx(_components.code, {
          children: ".js"
        }), "、", jsx(_components.code, {
          children: ".ts"
        }), "、", jsx(_components.code, {
          children: ".mjs"
        }), "、", jsx(_components.code, {
          children: ".cjs"
        }), "文件作为配置文件，但是推荐使用", jsx(_components.code, {
          children: "TypeScript"
        }), "配置，因为可以使用", jsx(_components.code, {
          children: "defineConfig"
        }), "获取类型提示。"]
      }), "\n", jsxs(_components.li, {
        children: ["2.配置文件应该有一个默认导出，即默认导出一个", jsx(_components.code, {
          children: "siteConfig"
        }), "对象。"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["在上面的例子中，我们将站点的", jsx(_components.code, {
        children: "title"
      }), "设置为", jsx(_components.code, {
        children: "my-site"
      }), "，然后你可以通过", jsx(_components.code, {
        children: "pnpm dev"
      }), "运行启动开发服务器，你会看到站点的标题已经更改为", jsx(_components.code, {
        children: "my-site"
      }), "。这意味着你已经唤醒了你的第一个站点配置。"]
    }), "\n", jsxs(_components.h2, {
      id: "导航栏配置",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#导航栏配置",
        children: "#"
      }), "导航栏配置"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "nav"
      }), "字段用来配置导航栏，举个🌰："]
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "lang",
        children: "ts"
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
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "defineConfig"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vigor-moon"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "default"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "defineConfig"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "title"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "my-site"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "themeConfig"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// nav内容"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nav"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "text"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "主页"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "link"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ]"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "设置好以上配置之后，你的网站右上角就会显示一个 '主页' ，点击便会跳转到主页。"
    }), "\n", jsxs(_components.h2, {
      id: "侧边栏配置",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#侧边栏配置",
        children: "#"
      }), "侧边栏配置"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "sidebar"
      }), "字段用来配置侧边栏，举个🌰："]
    }), "\n", jsxs(_components.div, {
      className: "language-ts",
      children: [jsx(_components.span, {
        className: "lang",
        children: "ts"
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
              children: "import"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "defineConfig"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "from"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vigor-moon"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "default"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "defineConfig"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "title"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "my-site"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "themeConfig"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// nav内容"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "nav"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "text"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "主页"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "link"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    ]"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "// sidebar内容"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "sidebar"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "/guide/"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "text"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "介绍"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "items"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ["
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "{"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "              "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "text"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "快速开始"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "              "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "link"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "/guide/a"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: '"'
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "            "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "},"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "          ]"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "        "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "      ]"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["其中", jsx(_components.code, {
        children: "/guide/"
      }), "是匹配的父目录，", jsx(_components.code, {
        children: "text"
      }), "是父目录的标题，然后", jsx(_components.code, {
        children: "items"
      }), "中就是该父目录下子目录的列表。\r\n", jsxs(_components.strong, {
        children: ["注意：侧边栏的路径配置必须和你的文件目录是相对应的，也就是配置的", jsx(_components.code, {
          children: "/guide/a"
        }), "必须对应着", jsx(_components.code, {
          children: "guide"
        }), "目录下的", jsx(_components.code, {
          children: "a.md"
        }), "文件"]
      })]
    }), "\n", jsx(_components.p, {
      children: "当然还有其它的配置和自定义配置，你可以在 API页面 中获取更多配置细节。"
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
