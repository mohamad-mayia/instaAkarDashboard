(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[148],{532:function(e,t,c){"use strict";c.r(t),function(e){var a=c(121),n=c.n(a),s=c(174),r=c(659),l=c(1),o=c.n(l),i=c(658),j=c(531),u=c(14),b=c(663),d=(c(660),c(1503)),p=c(850),O=c(17);t.default=function(){var t=Object(d.a)(),c=Object(r.a)(t,2),a=c[0],x=c[1],h=Object(u.g)(),m=Object(l.useState)(10),f=Object(r.a)(m,2),g=(f[0],f[1]),y=Object(l.useState)(""),k=Object(r.a)(y,2),w=k[0],S=k[1],N=Object(l.useState)(""),v=Object(r.a)(N,2),C=v[0],F=v[1],P=Object(l.useState)(""),J=Object(r.a)(P,2),L=(J[0],J[1],Object(l.useState)("")),I=Object(r.a)(L,2),T=I[0],E=I[1],A=Object(l.useState)(),D=Object(r.a)(A,2),U=D[0],Y=D[1],B=Object(l.useState)(""),V=Object(r.a)(B,2),X=V[0],_=V[1],q=localStorage.getItem("token"),G=(JSON.parse(q),Object(l.useState)()),W=Object(r.a)(G,2),H=W[0],z=W[1],K=Object(l.useState)(),M=Object(r.a)(K,2),Q=M[0],R=M[1],Z=Object(l.useState)(0),$=Object(r.a)(Z,2),ee=$[0],te=$[1];Object(l.useEffect)((function(){(q||X)&&h.push("/")}),[X]);var ce=function(e){x.changeLanguage(e)},ae=function(){var t=Object(s.a)(n.a.mark((function t(c){var a,s,r,l;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Y(""),z(""),R(""),c.preventDefault(),a=new FormData,C&&a.append("email",C),a.append("password",w),a.append("remember_me",1),s={method:"POST",headers:{Accept:"application/json"},body:a},t.prev=9,t.next=12,fetch("".concat(e.apiUrl,"api/login"),s);case 12:return r=t.sent,g(10),t.next=16,r.json();case 16:if("Fail"!==(l=t.sent).message){t.next=22;break}return Y(l.error),t.abrupt("return");case 22:l.errors?Y(l.errors):"Success"===l.message&&1==l.payload.roles[0].id&&(Y(""),new Promise((function(e){localStorage.setItem("token",JSON.stringify(l.payload.token)),localStorage.setItem("refresh_token",JSON.stringify(l.payload.refresh_token)),localStorage.setItem("id",JSON.stringify(l.payload.id)),e(!0)})).then((function(e){_(!0)})));case 23:t.next=28;break;case 25:t.prev=25,t.t0=t.catch(9),console.log(t.t0);case 28:case"end":return t.stop()}}),t,null,[[9,25]])})));return function(e){return t.apply(this,arguments)}}(),ne=function(){var t=Object(s.a)(n.a.mark((function t(c){var s,r,l,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Y(""),z(""),R(""),c.preventDefault(),(s=new FormData).append("email",T),r={method:"POST",headers:{Accept:"application/json"},body:s},t.prev=7,t.next=10,fetch("".concat(e.apiUrl,"api/forgotPassword"),r);case 10:return l=t.sent,g(10),200==l.status&&(z(a("Please check your email!")),R(a("Click Back To Login With New Password"))),t.next=15,l.json();case 15:if("Fail"!==(o=t.sent).message){t.next=21;break}return Y(o.error),t.abrupt("return");case 21:o.errors&&Y(o.errors);case 22:t.next=27;break;case 24:t.prev=24,t.t0=t.catch(7),console.log(t.t0);case 27:case"end":return t.stop()}}),t,null,[[7,24]])})));return function(e){return t.apply(this,arguments)}}(),se=function(e){Y(""),te(e),z(""),R(""),E("")};return Object(O.jsxs)("div",{className:"c-app c-default-layout flex-row align-items-center",children:["ar"==x.language&&Object(O.jsx)(p.a,{children:Object(O.jsx)("link",{rel:"stylesheet",type:"text/css",href:"/assets/arabicStyle/arabicStyle.css"})}),Object(O.jsxs)(i.w,{children:[Object(O.jsx)(j.a,{position:"top-left",autoClose:4e3,hideProgressBar:!0,className:"toast-container",newestOnTop:!0,closeOnClick:!0,rtl:"ar"===x.language,colored:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),0==ee?Object(O.jsx)(i.wb,{className:"justify-content-center",children:Object(O.jsx)(i.u,{md:"6",children:Object(O.jsx)(i.m,{children:Object(O.jsx)(i.j,{className:"p-4",children:Object(O.jsx)(i.k,{children:Object(O.jsxs)(i.J,{onSubmit:function(e){ae(e)},children:[Object(O.jsx)("h1",{children:"ar"==x.language?"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644":"LOGIN"}),Object(O.jsx)("p",{className:"text-muted",children:"ar"==x.language?"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0627\u0644\u0649 \u062d\u0633\u0627\u0628\u0643":"Login To Your Account"}),U&&"object"===typeof U?Object(O.jsx)(i.a,{color:"danger",children:Object.keys(U).map((function(e,t){return Object(O.jsxs)(o.a.Fragment,{children:[U[e],Object(O.jsx)("br",{})]},t)}))}):null,U&&"string"===typeof U?Object(O.jsxs)(i.a,{color:"danger",children:[U," "]}):null,Object(O.jsxs)(i.V,{className:"mb-3",children:[Object(O.jsx)(i.X,{children:Object(O.jsx)(i.Y,{children:Object(O.jsx)(b.a,{name:"cil-user"})})}),Object(O.jsx)(i.S,{type:"email",placeholder:a("Email"),autoComplete:"email",name:"Username/Email",value:C,onChange:function(e){return F(e.target.value)}})]}),Object(O.jsxs)(i.V,{className:"mb-4",children:[Object(O.jsx)(i.X,{children:Object(O.jsx)(i.Y,{children:Object(O.jsx)(b.a,{name:"cil-lock-locked"})})}),Object(O.jsx)(i.S,{required:!0,type:"password",placeholder:a("Password"),autoComplete:"current-password",name:"Password",value:w,onChange:function(e){return S(e.target.value)}})]}),Object(O.jsxs)(i.wb,{children:[Object(O.jsx)(i.u,{xs:"12",className:"text-end",children:Object(O.jsx)("a",{color:"link",type:"button",className:"px-0",onClick:function(){se(1)},children:a("Forgot password")})}),Object(O.jsx)(i.u,{xs:"6",children:Object(O.jsx)(i.f,{color:"primary",type:"submit",className:"px-4",children:"ar"==x.language?"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644":"LOGIN"})}),Object(O.jsx)(i.u,{xs:"6",className:"text-end",children:"ar"==x.language?Object(O.jsx)(i.f,{color:"link",type:"button",className:"px-0",onClick:function(){ce("en")},children:a("English")}):Object(O.jsx)(i.f,{color:"link",type:"button",className:"px-0",onClick:function(){ce("ar")},children:a("Arabic")})})]})]})})})})})}):Object(O.jsx)(i.wb,{className:"justify-content-center",children:Object(O.jsx)(i.u,{md:"6",children:Object(O.jsx)(i.m,{children:Object(O.jsx)(i.j,{className:"p-4",children:Object(O.jsx)(i.k,{children:Object(O.jsxs)(i.J,{onSubmit:function(e){ne(e)},autocomplete:"off",children:[Object(O.jsx)("h1",{children:a("Forgot password")}),Object(O.jsx)("p",{className:"text-muted",children:"ar"===x.language?"\u0633\u064a\u062a\u0645 \u0627\u0631\u0633\u0627\u0644 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062c\u062f\u064a\u062f\u0629 \u0627\u0644\u0649 \u0628\u0631\u064a\u062f\u0643 \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a":"We will send a new password to your email"}),U&&"object"===typeof U?Object(O.jsx)(i.a,{color:"danger",children:Object.keys(U).map((function(e,t){return Object(O.jsxs)(o.a.Fragment,{children:[U[e],Object(O.jsx)("br",{})]},t)}))}):null,U&&"string"===typeof U?Object(O.jsxs)(i.a,{color:"danger",children:[U," "]}):null,H&&Object(O.jsxs)(i.a,{color:"success",children:[H,Object(O.jsx)("br",{}),Q]}),Object(O.jsxs)(i.V,{className:"mb-3",autoComplete:"new-off",children:[Object(O.jsx)(i.X,{children:Object(O.jsx)(i.Y,{children:Object(O.jsx)(b.a,{name:"cil-user"})})}),Object(O.jsx)(i.S,{required:!0,type:"email",placeholder:a("Email"),autocomplete:"off",role:"presentation",value:T,onChange:function(e){return E(e.target.value)}})]}),Object(O.jsxs)(i.wb,{children:[Object(O.jsx)(i.u,{xs:"6",children:Object(O.jsx)(i.f,{color:"primary",type:"submit",className:"px-4",children:a("Send")})}),Object(O.jsx)(i.u,{xs:"6",className:"text-end",children:Object(O.jsx)("a",{color:"link",className:"px-0",type:"button",onClick:function(){return se(0)},children:"ar"===x.language?"\u0639\u0648\u062f\u0629 \u0627\u0644\u0649 \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644":"Back To Login"})})]})]})})})})})})]})]})}}.call(this,c(73))},660:function(e,t,c){(function(e){e.apiUrl="https://uot.sge.mybluehost.me/"}).call(this,c(73))}}]);
//# sourceMappingURL=148.ced63b28.chunk.js.map