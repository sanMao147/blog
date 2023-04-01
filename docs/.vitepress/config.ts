import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './configs'

export default defineConfig({
  outDir: '../dist',
  lang: 'zh-CN',
  title: '奥力给',
  description:
    '前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
  head,
  lastUpdated: true,
  cleanUrls: true,
  base: '/blog/',
  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/rocket.png',

    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录',
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/sanMao147',
      },
    ],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2023-present sanmao147',
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
})
