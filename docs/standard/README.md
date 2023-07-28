# 前端规范

## 命名<Badge text="kebab-case or PascalBase" />

**:one:** &nbsp;**除 components/\*\* 文件夹命名**

除了 <code>**components**</code> 文件夹下的子文件夹，统一使用小写字母开头的 <code>**kebab-case**</code> 风格
::: tip 例子

- /src/assets/404-images/
- /src/views/user/base-info/
  :::

**:two:** &nbsp;**components 文件夹下的子文件夹**

统一使用大写字母开头的 <code>**PascalBase**</code> 风格

:::danger 组件类型：(通用组件 | 业务组件)
**:one:** &nbsp;通用组件

1. **功能性的组件**，基于 element-ui 二次封装的组合性组件，比如 `table+分页`，`表单根据配置自动生成select,input,checkbox,radio等`，`上传组件` 等
2. **基于第三方插件封装的 vue 文件**，比如 `echarts图表的封装`等，这种会注册为全局组件，可以直接引用
3. **基于第三方插件封装的 js 文件**，这种一般可以定义成`Class类`，在`index.js`进行导出，比如 `动画.js`等，这种需要`import引入`
4. **超过三次以上使用的业务组件**，多个地方使用，为了方便，可以定义为通用组件，组件命名`基于模块，见文知义`

**:two:** &nbsp;业务组件

1. **页面专属组件**，专属一个页面，这个一般是页面的结构，比如`头部，底部，aside，内容区,弹框`的划分，这个做的目的是防止页面过分庞大，杂乱，导致一个页面上千行代码
2. **多个页面(<=3)有相同或相似布局，封装成组件**，这种组件一般放在多个页面的上级模块的 components 目录下
   :::

:::warning 说明：

1. 通用组件放在 **/src/components/** 下,比如 element-ui 的二次封装组件
2. 页面专属的组件，放在各自页面下的 **./components** 目录下，模块下多个`（<=3）`页面使用，放在当前模块目录下的 **./components** 目录下， `超过3个地方` 使用的组件，可以定义为通用组件
3. 每个 components 目录下最多只有一层目录，且目录名称为组件的名称，统一使用大写字母开头<code>**PascalBase**</code> 风格，且目录下必须有 **index.vue 或 index.js**

:::

::: tip 例子

- /src/components/Breadcrumb/index.vue
- /src/components/animation/index.js
- /src/views/layout/components/SideBar/index.vue
  :::

**:three:** &nbsp;**除 \*.vue 文件的 命名**

除了 <code>**.vue 文件**</code> ，统一使用小写字母开头的 <code>**kebab-case**</code> 风格

::: tip 例子

- render-dom.js / sign-up.css / index.html / company-logo.png
- /src/views/msg/msg-list/msg-list-data.js
  :::

**:four:** &nbsp;**\*.vue 的文件命名**

除 <code>**index.vue**</code> 之外，统一使用大写字母开头的 <code>**PascalBase**</code> 风格

::: tip 例子

- /src/views/msg/msg-list/index.vue
- /src/views/msg/msg-list/MsgListHeader.vue
- /src/components/msg/msg-list/MsgWrap/MsgItem.vue
  :::

**:five:** &nbsp;**命名要求：**

::: warning 命名注意点：

- 名字的单词连接不要超过三级，project-manage-list 这种已经是极限
- 命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式
- 杜绝完全不规范的缩写，避免望文不知义
  :::
  ::: danger 错误示范 X

- 文件夹/文件名：my-project-manage-list 四级 , zhijianhuo 拼音模式
- abstract-class“缩写”命名成 abs-class；condition“缩写”命名成 condi
  :::

## Css/Sass 规范

如果不太了解 Sass，可以参考 [官网](https://www.sass.hk/)

<Badge text="提示" /> &nbsp;<code>css/sass</code> 的格式化可以使用 Vscode 的 Prettier 的快捷键 <code>alt+shift+F</code>

::: tip 注意点：<Badge text="重要" type="error" />

**:one:** &nbsp;项目可以选择使用 sass 或 css，通过 lang 进行区分，`<style lang="scss" scoped></style>`和`<style scoped></style>` \
**:two:** &nbsp;<font color=red>**scoped 必须添加，这样就是局部 css，要不然就会成为全局样式，会污染环境，产生各种样式覆盖的 bug**</font> \
**:three:** &nbsp; 加了 scoped 后，无法覆盖 elementui 默认样式，可参考 [Scoped CSS](https://vue-loader.vuejs.org/zh/guide/scoped-css.html)
:::
::: tip 规范：

**:one:** &nbsp;类名使用小写字母，以中划线分隔 \
**:two:** &nbsp;名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称，简单来说就是 <font color=red>**见名知义**</font>

```css
/* 不推荐 */
.fw-800 {
  font-weight: 800;
}
/* 推荐 */
.heavy {
  font-weight: 800;
}
```

**:three:** &nbsp;<font color="red">**禁止使用 ID 选择器及直接使用全局标签选择器，防止污染全局样式，推荐使用 class 选择器**</font>

```css
/* 不推荐 */
#header {
  padding-bottom: 0px;
  margin: 0em;
}
p {
  line-height: 16px;
}
.header p {
  line-height: 16px;
}

/* 推荐 */
.header {
  padding-bottom: 0px;
  margin: 0em;
}
.header .header-item {
  line-height: 16px;
}
```

**:four:** &nbsp;名称中划线-连接最多三级，不可超过 **三级** \
**:five:** 推荐使用 **直接子选择器**，而不是后代选择器，后代选择器可能会导致很多的样式覆盖的问题 \

```css
/* 不是最完美的 */
.content .title {
  font-size: 2rem;
}
/* 推荐 */
.content > .title {
  font-size: 2rem;
}
```

**:six:** &nbsp;尽量使用缩写属性

```css
/* 不推荐 */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;

/* 推荐 */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

**:seven:** &nbsp;省略 0 后面的单位

```css
/* 不推荐 */
.header {
  padding-bottom: 0px;
  margin: 0em;
}

/* 推荐 */
.header {
  padding-bottom: 0;
  margin: 0;
}
```

**:eight:** &nbsp;<font color=orange>**每个选择器及属性独占一行，这个是风格问题，可以使用 Prettier 配合 Vscode，一键格式化**</font> \
**:nine:** &nbsp;sass 中的变量、函数、混合、placeholder 等 采用驼峰式命名 \

<Badge text="注意" type="warning" /> &nbsp;覆盖 <code>element-ui</code> 样式时候，不要直接写 <code>.el-input</code> 这种全局的样式，这样会污染环境，需要父级加个 class，然后用后代选择器或直接子选择器进行连接，比如：

```css
/* 不推荐 */
.el-input {
  padding-bottom: 0px;
  margin: 0em;
}

/* 推荐 */
.header-form .el-input {
  padding-bottom: 0;
  margin: 0;
}
.header-form > .el-input {
  padding-bottom: 0;
  margin: 0;
}
```

:::

## Javascript 规范

:::warning 前言：

1. Javascript 的代码检查和代码风格会使用 `Eslint+Prettier` 进行控制，只要不符合标准，都会有错误或者警告信息，可以配合 `Vscode工具` 可以实现 [**一键格式化**](/tool/#eslint-的-vscode-快捷键配置)
2. 写代码时候，如果不太了解一些 Javascript 语言的注意点，可以参考 [**语言规范点**](/iframe/JS/)
   :::

::: tip 规范
**:one:** &nbsp;<Badge text="重要" type="error" /> 优先使用 `Es6+` 语法，不太了解 Es6 的可以参考 [Es6 教程](https://es6.ruanyifeng.com/#README)

**:two:** &nbsp;命名统一使用小写驼峰 `lowerCamelCase` 命名，尽量不要超过三个单词

```vue
<script>
export default {
  methods: {
    /**
     * @Date: 2022-02-23 16:02:34
     * @Desc:
     * @Return:
     * @Author: lujie
     * @param {Number} age
     * @param {Object} httpHeader
     */
    getHttpMessage(age = 18, httpHeader = {}) {
      const name = "张三";
      const userName = "李四";
    },
  },
};
</script>
```

**:three:** &nbsp;method 方法命名推荐 **`动词+名词`** 形式

```html
saveShopData / showShopInfo
```

**:four:** &nbsp; **`"", and 0, and NaN, false,null,undefined`** 的判断

```js
if(msg){
  ...   // 不是"", and 0, and NaN, false,null,undefined任何一个
}
if(!msg){
  ...  // 是"", and 0, and NaN, false,null,undefined 其中一个
}
```

**:five:** &nbsp;判断 **`undefined`**

```js
/* 不推荐 */
if (person === undefined) { ... }
/* 推荐 */
if (typeof person === 'undefined') { ... }
```

**:six:** &nbsp;<Badge text="注意" type="warning" /> console.log，debugger 只能用于调试，使用完请尽快删除

**:seven:** &nbsp; **条件判断和循环最多三层**，条件判断能使用 `三目运算符` 和 `逻辑运算符` 解决的，就不要使用条件判断，但是谨记不要写太长的三目运算符，如果超过 3 层请抽成函数

:::

## Vue 规范

Vue 文件使用了 `Eslint+Prettier` 对代码错误和代码风格进行控制，只要不符合标准，都会有错误或者警告信息，可以配合 `Vscode工具` 可以实现 [**一键格式化**](/tool/#eslint-的-vscode-快捷键配置)

::: tip 官网规范
**:one:** &nbsp;<Badge text="重要" type="error" /> 必要性的 `A级规则` 详细参考 &nbsp;[A 级](https://cn.vuejs.org/v2/style-guide/#优先级-A-的规则：必要的-规避错误) ，以下几个尤为重要

> [组件数据](https://cn.vuejs.org/v2/style-guide/#组件数据必要) \
> [Prop 定义](https://cn.vuejs.org/v2/style-guide/#Prop-定义必要) \
> [为 v-for 设置键值](https://cn.vuejs.org/v2/style-guide/#为-v-for-设置键值必要) \
> [避免 v-if 和 v-for 用在一起](https://cn.vuejs.org/v2/style-guide/#避免-v-if-和-v-for-用在一起必要) \
> [为组件样式设置作用域](https://cn.vuejs.org/v2/style-guide/#为组件样式设置作用域必要)

**:two:** &nbsp;<Badge text="推荐" type="green" /> 强烈推荐，增强可读性 `B级规则` 详细参考 &nbsp;[B 级](https://cn.vuejs.org/v2/style-guide/#优先级-B-的规则：强烈推荐-增强可读性) ，以下几个重点关注

> [单文件组件文件的大小写 —— 我们使用的是单词大写开头 (PascalCase)](https://cn.vuejs.org/v2/style-guide/#单文件组件文件的大小写强烈推荐) \
> [基础组件名 —— 我们是 E 开头，表示 efreight](https://cn.vuejs.org/v2/style-guide/#基础组件名强烈推荐) \
> [模板中的组件名大小写 —— 我们使用的是所有的地方都使用 kebab-case ](https://cn.vuejs.org/v2/style-guide/#模板中的组件名大小写强烈推荐) \
> [JS 中的组件名大小写 —— 特别是 import 和 name](https://cn.vuejs.org/v2/style-guide/#JS-JSX-中的组件名大小写强烈推荐) \
> [Prop 名大小写](https://cn.vuejs.org/v2/style-guide/#Prop-名大小写强烈推荐) \
> [模板中简单的表达式](https://cn.vuejs.org/v2/style-guide/#模板中简单的表达式强烈推荐) \
> [简单的计算属性](https://cn.vuejs.org/v2/style-guide/#简单的计算属性强烈推荐) \
> [指令缩写 —— 我们使用全部简写](https://cn.vuejs.org/v2/style-guide/#指令缩写强烈推荐)

**:three:** &nbsp;<Badge text="警告" type="error" /> 错误的使用方式，尽量避免 `D级规则` 详细参考 &nbsp;[D 级](https://cn.vuejs.org/v2/style-guide/#优先级-D-的规则：谨慎使用-有潜在危险的模式)
:::

::: tip 额外补充
**:one:** &nbsp;<Badge text="重要" type="error" /> **组件 Prop 的定义**

> 1. 必须使用 camelCase 驼峰命名
> 2. 必须指定类型
> 3. 必须加上注释，表明其含义
> 4. 必须加上 required 或者 default，两者二选其一
> 5. 如果有业务需要，必须加上 validator 验证
> 6. 属性可以分离就分离，不要一直就用一个 Object 处理，这样不太好控制属性类型和默认值
> 7. 当然一个组件属性也不要过分多，这个需要自己把控，属性个数控制在 9 个以内

```js
props: {
  // 组件状态，用于控制组件的颜色
   status: {
     type: String, // 这个必须
     required: true,
     validator: function (value) {
       return [
         'success',
         'info',
         'error'
       ].indexOf(value) !== -1
     }
   },
   // 用户级别
   userLevel：{
      type: String,
      required: true
   },
   // 个数
   count: {
      type: Number,
      default: 0
   },
   // 传入的信息
   message: {
      type: Object,
      default: ()=>({name:'efreight'})
   }
}
```

**:two:** &nbsp;vue 单文件标签顺序保持一致

```vue
<template></template>
<script></script>
<style></style>
```

**:three:** &nbsp;script 标签内部结构顺序统一，没有用到就不用写

```vue
<script>
export default {
  props: {},
  data() {
    return {};
  },
  components: {},
  computed: {},
  watch: {},
  directives: {},
  filters: {},
  // 生命周期函数 created,mounted,...
  created() {},
  methods: {},
};
</script>
```

**:four:** &nbsp;必须为 v-for 设置键值 `key` ,key 值使用唯一值，一般是 `id` ，尽量不要用 `index` ，特别是增删改的结构，用 index 会产生 bug \
**:five:** &nbsp;<Badge text="注意" type="warning" /> &nbsp;不要手动操作 DOM，优先考虑 ref \
**:six:** &nbsp;v-show 与 v-if 选择

> 如果运行时，需要非常频繁地切换，使用 v-show ；如果在运行时，条件很少改变，使用 v-if

:::

## 注释规范 <Badge text="重要" type="error" />

:::tip 规则：

**:one:** &nbsp;头部注释，对该文件进行说明，组件/页面/文件

- 通用功能性组件 `/src/components/** 介绍该组件的功能` ，比如：通用的 table + 分页
- 业务组件，介绍该组件 `哪个模块/哪个页面/组件介绍`
- 页面，介绍该页面是 `哪个模块/哪个页面`
- 文件，介绍该文件的 `功能作用，干啥用的`

**:two:** &nbsp;methods 函数注释，使用区域注释 `/*...*/` ，包括日期，描述，返回值，编辑者，参数

> <font color=red>函数注释会使用 vscode 插件 [koroFileHeader](/tool/#vscode-的功能点)，规定模板统一快捷键 `ctrl+win+t` 注释</font>

```js
methods:{
  /**
   * @Date: 2022-02-23 16:02:34
   * @Desc: 获取信息
   * @Return: ....
   * @Author: lujie
   * @param {Number} age
   * @param {Object} httpHeader
   */
  getHttpMessage(age = 18, httpHeader = {}) {
    const name = "张三";
    const userName = "李四";
    return name + userName;
  },
}
```

**:three:** &nbsp;变量和属性

> 每个变量都要注释，直接用 `//` 注释即可

**:four:** &nbsp;凡是 `import` 引入的，不管是项目内组件，本地图片，还是第三方插件等都要用 `//` 注释做简单介绍 \
**:five:** &nbsp; template 内部的注释，用 `<!--注释内容-->` 的模式分区块进行注释

```vue
<template>
  <!--头部导航-->
  <div></div>
  <!--中间内容区-->
  <div class="user-info"></div>
  <!--底部链接-->
  <div class="footer"></div>
</template>
```

**:six:** &nbsp; 样式的注释，用 `/* 注释内容 */` 的模式进行注释

```css
/* 头部导航 */
.header {
}
/* 中间内容区 */
.user-info {
}
/* 底部链接 */
.footer {
}
```

:::

## Vue Router 规范

:::tip 路由
**:one:** path 里面单词复数统一使用小写字母开头的 `kebab-case` 风格

```js
 {
   path: "/pm-manage",
   redirect: "/pm-manage/list",
   children:[
     {
       path: "list",
       name: "pm-manage_list"
     }
   ]
   ...
 }
```

**:two:** name 的命名参照 `path` ，有 **children** 的情况下，要带上父级的 name，用 `_` 隔开，**name 除了`path是 / 和 redirect`都要填写**

<font color=red>**具体示例 可参考**</font> [路由](/dir/#src-router-index-js-路由)
:::
