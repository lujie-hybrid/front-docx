# 前端环境的配置

## 基本工具的安装

- Node.js 的安装 → [官网链接](https://nodejs.org/zh-cn/download/)
- git 的安装 → [下载地址](https://git-scm.com/downloads)
- yarn <font color=red>（npm 有可能下载比较慢，用这个进行依赖的安装）</font>
::: tip 步骤：
:one: &nbsp;安装： [yarn 下载地址](https://yarn.bootcss.com/docs/install/#windows-stable) （或者通过命令直接全局安装 **npm i yarn -g**）\
:two: &nbsp;使用方式： **yarn** 等价于 **npm run**，npm run dev / yarn dev
:::
- vscode 的安装 → [vscode 下载地址](https://code.visualstudio.com/)

## 基本工具安装可能存在的问题

- node-sass 的错误【主要是 node-sass 的依赖包地址的问题】
  > 命令行里直接输入指令 npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
- event.js error 的错误【表示端口占用】
  > 去计算机的环境变量里面的用户变量的 Path 里增加 C:\Windows\System32

## yarn 安装后运行时候的问题

<font color=red>下面这个错误是因为系统限制了自定义指令的执行权限，所以把权限放开就好</font>

![yarn错误指令展示](../images/yarn-err.jpg)

- 打开 windows 的搜索，输入 powershell，找到 windows PowerShell，右击管理员身份运行
- 输入命令： **set-ExecutionPolicy RemoteSigned**
- 按照界面意思 输入 **Y**，然后就可以运行 yarn 的指令了

## 拉取前端 git 库的代码

<font color=red>**主分支master上不可直接进行开发**</font>
```js
 git clone 项目地址
 git checkout -b 分支名
 ...
```

## 配置开发环境/打包

**:one:** &nbsp;进入到【项目根目录】\
**:two:** &nbsp;在项目根目录按住 shift，鼠标右击，点击【在此处打开 powershell 窗口】\
**:three:** &nbsp;安装项目需要的依赖 **yarn || npm install** :eight_spoked_asterisk: ，会出现 **node_modules** 文件夹\
**:four:** &nbsp;开发/打包运行命令

::: tip 步骤：
:one: 查看运行的指令：项目根目录找到 package.json &nbsp;:arrow_right:&nbsp; 打开找到 scripts 的关键字，如下图：\
:two: **vue-cli-service serve** 对应开发环境 &nbsp;||&nbsp; **vue-cli-service build** 对应生产打包，找到前面对应的 **key**
:::
> 
> 

```js {2-4}
 "scripts": {
    "dev": "vue-cli-service serve", // 开发环境
    "build:prod": "vue-cli-service build", // 生产环境
    "build:test": "vue-cli-service build --mode test", // 测试环境 --mode设置环境变量
    "preview": "node build/index.js --preview",
    "lint": "eslint --ext .js,.vue src",
    "lint-fix": "eslint --fix --ext .js,.vue src"
  },
```

:white_check_mark: **综上所述，结果如下：**
::: warning 不同环境：
开发环境指令：**npm run dev / yarn dev** \
生产环境打包指令：**npm run build:prod / yarn build:prod** \
测试环境指令：**npm run build:stage / yarn build:stage**
:::

:::danger 环境变量
`开发`，`生产`，`测试` 的环境变量的配置可以参考 [**官网**](https://cli.vuejs.org/zh/guide/mode-and-env.html)
:::

## 开发环境代理配置

**:one:** &nbsp;找到项目根目录下的 vue.config.js \
**:two:** &nbsp;找到 vue.config.js 里面的 devServer 的 proxy

```js {10-20}
devServer: {
    port: 8865, // 端口
    open: true,  // devServer启动后会自动打开浏览器
    // 提示错误 出现错误时候会出现遮罩
    overlay: {
      warnings: false,
      errors: true,
    },
    // 代理，用于解决接口联调跨域问题
    proxy: {
      // 下面这个VUE_APP_BASE_API是环境变量,通过不同环境,访问不同的url前缀 /dev-api,/prod-api
      [process.env.VUE_APP_BASE_API]: {
        target: `http://dev.yctop.com`, // 这个是代理的接口地址
        changeOrigin: true,
        pathRewrite: {
          // 重写，将上面定义的url前缀替换，这个根据具体接口约定看是否需要
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
    },
  },
```
## 后端人员配置本地开发环境

**:one:** &nbsp;首先 Nodejs 必须安装，有 npm || yarn \
**:two:** &nbsp;git clone【前端项目地址】，拉取项目到本地 \
**:three:** &nbsp;进入到项目根目录，运行 npm install || yarn 安装依赖 \
**:four:** &nbsp;修改根目录下的vue.config.js里面的 proxy代理，改成你本地的接口地址 **http://127.0.0.1:port(端口)** \
**:five:** &nbsp;运行 npm run serve(启动命令) || yarn serve(启动命令), 启动项目即可  \
<font color=red>**:eight_spoked_asterisk: &nbsp;上面的启动命令不是一成不变的，是根据 package.json 里面的 scripts 的里面的 key 决定的**</font>
