function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=a(e,n,r,c);t.p(o,i)}}function l(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function _(t){return y(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let x;function w(t){x=t}function P(){if(!x)throw new Error("Function called outside component initialization");return x}const N=[],A=[],R=[],j=[],I=Promise.resolve();let C=!1;function L(t){R.push(t)}let O=!1;const k=new Set;function U(){if(!O){O=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];w(e),T(e.$$)}for(w(null),N.length=0;A.length;)A.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];k.has(e)||(k.add(e),e())}R.length=0}while(N.length);for(;j.length;)j.pop()();C=!1,O=!1,k.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const q=new Set;let J;function B(){J={r:0,c:[],p:J}}function K(){J.r||o(J.c),J=J.p}function M(t,e){t&&t.i&&(q.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),J.c.push(()=>{q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function D(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function z(t,e){t&&t.l(e)}function F(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),L(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(L)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(N.push(t),C||(C=!0,I.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,s,c,a,i,l=[-1]){const f=x;w(e);const d=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=s?s(e,d,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&W(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=v(n.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();n.intro&&M(e.$$.fragment),F(e,n.target,n.anchor),U()}w(f)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z=[];function tt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const et={};function nt(e){let n,r,o,s,c,a,i,d,g,E,S,x,w,P,N,A,R,j,I,C,L;return{c(){n=p("nav"),r=p("ul"),o=p("li"),s=p("a"),c=h("home"),i=m(),d=p("li"),g=p("a"),E=h("about"),x=m(),w=p("li"),P=p("a"),N=h("blog"),R=m(),j=p("li"),I=p("a"),C=h("cv"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=v(n);r=b(e,"UL",{class:!0});var a=v(r);o=b(a,"LI",{class:!0});var l=v(o);s=b(l,"A",{"aria-current":!0,href:!0,class:!0});var f=v(s);c=y(f,"home"),f.forEach(u),l.forEach(u),i=_(a),d=b(a,"LI",{class:!0});var p=v(d);g=b(p,"A",{"aria-current":!0,href:!0,class:!0});var h=v(g);E=y(h,"about"),h.forEach(u),p.forEach(u),x=_(a),w=b(a,"LI",{class:!0});var m=v(w);P=b(m,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var $=v(P);N=y($,"blog"),$.forEach(u),m.forEach(u),R=_(a),j=b(a,"LI",{class:!0});var S=v(j);I=b(S,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var A=v(I);C=y(A,"cv"),A.forEach(u),S.forEach(u),a.forEach(u),e.forEach(u),this.h()},h(){$(s,"aria-current",a=void 0===e[0]?"page":void 0),$(s,"href","."),$(s,"class","svelte-1dbd5up"),$(o,"class","svelte-1dbd5up"),$(g,"aria-current",S="about"===e[0]?"page":void 0),$(g,"href","about"),$(g,"class","svelte-1dbd5up"),$(d,"class","svelte-1dbd5up"),$(P,"rel","prefetch"),$(P,"aria-current",A="blog"===e[0]?"page":void 0),$(P,"href","blog"),$(P,"class","svelte-1dbd5up"),$(w,"class","svelte-1dbd5up"),$(I,"rel","prefetch"),$(I,"aria-current",L="cv"===e[0]?"page":void 0),$(I,"href","cv"),$(I,"class","svelte-1dbd5up"),$(j,"class","svelte-1dbd5up"),$(r,"class","svelte-1dbd5up"),$(n,"class","svelte-1dbd5up")},m(t,e){f(t,n,e),l(n,r),l(r,o),l(o,s),l(s,c),l(r,i),l(r,d),l(d,g),l(g,E),l(r,x),l(r,w),l(w,P),l(P,N),l(r,R),l(r,j),l(j,I),l(I,C)},p(t,[e]){1&e&&a!==(a=void 0===t[0]?"page":void 0)&&$(s,"aria-current",a),1&e&&S!==(S="about"===t[0]?"page":void 0)&&$(g,"aria-current",S),1&e&&A!==(A="blog"===t[0]?"page":void 0)&&$(P,"aria-current",A),1&e&&L!==(L="cv"===t[0]?"page":void 0)&&$(I,"aria-current",L)},i:t,o:t,d(t){t&&u(n)}}}function rt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ot extends Q{constructor(t){super(),X(this,t,rt,nt,c,{segment:0})}}function st(t){let e,n,r,o;e=new ot({props:{segment:t[0]}});const s=t[2].default,c=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){Y(e.$$.fragment),n=m(),r=p("main"),c&&c.c(),this.h()},l(t){z(e.$$.fragment,t),n=_(t),r=b(t,"MAIN",{class:!0});var o=v(r);c&&c.l(o),o.forEach(u),this.h()},h(){$(r,"class","svelte-1uhnsl8")},m(t,s){F(e,t,s),f(t,n,s),f(t,r,s),c&&c.m(r,null),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),c&&c.p&&2&n&&i(c,s,t,t[1],n,null,null)},i(t){o||(M(e.$$.fragment,t),M(c,t),o=!0)},o(t){V(e.$$.fragment,t),V(c,t),o=!1},d(t){G(e,t),t&&u(n),t&&u(r),c&&c.d(t)}}}function ct(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class at extends Q{constructor(t){super(),X(this,t,ct,st,c,{segment:0})}}function it(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=h(r)},l(t){e=b(t,"PRE",{});var o=v(e);n=y(o,r),o.forEach(u)},m(t,r){f(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&u(e)}}}function lt(e){let n,r,o,s,c,a,i,d,x,w=e[1].message+"";document.title=n=e[0];let P=e[2]&&e[1].stack&&it(e);return{c(){r=m(),o=p("h1"),s=h(e[0]),c=m(),a=p("p"),i=h(w),d=m(),P&&P.c(),x=g(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=_(t),o=b(t,"H1",{class:!0});var n=v(o);s=y(n,e[0]),n.forEach(u),c=_(t),a=b(t,"P",{class:!0});var l=v(a);i=y(l,w),l.forEach(u),d=_(t),P&&P.l(t),x=g(),this.h()},h(){$(o,"class","svelte-8od9u6"),$(a,"class","svelte-8od9u6")},m(t,e){f(t,r,e),f(t,o,e),l(o,s),f(t,c,e),f(t,a,e),l(a,i),f(t,d,e),P&&P.m(t,e),f(t,x,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&w!==(w=t[1].message+"")&&E(i,w),t[2]&&t[1].stack?P?P.p(t,e):(P=it(t),P.c(),P.m(x.parentNode,x)):P&&(P.d(1),P=null)},i:t,o:t,d(t){t&&u(r),t&&u(o),t&&u(c),t&&u(a),t&&u(d),P&&P.d(t),t&&u(x)}}}function ft(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class ut extends Q{constructor(t){super(),X(this,t,ft,lt,c,{status:0,error:1})}}function dt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&Y(n.$$.fragment),r=g()},l(t){n&&z(n.$$.fragment,t),r=g()},m(t,e){n&&F(n,t,e),f(t,r,e),o=!0},p(t,e){const o=16&e?D(s,[H(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){B();const t=n;V(t.$$.fragment,1,0,()=>{G(t,1)}),K()}c?(n=new c(a()),Y(n.$$.fragment),M(n.$$.fragment,1),F(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&M(n.$$.fragment,t),o=!0)},o(t){n&&V(n.$$.fragment,t),o=!1},d(t){t&&u(r),n&&G(n,t)}}}function pt(t){let e,n;return e=new ut({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function ht(t){let e,n,r,o;const s=[pt,dt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){c[e].m(t,n),f(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(B(),V(c[i],1,1,()=>{c[i]=null}),K(),n=c[e],n||(n=c[e]=s[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){o||(M(n),o=!0)},o(t){V(n),o=!1},d(t){c[e].d(t),t&&u(r)}}}function mt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[ht]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new at({props:s}),{c(){Y(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,e){F(n,t,e),r=!0},p(t,[e]){const r=12&e?D(o,[4&e&&{segment:t[2][0]},8&e&&H(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function gt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var f,u,d;return f=l,P().$$.after_update.push(f),u=et,d=r,P().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class $t extends Q{constructor(t){super(),X(this,t,gt,mt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const vt=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],bt=[{js:()=>Promise.all([import("./index.48046f83.js"),__inject_styles(["client-e118e612.css","index-39716d32.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./about.529210c7.js"),__inject_styles(["client-e118e612.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./index.878a4962.js"),__inject_styles(["client-e118e612.css","index-7ed37c94.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./[slug].58678331.js"),__inject_styles(["client-e118e612.css","[slug]-bbe61b75.css"])]).then(t=>t[0])},{js:()=>Promise.all([import("./cv.1f0f7959.js"),__inject_styles(["client-e118e612.css"])]).then(t=>t[0])}],yt=(_t=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:_t(t[1])})}]},{pattern:/^\/cv\/?$/,parts:[{i:4}]}]);var _t;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Et(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{i(r.next(t))}catch(t){s(t)}}function a(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))}function St(t,e={noscroll:!1,replaceState:!1}){const n=Kt(new URL(t,document.baseURI));return n?(qt[e.replaceState?"replaceState":"pushState"]({id:Ut},"",t),Vt(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}const xt="undefined"!=typeof __SAPPER__&&__SAPPER__;let wt,Pt,Nt,At=!1,Rt=[],jt="{}";const It={page:function(t){const e=tt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:tt(null),session:tt(xt&&xt.session)};let Ct,Lt;It.session.subscribe(t=>Et(void 0,void 0,void 0,(function*(){if(Ct=t,!At)return;Lt=!0;const e=Kt(new URL(location.href)),n=Pt={},{redirect:r,props:o,branch:s}=yield Ht(e);n===Pt&&(r?yield St(r.location,{replaceState:!0}):yield Dt(s,o,e.page))})));let Ot,kt=null;let Ut,Tt=1;const qt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Jt={};function Bt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Kt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(xt.baseUrl))return null;let e=t.pathname.slice(xt.baseUrl.length);if(""===e&&(e="/"),!vt.some(t=>t.test(e)))for(let n=0;n<yt.length;n+=1){const r=yt[n],o=r.pattern.exec(e);if(o){const n=Bt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Mt(){return{x:pageXOffset,y:pageYOffset}}function Vt(t,e,n,r){return Et(this,void 0,void 0,(function*(){if(e)Ut=e;else{const t=Mt();Jt[Ut]=t,e=Ut=++Tt,Jt[Ut]=n?t:{x:0,y:0}}Ut=e,wt&&It.preloading.set(!0);const o=kt&&kt.href===t.href?kt.promise:Ht(t);kt=null;const s=Pt={},c=yield o,{redirect:a}=c;if(s===Pt){if(a)yield St(a.location,{replaceState:!0});else{const{props:e,branch:n}=c;yield Dt(n,e,t.page)}if(document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t=Jt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Jt[Ut]=t,t&&(a?scrollTo(0,0):scrollTo(t.x,t.y))}}}))}function Dt(t,e,n){return Et(this,void 0,void 0,(function*(){It.page.set(n),It.preloading.set(!1),wt?wt.$set(e):(e.stores={page:{subscribe:It.page.subscribe},preloading:{subscribe:It.preloading.subscribe},session:It.session},e.level0={props:yield Nt},e.notify=It.page.notify,wt=new $t({target:Ot,props:e,hydrate:!0})),Rt=t,jt=JSON.stringify(n.query),At=!0,Lt=!1}))}function Ht(t){return Et(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Nt){const t=()=>{};Nt=xt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Ct)}let a,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let f=!1;a=yield Promise.all(e.parts.map((e,a)=>Et(this,void 0,void 0,(function*(){const u=r[a];if(function(t,e,n,r){if(r!==jt)return!0;const o=Rt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,u,l,o)&&(f=!0),s.segments[i]=r[a+1],!e)return{segment:u};const d=i++;if(!Lt&&!f&&Rt[a]&&Rt[a].part===e.i)return Rt[a];f=!1;const{default:p,preload:h}=yield function(t){const e=[t.js()];return Promise.all(e).then(t=>t[0])}(bt[e.i]);let m;return m=At||!xt.preloaded[a+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ct):{}:xt.preloaded[a+1],s["level"+d]={component:p,props:m,segment:u,match:l,part:e.i}}))))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}function Yt(t){const e=Kt(new URL(t,document.baseURI));if(e)return kt&&t===kt.href||function(t,e){kt={href:t,promise:e}}(t,Ht(e)),kt.promise}let zt;function Ft(t){clearTimeout(zt),zt=setTimeout(()=>{Gt(t)},20)}function Gt(t){const e=Xt(t.target);e&&"prefetch"===e.rel&&Yt(e.href)}function Wt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Xt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Kt(o);if(s){Vt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),qt.pushState({id:Ut},"",o.href)}}function Xt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Qt(t){if(Jt[Ut]=Mt(),t.state){const e=Kt(new URL(location.href));e?Vt(e,t.state.id):location.href=location.href}else Tt=Tt+1,function(t){Ut=t}(Tt),qt.replaceState({id:Ut},"",location.href)}var Zt;Zt={target:document.querySelector("#sapper")},"scrollRestoration"in qt&&(qt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{qt.scrollRestoration="auto"}),addEventListener("load",()=>{qt.scrollRestoration="manual"}),function(t){Ot=t}(Zt.target),addEventListener("click",Wt),addEventListener("popstate",Qt),addEventListener("touchstart",Gt),addEventListener("mousemove",Ft),Promise.resolve().then(()=>{const{hash:t,href:e}=location;qt.replaceState({id:Tt},"",e);const n=new URL(location.href);if(xt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=xt;Nt||(Nt=s&&s[0]),Dt([],{error:a,status:c,session:o,level0:{props:Nt},level1:{props:{status:c,error:a},component:ut},segments:s},{host:e,path:n,query:Bt(r),params:{}})}();const r=Kt(n);return r?Vt(r,Tt,!0,t):void 0});export{Q as S,m as a,b,_ as c,u as d,p as e,v as f,y as g,$ as h,X as i,f as j,l as k,E as l,d as m,t as n,S as q,c as s,h as t};

import __inject_styles from './inject_styles.js';