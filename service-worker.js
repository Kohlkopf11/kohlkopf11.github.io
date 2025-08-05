self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('app-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/civciv.png',
        '/panda.png'
      ]);
    })
  );
});
