(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[83],{1274:function(e,t,c){"use strict";c.r(t),function(e){var n=c(121),a=c.n(n),s=c(174),r=c(659),l=c(1),i=c(14),o=(c(719),c(707),c(658)),j=(c(660),c(1275),c(1503)),u=c(176),b=c(17);t.default=function(){var t=Object(i.g)(),c=Object(j.a)(),n=Object(r.a)(c,2),d=n[0],g=n[1],h=Object(l.useContext)(u.a).refreshTokenHandler,x=Object(l.useState)(!1),O=Object(r.a)(x,2),m=O[0],p=O[1],f=Object(l.useState)(""),y=Object(r.a)(f,2),k=y[0],w=y[1],N=Object(l.useState)(!1),v=Object(r.a)(N,2),S=v[0],A=v[1],C=Object(l.useState)(0),E=Object(r.a)(C,2),P=E[0],T=E[1],I=localStorage.getItem("token"),_=JSON.parse(I);Object(l.useEffect)(Object(s.a)(a.a.mark((function t(){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(c=function(){var t=Object(s.a)(a.a.mark((function t(n){var s,r,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=JSON.parse(localStorage.getItem("token")),t.prev=1,t.next=4,fetch("".concat(e.apiUrl,"api/websitePages"),{method:"GET",headers:{Authorization:"Bearer "+s,Accept:"application/json"}});case 4:return 204==(r=t.sent).status&&w([]),t.next=8,r.json();case 8:if(!(l=t.sent).message||"Unauthenticated."!=l.message){t.next=11;break}return t.abrupt("return",h((function(){c(n)})));case 11:l.message&&"Success"==l.message&&(w(l.payload),U.id&&z(l.payload.filter((function(e){return e.id==U.id}))[0])),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}())();case 2:case"end":return t.stop()}}),t)}))),[S]);var B=Object(l.useState)(""),D=Object(r.a)(B,2),U=D[0],z=D[1],J=Object(l.useState)(""),H=Object(r.a)(J,2),L=H[0],M=H[1],G=function(){var t=Object(s.a)(a.a.mark((function t(){var c,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.getElementById("root").style.opacity=.75,t.prev=1,t.next=4,fetch("".concat(e.apiUrl,"api/websitePages/").concat(L.id),{method:"DELETE",headers:{Authorization:"Bearer "+_,Accept:"application/json"}});case 4:return c=t.sent,t.next=7,c.json();case 7:if(!(n=t.sent).message||"Unauthenticated."!==n.message){t.next=10;break}return t.abrupt("return",h((function(){G()})));case 10:200==c.status&&(p(!1),document.getElementById("root").style.opacity=1,A(!S)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:document.getElementById("root").style.opacity=1;case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)(o.wb,{children:[0==P&&Object(b.jsx)(o.u,{xl:12,children:Object(b.jsxs)(o.j,{children:[Object(b.jsx)(o.n,{children:Object(b.jsxs)(o.wb,{className:" row-gap-15",children:[Object(b.jsx)(o.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:Object(b.jsxs)("strong",{children:[" ","ar"===g.language?"\u0627\u0644\u0635\u0641\u062d\u0627\u062a":"The Pages"]})}),Object(b.jsx)(o.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(b.jsxs)(o.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return t.push("/DynamicPages/AddNewPage")},children:[" ","ar"===g.language?"\u0625\u0636\u0627\u0641\u0629 \u0635\u0641\u062d\u0629 \u062c\u062f\u064a\u062f\u0629":"Add New Page"]})})]})}),Object(b.jsx)(o.k,{className:"usersTabel",children:k&&Object(b.jsx)(o.y,{items:k,fields:["id",{label:"ar"===g.language?"\u0627\u0644\u0627\u0633\u0645":"Name",key:"name"},{label:"ar"===g.language?"\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0639\u0631\u0628\u064a":"Arabic Title",key:"name_ar"},{label:"ar"===g.language?"\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a":"English Title",key:"name_en"},{label:"ar"===g.language?"\u0639\u0645\u0644\u064a\u0627\u062a":"Actions",key:"Actions"}],hover:!0,striped:!0,pagination:!0,itemsPerPage:12,scopedSlots:{name_ar:function(e){return Object(b.jsxs)("td",{children:[" ",e.title.ar,"  "]})},name_en:function(e){return Object(b.jsxs)("td",{children:[" ",e.title.en,"  "]})},Actions:function(e){return Object(b.jsxs)("td",{children:[Object(b.jsx)(o.b,{className:"p-1 m-1 badg-click",color:"danger",onClick:function(){return function(e){p(!0),M(e)}(e)},children:"ar"==g.language?"\u062d\u0630\u0641":"Delete"}),Object(b.jsx)(o.b,{className:"p-1  m-1 badg-click",color:"info",onClick:function(){return function(e){z(e),T(1)}(e)},children:"ar"==g.language?"\u0639\u0631\u0636 .....":"Show...."})]})}}})})]})}),1==P&&U&&Object(b.jsx)(o.u,{xl:12,children:Object(b.jsxs)(o.j,{children:[Object(b.jsx)(o.n,{children:Object(b.jsxs)(o.wb,{className:"justify-content-center row-gap-15 ",children:[Object(b.jsx)(o.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:U.name}),Object(b.jsxs)(o.u,{md:"6",lg:"6",xl:"6",className:" row-gap-15 col-gap-15 ",children:[Object(b.jsx)(o.f,{color:"info",className:"col-lg-4  col-md-4 col-sm-12 col-xs-12 updatebtn",onClick:function(){return t.push("/DynamicPages/Update/".concat(U.id))},children:d("Update")}),Object(b.jsx)(o.f,{color:"success",className:"col-lg-4  col-md-4col-sm-12 col-xs-12 updatebtn",onClick:function(){return z(""),void T(0)},children:d("Back")})]})]})}),Object(b.jsxs)(o.k,{className:"",children:[Object(b.jsxs)(o.wb,{children:[Object(b.jsx)(o.u,{md:"12",children:Object(b.jsx)("strong",{children:"ar"===g.language?"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0635\u0641\u062d\u0629":"Page Information"})}),Object(b.jsx)(o.u,{lg:6,children:Object(b.jsx)("table",{className:"table table-striped table-hover",children:Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[" ","ar"===g.language?"\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0639\u0631\u0628\u064a":"Arabic Title"]}),Object(b.jsx)("td",{children:Object(b.jsx)("strong",{children:U.title.ar})})]})})})}),Object(b.jsx)(o.u,{lg:6,children:Object(b.jsx)("table",{className:"table table-striped table-hover",children:Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:["ar"===g.language?"\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a":"English Title"," "]}),Object(b.jsx)("td",{children:Object(b.jsx)("strong",{children:U.title.en})})]})})})})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)(o.wb,{style:{direction:"ltr"},children:[Object(b.jsx)(o.u,{md:"12",children:Object(b.jsx)("strong",{children:"ar"===g.language?"\u0645\u062d\u062a\u0648\u0649 \u0627\u0646\u0643\u0644\u064a\u0632\u064a":"English Content"})}),Object(b.jsx)(o.u,{style:{textAlign:"start"},lg:12,dangerouslySetInnerHTML:{__html:U.body.en}})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)(o.wb,{children:[Object(b.jsx)(o.u,{md:"12",children:Object(b.jsx)("strong",{children:"ar"===g.language?"\u0645\u062d\u062a\u0648\u0649 \u0639\u0631\u0628\u064a":"Arabic Content"})}),Object(b.jsx)(o.u,{lg:12,dangerouslySetInnerHTML:{__html:U.body.ar}})]})]})]})}),Object(b.jsxs)(o.gb,{show:m,onClose:function(){return p(!0)},size:"sm",color:"danger",children:[Object(b.jsx)(o.jb,{closeButton:!0,children:Object(b.jsxs)(o.kb,{children:["ar"===g.language?"\u062d\u0630\u0641 \u0635\u0641\u062d\u0629":"Delete Page","  "]})}),Object(b.jsx)(o.hb,{children:"".concat("ar"===g.language?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u062d\u0630\u0641 \u0635\u0641\u062d\u0629":"Are you sure you want to delete the page","   (").concat(L.name&&L.name,")")}),Object(b.jsxs)(o.ib,{children:[Object(b.jsxs)(o.f,{color:"danger",onClick:function(){return G()},children:[d("Delete")," "]})," ",Object(b.jsx)(o.f,{color:"secondary",onClick:function(){return p(!1)},children:d("Cancel")})]})]})]})}}.call(this,c(73))},1275:function(e,t,c){}}]);
//# sourceMappingURL=83.0ed9bbd1.chunk.js.map