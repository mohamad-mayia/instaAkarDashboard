(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[80],{1261:function(e,t,a){"use strict";a.r(t),function(e){var c=a(121),n=a.n(c),s=a(174),r=a(659),o=a(1),i=a(14),l=a(658),u=(a(660),a(1262),a(176)),j=a(1503),b=a(17);t.default=function(){var t=Object(i.g)(),a=Object(j.a)(),c=Object(r.a)(a,2),d=c[0],O=c[1],g=Object(o.useContext)(u.a).refreshTokenHandler,p=Object(o.useState)(!0),h=Object(r.a)(p,2),m=(h[0],h[1],Object(o.useState)(!1)),f=Object(r.a)(m,2),x=f[0],k=f[1],S=Object(o.useState)(!1),y=Object(r.a)(S,2),v=y[0],w=(y[1],Object(o.useState)(!1)),C=Object(r.a)(w,2),N=(C[0],C[1],Object(o.useState)("")),A=Object(r.a)(N,2),E=A[0],B=A[1],I=Object(o.useState)(!1),U=Object(r.a)(I,2),J=U[0],_=U[1],z=Object(o.useState)(),D=Object(r.a)(z,2),T=(D[0],D[1]),P=Object(o.useState)(1),G=Object(r.a)(P,2),H=G[0],L=(G[1],Object(o.useState)()),q=Object(r.a)(L,2),F=(q[0],q[1],Object(o.useState)()),K=Object(r.a)(F,2),M=(K[0],K[1]),Q=Object(o.useState)(""),R=Object(r.a)(Q,2),V=(R[0],R[1],Object(o.useState)(0)),W=Object(r.a)(V,2),X=W[0],Y=(W[1],localStorage.getItem("token")),Z=(JSON.parse(Y),Object(o.useState)("")),$=Object(r.a)(Z,2),ee=($[0],$[1],Object(o.useState)(10)),te=Object(r.a)(ee,2);te[0],te[1];Object(o.useEffect)(Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(a=function(){var t=Object(s.a)(n.a.mark((function t(c){var s,r,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=JSON.parse(localStorage.getItem("token")),t.prev=1,t.next=4,fetch("".concat(e.apiUrl,"api/categories?is_category=1"),{method:"GET",headers:{Authorization:"Bearer "+s,Accept:"application/json"}});case 4:return r=t.sent,t.next=7,r.json();case 7:if(!(o=t.sent).message||"Unauthenticated."!=o.message){t.next=10;break}return t.abrupt("return",g((function(){a(c)})));case 10:o.message&&"Success"==o.message&&(B(o.payload),ne.id&&se(o.payload.filter((function(e){return e.id==ne.id}))[0])),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}())();case 2:case"end":return t.stop()}}),t)}))),[H,J]);var ae=Object(o.useState)(""),ce=Object(r.a)(ae,2),ne=ce[0],se=ce[1],re=Object(o.useState)([]),oe=Object(r.a)(re,2),ie=(oe[0],oe[1],Object(o.useState)(!1)),le=Object(r.a)(ie,2),ue=(le[0],le[1],Object(o.useState)("")),je=Object(r.a)(ue,2),be=je[0],de=je[1],Oe=function(){var t=Object(s.a)(n.a.mark((function t(){var a,c,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return T(""),M(""),document.getElementById("root").style.opacity=.75,a=JSON.parse(localStorage.getItem("token")),t.prev=4,t.next=7,fetch("".concat(e.apiUrl,"api/categories/").concat(be.id),{method:"DELETE",headers:{Authorization:"Bearer "+a,Accept:"application/json"}});case 7:return c=t.sent,t.next=10,c.json();case 10:if(s=t.sent,console.log("response",s),!s.message||"Unauthenticated."!==s.message){t.next=14;break}return t.abrupt("return",g((function(){Oe()})));case 14:s.message&&"Success"===s.message&&(k(!1),document.getElementById("root").style.opacity=1,_(!J)),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(4),console.log(t.t0);case 20:document.getElementById("root").style.opacity=1;case 21:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)(l.wb,{children:[0==X&&Object(b.jsx)(l.u,{xl:12,children:Object(b.jsxs)(l.j,{children:[Object(b.jsx)(l.n,{children:Object(b.jsxs)(l.wb,{className:" row-gap-15",children:[Object(b.jsx)(l.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:"ar"===O.language?"\u0627\u0644\u062a\u0635\u0646\u064a\u0641\u0627\u062a":"Categories"}),Object(b.jsx)(l.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(b.jsx)(l.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return t.push("/Categories/AddNewCategory")},children:"ar"===O.language?"\u0625\u0636\u0627\u0641\u0629 \u062a\u0635\u0646\u064a\u0641 \u062c\u062f\u064a\u062f":"Add new category"})})]})}),Object(b.jsx)(l.k,{className:"usersTabel",children:E&&Object(b.jsx)(l.y,{items:E,fields:["id",{label:"ar"===O.language?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0628\u064a":"Arabic Name",key:"name_ar"},{label:"ar"===O.language?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a":"English Name",key:"name_en"},{label:"ar"===O.language?"\u0639\u0645\u0644\u064a\u0627\u062a":"Actions",key:"Actions"}],hover:!0,striped:!0,pagination:!0,sorter:!0,itemsPerPage:12,scopedSlots:{Actions:function(e){return Object(b.jsxs)("td",{children:[Object(b.jsxs)(l.b,{className:"p-1 m-1 badg-click",color:"danger",onClick:function(){return function(e){k(!v),de(e)}(e)},children:[" ",d("Delete")]}),Object(b.jsxs)(l.b,{className:"p-1  m-1 badg-click",color:"info",onClick:function(){return t.push("/Categories/Update/".concat(e.id))},children:[d("Update"),"  "]})]})},name_ar:function(e){return Object(b.jsxs)("td",{children:[" ",e.name.ar,"  "]})},name_en:function(e){return Object(b.jsxs)("td",{children:[" ",e.name.en,"  "]})}}})})]})}),Object(b.jsxs)(l.gb,{show:x,onClose:function(){return k(!1)},size:"sm",color:"danger",children:[Object(b.jsx)(l.jb,{closeButton:!0,children:Object(b.jsxs)(l.kb,{children:["ar"===O.language?"\u062d\u0630\u0641 \u062a\u0635\u0646\u064a\u0641":"Delete Category"," "]})}),Object(b.jsx)(l.hb,{children:"".concat("ar"===O.language?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u062d\u0630\u0641 \u062a\u0635\u0646\u064a\u0641":"Are you sure you want to delete the category","   (").concat(be.name&&be.name[O.language],")")}),Object(b.jsxs)(l.ib,{children:[Object(b.jsxs)(l.f,{color:"danger",onClick:function(){return Oe()},children:[d("Delete")," "]})," ",Object(b.jsx)(l.f,{color:"secondary",onClick:function(){return k(!1)},children:d("Cancel")})]})]})]})}}.call(this,a(73))},1262:function(e,t,a){}}]);
//# sourceMappingURL=80.7a867d64.chunk.js.map