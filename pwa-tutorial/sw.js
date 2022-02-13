// 캐싱 스토리지에 저장될 파일 이름
var CACHE_NAME = "pwa-offline-v1";

// 캐쉬할 웹 자원들(이미지, css 등) 정의
var filesToCache = [
  "/",
  "/favicon.png",
  "/css/app.css",
  "/images/hammer.png",
  "/images/gauntlet.png",
  "/images/shield.png",
];

// 서비스 워커 설치 (웹 자원 캐싱)
self.addEventListener("install", function (event) {
  console.log("[Service Worker] Install");
  // waitUntil 이벤트가 실행될때까지 대기
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        // pwa 파일에 캐쉬할 웹 자원들을 추가
        return cache.addAll(filesToCache);
      })
      .catch(function (error) {
        // 에러 핸들링
        return console.log(error);
      })
  );
});

self.addEventListener("fetch", function (event) {
  console.log("[Service Worker] Fetch");
  // 네트워크 응답결과 반환 이벤트
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
