# 配置目录

## 创建配置文件
首先，在`docs`目录下创建`config.ts`文件，创建完成之后目录结构如下所示：
```bash
.
├─ docs
│  └─ config.ts
│  └─ index.md
└─ package.json
```
然后你可以尝试在config.ts中添加以下配置代码:
```ts
import { defineConfig } from "vigor-moon";

export default defineConfig({
  title: "my-site",
})
```
你也可以显式的通过 --config 命令行选项指定一个配置文件（配置文件仍然需要放在 docs/ 路径下）。

另外，关于配置文件有以下两个注意事项：

- 1.vigor.js支持`.js`、`.ts`、`.mjs`、`.cjs`文件作为配置文件，但是推荐使用`TypeScript`配置，因为可以使用`defineConfig`获取类型提示。
- 2.配置文件应该有一个默认导出，即默认导出一个`siteConfig`对象。

在上面的例子中，我们将站点的`title`设置为`my-site`，然后你可以通过`pnpm dev`运行启动开发服务器，你会看到站点的标题已经更改为`my-site`。这意味着你已经唤醒了你的第一个站点配置。

## 导航栏配置
`nav`字段用来配置导航栏，举个🌰：
```ts
import { defineConfig } from "vigor-moon"

export default defineConfig({
  title: "my-site",
  themeConfig: {
    // nav内容
    nav: [
      {
        text: "主页",
        link: "/",
      },
    ]
  }
})
```
设置好以上配置之后，你的网站右上角就会显示一个 '主页' ，点击便会跳转到主页。

## 侧边栏配置
`sidebar`字段用来配置侧边栏，举个🌰：
```ts
import { defineConfig } from "vigor-moon";

export default defineConfig({
  title: "my-site",
  themeConfig: {
    // nav内容
    nav: [
      {
        text: "主页",
        link: "/",
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
              link: "/guide/a",
            },
          ]
        }
      ]
    }
  }
})
```
其中`/guide/`是匹配的父目录，`text`是父目录的标题，然后`items`中就是该父目录下子目录的列表。
**注意：侧边栏的路径配置必须和你的文件目录是相对应的，也就是配置的`/guide/a`必须对应着`guide`目录下的`a.md`文件**

当然还有其它的配置和自定义配置，你可以在 API页面 中获取更多配置细节。