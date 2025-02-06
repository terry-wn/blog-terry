import type { ThemeOptions } from 'vuepress-theme-hope'
import process from 'node:process'
import { hopeTheme } from 'vuepress-theme-hope'

import * as navbar from './navbar'
import { docSearch, linksCheck, pwa, revealjs, seo } from './plugin-config'
import * as sidebar from './sidebar'

// import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { transformerTwoslash } from './theme/components/twoslash/index'

const hostname = process.env.HOSTNAME

export const themeOptions: ThemeOptions = {
  hostname,

  author: {
    name: 'Terry',
    url: 'https://www.wangnian.site',
  },

  logo: '/logo.svg',

  repo: 'https://github.com/terry-wn',

  fullscreen: true,

  docsDir: 'docs',

  pageInfo: [
    'Author',
    'Original',
    'PageView',
    'Date',
    'Category',
    'Tag',
    'ReadingTime',
  ],

  blog: {
    medias: {
      GitHub: 'https://github.com/terry-wn',
    },
  },

  locales: {
    /**
     * Chinese locale config
     */
    '/': {
      // navbar
      navbar: navbar.zh,

      navbarLayout: {
        start: ['Brand'],
        center: ['Links'],
        end: ['Repo', 'Outlook', 'Search'],
      },

      // sidebar
      sidebar: sidebar.zh,

      footer:
        '欢迎来到Terry的小站 | 由 <a href="https://theme-hope.vuejs.press" target="_blank">Theme Hope</a> 驱动',

      displayFooter: true,

      blog: {
        description: '一个码农，热爱 Vue/Java',
        intro: '/about.html',
      },
    },
  },

  markdown: {
    hint: true,

    // image
    imgLazyload: true,
    imgMark: true,
    imgSize: true,

    // math
    math: {
      type: 'mathjax',
    },

    // tabs
    tabs: true,
    codeTabs: true,

    attrs: true,
    gfm: true,
    vPre: true,
    align: true,
    sup: true,
    sub: true,
    footnote: true,
    mark: true,
    markmap: true,
    plantuml: true,
    tasklist: true,
    include: true,
    echarts: true,
    flowchart: true,
    mermaid: true,
    demo: true,
    playground: {
      presets: ['ts', 'vue', 'unocss'],
    },
    vuePlayground: true,
    sandpack: true,

    highlighter: {
      type: 'shiki',
      lineNumbers: false,
      themes: {
        light: 'one-light',
        dark: 'one-dark-pro',
      },
      transformers: [transformerTwoslash()],
    },

    linksCheck,
    revealjs,
  },

  // 专注模式
  focus: false,

  plugins: {
    // backToTop: true,

    // blog: true,
    blog: {
      // article: '/posts/',
      excerpt: true,
    },

    notice: [
      {
        // showOnce: true,
        path: '/posts/edu/xiaoxue-yuwen-1-xia',
        title: '完善中',
        content: '本页尚未完成，如要补充请留下您的评论，或通过邮件联系我。',
        actions: [
          {
            text: '关闭',
            type: 'default',
          },
          {
            text: '如何补充？',
            type: 'primary',
            link: '/posts/edu/learn-hanzi.html#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95',
          },
        ],
      },
    ],

    icon: {
      prefix: 'iconfont icon-',
      assets: ['iconify', 'fontawesome-with-brands'],
    },

    // 组件插件
    components: {
      components: [
        'CodePen',
        'StackBlitz',
        'SiteInfo',
        'Share',
        'VPCard',
        'Badge',
      ],

      componentOptions: {
        share: {
          services: [],
        },
      },
    },

    copyCode: {
      ignoreSelector: ['.vp-copy-ignore'],
    },

    feed: true,

    watermark: {
      enabled: false,
    },

    // 其他插件
    docsearch: docSearch,
    seo,
    pwa,
  },
}

export default hopeTheme(themeOptions)
