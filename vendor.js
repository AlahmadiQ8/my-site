!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var r={},t={},n={},o={}.hasOwnProperty,c=/^\.\.?(\/|$)/,a=function(e,r){for(var t,n=[],o=(c.test(r)?e+"/"+r:r).split("/"),a=0,i=o.length;a<i;a++)t=o[a],".."===t?n.pop():"."!==t&&""!==t&&n.push(t);return n.join("/")},i=function(e){return e.split("/").slice(0,-1).join("/")},u=function(r){return function(t){var n=a(i(r),t);return e.require(n,r)}},l=function(e,r){var n=null;n=v&&v.createHot(e);var o={id:e,exports:{},hot:n};return t[e]=o,r(o.exports,u(e),o),o.exports},s=function(e){return n[e]?s(n[e]):e},f=function(e,r){return s(a(i(e),r))},d=function(e,n){null==n&&(n="/");var c=s(e);if(o.call(t,c))return t[c].exports;if(o.call(r,c))return l(c,r[c]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};d.alias=function(e,r){n[r]=e};var p=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,w=function(e){if(p.test(e)){var r=e.replace(p,"");o.call(n,r)&&n[r].replace(p,"")!==r+"/index"||(n[r]=e)}if(h.test(e)){var t=e.replace(h,"");o.call(n,t)||(n[t]=e)}};d.register=d.define=function(e,n){if("object"==typeof e)for(var c in e)o.call(e,c)&&d.register(c,e[c]);else r[e]=n,delete t[e],w(e)},d.list=function(){var e=[];for(var t in r)o.call(r,t)&&e.push(t);return e};var v=e._hmr&&new e._hmr(f,d,r,t);d._cache=t,d.hmr=v&&v.wrap,d.brunch=!0,e.require=d}}(),function(){var WebSocket=window.WebSocket||window.MozWebSocket,br=window.brunch=window.brunch||{},ar=br["auto-reload"]=br["auto-reload"]||{};if(WebSocket&&!ar.disabled&&!window._ar){window._ar=!0;var cacheBuster=function(e){var r=Math.round(Date.now()/1e3).toString();return e=e.replace(/(\&|\\?)cacheBuster=\d*/,""),e+(e.indexOf("?")>=0?"&":"?")+"cacheBuster="+r},browser=navigator.userAgent.toLowerCase(),forceRepaint=ar.forceRepaint||browser.indexOf("chrome")>-1,reloaders={page:function(){window.location.reload(!0)},stylesheet:function(){[].slice.call(document.querySelectorAll("link[rel=stylesheet]")).filter(function(e){var r=e.getAttribute("data-autoreload");return e.href&&"false"!=r}).forEach(function(e){e.href=cacheBuster(e.href)}),forceRepaint&&setTimeout(function(){document.body.offsetHeight},25)},javascript:function(){var scripts=[].slice.call(document.querySelectorAll("script")),textScripts=scripts.map(function(e){return e.text}).filter(function(e){return e.length>0}),srcScripts=scripts.filter(function(e){return e.src}),loaded=0,all=srcScripts.length,onLoad=function(){loaded+=1,loaded===all&&textScripts.forEach(function(script){eval(script)})};srcScripts.forEach(function(e){var r=e.src;e.remove();var t=document.createElement("script");t.src=cacheBuster(r),t.async=!0,t.onload=onLoad,document.head.appendChild(t)})}},port=ar.port||9485,host=br.server||window.location.hostname||"localhost",connect=function(){var e=new WebSocket("ws://"+host+":"+port);e.onmessage=function(e){if(!ar.disabled){var r=e.data,t=reloaders[r]||reloaders.page;t()}},e.onerror=function(){e.readyState&&e.close()},e.onclose=function(){window.setTimeout(connect,1e3)}};connect()}}();
//# sourceMappingURL=vendor.js.map