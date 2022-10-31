/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c8a54eb5c96436b9f51a7a0462aeb83d"
  },
  {
    "url": "assets/css/0.styles.c1e4c3af.css",
    "revision": "577846eade2d2bef1e0a934c3dadce88"
  },
  {
    "url": "assets/fonts/codicon.a609dc0f.ttf",
    "revision": "a609dc0f334a7d4e64205247c4e8b97c"
  },
  {
    "url": "assets/img/2020-ts-download.527b75f6.png",
    "revision": "527b75f61ae853214a970e6ace1b8f40"
  },
  {
    "url": "assets/img/docs.77834bc4.png",
    "revision": "77834bc47a88da6ebaa3ec6c5085d202"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat-zhifubao-pay.c574ee9e.png",
    "revision": "c574ee9ea0fcc9370d0c3b5ac12a7981"
  },
  {
    "url": "assets/js/10.6f9a9496.js",
    "revision": "0663d1487dbde97b64b3e835491402ec"
  },
  {
    "url": "assets/js/11.9e756091.js",
    "revision": "aeb384cdb23486e53ab31ca261d9a416"
  },
  {
    "url": "assets/js/12.e78407b6.js",
    "revision": "72523d26e92eb47c9726869ca356dd01"
  },
  {
    "url": "assets/js/13.0b77b8db.js",
    "revision": "212c755a41e4d362e6fa653895b59db1"
  },
  {
    "url": "assets/js/14.758fa6f6.js",
    "revision": "1e586f1390db7c337caba762ecd47b79"
  },
  {
    "url": "assets/js/15.d8c36fc6.js",
    "revision": "cc1a938ba08d07982e30b683ec3994c1"
  },
  {
    "url": "assets/js/16.ab9dc03e.js",
    "revision": "3110065f1214ee44f24645f64bdcd504"
  },
  {
    "url": "assets/js/17.0409d3d9.js",
    "revision": "302c90fbabf1acc7b272de44b0997542"
  },
  {
    "url": "assets/js/18.261ae737.js",
    "revision": "12ec60c81508bc57c7aff9c824ec91f6"
  },
  {
    "url": "assets/js/19.2670e9dd.js",
    "revision": "c358b31966e43628c8e4bcfae8360a43"
  },
  {
    "url": "assets/js/20.985a834e.js",
    "revision": "7c38b9132ef0e3f323d0aa1179d789d9"
  },
  {
    "url": "assets/js/21.30467249.js",
    "revision": "89a2d48e516f5fbea009b485a43e0de6"
  },
  {
    "url": "assets/js/22.ee2599d4.js",
    "revision": "0141e52b9c38ff62882a288db3d770a8"
  },
  {
    "url": "assets/js/23.6de69502.js",
    "revision": "6048540a7ffc23c1e798dd7c6beb6462"
  },
  {
    "url": "assets/js/24.7c3e2d22.js",
    "revision": "578d0c14a802efd4ff90e2ec3644f360"
  },
  {
    "url": "assets/js/25.26d2d249.js",
    "revision": "7763d9fe60e1e56042040fb5419e8495"
  },
  {
    "url": "assets/js/26.6fe9b7a4.js",
    "revision": "d82481030e1c2a2bc66d9c62590f0ad2"
  },
  {
    "url": "assets/js/27.0956954b.js",
    "revision": "3d73d88a7524229daa990b0940d8e347"
  },
  {
    "url": "assets/js/28.933efdce.js",
    "revision": "61e262f6715c50db920ec7be17313048"
  },
  {
    "url": "assets/js/29.cf8d7b70.js",
    "revision": "74be51323e146233954dc095cec2dfc4"
  },
  {
    "url": "assets/js/3.78a56f3d.js",
    "revision": "13164944f651fc0ea89a33392d342432"
  },
  {
    "url": "assets/js/30.3cbf756e.js",
    "revision": "7ded4cddf3a4fa35fa2be15d211b28b4"
  },
  {
    "url": "assets/js/31.cdad0148.js",
    "revision": "7e10bf358c49e9ef34a37ce4cca6d3d2"
  },
  {
    "url": "assets/js/32.934364f3.js",
    "revision": "9108a7170164398af812ebec8538d3a6"
  },
  {
    "url": "assets/js/33.59daf7f0.js",
    "revision": "4d0c3950141744345586ff6d0e28cac2"
  },
  {
    "url": "assets/js/34.d391c076.js",
    "revision": "2d1a06cb479ddcef91a847ec57de36e6"
  },
  {
    "url": "assets/js/35.b5570055.js",
    "revision": "229e7f689760b1d680a7058ea169bc01"
  },
  {
    "url": "assets/js/36.a08da1e8.js",
    "revision": "7714f80b103645a712f2203f1aff31fe"
  },
  {
    "url": "assets/js/37.831902f0.js",
    "revision": "05058790a0e6ebd1b0e8e36c3fd80808"
  },
  {
    "url": "assets/js/38.fa9d539e.js",
    "revision": "42f71aaae9c17811dd7e648450ad048a"
  },
  {
    "url": "assets/js/39.4cd4b903.js",
    "revision": "6872f561f6e246cee232c86ba193846b"
  },
  {
    "url": "assets/js/4.c04c5c7f.js",
    "revision": "e82105663f9c7ab8bae033870a4eb6b5"
  },
  {
    "url": "assets/js/40.b96c9ab6.js",
    "revision": "fb4fa7d2a4d3e9fb39d2b2d3553f2484"
  },
  {
    "url": "assets/js/41.b22314e6.js",
    "revision": "6ecb5af163f7287a373280f2f3d9b7f9"
  },
  {
    "url": "assets/js/42.1c0f5575.js",
    "revision": "a16b27b778e194a81576f7fdf088f56b"
  },
  {
    "url": "assets/js/43.e4e1ac7d.js",
    "revision": "df8304a66fd33c9d22f92c8095cf2d34"
  },
  {
    "url": "assets/js/44.cd1132c7.js",
    "revision": "404033ee6709ed3036c73451630bb94e"
  },
  {
    "url": "assets/js/45.daf05c85.js",
    "revision": "a97da8a714f2f91dc9d90860d5496623"
  },
  {
    "url": "assets/js/46.89976a3c.js",
    "revision": "46733995f9c58a2e422b47532e54297a"
  },
  {
    "url": "assets/js/47.9413f6f0.js",
    "revision": "21324a0fcd9e920f0005ec84ae59b4bc"
  },
  {
    "url": "assets/js/48.4a821ac1.js",
    "revision": "8e35a131ce4b8563bbefe4d451c274ac"
  },
  {
    "url": "assets/js/49.45050b6e.js",
    "revision": "2bbe55e9febc5c007a2156746799920c"
  },
  {
    "url": "assets/js/5.809a09a1.js",
    "revision": "59a49e4ecf70ae60edd8245b0ae64098"
  },
  {
    "url": "assets/js/50.c1127f7b.js",
    "revision": "471124f798be0fbf0a7849fd09bc302c"
  },
  {
    "url": "assets/js/51.5c851a01.js",
    "revision": "0b31bc641f7e28343b86f302c7e3c281"
  },
  {
    "url": "assets/js/52.6ac597fb.js",
    "revision": "a2715ab8db5aa847676be68723861a8a"
  },
  {
    "url": "assets/js/53.409a269c.js",
    "revision": "eceaa188fdb65433957a8be3de8a10f0"
  },
  {
    "url": "assets/js/54.f3981ccc.js",
    "revision": "fa9c16a42b1f807bbf77ffac06d414e8"
  },
  {
    "url": "assets/js/55.90ae7a79.js",
    "revision": "aa81f6bfe5b599f1e7943788dd2113a4"
  },
  {
    "url": "assets/js/6.e0122949.js",
    "revision": "c8a17139d5ca7faaea600b841364e26f"
  },
  {
    "url": "assets/js/7.05a5b159.js",
    "revision": "812a7486e9255c7b8b17fb9768a08f97"
  },
  {
    "url": "assets/js/8.783233d3.js",
    "revision": "8ac307dbb469b875a91e4b0207a0d3d8"
  },
  {
    "url": "assets/js/9.37321e4d.js",
    "revision": "47c70e3bb79157667db7d5bd177e331d"
  },
  {
    "url": "assets/js/app.a49ea6bd.js",
    "revision": "1a6142ab10d2bab0ed5700d1141d8104"
  },
  {
    "url": "editor.worker.js",
    "revision": "aad761805882c1dd9b31ce790588402a"
  },
  {
    "url": "images/docs.png",
    "revision": "77834bc47a88da6ebaa3ec6c5085d202"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "990c5e0b1dfe6fb536ee09eec59465cd"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "f8dc7fb1af07531e2246e9830f51edc7"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "0c311dc8a891275aaf6c470b93aa2074"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "65093a8d112a4d8b45953084fbb16487"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "eff562dd276ec4a5989ed0fb74c7fea0"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a9af55f93b2cf1d325951fde149826f7"
  },
  {
    "url": "index.html",
    "revision": "1b91bdac07383ba85c131921dc2ef817"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "ts-logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "zh/advanced-types/index.html",
    "revision": "dec88197a7ed7d37e600ce35475ecd47"
  },
  {
    "url": "zh/advanced-types/intersection-types/index.html",
    "revision": "ea8edc53efbff5363bdbe93891e46214"
  },
  {
    "url": "zh/advanced-types/nullable/index.html",
    "revision": "1b4d1a7500baf6c142142f8d7c615a41"
  },
  {
    "url": "zh/advanced-types/type-guard/index.html",
    "revision": "b5667f5081e5b0cb042c6e905c528d47"
  },
  {
    "url": "zh/advanced-types/union-types/index.html",
    "revision": "9186a8cd76451342739cb107b43a937f"
  },
  {
    "url": "zh/array/index.html",
    "revision": "c5d6b1579c2271ed21e448d83951124d"
  },
  {
    "url": "zh/basic/index.html",
    "revision": "adfb34201b9fdf0d3b15dedd2bcd4519"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "c4699184fec9cd89c88bd98ccc60703b"
  },
  {
    "url": "zh/built-in-objects/index.html",
    "revision": "ab88e592adcbd725ccf38612a9c0a0d5"
  },
  {
    "url": "zh/class/index.html",
    "revision": "274eea5d42443540eba5ba5c56d0cbe8"
  },
  {
    "url": "zh/compile-config/file-inclusion/index.html",
    "revision": "756878636dd442d65b2128fe8bb2608c"
  },
  {
    "url": "zh/compile-config/index.html",
    "revision": "c72e3c26c4ff5a295b702ef0bb9847a7"
  },
  {
    "url": "zh/compile-config/module-resolver/index.html",
    "revision": "a9fbe55de5d9ece402605933b1705310"
  },
  {
    "url": "zh/compile-config/references/index.html",
    "revision": "72b933d3066b6d4e1f369181f046dc4e"
  },
  {
    "url": "zh/compile-config/tsconfig-module-target/index.html",
    "revision": "1649881649477f991c375b6acd3bf800"
  },
  {
    "url": "zh/declaration/index.html",
    "revision": "65c7e97c6e7cf4124f131dbccb834a4d"
  },
  {
    "url": "zh/decorators/index.html",
    "revision": "85ee7b69e65e01b51bf5bfb16633298d"
  },
  {
    "url": "zh/faqs/index.html",
    "revision": "d96e2feb927b3df73d8cdf956e411a66"
  },
  {
    "url": "zh/faqs/interface-vs-type.html",
    "revision": "488c83c36e6dca7d558b2ea96923ff7e"
  },
  {
    "url": "zh/function/index.html",
    "revision": "bcb67d7274aa8ff64ab321da12b8e8eb"
  },
  {
    "url": "zh/generics/index.html",
    "revision": "f71b77e5a8659a9ca00ab674cf24b084"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "f066b8a49e84462488dd0aacd8fbf2e4"
  },
  {
    "url": "zh/interface/index.html",
    "revision": "ad5acfdfc3304294fd315b513f750020"
  },
  {
    "url": "zh/keyword/as/index.html",
    "revision": "dcf11d2de98e3b6a0a431493f14a23f1"
  },
  {
    "url": "zh/keyword/extends/index.html",
    "revision": "5ea2199fffcff06fae997c69489ae93f"
  },
  {
    "url": "zh/keyword/implements/index.html",
    "revision": "27bbfc9ba4fd32da526cdc64f8e1fe32"
  },
  {
    "url": "zh/keyword/in/index.html",
    "revision": "17d9eeb1490c7d96241ff1b49290957b"
  },
  {
    "url": "zh/keyword/index.html",
    "revision": "8694a45bf34738a7789d3aeaa42eee9f"
  },
  {
    "url": "zh/keyword/infer/index.html",
    "revision": "d553b106e7b2f774bd4a2e22e2d50d5b"
  },
  {
    "url": "zh/keyword/instanceof/index.html",
    "revision": "d0221d440275b9eecbee486406ba5453"
  },
  {
    "url": "zh/keyword/is/index.html",
    "revision": "80ed0cbf8cd7af3483db691bd00b4e47"
  },
  {
    "url": "zh/keyword/keyof/index.html",
    "revision": "d7ec90da558cd198130a0e1a2a41b2d2"
  },
  {
    "url": "zh/keyword/typeof/index.html",
    "revision": "370b7b1c33beac9b77f21762fb2b477c"
  },
  {
    "url": "zh/operator/index.html",
    "revision": "81ae781c1e0af96cc8a71bc671cefb4d"
  },
  {
    "url": "zh/tips/index.html",
    "revision": "a74c19699aeee5c7b4b48485a08f9803"
  },
  {
    "url": "zh/type-assertion/index.html",
    "revision": "9f59311e4ef0e86f4d126b291cb4b14c"
  },
  {
    "url": "zh/utility-types/custom-utility-types/index.html",
    "revision": "accf90a1b753879f6c7093b9b1b3a494"
  },
  {
    "url": "zh/utility-types/index.html",
    "revision": "c3a3acc3ecc642aa1ccf1dae69e4f95a"
  },
  {
    "url": "zh/what-is-typescript/index.html",
    "revision": "95faa7cb2257321aa6c96cc0e90b077f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
