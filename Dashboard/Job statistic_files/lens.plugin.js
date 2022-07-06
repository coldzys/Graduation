/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function t(t){for(var n,i,r=t[0],s=t[1],o=0,l=[];o<r.length;o++)i=r[o],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&l.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);l.length;)l.shift()()}var n={},a={2:0};function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,i){n=a[e]=[t,i]}));t.push(n[2]=r);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=function(e){return i.p+"lens.chunk."+e+".js"}(e);var u=new Error;s=function(t){o.onerror=o.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",u.name="ChunkLoadError",u.type=i,u.request=r,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var r=window.lens_bundle_jsonpfunction=window.lens_bundle_jsonpfunction||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var u=s;i(i.s=29)}([function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){e.exports=n(22)(2)},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,n){"use strict";n.r(t),n.d(t,"PLUGIN_ID",(function(){return r})),n.d(t,"APP_ID",(function(){return s})),n.d(t,"LENS_EMBEDDABLE_TYPE",(function(){return o})),n.d(t,"DOC_TYPE",(function(){return u})),n.d(t,"NOT_INTERNATIONALIZED_PRODUCT_NAME",(function(){return l})),n.d(t,"BASE_API_URL",(function(){return c})),n.d(t,"LENS_EDIT_BY_VALUE",(function(){return p})),n.d(t,"PieChartTypes",(function(){return d})),n.d(t,"CategoryDisplay",(function(){return b})),n.d(t,"NumberDisplay",(function(){return f})),n.d(t,"LegendDisplay",(function(){return m})),n.d(t,"layerTypes",(function(){return g})),n.d(t,"DOCUMENT_FIELD_NAME",(function(){return _})),n.d(t,"getBasePath",(function(){return h})),n.d(t,"getEditPath",(function(){return y})),n.d(t,"getFullPath",(function(){return v}));var a=n(27),i=n.n(a);const r="lens",s="lens",o="lens",u="lens",l="Lens Visualizations",c="/api/lens",p="edit_by_value",d={PIE:"pie",DONUT:"donut",TREEMAP:"treemap",MOSAIC:"mosaic",WAFFLE:"waffle"},b={DEFAULT:"default",INSIDE:"inside",HIDE:"hide"},f={HIDDEN:"hidden",PERCENT:"percent",VALUE:"value"},m={DEFAULT:"default",SHOW:"show",HIDE:"hide"},g={DATA:"data",REFERENCELINE:"referenceLine",ANNOTATIONS:"annotations"},_="___records___";function h(){return"#/"}function y(e,t){let n="";return t&&(n=`?_g=${i.a.encode({time:t})}`),e?`#/edit/${encodeURIComponent(e)}${n}`:`#/${p}${n}`}function v(e){return`/app/${r}${e?y(e):"#/"}`}},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/uiActions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/embeddable/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));function a(e,t){return`${e}---${t}`}function i(e){if(e.includes("---")){const t=e.split("---");return t[t.length-1]}return e}function r(e,t,n){e.columns.filter((e=>e.isTransposed)).reverse().forEach((({columnId:i})=>{const r=t.columns.findIndex((e=>e.id===i)),s=t.columns[r],o=n[s.id],{uniqueValues:u,uniqueRawValues:l}=function(e,t,n){const a=new Map;e.rows.forEach((e=>{const i=e[n];a.set(t.convert(e[n]),i)}));return{uniqueValues:[...a.keys()],uniqueRawValues:[...a.values()]}}(t,o,i),c=e.columns.filter((e=>e.transposable)),p=e.columns.filter((e=>!e.transposable&&e.columnId!==i));t.columns.splice(r,1),function(e,t,n,i,r,s,o){!function(e,t,n){e.columns=[...t],n[0].forEach(((t,a)=>{n.forEach((t=>{e.columns.push(t[a])}))}))}(e,t,n.map((e=>{const t=i.columns.find((t=>t.id===e.columnId)),n=r.map((n=>({...t,id:a(n,e.columnId),name:`${n} › ${t.name}`})));return i.columns.splice(i.columns.findIndex((t=>t.id===e.columnId)),1,...n),r.map(((n,i)=>({...e,columnId:a(n,e.columnId),originalColumnId:e.originalColumnId||e.columnId,originalName:e.originalName||t.name,bucketValues:[...e.bucketValues||[],{originalBucketColumn:o,value:s[i]}]})))})))}(e,p,c,t,u,l,s),function(e,t,n,i,r,s){const o=function(e,t,n){const a={};return e.rows.forEach((e=>{const i=t.map((t=>n[t.columnId].convert(e[t.columnId]))).join(",");a[i]||(a[i]=[]),a[i].push(e)})),a}(e,t,n);e.rows=function(e,t,n,i,r){return Object.values(e).map((e=>{const s={};return t.forEach((t=>{s[t.columnId]=e[0][t.columnId]})),e.forEach((e=>{const t=n.convert(e[i]);r.forEach((n=>{s[a(t,n.columnId)]=e[n.columnId]}))})),s}))}(o,t,i,r,s)}(t,p,n,o,i,c)}))}},function(e,t,n){n.r(t);var a=__kbnBundles__.get("entry/core/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){"use strict";n.d(t,"k",(function(){return a.PLUGIN_ID})),n.d(t,"a",(function(){return a.APP_ID})),n.d(t,"h",(function(){return a.LENS_EMBEDDABLE_TYPE})),n.d(t,"e",(function(){return a.DOC_TYPE})),n.d(t,"b",(function(){return a.BASE_API_URL})),n.d(t,"g",(function(){return a.LENS_EDIT_BY_VALUE})),n.d(t,"l",(function(){return a.PieChartTypes})),n.d(t,"c",(function(){return a.CategoryDisplay})),n.d(t,"j",(function(){return a.NumberDisplay})),n.d(t,"i",(function(){return a.LegendDisplay})),n.d(t,"o",(function(){return a.layerTypes})),n.d(t,"d",(function(){return a.DOCUMENT_FIELD_NAME})),n.d(t,"m",(function(){return a.getEditPath})),n.d(t,"n",(function(){return a.getFullPath})),n.d(t,"f",(function(){return i}));var a=n(3);let i;!function(e){e[e.SMALL=.3]="SMALL",e[e.MEDIUM=.54]="MEDIUM",e[e.LARGE=.7]="LARGE"}(i||(i={}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0);const i=e=>({name:"lens_datatable",type:"render",inputTypes:["lens_multitable"],help:a.i18n.translate("xpack.lens.datatable.expressionHelpLabel",{defaultMessage:"Datatable renderer"}),args:{title:{types:["string"],help:a.i18n.translate("xpack.lens.datatable.titleLabel",{defaultMessage:"Title"})},description:{types:["string"],help:""},columns:{types:["lens_datatable_column"],help:"",multi:!0},sortingColumnId:{types:["string"],help:""},sortingDirection:{types:["string"],help:""},fitRowToContent:{types:["boolean"],help:""},rowHeightLines:{types:["number"],help:""},headerRowHeight:{types:["string"],help:""},headerRowHeightLines:{types:["number"],help:""},pageSize:{types:["number"],help:""}},async fn(...t){const{datatableFn:a}=await n.e(3).then(n.bind(null,65));return a(e)(...t)}})},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a={name:"lens_datatable_column",aliases:[],type:"lens_datatable_column",help:"",inputTypes:["null"],args:{columnId:{types:["string"],help:""},alignment:{types:["string"],help:""},sortingHint:{types:["string"],help:""},hidden:{types:["boolean"],help:""},width:{types:["number"],help:""},isTransposed:{types:["boolean"],help:""},transposable:{types:["boolean"],help:""},colorMode:{types:["string"],help:""},palette:{types:["palette"],help:""},summaryRow:{types:["string"],help:""},summaryLabel:{types:["string"],help:""}},fn:function(e,t){return{type:"lens_datatable_column",...t}}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),i=n(23);const r={name:"lens_merge_tables",type:"lens_multitable",help:a.i18n.translate("xpack.lens.functions.mergeTables.help",{defaultMessage:"A helper to merge any number of kibana tables into a single table and expose it via inspector adapter"}),args:{layerIds:{types:["string"],help:"",multi:!0},tables:{types:["datatable"],help:"",multi:!0}},inputTypes:["kibana_context","null"],fn(e,{layerIds:t,tables:n},a){var i;const r={};return null!==(i=a.inspectorAdapters)&&void 0!==i&&i.tables&&(a.inspectorAdapters.tables.reset(),a.inspectorAdapters.tables.allowCsvExport=!0),n.forEach(((e,n)=>{r[t[n]]=e})),{type:"lens_multitable",tables:r,dateRange:s(e)}}};function s(e){if(!e||!e.timeRange)return;const t=Object(i.toAbsoluteDates)(e.timeRange);return t?{fromDate:t.from,toDate:t.to}:void 0}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0);const i={name:"lens_rename_columns",type:"datatable",help:a.i18n.translate("xpack.lens.functions.renameColumns.help",{defaultMessage:"A helper to rename the columns of a datatable"}),args:{idMap:{types:["string"],help:a.i18n.translate("xpack.lens.functions.renameColumns.idMap.help",{defaultMessage:"A JSON encoded object in which keys are the old column ids and values are the corresponding new ones. All other columns ids are kept."})}},inputTypes:["datatable"],async fn(...e){const{renameColumnFn:t}=await n.e(7).then(n.bind(null,61));return t(...e)}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a={name:"lens_format_column",type:"datatable",help:"",args:{format:{types:["string"],help:"",required:!0},columnId:{types:["string"],help:"",required:!0},decimals:{types:["number"],help:""},suffix:{types:["string"],help:""},parentFormat:{types:["string"],help:""}},inputTypes:["datatable"],async fn(...e){const{formatColumnFn:t}=await n.e(5).then(n.bind(null,62));return t(...e)}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0);const i={name:"lens_counter_rate",type:"datatable",inputTypes:["datatable"],help:a.i18n.translate("xpack.lens.functions.counterRate.help",{defaultMessage:"Calculates the counter rate of a column in a data table"}),args:{by:{help:a.i18n.translate("xpack.lens.functions.counterRate.args.byHelpText",{defaultMessage:"Column to split the counter rate calculation by"}),multi:!0,types:["string"],required:!1},inputColumnId:{help:a.i18n.translate("xpack.lens.functions.counterRate.args.inputColumnIdHelpText",{defaultMessage:"Column to calculate the counter rate of"}),types:["string"],required:!0},outputColumnId:{help:a.i18n.translate("xpack.lens.functions.counterRate.args.outputColumnIdHelpText",{defaultMessage:"Column to store the resulting counter rate in"}),types:["string"],required:!0},outputColumnName:{help:a.i18n.translate("xpack.lens.functions.counterRate.args.outputColumnNameHelpText",{defaultMessage:"Name of the column to store the resulting counter rate in"}),types:["string"],required:!1}},async fn(...e){const{counterRateFn:t}=await n.e(6).then(n.bind(null,63));return t(...e)}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=e=>({name:"lens_time_scale",type:"datatable",help:"",args:{dateColumnId:{types:["string"],help:"",required:!0},inputColumnId:{types:["string"],help:"",required:!0},outputColumnId:{types:["string"],help:"",required:!0},outputColumnName:{types:["string"],help:""},targetUnit:{types:["string"],options:["s","m","h","d"],help:"",required:!0}},inputTypes:["datatable"],async fn(...t){const{timeScaleFn:a}=await n.e(8).then(n.bind(null,64));return a(e)(...t)}})},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(9);function i(e){return"number"==typeof e||null==e}function r(e,t){var n;const r=null==e?void 0:e.columns.find((e=>e.id===t||Object(a.a)(e.id)===t));return"number"===(null==r?void 0:r.meta.type)&&"date"!==(null==r||null===(n=r.meta.params)||void 0===n?void 0:n.id)&&(null==e?void 0:e.rows.every((e=>{const n=e[t];return i(n)||Array.isArray(n)&&n.every(i)})))}},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t,n){e.exports=n(22)(3)},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/data/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){"use strict";n.d(t,"b",(function(){return a.c})),n.d(t,"a",(function(){return a.b})),n.d(t,"d",(function(){return a.d})),n.d(t,"c",(function(){return i.a})),n.d(t,"e",(function(){return r.a})),n.d(t,"f",(function(){return s})),n(17),n(16),n(15),n(14),n(18),n(13),n(12);var a=n(26),i=n(9),r=n(19);const s={name:"lens_multitable",to:{datatable:e=>Object.values(e.tables)[0]}}},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(0),i=n(9),r=n(19);function s(e,t,n){var a;const i=Object(r.a)(n,e)&&(null==t?void 0:t.summaryRow)||"none";return{summaryRow:i,summaryLabel:null!==(a=null==t?void 0:t.summaryLabel)&&void 0!==a?a:o(i)}}function o(e){return u().find((({value:t})=>e===t)).label}function u(){return[{value:"none",label:a.i18n.translate("xpack.lens.table.summaryRow.none",{defaultMessage:"None"}),"data-test-subj":"lns-datatable-summary-none"},{value:"count",label:a.i18n.translate("xpack.lens.table.summaryRow.count",{defaultMessage:"Value count"}),"data-test-subj":"lns-datatable-summary-count"},{value:"sum",label:a.i18n.translate("xpack.lens.table.summaryRow.sum",{defaultMessage:"Sum"}),"data-test-subj":"lns-datatable-summary-sum"},{value:"avg",label:a.i18n.translate("xpack.lens.table.summaryRow.average",{defaultMessage:"Average"}),"data-test-subj":"lns-datatable-summary-avg"},{value:"min",label:a.i18n.translate("xpack.lens.table.summaryRow.minimum",{defaultMessage:"Minimum"}),"data-test-subj":"lns-datatable-summary-min"},{value:"max",label:a.i18n.translate("xpack.lens.table.summaryRow.maximum",{defaultMessage:"Maximum"}),"data-test-subj":"lns-datatable-summary-max"}]}function l(e,t,n,a){const r=function(e,t,n){const a=n.filter((e=>null!=e[t])).flatMap((e=>e[t])),i=a.length,r=a.reduce(((e,t)=>e+t),0);switch(e){case"sum":return r;case"count":return i;case"avg":return r/i;case"min":return Math.min(...a);case"max":return Math.max(...a);default:throw Error("No summary function found")}}(e.summaryRow,e.columnId,t.rows);return"count"===e.summaryRow?a.convert(r):n[Object(i.a)(e.columnId)].convert(r)}},function(e,t){e.exports=__kbnSharedDeps__.RisonNode},function(e,t,n){"use strict";n.r(t),n.d(t,"layerTypes",(function(){return p.o})),n.d(t,"plugin",(function(){return V}));var a=n(1),i=n.n(a),r=n(5),s=n(10),o=n(4),u=n(8),l=n(3),c=n(0),p=n(11);const d="ACTION_OPEN_IN_DISCOVER",b=(e,t)=>{const n=e;if("attributes"in n&&void 0!==n.attributes){const e=[];Array.isArray(n.attributes.references)&&n.attributes.references.forEach((n=>{const a=n,i=t.find((e=>e.name===a.name));i&&e.push(i)})),n.attributes.references=e}return n},f=e=>{let t=[];const n=e;return"attributes"in n&&void 0!==n.attributes&&(t=n.attributes.references),{state:e,references:t}};class embeddable_factory_EmbeddableFactory{constructor(e){i()(this,"type",l.DOC_TYPE),i()(this,"savedObjectMetaData",{name:c.i18n.translate("xpack.lens.lensSavedObjectLabel",{defaultMessage:"Lens Visualization"}),type:l.DOC_TYPE,getIconForSavedObject:()=>"lensApp"}),i()(this,"isEditable",(async()=>{var e;const{capabilities:t}=await this.getStartServices();return Boolean(t.visualize.save||(null===(e=t.dashboard)||void 0===e?void 0:e.showWriteControls))})),i()(this,"createFromSavedObject",(async(e,t,n)=>(t.savedObjectId||(t.savedObjectId=e),this.create(t,n)))),i()(this,"extract",f),i()(this,"inject",b),this.getStartServices=e}canCreateNew(){return!1}getDisplayName(){return c.i18n.translate("xpack.lens.embeddableDisplayName",{defaultMessage:"lens"})}async create(e,t){var a;const{timefilter:i,expressionRenderer:r,documentToExpression:s,injectFilterReferences:o,visualizationMap:u,datasourceMap:l,uiActions:c,coreHttp:p,attributeService:d,indexPatternService:b,capabilities:f,usageCollection:m,theme:g,inspector:_,spaces:h}=await this.getStartServices(),{Embeddable:y}=await Promise.all([n.e(0),n.e(1)]).then(n.bind(null,433));return new y({attributeService:d,indexPatternService:b,timefilter:i,inspector:_,expressionRenderer:r,basePath:p.basePath,getTrigger:null==c?void 0:c.getTrigger,getTriggerCompatibleActions:null==c?void 0:c.getTriggerCompatibleActions,documentToExpression:s,injectFilterReferences:o,visualizationMap:u,datasourceMap:l,capabilities:{canSaveDashboards:Boolean(null===(a=f.dashboard)||void 0===a?void 0:a.showWriteControls),canSaveVisualizations:Boolean(f.visualize.save),navLinks:f.navLinks,discover:f.discover},usageCollection:m,theme:g,spaces:h},e,t)}}var m=n(6),g=n.n(m),_=n(7),h=n(2);function y(e,t){const{embeddable:n,uiActions:a,inspector:i}=t,r=n.getEmbeddableFactory("lens"),s=e.theme;return e=>{var t;const n={...e},o=Boolean(n.withDefaultActions)||n.extraActions&&(null===(t=n.extraActions)||void 0===t?void 0:t.length)>0;return o?Object(h.jsx)(O,{factory:r,uiActions:a,inspector:i,actionPredicate:()=>o,input:n,theme:s,extraActions:n.extraActions,withDefaultActions:n.withDefaultActions}):Object(h.jsx)(v,{factory:r,input:n})}}function v({factory:e,input:t}){const[n,a,i]=Object(r.useEmbeddableFactory)({factory:e,input:t});return a?Object(h.jsx)(_.EuiLoadingChart,null):Object(h.jsx)(r.EmbeddableRoot,{embeddable:n,loading:a,error:i,input:t})}const O=({factory:e,uiActions:t,actionPredicate:n,inspector:a,input:i,theme:s,extraActions:o,withDefaultActions:u})=>{const[l,c]=Object(r.useEmbeddableFactory)({factory:e,input:i});return Object(m.useEffect)((()=>{l&&l.updateInput(i)}),[l,i]),c||!l?Object(h.jsx)(_.EuiLoadingChart,null):Object(h.jsx)(r.EmbeddablePanel,{hideHeader:!1,embeddable:l,getActions:async(e,n)=>{const a=u?await t.getTriggerCompatibleActions(e,n):[];return[...null!=o?o:[],...a]},inspector:a,actionPredicate:n,showShadow:!1,showBadges:!1,showNotifications:!1,theme:s})};var E=n(21),j=n.n(E);const A=g.a.lazy((()=>n.e(0).then(n.bind(null,95))));function w(){return Object(h.jsx)(_.EuiOverlayMask,null,Object(h.jsx)(_.EuiLoadingSpinner,null))}const x=e=>Object(h.jsx)(m.Suspense,{fallback:Object(h.jsx)(w,null)},Object(h.jsx)(A,e));function D(e,t){return a=>{const[i,r]=Object(m.useState)();if(Object(m.useEffect)((()=>{!async function(){const{getLensServices:a,getLensAttributeService:i}=await Promise.all([n.e(0),n.e(1)]).then(n.bind(null,433)),s=await a(e,t,i(e,t));r(s)}()}),[]),!i)return Object(h.jsx)(w,null);const{ContextProvider:s}=i.presentationUtil;return Object(h.jsx)(_.EuiOverlayMask,null,Object(h.jsx)(s,null,Object(h.jsx)(x,j()({},a,{lensServices:i}))))}}var P=n(25),T=n(12),I=n(13),S=n(14),k=n(15),L=n(16),C=n(17),M=n(18),R=n(24),N=n(20);class plugin_LensPlugin{constructor(){i()(this,"datatableVisualization",void 0),i()(this,"editorFrameService",void 0),i()(this,"editorFrameSetup",void 0),i()(this,"queuedVisualizations",[]),i()(this,"indexpatternDatasource",void 0),i()(this,"xyVisualization",void 0),i()(this,"metricVisualization",void 0),i()(this,"pieVisualization",void 0),i()(this,"heatmapVisualization",void 0),i()(this,"gaugeVisualization",void 0),i()(this,"topNavMenuEntries",[]),i()(this,"stopReportManager",void 0)}setup(e,{urlForwarding:t,expressions:a,data:i,fieldFormats:r,embeddable:o,visualizations:u,charts:p,eventAnnotation:d,globalSearch:b,usageCollection:f}){const m=Object(P.createStartServicesGetter)(e.getStartServices);o&&o.registerEmbeddableFactory("lens",new embeddable_factory_EmbeddableFactory((async()=>{const{getLensAttributeService:t}=await Promise.all([n.e(0),n.e(1)]).then(n.bind(null,433)),{core:s,plugins:o}=m();await this.initParts(e,i,p,a,r,o.fieldFormats.deserialize,d);const u=await this.editorFrameService.loadVisualizations(),l=await this.editorFrameService.loadDatasources();return{attributeService:t(s,o),capabilities:s.application.capabilities,coreHttp:s.http,timefilter:o.data.query.timefilter.timefilter,expressionRenderer:o.expressions.ReactExpressionRenderer,documentToExpression:this.editorFrameService.documentToExpression,injectFilterReferences:i.query.filterManager.inject.bind(i.query.filterManager),visualizationMap:u,datasourceMap:l,indexPatternService:o.dataViews,uiActions:o.uiActions,usageCollection:f,inspector:o.inspector,spaces:o.spaces,theme:e.theme}}))),u.registerAlias({aliasPath:Object(l.getBasePath)(),aliasApp:"lens",name:"lens",promotion:!0,title:c.i18n.translate("xpack.lens.visTypeAlias.title",{defaultMessage:"Lens"}),description:c.i18n.translate("xpack.lens.visTypeAlias.description",{defaultMessage:"Create visualizations with our drag and drop editor. Switch between visualization types at any time."}),note:c.i18n.translate("xpack.lens.visTypeAlias.note",{defaultMessage:"Recommended for most users."}),icon:"lensApp",stage:"production",appExtensions:{visualizations:{docTypes:["lens"],searchFields:["title^3"],toListItem(e){const{id:t,type:n,attributes:a}=e,{title:i,description:r}=a;return{id:t,title:i,description:r,editUrl:Object(l.getEditPath)(t),editApp:"lens",icon:"lensApp",stage:"production",savedObjectType:n,type:"lens",typeTitle:c.i18n.translate("xpack.lens.visTypeAlias.type",{defaultMessage:"Lens"})}}}}}),((t,a,i)=>{[R.f].forEach((e=>t.registerType(e))),[S.a,C.a,L.a,k.a,I.a,Object(T.a)((()=>m().plugins.fieldFormats.deserialize)),Object(M.a)((async()=>{const{getTimeZone:t}=await n.e(9).then(n.bind(null,73));return t(e.uiSettings)}))].forEach((e=>t.registerFunction(e)))})(a);const g=()=>m().plugins.presentationUtil.ContextProvider;var _;return e.application.register({id:l.APP_ID,title:l.NOT_INTERNATIONALIZED_PRODUCT_NAME,navLinkStatus:s.AppNavLinkStatus.hidden,mount:async t=>{const{core:s,plugins:o}=m();await Promise.all([this.initParts(e,i,p,a,r,o.fieldFormats.deserialize,d),void m().plugins.dataViews.ensureDefaultDataView()]);const{mountApp:u,stopReportManager:l,getLensAttributeService:c}=await Promise.all([n.e(0),n.e(1)]).then(n.bind(null,433));this.stopReportManager=l;const b=this.editorFrameService.start(s,o);return u(e,t,{createEditorFrame:b.createInstance,attributeService:c(s,o),getPresentationUtilContext:g,topNavMenuEntryGenerators:this.topNavMenuEntries})}}),b&&b.registerResultProvider((_=e.getStartServices().then((([{application:{capabilities:e}}])=>e)),{id:"lens",find:({term:e="",types:t,tags:n})=>n||t&&!t.includes("application")?Object(N.of)([]):Object(N.from)(_.then((({navLinks:{visualize:t}})=>{if(!t)return[];const n=c.i18n.translate("xpack.lens.searchTitle",{defaultMessage:"Lens: create visualizations",description:"Lens is a product name and should not be translated"}),a=n.toLowerCase();let i=0;return a===(e=e.toLowerCase())?i=100:a.startsWith(e)?i=90:a.includes(e)&&(i=75),0===i?[]:[{id:"lens",title:n,type:"application",icon:"logoKibana",meta:{categoryId:s.DEFAULT_APP_CATEGORIES.kibana.id,categoryLabel:s.DEFAULT_APP_CATEGORIES.kibana.label},score:i,url:Object(l.getFullPath)()}]}))),getSearchableTypes:()=>["application"]})),t.forwardApp("lens","lens"),{registerVisualization:e=>{this.editorFrameSetup?this.editorFrameSetup.registerVisualization(e):this.queuedVisualizations.push(e)},registerTopNavMenuEntryGenerator:e=>{this.topNavMenuEntries.push(e)}}}async initParts(e,t,a,i,r,s,o){const{DatatableVisualization:u,EditorFrameService:l,IndexPatternDatasource:c,XyVisualization:p,MetricVisualization:d,PieVisualization:b,HeatmapVisualization:f,GaugeVisualization:m}=await Promise.all([n.e(0),n.e(1)]).then(n.bind(null,433));this.datatableVisualization=new u,this.editorFrameService=new l,this.indexpatternDatasource=new c,this.xyVisualization=new p,this.metricVisualization=new d,this.pieVisualization=new b,this.heatmapVisualization=new f,this.gaugeVisualization=new m;const g=this.editorFrameService.setup(),_={expressions:i,data:t,fieldFormats:r,charts:a,editorFrame:g,formatFactory:s,eventAnnotation:o};this.indexpatternDatasource.setup(e,_),this.xyVisualization.setup(e,_),this.datatableVisualization.setup(e,_),this.metricVisualization.setup(e,_),this.pieVisualization.setup(e,_),this.heatmapVisualization.setup(e,_),this.gaugeVisualization.setup(e,_),this.queuedVisualizations.forEach((e=>{g.registerVisualization(e)})),this.editorFrameSetup=g}start(e,t){var a,i,s;return t.uiActions.hasAction(o.ACTION_VISUALIZE_FIELD)&&t.uiActions.unregisterAction(o.ACTION_VISUALIZE_FIELD),t.uiActions.addTriggerAction(o.VISUALIZE_FIELD_TRIGGER,(a=e.application,Object(o.createAction)({type:o.ACTION_VISUALIZE_LENS_FIELD,id:o.ACTION_VISUALIZE_LENS_FIELD,getDisplayName:()=>c.i18n.translate("xpack.lens.discover.visualizeFieldLegend",{defaultMessage:"Visualize field"}),isCompatible:async()=>!!a.capabilities.visualize.show,execute:async e=>{a.navigateToApp("lens",{state:{type:o.ACTION_VISUALIZE_LENS_FIELD,payload:e}})}}))),t.uiActions.addTriggerAction(u.VISUALIZE_EDITOR_TRIGGER,(e=>Object(o.createAction)({type:u.ACTION_CONVERT_TO_LENS,id:u.ACTION_CONVERT_TO_LENS,getDisplayName:()=>c.i18n.translate("xpack.lens.visualizeTSVBLegend",{defaultMessage:"Visualize TSVB chart"}),isCompatible:async()=>!!e.capabilities.visualize.show,execute:async t=>{const n=Object.values(t.layers),a={...t,layers:n,isVisualizeAction:!0};e.navigateToApp("lens",{state:{type:u.ACTION_CONVERT_TO_LENS,payload:a,originatingApp:c.i18n.translate("xpack.lens.TSVBLabel",{defaultMessage:"TSVB"})}})}}))(e.application)),t.uiActions.addTriggerAction(r.CONTEXT_MENU_TRIGGER,(i=t.discover,s=e.application.capabilities.discover.show,Object(o.createAction)({type:d,id:d,order:19,getIconType:()=>"popout",getDisplayName:()=>c.i18n.translate("xpack.lens.app.exploreDataInDiscover",{defaultMessage:"Explore data in Discover"}),isCompatible:async e=>!!s&&e.embeddable.type===p.e&&await e.embeddable.canViewUnderlyingData(),execute:async e=>{var t;const n=e.embeddable.getViewUnderlyingDataArgs(),a=null===(t=i.locator)||void 0===t?void 0:t.getRedirectUrl({...n});window.open(a,"_blank")}}))),{EmbeddableComponent:y(e,t),SaveModalComponent:D(e,t),navigateToPrefilledEditor:(n,{openInNewTab:a=!1,originatingApp:i="",originatingPath:s}={})=>{null!=n&&n.timeRange&&!a&&t.data.query.timefilter.timefilter.setTime(n.timeRange),new r.EmbeddableStateTransfer(e.application.navigateToApp,e.application.currentAppId$).navigateToEditor(l.APP_ID,{openInNewTab:a,path:Object(l.getEditPath)(void 0,a&&(null==n?void 0:n.timeRange)||void 0),state:{originatingApp:i,originatingPath:s,valueInput:n}})},canUseEditor:()=>{var t;return Boolean(null===(t=e.application.capabilities.visualize)||void 0===t?void 0:t.show)},getXyVisTypes:async()=>{const{visualizationTypes:e}=await n.e(4).then(n.bind(null,78));return e},stateHelperApi:async()=>{const{createFormulaPublicApi:e}=await Promise.all([n.e(0),n.e(1)]).then(n.bind(null,433));return{formula:e()}}}}stop(){this.stopReportManager&&this.stopReportManager()}}const V=()=>new plugin_LensPlugin},function(e,t,n){n(30),__kbnBundles__.define("plugin/lens/public",n,28),__kbnBundles__.define("plugin/lens/common/constants",n,3)},function(e,t,n){n.p=window.__kbnPublicPath__.lens},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t){e.exports=__kbnSharedDeps__.Classnames},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t){e.exports=__kbnSharedDeps__.ElasticCharts},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/charts/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t){e.exports=__kbnSharedDeps__.KbnUiTheme},function(e,t){e.exports=__kbnSharedDeps__.TsLib},function(e,t){e.exports=__kbnSharedDeps__.Moment},function(e,t){e.exports=__kbnSharedDeps__.MomentTimezone},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/expressionGauge/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t){e.exports=__kbnSharedDeps__.KbnMonaco},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/eventAnnotation/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/expressionHeatmap/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/expressionGauge/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,t){e.exports=__kbnSharedDeps__.KbnAnalytics},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/expressions/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/charts/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/fieldFormats/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/dataViews/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t){e.exports=__kbnSharedDeps__.KbnDatemath},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/share/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/savedObjects/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/presentationUtil/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,n){n.r(t);var a=__kbnBundles__.get("plugin/visualizations/common/utils");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))}]);