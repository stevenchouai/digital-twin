import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "digital-twin",
  description: "Your Personal Agent Operating Layer",
  lang: 'en-US',
  base: '/digital-twin/',
  head: [
    ['meta', { name: 'description', content: 'A file-first Personal Agent OS blueprint for knowledge retrieval, skill routing, durable write-back, and learning loops.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'digital-twin — Personal Agent OS Blueprint' }],
    ['meta', { property: 'og:description', content: 'Build an AI operating layer that retrieves your knowledge, routes to skills, writes durable outputs, and learns back into your workflow.' }],
    ['meta', { property: 'og:url', content: 'https://stevenchouai.github.io/digital-twin/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'digital-twin — Personal Agent OS Blueprint' }],
    ['meta', { name: 'twitter:description', content: 'A file-first blueprint for personal AI agents with memory, skills, write-back, and learning loops.' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '5-Minute Demo', link: '/demo/five-minute-twin' },
      { text: 'Guide', link: '/guide/thesis' },
      { text: 'Proof Chain', link: '/demo/proof-chain' },
      { text: 'Steven Workflow', link: '/demo/steven-workflow' },
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
          { text: '5-Minute Twin Demo', link: '/demo/five-minute-twin' },
          { text: 'Proof Chain', link: '/demo/proof-chain' },
          { text: 'Steven Workflow', link: '/demo/steven-workflow' },
          { text: 'Elon Musk Demo', link: '/demo/elon-musk' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stevenchouai/digital-twin' }
    ]
  }
})
