/*
 * @Author: yayxs
 * @Date: 2020-08-30 23:01:52
 * @LastEditTime: 2020-09-07 21:04:41
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \frontend-thick-talk\docs\.vuepress\config.js
 * @
 */
module.exports = {
  title: "前端厚说",
  description: "frontend-thick-talk",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guides/" },
      {
        text: "网抑云实战",
        items: [
          {
            text: "第一周",
            link: "/wangyiyun/cloud_one/",
          },
          {
            text: "第二周",
            link: "/wangyiyun/cloud_two/",
          },
        ],
      },
      { text: "GitHub", link: "https://github.com/yayxs", target: "_blank" },
    ],

    sidebar: [
      {
        title: "前言", // 必要的
        // path: "/guides/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/guides/preface/"],
      },
      {
        title: "面试",
        children: [
          /* ... */
        ],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
    ],
  },
};
