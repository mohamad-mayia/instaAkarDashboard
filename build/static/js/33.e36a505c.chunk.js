(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[33],{1331:function(e,c,t){"use strict";t.r(c),function(e){var n=t(121),s=t.n(n),a=t(174),l=t(175),r=t(45),j=t(659),i=t(1),o=t(658),b=(t(661),t(663),t(1332),t(14)),d=t(1503),h=(t(660),t(17));c.default=function(){var c=Object(d.a)(),t=Object(j.a)(c,2),n=(t[0],t[1],Object(b.g)()),u=Object(i.useState)(10),O=Object(j.a)(u,2),m=O[0],x=O[1],g=Object(i.useState)([]),p=Object(j.a)(g,2),w=(p[0],p[1],Object(i.useState)("")),f=Object(j.a)(w,2),N=(f[0],f[1],Object(i.useState)()),S=Object(j.a)(N,2),_=S[0],k=S[1],y=Object(i.useState)(),v=Object(j.a)(y,2),A=v[0],C=v[1],F=Object(i.useState)(""),J=Object(j.a)(F,2),T=J[0],q=J[1],B=localStorage.getItem("token"),K=JSON.parse(B),z=Object(i.useState)(""),E=Object(j.a)(z,2),I=(E[0],E[1],Object(i.useState)({name_en:"",name_ar:"",allowed_weight:""})),P=Object(j.a)(I,2),W=P[0],D=P[1],U=W.name_en,G=W.name_ar,H=W.allowed_weight,L=function(e){D(Object(r.a)(Object(r.a)({},W),{},Object(l.a)({},e.target.name,e.target.value))),k(""),C("")},M=function(){var c=Object(a.a)(s.a.mark((function c(t){var n,a;return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t.preventDefault(),q(!0),k(""),C(""),c.prev=4,c.next=7,fetch("".concat(e.apiUrl,"api/packages/addPackageType"),{method:"POST",headers:{Authorization:"Bearer "+K,"Content-Type":"application/json","Access-Control-Allow-Origin":"https://localhost:3000","Access-Control-Allow-Credentials":"true",Accept:"application/json"},body:JSON.stringify({name_en:U,name_ar:G,allowed_weight:H})});case 7:return n=c.sent,c.next=10,n.json();case 10:a=c.sent,x(10),a.success?(x(6),C("New type has been added successfully"),D({name_en:"",name_ar:"",allowed_weight:""})):(x(10),k(a.errors)),c.next=18;break;case 15:c.prev=15,c.t0=c.catch(4),console.log(c.t0);case 18:q(!1);case 19:case"end":return c.stop()}}),c,null,[[4,15]])})));return function(e){return c.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center justify-content-center register-cont",children:Object(h.jsx)(o.w,{children:Object(h.jsxs)(o.j,{className:"",children:[Object(h.jsx)(o.n,{children:Object(h.jsxs)(o.wb,{className:" row-gap-15",children:[Object(h.jsx)(o.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:Object(h.jsx)("strong",{children:"Add New Country"})}),Object(h.jsx)(o.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(h.jsx)(o.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return n.goBack()},children:"Back"})})]})}),Object(h.jsx)(o.wb,{children:Object(h.jsx)(o.u,{xs:"12",sm:"12",md:"12",className:"",children:Object(h.jsx)(o.J,{onSubmit:function(e){M(e)},children:Object(h.jsx)(o.k,{children:Object(h.jsxs)(o.j,{children:[Object(h.jsx)(o.k,{children:Object(h.jsxs)(o.wb,{children:[Object(h.jsxs)(o.u,{md:"12",children:[" ",Object(h.jsx)("strong",{children:" Type Information"})]}),Object(h.jsx)(o.u,{md:"6",lg:"6",xl:"6",children:Object(h.jsxs)(o.K,{row:!0,children:[Object(h.jsx)(o.u,{md:"12",children:Object(h.jsx)(o.cb,{htmlFor:"text-input",children:"English Name"})}),Object(h.jsx)(o.u,{xs:"12",md:"12",children:Object(h.jsx)(o.S,{name:"name_en",required:!0,onChange:L,placeholder:"English Name",value:W.name_en})})]})}),Object(h.jsx)(o.u,{md:"6",lg:"6",xl:"6",children:Object(h.jsxs)(o.K,{row:!0,children:[Object(h.jsx)(o.u,{md:"12",children:Object(h.jsx)(o.cb,{htmlFor:"text-input",children:"Arabic Name"})}),Object(h.jsx)(o.u,{xs:"12",md:"12",children:Object(h.jsx)(o.S,{name:"name_ar",required:!0,onChange:L,placeholder:"Arabic Name ",value:W.name_ar})})]})}),Object(h.jsx)(o.u,{md:"6",lg:"3",xl:"3",children:Object(h.jsxs)(o.K,{row:!0,children:[Object(h.jsx)(o.u,{md:"12",children:Object(h.jsx)(o.cb,{htmlFor:"text-input",children:"Allowed Weight"})}),Object(h.jsx)(o.u,{xs:"12",md:"12",children:Object(h.jsx)(o.S,{name:"allowed_weight",required:!0,type:"float",min:"0",onChange:L,placeholder:"Allowed Weight",value:W.allowed_weight})})]})})]})}),Object(h.jsx)(o.l,{className:"p-4",children:Object(h.jsxs)(o.wb,{className:"justify-content-center",children:[_&&Object(h.jsx)(o.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"danger",show:m,onShowChange:x,children:Object.keys(_).map((function(e,c){return Object(h.jsxs)(h.Fragment,{children:[_[e],Object(h.jsx)("br",{})]})}))}),A&&Object(h.jsx)(o.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"success",show:m,onShowChange:x,children:A}),Object(h.jsx)(o.u,{md:"6",lg:"6",xl:"6",xs:"12",sm:"12",children:Object(h.jsxs)(o.f,{color:"success",block:!0,type:"submit",children:["Save",T&&Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsx)("i",{className:"fa fa-spinner fa-spin"})]})," "]})})]})})]})})})})})]})})})}}.call(this,t(73))},1332:function(e,c,t){},661:function(e,c,t){}}]);
//# sourceMappingURL=33.e36a505c.chunk.js.map