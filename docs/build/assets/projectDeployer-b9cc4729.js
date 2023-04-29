import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-e3655d60.js";
const frontmatter = void 0;
const toc = [{
  "id": "预备工作",
  "text": "预备工作",
  "depth": 2
}, {
  "id": "1-注册-github-和-vercel-的账号",
  "text": "1. 注册 Github 和 Vercel 的账号",
  "depth": 3
}, {
  "id": "2-在-github-上建立一个项目仓库",
  "text": "2. 在 Github 上建立一个项目仓库",
  "depth": 3
}, {
  "id": "创建文件-gitignore-并编辑",
  "text": "创建文件 .gitignore 并编辑",
  "depth": 2
}, {
  "id": "命令行交互实现部署",
  "text": "命令行交互实现部署",
  "depth": 2
}, {
  "id": "1-在项目根目录下安装-vigorjs-的部署器",
  "text": "1. 在项目根目录下安装 vigor.js 的部署器：",
  "depth": 3
}, {
  "id": "2-启动部署器并按提示完成项目上传",
  "text": "2. 启动部署器并按提示完成项目上传",
  "depth": 3
}, {
  "id": "3-启动-vercel-cli-并按提示完成项目上传",
  "text": "3. 启动 vercel-cli 并按提示完成项目上传",
  "depth": 3
}, {
  "id": "ci--cd",
  "text": "CI / CD",
  "depth": 2
}];
const title = "项目部署";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    p: "p",
    code: "code",
    h2: "h2",
    blockquote: "blockquote",
    h3: "h3",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td",
    img: "img",
    div: "div",
    span: "span",
    pre: "pre",
    ul: "ul",
    li: "li",
    ol: "ol",
    strong: "strong"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "项目部署",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#项目部署",
        children: "#"
      }), "项目部署"]
    }), "\n", jsxs(_components.p, {
      children: ["你可以将用多种方式来对项目进行部署，vigor.js 集成了对 ", jsx(_components.code, {
        children: "vercel"
      }), " 的一键部署，本文主要讲解如何使用 vigor.js 进行一键部署。"]
    }), "\n", jsxs(_components.h2, {
      id: "预备工作",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#预备工作",
        children: "#"
      }), "预备工作"]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "想要进行一键部署并且实现 CI/CD, 您需要进行一些准备工作"
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "1-注册-github-和-vercel-的账号",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-注册-github-和-vercel-的账号",
        children: "#"
      }), "1. 注册 Github 和 Vercel 的账号"]
    }), "\n", jsx(_components.p, {
      children: "为了能够正常使用 Github 和 Vercel 提供的服务器和站点以及 CI/CD 服务，你需要申请对应的账号。"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "申请账号"
          }), jsx(_components.th, {
            children: "对应官网"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Github"
          }), jsx(_components.td, {
            children: jsx(_components.a, {
              href: "https://github.com",
              children: "https://github.com"
            })
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Vercel"
          }), jsx(_components.td, {
            children: jsx(_components.a, {
              href: "https://vercel.com",
              children: "https://vercel.com"
            })
          })]
        })]
      })]
    }), "\n", jsxs(_components.h3, {
      id: "2-在-github-上建立一个项目仓库",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-在-github-上建立一个项目仓库",
        children: "#"
      }), "2. 在 Github 上建立一个项目仓库"]
    }), "\n", jsxs(_components.p, {
      children: ["申请好github的账号后，需要建立一个仓库，建议与当前 ", jsx(_components.code, {
        children: "vigor-app"
      }), " 同名。"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "http://mingxuan3569.oss-cn-beijing.aliyuncs.com/image/createRepo2.jpg",
        alt: "点击new创建新仓库"
      })
    }), "\n", jsxs(_components.h2, {
      id: "创建文件-gitignore-并编辑",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#创建文件-gitignore-并编辑",
        children: "#"
      }), "创建文件 ", jsx(_components.code, {
        children: ".gitignore"
      }), " 并编辑"]
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
                color: "#616E88"
              },
              children: "# 执行脚本"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "echo"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "node_modules"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "docs/.gitignore"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# 文件目录位置"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "├── "
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
              children: "│   "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "├──"
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
              children: "│   "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "├──"
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
              children: "│   "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "├──"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: ".gitignore"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "命令行交互实现部署",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#命令行交互实现部署",
        children: "#"
      }), "命令行交互实现部署"]
    }), "\n", jsxs(_components.h3, {
      id: "1-在项目根目录下安装-vigorjs-的部署器",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-在项目根目录下安装-vigorjs-的部署器",
        children: "#"
      }), "1. 在项目根目录下安装 vigor.js 的部署器："]
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
              children: "vigor-moon-deployer"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h3, {
      id: "2-启动部署器并按提示完成项目上传",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-启动部署器并按提示完成项目上传",
        children: "#"
      }), "2. 启动部署器并按提示完成项目上传"]
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
              children: "vigor-moon-deploy"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          children: ["\n", jsx(_components.li, {
            children: "选择是否已经连接了github，（如果选择已经连接则直接跳过连接过程）："
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
              children: "E:\\github\\vigor-"
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "test"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "master"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "❯"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vigor-moon-deploy"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Have you connected to the github repository"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " » - Use arrow-keys. Return to submit."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "   yes"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "    no"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "2",
          children: ["\n", jsx(_components.li, {
            children: "在未连接的基础上开始进行配置："
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
              children: "E:\\github\\vigor-"
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "test"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "master"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "❯"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vigor-moon-deploy"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "√ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Have"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "you"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "connected"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "to"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "the"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "github"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "repository?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "»"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "no"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Creating "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "git"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "repository..."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Initialized "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "empty"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Git"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "repository"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "in"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "E:/github/vigor-test/docs/.git/"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "√ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "please"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "input"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "your"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "github"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "username:"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "your"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "username"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "√ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "please"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "input"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "your"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "github"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "email:"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "your"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "email"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "注意在指定位置填写你刚刚注册的github用户名和注册使用的邮箱即可。"
      }), "\n"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "3",
          children: ["\n", jsxs(_components.li, {
            children: ["前往Github仓库复制", jsx(_components.code, {
              children: "ssh"
            }), "连接码："]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
              children: "Completing "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "your"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "repo"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "config..."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "√ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "please"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "input"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "your"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "repoSSH:"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "git@github.com:xxxxxx"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "4",
          children: ["\n", jsxs(_components.li, {
            children: ["申请公钥并在 ", jsx(_components.code, {
              children: "github"
            }), " 上配置令牌"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "注意在此步先不要关闭控制台。"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "打开一个新的终端，输入以下指令："
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
              children: "ssh-keygen "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "-t"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "ed25519"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "-C"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "youremail"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "根据提示前往指定目录去复制公钥"
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "注意一定要复制公钥，密钥不要泄露。"
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["前往你的 github 主页，进入 ", jsx(_components.code, {
        children: "settings"
      }), " 页面，然后进入 ", jsx(_components.code, {
        children: "SSH and GPG keys"
      }), " 页面，添加新的 ", jsx(_components.code, {
        children: "sshkey"
      }), "。"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "5",
          children: ["\n", jsx(_components.li, {
            children: "配置好令牌后进入提交阶段"
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
              children: "Completing "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "your"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "remote"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "config..."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "√ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Have"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "you"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "completed"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "public"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "key"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "authentication?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "yes"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Committing "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "changes..."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "warning: "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "LF"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "will"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "be"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "replaced"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "by"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "CRLF"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "in"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "build/404.html."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "The "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "file"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "will"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "have"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "its"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "original"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "line"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "endings"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "in"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "your"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "working"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "directory"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "warning: "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "LF"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "will"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "be"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "replaced"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "by"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "CRLF"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "in"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "build/assets/client-entry-5fb0b15e.js."
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "...."
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.h3, {
      id: "3-启动-vercel-cli-并按提示完成项目上传",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#3-启动-vercel-cli-并按提示完成项目上传",
        children: "#"
      }), "3. 启动 ", jsx(_components.code, {
        children: "vercel-cli"
      }), " 并按提示完成项目上传"]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "完成上传后，vercel-cli 会自动启动"
      }), "\n"]
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
              children: "E:\\github\\vigor-"
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "test"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "master"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "❯"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Installing "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vercel..."
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# 选择github登录"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Vercel "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "CLI"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "28.20.0"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Log "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "in"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " to Vercel"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "● "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Continue"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "with"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "GitHub"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "○ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Continue"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "with"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "GitLab"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "○ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Continue"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "with"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Bitbucket"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "○ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Continue"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "with"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Email"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "○ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Continue"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "with"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "SAML"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Single"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Sign-On"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "  ─────────────────────────────────"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "○ "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Cancel"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# 执行deploy"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                color: "#616E88"
              },
              children: "# 注意code located目录是build目录，但是如果是windows系统中`/`会被解析为`\\`，这样便会发布失败。"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Vercel "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "CLI"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "28.20.0"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Set up and deploy “E:"
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "\\g"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "ithub"
            }), jsx(_components.span, {
              style: {
                color: "#EBCB8B"
              },
              children: "\\v"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "igor-app”"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Y/n"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " y"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Which scope "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "do"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " you want to deploy to"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " xxxxx"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Link to existing project"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "y/N"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " n"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " What’s your project’s name"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " vigor-app"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " In which directory is your code located"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " ./docs/build"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "Local "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "settings"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "detected"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "in"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "vercel.json:"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "No "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "framework"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "detected."
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Default"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Project"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Settings:"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "- "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Build"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Command:"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "npm run vercel-build"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " or "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "npm run build"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "- "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Development"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Command:"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "None"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "- "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Install"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Command:"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "yarn install"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "pnpm install"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "or"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "npm install"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "- "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Output"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Directory:"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "public"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "if"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " it exists, or "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "`"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " Want to modify these settings"
            }), jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "y/N"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "]"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " n"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "🔗  "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "Linked"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "to"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "xxxxx/vigor-app"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "created "
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: ".vercel"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["最后前往 ", jsx(_components.code, {
        children: "vercel"
      }), " 自己的主页里，打开项目就可以看到 vercel 给项目分配的域名了。在浏览器中打开域名就可以看到你刚刚发布的网站了。"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "DOMAINS:\r\nvigor-app.vercel.app\n"
        })
      })]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.strong, {
        children: "至此，你就拥有自己的文档网站了🎉"
      })
    }), "\n", jsxs(_components.h2, {
      id: "ci--cd",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#ci--cd",
        children: "#"
      }), "CI / CD"]
    }), "\n", jsxs(_components.p, {
      children: ["进入 vercel 个人主页，点击进入 ", jsx(_components.code, {
        children: "vigor-app"
      }), " 仓库，然后选择"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "Connect Git Repository\n"
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["然后连接上自己对应的仓库，那么每次更新 ", jsx(_components.code, {
        children: "github"
      }), " 仓库时，", jsx(_components.code, {
        children: "vercel"
      }), " 便会自动重新构建你的网站。"]
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
