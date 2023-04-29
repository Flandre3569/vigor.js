# 项目部署
你可以将用多种方式来对项目进行部署，vigor.js 集成了对 `vercel` 的一键部署，本文主要讲解如何使用 vigor.js 进行一键部署。

## 预备工作
> 想要进行一键部署并且实现 CI/CD, 您需要进行一些准备工作

### 1. 注册 Github 和 Vercel 的账号
为了能够正常使用 Github 和 Vercel 提供的服务器和站点以及 CI/CD 服务，你需要申请对应的账号。

| 申请账号 | 对应官网 |
| ------- | ------- |
| Github | [https://github.com](https://github.com) |
| Vercel | [https://vercel.com](https://vercel.com) |

### 2. 在 Github 上建立一个项目仓库
申请好github的账号后，需要建立一个仓库，建议与当前 `vigor-app` 同名。

![点击new创建新仓库](http://mingxuan3569.oss-cn-beijing.aliyuncs.com/image/createRepo2.jpg)

## 创建文件 `.gitignore` 并编辑
```bash
# 执行脚本
echo 'node_modules' > docs/.gitignore

# 文件目录位置
├── docs
│   ├── index.md
│   ├── config.ts
│   ├── .gitignore
```



## 命令行交互实现部署
### 1. 在项目根目录下安装 vigor.js 的部署器：
```bash
npm install vigor-moon-deployer
```

### 2. 启动部署器并按提示完成项目上传
```bash
vigor-moon-deploy
```
- 1. 选择是否已经连接了github，（如果选择已经连接则直接跳过连接过程）：
```bash
E:\github\vigor-test master ❯ vigor-moon-deploy
? Have you connected to the github repository? » - Use arrow-keys. Return to submit.
>   yes
    no

```
- 2. 在未连接的基础上开始进行配置：
```bash
E:\github\vigor-test master ❯ vigor-moon-deploy
√ Have you connected to the github repository? » no

Creating git repository...
Initialized empty Git repository in E:/github/vigor-test/docs/.git/
√ please input your github username: ... your username
√ please input your github email: ... your email
```

> 注意在指定位置填写你刚刚注册的github用户名和注册使用的邮箱即可。

- 3. 前往Github仓库复制`ssh`连接码：
```bash
Completing your repo config...
√ please input your repoSSH: ... git@github.com:xxxxxx
```

- 4. 申请公钥并在 `github` 上配置令牌
> 注意在此步先不要关闭控制台。

打开一个新的终端，输入以下指令：
```bash
ssh-keygen -t ed25519 -C `youremail`
```

根据提示前往指定目录去复制公钥
> 注意一定要复制公钥，密钥不要泄露。

前往你的 github 主页，进入 `settings` 页面，然后进入 `SSH and GPG keys` 页面，添加新的 `sshkey`。

- 5. 配置好令牌后进入提交阶段
```bash
Completing your remote config...
√ Have you completed public key authentication? ... yes

Committing changes...
warning: LF will be replaced by CRLF in build/404.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in build/assets/client-entry-5fb0b15e.js.
....
```

### 3. 启动 `vercel-cli` 并按提示完成项目上传
> 完成上传后，vercel-cli 会自动启动
```bash
E:\github\vigor-test master ❯
Installing vercel...

# 选择github登录
Vercel CLI 28.20.0
? Log in to Vercel
● Continue with GitHub
○ Continue with GitLab
○ Continue with Bitbucket
○ Continue with Email
○ Continue with SAML Single Sign-On
  ─────────────────────────────────
○ Cancel

# 执行deploy
# 注意code located目录是build目录，但是如果是windows系统中`/`会被解析为`\`，这样便会发布失败。
Vercel CLI 28.20.0
? Set up and deploy “E:\github\vigor-app”? [Y/n] y
? Which scope do you want to deploy to? xxxxx
? Link to existing project? [y/N] n
? What’s your project’s name? vigor-app
? In which directory is your code located? ./docs/build
Local settings detected in vercel.json:
No framework detected. Default Project Settings:
- Build Command: `npm run vercel-build` or `npm run build`
- Development Command: None
- Install Command: `yarn install`, `pnpm install`, or `npm install`
- Output Directory: `public` if it exists, or `.`
? Want to modify these settings? [y/N] n
🔗  Linked to xxxxx/vigor-app (created .vercel)
```

最后前往 `vercel` 自己的主页里，打开项目就可以看到 vercel 给项目分配的域名了。在浏览器中打开域名就可以看到你刚刚发布的网站了。
```
DOMAINS:
vigor-app.vercel.app
```

**至此，你就拥有自己的文档网站了🎉**

## CI / CD
进入 vercel 个人主页，点击进入 `vigor-app` 仓库，然后选择
```
Connect Git Repository
```
然后连接上自己对应的仓库，那么每次更新 `github` 仓库时，`vercel` 便会自动重新构建你的网站。


