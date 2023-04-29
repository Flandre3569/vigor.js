# 编写 Markdown 内容

## step 1 - 创建两个 Markdown 文件
```bash
├── docs
│   ├── index.md
│   ├── guide
│   │   └── quickStart.md
```

## step 2 - 创建 Home 页面的内容
**即在`index.md`文件中添加以下内容**
```markdown
---
pageType: home

hero:
  name: Vigor
  text: 基于 Vite & MDX 语法的静态站点生成器
  tagline: 简单、强大、高性能的现代化 SSG 方案
  image:
    src: /vigor.png
    alt: vigor
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quickStart
    - theme: alt
      text: GitHub 地址
      link: https://github.com/Flandre3569

features:
  - title: 'Vite: 极速的开发响应速度'
    details: 基于 Vite 构建，开发时的响应速度极快，即时的热更新，带给你极致的开发体验。
    icon: ✨
  - title: 'MDX: Markdown & React 组件来写内容'
    details: MDX 是一种强大的方式来写内容。你可以在 Markdown 中使用 React 组件。
    icon: 🪄
  - title: 'TypeScript: JavaScript超集'
    details: 使用TypeScript作为开发语言，拥有强大的类型检测，大型项目的极致享受。
    icon: 🪐
  - title: 'SSG: Static Site Generate'
    details: 通过 SSR 把动态化的 Web 应用渲染为多个静态页面，并且也保留了 CSR 的能力。
    icon: 🎉
  - title: 'Vercel: 开箱即用的网站托管平台'
    details: vercel 的定位是零配置的静态资源和无服务器云计算(serverless) 部署平台。
    icon: 🦄
  - title: 'React: 用于构建用户界面的JavaScript库'
    details: React 是一种开源框架，用于创建用户界面。 它最常用于创建 Web 应用程序。
    icon: 🍕

footer:
  copyright: 'sungMoon'
  message: '欢迎访问我的网页'
---
```

## step 3 - 引入 logo 图片
**将图片`vigor.png`（或其他格式的图片文件）放入`docs/public`目录下**
```bash
├── docs
│   ├── public
        └── vigor.png
```

## step 4 - 编写 `quickStart.md` 文件
```markdown
# Getting Started

## Hello

This is my first page.

> vigor.js is built on top of Vite.
```

## step 5 - 启动本地开发服务器预览效果
```bash
# 启动命令
npm run dev
```
```bash
# 预览地址
E:\github\vigor.js master ❯ vigor dev docs
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose   
```

致此，一个简单的 vigor.js 站点就搭建完成了。你可以根据自己的需求，继续添加更多的页面和内容。接下来我们来看看如何通过 vigor.js 对项目进行**生产环境**的构建打包。
