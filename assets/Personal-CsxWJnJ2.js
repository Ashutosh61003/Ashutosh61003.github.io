import{r as K,j as f,c as eo,g as af,u as Wg,R as Ua,L as fe,N as Gg,O as Kg,d as lf,e as uf,a as Qg,b as Dt}from"./index-BydIKMOv.js";import{f as Al}from"./firebase-config-CAJnwwiW.js";import{c as qr,X as Yg}from"./x-XoClGlKC.js";import{M as Xg,L as Jg,G as Zg}from"./mail-BsAoxvfC.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=qr("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=qr("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=qr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=qr("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=qr("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=qr("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),sy=()=>{};var Oc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},oy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,u=i+2<n.length,c=u?n[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,y=c&63;u||(y=64,o||(g=64)),r.push(t[d],t[p],t[g],t[y])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):oy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new ay;const g=s<<2|l>>4;if(r.push(g),c!==64){const y=l<<4&240|c>>2;if(r.push(y),p!==64){const S=c<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ay extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ly=function(n){const e=cf(n);return hf.encodeByteArray(e,!0)},to=function(n){return ly(n).replace(/\./g,"")},df=function(n){try{return hf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=()=>uy().__FIREBASE_DEFAULTS__,hy=()=>{if(typeof process>"u"||typeof Oc>"u")return;const n=Oc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},dy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&df(n[1]);return e&&JSON.parse(e)},xo=()=>{try{return sy()||cy()||hy()||dy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ff=n=>{var e,t;return(t=(e=xo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},fy=n=>{const e=ff(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},pf=()=>{var n;return(n=xo())==null?void 0:n.config},mf=n=>{var e;return(e=xo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gf(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[to(JSON.stringify(t)),to(JSON.stringify(o)),""].join(".")}const ki={};function gy(){const n={prod:[],emulator:[]};for(const e of Object.keys(ki))ki[e]?n.emulator.push(e):n.prod.push(e);return n}function yy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let jc=!1;function yf(n,e){if(typeof window>"u"||typeof document>"u"||!$r(window.location.host)||ki[n]===e||ki[n]||jc)return;ki[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=gy().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,y){g.setAttribute("width","24"),g.setAttribute("id",y),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{jc=!0,o()},g}function d(g,y){g.setAttribute("id",y),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=yy(r),y=t("text"),S=document.getElementById(y)||document.createElement("span"),R=t("learnmore"),D=document.getElementById(R)||document.createElement("a"),P=t("preprendIcon"),F=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const j=g.element;l(j),d(D,R);const H=c();u(F,P),j.append(F,S,D,H),document.body.appendChild(j)}s?(S.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _y(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function wy(){var e;const n=(e=xo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ey(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Iy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ty(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vy(){const n=nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function by(){return!wy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ay(){try{return typeof indexedDB=="object"}catch{return!1}}function Sy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="FirebaseError";class dn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=xy,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ky(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new dn(i,l,r)}}function ky(n,e){return n.replace(Cy,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Cy=/\{\$([^}]+)}/g;function Ry(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Lc(s)&&Lc(o)){if(!nr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Lc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ti(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function vi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Py(n,e){const t=new Ny(n,e);return t.subscribe.bind(t)}class Ny{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Dy(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=_a),i.error===void 0&&(i.error=_a),i.complete===void 0&&(i.complete=_a);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _a(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n){return n&&n._delegate?n._delegate:n}class rr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new py;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jy(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Oy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Oy(n){return n===Yn?void 0:n}function jy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ie||(ie={}));const My={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Fy=ie.INFO,Uy={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},By=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Uy[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sl{constructor(e){this.name=e,this._logLevel=Fy,this._logHandler=By,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?My[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const zy=(n,e)=>e.some(t=>n instanceof t);let Mc,Fc;function qy(){return Mc||(Mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $y(){return Fc||(Fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _f=new WeakMap,Ba=new WeakMap,wf=new WeakMap,wa=new WeakMap,xl=new WeakMap;function Hy(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Sn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_f.set(t,n)}).catch(()=>{}),xl.set(e,n),e}function Wy(n){if(Ba.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ba.set(n,e)}let za={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ba.get(n);if(e==="objectStoreNames")return n.objectStoreNames||wf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Sn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gy(n){za=n(za)}function Ky(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ea(this),e,...t);return wf.set(r,e.sort?e.sort():[e]),Sn(r)}:$y().includes(n)?function(...e){return n.apply(Ea(this),e),Sn(_f.get(this))}:function(...e){return Sn(n.apply(Ea(this),e))}}function Qy(n){return typeof n=="function"?Ky(n):(n instanceof IDBTransaction&&Wy(n),zy(n,qy())?new Proxy(n,za):n)}function Sn(n){if(n instanceof IDBRequest)return Hy(n);if(wa.has(n))return wa.get(n);const e=Qy(n);return e!==n&&(wa.set(n,e),xl.set(e,n)),e}const Ea=n=>xl.get(n);function Yy(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),l=Sn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Sn(o.result),u.oldVersion,u.newVersion,Sn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Xy=["get","getKey","getAll","getAllKeys","count"],Jy=["put","add","delete","clear"],Ia=new Map;function Uc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ia.get(e))return Ia.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Jy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Xy.includes(t)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[t](...l),i&&u.done]))[0]};return Ia.set(e,s),s}Gy(n=>({...n,get:(e,t,r)=>Uc(e,t)||n.get(e,t,r),has:(e,t)=>!!Uc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(e_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function e_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qa="@firebase/app",Bc="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Sl("@firebase/app"),t_="@firebase/app-compat",n_="@firebase/analytics-compat",r_="@firebase/analytics",i_="@firebase/app-check-compat",s_="@firebase/app-check",o_="@firebase/auth",a_="@firebase/auth-compat",l_="@firebase/database",u_="@firebase/data-connect",c_="@firebase/database-compat",h_="@firebase/functions",d_="@firebase/functions-compat",f_="@firebase/installations",p_="@firebase/installations-compat",m_="@firebase/messaging",g_="@firebase/messaging-compat",y_="@firebase/performance",__="@firebase/performance-compat",w_="@firebase/remote-config",E_="@firebase/remote-config-compat",I_="@firebase/storage",T_="@firebase/storage-compat",v_="@firebase/firestore",b_="@firebase/ai",A_="@firebase/firestore-compat",S_="firebase",x_="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="[DEFAULT]",k_={[qa]:"fire-core",[t_]:"fire-core-compat",[r_]:"fire-analytics",[n_]:"fire-analytics-compat",[s_]:"fire-app-check",[i_]:"fire-app-check-compat",[o_]:"fire-auth",[a_]:"fire-auth-compat",[l_]:"fire-rtdb",[u_]:"fire-data-connect",[c_]:"fire-rtdb-compat",[h_]:"fire-fn",[d_]:"fire-fn-compat",[f_]:"fire-iid",[p_]:"fire-iid-compat",[m_]:"fire-fcm",[g_]:"fire-fcm-compat",[y_]:"fire-perf",[__]:"fire-perf-compat",[w_]:"fire-rc",[E_]:"fire-rc-compat",[I_]:"fire-gcs",[T_]:"fire-gcs-compat",[v_]:"fire-fst",[A_]:"fire-fst-compat",[b_]:"fire-vertex","fire-js":"fire-js",[S_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Map,C_=new Map,Ha=new Map;function zc(n,e){try{n.container.addComponent(e)}catch(t){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Vr(n){const e=n.name;if(Ha.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;Ha.set(e,n);for(const t of no.values())zc(t,n);for(const t of C_.values())zc(t,n);return!0}function kl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ct(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xn=new Xi("app","Firebase",R_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=x_;function Ef(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:$a,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw xn.create("bad-app-name",{appName:String(i)});if(t||(t=pf()),!t)throw xn.create("no-options");const s=no.get(i);if(s){if(nr(t,s.options)&&nr(r,s.config))return s;throw xn.create("duplicate-app",{appName:i})}const o=new Ly(i);for(const u of Ha.values())o.addComponent(u);const l=new P_(t,r,o);return no.set(i,l),l}function If(n=$a){const e=no.get(n);if(!e&&n===$a&&pf())return Ef();if(!e)throw xn.create("no-app",{appName:n});return e}function kn(n,e,t){let r=k_[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(o.join(" "));return}Vr(new rr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="firebase-heartbeat-database",D_=1,Mi="firebase-heartbeat-store";let Ta=null;function Tf(){return Ta||(Ta=Yy(N_,D_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Mi)}catch(t){console.warn(t)}}}}).catch(n=>{throw xn.create("idb-open",{originalErrorMessage:n.message})})),Ta}async function V_(n){try{const t=(await Tf()).transaction(Mi),r=await t.objectStore(Mi).get(vf(n));return await t.done,r}catch(e){if(e instanceof dn)ln.warn(e.message);else{const t=xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(t.message)}}}async function qc(n,e){try{const r=(await Tf()).transaction(Mi,"readwrite");await r.objectStore(Mi).put(e,vf(n)),await r.done}catch(t){if(t instanceof dn)ln.warn(t.message);else{const r=xn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ln.warn(r.message)}}}function vf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=1024,j_=30;class L_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new F_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$c();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>j_){const o=U_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$c(),{heartbeatsToSend:r,unsentEntries:i}=M_(this._heartbeatsCache.heartbeats),s=to(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ln.warn(t),""}}}function $c(){return new Date().toISOString().substring(0,10)}function M_(n,e=O_){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Hc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class F_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ay()?Sy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await V_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Hc(n){return to(JSON.stringify({version:2,heartbeats:n})).length}function U_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(n){Vr(new rr("platform-logger",e=>new Zy(e),"PRIVATE")),Vr(new rr("heartbeat",e=>new L_(e),"PRIVATE")),kn(qa,Bc,n),kn(qa,Bc,"esm2020"),kn("fire-js","")}B_("");var Wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cn,bf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,w){function b(){}b.prototype=w.prototype,A.D=w.prototype,A.prototype=new b,A.prototype.constructor=A,A.C=function(k,T,v){for(var E=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)E[ue-2]=arguments[ue];return w.prototype[T].apply(k,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,w,b){b||(b=0);var k=Array(16);if(typeof w=="string")for(var T=0;16>T;++T)k[T]=w.charCodeAt(b++)|w.charCodeAt(b++)<<8|w.charCodeAt(b++)<<16|w.charCodeAt(b++)<<24;else for(T=0;16>T;++T)k[T]=w[b++]|w[b++]<<8|w[b++]<<16|w[b++]<<24;w=A.g[0],b=A.g[1],T=A.g[2];var v=A.g[3],E=w+(v^b&(T^v))+k[0]+3614090360&4294967295;w=b+(E<<7&4294967295|E>>>25),E=v+(T^w&(b^T))+k[1]+3905402710&4294967295,v=w+(E<<12&4294967295|E>>>20),E=T+(b^v&(w^b))+k[2]+606105819&4294967295,T=v+(E<<17&4294967295|E>>>15),E=b+(w^T&(v^w))+k[3]+3250441966&4294967295,b=T+(E<<22&4294967295|E>>>10),E=w+(v^b&(T^v))+k[4]+4118548399&4294967295,w=b+(E<<7&4294967295|E>>>25),E=v+(T^w&(b^T))+k[5]+1200080426&4294967295,v=w+(E<<12&4294967295|E>>>20),E=T+(b^v&(w^b))+k[6]+2821735955&4294967295,T=v+(E<<17&4294967295|E>>>15),E=b+(w^T&(v^w))+k[7]+4249261313&4294967295,b=T+(E<<22&4294967295|E>>>10),E=w+(v^b&(T^v))+k[8]+1770035416&4294967295,w=b+(E<<7&4294967295|E>>>25),E=v+(T^w&(b^T))+k[9]+2336552879&4294967295,v=w+(E<<12&4294967295|E>>>20),E=T+(b^v&(w^b))+k[10]+4294925233&4294967295,T=v+(E<<17&4294967295|E>>>15),E=b+(w^T&(v^w))+k[11]+2304563134&4294967295,b=T+(E<<22&4294967295|E>>>10),E=w+(v^b&(T^v))+k[12]+1804603682&4294967295,w=b+(E<<7&4294967295|E>>>25),E=v+(T^w&(b^T))+k[13]+4254626195&4294967295,v=w+(E<<12&4294967295|E>>>20),E=T+(b^v&(w^b))+k[14]+2792965006&4294967295,T=v+(E<<17&4294967295|E>>>15),E=b+(w^T&(v^w))+k[15]+1236535329&4294967295,b=T+(E<<22&4294967295|E>>>10),E=w+(T^v&(b^T))+k[1]+4129170786&4294967295,w=b+(E<<5&4294967295|E>>>27),E=v+(b^T&(w^b))+k[6]+3225465664&4294967295,v=w+(E<<9&4294967295|E>>>23),E=T+(w^b&(v^w))+k[11]+643717713&4294967295,T=v+(E<<14&4294967295|E>>>18),E=b+(v^w&(T^v))+k[0]+3921069994&4294967295,b=T+(E<<20&4294967295|E>>>12),E=w+(T^v&(b^T))+k[5]+3593408605&4294967295,w=b+(E<<5&4294967295|E>>>27),E=v+(b^T&(w^b))+k[10]+38016083&4294967295,v=w+(E<<9&4294967295|E>>>23),E=T+(w^b&(v^w))+k[15]+3634488961&4294967295,T=v+(E<<14&4294967295|E>>>18),E=b+(v^w&(T^v))+k[4]+3889429448&4294967295,b=T+(E<<20&4294967295|E>>>12),E=w+(T^v&(b^T))+k[9]+568446438&4294967295,w=b+(E<<5&4294967295|E>>>27),E=v+(b^T&(w^b))+k[14]+3275163606&4294967295,v=w+(E<<9&4294967295|E>>>23),E=T+(w^b&(v^w))+k[3]+4107603335&4294967295,T=v+(E<<14&4294967295|E>>>18),E=b+(v^w&(T^v))+k[8]+1163531501&4294967295,b=T+(E<<20&4294967295|E>>>12),E=w+(T^v&(b^T))+k[13]+2850285829&4294967295,w=b+(E<<5&4294967295|E>>>27),E=v+(b^T&(w^b))+k[2]+4243563512&4294967295,v=w+(E<<9&4294967295|E>>>23),E=T+(w^b&(v^w))+k[7]+1735328473&4294967295,T=v+(E<<14&4294967295|E>>>18),E=b+(v^w&(T^v))+k[12]+2368359562&4294967295,b=T+(E<<20&4294967295|E>>>12),E=w+(b^T^v)+k[5]+4294588738&4294967295,w=b+(E<<4&4294967295|E>>>28),E=v+(w^b^T)+k[8]+2272392833&4294967295,v=w+(E<<11&4294967295|E>>>21),E=T+(v^w^b)+k[11]+1839030562&4294967295,T=v+(E<<16&4294967295|E>>>16),E=b+(T^v^w)+k[14]+4259657740&4294967295,b=T+(E<<23&4294967295|E>>>9),E=w+(b^T^v)+k[1]+2763975236&4294967295,w=b+(E<<4&4294967295|E>>>28),E=v+(w^b^T)+k[4]+1272893353&4294967295,v=w+(E<<11&4294967295|E>>>21),E=T+(v^w^b)+k[7]+4139469664&4294967295,T=v+(E<<16&4294967295|E>>>16),E=b+(T^v^w)+k[10]+3200236656&4294967295,b=T+(E<<23&4294967295|E>>>9),E=w+(b^T^v)+k[13]+681279174&4294967295,w=b+(E<<4&4294967295|E>>>28),E=v+(w^b^T)+k[0]+3936430074&4294967295,v=w+(E<<11&4294967295|E>>>21),E=T+(v^w^b)+k[3]+3572445317&4294967295,T=v+(E<<16&4294967295|E>>>16),E=b+(T^v^w)+k[6]+76029189&4294967295,b=T+(E<<23&4294967295|E>>>9),E=w+(b^T^v)+k[9]+3654602809&4294967295,w=b+(E<<4&4294967295|E>>>28),E=v+(w^b^T)+k[12]+3873151461&4294967295,v=w+(E<<11&4294967295|E>>>21),E=T+(v^w^b)+k[15]+530742520&4294967295,T=v+(E<<16&4294967295|E>>>16),E=b+(T^v^w)+k[2]+3299628645&4294967295,b=T+(E<<23&4294967295|E>>>9),E=w+(T^(b|~v))+k[0]+4096336452&4294967295,w=b+(E<<6&4294967295|E>>>26),E=v+(b^(w|~T))+k[7]+1126891415&4294967295,v=w+(E<<10&4294967295|E>>>22),E=T+(w^(v|~b))+k[14]+2878612391&4294967295,T=v+(E<<15&4294967295|E>>>17),E=b+(v^(T|~w))+k[5]+4237533241&4294967295,b=T+(E<<21&4294967295|E>>>11),E=w+(T^(b|~v))+k[12]+1700485571&4294967295,w=b+(E<<6&4294967295|E>>>26),E=v+(b^(w|~T))+k[3]+2399980690&4294967295,v=w+(E<<10&4294967295|E>>>22),E=T+(w^(v|~b))+k[10]+4293915773&4294967295,T=v+(E<<15&4294967295|E>>>17),E=b+(v^(T|~w))+k[1]+2240044497&4294967295,b=T+(E<<21&4294967295|E>>>11),E=w+(T^(b|~v))+k[8]+1873313359&4294967295,w=b+(E<<6&4294967295|E>>>26),E=v+(b^(w|~T))+k[15]+4264355552&4294967295,v=w+(E<<10&4294967295|E>>>22),E=T+(w^(v|~b))+k[6]+2734768916&4294967295,T=v+(E<<15&4294967295|E>>>17),E=b+(v^(T|~w))+k[13]+1309151649&4294967295,b=T+(E<<21&4294967295|E>>>11),E=w+(T^(b|~v))+k[4]+4149444226&4294967295,w=b+(E<<6&4294967295|E>>>26),E=v+(b^(w|~T))+k[11]+3174756917&4294967295,v=w+(E<<10&4294967295|E>>>22),E=T+(w^(v|~b))+k[2]+718787259&4294967295,T=v+(E<<15&4294967295|E>>>17),E=b+(v^(T|~w))+k[9]+3951481745&4294967295,A.g[0]=A.g[0]+w&4294967295,A.g[1]=A.g[1]+(T+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+T&4294967295,A.g[3]=A.g[3]+v&4294967295}r.prototype.u=function(A,w){w===void 0&&(w=A.length);for(var b=w-this.blockSize,k=this.B,T=this.h,v=0;v<w;){if(T==0)for(;v<=b;)i(this,A,v),v+=this.blockSize;if(typeof A=="string"){for(;v<w;)if(k[T++]=A.charCodeAt(v++),T==this.blockSize){i(this,k),T=0;break}}else for(;v<w;)if(k[T++]=A[v++],T==this.blockSize){i(this,k),T=0;break}}this.h=T,this.o+=w},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var w=1;w<A.length-8;++w)A[w]=0;var b=8*this.o;for(w=A.length-8;w<A.length;++w)A[w]=b&255,b/=256;for(this.u(A),A=Array(16),w=b=0;4>w;++w)for(var k=0;32>k;k+=8)A[b++]=this.g[w]>>>k&255;return A};function s(A,w){var b=l;return Object.prototype.hasOwnProperty.call(b,A)?b[A]:b[A]=w(A)}function o(A,w){this.h=w;for(var b=[],k=!0,T=A.length-1;0<=T;T--){var v=A[T]|0;k&&v==w||(b[T]=v,k=!1)}this.g=b}var l={};function u(A){return-128<=A&&128>A?s(A,function(w){return new o([w|0],0>w?-1:0)}):new o([A|0],0>A?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return D(c(-A));for(var w=[],b=1,k=0;A>=b;k++)w[k]=A/b|0,b*=4294967296;return new o(w,0)}function d(A,w){if(A.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A.charAt(0)=="-")return D(d(A.substring(1),w));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=c(Math.pow(w,8)),k=p,T=0;T<A.length;T+=8){var v=Math.min(8,A.length-T),E=parseInt(A.substring(T,T+v),w);8>v?(v=c(Math.pow(w,v)),k=k.j(v).add(c(E))):(k=k.j(b),k=k.add(c(E)))}return k}var p=u(0),g=u(1),y=u(16777216);n=o.prototype,n.m=function(){if(R(this))return-D(this).m();for(var A=0,w=1,b=0;b<this.g.length;b++){var k=this.i(b);A+=(0<=k?k:4294967296+k)*w,w*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(S(this))return"0";if(R(this))return"-"+D(this).toString(A);for(var w=c(Math.pow(A,6)),b=this,k="";;){var T=H(b,w).g;b=P(b,T.j(w));var v=((0<b.g.length?b.g[0]:b.h)>>>0).toString(A);if(b=T,S(b))return v+k;for(;6>v.length;)v="0"+v;k=v+k}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function S(A){if(A.h!=0)return!1;for(var w=0;w<A.g.length;w++)if(A.g[w]!=0)return!1;return!0}function R(A){return A.h==-1}n.l=function(A){return A=P(this,A),R(A)?-1:S(A)?0:1};function D(A){for(var w=A.g.length,b=[],k=0;k<w;k++)b[k]=~A.g[k];return new o(b,~A.h).add(g)}n.abs=function(){return R(this)?D(this):this},n.add=function(A){for(var w=Math.max(this.g.length,A.g.length),b=[],k=0,T=0;T<=w;T++){var v=k+(this.i(T)&65535)+(A.i(T)&65535),E=(v>>>16)+(this.i(T)>>>16)+(A.i(T)>>>16);k=E>>>16,v&=65535,E&=65535,b[T]=E<<16|v}return new o(b,b[b.length-1]&-2147483648?-1:0)};function P(A,w){return A.add(D(w))}n.j=function(A){if(S(this)||S(A))return p;if(R(this))return R(A)?D(this).j(D(A)):D(D(this).j(A));if(R(A))return D(this.j(D(A)));if(0>this.l(y)&&0>A.l(y))return c(this.m()*A.m());for(var w=this.g.length+A.g.length,b=[],k=0;k<2*w;k++)b[k]=0;for(k=0;k<this.g.length;k++)for(var T=0;T<A.g.length;T++){var v=this.i(k)>>>16,E=this.i(k)&65535,ue=A.i(T)>>>16,re=A.i(T)&65535;b[2*k+2*T]+=E*re,F(b,2*k+2*T),b[2*k+2*T+1]+=v*re,F(b,2*k+2*T+1),b[2*k+2*T+1]+=E*ue,F(b,2*k+2*T+1),b[2*k+2*T+2]+=v*ue,F(b,2*k+2*T+2)}for(k=0;k<w;k++)b[k]=b[2*k+1]<<16|b[2*k];for(k=w;k<2*w;k++)b[k]=0;return new o(b,0)};function F(A,w){for(;(A[w]&65535)!=A[w];)A[w+1]+=A[w]>>>16,A[w]&=65535,w++}function j(A,w){this.g=A,this.h=w}function H(A,w){if(S(w))throw Error("division by zero");if(S(A))return new j(p,p);if(R(A))return w=H(D(A),w),new j(D(w.g),D(w.h));if(R(w))return w=H(A,D(w)),new j(D(w.g),w.h);if(30<A.g.length){if(R(A)||R(w))throw Error("slowDivide_ only works with positive integers.");for(var b=g,k=w;0>=k.l(A);)b=W(b),k=W(k);var T=I(b,1),v=I(k,1);for(k=I(k,2),b=I(b,2);!S(k);){var E=v.add(k);0>=E.l(A)&&(T=T.add(b),v=E),k=I(k,1),b=I(b,1)}return w=P(A,T.j(w)),new j(T,w)}for(T=p;0<=A.l(w);){for(b=Math.max(1,Math.floor(A.m()/w.m())),k=Math.ceil(Math.log(b)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),v=c(b),E=v.j(w);R(E)||0<E.l(A);)b-=k,v=c(b),E=v.j(w);S(v)&&(v=g),T=T.add(v),A=P(A,E)}return new j(T,A)}n.A=function(A){return H(this,A).h},n.and=function(A){for(var w=Math.max(this.g.length,A.g.length),b=[],k=0;k<w;k++)b[k]=this.i(k)&A.i(k);return new o(b,this.h&A.h)},n.or=function(A){for(var w=Math.max(this.g.length,A.g.length),b=[],k=0;k<w;k++)b[k]=this.i(k)|A.i(k);return new o(b,this.h|A.h)},n.xor=function(A){for(var w=Math.max(this.g.length,A.g.length),b=[],k=0;k<w;k++)b[k]=this.i(k)^A.i(k);return new o(b,this.h^A.h)};function W(A){for(var w=A.g.length+1,b=[],k=0;k<w;k++)b[k]=A.i(k)<<1|A.i(k-1)>>>31;return new o(b,A.h)}function I(A,w){var b=w>>5;w%=32;for(var k=A.g.length-b,T=[],v=0;v<k;v++)T[v]=0<w?A.i(v+b)>>>w|A.i(v+b+1)<<32-w:A.i(v+b);return new o(T,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bf=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Cn=o}).apply(typeof Wc<"u"?Wc:typeof self<"u"?self:typeof window<"u"?window:{});var Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Af,bi,Sf,zs,Wa,xf,kf,Cf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,m){return a==Array.prototype||a==Object.prototype||(a[h]=m.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ns=="object"&&Ns];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=t(this);function i(a,h){if(h)e:{var m=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var N=a[_];if(!(N in m))break e;m=m[N]}a=a[a.length-1],_=m[a],h=h(_),h!=_&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var m=0,_=!1,N={next:function(){if(!_&&m<a.length){var O=m++;return{value:h(O,a[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,m){return a.call.apply(a.bind,arguments)}function p(a,h,m){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function g(a,h,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function y(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function S(a,h){function m(){}m.prototype=h.prototype,a.aa=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(_,N,O){for(var q=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)q[_e-2]=arguments[_e];return h.prototype[N].apply(_,q)}}function R(a){const h=a.length;if(0<h){const m=Array(h);for(let _=0;_<h;_++)m[_]=a[_];return m}return[]}function D(a,h){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(u(_)){const N=a.length||0,O=_.length||0;a.length=N+O;for(let q=0;q<O;q++)a[N+q]=_[q]}else a.push(_)}}class P{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var W=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function I(a,h,m){for(const _ in a)h.call(m,a[_],_,a)}function A(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function w(a){const h={};for(const m in a)h[m]=a[m];return h}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,h){let m,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(m in _)a[m]=_[m];for(let O=0;O<b.length;O++)m=b[O],Object.prototype.hasOwnProperty.call(_,m)&&(a[m]=_[m])}}function T(a){var h=1;a=a.split(":");const m=[];for(;0<h&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function v(a){l.setTimeout(()=>{throw a},0)}function E(){var a=pt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ue{constructor(){this.h=this.g=null}add(h,m){const _=re.get();_.set(h,m),this.h?this.h.next=_:this.g=_,this.h=_}}var re=new P(()=>new Le,a=>a.reset());class Le{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,ze=!1,pt=new ue,C=()=>{const a=l.Promise.resolve(void 0);ve=()=>{a.then(mt)}};var mt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(m){v(m)}var h=re;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ze=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var gt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,h),l.removeEventListener("test",m,h)}catch{}return a}();function St(a,h){if(x.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(W){e:{try{H(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ce[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&St.aa.h.call(this)}}S(St,x);var Ce={2:"touch",3:"pen",4:"mouse"};St.prototype.h=function(){St.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),Ft=0;function fn(a,h,m,_,N){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!_,this.ha=N,this.key=++Ft,this.da=this.fa=!1}function Pt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pn(a){this.src=a,this.g={},this.h=0}pn.prototype.add=function(a,h,m,_,N){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var q=ni(a,h,_,N);return-1<q?(h=a[q],m||(h.fa=!1)):(h=new fn(h,this.src,O,!!_,N),h.fa=m,a.push(h)),h};function fr(a,h){var m=h.type;if(m in a.g){var _=a.g[m],N=Array.prototype.indexOf.call(_,h,void 0),O;(O=0<=N)&&Array.prototype.splice.call(_,N,1),O&&(Pt(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function ni(a,h,m,_){for(var N=0;N<a.length;++N){var O=a[N];if(!O.da&&O.listener==h&&O.capture==!!m&&O.ha==_)return N}return-1}var ri="closure_lm_"+(1e6*Math.random()|0),ii={};function si(a,h,m,_,N){if(Array.isArray(h)){for(var O=0;O<h.length;O++)si(a,h[O],m,_,N);return null}return m=gs(m),a&&a[Mt]?a.K(h,m,c(_)?!!_.capture:!1,N):fs(a,h,m,!1,_,N)}function fs(a,h,m,_,N,O){if(!h)throw Error("Invalid event type");var q=c(N)?!!N.capture:!!N,_e=ai(a);if(_e||(a[ri]=_e=new pn(a)),m=_e.add(h,m,_,q,O),m.proxy)return m;if(_=ps(),m.proxy=_,_.src=a,_.listener=m,a.addEventListener)gt||(N=q),N===void 0&&(N=!1),a.addEventListener(h.toString(),_,N);else if(a.attachEvent)a.attachEvent(oi(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ps(){function a(m){return h.call(a.src,a.listener,m)}const h=ia;return a}function ms(a,h,m,_,N){if(Array.isArray(h))for(var O=0;O<h.length;O++)ms(a,h[O],m,_,N);else _=c(_)?!!_.capture:!!_,m=gs(m),a&&a[Mt]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],m=ni(O,m,_,N),-1<m&&(Pt(O[m]),Array.prototype.splice.call(O,m,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=ai(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ni(h,m,_,N)),(m=-1<a?h[a]:null)&&pr(m))}function pr(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Mt])fr(h.i,a);else{var m=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(m,_,a.capture):h.detachEvent?h.detachEvent(oi(m),_):h.addListener&&h.removeListener&&h.removeListener(_),(m=ai(h))?(fr(m,a),m.h==0&&(m.src=null,h[ri]=null)):Pt(a)}}}function oi(a){return a in ii?ii[a]:ii[a]="on"+a}function ia(a,h){if(a.da)a=!0;else{h=new St(h,this);var m=a.listener,_=a.ha||a.src;a.fa&&pr(a),a=m.call(_,h)}return a}function ai(a){return a=a[ri],a instanceof pn?a:null}var li="__closure_events_fn_"+(1e9*Math.random()>>>0);function gs(a){return typeof a=="function"?a:(a[li]||(a[li]=function(h){return a.handleEvent(h)}),a[li])}function Fe(){Me.call(this),this.i=new pn(this),this.M=this,this.F=null}S(Fe,Me),Fe.prototype[Mt]=!0,Fe.prototype.removeEventListener=function(a,h,m,_){ms(this,a,h,m,_)};function V(a,h){var m,_=a.F;if(_)for(m=[];_;_=_.F)m.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new x(h,a);else if(h instanceof x)h.target=h.target||a;else{var N=h;h=new x(_,a),k(h,N)}if(N=!0,m)for(var O=m.length-1;0<=O;O--){var q=h.g=m[O];N=B(q,_,!0,h)&&N}if(q=h.g=a,N=B(q,_,!0,h)&&N,N=B(q,_,!1,h)&&N,m)for(O=0;O<m.length;O++)q=h.g=m[O],N=B(q,_,!1,h)&&N}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var m=a.g[h],_=0;_<m.length;_++)Pt(m[_]);delete a.g[h],a.h--}}this.F=null},Fe.prototype.K=function(a,h,m,_){return this.i.add(String(a),h,!1,m,_)},Fe.prototype.L=function(a,h,m,_){return this.i.add(String(a),h,!0,m,_)};function B(a,h,m,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,O=0;O<h.length;++O){var q=h[O];if(q&&!q.da&&q.capture==m){var _e=q.listener,$e=q.ha||q.src;q.fa&&fr(a.i,q),N=_e.call($e,_)!==!1&&N}}return N&&!_.defaultPrevented}function J(a,h,m){if(typeof a=="function")m&&(a=g(a,m));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ne(a){a.g=J(()=>{a.g=null,a.i&&(a.i=!1,ne(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ke extends Me{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ne(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pe(a){Me.call(this),this.h=a,this.g={}}S(pe,Me);var qe=[];function yt(a){I(a.g,function(h,m){this.g.hasOwnProperty(m)&&pr(h)},a),a.g={}}pe.prototype.N=function(){pe.aa.N.call(this),yt(this)},pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tn=l.JSON.stringify,$n=l.JSON.parse,Hn=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function mr(){}mr.prototype.h=null;function gr(a){return a.h||(a.h=a.i())}function Qe(){}var xt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _t(){x.call(this,"d")}S(_t,x);function sa(){x.call(this,"c")}S(sa,x);var Wn={},Hu=null;function ys(){return Hu=Hu||new Fe}Wn.La="serverreachability";function Wu(a){x.call(this,Wn.La,a)}S(Wu,x);function ui(a){const h=ys();V(h,new Wu(h))}Wn.STAT_EVENT="statevent";function Gu(a,h){x.call(this,Wn.STAT_EVENT,a),this.stat=h}S(Gu,x);function it(a){const h=ys();V(h,new Gu(h,a))}Wn.Ma="timingevent";function Ku(a,h){x.call(this,Wn.Ma,a),this.size=h}S(Ku,x);function ci(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function hi(){this.g=!0}hi.prototype.xa=function(){this.g=!1};function vg(a,h,m,_,N,O){a.info(function(){if(a.g)if(O)for(var q="",_e=O.split("&"),$e=0;$e<_e.length;$e++){var de=_e[$e].split("=");if(1<de.length){var Ye=de[0];de=de[1];var Xe=Ye.split("_");q=2<=Xe.length&&Xe[1]=="type"?q+(Ye+"="+de+"&"):q+(Ye+"=redacted&")}}else q=null;else q=O;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+h+`
`+m+`
`+q})}function bg(a,h,m,_,N,O,q){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+h+`
`+m+`
`+O+" "+q})}function yr(a,h,m,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Sg(a,m)+(_?" "+_:"")})}function Ag(a,h){a.info(function(){return"TIMEOUT: "+h})}hi.prototype.info=function(){};function Sg(a,h){if(!a.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var _=m[a];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var q=1;q<N.length;q++)N[q]=""}}}}return tn(m)}catch{return h}}var _s={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},oa;function ws(){}S(ws,mr),ws.prototype.g=function(){return new XMLHttpRequest},ws.prototype.i=function(){return{}},oa=new ws;function mn(a,h,m,_){this.j=a,this.i=h,this.l=m,this.R=_||1,this.U=new pe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yu}function Yu(){this.i=null,this.g="",this.h=!1}var Xu={},aa={};function la(a,h,m){a.L=1,a.v=vs(nn(h)),a.m=m,a.P=!0,Ju(a,null)}function Ju(a,h){a.F=Date.now(),Es(a),a.A=nn(a.v);var m=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),dc(m.i,"t",_),a.C=0,m=a.j.J,a.h=new Yu,a.g=Rc(a.j,m?h:null,!a.m),0<a.O&&(a.M=new Ke(g(a.Y,a,a.g),a.O)),h=a.U,m=a.g,_=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(qe[0]=N.toString()),N=qe);for(var O=0;O<N.length;O++){var q=si(m,N[O],_||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ui(),vg(a.i,a.u,a.A,a.l,a.R,a.m)}mn.prototype.ca=function(a){a=a.target;const h=this.M;h&&rn(a)==3?h.j():this.Y(a)},mn.prototype.Y=function(a){try{if(a==this.g)e:{const Xe=rn(this.g);var h=this.g.Ba();const Er=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||wc(this.g)))){this.J||Xe!=4||h==7||(h==8||0>=Er?ui(3):ui(2)),ua(this);var m=this.g.Z();this.X=m;t:if(Zu(this)){var _=wc(this.g);a="";var N=_.length,O=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),di(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(O&&h==N-1)});_.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=m==200,bg(this.i,this.u,this.A,this.l,this.R,Xe,m),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,$e=this.g;if((_e=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(_e)){var de=_e;break t}}de=null}if(m=de)yr(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ca(this,m);else{this.o=!1,this.s=3,it(12),Gn(this),di(this);break e}}if(this.P){m=!0;let Nt;for(;!this.J&&this.C<q.length;)if(Nt=xg(this,q),Nt==aa){Xe==4&&(this.s=4,it(14),m=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Xu){this.s=4,it(15),yr(this.i,this.l,q,"[Invalid Chunk]"),m=!1;break}else yr(this.i,this.l,Nt,null),ca(this,Nt);if(Zu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||q.length!=0||this.h.h||(this.s=1,it(16),m=!1),this.o=this.o&&m,!m)yr(this.i,this.l,q,"[Invalid Chunked Response]"),Gn(this),di(this);else if(0<q.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),ga(Ye),Ye.M=!0,it(11))}}else yr(this.i,this.l,q,null),ca(this,q);Xe==4&&Gn(this),this.o&&!this.J&&(Xe==4?Sc(this.j,this):(this.o=!1,Es(this)))}else $g(this.g),m==400&&0<q.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Gn(this),di(this)}}}catch{}finally{}};function Zu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function xg(a,h){var m=a.C,_=h.indexOf(`
`,m);return _==-1?aa:(m=Number(h.substring(m,_)),isNaN(m)?Xu:(_+=1,_+m>h.length?aa:(h=h.slice(_,_+m),a.C=_+m,h)))}mn.prototype.cancel=function(){this.J=!0,Gn(this)};function Es(a){a.S=Date.now()+a.I,ec(a,a.I)}function ec(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ci(g(a.ba,a),h)}function ua(a){a.B&&(l.clearTimeout(a.B),a.B=null)}mn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ag(this.i,this.A),this.L!=2&&(ui(),it(17)),Gn(this),this.s=2,di(this)):ec(this,this.S-a)};function di(a){a.j.G==0||a.J||Sc(a.j,a)}function Gn(a){ua(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,yt(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ca(a,h){try{var m=a.j;if(m.G!=0&&(m.g==a||ha(m.h,a))){if(!a.K&&ha(m.h,a)&&m.G==3){try{var _=m.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)Cs(m),xs(m);else break e;ma(m),it(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=ci(g(m.Za,m),6e3));if(1>=rc(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Qn(m,11)}else if((a.K||m.g==a)&&Cs(m),!F(h))for(N=m.Da.g.parse(h),h=0;h<N.length;h++){let de=N[h];if(m.T=de[0],de=de[1],m.G==2)if(de[0]=="c"){m.K=de[1],m.ia=de[2];const Ye=de[3];Ye!=null&&(m.la=Ye,m.j.info("VER="+m.la));const Xe=de[4];Xe!=null&&(m.Aa=Xe,m.j.info("SVER="+m.Aa));const Er=de[5];Er!=null&&typeof Er=="number"&&0<Er&&(_=1.5*Er,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const Nt=a.g;if(Nt){const Ps=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ps){var O=_.h;O.g||Ps.indexOf("spdy")==-1&&Ps.indexOf("quic")==-1&&Ps.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(da(O,O.h),O.h=null))}if(_.D){const ya=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;ya&&(_.ya=ya,Ee(_.I,_.D,ya))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var q=a;if(_.qa=Cc(_,_.J?_.ia:null,_.W),q.K){ic(_.h,q);var _e=q,$e=_.L;$e&&(_e.I=$e),_e.B&&(ua(_e),Es(_e)),_.g=q}else bc(_);0<m.i.length&&ks(m)}else de[0]!="stop"&&de[0]!="close"||Qn(m,7);else m.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Qn(m,7):pa(m):de[0]!="noop"&&m.l&&m.l.ta(de),m.v=0)}}ui(4)}catch{}}var kg=class{constructor(a,h){this.g=a,this.map=h}};function tc(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rc(a){return a.h?1:a.g?a.g.size:0}function ha(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function da(a,h){a.g?a.g.add(h):a.h=h}function ic(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}tc.prototype.cancel=function(){if(this.i=sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sc(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.D);return h}return R(a.i)}function Cg(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],m=a.length,_=0;_<m;_++)h.push(a[_]);return h}h=[],m=0;for(_ in a)h[m++]=a[_];return h}function Rg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var m=0;m<a;m++)h.push(m);return h}h=[],m=0;for(const _ in a)h[m++]=_;return h}}}function oc(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var m=Rg(a),_=Cg(a),N=_.length,O=0;O<N;O++)h.call(void 0,_[O],m&&m[O],a)}var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pg(a,h){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var _=a[m].indexOf("="),N=null;if(0<=_){var O=a[m].substring(0,_);N=a[m].substring(_+1)}else O=a[m];h(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Kn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Kn){this.h=a.h,Is(this,a.j),this.o=a.o,this.g=a.g,Ts(this,a.s),this.l=a.l;var h=a.i,m=new mi;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),lc(this,m),this.m=a.m}else a&&(h=String(a).match(ac))?(this.h=!1,Is(this,h[1]||"",!0),this.o=fi(h[2]||""),this.g=fi(h[3]||"",!0),Ts(this,h[4]),this.l=fi(h[5]||"",!0),lc(this,h[6]||"",!0),this.m=fi(h[7]||"")):(this.h=!1,this.i=new mi(null,this.h))}Kn.prototype.toString=function(){var a=[],h=this.j;h&&a.push(pi(h,uc,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(pi(h,uc,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(pi(m,m.charAt(0)=="/"?Vg:Dg,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",pi(m,jg)),a.join("")};function nn(a){return new Kn(a)}function Is(a,h,m){a.j=m?fi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ts(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function lc(a,h,m){h instanceof mi?(a.i=h,Lg(a.i,a.h)):(m||(h=pi(h,Og)),a.i=new mi(h,a.h))}function Ee(a,h,m){a.i.set(h,m)}function vs(a){return Ee(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function fi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function pi(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,Ng),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ng(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var uc=/[#\/\?@]/g,Dg=/[#\?:]/g,Vg=/[#\?]/g,Og=/[#\?@]/g,jg=/#/g;function mi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function gn(a){a.g||(a.g=new Map,a.h=0,a.i&&Pg(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}n=mi.prototype,n.add=function(a,h){gn(this),this.i=null,a=_r(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function cc(a,h){gn(a),h=_r(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function hc(a,h){return gn(a),h=_r(a,h),a.g.has(h)}n.forEach=function(a,h){gn(this),this.g.forEach(function(m,_){m.forEach(function(N){a.call(h,N,_,this)},this)},this)},n.na=function(){gn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let _=0;_<h.length;_++){const N=a[_];for(let O=0;O<N.length;O++)m.push(h[_])}return m},n.V=function(a){gn(this);let h=[];if(typeof a=="string")hc(this,a)&&(h=h.concat(this.g.get(_r(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)h=h.concat(a[m])}return h},n.set=function(a,h){return gn(this),this.i=null,a=_r(this,a),hc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function dc(a,h,m){cc(a,h),0<m.length&&(a.i=null,a.g.set(_r(a,h),R(m)),a.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var _=h[m];const O=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var N=O;q[_]!==""&&(N+="="+encodeURIComponent(String(q[_]))),a.push(N)}}return this.i=a.join("&")};function _r(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Lg(a,h){h&&!a.j&&(gn(a),a.i=null,a.g.forEach(function(m,_){var N=_.toLowerCase();_!=N&&(cc(this,_),dc(this,N,m))},a)),a.j=h}function Mg(a,h){const m=new hi;if(l.Image){const _=new Image;_.onload=y(yn,m,"TestLoadImage: loaded",!0,h,_),_.onerror=y(yn,m,"TestLoadImage: error",!1,h,_),_.onabort=y(yn,m,"TestLoadImage: abort",!1,h,_),_.ontimeout=y(yn,m,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function Fg(a,h){const m=new hi,_=new AbortController,N=setTimeout(()=>{_.abort(),yn(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(O=>{clearTimeout(N),O.ok?yn(m,"TestPingServer: ok",!0,h):yn(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),yn(m,"TestPingServer: error",!1,h)})}function yn(a,h,m,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(m)}catch{}}function Ug(){this.g=new Hn}function Bg(a,h,m){const _=m||"";try{oc(a,function(N,O){let q=N;c(N)&&(q=tn(N)),h.push(_+O+"="+encodeURIComponent(q))})}catch(N){throw h.push(_+"type="+encodeURIComponent("_badmap")),N}}function bs(a){this.l=a.Ub||null,this.j=a.eb||!1}S(bs,mr),bs.prototype.g=function(){return new As(this.l,this.j)},bs.prototype.i=function(a){return function(){return a}}({});function As(a,h){Fe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(As,Fe),n=As.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,yi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gi(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fc(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function fc(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?gi(this):yi(this),this.readyState==3&&fc(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,gi(this))},n.Qa=function(a){this.g&&(this.response=a,gi(this))},n.ga=function(){this.g&&gi(this)};function gi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,yi(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function yi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(As.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function pc(a){let h="";return I(a,function(m,_){h+=_,h+=":",h+=m,h+=`\r
`}),h}function fa(a,h,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=pc(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):Ee(a,h,m))}function xe(a){Fe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(xe,Fe);var zg=/^https?$/i,qg=["POST","PUT"];n=xe.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():oa.g(),this.v=this.o?gr(this.o):gr(oa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){mc(this,O);return}if(a=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)m.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())m.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qg,h,void 0))||_||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,q]of m)this.g.setRequestHeader(O,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_c(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){mc(this,O)}};function mc(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,gc(a),Ss(a)}function gc(a){a.A||(a.A=!0,V(a,"complete"),V(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,V(this,"complete"),V(this,"abort"),Ss(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ss(this,!0)),xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?yc(this):this.bb())},n.bb=function(){yc(this)};function yc(a){if(a.h&&typeof o<"u"&&(!a.v[1]||rn(a)!=4||a.Z()!=2)){if(a.u&&rn(a)==4)J(a.Ea,0,a);else if(V(a,"readystatechange"),rn(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var _;if(_=q===0){var N=String(a.D).match(ac)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),_=!zg.test(N?N.toLowerCase():"")}m=_}if(m)V(a,"complete"),V(a,"success");else{a.m=6;try{var O=2<rn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",gc(a)}}finally{Ss(a)}}}}function Ss(a,h){if(a.g){_c(a);const m=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||V(a,"ready");try{m.onreadystatechange=_}catch{}}}function _c(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function rn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),$n(h)}};function wc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $g(a){const h={};a=(a.g&&2<=rn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(F(a[_]))continue;var m=T(a[_]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=h[N]||[];h[N]=O,O.push(m)}A(h,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _i(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function Ec(a){this.Aa=0,this.i=[],this.j=new hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_i("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_i("baseRetryDelayMs",5e3,a),this.cb=_i("retryDelaySeedMs",1e4,a),this.Wa=_i("forwardChannelMaxRetries",2,a),this.wa=_i("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new tc(a&&a.concurrentRequestLimit),this.Da=new Ug,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ec.prototype,n.la=8,n.G=1,n.connect=function(a,h,m,_){it(0),this.W=a,this.H=h||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=Cc(this,null,this.W),ks(this)};function pa(a){if(Ic(a),a.G==3){var h=a.U++,m=nn(a.I);if(Ee(m,"SID",a.K),Ee(m,"RID",h),Ee(m,"TYPE","terminate"),wi(a,m),h=new mn(a,a.j,h),h.L=2,h.v=vs(nn(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=h.v,m=!0),m||(h.g=Rc(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Es(h)}kc(a)}function xs(a){a.g&&(ga(a),a.g.cancel(),a.g=null)}function Ic(a){xs(a),a.u&&(l.clearTimeout(a.u),a.u=null),Cs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ks(a){if(!nc(a.h)&&!a.s){a.s=!0;var h=a.Ga;ve||C(),ze||(ve(),ze=!0),pt.add(h,a),a.B=0}}function Hg(a,h){return rc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ci(g(a.Ga,a,h),xc(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new mn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=w(O),k(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=vc(this,N,h),m=nn(this.I),Ee(m,"RID",a),Ee(m,"CVER",22),this.D&&Ee(m,"X-HTTP-Session-Id",this.D),wi(this,m),O&&(this.O?h="headers="+encodeURIComponent(String(pc(O)))+"&"+h:this.m&&fa(m,this.m,O)),da(this.h,N),this.Ua&&Ee(m,"TYPE","init"),this.P?(Ee(m,"$req",h),Ee(m,"SID","null"),N.T=!0,la(N,m,null)):la(N,m,h),this.G=2}}else this.G==3&&(a?Tc(this,a):this.i.length==0||nc(this.h)||Tc(this))};function Tc(a,h){var m;h?m=h.l:m=a.U++;const _=nn(a.I);Ee(_,"SID",a.K),Ee(_,"RID",m),Ee(_,"AID",a.T),wi(a,_),a.m&&a.o&&fa(_,a.m,a.o),m=new mn(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),h&&(a.i=h.D.concat(a.i)),h=vc(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),da(a.h,m),la(m,_,h)}function wi(a,h){a.H&&I(a.H,function(m,_){Ee(h,_,m)}),a.l&&oc({},function(m,_){Ee(h,_,m)})}function vc(a,h,m){m=Math.min(a.i.length,m);var _=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let O=-1;for(;;){const q=["count="+m];O==-1?0<m?(O=N[0].g,q.push("ofs="+O)):O=0:q.push("ofs="+O);let _e=!0;for(let $e=0;$e<m;$e++){let de=N[$e].g;const Ye=N[$e].map;if(de-=O,0>de)O=Math.max(0,N[$e].g-100),_e=!1;else try{Bg(Ye,q,"req"+de+"_")}catch{_&&_(Ye)}}if(_e){_=q.join("&");break e}}}return a=a.i.splice(0,m),h.D=a,_}function bc(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ve||C(),ze||(ve(),ze=!0),pt.add(h,a),a.v=0}}function ma(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ci(g(a.Fa,a),xc(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Ac(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ci(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),xs(this),Ac(this))};function ga(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ac(a){a.g=new mn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=nn(a.qa);Ee(h,"RID","rpc"),Ee(h,"SID",a.K),Ee(h,"AID",a.T),Ee(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ee(h,"TO",a.ja),Ee(h,"TYPE","xmlhttp"),wi(a,h),a.m&&a.o&&fa(h,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=vs(nn(h)),m.m=null,m.P=!0,Ju(m,a)}n.Za=function(){this.C!=null&&(this.C=null,xs(this),ma(this),it(19))};function Cs(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Sc(a,h){var m=null;if(a.g==h){Cs(a),ga(a),a.g=null;var _=2}else if(ha(a.h,h))m=h.D,ic(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;_=ys(),V(_,new Ku(_,m)),ks(a)}else bc(a);else if(N=h.s,N==3||N==0&&0<h.X||!(_==1&&Hg(a,h)||_==2&&ma(a)))switch(m&&0<m.length&&(h=a.h,h.i=h.i.concat(m)),N){case 1:Qn(a,5);break;case 4:Qn(a,10);break;case 3:Qn(a,6);break;default:Qn(a,2)}}}function xc(a,h){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*h}function Qn(a,h){if(a.j.info("Error code "+h),h==2){var m=g(a.fb,a),_=a.Xa;const N=!_;_=new Kn(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Is(_,"https"),vs(_),N?Mg(_.toString(),m):Fg(_.toString(),m)}else it(2);a.G=0,a.l&&a.l.sa(h),kc(a),Ic(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function kc(a){if(a.G=0,a.ka=[],a.l){const h=sc(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Cc(a,h,m){var _=m instanceof Kn?nn(m):new Kn(m);if(_.g!="")h&&(_.g=h+"."+_.g),Ts(_,_.s);else{var N=l.location;_=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var O=new Kn(null);_&&Is(O,_),h&&(O.g=h),N&&Ts(O,N),m&&(O.l=m),_=O}return m=a.D,h=a.ya,m&&h&&Ee(_,m,h),Ee(_,"VER",a.la),wi(a,_),_}function Rc(a,h,m){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new xe(new bs({eb:m})):new xe(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pc(){}n=Pc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Rs(){}Rs.prototype.g=function(a,h){return new wt(a,h)};function wt(a,h){Fe.call(this),this.g=new Ec(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!F(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!F(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new wr(this)}S(wt,Fe),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){pa(this.g)},wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=tn(a),a=m);h.i.push(new kg(h.Ya++,a)),h.G==3&&ks(h)},wt.prototype.N=function(){this.g.l=null,delete this.j,pa(this.g),delete this.g,wt.aa.N.call(this)};function Nc(a){_t.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(Nc,_t);function Dc(){sa.call(this),this.status=1}S(Dc,sa);function wr(a){this.g=a}S(wr,Pc),wr.prototype.ua=function(){V(this.g,"a")},wr.prototype.ta=function(a){V(this.g,new Nc(a))},wr.prototype.sa=function(a){V(this.g,new Dc)},wr.prototype.ra=function(){V(this.g,"b")},Rs.prototype.createWebChannel=Rs.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Cf=function(){return new Rs},kf=function(){return ys()},xf=Wn,Wa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_s.NO_ERROR=0,_s.TIMEOUT=8,_s.HTTP_ERROR=6,zs=_s,Qu.COMPLETE="complete",Sf=Qu,Qe.EventType=xt,xt.OPEN="a",xt.CLOSE="b",xt.ERROR="c",xt.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,bi=Qe,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,Af=xe}).apply(typeof Ns<"u"?Ns:typeof self<"u"?self:typeof window<"u"?window:{});const Gc="@firebase/firestore",Kc="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Sl("@firebase/firestore");function Tr(){return ir.logLevel}function $(n,...e){if(ir.logLevel<=ie.DEBUG){const t=e.map(Cl);ir.debug(`Firestore (${Wr}): ${n}`,...t)}}function un(n,...e){if(ir.logLevel<=ie.ERROR){const t=e.map(Cl);ir.error(`Firestore (${Wr}): ${n}`,...t)}}function Or(n,...e){if(ir.logLevel<=ie.WARN){const t=e.map(Cl);ir.warn(`Firestore (${Wr}): ${n}`,...t)}}function Cl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Rf(n,r,t)}function Rf(n,e,t){let r=`FIRESTORE (${Wr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw un(r),new Error(r)}function le(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Rf(e,i,r)}function ee(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends dn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ze.UNAUTHENTICATED))}shutdown(){}}class q_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class $_{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){le(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string",31837,{l:r}),new Pf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class H_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class W_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new H_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){le(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Qc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(le(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Qc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=K_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function se(n,e){return n<e?-1:n>e?1:0}function Ga(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return va(i)===va(s)?se(i,s):va(i)?1:-1}return se(n.length,e.length)}const Q_=55296,Y_=57343;function va(n){const e=n.charCodeAt(0);return e>=Q_&&e<=Y_}function jr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="__name__";class Bt{constructor(e,t,r){t===void 0?t=0:t>e.length&&Q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Bt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Bt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return se(e.length,t.length)}static compareSegments(e,t){const r=Bt.isNumericId(e),i=Bt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Bt.extractNumericId(e).compare(Bt.extractNumericId(t)):Ga(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cn.fromString(e.substring(4,e.length-2))}}class ge extends Bt{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const X_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Bt{construct(e,t,r){return new We(e,t,r)}static isValidIdentifier(e){return X_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yc}static keyField(){return new We([Yc])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(t)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ge.fromString(e))}static fromName(e){return new G(ge.fromString(e).popFirst(5))}static empty(){return new G(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e,t){if(!t)throw new z(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function J_(n,e,t,r){if(e===!0&&r===!0)throw new z(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Xc(n){if(!G.isDocumentKey(n))throw new z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Jc(n){if(G.isDocumentKey(n))throw new z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Df(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ko(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q(12329,{type:typeof n})}function ot(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ko(n);throw new z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Z_(n,e){if(e<=0)throw new z(L.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n,e){const t={typeString:n};return e&&(t.value=e),t}function Zi(n,e){if(!Df(n))throw new z(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new z(L.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=-62135596800,eh=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*eh);return new Ie(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Zc)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/eh}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zi(e,Ie._jsonSchema))return new Ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ie._jsonSchemaVersion="firestore/timestamp/1.0",Ie._jsonSchema={type:De("string",Ie._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ie(0,0))}static max(){return new Y(new Ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=-1;function ew(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Ie(t+1,0):new Ie(t,r));return new Dn(i,G.empty(),e)}function tw(n){return new Dn(n.readTime,n.key,Fi)}class Dn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Dn(Y.min(),G.empty(),Fi)}static max(){return new Dn(Y.max(),G.empty(),Fi)}}function nw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:se(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==rw)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):M.reject(t)}static resolve(e){return new M((t,r)=>{t(e)})}static reject(e){return new M((t,r)=>{r(e)})}static waitFor(e){return new M((t,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next(i=>i?M.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;t(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new M((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function sw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Kr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Co.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=-1;function es(n){return n==null}function ro(n){return n===0&&1/n==-1/0}function ow(n){return typeof n=="number"&&Number.isInteger(n)&&!ro(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="";function aw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=th(e)),e=lw(n.get(t),e);return th(e)}function lw(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Vf:t+="";break;default:t+=s}}return t}function th(n){return n+Vf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Of(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ds(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ds(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ds(this.root,e,this.comparator,!0)}}class Ds{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new He(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rh(this.data.getIterator())}getIteratorFrom(e){return new rh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new je(this.comparator);return t.data=e,t}}class rh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new vt([])}unionWith(e){let t=new je(We.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new vt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new jf("Invalid base64 string: "+s):s}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const uw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(n){if(le(!!n,39018),typeof n=="string"){let e=0;const t=uw.exec(n);if(le(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(n.seconds),nanos:ke(n.nanos)}}function ke(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function On(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="server_timestamp",Mf="__type__",Ff="__previous_value__",Uf="__local_write_time__";function Ro(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Mf])==null?void 0:r.stringValue)===Lf}function Po(n){const e=n.mapValue.fields[Ff];return Ro(e)?Po(e):e}function Ui(n){const e=Vn(n.mapValue.fields[Uf].timestampValue);return new Ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const io="(default)";class Bi{constructor(e,t){this.projectId=e,this.database=t||io}static empty(){return new Bi("","")}get isDefaultDatabase(){return this.database===io}isEqual(e){return e instanceof Bi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="__type__",hw="__max__",Vs={mapValue:{}},zf="__vector__",so="value";function jn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ro(n)?4:fw(n)?9007199254740991:dw(n)?10:11:Q(28295,{value:n})}function Xt(n,e){if(n===e)return!0;const t=jn(n);if(t!==jn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ui(n).isEqual(Ui(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vn(i.timestampValue),l=Vn(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return On(i.bytesValue).isEqual(On(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ke(i.geoPointValue.latitude)===ke(s.geoPointValue.latitude)&&ke(i.geoPointValue.longitude)===ke(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ke(i.integerValue)===ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ke(i.doubleValue),l=ke(s.doubleValue);return o===l?ro(o)===ro(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return jr(n.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(nh(o)!==nh(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Xt(o[u],l[u])))return!1;return!0}(n,e);default:return Q(52216,{left:n})}}function zi(n,e){return(n.values||[]).find(t=>Xt(t,e))!==void 0}function Lr(n,e){if(n===e)return 0;const t=jn(n),r=jn(e);if(t!==r)return se(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return se(n.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ke(s.integerValue||s.doubleValue),u=ke(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return ih(n.timestampValue,e.timestampValue);case 4:return ih(Ui(n),Ui(e));case 5:return Ga(n.stringValue,e.stringValue);case 6:return function(s,o){const l=On(s),u=On(o);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=se(l[c],u[c]);if(d!==0)return d}return se(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(ke(s.latitude),ke(o.latitude));return l!==0?l:se(ke(s.longitude),ke(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return sh(n.arrayValue,e.arrayValue);case 10:return function(s,o){var g,y,S,R;const l=s.fields||{},u=o.fields||{},c=(g=l[so])==null?void 0:g.arrayValue,d=(y=u[so])==null?void 0:y.arrayValue,p=se(((S=c==null?void 0:c.values)==null?void 0:S.length)||0,((R=d==null?void 0:d.values)==null?void 0:R.length)||0);return p!==0?p:sh(c,d)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Vs.mapValue&&o===Vs.mapValue)return 0;if(s===Vs.mapValue)return 1;if(o===Vs.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const g=Ga(u[p],d[p]);if(g!==0)return g;const y=Lr(l[u[p]],c[d[p]]);if(y!==0)return y}return se(u.length,d.length)}(n.mapValue,e.mapValue);default:throw Q(23264,{he:t})}}function ih(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return se(n,e);const t=Vn(n),r=Vn(e),i=se(t.seconds,r.seconds);return i!==0?i:se(t.nanos,r.nanos)}function sh(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Lr(t[i],r[i]);if(s)return s}return se(t.length,r.length)}function Mr(n){return Ka(n)}function Ka(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Vn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return On(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return G.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Ka(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ka(t.fields[o])}`;return i+"}"}(n.mapValue):Q(61005,{value:n})}function qs(n){switch(jn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Po(n);return e?16+qs(e):16;case 5:return 2*n.stringValue.length;case 6:return On(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+qs(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Fn(r.fields,(s,o)=>{i+=s.length+qs(o)}),i}(n.mapValue);default:throw Q(13486,{value:n})}}function oo(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Qa(n){return!!n&&"integerValue"in n}function Nl(n){return!!n&&"arrayValue"in n}function oh(n){return!!n&&"nullValue"in n}function ah(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $s(n){return!!n&&"mapValue"in n}function dw(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Bf])==null?void 0:r.stringValue)===zf}function Ci(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Fn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ci(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ci(n.arrayValue.values[t]);return e}return{...n}}function fw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===hw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!$s(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(t)}setAll(e){let t=We.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}o?r[l.lastSegment()]=Ci(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());$s(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];$s(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Fn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new st(Ci(this.value))}}function qf(n){const e=[];return Fn(n.fields,(t,r)=>{const i=new We([t]);if($s(r)){const s=qf(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,r,i,s,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Be(e,0,Y.min(),Y.min(),Y.min(),st.empty(),0)}static newFoundDocument(e,t,r,i){return new Be(e,1,t,Y.min(),r,i,0)}static newNoDocument(e,t){return new Be(e,2,t,Y.min(),Y.min(),st.empty(),0)}static newUnknownDocument(e,t){return new Be(e,3,t,Y.min(),Y.min(),st.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t){this.position=e,this.inclusive=t}}function lh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),t.key):r=Lr(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function uh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Xt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t="asc"){this.field=e,this.dir=t}}function pw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{}class Ne extends $f{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new gw(e,t,r):t==="array-contains"?new ww(e,r):t==="in"?new Ew(e,r):t==="not-in"?new Iw(e,r):t==="array-contains-any"?new Tw(e,r):new Ne(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new yw(e,r):new _w(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Lr(t,this.value)):t!==null&&jn(this.value)===jn(t)&&this.matchesComparison(Lr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends $f{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Lt(e,t)}matches(e){return Hf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Hf(n){return n.op==="and"}function Wf(n){return mw(n)&&Hf(n)}function mw(n){for(const e of n.filters)if(e instanceof Lt)return!1;return!0}function Ya(n){if(n instanceof Ne)return n.field.canonicalString()+n.op.toString()+Mr(n.value);if(Wf(n))return n.filters.map(e=>Ya(e)).join(",");{const e=n.filters.map(t=>Ya(t)).join(",");return`${n.op}(${e})`}}function Gf(n,e){return n instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&Xt(r.value,i.value)}(n,e):n instanceof Lt?function(r,i){return i instanceof Lt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Gf(o,i.filters[l]),!0):!1}(n,e):void Q(19439)}function Kf(n){return n instanceof Ne?function(t){return`${t.field.canonicalString()} ${t.op} ${Mr(t.value)}`}(n):n instanceof Lt?function(t){return t.op.toString()+" {"+t.getFilters().map(Kf).join(" ,")+"}"}(n):"Filter"}class gw extends Ne{constructor(e,t,r){super(e,t,r),this.key=G.fromName(r.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class yw extends Ne{constructor(e,t){super(e,"in",t),this.keys=Qf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _w extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=Qf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Qf(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>G.fromName(r.referenceValue))}class ww extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Nl(t)&&zi(t.arrayValue,this.value)}}class Ew extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zi(this.value.arrayValue,t)}}class Iw extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!zi(this.value.arrayValue,t)}}class Tw extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Nl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>zi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function ch(n,e=null,t=[],r=[],i=null,s=null,o=null){return new vw(n,e,t,r,i,s,o)}function Dl(n){const e=ee(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ya(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),es(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Mr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Mr(r)).join(",")),e.Te=t}return e.Te}function Vl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!pw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Gf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!uh(n.startAt,e.startAt)&&uh(n.endAt,e.endAt)}function Xa(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function bw(n,e,t,r,i,s,o,l){return new ar(n,e,t,r,i,s,o,l)}function No(n){return new ar(n)}function hh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ol(n){return n.collectionGroup!==null}function xr(n){const e=ee(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new je(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new qi(s,r))}),t.has(We.keyField().canonicalString())||e.Ie.push(new qi(We.keyField(),r))}return e.Ie}function $t(n){const e=ee(n);return e.Ee||(e.Ee=Aw(e,xr(n))),e.Ee}function Aw(n,e){if(n.limitType==="F")return ch(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new qi(i.field,s)});const t=n.endAt?new Fr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fr(n.startAt.position,n.startAt.inclusive):null;return ch(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ja(n,e){const t=n.filters.concat([e]);return new ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ao(n,e,t){return new ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Do(n,e){return Vl($t(n),$t(e))&&n.limitType===e.limitType}function Yf(n){return`${Dl($t(n))}|lt:${n.limitType}`}function vr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Kf(i)).join(", ")}]`),es(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Mr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Mr(i)).join(",")),`Target(${r})`}($t(n))}; limitType=${n.limitType})`}function Vo(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of xr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=lh(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,xr(r),i)||r.endAt&&!function(o,l,u){const c=lh(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,xr(r),i))}(n,e)}function Sw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Xf(n){return(e,t)=>{let r=!1;for(const i of xr(n)){const s=xw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function xw(n,e,t){const r=n.field.isKeyField()?G.comparator(e.key,t.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Lr(u,c):Q(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Of(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=new Se(G.comparator);function cn(){return kw}const Jf=new Se(G.comparator);function Ai(...n){let e=Jf;for(const t of n)e=e.insert(t.key,t);return e}function Zf(n){let e=Jf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Jn(){return Ri()}function ep(){return Ri()}function Ri(){return new lr(n=>n.toString(),(n,e)=>n.isEqual(e))}const Cw=new Se(G.comparator),Rw=new je(G.comparator);function oe(...n){let e=Rw;for(const t of n)e=e.add(t);return e}const Pw=new je(se);function Nw(){return Pw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ro(e)?"-0":e}}function tp(n){return{integerValue:""+n}}function Dw(n,e){return ow(e)?tp(e):jl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this._=void 0}}function Vw(n,e,t){return n instanceof $i?function(i,s){const o={fields:{[Mf]:{stringValue:Lf},[Uf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ro(s)&&(s=Po(s)),s&&(o.fields[Ff]=s),{mapValue:o}}(t,e):n instanceof Hi?rp(n,e):n instanceof Wi?ip(n,e):function(i,s){const o=np(i,s),l=dh(o)+dh(i.Ae);return Qa(o)&&Qa(i.Ae)?tp(l):jl(i.serializer,l)}(n,e)}function Ow(n,e,t){return n instanceof Hi?rp(n,e):n instanceof Wi?ip(n,e):t}function np(n,e){return n instanceof lo?function(r){return Qa(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class $i extends Oo{}class Hi extends Oo{constructor(e){super(),this.elements=e}}function rp(n,e){const t=sp(e);for(const r of n.elements)t.some(i=>Xt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Wi extends Oo{constructor(e){super(),this.elements=e}}function ip(n,e){let t=sp(e);for(const r of n.elements)t=t.filter(i=>!Xt(i,r));return{arrayValue:{values:t}}}class lo extends Oo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function dh(n){return ke(n.integerValue||n.doubleValue)}function sp(n){return Nl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t){this.field=e,this.transform=t}}function Lw(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Hi&&i instanceof Hi||r instanceof Wi&&i instanceof Wi?jr(r.elements,i.elements,Xt):r instanceof lo&&i instanceof lo?Xt(r.Ae,i.Ae):r instanceof $i&&i instanceof $i}(n.transform,e.transform)}class Mw{constructor(e,t){this.version=e,this.transformResults=t}}class Ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class jo{}function op(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ns(n.key,Ve.none()):new ts(n.key,n.data,Ve.none());{const t=n.data,r=st.empty();let i=new je(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Un(n.key,r,new vt(i.toArray()),Ve.none())}}function Fw(n,e,t){n instanceof ts?function(i,s,o){const l=i.value.clone(),u=ph(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Un?function(i,s,o){if(!Hs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ph(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ap(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Pi(n,e,t,r){return n instanceof ts?function(s,o,l,u){if(!Hs(s.precondition,o))return l;const c=s.value.clone(),d=mh(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Un?function(s,o,l,u){if(!Hs(s.precondition,o))return l;const c=mh(s.fieldTransforms,u,o),d=o.data;return d.setAll(ap(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(s,o,l){return Hs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function Uw(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=np(r.transform,i||null);s!=null&&(t===null&&(t=st.empty()),t.set(r.field,s))}return t||null}function fh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&jr(r,i,(s,o)=>Lw(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ts extends jo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Un extends jo{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ap(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ph(n,e,t){const r=new Map;le(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Ow(o,l,t[i]))}return r}function mh(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,Vw(s,o,e))}return r}class ns extends jo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lp extends jo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Fw(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Pi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Pi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ep();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const u=op(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&jr(this.mutations,e.mutations,(t,r)=>fh(t,r))&&jr(this.baseMutations,e.baseMutations,(t,r)=>fh(t,r))}}class Ll{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){le(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Cw}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ll(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,ae;function up(n){switch(n){case L.OK:return Q(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Q(15467,{code:n})}}function cp(n){if(n===void 0)return un("GRPC error has no .code"),L.UNKNOWN;switch(n){case Re.OK:return L.OK;case Re.CANCELLED:return L.CANCELLED;case Re.UNKNOWN:return L.UNKNOWN;case Re.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Re.INTERNAL:return L.INTERNAL;case Re.UNAVAILABLE:return L.UNAVAILABLE;case Re.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Re.NOT_FOUND:return L.NOT_FOUND;case Re.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Re.ABORTED:return L.ABORTED;case Re.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Re.DATA_LOSS:return L.DATA_LOSS;default:return Q(39323,{code:n})}}(ae=Re||(Re={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new Cn([4294967295,4294967295],0);function gh(n){const e=$w().encode(n),t=new bf;return t.update(e),new Uint8Array(t.digest())}function yh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Cn([t,r],0),new Cn([i,s],0)]}class Ml{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Si(`Invalid padding: ${t}`);if(r<0)throw new Si(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Si(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Si(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Cn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Cn.fromNumber(r)));return i.compare(Hw)===1&&(i=new Cn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=gh(e),[r,i]=yh(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ml(s,i,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=gh(e),[r,i]=yh(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,rs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Lo(Y.min(),i,new Se(se),cn(),oe())}}class rs{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new rs(r,t,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class hp{constructor(e,t){this.targetId=e,this.Ce=t}}class dp{constructor(e,t,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class _h{constructor(){this.ve=0,this.Fe=wh(),this.Me=Ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=oe(),t=oe(),r=oe();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new rs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=wh()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Ww{constructor(e){this.Ge=e,this.ze=new Map,this.je=cn(),this.Je=Os(),this.He=Os(),this.Ye=new Se(se)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(Xa(s))if(r===0){const o=new G(s.path);this.et(t,o,Be.newNoDocument(o,Y.min()))}else le(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,c)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=On(r).toUint8Array()}catch(u){if(u instanceof jf)return Or("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ml(o,i,s)}catch(u){return Or(u instanceof Si?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(t,s,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Xa(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Be.newNoDocument(u,e))}s.Be&&(t.set(o,s.ke()),s.qe())}});let r=oe();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Lo(e,t,this.Ye,this.je,r);return this.je=cn(),this.Je=Os(),this.He=Os(),this.Ye=new Se(se),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new _h,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new je(se),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new je(se),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||$("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new _h),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Os(){return new Se(G.comparator)}function wh(){return new Se(G.comparator)}const Gw={asc:"ASCENDING",desc:"DESCENDING"},Kw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qw={and:"AND",or:"OR"};class Yw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Za(n,e){return n.useProto3Json||es(e)?e:{value:e}}function uo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Xw(n,e){return uo(n,e.toTimestamp())}function At(n){return le(!!n,49232),Y.fromTimestamp(function(t){const r=Vn(t);return new Ie(r.seconds,r.nanos)}(n))}function Fl(n,e){return el(n,e).canonicalString()}function el(n,e){const t=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function pp(n){const e=ge.fromString(n);return le(Ep(e),10190,{key:e.toString()}),e}function co(n,e){return Fl(n.databaseId,e.path)}function Ni(n,e){const t=pp(e);if(t.get(1)!==n.databaseId.projectId)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G(gp(t))}function mp(n,e){return Fl(n.databaseId,e)}function Jw(n){const e=pp(n);return e.length===4?ge.emptyPath():gp(e)}function tl(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function gp(n){return le(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Eh(n,e,t){return{name:co(n,e),fields:t.value.mapValue.fields}}function Zw(n,e){return"found"in e?function(r,i){le(!!i.found,43571),i.found.name,i.found.updateTime;const s=Ni(r,i.found.name),o=At(i.found.updateTime),l=i.found.createTime?At(i.found.createTime):Y.min(),u=new st({mapValue:{fields:i.found.fields}});return Be.newFoundDocument(s,o,l,u)}(n,e):"missing"in e?function(r,i){le(!!i.missing,3894),le(!!i.readTime,22933);const s=Ni(r,i.missing),o=At(i.readTime);return Be.newNoDocument(s,o)}(n,e):Q(7234,{result:e})}function eE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(le(d===void 0||typeof d=="string",58123),Ge.fromBase64String(d||"")):(le(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ge.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?L.UNKNOWN:cp(c.code);return new z(d,c.message||"")}(o);t=new dp(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ni(n,r.document.name),s=At(r.document.updateTime),o=r.document.createTime?At(r.document.createTime):Y.min(),l=new st({mapValue:{fields:r.document.fields}}),u=Be.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];t=new Ws(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ni(n,r.document),s=r.readTime?At(r.readTime):Y.min(),o=Be.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Ws([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ni(n,r.document),s=r.removedTargetIds||[];t=new Ws([],s,i,null)}else{if(!("filter"in e))return Q(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qw(i,s),l=r.targetId;t=new hp(l,o)}}return t}function yp(n,e){let t;if(e instanceof ts)t={update:Eh(n,e.key,e.value)};else if(e instanceof ns)t={delete:co(n,e.key)};else if(e instanceof Un)t={update:Eh(n,e.key,e.data),updateMask:uE(e.fieldMask)};else{if(!(e instanceof lp))return Q(16599,{Vt:e.type});t={verify:co(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof $i)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Hi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof lo)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Xw(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(n,e.precondition)),t}function tE(n,e){return n&&n.length>0?(le(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?At(i.updateTime):At(s);return o.isEqual(Y.min())&&(o=At(s)),new Mw(o,i.transformResults||[])}(t,e))):[]}function nE(n,e){return{documents:[mp(n,e.path)]}}function rE(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=mp(n,i);const s=function(c){if(c.length!==0)return wp(Lt.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:br(g.field),direction:oE(g.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Za(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:t,parent:i}}function iE(n){let e=Jw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){le(r===1,65062);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(p){const g=_p(p);return g instanceof Lt&&Wf(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(S){return new qi(Ar(S.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,es(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(p){const g=!!p.before,y=p.values||[];return new Fr(y,g)}(t.startAt));let c=null;return t.endAt&&(c=function(p){const g=!p.before,y=p.values||[];return new Fr(y,g)}(t.endAt)),bw(e,i,o,s,l,"F",u,c)}function sE(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function _p(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ar(t.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ar(t.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ar(t.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ar(t.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ne.create(Ar(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Lt.create(t.compositeFilter.filters.map(r=>_p(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(t.compositeFilter.op))}(n):Q(30097,{filter:n})}function oE(n){return Gw[n]}function aE(n){return Kw[n]}function lE(n){return Qw[n]}function br(n){return{fieldPath:n.canonicalString()}}function Ar(n){return We.fromServerFormat(n.fieldPath)}function wp(n){return n instanceof Ne?function(t){if(t.op==="=="){if(ah(t.value))return{unaryFilter:{field:br(t.field),op:"IS_NAN"}};if(oh(t.value))return{unaryFilter:{field:br(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ah(t.value))return{unaryFilter:{field:br(t.field),op:"IS_NOT_NAN"}};if(oh(t.value))return{unaryFilter:{field:br(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:br(t.field),op:aE(t.op),value:t.value}}}(n):n instanceof Lt?function(t){const r=t.getFilters().map(i=>wp(i));return r.length===1?r[0]:{compositeFilter:{op:lE(t.op),filters:r}}}(n):Q(54877,{filter:n})}function uE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ep(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t,r,i,s=Y.min(),o=Y.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.yt=e}}function hE(n){const e=iE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ao(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.Cn=new fE}addToCollectionParentIndex(e,t){return this.Cn.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(Dn.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(Dn.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class fE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new je(ge.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ip=41943040;class lt{static withCacheSize(e){return new lt(e,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt.DEFAULT_COLLECTION_PERCENTILE=10,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lt.DEFAULT=new lt(Ip,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lt.DISABLED=new lt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ur(0)}static cr(){return new Ur(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="LruGarbageCollector",pE=1048576;function vh([n,e],[t,r]){const i=se(n,t);return i===0?se(e,r):i}class mE{constructor(e){this.Ir=e,this.buffer=new je(vh),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();vh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class gE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){$(Th,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Kr(t)?$(Th,"Ignoring IndexedDB error during garbage collection: ",t):await Gr(t)}await this.Vr(3e5)})}}class yE{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return M.resolve(Co.ce);const r=new mE(t);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ih)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ih):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Tr()<=ie.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function _E(n,e){return new yE(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(){this.changes=new lr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Pi(r.mutation,i,vt.empty(),Ie.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=oe()){const i=Jn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ai();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Jn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,oe()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,i){let s=cn();const o=Ri(),l=function(){return Ri()}();return t.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Un)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Pi(d.mutation,c,d.mutation.getFieldMask(),Ie.now())):o.set(c.key,vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),t.forEach((c,d)=>l.set(c,new EE(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Ri();let i=new Se((o,l)=>o-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let d=r.get(u)||vt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=ep();d.forEach(g=>{if(!s.has(g)){const y=op(t.get(g),r.get(g));y!==null&&p.set(g,y),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ol(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):M.resolve(Jn());let l=Fi,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(d=>({batchId:l,changes:Zf(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(r=>{let i=Ai();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Ai();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,g){return new ar(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Be.newInvalidDocument(d)))});let l=Ai();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Pi(d.mutation,c,vt.empty(),Ie.now()),Vo(t,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return M.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:At(i.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(i){return{name:i.name,query:hE(i.bundledQuery),readTime:At(i.readTime)}}(t)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.overlays=new Se(G.comparator),this.qr=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Jn();return M.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.St(e,t,s)}),M.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const i=Jn(),s=t.length+1,o=new G(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Se((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Jn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Jn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zw(t,r));let s=this.qr.get(t);s===void 0&&(s=oe(),this.qr.set(t,s)),this.qr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.Qr=new je(Ue.$r),this.Ur=new je(Ue.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Ue(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Ue(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new G(new ge([])),r=new Ue(t,e),i=new Ue(t,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new G(new ge([])),r=new Ue(t,e),i=new Ue(t,e+1);let s=oe();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ue(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return G.comparator(e.key,t.key)||se(e.Yr,t.Yr)}static Kr(e,t){return se(e.Yr,t.Yr)||G.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new je(Ue.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bw(s,t,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,t){return M.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Pl:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ue(t,0),i=new Ue(t,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new je(se);return t.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new G(s),0);let l=new je(se);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),M.resolve(this.ti(l))}ti(e){const t=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){le(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(t.mutations,i=>{const s=new Ue(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Ue(t,0),i=this.Zr.firstAfterOrEqual(r);return M.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.ri=e,this.docs=function(){return new Se(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let r=cn();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Be.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=cn();const o=t.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||nw(tw(d),r)<=0||(i.has(d.key)||Vo(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Q(9500)}ii(e,t){return M.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new xE(this)}getSize(e){return M.resolve(this.size)}}class xE extends wE{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),M.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.persistence=e,this.si=new lr(t=>Dl(t),Vl),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new Ul,this.targetCount=0,this.ai=Ur.ur()}forEachTarget(e,t){return this.si.forEach((r,i)=>t(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),M.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Ur(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Pr(t),M.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,t){this.ui={},this.overlays={},this.ci=new Co(0),this.li=!1,this.li=!0,this.hi=new bE,this.referenceDelegate=e(this),this.Pi=new kE(this),this.indexManager=new dE,this.remoteDocumentCache=function(i){return new SE(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new cE(t),this.Ii=new TE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new AE(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){$("MemoryPersistence","Starting transaction:",e);const i=new CE(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,t){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class CE extends iw{constructor(e){super(),this.currentSequenceNumber=e}}class Bl{constructor(e){this.persistence=e,this.Ri=new Ul,this.Vi=null}static mi(e){return new Bl(e)}get fi(){if(this.Vi)return this.Vi;throw Q(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),M.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const i=G.fromPath(r);return this.gi(e,i).next(s=>{s||t.removeEntry(i,Y.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return M.or([()=>M.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class ho{constructor(e,t){this.persistence=e,this.pi=new lr(r=>aw(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=_E(this,t)}static mi(e,t){return new ho(e,t)}Ei(){}di(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return M.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?M.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,t).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qs(e.data.value)),t}br(e,t,r){return M.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=oe(),i=oe();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zl(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return by()?8:sw(nt())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ys(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new RE;return this.Ss(e,t,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,t,o,l.size)})}).next(()=>s.result)}bs(e,t,r,i){return r.documentReadCount<this.fs?(Tr()<=ie.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",vr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Tr()<=ie.DEBUG&&$("QueryEngine","Query:",vr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Tr()<=ie.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",vr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(t))):M.resolve())}ys(e,t){if(hh(t))return M.resolve(null);let r=$t(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ao(t,null,"F"),r=$t(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(t,l);return this.Cs(t,c,o,u.readTime)?this.ys(e,ao(t,null,"F")):this.vs(e,c,t,u)}))})))}ws(e,t,r,i){return hh(t)||i.isEqual(Y.min())?M.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(t,s);return this.Cs(t,o,r,i)?M.resolve(null):(Tr()<=ie.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vr(t)),this.vs(e,o,t,ew(i,Fi)).next(l=>l))})}Ds(e,t){let r=new je(Xf(e));return t.forEach((i,s)=>{Vo(e,s)&&(r=r.add(s))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,t,r){return Tr()<=ie.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",vr(t)),this.ps.getDocumentsMatchingQuery(e,t,Dn.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="LocalStore",NE=3e8;class DE{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new Se(se),this.xs=new lr(s=>Dl(s),Vl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IE(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function VE(n,e,t,r){return new DE(n,e,t,r)}async function vp(n,e){const t=ee(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=oe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function OE(n,e){const t=ee(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,g=p.keys();let y=M.resolve();return g.forEach(S=>{y=y.next(()=>d.getEntry(u,S)).next(R=>{const D=c.docVersions.get(S);le(D!==null,48541),R.version.compareTo(D)<0&&(p.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),d.addEntry(R)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function bp(n){const e=ee(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function jE(n,e){const t=ee(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;l.push(t.Pi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(s,d.addedDocuments,p)));let y=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(Ge.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(p,y),function(R,D,P){return R.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=NE?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(g,y,d)&&l.push(t.Pi.updateTargetData(s,y))});let u=cn(),c=oe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(LE(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(Y.min())){const d=t.Pi.getLastRemoteSnapshotVersion(s).next(p=>t.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(t.Ms=i,s))}function LE(n,e,t){let r=oe(),i=oe();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=cn();return t.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(ql,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function ME(n,e){const t=ee(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Pl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function FE(n,e){const t=ee(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Pi.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):t.Pi.allocateTargetId(r).next(o=>(i=new bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function nl(n,e,t){const r=ee(n),i=r.Ms.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kr(o))throw o;$(ql,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function bh(n,e,t){const r=ee(n);let i=Y.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=ee(u),g=p.xs.get(d);return g!==void 0?M.resolve(p.Ms.get(g)):p.Pi.getTargetData(c,d)}(r,o,$t(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,t?i:Y.min(),t?s:oe())).next(l=>(UE(r,Sw(e),l),{documents:l,Qs:s})))}function UE(n,e,t){let r=n.Os.get(e)||Y.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Os.set(e,r)}class Ah{constructor(){this.activeTargetIds=Nw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BE{constructor(){this.Mo=new Ah,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ah,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="ConnectivityMonitor";class xh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){$(Sh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){$(Sh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js=null;function rl(){return js===null?js=function(){return 268435456+Math.round(2147483648*Math.random())}():js++,"0x"+js.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="RestConnection",qE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class $E{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===io?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,s){const o=rl(),l=this.zo(e,t.toUriEncodedString());$(ba,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=$r(c);return this.Jo(e,l,u,r,d).then(p=>($(ba,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Or(ba,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,t,r,i,s,o){return this.Go(e,t,r,i,s)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,t){const r=qE[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class WE extends $E{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,s){const o=rl();return new Promise((l,u)=>{const c=new Af;c.setWithCredentials(!0),c.listenOnce(Sf.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case zs.NO_ERROR:const p=c.getResponseJson();$(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case zs.TIMEOUT:$(Je,`RPC '${e}' ${o} timed out`),u(new z(L.DEADLINE_EXCEEDED,"Request time out"));break;case zs.HTTP_ERROR:const g=c.getStatus();if($(Je,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y==null?void 0:y.error;if(S&&S.status&&S.message){const R=function(P){const F=P.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(F)>=0?F:L.UNKNOWN}(S.status);u(new z(R,S.message))}else u(new z(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new z(L.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{$(Je,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);$(Je,`RPC '${e}' ${o} sending request:`,i),c.send(t,"POST",d,r,15)})}T_(e,t,r){const i=rl(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Cf(),l=kf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=s.join("");$(Je,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let g=!1,y=!1;const S=new HE({Yo:D=>{y?$(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||($(Je,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),$(Je,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},Zo:()=>p.close()}),R=(D,P,F)=>{D.listen(P,j=>{try{F(j)}catch(H){setTimeout(()=>{throw H},0)}})};return R(p,bi.EventType.OPEN,()=>{y||($(Je,`RPC '${e}' stream ${i} transport opened.`),S.o_())}),R(p,bi.EventType.CLOSE,()=>{y||(y=!0,$(Je,`RPC '${e}' stream ${i} transport closed`),S.a_(),this.E_(p))}),R(p,bi.EventType.ERROR,D=>{y||(y=!0,Or(Je,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),S.a_(new z(L.UNAVAILABLE,"The operation could not be completed")))}),R(p,bi.EventType.MESSAGE,D=>{var P;if(!y){const F=D.data[0];le(!!F,16349);const j=F,H=(j==null?void 0:j.error)||((P=j[0])==null?void 0:P.error);if(H){$(Je,`RPC '${e}' stream ${i} received error:`,H);const W=H.status;let I=function(b){const k=Re[b];if(k!==void 0)return cp(k)}(W),A=H.message;I===void 0&&(I=L.INTERNAL,A="Unknown error status: "+W+" with message "+H.message),y=!0,S.a_(new z(I,A)),p.close()}else $(Je,`RPC '${e}' stream ${i} received:`,F),S.u_(F)}}),R(l,xf.STAT_EVENT,D=>{D.stat===Wa.PROXY?$(Je,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Wa.NOPROXY&&$(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.__()},0),S}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Aa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n){return new Yw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="PersistentStream";class Ap{constructor(e,t,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new $l(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(un(t.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(kh,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():($(kh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GE extends Ap{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=eE(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?At(o.readTime):Y.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=tl(this.serializer),t.addTarget=function(s,o){let l;const u=o.target;if(l=Xa(u)?{documents:nE(s,u)}:{query:rE(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=fp(s,o.resumeToken);const c=Za(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=uo(s,o.snapshotVersion.toTimestamp());const c=Za(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=sE(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=tl(this.serializer),t.removeTarget=e,this.q_(t)}}class KE extends Ap{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=tE(e.writeResults,e.commitTime),r=At(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=tl(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>yp(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{}class YE extends QE{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,el(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(L.UNKNOWN,s.toString())})}Ho(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,el(t,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class XE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(un(t),this.aa=!1):$("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="RemoteStore";class JE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ur(this)&&($(sr,"Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.Ea.add(4),await is(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Fo(c)}(this))})}),this.Ra=new XE(r,i)}}async function Fo(n){if(ur(n))for(const e of n.da)await e(!0)}async function is(n){for(const e of n.da)await e(!1)}function Sp(n,e){const t=ee(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Kl(t)?Gl(t):Qr(t).O_()&&Wl(t,e))}function Hl(n,e){const t=ee(n),r=Qr(t);t.Ia.delete(e),r.O_()&&xp(t,e),t.Ia.size===0&&(r.O_()?r.L_():ur(t)&&t.Ra.set("Unknown"))}function Wl(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qr(n).Y_(e)}function xp(n,e){n.Va.Ue(e),Qr(n).Z_(e)}function Gl(n){n.Va=new Ww({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Qr(n).start(),n.Ra.ua()}function Kl(n){return ur(n)&&!Qr(n).x_()&&n.Ia.size>0}function ur(n){return ee(n).Ea.size===0}function kp(n){n.Va=void 0}async function ZE(n){n.Ra.set("Online")}async function eI(n){n.Ia.forEach((e,t)=>{Wl(n,e)})}async function tI(n,e){kp(n),Kl(n)?(n.Ra.ha(e),Gl(n)):n.Ra.set("Unknown")}async function nI(n,e,t){if(n.Ra.set("Online"),e instanceof dp&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(n,e)}catch(r){$(sr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fo(n,r)}else if(e instanceof Ws?n.Va.Ze(e):e instanceof hp?n.Va.st(e):n.Va.tt(e),!t.isEqual(Y.min()))try{const r=await bp(n.localStore);t.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(Ge.EMPTY_BYTE_STRING,d.snapshotVersion)),xp(s,u);const p=new bn(d.target,u,c,d.sequenceNumber);Wl(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){$(sr,"Failed to raise snapshot:",r),await fo(n,r)}}async function fo(n,e,t){if(!Kr(e))throw e;n.Ea.add(1),await is(n),n.Ra.set("Offline"),t||(t=()=>bp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{$(sr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Fo(n)})}function Cp(n,e){return e().catch(t=>fo(n,t,e))}async function Uo(n){const e=ee(n),t=Ln(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Pl;for(;rI(e);)try{const i=await ME(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,iI(e,i)}catch(i){await fo(e,i)}Rp(e)&&Pp(e)}function rI(n){return ur(n)&&n.Ta.length<10}function iI(n,e){n.Ta.push(e);const t=Ln(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Rp(n){return ur(n)&&!Ln(n).x_()&&n.Ta.length>0}function Pp(n){Ln(n).start()}async function sI(n){Ln(n).ra()}async function oI(n){const e=Ln(n);for(const t of n.Ta)e.ea(t.mutations)}async function aI(n,e,t){const r=n.Ta.shift(),i=Ll.from(r,e,t);await Cp(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Uo(n)}async function lI(n,e){e&&Ln(n).X_&&await async function(r,i){if(function(o){return up(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();Ln(r).B_(),await Cp(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Uo(r)}}(n,e),Rp(n)&&Pp(n)}async function Ch(n,e){const t=ee(n);t.asyncQueue.verifyOperationInProgress(),$(sr,"RemoteStore received new credentials");const r=ur(t);t.Ea.add(3),await is(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Fo(t)}async function uI(n,e){const t=ee(n);e?(t.Ea.delete(2),await Fo(t)):e||(t.Ea.add(2),await is(t),t.Ra.set("Unknown"))}function Qr(n){return n.ma||(n.ma=function(t,r,i){const s=ee(t);return s.sa(),new GE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Xo:ZE.bind(null,n),t_:eI.bind(null,n),r_:tI.bind(null,n),H_:nI.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Kl(n)?Gl(n):n.Ra.set("Unknown")):(await n.ma.stop(),kp(n))})),n.ma}function Ln(n){return n.fa||(n.fa=function(t,r,i){const s=ee(t);return s.sa(),new KE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:sI.bind(null,n),r_:lI.bind(null,n),ta:oI.bind(null,n),na:aI.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Uo(n)):(await n.fa.stop(),n.Ta.length>0&&($(sr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,l=new Ql(e,t,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yl(n,e){if(un("AsyncQueue",`${e}: ${n}`),Kr(n))return new z(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{static emptySet(e){return new kr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||G.comparator(t.key,r.key):(t,r)=>G.comparator(t.key,r.key),this.keyedMap=Ai(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof kr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.ga=new Se(G.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Q(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Br{constructor(e,t,r,i,s,o,l,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Br(e,t,kr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Do(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class hI{constructor(){this.queries=Ph(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=ee(t),s=i.queries;i.queries=Ph(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new z(L.ABORTED,"Firestore shutting down"))}}function Ph(){return new lr(n=>Yf(n),Do)}async function Xl(n,e){const t=ee(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new cI,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await t.onListen(i,!0);break;case 1:s.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=Yl(o,`Initialization of query '${vr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&Zl(t)}async function Jl(n,e){const t=ee(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function dI(n,e){const t=ee(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Zl(t)}function fI(n,e,t){const r=ee(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function Zl(n){n.Ca.forEach(e=>{e.next()})}var il,Nh;(Nh=il||(il={})).Ma="default",Nh.Cache="cache";class eu{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Br(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==il.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.key=e}}class Dp{constructor(e){this.key=e}}class pI{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=oe(),this.mutatedKeys=oe(),this.eu=Xf(e),this.tu=new kr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Rh,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const g=i.get(d),y=Vo(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;g&&y?g.data.isEqual(y.data)?S!==R&&(r.track({type:3,doc:y}),D=!0):this.su(g,y)||(r.track({type:2,doc:y}),D=!0,(u&&this.eu(y,u)>0||c&&this.eu(y,c)<0)&&(l=!0)):!g&&y?(r.track({type:0,doc:y}),D=!0):g&&!y&&(r.track({type:1,doc:g}),D=!0,(u||c)&&(l=!0)),D&&(y?(o=o.add(y),s=R?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(y,S){const R=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Rt:D})}};return R(y)-R(S)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=t&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Br(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Rh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=oe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new Dp(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new Np(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Br.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const tu="SyncEngine";class mI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class gI{constructor(e){this.key=e,this.hu=!1}}class yI{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new lr(l=>Yf(l),Do),this.Iu=new Map,this.Eu=new Set,this.du=new Se(G.comparator),this.Au=new Map,this.Ru=new Ul,this.Vu={},this.mu=new Map,this.fu=Ur.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function _I(n,e,t=!0){const r=Fp(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Vp(r,e,t,!0),i}async function wI(n,e){const t=Fp(n);await Vp(t,e,!0,!1)}async function Vp(n,e,t,r){const i=await FE(n.localStore,$t(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await EI(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Sp(n.remoteStore,i),l}async function EI(n,e,t,r,i){n.pu=(p,g,y)=>async function(R,D,P,F){let j=D.view.ru(P);j.Cs&&(j=await bh(R.localStore,D.query,!1).then(({documents:A})=>D.view.ru(A,j)));const H=F&&F.targetChanges.get(D.targetId),W=F&&F.targetMismatches.get(D.targetId)!=null,I=D.view.applyChanges(j,R.isPrimaryClient,H,W);return Vh(R,D.targetId,I.au),I.snapshot}(n,p,g,y);const s=await bh(n.localStore,e,!0),o=new pI(e,s.Qs),l=o.ru(s.documents),u=rs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(l,n.isPrimaryClient,u);Vh(n,t,c.au);const d=new mI(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),c.snapshot}async function II(n,e,t){const r=ee(n),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Do(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await nl(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Hl(r.remoteStore,i.targetId),sl(r,i.targetId)}).catch(Gr)):(sl(r,i.targetId),await nl(r.localStore,i.targetId,!0))}async function TI(n,e){const t=ee(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Hl(t.remoteStore,r.targetId))}async function vI(n,e,t){const r=RI(n);try{const i=await function(o,l){const u=ee(o),c=Ie.now(),d=l.reduce((y,S)=>y.add(S.key),oe());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let S=cn(),R=oe();return u.Ns.getEntries(y,d).next(D=>{S=D,S.forEach((P,F)=>{F.isValidDocument()||(R=R.add(P))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,S)).next(D=>{p=D;const P=[];for(const F of l){const j=Uw(F,p.get(F.key).overlayedDocument);j!=null&&P.push(new Un(F.key,j,qf(j.value.mapValue),Ve.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,P,l)}).next(D=>{g=D;const P=D.applyToLocalDocumentSet(p,R);return u.documentOverlayCache.saveOverlays(y,D.batchId,P)})}).then(()=>({batchId:g.batchId,changes:Zf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Se(se)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,t),await ss(r,i.changes),await Uo(r.remoteStore)}catch(i){const s=Yl(i,"Failed to persist write");t.reject(s)}}async function Op(n,e){const t=ee(n);try{const r=await jE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Au.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?le(o.hu,14607):i.removedDocuments.size>0&&(le(o.hu,42227),o.hu=!1))}),await ss(t,r,e)}catch(r){await Gr(r)}}function Dh(n,e,t){const r=ee(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const g of p.Sa)g.va(l)&&(c=!0)}),c&&Zl(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bI(n,e,t){const r=ee(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Se(G.comparator);o=o.insert(s,Be.newNoDocument(s,Y.min()));const l=oe().add(s),u=new Lo(Y.min(),new Map,new Se(se),o,l);await Op(r,u),r.du=r.du.remove(s),r.Au.delete(e),nu(r)}else await nl(r.localStore,e,!1).then(()=>sl(r,e,t)).catch(Gr)}async function AI(n,e){const t=ee(n),r=e.batch.batchId;try{const i=await OE(t.localStore,e);Lp(t,r,null),jp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,i)}catch(i){await Gr(i)}}async function SI(n,e,t){const r=ee(n);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(le(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);Lp(r,e,t),jp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,i)}catch(i){await Gr(i)}}function jp(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Lp(n,e,t){const r=ee(n);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function sl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Mp(n,r)})}function Mp(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Hl(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),nu(n))}function Vh(n,e,t){for(const r of t)r instanceof Np?(n.Ru.addReference(r.key,e),xI(n,r)):r instanceof Dp?($(tu,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Mp(n,r.key)):Q(19791,{wu:r})}function xI(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||($(tu,"New document in limbo: "+t),n.Eu.add(r),nu(n))}function nu(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new G(ge.fromString(e)),r=n.fu.next();n.Au.set(r,new gI(t)),n.du=n.du.insert(t,r),Sp(n.remoteStore,new bn($t(No(t.path)),r,"TargetPurposeLimboResolution",Co.ce))}}async function ss(n,e,t){const r=ee(n),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,t).then(c=>{var d;if((c||t)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=zl.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,g=>M.forEach(g.Es,y=>d.persistence.referenceDelegate.addReference(p,g.targetId,y)).next(()=>M.forEach(g.ds,y=>d.persistence.referenceDelegate.removeReference(p,g.targetId,y)))))}catch(p){if(!Kr(p))throw p;$(ql,"Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const y=d.Ms.get(g),S=y.snapshotVersion,R=y.withLastLimboFreeSnapshotVersion(S);d.Ms=d.Ms.insert(g,R)}}}(r.localStore,s))}async function kI(n,e){const t=ee(n);if(!t.currentUser.isEqual(e)){$(tu,"User change. New user:",e.toKey());const r=await vp(t.localStore,e);t.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new z(L.CANCELLED,o))})}),s.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Ls)}}function CI(n,e){const t=ee(n),r=t.Au.get(e);if(r&&r.hu)return oe().add(r.key);{let i=oe();const s=t.Iu.get(e);if(!s)return i;for(const o of s){const l=t.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function Fp(n){const e=ee(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Op.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bI.bind(null,e),e.Pu.H_=dI.bind(null,e.eventManager),e.Pu.yu=fI.bind(null,e.eventManager),e}function RI(n){const e=ee(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SI.bind(null,e),e}class po{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return VE(this.persistence,new PE,e.initialUser,this.serializer)}Cu(e){return new Tp(Bl.mi,this.serializer)}Du(e){return new BE}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}po.provider={build:()=>new po};class PI extends po{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){le(this.persistence.referenceDelegate instanceof ho,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new gE(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?lt.withCacheSize(this.cacheSizeBytes):lt.DEFAULT;return new Tp(r=>ho.mi(r,t),this.serializer)}}class ol{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kI.bind(null,this.syncEngine),await uI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hI}()}createDatastore(e){const t=Mo(e.databaseInfo.databaseId),r=function(s){return new WE(s)}(e.databaseInfo);return function(s,o,l,u){return new YE(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,l){return new JE(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Dh(this.syncEngine,t,0),function(){return xh.v()?new xh:new zE}())}createSyncEngine(e,t){return function(i,s,o,l,u,c,d){const p=new yI(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=ee(i);$(sr,"RemoteStore shutting down."),s.Ea.add(5),await is(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ol.provider={build:()=>new ol};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=ee(i),l={documents:s.map(p=>co(o.serializer,p))},u=await o.Ho("BatchGetDocuments",o.serializer.databaseId,ge.emptyPath(),l,s.length),c=new Map;u.forEach(p=>{const g=Zw(o.serializer,p);c.set(g.key.toString(),g)});const d=[];return s.forEach(p=>{const g=c.get(p.toString());le(!!g,55234,{key:p}),d.push(g)}),d}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ns(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=G.fromPath(r);this.mutations.push(new lp(i,this.precondition(i)))}),await async function(r,i){const s=ee(r),o={writes:i.map(l=>yp(s.serializer,l))};await s.Go("Commit",s.serializer.databaseId,ge.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Q(50498,{Gu:e.constructor.name});t=Y.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new z(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Y.min())?Ve.exists(!1):Ve.updateTime(t):Ve.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Y.min()))throw new z(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ve.updateTime(t)}return Ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.zu=r.maxAttempts,this.M_=new $l(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const e=new NI(this.datastore),t=this.Hu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Yu(i)}))}).catch(r=>{this.Yu(r)})})}Hu(e){try{const t=this.updateFunction(e);return!es(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(e)}Zu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!up(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="FirestoreClient";class VI{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=Rl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(Mn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Mn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Yl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sa(n,e){n.asyncQueue.verifyOperationInProgress(),$(Mn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vp(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Oh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await OI(n);$(Mn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ch(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ch(e.remoteStore,i)),n._onlineComponents=e}async function OI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$(Mn,"Using user provided OfflineComponentProvider");try{await Sa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Or("Error using user provided cache. Falling back to memory cache: "+t),await Sa(n,new po)}}else $(Mn,"Using default OfflineComponentProvider"),await Sa(n,new PI(void 0));return n._offlineComponents}async function iu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($(Mn,"Using user provided OnlineComponentProvider"),await Oh(n,n._uninitializedComponentsProvider._online)):($(Mn,"Using default OnlineComponentProvider"),await Oh(n,new ol))),n._onlineComponents}function jI(n){return iu(n).then(e=>e.syncEngine)}function LI(n){return iu(n).then(e=>e.datastore)}async function mo(n){const e=await iu(n),t=e.eventManager;return t.onListen=_I.bind(null,e.syncEngine),t.onUnlisten=II.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=wI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=TI.bind(null,e.syncEngine),t}function MI(n,e,t={}){const r=new qt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new ru({next:g=>{d.Nu(),o.enqueueAndForget(()=>Jl(s,p));const y=g.docs.has(l);!y&&g.fromCache?c.reject(new z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&g.fromCache&&u&&u.source==="server"?c.reject(new z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new eu(No(l.path),d,{includeMetadataChanges:!0,qa:!0});return Xl(s,p)}(await mo(n),n.asyncQueue,e,t,r)),r.promise}function FI(n,e,t={}){const r=new qt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new ru({next:g=>{d.Nu(),o.enqueueAndForget(()=>Jl(s,p)),g.fromCache&&u.source==="server"?c.reject(new z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new eu(l,d,{includeMetadataChanges:!0,qa:!0});return Xl(s,p)}(await mo(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="firestore.googleapis.com",Lh=!0;class Mh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bp,this.ssl=Lh}else this.host=e.host,this.ssl=e.ssl??Lh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ip;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pE)throw new z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}J_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Up(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new z_;switch(r.type){case"firstParty":return new W_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=jh.get(t);r&&($("ComponentProvider","Removing Datastore"),jh.delete(t),r.terminate())}(this),Promise.resolve()}}function UI(n,e,t,r={}){var c;n=ot(n,Bo);const i=$r(e),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;i&&(gf(`https://${l}`),yf("Firestore",!0)),s.host!==Bp&&s.host!==l&&Or("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!nr(u,o)&&(n._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Ze.MOCK_USER;else{d=my(r.mockUserToken,(c=n._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ze(g)}n._authCredentials=new q_(new Pf(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zt(this.firestore,e,this._query)}}class be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}toJSON(){return{type:be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Zi(t,be._jsonSchema))return new be(e,r||null,new G(ge.fromString(t.referencePath)))}}be._jsonSchemaVersion="firestore/documentReference/1.0",be._jsonSchema={type:De("string",be._jsonSchemaVersion),referencePath:De("string")};class Rn extends Zt{constructor(e,t,r){super(e,t,No(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new G(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function Ot(n,e,...t){if(n=Ae(n),Nf("collection","path",e),n instanceof Bo){const r=ge.fromString(e,...t);return Jc(r),new Rn(n,null,r)}{if(!(n instanceof be||n instanceof Rn))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return Jc(r),new Rn(n.firestore,null,r)}}function ye(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=Rl.newId()),Nf("doc","path",e),n instanceof Bo){const r=ge.fromString(e,...t);return Xc(r),new be(n,null,new G(r))}{if(!(n instanceof be||n instanceof Rn))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return Xc(r),new be(n.firestore,n instanceof Rn?n.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="AsyncQueue";class Uh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new $l(this,"async_queue_retry"),this._c=()=>{const r=Aa();r&&$(Fh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Aa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Aa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new qt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Kr(e))throw e;$(Fh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,un("INTERNAL UNHANDLED ERROR: ",Bh(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Ql.createAndSchedule(this,e,t,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Q(47125,{Pc:Bh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Bh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Jt extends Bo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Uh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Uh(e),this._firestoreClient=void 0,await e}}}function BI(n,e){const t=typeof n=="object"?n:If(),r=typeof n=="string"?n:io,i=kl(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=fy("firestore");s&&UI(i,...s)}return i}function Yr(n){if(n._terminated)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||zI(n),n._firestoreClient}function zI(n){var r,i,s;const e=n._freezeSettings(),t=function(l,u,c,d){return new cw(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Up(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new VI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this._byteString=e}static fromBase64String(e){try{return new It(Ge.fromBase64String(e))}catch(t){throw new z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new It(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:It._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zi(e,It._jsonSchema))return It.fromBase64String(e.bytes)}}It._jsonSchemaVersion="firestore/bytes/1.0",It._jsonSchema={type:De("string",It._jsonSchemaVersion),bytes:De("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ht._jsonSchemaVersion}}static fromJSON(e){if(Zi(e,Ht._jsonSchema))return new Ht(e.latitude,e.longitude)}}Ht._jsonSchemaVersion="firestore/geoPoint/1.0",Ht._jsonSchema={type:De("string",Ht._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Wt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zi(e,Wt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Wt(e.vectorValues);throw new z(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wt._jsonSchemaVersion="firestore/vectorValue/1.0",Wt._jsonSchema={type:De("string",Wt._jsonSchemaVersion),vectorValues:De("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=/^__.*__$/;class $I{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Un(e,this.data,this.fieldMask,t,this.fieldTransforms):new ts(e,this.data,t,this.fieldTransforms)}}class zp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Un(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ac:n})}}class su{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new su({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return go(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(qp(this.Ac)&&qI.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class HI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Mo(e)}Cc(e,t,r,i=!1){return new su({Ac:e,methodName:t,Dc:r,path:We.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jr(n){const e=n._freezeSettings(),t=Mo(n._databaseId);return new HI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ou(n,e,t,r,i,s={}){const o=n.Cc(s.merge||s.mergeFields?2:0,e,t,i);cu("Data must be an object, but it was:",o,r);const l=Hp(r,o);let u,c;if(s.merge)u=new vt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const g=al(e,p,t);if(!o.contains(g))throw new z(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Gp(d,g)||d.push(g)}u=new vt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new $I(new st(l),u,c)}class qo extends zo{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qo}}class au extends zo{_toFieldTransform(e){return new jw(e.path,new $i)}isEqual(e){return e instanceof au}}function lu(n,e,t,r){const i=n.Cc(1,e,t);cu("Data must be an object, but it was:",i,r);const s=[],o=st.empty();Fn(r,(u,c)=>{const d=hu(e,u,t);c=Ae(c);const p=i.yc(d);if(c instanceof qo)s.push(d);else{const g=os(c,p);g!=null&&(s.push(d),o.set(d,g))}});const l=new vt(s);return new zp(o,l,i.fieldTransforms)}function uu(n,e,t,r,i,s){const o=n.Cc(1,e,t),l=[al(e,r,t)],u=[i];if(s.length%2!=0)throw new z(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(al(e,s[g])),u.push(s[g+1]);const c=[],d=st.empty();for(let g=l.length-1;g>=0;--g)if(!Gp(c,l[g])){const y=l[g];let S=u[g];S=Ae(S);const R=o.yc(y);if(S instanceof qo)c.push(y);else{const D=os(S,R);D!=null&&(c.push(y),d.set(y,D))}}const p=new vt(c);return new zp(d,p,o.fieldTransforms)}function $p(n,e,t,r=!1){return os(t,n.Cc(r?4:3,e))}function os(n,e){if(Wp(n=Ae(n)))return cu("Unsupported field value:",e,n),Hp(n,e);if(n instanceof zo)return function(r,i){if(!qp(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=os(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Dw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ie.fromDate(r);return{timestampValue:uo(i.serializer,s)}}if(r instanceof Ie){const s=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uo(i.serializer,s)}}if(r instanceof Ht)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof It)return{bytesValue:fp(i.serializer,r._byteString)};if(r instanceof be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Fl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Wt)return function(o,l){return{mapValue:{fields:{[Bf]:{stringValue:zf},[so]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return jl(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${ko(r)}`)}(n,e)}function Hp(n,e){const t={};return Of(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fn(n,(r,i)=>{const s=os(i,e.mc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Wp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ie||n instanceof Ht||n instanceof It||n instanceof be||n instanceof zo||n instanceof Wt)}function cu(n,e,t){if(!Wp(t)||!Df(t)){const r=ko(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function al(n,e,t){if((e=Ae(e))instanceof Xr)return e._internalPath;if(typeof e=="string")return hu(n,e);throw go("Field path arguments must be of type string or ",n,!1,void 0,t)}const WI=new RegExp("[~\\*/\\[\\]]");function hu(n,e,t){if(e.search(WI)>=0)throw go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xr(...e.split("."))._internalPath}catch{throw go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function go(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(L.INVALID_ARGUMENT,l+n+u)}function Gp(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($o("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class GI extends Gi{data(){return super.data()}}function $o(n,e){return typeof e=="string"?hu(n,e):e instanceof Xr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class du{}class Ho extends du{}function et(n,e,...t){let r=[];e instanceof du&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof fu).length,l=s.filter(u=>u instanceof Wo).length;if(o>1||o>0&&l>0)throw new z(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Wo extends Ho{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Wo(e,t,r)}_apply(e){const t=this._parse(e);return Qp(e._query,t),new Zt(e.firestore,e.converter,Ja(e._query,t))}_parse(e){const t=Jr(e.firestore);return function(s,o,l,u,c,d,p){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){$h(p,d);const S=[];for(const R of p)S.push(qh(u,s,R));g={arrayValue:{values:S}}}else g=qh(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||$h(p,d),g=$p(l,o,p,d==="in"||d==="not-in");return Ne.create(c,d,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tt(n,e,t){const r=e,i=$o("where",n);return Wo._create(i,r,t)}class fu extends du{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new fu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Lt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)Qp(o,u),o=Ja(o,u)}(e._query,t),new Zt(e.firestore,e.converter,Ja(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pu extends Ho{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new pu(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qi(s,o)}(e._query,this._field,this._direction);return new Zt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ar(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function ut(n,e="asc"){const t=e,r=$o("orderBy",n);return pu._create(r,t)}class mu extends Ho{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new mu(e,t,r)}_apply(e){return new Zt(e.firestore,e.converter,ao(e._query,this._limit,this._limitType))}}function Cr(n){return Z_("limit",n),mu._create("limit",n,"F")}class gu extends Ho{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new gu(e,t,r)}_apply(e){const t=QI(e,this.type,this._docOrFields,this._inclusive);return new Zt(e.firestore,e.converter,function(i,s){return new ar(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function KI(...n){return gu._create("startAfter",n,!1)}function QI(n,e,t,r){if(t[0]=Ae(t[0]),t[0]instanceof Gi)return function(s,o,l,u,c){if(!u)throw new z(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const d=[];for(const p of xr(s))if(p.field.isKeyField())d.push(oo(o,u.key));else{const g=u.data.field(p.field);if(Ro(g))throw new z(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const y=p.field.canonicalString();throw new z(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(g)}return new Fr(d,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Jr(n.firestore);return function(o,l,u,c,d,p){const g=o.explicitOrderBy;if(d.length>g.length)throw new z(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let S=0;S<d.length;S++){const R=d[S];if(g[S].field.isKeyField()){if(typeof R!="string")throw new z(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof R}`);if(!Ol(o)&&R.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${R}' contains a slash.`);const D=o.path.child(ge.fromString(R));if(!G.isDocumentKey(D))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const P=new G(D);y.push(oo(l,P))}else{const D=$p(u,c,R);y.push(D)}}return new Fr(y,p)}(n._query,n.firestore._databaseId,i,e,t,r)}}function qh(n,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new z(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ol(e)&&t.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ge.fromString(t));if(!G.isDocumentKey(r))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return oo(n,new G(r))}if(t instanceof be)return oo(n,t._key);throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ko(t)}.`)}function $h(n,e){if(!Array.isArray(n)||n.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qp(n,e){const t=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Yp{convertValue(e,t="none"){switch(jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(On(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Fn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var r,i,s;const t=(s=(i=(r=e.fields)==null?void 0:r[so].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>ke(o.doubleValue));return new Wt(t)}convertGeoPoint(e){return new Ht(ke(e.latitude),ke(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Po(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ui(e));default:return null}}convertTimestamp(e){const t=Vn(e);return new Ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);le(Ep(r),9688,{name:e});const i=new Bi(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(t)||un(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class YI extends Yp{constructor(e){super(),this.firestore=e}convertBytes(e){return new It(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}class Sr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pn extends Gi{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field($o("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Pn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pn._jsonSchema={type:De("string",Pn._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class Gs extends Pn{data(e={}){return super.data(e)}}class er{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Sr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Gs(this._firestore,this._userDataWriter,r.key,r,new Sr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Gs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Sr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Gs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Sr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:XI(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=er._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Rl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n){n=ot(n,be);const e=ot(n.firestore,Jt);return MI(Yr(e),n._key).then(t=>Zp(e,n,t))}er._jsonSchemaVersion="firestore/querySnapshot/1.0",er._jsonSchema={type:De("string",er._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};class Go extends Yp{constructor(e){super(),this.firestore=e}convertBytes(e){return new It(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function JI(n){n=ot(n,Zt);const e=ot(n.firestore,Jt),t=Yr(e),r=new Go(e);return Kp(n._query),FI(t,n._query).then(i=>new er(e,r,n,i))}function as(n,e,t){n=ot(n,be);const r=ot(n.firestore,Jt),i=yu(n.converter,e,t);return Ko(r,[ou(Jr(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ve.none())])}function ll(n,e,t,...r){n=ot(n,be);const i=ot(n.firestore,Jt),s=Jr(i);let o;return o=typeof(e=Ae(e))=="string"||e instanceof Xr?uu(s,"updateDoc",n._key,e,t,r):lu(s,"updateDoc",n._key,e),Ko(i,[o.toMutation(n._key,Ve.exists(!0))])}function xi(n){return Ko(ot(n.firestore,Jt),[new ns(n._key,Ve.none())])}function Jp(n,...e){var u,c,d;n=Ae(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||zh(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(zh(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(c=p.error)==null?void 0:c.bind(p),e[r+2]=(d=p.complete)==null?void 0:d.bind(p)}let s,o,l;if(n instanceof be)o=ot(n.firestore,Jt),l=No(n._key.path),s={next:p=>{e[r]&&e[r](Zp(o,n,p))},error:e[r+1],complete:e[r+2]};else{const p=ot(n,Zt);o=ot(p.firestore,Jt),l=p._query;const g=new Go(o);s={next:y=>{e[r]&&e[r](new er(o,g,p,y))},error:e[r+1],complete:e[r+2]},Kp(n._query)}return function(g,y,S,R){const D=new ru(R),P=new eu(y,D,S);return g.asyncQueue.enqueueAndForget(async()=>Xl(await mo(g),P)),()=>{D.Nu(),g.asyncQueue.enqueueAndForget(async()=>Jl(await mo(g),P))}}(Yr(o),l,i,s)}function Ko(n,e){return function(r,i){const s=new qt;return r.asyncQueue.enqueueAndForget(async()=>vI(await jI(r),i,s)),s.promise}(Yr(n),e)}function Zp(n,e,t){const r=t.docs.get(e._key),i=new Go(n);return new Pn(n,i,e._key,r,new Sr(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Jr(e)}set(e,t,r){this._verifyNotCommitted();const i=An(e,this._firestore),s=yu(i.converter,t,r),o=ou(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ve.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=An(e,this._firestore);let o;return o=typeof(t=Ae(t))=="string"||t instanceof Xr?uu(this._dataReader,"WriteBatch.update",s._key,t,r,i):lu(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=An(e,this._firestore);return this._mutations=this._mutations.concat(new ns(t._key,Ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function An(n,e){if((n=Ae(n)).firestore!==e)throw new z(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Jr(e)}get(e){const t=An(e,this._firestore),r=new YI(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return Q(24041);const s=i[0];if(s.isFoundDocument())return new Gi(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new Gi(this._firestore,r,t._key,null,t.converter);throw Q(18433,{doc:s})})}set(e,t,r){const i=An(e,this._firestore),s=yu(i.converter,t,r),o=ou(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=An(e,this._firestore);let o;return o=typeof(t=Ae(t))=="string"||t instanceof Xr?uu(this._dataReader,"Transaction.update",s._key,t,r,i):lu(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=An(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT extends tT{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=An(e,this._firestore),r=new Go(this._firestore);return super.get(e).then(i=>new Pn(this._firestore,r,t._key,i._document,new Sr(!1,!1),t.converter))}}function _u(n,e,t){n=ot(n,Jt);const r={...ZI,...t};return function(s){if(s.maxAttempts<1)throw new z(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,l){const u=new qt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await LI(s);new DI(s.asyncQueue,c,l,o,u).ju()}),u.promise}(Yr(n),i=>e(new nT(n,i)),r)}function Oe(){return new au("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(n){return Yr(n=ot(n,Jt)),new eT(n,e=>Ko(n,e))}(function(e,t=!0){(function(i){Wr=i})(Hr),Vr(new rr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Jt(new $_(r.getProvider("auth-internal")),new G_(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bi(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:t,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),kn(Gc,Kc,e),kn(Gc,Kc,"esm2020")})();function em(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iT=em,tm=new Xi("auth","Firebase",em());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Sl("@firebase/auth");function sT(n,...e){yo.logLevel<=ie.WARN&&yo.warn(`Auth (${Hr}): ${n}`,...e)}function Ks(n,...e){yo.logLevel<=ie.ERROR&&yo.error(`Auth (${Hr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n,...e){throw Eu(n,...e)}function jt(n,...e){return Eu(n,...e)}function wu(n,e,t){const r={...iT(),[e]:t};return new Xi("auth","Firebase",r).create(e,{appName:n.name})}function Nn(n){return wu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oT(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rt(n,"argument-error"),wu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return tm.create(n,...e)}function X(n,e,...t){if(!n)throw Eu(e,...t)}function on(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ks(e),new Error(e)}function hn(n,e){n||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function aT(){return Hh()==="http:"||Hh()==="https:"}function Hh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aT()||Iy()||"connection"in navigator)?navigator.onLine:!0}function uT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t){this.shortDelay=e,this.longDelay=t,hn(t>e,"Short delay should be less than long delay!"),this.isMobile=_y()||Ty()}get(){return lT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n,e){hn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dT=new ls(3e4,6e4);function cr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Bn(n,e,t,r,i={}){return rm(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ji({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:u,...s};return Ey()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&$r(n.emulatorConfig.host)&&(c.credentials="include"),nm.fetch()(await im(n,n.config.apiHost,t,l),c)})}async function rm(n,e,t){n._canInitEmulator=!1;const r={...cT,...e};try{const i=new pT(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ls(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ls(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ls(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ls(n,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw wu(n,d,c);Rt(n,d)}}catch(i){if(i instanceof dn)throw i;Rt(n,"network-request-failed",{message:String(i)})}}async function Qo(n,e,t,r,i={}){const s=await Bn(n,e,t,r,i);return"mfaPendingCredential"in s&&Rt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function im(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Iu(n.config,i):`${n.config.apiScheme}://${i}`;return hT.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function fT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(jt(this.auth,"network-request-failed")),dT.get())})}}function Ls(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=jt(n,e,r);return i.customData._tokenResponse=t,i}function Wh(n){return n!==void 0&&n.enterprise!==void 0}class mT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return fT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gT(n,e){return Bn(n,"GET","/v2/recaptchaConfig",cr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(n,e){return Bn(n,"POST","/v1/accounts:delete",e)}async function _o(n,e){return Bn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _T(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),i=Tu(r);X(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Di(xa(i.auth_time)),issuedAtTime:Di(xa(i.iat)),expirationTime:Di(xa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xa(n){return Number(n)*1e3}function Tu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ks("JWT malformed, contained fewer than 3 sections"),null;try{const i=df(t);return i?JSON.parse(i):(Ks("Failed to decode base64 JWT payload"),null)}catch(i){return Ks("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gh(n){const e=Tu(n);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof dn&&wT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(n){var p;const e=n.auth,t=await n.getIdToken(),r=await Ki(n,_o(e,{idToken:t}));X(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?sm(i.providerUserInfo):[],o=TT(n.providerData,s),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new cl(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(n,d)}async function IT(n){const e=Ae(n);await wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TT(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sm(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT(n,e){const t=await rm(n,{},async()=>{const r=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await im(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&$r(n.emulatorConfig.host)&&(u.credentials="include"),nm.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function bT(n,e){return Bn(n,"POST","/v2/accounts:revokeToken",cr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){X(e.length!==0,"internal-error");const t=Gh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await vT(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Rr;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n,e){X(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new ET(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ki(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return _T(this,e)}reload(){return IT(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await Ki(this,yT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,c=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:y,providerData:S,stsTokenManager:R}=t;X(p&&R,e,"internal-error");const D=Rr.fromJSON(this.name,R);X(typeof p=="string",e,"internal-error"),_n(r,e.name),_n(i,e.name),X(typeof g=="boolean",e,"internal-error"),X(typeof y=="boolean",e,"internal-error"),_n(s,e.name),_n(o,e.name),_n(l,e.name),_n(u,e.name),_n(c,e.name),_n(d,e.name);const P=new Vt({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:d});return S&&Array.isArray(S)&&(P.providerData=S.map(F=>({...F}))),u&&(P._redirectEventId=u),P}static async _fromIdTokenResponse(e,t,r=!1){const i=new Rr;i.updateFromServerResponse(t);const s=new Vt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wo(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?sm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Rr;l.updateFromIdToken(r);const u=new Vt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=new Map;function an(n){hn(n instanceof Function,"Expected a class definition");let e=Kh.get(n);return e?(hn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}om.type="NONE";const Qh=om;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,e,t){return`firebase:${n}:${e}:${t}`}class Pr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await _o(this.auth,{idToken:e}).catch(()=>{});return t?Vt._fromGetAccountInfoResponse(this.auth,t,e):null}return Vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Pr(an(Qh),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||an(Qh);const o=Qs(r,e.config.apiKey,e.name);let l=null;for(const c of t)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const g=await _o(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Vt._fromGetAccountInfoResponse(e,g,d)}else p=Vt._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Pr(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Pr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(am(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dm(e))return"Blackberry";if(fm(e))return"Webos";if(lm(e))return"Safari";if((e.includes("chrome/")||um(e))&&!e.includes("edge/"))return"Chrome";if(hm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function am(n=nt()){return/firefox\//i.test(n)}function lm(n=nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function um(n=nt()){return/crios\//i.test(n)}function cm(n=nt()){return/iemobile/i.test(n)}function hm(n=nt()){return/android/i.test(n)}function dm(n=nt()){return/blackberry/i.test(n)}function fm(n=nt()){return/webos/i.test(n)}function vu(n=nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function AT(n=nt()){var e;return vu(n)&&!!((e=window.navigator)!=null&&e.standalone)}function ST(){return vy()&&document.documentMode===10}function pm(n=nt()){return vu(n)||hm(n)||fm(n)||dm(n)||/windows phone/i.test(n)||cm(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(n,e=[]){let t;switch(n){case"Browser":t=Yh(nt());break;case"Worker":t=`${Yh(nt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(n,e={}){return Bn(n,"GET","/v2/passwordPolicy",cr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=6;class RT{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??CT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xh(this),this.idTokenSubscription=new Xh(this),this.beforeStateQueue=new xT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=an(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Pr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await _o(this,{idToken:e}),r=await Vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(Nn(this));const t=e?Ae(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kT(this),t=new RT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await bT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&an(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=await Pr.create(this,[an(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&sT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function hr(n){return Ae(n)}class Xh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Py(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NT(n){Yo=n}function gm(n){return Yo.loadJS(n)}function DT(){return Yo.recaptchaEnterpriseScript}function VT(){return Yo.gapiScript}function OT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class jT{constructor(){this.enterprise=new LT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class LT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const MT="recaptcha-enterprise",ym="NO_RECAPTCHA";class FT{constructor(e){this.type=MT,this.auth=hr(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{gT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new mT(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Wh(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ym)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jT().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!t&&Wh(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=DT();u.length!==0&&(u+=l),gm(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Jh(n,e,t,r=!1,i=!1){const s=new FT(n);let o;if(i)o=ym;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Zh(n,e,t,r,i){var s;if((s=n._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Jh(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Jh(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(n,e){const t=kl(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(nr(s,e??{}))return i;Rt(i,"already-initialized")}return t.initialize({options:e})}function BT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(an);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zT(n,e,t){const r=hr(n);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=_m(e),{host:o,port:l}=qT(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(nr(c,r.config.emulator)&&nr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,$r(o)?(gf(`${s}//${o}${u}`),yf("Auth",!0)):$T()}function _m(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qT(n){const e=_m(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ed(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ed(o)}}}function ed(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $T(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,t){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}async function HT(n,e){return Bn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(n,e){return Qo(n,"POST","/v1/accounts:signInWithPassword",cr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(n,e){return Qo(n,"POST","/v1/accounts:signInWithEmailLink",cr(n,e))}async function KT(n,e){return Qo(n,"POST","/v1/accounts:signInWithEmailLink",cr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends bu{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Qi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Qi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zh(e,t,"signInWithPassword",WT);case"emailLink":return GT(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zh(e,r,"signUpPassword",HT);case"emailLink":return KT(e,{idToken:t,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(n,e){return Qo(n,"POST","/v1/accounts:signInWithIdp",cr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="http://localhost";class or extends bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const o=new or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Nr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Nr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nr(e,t)}buildRequest(){const e={requestUri:QT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ji(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XT(n){const e=Ti(vi(n)).link,t=e?Ti(vi(e)).deep_link_id:null,r=Ti(vi(n)).deep_link_id;return(r?Ti(vi(r)).link:null)||r||t||e||n}class Au{constructor(e){const t=Ti(vi(e)),r=t.apiKey??null,i=t.oobCode??null,s=YT(t.mode??null);X(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=XT(e);try{return new Au(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.providerId=Zr.PROVIDER_ID}static credential(e,t){return Qi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Au.parseLink(t);return X(r,"argument-error"),Qi._fromEmailAndCode(e,r.code,r.tenantId)}}Zr.PROVIDER_ID="password";Zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Su{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends us{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return or._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return sn.credential(t,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends us{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends us{constructor(){super("twitter.com")}static credential(e,t){return or._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Tn.credential(t,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Vt._fromIdTokenResponse(e,r,i),o=td(r);return new zr({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=td(r);return new zr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function td(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends dn{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Eo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Eo(e,t,r,i)}}function wm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Eo._fromErrorAndOperation(n,s,e,r):s})}async function JT(n,e,t=!1){const r=await Ki(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return zr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(n,e,t=!1){const{auth:r}=n;if(Ct(r.app))return Promise.reject(Nn(r));const i="reauthenticate";try{const s=await Ki(n,wm(r,i,e,n),t);X(s.idToken,r,"internal-error");const o=Tu(s.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(n.uid===l,r,"user-mismatch"),zr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Rt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(n,e,t=!1){if(Ct(n.app))return Promise.reject(Nn(n));const r="signIn",i=await wm(n,r,e),s=await zr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function ev(n,e){return Em(hr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(n){const e=hr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function nv(n,e,t){return Ct(n.app)?Promise.reject(Nn(n)):ev(Ae(n),Zr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tv(n),r})}function rv(n,e,t,r){return Ae(n).onIdTokenChanged(e,t,r)}function iv(n,e,t){return Ae(n).beforeAuthStateChanged(e,t)}function sv(n,e,t,r){return Ae(n).onAuthStateChanged(e,t,r)}function ov(n){return Ae(n).signOut()}const Io="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=1e3,lv=10;class Tm extends Im{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ST()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},av)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tm.type="LOCAL";const uv=Tm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm extends Im{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vm.type="SESSION";const bm=vm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(t.origin,s)),u=await cv(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=xu("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function dv(n){Gt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function fv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function mv(){return Am()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="firebaseLocalStorageDb",gv=1,To="firebaseLocalStorage",xm="fbase_key";class cs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Jo(n,e){return n.transaction([To],e?"readwrite":"readonly").objectStore(To)}function yv(){const n=indexedDB.deleteDatabase(Sm);return new cs(n).toPromise()}function hl(){const n=indexedDB.open(Sm,gv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(To,{keyPath:xm})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(To)?e(r):(r.close(),await yv(),e(await hl()))})})}async function nd(n,e,t){const r=Jo(n,!0).put({[xm]:e,value:t});return new cs(r).toPromise()}async function _v(n,e){const t=Jo(n,!1).get(e),r=await new cs(t).toPromise();return r===void 0?null:r.value}function rd(n,e){const t=Jo(n,!0).delete(e);return new cs(t).toPromise()}const wv=800,Ev=3;class km{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ev)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Am()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance(mv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await fv(),!this.activeServiceWorker)return;this.sender=new hv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hl();return await nd(e,Io,"1"),await rd(e,Io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>_v(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jo(i,!1).getAll();return new cs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}km.type="LOCAL";const Iv=km;new ls(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(n,e){return e?an(e):(X(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tv(n){return Em(n.auth,new ku(n),n.bypassAuthState)}function vv(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),ZT(t,new ku(n),n.bypassAuthState)}async function bv(n){const{auth:e,user:t}=n;return X(t,e,"internal-error"),JT(t,new ku(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tv;case"linkViaPopup":case"linkViaRedirect":return bv;case"reauthViaPopup":case"reauthViaRedirect":return vv;default:Rt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=new ls(2e3,1e4);async function Sv(n,e,t){if(Ct(n.app))return Promise.reject(jt(n,"operation-not-supported-in-this-environment"));const r=hr(n);oT(n,e,Su);const i=Cm(r,t);return new Zn(r,"signInViaPopup",e,i).executeNotNull()}class Zn extends Rm{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Av.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="pendingRedirect",Ys=new Map;class kv extends Rm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ys.get(this.auth._key());if(!e){try{const r=await Cv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ys.set(this.auth._key(),e)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cv(n,e){const t=Nv(e),r=Pv(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Rv(n,e){Ys.set(n._key(),e)}function Pv(n){return an(n._redirectPersistence)}function Nv(n){return Qs(xv,n.config.apiKey,n.name)}async function Dv(n,e,t=!1){if(Ct(n.app))return Promise.reject(Nn(n));const r=hr(n),i=Cm(r,e),o=await new kv(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=10*60*1e3;class Ov{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Pm(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(jt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vv&&this.cachedEventUids.clear(),this.cachedEventUids.has(id(e))}saveEventToCache(e){this.cachedEventUids.add(id(e)),this.lastProcessedEventTime=Date.now()}}function id(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(n,e={}){return Bn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fv=/^https?/;async function Uv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Lv(n);for(const t of e)try{if(Bv(t))return}catch{}Rt(n,"unauthorized-domain")}function Bv(n){const e=ul(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Fv.test(t))return!1;if(Mv.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=new ls(3e4,6e4);function sd(){const n=Gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qv(n){return new Promise((e,t)=>{var i,s,o;function r(){sd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sd(),t(jt(n,"network-request-failed"))},timeout:zv.get()})}if((s=(i=Gt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Gt().gapi)!=null&&o.load)r();else{const l=OT("iframefcb");return Gt()[l]=()=>{gapi.load?r():t(jt(n,"network-request-failed"))},gm(`${VT()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Xs=null,e})}let Xs=null;function $v(n){return Xs=Xs||qv(n),Xs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new ls(5e3,15e3),Wv="__/auth/iframe",Gv="emulator/auth/iframe",Kv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yv(n){const e=n.config;X(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Iu(e,Gv):`https://${n.config.authDomain}/${Wv}`,r={apiKey:e.apiKey,appName:n.name,v:Hr},i=Qv.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ji(r).slice(1)}`}async function Xv(n){const e=await $v(n),t=Gt().gapi;return X(t,n,"internal-error"),e.open({where:document.body,url:Yv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=jt(n,"network-request-failed"),l=Gt().setTimeout(()=>{s(o)},Hv.get());function u(){Gt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zv=500,eb=600,tb="_blank",nb="http://localhost";class od{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rb(n,e,t,r=Zv,i=eb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Jv,width:r.toString(),height:i.toString(),top:s,left:o},c=nt().toLowerCase();t&&(l=um(c)?tb:t),am(c)&&(e=e||nb,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[y,S])=>`${g}${y}=${S},`,"");if(AT(c)&&l!=="_self")return ib(e||"",l),new od(null);const p=window.open(e||"",l,d);X(p,n,"popup-blocked");try{p.focus()}catch{}return new od(p)}function ib(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="__/auth/handler",ob="emulator/auth/handler",ab=encodeURIComponent("fac");async function ad(n,e,t,r,i,s){X(n.config.authDomain,n,"auth-domain-config-required"),X(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Hr,eventId:i};if(e instanceof Su){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ry(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof us){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await n._getAppCheckToken(),c=u?`#${ab}=${encodeURIComponent(u)}`:"";return`${lb(n)}?${Ji(l).slice(1)}${c}`}function lb({config:n}){return n.emulator?Iu(n,ob):`https://${n.authDomain}/${sb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="webStorageSupport";class ub{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bm,this._completeRedirectFn=Dv,this._overrideRedirectResult=Rv}async _openPopup(e,t,r,i){var o;hn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await ad(e,t,r,ul(),i);return rb(e,s,xu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await ad(e,t,r,ul(),i);return dv(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Xv(e),r=new Ov(e);return t.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ka,{type:ka},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ka];s!==void 0&&t(!!s),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Uv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pm()||lm()||vu()}}const cb=ub;var ld="@firebase/auth",ud="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fb(n){Vr(new rr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mm(n)},c=new PT(r,i,s,u);return BT(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new rr("auth-internal",e=>{const t=hr(e.getProvider("auth").getImmediate());return(r=>new hb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(ld,ud,db(n)),kn(ld,ud,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=5*60,mb=mf("authIdTokenMaxAge")||pb;let cd=null;const gb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>mb)return;const i=t==null?void 0:t.token;cd!==i&&(cd=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yb(n=If()){const e=kl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=UT(n,{popupRedirectResolver:cb,persistence:[Iv,uv,bm]}),r=mf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gb(s.toString());iv(t,o,()=>o(t.currentUser)),rv(t,l=>o(l))}}const i=ff("auth");return i&&zT(t,`http://${i}`),t}function _b(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}NT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=jt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",_b().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fb("Browser");var wb="firebase",Eb="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(wb,Eb,"app");const hd=Al.projectId,Nm=Ef({projectId:hd,apiKey:Al.apiKey,authDomain:`${hd}.firebaseapp.com`,appId:"1:632551270983:web:e12f6a2a483f8b99d0df62"},"personal"),Zo=yb(Nm),me=BI(Nm),Ib=()=>Sv(Zo,new sn),Tb=n=>nv(Zo,Al.editorEmail,n),vb=()=>ov(Zo),vn="AvqwmPY304eoBGWcOk536dCWgYq1",Dm=["opinions","beliefs","projects","story"],Vm=["Exploring","Planned","Building","Active","Completed","Archived"],dd={introduction:"I’m Ashutosh Srivastava. I explore product, technology, and the ideas that shape a life.",about:`I’m a computer science graduate focused on product management, user discovery, product strategy, analytics, and growth experiments.

My work includes product systems at Flurn, early consumer product and growth work at Hugsy, and projects across AI, iOS, analytics, and more.

This is my space for the work, the questions, and the journey beyond it.`,doing:"Exploring product management opportunities.",learning:"",building:"",exploring:"",tags:["Product","AI","Technology"],categories:["Software","Product","Research","Creative","Civic & policy","Business"],socials:[{platform:"Email",url:"mailto:ashu.61003@gmail.com"},{platform:"LinkedIn",url:"https://www.linkedin.com/in/ashutosh-srivastava-892433226/"},{platform:"GitHub",url:"https://github.com/AshutoshSri123"}]},bb=[{id:"scope",type:"projects",title:"SCOPE",summary:"A solar output estimator built with SwiftUI, Core ML, location, and weather data.",body:`Developed a Solar Capacity Output Potential Estimator for predicting solar generation from user location, roof area, and weather inputs.

The iOS experience brings together maps, onboarding, weather context, and Core ML regression.`,category:"Software",projectStatus:"Completed",period:"Aug 2025",tags:["AI","iOS"],links:[{label:"GitHub",url:"https://github.com/AshutoshSri123/SCOPE"}]},{id:"ecommerce-analytics",type:"projects",title:"E-commerce Analytics",summary:"A Python and SQL pipeline for revenue analysis, segmentation, and visualization.",body:"Created an analytics system covering CSV ingestion, relational modeling, SQL querying, customer segmentation, and notebook reporting.",category:"Software",projectStatus:"Completed",period:"Sep 2025",tags:["Analytics"],links:[{label:"GitHub",url:"https://github.com/AshutoshSri123/SQL_Python_EcommerceProject"}]},{id:"rainbow-coloring",type:"projects",title:"Rainbow Coloring",summary:"Fuzzy logic and rainbow coloring algorithms across graph families.",body:"Co-led a graph algorithm project combining fuzzy logic with rainbow coloring. The work includes alpha-cut graph construction, BFS and DFS checks, spanning-tree coloring, and greedy optimization.",category:"Research",projectStatus:"Completed",period:"Nov 2025",tags:["Algorithms"],links:[{label:"Project report",url:"/files/fuzzy-rainbow-coloring.pdf"}]},{id:"parkinsons-detection",type:"projects",title:"Parkinsons Detection",summary:"A leakage-aware, explainable voice-based machine learning framework.",body:"Built a voice-based biomedical ML framework with GroupKFold validation, feature selection, ensemble classification workflows, and SHAP explanations.",category:"Research",projectStatus:"Completed",period:"Apr 2026",tags:["AI","Research"],links:[{label:"Project report",url:"/files/parkinsons-disease-report.pdf"}]}].map(n=>({...n,published:!0,featured:!1,relatedIds:[],category:"",projectStatus:"Exploring",period:"",...n,format:"Note",attribution:"",reasoning:"",date:"",image:"",collaborators:"",revision:0}));function tt(n){if(typeof n!="string")return"";if(/^\/(?!\/)/.test(n))return n;try{const e=new URL(n);return["https:","http:","mailto:"].includes(e.protocol)?n:""}catch{return""}}function Om(n){return`/${n.type}/${n.id}`}function dl(n){return[...new Set(n.split(",").map(e=>e.trim()).filter(Boolean))].slice(0,30)}function Ab(n){var e,t;if(!Dm.includes(n.type))throw new Error("Choose a content type.");if(!((e=n.title)!=null&&e.trim())||n.title.length>180)throw new Error("Use a title of 1–180 characters.");if(!((t=n.body)!=null&&t.trim())||n.body.length>6e4)throw new Error("Add content of up to 60,000 characters.");if(n.summary.length>600)throw new Error("Keep the summary under 600 characters.");if(n.links.some(r=>!tt(r.url)))throw new Error("Use valid http, https, mailto, or site-relative links.");if(n.image&&!tt(n.image))throw new Error("Use a valid image URL.");return n}function ct(n){const e=(n==null?void 0:n.code)||"";return e.includes("permission-denied")?"This data is unavailable for this account. Please sign in again or try later.":e.includes("unauthorized-domain")?"Google sign-in is not enabled for this domain yet.":e.includes("operation-not-allowed")?"Google sign-in needs to be enabled in Firebase Authentication.":e.includes("popup-blocked")?"Allow the sign-in popup and try again.":e.includes("popup-closed")?"Sign-in was cancelled. You can try again.":e.includes("invalid-credential")?"The owner email or password was not accepted.":e.includes("failed-precondition")?"The database indexes are still being configured. Please try again shortly.":(n==null?void 0:n.message)||"Could not connect. Please try again."}const ht=Ot(me,"personalContent"),jm=ye(me,"personalSettings","site"),fd=n=>({id:n.id,...n.data()});async function Sb(n){Ab(n);const{id:e,...t}=n,r=e?ye(ht,e):ye(ht);return await _u(me,async i=>{var o,l;const s=await i.get(r);if(s.exists()&&s.data().revision!==t.revision)throw new Error("This entry changed on another device. Reopen it before saving. Your draft is still here.");i.set(r,{...t,revision:(((o=s.data())==null?void 0:o.revision)||0)+1,date:t.date||(t.type==="story"||!t.published?"":(()=>{const u=new Date;return[u.getFullYear(),String(u.getMonth()+1).padStart(2,"0"),String(u.getDate()).padStart(2,"0")].join("-")})()),updatedAt:Oe(),createdAt:((l=s.data())==null?void 0:l.createdAt)||Oe()})}),r.id}async function xb(n,e,t=n.uid,r="message"){if(!e.trim()||e.length>4e3)throw new Error("Write a message of 1–4,000 characters.");const i=ye(me,"personalConversations",t),s=ye(Ot(i,"messages"));await _u(me,async o=>{var c;const l=await o.get(i),u=l.data();if(u!=null&&u.blocked&&n.uid!==vn)throw new Error("This conversation is closed.");if(n.uid!==vn&&((c=u==null?void 0:u.lastMessageAt)==null?void 0:c.toMillis())>Date.now()-5e3)throw new Error("Please wait a few seconds before sending another message.");if(!l.exists()&&n.uid===vn)throw new Error("Choose an existing conversation.");o.set(s,{text:e.trim(),senderId:n.uid,createdAt:Oe(),kind:r}),o.set(i,{...u||{ownerId:n.uid,ownerName:(n.uid===vn?"Ashutosh":n.displayName||"Reader").slice(0,100),ownerPhoto:n.photoURL||"",createdAt:Oe(),blocked:!1,adminReadAt:null,userReadAt:null},lastMessage:e.trim(),lastMessageAt:Oe(),lastMessageId:s.id,lastSenderId:n.uid,archived:!1,...n.uid===vn?{adminReadAt:Oe()}:{userReadAt:Oe()}})})}async function kb(n,e,t){if(!t.trim()||t.length>2e3)throw new Error("Write a message of 1–2,000 characters.");const r=ye(me,"personalSpaces",e),i=ye(r,"members",n.uid),s=ye(Ot(r,"messages"));await _u(me,async o=>{var u;const l=await o.get(i);if(!l.exists())throw new Error("Join this discussion first.");if(((u=l.data().lastSentAt)==null?void 0:u.toMillis())>Date.now()-5e3)throw new Error("Please wait a few seconds before posting again.");o.update(i,{lastSentAt:Oe(),lastMessageId:s.id}),o.set(s,{text:t.trim(),senderId:n.uid,displayName:(n.uid===vn?"Ashutosh":n.displayName||"Reader").slice(0,100),createdAt:Oe()})})}async function Cb(n,e){await as(ye(me,"personalSpaces",e,"members",n.uid),{uid:n.uid,displayName:(n.uid===vn?"Ashutosh":n.displayName||"Reader").slice(0,100),photoURL:n.photoURL||"",joinedAt:Oe(),lastSentAt:null,lastMessageId:""})}async function Rb(n){const e=rT(me);for(const t of n){const r=ye(ht,t.id);if((await Xp(r)).exists())continue;const{id:i,...s}=t;e.set(r,{...s,sortDate:s.date||"",revision:1,updatedAt:Oe(),createdAt:Oe()})}await e.commit()}const Lm=K.createContext(null);function Pb({children:n}){const[e,t]=K.useState(null),[r,i]=K.useState(!0),[s,o]=K.useState(dd),[l,u]=K.useState("");return K.useEffect(()=>sv(Zo,c=>{t(c),i(!1),c&&as(ye(me,"personalUsers",c.uid),{displayName:(c.displayName||"Reader").slice(0,100),photoURL:c.photoURL||"",updatedAt:Oe()}).catch(()=>{})}),[]),K.useEffect(()=>Jp(jm,c=>{o({...dd,...c.data()}),u("")},c=>u(ct(c))),[]),f.jsx(Lm.Provider,{value:{user:e,authLoading:r,isAdmin:(e==null?void 0:e.uid)===vn,settings:s,settingsError:l},children:n})}function en(){return K.useContext(Lm)}function Kt(n,e){const[t,r]=K.useState({items:[],loading:!0,error:"",key:e});return K.useEffect(()=>{if(r({items:[],loading:!!n,error:"",key:e}),!!n)return Jp(n,i=>r({documents:i.docs,items:i.docs?i.docs.map(fd):i.exists()?[fd(i)]:[],loading:!1,error:"",key:e}),i=>r({items:[],loading:!1,error:ct(i),key:e}))},[e]),t.key===e?t:{items:[],loading:!!n,error:""}}function Qt(n,e,t=20){const[r,i]=K.useState({key:e,cursors:[]}),s=r.key===e?r.cursors:[],o=s.at(-1),l=Kt(n?et(n,...o?[KI(o)]:[],Cr(t+1)):null,`${e}:page:${s.map(u=>u.id).join(":")}`);return{...l,items:l.items.slice(0,t),page:s.length+1,hasNext:l.items.length>t,next:()=>{l.items.length>t&&i({key:e,cursors:[...s,l.documents[t-1]]})},previous:()=>i({key:e,cursors:s.slice(0,-1)}),reset:()=>i({key:e,cursors:[]})}}function Nb(n,e){const t={};return(n[n.length-1]===""?[...n,""]:n).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const Db=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Vb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ob={};function pd(n,e){return(Ob.jsx?Vb:Db).test(n)}const jb=/[ \t\n\f\r]/g;function Lb(n){return typeof n=="object"?n.type==="text"?md(n.value):!1:md(n)}function md(n){return n.replace(jb,"")===""}class hs{constructor(e,t,r){this.normal=t,this.property=e,r&&(this.space=r)}}hs.prototype.normal={};hs.prototype.property={};hs.prototype.space=void 0;function Mm(n,e){const t={},r={};for(const i of n)Object.assign(t,i.property),Object.assign(r,i.normal);return new hs(t,r,e)}function fl(n){return n.toLowerCase()}class ft{constructor(e,t){this.attribute=t,this.property=e}}ft.prototype.attribute="";ft.prototype.booleanish=!1;ft.prototype.boolean=!1;ft.prototype.commaOrSpaceSeparated=!1;ft.prototype.commaSeparated=!1;ft.prototype.defined=!1;ft.prototype.mustUseProperty=!1;ft.prototype.number=!1;ft.prototype.overloadedBoolean=!1;ft.prototype.property="";ft.prototype.spaceSeparated=!1;ft.prototype.space=void 0;let Mb=0;const te=dr(),Pe=dr(),pl=dr(),U=dr(),we=dr(),tr=dr(),Et=dr();function dr(){return 2**++Mb}const ml=Object.freeze(Object.defineProperty({__proto__:null,boolean:te,booleanish:Pe,commaOrSpaceSeparated:Et,commaSeparated:tr,number:U,overloadedBoolean:pl,spaceSeparated:we},Symbol.toStringTag,{value:"Module"})),Ca=Object.keys(ml);class Cu extends ft{constructor(e,t,r,i){let s=-1;if(super(e,t),gd(this,"space",i),typeof r=="number")for(;++s<Ca.length;){const o=Ca[s];gd(this,Ca[s],(r&ml[o])===ml[o])}}}Cu.prototype.defined=!0;function gd(n,e,t){t&&(n[e]=t)}function ei(n){const e={},t={};for(const[r,i]of Object.entries(n.properties)){const s=new Cu(r,n.transform(n.attributes||{},r),i,n.space);n.mustUseProperty&&n.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),e[r]=s,t[fl(r)]=r,t[fl(s.attribute)]=r}return new hs(e,t,n.space)}const Fm=ei({properties:{ariaActiveDescendant:null,ariaAtomic:Pe,ariaAutoComplete:null,ariaBusy:Pe,ariaChecked:Pe,ariaColCount:U,ariaColIndex:U,ariaColSpan:U,ariaControls:we,ariaCurrent:null,ariaDescribedBy:we,ariaDetails:null,ariaDisabled:Pe,ariaDropEffect:we,ariaErrorMessage:null,ariaExpanded:Pe,ariaFlowTo:we,ariaGrabbed:Pe,ariaHasPopup:null,ariaHidden:Pe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:we,ariaLevel:U,ariaLive:null,ariaModal:Pe,ariaMultiLine:Pe,ariaMultiSelectable:Pe,ariaOrientation:null,ariaOwns:we,ariaPlaceholder:null,ariaPosInSet:U,ariaPressed:Pe,ariaReadOnly:Pe,ariaRelevant:null,ariaRequired:Pe,ariaRoleDescription:we,ariaRowCount:U,ariaRowIndex:U,ariaRowSpan:U,ariaSelected:Pe,ariaSetSize:U,ariaSort:null,ariaValueMax:U,ariaValueMin:U,ariaValueNow:U,ariaValueText:null,role:null},transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function Um(n,e){return e in n?n[e]:e}function Bm(n,e){return Um(n,e.toLowerCase())}const Fb=ei({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:tr,acceptCharset:we,accessKey:we,action:null,allow:null,allowFullScreen:te,allowPaymentRequest:te,allowUserMedia:te,alpha:te,alt:null,as:null,async:te,autoCapitalize:null,autoComplete:we,autoFocus:te,autoPlay:te,blocking:we,capture:null,charSet:null,checked:te,cite:null,className:we,closedBy:null,colorSpace:null,cols:U,colSpan:U,command:null,commandFor:null,content:null,contentEditable:Pe,controls:te,controlsList:we,coords:U|tr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:te,defer:te,dir:null,dirName:null,disabled:te,download:pl,draggable:Pe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:te,formTarget:null,headers:we,height:U,hidden:pl,high:U,href:null,hrefLang:null,htmlFor:we,httpEquiv:we,id:null,imageSizes:null,imageSrcSet:null,inert:te,inputMode:null,integrity:null,is:null,isMap:te,itemId:null,itemProp:we,itemRef:we,itemScope:te,itemType:we,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:te,low:U,manifest:null,max:null,maxLength:U,media:null,method:null,min:null,minLength:U,multiple:te,muted:te,name:null,nonce:null,noModule:te,noValidate:te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:te,optimum:U,pattern:null,ping:we,placeholder:null,playsInline:te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:te,referrerPolicy:null,rel:we,required:te,reversed:te,rows:U,rowSpan:U,sandbox:we,scope:null,scoped:te,seamless:te,selected:te,shadowRootClonable:te,shadowRootCustomElementRegistry:te,shadowRootDelegatesFocus:te,shadowRootMode:null,shadowRootSerializable:te,shape:null,size:U,sizes:null,slot:null,span:U,spellCheck:Pe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:U,step:null,style:null,tabIndex:U,target:null,title:null,translate:null,type:null,typeMustMatch:te,useMap:null,value:Pe,width:U,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:we,axis:null,background:null,bgColor:null,border:U,borderColor:null,bottomMargin:U,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:te,declare:te,event:null,face:null,frame:null,frameBorder:null,hSpace:U,leftMargin:U,link:null,longDesc:null,lowSrc:null,marginHeight:U,marginWidth:U,noResize:te,noHref:te,noShade:te,noWrap:te,object:null,profile:null,prompt:null,rev:null,rightMargin:U,rules:null,scheme:null,scrolling:Pe,standby:null,summary:null,text:null,topMargin:U,valueType:null,version:null,vAlign:null,vLink:null,vSpace:U,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:te,disablePictureInPicture:te,disableRemotePlayback:te,exportParts:tr,part:we,prefix:null,property:null,results:U,security:null,unselectable:null},space:"html",transform:Bm}),Ub=ei({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Et,accentHeight:U,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:U,amplitude:U,arabicForm:null,ascent:U,attributeName:null,attributeType:null,azimuth:U,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:U,by:null,calcMode:null,capHeight:U,className:we,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:U,diffuseConstant:U,direction:null,display:null,dur:null,divisor:U,dominantBaseline:null,download:te,dx:null,dy:null,edgeMode:null,editable:null,elevation:U,enableBackground:null,end:null,event:null,exponent:U,externalResourcesRequired:null,fill:null,fillOpacity:U,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:tr,g2:tr,glyphName:tr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:U,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:U,horizOriginX:U,horizOriginY:U,id:null,ideographic:U,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:U,k:U,k1:U,k2:U,k3:U,k4:U,kernelMatrix:Et,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:U,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:U,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:U,overlineThickness:U,paintOrder:null,panose1:null,path:null,pathLength:U,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:we,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:U,pointsAtY:U,pointsAtZ:U,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Et,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Et,rev:Et,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Et,requiredFeatures:Et,requiredFonts:Et,requiredFormats:Et,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:U,specularExponent:U,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:U,strikethroughThickness:U,string:null,stroke:null,strokeDashArray:Et,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:U,strokeOpacity:U,strokeWidth:null,style:null,surfaceScale:U,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Et,tabIndex:U,tableValues:null,target:null,targetX:U,targetY:U,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Et,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:U,underlineThickness:U,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:U,values:null,vAlphabetic:U,vMathematical:U,vectorEffect:null,vHanging:U,vIdeographic:U,version:null,vertAdvY:U,vertOriginX:U,vertOriginY:U,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:U,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Um}),zm=ei({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()}}),qm=ei({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Bm}),$m=ei({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()}}),Bb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},zb=/[A-Z]/g,yd=/-[a-z]/g,qb=/^data[-\w.:]+$/i;function $b(n,e){const t=fl(e);let r=e,i=ft;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&qb.test(e)){if(e.charAt(4)==="-"){const s=e.slice(5).replace(yd,Wb);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=e.slice(4);if(!yd.test(s)){let o=s.replace(zb,Hb);o.charAt(0)!=="-"&&(o="-"+o),e="data"+o}}i=Cu}return new i(r,e)}function Hb(n){return"-"+n.toLowerCase()}function Wb(n){return n.charAt(1).toUpperCase()}const Gb=Mm([Fm,Fb,zm,qm,$m],"html"),Ru=Mm([Fm,Ub,zm,qm,$m],"svg");function Kb(n){return n.join(" ").trim()}var Pu={},_d=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Qb=/\n/g,Yb=/^\s*/,Xb=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Jb=/^:\s*/,Zb=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,eA=/^[;\s]*/,tA=/^\s+|\s+$/g,nA=`
`,wd="/",Ed="*",Xn="",rA="comment",iA="declaration";function sA(n,e){if(typeof n!="string")throw new TypeError("First argument must be a string");if(!n)return[];e=e||{};var t=1,r=1;function i(S){var R=S.match(Qb);R&&(t+=R.length);var D=S.lastIndexOf(nA);r=~D?S.length-D:r+S.length}function s(){var S={line:t,column:r};return function(R){return R.position=new o(S),c(),R}}function o(S){this.start=S,this.end={line:t,column:r},this.source=e.source}o.prototype.content=n;function l(S){var R=new Error(e.source+":"+t+":"+r+": "+S);if(R.reason=S,R.filename=e.source,R.line=t,R.column=r,R.source=n,!e.silent)throw R}function u(S){var R=S.exec(n);if(R){var D=R[0];return i(D),n=n.slice(D.length),R}}function c(){u(Yb)}function d(S){var R;for(S=S||[];R=p();)R!==!1&&S.push(R);return S}function p(){var S=s();if(!(wd!=n.charAt(0)||Ed!=n.charAt(1))){for(var R=2;Xn!=n.charAt(R)&&(Ed!=n.charAt(R)||wd!=n.charAt(R+1));)++R;if(R+=2,Xn===n.charAt(R-1))return l("End of comment missing");var D=n.slice(2,R-2);return r+=2,i(D),n=n.slice(R),r+=2,S({type:rA,comment:D})}}function g(){var S=s(),R=u(Xb);if(R){if(p(),!u(Jb))return l("property missing ':'");var D=u(Zb),P=S({type:iA,property:Id(R[0].replace(_d,Xn)),value:D?Id(D[0].replace(_d,Xn)):Xn});return u(eA),P}}function y(){var S=[];d(S);for(var R;R=g();)R!==!1&&(S.push(R),d(S));return S}return c(),y()}function Id(n){return n?n.replace(tA,Xn):Xn}var oA=sA,aA=eo&&eo.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(Pu,"__esModule",{value:!0});Pu.default=uA;const lA=aA(oA);function uA(n,e){let t=null;if(!n||typeof n!="string")return t;const r=(0,lA.default)(n),i=typeof e=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:o,value:l}=s;i?e(o,l,s):l&&(t=t||{},t[o]=l)}),t}var ea={};Object.defineProperty(ea,"__esModule",{value:!0});ea.camelCase=void 0;var cA=/^--[a-zA-Z0-9_-]+$/,hA=/-([a-z])/g,dA=/^[^-]+$/,fA=/^-(webkit|moz|ms|o|khtml)-/,pA=/^-(ms)-/,mA=function(n){return!n||dA.test(n)||cA.test(n)},gA=function(n,e){return e.toUpperCase()},Td=function(n,e){return"".concat(e,"-")},yA=function(n,e){return e===void 0&&(e={}),mA(n)?n:(n=n.toLowerCase(),e.reactCompat?n=n.replace(pA,Td):n=n.replace(fA,Td),n.replace(hA,gA))};ea.camelCase=yA;var _A=eo&&eo.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},wA=_A(Pu),EA=ea;function gl(n,e){var t={};return!n||typeof n!="string"||(0,wA.default)(n,function(r,i){r&&i&&(t[(0,EA.camelCase)(r,e)]=i)}),t}gl.default=gl;var IA=gl;const TA=af(IA),Hm=Wm("end"),Nu=Wm("start");function Wm(n){return e;function e(t){const r=t&&t.position&&t.position[n]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function vA(n){const e=Nu(n),t=Hm(n);if(e&&t)return{start:e,end:t}}function Vi(n){return!n||typeof n!="object"?"":"position"in n||"type"in n?vd(n.position):"start"in n||"end"in n?vd(n):"line"in n||"column"in n?yl(n):""}function yl(n){return bd(n&&n.line)+":"+bd(n&&n.column)}function vd(n){return yl(n&&n.start)+"-"+yl(n&&n.end)}function bd(n){return n&&typeof n=="number"?n:1}class rt extends Error{constructor(e,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",s={},o=!1;if(t&&("line"in t&&"column"in t?s={place:t}:"start"in t&&"end"in t?s={place:t}:"type"in t?s={ancestors:[t],place:t.position}:s={...t}),typeof e=="string"?i=e:!s.cause&&e&&(o=!0,i=e.message,s.cause=e),!s.ruleId&&!s.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?s.ruleId=r:(s.source=r.slice(0,u),s.ruleId=r.slice(u+1))}if(!s.place&&s.ancestors&&s.ancestors){const u=s.ancestors[s.ancestors.length-1];u&&(s.place=u.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Vi(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=o&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}rt.prototype.file="";rt.prototype.name="";rt.prototype.reason="";rt.prototype.message="";rt.prototype.stack="";rt.prototype.column=void 0;rt.prototype.line=void 0;rt.prototype.ancestors=void 0;rt.prototype.cause=void 0;rt.prototype.fatal=void 0;rt.prototype.place=void 0;rt.prototype.ruleId=void 0;rt.prototype.source=void 0;const Du={}.hasOwnProperty,bA=new Map,AA=/[A-Z]/g,SA=new Set(["table","tbody","thead","tfoot","tr"]),xA=new Set(["td","th"]),Gm="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function kA(n,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=e.filePath||void 0;let r;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=jA(t,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=OA(t,e.jsx,e.jsxs)}const i={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:r,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?Ru:Gb,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},s=Km(i,n,void 0);return s&&typeof s!="string"?s:i.create(n,i.Fragment,{children:s||void 0},void 0)}function Km(n,e,t){if(e.type==="element")return CA(n,e,t);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return RA(n,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return NA(n,e,t);if(e.type==="mdxjsEsm")return PA(n,e);if(e.type==="root")return DA(n,e,t);if(e.type==="text")return VA(n,e)}function CA(n,e,t){const r=n.schema;let i=r;e.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Ru,n.schema=i),n.ancestors.push(e);const s=Ym(n,e.tagName,!1),o=LA(n,e);let l=Ou(n,e);return SA.has(e.tagName)&&(l=l.filter(function(u){return typeof u=="string"?!Lb(u):!0})),Qm(n,o,s,e),Vu(o,l),n.ancestors.pop(),n.schema=r,n.create(e,s,o,t)}function RA(n,e){if(e.data&&e.data.estree&&n.evaluater){const r=e.data.estree.body[0];return r.type,n.evaluater.evaluateExpression(r.expression)}Yi(n,e.position)}function PA(n,e){if(e.data&&e.data.estree&&n.evaluater)return n.evaluater.evaluateProgram(e.data.estree);Yi(n,e.position)}function NA(n,e,t){const r=n.schema;let i=r;e.name==="svg"&&r.space==="html"&&(i=Ru,n.schema=i),n.ancestors.push(e);const s=e.name===null?n.Fragment:Ym(n,e.name,!0),o=MA(n,e),l=Ou(n,e);return Qm(n,o,s,e),Vu(o,l),n.ancestors.pop(),n.schema=r,n.create(e,s,o,t)}function DA(n,e,t){const r={};return Vu(r,Ou(n,e)),n.create(e,n.Fragment,r,t)}function VA(n,e){return e.value}function Qm(n,e,t,r){typeof t!="string"&&t!==n.Fragment&&n.passNode&&(e.node=r)}function Vu(n,e){if(e.length>0){const t=e.length>1?e:e[0];t&&(n.children=t)}}function OA(n,e,t){return r;function r(i,s,o,l){const c=Array.isArray(o.children)?t:e;return l?c(s,o,l):c(s,o)}}function jA(n,e){return t;function t(r,i,s,o){const l=Array.isArray(s.children),u=Nu(r);return e(i,s,o,l,{columnNumber:u?u.column-1:void 0,fileName:n,lineNumber:u?u.line:void 0},void 0)}}function LA(n,e){const t={};let r,i;for(i in e.properties)if(i!=="children"&&Du.call(e.properties,i)){const s=FA(n,i,e.properties[i]);if(s){const[o,l]=s;n.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&xA.has(e.tagName)?r=l:t[o]=l}}if(r){const s=t.style||(t.style={});s[n.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function MA(n,e){const t={};for(const r of e.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&n.evaluater){const s=r.data.estree.body[0];s.type;const o=s.expression;o.type;const l=o.properties[0];l.type,Object.assign(t,n.evaluater.evaluateExpression(l.argument))}else Yi(n,e.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&n.evaluater){const l=r.value.data.estree.body[0];l.type,s=n.evaluater.evaluateExpression(l.expression)}else Yi(n,e.position);else s=r.value===null?!0:r.value;t[i]=s}return t}function Ou(n,e){const t=[];let r=-1;const i=n.passKeys?new Map:bA;for(;++r<e.children.length;){const s=e.children[r];let o;if(n.passKeys){const u=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(u){const c=i.get(u)||0;o=u+"-"+c,i.set(u,c+1)}}const l=Km(n,s,o);l!==void 0&&t.push(l)}return t}function FA(n,e,t){const r=$b(n.schema,e);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?Nb(t):Kb(t)),r.property==="style"){let i=typeof t=="object"?t:UA(n,String(t));return n.stylePropertyNameCase==="css"&&(i=BA(i)),["style",i]}return[n.elementAttributeNameCase==="react"&&r.space?Bb[r.property]||r.property:r.attribute,t]}}function UA(n,e){try{return TA(e,{reactCompat:!0})}catch(t){if(n.ignoreInvalidStyle)return{};const r=t,i=new rt("Cannot parse `style` attribute",{ancestors:n.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=n.filePath||void 0,i.url=Gm+"#cannot-parse-style-attribute",i}}function Ym(n,e,t){let r;if(!t)r={type:"Literal",value:e};else if(e.includes(".")){const i=e.split(".");let s=-1,o;for(;++s<i.length;){const l=pd(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=o}else r=pd(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(r.type==="Literal"){const i=r.value;return Du.call(n.components,i)?n.components[i]:i}if(n.evaluater)return n.evaluater.evaluateExpression(r);Yi(n)}function Yi(n,e){const t=new rt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:n.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=n.filePath||void 0,t.url=Gm+"#cannot-handle-mdx-estrees-without-createevaluater",t}function BA(n){const e={};let t;for(t in n)Du.call(n,t)&&(e[zA(t)]=n[t]);return e}function zA(n){let e=n.replace(AA,qA);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function qA(n){return"-"+n.toLowerCase()}const Ra={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},$A={};function HA(n,e){const t=$A,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Xm(n,r,i)}function Xm(n,e,t){if(WA(n)){if("value"in n)return n.type==="html"&&!t?"":n.value;if(e&&"alt"in n&&n.alt)return n.alt;if("children"in n)return Ad(n.children,e,t)}return Array.isArray(n)?Ad(n,e,t):""}function Ad(n,e,t){const r=[];let i=-1;for(;++i<n.length;)r[i]=Xm(n[i],e,t);return r.join("")}function WA(n){return!!(n&&typeof n=="object")}const Sd=document.createElement("i");function ju(n){const e="&"+n+";";Sd.innerHTML=e;const t=Sd.textContent;return t.charCodeAt(t.length-1)===59&&n!=="semi"||t===e?!1:t}function zn(n,e,t,r){const i=n.length;let s=0,o;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(e,t),n.splice(...o);else for(t&&n.splice(e,t);s<r.length;)o=r.slice(s,s+1e4),o.unshift(e,0),n.splice(...o),s+=1e4,e+=1e4}function kt(n,e){return n.length>0?(zn(n,n.length,0,e),n):e}const xd={}.hasOwnProperty;function GA(n){const e={};let t=-1;for(;++t<n.length;)KA(e,n[t]);return e}function KA(n,e){let t;for(t in e){const i=(xd.call(n,t)?n[t]:void 0)||(n[t]={}),s=e[t];let o;if(s)for(o in s){xd.call(i,o)||(i[o]=[]);const l=s[o];QA(i[o],Array.isArray(l)?l:l?[l]:[])}}}function QA(n,e){let t=-1;const r=[];for(;++t<e.length;)(e[t].add==="after"?n:r).push(e[t]);zn(n,0,0,r)}function Jm(n,e){const t=Number.parseInt(n,e);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function Dr(n){return n.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const zt=qn(/[A-Za-z]/),bt=qn(/[\dA-Za-z]/),YA=qn(/[#-'*+\--9=?A-Z^-~]/);function _l(n){return n!==null&&(n<32||n===127)}const wl=qn(/\d/),XA=qn(/[\dA-Fa-f]/),JA=qn(/[!-/:-@[-`{-~]/);function Z(n){return n!==null&&n<-2}function dt(n){return n!==null&&(n<0||n===32)}function he(n){return n===-2||n===-1||n===32}const ZA=qn(new RegExp("\\p{P}|\\p{S}","u")),eS=qn(/\s/);function qn(n){return e;function e(t){return t!==null&&t>-1&&n.test(String.fromCharCode(t))}}function ti(n){const e=[];let t=-1,r=0,i=0;for(;++t<n.length;){const s=n.charCodeAt(t);let o="";if(s===37&&bt(n.charCodeAt(t+1))&&bt(n.charCodeAt(t+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(o=String.fromCharCode(s));else if(s>55295&&s<57344){const l=n.charCodeAt(t+1);s<56320&&l>56319&&l<57344?(o=String.fromCharCode(s,l),i=1):o="�"}else o=String.fromCharCode(s);o&&(e.push(n.slice(r,t),encodeURIComponent(o)),r=t+i+1,o=""),i&&(t+=i,i=0)}return e.join("")+n.slice(r)}function Te(n,e,t,r){const i=r?r-1:1/0;let s=0;return o;function o(u){return he(u)?(n.enter(t),l(u)):e(u)}function l(u){return he(u)&&s++<i?(n.consume(u),l):(n.exit(t),e(u))}}function Zm(n,e,t,r,i,s){let o=0;return l;function l(d){return he(d)?(n.enter(r),u(d)):c(d)}function u(d){return he(d)&&o<s?(n.consume(d),o++,u):(n.exit(r),c(d))}function c(d){return o>=i?e(d):t(d)}}const tS={tokenize:nS};function nS(n){const e=n.attempt(this.parser.constructs.contentInitial,r,i);let t;return e;function r(l){if(l===null){n.consume(l);return}return n.enter("lineEnding"),n.consume(l),n.exit("lineEnding"),Te(n,e,"linePrefix")}function i(l){return n.enter("paragraph"),s(l)}function s(l){const u=n.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=u),t=u,o(l)}function o(l){if(l===null){n.exit("chunkText"),n.exit("paragraph"),n.consume(l);return}return Z(l)?(n.consume(l),n.exit("chunkText"),s):(n.consume(l),o)}}class vo{constructor(){this.index=new Map,this.map=[]}add(e,t,r){kd(this,e,t,r,!1)}addBefore(e,t,r){kd(this,e,t,r,!0)}consume(e){if(this.map.sort(function(s,o){return s[0]-o[0]}),this.map.length===0)return;let t=this.map.length;const r=[];for(;t>0;)t-=1,r.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];r.push(e.slice()),e.length=0;let i=r.pop();for(;i;){for(const s of i)e.push(s);i=r.pop()}this.map.length=0,this.index.clear()}}function kd(n,e,t,r,i){if(t===0&&r.length===0)return;const s=n.index.get(e);if(s){s[1]+=t,i?(r.push(...s[2]),s[2]=r):s[2].push(...r);return}const o=[e,t,r];n.map.push(o),n.index.set(e,o)}const rS={tokenize:iS},Cd={tokenize:sS};function iS(n){const e=this,t=[];let r=0,i,s,o;return l;function l(j){if(r<t.length){const H=t[r];return e.containerState=H[1],n.attempt(H[0].continuation,u,c)(j)}return c(j)}function u(j){if(r++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,i&&F();const H=e.events.length;let W=H,I;for(;W--;)if(e.events[W][0]==="exit"&&e.events[W][1].type==="chunkFlow"){I=e.events[W][1].end;break}P(r);let A=H;for(;A<e.events.length;)e.events[A][1].end={...I},A++;const w=new vo;return w.add(W+1,0,e.events.slice(H)),w.add(H,A-H,[]),w.consume(e.events),c(j)}return l(j)}function c(j){if(r===t.length){if(!i)return g(j);if(i.currentConstruct&&i.currentConstruct.concrete)return S(j);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return e.containerState={},n.check(Cd,d,p)(j)}function d(j){return i&&F(),P(r),g(j)}function p(j){return e.parser.lazy[e.now().line]=r!==t.length,o=e.now().offset,S(j)}function g(j){return e.containerState={},n.attempt(Cd,y,S)(j)}function y(j){return r++,t.push([e.currentConstruct,e.containerState]),g(j)}function S(j){if(j===null){i&&F(),P(0),n.consume(j);return}return i=i||e.parser.flow(e.now()),n.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),R(j)}function R(j){if(j===null){D(n.exit("chunkFlow"),!0),P(0),n.consume(j);return}return Z(j)?(n.consume(j),D(n.exit("chunkFlow")),r=0,e.interrupt=void 0,l):(n.consume(j),R)}function D(j,H){const W=e.sliceStream(j);if(H&&W.push(null),j.previous=s,s&&(s.next=j),s=j,i.defineSkip(j.start),i.write(W),e.parser.lazy[j.start.line]){let I=i.events.length;for(;I--;)if(i.events[I][1].start.offset<o&&(!i.events[I][1].end||i.events[I][1].end.offset>o))return;const A=e.events.length;let w=A,b,k;for(;w--;)if(e.events[w][0]==="exit"&&e.events[w][1].type==="chunkFlow"){if(b){k=e.events[w][1].end;break}b=!0}for(P(r),I=A;I<e.events.length;)e.events[I][1].end={...k},I++;const T=new vo;T.add(w+1,0,e.events.slice(A)),T.add(A,I-A,[]),T.consume(e.events)}}function P(j){let H=t.length;for(;H-- >j;){const W=t[H];e.containerState=W[1],W[0].exit.call(e,n)}t.length=j}function F(){i.write([null]),s=void 0,i=void 0,e.containerState._closeFlow=void 0}}function sS(n,e,t){return Te(n,n.attempt(this.parser.constructs.document,e,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Rd(n){if(n===null||dt(n)||eS(n))return 1;if(ZA(n))return 2}function Lu(n,e,t){const r=[];let i=-1;for(;++i<n.length;){const s=n[i].resolveAll;s&&!r.includes(s)&&(e=s(e,t),r.push(s))}return e}const El={name:"attention",resolveAll:oS,tokenize:aS};function oS(n,e){let t=-1,r;for(;++t<n.length;)if(n[t][0]==="enter"&&n[t][1].type==="attentionSequence"&&n[t][1]._close){let i=t;for(;i--;)if(n[i][0]==="exit"&&n[i][1].type==="attentionSequence"&&n[i][1]._open&&e.sliceSerialize(n[i][1]).charCodeAt(0)===e.sliceSerialize(n[t][1]).charCodeAt(0)){if((n[i][1]._close||n[t][1]._open)&&(n[t][1].end.offset-n[t][1].start.offset)%3&&!((n[i][1].end.offset-n[i][1].start.offset+n[t][1].end.offset-n[t][1].start.offset)%3))continue;const s=n[i][1].end.offset-n[i][1].start.offset>1&&n[t][1].end.offset-n[t][1].start.offset>1?2:1,o={...n[i][1].end},l={...n[t][1].start};Pd(o,-s),Pd(l,s);const u={type:s>1?"strongSequence":"emphasisSequence",start:o,end:{...n[i][1].end}},c={type:s>1?"strongSequence":"emphasisSequence",start:{...n[t][1].start},end:l},d={type:s>1?"strongText":"emphasisText",start:{...n[i][1].end},end:{...n[t][1].start}},p={type:s>1?"strong":"emphasis",start:{...u.start},end:{...c.end}};n[i][1].end={...u.start},n[t][1].start={...c.end},r=[],n[i][1].end.offset-n[i][1].start.offset&&(r=kt(r,[["enter",n[i][1],e],["exit",n[i][1],e]])),r=kt(r,[["enter",p,e],["enter",u,e],["exit",u,e],["enter",d,e]]),r=kt(r,Lu(e.parser.constructs.insideSpan.null,n.slice(i+1,t),e)),r=kt(r,[["exit",d,e],["enter",c,e],["exit",c,e],["exit",p,e]]);let g=0;n[t][1].end.offset-n[t][1].start.offset&&(g=2,r=kt(r,[["enter",n[t][1],e],["exit",n[t][1],e]])),zn(n,i-1,t-i+3,r),t=i+r.length-g-2;break}}for(t=-1;++t<n.length;)n[t][1].type==="attentionSequence"&&(n[t][1].type="data");return n}function aS(n,e){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Rd(r);let s;return o;function o(u){return s=u,n.enter("attentionSequence"),l(u)}function l(u){if(u===s)return n.consume(u),l;const c=n.exit("attentionSequence"),d=Rd(u),p=!d||d===2&&i||t.includes(u)&&u!==42&&u!==95,g=!i||i===2&&d||t.includes(r)&&r!==42&&r!==95;return c._open=!!(s===42?p:p&&(i||!g)),c._close=!!(s===42?g:g&&(d||!p)),e(u)}}function Pd(n,e){n.column+=e,n.offset+=e,n._bufferIndex+=e}const lS={name:"autolink",tokenize:uS};function uS(n,e,t){let r=0;return i;function i(y){return n.enter("autolink"),n.enter("autolinkMarker"),n.consume(y),n.exit("autolinkMarker"),n.enter("autolinkProtocol"),s}function s(y){return zt(y)?(n.consume(y),o):y===64?t(y):c(y)}function o(y){return y===43||y===45||y===46||bt(y)?(r=1,l(y)):c(y)}function l(y){return y===58?(n.consume(y),r=0,u):(y===43||y===45||y===46||bt(y))&&r++<32?(n.consume(y),l):(r=0,c(y))}function u(y){return y===62?(n.exit("autolinkProtocol"),n.enter("autolinkMarker"),n.consume(y),n.exit("autolinkMarker"),n.exit("autolink"),e):y===null||y===32||y===60||_l(y)?t(y):(n.consume(y),u)}function c(y){return y===64?(n.consume(y),d):YA(y)?(n.consume(y),c):t(y)}function d(y){return bt(y)?p(y):t(y)}function p(y){return y===46?(n.consume(y),r=0,d):y===62?(n.exit("autolinkProtocol").type="autolinkEmail",n.enter("autolinkMarker"),n.consume(y),n.exit("autolinkMarker"),n.exit("autolink"),e):g(y)}function g(y){if((y===45||bt(y))&&r++<63){const S=y===45?g:p;return n.consume(y),S}return t(y)}}const ta={partial:!0,tokenize:cS};function cS(n,e,t){return r;function r(s){return he(s)?Te(n,i,"linePrefix")(s):i(s)}function i(s){return s===null||Z(s)?e(s):t(s)}}const eg={continuation:{tokenize:dS},exit:fS,name:"blockQuote",tokenize:hS};function hS(n,e,t){const r=this;return i;function i(o){if(o===62){const l=r.containerState;return l.open||(n.enter("blockQuote",{_container:!0}),l.open=!0),n.enter("blockQuotePrefix"),n.enter("blockQuoteMarker"),n.consume(o),n.exit("blockQuoteMarker"),s}return t(o)}function s(o){return he(o)?(n.enter("blockQuotePrefixWhitespace"),n.consume(o),n.exit("blockQuotePrefixWhitespace"),n.exit("blockQuotePrefix"),e):(n.exit("blockQuotePrefix"),e(o))}}function dS(n,e,t){const r=this;return i;function i(o){return he(o)?Te(n,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):s(o)}function s(o){return n.attempt(eg,e,t)(o)}}function fS(n){n.exit("blockQuote")}const tg={name:"characterEscape",tokenize:pS};function pS(n,e,t){return r;function r(s){return n.enter("characterEscape"),n.enter("escapeMarker"),n.consume(s),n.exit("escapeMarker"),i}function i(s){return JA(s)?(n.enter("characterEscapeValue"),n.consume(s),n.exit("characterEscapeValue"),n.exit("characterEscape"),e):t(s)}}const ng={name:"characterReference",tokenize:mS};function mS(n,e,t){const r=this;let i=0,s,o;return l;function l(p){return n.enter("characterReference"),n.enter("characterReferenceMarker"),n.consume(p),n.exit("characterReferenceMarker"),u}function u(p){return p===35?(n.enter("characterReferenceMarkerNumeric"),n.consume(p),n.exit("characterReferenceMarkerNumeric"),c):(n.enter("characterReferenceValue"),s=31,o=bt,d(p))}function c(p){return p===88||p===120?(n.enter("characterReferenceMarkerHexadecimal"),n.consume(p),n.exit("characterReferenceMarkerHexadecimal"),n.enter("characterReferenceValue"),s=6,o=XA,d):(n.enter("characterReferenceValue"),s=7,o=wl,d(p))}function d(p){if(p===59&&i){const g=n.exit("characterReferenceValue");return o===bt&&!ju(r.sliceSerialize(g))?t(p):(n.enter("characterReferenceMarker"),n.consume(p),n.exit("characterReferenceMarker"),n.exit("characterReference"),e)}return o(p)&&i++<s?(n.consume(p),d):t(p)}}const Il={partial:!0,tokenize:gS};function gS(n,e,t){const r=this;return i;function i(o){return o===null?t(o):(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),s)}function s(o){return r.parser.lazy[r.now().line]?t(o):e(o)}}const Nd={concrete:!0,name:"codeFenced",tokenize:yS};function yS(n,e,t){const r=this,i={partial:!0,tokenize:W};let s=0,o=0,l;return u;function u(I){return c(I)}function c(I){const A=r.events[r.events.length-1];return s=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,l=I,n.enter("codeFenced"),n.enter("codeFencedFence"),n.enter("codeFencedFenceSequence"),d(I)}function d(I){return I===l?(o++,n.consume(I),d):o<3?t(I):(n.exit("codeFencedFenceSequence"),he(I)?Te(n,p,"whitespace")(I):p(I))}function p(I){return I===null||Z(I)?(n.exit("codeFencedFence"),r.interrupt?e(I):n.check(Il,R,H)(I)):(n.enter("codeFencedFenceInfo"),n.enter("chunkString",{contentType:"string"}),g(I))}function g(I){return I===null||Z(I)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),p(I)):he(I)?(n.exit("chunkString"),n.exit("codeFencedFenceInfo"),Te(n,y,"whitespace")(I)):I===96&&I===l?t(I):(n.consume(I),g)}function y(I){return I===null||Z(I)?p(I):(n.enter("codeFencedFenceMeta"),n.enter("chunkString",{contentType:"string"}),S(I))}function S(I){return I===null||Z(I)?(n.exit("chunkString"),n.exit("codeFencedFenceMeta"),p(I)):I===96&&I===l?t(I):(n.consume(I),S)}function R(I){return n.attempt(i,H,D)(I)}function D(I){return n.enter("lineEnding"),n.consume(I),n.exit("lineEnding"),P}function P(I){return s>0&&he(I)?Te(n,F,"linePrefix",s+1)(I):F(I)}function F(I){return I===null||Z(I)?n.check(Il,R,H)(I):(n.enter("codeFlowValue"),j(I))}function j(I){return I===null||Z(I)?(n.exit("codeFlowValue"),F(I)):(n.consume(I),j)}function H(I){return n.exit("codeFenced"),e(I)}function W(I,A,w){let b=0;return k;function k(re){return I.enter("lineEnding"),I.consume(re),I.exit("lineEnding"),T}function T(re){return I.enter("codeFencedFence"),he(re)?Te(I,v,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(re):v(re)}function v(re){return re===l?(I.enter("codeFencedFenceSequence"),E(re)):w(re)}function E(re){return re===l?(b++,I.consume(re),E):b>=o?(I.exit("codeFencedFenceSequence"),he(re)?Te(I,ue,"whitespace")(re):ue(re)):w(re)}function ue(re){return re===null||Z(re)?(I.exit("codeFencedFence"),A(re)):w(re)}}}const Pa={name:"codeIndented",tokenize:wS},_S={partial:!0,tokenize:ES};function wS(n,e,t){return r;function r(l){return n.enter("codeIndented"),Zm(n,i,t,"linePrefix",4,4)(l)}function i(l){return l===null?o(l):Z(l)?n.attempt(_S,i,o)(l):(n.enter("codeFlowValue"),s(l))}function s(l){return l===null||Z(l)?(n.exit("codeFlowValue"),i(l)):(n.consume(l),s)}function o(l){return n.exit("codeIndented"),e(l)}}function ES(n,e,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):Z(o)?(n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),i):Zm(n,e,s,"linePrefix",4,4)(o)}function s(o){return Z(o)?i(o):t(o)}}const IS={name:"codeText",previous:vS,resolve:TS,tokenize:bS};function TS(n){let e=n.length-4,t=3,r,i;if((n[t][1].type==="lineEnding"||n[t][1].type==="space")&&(n[e][1].type==="lineEnding"||n[e][1].type==="space")){for(r=t;++r<e;)if(n[r][1].type==="codeTextData"){n[t][1].type="codeTextPadding",n[e][1].type="codeTextPadding",t+=2,e-=2;break}}for(r=t-1,e++;++r<=e;)i===void 0?r!==e&&n[r][1].type!=="lineEnding"&&(i=r):(r===e||n[r][1].type==="lineEnding")&&(n[i][1].type="codeTextData",r!==i+2&&(n[i][1].end=n[r-1][1].end,n.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return n}function vS(n){return n!==96||this.events[this.events.length-1][1].type==="characterEscape"}function bS(n,e,t){let r=0,i,s;return o;function o(p){return n.enter("codeText"),n.enter("codeTextSequence"),l(p)}function l(p){return p===96?(n.consume(p),r++,l):(n.exit("codeTextSequence"),u(p))}function u(p){return p===null?t(p):p===32?(n.enter("space"),n.consume(p),n.exit("space"),u):p===96?(s=n.enter("codeTextSequence"),i=0,d(p)):Z(p)?(n.enter("lineEnding"),n.consume(p),n.exit("lineEnding"),u):(n.enter("codeTextData"),c(p))}function c(p){return p===null||p===32||p===96||Z(p)?(n.exit("codeTextData"),u(p)):(n.consume(p),c)}function d(p){return p===96?(n.consume(p),i++,d):i===r?(n.exit("codeTextSequence"),n.exit("codeText"),e(p)):(s.type="codeTextData",c(p))}}class AS{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(e,t,r){const i=t||0;this.setCursor(Math.trunc(e));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ei(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),Ei(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),Ei(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const t=this.left.splice(e,Number.POSITIVE_INFINITY);Ei(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);Ei(this.left,t.reverse())}}}function Ei(n,e){let t=0;if(e.length<1e4)n.push(...e);else for(;t<e.length;)n.push(...e.slice(t,t+1e4)),t+=1e4}function rg(n){const e={};let t=-1,r,i,s,o,l,u,c;const d=new AS(n);for(;++t<d.length;){for(;t in e;)t=e[t];if(r=d.get(t),t&&r[1].type==="chunkFlow"&&d.get(t-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,s=0,s<u.length&&u[s][1].type==="lineEndingBlank"&&(s+=2),s<u.length&&u[s][1].type==="content"))for(;++s<u.length&&u[s][1].type!=="content";)u[s][1].type==="chunkText"&&(u[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,SS(d,t)),t=e[t],c=!0);else if(r[1]._container){for(s=t,i=void 0;s--;)if(o=d.get(s),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=s);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,t),l.unshift(r),d.splice(i,t-i+1,l))}}return zn(n,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function SS(n,e){const t=n.get(e)[1],r=n.get(e)[2];let i=e-1;const s=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,u=[],c={};let d,p,g=-1,y=t,S=0,R=0;const D=[R];for(;y;){for(;n.get(++i)[1]!==y;);s.push(i),y._tokenizer||(d=r.sliceStream(y),y.next||d.push(null),p&&o.defineSkip(y.start),y._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(d),y._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),p=y,y=y.next}for(y=t;++g<l.length;)l[g][0]==="exit"&&l[g-1][0]==="enter"&&l[g][1].type===l[g-1][1].type&&l[g][1].start.line!==l[g][1].end.line&&(R=g+1,D.push(R),y._tokenizer=void 0,y.previous=void 0,y=y.next);for(o.events=[],y?(y._tokenizer=void 0,y.previous=void 0):D.pop(),g=D.length;g--;){const P=l.slice(D[g],D[g+1]),F=s.pop();u.push([F,F+P.length-1]),n.splice(F,2,P)}for(u.reverse(),g=-1;++g<u.length;)c[S+u[g][0]]=S+u[g][1],S+=u[g][1]-u[g][0]-1;return c}const xS={resolve:CS,tokenize:RS},kS={partial:!0,tokenize:PS};function CS(n){return rg(n),n}function RS(n,e){let t;return r;function r(l){return n.enter("content"),t=n.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):Z(l)?n.check(kS,o,s)(l):(n.consume(l),i)}function s(l){return n.exit("chunkContent"),n.exit("content"),e(l)}function o(l){return n.consume(l),n.exit("chunkContent"),t.next=n.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function PS(n,e,t){const r=this;return i;function i(o){return n.exit("chunkContent"),n.enter("lineEnding"),n.consume(o),n.exit("lineEnding"),Te(n,s,"linePrefix")}function s(o){if(o===null||Z(o))return t(o);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?e(o):n.interrupt(r.parser.constructs.flow,t,e)(o)}}function ig(n,e,t,r,i,s,o,l,u){const c=u||Number.POSITIVE_INFINITY;let d=0;return p;function p(P){return P===60?(n.enter(r),n.enter(i),n.enter(s),n.consume(P),n.exit(s),g):P===null||P===32||P===41||_l(P)?t(P):(n.enter(r),n.enter(o),n.enter(l),n.enter("chunkString",{contentType:"string"}),R(P))}function g(P){return P===62?(n.enter(s),n.consume(P),n.exit(s),n.exit(i),n.exit(r),e):(n.enter(l),n.enter("chunkString",{contentType:"string"}),y(P))}function y(P){return P===62?(n.exit("chunkString"),n.exit(l),g(P)):P===null||P===60||Z(P)?t(P):(n.consume(P),P===92?S:y)}function S(P){return P===60||P===62||P===92?(n.consume(P),y):y(P)}function R(P){return!d&&(P===null||P===41||dt(P))?(n.exit("chunkString"),n.exit(l),n.exit(o),n.exit(r),e(P)):d<c&&P===40?(n.consume(P),d++,R):P===41?(n.consume(P),d--,R):P===null||P===32||P===40||_l(P)?t(P):(n.consume(P),P===92?D:R)}function D(P){return P===40||P===41||P===92?(n.consume(P),R):R(P)}}function sg(n,e,t,r,i,s){const o=this;let l=0,u;return c;function c(y){return n.enter(r),n.enter(i),n.consume(y),n.exit(i),n.enter(s),d}function d(y){return l>999||y===null||y===91||y===93&&!u||y===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?t(y):y===93?(n.exit(s),n.enter(i),n.consume(y),n.exit(i),n.exit(r),e):Z(y)?(n.enter("lineEnding"),n.consume(y),n.exit("lineEnding"),d):(n.enter("chunkString",{contentType:"string"}),p(y))}function p(y){return y===null||y===91||y===93||Z(y)||l++>999?(n.exit("chunkString"),d(y)):(n.consume(y),u||(u=!he(y)),y===92?g:p)}function g(y){return y===91||y===92||y===93?(n.consume(y),l++,p):p(y)}}function og(n,e,t,r,i,s){let o;return l;function l(g){return g===34||g===39||g===40?(n.enter(r),n.enter(i),n.consume(g),n.exit(i),o=g===40?41:g,u):t(g)}function u(g){return g===o?(n.enter(i),n.consume(g),n.exit(i),n.exit(r),e):(n.enter(s),c(g))}function c(g){return g===o?(n.exit(s),u(o)):g===null?t(g):Z(g)?(n.enter("lineEnding"),n.consume(g),n.exit("lineEnding"),Te(n,c,"linePrefix")):(n.enter("chunkString",{contentType:"string"}),d(g))}function d(g){return g===o||g===null||Z(g)?(n.exit("chunkString"),c(g)):(n.consume(g),g===92?p:d)}function p(g){return g===o||g===92?(n.consume(g),d):d(g)}}function Oi(n,e){let t;return r;function r(i){return Z(i)?(n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),t=!0,r):he(i)?Te(n,r,t?"linePrefix":"lineSuffix")(i):e(i)}}const NS={name:"definition",tokenize:VS},DS={partial:!0,tokenize:OS};function VS(n,e,t){const r=this;let i;return s;function s(y){return n.enter("definition"),o(y)}function o(y){return sg.call(r,n,l,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(y)}function l(y){return i=Dr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),y===58?(n.enter("definitionMarker"),n.consume(y),n.exit("definitionMarker"),u):t(y)}function u(y){return dt(y)?Oi(n,c)(y):c(y)}function c(y){return ig(n,d,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(y)}function d(y){return n.attempt(DS,p,p)(y)}function p(y){return he(y)?Te(n,g,"whitespace")(y):g(y)}function g(y){return y===null||Z(y)?(n.exit("definition"),r.parser.defined.push(i),e(y)):t(y)}}function OS(n,e,t){return r;function r(l){return dt(l)?Oi(n,i)(l):t(l)}function i(l){return og(n,s,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return he(l)?Te(n,o,"whitespace")(l):o(l)}function o(l){return l===null||Z(l)?e(l):t(l)}}const jS={name:"hardBreakEscape",tokenize:LS};function LS(n,e,t){return r;function r(s){return n.enter("hardBreakEscape"),n.consume(s),i}function i(s){return Z(s)?(n.exit("hardBreakEscape"),e(s)):t(s)}}const MS={name:"headingAtx",resolve:FS,tokenize:US};function FS(n,e){let t=n.length-2,r=3;if(n[r][1].type==="whitespace"&&(r+=2),t-2>r&&n[t][1].type==="whitespace"&&(t-=2),n[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&n[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r){const i={type:"atxHeadingText",start:n[r][1].start,end:n[t][1].end},s={type:"chunkText",start:n[r][1].start,end:n[t][1].end,contentType:"text"};zn(n,r,t-r+1,[["enter",i,e],["enter",s,e],["exit",s,e],["exit",i,e]])}return n}function US(n,e,t){let r=0;return i;function i(d){return n.enter("atxHeading"),s(d)}function s(d){return n.enter("atxHeadingSequence"),o(d)}function o(d){return d===35&&r++<6?(n.consume(d),o):d===null||dt(d)?(n.exit("atxHeadingSequence"),l(d)):t(d)}function l(d){return d===35?(n.enter("atxHeadingSequence"),u(d)):d===null||Z(d)?(n.exit("atxHeading"),e(d)):he(d)?Te(n,l,"whitespace")(d):(n.enter("atxHeadingText"),c(d))}function u(d){return d===35?(n.consume(d),u):(n.exit("atxHeadingSequence"),l(d))}function c(d){return d===null||d===35||dt(d)?(n.exit("atxHeadingText"),l(d)):(n.consume(d),c)}}const BS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Dd=["pre","script","style","textarea"],zS={concrete:!0,name:"htmlFlow",resolveTo:$S,tokenize:HS},qS={partial:!0,tokenize:WS};function $S(n){let e=n.length;for(;e--&&!(n[e][0]==="enter"&&n[e][1].type==="htmlFlow"););return e>1&&n[e-2][1].type==="linePrefix"&&(n[e][1].start=n[e-2][1].start,n[e+1][1].start=n[e-2][1].start,n.splice(e-2,2)),n}function HS(n,e,t){const r=this;let i,s,o,l,u;return c;function c(x){return d(x)}function d(x){return n.enter("htmlFlow"),n.enter("htmlFlowData"),n.consume(x),p}function p(x){return x===33?(n.consume(x),g):x===47?(n.consume(x),s=!0,R):x===63?(n.consume(x),i=3,r.interrupt?e:C):zt(x)?(n.consume(x),o=String.fromCharCode(x),D):t(x)}function g(x){return x===45?(n.consume(x),i=2,y):x===91?(n.consume(x),i=5,l=0,S):zt(x)?(n.consume(x),i=4,r.interrupt?e:C):t(x)}function y(x){return x===45?(n.consume(x),r.interrupt?e:C):t(x)}function S(x){const gt="CDATA[";return x===gt.charCodeAt(l++)?(n.consume(x),l===gt.length?r.interrupt?e:v:S):t(x)}function R(x){return zt(x)?(n.consume(x),o=String.fromCharCode(x),D):t(x)}function D(x){if(x===null||x===47||x===62||dt(x)){const gt=x===47,St=o.toLowerCase();return!gt&&!s&&Dd.includes(St)?(i=1,r.interrupt?e(x):v(x)):BS.includes(o.toLowerCase())?(i=6,gt?(n.consume(x),P):r.interrupt?e(x):v(x)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(x):s?F(x):j(x))}return x===45||bt(x)?(n.consume(x),o+=String.fromCharCode(x),D):t(x)}function P(x){return x===62?(n.consume(x),r.interrupt?e:v):t(x)}function F(x){return he(x)?(n.consume(x),F):k(x)}function j(x){return x===47?(n.consume(x),k):x===58||x===95||zt(x)?(n.consume(x),H):he(x)?(n.consume(x),j):k(x)}function H(x){return x===45||x===46||x===58||x===95||bt(x)?(n.consume(x),H):W(x)}function W(x){return x===61?(n.consume(x),I):he(x)?(n.consume(x),W):j(x)}function I(x){return x===null||x===60||x===61||x===62||x===96?t(x):x===34||x===39?(n.consume(x),u=x,A):he(x)?(n.consume(x),I):w(x)}function A(x){return x===u?(n.consume(x),u=null,b):x===null||Z(x)?t(x):(n.consume(x),A)}function w(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||dt(x)?W(x):(n.consume(x),w)}function b(x){return x===47||x===62||he(x)?j(x):t(x)}function k(x){return x===62?(n.consume(x),T):t(x)}function T(x){return x===null||Z(x)?v(x):he(x)?(n.consume(x),T):t(x)}function v(x){return x===45&&i===2?(n.consume(x),Le):x===60&&i===1?(n.consume(x),ve):x===62&&i===4?(n.consume(x),mt):x===63&&i===3?(n.consume(x),C):x===93&&i===5?(n.consume(x),pt):Z(x)&&(i===6||i===7)?(n.exit("htmlFlowData"),n.check(qS,Me,E)(x)):x===null||Z(x)?(n.exit("htmlFlowData"),E(x)):(n.consume(x),v)}function E(x){return n.check(Il,ue,Me)(x)}function ue(x){return n.enter("lineEnding"),n.consume(x),n.exit("lineEnding"),re}function re(x){return x===null||Z(x)?E(x):(n.enter("htmlFlowData"),v(x))}function Le(x){return x===45?(n.consume(x),C):v(x)}function ve(x){return x===47?(n.consume(x),o="",ze):v(x)}function ze(x){if(x===62){const gt=o.toLowerCase();return Dd.includes(gt)?(n.consume(x),mt):v(x)}return zt(x)&&o.length<8?(n.consume(x),o+=String.fromCharCode(x),ze):v(x)}function pt(x){return x===93?(n.consume(x),C):v(x)}function C(x){return x===62?(n.consume(x),mt):x===45&&i===2?(n.consume(x),C):v(x)}function mt(x){return x===null||Z(x)?(n.exit("htmlFlowData"),Me(x)):(n.consume(x),mt)}function Me(x){return n.exit("htmlFlow"),e(x)}}function WS(n,e,t){return r;function r(i){return n.enter("lineEnding"),n.consume(i),n.exit("lineEnding"),n.attempt(ta,e,t)}}const GS={name:"htmlText",tokenize:KS};function KS(n,e,t){const r=this;let i,s,o;return l;function l(C){return n.enter("htmlText"),n.enter("htmlTextData"),n.consume(C),u}function u(C){return C===33?(n.consume(C),c):C===47?(n.consume(C),W):C===63?(n.consume(C),j):zt(C)?(n.consume(C),w):t(C)}function c(C){return C===45?(n.consume(C),d):C===91?(n.consume(C),s=0,S):zt(C)?(n.consume(C),F):t(C)}function d(C){return C===45?(n.consume(C),y):t(C)}function p(C){return C===null?t(C):C===45?(n.consume(C),g):Z(C)?(o=p,ve(C)):(n.consume(C),p)}function g(C){return C===45?(n.consume(C),y):p(C)}function y(C){return C===62?Le(C):C===45?g(C):p(C)}function S(C){const mt="CDATA[";return C===mt.charCodeAt(s++)?(n.consume(C),s===mt.length?R:S):t(C)}function R(C){return C===null?t(C):C===93?(n.consume(C),D):Z(C)?(o=R,ve(C)):(n.consume(C),R)}function D(C){return C===93?(n.consume(C),P):R(C)}function P(C){return C===62?Le(C):C===93?(n.consume(C),P):R(C)}function F(C){return C===null||C===62?Le(C):Z(C)?(o=F,ve(C)):(n.consume(C),F)}function j(C){return C===null?t(C):C===63?(n.consume(C),H):Z(C)?(o=j,ve(C)):(n.consume(C),j)}function H(C){return C===62?Le(C):j(C)}function W(C){return zt(C)?(n.consume(C),I):t(C)}function I(C){return C===45||bt(C)?(n.consume(C),I):A(C)}function A(C){return Z(C)?(o=A,ve(C)):he(C)?(n.consume(C),A):Le(C)}function w(C){return C===45||bt(C)?(n.consume(C),w):C===47||C===62||dt(C)?b(C):t(C)}function b(C){return C===47?(n.consume(C),Le):C===58||C===95||zt(C)?(n.consume(C),k):Z(C)?(o=b,ve(C)):he(C)?(n.consume(C),b):Le(C)}function k(C){return C===45||C===46||C===58||C===95||bt(C)?(n.consume(C),k):T(C)}function T(C){return C===61?(n.consume(C),v):Z(C)?(o=T,ve(C)):he(C)?(n.consume(C),T):b(C)}function v(C){return C===null||C===60||C===61||C===62||C===96?t(C):C===34||C===39?(n.consume(C),i=C,E):Z(C)?(o=v,ve(C)):he(C)?(n.consume(C),v):(n.consume(C),ue)}function E(C){return C===i?(n.consume(C),i=void 0,re):C===null?t(C):Z(C)?(o=E,ve(C)):(n.consume(C),E)}function ue(C){return C===null||C===34||C===39||C===60||C===61||C===96?t(C):C===47||C===62||dt(C)?b(C):(n.consume(C),ue)}function re(C){return C===47||C===62||dt(C)?b(C):t(C)}function Le(C){return C===62?(n.consume(C),n.exit("htmlTextData"),n.exit("htmlText"),e):t(C)}function ve(C){return n.exit("htmlTextData"),n.enter("lineEnding"),n.consume(C),n.exit("lineEnding"),ze}function ze(C){return he(C)?Te(n,pt,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(C):pt(C)}function pt(C){return n.enter("htmlTextData"),o(C)}}const Mu={name:"labelEnd",resolveAll:JS,resolveTo:ZS,tokenize:ex},QS={tokenize:tx},YS={tokenize:nx},XS={tokenize:rx};function JS(n){let e=-1;const t=[];for(;++e<n.length;){const r=n[e][1];if(t.push(n[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",e+=i}}return n.length!==t.length&&zn(n,0,n.length,t),n}function ZS(n,e){let t=n.length,r=0,i,s,o;for(;t--;){const d=n[t][1];if(i){if(d.type==="link"||d.type==="labelLink"&&d._inactive)break;n[t][0]==="enter"&&d.type==="labelLink"&&(d._inactive=!0)}else if(s){if(n[t][0]==="enter"&&(d.type==="labelImage"||d.type==="labelLink")&&!d._balanced&&(i=t,d.type!=="labelLink")){r=2;break}}else d.type==="labelEnd"&&(s=t)}const l={type:n[i][1].type==="labelLink"?"link":"image",start:{...n[i][1].start},end:{...n[n.length-1][1].end}},u={type:"label",start:{...n[i][1].start},end:{...n[s][1].end}},c={type:"labelText",start:{...n[i+r+2][1].end},end:{...n[s-2][1].start}};return o=[["enter",l,e],["enter",u,e]],o=kt(o,n.slice(i+1,i+r+3)),o=kt(o,[["enter",c,e]]),o=kt(o,Lu(e.parser.constructs.insideSpan.null,n.slice(i+r+4,s-3),e)),o=kt(o,[["exit",c,e],n[s-2],n[s-1],["exit",u,e]]),o=kt(o,n.slice(s+1)),o=kt(o,[["exit",l,e]]),zn(n,i,n.length,o),n}function ex(n,e,t){const r=this,i=r._labelStarts;let s,o;if(i){for(;i.length>0&&i[i.length-1]._balanced;)i.pop();s=i[i.length-1]}return l;function l(g){return s?s._inactive?p(g):(o=r.parser.defined.includes(Dr(r.sliceSerialize({start:s.end,end:r.now()}))),n.enter("labelEnd"),n.enter("labelMarker"),n.consume(g),n.exit("labelMarker"),n.exit("labelEnd"),u):t(g)}function u(g){return g===40?n.attempt(QS,d,o?d:p)(g):g===91?n.attempt(YS,d,o?c:p)(g):o?d(g):p(g)}function c(g){return n.attempt(XS,d,p)(g)}function d(g){return i.pop(),e(g)}function p(g){return s._balanced=!0,t(g)}}function tx(n,e,t){return r;function r(p){return n.enter("resource"),n.enter("resourceMarker"),n.consume(p),n.exit("resourceMarker"),i}function i(p){return dt(p)?Oi(n,s)(p):s(p)}function s(p){return p===41?d(p):ig(n,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function o(p){return dt(p)?Oi(n,u)(p):d(p)}function l(p){return t(p)}function u(p){return p===34||p===39||p===40?og(n,c,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function c(p){return dt(p)?Oi(n,d)(p):d(p)}function d(p){return p===41?(n.enter("resourceMarker"),n.consume(p),n.exit("resourceMarker"),n.exit("resource"),e):t(p)}}function nx(n,e,t){const r=this;return i;function i(l){return sg.call(r,n,s,o,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(Dr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(l):t(l)}function o(l){return t(l)}}function rx(n,e,t){return r;function r(s){return n.enter("reference"),n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),i}function i(s){return s===93?(n.enter("referenceMarker"),n.consume(s),n.exit("referenceMarker"),n.exit("reference"),e):t(s)}}const ix={name:"labelStartImage",resolveAll:Mu.resolveAll,tokenize:sx};function sx(n,e,t){const r=this;let i;return s;function s(u){return n.enter("labelImage"),n.enter("labelImageMarker"),n.consume(u),n.exit("labelImageMarker"),o}function o(u){return u===91?(n.enter("labelMarker"),n.consume(u),n.exit("labelMarker"),i=n.exit("labelImage"),l):t(u)}function l(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(u):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(u))}}const ox={name:"labelStartLink",resolveAll:Mu.resolveAll,tokenize:ax};function ax(n,e,t){const r=this;let i;return s;function s(l){return n.enter("labelLink"),n.enter("labelMarker"),n.consume(l),n.exit("labelMarker"),i=n.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):(r._labelStarts=r._labelStarts||[],r._labelStarts.push(i),e(l))}}const Na={name:"lineEnding",tokenize:lx};function lx(n,e){return t;function t(r){return n.enter("lineEnding"),n.consume(r),n.exit("lineEnding"),Te(n,e,"linePrefix")}}const Js={name:"thematicBreak",tokenize:ux};function ux(n,e,t){let r=0,i;return s;function s(c){return n.enter("thematicBreak"),o(c)}function o(c){return i=c,l(c)}function l(c){return c===i?(n.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||Z(c))?(n.exit("thematicBreak"),e(c)):t(c)}function u(c){return c===i?(n.consume(c),r++,u):(n.exit("thematicBreakSequence"),he(c)?Te(n,l,"whitespace")(c):l(c))}}const at={continuation:{tokenize:fx},exit:mx,name:"list",tokenize:dx},cx={partial:!0,tokenize:gx},hx={partial:!0,tokenize:px};function dx(n,e,t){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(y){const S=r.containerState.type||(y===42||y===43||y===45?"listUnordered":"listOrdered");if(S==="listUnordered"?!r.containerState.marker||y===r.containerState.marker:wl(y)){if(r.containerState.type||(r.containerState.type=S,n.enter(S,{_container:!0})),S==="listUnordered")return n.enter("listItemPrefix"),y===42||y===45?n.check(Js,t,c)(y):c(y);if(!r.interrupt||y===49)return n.enter("listItemPrefix"),n.enter("listItemValue"),u(y)}return t(y)}function u(y){return wl(y)&&++o<10?(n.consume(y),u):(!r.interrupt||o<2)&&(r.containerState.marker?y===r.containerState.marker:y===41||y===46)?(n.exit("listItemValue"),c(y)):t(y)}function c(y){return n.enter("listItemMarker"),n.consume(y),n.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||y,n.check(ta,r.interrupt?t:d,n.attempt(cx,g,p))}function d(y){return r.containerState.initialBlankLine=!0,s++,g(y)}function p(y){return he(y)?(n.enter("listItemPrefixWhitespace"),n.consume(y),n.exit("listItemPrefixWhitespace"),g):t(y)}function g(y){return r.containerState.size=s+r.sliceSerialize(n.exit("listItemPrefix"),!0).length,e(y)}}function fx(n,e,t){const r=this;return r.containerState._closeFlow=void 0,n.check(ta,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Te(n,e,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!he(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,n.attempt(hx,e,o)(l))}function o(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Te(n,n.attempt(at,e,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function px(n,e,t){const r=this;return Te(n,i,"listItemIndent",r.containerState.size+1);function i(s){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?e(s):t(s)}}function mx(n){n.exit(this.containerState.type)}function gx(n,e,t){const r=this;return Te(n,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const o=r.events[r.events.length-1];return!he(s)&&o&&o[1].type==="listItemPrefixWhitespace"?e(s):t(s)}}const Vd={name:"setextUnderline",resolveTo:yx,tokenize:_x};function yx(n,e){const t=new vo;let r=n.length,i,s,o;for(;r--;)if(n[r][0]==="enter"){if(n[r][1].type==="content"){i=r;break}n[r][1].type==="paragraph"&&(s=r)}else n[r][1].type==="content"&&t.add(r,1,[]),!o&&n[r][1].type==="definition"&&(o=r);const l={type:"setextHeading",start:{...n[i][1].start},end:{...n[n.length-1][1].end}};return n[s][1].type="setextHeadingText",o?(t.add(s,0,[["enter",l,e]]),t.add(o+1,0,[["exit",n[i][1],e]]),n[i][1].end={...n[o][1].end}):n[i][1]=l,t.add(n.length,0,[["exit",l,e]]),t.consume(n),n}function _x(n,e,t){const r=this;let i;return s;function s(c){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(n.enter("setextHeadingLine"),i=c,o(c)):t(c)}function o(c){return n.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===i?(n.consume(c),l):(n.exit("setextHeadingLineSequence"),he(c)?Te(n,u,"lineSuffix")(c):u(c))}function u(c){return c===null||Z(c)?(n.exit("setextHeadingLine"),e(c)):t(c)}}const wx={tokenize:Ex};function Ex(n){const e=this,t=n.attempt(ta,r,n.attempt(this.parser.constructs.flowInitial,i,Te(n,n.attempt(this.parser.constructs.flow,i,n.attempt(xS,i)),"linePrefix")));return t;function r(s){if(s===null){n.consume(s);return}return n.enter("lineEndingBlank"),n.consume(s),n.exit("lineEndingBlank"),e.currentConstruct=void 0,t}function i(s){if(s===null){n.consume(s);return}return n.enter("lineEnding"),n.consume(s),n.exit("lineEnding"),e.currentConstruct=void 0,t}}const Ix={resolveAll:lg()},Tx=ag("string"),vx=ag("text");function ag(n){return{resolveAll:lg(n==="text"?bx:void 0),tokenize:e};function e(t){const r=this,i=this.parser.constructs[n],s=t.attempt(i,o,l);return o;function o(d){return c(d)?s(d):l(d)}function l(d){if(d===null){t.consume(d);return}return t.enter("data"),t.consume(d),u}function u(d){return c(d)?(t.exit("data"),s(d)):(t.consume(d),u)}function c(d){if(d===null)return!0;const p=i[d];let g=-1;if(p)for(;++g<p.length;){const y=p[g];if(!y.previous||y.previous.call(r,r.previous))return!0}return!1}}}function lg(n){return e;function e(t,r){let i=-1,s;for(;++i<=t.length;)s===void 0?t[i]&&t[i][1].type==="data"&&(s=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==s+2&&(t[s][1].end=t[i-1][1].end,t.splice(s+2,i-s-2),i=s+2),s=void 0);return n?n(t,r):t}}function bx(n,e){const t=new vo;let r=0;for(;++r<=n.length;)if((r===n.length||n[r][1].type==="lineEnding")&&n[r-1][1].type==="data"){const i=n[r-1][1],s=e.sliceStream(i);let o=s.length,l=-1,u=0,c;for(;o--;){const d=s[o];if(typeof d=="string"){for(l=d.length;d.charCodeAt(l-1)===32;)u++,l--;if(l)break;l=-1}else if(d===-2)c=!0,u++;else if(d!==-1){o++;break}}if(e._contentTypeTextTrailing&&r===n.length&&(u=0),u){const d={type:r===n.length||c||u<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:i.start._bufferIndex+l,_index:i.start._index+o,line:i.end.line,column:i.end.column-u,offset:i.end.offset-u},end:{...i.end}};i.end={...d.start},i.start.offset===i.end.offset?Object.assign(i,d):t.add(r,0,[["enter",d,e],["exit",d,e]])}r++}return t.consume(n),n}const Ax={42:at,43:at,45:at,48:at,49:at,50:at,51:at,52:at,53:at,54:at,55:at,56:at,57:at,62:eg},Sx={91:NS},xx={[-2]:Pa,[-1]:Pa,32:Pa},kx={35:MS,42:Js,45:[Vd,Js],60:zS,61:Vd,95:Js,96:Nd,126:Nd},Cx={38:ng,92:tg},Rx={[-5]:Na,[-4]:Na,[-3]:Na,33:ix,38:ng,42:El,60:[lS,GS],91:ox,92:[jS,tg],93:Mu,95:El,96:IS},Px={null:[El,Ix]},Nx={null:[42,95]},Dx={null:[]},Vx=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Nx,contentInitial:Sx,disable:Dx,document:Ax,flow:kx,flowInitial:xx,insideSpan:Px,string:Cx,text:Rx},Symbol.toStringTag,{value:"Module"}));function Ox(n,e,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},s=[];let o=[],l=[];const u={attempt:A(W),check:A(I),consume:F,enter:j,exit:H,interrupt:A(I,{interrupt:!0})},c={code:null,containerState:{},defineSkip:R,events:[],now:S,parser:n,previous:null,sliceSerialize:g,sliceStream:y,write:p};let d=e.tokenize.call(c,u);return e.resolveAll&&s.push(e),c;function p(T){return o=kt(o,T),D(),o[o.length-1]!==null?[]:(w(e,0),c.events=Lu(s,c.events,c),c.events)}function g(T,v){return Lx(y(T),v)}function y(T){return jx(o,T)}function S(){const{_bufferIndex:T,_index:v,line:E,column:ue,offset:re}=r;return{_bufferIndex:T,_index:v,line:E,column:ue,offset:re}}function R(T){i[T.line]=T.column,k()}function D(){for(;r._index<o.length;){const T=o[r._index];if(typeof T=="string"){const v=r._index;for(r._bufferIndex<0&&(r._bufferIndex=0);r._index===v&&r._bufferIndex<T.length;)P(T.charCodeAt(r._bufferIndex))}else P(T)}}function P(T){d=d(T)}function F(T){Z(T)?(r.line++,r.column=1,r.offset+=T===-3?2:1,k()):T!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=T}function j(T,v){const E=v||{};return E.type=T,E.start=S(),c.events.push(["enter",E,c]),l.push(E),E}function H(T){const v=l.pop();return v.end=S(),c.events.push(["exit",v,c]),v}function W(T,v){w(T,v.from)}function I(T,v){v.restore()}function A(T,v){return E;function E(ue,re,Le){let ve,ze,pt,C;return Array.isArray(ue)?Me(ue):"tokenize"in ue?Me([ue]):mt(ue);function mt(Ce){return Mt;function Mt(Ft){const fn=Ft!==null&&Ce[Ft],Pt=Ft!==null&&Ce.null,pn=[...Array.isArray(fn)?fn:fn?[fn]:[],...Array.isArray(Pt)?Pt:Pt?[Pt]:[]];return Me(pn)(Ft)}}function Me(Ce){return ve=Ce,ze=0,Ce.length===0?Le:x(Ce[ze])}function x(Ce){return Mt;function Mt(Ft){return C=b(),pt=Ce,Ce.partial||(c.currentConstruct=Ce),Ce.name&&c.parser.constructs.disable.null.includes(Ce.name)?St():Ce.tokenize.call(v?Object.assign(Object.create(c),v):c,u,gt,St)(Ft)}}function gt(Ce){return T(pt,C),re}function St(Ce){return C.restore(),++ze<ve.length?x(ve[ze]):Le}}}function w(T,v){T.resolveAll&&!s.includes(T)&&s.push(T),T.resolve&&zn(c.events,v,c.events.length-v,T.resolve(c.events.slice(v),c)),T.resolveTo&&(c.events=T.resolveTo(c.events,c))}function b(){const T=S(),v=c.previous,E=c.currentConstruct,ue=c.events.length,re=Array.from(l);return{from:ue,restore:Le};function Le(){r=T,c.previous=v,c.currentConstruct=E,c.events.length=ue,l=re,k()}}function k(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function jx(n,e){const t=e.start._index,r=e.start._bufferIndex,i=e.end._index,s=e.end._bufferIndex;let o;if(t===i)o=[n[t].slice(r,s)];else{if(o=n.slice(t,i),r>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift()}s>0&&o.push(n[i].slice(0,s))}return o}function Lx(n,e){let t=-1;const r=[];let i;for(;++t<n.length;){const s=n[t];let o;if(typeof s=="string")o=s;else switch(s){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=e?" ":"	";break}case-1:{if(!e&&i)continue;o=" ";break}default:o=String.fromCharCode(s)}i=s===-2,r.push(o)}return r.join("")}function Mx(n){const r={constructs:GA([Vx,...(n||{}).extensions||[]]),content:i(tS),defined:[],document:i(rS),flow:i(wx),lazy:{},string:i(Tx),text:i(vx)};return r;function i(s){return o;function o(l){return Ox(r,s,l)}}}function Fx(n){for(;!rg(n););return n}const Od=/[\0\t\n\r]/g;function Ux(){let n=1,e="",t=!0,r;return i;function i(s,o,l){s=e+(typeof s=="string"?s.toString():new TextDecoder(o||void 0).decode(s));const u=[];let c=0;for(e="",t&&(s.charCodeAt(0)===65279&&c++,t=void 0);c<s.length;){Od.lastIndex=c;const d=Od.exec(s),p=d&&d.index!==void 0?d.index:s.length,g=s.charCodeAt(p);if(!d){e=s.slice(c);break}if(g===10&&c===p&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),c<p&&(u.push(s.slice(c,p)),n+=p-c),g){case 0:{u.push(65533),n++;break}case 9:{const y=Math.ceil(n/4)*4;for(u.push(-2);n++<y;)u.push(-1);break}case 10:{u.push(-4),n=1;break}default:r=!0,n=1}c=p+1}return l&&(r&&u.push(-5),e&&u.push(e),u.push(null)),u}}const Bx=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function zx(n){return n.replace(Bx,qx)}function qx(n,e,t){if(e)return e;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),s=i===120||i===88;return Jm(t.slice(s?2:1),s?16:10)}return ju(t)||n}const ug={}.hasOwnProperty;function $x(n,e,t){return e&&typeof e=="object"&&(t=e,e=void 0),Hx(t)(Fx(Mx(t).document().write(Ux()(n,e,!0))))}function Hx(n){const e={afterExit:[],beforeEnter:[],transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(pr),autolinkProtocol:k,autolinkEmail:k,atxHeading:o(si),blockQuote:o(pn),characterEscape:k,characterReference:k,codeFenced:o(fr),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(fr,l),codeText:o(ni,l),codeTextData:k,data:k,codeFlowValue:k,definition:o(ri),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(ii),hardBreakEscape:o(fs),hardBreakTrailing:o(fs),htmlFlow:o(ps,l),htmlFlowData:k,htmlText:o(ps,l),htmlTextData:k,image:o(ms),label:l,link:o(pr),listItem:o(ia),listItemValue:y,listOrdered:o(oi,g),listUnordered:o(oi),paragraph:o(ai),reference:gt,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(si),strong:o(li),thematicBreak:o(Fe)},exit:{atxHeading:c(),atxHeadingSequence:I,autolink:c(),autolinkEmail:Pt,autolinkProtocol:fn,blockQuote:c(),characterEscapeValue:T,characterReferenceMarkerHexadecimal:Ce,characterReferenceMarkerNumeric:Ce,characterReferenceValue:Mt,characterReference:Ft,codeFenced:c(P),codeFencedFence:D,codeFencedFenceInfo:S,codeFencedFenceMeta:R,codeFlowValue:T,codeIndented:c(F),codeText:c(Le),codeTextData:T,data:T,definition:c(),definitionDestinationString:W,definitionLabelString:j,definitionTitleString:H,emphasis:c(),hardBreakEscape:c(E),hardBreakTrailing:c(E),htmlFlow:c(ue),htmlFlowData:T,htmlText:c(re),htmlTextData:T,image:c(ze),label:C,labelText:pt,lineEnding:v,link:c(ve),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:St,resourceDestinationString:mt,resourceTitleString:Me,resource:x,setextHeading:c(b),setextHeadingLineSequence:w,setextHeadingText:A,strong:c(),thematicBreak:c()}};cg(e,(n||{}).mdastExtensions||[]);const t={};return r;function r(V){let B={type:"root",children:[],position:void 0};const J={stack:[B],tokenStack:[],config:e,enter:u,exit:d,buffer:l,resume:p,data:t},ne=[],Ke=[];let pe=-1;for(;++pe<V.length;)if(Ke.push(V[pe]),V[pe][1].type==="listOrdered"||V[pe][1].type==="listUnordered")if(V[pe][0]==="enter")ne.push(Ke.length-1);else{const qe=ne.pop();s(Ke,qe)}for(V=Ke,pe=-1;++pe<V.length;){const qe=e[V[pe][0]];V[pe][0]==="enter"&&e.beforeEnter.length>0&&i(e.beforeEnter,{...J,sliceSerialize:V[pe][2].sliceSerialize},V[pe][1]),ug.call(qe,V[pe][1].type)&&qe[V[pe][1].type].call({...J,sliceSerialize:V[pe][2].sliceSerialize},V[pe][1]),V[pe][0]==="exit"&&e.afterExit.length>0&&i(e.afterExit,{...J,sliceSerialize:V[pe][2].sliceSerialize},V[pe][1])}if(J.tokenStack.length>0){const qe=J.tokenStack[J.tokenStack.length-1];(qe[1]||jd).call(J,void 0,qe[0])}for(B.position={start:wn(V.length>0?V[0][1].start:{line:1,column:1,offset:0}),end:wn(V.length>0?V[V.length-2][1].end:{line:1,column:1,offset:0})},pe=-1;++pe<e.transforms.length;)B=e.transforms[pe](B)||B;return B}function i(V,B,J){let ne=-1;for(;++ne<V.length;)V[ne].call(B,J)}function s(V,B){const J=V.length-1;let ne=B-1,Ke=-1,pe=!1,qe,yt,tn,$n;const Hn=[];for(;++ne<=J;){const Qe=V[ne];switch(Qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Qe[0]==="enter"?Ke++:Ke--,$n=void 0;break}case"lineEndingBlank":{Qe[0]==="enter"&&(qe&&!$n&&!Ke&&!tn&&(tn=ne),$n=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:$n=void 0}if(!Ke&&Qe[0]==="enter"&&Qe[1].type==="listItemPrefix"||Ke===-1&&Qe[0]==="exit"&&(Qe[1].type==="listUnordered"||Qe[1].type==="listOrdered")){if(qe){let xt=ne;for(yt=void 0;xt--;){const _t=V[xt];if(_t[1].type==="lineEnding"||_t[1].type==="lineEndingBlank"){if(_t[0]==="exit")continue;yt&&(V[yt][1].type="lineEndingBlank",pe=!0),_t[1].type="lineEnding",yt=xt}else if(!(_t[1].type==="linePrefix"||_t[1].type==="blockQuotePrefix"||_t[1].type==="blockQuotePrefixWhitespace"||_t[1].type==="blockQuoteMarker"||_t[1].type==="listItemIndent"))break}tn&&(!yt||tn<yt)&&(qe._spread=!0),qe.end=Object.assign({},yt?V[yt][1].start:Qe[1].end),Hn.push({at:yt||ne,event:["exit",qe,Qe[2]]})}if(Qe[1].type==="listItemPrefix"){const xt={type:"listItem",_spread:!1,start:Object.assign({},Qe[1].start),end:void 0};qe=xt,Hn.push({at:ne,event:["enter",xt,Qe[2]]}),tn=void 0,$n=!0}}}const mr=V.splice(B);let gr=0;for(ne=-1;++ne<mr.length;){for(;gr<Hn.length&&Hn[gr].at===B+ne;)V.push(Hn[gr++].event);V.push(mr[ne])}V[B][1]._spread=pe}function o(V,B){return J;function J(ne){u.call(this,V(ne),ne),B&&B.call(this,ne)}}function l(){this.stack.push({type:"fragment",children:[]})}function u(V,B,J){this.stack[this.stack.length-1].children.push(V),this.stack.push(V),this.tokenStack.push([B,J||void 0]),V.position={start:wn(B.start),end:void 0}}function c(V){return B;function B(J){V&&V.call(this,J),d.call(this,J)}}function d(V,B){const J=this.stack.pop(),ne=this.tokenStack.pop();if(!ne)throw new Error("Cannot close `"+V.type+"` ("+Vi({start:V.start,end:V.end})+"): it’s not open");ne[0].type!==V.type&&(B?B.call(this,V,ne[0]):(ne[1]||jd).call(this,V,ne[0])),J.position.end=wn(V.end)}function p(){return HA(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function y(V){if(this.data.expectingFirstListItemValue){const B=this.stack[this.stack.length-2];B.start=Number.parseInt(this.sliceSerialize(V),10),this.data.expectingFirstListItemValue=void 0}}function S(){const V=this.resume(),B=this.stack[this.stack.length-1];B.lang=V}function R(){const V=this.resume(),B=this.stack[this.stack.length-1];B.meta=V}function D(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function P(){const V=this.resume(),B=this.stack[this.stack.length-1];B.value=V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function F(){const V=this.resume(),B=this.stack[this.stack.length-1];B.value=V.replace(/(\r?\n|\r)$/g,"")}function j(V){const B=this.resume(),J=this.stack[this.stack.length-1];J.label=B,J.identifier=Dr(this.sliceSerialize(V)).toLowerCase()}function H(){const V=this.resume(),B=this.stack[this.stack.length-1];B.title=V}function W(){const V=this.resume(),B=this.stack[this.stack.length-1];B.url=V}function I(V){const B=this.stack[this.stack.length-1];if(!B.depth){const J=this.sliceSerialize(V).length;B.depth=J}}function A(){this.data.setextHeadingSlurpLineEnding=!0}function w(V){const B=this.stack[this.stack.length-1];B.depth=this.sliceSerialize(V).codePointAt(0)===61?1:2}function b(){this.data.setextHeadingSlurpLineEnding=void 0}function k(V){const J=this.stack[this.stack.length-1].children;let ne=J[J.length-1];(!ne||ne.type!=="text")&&(ne=gs(),ne.position={start:wn(V.start),end:void 0},J.push(ne)),this.stack.push(ne)}function T(V){const B=this.stack.pop();B.value+=this.sliceSerialize(V),B.position.end=wn(V.end)}function v(V){const B=this.stack[this.stack.length-1];if(this.data.atHardBreak){const J=B.children[B.children.length-1];J.position.end=wn(V.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(B.type)&&(k.call(this,V),T.call(this,V))}function E(){this.data.atHardBreak=!0}function ue(){const V=this.resume(),B=this.stack[this.stack.length-1];B.value=V}function re(){const V=this.resume(),B=this.stack[this.stack.length-1];B.value=V}function Le(){const V=this.resume(),B=this.stack[this.stack.length-1];B.value=V}function ve(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const B=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=B,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function ze(){const V=this.stack[this.stack.length-1];if(this.data.inReference){const B=this.data.referenceType||"shortcut";V.type+="Reference",V.referenceType=B,delete V.url,delete V.title}else delete V.identifier,delete V.label;this.data.referenceType=void 0}function pt(V){const B=this.sliceSerialize(V),J=this.stack[this.stack.length-2];J.label=zx(B),J.identifier=Dr(B).toLowerCase()}function C(){const V=this.stack[this.stack.length-1],B=this.resume(),J=this.stack[this.stack.length-1];if(this.data.inReference=!0,J.type==="link"){const ne=V.children;J.children=ne}else J.alt=B}function mt(){const V=this.resume(),B=this.stack[this.stack.length-1];B.url=V}function Me(){const V=this.resume(),B=this.stack[this.stack.length-1];B.title=V}function x(){this.data.inReference=void 0}function gt(){this.data.referenceType="collapsed"}function St(V){const B=this.resume(),J=this.stack[this.stack.length-1];J.label=B,J.identifier=Dr(this.sliceSerialize(V)).toLowerCase(),this.data.referenceType="full"}function Ce(V){this.data.characterReferenceType=V.type}function Mt(V){const B=this.sliceSerialize(V),J=this.data.characterReferenceType;let ne;J?(ne=Jm(B,J==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ne=ju(B);const Ke=this.stack[this.stack.length-1];Ke.value+=ne}function Ft(V){const B=this.stack.pop();B.position.end=wn(V.end)}function fn(V){T.call(this,V);const B=this.stack[this.stack.length-1];B.url=this.sliceSerialize(V)}function Pt(V){T.call(this,V);const B=this.stack[this.stack.length-1];B.url="mailto:"+this.sliceSerialize(V)}function pn(){return{type:"blockquote",children:[],position:void 0}}function fr(){return{type:"code",lang:null,meta:null,value:"",position:void 0}}function ni(){return{type:"inlineCode",value:"",position:void 0}}function ri(){return{type:"definition",identifier:"",label:null,title:null,url:"",position:void 0}}function ii(){return{type:"emphasis",children:[],position:void 0}}function si(){return{type:"heading",depth:0,children:[],position:void 0}}function fs(){return{type:"break",position:void 0}}function ps(){return{type:"html",value:"",position:void 0}}function ms(){return{type:"image",title:null,url:"",alt:null,position:void 0}}function pr(){return{type:"link",title:null,url:"",children:[],position:void 0}}function oi(V){return{type:"list",ordered:V.type==="listOrdered",start:null,spread:V._spread,children:[],position:void 0}}function ia(V){return{type:"listItem",spread:V._spread,checked:null,children:[],position:void 0}}function ai(){return{type:"paragraph",children:[],position:void 0}}function li(){return{type:"strong",children:[],position:void 0}}function gs(){return{type:"text",value:"",position:void 0}}function Fe(){return{type:"thematicBreak",position:void 0}}}function wn(n){return{line:n.line,column:n.column,offset:n.offset}}function cg(n,e){let t=-1;for(;++t<e.length;){const r=e[t];Array.isArray(r)?cg(n,r):Wx(n,r)}}function Wx(n,e){let t;for(t in e)if(ug.call(e,t))switch(t){case"canContainEols":{const r=e[t];r&&n[t].push(...r);break}case"transforms":{const r=e[t];r&&n[t].push(...r);break}case"afterExit":case"beforeEnter":{const r=e[t];r&&n[t].push(r);break}case"enter":case"exit":{const r=e[t];r&&Object.assign(n[t],r);break}}}function jd(n,e){throw n?new Error("Cannot close `"+n.type+"` ("+Vi({start:n.start,end:n.end})+"): a different token (`"+e.type+"`, "+Vi({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Vi({start:e.start,end:e.end})+") is still open")}function Gx(n){const e=this;e.parser=t;function t(r){return $x(r,{...e.data("settings"),...n,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function Kx(n,e){const t={type:"element",tagName:"blockquote",properties:{},children:n.wrap(n.all(e),!0)};return n.patch(e,t),n.applyData(e,t)}function Qx(n,e){const t={type:"element",tagName:"br",properties:{},children:[]};return n.patch(e,t),[n.applyData(e,t),{type:"text",value:`
`}]}function Yx(n,e){const t=e.value?e.value+`
`:"",r={},i=e.lang?e.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return e.meta&&(s.data={meta:e.meta}),n.patch(e,s),s=n.applyData(e,s),s={type:"element",tagName:"pre",properties:{},children:[s]},n.patch(e,s),s}function Xx(n,e){const t={type:"element",tagName:"del",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function Jx(n,e){const t={type:"element",tagName:"em",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function Zx(n,e){const t=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",r=String(e.identifier).toUpperCase(),i=ti(r.toLowerCase()),s=n.footnoteOrder.indexOf(r);let o,l=n.footnoteCounts.get(r);l===void 0?(l=0,n.footnoteOrder.push(r),o=n.footnoteOrder.length):o=s+1,l+=1,n.footnoteCounts.set(r,l);const u={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};n.patch(e,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return n.patch(e,c),n.applyData(e,c)}function ek(n,e){const t={type:"element",tagName:"h"+e.depth,properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function tk(n,e){if(n.options.allowDangerousHtml){const t={type:"raw",value:e.value};return n.patch(e,t),n.applyData(e,t)}}function hg(n,e){const t=e.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+r}];const i=n.all(e),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function nk(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return hg(n,e);const i={src:ti(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return n.patch(e,s),n.applyData(e,s)}function rk(n,e){const t={src:ti(e.url)};e.alt!==null&&e.alt!==void 0&&(t.alt=e.alt),e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"img",properties:t,children:[]};return n.patch(e,r),n.applyData(e,r)}function ik(n,e){const t={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};n.patch(e,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return n.patch(e,r),n.applyData(e,r)}function sk(n,e){const t=String(e.identifier).toUpperCase(),r=n.definitionById.get(t);if(!r)return hg(n,e);const i={href:ti(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:n.all(e)};return n.patch(e,s),n.applyData(e,s)}function ok(n,e){const t={href:ti(e.url)};e.title!==null&&e.title!==void 0&&(t.title=e.title);const r={type:"element",tagName:"a",properties:t,children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function ak(n,e,t){const r=n.all(e),i=t?lk(t):dg(e),s={},o=[];if(typeof e.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&o.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?o.push(...d.children):o.push(d)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:s,children:o};return n.patch(e,c),n.applyData(e,c)}function lk(n){let e=!1;if(n.type==="list"){e=n.spread||!1;const t=n.children;let r=-1;for(;!e&&++r<t.length;)e=dg(t[r])}return e}function dg(n){const e=n.spread;return e??n.children.length>1}function uk(n,e){const t={},r=n.all(e);let i=-1;for(typeof e.start=="number"&&e.start!==1&&(t.start=e.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const s={type:"element",tagName:e.ordered?"ol":"ul",properties:t,children:n.wrap(r,!0)};return n.patch(e,s),n.applyData(e,s)}function ck(n,e){const t={type:"element",tagName:"p",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function hk(n,e){const t={type:"root",children:n.wrap(n.all(e))};return n.patch(e,t),n.applyData(e,t)}function dk(n,e){const t={type:"element",tagName:"strong",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}function fk(n,e){const t=n.all(e),r=t.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:n.wrap([r],!0)};n.patch(e.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:n.wrap(t,!0)},l=Nu(e.children[1]),u=Hm(e.children[e.children.length-1]);l&&u&&(o.position={start:l,end:u}),i.push(o)}const s={type:"element",tagName:"table",properties:{},children:n.wrap(i,!0)};return n.patch(e,s),n.applyData(e,s)}function pk(n,e,t){const r=t?t.children:void 0,s=(r?r.indexOf(e):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,l=o?o.length:e.children.length;let u=-1;const c=[];for(;++u<l;){const p=e.children[u],g={},y=o?o[u]:void 0;y&&(g.align=y);let S={type:"element",tagName:s,properties:g,children:[]};p&&(S.children=n.all(p),n.patch(p,S),S=n.applyData(p,S)),c.push(S)}const d={type:"element",tagName:"tr",properties:{},children:n.wrap(c,!0)};return n.patch(e,d),n.applyData(e,d)}function mk(n,e){const t={type:"element",tagName:"td",properties:{},children:n.all(e)};return n.patch(e,t),n.applyData(e,t)}const Ld=9,Md=32;function gk(n){const e=String(n),t=/\r?\n|\r/g;let r=t.exec(e),i=0;const s=[];for(;r;)s.push(Fd(e.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(e);return s.push(Fd(e.slice(i),i>0,!1)),s.join("")}function Fd(n,e,t){let r=0,i=n.length;if(e){let s=n.codePointAt(r);for(;s===Ld||s===Md;)r++,s=n.codePointAt(r)}if(t){let s=n.codePointAt(i-1);for(;s===Ld||s===Md;)i--,s=n.codePointAt(i-1)}return i>r?n.slice(r,i):""}function yk(n,e){const t={type:"text",value:gk(String(e.value))};return n.patch(e,t),n.applyData(e,t)}function _k(n,e){const t={type:"element",tagName:"hr",properties:{},children:[]};return n.patch(e,t),n.applyData(e,t)}const wk={blockquote:Kx,break:Qx,code:Yx,delete:Xx,emphasis:Jx,footnoteReference:Zx,heading:ek,html:tk,imageReference:nk,image:rk,inlineCode:ik,linkReference:sk,link:ok,listItem:ak,list:uk,paragraph:ck,root:hk,strong:dk,table:fk,tableCell:mk,tableRow:pk,text:yk,thematicBreak:_k,toml:Ms,yaml:Ms,definition:Ms,footnoteDefinition:Ms};function Ms(){}const fg=-1,na=0,ji=1,bo=2,Fu=3,Uu=4,Bu=5,zu=6,pg=7,mg=8,Ud=typeof self=="object"?self:globalThis,Ek=(n,e)=>{const t=(i,s)=>(n.set(s,i),i),r=i=>{if(n.has(i))return n.get(i);const[s,o]=e[i];switch(s){case na:case fg:return t(o,i);case ji:{const l=t([],i);for(const u of o)l.push(r(u));return l}case bo:{const l=t({},i);for(const[u,c]of o)l[r(u)]=r(c);return l}case Fu:return t(new Date(o),i);case Uu:{const{source:l,flags:u}=o;return t(new RegExp(l,u),i)}case Bu:{const l=t(new Map,i);for(const[u,c]of o)l.set(r(u),r(c));return l}case zu:{const l=t(new Set,i);for(const u of o)l.add(r(u));return l}case pg:{const{name:l,message:u}=o;return t(new Ud[l](u),i)}case mg:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return t(new DataView(l),o)}}return t(new Ud[s](o),i)};return r},Bd=n=>Ek(new Map,n)(0),Ir="",{toString:Ik}={},{keys:Tk}=Object,Ii=n=>{const e=typeof n;if(e!=="object"||!n)return[na,e];const t=Ik.call(n).slice(8,-1);switch(t){case"Array":return[ji,Ir];case"Object":return[bo,Ir];case"Date":return[Fu,Ir];case"RegExp":return[Uu,Ir];case"Map":return[Bu,Ir];case"Set":return[zu,Ir];case"DataView":return[ji,t]}return t.includes("Array")?[ji,t]:t.includes("Error")?[pg,t]:[bo,t]},Fs=([n,e])=>n===na&&(e==="function"||e==="symbol"),vk=(n,e,t,r)=>{const i=(o,l)=>{const u=r.push(o)-1;return t.set(l,u),u},s=o=>{if(t.has(o))return t.get(o);let[l,u]=Ii(o);switch(l){case na:{let d=o;switch(u){case"bigint":l=mg,d=o.toString();break;case"function":case"symbol":if(n)throw new TypeError("unable to serialize "+u);d=null;break;case"undefined":return i([fg],o)}return i([l,d],o)}case ji:{if(u){let g=o;return u==="DataView"?g=new Uint8Array(o.buffer):u==="ArrayBuffer"&&(g=new Uint8Array(o)),i([u,[...g]],o)}const d=[],p=i([l,d],o);for(const g of o)d.push(s(g));return p}case bo:{if(u)switch(u){case"BigInt":return i([u,o.toString()],o);case"Boolean":case"Number":case"String":return i([u,o.valueOf()],o)}if(e&&"toJSON"in o)return s(o.toJSON());const d=[],p=i([l,d],o);for(const g of Tk(o))(n||!Fs(Ii(o[g])))&&d.push([s(g),s(o[g])]);return p}case Fu:return i([l,o.toISOString()],o);case Uu:{const{source:d,flags:p}=o;return i([l,{source:d,flags:p}],o)}case Bu:{const d=[],p=i([l,d],o);for(const[g,y]of o)(n||!(Fs(Ii(g))||Fs(Ii(y))))&&d.push([s(g),s(y)]);return p}case zu:{const d=[],p=i([l,d],o);for(const g of o)(n||!Fs(Ii(g)))&&d.push(s(g));return p}}const{message:c}=o;return i([l,{name:u,message:c}],o)};return s},zd=(n,{json:e,lossy:t}={})=>{const r=[];return vk(!(e||t),!!e,new Map,r)(n),r},Ao=typeof structuredClone=="function"?(n,e)=>e&&("json"in e||"lossy"in e)?Bd(zd(n,e)):structuredClone(n):(n,e)=>Bd(zd(n,e));function bk(n,e){const t=[{type:"text",value:"↩"}];return e>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),t}function Ak(n,e){return"Back to reference "+(n+1)+(e>1?"-"+e:"")}function Sk(n){const e=typeof n.options.clobberPrefix=="string"?n.options.clobberPrefix:"user-content-",t=n.options.footnoteBackContent||bk,r=n.options.footnoteBackLabel||Ak,i=n.options.footnoteLabel||"Footnotes",s=n.options.footnoteLabelTagName||"h2",o=n.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let u=-1;for(;++u<n.footnoteOrder.length;){const c=n.footnoteById.get(n.footnoteOrder[u]);if(!c)continue;const d=n.all(c),p=String(c.identifier).toUpperCase(),g=ti(p.toLowerCase());let y=0;const S=[],R=n.footnoteCounts.get(p);for(;R!==void 0&&++y<=R;){S.length>0&&S.push({type:"text",value:" "});let F=typeof t=="string"?t:t(u,y);typeof F=="string"&&(F={type:"text",value:F}),S.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+g+(y>1?"-"+y:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,y),className:["data-footnote-backref"]},children:Array.isArray(F)?F:[F]})}const D=d[d.length-1];if(D&&D.type==="element"&&D.tagName==="p"){const F=D.children[D.children.length-1];F&&F.type==="text"?F.value+=" ":D.children.push({type:"text",value:" "}),D.children.push(...S)}else d.push(...S);const P={type:"element",tagName:"li",properties:{id:e+"fn-"+g},children:n.wrap(d,!0)};n.patch(c,P),l.push(P)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Ao(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:n.wrap(l,!0)},{type:"text",value:`
`}]}}const gg=function(n){if(n==null)return Rk;if(typeof n=="function")return ra(n);if(typeof n=="object")return Array.isArray(n)?xk(n):kk(n);if(typeof n=="string")return Ck(n);throw new Error("Expected function, string, or object as test")};function xk(n){const e=[];let t=-1;for(;++t<n.length;)e[t]=gg(n[t]);return ra(r);function r(...i){let s=-1;for(;++s<e.length;)if(e[s].apply(this,i))return!0;return!1}}function kk(n){const e=n;return ra(t);function t(r){const i=r;let s;for(s in n)if(i[s]!==e[s])return!1;return!0}}function Ck(n){return ra(e);function e(t){return t&&t.type===n}}function ra(n){return e;function e(t,r,i){return!!(Pk(t)&&n.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function Rk(){return!0}function Pk(n){return n!==null&&typeof n=="object"&&"type"in n}const yg=[],Nk=!0,qd=!1,Dk="skip";function Vk(n,e,t,r){let i;typeof e=="function"&&typeof t!="function"?(r=t,t=e):i=e;const s=gg(i),o=r?-1:1;l(n,void 0,[])();function l(u,c,d){const p=u&&typeof u=="object"?u:{};if(typeof p.type=="string"){const y=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(g,"name",{value:"node ("+(u.type+(y?"<"+y+">":""))+")"})}return g;function g(){let y=yg,S,R,D;if((!e||s(u,c,d[d.length-1]||void 0))&&(y=Ok(t(u,d)),y[0]===qd))return y;if("children"in u&&u.children){const P=u;if(P.children&&y[0]!==Dk)for(R=(r?P.children.length:-1)+o,D=d.concat(P);R>-1&&R<P.children.length;){const F=P.children[R];if(S=l(F,R,D)(),S[0]===qd)return S;R=typeof S[1]=="number"?S[1]:R+o}}return y}}}function Ok(n){return Array.isArray(n)?n:typeof n=="number"?[Nk,n]:n==null?yg:[n]}function _g(n,e,t,r){let i,s,o;typeof e=="function"&&typeof t!="function"?(s=void 0,o=e,i=t):(s=e,o=t,i=r),Vk(n,s,l,i);function l(u,c){const d=c[c.length-1],p=d?d.children.indexOf(u):void 0;return o(u,p,d)}}const Tl={}.hasOwnProperty,jk={};function Lk(n,e){const t=e||jk,r=new Map,i=new Map,s=new Map,o={...wk,...t.handlers},l={all:c,applyData:Fk,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:o,one:u,options:t,patch:Mk,wrap:Bk};return _g(n,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,g=String(d.identifier).toUpperCase();p.has(g)||p.set(g,d)}}),l;function u(d,p){const g=d.type,y=l.handlers[g];if(Tl.call(l.handlers,g)&&y)return y(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(g)){if("children"in d){const{children:R,...D}=d,P=Ao(D);return P.children=l.all(d),P}return Ao(d)}return(l.options.unknownHandler||Uk)(l,d,p)}function c(d){const p=[];if("children"in d){const g=d.children;let y=-1;for(;++y<g.length;){const S=l.one(g[y],d);if(S){if(y&&g[y-1].type==="break"&&(!Array.isArray(S)&&S.type==="text"&&(S.value=$d(S.value)),!Array.isArray(S)&&S.type==="element")){const R=S.children[0];R&&R.type==="text"&&(R.value=$d(R.value))}Array.isArray(S)?p.push(...S):p.push(S)}}}return p}}function Mk(n,e){n.position&&(e.position=vA(n))}function Fk(n,e){let t=e;if(n&&n.data){const r=n.data.hName,i=n.data.hChildren,s=n.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const o="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:o}}t.type==="element"&&s&&Object.assign(t.properties,Ao(s)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function Uk(n,e){const t=e.data||{},r="value"in e&&!(Tl.call(t,"hProperties")||Tl.call(t,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:n.all(e)};return n.patch(e,r),n.applyData(e,r)}function Bk(n,e){const t=[];let r=-1;for(e&&t.push({type:"text",value:`
`});++r<n.length;)r&&t.push({type:"text",value:`
`}),t.push(n[r]);return e&&n.length>0&&t.push({type:"text",value:`
`}),t}function $d(n){let e=0,t=n.charCodeAt(e);for(;t===9||t===32;)e++,t=n.charCodeAt(e);return n.slice(e)}function Hd(n,e){const t=Lk(n,e),r=t.one(n,void 0),i=Sk(t),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function zk(n,e){return n&&"run"in n?async function(t,r){const i=Hd(t,{file:r,...e});await n.run(i,r)}:function(t,r){return Hd(t,{file:r,...n||e})}}function Wd(n){if(n)throw n}var Zs=Object.prototype.hasOwnProperty,wg=Object.prototype.toString,Gd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,Qd=function(e){return typeof Array.isArray=="function"?Array.isArray(e):wg.call(e)==="[object Array]"},Yd=function(e){if(!e||wg.call(e)!=="[object Object]")return!1;var t=Zs.call(e,"constructor"),r=e.constructor&&e.constructor.prototype&&Zs.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!r)return!1;var i;for(i in e);return typeof i>"u"||Zs.call(e,i)},Xd=function(e,t){Gd&&t.name==="__proto__"?Gd(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},Jd=function(e,t){if(t==="__proto__")if(Zs.call(e,t)){if(Kd)return Kd(e,t).value}else return;return e[t]},qk=function n(){var e,t,r,i,s,o,l=arguments[0],u=1,c=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},u=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});u<c;++u)if(e=arguments[u],e!=null)for(t in e)r=Jd(l,t),i=Jd(e,t),l!==i&&(d&&i&&(Yd(i)||(s=Qd(i)))?(s?(s=!1,o=r&&Qd(r)?r:[]):o=r&&Yd(r)?r:{},Xd(l,{name:t,newValue:n(d,o,i)})):typeof i<"u"&&Xd(l,{name:t,newValue:i}));return l};const Da=af(qk);function vl(n){if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function $k(){const n=[],e={run:t,use:r};return e;function t(...i){let s=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(u,...c){const d=n[++s];let p=-1;if(u){o(u);return}for(;++p<i.length;)(c[p]===null||c[p]===void 0)&&(c[p]=i[p]);i=c,d?Hk(d,l)(...c):o(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return n.push(i),e}}function Hk(n,e){let t;return r;function r(...o){const l=n.length>o.length;let u;l&&o.push(i);try{u=n.apply(this,o)}catch(c){const d=c;if(l&&t)throw d;return i(d)}l||(u&&u.then&&typeof u.then=="function"?u.then(s,i):u instanceof Error?i(u):s(u))}function i(o,...l){t||(t=!0,e(o,...l))}function s(o){i(null,o)}}const Ut={basename:Wk,dirname:Gk,extname:Kk,join:Qk,sep:"/"};function Wk(n,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');ds(n);let t=0,r=-1,i=n.length,s;if(e===void 0||e.length===0||e.length>n.length){for(;i--;)if(n.codePointAt(i)===47){if(s){t=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":n.slice(t,r)}if(e===n)return"";let o=-1,l=e.length-1;for(;i--;)if(n.codePointAt(i)===47){if(s){t=i+1;break}}else o<0&&(s=!0,o=i+1),l>-1&&(n.codePointAt(i)===e.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return t===r?r=o:r<0&&(r=n.length),n.slice(t,r)}function Gk(n){if(ds(n),n.length===0)return".";let e=-1,t=n.length,r;for(;--t;)if(n.codePointAt(t)===47){if(r){e=t;break}}else r||(r=!0);return e<0?n.codePointAt(0)===47?"/":".":e===1&&n.codePointAt(0)===47?"//":n.slice(0,e)}function Kk(n){ds(n);let e=n.length,t=-1,r=0,i=-1,s=0,o;for(;e--;){const l=n.codePointAt(e);if(l===47){if(o){r=e+1;break}continue}t<0&&(o=!0,t=e+1),l===46?i<0?i=e:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||t<0||s===0||s===1&&i===t-1&&i===r+1?"":n.slice(i,t)}function Qk(...n){let e=-1,t;for(;++e<n.length;)ds(n[e]),n[e]&&(t=t===void 0?n[e]:t+"/"+n[e]);return t===void 0?".":Yk(t)}function Yk(n){ds(n);const e=n.codePointAt(0)===47;let t=Xk(n,!e);return t.length===0&&!e&&(t="."),t.length>0&&n.codePointAt(n.length-1)===47&&(t+="/"),e?"/"+t:t}function Xk(n,e){let t="",r=0,i=-1,s=0,o=-1,l,u;for(;++o<=n.length;){if(o<n.length)l=n.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||s===1))if(i!==o-1&&s===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(u=t.lastIndexOf("/"),u!==t.length-1){u<0?(t="",r=0):(t=t.slice(0,u),r=t.length-1-t.lastIndexOf("/")),i=o,s=0;continue}}else if(t.length>0){t="",r=0,i=o,s=0;continue}}e&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+n.slice(i+1,o):t=n.slice(i+1,o),r=o-i-1;i=o,s=0}else l===46&&s>-1?s++:s=-1}return t}function ds(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}const Jk={cwd:Zk};function Zk(){return"/"}function bl(n){return!!(n!==null&&typeof n=="object"&&"href"in n&&n.href&&"protocol"in n&&n.protocol&&n.auth===void 0)}function eC(n){if(typeof n=="string")n=new URL(n);else if(!bl(n)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+n+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(n.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return tC(n)}function tC(n){if(n.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const e=n.pathname;let t=-1;for(;++t<e.length;)if(e.codePointAt(t)===37&&e.codePointAt(t+1)===50){const r=e.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(e)}const Va=["history","path","basename","stem","extname","dirname"];class Eg{constructor(e){let t;e?bl(e)?t={path:e}:typeof e=="string"||nC(e)?t={value:e}:t=e:t={},this.cwd="cwd"in t?"":Jk.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Va.length;){const s=Va[r];s in t&&t[s]!==void 0&&t[s]!==null&&(this[s]=s==="history"?[...t[s]]:t[s])}let i;for(i in t)Va.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?Ut.basename(this.path):void 0}set basename(e){ja(e,"basename"),Oa(e,"basename"),this.path=Ut.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?Ut.dirname(this.path):void 0}set dirname(e){Zd(this.basename,"dirname"),this.path=Ut.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?Ut.extname(this.path):void 0}set extname(e){if(Oa(e,"extname"),Zd(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ut.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){bl(e)&&(e=eC(e)),ja(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?Ut.basename(this.path,this.extname):void 0}set stem(e){ja(e,"stem"),Oa(e,"stem"),this.path=Ut.join(this.dirname||"",e+(this.extname||""))}fail(e,t,r){const i=this.message(e,t,r);throw i.fatal=!0,i}info(e,t,r){const i=this.message(e,t,r);return i.fatal=void 0,i}message(e,t,r){const i=new rt(e,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function Oa(n,e){if(n&&n.includes(Ut.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+Ut.sep+"`")}function ja(n,e){if(!n)throw new Error("`"+e+"` cannot be empty")}function Zd(n,e){if(!n)throw new Error("Setting `"+e+"` requires `path` to be set too")}function nC(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const rC=function(n){const r=this.constructor.prototype,i=r[n],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},iC={}.hasOwnProperty;class qu extends rC{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=$k()}copy(){const e=new qu;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];e.use(...r)}return e.data(Da(!0,{},this.namespace)),e}data(e,t){return typeof e=="string"?arguments.length===2?(Fa("data",this.frozen),this.namespace[e]=t,this):iC.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Fa("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(e,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const t=Us(e),r=this.parser||this.Parser;return La("parse",r),r(String(t),t)}process(e,t){const r=this;return this.freeze(),La("process",this.parser||this.Parser),Ma("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(s,o){const l=Us(e),u=r.parse(l);r.run(u,l,function(d,p,g){if(d||!p||!g)return c(d);const y=p,S=r.stringify(y,g);aC(S)?g.value=S:g.result=S,c(d,g)});function c(d,p){d||!p?o(d):s?s(p):t(void 0,p)}}}processSync(e){let t=!1,r;return this.freeze(),La("processSync",this.parser||this.Parser),Ma("processSync",this.compiler||this.Compiler),this.process(e,i),tf("processSync","process",t),r;function i(s,o){t=!0,Wd(s),r=o}}run(e,t,r){ef(e),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?s(void 0,r):new Promise(s);function s(o,l){const u=Us(t);i.run(e,u,c);function c(d,p,g){const y=p||e;d?l(d):o?o(y):r(void 0,y,g)}}}runSync(e,t){let r=!1,i;return this.run(e,t,s),tf("runSync","run",r),i;function s(o,l){Wd(o),i=l,r=!0}}stringify(e,t){this.freeze();const r=Us(t),i=this.compiler||this.Compiler;return Ma("stringify",i),ef(e),i(e,r)}use(e,...t){const r=this.attachers,i=this.namespace;if(Fa("use",this.frozen),e!=null)if(typeof e=="function")u(e,t);else if(typeof e=="object")Array.isArray(e)?l(e):o(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function s(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...p]=c;u(d,p)}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(i.settings=Da(!0,i.settings,c.settings))}function l(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const p=c[d];s(p)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,d){let p=-1,g=-1;for(;++p<r.length;)if(r[p][0]===c){g=p;break}if(g===-1)r.push([c,...d]);else if(d.length>0){let[y,...S]=d;const R=r[g][1];vl(R)&&vl(y)&&(y=Da(!0,R,y)),r[g]=[c,y,...S]}}}}const sC=new qu().freeze();function La(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `parser`")}function Ma(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `compiler`")}function Fa(n,e){if(e)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ef(n){if(!vl(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function tf(n,e,t){if(!t)throw new Error("`"+n+"` finished async. Use `"+e+"` instead")}function Us(n){return oC(n)?n:new Eg(n)}function oC(n){return!!(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function aC(n){return typeof n=="string"||lC(n)}function lC(n){return!!(n&&typeof n=="object"&&"byteLength"in n&&"byteOffset"in n)}const uC="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",nf=[],rf={allowDangerousHtml:!0},cC=/^(https?|ircs?|mailto|xmpp)$/i,hC=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function dC(n){const e=fC(n),t=pC(n);return mC(e.runSync(e.parse(t),t),n)}function fC(n){const e=n.rehypePlugins||nf,t=n.remarkPlugins||nf,r=n.remarkRehypeOptions?{...n.remarkRehypeOptions,...rf}:rf;return sC().use(Gx).use(t).use(zk,r).use(e)}function pC(n){const e=n.children||"",t=new Eg;return typeof e=="string"&&(t.value=e),t}function mC(n,e){const t=e.allowedElements,r=e.allowElement,i=e.components,s=e.disallowedElements,o=e.skipHtml,l=e.unwrapDisallowed,u=e.urlTransform||gC;for(const d of hC)Object.hasOwn(e,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+uC+d.id,void 0);return _g(n,c),kA(n,{Fragment:f.Fragment,components:i,ignoreInvalidStyle:!0,jsx:f.jsx,jsxs:f.jsxs,passKeys:!0,passNode:!0});function c(d,p,g){if(d.type==="raw"&&g&&typeof p=="number")return o?g.children.splice(p,1):g.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let y;for(y in Ra)if(Object.hasOwn(Ra,y)&&Object.hasOwn(d.properties,y)){const S=d.properties[y],R=Ra[y];(R===null||R.includes(d.tagName))&&(d.properties[y]=u(String(S||""),y,d))}}if(d.type==="element"){let y=t?!t.includes(d.tagName):s?s.includes(d.tagName):!1;if(!y&&r&&typeof p=="number"&&(y=!r(d,p,g)),y&&g&&typeof p=="number")return l&&d.children?g.children.splice(p,1,...d.children):g.children.splice(p,1),p}}}function gC(n){const e=n.indexOf(":"),t=n.indexOf("?"),r=n.indexOf("#"),i=n.indexOf("/");return e===-1||i!==-1&&e>i||t!==-1&&e>t||r!==-1&&e>r||cC.test(n.slice(0,e))?n:""}function So({children:n}){return f.jsx("div",{className:"journal-prose",children:f.jsx(dC,{components:{a:({href:e,children:t})=>f.jsx("a",{href:tt(e),rel:"noopener noreferrer",children:t}),img:({src:e,alt:t})=>tt(e)?f.jsx("img",{src:tt(e),alt:t||"",loading:"lazy"}):null},children:n||""})})}function ce({children:n,error:e=!1}){return n?f.jsx("p",{className:`journal-notice ${e?"is-error":""}`,role:e?"alert":"status",children:n}):null}function Ig(){const{settings:n}=en(),e={GitHub:Zg,LinkedIn:Jg,Email:Xg,Instagram:ty,Youtube:Vc,YouTube:Vc};return f.jsx("div",{className:"journal-socials",children:n.socials.filter(t=>tt(t.url)).map((t,r)=>{const i=e[t.platform]||ey;return f.jsx("a",{href:tt(t.url),"aria-label":t.platform,title:t.platform,rel:"noopener noreferrer",children:f.jsx(i,{size:17,strokeWidth:1.5})},`${t.platform}-${r}`)})})}function $u({owner:n=!1}){const[e,t]=K.useState(""),[r,i]=K.useState(!1),[s,o]=K.useState("");async function l(u){t(""),i(!0);try{await u()}catch(c){t(ct(c))}finally{i(!1)}}return f.jsxs("div",{className:"journal-auth",children:[f.jsx("p",{children:n?"Sign in with the existing owner account to manage this space.":"Sign in to participate. Reading the site is always open."}),n?f.jsxs("form",{onSubmit:u=>{u.preventDefault(),l(()=>Tb(s))},children:[f.jsxs("label",{children:["Owner password",f.jsx("input",{type:"password",autoComplete:"current-password",value:s,onChange:u=>o(u.target.value),required:!0})]}),f.jsx("button",{disabled:r,className:"journal-button",children:r?"Signing in…":"Owner sign-in"})]}):f.jsx("button",{className:"journal-button",disabled:r,onClick:()=>l(Ib),children:r?"Opening Google…":"Continue with Google"}),f.jsx(ce,{error:!0,children:e})]})}const yC=["About","Portfolio","Opinions","Projects","Beliefs","Story","Connect"];function _C(){var d,p;const{pathname:n}=Wg(),{user:e,isAdmin:t}=en(),i=Kt(e&&!t?ye(me,"personalConversations",e.uid):null,`unread-${e==null?void 0:e.uid}-${t}`).items[0],s=i&&i.lastSenderId!==(e==null?void 0:e.uid)&&(((d=i.lastMessageAt)==null?void 0:d.toMillis())||0)>(((p=i.userReadAt)==null?void 0:p.toMillis())||0),[o,l]=K.useState(!1),[u,c]=K.useState(()=>{try{return localStorage.getItem("personal-theme")==="dark"}catch{return!1}});return Ua.useLayoutEffect(()=>{document.documentElement.classList.toggle("personal-dark",u);try{localStorage.setItem("personal-theme",u?"dark":"light")}catch{}return()=>document.documentElement.classList.remove("personal-dark")},[u]),Ua.useEffect(()=>{l(!1),window.scrollTo(0,0),document.title=`${n==="/"?"Ashutosh Srivastava":n.split("/")[1].replace(/^./,g=>g.toUpperCase())+" · Ashutosh Srivastava"}`},[n]),f.jsxs("div",{className:"journal",children:[f.jsx("a",{className:"journal-skip",href:"#journal-main",children:"Skip to content"}),f.jsxs("header",{className:"journal-header",children:[f.jsxs(fe,{className:"journal-brand",to:"/",children:["ashutosh",f.jsx("span",{children:"."})]}),f.jsx("nav",{"aria-label":"Main navigation",className:o?"is-open":"",children:yC.map(g=>f.jsx(Gg,{to:`/${g.toLowerCase()}`,children:g},g))}),f.jsxs("div",{className:"journal-header-actions",children:[f.jsx("button",{"aria-label":u?"Switch to light mode":"Switch to dark mode","aria-pressed":u,onClick:()=>c(!u),children:u?f.jsx(iy,{size:17}):f.jsx(ry,{size:17})}),f.jsx("button",{className:"journal-mobile-menu","aria-label":o?"Close navigation":"Open navigation","aria-expanded":o,onClick:()=>l(!o),children:o?f.jsx(Yg,{size:20}):f.jsx(ny,{size:20})})]})]}),f.jsx("main",{id:"journal-main",children:f.jsx(Kg,{})}),f.jsxs("footer",{className:"journal-footer",children:[f.jsxs("div",{children:[f.jsx(fe,{to:"/",children:"A life in the making."}),f.jsx(Ig,{})]}),f.jsxs("div",{className:"journal-footer-links",children:[f.jsx(fe,{to:"/dreams",children:"Dreams"}),f.jsx(fe,{to:"/spaces",children:"Discussions"}),e&&f.jsxs(fe,{to:"/messages",children:["Messages",s?" · New":""]}),f.jsx(fe,{to:"/admin",children:t?"Dashboard":"Owner"}),e&&f.jsx("button",{onClick:()=>vb(),children:"Sign out"})]})]})]})}function Li({items:n,empty:e="Nothing published here yet."}){return n.length?f.jsx("div",{className:"journal-entries",children:n.map(t=>{var r;return f.jsxs("article",{children:[f.jsxs("div",{className:"journal-entry-meta",children:[f.jsx("span",{children:t.type==="projects"?t.projectStatus:t.format||t.type}),(t.date||t.period)&&f.jsx("span",{children:t.date||t.period}),t.category&&f.jsx("span",{children:t.category})]}),f.jsx("h2",{children:f.jsxs(fe,{to:Om(t),children:[t.title," ",f.jsx("span",{"aria-hidden":"true",children:"↗"})]})}),t.summary&&f.jsx("p",{children:t.summary}),f.jsx("div",{className:"journal-tags",children:(r=t.tags)==null?void 0:r.map(i=>f.jsx(fe,{to:`/${t.type}?tag=${encodeURIComponent(i)}`,children:i},i))})]},t.id)})}):f.jsx("p",{className:"journal-empty",children:e})}function Yt({pager:n,nextLabel:e="Next page",previousLabel:t="Previous page"}){return n.hasNext||n.page>1?f.jsxs("div",{className:"journal-pagination",children:[n.page>1&&f.jsxs("button",{onClick:n.previous,children:[t," ←"]}),f.jsxs("span",{children:["Page ",n.page]}),n.hasNext&&f.jsxs("button",{onClick:n.next,children:[e," →"]})]}):null}const sf={opinions:["Notes from my mind.","Thoughts, observations, questions, and ideas worth spending time with."],beliefs:["What I believe.","Principles and positions, with room for my thinking to evolve."],projects:["Things I’m working on.","Built, imagined, and still being explored."],story:["The story so far.","Experiences, turning points, and the things that stay with me."]};function wC(){const{settings:n}=en(),{items:e,loading:t,error:r}=Kt(et(ht,Tt("published","==",!0),ut("updatedAt","desc"),Cr(8)),"home"),i=Kt(et(ht,Tt("published","==",!0),Tt("featured","==",!0),ut("updatedAt","desc"),Cr(3)),"home-featured"),s=Kt(et(ht,Tt("published","==",!0),Tt("type","==","story"),ut("sortDate","desc"),Cr(1)),"home-story");return f.jsxs(f.Fragment,{children:[f.jsxs("section",{className:"journal-home-intro",children:[f.jsxs("div",{className:"journal-portrait",role:"img","aria-label":"Ashutosh Srivastava",children:[f.jsx("img",{className:"portrait-light",src:"/images/ashutosh-light.webp",alt:"",width:"144",height:"144",fetchPriority:"high"}),f.jsx("img",{className:"portrait-dark",src:"/images/ashutosh-dark.webp",alt:"",width:"144",height:"144",fetchPriority:"high"})]}),f.jsx("p",{className:"journal-eyebrow",children:"Ashutosh Srivastava"}),f.jsx("h1",{children:"A life in the making."}),f.jsx("p",{className:"journal-home-copy",children:n.introduction}),f.jsx(fe,{className:"journal-text-link",to:"/about",children:"A little more about me ↗"})]}),f.jsxs("div",{className:"journal-home-body",children:[f.jsxs("section",{className:"journal-section",children:[f.jsxs("div",{className:"journal-section-heading",children:[f.jsx("h2",{children:"These days"}),f.jsx(fe,{to:"/dreams",children:"Dreams & ambitions ↗"})]}),f.jsx("dl",{className:"journal-now",children:["doing","learning","building","exploring"].filter(o=>n[o]).map(o=>f.jsxs("div",{children:[f.jsx("dt",{children:o}),f.jsx("dd",{children:n[o]})]},o))})]}),f.jsxs("section",{className:"journal-section",children:[f.jsxs("div",{className:"journal-section-heading",children:[f.jsx("h2",{children:"From this space"}),f.jsx(fe,{to:"/opinions",children:"All opinions ↗"})]}),f.jsx(ce,{children:t?"Loading recent entries…":""}),r&&f.jsx(ce,{error:!0,children:"Recent updates are temporarily unavailable. Please try again shortly."}),f.jsx(Li,{items:e,empty:"The first notes, beliefs, and stories will appear here as they’re published."})]}),i.items.length>0&&f.jsxs("section",{className:"journal-section",children:[f.jsx("div",{className:"journal-section-heading",children:f.jsx("h2",{children:"Worth a closer look"})}),f.jsx(Li,{items:i.items})]}),s.items.length>0&&f.jsxs("section",{className:"journal-section",children:[f.jsxs("div",{className:"journal-section-heading",children:[f.jsx("h2",{children:"A moment from my story"}),f.jsx(fe,{to:"/story",children:"The story so far ↗"})]}),f.jsx(Li,{items:s.items})]}),f.jsxs("section",{className:"journal-invitation",children:[f.jsx("span",{className:"journal-eyebrow",children:"An open invitation"}),f.jsx("h2",{children:"Good things start with a conversation."}),f.jsx("p",{children:"An idea, a question, a project, or simply a hello."}),f.jsx(fe,{to:"/connect",children:"Let’s connect ↗"})]})]})]})}function EC(){const{settings:n}=en();return f.jsxs("div",{className:"journal-reading",children:[f.jsx("p",{className:"journal-eyebrow",children:"About me"}),f.jsx("h1",{children:"A person behind the work."}),f.jsx(So,{children:n.about}),f.jsxs("div",{className:"journal-inline-links",children:[f.jsx(fe,{to:"/portfolio",children:"Professional portfolio ↗"}),f.jsx(fe,{to:"/story",children:"My story ↗"}),f.jsx(fe,{to:"/connect",children:"Say hello ↗"})]})]})}function IC({type:n}){const[e,t]=lf(),[r,i]=K.useState(""),{settings:s}=en(),o=Qt(et(ht,Tt("type","==",n),Tt("published","==",!0),ut(n==="story"?"sortDate":"updatedAt","desc")),n),{items:l,loading:u,error:c}=o;K.useEffect(()=>{i("")},[n]);const d=l,p=e.get("tag")||"",g=e.get("category")||"",y=e.get("status")||"",S=[...new Set([...s.tags,...d.flatMap(P=>P.tags||[]),...p?[p]:[]])],R=d.filter(P=>{var F;return(!p||((F=P.tags)==null?void 0:F.includes(p)))&&(!g||P.category===g)&&(!y||P.projectStatus===y)&&(!r||`${P.title} ${P.summary} ${P.body}`.toLowerCase().includes(r.toLowerCase()))});function D(P,F){t(j=>(F?j.set(P,F):j.delete(P),j))}return f.jsxs("div",{className:"journal-reading journal-wide",children:[f.jsx("p",{className:"journal-eyebrow",children:n==="story"?"My story":n}),f.jsx("h1",{children:sf[n][0]}),f.jsx("p",{className:"journal-lede",children:sf[n][1]}),f.jsxs("div",{className:"journal-filters",children:[f.jsxs("label",{className:"journal-search",children:["Search",f.jsx("input",{value:r,onChange:P=>i(P.target.value),placeholder:"Search entries",type:"search"})]}),f.jsxs("label",{children:["Topic",f.jsxs("select",{"aria-label":"Topic",value:p,onChange:P=>D("tag",P.target.value),children:[f.jsx("option",{value:"",children:"All topics"}),S.map(P=>f.jsx("option",{children:P},P))]})]}),n==="projects"&&f.jsxs(f.Fragment,{children:[f.jsxs("label",{children:["Category",f.jsxs("select",{"aria-label":"Category",value:g,onChange:P=>D("category",P.target.value),children:[f.jsx("option",{value:"",children:"All categories"}),[...new Set([...s.categories,...d.map(P=>P.category)])].filter(Boolean).map(P=>f.jsx("option",{children:P},P))]})]}),f.jsxs("label",{children:["Status",f.jsxs("select",{"aria-label":"Status",value:y,onChange:P=>D("status",P.target.value),children:[f.jsx("option",{value:"",children:"All statuses"}),Vm.map(P=>f.jsx("option",{children:P},P))]})]})]})]}),f.jsx(ce,{children:u?"Loading entries…":""}),f.jsx(ce,{error:!0,children:c}),!u&&f.jsx(Li,{items:R,empty:d.length?"No entries match these filters.":"Nothing published yet. This space will grow over time."}),f.jsx(Yt,{pager:o}),(o.hasNext||o.page>1)&&f.jsx("p",{className:"journal-notice",children:"Search and filters apply to this page of entries."}),n==="projects"&&f.jsx(fe,{to:"/portfolio/projects",className:"journal-text-link",children:"Explore the complete professional project archive ↗"})]})}function TC({type:n}){var d,p;const{id:e}=uf(),{items:t,loading:r,error:i}=Kt(ye(ht,e),`${n}-${e}`),s=t.find(g=>g.type===n),[o,l]=K.useState([]),u=Qt(s?et(ht,Tt("published","==",!0),Tt("relatedIds","array-contains",e)):null,`backlinks-${e}-${!!s}`,20),c=[...new Map([...o,...u.items].filter(g=>g.id!==e).map(g=>[g.id,g])).values()];return K.useEffect(()=>{let g=!0;if(l([]),!!s)return Promise.all((s.relatedIds||[]).map(async y=>{try{const S=await Xp(ye(ht,y));return S.exists()&&S.data().published?{id:S.id,...S.data()}:null}catch{return null}})).then(y=>{g&&l(y.filter(Boolean))}),()=>{g=!1}},[e,s]),K.useEffect(()=>{s&&(document.title=`${s.title} · Ashutosh Srivastava`)},[s]),r?f.jsx("div",{className:"journal-reading",children:f.jsx(ce,{children:"Loading entry…"})}):s?f.jsxs("article",{className:"journal-reading",children:[f.jsxs(fe,{className:"journal-eyebrow",to:`/${n}`,children:["← ",n]}),f.jsx("h1",{children:s.title}),f.jsx("p",{className:"journal-detail-meta",children:[s.date||s.period,s.type==="projects"?s.projectStatus:s.format,s.category].filter(Boolean).join(" · ")}),s.summary&&f.jsx("p",{className:"journal-lede",children:s.summary}),s.image&&tt(s.image)&&f.jsx("img",{className:"journal-cover",src:tt(s.image),alt:s.title}),f.jsx(So,{children:s.body}),s.attribution&&f.jsxs("p",{className:"journal-attribution",children:["— ",s.attribution]}),s.reasoning&&f.jsxs("section",{className:"journal-section",children:[f.jsx("h2",{children:"Why I hold this view"}),f.jsx(So,{children:s.reasoning})]}),s.collaborators&&f.jsxs("p",{children:["With ",s.collaborators]}),f.jsx("div",{className:"journal-inline-links",children:(d=s.links)==null?void 0:d.map((g,y)=>f.jsxs("a",{href:tt(g.url),rel:"noopener noreferrer",children:[g.label," ↗"]},y))}),f.jsx("div",{className:"journal-tags",children:(p=s.tags)==null?void 0:p.map(g=>f.jsx(fe,{to:`/${n}?tag=${encodeURIComponent(g)}`,children:g},g))}),(!!c.length||u.page>1)&&f.jsxs("section",{className:"journal-section",children:[f.jsx("h2",{children:"Connected ideas"}),f.jsx(Li,{items:c}),f.jsx(Yt,{pager:u,nextLabel:"More connected entries"})]}),f.jsx(ce,{error:!0,children:u.error})]}):f.jsxs("div",{className:"journal-reading",children:[f.jsx("h1",{children:"Entry unavailable."}),f.jsx("p",{children:"It may be a draft, have been removed, or not exist."}),f.jsx(ce,{error:!0,children:i}),f.jsxs(fe,{to:`/${n}`,children:["Back to ",n," ↗"]})]})}function vC(){return f.jsxs("div",{className:"journal-reading",children:[f.jsx("p",{className:"journal-eyebrow",children:"Connect"}),f.jsx("h1",{children:"Let’s find common ground."}),f.jsx("p",{className:"journal-lede",children:"A good question. An idea worth exploring. Something we could build together."}),f.jsxs("div",{className:"journal-connect-list",children:[f.jsxs(fe,{to:"/messages",children:[f.jsxs("span",{children:["Say hello privately",f.jsx("small",{children:"A conversation between you and me."})]}),f.jsx("span",{children:"↗"})]}),f.jsxs(fe,{to:"/messages?idea=1",children:[f.jsxs("span",{children:["Share an idea or collaboration",f.jsx("small",{children:"A little context, what you have in mind, and where I fit in."})]}),f.jsx("span",{children:"↗"})]}),f.jsxs(fe,{to:"/spaces",children:[f.jsxs("span",{children:["Join a discussion",f.jsx("small",{children:"Shared questions, different perspectives."})]}),f.jsx("span",{children:"↗"})]}),f.jsxs(fe,{to:"/projects",children:[f.jsxs("span",{children:["Explore what I’m building",f.jsx("small",{children:"Find a project you’d like to contribute to."})]}),f.jsx("span",{children:"↗"})]})]}),f.jsx(Ig,{})]})}function bC(){return f.jsxs("div",{className:"journal-reading",children:[f.jsx("h1",{children:"A page yet to be written."}),f.jsx(fe,{to:"/",children:"Back home ↗"})]})}function Bs(n){var e;return((e=n==null?void 0:n.toMillis)==null?void 0:e.call(n))||0}function Tg({inAdmin:n=!1}){var T;const{user:e,isAdmin:t,authLoading:r}=en(),[i]=lf(),[s,o]=K.useState(""),[l,u]=K.useState(!1),[c,d]=K.useState(""),[p,g]=K.useState(""),[y,S]=K.useState(""),[R,D]=K.useState(!1),P=e==null?void 0:e.uid,F=Qt(e?et(Ot(me,"personalConversations"),...t?[]:[Tt("ownerId","==",P)],ut("lastMessageAt","desc")):null,`inbox-${P}-${t}`,30),j=t?s:P,W=Kt(e&&j?ye(me,"personalConversations",j):null,`selected-${P}-${j}`).items[0],I=Qt(e&&j?et(Ot(me,"personalConversations",j,"messages"),ut("createdAt","desc")):null,`messages-${P}-${j}`,30);K.useEffect(()=>{d(""),S("")},[j]),K.useEffect(()=>{if(!W||!e)return;const v=t?"adminReadAt":"userReadAt";Bs(W.lastMessageAt)>Bs(W[v])&&ll(ye(me,"personalConversations",W.id),{[v]:Oe()}).catch(E=>S(ct(E)))},[W,t,e]);const A=K.useRef(null),w=(T=I.items[0])==null?void 0:T.id;K.useEffect(()=>{I.page===1&&A.current&&(A.current.scrollTop=A.current.scrollHeight)},[w,I.page]);async function b(v){v.preventDefault(),S(""),D(!0);try{const E=i.has("idea");await xb(e,E?`Idea / collaboration: ${p.trim()}

${c}`:c,j,E?"idea":"message"),I.reset(),d(""),g("")}catch(E){S(ct(E))}finally{D(!1)}}async function k(v){try{await ll(ye(me,"personalConversations",j),v)}catch(E){S(ct(E))}}return r?f.jsx(ce,{children:"Checking your session…"}):e?f.jsxs("div",{className:n?"":"journal-reading journal-wide",children:[f.jsxs("div",{className:"journal-section-heading",children:[f.jsxs("div",{children:[f.jsx("p",{className:"journal-eyebrow",children:"Private messages"}),f.jsx("h1",{children:t?"Your inbox.":"A conversation, just us."})]}),!n&&f.jsx(fe,{to:"/connect",children:"Connect ↗"})]}),f.jsx(ce,{error:!0,children:F.error}),f.jsxs("div",{className:`journal-inbox ${t?"has-list":""}`,children:[t&&f.jsxs("aside",{className:"journal-conversations","aria-label":"Conversations",children:[f.jsxs("label",{className:"journal-check",children:[f.jsx("input",{type:"checkbox",checked:l,onChange:v=>u(v.target.checked)})," ","Show archived"]}),F.loading&&f.jsx(ce,{children:"Loading conversations…"}),F.items.filter(v=>l||!v.archived).map(v=>f.jsxs("button",{className:j===v.id?"is-selected":"",onClick:()=>o(v.id),children:[f.jsxs("strong",{children:[tt(v.ownerPhoto)&&f.jsx("img",{className:"journal-reader-photo",src:tt(v.ownerPhoto),alt:"",width:"24",height:"24",referrerPolicy:"no-referrer"}),v.ownerName,v.lastSenderId!==e.uid&&Bs(v.lastMessageAt)>Bs(v.adminReadAt)&&f.jsx("span",{className:"journal-unread","aria-label":"Unread"})]}),f.jsx("small",{children:v.lastMessage.slice(0,85)}),v.archived&&f.jsx("small",{children:"Archived"})]},v.id)),!F.loading&&!F.items.length&&f.jsx(ce,{children:"No conversations yet."}),f.jsx(Yt,{pager:F})]}),f.jsxs("section",{className:"journal-thread","aria-label":"Conversation history",children:[t&&!j?f.jsx("p",{className:"journal-empty",children:"Choose a conversation."}):f.jsxs(f.Fragment,{children:[f.jsxs("header",{children:[f.jsx("h2",{children:t?(W==null?void 0:W.ownerName)||"Conversation":"Ashutosh"}),f.jsxs("small",{children:["Only you and ",t?"this reader":"Ashutosh"," can read this conversation."]}),t&&W&&f.jsxs("div",{className:"journal-inline-links",children:[f.jsx("button",{onClick:()=>k({archived:!W.archived}),children:W.archived?"Unarchive":"Archive"}),f.jsx("button",{onClick:()=>k({blocked:!W.blocked}),children:W.blocked?"Unblock":"Block sender"})]})]}),f.jsx(ce,{error:!0,children:I.error}),I.loading&&f.jsx(ce,{children:"Loading history…"}),f.jsxs("div",{className:"journal-message-history",ref:A,children:[f.jsx(Yt,{pager:I,nextLabel:"Earlier messages",previousLabel:"Newer messages"}),!I.loading&&!I.items.length&&f.jsx("p",{className:"journal-empty",children:"Start with a hello, a question, or an idea."}),I.items.slice().reverse().map(v=>{var E,ue;return f.jsxs("article",{className:v.senderId===e.uid?"is-own":"",children:[f.jsxs("span",{children:[v.senderId===e.uid?"You":t?W==null?void 0:W.ownerName:"Ashutosh",v.kind==="idea"?" · Idea":""]}),f.jsx("p",{children:v.text}),f.jsx("time",{children:((ue=(E=v.createdAt)==null?void 0:E.toDate)==null?void 0:ue.call(E).toLocaleString())||"Sending…"})]},v.id)})]}),W!=null&&W.blocked&&!t?f.jsx(ce,{children:"This conversation is closed."}):f.jsxs("form",{className:"journal-composer",onSubmit:b,children:[i.has("idea")&&f.jsxs("label",{children:["Idea or collaboration title",f.jsx("input",{required:!0,value:p,maxLength:160,onChange:v=>g(v.target.value)})]}),f.jsxs("label",{children:[i.has("idea")?"Tell me about it":"Your message",f.jsx("textarea",{required:!0,maxLength:i.has("idea")?3700:4e3,rows:3,value:c,onChange:v=>d(v.target.value)})]}),f.jsx("button",{className:"journal-button",disabled:R||!c.trim(),children:R?"Sending…":"Send privately ↗"})]})]}),f.jsx(ce,{error:!0,children:y})]})]})]}):f.jsxs("div",{className:"journal-reading",children:[f.jsx("p",{className:"journal-eyebrow",children:"Private messages"}),f.jsx("h1",{children:"A conversation, just us."}),f.jsx($u,{})]})}const of={type:"opinions",title:"",summary:"",body:"",published:!1,featured:!1,tags:[],relatedIds:[],links:[],format:"Note",attribution:"",reasoning:"",date:"",period:"",category:"",projectStatus:"Exploring",collaborators:"",image:"",revision:0};function AC(){const{isAdmin:n,user:e,authLoading:t}=en(),[r,i]=K.useState("overview");return t?f.jsx("div",{className:"journal-reading",children:f.jsx(ce,{children:"Checking owner access…"})}):e?n?f.jsxs("div",{className:"journal-admin",children:[f.jsx("p",{className:"journal-eyebrow",children:"Owner dashboard"}),f.jsx("h1",{children:"The writing room."}),f.jsx("nav",{"aria-label":"Dashboard",className:"journal-admin-tabs",children:["overview","content","settings","inbox","discussions"].map(s=>f.jsx("button",{className:r===s?"active":"",onClick:()=>i(s),children:s},s))}),r==="overview"?f.jsx(SC,{onNavigate:i}):r==="content"?f.jsx(xC,{}):r==="settings"?f.jsx(CC,{}):r==="inbox"?f.jsx(Tg,{inAdmin:!0}):f.jsx(RC,{})]}):f.jsxs("div",{className:"journal-reading",children:[f.jsx("h1",{children:"This room is private."}),f.jsx("p",{children:"This account has no administrator access."}),f.jsx(fe,{to:"/",children:"Back home ↗"})]}):f.jsxs("div",{className:"journal-reading",children:[f.jsx("p",{className:"journal-eyebrow",children:"Private dashboard"}),f.jsx("h1",{children:"The writing room."}),f.jsx($u,{owner:!0})]})}function SC({onNavigate:n}){const[e,t]=K.useState(""),[r,i]=K.useState(""),s=Kt(et(ht,ut("updatedAt","desc"),Cr(10)),"admin-overview");return f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"journal-lede",children:"Write something. Connect an idea. Keep a record of the things that matter."}),f.jsxs("div",{className:"journal-admin-shortcuts",children:[f.jsx("button",{onClick:()=>n("content"),children:"Write & publish ↗"}),f.jsx("button",{onClick:()=>n("settings"),children:"Update your current activities ↗"}),f.jsx("button",{onClick:()=>n("inbox"),children:"Open private inbox ↗"})]}),f.jsx("h2",{children:"Recently edited"}),f.jsx(ce,{error:!0,children:s.error}),f.jsx("div",{className:"journal-admin-records",children:s.items.map(o=>f.jsxs("div",{children:[f.jsxs("span",{children:[o.title,f.jsxs("small",{children:[o.type," · ",o.published?"Published":"Draft"]})]}),f.jsx("button",{onClick:()=>n("content"),children:"Edit ↗"})]},o.id))}),f.jsxs("section",{className:"journal-section",children:[f.jsx("h2",{children:"Bring in existing projects"}),f.jsx("p",{children:"Import four project summaries already present in the professional portfolio. Existing entries with these IDs are preserved."}),f.jsx("button",{className:"journal-button",onClick:async()=>{t("");try{await Rb(bb),i("Existing project summaries are now published.")}catch(o){t(ct(o))}},children:"Import existing projects"}),f.jsx(ce,{children:r}),f.jsx(ce,{error:!0,children:e})]})]})}function xC(){const{settings:n}=en(),[e,t]=K.useState(null),[r,i]=K.useState(""),[s,o]=K.useState(""),[l,u]=K.useState(!1),[c,d]=K.useState(!1),[p,g]=K.useState(""),[y,S]=K.useState([]),[R,D]=K.useState(""),P=Qt(et(ht,ut("updatedAt","desc")),"admin-content",50);async function F(){i("");try{const I=await JI(et(ht,ut("title"),Tt("title",">=",R),Tt("title","<=",R+""),Cr(30)));S(I.docs.map(A=>({id:A.id,...A.data()})))}catch(I){i(ct(I))}}function j(I,A){t(w=>({...w,[I]:A})),o("")}async function H(I){I.preventDefault(),u(!0),i("");try{const A=await Sb(kC(e));t(null),o(`Saved ${e.published?"and published":"as a draft"}. Entry ID: ${A}`)}catch(A){i(ct(A))}finally{u(!1)}}async function W(I){if(window.confirm(`Permanently delete “${I.title}”? Related links will stop showing this entry.`))try{await xi(ye(ht,I.id)),(e==null?void 0:e.id)===I.id&&t(null),o("Entry deleted.")}catch(A){i(ct(A))}}return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"journal-section-heading",children:[f.jsx("h2",{children:"Content"}),f.jsx("button",{className:"journal-button",onClick:()=>{t({...of}),i(""),o("")},children:"New entry"})]}),f.jsx(ce,{error:!0,children:r||P.error}),f.jsx(ce,{children:s}),e?f.jsxs("form",{className:"journal-editor",onSubmit:H,children:[f.jsxs("div",{className:"journal-form-grid",children:[f.jsxs("label",{children:["Section",f.jsx("select",{"aria-label":"Section",value:e.type,onChange:I=>j("type",I.target.value),children:Dm.map(I=>f.jsx("option",{children:I},I))})]}),f.jsxs("label",{children:["Format",f.jsx("select",{"aria-label":"Format",value:e.format,onChange:I=>j("format",I.target.value),children:["Note","Opinion","Quote","Essay","Question","Link","Reflection"].map(I=>f.jsx("option",{children:I},I))})]})]}),f.jsxs("label",{children:["Title",f.jsx("input",{required:!0,maxLength:180,value:e.title,onChange:I=>j("title",I.target.value)})]}),f.jsxs("label",{children:["Short introduction",f.jsx("textarea",{rows:2,maxLength:600,value:e.summary,onChange:I=>j("summary",I.target.value)})]}),f.jsxs("div",{className:"journal-section-heading",children:[f.jsx("label",{htmlFor:"entry-body",children:"Content · Markdown supported"}),f.jsx("button",{type:"button",onClick:()=>d(!c),children:c?"Edit":"Preview"})]}),c?f.jsx(So,{children:e.body}):f.jsx("textarea",{id:"entry-body",required:!0,rows:15,maxLength:6e4,value:e.body,onChange:I=>j("body",I.target.value)}),f.jsxs("div",{className:"journal-form-grid",children:[f.jsxs("label",{children:["Publication / review date (optional)",f.jsx("input",{type:"date",value:e.date,onChange:I=>j("date",I.target.value)})]}),f.jsxs("label",{children:["Period / approximate year",f.jsx("input",{placeholder:"e.g. 2025, or During university",value:e.period,maxLength:100,onChange:I=>j("period",I.target.value)})]}),f.jsxs("label",{children:["Tags · comma separated",f.jsx("input",{list:"known-tags",value:e.tagsText??e.tags.join(", "),onChange:I=>{j("tagsText",I.target.value),j("tags",dl(I.target.value))}}),f.jsx("datalist",{id:"known-tags",children:n.tags.map(I=>f.jsx("option",{value:I},I))})]}),f.jsxs("label",{children:["Image URL (optional)",f.jsx("input",{value:e.image,onChange:I=>j("image",I.target.value),placeholder:"https://…"})]})]}),e.type==="projects"&&f.jsxs("div",{className:"journal-form-grid",children:[f.jsxs("label",{children:["Category",f.jsx("input",{list:"project-categories",value:e.category,onChange:I=>j("category",I.target.value)}),f.jsx("datalist",{id:"project-categories",children:n.categories.map(I=>f.jsx("option",{value:I},I))})]}),f.jsxs("label",{children:["Status",f.jsx("select",{"aria-label":"Status",value:e.projectStatus,onChange:I=>j("projectStatus",I.target.value),children:Vm.map(I=>f.jsx("option",{children:I},I))})]}),f.jsxs("label",{children:["Collaborators",f.jsx("input",{value:e.collaborators,onChange:I=>j("collaborators",I.target.value)})]})]}),e.type==="beliefs"&&f.jsxs("label",{children:["Why you hold this belief · Markdown",f.jsx("textarea",{rows:5,maxLength:2e4,value:e.reasoning,onChange:I=>j("reasoning",I.target.value)})]}),e.format==="Quote"&&f.jsxs("label",{children:["Attribution",f.jsx("input",{maxLength:200,value:e.attribution,onChange:I=>j("attribution",I.target.value)})]}),f.jsxs("label",{children:["References / links · one “label | URL” per line",f.jsx("textarea",{rows:3,value:e.linksText??e.links.map(I=>`${I.label} | ${I.url}`).join(`
`),onChange:I=>j("linksText",I.target.value)})]}),f.jsxs("fieldset",{children:[f.jsx("legend",{children:"Connected opinions, beliefs, projects & stories"}),f.jsx("p",{children:"Links appear on both entries. Drafts stay private."}),f.jsxs("div",{className:"journal-relation-search",children:[f.jsx("input",{"aria-label":"Find related content by title",value:R,onChange:I=>D(I.target.value),placeholder:"Title begins with…"}),f.jsx("button",{type:"button",onClick:F,children:"Find entries"})]}),[...new Map([...P.items,...y].map(I=>[I.id,I])).values()].filter(I=>I.id!==e.id).map(I=>f.jsxs("label",{className:"journal-check",children:[f.jsx("input",{type:"checkbox",checked:e.relatedIds.includes(I.id),onChange:A=>j("relatedIds",A.target.checked?[...e.relatedIds,I.id].slice(0,30):e.relatedIds.filter(w=>w!==I.id))}),I.title,f.jsxs("small",{children:[I.type,I.published?"":" · Draft"]})]},I.id))]}),f.jsxs("div",{className:"journal-inline-links",children:[f.jsxs("label",{className:"journal-check",children:[f.jsx("input",{type:"checkbox",checked:e.published,onChange:I=>j("published",I.target.checked)})," ","Published"]}),f.jsxs("label",{className:"journal-check",children:[f.jsx("input",{type:"checkbox",checked:e.featured,onChange:I=>j("featured",I.target.checked)})," ","Featured on homepage"]})]}),f.jsxs("div",{className:"journal-inline-links",children:[f.jsx("button",{className:"journal-button",disabled:l,children:l?"Saving…":"Save entry"}),f.jsx("button",{type:"button",onClick:()=>{window.confirm("Discard this unsaved draft?")&&t(null)},children:"Cancel"})]})]}):f.jsxs(f.Fragment,{children:[f.jsxs("label",{children:["Find in loaded entries",f.jsx("input",{type:"search",value:p,onChange:I=>g(I.target.value)})]}),f.jsx("div",{className:"journal-admin-records",children:P.items.filter(I=>I.title.toLowerCase().includes(p.toLowerCase())).map(I=>f.jsxs("div",{children:[f.jsxs("span",{children:[I.title,f.jsxs("small",{children:[I.type," · ",I.published?"Published":"Draft"]})]}),f.jsxs("div",{children:[f.jsx("button",{onClick:()=>{t({...of,...I}),i(""),o("")},children:"Edit"}),I.published&&f.jsx(fe,{to:Om(I),children:"View"}),f.jsx("button",{onClick:()=>W(I),children:"Delete"})]})]},I.id))}),f.jsx(Yt,{pager:P})]})]})}function kC(n){var o;const{tagsText:e,linksText:t,createdAt:r,updatedAt:i,...s}=n;return{...s,sortDate:s.date||((o=s.period.match(/(?:19|20)\d{2}/))!=null&&o[0]?`${s.period.match(/(?:19|20)\d{2}/)[0]}-01-01`:""),links:t===void 0?s.links:t.split(`
`).filter(l=>l.trim()).map(l=>{const[u,...c]=l.split("|");return{label:u.trim(),url:c.join("|").trim()}})}}function CC(){const{settings:n}=en(),[e,t]=K.useState(()=>({...n,socialText:n.socials.map(p=>`${p.platform} | ${p.url}`).join(`
`),tagText:n.tags.join(", "),categoryText:n.categories.join(", ")})),[r,i]=K.useState(""),[s,o]=K.useState(""),[l,u]=K.useState(!1),c=(p,g)=>t(y=>({...y,[p]:g}));async function d(p){p.preventDefault(),o(""),i(""),u(!0);try{const{socialText:g,tagText:y,categoryText:S,...R}=e,D=g.split(`
`).filter(P=>P.trim()).map(P=>{const[F,...j]=P.split("|");return{platform:F.trim(),url:j.join("|").trim()}});if(D.some(P=>!P.platform||!tt(P.url)))throw new Error("Use “platform | valid URL” for each social link.");await as(jm,{...R,socials:D,tags:dl(y),categories:dl(S),updatedAt:Oe()}),i("Settings published. Public pages update immediately.")}catch(g){o(ct(g))}finally{u(!1)}}return f.jsxs("form",{className:"journal-editor",onSubmit:d,children:[f.jsx("h2",{children:"About, current life & links"}),f.jsxs("label",{children:["Homepage introduction",f.jsx("textarea",{required:!0,rows:3,maxLength:600,value:e.introduction,onChange:p=>c("introduction",p.target.value)})]}),f.jsxs("label",{children:["About page · Markdown",f.jsx("textarea",{required:!0,rows:12,maxLength:3e4,value:e.about,onChange:p=>c("about",p.target.value)})]}),["doing","learning","building","exploring"].map(p=>f.jsxs("label",{children:["Currently ",p,f.jsx("input",{maxLength:600,value:e[p],onChange:g=>c(p,g.target.value)})]},p)),f.jsxs("label",{children:["Available tags · comma separated",f.jsx("input",{value:e.tagText,onChange:p=>c("tagText",p.target.value)})]}),f.jsxs("label",{children:["Project categories · comma separated",f.jsx("input",{value:e.categoryText,onChange:p=>c("categoryText",p.target.value)})]}),f.jsxs("label",{children:["Social links · one “platform | URL” per line",f.jsx("textarea",{rows:6,value:e.socialText,onChange:p=>c("socialText",p.target.value)})]}),f.jsx("small",{children:"Remove a line to hide that platform. Supported icons include Email, GitHub, LinkedIn, Instagram, YouTube, and a website icon for other platforms."}),f.jsx("button",{disabled:l,className:"journal-button",children:l?"Publishing…":"Publish settings"}),f.jsx(ce,{children:r}),f.jsx(ce,{error:!0,children:s})]})}function RC(){const[n,e]=K.useState(null),[t,r]=K.useState(""),[i,s]=K.useState(""),[o,l]=K.useState(!1),u=Qt(et(Ot(me,"personalSpaces"),ut("updatedAt","desc")),"admin-spaces",30),{items:c,error:d}=u;async function p(g){g.preventDefault(),l(!0),r("");try{if(!n.title.trim()||!n.description.trim())throw new Error("Add a title and description.");if(n.cover&&!tt(n.cover))throw new Error("Use a valid cover URL.");const y=n.id?ye(me,"personalSpaces",n.id):ye(Ot(me,"personalSpaces")),{id:S,...R}=n;await as(y,{...R,updatedAt:Oe(),createdAt:n.createdAt||Oe()}),e(null),s("Discussion saved.")}catch(y){r(ct(y))}finally{l(!1)}}return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"journal-section-heading",children:[f.jsx("h2",{children:"Discussion spaces"}),f.jsx("button",{className:"journal-button",onClick:()=>e({title:"",description:"",cover:"",status:"Open",published:!1}),children:"New discussion"})]}),f.jsx(ce,{error:!0,children:t||d}),f.jsx(ce,{children:i}),n?f.jsxs("form",{className:"journal-editor",onSubmit:p,children:[f.jsxs("label",{children:["Title",f.jsx("input",{required:!0,maxLength:180,value:n.title,onChange:g=>e({...n,title:g.target.value})})]}),f.jsxs("label",{children:["Description",f.jsx("textarea",{required:!0,maxLength:4e3,rows:5,value:n.description,onChange:g=>e({...n,description:g.target.value})})]}),f.jsxs("label",{children:["Cover image URL",f.jsx("input",{value:n.cover,onChange:g=>e({...n,cover:g.target.value})})]}),f.jsxs("label",{children:["Status",f.jsx("select",{"aria-label":"Status",value:n.status,onChange:g=>e({...n,status:g.target.value}),children:["Open","Closed","Archived"].map(g=>f.jsx("option",{children:g},g))})]}),f.jsxs("label",{className:"journal-check",children:[f.jsx("input",{type:"checkbox",checked:n.published,onChange:g=>e({...n,published:g.target.checked})})," ","Publicly listed"]}),f.jsxs("div",{className:"journal-inline-links",children:[f.jsx("button",{className:"journal-button",disabled:o,children:"Save discussion"}),f.jsx("button",{type:"button",onClick:()=>e(null),children:"Cancel"})]})]}):f.jsx("div",{className:"journal-admin-records",children:c.map(g=>f.jsxs("div",{children:[f.jsxs("span",{children:[g.title,f.jsxs("small",{children:[g.status," ·"," ",g.published?"Public":"Unlisted draft"]})]}),f.jsxs("div",{children:[f.jsx("button",{onClick:()=>e(g),children:"Edit"}),f.jsx(fe,{to:`/spaces/${g.id}`,children:"Open & moderate"}),f.jsx("button",{onClick:async()=>{try{await ll(ye(me,"personalSpaces",g.id),{status:"Archived",published:!1,updatedAt:Oe()}),s("Discussion archived and unpublished.")}catch(y){r(ct(y))}},children:"Archive"})]})]},g.id))}),f.jsx(Yt,{pager:u})]})}function PC(){const n=Qt(et(Ot(me,"personalSpaces"),Tt("published","==",!0),ut("updatedAt","desc")),"spaces"),{items:e,loading:t,error:r}=n;return f.jsxs("div",{className:"journal-reading",children:[f.jsx("p",{className:"journal-eyebrow",children:"Discussion spaces"}),f.jsx("h1",{children:"A place to think together."}),f.jsx("p",{className:"journal-lede",children:"Open questions, shared interests, and different perspectives. These are group discussions, separate from private messages."}),f.jsx(ce,{children:t?"Loading discussions…":""}),f.jsx(ce,{error:!0,children:r}),f.jsx("div",{className:"journal-entries",children:e.map(i=>f.jsxs("article",{children:[f.jsx("div",{className:"journal-entry-meta",children:i.status}),f.jsx("h2",{children:f.jsxs(fe,{to:`/spaces/${i.id}`,children:[i.title," ↗"]})}),f.jsx("p",{children:i.description})]},i.id))}),!t&&!e.length&&f.jsx("p",{className:"journal-empty",children:"No discussions are open yet. Check back as new questions take shape."}),f.jsx(Yt,{pager:n})]})}function NC(){var W;const{id:n}=uf(),{user:e,isAdmin:t,authLoading:r}=en(),[i,s]=K.useState(""),[o,l]=K.useState(""),[u,c]=K.useState(!1),d=Kt(ye(me,"personalSpaces",n),`space-${n}`),p=Kt(e?ye(me,"personalSpaces",n,"members",e.uid):null,`member-${n}-${e==null?void 0:e.uid}`),g=!!p.items.length,y=!!e&&(g||t),S=Qt(y?et(Ot(me,"personalSpaces",n,"messages"),ut("createdAt","desc")):null,`space-messages-${n}-${e==null?void 0:e.uid}-${y}`,40),R=Qt(y?et(Ot(me,"personalSpaces",n,"members"),ut("joinedAt","asc")):null,`members-${n}-${e==null?void 0:e.uid}-${y}`,30),D=Qt(t?et(Ot(me,"personalSpaces",n,"bans"),ut("createdAt","desc")):null,`bans-${n}-${t}`,30),P=K.useRef(null),F=(W=S.items[0])==null?void 0:W.id;K.useEffect(()=>{S.page===1&&P.current&&(P.current.scrollTop=P.current.scrollHeight)},[F,S.page]);async function j(I){c(!0),l("");try{await I()}catch(A){l(ct(A))}finally{c(!1)}}const H=d.items[0];return d.loading?f.jsx("div",{className:"journal-reading",children:f.jsx(ce,{children:"Loading discussion…"})}):H?f.jsxs("div",{className:"journal-reading",children:[f.jsx(fe,{to:"/spaces",className:"journal-eyebrow",children:"← Discussions"}),f.jsx("h1",{children:H.title}),f.jsxs("p",{className:"journal-detail-meta",children:[H.status," · A shared discussion hosted by Ashutosh"]}),H.cover&&tt(H.cover)&&f.jsx("img",{className:"journal-cover",src:tt(H.cover),alt:""}),f.jsx("p",{className:"journal-lede",children:H.description}),f.jsx(ce,{error:!0,children:o||S.error||p.error||R.error}),!r&&!e&&f.jsx($u,{}),e&&!g&&H.status==="Open"&&f.jsx("button",{className:"journal-button",disabled:u,onClick:()=>j(()=>Cb(e,n)),children:"Join discussion"}),y&&f.jsxs(f.Fragment,{children:[f.jsxs("details",{className:"journal-members",children:[f.jsxs("summary",{children:["Participants (",R.items.length,R.hasNext?"+":"",")"]}),R.items.map(I=>f.jsxs("div",{children:[f.jsx("span",{children:I.displayName}),t&&I.uid!==e.uid&&f.jsx("button",{onClick:()=>{window.confirm(`Remove and block ${I.displayName} from this space?`)&&j(async()=>{await as(ye(me,"personalSpaces",n,"bans",I.id),{createdAt:Oe(),displayName:I.displayName}),await xi(ye(me,"personalSpaces",n,"members",I.id))})},children:"Remove & block"})]},I.id)),f.jsx(Yt,{pager:R})]}),t&&D.items.length>0&&f.jsxs("details",{className:"journal-members",children:[f.jsx("summary",{children:"Removed participants"}),D.items.map(I=>f.jsxs("div",{children:[f.jsx("span",{children:I.displayName||I.id}),f.jsx("button",{onClick:()=>j(()=>xi(ye(me,"personalSpaces",n,"bans",I.id))),children:"Allow to rejoin"})]},I.id)),f.jsx(Yt,{pager:D})]}),f.jsxs("div",{className:"journal-message-history",ref:P,children:[f.jsx(ce,{children:S.loading?"Loading discussion…":""}),f.jsx(Yt,{pager:S,nextLabel:"Earlier messages",previousLabel:"Newer messages"}),!S.loading&&!S.items.length&&f.jsx("p",{className:"journal-empty",children:"The conversation starts here."}),S.items.slice().reverse().map(I=>{var A,w;return f.jsxs("article",{children:[f.jsx("span",{children:I.displayName}),f.jsx("p",{children:I.text}),f.jsx("time",{children:(w=(A=I.createdAt)==null?void 0:A.toDate)==null?void 0:w.call(A).toLocaleString()}),t&&f.jsx("button",{className:"journal-moderate",onClick:()=>{window.confirm("Delete this discussion message?")&&j(()=>xi(ye(me,"personalSpaces",n,"messages",I.id)))},children:"Delete message"})]},I.id)})]}),g&&H.status==="Open"?f.jsxs("form",{className:"journal-composer",onSubmit:I=>{I.preventDefault(),j(async()=>{await kb(e,n,i),S.reset(),s("")})},children:[f.jsxs("label",{children:["Contribute to the discussion",f.jsx("textarea",{required:!0,maxLength:2e3,rows:3,value:i,onChange:I=>s(I.target.value)})]}),f.jsx("button",{className:"journal-button",disabled:u||!i.trim(),children:u?"Posting…":"Post to discussion ↗"})]}):f.jsx(ce,{children:H.status==="Open"?"Join to contribute.":"This discussion is closed to new messages."}),g&&f.jsx("button",{className:"journal-text-link",onClick:()=>j(()=>xi(ye(me,"personalSpaces",n,"members",e.uid))),children:"Leave discussion"})]})]}):f.jsxs("div",{className:"journal-reading",children:[f.jsx("h1",{children:"Discussion unavailable."}),f.jsx(ce,{error:!0,children:d.error}),f.jsx(fe,{to:"/spaces",children:"All discussions ↗"})]})}function MC(){return f.jsx(Pb,{children:f.jsx(Qg,{children:f.jsxs(Dt,{element:f.jsx(_C,{}),children:[f.jsx(Dt,{index:!0,element:f.jsx(wC,{})}),f.jsx(Dt,{path:"about",element:f.jsx(EC,{})}),["opinions","beliefs","projects","story"].map(n=>f.jsxs(Ua.Fragment,{children:[f.jsx(Dt,{path:n,element:f.jsx(IC,{type:n})}),f.jsx(Dt,{path:`${n}/:id`,element:f.jsx(TC,{type:n})})]},n)),f.jsx(Dt,{path:"connect",element:f.jsx(vC,{})}),f.jsx(Dt,{path:"messages",element:f.jsx(Tg,{})}),f.jsx(Dt,{path:"spaces",element:f.jsx(PC,{})}),f.jsx(Dt,{path:"spaces/:id",element:f.jsx(NC,{})}),f.jsx(Dt,{path:"admin",element:f.jsx(AC,{})}),f.jsx(Dt,{path:"*",element:f.jsx(bC,{})})]})})})}export{MC as default};
