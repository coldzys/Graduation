/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.spaces_bundle_jsonpfunction=window.spaces_bundle_jsonpfunction||[]).push([[16],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"SpacesContextWrapperInternal",(function(){return a}));var i=n(1),s=n(22),c=n(0);const a=e=>{const{spacesManager:t,getStartServices:n,feature:a,children:o}=e,[r,u]=Object(i.useState)(),d=Object(i.useMemo)((()=>async function(e,t){const n=await e.getSpaces({includeAuthorizedPurposes:!0}),i=await e.getActiveSpace();return{spacesMap:n.map((({authorizedPurposes:e,disabledFeatures:n,...s})=>{const c=s.id===i.id,a=void 0!==t&&n.includes(t);return{...s,...c&&{isActiveSpace:c},...a&&{isFeatureDisabled:a},isAuthorizedForPurpose:t=>!e||!0===e[t]}})).reduce(((e,t)=>e.set(t.id,t)),new Map),activeSpaceId:i.id}}(t,a)),[t,a]);return Object(i.useEffect)((()=>{n().then((([e])=>{const{application:n,docLinks:i,notifications:c}=e,a={application:n,docLinks:i,notifications:c};u(Object(s.a)(a,t,d))}))}),[n,d,t]),r?Object(c.jsx)(r.Provider,null,o):null}}}]);