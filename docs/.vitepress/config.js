module.exports = {
  title: '前端厚说',
  description: '前端也是一门学科，且听我慢慢来说',

  themeConfig: {
    nav: [
      { text: '数据结构', link: '/', activeMatch: '^/$|^/guide/' },

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
      text: 'Class类',
      children: [
        { text: '类的基本语法', link: '/guide/class-base' },
        {
          text: '类的继承',
          link: '/guide/class-inherit',
        },
      ],
    },
  ]
}
