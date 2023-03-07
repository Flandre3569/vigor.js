import { createServer as createViteDevServer } from "vite";
import { pluginIndexHtml } from "./plugin/indexHtml";
import pluginReact from "@vitejs/plugin-react";
import { PACKAGE_ROOT } from "./constants/index";
import { resolveConfig } from "./config";
import { pluginConfig } from "./plugin/config";

export async function createDevServer(root: string) {
  // 拿到配置文件的解析路径和文件经过解析后的内容
  const config = await resolveConfig(root, "serve", "development");

  // vite服务器
  return createViteDevServer({
    root: PACKAGE_ROOT,
    plugins: [pluginIndexHtml(), pluginReact(), pluginConfig(config)],
    // 配置e2e的服务器检索目录外的项目的合法性
    server: {
      fs: {
        allow: [PACKAGE_ROOT],
      },
    },
  });
}
