(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[101],{1119:function(e,s,c){"use strict";c.r(s),function(e){var a=c(121),t=c.n(a),n=c(174),r=c(175),l=c(45),j=c(659),o=c(1),d=c(658),i=(c(661),c(666)),m=c(663),b=(c(1120),c(660),c(17));s.default=function(){var s=Object(o.useState)(),c=Object(j.a)(s,2),a=c[0],p=c[1],x=Object(o.useState)(),h=Object(j.a)(x,2),O=h[0],u=h[1],f=Object(o.useState)(),g=Object(j.a)(f,2),w=g[0],N=g[1],_=Object(o.useState)(),S=Object(j.a)(_,2),y=S[0],k=S[1],C=Object(o.useState)(""),v=Object(j.a)(C,2),V=v[0],X=v[1],Y=localStorage.getItem("token"),q=JSON.parse(Y),A=Object(o.useState)({first_name:"",middle_name:"",last_name:"",email:"",phone:"",address:"",postal_code:"",password:"",password_confirmation:""}),P=Object(j.a)(A,2),F=P[0],J=P[1],D=F.first_name,R=F.middle_name,z=F.last_name,B=F.email,E=(F.phone,F.address),I=F.postal_code,L=F.password,M=F.password_confirmation,T=function(e){J(Object(l.a)(Object(l.a)({},F),{},Object(r.a)({},e.target.name,e.target.value))),N(""),u(""),k("")},U=function(){var s=Object(n.a)(t.a.mark((function s(c){var n,r,l;return t.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(c.preventDefault(),X(!0),N(""),u(""),k(""),L===M){s.next=9;break}N(!0),s.next=34;break;case 9:return(n=new FormData).append("first_name",D),n.append("middle_name",R),n.append("last_name",z),n.append("address",E),n.append("postal_code",I),n.append("phone",a),n.append("email",B),n.append("password",L),n.append("password_confirmation",M),s.prev=19,s.next=22,fetch("".concat(e.apiUrl,"/users/adminRegister"),{method:"POST",headers:{Authorization:"Bearer "+q,Accept:"application/json"},body:n});case 22:return r=s.sent,s.next=25,r.json();case 25:l=s.sent,console.log("response",l),console.log(l),l.message&&"Admin user created successfully!"==l.message?k("Admin user created successfully!"):u(l.errors),s.next=34;break;case 31:s.prev=31,s.t0=s.catch(19),console.log(s.t0);case 34:X(!1);case 35:case"end":return s.stop()}}),s,null,[[19,31]])})));return function(e){return s.apply(this,arguments)}}();return console.log("adminregister",F),console.log("adminregister",a),Object(b.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center register-cont",children:Object(b.jsx)(d.w,{children:Object(b.jsx)(d.J,{onSubmit:function(e){U(e)},children:Object(b.jsxs)(d.j,{className:"",children:[Object(b.jsxs)(d.k,{className:"p-4",children:[Object(b.jsx)("h1",{children:"Register"}),Object(b.jsx)("p",{className:"text-muted",children:"Create admin account"}),Object(b.jsxs)(d.wb,{className:"justify-content-center",children:[Object(b.jsxs)(d.u,{md:"6",lg:"6",xl:"6",children:[Object(b.jsxs)(d.V,{className:"mb-3",children:[Object(b.jsx)(d.X,{children:Object(b.jsx)(d.Y,{children:Object(b.jsx)(m.a,{name:"cil-user"})})}),Object(b.jsx)(d.S,{onChange:T,name:"first_name",type:"text",placeholder:"*First Name",required:!0})]}),Object(b.jsxs)(d.V,{className:"mb-3",children:[Object(b.jsx)(d.X,{children:Object(b.jsx)(d.Y,{children:Object(b.jsx)(m.a,{name:"cil-user"})})}),Object(b.jsx)(d.S,{onChange:T,name:"middle_name",type:"text",placeholder:"Middle Name"})]}),Object(b.jsxs)(d.V,{className:"mb-3",children:[Object(b.jsx)(d.X,{children:Object(b.jsx)(d.Y,{children:Object(b.jsx)(m.a,{name:"cil-user"})})}),Object(b.jsx)(d.S,{onChange:T,name:"last_name",type:"text",placeholder:"*Last Name",required:!0})]}),Object(b.jsxs)(d.V,{className:"mb-3",children:[Object(b.jsx)(d.X,{children:Object(b.jsx)(d.Y,{children:"@"})}),Object(b.jsx)(d.S,{onChange:T,name:"email",type:"email",placeholder:"*Email",autoComplete:"email",required:!0})]}),Object(b.jsxs)(d.V,{className:"mb-3",children:[Object(b.jsx)(d.X,{children:Object(b.jsxs)(d.Y,{children:[" ",Object(b.jsx)(m.a,{name:"cil-phone"})]})}),Object(b.jsx)(i.a,{className:"form-control",required:!0,name:"phone",placeholder:"Phone Number",value:a,onChange:p})]})]}),Object(b.jsxs)(d.u,{md:"6",lg:"6",xl:"6",children:[Object(b.jsxs)(d.V,{className:"mb-3",children:[Object(b.jsx)(d.X,{children:Object(b.jsx)(d.Y,{children:Object(b.jsx)(m.a,{name:"cil-location-pin"})})}),Object(b.jsx)(d.S,{onChange:T,name:"address",type:"text",placeholder:"*Address",required:!0})]}),Object(b.jsxs)(d.V,{className:"mb-3",children:[Object(b.jsx)(d.X,{children:Object(b.jsx)(d.Y,{children:"P"})}),Object(b.jsx)(d.S,{onChange:T,name:"postal_code",type:"text",placeholder:"*Postal Code",required:!0})]}),Object(b.jsxs)(d.V,{className:"mb-3",children:[Object(b.jsx)(d.X,{children:Object(b.jsx)(d.Y,{children:Object(b.jsx)(m.a,{name:"cil-lock-locked"})})}),Object(b.jsx)(d.S,{onChange:T,name:"password",type:"password",placeholder:"Password",required:!0,autoComplete:"new-password"})]}),Object(b.jsxs)(d.V,{className:"mb-4",children:[Object(b.jsx)(d.X,{children:Object(b.jsx)(d.Y,{children:Object(b.jsx)(m.a,{name:"cil-lock-locked"})})}),Object(b.jsx)(d.S,{onChange:T,name:"password_confirmation",type:"password",placeholder:"Confirm password",required:!0,autoComplete:"new-password"})]})]})]})]}),Object(b.jsx)(d.l,{className:"p-4",children:Object(b.jsxs)(d.wb,{className:"justify-content-center",children:[w&&Object(b.jsx)(d.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"danger",children:"Password and confirm password do not match"}),O&&Object(b.jsx)(d.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"danger",children:Object.keys(O).map((function(e,s){return Object(b.jsxs)(b.Fragment,{children:[O[e],Object(b.jsx)("br",{})]})}))}),y&&Object(b.jsx)(d.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"success",children:y}),Object(b.jsx)(d.u,{md:"6",lg:"6",xl:"6",xs:"12",sm:"12",children:Object(b.jsxs)(d.f,{color:"success",block:!0,type:"submit",children:["Create Account",V&&Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("i",{className:"fa fa-spinner fa-spin"})]})," "]})})]})})]})})})})}}.call(this,c(73))},1120:function(e,s,c){}}]);
//# sourceMappingURL=101.88076ade.chunk.js.map