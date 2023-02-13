import { createServer as createViteDevServer } from "vite";
import { pluginIndexHtml } from "./plugin/indexHtml";
import pluginReact from "@vitejs/plugin-react";
import { PACKAGE_ROOT } from "./constants/index";

export async function createDevServer(root = process.cwd()) {
  return createViteDevServer({
    root,
    plugins: [pluginIndexHtml(), pluginReact()],
    // 配置e2e的服务器检索目录外的项目的合法性
    server: {
      fs: {
        allow: [PACKAGE_ROOT],
      },
    },
  });
}
