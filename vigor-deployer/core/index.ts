#!/usr/bin/env node

// 命令行颜色显示
import chalk from "chalk";
// 命令行指令
import execa from "execa";
// 弹框
import prompts, { Choice } from "prompts";
import semver from "semver";

import { timeFormat } from "../utils/timeFormat";
// 解析命令行参数的
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

const runDirect = (bin: string, args: string[]) => {
  return execa(bin, args, { stdio: "inherit" });
};

// 高亮现在正在执行的步骤
const step = (msg) => console.log(chalk.cyan(msg));

const tip = (msg) => console.log(chalk.blue(msg));

export async function deploy() {
  // 整个部署过程：(采用的方式是github-vercel)
  // 需要注册一个github账号，然后通过Github账号登录vercel
  // 1. 连接github
  // 2. 把代码提交到github的仓库
  // 3. 安装vercel
  // 4. 连接vercel，并把github和vercel连接，再将项目上传
  // 5. 打印站点

  // github连接过程
  // 1.创建一个git仓库
  // 2.用户名配置:仓库用户名和仓库的邮箱
  // 3.git remote配置:
  //   1. 添加ssh协议的remote: git remote add origin_ssh 仓库ssh
  //   2. 对origin设置push和fetch url: git remote add origin 仓库ssh
  // 4.开始生成公钥，并在Github上配置
  // 5.执行git add .   git commit -m""  和 git push

  const githubChoice = [
    {
      title: "yes",
      value: "true",
    },
    {
      title: "no",
      value: "false",
    },
  ];
  const { haveGithub } = await prompts({
    type: "select",
    name: "haveGithub",
    message: "Have you connected to the github repository?",
    choices: githubChoice,
  });

  if (haveGithub === "false") {
    step("\nCreating git repository...");
    await runDirect("git", ["init"]);
    const { username, email } = await prompts([
      {
        type: "text",
        name: "username",
        message: "please input your github username:",
      },
      {
        type: "text",
        name: "email",
        message: "please input your github email:",
      },
    ]);

    step("\nCompleting your repo config...");
    runDirect("git", ["config", "--global", "user.name", username]);
    runDirect("git", ["config", "--global", "user.email", email]);

    if (!username || !email) return;

    const { repoSSH } = await prompts({
      type: "text",
      name: "repoSSH",
      message: "please input your repoSSH:",
    });

    if (!repoSSH) return;

    step("\nCompleting your remote config...");
    runDirect("git", ["remote", "add", "origin_ssh", repoSSH]);
    runDirect("git", ["remote", "add", "origin", repoSSH]);

    const { confirm } = await prompts({
      type: "confirm",
      name: "confirm",
      message: "Have you completed public key authentication?",
    });
    if (!confirm) {
      return;
    }
  }

  step("\nCommitting changes...");
  await runDirect("git", ["add", "-A"]);
  await runDirect("git", ["commit", "-m", `${timeFormat()}`]);
  await runDirect("git", ["push", "--set-upstream", "origin", "master"]);

  // 安装vercel并连接过程：
  // 1.下载vercel
  // 2.使用vercel脚手架将项目上传到vercel中
  // 3.连接vercel和github，实现CI/CD

  step("\nInstalling vercel...");
  await runDirect("npm", ["i", "vercel", "-g"]);

  step("\nVercel logining...");
  await runDirect("vc", ["login"]);

  step("\nUploading project to vercel...");
  await runDirect("vc", []);

  tip("\n🥳Deployed successfully. Congratulations!");
}

deploy().catch((e) => {
  console.error(e);
});
