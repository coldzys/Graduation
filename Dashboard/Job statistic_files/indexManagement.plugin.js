/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function t(t){for(var i,r,s=t[0],o=t[1],a=0,p=[];a<s.length;a++)r=s[a],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(d&&d(t);p.length;)p.shift()()}var i={},n={0:0};function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],i=n[e];if(0!==i)if(i)t.push(i[2]);else{var s=new Promise((function(t,r){i=n[e]=[t,r]}));t.push(i[2]=s);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=function(e){return r.p+"indexManagement.chunk."+e+".js"}(e);var d=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(p);var i=n[e];if(0!==i){if(i){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,i[1](d)}n[e]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},r.m=e,r.c=i,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var s=window.indexManagement_bundle_jsonpfunction=window.indexManagement_bundle_jsonpfunction||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var d=o;r(r.s=11)}([function(e,t,i){e.exports=i(3)(2)},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,i){"use strict";i.d(t,"f",(function(){return n})),i.d(t,"d",(function(){return r})),i.d(t,"e",(function(){return s})),i.d(t,"c",(function(){return o})),i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return d}));const n=()=>"/templates",r=(e,t)=>{let i=`/templates/${encodeURIComponent(e)}`;return t&&(i=`${i}?legacy=${t}`),encodeURI(i)},s=(e,t)=>{let i=`/edit_template/${encodeURIComponent(e)}`;return t&&(i=`${i}?legacy=true`),encodeURI(i)},o=(e,t)=>{let i=`/clone_template/${encodeURIComponent(e)}`;return t&&(i=`${i}?legacy=true`),encodeURI(i)},a=(e,t)=>e?encodeURI(`/indices?includeHiddenIndices=${void 0!==t&&t}&filter=${encodeURIComponent(e)}`):"/indices",d=e=>encodeURI(`/data_streams/${encodeURIComponent(e)}`)},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,i){"use strict";var n,r=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),s=[];function o(e){for(var t=-1,i=0;i<s.length;i++)if(s[i].identifier===e){t=i;break}return t}function a(e,t){for(var i={},n=[],r=0;r<e.length;r++){var a=e[r],d=t.base?a[0]+t.base:a[0],p=i[d]||0,l="".concat(d," ").concat(p);i[d]=p+1;var _=o(l),c={css:a[1],media:a[2],sourceMap:a[3]};-1!==_?(s[_].references++,s[_].updater(c)):s.push({identifier:l,updater:E(c,t),references:1}),n.push(l)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var s=i.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var p,l=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function _(e,t,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var s=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function c(e,t,i){var n=i.css,r=i.media,s=i.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,f=0;function E(e,t){var i,n,r;if(t.singleton){var s=f++;i=m||(m=d(t)),n=_.bind(null,i,s,!1),r=_.bind(null,i,s,!0)}else i=d(t),n=c.bind(null,i,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var i=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var r=o(i[n]);s[r].references--}for(var d=a(e,t),p=0;p<i.length;p++){var l=o(i[p]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}i=d}}}},function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i,n,r,s=e[1]||"",o=e[3];if(!o)return s;if(t&&"function"==typeof btoa){var a=(i=o,n=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(r," */")),d=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[s].concat(d).concat([a]).join("\n")}return[s].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(r[o]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);n&&r[d[0]]||(i&&(d[2]?d[2]="".concat(i," and ").concat(d[2]):d[2]=i),t.push(d))}},t}},function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return r}));const n={id:"index_management",minimumLicenseType:"basic",getI18nName:e=>e.translate("xpack.idxMgmt.appTitle",{defaultMessage:"Index Management"})},r="8.2.0"},function(e,t,i){"use strict";let n;i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return n}));const r=e=>{n=e}},function(e,t,i){const n=i(9),{MAX_LENGTH:r,MAX_SAFE_INTEGER:s}=i(10),{re:o,t:a}=i(19),d=i(20),{compareIdentifiers:p}=i(21);class SemVer{constructor(e,t){if(t=d(t),e instanceof SemVer){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid Version: ${e}`);if(e.length>r)throw new TypeError(`version is longer than ${r} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const i=e.trim().match(t.loose?o[a.LOOSE]:o[a.FULL]);if(!i)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+i[1],this.minor=+i[2],this.patch=+i[3],this.major>s||this.major<0)throw new TypeError("Invalid major version");if(this.minor>s||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>s||this.patch<0)throw new TypeError("Invalid patch version");i[4]?this.prerelease=i[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<s)return t}return e})):this.prerelease=[],this.build=i[5]?i[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof SemVer)){if("string"==typeof e&&e===this.version)return 0;e=new SemVer(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof SemVer||(e=new SemVer(e,this.options)),p(this.major,e.major)||p(this.minor,e.minor)||p(this.patch,e.patch)}comparePre(e){if(e instanceof SemVer||(e=new SemVer(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const i=this.prerelease[t],r=e.prerelease[t];if(n("prerelease compare",t,i,r),void 0===i&&void 0===r)return 0;if(void 0===r)return 1;if(void 0===i)return-1;if(i!==r)return p(i,r)}while(++t)}compareBuild(e){e instanceof SemVer||(e=new SemVer(e,this.options));let t=0;do{const i=this.build[t],r=e.build[t];if(n("prerelease compare",t,i,r),void 0===i&&void 0===r)return 0;if(void 0===r)return 1;if(void 0===i)return-1;if(i!==r)return p(i,r)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error(`invalid increment argument: ${e}`)}return this.format(),this.raw=this.version,this}}e.exports=SemVer},function(e,t,i){(function(t){const i="object"==typeof t&&Object({IS_KIBANA_DISTRIBUTABLE:"true"})&&Object({IS_KIBANA_DISTRIBUTABLE:"true"}).NODE_DEBUG&&/\bsemver\b/i.test(Object({IS_KIBANA_DISTRIBUTABLE:"true"}).NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=i}).call(this,i(18))},function(e,t){const i=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:i,MAX_SAFE_COMPONENT_LENGTH:16}},function(e,t,i){i(12),__kbnBundles__.define("plugin/indexManagement/public",i,22)},function(e,t,i){i.p=window.__kbnPublicPath__.indexManagement},function(e,t,i){switch(window.__kbnThemeTag__){case"v8dark":return i(14);case"v8light":return i(16)}},function(e,t,i){var n=i(4),r=i(15);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},function(e,t,i){(t=i(5)(!1)).push([e.i,".mappingsEditor__editField__formRow{margin-bottom:32px}.mappingsEditor__editField__formRow:last-child{margin-bottom:0}.mappingsEditor__editField__formRow__description{padding-top:8px}.mappingsEditor__fieldsListItem--dottedLine>.mappingsEditor__fieldsListItem__field{border-bottom-style:dashed}.mappingsEditor__fieldsListItem__field{border-bottom:1px solid #343741;height:64px;margin-top:4px}.mappingsEditor__fieldsListItem__field--enabled:hover{background-color:#25262E}.mappingsEditor__fieldsListItem__field--highlighted{background-color:#25262E}.mappingsEditor__fieldsListItem__field--highlighted:hover{background-color:#25262E}.mappingsEditor__fieldsListItem__field--dim{opacity:.3}.mappingsEditor__fieldsListItem__field--dim:hover{background-color:initial}.mappingsEditor__fieldsListItem__wrapper{padding-left:4px}.mappingsEditor__fieldsListItem__wrapper--indent{padding-left:16px}.mappingsEditor__fieldsListItem__content{height:64px;position:relative}.mappingsEditor__fieldsListItem__content--indent{padding-left:32px}.mappingsEditor__fieldsListItem__toggle{padding-left:4px;width:24px}.mappingsEditor__fieldsListItem__actions{padding-left:8px}.mappingsEditor__editField{min-width:680px}.mappingsEditor__createFieldWrapper{background-color:#25262E;border-right:1px solid #343741;border-bottom:1px solid #343741;border-left:1px solid #343741;padding:16px}.mappingsEditor__createFieldContent{position:relative}.mappingsEditor__createFieldContent__formFields{max-width:600px}.mappingsEditor__createFieldRequiredProps{margin-top:24px;padding-top:16px;border-top:1px solid #343741}.mappingsEditor__selectWithCustom{position:relative}.mappingsEditor__selectWithCustom__button{position:absolute;right:0;top:0}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content::before,.mappingsEditor__fieldsList .mappingsEditor__createFieldContent::before{border-bottom:1px solid #535966;content:'';left:16px;position:absolute;top:50%;width:8px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content::after,.mappingsEditor__fieldsList .mappingsEditor__createFieldContent::after{border-left:1px solid #535966;content:'';left:16px;position:absolute;top:calc(50% - 8px);height:8px}.mappingsEditor__fieldsList .mappingsEditor__createFieldContent{padding-left:36px}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent{padding-left:16px}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent::before,.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent::after{content:none}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--toggle .mappingsEditor__createFieldContent{padding-left:36px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content{padding-left:32px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle::before,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle::after,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField::before,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField::after{content:none}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle{padding-left:0}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField{padding-left:8px}ul.esUiTree{padding:0;margin:0;list-style-type:none;position:relative;padding-top:4px}ul.esUiTree li.esUiTreeItem{list-style-type:none;border-left:1px solid #343741;margin-left:24px;padding-bottom:8px}ul.esUiTree .esUiTreeItem__label{font-size:14px;padding-left:24px;position:relative}ul.esUiTree .esUiTreeItem__label::before{content:'';position:absolute;top:0;left:-1px;bottom:50%;width:16px;border:1px solid #343741;border-top:none;border-right:none}ul.esUiTree>li.esUiTreeItem:first-child{padding-top:8px}ul.esUiTree>li.esUiTreeItem:last-child{border-left-color:transparent;padding-bottom:0}.indTable thead th.indTable__header--name{width:25%}.indTable .indTable__cell--name{word-break:break-all}.indDetail__codeBlock{background:transparent}\n",""]),e.exports=t},function(e,t,i){var n=i(4),r=i(17);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},function(e,t,i){(t=i(5)(!1)).push([e.i,".mappingsEditor__editField__formRow{margin-bottom:32px}.mappingsEditor__editField__formRow:last-child{margin-bottom:0}.mappingsEditor__editField__formRow__description{padding-top:8px}.mappingsEditor__fieldsListItem--dottedLine>.mappingsEditor__fieldsListItem__field{border-bottom-style:dashed}.mappingsEditor__fieldsListItem__field{border-bottom:1px solid #D3DAE6;height:64px;margin-top:4px}.mappingsEditor__fieldsListItem__field--enabled:hover{background-color:#F5F7FA}.mappingsEditor__fieldsListItem__field--highlighted{background-color:#F5F7FA}.mappingsEditor__fieldsListItem__field--highlighted:hover{background-color:#F5F7FA}.mappingsEditor__fieldsListItem__field--dim{opacity:.3}.mappingsEditor__fieldsListItem__field--dim:hover{background-color:initial}.mappingsEditor__fieldsListItem__wrapper{padding-left:4px}.mappingsEditor__fieldsListItem__wrapper--indent{padding-left:16px}.mappingsEditor__fieldsListItem__content{height:64px;position:relative}.mappingsEditor__fieldsListItem__content--indent{padding-left:32px}.mappingsEditor__fieldsListItem__toggle{padding-left:4px;width:24px}.mappingsEditor__fieldsListItem__actions{padding-left:8px}.mappingsEditor__editField{min-width:680px}.mappingsEditor__createFieldWrapper{background-color:#F5F7FA;border-right:1px solid #D3DAE6;border-bottom:1px solid #D3DAE6;border-left:1px solid #D3DAE6;padding:16px}.mappingsEditor__createFieldContent{position:relative}.mappingsEditor__createFieldContent__formFields{max-width:600px}.mappingsEditor__createFieldRequiredProps{margin-top:24px;padding-top:16px;border-top:1px solid #D3DAE6}.mappingsEditor__selectWithCustom{position:relative}.mappingsEditor__selectWithCustom__button{position:absolute;right:0;top:0}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content::before,.mappingsEditor__fieldsList .mappingsEditor__createFieldContent::before{border-bottom:1px solid #98A2B3;content:'';left:16px;position:absolute;top:50%;width:8px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content::after,.mappingsEditor__fieldsList .mappingsEditor__createFieldContent::after{border-left:1px solid #98A2B3;content:'';left:16px;position:absolute;top:calc(50% - 8px);height:8px}.mappingsEditor__fieldsList .mappingsEditor__createFieldContent{padding-left:36px}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent{padding-left:16px}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent::before,.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--multiField .mappingsEditor__createFieldContent::after{content:none}.mappingsEditor__fieldsList .mappingsEditor__createFieldWrapper--toggle .mappingsEditor__createFieldContent{padding-left:36px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content{padding-left:32px}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle::before,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle::after,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField::before,.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField::after{content:none}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--toggle{padding-left:0}.mappingsEditor__fieldsList .mappingsEditor__fieldsList .mappingsEditor__fieldsListItem__content--multiField{padding-left:8px}ul.esUiTree{padding:0;margin:0;list-style-type:none;position:relative;padding-top:4px}ul.esUiTree li.esUiTreeItem{list-style-type:none;border-left:1px solid #D3DAE6;margin-left:24px;padding-bottom:8px}ul.esUiTree .esUiTreeItem__label{font-size:14px;padding-left:24px;position:relative}ul.esUiTree .esUiTreeItem__label::before{content:'';position:absolute;top:0;left:-1px;bottom:50%;width:16px;border:1px solid #D3DAE6;border-top:none;border-right:none}ul.esUiTree>li.esUiTreeItem:first-child{padding-top:8px}ul.esUiTree>li.esUiTreeItem:last-child{border-left-color:transparent;padding-bottom:0}.indTable thead th.indTable__header--name{width:25%}.indTable .indTable__cell--name{word-break:break-all}.indDetail__codeBlock{background:transparent}\n",""]),e.exports=t},function(e,t,i){e.exports=i(3)(954)},function(e,t,i){const{MAX_SAFE_COMPONENT_LENGTH:n}=i(10),r=i(9),s=(t=e.exports={}).re=[],o=t.src=[],a=t.t={};let d=0;const p=(e,t,i)=>{const n=d++;r(n,t),a[e]=n,o[n]=t,s[n]=new RegExp(t,i?"g":void 0)};p("NUMERICIDENTIFIER","0|[1-9]\\d*"),p("NUMERICIDENTIFIERLOOSE","[0-9]+"),p("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),p("MAINVERSION",`(${o[a.NUMERICIDENTIFIER]})\\.(${o[a.NUMERICIDENTIFIER]})\\.(${o[a.NUMERICIDENTIFIER]})`),p("MAINVERSIONLOOSE",`(${o[a.NUMERICIDENTIFIERLOOSE]})\\.(${o[a.NUMERICIDENTIFIERLOOSE]})\\.(${o[a.NUMERICIDENTIFIERLOOSE]})`),p("PRERELEASEIDENTIFIER",`(?:${o[a.NUMERICIDENTIFIER]}|${o[a.NONNUMERICIDENTIFIER]})`),p("PRERELEASEIDENTIFIERLOOSE",`(?:${o[a.NUMERICIDENTIFIERLOOSE]}|${o[a.NONNUMERICIDENTIFIER]})`),p("PRERELEASE",`(?:-(${o[a.PRERELEASEIDENTIFIER]}(?:\\.${o[a.PRERELEASEIDENTIFIER]})*))`),p("PRERELEASELOOSE",`(?:-?(${o[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[a.PRERELEASEIDENTIFIERLOOSE]})*))`),p("BUILDIDENTIFIER","[0-9A-Za-z-]+"),p("BUILD",`(?:\\+(${o[a.BUILDIDENTIFIER]}(?:\\.${o[a.BUILDIDENTIFIER]})*))`),p("FULLPLAIN",`v?${o[a.MAINVERSION]}${o[a.PRERELEASE]}?${o[a.BUILD]}?`),p("FULL",`^${o[a.FULLPLAIN]}$`),p("LOOSEPLAIN",`[v=\\s]*${o[a.MAINVERSIONLOOSE]}${o[a.PRERELEASELOOSE]}?${o[a.BUILD]}?`),p("LOOSE",`^${o[a.LOOSEPLAIN]}$`),p("GTLT","((?:<|>)?=?)"),p("XRANGEIDENTIFIERLOOSE",`${o[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),p("XRANGEIDENTIFIER",`${o[a.NUMERICIDENTIFIER]}|x|X|\\*`),p("XRANGEPLAIN",`[v=\\s]*(${o[a.XRANGEIDENTIFIER]})(?:\\.(${o[a.XRANGEIDENTIFIER]})(?:\\.(${o[a.XRANGEIDENTIFIER]})(?:${o[a.PRERELEASE]})?${o[a.BUILD]}?)?)?`),p("XRANGEPLAINLOOSE",`[v=\\s]*(${o[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[a.XRANGEIDENTIFIERLOOSE]})(?:${o[a.PRERELEASELOOSE]})?${o[a.BUILD]}?)?)?`),p("XRANGE",`^${o[a.GTLT]}\\s*${o[a.XRANGEPLAIN]}$`),p("XRANGELOOSE",`^${o[a.GTLT]}\\s*${o[a.XRANGEPLAINLOOSE]}$`),p("COERCE",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),p("COERCERTL",o[a.COERCE],!0),p("LONETILDE","(?:~>?)"),p("TILDETRIM",`(\\s*)${o[a.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",p("TILDE",`^${o[a.LONETILDE]}${o[a.XRANGEPLAIN]}$`),p("TILDELOOSE",`^${o[a.LONETILDE]}${o[a.XRANGEPLAINLOOSE]}$`),p("LONECARET","(?:\\^)"),p("CARETTRIM",`(\\s*)${o[a.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",p("CARET",`^${o[a.LONECARET]}${o[a.XRANGEPLAIN]}$`),p("CARETLOOSE",`^${o[a.LONECARET]}${o[a.XRANGEPLAINLOOSE]}$`),p("COMPARATORLOOSE",`^${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]})$|^$`),p("COMPARATOR",`^${o[a.GTLT]}\\s*(${o[a.FULLPLAIN]})$|^$`),p("COMPARATORTRIM",`(\\s*)${o[a.GTLT]}\\s*(${o[a.LOOSEPLAIN]}|${o[a.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",p("HYPHENRANGE",`^\\s*(${o[a.XRANGEPLAIN]})\\s+-\\s+(${o[a.XRANGEPLAIN]})\\s*$`),p("HYPHENRANGELOOSE",`^\\s*(${o[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[a.XRANGEPLAINLOOSE]})\\s*$`),p("STAR","(<|>)?=?\\s*\\*"),p("GTE0","^\\s*>=\\s*0.0.0\\s*$"),p("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")},function(e,t){const i=["includePrerelease","loose","rtl"];e.exports=e=>e?"object"!=typeof e?{loose:!0}:i.filter((t=>e[t])).reduce(((e,t)=>(e[t]=!0,e)),{}):{}},function(e,t){const i=/^[0-9]+$/,n=(e,t)=>{const n=i.test(e),r=i.test(t);return n&&r&&(e=+e,t=+t),e===t?0:n&&!r?-1:r&&!n?1:e<t?-1:1};e.exports={compareIdentifiers:n,rcompareIdentifiers:(e,t)=>n(t,e)}},function(e,t,i){"use strict";i.r(t),i.d(t,"plugin",(function(){return _})),i.d(t,"getIndexListUri",(function(){return l.b})),i.d(t,"getTemplateDetailsLink",(function(){return l.d})),i(13);var n=i(0),r=i.n(n),s=i(1),o=i(8),a=i.n(o),d=i(7);class extensions_service_ExtensionsService{constructor(){r()(this,"_summaries",[]),r()(this,"_actions",[]),r()(this,"_banners",[]),r()(this,"_filters",[]),r()(this,"_badges",[{matchIndex:e=>e.isFrozen,label:s.i18n.translate("xpack.idxMgmt.frozenBadgeLabel",{defaultMessage:"Frozen"}),filterExpression:"isFrozen:true",color:"primary"}]),r()(this,"_toggles",[]),r()(this,"service",void 0)}setup(){return this.service={addAction:this.addAction.bind(this),addBadge:this.addBadge.bind(this),addBanner:this.addBanner.bind(this),addFilter:this.addFilter.bind(this),addSummary:this.addSummary.bind(this),addToggle:this.addToggle.bind(this)},this.service}addSummary(e){this._summaries.push(e)}addAction(e){this._actions.push(e)}addBanner(e){this._banners.push(e)}addFilter(e){this._filters.push(e)}addBadge(e){this._badges.push(e)}addToggle(e){this._toggles.push(e)}get summaries(){return this._summaries}get actions(){return this._actions}get banners(){return this._banners}get filters(){return this._filters}get badges(){return this._badges}get toggles(){return this._toggles}}var p=i(6);class plugin_IndexMgmtUIPlugin{constructor(e){r()(this,"extensionsService",new extensions_service_ExtensionsService),this.ctx=e,Object(d.b)(this.extensionsService)}setup(e,t){const{ui:{enabled:n}}=this.ctx.config.get();if(n){const{fleet:n,usageCollection:r,management:o}=t,d=new a.a(this.ctx.env.packageInfo.version);o.sections.section.data.registerApp({id:p.b.id,title:s.i18n.translate("xpack.idxMgmt.appTitle",{defaultMessage:"Index Management"}),order:0,mount:async t=>{const{mountManagementSection:s}=await i.e(1).then(i.bind(null,149));return s(e,r,t,this.extensionsService,Boolean(n),d)}})}return{extensionsService:this.extensionsService.setup()}}start(){}stop(){}}var l=i(2);const _=e=>new plugin_IndexMgmtUIPlugin(e)},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/esUiShared/static/forms/hook_form_lib");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/esUiShared/static/forms/components");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/esUiShared/static/forms/helpers");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.KbnAnalytics},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.Classnames},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/esUiShared/static/validators/string");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/runtimeFields/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t,i){i.r(t);var n=__kbnBundles__.get("entry/core/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.Moment},function(e,t,i){i.r(t);var n=__kbnBundles__.get("plugin/share/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(n))}]);