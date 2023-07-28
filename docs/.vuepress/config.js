/*
 * @Date: 2022-02-15 15:21:27
 * @LastEditTime: 2022-02-25 17:56:50
 * @Desc: 配置文件
 * @Author: lujie
 */
module.exports = {
  title: "前端基础文档",
  base: "/",
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: "介绍",
        path: "/",
      },
      "/env/",
      "/dir/",
      "/standard/",
      "/tool/",
    ],
  },
  plugins: ["@vuepress/back-to-top", "@vuepress/medium-zoom"],
};
