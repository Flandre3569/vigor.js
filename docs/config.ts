import { defineConfig } from "../dist";

// 使用defineConfig包住之后，便可以检测类型
export default defineConfig({
  title: "123",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "指南",
        link: "/",
      },
    ],
  },
});
