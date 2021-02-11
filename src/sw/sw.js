// I'm a new service worker
//self

window.addEventListener("install", event => {
  console.log("Service worker installing...");
  window.skipWaiting();
  //caching static assets
  // event.waitUntil(
  //   caches.open('mysite-static-v3').then(function(cache) {
  //     return cache.addAll([
  //       '/css/whatever-v3.css',
  //       '/css/imgs/sprites-v6.png',
  //       '/css/fonts/whatever-v8.woff',
  //       '/js/all-min-v4.js'
  //       // etc
  //     ]);
  //   })
  // );
  //Ideal for: Bigger resources that aren't needed straight away
  event.waitUntil(
    caches.open("mygame-core-v1").then(function(cache) {
      cache
        .addAll
        // videos
        ();
      return cache.addAll(
        "/css/whatever-v3.css",
        "/css/imgs/sprites-v6.png",
        "/css/fonts/whatever-v8.woff",
        "/js/all-min-v4.js"
      );
    })
  );
});

window.addEventListener("activate", event => {
  console.log("Service worker activating...");
  //often used to update caches
  //clean
  // event.waitUntil(
  //   caches.keys().then(function(cacheNames) {
  //     return Promise.all(
  //       cacheNames.filter(function(cacheName) {
  //         // Return true if you want to remove this cache,
  //         // but remember that caches are shared across
  //         // the whole origin
  //       }).map(function(cacheName) {
  //         return caches.delete(cacheName);
  //       })
  //     );
  //   })
  // );
});

window.addEventListener("fetch", event => {
  console.log("Fetching:", event.request.url);
});
