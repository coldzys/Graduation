!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){e.exports=t(3)(2)},function(e,n,t){t(2),__kbnBundles__.define("plugin/screenshotMode/public",t,4)},function(e,n,t){t.p=window.__kbnPublicPath__.screenshotMode},function(e,n){e.exports=__kbnSharedDeps_npm__},function(e,n,t){"use strict";t.r(n),t.d(n,"plugin",(function(){return l})),t.d(n,"KBN_SCREENSHOT_MODE_HEADER",(function(){return _})),t.d(n,"setScreenshotModeEnabled",(function(){return c})),t.d(n,"KBN_SCREENSHOT_MODE_ENABLED_KEY",(function(){return i}));var r=t(0),o=t.n(r);function u(e,n){var t,r;return null!==(t=null===(r=window.__KBN_SCREENSHOT_CONTEXT__)||void 0===r?void 0:r[e])&&void 0!==t?t:n}const i="__KBN_SCREENSHOT_MODE_ENABLED_KEY__",c=()=>{Object.defineProperty(window,"__KBN_SCREENSHOT_MODE_ENABLED_KEY__",{enumerable:!0,writable:!0,configurable:!1,value:!0})},_="x-kbn-screenshot-mode".toLowerCase();class plugin_ScreenshotModePlugin{constructor(){o()(this,"publicContract",Object.freeze({getScreenshotContext:u,isScreenshotMode:()=>1==(!0===window[i]||"true"===window.localStorage.getItem(i))}))}setup(e){return this.publicContract}start(e){return this.publicContract}stop(){}}function l(){return new plugin_ScreenshotModePlugin}}]);