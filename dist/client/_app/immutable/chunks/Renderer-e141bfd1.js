import{S as he,i as pe,s as ve,a as S,k as y,U as me,h,c as V,l as E,m as w,n as b,b as Y,f as F,g as ee,t as L,d as te,a6 as be,o as ge,e as ue,q as A,r as P,J as f,B as ke,W as Q,Z as fe,X as O,w as X,x as Z,y as j,u as G,Y as ye,$ as Ee,a7 as we,z as x,O as De,R as Ie,T as Se}from"./index-1a8d1abb.js";import{f as q,B as Ve,L as Ke,I as Te}from"./Label-59fdd747.js";function ce(d,e,t){const s=d.slice();return s[9]=e[t],s[10]=e,s[11]=t,s}function de(d){let e,t,s,c;const r=[Ne,Be],a=[];function i(n,_){return n[1]?1:0}return e=i(d),t=a[e]=r[e](d),{c(){t.c(),s=ue()},l(n){t.l(n),s=ue()},m(n,_){a[e].m(n,_),Y(n,s,_),c=!0},p(n,_){let v=e;e=i(n),e===v?a[e].p(n,_):(ee(),L(a[v],1,1,()=>{a[v]=null}),te(),t=a[e],t?t.p(n,_):(t=a[e]=r[e](n),t.c()),F(t,1),t.m(s.parentNode,s))},i(n){c||(F(t),c=!0)},o(n){L(t),c=!1},d(n){a[e].d(n),n&&h(s)}}}function Be(d){let e,t,s,c,r,a,i,n,_,v,g,l,p,B,k,K,D,N,R,z,o,u,m,C,T,J,M,W,U;return{c(){e=y("div"),t=y("div"),s=A("🎉"),c=S(),r=y("h3"),a=A("Thanks!"),i=S(),n=y("p"),_=A("Your data was successfully sent! Thanks for filling in!"),g=S(),l=y("div"),p=y("span"),B=A("Built with"),K=S(),D=y("a"),N=A("Formate"),z=S(),o=y("span"),u=A(", powered by"),C=S(),T=y("a"),J=A("Deta Space"),this.h()},l(I){e=E(I,"DIV",{class:!0});var $=w(e);t=E($,"DIV",{class:!0});var le=w(t);s=P(le,"🎉"),le.forEach(h),c=V($),r=E($,"H3",{class:!0});var se=w(r);a=P(se,"Thanks!"),se.forEach(h),i=V($),n=E($,"P",{class:!0});var ae=w(n);_=P(ae,"Your data was successfully sent! Thanks for filling in!"),ae.forEach(h),$.forEach(h),g=V(I),l=E(I,"DIV",{class:!0});var H=w(l);p=E(H,"SPAN",{class:!0});var ne=w(p);B=P(ne,"Built with"),ne.forEach(h),K=V(H),D=E(H,"A",{href:!0,class:!0});var re=w(D);N=P(re,"Formate"),re.forEach(h),z=V(H),o=E(H,"SPAN",{class:!0});var ie=w(o);u=P(ie,", powered by"),ie.forEach(h),C=V(H),T=E(H,"A",{href:!0,class:!0});var oe=w(T);J=P(oe,"Deta Space"),oe.forEach(h),H.forEach(h),this.h()},h(){b(t,"class","icon svelte-1os88ue"),b(r,"class","svelte-1os88ue"),b(n,"class","svelte-1os88ue"),b(e,"class","card finished svelte-1os88ue"),b(p,"class","svelte-1os88ue"),b(D,"href","/"),b(D,"class","svelte-1os88ue"),b(o,"class","svelte-1os88ue"),b(T,"href","/"),b(T,"class","svelte-1os88ue"),b(l,"class","info svelte-1os88ue")},m(I,$){Y(I,e,$),f(e,t),f(t,s),f(e,c),f(e,r),f(r,a),f(e,i),f(e,n),f(n,_),Y(I,g,$),Y(I,l,$),f(l,p),f(p,B),f(l,K),f(l,D),f(D,N),f(l,z),f(l,o),f(o,u),f(l,C),f(l,T),f(T,J),U=!0},p:ke,i(I){U||(Q(()=>{v||(v=fe(e,q,{duration:500,y:8},!0)),v.run(1)}),k||Q(()=>{k=O(p,q,{duration:500,y:8,delay:600}),k.start()}),R||Q(()=>{R=O(D,q,{duration:500,y:8,delay:700}),R.start()}),m||Q(()=>{m=O(o,q,{duration:500,y:8,delay:800}),m.start()}),M||Q(()=>{M=O(T,q,{duration:500,y:8,delay:900}),M.start()}),W||Q(()=>{W=O(l,q,{duration:500,delay:500}),W.start()}),U=!0)},o(I){v||(v=fe(e,q,{duration:500,y:8},!1)),v.run(0),U=!1},d(I){I&&h(e),I&&v&&v.end(),I&&h(g),I&&h(l)}}}function Ne(d){let e,t,s,c=d[5].title+"",r,a,i,n=d[5].description+"",_,v,g,l=[],p=new Map,B,k,K,D,N,R=d[5].fields;const z=o=>o[9].key;for(let o=0;o<R.length;o+=1){let u=ce(d,R,o),m=z(u);p.set(m,l[o]=_e(m,u))}return k=new Ve({props:{position:"right",$$slots:{default:[$e]},$$scope:{ctx:d}}}),k.$on("click",d[6]),{c(){e=y("div"),t=y("div"),s=y("h2"),r=A(c),a=S(),i=y("p"),_=A(n),v=S(),g=y("div");for(let o=0;o<l.length;o+=1)l[o].c();B=S(),X(k.$$.fragment),this.h()},l(o){e=E(o,"DIV",{class:!0});var u=w(e);t=E(u,"DIV",{class:!0});var m=w(t);s=E(m,"H2",{class:!0});var C=w(s);r=P(C,c),C.forEach(h),a=V(m),i=E(m,"P",{class:!0});var T=w(i);_=P(T,n),T.forEach(h),m.forEach(h),v=V(u),g=E(u,"DIV",{class:!0});var J=w(g);for(let M=0;M<l.length;M+=1)l[M].l(J);J.forEach(h),B=V(u),Z(k.$$.fragment,u),u.forEach(h),this.h()},h(){b(s,"class","svelte-1os88ue"),b(i,"class","svelte-1os88ue"),b(t,"class","heading svelte-1os88ue"),b(g,"class","fields svelte-1os88ue"),b(e,"class","form svelte-1os88ue")},m(o,u){Y(o,e,u),f(e,t),f(t,s),f(s,r),f(t,a),f(t,i),f(i,_),f(e,v),f(e,g);for(let m=0;m<l.length;m+=1)l[m].m(g,null);f(e,B),j(k,e,null),N=!0},p(o,u){(!N||u&32)&&c!==(c=o[5].title+"")&&G(r,c),(!N||u&32)&&n!==(n=o[5].description+"")&&G(_,n),u&33&&(R=o[5].fields,ee(),l=ye(l,u,z,1,o,R,p,g,Ee,_e,null,ce),te());const m={};u&4108&&(m.$$scope={dirty:u,ctx:o}),k.$set(m)},i(o){if(!N){for(let u=0;u<R.length;u+=1)F(l[u]);F(k.$$.fragment,o),Q(()=>{D&&D.end(1),K=O(e,q,{duration:200,y:8}),K.start()}),N=!0}},o(o){for(let u=0;u<l.length;u+=1)L(l[u]);L(k.$$.fragment,o),K&&K.invalidate(),D=we(e,q,{duration:200,y:-8}),N=!1},d(o){o&&h(e);for(let u=0;u<l.length;u+=1)l[u].d();x(k),o&&D&&D.end()}}}function _e(d,e){var g;let t,s,c,r,a,i,n;s=new Ke({props:{title:e[9].title}});function _(l){e[7](l,e[9])}let v={placeholder:(g=e[9])==null?void 0:g.placeholder};return e[0][e[9].fieldKey]!==void 0&&(v.value=e[0][e[9].fieldKey]),r=new Te({props:v}),De.push(()=>Ie(r,"value",_,e[0][e[9].fieldKey])),{key:d,first:null,c(){t=y("div"),X(s.$$.fragment),c=S(),X(r.$$.fragment),i=S(),this.h()},l(l){t=E(l,"DIV",{});var p=w(t);Z(s.$$.fragment,p),c=V(p),Z(r.$$.fragment,p),i=V(p),p.forEach(h),this.h()},h(){this.first=t},m(l,p){Y(l,t,p),j(s,t,null),f(t,c),j(r,t,null),f(t,i),n=!0},p(l,p){var K;e=l;const B={};p&32&&(B.title=e[9].title),s.$set(B);const k={};p&32&&(k.placeholder=(K=e[9])==null?void 0:K.placeholder),!a&&p&33&&(a=!0,k.value=e[0][e[9].fieldKey],Se(()=>a=!1)),r.$set(k)},i(l){n||(F(s.$$.fragment,l),F(r.$$.fragment,l),n=!0)},o(l){L(s.$$.fragment,l),L(r.$$.fragment,l),n=!1},d(l){l&&h(t),x(s),x(r)}}}function $e(d){let e=d[3]===d[2].screens.length-1?"Submit":"Next Question",t;return{c(){t=A(e)},l(s){t=P(s,e)},m(s,c){Y(s,t,c)},p(s,c){c&12&&e!==(e=s[3]===s[2].screens.length-1?"Submit":"Next Question")&&G(t,e)},d(s){s&&h(t)}}}function Ae(d){let e,t,s,c,r;document.title=e=d[2].name;let a=d[4]&&de(d);return{c(){t=S(),s=y("div"),a&&a.c(),this.h()},l(i){me("svelte-r7ru1d",document.head).forEach(h),t=V(i),s=E(i,"DIV",{class:!0});var _=w(s);a&&a.l(_),_.forEach(h),this.h()},h(){b(s,"class",c="wrapper "+d[2].color+" svelte-1os88ue")},m(i,n){Y(i,t,n),Y(i,s,n),a&&a.m(s,null),r=!0},p(i,[n]){(!r||n&4)&&e!==(e=i[2].name)&&(document.title=e),i[4]?a?(a.p(i,n),n&16&&F(a,1)):(a=de(i),a.c(),F(a,1),a.m(s,null)):a&&(ee(),L(a,1,1,()=>{a=null}),te()),(!r||n&4&&c!==(c="wrapper "+i[2].color+" svelte-1os88ue"))&&b(s,"class",c)},i(i){r||(F(a),r=!0)},o(i){L(a),r=!1},d(i){i&&h(t),i&&h(s),a&&a.d()}}}function Pe(d,e,t){let s;const c=be();let{form:r}=e,{inputs:a={}}=e,{finished:i=r.screens.length===0}=e,n=0,_=!1;function v(){!_||(t(4,_=!1),setTimeout(()=>{t(3,n+=1),n>=r.screens.length&&(t(1,i=!0),c("submit",a)),t(4,_=!0)},300))}ge(()=>{t(4,_=!0)});function g(l,p){d.$$.not_equal(a[p.fieldKey],l)&&(a[p.fieldKey]=l,t(0,a))}return d.$$set=l=>{"form"in l&&t(2,r=l.form),"inputs"in l&&t(0,a=l.inputs),"finished"in l&&t(1,i=l.finished)},d.$$.update=()=>{var l;d.$$.dirty&12&&t(5,s=(l=r==null?void 0:r.screens)==null?void 0:l[n])},[a,i,r,n,_,s,v,g]}class Ye extends he{constructor(e){super(),pe(this,e,Pe,Ae,ve,{form:2,inputs:0,finished:1})}}export{Ye as R};
