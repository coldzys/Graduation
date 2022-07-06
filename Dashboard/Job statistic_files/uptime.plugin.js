/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function t(t){for(var n,a,i=t[0],o=t[1],s=0,l=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(u&&u(t);l.length;)l.shift()()}var n={},r={7:0};function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=i);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=function(e){return a.p+"uptime.chunk."+e+".js"}(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var i=window.uptime_bundle_jsonpfunction=window.uptime_bundle_jsonpfunction||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=o;a(a.s=14)}([function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(16);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}}))}));var a=n(17);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}));var i=n(18);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var o=n(19);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));const r={MONITOR_STATUS:{id:"xpack.uptime.alerts.actionGroups.monitorStatus",name:"Uptime Down Monitor"},TLS_LEGACY:{id:"xpack.uptime.alerts.actionGroups.tls",name:"Uptime TLS Alert (Legacy)"},TLS:{id:"xpack.uptime.alerts.actionGroups.tlsCertificate",name:"Uptime TLS Alert"},DURATION_ANOMALY:{id:"xpack.uptime.alerts.actionGroups.durationAnomaly",name:"Uptime Duration Anomaly"}},a={MONITOR_STATUS:"xpack.uptime.alerts.monitorStatus",TLS_LEGACY:"xpack.uptime.alerts.tls",TLS:"xpack.uptime.alerts.tlsCertificate",DURATION_ANOMALY:"xpack.uptime.alerts.durationAnomaly"}},function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(0);const a=r.i18n.translate("xpack.uptime.settings.invalid.error",{defaultMessage:"Value must be greater than 0."}),i=r.i18n.translate("xpack.uptime.settings.invalid.nanError",{defaultMessage:"Value must be an integer."}),o={defaultActionMessage:r.i18n.translate("xpack.uptime.alerts.monitorStatus.defaultActionMessage",{defaultMessage:"Monitor {monitorName} with url {monitorUrl} from {observerLocation} {statusMessage} The latest error message is {latestErrorMessage}",values:{monitorName:"{{state.monitorName}}",monitorUrl:"{{{state.monitorUrl}}}",statusMessage:"{{{state.statusMessage}}}",latestErrorMessage:"{{{state.latestErrorMessage}}}",observerLocation:"{{state.observerLocation}}"}}),name:r.i18n.translate("xpack.uptime.alerts.monitorStatus.clientName",{defaultMessage:"Uptime monitor status"}),description:r.i18n.translate("xpack.uptime.alerts.monitorStatus.description",{defaultMessage:"Alert when a monitor is down or an availability threshold is breached."})},s={defaultActionMessage:r.i18n.translate("xpack.uptime.alerts.tls.defaultActionMessage",{defaultMessage:"Detected TLS certificate {commonName} from issuer {issuer} is {status}. Certificate {summary}\n",values:{commonName:"{{state.commonName}}",issuer:"{{state.issuer}}",summary:"{{state.summary}}",status:"{{state.status}}"}}),name:r.i18n.translate("xpack.uptime.alerts.tls.clientName",{defaultMessage:"Uptime TLS"}),description:r.i18n.translate("xpack.uptime.alerts.tls.description",{defaultMessage:"Alert when the TLS certificate of an Uptime monitor is about to expire."})},u={defaultActionMessage:r.i18n.translate("xpack.uptime.alerts.tls.legacy.defaultActionMessage",{defaultMessage:"Detected {count} TLS certificates expiring or becoming too old.\n{expiringConditionalOpen}\nExpiring cert count: {expiringCount}\nExpiring Certificates: {expiringCommonNameAndDate}\n{expiringConditionalClose}\n{agingConditionalOpen}\nAging cert count: {agingCount}\nAging Certificates: {agingCommonNameAndDate}\n{agingConditionalClose}\n",values:{count:"{{state.count}}",expiringCount:"{{state.expiringCount}}",expiringCommonNameAndDate:"{{state.expiringCommonNameAndDate}}",expiringConditionalOpen:"{{#state.hasExpired}}",expiringConditionalClose:"{{/state.hasExpired}}",agingCount:"{{state.agingCount}}",agingCommonNameAndDate:"{{state.agingCommonNameAndDate}}",agingConditionalOpen:"{{#state.hasAging}}",agingConditionalClose:"{{/state.hasAging}}"}}),name:r.i18n.translate("xpack.uptime.alerts.tls.legacy.clientName",{defaultMessage:"Uptime TLS (Legacy)"}),description:r.i18n.translate("xpack.uptime.alerts.tls.legacy.description",{defaultMessage:"Alert when the TLS certificate of an Uptime monitor is about to expire. This alert will be deprecated in a future version."})},l={defaultActionMessage:r.i18n.translate("xpack.uptime.alerts.durationAnomaly.defaultActionMessage",{defaultMessage:"Abnormal ({severity} level) response time detected on {monitor} with url {monitorUrl} at {anomalyStartTimestamp}. Anomaly severity score is {severityScore}.\nResponse times as high as {slowestAnomalyResponse} have been detected from location {observerLocation}. Expected response time is {expectedResponseTime}.",values:{severity:"{{state.severity}}",anomalyStartTimestamp:"{{state.anomalyStartTimestamp}}",monitor:"{{state.monitor}}",monitorUrl:"{{{state.monitorUrl}}}",slowestAnomalyResponse:"{{state.slowestAnomalyResponse}}",expectedResponseTime:"{{state.expectedResponseTime}}",severityScore:"{{state.severityScore}}",observerLocation:"{{state.observerLocation}}"}}),name:r.i18n.translate("xpack.uptime.alerts.durationAnomaly.clientName",{defaultMessage:"Uptime Duration Anomaly"}),description:r.i18n.translate("xpack.uptime.alerts.durationAnomaly.description",{defaultMessage:"Alert when the Uptime monitor duration is anomalous."})}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);const a={APP_ROOT_ID:"react-uptime-root",DESCRIPTION:r.i18n.translate("xpack.uptime.pluginDescription",{defaultMessage:"Uptime monitoring",description:"The description text that will appear in the feature catalogue."}),ID:"uptime",LOCAL_STORAGE_KEY:"xpack.uptime",NAME:r.i18n.translate("xpack.uptime.featureRegistry.uptimeFeatureName",{defaultMessage:"Uptime"}),TITLE:r.i18n.translate("xpack.uptime.uptimeFeatureCatalogueTitle",{defaultMessage:"Uptime"})}},function(e,t,n){"use strict";n.d(t,"j",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"l",(function(){return s})),n.d(t,"m",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"q",(function(){return c})),n.d(t,"s",(function(){return p})),n.d(t,"d",(function(){return _})),n.d(t,"p",(function(){return E})),n.d(t,"k",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return A})),n.d(t,"t",(function(){return R})),n.d(t,"o",(function(){return T})),n.d(t,"n",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"r",(function(){return L}));const r="/monitor/:monitorId?",a="/add-monitor",i="/edit-monitor/:monitorId",o="/manage-monitors",s="/",u="/settings",l="/certificates",c="/journey/:checkGroupId/step/:stepIndex",p="/journey/:checkGroupId/steps",_="/mapping-error";let E,d;!function(e){e.UP="up",e.DOWN="down",e.COMPLETE="complete",e.FAILED="failed",e.SKIPPED="skipped"}(E||(E={})),function(e){e.HTTP="http",e.TCP="tcp",e.ICMP="icmp",e.BROWSER="browser"}(d||(d={}));const m="high_latency_by_geo",A="uptime_heartbeat",R="Unnamed-location",T="en-short-locale",f={relativeTime:{future:"in %s",past:"%s ago",s:"%ds",ss:"%ss",m:"%dm",mm:"%dm",h:"%dh",hh:"%dh",d:"%dd",dd:"%dd",M:"%d Mon",MM:"%d Mon",y:"%d Yr",yy:"%d Yr"}};let b;!function(e){e.OK="OK",e.EXPIRING_SOON="EXPIRING_SOON",e.EXPIRED="EXPIRED",e.TOO_OLD="TOO_OLD"}(b||(b={}));const g={TAGS:"tags",PORT:"url.port",LOCATION:"observer.geo.name",TYPE:"monitor.type"},L="synthetics-*"},function(e,t){e.exports=__kbnSharedDeps__.Moment},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/observability/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("entry/core/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){"use strict";t.decode=t.parse=n(20),t.encode=t.stringify=n(21)},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/home/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n(15),__kbnBundles__.define("plugin/uptime/public",n,22)},function(e,t,n){n.p=window.__kbnPublicPath__.uptime},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION=t.TIMESTAMP=t.TAGS=t.SPACE_IDS=t.KIBANA_NAMESPACE=t.EVENT_MODULE=t.EVENT_KIND=t.EVENT_ACTION=t.ECS_VERSION=t.ALERT_WORKFLOW_USER=t.ALERT_WORKFLOW_STATUS=t.ALERT_WORKFLOW_REASON=t.ALERT_UUID=t.ALERT_SYSTEM_STATUS=t.ALERT_STATUS=t.ALERT_START=t.ALERT_SEVERITY=t.ALERT_RULE_VERSION=t.ALERT_RULE_UUID=t.ALERT_RULE_UPDATED_BY=t.ALERT_RULE_UPDATED_AT=t.ALERT_RULE_TYPE_ID=t.ALERT_RULE_TYPE=t.ALERT_RULE_TO=t.ALERT_RULE_TAGS=t.ALERT_RULE_RULE_NAME_OVERRIDE=t.ALERT_RULE_RULE_ID=t.ALERT_RULE_REFERENCES=t.ALERT_RULE_PRODUCER=t.ALERT_RULE_PARAMETERS=t.ALERT_RULE_NOTE=t.ALERT_RULE_NAMESPACE_FIELD=t.ALERT_RULE_NAMESPACE=t.ALERT_RULE_NAME=t.ALERT_RULE_LICENSE=t.ALERT_RULE_INTERVAL=t.ALERT_RULE_FROM=t.ALERT_RULE_EXECUTION_UUID=t.ALERT_RULE_EXCEPTIONS_LIST=t.ALERT_RULE_ENABLED=t.ALERT_RULE_DESCRIPTION=t.ALERT_RULE_CREATED_BY=t.ALERT_RULE_CREATED_AT=t.ALERT_RULE_CONSUMER=t.ALERT_RULE_CATEGORY=t.ALERT_RULE_AUTHOR=t.ALERT_RISK_SCORE=t.ALERT_REASON=t.ALERT_NAMESPACE=t.ALERT_INSTANCE_ID=t.ALERT_EVALUATION_VALUE=t.ALERT_EVALUATION_THRESHOLD=t.ALERT_END=t.ALERT_DURATION=t.ALERT_BUILDING_BLOCK_TYPE=t.ALERT_ACTION_GROUP=void 0;t.KIBANA_NAMESPACE="kibana";t.ALERT_NAMESPACE="kibana.alert";t.ALERT_RULE_NAMESPACE="kibana.alert.rule";t.ECS_VERSION="ecs.version";t.EVENT_ACTION="event.action";t.EVENT_KIND="event.kind";t.EVENT_MODULE="event.module";t.SPACE_IDS="kibana.space_ids";t.TAGS="tags";t.TIMESTAMP="@timestamp";t.VERSION="kibana.version";t.ALERT_ACTION_GROUP="kibana.alert.action_group";t.ALERT_BUILDING_BLOCK_TYPE="kibana.alert.building_block_type";t.ALERT_DURATION="kibana.alert.duration.us";t.ALERT_END="kibana.alert.end";t.ALERT_EVALUATION_THRESHOLD="kibana.alert.evaluation.threshold";t.ALERT_EVALUATION_VALUE="kibana.alert.evaluation.value";t.ALERT_INSTANCE_ID="kibana.alert.instance.id";t.ALERT_REASON="kibana.alert.reason";t.ALERT_RISK_SCORE="kibana.alert.risk_score";t.ALERT_SEVERITY="kibana.alert.severity";t.ALERT_START="kibana.alert.start";t.ALERT_STATUS="kibana.alert.status";t.ALERT_SYSTEM_STATUS="kibana.alert.system_status";t.ALERT_UUID="kibana.alert.uuid";t.ALERT_WORKFLOW_REASON="kibana.alert.workflow_reason";t.ALERT_WORKFLOW_STATUS="kibana.alert.workflow_status";t.ALERT_WORKFLOW_USER="kibana.alert.workflow_user";t.ALERT_RULE_AUTHOR="kibana.alert.rule.author";t.ALERT_RULE_CREATED_AT="kibana.alert.rule.created_at";t.ALERT_RULE_CREATED_BY="kibana.alert.rule.created_by";t.ALERT_RULE_DESCRIPTION="kibana.alert.rule.description";t.ALERT_RULE_ENABLED="kibana.alert.rule.enabled";t.ALERT_RULE_EXCEPTIONS_LIST="kibana.alert.rule.exceptions_list";t.ALERT_RULE_EXECUTION_UUID="kibana.alert.rule.execution.uuid";t.ALERT_RULE_FROM="kibana.alert.rule.from";t.ALERT_RULE_INTERVAL="kibana.alert.rule.interval";t.ALERT_RULE_LICENSE="kibana.alert.rule.license";t.ALERT_RULE_CATEGORY="kibana.alert.rule.category";t.ALERT_RULE_NAME="kibana.alert.rule.name";t.ALERT_RULE_NAMESPACE_FIELD="kibana.alert.rule.namespace";t.ALERT_RULE_NOTE="kibana.alert.rule.note";t.ALERT_RULE_PARAMETERS="kibana.alert.rule.parameters";t.ALERT_RULE_REFERENCES="kibana.alert.rule.references";t.ALERT_RULE_RULE_ID="kibana.alert.rule.rule_id";t.ALERT_RULE_RULE_NAME_OVERRIDE="kibana.alert.rule.rule_name_override";t.ALERT_RULE_TAGS="kibana.alert.rule.tags";t.ALERT_RULE_TO="kibana.alert.rule.to";t.ALERT_RULE_TYPE="kibana.alert.rule.type";t.ALERT_RULE_TYPE_ID="kibana.alert.rule.rule_type_id";t.ALERT_RULE_UPDATED_AT="kibana.alert.rule.updated_at";t.ALERT_RULE_UPDATED_BY="kibana.alert.rule.updated_by";t.ALERT_RULE_VERSION="kibana.alert.rule.version";t.ALERT_RULE_CONSUMER="kibana.alert.rule.consumer";t.ALERT_RULE_PRODUCER="kibana.alert.rule.producer";t.ALERT_RULE_UUID="kibana.alert.rule.uuid"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validFeatureIds=t.isValidFeatureId=t.getSafeSortIds=t.getEsQueryConfig=t.AlertConsumers=void 0;const r={APM:"apm",LOGS:"logs",INFRASTRUCTURE:"infrastructure",OBSERVABILITY:"observability",SIEM:"siem",UPTIME:"uptime"};t.AlertConsumers=r;const a=Object.values(r).map((e=>e));t.validFeatureIds=a,t.isValidFeatureId=e=>"string"==typeof e&&a.includes(e),t.getSafeSortIds=e=>null==e?e:e.map((e=>null==e||""===e||e>=Number.MAX_SAFE_INTEGER?"9223372036854775807":e)),t.getEsQueryConfig=e=>{const t={allowLeadingWildcards:!0,queryStringOptions:{analyze_wildcard:!0},ignoreFilterIfFieldNotInIndex:!1,dateFormatTZ:"Zulu"};return null==e?t:Object.keys(e).reduce(((n,r)=>{const a=r;return null!=e[a]?{[r]:e[a],...n}:{[r]:t[a],...n}}),{})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ALERT_SEVERITY_WARNING=t.ALERT_SEVERITY_CRITICAL=void 0,t.ALERT_SEVERITY_WARNING="warning",t.ALERT_SEVERITY_CRITICAL="critical"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ALERT_STATUS_RECOVERED=t.ALERT_STATUS_ACTIVE=void 0,t.ALERT_STATUS_ACTIVE="active",t.ALERT_STATUS_RECOVERED="recovered"},function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,i){t=t||"&",n=n||"=";var o={};if("string"!=typeof e||0===e.length)return o;var s=/\+/g;e=e.split(t);var u=1e3;i&&"number"==typeof i.maxKeys&&(u=i.maxKeys);var l=e.length;u>0&&l>u&&(l=u);for(var c=0;c<l;++c){var p,_,E,d,m=e[c].replace(s,"%20"),A=m.indexOf(n);A>=0?(p=m.substr(0,A),_=m.substr(A+1)):(p=m,_=""),E=decodeURIComponent(p),d=decodeURIComponent(_),r(o,E)?a(o[E])?o[E].push(d):o[E]=[o[E],d]:o[E]=d}return o};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,s){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?i(o(e),(function(o){var s=encodeURIComponent(r(o))+n;return a(e[o])?i(e[o],(function(e){return s+encodeURIComponent(r(e))})).join(t):s+encodeURIComponent(r(e[o]))})).join(t):s?encodeURIComponent(r(s))+n+encodeURIComponent(r(e)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function i(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var o=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return F}));var r=n(11),a=n(12),i=n(0),o=n(9),s=n(13),u=n(1),l=n.n(u),c=n(7),p=n.n(c),_=n(2),E=n(10);const d=({monitorId:e,dateRangeStart:t,dateRangeEnd:n,filters:r={}})=>(({pathname:e,query:t})=>`${e}?${Object(E.stringify)(t)}`)({pathname:`/app/uptime/monitor/${btoa(e)}`,query:{dateRangeEnd:n,dateRangeStart:t,...Object.keys(r).length?{filters:JSON.stringify(Object.keys(r).map((e=>[e,r[e]])))}:{}}});var m=n(4),A=n(3);const{defaultActionMessage:R,description:T}=m.b,f=l.a.lazy((()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(5),n.e(9)]).then(n.bind(null,300))));let b;var g=n(6);const{defaultActionMessage:L,description:S}=m.c,O=l.a.lazy((()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(6)]).then(n.bind(null,298)))),{defaultActionMessage:y,description:U}=m.d,h=l.a.lazy((()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(6)]).then(n.bind(null,298)))),{defaultActionMessage:k,description:I}=m.a,v=l.a.lazy((()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(12)]).then(n.bind(null,299)))),C=[({core:e,plugins:t})=>({id:A.b.MONITOR_STATUS,description:T,iconClass:"uptimeApp",documentationUrl:e=>`${e.links.observability.monitorStatus}`,ruleParamsExpression:n=>l.a.createElement(f,{core:e,plugins:t,params:n}),validate:e=>(b||async function(){const{validateMonitorStatusParams:e}=await Promise.all([n.e(0),n.e(13)]).then(n.bind(null,294));b=e}(),b?b(e):{}),defaultActionMessage:R,requiresAppContext:!1,format:({fields:e})=>({reason:e[_.ALERT_REASON]||"",link:d({monitorId:e["monitor.id"],dateRangeEnd:e[_.ALERT_STATUS]===_.ALERT_STATUS_ACTIVE?"now":e[_.ALERT_END],dateRangeStart:p()(new Date(e[_.ALERT_START])).subtract("5","m").toISOString(),filters:{"observer.geo.name":[e["observer.geo.name"][0]]}})})}),({core:e,plugins:t})=>({id:A.b.TLS,iconClass:"uptimeApp",documentationUrl:e=>`${e.links.observability.tlsCertificate}`,ruleParamsExpression:n=>l.a.createElement(O,{core:e,plugins:t,params:n}),description:S,validate:()=>({errors:{}}),defaultActionMessage:L,requiresAppContext:!1,format:({fields:e})=>({reason:e[_.ALERT_REASON]||"",link:`/app/uptime${g.a}`})}),({core:e,plugins:t})=>({id:A.b.DURATION_ANOMALY,iconClass:"uptimeApp",documentationUrl:e=>`${e.links.observability.uptimeDurationAnomaly}`,ruleParamsExpression:n=>l.a.createElement(v,{core:e,plugins:t,params:n}),description:I,validate:()=>({errors:{}}),defaultActionMessage:k,requiresAppContext:!0,format:({fields:e})=>({reason:e[_.ALERT_REASON]||"",link:d({monitorId:e["monitor.id"],dateRangeEnd:e[_.ALERT_STATUS]===_.ALERT_STATUS_ACTIVE?"now":e[_.ALERT_END],dateRangeStart:p()(new Date(e["anomaly.start"])).subtract("5","m").toISOString()})})})],D=[({core:e,plugins:t})=>({id:A.b.TLS_LEGACY,iconClass:"uptimeApp",documentationUrl:e=>`${e.ELASTIC_WEBSITE_URL}guide/en/observability/${e.DOC_LINK_VERSION}/tls-certificate-alert.html`,ruleParamsExpression:n=>l.a.createElement(h,{core:e,plugins:t,params:n}),description:U,validate:()=>({errors:{}}),defaultActionMessage:y,requiresAppContext:!1})];var N=n(5);const P=Object(u.lazy)((async()=>{const{SyntheticsPolicyCreateExtensionWrapper:e}=await Promise.all([n.e(0),n.e(1),n.e(4),n.e(10)]).then(n.bind(null,301));return{default:e}})),M=Object(u.lazy)((async()=>{const{SyntheticsPolicyEditExtensionWrapper:e}=await Promise.all([n.e(0),n.e(1),n.e(4),n.e(11)]).then(n.bind(null,297));return{default:e}})),x=Object(u.lazy)((async()=>{const{SyntheticsCustomAssetsExtension:e}=await n.e(15).then(n.bind(null,295));return{default:e}}));var w=n(8);const j=(e,t)=>`${e}: "${t}"`,V={id:w.uptimeOverviewLocatorID,getLocation:async function({ip:e,host:t,container:n,pod:r}){const a=[];if(t&&a.push(j("host.name",t)),n&&a.push(j("container.id",n)),r&&a.push(j("kubernetes.pod.uid",r)),e){const n=t?"host":"monitor";a.push(j(`${n}.ip`,e))}const i=a.join(" OR ");return{app:"uptime",path:0===a.length?g.l:g.l+`?search=${i}`,state:{}}}};class plugin_UptimePlugin{constructor(e){this.initContext=e}setup(e,t){t.home&&t.home.featureCatalogue.register({id:N.a.ID,title:N.a.TITLE,description:N.a.DESCRIPTION,icon:"uptimeApp",path:"/app/uptime",showOnHomePage:!1,category:s.FeatureCatalogueCategory.DATA});const u=async()=>{const[t]=await e.getStartServices(),{UptimeDataHelper:r}=await Promise.all([n.e(0),n.e(1),n.e(2),n.e(14)]).then(n.bind(null,293));return r(t)};t.share.url.locators.create(V),t.observability.dashboard.register({appName:"synthetics",hasData:async()=>{const e=await u(),t=await e.indexStatus();return{hasData:t.docCount>0,indices:t.indices}},fetchData:async e=>{const t=await u();return await t.overviewData(e)}}),t.observability.navigation.registerSections(Object(r.from)(e.getStartServices()).pipe(Object(a.map)((([e])=>e.application.capabilities.uptime.show?[{label:"Uptime",sortKey:500,entries:[{label:i.i18n.translate("xpack.uptime.overview.heading",{defaultMessage:"Monitors"}),app:"uptime",path:"/",matchFullPath:!0,ignoreTrailingSlash:!0},{label:i.i18n.translate("xpack.uptime.certificatesPage.heading",{defaultMessage:"TLS Certificates"}),app:"uptime",path:"/certificates",matchFullPath:!0}]}]:[]))));const{observabilityRuleTypeRegistry:l}=t.observability;e.getStartServices().then((([e,n])=>{C.forEach((t=>{const r=t({core:e,plugins:n});n.triggersActionsUi&&!n.triggersActionsUi.ruleTypeRegistry.has(r.id)&&l.register(r)})),D.forEach((r=>{const a=r({core:e,plugins:n});n.triggersActionsUi&&!n.triggersActionsUi.ruleTypeRegistry.has(a.id)&&t.triggersActionsUi.ruleTypeRegistry.register(a)}))})),e.application.register({id:N.a.ID,euiIconType:"logoObservability",order:8400,title:N.a.TITLE,category:o.DEFAULT_APP_CATEGORIES.observability,keywords:["Synthetics","pings","checks","availability","response duration","response time","outside in","reachability","reachable","digital","performance","web performance","web perf"],deepLinks:[{id:"Down monitors",title:"Down monitors",path:"/?statusFilter=down"},{id:"Certificates",title:"TLS Certificates",path:"/certificates"},{id:"Settings",title:"Settings",path:"/settings"}],mount:async r=>{const[a,i]=await e.getStartServices(),{renderApp:o}=await Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(8)]).then(n.bind(null,296));return o(a,t,i,r,this.initContext.env.mode.dev)}})}start(e,t){if(t.fleet){const{registerExtension:e}=t.fleet;e({package:"synthetics",view:"package-policy-create",Component:P}),e({package:"synthetics",view:"package-policy-edit",useLatestPackageVersion:!0,Component:M}),e({package:"synthetics",view:"package-detail-assets",Component:x})}}stop(){}}const F=e=>new plugin_UptimePlugin(e)},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t){e.exports=__kbnSharedDeps__.StyledComponents},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaReact/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.ElasticCharts},function(e,t){e.exports=__kbnSharedDeps__.TsLib},function(e,t){e.exports=__kbnSharedDeps__.KbnDatemath},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/ml/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.LodashFp},function(e,t){e.exports=__kbnSharedDeps__.ElasticEuiChartsTheme},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.MomentTimezone},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/ml/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.KbnUiTheme},function(e,t){e.exports=__kbnSharedDeps__.RisonNode},function(e,t){e.exports=__kbnSharedDeps__.ElasticEuiLibServicesFormat},function(e,t){e.exports=__kbnSharedDeps__.ElasticNumeral},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/fleet/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/fleet/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))}]);