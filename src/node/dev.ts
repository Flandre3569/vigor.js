import { createServer as createViteDevServer } from "vite";
import { pluginIndexHtml } from "./plugin/indexHtml";
import pluginReact from "@vitejs/plugin-react";
import { PACKAGE_ROOT } from "./constants/index";
import { resolveConfig } from "./config";
import { pluginConfig } from "./plugin/config";
import { pluginMdx } from "./plugin/plugin-mdx/index";
import { pluginRoutes } from "./plugin/plugin-routes";

// Unocss适配
import pluginUnocss from "unocss/vite";
import unocssOptions from "./unocssOptions";

export async function createDevServer(root: string, isSSR: boolean = false) {
  // 拿到配置文件的解析路径和文件经过解析后的内容
  const config = await resolveConfig(root, "serve", "development");

  // vite服务器
  return createViteDevServer({
    root: PACKAGE_ROOT,
    // 插件注册
    plugins: [
      pluginUnocss(unocssOptions),
      pluginIndexHtml(),
      pluginReact(),
      pluginConfig(config),
      pluginRoutes({ root: config.root, isSSR }),
      await pluginMdx(),
    ],
    // 配置e2e的服务器检索目录外的项目的合法性
    server: {
      fs: {
        allow: [PACKAGE_ROOT],
      },
    },
  });
}
