(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[21],{1165:function(e,t,c){"use strict";c.r(t),function(e){var a=c(121),s=c.n(a),n=c(174),r=c(659),l=c(1),o=c(658),i=(c(661),c(663),c(1166),c(14)),j=c(1503),u=c(1167),d=(c(660),c(17));t.default=function(t){var c=t.match,a=Object(i.g)(),b=Object(j.a)(),m=Object(r.a)(b,2),h=(m[0],m[1]),O=Object(l.useState)(10),p=Object(r.a)(O,2),x=p[0],g=p[1],f=Object(l.useState)(1),v=Object(r.a)(f,2),N=(v[0],v[1],Object(l.useState)()),y=Object(r.a)(N,2),w=(y[0],y[1],Object(l.useState)([])),S=Object(r.a)(w,2),k=S[0],_=S[1],C=Object(l.useState)([]),A=Object(r.a)(C,2),U=(A[0],A[1],Object(l.useState)(!1)),B=Object(r.a)(U,2),E=B[0],F=B[1],I=Object(l.useState)(),z=Object(r.a)(I,2),R=z[0],D=z[1],L=Object(l.useState)(!0),J=Object(r.a)(L,2),T=(J[0],J[1],Object(l.useState)(!0)),P=Object(r.a)(T,2),q=P[0],K=(P[1],Object(l.useState)()),G=Object(r.a)(K,2),H=G[0],M=G[1],Q=Object(l.useState)(""),V=Object(r.a)(Q,2),W=V[0],X=V[1],Y=localStorage.getItem("token"),Z=JSON.parse(Y),$=Object(l.useState)(!1),ee=Object(r.a)($,2),te=(ee[0],ee[1],Object(l.useState)(!0)),ce=Object(r.a)(te,2),ae=(ce[0],ce[1],Object(l.useState)(!1)),se=Object(r.a)(ae,2),ne=se[0],re=se[1],le=Object(l.useState)(!1),oe=Object(r.a)(le,2),ie=(oe[0],oe[1],Object(l.useState)(0)),je=Object(r.a)(ie,2),ue=je[0],de=je[1];Object(l.useEffect)(Object(n.a)(s.a.mark((function t(){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("refreshed parent"),r=function(){var t=Object(n.a)(s.a.mark((function t(c){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"api/companies"),{method:"GET",headers:{Authorization:"Bearer "+Z,Accept:"application/json"}});case 3:return n=t.sent,console.log(n.status),"204"==n.status&&_([]),t.next=8,n.json();case 8:r=t.sent,console.log(r),r.payload&&_(r.payload.filter((function(e){return e.id==c}))[0]),r.message&&"Unauthenticated."==r.message&&(localStorage.removeItem("token"),localStorage.clear(),a.push("/login")),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),t.next=4,r(c.params.id);case 4:case"end":return t.stop()}}),t)}))),[h.language,E]);var be=Object(l.useState)(""),me=Object(r.a)(be,2),he=me[0],Oe=me[1],pe=Object(l.useState)([]),xe=Object(r.a)(pe,2),ge=xe[0],fe=xe[1];Object(l.useEffect)(Object(n.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(function(){var t=Object(n.a)(s.a.mark((function t(c){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"api/categories??paginate=0"),{method:"GET",headers:{Authorization:"Bearer "+Z,Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,console.log("faqs",r),r.success&&fe(r.payload),r.message&&"Unauthenticated."==r.message&&(localStorage.removeItem("token"),localStorage.clear(),a.push("/login")),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}})()();case 2:case"end":return t.stop()}}),t)}))),[E]);var ve=function(){var t=Object(n.a)(s.a.mark((function t(a){var n,r,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),X(!0),g(7),D(""),M(""),(n=new FormData).append("company_id",c.params.id),""!=he&&n.append("category_id",he),t.prev=8,t.next=11,fetch("".concat(e.apiUrl,"api/companies/attach/category"),{method:"POST",headers:{Authorization:"Bearer "+Z,Accept:"application/json"},body:n});case 11:return r=t.sent,t.next=14,r.json();case 14:l=t.sent,console.log("response",l),console.log(l),l.success?(M("Category has been added to the company successfully."),F(!E),Oe(""),g(7)):(g(7),D(l.messages)),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(8),console.log(t.t0);case 23:X(!1);case 24:case"end":return t.stop()}}),t,null,[[8,20]])})));return function(e){return t.apply(this,arguments)}}(),Ne=Object(l.useState)(""),ye=Object(r.a)(Ne,2),we=ye[0],Se=ye[1],ke=function(){var t=Object(n.a)(s.a.mark((function t(){var a,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D(""),M(""),document.getElementById("root").style.opacity=.75,(a=new FormData).append("company_id",c.params.id),a.append("category_id",we.id),t.prev=6,t.next=9,fetch("".concat(e.apiUrl,"api/companies/detach/category"),{method:"POST",headers:{Authorization:"Bearer "+Z,Accept:"application/json"},body:a});case 9:return n=t.sent,t.next=12,n.json();case 12:r=t.sent,console.log("response",r),console.log(r),1==r.success&&r.payload&&(re(!ne),document.getElementById("root").style.opacity=1,F(!E)),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(6),console.log(t.t0);case 21:document.getElementById("root").style.opacity=1;case 22:case"end":return t.stop()}}),t,null,[[6,18]])})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:0==ue?Object(d.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center register-cont",children:Object(d.jsx)(o.w,{children:k&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(o.j,{className:"",children:[Object(d.jsx)(o.n,{children:Object(d.jsxs)(o.wb,{className:" row-gap-15",children:[Object(d.jsx)(o.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:Object(d.jsx)("strong",{children:k.name_en})}),Object(d.jsxs)(o.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:[Object(d.jsx)(o.f,{color:"info",className:"col-lg-3  col-md-3 col-sm-6 col-xs-6 updatebtn",onClick:function(){return de(1)},children:" Update"}),Object(d.jsx)(o.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return a.goBack()},children:" Back"})]})]})}),Object(d.jsx)(o.k,{className:"p-4 ps-0",children:Object(d.jsx)(o.wb,{children:Object(d.jsx)(o.u,{xs:"12",sm:"12",md:"12",className:"",children:Object(d.jsx)(o.H,{in:q,children:k&&Object(d.jsxs)(o.wb,{className:"",children:[Object(d.jsx)(o.u,{className:" p-1",md:"12",children:Object(d.jsxs)(o.j,{children:[Object(d.jsx)(o.n,{children:Object(d.jsx)(o.wb,{className:"",children:Object(d.jsx)(o.u,{md:"6",lg:"6",xl:"6",children:Object(d.jsx)("strong",{children:"Add Category"})})})}),Object(d.jsx)(o.k,{className:"",children:Object(d.jsx)(o.J,{onSubmit:function(e){ve(e)},children:Object(d.jsxs)(o.wb,{className:"justify-content-center",children:[Object(d.jsx)(o.u,{md:"8",lg:"8",xl:"8",children:Object(d.jsx)(o.K,{row:!0,children:Object(d.jsx)(o.u,{xs:"10",md:"10",children:Object(d.jsxs)(o.xb,{custom:!0,name:"country_id",required:!0,value:he,onChange:function(e){return Oe(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"Select Category"}),ge.length>0&&ge.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name_en},e.id)}))]})})})}),Object(d.jsx)(o.u,{md:"4",lg:"4",xl:"4",className:"mr-t",children:Object(d.jsxs)(o.f,{color:"success",className:"col-12",type:"submit",children:[" Add   ",W&&Object(d.jsxs)(d.Fragment,{children:[" ",Object(d.jsx)("i",{className:"fa fa-spinner fa-spin"})]})]})})]})})}),Object(d.jsx)(o.wb,{className:"justify-content-center",children:Object(d.jsx)(o.u,{md:"12",children:Object(d.jsxs)(o.u,{md:"12",children:[R&&Object(d.jsx)(o.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"danger",show:x,onShowChange:g,children:Object.keys(R).map((function(e,t){return Object(d.jsxs)(d.Fragment,{children:[R[e],Object(d.jsx)("br",{})]})}))}),H&&Object(d.jsx)(o.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"success",show:x,onShowChange:g,children:H})]})})}),k.categories&&k.categories.length>0&&Object(d.jsxs)(o.l,{className:"p-4",children:[" ",Object(d.jsxs)(o.wb,{md:"12",children:[Object(d.jsxs)(o.u,{md:"12",children:[" ",Object(d.jsx)("strong",{children:"Categories"})," "]}),k.categories.length>0&&k.categories.map((function(e,t){return Object(d.jsx)(o.u,{md:"6",children:Object(d.jsxs)("ul",{className:" card list-group list-group-flush",children:[Object(d.jsxs)("li",{className:"list-group-item  ",children:[Object(d.jsxs)("strong",{children:["Arabic Name :"," "]})," ",e.name_ar,Object(d.jsx)("br",{}),Object(d.jsxs)("strong",{children:["   English Name :  "," "]}),"  ",e.name_en]}),Object(d.jsx)(o.f,{color:"secondary",className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 ",onClick:function(){return t=e,re(!ne),void Se(t);var t},style:{borderRadius:"0"},children:"Remove"})]})},e.id)}))]})," "]}),Object(d.jsxs)(o.gb,{show:ne,onClose:function(){return re(!ne)},size:"sm",color:"danger",children:[Object(d.jsx)(o.jb,{closeButton:!0,children:Object(d.jsx)(o.kb,{children:"Remove Category"})}),Object(d.jsx)(o.hb,{children:"Are you sure you want to delete a category from the company (  ".concat(we.name_en," )")}),Object(d.jsxs)(o.ib,{children:[Object(d.jsx)(o.f,{color:"danger",onClick:function(){return ke()},children:"Remove"})," ",Object(d.jsx)(o.f,{color:"secondary",onClick:function(){return re(!ne)},children:"Cancel"})]})]})]})}),Object(d.jsx)(o.u,{className:" p-1",md:"6",children:Object(d.jsxs)("ul",{className:" card list-group list-group-flush",children:[Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsxs)("strong",{children:["Id : "," "]})," ",k.id]}),Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsxs)("strong",{children:["ar"==h.language?"\u0627\u0633\u0645 \u0627\u0646\u0643\u0644\u064a\u0632\u064a :":"English Name :"," "]}),"  ",k.name_en]}),Object(d.jsxs)("li",{className:"list-group-item  ",children:[Object(d.jsxs)("strong",{children:["Arabic Name :"," "]})," ",k.name_ar]})]})}),Object(d.jsx)(o.u,{className:" p-1",md:"6",children:Object(d.jsx)("ul",{className:" card list-group list-group-flush",children:Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsx)("strong",{children:" Logo   "}),Object(d.jsx)("img",{className:"detLogo",src:e.apiUrl+k.logo})]})})})]})})})})})]})})})}):Object(d.jsx)(u.a,{setPageStatus:de,updatefetchedData:k,refresh:E,setRefresh:F})})}}.call(this,c(73))},1166:function(e,t,c){},1167:function(e,t,c){"use strict";(function(e){var a=c(175),s=c(45),n=c(121),r=c.n(n),l=c(174),o=c(659),i=c(1),j=c(658),u=(c(661),c(663),c(1168),c(14)),d=c(1503),b=(c(660),c(17));t.a=function(t){var c=t.setPageStatus,n=t.updatefetchedData,m=t.refresh,h=t.setRefresh,O=Object(d.a)(),p=Object(o.a)(O,2),x=p[0],g=p[1],f=Object(u.g)(),v=Object(i.useState)(10),N=Object(o.a)(v,2),y=N[0],w=N[1],S=Object(i.useState)([]),k=Object(o.a)(S,2),_=(k[0],k[1]),C=Object(i.useState)(),A=Object(o.a)(C,2),U=A[0],B=A[1],E=Object(i.useState)(),F=Object(o.a)(E,2),I=F[0],z=F[1],R=Object(i.useState)(""),D=Object(o.a)(R,2),L=D[0],J=D[1],T=localStorage.getItem("token"),P=JSON.parse(T),q=Object(i.useState)(""),K=Object(o.a)(q,2),G=K[0],H=K[1],M=Object(i.useState)({name_en:n.name_en,name_ar:n.name_ar}),Q=Object(o.a)(M,2),V=Q[0],W=Q[1],X=V.name_en,Y=V.name_ar;Object(i.useEffect)(Object(l.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(function(){var t=Object(l.a)(r.a.mark((function t(c){var a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/super/countries?paginate=0"),{method:"GET",headers:{Authorization:"Bearer "+P,Accept:"application/json"}});case 3:return a=t.sent,t.next=6,a.json();case 6:s=t.sent,console.log(s),s.success&&_(s.payload),s.message&&"Unauthenticated."==s.message&&(localStorage.removeItem("token"),localStorage.clear(),f.push("/login")),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}})()();case 2:case"end":return t.stop()}}),t)}))),[m]);var Z=function(e){W(Object(s.a)(Object(s.a)({},V),{},Object(a.a)({},e.target.name,e.target.value))),B(""),z("")},$=function(){var t=Object(l.a)(r.a.mark((function t(c){var a,s,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),J(!0),B(""),z(""),a=new FormData,V.name_en!=n.name_en&&a.append("name_en",X),a.append("_method","put"),V.name_ar!=n.name_ar&&a.append("name_ar",Y),G&&a.append("logo",G),t.prev=9,t.next=12,fetch("".concat(e.apiUrl,"api/companies/").concat(n.id),{method:"POST",headers:{Authorization:"Bearer "+P,Accept:"application/json"},body:a});case 12:return s=t.sent,t.next=15,s.json();case 15:if(l=t.sent,console.log("response",l),console.log(l),w(10),!l.payload){t.next=28;break}return t.next=22,w(6);case 22:return z("ar"==g.language?"\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0628\u0646\u062c\u0627\u062d":"Company Updated Successfuly"),t.next=25,h(!m);case 25:w(6),t.next=31;break;case 28:return t.next=30,w(10);case 30:B(l.messages);case 31:t.next=36;break;case 33:t.prev=33,t.t0=t.catch(9),console.log(t.t0);case 36:J(!1);case 37:case"end":return t.stop()}}),t,null,[[9,33]])})));return function(e){return t.apply(this,arguments)}}();return console.log("data",V),Object(b.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center register-cont",children:Object(b.jsx)(j.w,{children:Object(b.jsxs)(j.j,{className:"",children:[Object(b.jsx)(j.n,{children:Object(b.jsxs)(j.wb,{className:" row-gap-15",children:[Object(b.jsx)(j.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:Object(b.jsxs)("strong",{children:[" ","ar"==g.language?n.name_ar:n.name_en]})}),Object(b.jsx)(j.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(b.jsx)(j.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return c(0)},children:"ar"==g.language?"\u0631\u062c\u0648\u0639":"Back"})})]})}),Object(b.jsx)(j.wb,{children:Object(b.jsx)(j.u,{xs:"12",sm:"12",md:"12",className:"",children:Object(b.jsx)(j.J,{onSubmit:function(e){$(e)},children:Object(b.jsx)(j.k,{children:Object(b.jsxs)(j.j,{children:[Object(b.jsx)(j.k,{children:Object(b.jsxs)(j.wb,{children:[Object(b.jsxs)(j.u,{md:"12",children:[" ",Object(b.jsx)("strong",{children:"ar"==g.language?"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0634\u0631\u0643\u0629 :":"Company Informations :"})]}),Object(b.jsx)(j.u,{md:"6",lg:"6",xl:"6",children:Object(b.jsxs)(j.K,{row:!0,children:[Object(b.jsx)(j.u,{md:"12",children:Object(b.jsx)(j.cb,{htmlFor:"text-input",children:"ar"==g.language?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a":"English Name"})}),Object(b.jsx)(j.u,{xs:"12",md:"12",children:Object(b.jsx)(j.S,{name:"name_en",required:!0,onChange:Z,placeholder:"ar"==g.language?"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a":"English Name",value:V.name_en})})]})}),Object(b.jsx)(j.u,{md:"6",lg:"6",children:Object(b.jsxs)(j.K,{row:!0,className:"arabic-align",children:[Object(b.jsx)(j.u,{md:"12",children:Object(b.jsx)(j.cb,{htmlFor:"text-input",children:"Arabic Name"})}),Object(b.jsx)(j.u,{xs:"12",md:"12",children:Object(b.jsx)(j.S,{name:"name_ar",required:!0,onChange:Z,placeholder:"Arabic Name",value:V.name_ar})})]})}),Object(b.jsx)(j.u,{md:"6",className:"p-4",children:Object(b.jsxs)(j.K,{row:!0,children:[Object(b.jsx)(j.cb,{col:!0,md:12,children:"ar"==g.language?"\u0627\u0644\u0634\u0639\u0627\u0631":"Logo"}),Object(b.jsxs)(j.u,{xs:"12",md:"12",children:[Object(b.jsx)(j.U,{accept:"image/*",custom:!0,id:"custom-file-input",onChange:function(e){!function(e){e.target.files[0]&&H(e.target.files[0])}(e)}}),Object(b.jsx)(j.cb,{htmlFor:"custom-file-input",variant:"custom-file",children:G?G.name:"ar"==g.language?"\u0627\u062e\u062a\u0631 \u0635\u0648\u0631\u0629 ...":"Choose image ..."})]})]})}),Object(b.jsx)(j.u,{md:"6",children:G?Object(b.jsx)("img",{className:"imgLogo",src:URL.createObjectURL(G)}):Object(b.jsx)("img",{className:"imgLogo",src:e.apiUrl+n.logo})})]})}),Object(b.jsx)(j.l,{className:"p-4",children:Object(b.jsxs)(j.wb,{className:"justify-content-center",children:[U&&Object(b.jsx)(j.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"danger",show:y,onShowChange:w,children:U&&U.map((function(e,t){return Object(b.jsxs)(b.Fragment,{children:[U[t],Object(b.jsx)("br",{})]})}))}),I&&Object(b.jsx)(j.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"success",show:y,onShowChange:w,children:I}),Object(b.jsx)(j.u,{md:"6",lg:"6",xl:"6",xs:"12",sm:"12",children:Object(b.jsxs)(j.f,{color:"success",block:!0,type:"submit",children:[x("Save"),L&&Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("i",{className:"fa fa-spinner fa-spin"})]})," "]})})]})})]})})})})})]})})})}}).call(this,c(73))},1168:function(e,t,c){},661:function(e,t,c){}}]);
//# sourceMappingURL=21.8555b865.chunk.js.map