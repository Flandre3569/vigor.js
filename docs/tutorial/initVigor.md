# 初始化vigor

## step 1 - 创建项目
```bash
mkdir vigor-app && cd vigor-app
```
## step 2 - 初始化项目
```bash
npm init -y
```
## step 3 - 安装vigor.js
```bash
# npm
npm install vigor-moon
# yarn
yarn add vigor-moon
# pnpm
pnpm add vigor-moon
```
## step 4 - 创建并编写文章内容
```bash
mkdir docs && echo '# Hello World' > docs/index.md
```
## step 5 - 设置启动脚本
`vigor-app/docs/package.json`
```json
"scripts": {
  "dev": "vigor dev docs",
  "build": "vigor build docs",
  "preview": "vigor preview docs"
},
```
## step 6 - 启动项目本地开发服务
```bash
npm run dev
```
服务器将在本地 [http://localhost:5173](http://localhost:5173) 启动。