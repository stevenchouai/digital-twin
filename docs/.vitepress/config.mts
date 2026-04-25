import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "digital-twin",
  description: "Your Personal Agent Operating Layer",
  base: '/digital-twin/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/thesis' },
      { text: 'Elon Musk Demo', link: '/demo/elon-musk' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Thesis', link: '/guide/thesis' },
          { text: 'Workflow', link: '/guide/workflow' },
          { text: 'Skills', link: '/guide/skills' }
        ]
      },
      {
        text: 'Showcase',
        items: [
          { text: 'Elon Musk Demo', link: '/demo/elon-musk' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stevenchouai/digital-twin' }
    ]
  }
})
