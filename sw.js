if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const t=e=>n(e,s),l={module:{uri:s},exports:o,require:t};i[s]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(c(...e),o)))}}define(["./workbox-9517df1b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"9742bcbb9d4c9dd26cb8a87c2080ba07"},{url:"icon-512.png",revision:"65f42ac434c2a7b631c198f251035ba0"},{url:"index.016c4b7b.css",revision:null},{url:"index.html",revision:"0cd160fc9f05a092c353d1e7e56aaeb4"},{url:"main.a842b54c.js",revision:null},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icon-512.png",revision:"65f42ac434c2a7b631c198f251035ba0"},{url:"manifest.webmanifest",revision:"6c14839ee0078f8e2350d17388a2b4a6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("404.html")))}));
