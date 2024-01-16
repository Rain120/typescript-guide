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
    "revision": "36f6bf3d39daf40929b582a746388449"
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
    "url": "assets/js/10.09878eb8.js",
    "revision": "9a33339ac2fa3cf01ef5b8550ce48ddc"
  },
  {
    "url": "assets/js/11.6575e0b7.js",
    "revision": "da80d82245f6a6ee4faf720e4c7abc0f"
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
    "url": "assets/js/18.88c8bcd2.js",
    "revision": "eadbc1aa34da09f75053f92f01a4d476"
  },
  {
    "url": "assets/js/19.a6e36fcd.js",
    "revision": "66d01256b84380b4122b19f4ef490110"
  },
  {
    "url": "assets/js/20.985a834e.js",
    "revision": "7c38b9132ef0e3f323d0aa1179d789d9"
  },
  {
    "url": "assets/js/21.2f49c4ac.js",
    "revision": "70787679d70265e109140858a5cf6dfe"
  },
  {
    "url": "assets/js/22.c527fc89.js",
    "revision": "2921acd923a8ffc3ceeae202eec01471"
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
    "url": "assets/js/26.3837cd5c.js",
    "revision": "8ac93eea1402361dab49604f0b56dbd8"
  },
  {
    "url": "assets/js/27.0e85aa39.js",
    "revision": "97fb42dbdac2addcf0dae86d508924e6"
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
    "url": "assets/js/32.65a80ca4.js",
    "revision": "be6d49533dd9bb429122ba1fb5dce4c5"
  },
  {
    "url": "assets/js/33.9101188d.js",
    "revision": "98dd0a8db325c401e17993b89352ee99"
  },
  {
    "url": "assets/js/34.ab13abf6.js",
    "revision": "ffbf26978fe101c09986f731d3ea6716"
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
    "url": "assets/js/38.4253aa9c.js",
    "revision": "22794232372e6ebb539395be63f11e10"
  },
  {
    "url": "assets/js/39.667725bc.js",
    "revision": "0f1afef3c64162611a39786320abc784"
  },
  {
    "url": "assets/js/4.c04c5c7f.js",
    "revision": "e82105663f9c7ab8bae033870a4eb6b5"
  },
  {
    "url": "assets/js/40.1d6fb593.js",
    "revision": "f97158b337de05a8a5c9e9f4ab277a46"
  },
  {
    "url": "assets/js/41.64bdba86.js",
    "revision": "3a5cd90be87421e1ef3ce1e1f7047465"
  },
  {
    "url": "assets/js/42.1c0f5575.js",
    "revision": "a16b27b778e194a81576f7fdf088f56b"
  },
  {
    "url": "assets/js/43.b96b0078.js",
    "revision": "14f1a72e831b3046adaff7c9f2f4e793"
  },
  {
    "url": "assets/js/44.3933a170.js",
    "revision": "65a018ccd4ef472d11962754a32124e2"
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
    "url": "assets/js/48.d2cfa4a1.js",
    "revision": "66f302baa0be99c63acd739b20171855"
  },
  {
    "url": "assets/js/49.9bcc8f57.js",
    "revision": "02e8c6ccf7d24af5905e50c356adf57a"
  },
  {
    "url": "assets/js/5.809a09a1.js",
    "revision": "59a49e4ecf70ae60edd8245b0ae64098"
  },
  {
    "url": "assets/js/50.c7fe23c6.js",
    "revision": "9c6376b6b31f7fe59565e5450e3eca3d"
  },
  {
    "url": "assets/js/51.0a863af4.js",
    "revision": "57a9164974078a3d2a8fdeb029aef114"
  },
  {
    "url": "assets/js/52.858ef02a.js",
    "revision": "93bf6ef4ce4fa7dd7abcf2af79432cff"
  },
  {
    "url": "assets/js/53.5df00186.js",
    "revision": "264381b5912a8e706c570f4d9f3a855d"
  },
  {
    "url": "assets/js/54.87fe0456.js",
    "revision": "024306e952bbdd21e8b33ae33c715385"
  },
  {
    "url": "assets/js/55.78f17e6d.js",
    "revision": "e3e424a37de7ca353c46d1e3bf8aaf8d"
  },
  {
    "url": "assets/js/56.a2123493.js",
    "revision": "e6e38bd0eb236b08db64c0ccbe6c3396"
  },
  {
    "url": "assets/js/57.6b4517e6.js",
    "revision": "fd7169e7c0daceb674a5c6665137cb38"
  },
  {
    "url": "assets/js/6.6000ca7c.js",
    "revision": "f78bed10057b734a94a6f70a5e589a94"
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
    "url": "assets/js/app.11a28ffe.js",
    "revision": "7ec5304442b23a27f4e43488ee1cbdde"
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
    "revision": "e212633502c132de4e1d7ae0f74b7a69"
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
    "revision": "c702dd1d81afe120b0d3e41067e180d2"
  },
  {
    "url": "zh/advanced-types/intersection-types/index.html",
    "revision": "5cc1a4a076329098fd6d1a723d5092b4"
  },
  {
    "url": "zh/advanced-types/nullable/index.html",
    "revision": "36d315462efbec913a2c6c229fe6946d"
  },
  {
    "url": "zh/advanced-types/type-guard/index.html",
    "revision": "913815d9cf4527099d5ae1749405b4db"
  },
  {
    "url": "zh/advanced-types/union-types/index.html",
    "revision": "cac9b7e6d2878afc5a9af1606826c1a5"
  },
  {
    "url": "zh/array/index.html",
    "revision": "429d30b541befd88b89dce16b3037570"
  },
  {
    "url": "zh/basic/index.html",
    "revision": "3c320ad307a45be87bd5a3a50cdc664b"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "1530d74b927311c1bd8adb7e65f0039c"
  },
  {
    "url": "zh/built-in-objects/index.html",
    "revision": "19ed0d3373311c9c79496b662cc0b1a8"
  },
  {
    "url": "zh/class/index.html",
    "revision": "5dfa55971b620b4fee8bfbe4b4900a26"
  },
  {
    "url": "zh/compile-config/file-inclusion/index.html",
    "revision": "ff2a822f3d269422fa437f83cb888ba8"
  },
  {
    "url": "zh/compile-config/index.html",
    "revision": "9334d5e3b449cc28da7ec314b51899a8"
  },
  {
    "url": "zh/compile-config/module-resolver/index.html",
    "revision": "2e4fa8da1db71d142c78eeef1db60422"
  },
  {
    "url": "zh/compile-config/references/index.html",
    "revision": "6f9a511154c99d082a45efef30416177"
  },
  {
    "url": "zh/compile-config/tsconfig-module-target/index.html",
    "revision": "f8d51bcee809c41dd6e7dbd2551e2899"
  },
  {
    "url": "zh/declaration/index.html",
    "revision": "77aa98095d8a7d2c0a9855488956f128"
  },
  {
    "url": "zh/decorators/index.html",
    "revision": "17f3af721b703a1959ff8441bf45459f"
  },
  {
    "url": "zh/faqs/index.html",
    "revision": "816dabbbc2ffd4b1938e0d0fe31eb8aa"
  },
  {
    "url": "zh/faqs/interface-vs-type.html",
    "revision": "ef7b741483083c361ff48aa3a2e7235d"
  },
  {
    "url": "zh/function/index.html",
    "revision": "8aaaddaf91b810baae33f76aec6156c9"
  },
  {
    "url": "zh/generics/index.html",
    "revision": "3361a9fbc678d26d83e20a3d42fa2251"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "cfa37df64a1e7d2aaee406dee0f98483"
  },
  {
    "url": "zh/interface/index.html",
    "revision": "bcfbcf002a787218234d9dd40af14785"
  },
  {
    "url": "zh/keyword/as/index.html",
    "revision": "142b9e0a7318113e0592a0ea03729920"
  },
  {
    "url": "zh/keyword/extends/index.html",
    "revision": "a0b8c8255c63f3a1319f30b431810811"
  },
  {
    "url": "zh/keyword/implements/index.html",
    "revision": "5e54d7e9deb1365acb6fce633d0cba67"
  },
  {
    "url": "zh/keyword/in/index.html",
    "revision": "fe1fbcf47450e9c03d4d7a4ef086999c"
  },
  {
    "url": "zh/keyword/index.html",
    "revision": "a96bf76c97cf7941ce97f48916ac734c"
  },
  {
    "url": "zh/keyword/infer/index.html",
    "revision": "0ae5ef4b4388fdf27fdc883d9d327384"
  },
  {
    "url": "zh/keyword/instanceof/index.html",
    "revision": "b4a744376ef0764aeec8cab1e393dcf1"
  },
  {
    "url": "zh/keyword/is/index.html",
    "revision": "18b5421db090dbe82c42167354a973bc"
  },
  {
    "url": "zh/keyword/keyof/index.html",
    "revision": "9e4cb2d90b6b14cc824eb45574d2b51a"
  },
  {
    "url": "zh/keyword/typeof/index.html",
    "revision": "865ccf999f7e37c069cc6235a0675077"
  },
  {
    "url": "zh/operator/index.html",
    "revision": "b12c9882d8a4ac183df606a84ddb6699"
  },
  {
    "url": "zh/tips/if-else/index.html",
    "revision": "d1783ecd2ff82865eeb8f8ae94b0debe"
  },
  {
    "url": "zh/tips/index.html",
    "revision": "1abfd27fdf60e54d5a02fa2778664462"
  },
  {
    "url": "zh/tips/spread/index.html",
    "revision": "12d09aa155cf324d0eeb3b4aa1973911"
  },
  {
    "url": "zh/type-assertion/index.html",
    "revision": "906d8de38dfa965a29be938b011d8f3d"
  },
  {
    "url": "zh/utility-types/custom-utility-types/index.html",
    "revision": "817ed55e028a27817f7f29ed85480c87"
  },
  {
    "url": "zh/utility-types/index.html",
    "revision": "8521df410249ec2551f0643f123be46b"
  },
  {
    "url": "zh/what-is-typescript/index.html",
    "revision": "1761e509a35182275353ec062e965839"
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
