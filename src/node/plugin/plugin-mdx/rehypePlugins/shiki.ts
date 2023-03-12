import { Plugin } from "unified";
import { Root, Text } from "hast";
import { visit } from "unist-util-visit";
import { fromHtml } from "hast-util-from-html";
import shiki from "shiki";

interface Options {
  highlighter: shiki.Highlighter;
}

export const shikiPlugin: Plugin<[Options], Root> = ({ highlighter }) => {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (
        node.tagName === "pre" &&
        node.children[0]?.type === "element" &&
        node.children[0]?.tagName === "code"
      ) {
        const codeNode = node.children[0];
        const codeContent = (codeNode.children[0] as Text).value;
        const codeClassName = codeNode.properties?.className?.toString() || "";
        const lang = codeClassName.split("-")[1];

        if (!lang) return;

        const highlightCode = highlighter.codeToHtml(codeContent, { lang });
        const fragmentAST = fromHtml(highlightCode, { fragment: true });
        parent.children.splice(index, 1, ...fragmentAST.children);
      }
    });
  };
};
