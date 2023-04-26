(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=window,q=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),W=new WeakMap;let st=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=W.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&W.set(e,t))}return t}toString(){return this.cssText}};const ht=r=>new st(typeof r=="string"?r:r+"",void 0,V),at=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new st(e,r,V)},dt=(r,t)=>{q?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=H.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},F=q?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ht(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var k;const N=window,K=N.trustedTypes,ct=K?K.emptyScript:"",J=N.reactiveElementPolyfillSupport,B={toAttribute(r,t){switch(t){case Boolean:r=r?ct:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},rt=(r,t)=>t!==r&&(t==t||r==r),M={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:rt};let _=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=M){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||M}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(F(s))}else t!==void 0&&e.push(F(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return dt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=M){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:B).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const o=s.getPropertyOptions(n),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:B;this._$El=n,this[n]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||rt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},J==null||J({ReactiveElement:_}),((k=N.reactiveElementVersions)!==null&&k!==void 0?k:N.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const R=window,m=R.trustedTypes,Q=m?m.createPolicy("lit-html",{createHTML:r=>r}):void 0,D="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,nt="?"+v,ut=`<${nt}>`,y=document,w=()=>y.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",ot=Array.isArray,pt=r=>ot(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",z=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,G=/>/g,f=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,Y=/"/g,lt=/^(?:script|style|textarea|title)$/i,$t=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),vt=$t(1),A=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),tt=new WeakMap,g=y.createTreeWalker(y,129,null,!1),ft=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":"",o=E;for(let l=0;l<e;l++){const h=r[l];let $,a,c=-1,p=0;for(;p<h.length&&(o.lastIndex=p,a=o.exec(h),a!==null);)p=o.lastIndex,o===E?a[1]==="!--"?o=Z:a[1]!==void 0?o=G:a[2]!==void 0?(lt.test(a[2])&&(s=RegExp("</"+a[2],"g")),o=f):a[3]!==void 0&&(o=f):o===f?a[0]===">"?(o=s??E,c=-1):a[1]===void 0?c=-2:(c=o.lastIndex-a[2].length,$=a[1],o=a[3]===void 0?f:a[3]==='"'?Y:X):o===Y||o===X?o=f:o===Z||o===G?o=E:(o=f,s=void 0);const U=o===f&&r[l+1].startsWith("/>")?" ":"";n+=o===E?h+ut:c>=0?(i.push($),h.slice(0,c)+D+h.slice(c)+v+U):h+v+(c===-2?(i.push(void 0),l):U)}const d=n+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Q!==void 0?Q.createHTML(d):d,i]};class x{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const d=t.length-1,l=this.parts,[h,$]=ft(t,e);if(this.el=x.createElement(h,i),g.currentNode=this.el.content,e===2){const a=this.el.content,c=a.firstChild;c.remove(),a.append(...c.childNodes)}for(;(s=g.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const a=[];for(const c of s.getAttributeNames())if(c.endsWith(D)||c.startsWith(v)){const p=$[o++];if(a.push(c),p!==void 0){const U=s.getAttribute(p.toLowerCase()+D).split(v),O=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:O[2],strings:U,ctor:O[1]==="."?gt:O[1]==="?"?yt:O[1]==="@"?At:T})}else l.push({type:6,index:n})}for(const c of a)s.removeAttribute(c)}if(lt.test(s.tagName)){const a=s.textContent.split(v),c=a.length-1;if(c>0){s.textContent=m?m.emptyScript:"";for(let p=0;p<c;p++)s.append(a[p],w()),g.nextNode(),l.push({type:2,index:++n});s.append(a[c],w())}}}else if(s.nodeType===8)if(s.data===nt)l.push({type:2,index:n});else{let a=-1;for(;(a=s.data.indexOf(v,a+1))!==-1;)l.push({type:7,index:n}),a+=v.length-1}n++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function b(r,t,e=r,i){var s,n,o,d;if(t===A)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,i)),i!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=b(r,l._$AS(r,t.values),l,i)),t}class _t{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(i,!0);g.currentNode=n;let o=g.nextNode(),d=0,l=0,h=s[0];for(;h!==void 0;){if(d===h.index){let $;h.type===2?$=new P(o,o.nextSibling,this,t):h.type===1?$=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&($=new bt(o,this,t)),this._$AV.push($),h=s[++l]}d!==(h==null?void 0:h.index)&&(o=g.nextNode(),d++)}return n}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class P{constructor(t,e,i,s){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):pt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(y.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=x.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(i);else{const o=new _t(n,this),d=o.u(this.options);o.v(i),this.$(d),this._$AH=o}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new x(t)),e}T(t){ot(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new P(this.k(w()),this.k(w()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class T{constructor(t,e,i,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=b(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==A,o&&(this._$AH=t);else{const d=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=b(this,d[i+l],e,l),h===A&&(h=this._$AH[l]),o||(o=!C(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class gt extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const mt=m?m.emptyScript:"";class yt extends T{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,mt):this.element.removeAttribute(this.name)}}class At extends T{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=b(this,t,e,0))!==null&&i!==void 0?i:u)===A)return;const s=this._$AH,n=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class bt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const et=R.litHtmlPolyfillSupport;et==null||et(x,P),((L=R.litHtmlVersions)!==null&&L!==void 0?L:R.litHtmlVersions=[]).push("2.7.3");const Et=(r,t,e)=>{var i,s;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=n._$litPart$;if(o===void 0){const d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=o=new P(t.insertBefore(w(),d),d,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j,I;class S extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return A}}S.finalized=!0,S._$litElement$=!0,(j=globalThis.litElementHydrateSupport)===null||j===void 0||j.call(globalThis,{LitElement:S});const it=globalThis.litElementPolyfillSupport;it==null||it({LitElement:S});((I=globalThis.litElementVersions)!==null&&I!==void 0?I:globalThis.litElementVersions=[]).push("3.3.2");const St="/assets/image-qr-code-c38c08d5.png";class wt extends S{static get properties(){return{qrUrl:{},heading:{},instructions:{}}}constructor(){super(),this.qrUrl=St,this.heading="Improve your front-end skills by building projects",this.instructions="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"}render(){return vt`
      <div class = 'app'>
        <img class='qr' src=${this.qrUrl} alt='frontendmentor.io'/>
        <div class='text'> 
          <h1>${this.heading}</h1>
          <p>${this.instructions}</p>
        </div>
      </div>
      <div class="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. </p>
        <p>Coded by <a href="https://lydiadunning.github.io/Portfolio/">Lydia Dunning</a>.</p>
      </div>
    `}static get styles(){return at`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

      // CSS here only applies to this element, so global settings 
      // are appropriate. 
      // Where a property set here repeats in a more specific selector,
      // the property didn't apply for unclear reasons. It may have come 
      // from a default value for a pseudo-element or pseudo-class.
      * {
        font-family: 'Outfit', sans-serif;
        box-sizing: border-box;
        font-size: inherit;
        color: inherit;
        padding: 0;
        margin: 0;
      }

      :host {
        height: 100%;
        width: 100%;
        display: grid;
        place-content: center;
        text-align: center;
        --white: hsl(0, 0%, 100%);
        --light-gray: hsl(212, 45%, 89%);
        --grayish-blue: hsl(220, 15%, 55%);
        --dark-blue: hsl(218, 44%, 22%);
        background-color: var(--light-blue);
      }

      :root {
        font-size: 15px;
        color: var(--dark-blue);
      }

      .app {
        text-align: center;
        background-color: var(--white);
        border-radius: 20px;
        width: 20rem;
        box-sizing: border-box;
      }

      .qr {
        border-radius: 10px;
        width: 90%;
        margin: 5%;
      }

      .text {
        padding: 0.15rem 1.5rem 2.25rem;
        display: flex;
        flex-direction: column;
        gap: .85rem;
        margin: 0;
      }

      h1 {
        font-size: 1.38rem;
        padding: 0;
        margin: 0;
        line-height: 1.3;
        color: var(--dark-blue);
      }

      p {
        padding: 0;
        margin: 0;
        font-size: 1rem;
        color: var(--grayish-blue);
        letter-spacing: -0.015rem;
      }

      .attribution p {
        color: var(--dark-blue);
      }
      
    `}}window.customElements.define("qr-code",wt);
