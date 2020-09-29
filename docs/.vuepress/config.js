module.exports = {
  title: "前端厚说",
  plugins: ["@vuepress/back-to-top"],
  description: "frontend-thick-talk",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guides/" },
      {
        text: "GitHub",
        link: "https://github.com/yayxs/frontend-thick-talk",
        target: "_blank",
      },
    ],

    sidebar: [
      {
        title: "前言",
        collapsable: false,
        children: ["/guides/"],
      },
      {
        title: "简历面试",
        collapsable: true,
        children: ["/guides/interview/"],
      },
      {
        title: "推荐",
        collapsable: true,
        children: [
          "/guides/recommend/book",
          "/guides/recommend/video",
          "/guides/recommend/other",
        ],
      },
      {
        title: "读书系列",
        collapsable: true,
        children: [
          "/guides/books/js_advanced4_outline",
          "/guides/books/webpack_outline",
        ],
      },
      {
        title: "三剑客",
        collapsable: true,
        children: ["/guides/threeMusketeers/html", "/guides/styles/outline"],
      },
      {
        title: "Vue3",
        collapsable: false,
        children: [
          "/guides/vue_next/outline",
          "/guides/vue_next/video_tutorial",
        ],
      },
      {
        title: "TypeScript",
        collapsable: true,
        children: ["/guides/typescript/ts_one", "/guides/typescript/ts_two"],
      },
      {
        title: "框架实战",
        collapsable: true,
        children: [
          "/guides/wangyiyun/cloud_one",
          "/guides/wangyiyun/cloud_two",
        ],
      },
      {
        title: "工程化",
        collapsable: true,
        children: [],
      },
      {
        title: "数据结构与算法",
        collapsable: true,
        children: ["/guides/dataStructuresAndAlgorithms/one"],
      },
      {
        title: "LeetCode",
        collapsable: true,
        children: ["/guides/leetcode/", "/guides/leetcode/outline"],
      },
    ],
  },
};
