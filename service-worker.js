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
    "revision": "2a2b5b5555653fc913b00dc2bf826a59"
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
    "url": "assets/js/10.21021296.js",
    "revision": "da35d03e78606571e9f0a6ec02eab660"
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
    "url": "assets/js/36.61908f4c.js",
    "revision": "403307b0e3a7b8c86840b47fa609ecb5"
  },
  {
    "url": "assets/js/37.2a0d5616.js",
    "revision": "5459a43eb3ba0139ea07f5d0652949dc"
  },
  {
    "url": "assets/js/38.9f03a1da.js",
    "revision": "0cf9a0b8f699c436db5d7c96cf107e36"
  },
  {
    "url": "assets/js/39.30648a7f.js",
    "revision": "7cc5bc0f4798b229bc7cf8144f0c8280"
  },
  {
    "url": "assets/js/4.c04c5c7f.js",
    "revision": "e82105663f9c7ab8bae033870a4eb6b5"
  },
  {
    "url": "assets/js/40.24d4bd48.js",
    "revision": "dfa806eb5d5ca81707843d1f61d028c8"
  },
  {
    "url": "assets/js/41.95f57262.js",
    "revision": "f6b9aeb41c02f3ad6f329541cd2dd129"
  },
  {
    "url": "assets/js/42.bc0a6c23.js",
    "revision": "ffbda779d289873c77f8ab61f6ad2208"
  },
  {
    "url": "assets/js/43.ffaf1555.js",
    "revision": "4ca736104ad28d1409f3f604a65a66f7"
  },
  {
    "url": "assets/js/44.e5805f23.js",
    "revision": "a3d34fc6265e2ce7f032cce07cbf2104"
  },
  {
    "url": "assets/js/45.4484552d.js",
    "revision": "1373192d01bba1f2a0ad4da28ccc3ccb"
  },
  {
    "url": "assets/js/46.269336c8.js",
    "revision": "95c17afe5bb3c88f604351f00b7e2158"
  },
  {
    "url": "assets/js/47.78d8c4cb.js",
    "revision": "138758a1d9286acd4e2ebe806cc70832"
  },
  {
    "url": "assets/js/48.c13fbf20.js",
    "revision": "fad01299c717a9dd7a5a593d488204d0"
  },
  {
    "url": "assets/js/49.2df8e9ee.js",
    "revision": "55ef8409d4ed3c401dff9c0df9d9c26a"
  },
  {
    "url": "assets/js/5.809a09a1.js",
    "revision": "59a49e4ecf70ae60edd8245b0ae64098"
  },
  {
    "url": "assets/js/50.0b885812.js",
    "revision": "f2896b2d37914d04f6febca9b5a40bc2"
  },
  {
    "url": "assets/js/51.779676e7.js",
    "revision": "6307d8dcddf2b7da23b5dac8e3120898"
  },
  {
    "url": "assets/js/52.00a1b7c5.js",
    "revision": "143c1b766299178d5e2eb4f0308df3a7"
  },
  {
    "url": "assets/js/6.939845a2.js",
    "revision": "27625df3b4c63b9187c657190eda620a"
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
    "url": "assets/js/app.3990174c.js",
    "revision": "dd68ead413f4d75b416cd850fa76b72f"
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
    "revision": "a4139c72eaf34c05b1d3ac8257168fa5"
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
    "revision": "0eb0152b162e85f9b643939932b02cdf"
  },
  {
    "url": "zh/advanced-types/intersection-types/index.html",
    "revision": "d1ef1633805a32c07db8676fc6f97cd4"
  },
  {
    "url": "zh/advanced-types/nullable/index.html",
    "revision": "edaca8984971d53bff7745bd5f4fc1a7"
  },
  {
    "url": "zh/advanced-types/type-guard/index.html",
    "revision": "3b147b8338bb0062d001653038d71a21"
  },
  {
    "url": "zh/advanced-types/union-types/index.html",
    "revision": "195a2cc4484fbe1eff9522a2b51f614e"
  },
  {
    "url": "zh/array/index.html",
    "revision": "dd5ff140133c161307ff0a7d288756dc"
  },
  {
    "url": "zh/basic/index.html",
    "revision": "e96670243445e8bd83706b1af0425356"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "e5c05606aab18c19571bb97ab89e836e"
  },
  {
    "url": "zh/built-in-objects/index.html",
    "revision": "d83d59ea3c49ed898df0e1ac5a8f4a1e"
  },
  {
    "url": "zh/class/index.html",
    "revision": "ff82d427f39b46ed5d42e59c852422a5"
  },
  {
    "url": "zh/compile-config/file-inclusion/index.html",
    "revision": "efae10dea7a48035f22a97c4abec3a8e"
  },
  {
    "url": "zh/compile-config/index.html",
    "revision": "8bfc5abfb6c89a71a360c32225cd46a2"
  },
  {
    "url": "zh/compile-config/references/index.html",
    "revision": "4ad8e6f62b9281434de1434192510c13"
  },
  {
    "url": "zh/compile-config/tsconfig-module-target/index.html",
    "revision": "54633977b2ae91a3629a4d234a6c2504"
  },
  {
    "url": "zh/declaration/index.html",
    "revision": "fe1480a2ca5b6ae36a2d5c4790f3c930"
  },
  {
    "url": "zh/decorators/index.html",
    "revision": "bcda9bbc086076bd68e9ca1d31a67422"
  },
  {
    "url": "zh/faqs/index.html",
    "revision": "6d364deeae6900ec5f5c75a959033bbb"
  },
  {
    "url": "zh/faqs/interface-vs-type.html",
    "revision": "9c239e58046784375da1da85875a15e0"
  },
  {
    "url": "zh/function/index.html",
    "revision": "f76ad3b64b668a8e651061a72a78ed25"
  },
  {
    "url": "zh/generics/index.html",
    "revision": "e0dce3de2b3b74526a91f05dfa331f4f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "db5196d389844f8ccf490be502d661af"
  },
  {
    "url": "zh/interface/index.html",
    "revision": "24c9497f2405162a030637a381a27d66"
  },
  {
    "url": "zh/keyword/extends/index.html",
    "revision": "f9784e7a1172430d1f0dad1a99ed7027"
  },
  {
    "url": "zh/keyword/implements/index.html",
    "revision": "8438981ed8cad1e959f6a932a3ff5f06"
  },
  {
    "url": "zh/keyword/in/index.html",
    "revision": "5870e2042babdaee256b80caae5a33cc"
  },
  {
    "url": "zh/keyword/index.html",
    "revision": "d508ccf4ba9caee5db81ac5a217403df"
  },
  {
    "url": "zh/keyword/infer/index.html",
    "revision": "6b568bc0a444fee1e0f8f1caa9d95759"
  },
  {
    "url": "zh/keyword/instanceof/index.html",
    "revision": "81f77496c80c9332681386cd54f4a934"
  },
  {
    "url": "zh/keyword/is/index.html",
    "revision": "400488055cc3c93d3d8804e59883a165"
  },
  {
    "url": "zh/keyword/keyof/index.html",
    "revision": "3d073afe8203e1d725425b2fc358849d"
  },
  {
    "url": "zh/keyword/typeof/index.html",
    "revision": "e096739aafd1b1fd757f37b02c74c324"
  },
  {
    "url": "zh/operator/index.html",
    "revision": "e46dd87468ff2381438b25e4ad20401a"
  },
  {
    "url": "zh/tips/index.html",
    "revision": "5cf2b632216cbdc3ec385d6a871566ec"
  },
  {
    "url": "zh/type-assertion/index.html",
    "revision": "ac499c624b20addce11b7e3cc88d6967"
  },
  {
    "url": "zh/utility-types/index.html",
    "revision": "8b9e9f2c11ed156fbe0290ab23841f04"
  },
  {
    "url": "zh/what-is-typescript/index.html",
    "revision": "f0ce893045154bf5352a92a807d261d0"
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
