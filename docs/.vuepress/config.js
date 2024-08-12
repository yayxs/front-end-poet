module.exports = {
  title: "前端厚说",
  plugins: [
    ["@vuepress/back-to-top"], // 返回顶部
    ["@vuepress/nprogress"], // 加载进度条
    [
      "vuepress-plugin-comment",
      {
        choosen: "valine",
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: "#vcomments",
          appId: "T7SJkJx11EpLNMvfzjee4mmM-gzGzoHsz",
          appKey: "8XiyybSQiGhWVGACeLeL6csO",
          visitor: true, // 阅读量统计
          placeholder: "有什么问题请留言",
        },
      },
    ],
  ],
  description: "frontend-thick-talk",
  themeConfig: {
    lastUpdated: "最近更新于", // string | boolean
    serviceWorker: {
      updatePopup: true, // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
    },
    head: [["link", { rel: "icon", href: "/favo.jpg" }]],
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
        title: "读书笔记",
        collapsable: false,
        children: [
          "/guides/books/css_secret_outline",
          "/guides/books/css-artistic-beauty/",
          "/guides/books/js_advanced3_1",
          "/guides/books/js_advanced4_outline",
          "/guides/books/You-Dont-Know-JS/outline",
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
        title: "HTML/HTML5",
        collapsable: true,
        children: ["/guides/html/"],
      },
      {
        title: "CSS/CSS3",
        collapsable: false,
        children: [
          "/guides/css/css_basis",
          "/guides/css/css3",
          "/guides/css/css_layout",
          "/guides/css/css_mixin",
          "/guides/css/css_preprocessor",
        ],
      },
      {
        title: "JavaScript",
        collapsable: true,
        children: ["/guides/javascript/storage"],
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
        title: "实战项目",
        collapsable: false,
        children: [
          "/guides/wangyiyun/",
          "/guides/pro/flutter",
          "/guides/pro/mini_pro",
        ],
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
        title: "前端工程化",
        collapsable: false,
        children: ["/guides/webpack/webpack_basic", "/guides/git/"],
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
