import { j as jsx, a as jsxs, F as Fragment } from "./client-entry-8cfffbf2.js";
const frontmatter = void 0;
const toc = [{
  "id": "背景介绍-1",
  "text": "背景介绍：",
  "depth": 2
}, {
  "id": "框架区别-1",
  "text": "框架区别：",
  "depth": 2
}, {
  "id": "1-源码方面-1",
  "text": "1. 源码方面：",
  "depth": 3
}, {
  "id": "2-结构方面-1",
  "text": "2. 结构方面：",
  "depth": 3
}, {
  "id": "框架使用-1",
  "text": "框架使用：",
  "depth": 2
}, {
  "id": "express-1",
  "text": "express：",
  "depth": 3
}, {
  "id": "koa-1",
  "text": "koa：",
  "depth": 3
}];
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    a: "a",
    h2: "h2",
    p: "p",
    code: "code",
    h3: "h3",
    div: "div",
    span: "span",
    pre: "pre",
    strong: "strong"
  }, props.components);
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "koa-vs-express",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#koa-vs-express",
        children: "#"
      }), "Koa vs Express"]
    }), "\n", jsxs(_components.h2, {
      id: "背景介绍",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#背景介绍",
        children: "#"
      }), "背景介绍："]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "koa"
      }), "和", jsx(_components.code, {
        children: "express"
      }), "都是nodejs用来搭建服务器的框架，express较早出现，koa被称为node下一代的http框架，两者由一个团队设计产生，tj作为核心人物，使用两个框架中的任意一个都可以灵活简洁的搭建一个服务器。目前tj本人主要投入于koa的研发，express已经交给团队去维护。"]
    }), "\n", jsxs(_components.h2, {
      id: "框架区别",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#框架区别",
        children: "#"
      }), "框架区别："]
    }), "\n", jsxs(_components.h3, {
      id: "1-源码方面",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#1-源码方面",
        children: "#"
      }), "1. 源码方面："]
    }), "\n", jsx(_components.p, {
      children: "首先koa的源码设计本身更加优秀，koa本身主要是ES6及以上的代码写成，而express主要以ES5代码为主，相比于ES5的var和其他形式，ES6本身在语言层面就有着优势。"
    }), "\n", jsxs(_components.p, {
      children: ["其次koa设计比起express代码量更小，express相比之下体系工具更加完善，拥有各种强大的功能。而koa的各项功能主要依靠第三方库，但是依靠外库功能也比较完善。(", jsx(_components.code, {
        children: "multer/bodyparser/morgan"
      }), ")"]
    }), "\n", jsx(_components.p, {
      children: "koa在处理中间件的时候，依靠其dispatch函数，对中间件stack进行调度，而express使用next函数对中间件进行调度，dispatch会返回一个Promise，可以对异步函数进行管理，而express则采用的直接调用的方式，不利于对异步函数进行管理，只是在同步函数的管理中保持一致，而koa可以配合async和await对异步函数进行同步化，进一步规划函数运行。"
    }), "\n", jsxs(_components.h3, {
      id: "2-结构方面",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#2-结构方面",
        children: "#"
      }), "2. 结构方面："]
    }), "\n", jsx(_components.p, {
      children: "两者的设计结构基本类似。"
    }), "\n", jsx(_components.p, {
      children: "运作结构方面，同步函数作为中间件时，则两者都符合洋葱模型。但异步函数作为中间件时，koa符合洋葱模型而express不符合洋葱模型。"
    }), "\n", jsxs(_components.h2, {
      id: "框架使用",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#框架使用",
        children: "#"
      }), "框架使用："]
    }), "\n", jsxs(_components.h3, {
      id: "express",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#express",
        children: "#"
      }), "express："]
    }), "\n", jsx(_components.p, {
      children: "首先express本身是一个createApplication函数，因为是函数，则使用express时调用函数即可，"
    }), "\n", jsxs(_components.div, {
      className: "language-jsx",
      children: [jsx(_components.span, {
        className: "lang",
        children: "jsx"
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
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "express"
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
              children: "require"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "express"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
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
              children: "express"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "() "
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["而当调用listen函数时，本质上是新建原生http服务器", jsx(_components.code, {
        children: "http.createServer"
      }), " 然后调用", jsx(_components.code, {
        children: "listen"
      }), " 方法。"]
    }), "\n", jsxs(_components.p, {
      children: ["而使用", jsx(_components.code, {
        children: "app.use()"
      }), " 时，本质上是寻找router中的", jsx(_components.code, {
        children: "use"
      }), "方法，然后在router中进行处理。而router处理需要传入一个回调函数，router本身会返回一个", jsx(_components.code, {
        children: "request_handle"
      }), " ，也就是本质上调用的是你传入的回调函数。"]
    }), "\n", jsxs(_components.p, {
      children: ["当使用express的", jsx(_components.code, {
        children: "next"
      }), "方法时，处理原理是本身源码app中会有一个", jsx(_components.code, {
        children: "middleware"
      }), " 数组，内部成为stack，然后调用use/get/post等方法时传入的中间件，都会被放入这个数组中，然后express设计内部有一个计数器idx，调用一个", jsx(_components.code, {
        children: "next()"
      }), " ，则", jsx(_components.code, {
        children: "idx + 1"
      }), "，然后重复一遍调用，因为idx对数组的指向向后移了一位，则调用下一个中间件。"]
    }), "\n", jsxs(_components.h3, {
      id: "koa",
      children: [jsx(_components.a, {
        className: "header-anchor",
        href: "#koa",
        children: "#"
      }), "koa："]
    }), "\n", jsx(_components.p, {
      children: "koa本身是一个Application类，因为是类，则使用koa时需要新建一个类，"
    }), "\n", jsxs(_components.div, {
      className: "language-jsx",
      children: [jsx(_components.span, {
        className: "lang",
        children: "jsx"
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
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9"
              },
              children: "Koa"
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
              children: "require"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#A3BE8C"
              },
              children: "koa"
            }), jsx(_components.span, {
              style: {
                color: "#ECEFF4"
              },
              children: "'"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#81A1C1"
              },
              children: "const"
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
                color: "#81A1C1"
              },
              children: "new"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: " "
            }), jsx(_components.span, {
              style: {
                color: "#88C0D0"
              },
              children: "Koa"
            }), jsx(_components.span, {
              style: {
                color: "#D8DEE9FF"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          })]
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "koa的listen函数相似。"
    }), "\n", jsxs(_components.p, {
      children: ["koa调用use函数时，多个中间件也需要进行调用", jsx(_components.code, {
        children: "next()"
      }), "才能执行下一个中间件，因为koa源码本身不带有", jsx(_components.code, {
        children: "router"
      }), "，所以本身他的运行就是在application中调用的use，但是koa本身只有use方法，没有get/post/put/delete/patch等方法，需要借助", jsx(_components.code, {
        children: "@koa/router"
      }), "来进行请求或接口地址的过滤。在调用use方法时，内部也有一个", jsx(_components.code, {
        children: "muddleware"
      }), "数组，但是不同的是，koa在执行中间件时，会将所有的中间件进行整合，然后一起作为", jsx(_components.code, {
        children: "compose"
      }), "方法的参数，然后compose方法又去调用", jsx(_components.code, {
        children: "handleRequest"
      }), "方法，最终调用", jsx(_components.code, {
        children: "fnMiddleware"
      }), "函数，对中间件进行处理，中间件的处理方式和express类似，也是设置一个指针i，然后", jsx(_components.code, {
        children: "dispatch(0)"
      }), "调用第一个中间件，然后调用midllware数组中的i+1，继续调用下一个中间件，等到所有的中间件执行完成后，才对返回体进行处理，将结果返回。", jsxs(_components.strong, {
        children: ["也就是说，koa是先把所有的中间件处理完成后，才会对body进行返回，不会设置一次", jsx(_components.code, {
          children: "ctx.response.body"
        }), "就返回一次响应。"]
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
  toc
};
