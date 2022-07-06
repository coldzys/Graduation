!function(e){function t(t){for(var n,o,i=t[0],a=t[1],s=0,l=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);l.length;)l.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+"devTools.chunk."+e+".js"}(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.devTools_bundle_jsonpfunction=window.devTools_bundle_jsonpfunction||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=a;o(o.s=7)}([function(e,t,n){e.exports=n(9)(2)},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){n.r(t);var r=__kbnBundles__.get("entry/core/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=a(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:v(p,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=f||(f=c(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=c}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,o,i=e[1]||"",a=e[3];if(!a)return i;if(t&&"function"==typeof btoa){var s=(n=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),c=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(c).concat([s]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,n){n(8),__kbnBundles__.define("plugin/devTools/public",n,15)},function(e,t,n){n.p=window.__kbnPublicPath__.devTools},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(11);case"v8light":return n(13)}},function(e,t,n){var r=n(3),o=n(12);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".devApp__container,.devApp{flex:1 1 auto;display:flex;flex-direction:column}.devApp__container>*,.devApp>*{flex-shrink:0}.devAppWrapper{display:flex;flex-direction:column;flex-grow:1}.devApp__tabBeta{vertical-align:middle}\n",""]),e.exports=t},function(e,t,n){var r=n(3),o=n(14);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},function(e,t,n){(t=n(4)(!1)).push([e.i,".devApp__container,.devApp{flex:1 1 auto;display:flex;flex-direction:column}.devApp__container>*,.devApp>*{flex-shrink:0}.devAppWrapper{display:flex;flex-direction:column;flex-grow:1}.devApp__tabBeta{vertical-align:middle}\n",""]),e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return u})),n.d(t,"DevToolsPlugin",(function(){return plugin_DevToolsPlugin}));var r=n(0),o=n.n(r),i=n(5),a=n(1),s=n(6),c=n(2);class dev_tool_DevToolApp{constructor(e,t,n,r,i,a="",s=!1,c){o()(this,"id",void 0),o()(this,"title",void 0),o()(this,"mount",void 0),o()(this,"isBeta",void 0),o()(this,"disabled",void 0),o()(this,"tooltipContent",void 0),o()(this,"enableRouting",void 0),o()(this,"order",void 0),this.id=e,this.title=t,this.mount=n,this.enableRouting=r,this.order=i,this.tooltipContent=a,this.disabled=s,this.isBeta=c}enable(){this.disabled=!1}disable(){this.disabled=!0}isDisabled(){return this.disabled}}const l={breadcrumbs:{home:a.i18n.translate("devTools.breadcrumb.homeLabel",{defaultMessage:"Dev Tools"})}};class doc_title_DocTitleService{constructor(){o()(this,"changeDocTitleHandler",(()=>{}))}setup(e){this.changeDocTitleHandler=e}setTitle(e){if(!this.changeDocTitleHandler)throw new Error("DocTitle service has not been initialized");e&&"home"!==e?this.changeDocTitleHandler(`${e} - ${l.breadcrumbs.home}`):this.changeDocTitleHandler(l.breadcrumbs.home)}}class breadcrumb_BreadcrumbService{constructor(){o()(this,"setBreadcrumbsHandler",void 0)}setup(e){this.setBreadcrumbsHandler=e}setBreadcrumbs(e){if(!this.setBreadcrumbsHandler)throw new Error("Breadcrumb service has not been initialized");e&&"home"!==e?this.setBreadcrumbsHandler([{text:l.breadcrumbs.home,href:"#/"},{text:e}]):this.setBreadcrumbsHandler([{text:l.breadcrumbs.home}])}}n(10);class plugin_DevToolsPlugin{constructor(){o()(this,"devTools",new Map),o()(this,"appStateUpdater",new i.BehaviorSubject((()=>({})))),o()(this,"breadcrumbService",new breadcrumb_BreadcrumbService),o()(this,"docTitleService",new doc_title_DocTitleService)}getSortedDevTools(){return Object(s.sortBy)([...this.devTools.values()],"order")}setup(e,{urlForwarding:t}){const{application:r,getStartServices:o}=e;return r.register({id:"dev_tools",title:a.i18n.translate("devTools.devToolsTitle",{defaultMessage:"Dev Tools"}),updater$:this.appStateUpdater,euiIconType:"logoElastic",order:9010,category:c.DEFAULT_APP_CATEGORIES.management,mount:async e=>{const{element:t,history:r,theme$:i}=e;t.classList.add("devAppWrapper");const[a]=await o(),{application:s,chrome:c,executionContext:l}=a;this.docTitleService.setup(c.docTitle.change),this.breadcrumbService.setup(c.setBreadcrumbs);const u={breadcrumbService:this.breadcrumbService,docTitleService:this.docTitleService,executionContext:l},{renderApp:d}=await n.e(1).then(n.bind(null,24));return d(t,s,c,r,i,this.getSortedDevTools(),u)}}),t.forwardApp("dev_tools","dev_tools"),{register:e=>{if(this.devTools.has(e.id))throw new Error(`Dev tool with id [${e.id}] has already been registered. Use a unique id.`);const t=(({id:e,title:t,mount:n,enableRouting:r,order:o,tooltipContent:i,disabled:a,isBeta:s})=>new dev_tool_DevToolApp(e,t,n,r,o,i,a,s))(e);return this.devTools.set(t.id,t),t}}}start(){0===this.getSortedDevTools().length?this.appStateUpdater.next((()=>({navLinkStatus:c.AppNavLinkStatus.hidden}))):this.appStateUpdater.next((()=>({deepLinks:[...this.devTools.values()].filter((e=>!e.enableRouting&&!e.isDisabled()&&"string"==typeof e.title)).map((e=>({id:e.id,title:e.title,path:`#/${e.id}`})))})))}stop(){}}function u(e){return new plugin_DevToolsPlugin}},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t){e.exports=__kbnSharedDeps__.KbnUiTheme},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact}]);