
const staticCacheName = "pwa";

//const assets = ["/", "/index.html", "https://pyscript.net/alpha/pyscript.css", "https://pyscript.net/alpha/pyscript.js", "src/main.py", "src/main.js"];
const assets = ["/index.html", "src/main.js", "src/main.py"];

console.log("this is maurice from sw.js"); 
console.log(assets.toString());
console.log("after maurice assets printed");


self.addEventListener("install", installEvent => {
    console.log("installing maurice cache");
    installEvent.waitUntil(caches.open(staticCacheName))
    .then(cache => {cache.addAll(assests)}).catch(err => console.log("Error caching item", err));
//    then(cache => {cache.addAll(assets);}));
//               .then(r => {}).catch(err => console.log("Error caching item", err))
//        }).catch(err => console.log("Error opening cache", err))
//    );
    
//    installEvent.awaitUntil(caches.open(staticCacheName).then(cache => {cache.addAll(assests);}))
//    .then(r => {}).catch(err => console.log("Error caching item", err));

    
    console.log("finished maurice cache");
});

//self.addEventListener("install", installEvent => {
//    console.log("installing maurice cache");
//    installEvent.waitUntil(
//        caches.open(staticCacheName).then(cache => {
//            cache.addAll(assets).then(r => {
//                console.log("Cache assets downloaded");
//            }).catch(err => console.log("Error caching item", err))
//            console.log(`Cache ${staticCacheName} opened.`)
//        }).catch(err => console.log("Error opening cache", err))
//    );
//    console.log("finished maurice cache");
//})

self.addEventListener("fetch", fetchEvent => {
    console.log("fetching maurice cache");
    fetchEvent.waitUntil(caches.open(staticCacheName)
    .then((cache) => {cache.addAll(assests)}).catch(err => console.log("Error caching item", err)));
    console.log("fetching maurice success");
//    fetchEvent.respondWith(
//        console.log(fetchEvent.request);
//        console.log("inside maurice respondwith");
//        return fetch(fetchEvent.request);
//        caches.match(fetchEvent.request).then(res => {return res || fetch(fetchEvent.request)})
//        .catch(err => console.log("Cache fetch error: ", err));
//    );
});
