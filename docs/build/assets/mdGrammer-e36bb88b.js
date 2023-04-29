import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-e3655d60.js";
const frontmatter = void 0;
const toc = [{
  "id": "标题语法",
  "text": "标题语法",
  "depth": 2
}, {
  "id": "格式语法",
  "text": "格式语法",
  "depth": 2
}, {
  "id": "列表语法",
  "text": "列表语法",
  "depth": 2
}, {
  "id": "区块语法",
  "text": "区块语法",
  "depth": 2
}, {
  "id": "代码语法",
  "text": "代码语法",
  "depth": 2
}, {
  "id": "链接语法",
  "text": "链接语法",
  "depth": 2
}, {
  "id": "图片语法",
  "text": "图片语法",
  "depth": 2
}, {
  "id": "表格语法",
  "text": "表格语法",
  "depth": 2
}];
const title = "Markdown基本语法";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    ul: "ul",
    li: "li",
    ol: "ol",
    div: "div",
    span: "span",
    pre: "pre",
    code: "code"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "markdown基本语法",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#markdown基本语法",
        children: "#"
      }), "Markdown基本语法"]
    }), "\n", jsxs(_components.h2, {
      id: "标题语法",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#标题语法",
        children: "#"
      }), "标题语法"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          children: ["\n", jsx(_components.li, {
            children: "'#' 号"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "# 一级标题\r\n## 二级标题\r\n### 三级标题\r\n#### 四级标题\r\n##### 五级标题\r\n###### 六级标题\n"
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "2",
          children: ["\n", jsx(_components.li, {
            children: "'=' 或 '-' 号"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "一级标题\r\n=================\r\n\r\n二级标题\r\n-----------------\n"
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "格式语法",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#格式语法",
        children: "#"
      }), "格式语法"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          children: ["\n", jsx(_components.li, {
            children: "字体"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "*斜体文本*\r\n_斜体文本_\r\n**粗体文本**\r\n__粗体文本__\r\n***粗斜体文本***\r\n___粗斜体文本___\n"
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "2",
          children: ["\n", jsx(_components.li, {
            children: "分隔线"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "***\r\n\r\n* * *\r\n\r\n*****\r\n\r\n- - -\r\n\r\n----------\n"
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "3",
          children: ["\n", jsx(_components.li, {
            children: "删除线"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "GOOGLE.COM\r\n~~BAIDU.COM~~\n"
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "4",
          children: ["\n", jsx(_components.li, {
            children: "下划线"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "<u>带下划线文本</u>\n"
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "列表语法",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#列表语法",
        children: "#"
      }), "列表语法"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          children: ["\n", jsx(_components.li, {
            children: "无序列表"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "* 第一项\r\n* 第二项\r\n* 第三项\r\n\r\n+ 第一项\r\n+ 第二项\r\n+ 第三项\r\n\r\n\r\n- 第一项\r\n- 第二项\r\n- 第三项\n"
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "2",
          children: ["\n", jsx(_components.li, {
            children: "有序列表"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "1. 第一项\r\n2. 第二项\r\n3. 第三项\n"
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "区块语法",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#区块语法",
        children: "#"
      }), "区块语法"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          children: ["\n", jsx(_components.li, {
            children: "普通区块"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "> 区块引用\r\n> 区块语法\n"
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "2",
          children: ["\n", jsx(_components.li, {
            children: "嵌套区块"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "> 最外层\r\n> > 第一层嵌套\r\n> > > 第二层嵌套\n"
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "代码语法",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#代码语法",
        children: "#"
      }), "代码语法"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          children: ["\n", jsx(_components.li, {
            children: "代码块"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "\\```javaScript\r\nfunction deepClone(originValue) {\r\n  if (!isObject(originValue)) {\r\n    return originValue\r\n  }\r\n\r\n  const newObject = {}\r\n  for (const key in originValue) {\r\n    newObject[key] = deepClone(originValue[key])\r\n  }\r\n  return newObject\r\n}\r\n\\```\n"
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.ol, {
          start: "2",
          children: ["\n", jsx(_components.li, {
            children: "代码词"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "`vigor.js`\n"
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "链接语法",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#链接语法",
        children: "#"
      }), "链接语法"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "[链接名称](链接地址)\r\n\r\n或者\r\n\r\n<链接地址>\n"
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "图片语法",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#图片语法",
        children: "#"
      }), "图片语法"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: '![alt 属性文本](图片地址)\r\n\r\n![alt 属性文本](图片地址 "可选标题")\n'
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "表格语法",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#表格语法",
        children: "#"
      }), "表格语法"]
    }), "\n", jsxs(_components.div, {
      className: "",
      children: [jsx(_components.span, {
        className: "lang"
      }), jsx(_components.pre, {
        children: jsx(_components.code, {
          children: "|  表头   | 表头  |\r\n|  ----  | ----  |\r\n| 单元格  | 单元格 |\r\n| 单元格  | 单元格 |\n"
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
