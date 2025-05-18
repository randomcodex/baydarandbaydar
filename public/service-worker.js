const CACHE_NAME = 'baydar-cache-v1';
const STATIC_CACHE = 'baydar-static-v1';
const DYNAMIC_CACHE = 'baydar-dynamic-v1';
const OFFLINE_PAGE = '/index.html';

// Assets to cache immediately on install
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

// Optimize cache management
const limitCacheSize = (cacheName, maxItems) => {
  caches.open(cacheName).then(cache => {
    cache.keys().then(keys => {
      if (keys.length > maxItems) {
        cache.delete(keys[0]).then(limitCacheSize(cacheName, maxItems));
      }
    });
  });
};

// Install event - precache static assets
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== STATIC_CACHE && name !== DYNAMIC_CACHE)
          .map(name => {
            console.log('Deleting old cache', name);
            return caches.delete(name);
          })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - network first with cache fallback for dynamic content
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // For HTML pages - Network first strategy with cache fallback
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache a copy of the response
          let responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If network fails, try to serve from cache
          return caches.match(event.request)
            .then(cachedResponse => {
              return cachedResponse || caches.match(OFFLINE_PAGE);
            });
        })
    );
    return;
  }

  // For non-HTML requests - Cache first with network fallback
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached response if found
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then(response => {
            // Cache the new response for future
            let responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then(cache => {
              cache.put(event.request, responseClone);
              // Keep the cache size under control
              limitCacheSize(DYNAMIC_CACHE, 75);
            });
            return response;
          })
          .catch(() => {
            // For image requests, maybe return a placeholder
            if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
              return caches.match('/AppImages/android/android-launchericon-192-192.png');
            }
            return new Response('Resource not available offline');
          });
      })
  );
});

// Handle offline functionality
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Background sync for deferred actions when online
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

// Dummy function for sync demonstration
function syncData() {
  return new Promise((resolve, reject) => {
    // This would be where you sync data with the server
    console.log('Background sync executed');
    resolve();
  });
}
