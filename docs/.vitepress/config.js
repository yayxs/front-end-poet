module.exports = {
  title: '前端厚说',
  description: '前端也是一门学科，且听我慢慢来说',

  themeConfig: {
    nav: [
      { text: '指南', link: '/', activeMatch: '^/$|^/guide/' },

      {
        text: 'Repo',
        link: 'https://github.com/yayxs/frontend-thick-talk',
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar(),
    },
  },
}

function getGuideSidebar() {
  return [
    {
      text: '介绍',
      children: [{ text: 'Repo Introduction', link: '/' }],
    },
    {
      text: '书籍分享',
      children: [{ text: 'book-share', link: '/guide/book' }],
    },
  ]
}
