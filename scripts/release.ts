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
import path from "path";

const require = createRequire(import.meta.url);

// 解析命令行参数的
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

// 拿到当前版本号
const pkg = require("../package.json");
const currentVersion = pkg.version;

// 版本等级：
// patch -> 更新x.x.x的第三位，代表修改了某些bug
// minor -> 更新x.x.x的第二位，代表进行了feature添加或进行了部分升级
// major -> 更新x.x.x的第一位，代表大版本迭代
const versionUpdate = ["patch", "minor", "major"] as const;

const runDirect = (bin: string, args: string[]) => {
  return execa(bin, args, { stdio: "inherit" });
};

const step = (msg) => console.log(chalk.cyan(msg));

// 更新版本号
function updateVersion(version: string) {
  pkg.version = version;
  fs.writeFileSync(path.resolve(__dirname, "../package.json"), JSON.stringify(pkg, null, 2));
}

async function release() {
  const { release } = await prompt<{ release: string }>({
    type: "select",
    name: "release",
    message: "Select release type",
    choices: versionUpdate.map((i) => `${i} (${semver.inc(currentVersion, i)})`),
  });

  const targetVersion = release.match(/\((.*)\)/)![1];

  const { confirm } = await prompt<{ confirm: boolean }>({
    type: "confirm",
    name: "confirm",
    message: `Releasing ${targetVersion}. Confirm?`,
  });
  if (!confirm) {
    return;
  }

  step("\n Running test...");
  await runDirect("pnpm", ["test:unit"]);

  step("\n Running updateVersion...");
  updateVersion(targetVersion);

  step("\n Building package...");
  await runDirect("pnpm", ["build"]);

  step("\n Generating changelog...");
  await runDirect("pnpm", ["changelog"]);

  step("\n Committing changes...");
  await runDirect("git", ["add", "-A"]);
  await runDirect("git", ["commit", "-m", `"release: v${targetVersion}"`]);

  step("\n Publishing packages...");
  await runDirect("pnpm", ["publish", "--access", "public"]);

  step("\n Pushing to github...");
  await runDirect("git", ["tag", `v${targetVersion}`]);
  await runDirect("git", ["push", "origin", `refs/tags/v${targetVersion}`]);
  await runDirect("git", ["push"]);
}

release().catch((err) => {
  console.log(err);
  updateVersion(currentVersion);
});
