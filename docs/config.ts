import { defineConfig } from "../dist";

// 使用defineConfig包住之后，便可以检测类型
export default defineConfig({
  title: "vigor.js",
  description: "vigor.js official documentation website.",
  icon: "/logo.ico",
  themeConfig: {
    // nav内容
    nav: [
      {
        text: "指南",
        link: "/guide/introduction/quickStart",
      },
      {
        text: "教程",
        link: "/tutorial/initVigor",
      },
      {
        text: "v1.1.7",
        link: "https://github.com/Flandre3569/vigor.js/blob/master/CHANGELOG.md",
      },
    ],

    // sidebar内容
    sidebar: {
      "/guide/": [
        {
          text: "介绍",
          items: [
            {
              text: "快速开始",
              link: "/guide/introduction/quickStart",
            },
            {
              text: "配置目录",
              link: "/guide/introduction/makeConfig",
            },
          ],
        },
        {
          text: "架构",
          items: [
            {
              text: "MPA 和 SPA 对比",
              link: "/guide/architecture/MPAvsSPA",
            },
            {
              text: "SSG架构",
              link: "/guide/architecture/SSGarch",
            },
          ],
        },
        {
          text: "相关知识",
          items: [
            {
              text: "Markdown基本语法",
              link: "/guide/relatedInformation/mdGrammer",
            },
            {
              text: "关于README.md",
              link: "/guide/relatedInformation/infoReadme",
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
              link: "/tutorial/initVigor",
            },
            {
              text: "导航栏侧边栏配置",
              link: "/tutorial/navAndSidebar",
            },
            {
              text: "编写markdown",
              link: "/tutorial/writeMarkdown",
            },
            {
              text: "项目构建打包",
              link: "/tutorial/buildAndPreview",
            },
          ],
        },
        {
          text: "构建教程",
          items: [
            {
              text: "项目部署",
              link: "/tutorial/projectDeployer",
            },
            {
              text: "文档更新",
              link: "/tutorial/updateDocs",
            },
          ],
        },
      ],
    },
  },
});
