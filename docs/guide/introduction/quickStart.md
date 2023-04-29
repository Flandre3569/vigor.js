# 快速开始

> 对于 vigor.js 的详细使用方法，请移步【[教程](/tutorial/initVigor)】

## 1. 初始化项目
### 手动安装
首先你的电脑上需要有Node，并配置好基础的环境，环境方面在下载完Node后会自动进行配置。

接下来我将一步步带你搭建一个使用vigor的雏形。

首先创建好你的项目目录：
```bash
mkdir vigor-app && cd vigor-app
```

执行`npm init -y`来初始化你的项目，你可以使用npm、yarn、pnpm三种方式安装vigor.js（*因为vigor名字被别人用了，所以发布名为vigor-moon*）。

```bash
# npm
npm install vigor-moon
# yarn
yarn add vigor-moon
# pnpm
pnpm install vigor-moon
```

然后通过如下命令创建文件：
```bash
mkdir docs && echo '# Hello World' > docs/index.md
```

在`package.json`中的`scripts`中加上如下脚本：
```json
{
  "scripts": {
    "dev": "vigor dev docs",
    "build": "vigor build docs",
    "preview": "vigor preview docs"
  }
}
```

## 2. 启动Dev Server
通过如下命令启动本地开发模式：
```bash
# npm
npm run dev
# yarn
yarn dev
# pnpm
pnpm dev
```
这样 vigor.js 将会在 [http://localhost:5173/](http://localhost:5173/) 启动一个本地服务。
随后进入浏览器访问这个地址，如果页面能够正常显示`Hello World`，则证明项目服务启动成功。
## 3. 生产环境构建
通过如下命令构建生产环境的产物：
```bash
# npm
npm run build
# yarn
yarn build
# pnpm
pnpm build
```
默认情况下，vigor.js 会把产物打包在`docs/dist`目录下。
## 4. 本地预览产物
通过如下命令启动本地预览服务：
```bash
# npm
npm run preview
# yarn
yarn preview
# pnpm
pnpm preview
```
这样 vigor.js 将在 [http://localhost:9999](http://localhost:9999) 启动预览服务。

至此，我们便快速构建并完成了一遍基础的vigor.js的基本使用指令。
