"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cac_1 = require("cac");
const dev_1 = require("./dev");
const path = require("path");
const version = require("../../package.json").version;
const cli = (0, cac_1.cac)("vigor").version(version).help();
cli
    .command("[root]", "start dev server")
    .alias("dev")
    .action(async (root) => {
    root = root ? path.resolve(root) : process.cwd();
    const server = await (0, dev_1.createDevServer)(root);
    await server.listen();
    server.printUrls();
});
cli.command("build [root]", "build for production").action(async (root) => {
    console.log("build", root);
});
cli.parse();
