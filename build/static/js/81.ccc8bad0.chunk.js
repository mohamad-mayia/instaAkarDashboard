(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[81],{1301:function(e,s,t){"use strict";t.r(s),function(e){var a=t(121),r=t.n(a),c=t(174),n=t(175),o=t(45),l=t(659),i=t(1),d=t.n(i),j=t(658),u=t(531),b=(t(1302),t(176)),p=t(14),h=t(1503),m=(t(660),t(17));s.default=function(){var s=Object(i.useContext)(b.a).refreshTokenHandler,t=Object(h.a)(),a=Object(l.a)(t,2),O=a[0],w=a[1],x=Object(p.g)(),g=Object(i.useState)(10),f=Object(l.a)(g,2),_=f[0],k=f[1],v=Object(i.useState)(),S=Object(l.a)(v,2),N=S[0],C=S[1],y=Object(i.useState)(),F=Object(l.a)(y,2),P=F[0],B=F[1],I=Object(i.useState)(""),J=Object(l.a)(I,2),T=J[0],q=J[1],H=localStorage.getItem("token"),K=(JSON.parse(H),Object(i.useState)({old_password:"",new_password:"",new_password_confirmation:""})),L=Object(l.a)(K,2),z=L[0],A=L[1],D=(z.old_password,z.new_password,z.new_password_confirmation,function(e){C(""),B(""),A(Object(o.a)(Object(o.a)({},z),{},Object(n.a)({},e.target.name,e.target.value)))}),R=function(){var t=Object(c.a)(r.a.mark((function t(a){var c,n,o,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),z.new_password==z.new_password_confirmation||(C("ar"===w.language?"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0648\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u064a\u0646":"Password and confirm password do not match"),k(8),0)){t.next=3;break}return t.abrupt("return");case 3:return"api/passwordReset?_method=put",q(!0),c=JSON.parse(localStorage.getItem("token")),C(""),B(""),(n=new FormData).append("old_password",z.old_password),n.append("new_password",z.new_password),n.append("new_password_confirmation",z.new_password_confirmation),t.prev=12,t.next=15,fetch("".concat(e.apiUrl).concat("api/passwordReset?_method=put"),{method:"POST",headers:{Authorization:"Bearer "+c,Accept:"application/json"},body:n});case 15:return o=t.sent,t.next=18,o.json();case 18:if(l=t.sent,q(!1),k(10),"Fail"!==l.message){t.next=26;break}return C(l.error),t.abrupt("return");case 26:if(!l.errors){t.next=30;break}C(l.errors),t.next=32;break;case 30:if(!l.message||"Unauthenticated."!=l.message){t.next=32;break}return t.abrupt("return",s((function(){R(a)})));case 32:l.message&&200==o.status&&(k(6),B("ar"===w.language?"\u0633\u062c\u0644 \u062f\u062e\u0648\u0644 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629":"Log in with your new password"),r="ar"===w.language?"\u0633\u062c\u0644 \u062f\u062e\u0648\u0644 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062c\u062f\u064a\u062f\u0629":"Log in with your new password",u.b.info(r,{autoClose:4e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,className:"",draggable:!0,colored:!0,progress:void 0}),setTimeout((function(){localStorage.removeItem("token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("id"),x.push("/login")}),4e3)),t.next=38;break;case 35:t.prev=35,t.t0=t.catch(12),console.log(t.t0);case 38:q(!1);case 39:case"end":return t.stop()}var r}),t,null,[[12,35]])})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center register-cont",children:Object(m.jsxs)(j.w,{children:[Object(m.jsx)(u.a,{position:"top-left",autoClose:4e3,hideProgressBar:!0,className:"toast-container",newestOnTop:!0,closeOnClick:!0,rtl:"ar"===w.language,colored:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(m.jsxs)(j.j,{className:"",children:[Object(m.jsx)(j.n,{children:Object(m.jsxs)(j.wb,{className:" row-gap-15",children:[Object(m.jsx)(j.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:Object(m.jsx)("strong",{children:O("Change Password")})}),Object(m.jsx)(j.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(m.jsxs)(j.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return x.goBack()},children:["  ",O("Back")]})})]})}),Object(m.jsx)(j.wb,{children:Object(m.jsx)(j.u,{xs:"12",sm:"12",md:"12",className:"",children:Object(m.jsx)(j.J,{onSubmit:function(e){R(e)},children:Object(m.jsx)(j.k,{children:Object(m.jsxs)(j.j,{children:[Object(m.jsx)(j.k,{children:Object(m.jsxs)(j.wb,{children:[Object(m.jsxs)(j.u,{md:"12",children:[" ",Object(m.jsxs)("strong",{children:[O("Change Password"),"  "]})]}),Object(m.jsx)(j.u,{md:"6",lg:"6",xl:"6",children:Object(m.jsxs)(j.K,{row:!0,children:[Object(m.jsx)(j.u,{md:"12",children:Object(m.jsxs)(j.cb,{htmlFor:"text-input",children:[O("old_password")," "]})}),Object(m.jsx)(j.u,{xs:"12",md:"12",children:Object(m.jsx)(j.S,{name:"old_password",required:!0,onChange:D,placeholder:O("old_password"),value:z.old_password})})]})}),Object(m.jsx)(j.u,{md:"6",lg:"6",xl:"6",children:Object(m.jsxs)(j.K,{row:!0,children:[Object(m.jsx)(j.u,{md:"12",children:Object(m.jsxs)(j.cb,{htmlFor:"text-input",children:[O("new_password")," "]})}),Object(m.jsx)(j.u,{xs:"12",md:"12",children:Object(m.jsx)(j.S,{name:"new_password",required:!0,onChange:D,placeholder:O("new_password"),value:z.new_password})})]})}),Object(m.jsx)(j.u,{md:"6",lg:"6",xl:"6",children:Object(m.jsxs)(j.K,{row:!0,children:[Object(m.jsx)(j.u,{md:"12",children:Object(m.jsx)(j.cb,{htmlFor:"text-input",children:O("new_password_confirmation")})}),Object(m.jsx)(j.u,{xs:"12",md:"12",children:Object(m.jsx)(j.S,{name:"new_password_confirmation",required:!0,onChange:D,placeholder:O("new_password_confirmation"),value:z.new_password_confirmation})})]})})]})}),Object(m.jsx)(j.l,{className:"p-4",children:Object(m.jsxs)(j.wb,{className:"justify-content-center",children:[N&&"object"===typeof N?Object(m.jsx)(j.a,{color:"danger",className:"col-lg-12",children:Object.keys(N).map((function(e,s){return Object(m.jsxs)(d.a.Fragment,{children:[N[e],Object(m.jsx)("br",{})]},s)}))}):null,N&&"string"===typeof N?Object(m.jsxs)(j.a,{color:"danger",className:"col-lg-12",children:[N," "]}):null,P&&Object(m.jsx)(j.a,{className:"col-lg-12    ",color:"success",show:_,onShowChange:k,children:P}),Object(m.jsx)(j.u,{md:"6",lg:"6",xl:"6",xs:"12",sm:"12",children:Object(m.jsxs)(j.f,{color:"success",block:!0,type:"submit",children:[O("Save"),T&&Object(m.jsxs)(m.Fragment,{children:[" ",Object(m.jsx)("i",{className:"fa fa-spinner fa-spin"})]})," "]})})]})})]})})})})})]})]})})}}.call(this,t(73))},1302:function(e,s,t){}}]);
//# sourceMappingURL=81.ccc8bad0.chunk.js.map