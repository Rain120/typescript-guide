const moment = require('moment');

module.exports = [
  ['@vuepress/back-to-top'],
  [
    '@vuepress/google-analytics',
    {
      ga: 'UA-172045751-1'
    }
  ],
  [
    '@vuepress/medium-zoom',
    {
      // selector: 'img.zoom-custom-imgs',
      options: {
        margin: 16
      }
    }
  ],
  [
    'vuepress-plugin-awesome-gitalk',
    {
      home: false,
      ignorePaths: ['/zh/guide/'],
      gitalk: {
        clientID: '13f222b6ec6782dbe85f',
        clientSecret: '60984ee0c8926c160d2dc1a32e2769f2002e0a1b',
        repo: 'typescript-guide',
        owner: 'Rain120',
        admin: ['Rain120'],
        distractionFreeMode: true,
        language: 'zh-CN',
      }
    }
  ],
  ['@vuepress/pwa',
    {
      serviceWorker: true,
      popupComponent: 'MySWUpdatePopup',
      updatePopup: {
        '/': {
          message: "官人, 人家又有新货了, 快来玩呀",
          buttonText: "我来啦"
        },
        '/zh/': {
          message: "官人, 人家又有新货了, 快来玩呀",
          buttonText: "我来啦"
        }
      }
    }
  ],
  ['@vuepress/blog'],
  // [
  //   '@vuepress/last-updated',
  //   {
  //     transformer: (timestamp, lang) => {
  //       moment.locale(lang)
  //       return moment(timestamp).fromNow()
  //     }
  //   }
  // ]
];
