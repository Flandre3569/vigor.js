import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

import { describe, test, expect } from "vitest";

describe("Markdown compile cases", async () => {
  const processor = unified();
  processor.use(remarkParse).use(remarkRehype).use(rehypeStringify);

  test("test markdown compile", async () => {
    const mdContent = "# 123";
    const result = processor.processSync(mdContent);
    expect(result.value).toMatchInlineSnapshot('"<h1>123</h1>"');
  });
});
