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
    "revision": "d6935aad26404fec5cb83f6ef7f6096d"
  },
  {
    "url": "assets/css/0.styles.7347bfca.css",
    "revision": "f2a8cf768264c14fa3958238d9eec896"
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
    "url": "assets/js/10.0b561ff8.js",
    "revision": "9aa4d0cfa32f7a4bbf2ce5baf496e78b"
  },
  {
    "url": "assets/js/11.7e1b92df.js",
    "revision": "76e9fe13fc9dea70a0dd52b31c7b6b42"
  },
  {
    "url": "assets/js/12.e78407b6.js",
    "revision": "72523d26e92eb47c9726869ca356dd01"
  },
  {
    "url": "assets/js/13.036f13b7.js",
    "revision": "212c755a41e4d362e6fa653895b59db1"
  },
  {
    "url": "assets/js/14.758fa6f6.js",
    "revision": "1e586f1390db7c337caba762ecd47b79"
  },
  {
    "url": "assets/js/15.aaa96f00.js",
    "revision": "7bd8340055d494e0c7e9650e85ac315f"
  },
  {
    "url": "assets/js/16.16b4be66.js",
    "revision": "d1f8cf2097b1604dca981c20de44012e"
  },
  {
    "url": "assets/js/17.173b9c02.js",
    "revision": "fe2cd0e33cbdce77ef803dc99664daff"
  },
  {
    "url": "assets/js/18.88c8bcd2.js",
    "revision": "eadbc1aa34da09f75053f92f01a4d476"
  },
  {
    "url": "assets/js/19.1d2a104e.js",
    "revision": "9eabf222e62a9e2a030821845c27dc3d"
  },
  {
    "url": "assets/js/20.30d0a119.js",
    "revision": "618884042a8c94deaac3f5399a23ef88"
  },
  {
    "url": "assets/js/21.a27c1d56.js",
    "revision": "96c37b90ab705b7b73e5b9587c5eba12"
  },
  {
    "url": "assets/js/22.6d31ba2c.js",
    "revision": "44cf9fa3780d900287b23c439479b1a2"
  },
  {
    "url": "assets/js/23.bb30b195.js",
    "revision": "14fcfc7dc8c4da7ac45d1ddcf830b1ed"
  },
  {
    "url": "assets/js/24.76eb4a9e.js",
    "revision": "ed57d52b96d4469c72b3589745115f69"
  },
  {
    "url": "assets/js/25.f8f6d8a4.js",
    "revision": "2248b3cc41488516cb2ee89260f6555a"
  },
  {
    "url": "assets/js/26.ed8d8dcb.js",
    "revision": "afbadfd6eeb11aa4de5dcf5fbb4b8fd0"
  },
  {
    "url": "assets/js/27.34f7ba42.js",
    "revision": "28e13e1255654a0d3bb1b7e521359b5c"
  },
  {
    "url": "assets/js/28.78dfbf26.js",
    "revision": "32aa04d378adf8c7fafbb8a3cd078cdf"
  },
  {
    "url": "assets/js/29.af3cd20a.js",
    "revision": "e3014b863a19ff7b8ebc6a1b3ab37c33"
  },
  {
    "url": "assets/js/3.6bdffe5f.js",
    "revision": "13164944f651fc0ea89a33392d342432"
  },
  {
    "url": "assets/js/30.411cfbe2.js",
    "revision": "d9faabfafe0c9f5afe7859b520a6ef8c"
  },
  {
    "url": "assets/js/31.fca7287d.js",
    "revision": "65e851f23d55feee3ecdc5e64171c67d"
  },
  {
    "url": "assets/js/32.e0dcff91.js",
    "revision": "1f67446da3d71420a1b4c7364152ccc3"
  },
  {
    "url": "assets/js/33.5cd30ed8.js",
    "revision": "9f2502e6efea2c118d2e55e881fcbd29"
  },
  {
    "url": "assets/js/34.e0055b76.js",
    "revision": "9a3c3fbe44dcfc032214590a9789866f"
  },
  {
    "url": "assets/js/35.5f89ac8a.js",
    "revision": "d9561c504af56b7ef715888e2d38a272"
  },
  {
    "url": "assets/js/36.39f616ff.js",
    "revision": "d36fec1408cd2b4c8c12edce77f3da1f"
  },
  {
    "url": "assets/js/37.d4485626.js",
    "revision": "17c9425b8ba889aa75c30f5710e2e816"
  },
  {
    "url": "assets/js/38.81cfec92.js",
    "revision": "9be816106fa4b60a1c82b93262eb829f"
  },
  {
    "url": "assets/js/39.80e53b73.js",
    "revision": "4d9591907830ca1f081afa07875939ff"
  },
  {
    "url": "assets/js/4.f215f71d.js",
    "revision": "1d83ea5dc55759a9caa230d0b4bf7e42"
  },
  {
    "url": "assets/js/40.bb62a07a.js",
    "revision": "1ebfdd5a719aef9cd2af75f34b64106f"
  },
  {
    "url": "assets/js/41.8540611a.js",
    "revision": "6ce14389ec6a3e88979110395975886a"
  },
  {
    "url": "assets/js/42.98df015f.js",
    "revision": "f801ad563c3782cb518b9eb70c7beb5b"
  },
  {
    "url": "assets/js/43.eb1603c5.js",
    "revision": "74a8f1cd622c6ffe0b1e17cc0a3f6a57"
  },
  {
    "url": "assets/js/44.8e877ecf.js",
    "revision": "f4661c45500f34c9503136edf423b490"
  },
  {
    "url": "assets/js/45.b6b79a91.js",
    "revision": "1d0d0a6c6933ae480603d83df3d10dc5"
  },
  {
    "url": "assets/js/46.1ab89777.js",
    "revision": "372310f2db26b131038970f781f83def"
  },
  {
    "url": "assets/js/47.1d1cb136.js",
    "revision": "73be5ecd367176e5fa9fde7b10fac05b"
  },
  {
    "url": "assets/js/48.05663965.js",
    "revision": "87b996f9e951583df60e81d83703cc24"
  },
  {
    "url": "assets/js/49.8c181041.js",
    "revision": "fc0431bc48a937585919b7ad72341c8d"
  },
  {
    "url": "assets/js/5.2e0b0a41.js",
    "revision": "a1ac798f0495f89c967d08cc51f4ae31"
  },
  {
    "url": "assets/js/50.0b885812.js",
    "revision": "f2896b2d37914d04f6febca9b5a40bc2"
  },
  {
    "url": "assets/js/51.3bdb3039.js",
    "revision": "b46099c6447a5af3672239ff03386be7"
  },
  {
    "url": "assets/js/52.00a1b7c5.js",
    "revision": "143c1b766299178d5e2eb4f0308df3a7"
  },
  {
    "url": "assets/js/6.aca241c0.js",
    "revision": "0036edbb688b39d6d38f57a1bdd0de44"
  },
  {
    "url": "assets/js/7.71615327.js",
    "revision": "678062d495690a295eaa1cf3e69e86b9"
  },
  {
    "url": "assets/js/8.46a323ef.js",
    "revision": "60c3ae4c02e1a142a6d0cc3bfd2c4c3a"
  },
  {
    "url": "assets/js/9.210e0b95.js",
    "revision": "cfc3c73afbcc13b68754cb508cbb7727"
  },
  {
    "url": "assets/js/app.65bf248e.js",
    "revision": "ac1d4deba4e96c01b4931bc6b46df711"
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
    "revision": "910e053ef10d8a0b9587542c1dfd9763"
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
    "revision": "bef14dc67154db83dd12069116f0c2e1"
  },
  {
    "url": "zh/advanced-types/intersection-types/index.html",
    "revision": "b3fa683e03a8d210044e35af3a254461"
  },
  {
    "url": "zh/advanced-types/nullable/index.html",
    "revision": "90a6128e3bfc4d0e1d95b8de96397248"
  },
  {
    "url": "zh/advanced-types/type-guard/index.html",
    "revision": "0da8207e86b95c898b56f4719ff2a393"
  },
  {
    "url": "zh/advanced-types/union-types/index.html",
    "revision": "4a9deccb74c67c630d0e84476091b2ae"
  },
  {
    "url": "zh/array/index.html",
    "revision": "1f250d7f87570146ec4246041b247a9d"
  },
  {
    "url": "zh/basic/index.html",
    "revision": "3e4131342fc8a90860344eb76ef1eabc"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "acd0301c84098b4d6bd7933629c5bbbb"
  },
  {
    "url": "zh/built-in-objects/index.html",
    "revision": "fb0b3a8ea967844be4bff76edb852553"
  },
  {
    "url": "zh/class/index.html",
    "revision": "0ee4b0e51de33398a90238342f136abe"
  },
  {
    "url": "zh/compile-config/file-inclusion/index.html",
    "revision": "b454e9be1e9c44ead47725fe786b1965"
  },
  {
    "url": "zh/compile-config/index.html",
    "revision": "025ff0fc73c78ed3e3e2b45c7220cbdd"
  },
  {
    "url": "zh/compile-config/references/index.html",
    "revision": "760b48b572fa0a44e57c19dbd73b04b5"
  },
  {
    "url": "zh/compile-config/tsconfig-module-target/index.html",
    "revision": "418524b17edeefcef819396fec54f80e"
  },
  {
    "url": "zh/declaration/index.html",
    "revision": "f588c415a33927b79d983002080de9d4"
  },
  {
    "url": "zh/decorators/index.html",
    "revision": "93d20a1b07e940e11fbef33f36a7ef70"
  },
  {
    "url": "zh/faqs/index.html",
    "revision": "89691353aa1d5bcfdf8563076c3e7bde"
  },
  {
    "url": "zh/faqs/interface-vs-type.html",
    "revision": "18802b2fe6e34ddf48044f8b12c5288a"
  },
  {
    "url": "zh/function/index.html",
    "revision": "7aada983d65bfc0e40a0073e30254a7a"
  },
  {
    "url": "zh/generics/index.html",
    "revision": "a2215904478d381e37022e02be075677"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "be1c437cfd60589d041b9e0678825e13"
  },
  {
    "url": "zh/interface/index.html",
    "revision": "6e0bf6b7d66ace9cf9c8c3df45137ba1"
  },
  {
    "url": "zh/keyword/extends/index.html",
    "revision": "c86a509089f2169ba7943c742e3d069d"
  },
  {
    "url": "zh/keyword/implements/index.html",
    "revision": "a1419a1e20cb4b1fa7f258c3460ceb6b"
  },
  {
    "url": "zh/keyword/in/index.html",
    "revision": "21bee35f0afee48c0f6c4899ca024367"
  },
  {
    "url": "zh/keyword/index.html",
    "revision": "1ae45ad230805352c0c020734f084c13"
  },
  {
    "url": "zh/keyword/infer/index.html",
    "revision": "e82713b79c61d402713e9c50416cc30d"
  },
  {
    "url": "zh/keyword/instanceof/index.html",
    "revision": "f9147ffd56587a669355a7c1a89024ae"
  },
  {
    "url": "zh/keyword/is/index.html",
    "revision": "0bfee496556066423cfeb6b3115bcfbb"
  },
  {
    "url": "zh/keyword/keyof/index.html",
    "revision": "3f00c66bd379ce67fb6e6d111b94e083"
  },
  {
    "url": "zh/keyword/typeof/index.html",
    "revision": "24a4c99a007f2c360aced997f32eed98"
  },
  {
    "url": "zh/operator/index.html",
    "revision": "59208667159fced6cd631a2ecda8538d"
  },
  {
    "url": "zh/tips/index.html",
    "revision": "2dbabd90c30843ae15b426456b92531d"
  },
  {
    "url": "zh/type-assertion/index.html",
    "revision": "f506aa3955be9e160486403c961923a7"
  },
  {
    "url": "zh/utility-types/index.html",
    "revision": "b73b89c9c812137e9287edd516af6f5b"
  },
  {
    "url": "zh/what-is-typescript/index.html",
    "revision": "eea48a8ecbbb308c3f7ed2a470dfae35"
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
