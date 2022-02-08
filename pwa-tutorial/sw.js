var CACHE_NAME = "pwa-offline-v1";

var filesToCache = ["/", "/css/app.css"];

self.addEventListener("install", function (event) {
  console.log("[Service Worker] Install");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(filesToCache);
      })
      .catch(function (error) {
        return console.log(error);
      })
  );
});

self.addEventListener("fetch", function (event) {
  console.log("[Service Worker] Fetch");
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
      .catch(function (error) {
        return console.log(error);
      })
  );
});
