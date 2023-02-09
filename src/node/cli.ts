import { cac } from "cac";
import { createDevServer } from "./dev";
const path = require("path");

const version = require("../../package.json").version;

const cli = cac("vigor").version(version).help();

cli
  .command("[root]", "start dev server")
  .alias("dev")
  .action(async (root: string) => {
    root = root ? path.resolve(root) : process.cwd();
    const server = await createDevServer(root);
    await server.listen();
    server.printUrls();
  });

cli.command("build [root]", "build for production").action(async (root: string) => {
  console.log("build", root);
});

cli.parse();
