import { cac } from "cac";
import { createDevServer } from "./dev";
import { build } from "./build";
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

cli.parse();
