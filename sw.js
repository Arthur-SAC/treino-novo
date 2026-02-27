const CACHE_NAME = 'arthur-app-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './app.js',
  './data.js',
  './firebase-config.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Nunito:wght@400;600;700&display=swap'
];

// Install: cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch: cache-first for static, network-first for API/Firebase
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Network-first for Firebase and external APIs
  if (url.hostname.includes('firebaseio.com') ||
      url.hostname.includes('googleapis.com') && url.pathname.includes('/v1/') ||
      url.hostname.includes('firestore.googleapis.com')) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }

  // Network-first for YouTube embeds (don't cache videos)
  if (url.hostname.includes('youtube') || url.hostname.includes('ytimg')) {
    event.respondWith(fetch(event.request).catch(() => {
      return new Response('Conecte à internet para ver o vídeo', {
        headers: { 'Content-Type': 'text/plain' }
      });
    }));
    return;
  }

  // Cache-first for everything else (static assets, fonts, CDN)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        // Cache new resources dynamically
        if (response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback for navigation
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
