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
        children: ["/guides/", "/guides/quick_start"],
      },
      {
        title: "简历面试",
        collapsable: false,
        children: [
          "/guides/interview/",
          "/guides/interview/question",
          "/guides/interview/top_fe_iqa",
        ],
      },
      {
        title: "推荐分享",
        collapsable: false,
        children: [
          "/guides/recommend/book",
          "/guides/recommend/video",
          "/guides/recommend/other",
        ],
      },
      {
        title: "读书笔记",
        collapsable: false,
        children: [
          "/guides/books/css_secret_outline",
          "/guides/books/js_advanced4_outline",
          "/guides/books/webpack_outline",
        ],
      },
      {
        title: "HTML/CSS",
        collapsable: true,
        children: ["/guides/html_css/html", "/guides/css/outline"],
      },
      {
        title: "Vue3",
        collapsable: true,
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
