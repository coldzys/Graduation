/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){e.exports=n(4)(2)},function(e,t,n){"use strict";n.r(t),n.d(t,"ElasticsearchFeature",(function(){return ElasticsearchFeature})),n.d(t,"KibanaFeature",(function(){return kibana_feature_KibanaFeature})),n.d(t,"SubFeature",(function(){return SubFeature}));class ElasticsearchFeature{constructor(e){this.config=e}get id(){return this.config.id}get catalogue(){return this.config.catalogue}get management(){return this.config.management}get privileges(){return this.config.privileges}toRaw(){return{...this.config}}}var r=n(0),i=n.n(r);class SubFeature{constructor(e){this.config=e}get name(){return this.config.name}get privilegeGroups(){return this.config.privilegeGroups}toRaw(){return{...this.config}}}class kibana_feature_KibanaFeature{constructor(e){var t;i()(this,"subFeatures",void 0),this.config=e,this.subFeatures=(null!==(t=e.subFeatures)&&void 0!==t?t:[]).map((e=>new SubFeature(e)))}get id(){return this.config.id}get name(){return this.config.name}get order(){return this.config.order}get category(){return this.config.category}get app(){return this.config.app}get catalogue(){return this.config.catalogue}get management(){return this.config.management}get minimumLicense(){return this.config.minimumLicense}get privileges(){return this.config.privileges}get alerting(){return this.config.alerting}get cases(){return this.config.cases}get excludeFromBasePrivileges(){var e;return null!==(e=this.config.excludeFromBasePrivileges)&&void 0!==e&&e}get reserved(){return this.config.reserved}toRaw(){return{...this.config}}}},function(e,t,n){n(3),__kbnBundles__.define("plugin/features/public",n,5),__kbnBundles__.define("plugin/features/common",n,1)},function(e,t,n){n.p=window.__kbnPublicPath__.features},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){"use strict";n.r(t),n.d(t,"KibanaFeature",(function(){return u.KibanaFeature})),n.d(t,"plugin",(function(){return a}));var r=n(0),i=n.n(r);class features_api_client_FeaturesAPIClient{constructor(e){this.http=e}async getFeatures(){return(await this.http.get("/api/features")).map((e=>new u.KibanaFeature(e)))}}class plugin_FeaturesPlugin{constructor(){i()(this,"apiClient",void 0)}setup(e){this.apiClient=new features_api_client_FeaturesAPIClient(e.http)}start(){return{getFeatures:()=>this.apiClient.getFeatures()}}stop(){}}var u=n(1);const a=()=>new plugin_FeaturesPlugin}]);