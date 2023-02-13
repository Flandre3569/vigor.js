import path from "path";
import fs from "fs-extra";

// execa是一个执行shell的javaScript封装
import * as execa from "execa";

// 执行脚本的根目录
const dirPath = path.resolve(__dirname, "..");
// 拿到目标目录
const exampleDir = path.resolve(__dirname, "../e2e/playground/basic");

// execa的基本参数
const defaultOptions = {
  stdin: process.stdin,
  stdout: process.stdout,
  stderr: process.stderr,
};

async function prepareE2E() {
  // 判断是否已经进行打包
  if (!fs.existsSync(path.resolve(__dirname, "../dist"))) {
    // 如果没有打包的话，则执行打包，也就是执行pnpm build
    execa.commandSync("pnpm build", {
      cwd: dirPath,
      ...defaultOptions,
    });
  }

  // 安装playwirght
  execa.commandSync("npx playwright install", {
    cwd: dirPath,
    ...defaultOptions,
  });

  // 开启e2e的服务器
  execa.commandSync("pnpm dev", {
    cwd: exampleDir,
    ...defaultOptions,
  });
}

prepareE2E();
