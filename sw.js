const CACHE = 'nightwing-v1';
const ASSETS = ['/Nightwing-Protocol/', '/Nightwing-Protocol/index.html', '/Nightwing-Protocol/manifest.json', '/Nightwing-Protocol/icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
