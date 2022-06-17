
//const assets = ["/", "/index.html", "https://pyscript.net/alpha/pyscript.css", "https://pyscript.net/alpha/pyscript.js", "src/main.py", "src/main.js"];
const assets = ["/index.html", "src/main.js", "src/main.py"];

console.log("maurice file sw.js"); 


self.addEventListener("install", installEvent => {
    console.log("EVENT INSTALL");
    installEvent.waitUntil(caches.open("pwa")
    .then((cache) => {return cache.addAll(["/py/index.html", "/py/src/main.js", "/py/src/main.py"]);}).catch((err) => console.log("Error INSTALL", err)));
    console.log("INSTALL COMPLETED");
    
});

self.addEventListener("fetch", fetchEvent => {
    console.log("EVENT FETCH");
    fetchEvent.respondWith(caches.match(fetchEvent.request).then(res=>{return res || fetch(fetchEvent.request)}));
    console.log("FETCH COMPLETED");

});

//    fetchEvent.waitUntil(caches.open("pwa").then((c) => {return c.addAll(["/py/src/main.py", "/py/index.html"]);}));
