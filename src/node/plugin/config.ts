import { PACKAGE_ROOT } from "node/constants";
import { join } from "path";
import { SiteConfig } from "types/index";
import { Plugin } from "vite";
import sirv from "sirv";
import path from "path";
import fs from "fs-extra";

const SITE_DATA_ID = "vigor:site-data";

export function pluginConfig(config: SiteConfig): Plugin {
  return {
    name: "vigor:site-data",
    resolveId(id) {
      if (id === SITE_DATA_ID) {
        // 在vite中一个虚拟模块会在前面加一个'\0'，这算是一个约定
        return "\0" + SITE_DATA_ID;
      }
    },
    load(id) {
      if (id === "\0" + SITE_DATA_ID) {
        return `export default ${JSON.stringify(config.siteData)}`;
      }
    },
    // 通过config钩子设置别名，此处设置的别名会自动与vite配置中的别名呼应
    config() {
      return {
        root: PACKAGE_ROOT,
        resolve: {
          alias: {
            "@runtime": join(PACKAGE_ROOT, "src", "runtime", "index.ts"),
            "@constants": join(PACKAGE_ROOT, "src", "node", "constants", "index.ts"),
            "@types": join(PACKAGE_ROOT, "src", "types", "index.ts"),
          },
        },
        css: {
          // 在scss中定义类名的时候使用 '-' 格式可以转换为小驼峰形式进行使用
          // 比如：
          // scss: .main-bg
          // tsx: mainBg
          modules: {
            localsConvention: "camelCaseOnly",
          },
        },
      };
    },
    // 构建一个配置服务器来加载docs文件夹下public中的静态资源
    // sirv 是一个优化过的轻量级中间件，用来处理静态资源请求
    configureServer(server) {
      const publicDir = path.join(config.root, "public");
      if (fs.existsSync(publicDir)) {
        server.middlewares.use(sirv(publicDir));
      }
    },
    // 一个学习的内容，本身未实现，比较复杂的一个逻辑。
    // 钩子函数：当配置文件发生改变时，达到热更新的效果
    // async handleHotUpdate(ctx) {
    //   const customWatchedFiles = [config.configPath];
    //   const include = (id: string) => customWatchedFiles.some((file) => id.includes(file));
    //   if (include(ctx.file)) {
    //     `\n${relative(config.root, ctx.file)} has changed, restarting server...`;
    //     // 重启Dev Server的方案
    //     // 手动调用dev.ts中的createServer方法
    //   }
    // },
  };
}
