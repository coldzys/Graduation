!function(e){function n(n){for(var t,a,i=n[0],o=n[1],s=0,u=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);for(l&&l(n);u.length;)u.shift()()}var t={},r={0:0};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise((function(n,a){t=r[e]=[n,a]}));n.push(t[2]=i);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=function(e){return a.p+"expressionRevealImage.chunk."+e+".js"}(e);var l=new Error;o=function(n){s.onerror=s.onload=null,clearTimeout(u);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,t[1](l)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},a.m=e,a.c=t,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a.oe=function(e){throw console.error(e),e};var i=window.expressionRevealImage_bundle_jsonpfunction=window.expressionRevealImage_bundle_jsonpfunction||[],o=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var l=o;a(a.s=9)}([function(e,n){e.exports=__kbnSharedDeps__.KbnI18n},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/presentationUtil/common/lib");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(e,n){e.exports=__kbnSharedDeps__.EmotionReact},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/presentationUtil/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(e,n){e.exports=__kbnSharedDeps__.ReactDom},function(e,n){e.exports=__kbnSharedDeps__.React},function(e,n,t){e.exports=t(11)(3)},function(e,n){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,n,t){t.r(n);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(e,n,t){t(10),__kbnBundles__.define("plugin/expressionRevealImage/public",t,12)},function(e,n,t){t.p=window.__kbnPublicPath__.expressionRevealImage},function(e,n){e.exports=__kbnSharedDeps_npm__},function(e,n,t){"use strict";t.r(n),t.d(n,"plugin",(function(){return O})),t.d(n,"revealImageRendererFactory",(function(){return f})),t.d(n,"getRevealImageRenderer",(function(){return d}));var r=t(6),a=t.n(r),i=t(5),o=t(4),s=t(7),l=t(0),u=t(8),p=t(3),c=t(2);const g=Object(i.lazy)((()=>t.e(1).then(t.bind(null,14)))),m=Object(p.withSuspense)(g,null),d=(e=p.defaultTheme$)=>()=>({name:"revealImage",displayName:l.i18n.translate("expressionRevealImage.renderer.revealImage.displayName",{defaultMessage:"Image reveal"}),help:l.i18n.translate("expressionRevealImage.renderer.revealImage.helpDescription",{defaultMessage:"Reveal a percentage of an image to make a custom gauge-style chart"}),reuseDomNode:!0,render:(n,t,r)=>{r.onDestroy((()=>{Object(o.unmountComponentAtNode)(n)})),Object(o.render)(Object(c.jsx)(u.KibanaThemeProvider,{theme$:e},Object(c.jsx)(s.I18nProvider,null,Object(c.jsx)(m,a()({onLoaded:r.done},t,{parentNode:n})))),n)}}),f=e=>d(e.theme.theme$);var v=t(1);let b,_;!function(e){e.TOP="top",e.LEFT="left",e.BOTTOM="bottom",e.RIGHT="right"}(b||(b={})),function(e){e.TOP="top",e.BOTTOM="bottom",e.LEFT="left",e.RIGHT="right"}(_||(_={}));const h="`base64`",I={help:l.i18n.translate("expressionRevealImage.functions.revealImageHelpText",{defaultMessage:"Configures an image reveal element."}),args:{image:l.i18n.translate("expressionRevealImage.functions.revealImage.args.imageHelpText",{defaultMessage:"The image to reveal. Provide an image asset as a {BASE64} data {URL}, or pass in a sub-expression.",values:{BASE64:h,URL:"URL"}}),emptyImage:l.i18n.translate("expressionRevealImage.functions.revealImage.args.emptyImageHelpText",{defaultMessage:"An optional background image to reveal over. Provide an image asset as a `{BASE64}` data {URL}, or pass in a sub-expression.",values:{BASE64:h,URL:"URL"}}),origin:l.i18n.translate("expressionRevealImage.functions.revealImage.args.originHelpText",{defaultMessage:"The position to start the image fill. For example, {list}, or {end}.",values:{list:Object.values(_).slice(0,-1).map((e=>`\`"${e}"\``)).join(", "),end:Object.values(_).slice(-1)[0]}})}},y=()=>{const{help:e,args:n}=I;return{name:"revealImage",aliases:[],type:"render",inputTypes:["number"],help:e,args:{image:{types:["string","null"],help:n.image,default:null},emptyImage:{types:["string","null"],help:n.emptyImage,default:null},origin:{types:["string"],help:n.origin,default:"bottom",options:Object.values(b)}},fn:async(e,n)=>{if(e>1||e<0)throw(e=>new Error(l.i18n.translate("expressionRevealImage.functions.revealImage.invalidPercentErrorMessage",{defaultMessage:"Invalid value: '{percent}'. Percentage must be between 0 and 1",values:{percent:e}})))(e);if(n.image&&!Object(v.isValidUrl)(n.image))throw t=n.image,new Error(l.i18n.translate("expressionRevealImage.functions.revealImage.invalidImageUrl",{defaultMessage:"Invalid image url: '{imageUrl}'.",values:{imageUrl:t}}));var t;const{elasticOutline:r}=await Object(v.getElasticOutline)();return{type:"render",as:"revealImage",value:{percent:e,...n,image:Object(v.resolveWithMissingImage)(n.image,r),emptyImage:Object(v.resolveWithMissingImage)(n.emptyImage)}}}}};class plugin_ExpressionRevealImagePlugin{setup(e,{expressions:n}){n.registerFunction(y),n.registerRenderer(f(e))}start(e){}stop(){}}function O(){return new plugin_ExpressionRevealImagePlugin}},function(e,n){e.exports=__kbnSharedDeps__.ElasticEui}]);