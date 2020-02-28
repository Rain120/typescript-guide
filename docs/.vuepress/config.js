const path = require('path');
const plugins = require('./utils/plugins');
const { sidebarHelper } = require('./utils/sidebarHelper');
const nav = require('./utils/nav');

/**
 * @description [guide, how-to-write-docs, ...]
 * 特殊处理文档顺序, 如你不需要，忽略即可
 */
// const docs = sidebarHelper();
// const sidebar = [];
// docs.map(item => {
//   if (item.path.includes('guide') || item.path.includes('how-to-write-docs')) {
//       sidebar.unshift(item)
//   } else {
//       sidebar.push(item)
//   }
// });
// [sidebar[1], sidebar[0]] = [sidebar[0], sidebar[1]];

const sidebar = sidebarHelper();

module.exports = {
  // 替换成你的仓库名
  base: '/vuepress-docs-template/',
  title: 'Vuepress Doc Template',
  description: 'Welcome to Vuepress Doc Template',
  port: 9527,
  // dest: 'dist',
  // head 配置
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
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
  // chainWebpack:(config,isServer) =>{
  //   config.resolve.alias.set('@images',path.resolve(__dirname, '../../'))
  // },
  locales: {
    '/': {
      lang: 'zh-CN', 
    }
  },
  // markdown
  markdown: {
    lineNumbers: true,
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
    repo: 'https://github.com/Rain120/vuepress-docs-template',
    repoLabel: 'Repo',

    displayAllHeaders: true,
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
