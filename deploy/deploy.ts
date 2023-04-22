// 命令行颜色显示
import chalk from "chalk";
// 命令行指令
import execa from "execa";
// 弹框
import { prompt } from "enquirer";
import semver from "semver";

// 为了让require能够正常使用
import { createRequire } from "module";

import fs from "fs-extra";

// const require = createRequire(import.meta.url);

const deployType = ["server and domain", "vercel"];
// 运行命令行指令
const runDirect = (bin: string, args: string[]) => {
  return execa(bin, args, { stdio: "inherit" });
};

// 打印当前进程
const step = (msg) => console.log(chalk.cyan(msg));

export async function deployInOwn() {
  const { domain, server } = await prompt<{ domain: string; server: string }>([
    {
      type: "input",
      name: "domain",
      message: "please input your domain name.",
    },
    {
      type: "input",
      name: "server",
      message: "please input your server address",
    },
  ]);
  console.log(domain, server);

  step("\n Deploying application in own site...");
}

export function deployInVercel() {
  step("\n Deploying application in vercel...");
}

export async function deploy() {
  const { choice } = await prompt<{ choice: string }>({
    type: "select",
    name: "choice",
    message: "Select choice type",
    choices: deployType,
  });

  if (choice === "vercel") {
    deployInVercel();
  } else {
    deployInOwn();
  }
}
