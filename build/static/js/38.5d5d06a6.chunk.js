(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[38],{1247:function(e,t,c){"use strict";c.r(t),function(e){var a=c(175),n=c(45),s=c(121),r=c.n(s),l=c(174),i=c(659),o=c(1),j=c.n(o),u=c(658),b=(c(661),c(663),c(1248),c(14)),m=c(1503),d=c(176),h=(c(660),c(17));t.default=function(t){var c=t.match,s=Object(m.a)(),O=Object(i.a)(s,2),p=O[0],x=O[1],g=Object(b.g)(),f=Object(o.useState)(10),k=Object(i.a)(f,2),S=k[0],w=k[1],v=Object(o.useContext)(d.a).refreshTokenHandler,N=Object(o.useState)([]),y=Object(i.a)(N,2),A=(y[0],y[1],Object(o.useState)("")),_=Object(i.a)(A,2),C=_[0],J=_[1],U=Object(o.useState)(),F=Object(i.a)(U,2),B=F[0],E=F[1],I=Object(o.useState)(),T=Object(i.a)(I,2),z=T[0],q=T[1],K=Object(o.useState)(""),D=Object(i.a)(K,2),G=D[0],H=D[1],P=localStorage.getItem("token"),L=(JSON.parse(P),Object(o.useState)("")),M=Object(i.a)(L,2),Q=(M[0],M[1],Object(o.useState)({name_en:"",name_ar:""})),R=Object(i.a)(Q,2),V=R[0],W=R[1],X=V.name_en,Y=V.name_ar;Object(o.useEffect)(Object(l.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(a=function(){var t=Object(l.a)(r.a.mark((function t(c){var n,s,l,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("token")),t.prev=1,t.next=4,fetch("".concat(e.apiUrl,"api/propertySites"),{method:"GET",headers:{Authorization:"Bearer "+n,Accept:"application/json"}});case 4:return(s=t.sent).status,t.next=8,s.json();case 8:if(!(l=t.sent).message||"Unauthenticated."!=l.message){t.next=11;break}return t.abrupt("return",v((function(){a(c)})));case 11:l.message&&"Success"==l.message&&(i=l.payload.filter((function(e){return e.id==c}))[0],W({name_en:i.name.en,name_ar:i.name.ar})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}())(c.params.id);case 2:case"end":return t.stop()}}),t)}))),[C]);var Z=function(e){W(Object(n.a)(Object(n.a)({},V),{},Object(a.a)({},e.target.name,e.target.value))),E(""),q("")},$=function(){var t=Object(l.a)(r.a.mark((function t(a){var n,s,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),H(!0),n=JSON.parse(localStorage.getItem("token")),E(""),q(""),t.prev=5,t.next=8,fetch("".concat(e.apiUrl,"api/propertySites/").concat(c.params.id,"?_method=put"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json","Access-Control-Allow-Origin":"https://localhost:3000","Access-Control-Allow-Credentials":"true",Accept:"application/json"},body:JSON.stringify({name:{ar:Y,en:X}})});case 8:return s=t.sent,t.next=11,s.json();case 11:if(l=t.sent,w(10),"Fail"!==l.message){t.next=18;break}return E(l.error),t.abrupt("return");case 18:if(!l.errors){t.next=22;break}E(l.errors),t.next=24;break;case 22:if(!l.message||"Unauthenticated."!=l.message){t.next=24;break}return t.abrupt("return",v((function(){$(a)})));case 24:l.message&&"Success"==l.message&&(q("ar"===x.language?"\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0645\u064a\u0632\u0629 \u0628\u0646\u062c\u0627\u062d":"Amenity has been Updated successfully"),J(!C)),t.next=30;break;case 27:t.prev=27,t.t0=t.catch(5),console.log(t.t0);case 30:H(!1);case 31:case"end":return t.stop()}}),t,null,[[5,27]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center register-cont",children:Object(h.jsx)(u.w,{children:Object(h.jsxs)(u.j,{className:"",children:[Object(h.jsx)(u.n,{children:Object(h.jsxs)(u.wb,{className:" row-gap-15",children:[Object(h.jsx)(u.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:Object(h.jsxs)("strong",{children:["ar"===x.language?"\u062a\u0639\u062f\u064a\u0644 \u0645\u064a\u0632\u0629":"Update Amenity"," "]})}),Object(h.jsx)(u.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(h.jsx)(u.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return g.goBack()},children:p("Back")})})]})}),Object(h.jsx)(u.wb,{children:Object(h.jsx)(u.u,{xs:"12",sm:"12",md:"12",className:"",children:Object(h.jsx)(u.J,{onSubmit:function(e){$(e)},children:Object(h.jsx)(u.k,{children:Object(h.jsxs)(u.j,{children:[Object(h.jsx)(u.k,{children:Object(h.jsxs)(u.wb,{children:[Object(h.jsxs)(u.u,{md:"12",children:[" ",Object(h.jsxs)("strong",{children:[" ","ar"==x.language?"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u064a\u0632\u0629":"Amenity Information"]})]}),Object(h.jsx)(u.u,{md:"6",lg:"6",xl:"6",children:Object(h.jsxs)(u.K,{row:!0,children:[Object(h.jsx)(u.u,{md:"12",children:Object(h.jsxs)(u.cb,{htmlFor:"text-input",children:[" ",p("English Name")]})}),Object(h.jsx)(u.u,{xs:"12",md:"12",children:Object(h.jsx)(u.S,{name:"name_en",required:!0,onChange:Z,placeholder:p("English Name"),value:V.name_en})})]})}),Object(h.jsx)(u.u,{md:"6",lg:"6",xl:"6",children:Object(h.jsxs)(u.K,{row:!0,children:[Object(h.jsx)(u.u,{md:"12",children:Object(h.jsx)(u.cb,{htmlFor:"text-input",children:p("Arabic Name")})}),Object(h.jsx)(u.u,{xs:"12",md:"12",children:Object(h.jsx)(u.S,{name:"name_ar",required:!0,onChange:Z,placeholder:p("Arabic Name"),value:V.name_ar})})]})})]})}),Object(h.jsx)(u.l,{className:"p-4",children:Object(h.jsxs)(u.wb,{className:"justify-content-center",children:[B&&"object"===typeof B?Object(h.jsx)(u.a,{color:"danger",className:"col-lg-12",children:Object.keys(B).map((function(e,t){return Object(h.jsxs)(j.a.Fragment,{children:[B[e],Object(h.jsx)("br",{})]},t)}))}):null,B&&"string"===typeof B?Object(h.jsxs)(u.a,{color:"danger",className:"col-lg-12",children:[B," "]}):null,z&&Object(h.jsx)(u.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"success",show:S,onShowChange:w,children:z}),Object(h.jsx)(u.u,{md:"6",lg:"6",xl:"6",xs:"12",sm:"12",children:Object(h.jsxs)(u.f,{color:"success",block:!0,type:"submit",children:[p("Save"),"  ",G&&Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsx)("i",{className:"fa fa-spinner fa-spin"})]})," "]})})]})})]})})})})})]})})})}}.call(this,c(73))},1248:function(e,t,c){},661:function(e,t,c){}}]);
//# sourceMappingURL=38.5d5d06a6.chunk.js.map