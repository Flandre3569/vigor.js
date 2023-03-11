import { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { Root, Element } from "hast";

export const preWrapperPlugin: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, "element", (node) => {
      // 代码块生成的默认结构
      // "<pre><code class=\\"language-js\\">console.log(123);</code></pre>"
      // 1.先找到pre元素
      if (
        node.tagName === "pre" &&
        node.children[0]?.type === "element" &&
        node.children[0].tagName === "code" &&
        !node.data?.isVisited
      ) {
        const codeNode = node.children[0];
        const codeClassName = codeNode.properties?.className?.toString() || "";
        // language
        const lang = codeClassName.split("-")[1];

        const nodeClone: Element = {
          type: "element",
          tagName: "pre",
          children: node.children,
          data: {
            isVisited: true,
          },
        };

        node.tagName = "div";
        node.properties = node.properties || {};
        node.properties.className = codeClassName;

        node.children = [
          {
            type: "element",
            tagName: "span",
            properties: {
              className: "lang",
            },
            children: [
              {
                type: "text",
                value: lang,
              },
            ],
          },
          nodeClone,
        ];
      }
    });
  };
};
