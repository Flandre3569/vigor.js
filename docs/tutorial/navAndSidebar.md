# 侧边栏/导航栏配置

## step 1 - 添加配置文件
```bash
.
├─ docs
│  └─ config.ts
│  └─ index.md
└─ package.json
```

## step 2 - 初始化配置文件内容
```ts
import { defineConfig } from "vigor-moon";

export default defineConfig({
  // 具体内容
});
```

## step 3 - 添加导航栏配置
```ts
import { defineConfig } from "vigor-moon";

export default defineConfig({
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
    ],
  },
});
```

## step 4 - 添加侧边栏配置
```ts
import { defineConfig } from "vigor-moon";

export default defineConfig({
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            {
              text: "Getting Started",
              link: "/guide/quickStart",
            },
          ],
        },
      ],
    },
  },
});
```

## step 5 - 启动本地开发服务
```bash
npm run dev
```
服务器将在本地 [http://localhost:5173](http://localhost:5173) 启动。
> 需要注意的是，侧边栏配置的文件尚不存在，因此目前还没有侧边栏的内容，我们将在下一节中创建这个文件。

接下来我们就正式来编写 Markdown 文档，让我们的文档站点更加丰富起来。