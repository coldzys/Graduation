!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t,n){e.exports=n(10)(2)},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,n){"use strict";n.r(t),n.d(t,"REPORT_INTERVAL_MS",(function(){return s})),n.d(t,"LOCALSTORAGE_KEY",(function(){return r})),n.d(t,"PATH_TO_ADVANCED_SETTINGS",(function(){return i})),n.d(t,"PAYLOAD_CONTENT_ENCODING",(function(){return a})),n.d(t,"ENDPOINT_VERSION",(function(){return o})),n.d(t,"ENDPOINT_STAGING",(function(){return c})),n.d(t,"ENDPOINT_PROD",(function(){return l})),n.d(t,"TELEMETRY_CHANNELS",(function(){return h}));const s=864e5,r="telemetry.data",i="/app/management/kibana/settings",a="aes256gcm",o="v2",c="https://telemetry-staging.elastic.co/",l="https://telemetry.elastic.co/",h={SNAPSHOT_CHANNEL:"xpack",OPT_IN_STATUS_CHANNEL:"opt_in_status"}},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){n.r(t);var s=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t){const n=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:n,MAX_SAFE_COMPONENT_LENGTH:16}},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){const{MAX_SAFE_COMPONENT_LENGTH:s}=n(9),r=n(12),i=(t=e.exports={}).re=[],a=t.src=[],o=t.t={};let c=0;const l=(e,t,n)=>{const s=c++;r(s,t),o[e]=s,a[s]=t,i[s]=new RegExp(t,n?"g":void 0)};l("NUMERICIDENTIFIER","0|[1-9]\\d*"),l("NUMERICIDENTIFIERLOOSE","[0-9]+"),l("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),l("MAINVERSION",`(${a[o.NUMERICIDENTIFIER]})\\.(${a[o.NUMERICIDENTIFIER]})\\.(${a[o.NUMERICIDENTIFIER]})`),l("MAINVERSIONLOOSE",`(${a[o.NUMERICIDENTIFIERLOOSE]})\\.(${a[o.NUMERICIDENTIFIERLOOSE]})\\.(${a[o.NUMERICIDENTIFIERLOOSE]})`),l("PRERELEASEIDENTIFIER",`(?:${a[o.NUMERICIDENTIFIER]}|${a[o.NONNUMERICIDENTIFIER]})`),l("PRERELEASEIDENTIFIERLOOSE",`(?:${a[o.NUMERICIDENTIFIERLOOSE]}|${a[o.NONNUMERICIDENTIFIER]})`),l("PRERELEASE",`(?:-(${a[o.PRERELEASEIDENTIFIER]}(?:\\.${a[o.PRERELEASEIDENTIFIER]})*))`),l("PRERELEASELOOSE",`(?:-?(${a[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a[o.PRERELEASEIDENTIFIERLOOSE]})*))`),l("BUILDIDENTIFIER","[0-9A-Za-z-]+"),l("BUILD",`(?:\\+(${a[o.BUILDIDENTIFIER]}(?:\\.${a[o.BUILDIDENTIFIER]})*))`),l("FULLPLAIN",`v?${a[o.MAINVERSION]}${a[o.PRERELEASE]}?${a[o.BUILD]}?`),l("FULL",`^${a[o.FULLPLAIN]}$`),l("LOOSEPLAIN",`[v=\\s]*${a[o.MAINVERSIONLOOSE]}${a[o.PRERELEASELOOSE]}?${a[o.BUILD]}?`),l("LOOSE",`^${a[o.LOOSEPLAIN]}$`),l("GTLT","((?:<|>)?=?)"),l("XRANGEIDENTIFIERLOOSE",`${a[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),l("XRANGEIDENTIFIER",`${a[o.NUMERICIDENTIFIER]}|x|X|\\*`),l("XRANGEPLAIN",`[v=\\s]*(${a[o.XRANGEIDENTIFIER]})(?:\\.(${a[o.XRANGEIDENTIFIER]})(?:\\.(${a[o.XRANGEIDENTIFIER]})(?:${a[o.PRERELEASE]})?${a[o.BUILD]}?)?)?`),l("XRANGEPLAINLOOSE",`[v=\\s]*(${a[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[o.XRANGEIDENTIFIERLOOSE]})(?:${a[o.PRERELEASELOOSE]})?${a[o.BUILD]}?)?)?`),l("XRANGE",`^${a[o.GTLT]}\\s*${a[o.XRANGEPLAIN]}$`),l("XRANGELOOSE",`^${a[o.GTLT]}\\s*${a[o.XRANGEPLAINLOOSE]}$`),l("COERCE",`(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?(?:$|[^\\d])`),l("COERCERTL",a[o.COERCE],!0),l("LONETILDE","(?:~>?)"),l("TILDETRIM",`(\\s*)${a[o.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",l("TILDE",`^${a[o.LONETILDE]}${a[o.XRANGEPLAIN]}$`),l("TILDELOOSE",`^${a[o.LONETILDE]}${a[o.XRANGEPLAINLOOSE]}$`),l("LONECARET","(?:\\^)"),l("CARETTRIM",`(\\s*)${a[o.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",l("CARET",`^${a[o.LONECARET]}${a[o.XRANGEPLAIN]}$`),l("CARETLOOSE",`^${a[o.LONECARET]}${a[o.XRANGEPLAINLOOSE]}$`),l("COMPARATORLOOSE",`^${a[o.GTLT]}\\s*(${a[o.LOOSEPLAIN]})$|^$`),l("COMPARATOR",`^${a[o.GTLT]}\\s*(${a[o.FULLPLAIN]})$|^$`),l("COMPARATORTRIM",`(\\s*)${a[o.GTLT]}\\s*(${a[o.LOOSEPLAIN]}|${a[o.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",l("HYPHENRANGE",`^\\s*(${a[o.XRANGEPLAIN]})\\s+-\\s+(${a[o.XRANGEPLAIN]})\\s*$`),l("HYPHENRANGELOOSE",`^\\s*(${a[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${a[o.XRANGEPLAINLOOSE]})\\s*$`),l("STAR","(<|>)?=?\\s*\\*"),l("GTE0","^\\s*>=\\s*0.0.0\\s*$"),l("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")},function(e,t,n){(function(t){const n="object"==typeof t&&Object({IS_KIBANA_DISTRIBUTABLE:"true"})&&Object({IS_KIBANA_DISTRIBUTABLE:"true"}).NODE_DEBUG&&/\bsemver\b/i.test(Object({IS_KIBANA_DISTRIBUTABLE:"true"}).NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=n}).call(this,n(19))},function(e,t){const n=["includePrerelease","loose","rtl"];e.exports=e=>e?"object"!=typeof e?{loose:!0}:n.filter((t=>e[t])).reduce(((e,t)=>(e[t]=!0,e)),{}):{}},function(e,t){e.exports=__kbnSharedDeps__.RxjsOperators},function(e,t,n){n.r(t);var s=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))},function(e,t,n){const{MAX_LENGTH:s}=n(9),{re:r,t:i}=n(11),a=n(20),o=n(13);e.exports=(e,t)=>{if(t=o(t),e instanceof a)return e;if("string"!=typeof e)return null;if(e.length>s)return null;if(!(t.loose?r[i.LOOSE]:r[i.FULL]).test(e))return null;try{return new a(e,t)}catch(e){return null}}},function(e,t,n){n(18),__kbnBundles__.define("plugin/telemetry/public",n,22),__kbnBundles__.define("plugin/telemetry/common/constants",n,4)},function(e,t,n){n.p=window.__kbnPublicPath__.telemetry},function(e,t,n){e.exports=n(10)(954)},function(e,t,n){const s=n(12),{MAX_LENGTH:r,MAX_SAFE_INTEGER:i}=n(9),{re:a,t:o}=n(11),c=n(13),{compareIdentifiers:l}=n(21);class SemVer{constructor(e,t){if(t=c(t),e instanceof SemVer){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid Version: ${e}`);if(e.length>r)throw new TypeError(`version is longer than ${r} characters`);s("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const n=e.trim().match(t.loose?a[o.LOOSE]:a[o.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<i)return t}return e})):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(s("SemVer.compare",this.version,this.options,e),!(e instanceof SemVer)){if("string"==typeof e&&e===this.version)return 0;e=new SemVer(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof SemVer||(e=new SemVer(e,this.options)),l(this.major,e.major)||l(this.minor,e.minor)||l(this.patch,e.patch)}comparePre(e){if(e instanceof SemVer||(e=new SemVer(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const n=this.prerelease[t],r=e.prerelease[t];if(s("prerelease compare",t,n,r),void 0===n&&void 0===r)return 0;if(void 0===r)return 1;if(void 0===n)return-1;if(n!==r)return l(n,r)}while(++t)}compareBuild(e){e instanceof SemVer||(e=new SemVer(e,this.options));let t=0;do{const n=this.build[t],r=e.build[t];if(s("prerelease compare",t,n,r),void 0===n&&void 0===r)return 0;if(void 0===r)return 1;if(void 0===n)return-1;if(n!==r)return l(n,r)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error(`invalid increment argument: ${e}`)}return this.format(),this.raw=this.version,this}}e.exports=SemVer},function(e,t){const n=/^[0-9]+$/,s=(e,t)=>{const s=n.test(e),r=n.test(t);return s&&r&&(e=+e,t=+t),e===t?0:s&&!r?-1:r&&!s?1:e<t?-1:1};e.exports={compareIdentifiers:s,rcompareIdentifiers:(e,t)=>s(t,e)}},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return N}));var s=n(0),r=n.n(s),i=n(8),a=n(14),o=n(4),c=n(15);function l(e){return!e||isNaN(e)||Date.now()-e>o.REPORT_INTERVAL_MS}class telemetry_sender_TelemetrySender{static getRetryDelay(e){return 1e3*Math.min(Math.pow(2,e),64)*60}constructor(e,t){r()(this,"lastReported",void 0),r()(this,"storage",void 0),r()(this,"sendIfDue$",void 0),r()(this,"retryCount",0),r()(this,"updateLastReported",(e=>{this.lastReported=e,this.storage.set(o.LOCALSTORAGE_KEY,{lastReport:`${this.lastReported}`})})),r()(this,"isReportDue",(async()=>{if(!l(this.lastReported))return!1;const e=await this.telemetryService.fetchLastReported();return e&&this.updateLastReported(e),l(e)})),r()(this,"isActiveWindow",(()=>document.hasFocus())),r()(this,"shouldSendReport",(async()=>!!(this.isActiveWindow()&&this.telemetryService.canSendTelemetry()&&await this.isReportDue())&&(await this.refreshConfig(),this.telemetryService.canSendTelemetry()))),r()(this,"sendIfDue",(async()=>{await this.shouldSendReport()&&(this.updateLastReported(Date.now()),this.retryCount=0,await this.sendUsageData())})),r()(this,"sendUsageData",(async()=>{try{const e=this.telemetryService.getTelemetryUrl(),t=await this.telemetryService.fetchTelemetry();await Promise.all(t.map((async({clusterUuid:t,stats:n})=>await fetch(e,{method:"POST",headers:{"Content-Type":"application/json","X-Elastic-Stack-Version":this.telemetryService.currentKibanaVersion,"X-Elastic-Cluster-ID":t,"X-Elastic-Content-Encoding":o.PAYLOAD_CONTENT_ENCODING},body:n})))),await this.telemetryService.updateLastReported().catch((()=>{}))}catch(e){this.retryCount=this.retryCount+1,this.retryCount<20?window.setTimeout(this.sendUsageData,telemetry_sender_TelemetrySender.getRetryDelay(this.retryCount)):console.warn(`TelemetrySender.sendUsageData exceeds number of retry attempts with ${e.message}`)}})),r()(this,"startChecking",(()=>{this.sendIfDue$||(this.sendIfDue$=Object(i.merge)(Object(i.interval)(6e4),Object(i.fromEvent)(window,"focus")).pipe(Object(a.exhaustMap)(this.sendIfDue)).subscribe())})),r()(this,"stop",(()=>{var e;null===(e=this.sendIfDue$)||void 0===e||e.unsubscribe()})),this.telemetryService=e,this.refreshConfig=t,this.storage=new c.Storage(window.localStorage);const n=this.storage.get(o.LOCALSTORAGE_KEY);n&&(this.lastReported=parseInt(n.lastReport,10))}}var h=n(6),u=n(16),d=n.n(u);function p(e){try{return d()(e)}catch(e){return null}}function m({channelName:e,env:t}){const n=function(e){switch(e){case"prod":return o.ENDPOINT_PROD;case"staging":return o.ENDPOINT_STAGING;default:throw new Error(`Unknown telemetry endpoint env ${e}.`)}}(t),s=function(e){switch(e){case"snapshot":return o.TELEMETRY_CHANNELS.SNAPSHOT_CHANNEL;case"optInStatus":return o.TELEMETRY_CHANNELS.OPT_IN_STATUS_CHANNEL;default:throw new Error(`Unknown telemetry channel ${e}.`)}}(e);return`${n}${s}/${o.ENDPOINT_VERSION}/send`}class telemetry_service_TelemetryService{constructor({config:e,http:t,isScreenshotMode:n,notifications:s,currentKibanaVersion:i,reportOptInStatusChange:a=!0}){r()(this,"http",void 0),r()(this,"reportOptInStatusChange",void 0),r()(this,"notifications",void 0),r()(this,"defaultConfig",void 0),r()(this,"isScreenshotMode",void 0),r()(this,"updatedConfig",void 0),r()(this,"currentKibanaVersion",void 0),r()(this,"getCanChangeOptInStatus",(()=>this.config.allowChangingOptInStatus)),r()(this,"getOptInStatusUrl",(()=>{const{sendUsageTo:e}=this.config;return m({channelName:"optInStatus",env:e})})),r()(this,"getTelemetryUrl",(()=>{const{sendUsageTo:e}=this.config;return m({channelName:"snapshot",env:e})})),r()(this,"getIsOptedIn",(()=>this.isOptedIn)),r()(this,"canSendTelemetry",(()=>!this.isScreenshotMode&&this.getIsOptedIn())),r()(this,"fetchLastReported",(async()=>{const e=await this.http.get("/api/telemetry/v2/last_reported");return null==e?void 0:e.lastReported})),r()(this,"updateLastReported",(async()=>this.http.put("/api/telemetry/v2/last_reported"))),r()(this,"fetchExample",(async()=>await this.fetchTelemetry({unencrypted:!0,refreshCache:!0}))),r()(this,"fetchTelemetry",(async({unencrypted:e=!1,refreshCache:t=!1}={})=>this.http.post("/api/telemetry/v2/clusters/_stats",{body:JSON.stringify({unencrypted:e,refreshCache:t})}))),r()(this,"setOptIn",(async e=>{if(!this.getCanChangeOptInStatus())return!1;try{const t=await this.http.post("/api/telemetry/v2/optIn",{body:JSON.stringify({enabled:e})});this.reportOptInStatusChange&&await this.reportOptInStatus(t),this.isOptedIn=e}catch(e){return this.notifications.toasts.addError(e,{title:h.i18n.translate("telemetry.optInErrorToastTitle",{defaultMessage:"Error"}),toastMessage:h.i18n.translate("telemetry.optInErrorToastText",{defaultMessage:"An error occurred while trying to set the usage statistics preference."})}),!1}return!0})),r()(this,"setUserHasSeenNotice",(async()=>{try{await this.http.put("/api/telemetry/v2/userHasSeenNotice"),this.userHasSeenOptedInNotice=!0}catch(e){this.notifications.toasts.addError(e,{title:h.i18n.translate("telemetry.optInNoticeSeenErrorTitle",{defaultMessage:"Error"}),toastMessage:h.i18n.translate("telemetry.optInNoticeSeenErrorToastText",{defaultMessage:"An error occurred dismissing the notice"})}),this.userHasSeenOptedInNotice=!1}})),r()(this,"reportOptInStatus",(async e=>{const t=this.getOptInStatusUrl();try{await Promise.all(e.map((async({clusterUuid:e,stats:n})=>await fetch(t,{method:"POST",headers:{"Content-Type":"application/json","X-Elastic-Stack-Version":this.currentKibanaVersion,"X-Elastic-Cluster-ID":e,"X-Elastic-Content-Encoding":o.PAYLOAD_CONTENT_ENCODING},body:n}))))}catch(e){}})),this.defaultConfig=e,this.isScreenshotMode=n,this.reportOptInStatusChange=a,this.notifications=s,this.currentKibanaVersion=i,this.http=t}set config(e){this.updatedConfig=e}get config(){return{...this.defaultConfig,...this.updatedConfig}}get isOptedIn(){return Boolean(this.config.optIn)}set isOptedIn(e){this.config={...this.config,optIn:e}}get userHasSeenOptedInNotice(){return this.config.telemetryNotifyUserAboutOptInDefault}set userHasSeenOptedInNotice(e){this.config={...this.config,telemetryNotifyUserAboutOptInDefault:e}}getUserShouldSeeOptInNotice(){var e;return null!==(e=!this.config.hidePrivacyStatement&&this.config.telemetryNotifyUserAboutOptInDefault&&this.config.userCanChangeSettings)&&void 0!==e&&e}get userCanChangeSettings(){var e;return null!==(e=this.config.userCanChangeSettings)&&void 0!==e&&e}set userCanChangeSettings(e){this.config={...this.config,userCanChangeSettings:e}}}var E=n(5),I=n.n(E),g=n(2),O=n(3),S=n(1);class opted_in_notice_banner_OptedInNoticeBanner extends E.PureComponent{render(){const{onSeenBanner:e,http:t,telemetryConstants:n}=this.props,s=t.basePath.get(),r=h.i18n.translate("telemetry.telemetryOptedInNoticeTitle",{defaultMessage:"Help us improve the Elastic Stack"});return Object(S.jsx)(g.EuiCallOut,{title:r},Object(S.jsx)(O.FormattedMessage,{id:"telemetry.telemetryOptedInNoticeDescription",defaultMessage:"To learn about how usage data helps us manage and improve our products and services, see our {privacyStatementLink}. To stop collection, {disableLink}.",values:{privacyStatementLink:Object(S.jsx)(g.EuiLink,{onClick:e,href:n.getPrivacyStatementUrl(),target:"_blank",rel:"noopener"},Object(S.jsx)(O.FormattedMessage,{id:"telemetry.telemetryOptedInPrivacyStatement",defaultMessage:"Privacy Statement"})),disableLink:Object(S.jsx)(g.EuiLink,{href:`${s}${o.PATH_TO_ADVANCED_SETTINGS}`,onClick:e},Object(S.jsx)(O.FormattedMessage,{id:"telemetry.telemetryOptedInDisableUsage",defaultMessage:"disable usage data here"}))}}),Object(S.jsx)(g.EuiSpacer,{size:"s"}),Object(S.jsx)(g.EuiButton,{size:"s",onClick:e},Object(S.jsx)(O.FormattedMessage,{id:"telemetry.telemetryOptedInDismissMessage",defaultMessage:"Dismiss"})))}}var y=n(7);class opt_in_message_OptInMessage extends E.PureComponent{render(){return Object(S.jsx)(E.Fragment,null,Object(S.jsx)(O.FormattedMessage,{id:"telemetry.telemetryBannerDescription",defaultMessage:"Want to help us improve the Elastic Stack? Data usage collection is currently disabled. Enabling data usage collection helps us manage and improve our products and services. See our {privacyStatementLink} for more details.",values:{privacyStatementLink:Object(S.jsx)(g.EuiLink,{href:this.props.telemetryConstants.getPrivacyStatementUrl(),target:"_blank",rel:"noopener"},Object(S.jsx)(O.FormattedMessage,{id:"telemetry.welcomeBanner.telemetryConfigDetailsDescription.telemetryPrivacyStatementLinkText",defaultMessage:"Privacy Statement"}))}}))}}class opt_in_banner_OptInBanner extends E.PureComponent{render(){const{onChangeOptInClick:e,telemetryConstants:t}=this.props,n=Object(S.jsx)(O.FormattedMessage,{id:"telemetry.welcomeBanner.title",defaultMessage:"Help us improve the Elastic Stack"});return Object(S.jsx)(g.EuiCallOut,{iconType:"questionInCircle",title:n},Object(S.jsx)(opt_in_message_OptInMessage,{telemetryConstants:t}),Object(S.jsx)(g.EuiSpacer,{size:"s"}),Object(S.jsx)(g.EuiFlexGroup,{gutterSize:"s",alignItems:"center"},Object(S.jsx)(g.EuiFlexItem,{grow:!1},Object(S.jsx)(g.EuiButton,{size:"s","data-test-subj":"enable",onClick:()=>e(!0)},Object(S.jsx)(O.FormattedMessage,{id:"telemetry.welcomeBanner.enableButtonLabel",defaultMessage:"Enable"}))),Object(S.jsx)(g.EuiFlexItem,{grow:!1},Object(S.jsx)(g.EuiButton,{size:"s","data-test-subj":"disable",onClick:()=>e(!1)},Object(S.jsx)(O.FormattedMessage,{id:"telemetry.welcomeBanner.disableButtonLabel",defaultMessage:"Disable"})))))}}class telemetry_notifications_TelemetryNotifications{constructor({http:e,overlays:t,telemetryService:n,telemetryConstants:s}){r()(this,"http",void 0),r()(this,"overlays",void 0),r()(this,"telemetryConstants",void 0),r()(this,"telemetryService",void 0),r()(this,"optedInNoticeBannerId",void 0),r()(this,"optInBannerId",void 0),r()(this,"shouldShowOptedInNoticeBanner",(()=>{const e=this.telemetryService.getUserShouldSeeOptInNotice();return!(void 0!==this.optedInNoticeBannerId)&&e})),r()(this,"renderOptedInNoticeBanner",(()=>{const e=function({onSeen:e,overlays:t,http:n,telemetryConstants:s}){const r=Object(y.toMountPoint)(Object(S.jsx)(opted_in_notice_banner_OptedInNoticeBanner,{onSeenBanner:e,http:n,telemetryConstants:s}));return t.banners.add(r,1e4)}({http:this.http,onSeen:this.setOptedInNoticeSeen,overlays:this.overlays,telemetryConstants:this.telemetryConstants});this.optedInNoticeBannerId=e})),r()(this,"shouldShowOptInBanner",(()=>{const e=this.telemetryService.getIsOptedIn();return!(void 0!==this.optInBannerId)&&null===e})),r()(this,"renderOptInBanner",(()=>{const e=function({setOptIn:e,overlays:t,telemetryConstants:n}){const s=Object(y.toMountPoint)(Object(S.jsx)(opt_in_banner_OptInBanner,{onChangeOptInClick:e,telemetryConstants:n}));return t.banners.add(s,1e4)}({setOptIn:this.onSetOptInClick,overlays:this.overlays,telemetryConstants:this.telemetryConstants});this.optInBannerId=e})),r()(this,"onSetOptInClick",(async e=>{this.optInBannerId&&(this.overlays.banners.remove(this.optInBannerId),this.optInBannerId=void 0),await this.telemetryService.setOptIn(e)})),r()(this,"setOptedInNoticeSeen",(async()=>{this.optedInNoticeBannerId&&(this.overlays.banners.remove(this.optedInNoticeBannerId),this.optedInNoticeBannerId=void 0),await this.telemetryService.setUserHasSeenNotice()})),this.telemetryService=n,this.http=e,this.overlays=t,this.telemetryConstants=s}}function f(e){return{getPrivacyStatementUrl:()=>e.links.legal.privacyStatement}}class plugin_TelemetryPlugin{constructor(e){r()(this,"currentKibanaVersion",void 0),r()(this,"config",void 0),r()(this,"telemetrySender",void 0),r()(this,"telemetryNotifications",void 0),r()(this,"telemetryService",void 0),r()(this,"canUserChangeSettings",!0),r()(this,"savedObjectsClient",void 0),this.currentKibanaVersion=e.env.packageInfo.version,this.config=e.config.get()}setup({http:e,notifications:t,getStartServices:n},{screenshotMode:s,home:r}){const i=this.config,a=this.currentKibanaVersion;let o;return this.telemetryService=new telemetry_service_TelemetryService({config:i,isScreenshotMode:s.isScreenshotMode(),http:e,notifications:t,currentKibanaVersion:a}),n().then((([{docLinks:e}])=>{o=f(e)})),this.telemetrySender=new telemetry_sender_TelemetrySender(this.telemetryService,(async()=>{await this.refreshConfig()})),r&&!this.config.hidePrivacyStatement&&(r.welcomeScreen.registerOnRendered((()=>{var e,t;null!==(e=this.telemetryService)&&void 0!==e&&e.userCanChangeSettings&&(null===(t=this.telemetryNotifications)||void 0===t||t.setOptedInNoticeSeen())})),r.welcomeScreen.registerTelemetryNoticeRenderer((()=>function(e,t,n){return Object(S.jsx)(I.a.Fragment,null,Object(S.jsx)(g.EuiTextColor,{className:"euiText--small",color:"subdued"},Object(S.jsx)(O.FormattedMessage,{id:"telemetry.dataManagementDisclaimerPrivacy",defaultMessage:"To learn about how usage data helps us manage and improve our products and services, see our "}),Object(S.jsx)(g.EuiLink,{href:n.getPrivacyStatementUrl(),target:"_blank",rel:"noopener"},Object(S.jsx)(O.FormattedMessage,{id:"telemetry.dataManagementDisclaimerPrivacyLink",defaultMessage:"Privacy Statement."})),function(e,t){return e.userCanChangeSettings&&e.getCanChangeOptInStatus()?e.getIsOptedIn()?Object(S.jsx)(I.a.Fragment,null,Object(S.jsx)(O.FormattedMessage,{id:"telemetry.dataManagementDisableCollection",defaultMessage:" To stop collection, "}),Object(S.jsx)(g.EuiLink,{href:t("management/kibana/settings")},Object(S.jsx)(O.FormattedMessage,{id:"telemetry.dataManagementDisableCollectionLink",defaultMessage:"disable usage data here."}))):Object(S.jsx)(I.a.Fragment,null,Object(S.jsx)(O.FormattedMessage,{id:"telemetry.dataManagementEnableCollection",defaultMessage:" To start collection, "}),Object(S.jsx)(g.EuiLink,{href:t("management/kibana/settings")},Object(S.jsx)(O.FormattedMessage,{id:"telemetry.dataManagementEnableCollectionLink",defaultMessage:"enable usage data here."}))):null}(e,t)),Object(S.jsx)(g.EuiSpacer,{size:"xs"}))}(this.telemetryService,e.basePath.prepend,o)))),{telemetryService:this.getTelemetryServicePublicApis()}}start({http:e,overlays:t,application:n,savedObjects:s,docLinks:r}){if(!this.telemetryService)throw Error("Telemetry plugin failed to initialize properly.");this.canUserChangeSettings=this.getCanUserChangeSettings(n),this.telemetryService.userCanChangeSettings=this.canUserChangeSettings;const i=f(r),a=new telemetry_notifications_TelemetryNotifications({http:e,overlays:t,telemetryService:this.telemetryService,telemetryConstants:i});return this.telemetryNotifications=a,this.savedObjectsClient=s.client,n.currentAppId$.subscribe((async()=>{if(this.getIsUnauthenticated(e))return;const t=await this.refreshConfig(),n=null==t?void 0:t.banner;this.maybeStartTelemetryPoller(),n&&(this.maybeShowOptedInNotificationBanner(),this.maybeShowOptInBanner())})),{telemetryService:this.getTelemetryServicePublicApis(),telemetryNotifications:{setOptedInNoticeSeen:()=>a.setOptedInNoticeSeen()},telemetryConstants:i}}stop(){var e;null===(e=this.telemetrySender)||void 0===e||e.stop()}getTelemetryServicePublicApis(){const e=this.telemetryService;return{getIsOptedIn:()=>e.getIsOptedIn(),setOptIn:t=>e.setOptIn(t),canSendTelemetry:()=>e.canSendTelemetry(),userCanChangeSettings:e.userCanChangeSettings,getCanChangeOptInStatus:()=>e.getCanChangeOptInStatus(),fetchExample:()=>e.fetchExample()}}async refreshConfig(){if(this.savedObjectsClient&&this.telemetryService){const e=await this.getTelemetrySavedObject(this.savedObjectsClient),t=await this.updateConfigsBasedOnSavedObjects(e);return this.telemetryService.config=t,t}}getCanUserChangeSettings(e){var t,n,s;return null===(t=null===(n=e.capabilities)||void 0===n||null===(s=n.savedObjectsManagement)||void 0===s?void 0:s.edit)||void 0===t||t}getIsUnauthenticated(e){const{anonymousPaths:t}=e;return t.isAnonymous(window.location.pathname)}maybeStartTelemetryPoller(){this.telemetrySender&&this.telemetrySender.startChecking()}maybeShowOptedInNotificationBanner(){this.telemetryNotifications&&this.telemetryNotifications.shouldShowOptedInNoticeBanner()&&this.telemetryNotifications.renderOptedInNoticeBanner()}maybeShowOptInBanner(){this.telemetryNotifications&&this.telemetryNotifications.shouldShowOptInBanner()&&this.telemetryNotifications.renderOptInBanner()}async updateConfigsBasedOnSavedObjects(e){const t=this.config.sendUsageFrom,n=this.config.optIn,s=this.config.allowChangingOptInStatus,r=this.currentKibanaVersion,i=function({telemetrySavedObject:e,configTelemetryAllowChangingOptInStatus:t}){return e?void 0===e.allowChangingOptInStatus?t:e.allowChangingOptInStatus:t}({configTelemetryAllowChangingOptInStatus:s,telemetrySavedObject:e}),a=(({telemetrySavedObject:e,currentKibanaVersion:t,allowChangingOptInStatus:n,configTelemetryOptIn:s})=>{if("boolean"==typeof s&&!n)return s;if(!1===e)return!1;if(null===e||"boolean"!=typeof e.enabled)return s;const r=e.enabled;if(!0===r)return r;const i=e.lastVersionChecked;if("string"!=typeof i)return null;if(i===t)return r;const a=p(i),o=p(t);return null==a||null==o||o.major>a.major||o.major===a.major&&o.minor>a.minor?null:r})({configTelemetryOptIn:n,allowChangingOptInStatus:i,telemetrySavedObject:e,currentKibanaVersion:r}),o=function({telemetrySavedObject:e,configTelemetrySendUsageFrom:t}){return e?void 0===e.sendUsageFrom?t:e.sendUsageFrom:t}({configTelemetrySendUsageFrom:t,telemetrySavedObject:e}),c=function({allowChangingOptInStatus:e,telemetrySavedObject:t,telemetryOptedIn:n,configTelemetryOptIn:s}){return!1!==e&&(!t||!0!==t.userHasSeenNotice)&&!0===n&&!0===s}({telemetrySavedObject:e,allowChangingOptInStatus:i,configTelemetryOptIn:n,telemetryOptedIn:a});return{...this.config,optIn:a,sendUsageFrom:o,telemetryNotifyUserAboutOptInDefault:c,userCanChangeSettings:this.canUserChangeSettings}}async getTelemetrySavedObject(e){try{const{savedObjects:[{attributes:t}]}=await e.bulkGet([{id:"telemetry",type:"telemetry"}]);return t}catch(e){const t=e[Symbol("SavedObjectsClientErrorCode")];if("SavedObjectsClient/notFound"===t)return null;if("SavedObjectsClient/forbidden"===t)return!1;throw e}}}function N(e){return new plugin_TelemetryPlugin(e)}}]);