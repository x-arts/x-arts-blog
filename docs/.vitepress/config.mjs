import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/x-arts-blog/',
  title: 'X-Arts 数字乐园',
  description: '一个面向知识管理与沉淀的博客',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始', link: '/guide/getting-started' },
      { text: 'AI 笔记', link: '/ai/llm-overview' },
      { text: 'Java 程序员', link: '/tools/workflow' },
      { text: '读书笔记', link: '/notes/archive' }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 X-Arts'
    },
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '写作规范', link: '/guide/writing-style' }
          ]
        }
      ],
      '/ai/': [
        {
          text: 'LLM',
          collapsed: true,
          items: [
            { text: 'LLM 概览', link: '/ai/llm/llm-overview' }
          ]
        },
        {
          text: '提示词工程',
          collapsed: true,
          items: [
            { text: 'Prompt 模板', link: '/ai/prompt/prompt-patterns' }
          ]
        }
      ],
      '/tools/': [
        {
          text: '工具实践',
          items: [
            { text: '效率工作流', link: '/tools/workflow' },
            { text: '自动化脚本', link: '/tools/automation' }
          ]
        }
      ],
      '/notes/': [
        {
          text: '归档',
          items: [
            { text: '文章归档', link: '/notes/archive' }
          ]
        }
      ]
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      level: [2, 3, 4],
      label: '目录'
    }
  }
});
