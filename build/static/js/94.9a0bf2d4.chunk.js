(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[94],{1217:function(e,t,c){"use strict";c.r(t),function(e){var s=c(121),a=c.n(s),n=c(174),r=c(175),l=c(45),o=c(659),j=c(1),i=c(658),b=(c(661),c(663),c(1218),c(14)),d=c(1503),u=c(907),m=c.n(u),x=c(924),h=(c(660),c(17));t.default=function(){var t=Object(d.a)(),c=Object(o.a)(t,2),s=c[0],u=c[1],O=Object(b.g)(),g=Object(j.useState)(10),p=Object(o.a)(g,2),_=p[0],f=p[1],v=Object(j.useState)([]),w=Object(o.a)(v,2),y=(w[0],w[1],Object(j.useState)("")),N=Object(o.a)(y,2),S=(N[0],N[1],Object(j.useState)()),k=Object(o.a)(S,2),C=k[0],A=k[1],T=Object(j.useState)(),F=Object(o.a)(T,2),P=F[0],J=F[1],K=Object(j.useState)(""),q=Object(o.a)(K,2),B=q[0],D=q[1],R=localStorage.getItem("token"),z=JSON.parse(R),E=Object(j.useState)(""),I=Object(o.a)(E,2),U=(I[0],I[1],Object(j.useState)({name_en:"",name_ar:"",time_to_resolve:"",days_to_resolve:""})),G=Object(o.a)(U,2),H=G[0],L=G[1],M=H.name_en,Q=H.name_ar,V=H.time_to_resolve,W=H.days_to_resolve,X=function(e){L(Object(l.a)(Object(l.a)({},H),{},Object(r.a)({},e.target.name,e.target.value))),A(""),J("")},Y=function(){var t=Object(n.a)(a.a.mark((function t(c){var s,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),D(!0),A(""),J(""),t.prev=4,t.next=7,fetch("".concat(e.apiUrl,"/super/ticketPriorities"),{method:"POST",headers:{Authorization:"Bearer "+z,"Content-Type":"application/json","Access-Control-Allow-Origin":"https://localhost:3000","Access-Control-Allow-Credentials":"true",Accept:"application/json"},body:JSON.stringify({name_en:M,name_ar:Q,time_to_resolve:V,days_to_resolve:W,color:ee})});case 7:return s=t.sent,t.next=10,s.json();case 10:if(n=t.sent,console.log("response",n),console.log(n),f(10),!n.success){t.next=22;break}return t.next=17,f(6);case 17:J("ar"==u.language?"\u062a\u0645\u062a \u0627\u0636\u0627\u0641\u0629 \u0623\u0648\u0644\u0648\u064a\u0629 \u0628\u0646\u062c\u0627\u062d":"New Ticket Priority Added Successfuly"),L({name_en:"",name_ar:"",time_to_resolve:"",days_to_resolve:""}),te("#000"),t.next=24;break;case 22:f(10),A(n.messages);case 24:t.next=29;break;case 26:t.prev=26,t.t0=t.catch(4),console.log(t.t0);case 29:D(!1);case 30:case"end":return t.stop()}}),t,null,[[4,26]])})));return function(e){return t.apply(this,arguments)}}();console.log(H);var Z=Object(j.useState)("#333"),$=Object(o.a)(Z,2),ee=$[0],te=$[1];return Object(h.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center justify-content-center register-cont",children:Object(h.jsx)(i.w,{children:Object(h.jsxs)(i.j,{className:"",children:[Object(h.jsx)(i.n,{children:Object(h.jsxs)(i.wb,{className:" row-gap-15",children:[Object(h.jsx)(i.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:Object(h.jsx)("strong",{children:"ar"==u.language?"\u0625\u0636\u0627\u0641\u0629 \u0623\u0648\u0644\u0648\u064a\u0629 \u0628\u0637\u0627\u0642\u0629 \u062c\u062f\u064a\u062f\u0629":"Add New Ticket Priority"})}),Object(h.jsx)(i.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(h.jsx)(i.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return O.goBack()},children:"ar"==u.language?"\u0631\u062c\u0648\u0639":"Back"})})]})}),Object(h.jsx)(i.wb,{children:Object(h.jsx)(i.u,{xs:"12",sm:"12",md:"12",className:"",children:Object(h.jsx)(i.J,{onSubmit:function(e){Y(e)},children:Object(h.jsx)(i.k,{children:Object(h.jsxs)(i.j,{children:[Object(h.jsx)(i.k,{children:Object(h.jsxs)(i.wb,{children:[Object(h.jsxs)(i.u,{md:"12",children:[" ",Object(h.jsx)("strong",{children:"ar"==u.language?"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0623\u0648\u0644\u0648\u064a\u0629 :":"Priority Informations :"})]}),Object(h.jsx)(i.u,{md:"6",lg:"6",xl:"6",children:Object(h.jsxs)(i.K,{row:!0,children:[Object(h.jsx)(i.u,{md:"12",children:Object(h.jsx)(i.cb,{htmlFor:"text-input",children:"ar"==u.language?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a":"English Name"})}),Object(h.jsx)(i.u,{xs:"12",md:"12",children:Object(h.jsx)(i.S,{name:"name_en",required:!0,onChange:X,placeholder:"ar"==u.language?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a":"English Name",value:H.name_en})})]})}),Object(h.jsx)(i.u,{md:"6",lg:"6",xl:"6",children:Object(h.jsxs)(i.K,{row:!0,children:[Object(h.jsx)(i.u,{md:"12",children:Object(h.jsx)(i.cb,{htmlFor:"text-input",children:"ar"==u.language?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0628\u064a":"Arabic Name"})}),Object(h.jsx)(i.u,{xs:"12",md:"12",children:Object(h.jsx)(i.S,{name:"name_ar",required:!0,className:"arabic-align",onChange:X,placeholder:"ar"==u.language?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0628\u064a":"Arabic Name",value:H.name_ar})})]})}),Object(h.jsx)(i.u,{md:"3",lg:"3",xl:"3",children:Object(h.jsxs)(i.K,{row:!0,children:[Object(h.jsx)(i.u,{md:"12",children:Object(h.jsx)(i.cb,{htmlFor:"text-input",children:"ar"==u.language?"\u0627\u0644\u0632\u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645 \u0644\u0644\u0645\u0639\u0627\u0644\u062c\u0629":"Time To Resolve"})}),Object(h.jsx)(i.u,{xs:"12",md:"12",children:Object(h.jsx)(m.a,{required:!0,name:"time_to_resolve",className:"form-control time_to_resolve ",value:H.time_to_resolve,onChange:X})})]})}),Object(h.jsx)(i.u,{md:"3",lg:"3",xl:"3",children:Object(h.jsxs)(i.K,{row:!0,children:[Object(h.jsx)(i.u,{md:"12",children:Object(h.jsx)(i.cb,{htmlFor:"text-input",children:"ar"==u.language?"\u0627\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u0644\u0645\u0639\u0627\u0644\u062c\u0629":"Days To Resolve"})}),Object(h.jsx)(i.u,{xs:"12",md:"12",children:Object(h.jsx)(i.S,{name:"days_to_resolve",required:!0,type:"number",min:"0",onChange:X,placeholder:"ar"==u.language?"\u0627\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u0644\u0627\u0632\u0645\u0629 \u0644\u0644\u0645\u0639\u0627\u0644\u062c\u0629":"Days To Resolve",value:H.days_to_resolve})})]})}),Object(h.jsx)(i.u,{md:"3",lg:"3",xl:"3",children:Object(h.jsxs)(i.K,{row:!0,children:[Object(h.jsx)(i.u,{md:"12",children:Object(h.jsx)(i.cb,{htmlFor:"text-input",children:"ar"==u.language?"\u0627\u0644\u0644\u0648\u0646":"Color"})}),Object(h.jsx)(i.u,{xs:"12",md:"12",children:Object(h.jsx)(x.a,{value:ee,onChange:function(e){console.log("onChange=",e.hex),te("#"+e.hex)},disablePlainColor:!0})})]})})]})}),Object(h.jsx)(i.l,{className:"p-4",children:Object(h.jsxs)(i.wb,{className:"justify-content-center",children:[C&&Object(h.jsx)(i.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"danger",show:_,onShowChange:f,children:Object.keys(C).map((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[C[e],Object(h.jsx)("br",{})]})}))}),P&&Object(h.jsx)(i.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"success",show:_,onShowChange:f,children:P}),Object(h.jsx)(i.u,{md:"6",lg:"6",xl:"6",xs:"12",sm:"12",children:Object(h.jsxs)(i.f,{color:"success",block:!0,type:"submit",children:[s("Save"),B&&Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsx)("i",{className:"fa fa-spinner fa-spin"})]})," "]})})]})})]})})})})})]})})})}}.call(this,c(73))},1218:function(e,t,c){}}]);
//# sourceMappingURL=94.9a0bf2d4.chunk.js.map