(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[90],{1231:function(e,t,c){"use strict";c.r(t),function(e){var a=c(121),n=c.n(a),r=c(174),s=c(659),o=c(1),l=c.n(o),i=c(14),u=c(658),j=(c(660),c(1232),c(176)),b=c(1503),p=c(17);t.default=function(){var t=Object(i.g)(),c=Object(b.a)(),a=Object(s.a)(c,2),d=a[0],O=a[1],g=Object(o.useContext)(j.a).refreshTokenHandler,m=Object(o.useState)(!0),h=Object(s.a)(m,2),f=(h[0],h[1],Object(o.useState)(!1)),x=Object(s.a)(f,2),y=x[0],k=x[1],S=Object(o.useState)(!1),v=Object(s.a)(S,2),w=(v[0],v[1],Object(o.useState)(!1)),N=Object(s.a)(w,2),T=(N[0],N[1],Object(o.useState)("")),A=Object(s.a)(T,2),E=A[0],C=A[1],P=Object(o.useState)(!1),B=Object(s.a)(P,2),I=B[0],U=B[1],J=Object(o.useState)(),z=Object(s.a)(J,2),D=z[0],_=z[1],F=Object(o.useState)(1),G=Object(s.a)(F,2),H=G[0],L=(G[1],Object(o.useState)()),q=Object(s.a)(L,2),K=(q[0],q[1],Object(o.useState)()),M=Object(s.a)(K,2),Q=(M[0],M[1]),R=Object(o.useState)(""),V=Object(s.a)(R,2),W=(V[0],V[1],Object(o.useState)(0)),X=Object(s.a)(W,2),Y=X[0],Z=(X[1],localStorage.getItem("token")),$=(JSON.parse(Z),Object(o.useState)("")),ee=Object(s.a)($,2),te=(ee[0],ee[1],Object(o.useState)(10)),ce=Object(s.a)(te,2),ae=(ce[0],ce[1]);Object(o.useEffect)(Object(r.a)(n.a.mark((function t(){var c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(c=function(){var t=Object(r.a)(n.a.mark((function t(a){var r,s,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.parse(localStorage.getItem("token")),t.prev=1,t.next=4,fetch("".concat(e.apiUrl,"api/propertyTypes"),{method:"GET",headers:{Authorization:"Bearer "+r,Accept:"application/json"}});case 4:return s=t.sent,t.next=7,s.json();case 7:if(!(o=t.sent).message||"Unauthenticated."!=o.message){t.next=10;break}return t.abrupt("return",g((function(){c(a)})));case 10:o.message&&"Success"==o.message&&(C(o.payload),se.id&&oe(o.payload.filter((function(e){return e.id==se.id}))[0])),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}())();case 2:case"end":return t.stop()}}),t)}))),[H,I]);var ne=Object(o.useState)(""),re=Object(s.a)(ne,2),se=re[0],oe=re[1],le=Object(o.useState)([]),ie=Object(s.a)(le,2),ue=(ie[0],ie[1],Object(o.useState)(!1)),je=Object(s.a)(ue,2),be=(je[0],je[1],Object(o.useState)("")),pe=Object(s.a)(be,2),de=pe[0],Oe=pe[1],ge=function(){var t=Object(r.a)(n.a.mark((function t(){var c,a,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(""),Q(""),document.getElementById("root").style.opacity=.75,c=JSON.parse(localStorage.getItem("token")),t.prev=4,t.next=7,fetch("".concat(e.apiUrl,"api/propertyTypes/").concat(de.id),{method:"DELETE",headers:{Authorization:"Bearer "+c,Accept:"application/json"}});case 7:return a=t.sent,t.next=10,a.json();case 10:if(r=t.sent,console.log("response",r),ae(10),"Fail"!==r.message){t.next=16;break}return _(r.error),t.abrupt("return");case 16:if(r.errors&&_(r.errors),!r.message||"Unauthenticated."!==r.message){t.next=19;break}return t.abrupt("return",g((function(){ge()})));case 19:r.message&&"Success"===r.message&&(k(!1),document.getElementById("root").style.opacity=1,U(!I)),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(4),console.log(t.t0);case 25:document.getElementById("root").style.opacity=1;case 26:case"end":return t.stop()}}),t,null,[[4,22]])})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)(u.wb,{children:[0==Y&&Object(p.jsx)(u.u,{xl:12,children:Object(p.jsxs)(u.j,{children:[Object(p.jsx)(u.n,{children:Object(p.jsxs)(u.wb,{className:" row-gap-15",children:[Object(p.jsx)(u.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:"ar"===O.language?"\u0623\u0646\u0648\u0639 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a":"Property Types"}),Object(p.jsx)(u.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(p.jsx)(u.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return t.push("/PropertyTypes/AddNewPropertyType")},children:"ar"===O.language?"\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u062c\u062f\u064a\u062f":"Add New Property Type"})})]})}),Object(p.jsx)(u.k,{className:"usersTabel",children:E&&Object(p.jsx)(u.y,{items:E,fields:["id",{label:"ar"===O.language?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0628\u064a":"Arabic Name",key:"name_ar"},{label:"ar"===O.language?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a":"English Name",key:"name_en"},{label:"ar"===O.language?"\u0639\u0645\u0644\u064a\u0627\u062a":"Actions",key:"Actions"}],hover:!0,striped:!0,pagination:!0,sorter:!0,itemsPerPage:12,scopedSlots:{Actions:function(e){return Object(p.jsxs)("td",{children:[Object(p.jsxs)(u.b,{className:"p-1 m-1 badg-click",color:"danger",onClick:function(){return function(e){k(!0),Oe(e),_(""),Q("")}(e)},children:[" ",d("Delete")]}),Object(p.jsxs)(u.b,{className:"p-1  m-1 badg-click",color:"info",onClick:function(){return t.push("/PropertyTypes/Update/".concat(e.id))},children:[d("Update"),"  "]})]})},name_ar:function(e){return Object(p.jsxs)("td",{children:[" ",e.name.ar,"  "]})},name_en:function(e){return Object(p.jsxs)("td",{children:[" ",e.name.en,"  "]})}}})})]})}),Object(p.jsxs)(u.gb,{show:y,onClose:function(){return k(!1)},size:"md",color:"danger",children:[Object(p.jsx)(u.jb,{closeButton:!0,children:Object(p.jsxs)(u.kb,{children:["ar"===O.language?"\u062d\u0630\u0641 \u0646\u0648\u0639":"Delete Property Type"," "]})}),Object(p.jsxs)(u.hb,{children:["".concat("ar"===O.language?"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0623\u0643\u062f \u0645\u0646 \u062d\u0630\u0641 \u0646\u0648\u0639":"Are you sure you want to delete the property type","   (").concat(de.name&&de.name[O.language],")"),D&&"object"===typeof D?Object(p.jsx)(u.a,{color:"danger",className:"col-lg-12",children:Object.keys(D).map((function(e,t){return Object(p.jsxs)(l.a.Fragment,{children:[D[e],Object(p.jsx)("br",{})]},t)}))}):null,D&&"string"===typeof D?Object(p.jsxs)(u.a,{color:"danger",className:"col-lg-12",children:[D," "]}):null]}),Object(p.jsxs)(u.ib,{children:[Object(p.jsxs)(u.f,{color:"danger",onClick:function(){return ge()},children:[d("Delete")," "]})," ",Object(p.jsx)(u.f,{color:"secondary",onClick:function(){return k(!1)},children:d("Cancel")})]})]})]})}}.call(this,c(73))},1232:function(e,t,c){}}]);
//# sourceMappingURL=90.8b18225b.chunk.js.map