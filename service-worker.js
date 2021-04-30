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
    "revision": "938a596abfaa6f8b6266fddd6f59ae5a"
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
    "url": "assets/js/10.d0431165.js",
    "revision": "f3754704a4df50c495d27bb5c9d199e4"
  },
  {
    "url": "assets/js/11.dedee749.js",
    "revision": "22aa84d2e1d79e71c8792c29b9908853"
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
    "url": "assets/js/27.ea142390.js",
    "revision": "59f171fb68569de9d66c9147cf59182c"
  },
  {
    "url": "assets/js/28.d8f95456.js",
    "revision": "cd980008766c6604ca70a03869d1a74c"
  },
  {
    "url": "assets/js/29.87b25d3c.js",
    "revision": "59a4507a4186e85013b3f9e5c23dc84b"
  },
  {
    "url": "assets/js/3.78a56f3d.js",
    "revision": "13164944f651fc0ea89a33392d342432"
  },
  {
    "url": "assets/js/30.78eb6a7a.js",
    "revision": "5c4289771bb295e786b3361b5cb6435e"
  },
  {
    "url": "assets/js/31.2ffa6901.js",
    "revision": "73bf08f47465e0075056020766d06b4e"
  },
  {
    "url": "assets/js/32.3a12590d.js",
    "revision": "b171b5945b221d04998490c6b0b13f65"
  },
  {
    "url": "assets/js/33.331ac018.js",
    "revision": "8048bb02ccba4e52cd46371b8ca02e90"
  },
  {
    "url": "assets/js/34.eb9b3d99.js",
    "revision": "8771732e515dcf838c72d02619a8c27c"
  },
  {
    "url": "assets/js/35.c8d96daa.js",
    "revision": "15ce5b4b27880440ef62a3760360c40b"
  },
  {
    "url": "assets/js/36.ab630e59.js",
    "revision": "21971291f1cbdcb00f9ab949483d184f"
  },
  {
    "url": "assets/js/37.15ad98e4.js",
    "revision": "2d302f736ef41938a5d40ec1373d7da2"
  },
  {
    "url": "assets/js/38.e25a3367.js",
    "revision": "d47478fdc284e5f081abdd255a6aaba4"
  },
  {
    "url": "assets/js/39.02527d60.js",
    "revision": "53629bd0c36aeeb6510b2a508c50f1ef"
  },
  {
    "url": "assets/js/4.c04c5c7f.js",
    "revision": "e82105663f9c7ab8bae033870a4eb6b5"
  },
  {
    "url": "assets/js/40.746d300f.js",
    "revision": "c50ab378c5ad78d37132c749ac45c7da"
  },
  {
    "url": "assets/js/41.e93fbf0c.js",
    "revision": "099d662c36e4ec5f6c5bb139ce38aba1"
  },
  {
    "url": "assets/js/42.e8c5f9d5.js",
    "revision": "8e6ffa63aaeac5037367e96bad56b55a"
  },
  {
    "url": "assets/js/43.fb8b3ee2.js",
    "revision": "445c25cdd4c4cb1dd21973b4f3d273b1"
  },
  {
    "url": "assets/js/44.298c3a96.js",
    "revision": "293eae129712dd424e8b528402f9f44b"
  },
  {
    "url": "assets/js/45.1073a4c4.js",
    "revision": "c5836912f91405402be087dee00b5a02"
  },
  {
    "url": "assets/js/46.1c32a473.js",
    "revision": "85353d44349c0fe1e466c0e1ad7c6ee2"
  },
  {
    "url": "assets/js/47.a71945a4.js",
    "revision": "925e64538646840358970fbcbddbb66a"
  },
  {
    "url": "assets/js/48.78e168b5.js",
    "revision": "103685539c7edad5c2886f39807242bf"
  },
  {
    "url": "assets/js/49.0b94046f.js",
    "revision": "705b1d69d6b37832dcb5777d70fdc682"
  },
  {
    "url": "assets/js/5.809a09a1.js",
    "revision": "59a49e4ecf70ae60edd8245b0ae64098"
  },
  {
    "url": "assets/js/50.5fe345a4.js",
    "revision": "97ee7e4953d84a094899f7270d3878df"
  },
  {
    "url": "assets/js/51.96c323ab.js",
    "revision": "32404c2f424b9dd27199322a0356b025"
  },
  {
    "url": "assets/js/52.ebf1d2a7.js",
    "revision": "45379a09aafe7496840011b10526754b"
  },
  {
    "url": "assets/js/53.e90e187f.js",
    "revision": "2c871f8b9cad8a9491a682d22ce33eb5"
  },
  {
    "url": "assets/js/6.d049c59b.js",
    "revision": "cf5ab5baaf57277d2ef50609ef2c574c"
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
    "url": "assets/js/9.0173791e.js",
    "revision": "b97a558100e0221ae54101fe2266fa75"
  },
  {
    "url": "assets/js/app.4a32712c.js",
    "revision": "7d7b97482c6ca3d9369600656714946b"
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
    "revision": "161fca269f305e8fd7e1e61aeb78cb76"
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
    "revision": "28aa9e8708c7e0bf5ee2f3f7098907b8"
  },
  {
    "url": "zh/advanced-types/intersection-types/index.html",
    "revision": "4c6cf8b1cbdc87b0fda90539c3096693"
  },
  {
    "url": "zh/advanced-types/nullable/index.html",
    "revision": "f97260e313a6fcfc58aa77bcfec8119d"
  },
  {
    "url": "zh/advanced-types/type-guard/index.html",
    "revision": "dfcd8d7bcb14fffa0ffb7699c64fd8d7"
  },
  {
    "url": "zh/advanced-types/union-types/index.html",
    "revision": "d232850a93d57cbaff267e0a4958ab65"
  },
  {
    "url": "zh/array/index.html",
    "revision": "f26923ee5bc720f356e57dced7254de2"
  },
  {
    "url": "zh/basic/index.html",
    "revision": "5d4c4fa2250455eb389db5855f416f00"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "3392fc9eb96f39a973a96e8dedb51a79"
  },
  {
    "url": "zh/built-in-objects/index.html",
    "revision": "e330434623acb2aa91eabcd0201cfa74"
  },
  {
    "url": "zh/class/index.html",
    "revision": "475f6d9aeae00616cb5ba3f42dfd37ca"
  },
  {
    "url": "zh/compile-config/file-inclusion/index.html",
    "revision": "8a5c38457fe588789fe6cee775444bb8"
  },
  {
    "url": "zh/compile-config/index.html",
    "revision": "21fc7bfd9484742ea2ba1713b91556cd"
  },
  {
    "url": "zh/compile-config/references/index.html",
    "revision": "5f8e682f7933672c8251d23b5c82414e"
  },
  {
    "url": "zh/compile-config/tsconfig-module-target/index.html",
    "revision": "313550022aa3f841c337daf8d7f7cd01"
  },
  {
    "url": "zh/declaration/index.html",
    "revision": "d0d66b1612b68d6955c3547a87d81f1d"
  },
  {
    "url": "zh/decorators/index.html",
    "revision": "a5314e328cc3e6b8a8f06d148bd7f785"
  },
  {
    "url": "zh/faqs/index.html",
    "revision": "8cc27244ee3f11fd2503208e5b485224"
  },
  {
    "url": "zh/faqs/interface-vs-type.html",
    "revision": "23e29d90eaf24d61c5aa4119c9fcb250"
  },
  {
    "url": "zh/function/index.html",
    "revision": "99091cf1001402997bd2775ebb1f2fa4"
  },
  {
    "url": "zh/generics/index.html",
    "revision": "e188881abb25989dffbfde6a8e8011fe"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a46f24949982abb2684c4f692bc17010"
  },
  {
    "url": "zh/interface/index.html",
    "revision": "97c7317ae9ef27d007253719413e9e0c"
  },
  {
    "url": "zh/keyword/as/index.html",
    "revision": "9d2eaa73a41c03338c8ee1f2b8932611"
  },
  {
    "url": "zh/keyword/extends/index.html",
    "revision": "180076a046c585427d8286a4809f3bff"
  },
  {
    "url": "zh/keyword/implements/index.html",
    "revision": "905deb9e542116fbf7f4f0607bb87938"
  },
  {
    "url": "zh/keyword/in/index.html",
    "revision": "386f2284aad3c5e2fb093f6f35864dca"
  },
  {
    "url": "zh/keyword/index.html",
    "revision": "7d4361d0e1dcd77d00288b7db7dca6cc"
  },
  {
    "url": "zh/keyword/infer/index.html",
    "revision": "33d31faf0866a5d645916bdb93689d77"
  },
  {
    "url": "zh/keyword/instanceof/index.html",
    "revision": "a87da50139293e3edcbf237677399d4d"
  },
  {
    "url": "zh/keyword/is/index.html",
    "revision": "60a4d4811cf3f5ecba084f134d688823"
  },
  {
    "url": "zh/keyword/keyof/index.html",
    "revision": "d40d9d04c8553e7c0cc73d06530144ff"
  },
  {
    "url": "zh/keyword/typeof/index.html",
    "revision": "a9c363a3eaf9f1fd3028f46180695d0c"
  },
  {
    "url": "zh/operator/index.html",
    "revision": "cedb9d98f767e8a3f1cb1b567a189cc6"
  },
  {
    "url": "zh/tips/index.html",
    "revision": "89ef44b8fb114383bad3422a1970522c"
  },
  {
    "url": "zh/type-assertion/index.html",
    "revision": "e0d060ae5a0ddf745f90adbd31fb13bb"
  },
  {
    "url": "zh/utility-types/index.html",
    "revision": "b7035f736dac8552d47b75acba9c49cf"
  },
  {
    "url": "zh/what-is-typescript/index.html",
    "revision": "558979720d4734acca734a77dbd9ae86"
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
