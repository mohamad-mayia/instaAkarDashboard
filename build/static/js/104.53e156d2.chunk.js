(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[104],{1273:function(e,t,c){"use strict";c.r(t),function(e){var a=c(45),n=c(121),s=c.n(n),r=c(174),o=c(659),i=c(1),l=c(14),u=c(658),j=(c(660),c(826),c(17));t.default=function(){var t=Object(l.g)(),c=Object(i.useState)(10),n=Object(o.a)(c,2),b=(n[0],n[1],Object(i.useState)(!1)),O=Object(o.a)(b,2),d=O[0],p=O[1],h=Object(i.useState)(""),f=Object(o.a)(h,2),m=(f[0],f[1],Object(i.useState)([])),x=Object(o.a)(m,2),g=x[0],y=x[1],k=Object(i.useState)(!1),S=Object(o.a)(k,2),v=S[0],w=S[1],E=Object(i.useState)(),A=Object(o.a)(E,2),B=(A[0],A[1]),C=Object(i.useState)(1),I=Object(o.a)(C,2),U=I[0],D=(I[1],Object(i.useState)()),R=Object(o.a)(D,2),T=(R[0],R[1]),_=Object(i.useState)(),z=Object(o.a)(_,2),J=(z[0],z[1]),N=Object(i.useState)(""),q=Object(o.a)(N,2),H=(q[0],q[1],Object(i.useState)(0)),L=Object(o.a)(H,2),M=L[0],P=(L[1],localStorage.getItem("token")),F=JSON.parse(P),G=Object(i.useState)(!1),K=Object(o.a)(G,2),Q=(K[0],K[1],Object(i.useState)({id:"",message:""})),V=Object(o.a)(Q,2),W=(V[0],V[1],Object(i.useState)("contactUs/viewAllContactUsRequests?")),X=Object(o.a)(W,2),Y=X[0];X[1];Object(i.useEffect)(Object(r.a)(s.a.mark((function c(){return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:(function(){var c=Object(r.a)(s.a.mark((function c(n){var r,o,i;return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,fetch("".concat(e.apiUrl,"api/replies"),{method:"GET",headers:{Authorization:"Bearer "+F,Accept:"application/json"}});case 3:return 204==(r=c.sent).status&&(y([]),T()),c.next=7,r.json();case 7:if(o=c.sent,console.log("faqs",o),!o.success){c.next=14;break}return i=[],c.next=13,o.payload.map((function(e,t){i.push(Object(a.a)(Object(a.a)({},e),{},{"\u0627\u0644\u0631\u062f":e.message,"\u0627\u0644\u062a\u0627\u0631\u064a\u062e":e.created_at.slice(0,10)}))}));case 13:y(i);case 14:o.message&&"Unauthenticated."==o.message&&(localStorage.removeItem("token"),localStorage.clear(),t.push("/login")),c.next=20;break;case 17:c.prev=17,c.t0=c.catch(0),console.log(c.t0);case 20:case"end":return c.stop()}}),c,null,[[0,17]])})));return function(e){return c.apply(this,arguments)}})()();case 2:case"end":return c.stop()}}),c)}))),[U,v,Y]);var Z=Object(i.useState)(""),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ce=function(){var t=Object(r.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return B(""),J(""),document.getElementById("root").style.opacity=.75,t.prev=3,t.next=6,fetch("".concat(e.apiUrl,"api/replies/").concat(ee.id),{method:"DELETE",headers:{Authorization:"Bearer "+F,Accept:"application/json"}});case 6:200==t.sent.status&&(p(!d),document.getElementById("root").style.opacity=1,w(!v)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0);case 13:document.getElementById("root").style.opacity=1;case 14:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)(u.wb,{children:[0==M&&Object(j.jsx)(u.u,{xl:12,children:Object(j.jsxs)(u.j,{children:[Object(j.jsx)(u.n,{children:Object(j.jsx)(u.u,{md:"12",children:Object(j.jsx)("strong",{children:"Replys"})})}),Object(j.jsx)(u.k,{className:"usersTabel",children:g.length>0&&Object(j.jsx)(u.y,{items:g,fields:["id","contact_id",{label:"Reply",key:"\u0627\u0644\u0631\u062f"},{label:"History",key:"\u0627\u0644\u062a\u0627\u0631\u064a\u062e"},{label:"Actions",key:"\u0639\u0645\u0644\u064a\u0627\u062a"}],hover:!0,striped:!0,sorter:!0,pagination:!0,itemsPerPage:12,columnFilter:!0,scopedSlots:{"\u0639\u0645\u0644\u064a\u0627\u062a":function(e){return Object(j.jsx)("td",{children:Object(j.jsx)(u.b,{className:"p-1 m-1 badg-click",color:"danger",onClick:function(){return function(e){p(!d),te(e)}(e)},children:" Delete   "})})},"\u0627\u0644\u0631\u062f":function(e){return Object(j.jsx)("td",{dangerouslySetInnerHTML:{__html:e.message}})}}})})]})}),Object(j.jsxs)(u.gb,{show:d,onClose:function(){return p(!d)},size:"sm",color:"danger",children:[Object(j.jsx)(u.jb,{closeButton:!0,children:Object(j.jsx)(u.kb,{children:" Delete Message "})}),Object(j.jsx)(u.hb,{children:"Are you sure you want to delete Reply"}),Object(j.jsxs)(u.ib,{children:[Object(j.jsx)(u.f,{color:"danger",onClick:function(){return ce()},children:"Delete"})," ",Object(j.jsx)(u.f,{color:"secondary",onClick:function(){return p(!d)},children:"Cancel"})]})]})]})}}.call(this,c(73))},826:function(e,t,c){}}]);
//# sourceMappingURL=104.53e156d2.chunk.js.map