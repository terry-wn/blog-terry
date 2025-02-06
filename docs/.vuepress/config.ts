import type { PluginOption } from 'vite'
import process from 'node:process'
import { viteBundler } from '@vuepress/bundler-vite'

import { visualizer } from 'rollup-plugin-visualizer'
import { defineUserConfig } from 'vuepress'

import { themeOptions } from './theme.js'
import themeTerry from './theme/index'

const base = (process.env.BASE as '/' | `/${string}/`) || '/'

const sizeCheck = !!process.env.SIZE_CHECK

export default defineUserConfig({
  theme: themeTerry(themeOptions),

  // debug: true,

  base,

  dest: 'docs/.vuepress/dist',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/c/font_4647860_t3wvzckeetc.css',
      },
    ],
    [
      'script',
      {
        src: '//hm.baidu.com/hm.js?85e80625eddf91d81d9535565850722b',
      },
    ],
    [
      'script',
      {
        src: '/assets/js/clarity.js',
      },
    ],
  ],

  // vuepress-plugin-pwa2:  ⚠ The plugin will register service worker to handle assets,
  // so we recommend you to set "shouldPrefetch: false" in VuePress config file.
  shouldPrefetch: false,

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Terry的小站',
      description: 'Terry的随笔和笔记',
    },
  },

  pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'],

  plugins: [],

  bundler: viteBundler({
    viteOptions: {
      plugins: [
        sizeCheck
          ? (visualizer({
              open: true,
              title: 'Vite Bundle Visualizer',
              brotliSize: true,
              gzipSize: true,
            }) as PluginOption)
          : null,
      ],
      ssr: {
        noExternal: ['floating-vue'],
      },
      optimizeDeps: {
        include: ['floating-vue'],
      },
      server: {
        allowedHosts: ['localhost', '.mcprev.cn'],
      },
    },
  }),
})
