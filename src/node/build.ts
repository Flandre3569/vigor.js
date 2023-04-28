import { build as viteBuild, InlineConfig } from "vite";
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from "./constants/index";
import path, { join, dirname } from "path";
import { PACKAGE_ROOT } from "./constants/index";

import type { RollupOutput } from "rollup";
import fs from "fs-extra";
import pluginReact from "@vitejs/plugin-react";

import { pathToFileURL } from "url";
import { SiteConfig } from "types";
import { pluginConfig } from "./plugin/config";
import { pluginIndexHtml } from "./plugin/indexHtml";

import { pluginMdx } from "./plugin/plugin-mdx/index";
import { Route, pluginRoutes } from "./plugin/plugin-routes";

import pluginUnocss from "unocss/vite";
import unocssOptions from "./unocssOptions";

import { HelmetData } from "react-helmet-async";

const CLIENT_OUTPUT = "build";

// 依靠vite的打包工具
export async function bundle(root: string, config: SiteConfig) {
  // 使用vite进行打包，将重复逻辑进行抽离
  // 设定isSSR，判断是否是生产环境下，用不用多路由打包
  const resolveViteConfig = async (isServer: boolean, isSSR = isServer): Promise<InlineConfig> => ({
    mode: "production",
    root,
    plugins: [
      pluginUnocss(unocssOptions),
      pluginIndexHtml(),
      pluginReact({ jsxRuntime: "automatic", jsxImportSource: "react" }),
      pluginConfig(config),
      // 此处的isSSR和isServer其实是一个东西，但是用的结构符，所以名称需要和之前设定的一样
      // 所以添加了一个参数，直接让其和isServer相同
      pluginRoutes({ root: config.root, isSSR }),
      await pluginMdx(),
    ],
    // 将react-router-dom直接打包进ssr的产物中，不用再单独引入第三方包了
    ssr: {
      noExternal: ["react-router-dom"],
    },
    build: {
      minify: false,
      ssr: isServer,
      outDir: isServer ? path.join(root, ".temp") : path.join(root, CLIENT_OUTPUT),
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isServer ? "cjs" : "esm",
        },
      },
    },
  });

  try {
    // // 对客户端进行打包
    // const clientBuild = async () => {
    //   return viteBuild(resolveViteConfig(false));
    // };

    // // 对服务端进行打包
    // const serverBuild = async () => {
    //   return viteBuild(resolveViteConfig(true));
    // };

    console.log("Building client and server bundles ...");

    // 因为clientBuild和serverBuild是相互独立的两个函数，所以使用Promise.all进行优化将二者并行执行
    const [clientBundle, serverBundle] = await Promise.all([
      // client build
      viteBuild(await resolveViteConfig(false)),
      // server build
      viteBuild(await resolveViteConfig(true)),
    ]);
    const publicDir = join(root, "public");
    if (fs.pathExistsSync(publicDir)) {
      await fs.copy(publicDir, join(root, CLIENT_OUTPUT));
    }
    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput];
  } catch (error) {
    console.log(error);
  }
}

// 渲染页面
export async function renderPage(
  render: (pagePath: string, helmetContext: object) => string,
  root: string,
  clientBundle: RollupOutput,
  routes: Route[],
  config: SiteConfig
) {
  // 水合
  const clientChunk = clientBundle.output.find((chunk) => chunk.type === "chunk" && chunk.isEntry);
  // 拼接为真正的html页面
  console.log("Rendering page in server side...");

  // 自动化注入head
  const helmetContext = {
    context: {},
  } as HelmetData;

  // 多路由打包
  await Promise.all(
    [
      ...routes,
      {
        path: "/404",
      },
    ].map(async (route) => {
      const routePath = route.path;

      // 拿到将html渲染为字符串的结果
      const appHtml = render(routePath, helmetContext.context);
      const styleAssets = clientBundle.output.filter(
        (chunk) => chunk.type === "asset" && chunk.fileName.endsWith(".css")
      );
      // const code = clientBundle.output[0].code;
      const titleIcon = config.siteData?.icon;
      const description = config.siteData?.description;
      const { helmet } = helmetContext.context;
      const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="${titleIcon}" type="image/svg+xml"></link>
        ${helmet?.title?.toString() || ""}
        ${helmet?.meta?.toString() || ""}
        ${helmet?.link?.toString() || ""}
        ${helmet?.style?.toString() || ""}
        <meta name="description" content="${description}">
        ${styleAssets.map((item) => `<link rel="stylesheet" href="/${item.fileName}">`).join("\n")}
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/${clientChunk?.fileName}" type="module"></script>
      </body>
      </html>
    `.trim();
      // 开始写入文件
      const fileName = routePath.endsWith("/") ? `${routePath}index.html` : `${routePath}.html`;
      await fs.ensureDir(join(root, "build", dirname(fileName)));

      // 将以上页面html产物写到对应的文件目录中
      await fs.writeFile(join(root, "build", fileName), html);
    })
  );

  // 移除掉ssr的产物
  await fs.remove(join(root, ".temp"));
}

// feature: SSG构建页面
export async function build(root: string = process.cwd(), config: SiteConfig) {
  // bundle => client + server
  const [clientBundle] = await bundle(root, config);
  // 引入 server-entry 模块,也就是引入刚才打包生成的ssr产物
  const serverEntryPath = join(root, ".temp", "ssr-entry.js");
  // 服务端渲染，产出HTML
  const { render, routes } = await import(pathToFileURL(serverEntryPath).toString()); // pathToFileURL是为了兼容windows的url格式
  try {
    await renderPage(render, root, clientBundle, routes, config);
  } catch (e) {
    console.log("Render is error\n", e);
  }
}
