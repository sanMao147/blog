import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#2B2B2B' }],
  [
    'meta',
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
  ],
  [
    'meta',
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black',
    },
  ],
  [
    'link',
    { rel: 'apple-touch-icon', href: '/favicon.ico' },
  ],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/favicon.ico',
      color: '#2B2B2B',
    },
  ],
  [
    'meta',
    {
      name: 'msapplication-TileImage',
      content: '/favicon.ico',
    },
  ],
  [
    'meta',
    { name: 'msapplication-TileColor', content: '#79B2C1' },
  ],
]
