import pluginMdx from "@mdx-js/rollup";
import { Plugin } from "vite";
// github的markdown语法标准
import remarkGFM from "remark-gfm";

// 以下两个插件是用来将标题设置锚点的，通过以下两个插件设置的锚点，可以将标题赋上链接，然后就可以通过点击前往相应位置
import rehypePluginAutoLinkHeadings from "rehype-autolink-headings";
import rehypePluginSlug from "rehype-slug";

// 解析md文件的元信息
import remarkPluginFrontmatter from "remark-frontmatter";
import remarkPluginMDXFrontmatter from "remark-mdx-frontmatter";

import { preWrapperPlugin } from "./rehypePlugins/preWrapper";

// 代码高亮插件
import { shikiPlugin } from "./rehypePlugins/shiki";
import shiki from "shiki";

export async function pluginMdxRollup(): Promise<Plugin> {
  return pluginMdx({
    // 添加github的markdown标准-GFM语法
    remarkPlugins: [
      remarkGFM,
      remarkPluginFrontmatter,
      [remarkPluginMDXFrontmatter, { name: "frontmatter" }],
    ],
    // md文件解析插件
    rehypePlugins: [
      rehypePluginSlug,
      [
        rehypePluginAutoLinkHeadings,
        {
          properties: {
            class: "header-anchor",
          },
          content: {
            type: "text",
            value: "#",
          },
        },
      ],
      preWrapperPlugin,
      [shikiPlugin, { highlighter: await shiki.getHighlighter({ theme: "nord" }) }],
    ],
  }) as unknown as Plugin;
}
