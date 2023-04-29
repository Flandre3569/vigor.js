#!/usr/bin/env node

import chalk from "chalk";
import execa from "execa";
import prompts from "prompts";
import fs from "fs-extra";
import path from "path";

import minimist from "minimist";

// 高亮现在的步骤
const step = (msg) => console.log(chalk.cyan(msg));
// 展示部分提示
const tip = (msg) => console.log(chalk.blue(msg));

// 执行命令行脚本
const runDirect = (bin: string, args: string[]) => {
  return execa(bin, args, { stdio: "inherit" });
};

const pushGithub = async (msg: string) => {
  await runDirect("git", ["add", "-A"]);
  await runDirect("git", ["commit", "-m", msg]);
  await runDirect("git", ["push"]);
};

const BuildPath = path.resolve("/docs/build");

export async function publish() {
  // 1. 判断是否已经将github和vercel连接起来了
  // 2. 如果没有连接，则执行提交Github且提交vs
  // 3. 如果已经连接了，则只执行Github

  tip("\n😊You are now updating your document");
  const ifLinkChoices = [
    {
      title: "yes",
      value: "true",
    },
    {
      title: "no",
      value: "false",
    },
  ];
  const { ifLink } = await prompts({
    type: "select",
    name: "ifLink",
    message: "Have you connected Github and vercel?",
    choices: ifLinkChoices,
  });
  if (!ifLink) return;

  if (ifLink === "true") {
    if (fs.pathExistsSync(BuildPath)) await fs.remove(BuildPath);
    await runDirect("npm", ["run", "build"]);
    step("\nUpdating your github...");
    const { message } = await prompts({
      type: "text",
      name: "message",
      message: "Please input the title of publishment:",
    });
    if (!message) return;
    await pushGithub(message);
  } else {
    if (fs.pathExistsSync(BuildPath)) await fs.remove(BuildPath);
    await runDirect("npm", ["run", "build"]);
    step("\nUpdating your github...");
    const { message } = await prompts({
      type: "text",
      name: "message",
      message: "Please input the title of publishment:",
    });
    if (!message) return;
    await pushGithub(message);

    step("\nUpdating your vercel...");
    await runDirect("vc", ["login"]);
    await runDirect("vc", []);
  }

  tip("🥳published successfully. Congratulations!");
}

publish().catch((e) => {
  console.log(e);
});
