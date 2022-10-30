(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[54],{1175:function(e,c,n){"use strict";n.r(c),function(e){var t=n(121),r=n.n(t),a=n(174),s=n(175),l=n(45),j=n(659),u=n(1),o=n.n(u),i=n(658),b=(n(661),n(663),n(1176),n(14)),d=n(1503),m=n(176),x=(n(660),n(17));c.default=function(){var c=Object(d.a)(),n=Object(j.a)(c,2),t=n[0],O=n[1],h=Object(b.g)(),g=Object(u.useState)(10),p=Object(j.a)(g,2),y=p[0],_=p[1],f=Object(u.useContext)(m.a).refreshTokenHandler,S=Object(u.useState)([]),w=Object(j.a)(S,2),N=(w[0],w[1],Object(u.useState)("")),k=Object(j.a)(N,2),C=(k[0],k[1],Object(u.useState)()),v=Object(j.a)(C,2),A=v[0],F=v[1],J=Object(u.useState)(),q=Object(j.a)(J,2),E=q[0],K=q[1],B=Object(u.useState)(""),I=Object(j.a)(B,2),T=I[0],z=I[1],U=localStorage.getItem("token"),D=(JSON.parse(U),Object(u.useState)("")),H=Object(j.a)(D,2),P=(H[0],H[1],Object(u.useState)({country_name_en:"",country_name_ar:"",currency_name_en:"",currency_name_ar:""})),G=Object(j.a)(P,2),L=G[0],M=G[1],Q=L.country_name_en,R=L.country_name_ar,V=L.currency_name_ar,W=L.currency_name_en,X=function(e){M(Object(l.a)(Object(l.a)({},L),{},Object(s.a)({},e.target.name,e.target.value))),F(""),K("")},Y=function(){var c=Object(a.a)(r.a.mark((function c(n){var t,a,s;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),z(!0),t=JSON.parse(localStorage.getItem("token")),F(""),K(""),c.prev=5,c.next=8,fetch("".concat(e.apiUrl,"api/countries"),{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json","Access-Control-Allow-Origin":"https://localhost:3000","Access-Control-Allow-Credentials":"true",Accept:"application/json"},body:JSON.stringify({name:{ar:R,en:Q},currency:{ar:V,en:W}})});case 8:return a=c.sent,c.next=11,a.json();case 11:if("Fail"!==(s=c.sent).message){c.next=17;break}return F(s.error),c.abrupt("return");case 17:if(!s.errors){c.next=21;break}F(s.errors),c.next=23;break;case 21:if(!s.message||"Unauthenticated."!=s.message){c.next=23;break}return c.abrupt("return",f((function(){Y(n)})));case 23:_(10),s.message&&"Success"==s.message?(_(6),K("ar"===O.language?"\u062a\u0645 \u0627\u0636\u0627\u0641\u0629 \u062f\u0648\u0644\u0629 \u0628\u0646\u062c\u0627\u062d":"New Country Added Successfuly"),M({country_name_en:"",country_name_ar:"",currency_name_en:"",currency_name_ar:""})):(_(10),F(s.errors)),c.next=30;break;case 27:c.prev=27,c.t0=c.catch(5),console.log(c.t0);case 30:z(!1);case 31:case"end":return c.stop()}}),c,null,[[5,27]])})));return function(e){return c.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center justify-content-center register-cont",children:Object(x.jsx)(i.w,{children:Object(x.jsxs)(i.j,{className:"",children:[Object(x.jsx)(i.n,{children:Object(x.jsxs)(i.wb,{className:" row-gap-15",children:[Object(x.jsx)(i.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:Object(x.jsx)("strong",{children:"ar"===O.language?"\u0625\u0636\u0627\u0641\u0629 \u062f\u0648\u0644\u0629 \u062c\u062f\u064a\u062f\u0629":"Add New Country"})}),Object(x.jsx)(i.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(x.jsx)(i.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return h.goBack()},children:t("Back")})})]})}),Object(x.jsx)(i.wb,{children:Object(x.jsx)(i.u,{xs:"12",sm:"12",md:"12",className:"",children:Object(x.jsx)(i.J,{onSubmit:function(e){Y(e)},children:Object(x.jsx)(i.k,{children:Object(x.jsxs)(i.j,{children:[Object(x.jsx)(i.k,{children:Object(x.jsxs)(i.wb,{children:[Object(x.jsxs)(i.u,{md:"12",children:[" ",Object(x.jsx)("strong",{children:t("Country Information")})]}),Object(x.jsx)(i.u,{md:"6",lg:"6",xl:"6",children:Object(x.jsxs)(i.K,{row:!0,children:[Object(x.jsx)(i.u,{md:"12",children:Object(x.jsx)(i.cb,{htmlFor:"text-input",children:t("English Name")})}),Object(x.jsx)(i.u,{xs:"12",md:"12",children:Object(x.jsx)(i.S,{name:"country_name_en",required:!0,onChange:X,placeholder:t("English Name"),value:L.country_name_en})})]})}),Object(x.jsx)(i.u,{md:"6",lg:"6",xl:"6",children:Object(x.jsxs)(i.K,{row:!0,children:[Object(x.jsx)(i.u,{md:"12",children:Object(x.jsx)(i.cb,{htmlFor:"text-input",children:t("Arabic Name")})}),Object(x.jsx)(i.u,{xs:"12",md:"12",children:Object(x.jsx)(i.S,{name:"country_name_ar",required:!0,onChange:X,placeholder:t("Arabic Name"),value:L.country_name_ar})})]})}),Object(x.jsx)(i.u,{md:"6",lg:"6",xl:"6",children:Object(x.jsxs)(i.K,{row:!0,children:[Object(x.jsx)(i.u,{md:"12",children:Object(x.jsx)(i.cb,{htmlFor:"text-input",children:"ar"===O.language?"\u0627\u0644\u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a\u0629":"Currency En"})}),Object(x.jsx)(i.u,{xs:"12",md:"12",children:Object(x.jsx)(i.S,{name:"currency_name_en",required:!0,onChange:X,placeholder:t("ar"===O.language?"\u0627\u0644\u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a\u0629":"Currency En"),value:L.currency_name_en})})]})}),Object(x.jsx)(i.u,{md:"6",lg:"6",xl:"6",children:Object(x.jsxs)(i.K,{row:!0,children:[Object(x.jsx)(i.u,{md:"12",children:Object(x.jsx)(i.cb,{htmlFor:"text-input",children:"ar"===O.language?"\u0627\u0644\u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629":"Currency Ar"})}),Object(x.jsx)(i.u,{xs:"12",md:"12",children:Object(x.jsx)(i.S,{name:"currency_name_ar",required:!0,onChange:X,placeholder:"ar"===O.language?"\u0627\u0644\u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629":"Currency Ar",value:L.currency_name_ar})})]})})]})}),Object(x.jsx)(i.l,{className:"p-4",children:Object(x.jsxs)(i.wb,{className:"justify-content-center",children:[A&&"object"===typeof A?Object(x.jsx)(i.a,{color:"danger",className:"col-lg-12",children:Object.keys(A).map((function(e,c){return Object(x.jsxs)(o.a.Fragment,{children:[A[e],Object(x.jsx)("br",{})]},c)}))}):null,A&&"string"===typeof A?Object(x.jsxs)(i.a,{color:"danger",className:"col-lg-12",children:[A," "]}):null,E&&Object(x.jsx)(i.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"success",show:y,onShowChange:_,children:E}),Object(x.jsx)(i.u,{md:"6",lg:"6",xl:"6",xs:"12",sm:"12",children:Object(x.jsxs)(i.f,{color:"success",block:!0,type:"submit",children:[t("Save"),T&&Object(x.jsxs)(x.Fragment,{children:[" ",Object(x.jsx)("i",{className:"fa fa-spinner fa-spin"})]})," "]})})]})})]})})})})})]})})})}}.call(this,n(73))},1176:function(e,c,n){},661:function(e,c,n){}}]);
//# sourceMappingURL=54.40b4cb63.chunk.js.map