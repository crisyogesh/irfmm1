'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "859983513f80ed5f622e35eb06e8407b",
"assets/assets/agreshit.png": "0038459a2da1f34356cb7343c0681e51",
"assets/assets/any_other.jpg": "378c3cb7575a837bae00706ea25b5ce3",
"assets/assets/ayogaye.png": "a7cac221d351f3fc01dc9477d12abf8a",
"assets/assets/bharat_sarkar.jpg": "5b505110711e608a6dead5b82cd46312",
"assets/assets/bhar_av_stock.png": "fd74e291c6d097d8beff950af50979c6",
"assets/assets/brake_dawab_kg_me.png": "d327fc9db07f3996da518a7fb413680b",
"assets/assets/brake_power_per.png": "8cd11a30e1f33e2c079597cae06c1965",
"assets/assets/brake_van_me.png": "3c4c2521e2b1038c8c8f87596c444d9f",
"assets/assets/Built_Date_Image.jpg": "a00e615567f976590af58a078c3c89d2",
"assets/assets/cc1.jpg": "3a2522c62a1d717986c995ba4f5e09fe",
"assets/assets/cc2.jpg": "55cfdbc0428bbaeb75c69f556ed3140a",
"assets/assets/cc3.jpg": "0b82bf7704a5c6d34976575b92030d96",
"assets/assets/ccTop.jpg": "616c74bb42b42470b1872a94b8ed768b",
"assets/assets/chalne_ke_leye.png": "eac2d7fbddb1d2e6b3fe77b6b037a916",
"assets/assets/Coach_no_rly.jpg": "5b2ffaad577308ea4fa5bd09c388b407",
"assets/assets/dinank.png": "d3cb05e9b346f5cede0a2423576ec1fa",
"assets/assets/din_ke_leye.png": "6fc258e0c8a6ae3b6540416eff766d85",
"assets/assets/din_ke_reayati.png": "a6e4e78373ec0fcb18c73eb4508aef57",
"assets/assets/ee1.jpg": "a9328d43f8ea2d485b3d2f39ec083e3d",
"assets/assets/ee2.jpg": "656f7fec41f3c2e7cd96d5861ddc0ac7",
"assets/assets/eeTop.jpg": "4c7c5a8c083bda7c7826580ec6e3883a",
"assets/assets/eng_me.png": "c6b39322a21d1dd0969d65996ebccc68",
"assets/assets/eng_sankhaya.png": "d99f1088fd8f54d20a631c0235d7db80",
"assets/assets/esthithi_sankhaya.png": "d6b238c09c002dd376f31900e0ed2e48",
"assets/assets/es_thithi_ke_bad.png": "f005cc8a060215b2c5b940059459616e",
"assets/assets/feed_pipe_kg_me.png": "f42e18b0d42bdbba4682492b0f043a81",
"assets/assets/footernew.png": "3b3a5542cae367943605e0297402dadd",
"assets/assets/gadi_par_eng_ka_samaye.png": "01629ebf26ff3420a5e6e838d90882e4",
"assets/assets/gadi_sankhaya.png": "7245e8df68e668ff22bea001f2620f3c",
"assets/assets/gantavya_sthan.png": "00d38be2db305fcfac7ae2edef32defa",
"assets/assets/ghat_original.png": "84896b02e4d87cf6d2012629aaf4a124",
"assets/assets/ghat_top.png": "33bc7e7cf98424d05109693b98cd6467",
"assets/assets/Hind-Bold.ttf": "25ba4ea71ae01575b854681c42c1d0ef",
"assets/assets/Hind-Regular.ttf": "dc2874ab4f42fb0a99fe02d60491c133",
"assets/assets/jari_keya_gaya.png": "0ad4fc0bab5b24909832ac765b2ddd62",
"assets/assets/karmank.png": "052b6f9ffee9284de56593912c538413",
"assets/assets/karmank_2.png": "bfb76f6058546fc52edfc961930c57b4",
"assets/assets/karyarat_brake_cylinder.png": "49b4231d712470ce1955e4b833e7df54",
"assets/assets/kerpeya_dhyan_de.png": "8ca39cb811ff2686296b4bf87b69942e",
"assets/assets/km_enmese_phele_jo_ho.png": "ef736f5dfce0c697f6d660b656ce7469",
"assets/assets/kul_brake_cylinder.png": "8dbdc370eed2e9aee6ac31b09e181240",
"assets/assets/niman_vihar.png": "1327b130af8a0d1f68b6ade894cc3b47",
"assets/assets/noImage.png": "33f1cab6138d05f889f5f12524ae2ea1",
"assets/assets/original_bpc_no.png": "114c3a42e8e2ef8a944b6e58630c2f6d",
"assets/assets/panch_din_ki_reayi.png": "a6b58fc77fa17fcadbe06c449857d06a",
"assets/assets/panch_din_ki_reayi_old.png": "03ddf5bc5f9dafebb87a8cad41318647",
"assets/assets/parman_patar_sankhaya.png": "c45b10a47d92bb8835329f0abdffd5da",
"assets/assets/pe1.jpg": "3a21d6bae2c1d32765fcc7060e968c50",
"assets/assets/pe2.jpg": "9c837b14be1fcd57b6e51625896fea86",
"assets/assets/peTop.jpg": "5ec9555a551a9bb3265ba4c432e4dd3f",
"assets/assets/poh_date.png": "8167385e08581b950f913561e4140ba7",
"assets/assets/poh_station.png": "a4197308698ce3d6afd2748397e66855",
"assets/assets/pro_details_image.jpg": "33c6114ad0288d5bdbc0580d6dc9cb7b",
"assets/assets/punarvedik_date.png": "4eeb417f4997498f40d3a3f35366a2e1",
"assets/assets/purv_nirdharit_circuit.png": "6faafbf7991481f88bf2aee02cac928c",
"assets/assets/railway_board.jpg": "0418204b7dad23c5ae524f87928258bc",
"assets/assets/rail_mantralaya.jpg": "5416518658314f29e68318e77a160745",
"assets/assets/rake_id.png": "8a659f29a39ac97bcfe7631e4ba2f507",
"assets/assets/remarks.png": "8ffa23fe80ee8c6ed9231abfcb892a80",
"assets/assets/revTop.jpg": "5bb2d363a3b9b6ccb142de7c713ba2e8",
"assets/assets/RL.jpeg": "98d6b30e87618bb068537680bcbe354e",
"assets/assets/roh_date.png": "b9ce4bcb7aafbb28ed970b7e3d7cd37c",
"assets/assets/roh_station.png": "e4686f887d76dd3f373194c3335f5fab",
"assets/assets/sign1.jpg": "2d7f7e98a1af22c8821faf3417ad9e23",
"assets/assets/sign2.jpg": "6b5fc7ba7b586ce2bf9dca3b43e35974",
"assets/assets/sign3.jpg": "6862c59018b06b2a82dce98f5038f4e4",
"assets/assets/signGaurd.jpg": "1ea79edc2fba44e6677a4d13832879c8",
"assets/assets/signNew.jpg": "58eec0c570dc32980151df7fb1724164",
"assets/assets/signOld.jpg": "b2c38749dd227bc5e57d2975942a7a3e",
"assets/assets/signOld1.jpg": "f39cffa98edbd4bc61d4b87504106067",
"assets/assets/speTop.png": "5297798d905daeab08356a2f953c39df",
"assets/assets/station_yard_master.png": "d1bdcbb39bf91391e4e0c8f41c076c17",
"assets/assets/tretuya.png": "759be0333c271979c5bdce3885c12bf1",
"assets/assets/vapsi_date.png": "dcb450f9f65e02dbd671d581837e13cb",
"assets/assets/vayu_dawab_prasthan_par.png": "47c9ed12a22a6fe0937f8142d9d1857f",
"assets/assets/vayu_dawab_teyar_hone_ka_samaye.png": "5efae75bce3068b5eb2a2524708c36a0",
"assets/assets/vegan_ki_kram_badtta.png": "d3863b51fbafea64a66dc5723c143294",
"assets/assets/wagon_malik.png": "f1ea399841265c661e783014a213fc71",
"assets/assets/wagon_no_type.jpg": "a1d82d7f5d25321010f33216057f8dd7",
"assets/assets/wagon_parkar.png": "bfb693c0e879889bf2e76c995aec3305",
"assets/assets/wagon_sankya.png": "828d3874fc757c49bbe1984165d5b9a4",
"assets/assets/wagon_sankya_2.png": "ede490156c96c220f37c4ecf9b834337",
"assets/assets/yahe_brake_power_12_din.png": "fcbc78b878129a1fafaaf00b38aa86f8",
"assets/assets/yahe_brake_power_30_din.png": "d50bcfa675dd09934f569cc8f5f70476",
"assets/assets/yahe_punarvedika.png": "f393b7b395dc8aba123e0d600ba31bce",
"assets/FontManifest.json": "2cf8f9ed0cc9d48e5f5638fe97370cc2",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/SourceSansPro-Italic.ttf": "3d7cb86547ce5075625915f2e86d0687",
"assets/fonts/SourceSansPro-Regular.ttf": "c1678b46f7dd3f50ceac94ed4e0ad01a",
"assets/images/150years.png": "d1524c420025a90bca71f7fc41e54512",
"assets/images/azadikaAmrit2.png": "a823b5ad9c0be68efa85acad908753d8",
"assets/images/cris-logo.png": "6c7176fc4308c1d49b478a70ab7af973",
"assets/images/emblem-dark.png": "4910fc9ccd564a6293794b645f801cbc",
"assets/images/g20.png": "5a13e510acf5d27006d2f6775c50151a",
"assets/images/hr-mgmt.png": "42108e90a60a642cce8aab4166e626db",
"assets/images/Indian-Railways.png": "71af279a1d0ddd1e14f1f73b339372b4",
"assets/images/ir-logo.png": "3990cbdf98210f4efea9f3e5924ebf0d",
"assets/images/loginPageGifNew.gif": "bb7cd8aa48965cdc5d0663e107986e7d",
"assets/images/minister.png": "db00e87a2f079576849acaaf238d0b46",
"assets/images/narendra-modi-38564.png": "5c3ba36157c6d8405b14bb2ebdbc61e2",
"assets/images/running_trains.gif": "414f8f5b4a2163cf12a3c8726c2e1d8e",
"assets/images/user-mgmt.png": "a375fc12634d3bc638bbff7a33cf8f94",
"assets/NOTICES": "a15dfbd3024d7e1a96c52528596fd003",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-1922.png": "7c2c8f219eac675041718784bdb06e60",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-5122.png": "7c2c8f219eac675041718784bdb06e60",
"icons/Indian-Railways.png": "71af279a1d0ddd1e14f1f73b339372b4",
"icons/ir-logo.png": "3990cbdf98210f4efea9f3e5924ebf0d",
"index.html": "5c0ad1314ffdb4043e2cc3f835447a6c",
"/": "5c0ad1314ffdb4043e2cc3f835447a6c",
"ir-logo.png": "3990cbdf98210f4efea9f3e5924ebf0d",
"main.dart.js": "a386ecef3bd13141455775529a4fadc2",
"manifest.json": "79f914a88bd051f77f70934d516c8f96",
"version.json": "2571936e75315ed423f900da90cc6a23"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
