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
