if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(function (success) {
      console.log("[Service Worker 등록완료]", success);
    })
    .catch(function (error) {
      console.log("[Service Worker 등록실패]", error);
    });
}
