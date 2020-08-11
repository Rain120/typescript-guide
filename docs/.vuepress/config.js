const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const plugins = require('./utils/plugins');
const { sidebarHelper, sortSidebar } = require('./utils/sidebarHelper');
const nav = require('./utils/nav');
const slugify = require('@vuepress/shared-utils').slugify

const sidebar = sortSidebar(sidebarHelper());
// console.log(sidebar)

const fs = require('fs')

const SPECIAL_HEADINGS = {
  '!': 'exclamation',
  '?': 'question',
  '+ -': 'plus-and-minus',
};

module.exports = {
  // 替换成你的仓库名
  base: '/typescript-guide/',
  title: 'Typescript 指导书',
  description: 'Welcome to Typescript Guide',
  port: 9527,
  // dest: 'dist',
  // head 配置
  head: [
    ['link', { rel: 'icon', href: '/ts-logo.png' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  // 别名配置
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.join(__dirname, '../..'),
      }
    }
  },
  chainWebpack:(config, isServer) => {
		// config.resolve.alias.set('@images',path.resolve(__dirname, '../../'))
		config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        // Languages are loaded on demand at runtime
        languages: [
					'javascript',
					'typescript',
				]
      }
    ])
  },
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  // markdown
  markdown: {
    lineNumbers: true,
		/**
		 * 解决一个 "无实质内容的标题导致 permalink 出错" 的问题,
		 * 目前发现有若干个有点问题的, 如 `!`
		 *
		 * @todo: 如果开始有多类似的个例, 可以引入特殊的 "heading anchor" 格式, 并统一处理
		 *
		 * 参考 : http://caibaojian.com/vuepress/config/#markdown-slugify
		 *
		 * @param {string} heading
		 * @return {string|*|string}
		 */
		slugify: (heading) => {
				const originResult = slugify(heading)

			const trimmedHeading = (heading || '').trim()
			if (trimmedHeading in SPECIAL_HEADINGS) {
				return SPECIAL_HEADINGS[(heading || '').trim()] || ''
			}
			return originResult
		},
    anchor: {
      permalink: true,
    },
    toc: {
      includeLevel: [1, 2],
    },
    extendMarkdown: md => {
      md.set({ html: true });
      md.use(require('markdown-it-katex'));
      md.use(require('markdown-it-task-lists'));
      md.use(require('markdown-it-imsize'), { autofill: true });
    }
  },
  // 主题配置
  themeConfig: {
    theme: 'vue',
    repo: 'https://github.com/Rain120/typescript-guide',

    sidebar,
    nav,

    // polyfill IE
    evergreen: true,

    // search
    search: true,
    searchMaxSuggestions: 10,
    // 申请
    // https://docsearch.algolia.com/apply/
    // algolia: {
    //   apiKey: '',
    //   indexName: ''
    // },

    // PWA
    serviceWorker: true,

    displayAllHeaders: true,

    smoothScroll: true,

    // footer
    date_format: 'yyyy-MM-dd',
    lastUpdated: 'Last Updated',
    repoLabel: '查看源码',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！'
  },
  plugins
};
