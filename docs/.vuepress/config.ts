import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path from 'path'
import {__navbar} from './navbar'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  base: '/Hello-Python/',// XXX
  lang: 'zh-CN',
  title: 'Hello Python',
  description: 'blog for Python',
  head: [
    ['link', { rel: 'icon', href: '/logo/python.svg' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'Python,vuepress,markdown,github pages',
      },
    ],
  ],
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo/python.svg',
    logoDark: '/logo/python-dark.svg',
    repo: 'https://github.com/HenryZhuHR/Hello-Python',
    navbar: __navbar,
    plugins: [
      // path.resolve(__dirname, './plugins/vuepress-plugin-code-copy'),
    ]
  },
})