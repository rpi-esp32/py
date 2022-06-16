const c = "pwa";

//const assets = ["/", "/index.html", "https://pyscript.net/alpha/pyscript.css", "https://pyscript.net/alpha/pyscript.js", "src/main.py", "src/main.js"]

//const a = ["/", "/index.html", "src/main.js", "src/main.py"]

const a = [];

//self.addEventListener("install", function (e) {e.waitUntil(caches.open(c).then(function (cache) {return cache.addAll(as);}));});

//self.addEventListener("fetch", function (event) {console.log(event.request.url); event.respondWith(caches.match(event.request).then(function (response) {return response || fetch(event.request);}));});

self.addEventListener("install", function (e) {return;};);