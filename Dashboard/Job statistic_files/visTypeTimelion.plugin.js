!function(e){function t(t){for(var n,r,s=t[0],a=t[1],o=0,l=[];o<s.length;o++)r=s[o],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);l.length;)l.shift()()}var n={},i={1:0};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=s);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.src=function(e){return r.p+"visTypeTimelion.chunk."+e+".js"}(e);var u=new Error;a=function(t){o.onerror=o.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",u.name="ChunkLoadError",u.type=r,u.request=s,n[1](u)}i[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:o})}),12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var s=window.visTypeTimelion_bundle_jsonpfunction=window.visTypeTimelion_bundle_jsonpfunction||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var u=a;r(r.s=17)}([function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"h",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"g",(function(){return p}));var i=n(6);const[r,s]=Object(i.createGetterSetter)("dataViews"),[a,o]=Object(i.createGetterSetter)("Search"),[u,l]=Object(i.createGetterSetter)("Charts"),[c,p]=Object(i.createGetterSetter)("FieldFormats")},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/dataViews/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=async e=>{const{parseTimelionExpression:t}=await n.e(4).then(n.bind(null,28));return t(e)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(3),r=n(8),s=n(0),a=n(1);function o(){const e=Object(s.d)();async function t(t){const n=t.find((({name:e})=>"index"===e));if(!n)return;const r=Object(i.get)(n,"value.text");return(await e.find(r)).find((e=>e.title===r))}function n(e,t){return!e||t.name.includes(e)}const o={es:{async index(t){const n=t?`${t}*`:"*";return(await e.find(n,25)).map((({title:e})=>({name:e,insertText:e})))},async metric(e,i){if(!e||!e.includes(":"))return[{name:"avg:"},{name:"cardinality:"},{name:"count"},{name:"max:"},{name:"min:"},{name:"percentiles:"},{name:"sum:"}];const s=await t(i);if(!s)return[];const o=e.split(":");return s.fields.getByType(a.KBN_FIELD_TYPES.NUMBER).filter((e=>e.aggregatable&&n(o[1],e)&&!Object(r.isNestedField)(e))).map((e=>{const t=e.name.replaceAll(":","\\:");return{name:`${o[0]}:${t}`,help:e.type,insertText:t}}))},async split(e,i){const s=await t(i);return s?s.fields.getAll().filter((t=>t.aggregatable&&[a.KBN_FIELD_TYPES.NUMBER,a.KBN_FIELD_TYPES.BOOLEAN,a.KBN_FIELD_TYPES.DATE,a.KBN_FIELD_TYPES.IP,a.KBN_FIELD_TYPES.STRING].includes(t.type)&&n(e,t)&&!Object(r.isNestedField)(t))).map((e=>({name:e.name,help:e.type,insertText:e.name}))):[]},async timefield(e,i){const s=await t(i);return s?s.fields.getByType(a.KBN_FIELD_TYPES.DATE).filter((t=>n(e,t)&&!Object(r.isNestedField)(t))).map((e=>({name:e.name,insertText:e.name}))):[]}}};return{hasDynamicSuggestionsForArgument:(e,t)=>o[e]&&o[e][t],getDynamicSuggestionsForArgument:async(e,t,n,i="")=>await o[e][t](i,n),getStaticSuggestionsForInput:(e="",t=[])=>e?t.filter((t=>t.name.includes(e))):t}}},function(e,t,n){e.exports=n(16)(3)},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){n(18),__kbnBundles__.define("plugin/visTypeTimelion/public",n,19)},function(e,t,n){n.p=window.__kbnPublicPath__.visTypeTimelion},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return j}));var i=n(3),r=n(5),s=n(15),a=n.n(s),o=n(4),u=n(12),l=n(10);const c=e=>{const{expression:t,interval:n}=e.params,i=Object(l.buildExpressionFunction)("timelion_vis",{expression:t,interval:n});return Object(l.buildExpression)([i]).toAst()};var p=n(0),d=n(13),f=n(7),b=n(2);const _=Object(o.lazy)((()=>n.e(3).then(n.bind(null,65)))),m="timelion";var g=n(14),v=n(11),h=n(9);const y=Object(o.lazy)((()=>n.e(0).then(n.bind(null,64)).then((({TimelionVisComponent:e})=>({default:e}))))),O=Object(o.lazy)((()=>n.e(2).then(n.bind(null,66))));class plugin_TimelionVisPlugin{constructor(e){this.initializerContext=e}setup({uiSettings:e,http:t,theme:s},{expressions:o,visualizations:l,data:g,charts:j}){const x={http:t,uiSettings:e,timefilter:g.query.timefilter.timefilter,theme:s};var S;o.registerFunction((()=>(e=>({name:"timelion_vis",type:"render",inputTypes:["kibana_context","null"],help:r.i18n.translate("timelion.function.help",{defaultMessage:"Timelion visualization"}),args:{expression:{types:["string"],aliases:["_"],default:'".es(*)"',help:""},interval:{types:["string"],default:"auto",help:""},ariaLabel:{types:["string"],help:r.i18n.translate("timelion.function.args.ariaLabelHelpText",{defaultMessage:"Specifies the aria label of the timelion"}),required:!1}},async fn(t,r,{getSearchSessionId:s,getExecutionContext:a,variables:o,abortSignal:u}){var l,c,p;const{getTimelionRequestHandler:d}=await n.e(0).then(n.bind(null,64)),f={expression:r.expression,interval:r.interval,ariaLabel:null!==(l=null!==(c=r.ariaLabel)&&void 0!==c?c:null==o?void 0:o.embeddableTitle)&&void 0!==l?l:null==a||null===(p=a())||void 0===p?void 0:p.description};let b;if(!u.aborted){const n=d({...e,expressionAbortSignal:u});b=await n({timeRange:Object(i.get)(t,"timeRange"),query:Object(i.get)(t,"query"),filters:Object(i.get)(t,"filters"),visParams:f,searchSessionId:s(),executionContext:a()}),b.visType=m}return{type:"render",as:"timelion_vis",value:{visParams:f,visType:m,visData:b}}}}))(x))),o.registerRenderer((S=x,{name:"timelion_vis",displayName:"Timelion visualization",reuseDomNode:!0,render:(e,{visData:t,visParams:n},i)=>{i.onDestroy((()=>{Object(v.unmountComponentAtNode)(e)}));const r=null==t?void 0:t.sheet[0],s=!r||!r.list.length,a=S.uiSettings.get("timelion:legacyChartsLibrary",!1)?O:y;Object(v.render)(Object(b.jsx)(f.VisualizationContainer,{handlers:i,showNoResult:s},Object(b.jsx)(h.KibanaThemeProvider,{theme$:S.theme.theme$},Object(b.jsx)(h.KibanaContextProvider,{services:{...S}},r&&Object(b.jsx)(a,{interval:n.interval,ariaLabel:n.ariaLabel,seriesList:r,renderComplete:i.done,onBrushEvent:e=>{i.event({name:"applyFilter",data:{timeFieldName:"*",filters:[{query:{range:{"*":e}}}]}})}})))),e)}})),l.createBaseVisualization(function(e){return{name:m,title:"Timelion",icon:"visTimelion",description:r.i18n.translate("timelion.timelionDescription",{defaultMessage:"Show time series data on a graph."}),visConfig:{defaults:{expression:".es(*)",interval:"auto"}},editorConfig:{optionsTemplate:t=>Object(b.jsx)(_,a()({services:e},t)),defaultSize:u.DefaultEditorSize.MEDIUM},toExpressionAst:c,inspectorAdapters:{},getSupportedTriggers:()=>[f.VIS_EVENT_TO_TRIGGER.applyFilter],getUsedIndexPattern:async e=>{try{var t,n;const i=(null!==(t=null===(n=await Object(d.a)(e.expression))||void 0===n?void 0:n.args)&&void 0!==t?t:[]).find((({type:e,name:t,function:n})=>"namedArg"===e&&"es"===n&&"index"===t));if(null!=i&&i.value.text)return Object(p.d)().find(i.value.text)}catch{}return[]},options:{showIndexSelection:!1,showQueryBar:!1,showFilterBar:!1},requiresSearch:!0}}(x))}start(e,{data:t,charts:n,dataViews:i,fieldFormats:r}){return Object(p.h)(i),Object(p.f)(t.search),Object(p.e)(n),Object(p.g)(r),{getArgValueSuggestions:g.a}}}function j(e){return new plugin_TimelionVisPlugin(e)}},function(e,t){e.exports=__kbnSharedDeps__.MomentTimezone},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.ElasticCharts},function(e,t){e.exports=__kbnSharedDeps__.Moment},function(e,t){e.exports=__kbnSharedDeps__.KbnMonaco},function(e,t){e.exports=__kbnSharedDeps__.Jquery},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/charts/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact}]);