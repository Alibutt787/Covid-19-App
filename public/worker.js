var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = [
  '/',
  '/index.html','https://api.covid19api.com/summary',
];
var self=this;
// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
          return response || fetch(event.request);
       
      }).catch(e=>{console.log('hyttttt',e)})
    
  );
});
