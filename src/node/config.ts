import { resolve } from "path";
import fs from "fs-extra";

// vite内部的api，用来解析文件
import { loadConfigFromFile } from "vite";
import { UserConfig, SiteConfig } from "../types/index";

// 定义command和mode的类型
type Command = "build" | "serve";
type Mode = "development" | "production";

// 拿到的文件类型 对象、promise和返回对象或promise的函数
type RawConfig = UserConfig | Promise<UserConfig> | (() => UserConfig | Promise<UserConfig>);

function getUserConfig(root: string) {
  try {
    // .js和.ts文件均可
    const supportConfigFile = ["config.js", "config.ts"];
    // 判断配置文件是否存在，如果存在就拿到并返回回去
    //
    const configPath = supportConfigFile.map((file) => resolve(root, file)).find(fs.pathExistsSync);
    return configPath;
  } catch (e) {
    console.log(e);
  }
}

async function resolveUserConfig(command: Command, mode: Mode, root: string) {
  // 1. 获取配置文件路径
  const configPath = getUserConfig(root);
  // 2. 解析配置文件
  const res = await loadConfigFromFile(
    {
      command,
      mode,
    },
    configPath
  );
  if (res) {
    const { config: ordConfig = {} as RawConfig } = res;
    // rawConfig有三种形式
    // 1. object对象形式
    // 2. promise形式
    // 3. function函数形式
    // 所以要对rawConfig做一个统一的规范化
    const userConfig = await (typeof ordConfig === "function" ? ordConfig() : ordConfig);
    return [configPath, userConfig] as const;
  } else {
    return [configPath, {} as UserConfig] as const;
  }
}

// 解析网站（用户信息）信息
export function resolveSiteData(userConfig: UserConfig): UserConfig {
  return {
    title: userConfig.title || "vigor.js",
    description: userConfig.description || "A SSG framework.",
    themeConfig: userConfig.themeConfig || {},
    vite: userConfig.vite || {},
  };
}
export async function resolveConfig(
  // command和mode是vite的解析文件api需要的配置信息
  root: string,
  command: "serve" | "build",
  mode: "production" | "development"
): Promise<SiteConfig> {
  // 组合并返回解析出来的网站信息
  const [configPath, userConfig] = await resolveUserConfig(command, mode, root);
  const siteConfig: SiteConfig = {
    root,
    configPath: configPath,
    siteData: resolveSiteData(userConfig as UserConfig),
  };

  return siteConfig;
}

export function defineConfig(config: UserConfig): UserConfig {
  return config;
}
