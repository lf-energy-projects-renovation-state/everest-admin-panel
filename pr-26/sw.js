if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>s(e,r),d={module:{uri:r},exports:o,require:c};i[r]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-7cmZ-g1o.css",revision:null},{url:"index.html",revision:"b766136661462853a9fe5c53e05cd314"},{url:"registerSW.js",revision:"94bb5e23819c9b2f5d148d6af8a39de1"},{url:"manifest.webmanifest",revision:"7d929ad8b4d6600a41b1daceca4be4cb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
