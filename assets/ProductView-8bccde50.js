import{G as Ut,m as Ht,a as ut,_ as vt,r as F,o as A,c as C,b as s,d as T,w as it,F as Q,g as ot,l as K,f as x,t as _,e as nt,C as X,D as M}from"./index-a4fe411b.js";import{r as Qt,a as Xt,b as Mt,c as zt}from"./modal-0746de47.js";import{p as dt}from"./productStore-3f746940.js";import{c as Yt}from"./cartStore-32f01f68.js";import{P as jt,S as Kt,a as Jt}from"./pagination-f44e62e5.js";var pt={},Zt={get exports(){return pt},set exports(t){pt=t}};/*!
  * Bootstrap tab.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,r){(function(e,i){t.exports=i(Qt(),Xt(),Mt(),zt())})(Ut,function(e,i,n,c){const d=O=>O&&typeof O=="object"&&"default"in O?O:{default:O},f=d(i),o=d(n),g=d(c),l="tab",b=".bs.tab",v=`hide${b}`,y=`hidden${b}`,w=`show${b}`,k=`shown${b}`,rt=`click${b}`,B=`keydown${b}`,N=`load${b}`,G="ArrowLeft",U="ArrowRight",H="ArrowUp",L="ArrowDown",E="active",V="fade",I="show",Rt="dropdown",Pt=".dropdown-toggle",Bt=".dropdown-menu",st=":not(.dropdown-toggle)",Vt='.list-group, .nav, [role="tablist"]',qt=".nav-item, .list-group-item",Wt=`.nav-link${st}, .list-group-item${st}, [role="tab"]${st}`,ct='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',at=`${Wt}, ${ct}`,$t=`.${E}[data-bs-toggle="tab"], .${E}[data-bs-toggle="pill"], .${E}[data-bs-toggle="list"]`;class R extends g.default{constructor(a){super(a),this._parent=this._element.closest(Vt),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),f.default.on(this._element,B,p=>this._keydown(p)))}static get NAME(){return l}show(){const a=this._element;if(this._elemIsActive(a))return;const p=this._getActiveElem(),h=p?f.default.trigger(p,v,{relatedTarget:a}):null;f.default.trigger(a,w,{relatedTarget:p}).defaultPrevented||h&&h.defaultPrevented||(this._deactivate(p,a),this._activate(a,p))}_activate(a,p){if(!a)return;a.classList.add(E),this._activate(e.getElementFromSelector(a));const h=()=>{if(a.getAttribute("role")!=="tab"){a.classList.add(I);return}a.removeAttribute("tabindex"),a.setAttribute("aria-selected",!0),this._toggleDropDown(a,!0),f.default.trigger(a,k,{relatedTarget:p})};this._queueCallback(h,a,a.classList.contains(V))}_deactivate(a,p){if(!a)return;a.classList.remove(E),a.blur(),this._deactivate(e.getElementFromSelector(a));const h=()=>{if(a.getAttribute("role")!=="tab"){a.classList.remove(I);return}a.setAttribute("aria-selected",!1),a.setAttribute("tabindex","-1"),this._toggleDropDown(a,!1),f.default.trigger(a,y,{relatedTarget:p})};this._queueCallback(h,a,a.classList.contains(V))}_keydown(a){if(![G,U,H,L].includes(a.key))return;a.stopPropagation(),a.preventDefault();const p=[U,L].includes(a.key),h=e.getNextActiveElement(this._getChildren().filter(W=>!e.isDisabled(W)),a.target,p,!0);h&&(h.focus({preventScroll:!0}),R.getOrCreateInstance(h).show())}_getChildren(){return o.default.find(at,this._parent)}_getActiveElem(){return this._getChildren().find(a=>this._elemIsActive(a))||null}_setInitialAttributes(a,p){this._setAttributeIfNotExists(a,"role","tablist");for(const h of p)this._setInitialAttributesOnChild(h)}_setInitialAttributesOnChild(a){a=this._getInnerElement(a);const p=this._elemIsActive(a),h=this._getOuterElement(a);a.setAttribute("aria-selected",p),h!==a&&this._setAttributeIfNotExists(h,"role","presentation"),p||a.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(a,"role","tab"),this._setInitialAttributesOnTargetPanel(a)}_setInitialAttributesOnTargetPanel(a){const p=e.getElementFromSelector(a);p&&(this._setAttributeIfNotExists(p,"role","tabpanel"),a.id&&this._setAttributeIfNotExists(p,"aria-labelledby",`#${a.id}`))}_toggleDropDown(a,p){const h=this._getOuterElement(a);if(!h.classList.contains(Rt))return;const W=(Ft,Gt)=>{const ft=o.default.findOne(Ft,h);ft&&ft.classList.toggle(Gt,p)};W(Pt,E),W(Bt,I),h.setAttribute("aria-expanded",p)}_setAttributeIfNotExists(a,p,h){a.hasAttribute(p)||a.setAttribute(p,h)}_elemIsActive(a){return a.classList.contains(E)}_getInnerElement(a){return a.matches(at)?a:o.default.findOne(at,a)}_getOuterElement(a){return a.closest(qt)||a}static jQueryInterface(a){return this.each(function(){const p=R.getOrCreateInstance(this);if(typeof a=="string"){if(p[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);p[a]()}})}}return f.default.on(document,rt,ct,function(O){["A","AREA"].includes(this.tagName)&&O.preventDefault(),!e.isDisabled(this)&&R.getOrCreateInstance(this).show()}),f.default.on(window,N,()=>{for(const O of o.default.find($t))R.getOrCreateInstance(O)}),e.defineJQueryPlugin(R),R})})(Zt);var Z={},te={get exports(){return Z},set exports(t){Z=t}},m={},q={},ee={get exports(){return q},set exports(t){q=t}},P={};function yt(){var t={};return t["align-content"]=!1,t["align-items"]=!1,t["align-self"]=!1,t["alignment-adjust"]=!1,t["alignment-baseline"]=!1,t.all=!1,t["anchor-point"]=!1,t.animation=!1,t["animation-delay"]=!1,t["animation-direction"]=!1,t["animation-duration"]=!1,t["animation-fill-mode"]=!1,t["animation-iteration-count"]=!1,t["animation-name"]=!1,t["animation-play-state"]=!1,t["animation-timing-function"]=!1,t.azimuth=!1,t["backface-visibility"]=!1,t.background=!0,t["background-attachment"]=!0,t["background-clip"]=!0,t["background-color"]=!0,t["background-image"]=!0,t["background-origin"]=!0,t["background-position"]=!0,t["background-repeat"]=!0,t["background-size"]=!0,t["baseline-shift"]=!1,t.binding=!1,t.bleed=!1,t["bookmark-label"]=!1,t["bookmark-level"]=!1,t["bookmark-state"]=!1,t.border=!0,t["border-bottom"]=!0,t["border-bottom-color"]=!0,t["border-bottom-left-radius"]=!0,t["border-bottom-right-radius"]=!0,t["border-bottom-style"]=!0,t["border-bottom-width"]=!0,t["border-collapse"]=!0,t["border-color"]=!0,t["border-image"]=!0,t["border-image-outset"]=!0,t["border-image-repeat"]=!0,t["border-image-slice"]=!0,t["border-image-source"]=!0,t["border-image-width"]=!0,t["border-left"]=!0,t["border-left-color"]=!0,t["border-left-style"]=!0,t["border-left-width"]=!0,t["border-radius"]=!0,t["border-right"]=!0,t["border-right-color"]=!0,t["border-right-style"]=!0,t["border-right-width"]=!0,t["border-spacing"]=!0,t["border-style"]=!0,t["border-top"]=!0,t["border-top-color"]=!0,t["border-top-left-radius"]=!0,t["border-top-right-radius"]=!0,t["border-top-style"]=!0,t["border-top-width"]=!0,t["border-width"]=!0,t.bottom=!1,t["box-decoration-break"]=!0,t["box-shadow"]=!0,t["box-sizing"]=!0,t["box-snap"]=!0,t["box-suppress"]=!0,t["break-after"]=!0,t["break-before"]=!0,t["break-inside"]=!0,t["caption-side"]=!1,t.chains=!1,t.clear=!0,t.clip=!1,t["clip-path"]=!1,t["clip-rule"]=!1,t.color=!0,t["color-interpolation-filters"]=!0,t["column-count"]=!1,t["column-fill"]=!1,t["column-gap"]=!1,t["column-rule"]=!1,t["column-rule-color"]=!1,t["column-rule-style"]=!1,t["column-rule-width"]=!1,t["column-span"]=!1,t["column-width"]=!1,t.columns=!1,t.contain=!1,t.content=!1,t["counter-increment"]=!1,t["counter-reset"]=!1,t["counter-set"]=!1,t.crop=!1,t.cue=!1,t["cue-after"]=!1,t["cue-before"]=!1,t.cursor=!1,t.direction=!1,t.display=!0,t["display-inside"]=!0,t["display-list"]=!0,t["display-outside"]=!0,t["dominant-baseline"]=!1,t.elevation=!1,t["empty-cells"]=!1,t.filter=!1,t.flex=!1,t["flex-basis"]=!1,t["flex-direction"]=!1,t["flex-flow"]=!1,t["flex-grow"]=!1,t["flex-shrink"]=!1,t["flex-wrap"]=!1,t.float=!1,t["float-offset"]=!1,t["flood-color"]=!1,t["flood-opacity"]=!1,t["flow-from"]=!1,t["flow-into"]=!1,t.font=!0,t["font-family"]=!0,t["font-feature-settings"]=!0,t["font-kerning"]=!0,t["font-language-override"]=!0,t["font-size"]=!0,t["font-size-adjust"]=!0,t["font-stretch"]=!0,t["font-style"]=!0,t["font-synthesis"]=!0,t["font-variant"]=!0,t["font-variant-alternates"]=!0,t["font-variant-caps"]=!0,t["font-variant-east-asian"]=!0,t["font-variant-ligatures"]=!0,t["font-variant-numeric"]=!0,t["font-variant-position"]=!0,t["font-weight"]=!0,t.grid=!1,t["grid-area"]=!1,t["grid-auto-columns"]=!1,t["grid-auto-flow"]=!1,t["grid-auto-rows"]=!1,t["grid-column"]=!1,t["grid-column-end"]=!1,t["grid-column-start"]=!1,t["grid-row"]=!1,t["grid-row-end"]=!1,t["grid-row-start"]=!1,t["grid-template"]=!1,t["grid-template-areas"]=!1,t["grid-template-columns"]=!1,t["grid-template-rows"]=!1,t["hanging-punctuation"]=!1,t.height=!0,t.hyphens=!1,t.icon=!1,t["image-orientation"]=!1,t["image-resolution"]=!1,t["ime-mode"]=!1,t["initial-letters"]=!1,t["inline-box-align"]=!1,t["justify-content"]=!1,t["justify-items"]=!1,t["justify-self"]=!1,t.left=!1,t["letter-spacing"]=!0,t["lighting-color"]=!0,t["line-box-contain"]=!1,t["line-break"]=!1,t["line-grid"]=!1,t["line-height"]=!1,t["line-snap"]=!1,t["line-stacking"]=!1,t["line-stacking-ruby"]=!1,t["line-stacking-shift"]=!1,t["line-stacking-strategy"]=!1,t["list-style"]=!0,t["list-style-image"]=!0,t["list-style-position"]=!0,t["list-style-type"]=!0,t.margin=!0,t["margin-bottom"]=!0,t["margin-left"]=!0,t["margin-right"]=!0,t["margin-top"]=!0,t["marker-offset"]=!1,t["marker-side"]=!1,t.marks=!1,t.mask=!1,t["mask-box"]=!1,t["mask-box-outset"]=!1,t["mask-box-repeat"]=!1,t["mask-box-slice"]=!1,t["mask-box-source"]=!1,t["mask-box-width"]=!1,t["mask-clip"]=!1,t["mask-image"]=!1,t["mask-origin"]=!1,t["mask-position"]=!1,t["mask-repeat"]=!1,t["mask-size"]=!1,t["mask-source-type"]=!1,t["mask-type"]=!1,t["max-height"]=!0,t["max-lines"]=!1,t["max-width"]=!0,t["min-height"]=!0,t["min-width"]=!0,t["move-to"]=!1,t["nav-down"]=!1,t["nav-index"]=!1,t["nav-left"]=!1,t["nav-right"]=!1,t["nav-up"]=!1,t["object-fit"]=!1,t["object-position"]=!1,t.opacity=!1,t.order=!1,t.orphans=!1,t.outline=!1,t["outline-color"]=!1,t["outline-offset"]=!1,t["outline-style"]=!1,t["outline-width"]=!1,t.overflow=!1,t["overflow-wrap"]=!1,t["overflow-x"]=!1,t["overflow-y"]=!1,t.padding=!0,t["padding-bottom"]=!0,t["padding-left"]=!0,t["padding-right"]=!0,t["padding-top"]=!0,t.page=!1,t["page-break-after"]=!1,t["page-break-before"]=!1,t["page-break-inside"]=!1,t["page-policy"]=!1,t.pause=!1,t["pause-after"]=!1,t["pause-before"]=!1,t.perspective=!1,t["perspective-origin"]=!1,t.pitch=!1,t["pitch-range"]=!1,t["play-during"]=!1,t.position=!1,t["presentation-level"]=!1,t.quotes=!1,t["region-fragment"]=!1,t.resize=!1,t.rest=!1,t["rest-after"]=!1,t["rest-before"]=!1,t.richness=!1,t.right=!1,t.rotation=!1,t["rotation-point"]=!1,t["ruby-align"]=!1,t["ruby-merge"]=!1,t["ruby-position"]=!1,t["shape-image-threshold"]=!1,t["shape-outside"]=!1,t["shape-margin"]=!1,t.size=!1,t.speak=!1,t["speak-as"]=!1,t["speak-header"]=!1,t["speak-numeral"]=!1,t["speak-punctuation"]=!1,t["speech-rate"]=!1,t.stress=!1,t["string-set"]=!1,t["tab-size"]=!1,t["table-layout"]=!1,t["text-align"]=!0,t["text-align-last"]=!0,t["text-combine-upright"]=!0,t["text-decoration"]=!0,t["text-decoration-color"]=!0,t["text-decoration-line"]=!0,t["text-decoration-skip"]=!0,t["text-decoration-style"]=!0,t["text-emphasis"]=!0,t["text-emphasis-color"]=!0,t["text-emphasis-position"]=!0,t["text-emphasis-style"]=!0,t["text-height"]=!0,t["text-indent"]=!0,t["text-justify"]=!0,t["text-orientation"]=!0,t["text-overflow"]=!0,t["text-shadow"]=!0,t["text-space-collapse"]=!0,t["text-transform"]=!0,t["text-underline-position"]=!0,t["text-wrap"]=!0,t.top=!1,t.transform=!1,t["transform-origin"]=!1,t["transform-style"]=!1,t.transition=!1,t["transition-delay"]=!1,t["transition-duration"]=!1,t["transition-property"]=!1,t["transition-timing-function"]=!1,t["unicode-bidi"]=!1,t["vertical-align"]=!1,t.visibility=!1,t["voice-balance"]=!1,t["voice-duration"]=!1,t["voice-family"]=!1,t["voice-pitch"]=!1,t["voice-range"]=!1,t["voice-rate"]=!1,t["voice-stress"]=!1,t["voice-volume"]=!1,t.volume=!1,t["white-space"]=!1,t.widows=!1,t.width=!0,t["will-change"]=!1,t["word-break"]=!0,t["word-spacing"]=!0,t["word-wrap"]=!0,t["wrap-flow"]=!1,t["wrap-through"]=!1,t["writing-mode"]=!1,t["z-index"]=!1,t}function re(t,r,e){}function se(t,r,e){}var ae=/javascript\s*\:/img;function ie(t,r){return ae.test(r)?"":r}P.whiteList=yt();P.getDefaultWhiteList=yt;P.onAttr=re;P.onIgnoreAttr=se;P.safeAttrValue=ie;var oe={indexOf:function(t,r){var e,i;if(Array.prototype.indexOf)return t.indexOf(r);for(e=0,i=t.length;e<i;e++)if(t[e]===r)return e;return-1},forEach:function(t,r,e){var i,n;if(Array.prototype.forEach)return t.forEach(r,e);for(i=0,n=t.length;i<n;i++)r.call(e,t[i],i,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")}},$=oe;function ne(t,r){t=$.trimRight(t),t[t.length-1]!==";"&&(t+=";");var e=t.length,i=!1,n=0,c=0,d="";function f(){if(!i){var l=$.trim(t.slice(n,c)),u=l.indexOf(":");if(u!==-1){var b=$.trim(l.slice(0,u)),v=$.trim(l.slice(u+1));if(b){var y=r(n,d.length,b,v,l);y&&(d+=y+"; ")}}}n=c+1}for(;c<e;c++){var o=t[c];if(o==="/"&&t[c+1]==="*"){var g=t.indexOf("*/",c+2);if(g===-1)break;c=g+1,n=c+1,i=!1}else o==="("?i=!0:o===")"?i=!1:o===";"?i||f():o===`
`&&f()}return $.trim(d)}var le=ne,z=P,ce=le;function gt(t){return t==null}function fe(t){var r={};for(var e in t)r[e]=t[e];return r}function kt(t){t=fe(t||{}),t.whiteList=t.whiteList||z.whiteList,t.onAttr=t.onAttr||z.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||z.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||z.safeAttrValue,this.options=t}kt.prototype.process=function(t){if(t=t||"",t=t.toString(),!t)return"";var r=this,e=r.options,i=e.whiteList,n=e.onAttr,c=e.onIgnoreAttr,d=e.safeAttrValue,f=ce(t,function(o,g,l,u,b){var v=i[l],y=!1;if(v===!0?y=v:typeof v=="function"?y=v(u):v instanceof RegExp&&(y=v.test(u)),y!==!0&&(y=!1),u=d(l,u),!!u){var w={position:g,sourcePosition:o,source:b,isWhite:y};if(y){var k=n(l,u,w);return gt(k)?l+":"+u:k}else{var k=c(l,u,w);if(!gt(k))return k}}});return f};var ue=kt;(function(t,r){var e=P,i=ue;function n(d,f){var o=new i(f);return o.process(d)}r=t.exports=n,r.FilterCSS=i;for(var c in e)r[c]=e[c];typeof window<"u"&&(window.filterCSS=t.exports)})(ee,q);var lt={indexOf:function(t,r){var e,i;if(Array.prototype.indexOf)return t.indexOf(r);for(e=0,i=t.length;e<i;e++)if(t[e]===r)return e;return-1},forEach:function(t,r,e){var i,n;if(Array.prototype.forEach)return t.forEach(r,e);for(i=0,n=t.length;i<n;i++)r.call(e,t[i],i,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var r=/\s|\n|\t/,e=r.exec(t);return e?e.index:-1}},de=q.FilterCSS,pe=q.getDefaultWhiteList,tt=lt;function At(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}}var wt=new de;function ge(t,r,e){}function be(t,r,e){}function me(t,r,e){}function he(t,r,e){}function Et(t){return t.replace(ve,"&lt;").replace(ye,"&gt;")}function _e(t,r,e,i){if(e=It(e),r==="href"||r==="src"){if(e=tt.trim(e),e==="#")return"#";if(!(e.substr(0,7)==="http://"||e.substr(0,8)==="https://"||e.substr(0,7)==="mailto:"||e.substr(0,4)==="tel:"||e.substr(0,11)==="data:image/"||e.substr(0,6)==="ftp://"||e.substr(0,2)==="./"||e.substr(0,3)==="../"||e[0]==="#"||e[0]==="/"))return""}else if(r==="background"){if(Y.lastIndex=0,Y.test(e))return""}else if(r==="style"){if(bt.lastIndex=0,bt.test(e)||(mt.lastIndex=0,mt.test(e)&&(Y.lastIndex=0,Y.test(e))))return"";i!==!1&&(i=i||wt,e=i.process(e))}return e=Ot(e),e}var ve=/</g,ye=/>/g,ke=/"/g,Ae=/&quot;/g,we=/&#([a-zA-Z0-9]*);?/gim,Ee=/&colon;?/gim,Te=/&newline;?/gim,Y=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,bt=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,mt=/u\s*r\s*l\s*\(.*/gi;function Tt(t){return t.replace(ke,"&quot;")}function xt(t){return t.replace(Ae,'"')}function Ct(t){return t.replace(we,function(e,i){return i[0]==="x"||i[0]==="X"?String.fromCharCode(parseInt(i.substr(1),16)):String.fromCharCode(parseInt(i,10))})}function St(t){return t.replace(Ee,":").replace(Te," ")}function Lt(t){for(var r="",e=0,i=t.length;e<i;e++)r+=t.charCodeAt(e)<32?" ":t.charAt(e);return tt.trim(r)}function It(t){return t=xt(t),t=Ct(t),t=St(t),t=Lt(t),t}function Ot(t){return t=Tt(t),t=Et(t),t}function xe(){return""}function Ce(t,r){typeof r!="function"&&(r=function(){});var e=!Array.isArray(t);function i(d){return e?!0:tt.indexOf(t,d)!==-1}var n=[],c=!1;return{onIgnoreTag:function(d,f,o){if(i(d))if(o.isClosing){var g="[/removed]",l=o.position+g.length;return n.push([c!==!1?c:o.position,l]),c=!1,g}else return c||(c=o.position),"[removed]";else return r(d,f,o)},remove:function(d){var f="",o=0;return tt.forEach(n,function(g){f+=d.slice(o,g[0]),o=g[1]}),f+=d.slice(o),f}}}function Se(t){for(var r="",e=0;e<t.length;){var i=t.indexOf("<!--",e);if(i===-1){r+=t.slice(e);break}r+=t.slice(e,i);var n=t.indexOf("-->",i);if(n===-1)break;e=n+3}return r}function Le(t){var r=t.split("");return r=r.filter(function(e){var i=e.charCodeAt(0);return i===127?!1:i<=31?i===10||i===13:!0}),r.join("")}m.whiteList=At();m.getDefaultWhiteList=At;m.onTag=ge;m.onIgnoreTag=be;m.onTagAttr=me;m.onIgnoreTagAttr=he;m.safeAttrValue=_e;m.escapeHtml=Et;m.escapeQuote=Tt;m.unescapeQuote=xt;m.escapeHtmlEntities=Ct;m.escapeDangerHtml5Entities=St;m.clearNonPrintableCharacter=Lt;m.friendlyAttrValue=It;m.escapeAttrValue=Ot;m.onIgnoreTagStripAll=xe;m.StripTagBody=Ce;m.stripCommentTag=Se;m.stripBlankChar=Le;m.cssFilter=wt;m.getDefaultCSSWhiteList=pe;var et={},D=lt;function Ie(t){var r=D.spaceIndex(t),e;return r===-1?e=t.slice(1,-1):e=t.slice(1,r+1),e=D.trim(e).toLowerCase(),e.slice(0,1)==="/"&&(e=e.slice(1)),e.slice(-1)==="/"&&(e=e.slice(0,-1)),e}function Oe(t){return t.slice(0,2)==="</"}function De(t,r,e){var i="",n=0,c=!1,d=!1,f=0,o=t.length,g="",l="";t:for(f=0;f<o;f++){var u=t.charAt(f);if(c===!1){if(u==="<"){c=f;continue}}else if(d===!1){if(u==="<"){i+=e(t.slice(n,f)),c=f,n=f;continue}if(u===">"||f===o-1){i+=e(t.slice(n,c)),l=t.slice(c,f+1),g=Ie(l),i+=r(c,i.length,g,l,Oe(l)),n=f+1,c=!1;continue}if(u==='"'||u==="'")for(var b=1,v=t.charAt(f-b);v.trim()===""||v==="=";){if(v==="="){d=u;continue t}v=t.charAt(f-++b)}}else if(u===d){d=!1;continue}}return n<o&&(i+=e(t.substr(n))),i}var Ne=/[^a-zA-Z0-9\\_:.-]/gim;function Re(t,r){var e=0,i=0,n=[],c=!1,d=t.length;function f(b,v){if(b=D.trim(b),b=b.replace(Ne,"").toLowerCase(),!(b.length<1)){var y=r(b,v||"");y&&n.push(y)}}for(var o=0;o<d;o++){var g=t.charAt(o),l,u;if(c===!1&&g==="="){c=t.slice(e,o),e=o+1,i=t.charAt(e)==='"'||t.charAt(e)==="'"?e:Be(t,o+1);continue}if(c!==!1&&o===i){if(u=t.indexOf(g,o+1),u===-1)break;l=D.trim(t.slice(i+1,u)),f(c,l),c=!1,o=u,e=o+1;continue}if(/\s|\n|\t/.test(g))if(t=t.replace(/\s|\n|\t/g," "),c===!1)if(u=Pe(t,o),u===-1){l=D.trim(t.slice(e,o)),f(l),c=!1,e=o+1;continue}else{o=u-1;continue}else if(u=Ve(t,o-1),u===-1){l=D.trim(t.slice(e,o)),l=ht(l),f(c,l),c=!1,e=o+1;continue}else continue}return e<t.length&&(c===!1?f(t.slice(e)):f(c,ht(D.trim(t.slice(e))))),D.trim(n.join(" "))}function Pe(t,r){for(;r<t.length;r++){var e=t[r];if(e!==" ")return e==="="?r:-1}}function Be(t,r){for(;r<t.length;r++){var e=t[r];if(e!==" ")return e==="'"||e==='"'?r:-1}}function Ve(t,r){for(;r>0;r--){var e=t[r];if(e!==" ")return e==="="?r:-1}}function qe(t){return t[0]==='"'&&t[t.length-1]==='"'||t[0]==="'"&&t[t.length-1]==="'"}function ht(t){return qe(t)?t.substr(1,t.length-2):t}et.parseTag=De;et.parseAttr=Re;var We=q.FilterCSS,S=m,Dt=et,$e=Dt.parseTag,Fe=Dt.parseAttr,J=lt;function j(t){return t==null}function Ge(t){var r=J.spaceIndex(t);if(r===-1)return{html:"",closing:t[t.length-2]==="/"};t=J.trim(t.slice(r+1,-1));var e=t[t.length-1]==="/";return e&&(t=J.trim(t.slice(0,-1))),{html:t,closing:e}}function Ue(t){var r={};for(var e in t)r[e]=t[e];return r}function He(t){var r={};for(var e in t)Array.isArray(t[e])?r[e.toLowerCase()]=t[e].map(function(i){return i.toLowerCase()}):r[e.toLowerCase()]=t[e];return r}function Nt(t){t=Ue(t||{}),t.stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=S.onIgnoreTagStripAll),t.whiteList||t.allowList?t.whiteList=He(t.whiteList||t.allowList):t.whiteList=S.whiteList,t.onTag=t.onTag||S.onTag,t.onTagAttr=t.onTagAttr||S.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||S.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||S.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||S.safeAttrValue,t.escapeHtml=t.escapeHtml||S.escapeHtml,this.options=t,t.css===!1?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new We(t.css))}Nt.prototype.process=function(t){if(t=t||"",t=t.toString(),!t)return"";var r=this,e=r.options,i=e.whiteList,n=e.onTag,c=e.onIgnoreTag,d=e.onTagAttr,f=e.onIgnoreTagAttr,o=e.safeAttrValue,g=e.escapeHtml,l=r.cssFilter;e.stripBlankChar&&(t=S.stripBlankChar(t)),e.allowCommentTag||(t=S.stripCommentTag(t));var u=!1;e.stripIgnoreTagBody&&(u=S.StripTagBody(e.stripIgnoreTagBody,c),c=u.onIgnoreTag);var b=$e(t,function(v,y,w,k,rt){var B={sourcePosition:v,position:y,isClosing:rt,isWhite:Object.prototype.hasOwnProperty.call(i,w)},N=n(w,k,B);if(!j(N))return N;if(B.isWhite){if(B.isClosing)return"</"+w+">";var G=Ge(k),U=i[w],H=Fe(G.html,function(L,E){var V=J.indexOf(U,L)!==-1,I=d(w,L,E,V);return j(I)?V?(E=o(w,L,E,l),E?L+'="'+E+'"':L):(I=f(w,L,E,V),j(I)?void 0:I):I});return k="<"+w,H&&(k+=" "+H),G.closing&&(k+=" /"),k+=">",k}else return N=c(w,k,B),j(N)?g(k):N},g);return u&&(b=u.remove(b)),b};var Qe=Nt;(function(t,r){var e=m,i=et,n=Qe;function c(f,o){var g=new n(o);return g.process(f)}r=t.exports=c,r.filterXSS=c,r.FilterXSS=n,function(){for(var f in e)r[f]=e[f];for(var o in i)r[o]=i[o]}(),typeof window<"u"&&(window.filterXSS=t.exports);function d(){return typeof self<"u"&&typeof DedicatedWorkerGlobalScope<"u"&&self instanceof DedicatedWorkerGlobalScope}d()&&(self.filterXSS=t.exports)})(te,Z);const _t=Z;const Xe={data(){return{modules:[jt],pagination:{clickable:!0,dynamicBullets:!0},description:"",date:null,daysOfWeek:[],flatpickrConfig:{wrap:!0,altInput:!0,altFormat:"Y-m-d",minDate:"today",maxDate:new Date().fp_incr(90),dateFormat:"Y-m-d"},ticketA_qty:1,ticketB_qty:0,cartItemTotal:0}},watch:{product(){this.product.category==="住宿"&&(this.date="自行電話預定"),this.switchDescription(this.product.description),this.switchContent(this.product.content)},openDate(){this.daysOfWeek=this.openDate,this.flatpickrConfig.enable=this.enableFunction()}},computed:{...Ht(dt,["product","openDate"])},methods:{...ut(dt,["getProduct","filterOpenDate"]),...ut(Yt,["addToCart"]),changeQty(t,r){if(t==="ticketA"){if(r==="plus"){if(this.ticketA_qty>=10)return;this.ticketA_qty++}else if(r==="minus"){if(this.ticketA_qty<=0)return;this.ticketA_qty--}}else if(t==="ticketB"){if(r==="plus"){if(this.ticketB_qty>=10)return;this.ticketB_qty++}else if(r==="minus"){if(this.ticketB_qty<=0)return;this.ticketB_qty--}}},countTotal(){Object.prototype.hasOwnProperty.call(this.product,"ticketB")?this.cartItemTotal=this.product.ticketA_price*this.ticketA_qty+this.product.ticketB_price*this.ticketB_qty:this.cartItemTotal=this.product.ticketA_price*this.ticketA_qty},enableFunction(){const t=this.daysOfWeek;return[function(r){return t.includes(r.getDay())}]},switchDescription(t){const r=_t(t);this.description=r},switchContent(t){const r=_t(t);this.content=r}},components:{Swiper:Kt,SwiperSlide:Jt},mounted(){const t=this.$route.params.id;this.getProduct(t)}},Me={class:"container mt-max"},ze=["src","alt"],Ye=["src","alt"],je={class:"container my-5 my-lg-max"},Ke={class:"row"},Je={class:"col-lg-7 mb-5 mb-lg-0"},Ze={class:"bg-primary text-dark rounded-pill px-2 fs-6"},tr={class:"mt-2 mb-4"},er=s("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link px-1 active",id:"intro-tab","data-bs-toggle":"tab","data-bs-target":"#intro",type:"button",role:"tab","aria-controls":"intro","aria-selected":"true"}," 票券介紹 ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link px-1",id:"notice-tab","data-bs-toggle":"tab","data-bs-target":"#notice",type:"button",role:"tab","aria-controls":"notice","aria-selected":"false"}," 購買須知 ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link px-1",id:"refund-tab","data-bs-toggle":"tab","data-bs-target":"#refund",type:"button",role:"tab","aria-controls":"refund","aria-selected":"false"}," 退票政策 ")]),s("li",{class:"nav-item",role:"presentation"},[s("button",{class:"nav-link px-1",id:"useTicket-tab","data-bs-toggle":"tab","data-bs-target":"#useTicket",type:"button",role:"tab","aria-controls":"useTicket","aria-selected":"false"}," 使用票券 ")])],-1),rr={class:"tab-content",id:"myTabContent"},sr={class:"tab-pane fade show active mt-5",ref:"intro",id:"intro",role:"tabpanel","aria-labelledby":"intro-tab"},ar={class:"mb-3"},ir=["innerHTML"],or=s("br",null,null,-1),nr=s("br",null,null,-1),lr=["innerHTML"],cr={class:"tab-pane fade mt-5",ref:"notice",id:"notice",role:"tabpanel","aria-labelledby":"notice-tab"},fr=s("ul",{class:"list-style-disc ps-3 mb-5"},[s("li",null," 購買後，HH STAY 會將票券QR code 寄到您的電子信箱，請務必妥善留存。 "),s("li",null," 下訂時請以「票券使用日」為主，下訂後即無法變更，敬請留意。 "),s("li",null," 若需變更使用日期或場次，請於票券使用前7日，將整筆訂單取消後，重新下訂。 "),s("li",null," 下單後請自行留意使用時間，請按照預訂日期及當天開放時間內使用，逾期失效。 "),s("li",null," 請勿於任何非主辦單位正式授權售票之通路、網站購買票劵，以免自身權益受損，若透過上述管道購票發生無法入場或其他交易糾紛問題，主辦單位及相關售票平台概不負責。 ")],-1),ur=s("p",{class:"mb-3"},"票券費用包含／不包含",-1),dr={class:"d-flex"},pr={class:"me-5"},gr={class:"tab-pane fade mt-5",ref:"refund",id:"refund",role:"tabpanel","aria-labelledby":"refund-tab"},br=s("ul",{class:"list-style-disc ps-3 mb-5"},[s("li",null,"使用日期前30日，可全額退費"),s("li",null,"使用日期前15日，可退還70%之票券費用"),s("li",null,"使用日期前7日，可退還50%之票券費用"),s("li",null,"使用日期前6日起，恕無法受理退費")],-1),mr=s("p",null,[s("i",{class:"fas fa-flag me-1"}),x("您可以透過訂單內的「客服信箱」進行退費申請 ")],-1),hr=[br,mr],_r={class:"tab-pane fade mt-5",ref:"useTicket",id:"useTicket",role:"tabpanel","aria-labelledby":"useTicket-tab"},vr={class:"list-style-disc ps-3 mb-3"},yr=s("li",null,"請務必於票券使用當日，出示QR code進行兌換，逾期失效",-1),kr=["src"],Ar={class:"d-none d-lg-block col-lg-4 offset-lg-1 text-dark fs-5"},wr={class:"card-text text-center mb-3 bg-light rounded-2"},Er={class:"fs-2 fw-blod m-1 text-black text-shadow"},Tr={action:""},xr={class:"mb-3"},Cr=s("label",{for:"date",class:"form-label"},"使用日期：",-1),Sr={key:1,class:"form-control fs-5 text-center"},Lr=s("p",{class:"mb-3"},"選擇人數：",-1),Ir={class:"mb-5"},Or={class:"mb-3 d-flex align-items-center"},Dr=["for"],Nr={class:"text-secondary"},Rr={class:"d-flex justify-content-center"},Pr={type:"button",class:"border-0 bg-white fs-6"},Br={type:"button",class:"border-0 bg-white fs-6"},Vr={key:0,class:"mb-3 d-flex align-items-center"},qr=["for"],Wr={class:"text-secondary"},$r={class:"d-flex justify-content-center"},Fr={type:"button",class:"border-0 bg-white fs-6"},Gr={type:"button",class:"border-0 bg-white fs-6"},Ur=s("div",null,null,-1),Hr={class:"text-center"},Qr=s("button",{type:"button",class:"w-100 d-lg-none btn btn-primary text-dark","data-bs-toggle":"modal","data-bs-target":"#purchaseModal"}," 立即選購 ",-1),Xr={class:"modal fade",id:"purchaseModal",tabindex:"-1","aria-labelledby":"purchaseModal","aria-hidden":"true"},Mr={class:"modal-dialog modal-fullscreen-sm-down"},zr={class:"modal-content"},Yr={class:"modal-header"},jr={class:"modal-title",id:"purchaseModal"},Kr=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Jr={class:"modal-body"},Zr={class:"card-text text-center mb-3 bg-light rounded-2"},ts={class:"fs-2 fw-blod m-1 text-black text-shadow"},es={action:""},rs={class:"mb-3"},ss=s("label",{for:"date",class:"form-label"},"使用日期：",-1),as={key:1,class:"form-control fs-5 text-center"},is=s("p",{class:"mb-3"},"選擇人數：",-1),os={class:"mb-5"},ns={class:"mb-3 d-flex align-items-center"},ls=["for"],cs={class:"text-secondary"},fs={class:"d-flex justify-content-center"},us={type:"button",class:"border-0 bg-white fs-6"},ds={type:"button",class:"border-0 bg-white fs-6"},ps={key:0,class:"mb-3 d-flex align-items-center"},gs=["for"],bs={class:"text-secondary"},ms={class:"d-flex justify-content-center"},hs={type:"button",class:"border-0 bg-white fs-6"},_s={type:"button",class:"border-0 bg-white fs-6"},vs=s("div",null,null,-1),ys={class:"text-center"};function ks(t,r,e,i,n,c){const d=F("swiper-slide"),f=F("swiper"),o=F("font-awesome-icon"),g=F("flatPickr");return A(),C(Q,null,[s("section",Me,[T(f,{class:"product-img",grabCursor:"",centeredSlides:"",pagination:n.pagination,modules:n.modules,loop:!0,slidesPerView:1,spaceBetween:15,breakpoints:{768:{slidesPerView:1.5,spaceBetween:25}}},{default:it(()=>[T(d,null,{default:it(()=>[s("div",null,[s("img",{src:t.product.imageUrl,alt:t.img,class:"rounded-2 object-fit-cover shadow-sm"},null,8,ze)])]),_:1}),(A(!0),C(Q,null,ot(t.product.imagesUrl,l=>(A(),K(d,{key:l},{default:it(()=>[s("div",null,[s("img",{src:l,alt:l,class:"rounded-2 object-fit-cover shadow-sm"},null,8,Ye)])]),_:2},1024))),128))]),_:1},8,["pagination","modules","breakpoints"])]),s("section",je,[s("div",Ke,[s("div",Je,[s("span",Ze,[T(o,{icon:"fa-solid fa-location-dot",class:"me-1"}),x(_(t.product.area),1)]),s("h2",tr,_(t.product.title),1),er,s("div",rr,[s("div",sr,[s("p",ar,[s("span",{innerHTML:n.description},null,8,ir)]),or,T(o,{icon:"fa-solid fa-flag",class:"me-1 text-primary"}),x("開放時間："),nr,s("div",{innerHTML:t.product.content,class:"mt-1"},null,8,lr)],512),s("div",cr,[fr,ur,s("div",dr,[s("ul",pr,[(A(!0),C(Q,null,ot(t.product.includes,l=>(A(),C("li",{key:l},[T(o,{icon:"fa-solid fa-check",class:"me-1 text-primary fs-5"}),x(_(l),1)]))),128))]),s("ul",null,[(A(!0),C(Q,null,ot(t.product.excludes,l=>(A(),C("li",{key:l},[T(o,{icon:"fa-solid fa-xmark",class:"me-1 text-secondary fs-5"}),x(_(l),1)]))),128))])])],512),s("div",gr,hr,512),s("div",_r,[s("ul",vr,[s("li",null,"使用地點："+_(t.product.address),1),yr]),t.product.mapUrl?(A(),C("iframe",{key:0,width:"100%",height:"300",style:{border:"0"},frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",src:`${t.product.mapUrl}`},null,8,kr)):nt("",!0)],512)])]),s("div",Ar,[s("p",wr,[x(" TWD"),s("span",Er,_(t.product.price),1),x("起 ")]),s("form",Tr,[s("div",xr,[Cr,t.product.category!=="住宿"?(A(),K(g,{key:0,class:"border-primary form-control flatpickr flatpickr-input fs-5 text-center",placeholder:"請選擇使用日期",id:"date",modelValue:n.date,"onUpdate:modelValue":r[0]||(r[0]=l=>n.date=l),config:n.flatpickrConfig},null,8,["modelValue","config"])):(A(),C("p",Sr,"請自行電話預定"))]),Lr,s("ul",Ir,[s("li",Or,[s("label",{for:t.product.ticketA,class:"form-label w-100 mb-0 me-4"},[x(_(t.product.ticketA)+" ",1),s("span",Nr,"$ "+_(t.product.ticketA_price)+"/"+_(t.product.unit),1)],8,Dr),s("div",Rr,[s("button",Pr,[T(o,{icon:"fa-solid fa-minus",class:"border-primary border border-2 text-dark rounded-circle p-1",onClick:r[1]||(r[1]=l=>c.changeQty("ticketA","minus"))})]),X(s("input",{type:"text",name:"adult-ticket",id:"adult-ticket",class:"form-control w-25 border-0 mx-1 p-0 fs-3 text-center","onUpdate:modelValue":r[2]||(r[2]=l=>n.ticketA_qty=l)},null,512),[[M,n.ticketA_qty]]),s("button",Br,[T(o,{icon:"fa-solid fa-plus",class:"border-primary border border-2 text-dark rounded-circle p-1",onClick:r[3]||(r[3]=l=>c.changeQty("ticketA","plus"))})])])]),t.product.ticketB?(A(),C("li",Vr,[s("label",{for:t.product.ticketB,class:"form-label w-100 mb-0 me-4"},[x(_(t.product.ticketB)+" ",1),s("span",Wr,"$ "+_(t.product.ticketB_price)+"/"+_(t.product.unit),1)],8,qr),s("div",$r,[s("button",Fr,[T(o,{icon:"fa-solid fa-minus",class:"border-primary border border-2 text-dark rounded-circle p-1",onClick:r[4]||(r[4]=l=>c.changeQty("ticketB","minus"))})]),X(s("input",{type:"text",name:"adult-ticket",id:"adult-ticket",class:"form-control w-25 border-0 mx-1 p-0 fs-3 text-center","onUpdate:modelValue":r[5]||(r[5]=l=>n.ticketB_qty=l)},null,512),[[M,n.ticketB_qty]]),s("button",Gr,[T(o,{icon:"fa-solid fa-plus",class:"border-primary border border-2 text-dark rounded-circle p-1",onClick:r[6]||(r[6]=l=>c.changeQty("ticketB","plus"))})])])])):nt("",!0)]),Ur,s("div",Hr,[s("button",{type:"button",onClick:r[7]||(r[7]=l=>t.addToCart(t.product.id,n.ticketA_qty,n.ticketB_qty,n.date,t.product.ticketA_price,t.product.ticketB_price)),class:"btn btn-primary text-dark w-75 fs-5"}," 加入購物車 ")])])])]),Qr,s("div",Xr,[s("div",Mr,[s("div",zr,[s("div",Yr,[s("h5",jr,_(t.product.title),1),Kr]),s("div",Jr,[s("p",Zr,[x(" TWD"),s("span",ts,_(t.product.price),1),x("起 ")]),s("form",es,[s("div",rs,[ss,t.product.category!=="住宿"?(A(),K(g,{key:0,class:"border-primary form-control flatpickr flatpickr-input fs-5 text-center",placeholder:"請選擇使用日期",id:"date",modelValue:n.date,"onUpdate:modelValue":r[8]||(r[8]=l=>n.date=l),config:n.flatpickrConfig},null,8,["modelValue","config"])):(A(),C("p",as," 請自行電話預定 "))]),is,s("ul",os,[s("li",ns,[s("label",{for:t.product.ticketA,class:"form-label w-100 mb-0 me-4"},[x(_(t.product.ticketA)+" ",1),s("span",cs,"$ "+_(t.product.ticketA_price)+"/"+_(t.product.unit),1)],8,ls),s("div",fs,[s("button",us,[T(o,{icon:"fa-solid fa-minus",class:"border-primary border border-2 text-dark rounded-circle p-1",onClick:r[9]||(r[9]=l=>c.changeQty("ticketA","minus"))})]),X(s("input",{type:"text",name:"adult-ticket",id:"adult-ticket",class:"form-control w-25 border-0 mx-1 p-0 fs-3 text-center","onUpdate:modelValue":r[10]||(r[10]=l=>n.ticketA_qty=l)},null,512),[[M,n.ticketA_qty]]),s("button",ds,[T(o,{icon:"fa-solid fa-plus",class:"border-primary border border-2 text-dark rounded-circle p-1",onClick:r[11]||(r[11]=l=>c.changeQty("ticketA","plus"))})])])]),t.product.ticketB?(A(),C("li",ps,[s("label",{for:t.product.ticketB,class:"form-label w-100 mb-0 me-4"},[x(_(t.product.ticketB)+" ",1),s("span",bs,"$ "+_(t.product.ticketB_price)+"/"+_(t.product.unit),1)],8,gs),s("div",ms,[s("button",hs,[T(o,{icon:"fa-solid fa-minus",class:"border-primary border border-2 text-dark rounded-circle p-1",onClick:r[12]||(r[12]=l=>c.changeQty("ticketB","minus"))})]),X(s("input",{type:"text",name:"adult-ticket",id:"adult-ticket",class:"form-control w-25 border-0 mx-1 p-0 fs-3 text-center","onUpdate:modelValue":r[13]||(r[13]=l=>n.ticketB_qty=l)},null,512),[[M,n.ticketB_qty]]),s("button",_s,[T(o,{icon:"fa-solid fa-plus",class:"border-primary border border-2 text-dark rounded-circle p-1",onClick:r[14]||(r[14]=l=>c.changeQty("ticketB","plus"))})])])])):nt("",!0)]),vs,s("div",ys,[s("button",{type:"button",onClick:r[15]||(r[15]=l=>t.addToCart(t.product.id,n.ticketA_qty,n.ticketB_qty,n.date,t.product.ticketA_price,t.product.ticketB_price)),"data-bs-dismiss":"modal",class:"btn btn-primary text-dark w-75 fs-5"}," 加入購物車 ")])])])])])])])],64)}const As=vt(Xe,[["render",ks]]),ws={components:{ProductDetail:As}};function Es(t,r,e,i,n,c){const d=F("ProductDetail");return A(),K(d)}const Is=vt(ws,[["render",Es]]);export{Is as default};
