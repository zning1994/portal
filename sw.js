if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),d={module:{uri:o},exports:t,require:c};i[o]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"fe2b750fd4694404bcdd08f60edbd4d8"},{url:"icon-512.png",revision:"7c4be77d1ec32fbe248390918dd10f6c"},{url:"index.1804698f.css",revision:null},{url:"index.html",revision:"3833286183004c5a71cb97d3dcc23601"},{url:"main.bae34888.js",revision:null},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icon-512.png",revision:"7c4be77d1ec32fbe248390918dd10f6c"},{url:"manifest.webmanifest",revision:"e87a0f00b6a0c2850973d1eb6060d915"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("404.html")))}));
