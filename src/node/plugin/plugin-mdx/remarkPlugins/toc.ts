import type { Plugin } from "unified";
import { Root } from "mdast";
import { visit } from "unist-util-visit";
import Slugger from "github-slugger";
import { parse } from "acorn";
import type { MdxjsEsm } from "mdast-util-mdxjs-esm";
import type { Program } from "estree-jsx";

interface TocItem {
  id: string;
  text: string;
  depth: number;
}

interface ChildNode {
  type: "link" | "text" | "inlineCode";
  value: string;
  children?: ChildNode[];
}

// 初始化slugger
const slugger = new Slugger();

export const TOCPlugin: Plugin<[], Root> = () => {
  return (tree) => {
    // 初始化toc数组
    const tocTree: TocItem[] = [];
    visit(tree, "heading", (node) => {
      if (!node.depth || !node.children) {
        return;
      }

      // 解析h2~h5
      // node.children 是一个数组，包含几种情况:
      // 1. 文本节点，如 '## title'
      // 结构如下:
      // {
      //   type: 'text',
      //   value: 'title'
      // }
      // 2. 链接节点，如 '## [title](/path)'
      // 结构如下:
      // {
      //   type: 'link',
      //     {
      //       type: 'text',
      //       value: 'title'
      //     }
      //   ]
      // }
      // 3. 内联代码节点，如 '## `title`'
      // 结构如下:
      // {
      //   type: 'inlineCode',
      //   value: 'title'
      // }
      if (node.depth > 1 && node.depth < 5) {
        const originText = (node.children as ChildNode[])
          .map((child) => {
            switch (child.type) {
              case "link":
                return child.children?.map((c) => c.value).join("") || "";
              default:
                return child.value;
            }
          })
          .join("");
        const id = slugger.slug(originText);
        tocTree.push({
          id,
          text: originText,
          depth: node.depth,
        });
      }
    });
    const insertCode = `export const toc = ${JSON.stringify(tocTree, null, 2)};`;

    tree.children.push({
      type: "mdxjsEsm",
      value: insertCode,
      data: {
        estree: parse(insertCode, {
          ecmaVersion: 2020,
          sourceType: "module",
        }) as unknown as Program,
      },
    } as MdxjsEsm);
  };
};
