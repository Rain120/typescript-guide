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
    "revision": "25ec10f78163b70c6532b56691d34d80"
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
    "url": "assets/js/10.8c8f2986.js",
    "revision": "031a384ff32e4b4d5537da62f25ace32"
  },
  {
    "url": "assets/js/11.f7805f82.js",
    "revision": "2cf13c58f73be472631ba3f4664d5970"
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
    "url": "assets/js/17.89a3b857.js",
    "revision": "97dc3526b2a31c5d9ed3b469d20c5b12"
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
    "url": "assets/js/27.1b32931a.js",
    "revision": "10345c763a69797fd317c40f6cd366da"
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
    "url": "assets/js/31.bb1dba03.js",
    "revision": "88453bcfc478bdd68c53578c1643125e"
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
    "url": "assets/js/40.558977c6.js",
    "revision": "b133acb578df35907096c8f138bca349"
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
    "url": "assets/js/46.5ea1f086.js",
    "revision": "dbb0783489148dfa18cee8a596479d35"
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
    "url": "assets/js/52.7a99bfcb.js",
    "revision": "32c18a7ded58a1cf5991634584c01bb0"
  },
  {
    "url": "assets/js/53.382dff0f.js",
    "revision": "7849f594a12177e3d469f6c1ad305b18"
  },
  {
    "url": "assets/js/54.0cb6b207.js",
    "revision": "022058c946644ca2d710d28c1695db82"
  },
  {
    "url": "assets/js/6.1f471b02.js",
    "revision": "99d9f13631acd7f29b18e66737dda805"
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
    "url": "assets/js/app.36bb78ef.js",
    "revision": "23d906c4b7fc9f054a8498d36e6a25a0"
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
    "revision": "78f09eabcbd2243ee0799126915ebd27"
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
    "revision": "3e6be8e9bfbdd82d2f61ebd074d1f167"
  },
  {
    "url": "zh/advanced-types/intersection-types/index.html",
    "revision": "1331c695143c06adcedea64fde21132e"
  },
  {
    "url": "zh/advanced-types/nullable/index.html",
    "revision": "090ab288f938ea65c1803f4a5788bd00"
  },
  {
    "url": "zh/advanced-types/type-guard/index.html",
    "revision": "ddcc31e96b66c6287f57d7285dbe9a4f"
  },
  {
    "url": "zh/advanced-types/union-types/index.html",
    "revision": "aefa2f581f3f62b0fe3a5a1a1b1b4312"
  },
  {
    "url": "zh/array/index.html",
    "revision": "09d5df9cab6390cd3056740dbf507c62"
  },
  {
    "url": "zh/basic/index.html",
    "revision": "6fd882bf5ed98fe168806283f9d2b700"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "34b79388a6a718f5f3e149265fbe56c0"
  },
  {
    "url": "zh/built-in-objects/index.html",
    "revision": "9b3edd2a35f11d222064506b3121d68c"
  },
  {
    "url": "zh/class/index.html",
    "revision": "7dca30a06fc7c8a0c744a48474072098"
  },
  {
    "url": "zh/compile-config/file-inclusion/index.html",
    "revision": "e75482fe5173c259fee461d9eb61da1c"
  },
  {
    "url": "zh/compile-config/index.html",
    "revision": "65ae3415d55f9b4d0b7e86c9ae913a68"
  },
  {
    "url": "zh/compile-config/module-resolver/index.html",
    "revision": "c4bd8ed6d053ba71a118d957aff4bfd1"
  },
  {
    "url": "zh/compile-config/references/index.html",
    "revision": "e70f6e661d2f33bcd616e0deb92acd19"
  },
  {
    "url": "zh/compile-config/tsconfig-module-target/index.html",
    "revision": "c9c4ad5636b781b791849accc42bff8a"
  },
  {
    "url": "zh/declaration/index.html",
    "revision": "bae77abb098f3813dd38aa7ed275a02a"
  },
  {
    "url": "zh/decorators/index.html",
    "revision": "0efe415c96b7f3bb99b31746155b0a87"
  },
  {
    "url": "zh/faqs/index.html",
    "revision": "a74508af10cc1147c92d10d2edd62107"
  },
  {
    "url": "zh/faqs/interface-vs-type.html",
    "revision": "2b6510cc560d6241f018989a2aedb2fb"
  },
  {
    "url": "zh/function/index.html",
    "revision": "53d66a532ee17edcd44dc79927bcdd7e"
  },
  {
    "url": "zh/generics/index.html",
    "revision": "870812feda95ff9651e006193b36a694"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "0253df1e6920a0176881b3eae30d617a"
  },
  {
    "url": "zh/interface/index.html",
    "revision": "21965478ffdd10667299379df93e15d2"
  },
  {
    "url": "zh/keyword/as/index.html",
    "revision": "d5815557f6a21026fbeb64af704138b9"
  },
  {
    "url": "zh/keyword/extends/index.html",
    "revision": "e0fe56430a0702f23c3746007a49598c"
  },
  {
    "url": "zh/keyword/implements/index.html",
    "revision": "4a1c3aa6fdc5dd54f177253f30405f77"
  },
  {
    "url": "zh/keyword/in/index.html",
    "revision": "c0585bc8621850e25d3a16d05394584b"
  },
  {
    "url": "zh/keyword/index.html",
    "revision": "72eb612c7be9033d225b4430294ec327"
  },
  {
    "url": "zh/keyword/infer/index.html",
    "revision": "593d51225a8cb9c5eaceab3b997bb8df"
  },
  {
    "url": "zh/keyword/instanceof/index.html",
    "revision": "510c91428369364dbf09dc7ddfd1d673"
  },
  {
    "url": "zh/keyword/is/index.html",
    "revision": "502f5d070a08c40a42a5b7bf83b9ed56"
  },
  {
    "url": "zh/keyword/keyof/index.html",
    "revision": "982348538cd3480336ffef0ab8fbb55f"
  },
  {
    "url": "zh/keyword/typeof/index.html",
    "revision": "a05fa1e4ef66e4aacca85fa985e35c51"
  },
  {
    "url": "zh/operator/index.html",
    "revision": "3236466748cb2c8bd5c813cf776457cd"
  },
  {
    "url": "zh/tips/index.html",
    "revision": "38ea4546f729d608f8c8e01f27b8edbd"
  },
  {
    "url": "zh/type-assertion/index.html",
    "revision": "536e614da75dcfe245ca3509d8c3a78f"
  },
  {
    "url": "zh/utility-types/index.html",
    "revision": "7a41c0420841d86d2e3dd2079bb72ca0"
  },
  {
    "url": "zh/what-is-typescript/index.html",
    "revision": "cfa6366a39b5f6374ba565fb05454cf1"
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
