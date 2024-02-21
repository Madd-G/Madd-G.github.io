'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0c2e03161ede8bef4edeb858833a926d",
"index.html": "563301dcdf4b7b67adcb917ab894d247",
"/": "563301dcdf4b7b67adcb917ab894d247",
"main.dart.js": "ab991ce34901d948b441c7a2a9b7a7fc",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cace2484a12a8ef09979590802821323",
".git/config": "50f7a5cd46c1cae372b85eaa9b407d3d",
".git/objects/92/2e76a1fb3980c5d759dc50ac22bd9f1fd6a42a": "9f093dae29902ff12f0dd5504a70021e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/6a0766f152fb605c34008526acfa60e06f2156": "02f9f2efd93db5e95b6571502a088246",
".git/objects/04/ab1457912ed04f6ff9cbced12b1a9e32fb47a6": "0a17eb204e35b86806143a6c9fe6a59a",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/255c7fce1318ee6942e20b8026e8c21b2c2a58": "c99d8a053a07430b6614d3cca1c017bf",
".git/objects/67/3e99ff7dbd9104cdae3ebac405617bd447b264": "5101cbe68bd141fcf382f2fa02951c8d",
".git/objects/0e/b1dbb4fbcd6aabc136f93c9fef119c8274d85e": "11d8518bf7e9c0e11c57a5f9f7c388bd",
".git/objects/a4/63a82f79fca7cdd97c831000ccf92baa9b5ab2": "124359fe5fa84b38d87a5844d8a0f5d7",
".git/objects/d7/2c657481b389f4dddb7878b6ff827a8cf35781": "22469abe1db7380e209089d89f34e59f",
".git/objects/b4/a3d2747baeb2b95db1794974dc2b07755a1096": "67c97146968f9de5a17e6db14fc6a23f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/8d13bad1d02320f9e3aafa517999913243a612": "9b2bd9f5c8ea19e62454a16978466a49",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7c/fe9e384363f44d80fc724ba7b0f544b74b27e6": "5f8608ecf21eb97e6a764802af662ab4",
".git/objects/1a/93377f9247db912b212d54f054d36d6a961128": "8f356507951ba610b383be4b635308fb",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/10/8b745ab33b986bd32e1d463c06ffb265103ae4": "2eab2e842426d28d620ed050d6406d00",
".git/objects/26/493a0bcd2187b0efcee17b2af5389c11844762": "a4b4ee436f8d9f2aba97f0695f255ed8",
".git/objects/21/89ccface30563c05458bc7416111235d55493f": "789f75363efd3a6c398806a442638df6",
".git/objects/81/70e2a9989d39f99a400fe25277088f3de9edd7": "e949f93d65b56b41a20a8a33eede5bb0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/9d0ff81ea6bc2704fb68c25f0aee86c85c285b": "3ad42a44b1b93d6d592cdee7f42a20ce",
".git/objects/38/520a9e56e1bc1abe6a87179f656047f32584ee": "ce7eebbf4fc1c704b6c42ef2e9974afb",
".git/objects/5c/9cff598081db009c8445dc4d45fa9065430f5c": "1f090bef87f71678b602324ef0e96da9",
".git/objects/31/826b5e291dc2bf04d91f8effba6afdd8c99f96": "77a5a55e28c7d5a14cc2f753f811132b",
".git/objects/62/35dec0db79b08c19f17a95235127434ebf35a0": "41bd8fde6755260dd447e5831210a361",
".git/objects/96/cd10ef95eeda1839607fdc7de7d55ccc06614d": "33e662bc4f03b630efc9c3a615c37d87",
".git/objects/98/cdc6e5ea8230978ec1c3d211e0284b63d89382": "5a04e480edd5d9c3d9c4ae0014e1dd08",
".git/objects/98/5935b47b5af054e053950a3fe9cbdcdbccaef6": "689e650aa3cb65aae2b8b89d75f24e4e",
".git/objects/5b/29496f5db9e7e064ffb9a8b0e3b67430a03c69": "0d9e86bed5138b1872f38bfc1c53c457",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a7/1f721cd55223527f4d891a2d9787b13b0f7639": "745241ba123d08c30c664d58c6776d6f",
".git/objects/a7/e440f74f691f8406b2342ebe14d494542640b1": "97f50fff962fadbaa74112f5a915ff02",
".git/objects/dd/cfd8c26facad351ba5e1c622ce22efd71e76d6": "cfaab1cfb7bc7ecd1ac0598e51e7e06d",
".git/objects/af/fe720afc2d5715bf6bd04bf69181995021cb77": "61f51b829fffda5880094172981edd0c",
".git/objects/af/600f902b509bb1279987776e05d803ec59389e": "d93de06ef11b64ef7787f9b016aa92cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/25a5885d2852f6ccee290a69441185c9d62244": "26635c88801c1567c6c2216a1ccaade5",
".git/objects/e1/6485de9fef64bb71ad1e1c7b8ab15556f9555e": "5db2860bd27bb0491a7ced19aae15d85",
".git/objects/cd/96d0dc20b93ea1c9f5957996fd8b6d78ddf540": "4615e7bddc7ba2a546b8c5d92ae93ea3",
".git/objects/e6/0f76adb8e563418e3dd248a82f7cfe7a5b8845": "0a1ee2c4b41fcd7808e1ca1a1a8299d3",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/f6/5cc773c0b8ad6eacb6486a7f0829139918b028": "fa525bbbda3b39dfd04cdae20571528b",
".git/objects/e9/327e01441a0ab7180b68865701c8c2fdf247fa": "d01bb1d2cd57adf17a2483e4bec2eb9f",
".git/objects/f8/eb1a772ed8b3d4672859e42b002b1f6d59e2a2": "8f1b468569f0753f58bf2ea421b5ccd5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/5e39e600cf8c3612ab15ccb2206ebcb76e0757": "83c8e2b27725f5036f2971f66af24470",
".git/objects/84/aa78a1435525da052a9d6b754674381fec0cf9": "7deee86f48789f2e337cb71fd2a05c1e",
".git/objects/4a/b6ed3eaa7e5bfc05fb8fc4253ee29b9294d04e": "306924f987687cdbebd4c0b6d496bdaf",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/e91e1238e04d037c29f1ffeb01378502db5416": "308f4fd1ec6514109265231c1eb3aeec",
".git/objects/4f/6bd14378665509e45453ce07c0fa950fbb21d3": "522d93924b1e2cc334d7d41a72e83089",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/82/7975556db89973f7b4bfc02662410137dcd9b8": "2b0a3b2152d640495694b8704b24ff34",
".git/objects/49/8da48d283500edb7f98a66ad69dbb3a9c5e6bc": "cfd3cf8441ec071a184256c849e62a61",
".git/objects/8b/b1cbceffa531b214b86e2235abca5105fb18b8": "67dfb8fc93a0135931a8f03a306b1130",
".git/objects/13/659113add0cf5b005a6a9a674ade431b1ecb03": "e2da9b6e45aa4c954099be33bd938cd3",
".git/objects/7a/14d6d755b530cb38fcf10107c2c9a0c40e0c82": "36cf9ad27007f30e2b2a27a3d37ee32d",
".git/objects/22/f64d9a83d1961e9194f11972d54c9b95694a3f": "53d592562c9b25f1d81afde6091053ac",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "adb644b48271878ee8107a8a10b3a76a",
".git/logs/refs/heads/dev": "739dcdf418b4e0f241a9f51344e8ea33",
".git/logs/refs/heads/main": "d849bbb67d14e946444d81dca01840b0",
".git/logs/refs/remotes/origin/dev": "1fddd5cb8cd1ea7b3d8e7042a30f9491",
".git/logs/refs/remotes/origin/main": "809f67306ae9f1efe4e42d546875bc02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/dev": "b403abb669cdfe294d554ada17d92398",
".git/refs/heads/main": "6d509812f01c92e61a043fcc6c7bdf55",
".git/refs/remotes/origin/dev": "b403abb669cdfe294d554ada17d92398",
".git/refs/remotes/origin/main": "6d509812f01c92e61a043fcc6c7bdf55",
".git/index": "ccf36d3d039be4a6be764759660c622a",
".git/COMMIT_EDITMSG": "acf1106519928d84621f482af6a5fc05",
"assets/AssetManifest.json": "5c768c35111175278eacbfd7c3103eaa",
"assets/NOTICES": "63b5ae22c18b23cf771a7725e3df8320",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "205980f274ed8c92132ef93c899bef98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4707f3b30abce8ef54ada8ee421e209e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "8d5b95fb625456cb9ee8a61f271b4f66",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/halodoc-logo.png": "f37079616c10160d56ffaf7d8473e8ec",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "7c4d0884379a5546d94caa0af212af9c",
"canvaskit/canvaskit.js.symbols": "ac01b6cbb645f360ca2895570c643303",
"canvaskit/skwasm.wasm": "828877207ea77b5de53b13df259cb219",
"canvaskit/chromium/canvaskit.js.symbols": "98378de0c2c63b0d282826a2482c854c",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.wasm": "bc2fae94985c547ed883fd25e829ab1d",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.wasm": "955789beca35ead57749267fe633000b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
