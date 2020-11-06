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
          "/guides/books/js_advanced3_1",
          "/guides/books/js_advanced4_outline",
          "/guides/books/webpack_outline",
          "/guides/books/flutter_1",
        ],
      },

      {
        title: "自制教程",
        collapsable: false,
        children: ["/guides/bilibili/typescript", "/guides/bilibili/vue3"],
      },

      {
        title: "实战项目",
        collapsable: false,
        children: [
          "/guides/wangyiyun/",
          "/guides/pro/flutter",
          "/guides/pro/mini_pro",
        ],
      },
      {
        title: "HTML/HTML5",
        collapsable: true,
        children: ["/guides/html/"],
      },
      {
        title: "CSS/CSS3",
        collapsable: true,
        children: ["/guides/css/"],
      },
      {
        title: "JavaScript",
        collapsable: true,
        children: ["/guides/javascript/storage"],
      },
      {
        title: "TypeScript",
        collapsable: true,
        children: ["/guides/typescript/ts_1", "/guides/typescript/ts_2"],
      },
      {
        title: "Vue2/Vue3",
        collapsable: true,
        children: [],
      },
      {
        title: "React",
        collapsable: true,
        children: ["/guides/react/"],
      },
      {
        title: "Flutter",
        collapsable: true,
        children: ["/guides/flutter/"],
      },
      {
        title: "微信小程序",
        collapsable: true,
        children: ["/guides/mini_pro/"],
      },
      {
        title: "性能优化",
        collapsable: true,
        children: ["/guides/performance_optimization/vue"],
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

      {
        title: "博客文章",
        collapsable: true,
        children: [
          "/guides/blog_article/first_vue3",
          "/guides/blog_article/cra_admin",
          "/guides/blog_article/commit",
        ],
      },
    ],
  },
};
