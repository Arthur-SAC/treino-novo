const CACHE_VERSION = 'arthur-app-v11';
const STATIC_ASSETS = [
  './',
  './index.html',
  './app.js',
  './data.js',
  './firebase-config.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Quicksand:wght@300;400;500;600&display=swap'
];

// App files that should use network-first (always get latest when online)
const APP_FILES = ['index.html', 'app.js', 'data.js', 'firebase-config.js', 'manifest.json'];

function isAppFile(url) {
  return APP_FILES.some(function(f) { return url.pathname.endsWith(f) || url.pathname === '/' || url.pathname.endsWith('/'); });
}

// Install: cache static assets, skip waiting to activate immediately
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean ALL old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_VERSION; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Fetch strategy
self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  // Network-first for Firebase and external APIs
  if (url.hostname.includes('firebaseio.com') ||
      (url.hostname.includes('googleapis.com') && url.pathname.includes('/v1/')) ||
      url.hostname.includes('firestore.googleapis.com')) {
    event.respondWith(
      fetch(event.request).catch(function() { return caches.match(event.request); })
    );
    return;
  }

  // Cache-first for ExerciseDB GIFs
  if (url.hostname.includes('exercisedb.dev') || url.pathname.endsWith('.gif')) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        if (cached) return cached;
        return fetch(event.request).then(function(response) {
          if (response.ok) {
            var clone = response.clone();
            caches.open(CACHE_VERSION).then(function(cache) { cache.put(event.request, clone); });
          }
          return response;
        });
      })
    );
    return;
  }

  // Network-first for YouTube embeds
  if (url.hostname.includes('youtube') || url.hostname.includes('ytimg')) {
    event.respondWith(fetch(event.request).catch(function() {
      return new Response('Conecte à internet para ver o vídeo', {
        headers: { 'Content-Type': 'text/plain' }
      });
    }));
    return;
  }

  // Network-first for app files (HTML, JS) — always get latest, cache for offline
  if (isAppFile(url)) {
    event.respondWith(
      fetch(event.request).then(function(response) {
        if (response.ok) {
          var clone = response.clone();
          caches.open(CACHE_VERSION).then(function(cache) { cache.put(event.request, clone); });
        }
        return response;
      }).catch(function() {
        return caches.match(event.request).then(function(cached) {
          if (cached) return cached;
          if (event.request.mode === 'navigate') return caches.match('./index.html');
        });
      })
    );
    return;
  }

  // Cache-first for external resources (fonts, CDN, images)
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(response) {
        if (response.ok && response.type === 'basic') {
          var clone = response.clone();
          caches.open(CACHE_VERSION).then(function(cache) { cache.put(event.request, clone); });
        }
        return response;
      }).catch(function() {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
