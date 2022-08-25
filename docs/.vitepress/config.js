export default {
  title: 'vhooks',
  description: '一个以 ahooks 为模板的基于 Vue3 响应式 API 实现的 Hooks 库。',
  themeConfig: {
    siteTitle: 'vhooks',

    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: 'Hooks', link: '/hook/useRequest/start' },
    ],
    socialLinks: [
      // todo link
      { icon: "github", link: "https://github.com/Yoyeo98137" }
    ],

    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/guide/': [
        {
          text: '介绍',
          items: [
            // This shows `/guide/index.md` page.
            // { text: 'Index', link: '/guide/' }, // /guide/index.md
            { text: '什么是 vhooks？', link: '/guide/introduction' },
          ]
        },
      ],

      '/hook/': [
        {
          text: 'useRequest',
          items: [
            { text: '快速上手', link: '/hook/useRequest/start' },
            { text: '基础用法', link: '/hook/useRequest/base' },
          ]
        },
        {
          text: 'Scene',
          items: [
            { text: 'useTable', link: '/hook/scene/useTable' },
            { text: 'usePagination', link: '/hook/scene/usePagination' },
          ]
        }
      ]
    },
  }
}