import { cac } from "cac";
import { createDevServer } from "./dev";
import { build } from "./build";
import { preview } from "./preview";
import { resolve } from "path";
import { resolveConfig } from "./config";
const version = require("../../package.json").version;

const cli = cac("vigor").version(version).help();

// terminal 指令集
// 开启服务指令
cli
  .command("[root]", "start dev server")
  .alias("dev")
  .action(async (root: string) => {
    root = root ? resolve(root) : process.cwd();
    const server = await createDevServer(root);
    await server.listen();
    server.printUrls();
  });

// 构建打包指令
cli.command("build [root]", "build in production").action(async (root: string) => {
  try {
    root = resolve(root);
    const config = await resolveConfig(root, "build", "production");
    await build(root, config);
  } catch (error) {
    console.log(error);
  }
});

// 本地预览产物
cli
  .command("preview [root]", "preview production build")
  .option("--port <port>", "port to use for preview server")
  .action(async (root: string, { port }: { port: number }) => {
    try {
      root = resolve(root);
      await preview(root, { port });
    } catch (e) {
      console.log(e);
    }
  });

cli.parse();
