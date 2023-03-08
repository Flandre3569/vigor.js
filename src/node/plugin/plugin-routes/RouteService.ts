import fastGlob from "fast-glob";
import path from "path";
import { normalizePath } from "vite";

interface RouteData {
  routePath: string;
  absolutePath: string;
}

export class RouteService {
  // #scanDir是定义一个私有变量
  #scanDir: string;
  // 路由信息数组
  #routeData: RouteData[] = [];

  constructor(scanDir: string) {
    this.#scanDir = scanDir;
  }

  async init() {
    // 从产物目录中获取对应文件，然后对对应文件进行排序
    const files = fastGlob
      .sync(["**/*.{js,jsx,ts,tsx,md,mdx}"], {
        cwd: this.#scanDir,
        absolute: true,
        ignore: ["**/build/**", "**/.vigor/**", "config.ts", "tsconfig.json"],
      })
      .sort();

    files.forEach((file) => {
      // 拿到文件相对路径（从A到B的）
      // normalizePath是对路径进行windows规范化
      const fileRelativePath = normalizePath(path.relative(this.#scanDir, file));

      // 生成路径路由
      const routePath = this.getRoutePath(fileRelativePath);
      this.#routeData.push({
        routePath,
        absolutePath: file,
      });
    });
  }

  // 得到路由路径
  getRoutePath(fileRelativePath: string) {
    const routePath = fileRelativePath.replace(/\.(.*)?$/, "").replace(/index$/, "");
    // 路由路径必须以'/'作为开头
    return routePath.startsWith("/") ? routePath : `/${routePath}`;
  }

  // 生成路由页面代码
  generateRoutesPath() {
    return `
      import React from "react";
      ${this.#routeData
        .map((route, index) => {
          return `import Route${index} from ${route.absolutePath}`;
        })
        .join("\n")}
      
      export const routes = [
        ${this.#routeData.map((route, index) => {
          return `{ path: "${normalizePath(
            route.routePath
          )}", element: React.createElement(Route${index}) }`;
        })}
      ]
    `;
  }
  getRouteData(): RouteData[] {
    return this.#routeData;
  }
}
