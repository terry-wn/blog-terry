import { defineClientConfig } from 'vuepress/client'

import AutoArticleList from './theme/components/AutoArticleList'
import TwoslashFloatingVue from './theme/components/twoslash/client'
import AutoArticleListLayout from './theme/layouts/AutoArticleListLayout'
import '@shikijs/vitepress-twoslash/style.css'

import './theme/components/twoslash/style.css'

// 为项目主页的特性添加闪光效果
import 'vuepress-theme-hope/presets/shinning-feature-panel.scss'

// 为页面图标添加鼠标悬停的跳动效果
import 'vuepress-theme-hope/presets/bounce-icon.scss'

export default defineClientConfig({
  // You can override or add layouts here
  layouts: {
    AutoArticleListLayout,
  },

  enhance: ({ app }) => {
    app.component('AutoArticleList', AutoArticleList)

    // twoslash
    app.use(TwoslashFloatingVue)
  },
})
