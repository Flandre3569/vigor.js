import { preWrapperPlugin } from "./../plugin/plugin-mdx/rehypePlugins/preWrapper";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

import { describe, test, expect } from "vitest";

describe("Markdown compile cases", async () => {
  const processor = unified();
  processor.use(remarkParse).use(remarkRehype).use(rehypeStringify).use(preWrapperPlugin);

  test("test markdown compile", async () => {
    const mdContent = "# 123";
    const result = processor.processSync(mdContent);
    expect(result.value).toMatchInlineSnapshot('"<h1>123</h1>"');
  });

  test("compile code block", async () => {
    const mdContent = "```js\nconsole.log(123);\n```";
    const result = processor.processSync(mdContent);
    expect(result.value).toMatchInlineSnapshot(`
      "<pre><code class=\\"language-js\\">console.log(123);
      </code></pre>"
    `);
  });

  test("update compile code block", async () => {
    const mdContent = "```js\nconsole.log(123);\n```";
    const result = processor.processSync(mdContent);
    expect(result.value).toMatchInlineSnapshot(`
      "<div class=\\"language-js\\"><span class=\\"lang\\">js</span><pre><code class=\\"language-js\\">console.log(123);
      </code></pre></div>"
    `);
  });
});
