import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: 'en-US',
  title: '前端诗人',
  description: '前端诗人微信微信公众号博文',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    nav: nav(),
    sidebar: {
      '/html/': sidebarHTML(),
      '/vite/': sidebarVite(),
      //   '/guide/': sidebarGuide(),
      //   '/config/': sidebarConfig(),
    },

    editLink: {
      pattern: 'https://github.com/yayxs/front-end-poet/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yayxs/front-end-poet' },
    ],

    footer: {
      message: '微信公众号 前端诗人',
      copyright: 'Copyright © 2020-2023-present vanlee',
    },

    // algolia: {
    //   appId: '8J64VVRP8K',
    //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //   indexName: 'vitepress',
    // },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg',
    // },
  },
})

function nav() {
  return [
    { text: 'HTML', link: '/html/video-tag', activeMatch: '/html/' },
    { text: 'Vite', link: '/vite/vite-in-production', activeMatch: '/vite/' },

    // { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' },
      ],
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' },
      ],
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
        { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
        { text: 'Edit Link', link: '/guide/theme-edit-link' },
        { text: 'Last Updated', link: '/guide/theme-last-updated' },
        { text: 'Layout', link: '/guide/theme-layout' },
        { text: 'Home Page', link: '/guide/theme-home-page' },
        { text: 'Team Page', link: '/guide/theme-team-page' },
        { text: 'Badge', link: '/guide/theme-badge' },
        { text: 'Footer', link: '/guide/theme-footer' },
        { text: 'Search', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' },
      ],
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress',
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0',
        },
      ],
    },
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' },
      ],
    },
  ]
}

function sidebarHTML() {
  return [
    {
      text: 'HTML',
      items: [{ text: '有关video 标签', link: '/html/video-tag' }],
    },
  ]
}
/**
 * @description 生成vite文章的侧边栏
 */
function sidebarVite() {
  return [
    {
      text: 'Vite',
      items: [
        { text: 'vite 上次了生产，问题不大', link: '/vite/vite-in-production' },
      ],
    },
  ]
}
