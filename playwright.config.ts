import type { PlaywrightTestConfig } from "@playwright/test";

// e2e测试过程
// 1.创建测试项目
// 2.启动测试项目
// 3.开启无头浏览器进行访问(playwirght会自动开启)
const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  timeout: 50000,
  webServer: {
    url: "http://localhost:5174",
    command: "pnpm prepare:e2e",
  },
  use: {
    headless: true,
  },
};

export default config;
