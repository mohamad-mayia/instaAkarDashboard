(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[93],{1267:function(e,t,a){"use strict";a.r(t),function(e){var c=a(121),n=a.n(c),r=a(174),s=a(659),o=a(1),i=a(14),l=a(658),u=(a(660),a(1268),a(176)),j=a(1503),b=a(17);t.default=function(){var t=Object(i.g)(),a=Object(j.a)(),c=Object(s.a)(a,2),d=c[0],g=c[1],p=Object(o.useContext)(u.a).refreshTokenHandler,h=Object(o.useState)(!1),O=Object(s.a)(h,2),m=O[0],x=O[1],f=Object(o.useState)(""),k=Object(s.a)(f,2),v=k[0],y=k[1],S=Object(o.useState)([]),w=Object(s.a)(S,2),N=w[0],A=w[1],C=Object(o.useState)(""),T=Object(s.a)(C,2),E=T[0],U=T[1],_=Object(o.useState)(!1),B=Object(s.a)(_,2),I=(B[0],B[1],Object(o.useState)()),z=Object(s.a)(I,2),J=(z[0],z[1]),D=Object(o.useState)(1),G=Object(s.a)(D,2),P=(G[0],G[1],Object(o.useState)()),F=Object(s.a)(P,2),H=(F[0],F[1]),K=Object(o.useState)(""),L=Object(s.a)(K,2),q=(L[0],L[1],Object(o.useState)(0)),M=Object(s.a)(q,2),Q=M[0],R=(M[1],localStorage.getItem("token")),V=(JSON.parse(R),Object(o.useState)(10)),W=Object(s.a)(V,2);W[0],W[1];Object(o.useEffect)(Object(r.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(a=function(){var t=Object(r.a)(n.a.mark((function t(c){var r,s,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.parse(localStorage.getItem("token")),t.prev=1,t.next=4,fetch("".concat(e.apiUrl,"api/categories?is_category=1"),{method:"GET",headers:{Authorization:"Bearer "+r,Accept:"application/json"}});case 4:return s=t.sent,t.next=7,s.json();case 7:if(!(o=t.sent).message||"Unauthenticated."!=o.message){t.next=10;break}return t.abrupt("return",p((function(){a(c)})));case 10:o.message&&"Success"==o.message&&U(o.payload),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}())();case 2:case"end":return t.stop()}}),t)}))),[]);var X=Object(o.useState)(""),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1],ee=function(){var t=Object(r.a)(n.a.mark((function t(){var a,c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return J(""),H(""),document.getElementById("root").style.opacity=.75,a=JSON.parse(localStorage.getItem("token")),t.prev=4,t.next=7,fetch("".concat(e.apiUrl,"api/categories/").concat(Z.id),{method:"DELETE",headers:{Authorization:"Bearer "+a,Accept:"application/json"}});case 7:return c=t.sent,t.next=10,c.json();case 10:if(r=t.sent,console.log("response",r),!r.message||"Unauthenticated."!==r.message){t.next=14;break}return t.abrupt("return",p((function(){ee()})));case 14:r.message&&"Success"===r.message&&(x(!1),document.getElementById("root").style.opacity=1,ae(v)),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(4),console.log(t.t0);case 20:document.getElementById("root").style.opacity=1;case 21:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(){return t.apply(this,arguments)}}(),te=function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(t),t?ae(t):A([]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var t=Object(r.a)(n.a.mark((function t(a){var c,r,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=JSON.parse(localStorage.getItem("token")),t.prev=1,t.next=4,fetch("".concat(e.apiUrl,"api/categories?is_category=0").concat("all"==a?"":"&category_id=".concat("not"==a?"":a)),{method:"GET",headers:{Authorization:"Bearer "+c,Accept:"application/json"}});case 4:return 204==(r=t.sent).status&&A([]),t.next=8,r.json();case 8:if(!(s=t.sent).message||"Unauthenticated."!=s.message){t.next=11;break}return t.abrupt("return",p((function(){ae(a)})));case 11:s.message&&"Success"==s.message&&A(s.payload),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)(l.wb,{children:[0==Q&&Object(b.jsx)(l.u,{xl:12,children:Object(b.jsxs)(l.j,{children:[Object(b.jsx)(l.n,{children:Object(b.jsxs)(l.wb,{className:" row-gap-15",children:[Object(b.jsx)(l.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:"ar"===g.language?"\u0627\u0644\u0648\u0633\u0648\u0645":"Tags"}),Object(b.jsx)(l.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(b.jsx)(l.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return t.push("/Tags/AddNewTag")},children:"ar"===g.language?"\u0625\u0636\u0627\u0641\u0629 \u0648\u0633\u0645 \u062c\u062f\u064a\u062f":"Add New Tag"})}),Object(b.jsx)(l.u,{md:"5",children:Object(b.jsxs)(l.K,{row:!0,children:[Object(b.jsx)(l.u,{md:"12",children:Object(b.jsxs)(l.cb,{htmlFor:"text-input",children:["   ",d("Category")]})}),Object(b.jsx)(l.u,{xs:"12",md:"12",children:Object(b.jsxs)(l.xb,{custom:!0,name:"category_id",value:v,onChange:function(e){return te(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:d("Select Category")}),Object(b.jsx)("option",{value:"all",children:d("All")}),E.length>0&&E.map((function(e){return Object(b.jsxs)("option",{value:e.id,children:["  ",e.name[g.language],"   "]},e.id)})),Object(b.jsx)("option",{value:"not",children:d("Uncategorized")})]})})]})})]})}),Object(b.jsxs)(l.k,{className:"usersTabel",children:[!v&&Object(b.jsx)(l.wb,{children:Object(b.jsx)(l.u,{md:"12",children:Object(b.jsx)(l.a,{className:"col-lg-12 ",color:"warning",children:"ar"==g.language?"\u0627\u062e\u062a\u0631 \u062a\u0635\u0646\u064a\u0641 \u0644\u0639\u0631\u0636 \u0627\u0644\u0648\u0633\u0648\u0645 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0647":"Select a category to view its tags"})})}),N&&v&&Object(b.jsx)(l.y,{items:N,fields:["id",{label:"ar"===g.language?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0628\u064a":"Arabic Name",key:"name_ar"},{label:"ar"===g.language?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a":"English Name",key:"name_en"},{label:"ar"===g.language?"\u0639\u0645\u0644\u064a\u0627\u062a":"Actions",key:"Actions"}],hover:!0,striped:!0,pagination:!0,sorter:!0,itemsPerPage:12,scopedSlots:{Actions:function(e){return Object(b.jsxs)("td",{children:[Object(b.jsxs)(l.b,{className:"p-1 m-1 badg-click",color:"danger",onClick:function(){return function(e){x(!0),$(e)}(e)},children:[" ",d("Delete")]}),Object(b.jsxs)(l.b,{className:"p-1  m-1 badg-click",color:"info",onClick:function(){return t.push("/Tags/Update/".concat(e.id))},children:[d("Update"),"  "]})]})},name_ar:function(e){return Object(b.jsxs)("td",{children:[" ",e.name.ar,"  "]})},name_en:function(e){return Object(b.jsxs)("td",{children:[" ",e.name.en,"  "]})}}})]})]})}),Object(b.jsxs)(l.gb,{show:m,onClose:function(){return x(!1)},size:"sm",color:"danger",children:[Object(b.jsx)(l.jb,{closeButton:!0,children:Object(b.jsxs)(l.kb,{children:["ar"===g.language?"\u062d\u0630\u0641 \u0648\u0633\u0645":"Delete Tag"," "]})}),Object(b.jsx)(l.hb,{children:"".concat("ar"===g.language?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u062d\u0630\u0641 \u0648\u0633\u0645":"Are you sure you want to delete the tag","   (").concat(Z.name&&Z.name[g.language],")")}),Object(b.jsxs)(l.ib,{children:[Object(b.jsxs)(l.f,{color:"danger",onClick:function(){return ee()},children:[d("Delete")," "]})," ",Object(b.jsx)(l.f,{color:"secondary",onClick:function(){return x(!1)},children:d("Cancel")})]})]})]})}}.call(this,a(73))},1268:function(e,t,a){}}]);
//# sourceMappingURL=93.ee0b8951.chunk.js.map