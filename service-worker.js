// service-worker.js

const CACHE_NAME = 'solar-system-explorer-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/assets/planets/mercury.png',
    '/assets/planets/venus.png',
    '/assets/planets/earth.png',
    '/assets/planets/mars.png',
    '/assets/planets/jupiter.png',
    '/assets/planets/saturn.png',
    '/assets/planets/uranus.png',
    '/assets/planets/neptune.png',
    // Include other assets or resources that you want to cache
];

// Install Service Worker and Cache Assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event to serve assets from cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached response if available, otherwise fetch from network
                return cachedResponse || fetch(event.request);
            })
    );
});

// Activate service worker and remove old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
