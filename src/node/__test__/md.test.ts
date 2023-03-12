import { preWrapperPlugin } from "./../plugin/plugin-mdx/rehypePlugins/preWrapper";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkMdx from "remark-mdx";
import remarkStringify from "remark-stringify";
import rehypeStringify from "rehype-stringify";
import { shikiPlugin } from "./../plugin/plugin-mdx/rehypePlugins/shiki";
import shiki from "shiki";

import { describe, test, expect } from "vitest";
import { TOCPlugin } from "./../plugin/plugin-mdx/remarkPlugins/toc";

describe("Markdown compile cases", async () => {
  const processor = unified();
  processor
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(preWrapperPlugin)
    .use(shikiPlugin, { highlighter: await shiki.getHighlighter({ theme: "nord" }) });

  test("test markdown compile", async () => {
    const mdContent = "# 123";
    const result = processor.processSync(mdContent);
    expect(result.value).toMatchInlineSnapshot('"<h1>123</h1>"');
  });

  test("compile code block", async () => {
    const mdContent = "```js\nconsole.log(123);\n```";
    const result = processor.processSync(mdContent);
    expect(result.value).toMatchInlineSnapshot(`
      "<div class=\\"language-js\\"><span class=\\"lang\\">js</span><pre class=\\"shiki nord\\" style=\\"background-color: #2e3440ff\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #D8DEE9\\">console</span><span style=\\"color: #ECEFF4\\">.</span><span style=\\"color: #88C0D0\\">log</span><span style=\\"color: #D8DEE9FF\\">(</span><span style=\\"color: #B48EAD\\">123</span><span style=\\"color: #D8DEE9FF\\">)</span><span style=\\"color: #81A1C1\\">;</span></span>
      <span class=\\"line\\"></span></code></pre></div>"
    `);
  });

  // TOC -> Table of Contents
  test("Compile TOC", async () => {
    const mdContent = `## title`;
    const remarkProcessor = unified()
      .use(remarkParse)
      .use(remarkMdx)
      .use(TOCPlugin)
      .use(remarkStringify);
    const result = remarkProcessor.processSync(mdContent);
    expect(result.value.toString().replace(mdContent, "")).toMatchInlineSnapshot(`
      "

      export const toc = [
        {
          \\"id\\": \\"title\\",
          \\"text\\": \\"title\\",
          \\"depth\\": 2
        }
      ];
      "
    `);
  });
});
