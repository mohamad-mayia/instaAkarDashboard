(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[103],{1179:function(e,t,c){"use strict";c.r(t),function(e){var n=c(45),a=c(121),r=c.n(a),s=c(174),o=c(659),i=c(1),l=c(14),u=c(658),j=(c(660),c(1180),c(1414)),b=c(721),d=c(709),p=c(710),O=c(1502),h=c(1498),f=c(1500),g=c(1503),m=c(17);Object(j.a)({direction:"rtl"}),Object(p.a)({key:"muirtl",stylisPlugins:[d.q,b.a]});t.default=function(){var t=Object(l.g)(),c=Object(g.a)(),a=Object(o.a)(c,2),j=(a[0],a[1]),b=Object(i.useState)(!0),d=Object(o.a)(b,2),p=(d[0],d[1],Object(i.useState)(!1)),x=Object(o.a)(p,2),y=x[0],w=x[1],k=Object(i.useState)(!1),v=Object(o.a)(k,2),C=(v[0],v[1],Object(i.useState)([])),S=Object(o.a)(C,2),N=S[0],_=S[1],A=Object(i.useState)(!1),E=Object(o.a)(A,2),B=(E[0],E[1],Object(i.useState)()),z=Object(o.a)(B,2),I=(z[0],z[1]),P=Object(i.useState)([]),U=Object(o.a)(P,2),D=U[0],L=U[1],T=Object(i.useState)(),q=Object(o.a)(T,2),J=(q[0],q[1]),G=Object(i.useState)(""),F=Object(o.a)(G,2),H=(F[0],F[1],Object(i.useState)(0)),K=Object(o.a)(H,2),R=K[0],M=(K[1],localStorage.getItem("token")),Q=JSON.parse(M),V=Object(i.useState)(10),W=Object(o.a)(V,2),X=(W[0],W[1],Object(i.useState)(null)),Y=Object(o.a)(X,2),Z=Y[0],$=Y[1];Object(i.useEffect)(Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(function(){var t=Object(s.a)(r.a.mark((function t(c){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"api/countries"),{method:"GET",headers:{Authorization:"Bearer "+Q,Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:(a=t.sent).success&&_(a.payload),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}})()();case 2:case"end":return t.stop()}}),t)}))),[]);var ee=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$(t),null!=t?te(t.id):L([]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var t=Object(s.a)(r.a.mark((function t(c){var a,s,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"api/cities/getCityByCountryId?country_id=").concat(c),{method:"GET",headers:{Authorization:"Bearer "+Q,Accept:"application/json"}});case 3:return(a=t.sent).status,t.next=7,a.json();case 7:if(!(s=t.sent).success){t.next=13;break}return o=[],t.next=12,s.payload.map((function(e,t){o.push(Object(n.a)(Object(n.a)({},e),{},{"\u0627\u0644\u0631\u0645\u0632":e.code?e.code:"-","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0628\u064a":e.name_ar?e.name_ar:"-","\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a":e.name_en}))}));case 12:L(o);case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}(),ce=Object(i.useState)(""),ne=Object(o.a)(ce,2),ae=ne[0],re=ne[1],se=function(){var t=Object(s.a)(r.a.mark((function t(){var c,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return I(""),J(""),document.getElementById("root").style.opacity=.75,t.prev=3,t.next=6,fetch("".concat(e.apiUrl,"api/cities/deleteCity?id=").concat(ae.id),{method:"DELETE",headers:{Authorization:"Bearer "+Q,Accept:"application/json"}});case 6:return c=t.sent,t.next=9,c.json();case 9:1==(n=t.sent).success&&n.payload&&(w(!1),document.getElementById("root").style.opacity=1,te(Z.id)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.log(t.t0);case 16:document.getElementById("root").style.opacity=1;case 17:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(){return t.apply(this,arguments)}}();return Object(m.jsxs)(u.wb,{children:[0==R&&Object(m.jsx)(u.u,{xl:12,children:Object(m.jsxs)(u.j,{children:[Object(m.jsx)(u.n,{children:Object(m.jsxs)(u.wb,{className:" row-gap-15",children:[Object(m.jsx)(u.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:"ar"==j.language?"\u0627\u0644\u0645\u062f\u0646":"Cities"}),Object(m.jsx)(u.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(m.jsx)(u.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return t.push("/Cities/AddNewCity")},children:"ar"==j.language?"\u0625\u0636\u0627\u0641\u0629 \u062f\u0648\u0644\u0629 \u062c\u062f\u064a\u062f\u0629":"Add New Country"})})]})}),Object(m.jsxs)(u.k,{className:"usersTabel",children:[Object(m.jsx)(u.wb,{children:Object(m.jsx)(u.u,{md:"6",lg:"6",xl:"6",children:Object(m.jsx)(u.K,{row:!0,children:Object(m.jsx)(u.u,{xs:"12",md:"12",children:Object(m.jsx)("div",{children:Object(m.jsx)(f.a,{id:"country-select-demo",size:"small",options:N,required:!0,autoHighlight:!0,dir:"rtl",rtl:"true",value:Z,onChange:function(e,t){ee(t)},getOptionLabel:function(e){return e.country_name_en+"  "+e.country_code},renderOption:function(e,t){return Object(m.jsxs)(O.a,Object(n.a)(Object(n.a)({component:"li",sx:{"& > img":{mr:2,flexShrink:0}}},e),{},{children:[Object(m.jsx)("img",{loading:"lazy",width:"20",src:"https://flagcdn.com/w20/".concat(t.country_code.toLowerCase(),".png"),srcSet:"https://flagcdn.com/w40/".concat(t.country_code.toLowerCase(),".png 2x"),alt:""}),t.country_name_en," (",t.country_code,")"]}))},renderInput:function(e){return Object(m.jsx)(h.a,Object(n.a)(Object(n.a)({required:!0},e),{},{label:"Choose Country",inputProps:Object(n.a)(Object(n.a)({},e.inputProps),{},{autoComplete:"off"})}))}})})})})})}),D.length>0?Object(m.jsx)(u.y,{items:D,fields:["id",{label:"Arabic Name",key:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0628\u064a"},{label:"English Name",key:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0646\u0643\u0644\u064a\u0632\u064a"},{label:"Code",key:"\u0627\u0644\u0631\u0645\u0632"},{label:"Actions",key:"\u0639\u0645\u0644\u064a\u0627\u062a"}],hover:!0,striped:!0,pagination:!0,sorter:!0,itemsPerPage:20,columnFilter:!0,clickableRows:!0,scopedSlots:{"\u0639\u0645\u0644\u064a\u0627\u062a":function(e){return Object(m.jsxs)("td",{children:[Object(m.jsx)(u.b,{className:"p-1 m-1 badg-click",color:"danger",onClick:function(){return function(e){w(!0),re(e)}(e)},children:"ar"==j.language?"\u062d\u0630\u0641":"Delete"}),Object(m.jsx)(u.b,{className:"p-1  m-1 badg-click",color:"info",onClick:function(){return t.push("/Country/".concat(e.country.id,"/CityUpdate/").concat(e.id))},children:"ar"==j.language?"\u062a\u0639\u062f\u064a\u0644 .....":"Update...."})]})}}}):null,!Z&&Object(m.jsx)(u.wb,{children:Object(m.jsx)(u.u,{md:"12",children:Object(m.jsx)(u.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"warning",children:"ar"==j.language?"\u0627\u062e\u062a\u0631 \u062f\u0648\u0644\u0629 \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u062f\u0646 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0647\u0627":"Select a country to view its cities"})})})]})]})}),Object(m.jsxs)(u.gb,{show:y,onClose:function(){return w(!y)},size:"sm",color:"danger",children:[Object(m.jsx)(u.jb,{closeButton:!0,children:Object(m.jsx)(u.kb,{children:"ar"==j.language?"\u062d\u0630\u0641 \u0645\u062f\u064a\u0646\u0629":"Delete City"})}),Object(m.jsx)(u.hb,{children:"Are you sure you want to delete City (".concat(ae.name_en,")")}),Object(m.jsxs)(u.ib,{children:[Object(m.jsx)(u.f,{color:"danger",onClick:function(){return se()},children:"ar"==j.language?"\u062d\u0630\u0641":"Delete"})," ",Object(m.jsx)(u.f,{color:"secondary",onClick:function(){return w(!y)},children:"ar"==j.language?"\u0627\u0644\u063a\u0627\u0621":"Cancel"})]})]})]})}}.call(this,c(73))},1180:function(e,t,c){}}]);
//# sourceMappingURL=103.432508b3.chunk.js.map