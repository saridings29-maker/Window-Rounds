self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("window-rounds").then(cache => {
      return cache.addAll(["./", "index.html"]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
