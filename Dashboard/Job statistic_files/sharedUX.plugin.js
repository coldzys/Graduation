!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),__kbnBundles__.define("plugin/sharedUX/public",n,2)},function(t,e,n){n.p=window.__kbnPublicPath__.sharedUX},function(t,e,n){"use strict";n.r(e),n.d(e,"plugin",(function(){return s}));const r=({coreStart:t})=>({setIsFullscreen:e=>t.chrome.setIsVisible(e)}),i=({coreStart:t,startPlugins:e})=>({canCreateNewDataView:e.dataViewEditor.userPermissions.editDataView(),canAccessFleet:t.application.capabilities.navLinks.integrations}),o=({startPlugins:t})=>({openDataViewEditor:t.dataViewEditor.openEditor}),a=({coreStart:t})=>{var e;return{dataViewsDocLink:null===(e=t.docLinks.links.indexPatterns)||void 0===e?void 0:e.introduction}},u=({coreStart:t})=>({addBasePath:t.http.basePath.prepend}),c=({coreStart:t})=>({navigateToUrl:t.application.navigateToUrl,currentAppId$:t.application.currentAppId$});class plugin_SharedUXPlugin{setup(t,e){return{}}start(t,e){const n={platform:r(s={coreStart:t,startPlugins:e}),permissions:i(s),editors:o(s),docLinks:a(s),http:u(s),application:c(s)};var s;return{getContextServices:()=>n}}stop(){}}function s(){return new plugin_SharedUXPlugin}}]);