const CACHE_NAME = 'baydar-cache-v1';
const STATIC_CACHE = 'baydar-static-v1';
const DYNAMIC_CACHE = 'baydar-dynamic-v1';
const OFFLINE_PAGE = '/index.html';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/manifest.json',
  '/logo.png',
  '/src/main.jsx',
  '/AppImages/android/android-launchericon-192-192.png',
  '/AppImages/android/android-launchericon-512-512.png',
  '/AppImages/ios/180.png',
  '/AppImages/ios/192.png'
];
const limitCacheSize = (cacheName, maxItems) => {
  caches.open(cacheName).then(cache => {
    cache.keys().then(keys => {
      if (keys.length > maxItems) {
        cache.delete(keys[0]).then(limitCacheSize(cacheName, maxItems));
      }
    });
  });
};
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        return cache.addAll(STATIC_ASSETS);
      })
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== STATIC_CACHE && name !== DYNAMIC_CACHE)
          .map(name => {
            return caches.delete(name);
          })
      );
    })
  );
  return self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          let responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request)
            .then(cachedResponse => {
              return cachedResponse || caches.match(OFFLINE_PAGE);
            });
        })
    );
    return;
  }
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request)
          .then(response => {
            let responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then(cache => {
              cache.put(event.request, responseClone);
              limitCacheSize(DYNAMIC_CACHE, 75);
            });
            return response;
          })
          .catch(() => {
            if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
              return caches.match('/AppImages/android/android-launchericon-192-192.png');
            }
            return new Response('Resource not available offline');
          });
      })
  );
});
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});
function syncData() {
  return new Promise((resolve, reject) => {
    resolve();
  });
}
