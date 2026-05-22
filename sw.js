const CACHE = 'nightwing-v2';
const ASSETS = ['/Nightwing-Protocol/', '/Nightwing-Protocol/index.html', '/Nightwing-Protocol/today.html', '/Nightwing-Protocol/progress.html', '/Nightwing-Protocol/nutrition.html', '/Nightwing-Protocol/manifest.json', '/Nightwing-Protocol/icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
