(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[34],{1333:function(e,t,c){"use strict";c.r(t),function(e){var a=c(175),n=c(45),s=c(121),r=c.n(s),l=c(174),i=c(659),o=c(1),j=c(658),u=(c(661),c(663),c(1334),c(14)),b=c(1503),d=(c(660),c(17));t.default=function(t){var c=t.match,s=Object(b.a)(),h=Object(i.a)(s,2),m=(h[0],h[1]),x=Object(u.g)(),O=Object(o.useState)(10),p=Object(i.a)(O,2),g=p[0],f=p[1],w=Object(o.useState)([]),k=Object(i.a)(w,2),_=(k[0],k[1],Object(o.useState)("")),v=Object(i.a)(_,2),y=v[0],S=v[1],N=Object(o.useState)(),A=Object(i.a)(N,2),C=A[0],T=A[1],F=Object(o.useState)(),J=Object(i.a)(F,2),B=J[0],E=J[1],q=Object(o.useState)(""),z=Object(i.a)(q,2),I=z[0],K=z[1],U=localStorage.getItem("token"),D=JSON.parse(U),P=Object(o.useState)(""),W=Object(i.a)(P,2),G=(W[0],W[1],Object(o.useState)({name_en:"",name_ar:"",allowed_weight:""})),H=Object(i.a)(G,2),L=H[0],M=H[1],Q=L.name_en,R=L.name_ar,V=L.allowed_weight;Object(o.useEffect)(Object(l.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(function(){var t=Object(l.a)(r.a.mark((function t(c){var a,n,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"api/shipping/packageTypes"),{method:"GET",headers:{Authorization:"Bearer "+D,Accept:"application/json"}});case 3:return(a=t.sent).status,t.next=7,a.json();case 7:1==(n=t.sent).success&&(s=n.payload.filter((function(e){return e.id==c}))[0])&&M({name_en:s.name_en,name_ar:s.name_ar,allowed_weight:s.allowed_weight}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}})()(c.params.id);case 2:case"end":return t.stop()}}),t)}))),[y]);var X=function(e){M(Object(n.a)(Object(n.a)({},L),{},Object(a.a)({},e.target.name,e.target.value))),T(""),E("")},Y=function(){var t=Object(l.a)(r.a.mark((function t(a){var n,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),K(!0),T(""),E(""),t.prev=4,t.next=7,fetch("".concat(e.apiUrl,"api/packages/updatePackageType"),{method:"POST",headers:{Authorization:"Bearer "+D,"Content-Type":"application/json","Access-Control-Allow-Origin":"https://localhost:3000","Access-Control-Allow-Credentials":"true",Accept:"application/json"},body:JSON.stringify({name_en:Q,name_ar:R,allowed_weight:V,package_type_ID:c.params.id})});case 7:return n=t.sent,t.next=10,n.json();case 10:if(s=t.sent,f(10),!s.success){t.next=19;break}return t.next=15,f(6);case 15:E("Type has been edited successfully"),S(!y),t.next=21;break;case 19:f(10),T(s.errors);case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(4),console.log(t.t0);case 26:K(!1);case 27:case"end":return t.stop()}}),t,null,[[4,23]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center register-cont",children:Object(d.jsx)(j.w,{children:Object(d.jsxs)(j.j,{className:"",children:[Object(d.jsx)(j.n,{children:Object(d.jsxs)(j.wb,{className:" row-gap-15",children:[Object(d.jsx)(j.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:Object(d.jsx)("strong",{children:"ar"==m.language?"\u062a\u0639\u062f\u064a\u0644 \u0646\u0648\u0639":"Update Type"})}),Object(d.jsx)(j.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(d.jsx)(j.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return x.goBack()},children:"ar"==m.language?"\u0631\u062c\u0648\u0639":"Back"})})]})}),Object(d.jsx)(j.wb,{children:Object(d.jsx)(j.u,{xs:"12",sm:"12",md:"12",className:"",children:Object(d.jsx)(j.J,{onSubmit:function(e){Y(e)},children:Object(d.jsx)(j.k,{children:Object(d.jsxs)(j.j,{children:[Object(d.jsx)(j.k,{children:Object(d.jsxs)(j.wb,{children:[Object(d.jsxs)(j.u,{md:"12",children:[" ",Object(d.jsx)("strong",{children:"Type Information "})]}),Object(d.jsx)(j.u,{md:"6",lg:"6",xl:"6",children:Object(d.jsxs)(j.K,{row:!0,children:[Object(d.jsx)(j.u,{md:"12",children:Object(d.jsx)(j.cb,{htmlFor:"text-input",children:"English Name"})}),Object(d.jsx)(j.u,{xs:"12",md:"12",children:Object(d.jsx)(j.S,{name:"name_en",required:!0,onChange:X,placeholder:"English Name",value:L.name_en})})]})}),Object(d.jsx)(j.u,{md:"6",lg:"6",xl:"6",children:Object(d.jsxs)(j.K,{row:!0,children:[Object(d.jsx)(j.u,{md:"12",children:Object(d.jsx)(j.cb,{htmlFor:"text-input",children:"Arabic Name"})}),Object(d.jsx)(j.u,{xs:"12",md:"12",children:Object(d.jsx)(j.S,{name:"name_ar",required:!0,onChange:X,placeholder:"Arabic Name",value:L.name_ar})})]})}),Object(d.jsx)(j.u,{md:"6",lg:"3",xl:"3",children:Object(d.jsxs)(j.K,{row:!0,children:[Object(d.jsx)(j.u,{md:"12",children:Object(d.jsx)(j.cb,{htmlFor:"text-input",children:"Allowed Weight"})}),Object(d.jsx)(j.u,{xs:"12",md:"12",children:Object(d.jsx)(j.S,{name:"allowed_weight",required:!0,type:"float",min:"0",onChange:X,placeholder:"Allowed Weight",value:L.allowed_weight})})]})})]})}),Object(d.jsx)(j.l,{className:"p-4",children:Object(d.jsxs)(j.wb,{className:"justify-content-center",children:[C&&Object(d.jsx)(j.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"danger",show:g,onShowChange:f,children:Object.keys(C).map((function(e,t){return Object(d.jsxs)(d.Fragment,{children:[C[e],Object(d.jsx)("br",{})]})}))}),B&&Object(d.jsx)(j.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"success",show:g,onShowChange:f,children:B}),Object(d.jsx)(j.u,{md:"6",lg:"6",xl:"6",xs:"12",sm:"12",children:Object(d.jsxs)(j.f,{color:"success",block:!0,type:"submit",children:["Save",I&&Object(d.jsxs)(d.Fragment,{children:[" ",Object(d.jsx)("i",{className:"fa fa-spinner fa-spin"})]})," "]})})]})})]})})})})})]})})})}}.call(this,c(73))},1334:function(e,t,c){},661:function(e,t,c){}}]);
//# sourceMappingURL=34.e6cce598.chunk.js.map