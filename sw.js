// Offline support. App files are fetched fresh when online (so updates show up straight away)
// and served from the cache when offline or the network is slow. Fonts are served cache-first.
const CACHE = "b1-wortschatz-v21";
const SHELL = ["./", "index.html", "words.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url), own = url.origin === self.location.origin;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(e.request, { ignoreSearch: e.request.mode === "navigate" });
    const fresh = fetch(own ? new Request(url.href, { cache: "no-cache" }) : e.request).then(res => {
      if (res && (res.ok || res.type === "opaque")) cache.put(e.request, res.clone());
      return res;
    });
    if (!own) return hit || fresh;
    const slow = new Promise(resolve => setTimeout(() => resolve(null), hit ? 3000 : 20000));
    return Promise.race([fresh.catch(() => null), slow]).then(res => (res && res.ok ? res : hit || res || fresh));
  }));
});
