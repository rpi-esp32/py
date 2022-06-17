
const staticCacheName = "pwa";

//const assets = ["/", "/index.html", "https://pyscript.net/alpha/pyscript.css", "https://pyscript.net/alpha/pyscript.js", "src/main.py", "src/main.js"];
const assets = ["/index.html", "src/main.js", "src/main.py"];

#console.log("maurice file sw.js"); 
#console.log(assets.toString());
#console.log("after maurice assets printed");
console.log("TEST");

self.addEventListener("install", installEvent => {
    console.log("maurice EVENT INSTALL");
    installEvent.waitUntil(caches.open(staticCacheName)
    .then((cache) => {cache.addAll(["/index.html", "/src/main.js", "/src/main.py"]);console.log("INSTALL success");}).catch((err) => console.log("Error INSTALL", err)));
    console.log("INSTALL COMPLETED"));
    
});



self.addEventListener("fetch", fetchEvent => {
    console.log("maurice EVENT FETCH");
    fetchEvent.waitUntil(caches.open(staticCacheName)
    .then((cache) => {cache.addAll(["/","/index.html"]);console.log("FETCH success");}).catch(err => console.log("Error FETCH", err)));
    console.log("FETCH COMPLETED");

});
