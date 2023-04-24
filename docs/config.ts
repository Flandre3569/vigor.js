import { defineConfig } from "../dist";

// 使用defineConfig包住之后，便可以检测类型
export default defineConfig({
  title: "123",
  themeConfig: {
    // nav内容
    nav: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "指南",
        link: "/guide/a",
      },
      {
        text: "教程",
        link: "/tutorial/初始化vigor",
      },
    ],

    // sidebar内容
    sidebar: {
      "/guide/": [
        {
          text: "介绍",
          items: [
            {
              text: "快速上手",
              link: "/guide/a",
            },
            {
              text: "如何安装",
              link: "/guide/b",
            },
            {
              text: "操作指南",
              link: "/guide/c",
            },
          ],
        },
      ],
      "/tutorial/": [
        {
          text: "基础使用教程",
          items: [
            {
              text: "初始化vigor",
              link: "/tutorial/初始化vigor",
            },
          ],
        },
      ],
    },
  },
});
