import { build as viteBuild, InlineConfig } from "vite";
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from "./constants/index";
import { join } from "path";
import { PACKAGE_ROOT } from "./constants/index";

import type { RollupOutput } from "rollup";
import * as fs from "fs-extra";
import pluginReact from "@vitejs/plugin-react";

export async function bundle(root: string) {
  // 使用vite进行打包，将重复逻辑进行抽离
  const resolveViteConfig = (isServer: boolean): InlineConfig => ({
    mode: "production",
    root,
    plugins: [pluginReact()],
    build: {
      ssr: isServer,
      outDir: isServer ? ".temp" : "build",
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
      viteBuild(resolveViteConfig(false)),
      // server build
      viteBuild(resolveViteConfig(true)),
    ]);
    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput];
  } catch (error) {
    console.log(error);
  }
}

export async function renderPage(render: () => string, root: string, clientBundle: RollupOutput) {
  // 拿到将html渲染为字符串的结果
  const appHtml = render();

  // 拼接为真正的html页面
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>vigor.js</title>
    </head>
    <body>
      <div id="root">${appHtml}</div>
    </body>
    </html>
  `.trim();

  await fs.ensureDir(join(root, "build"));
  // 将以上页面html产物写到对应的文件目录中
  await fs.writeFile(join(root, "build/index.html"), html);
  // 移除掉ssr的产物
  await fs.remove(join(root, ".temp"));
}

export async function build(root: string = process.cwd()) {
  // bundle => client + server
  const [clientBundle] = await bundle(root);
  debugger;
  // 引入 server-entry 模块,也就是引入刚才打包生成的ssr产物
  const serverEntryPath = `${PACKAGE_ROOT}/docs/.temp/ssr-entry.js`;
  // 服务端渲染，产出HTML
  const { render } = require(serverEntryPath);
  await renderPage(render, root, clientBundle);
}