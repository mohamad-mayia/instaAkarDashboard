(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[67],{1303:function(e,t,c){"use strict";c.r(t),function(e){var s=c(121),r=c.n(s),n=c(174),a=c(659),l=c(1),j=c(14),i=c(658),b=c(777),d=(c(660),c(793)),o=c.n(d),h=(c(403),c(1304),c(835)),x=c(176),O=c(1503),u=c(17);t.default=function(){var t=Object(j.g)(),c=Object(O.a)(),s=Object(a.a)(c,2),d=s[0],g=s[1],m=Object(l.useContext)(x.a).refreshTokenHandler,p=Object(l.useState)(""),A=Object(a.a)(p,2),f=A[0],k=A[1],y=localStorage.getItem("token");JSON.parse(y);Object(l.useEffect)(Object(n.a)(r.a.mark((function t(){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(c=function(){var t=Object(n.a)(r.a.mark((function t(s){var n,a,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("token")),t.prev=1,t.next=4,fetch("".concat(e.apiUrl,"api/info"),{method:"GET",headers:{Authorization:"Bearer "+n,Accept:"application/json"}});case 4:return a=t.sent,t.next=7,a.json();case 7:if(!(l=t.sent).message||"Unauthenticated."!=l.message){t.next=10;break}return t.abrupt("return",m((function(){c(s)})));case 10:l.message&&"Success"==l.message&&k(l.payload),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}())();case 2:case"end":return t.stop()}}),t)}))),[]);var v=function(e){e.text;return Object(u.jsxs)("div",{className:"p-0 m-0 ",style:{width:"16px",height:"16px"},children:[Object(u.jsx)("img",{src:h.a,className:"p-0 m-0 "})," "]})};return Object(u.jsx)(i.wb,{children:Object(u.jsx)(i.u,{xl:12,children:Object(u.jsxs)(i.j,{children:[Object(u.jsx)(i.n,{children:Object(u.jsxs)(i.wb,{className:" row-gap-15",children:[Object(u.jsx)(i.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:"ar"===g.language?"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0648\u0642\u0639":"Website Information"}),Object(u.jsx)(i.u,{md:"6",lg:"6",xl:"6",className:"row-gap-15 col-gap-15",children:Object(u.jsx)(i.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return t.push("/Settings/Update")},children:"ar"===g.language?"\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a":"Update Information"})})]})}),Object(u.jsx)(i.k,{children:f&&Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(i.wb,{children:[Object(u.jsx)(i.u,{md:"12",className:"mb-1 mt-2 ",children:Object(u.jsx)("strong",{children:"Company Information"})}),Object(u.jsx)(i.u,{lg:6,children:Object(u.jsx)("table",{className:"table table-striped table-hover",children:Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:d("Email")}),Object(u.jsx)("td",{children:Object(u.jsx)("strong",{children:f.email})})]})})})}),Object(u.jsx)(i.u,{lg:6,children:Object(u.jsx)("table",{className:"table table-striped table-hover",children:Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:d("profit_percentage")}),Object(u.jsx)("td",{children:Object(u.jsxs)("strong",{children:[f.profit_percentage," "," %"]})})]})})})}),Object(u.jsx)(i.u,{lg:6,children:f.logo?Object(u.jsxs)(i.u,{md:"12",children:[Object(u.jsx)(i.u,{md:"12",className:"text-center",children:Object(u.jsx)("strong",{children:"ar"==g.language?"\u0627\u0644\u0634\u0639\u0627\u0631":"Logo"})}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{showThumbnails:!1,showPlayButton:!1,items:[{original:f.logo}]})]}):null}),Object(u.jsx)("hr",{style:{width:"100%"}}),Object(u.jsx)(i.u,{md:"12",children:Object(u.jsx)("strong",{children:d("Phones")})}),f.phone.map((function(e,t){return Object(u.jsx)(i.u,{md:"4",children:Object(u.jsx)("table",{className:"table table-striped table-hover",children:Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[d("Phone"),"  (",t+1,") "]}),Object(u.jsx)("td",{children:Object(u.jsx)("strong",{style:{direction:"ltr"},children:"".concat(e)})})]})})})},e)})),Object(u.jsx)("hr",{style:{width:"100%"}}),Object(u.jsxs)(i.u,{md:"12",children:[" ",Object(u.jsx)("strong",{children:"ar"===g.language?"\u0631\u0648\u0627\u0628\u0637":"URLS"})]}),["facebook","twitter","snapchat","tiktok","youtube","instagram"].map((function(e){return Object(u.jsx)(i.u,{md:"4",children:Object(u.jsx)("table",{className:"table table-striped table-hover",children:Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:["  ",e.charAt(0).toUpperCase()+e.slice(1)," "]}),Object(u.jsx)("td",{children:Object(u.jsxs)("strong",{children:["  ",f&&f[e]?Object(u.jsxs)("a",{href:"".concat(f[e]),target:"_blank",children:[e.charAt(0).toUpperCase()+e.slice(1)," "," URL"]}):"-","  "]})})]})})})},e)})),Object(u.jsx)("hr",{style:{width:"100%"}}),Object(u.jsx)(i.u,{md:"12",className:"mb-1 mt-2 ",children:Object(u.jsx)("strong",{children:d("Address")})}),Object(u.jsx)(i.u,{lg:12,children:Object(u.jsx)("table",{className:"table table-striped table-hover",children:Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:d("Address")}),Object(u.jsx)("td",{children:Object(u.jsx)("strong",{children:f.address})})]})})})}),Object(u.jsx)("hr",{style:{width:"100%"}}),Object(u.jsxs)(i.u,{md:"12",children:[" ",Object(u.jsxs)("strong",{children:["ar"===g.language?"\u0627\u0644\u0645\u0648\u0642\u0639 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629":"Position on map"," "]})]}),Object(u.jsx)(i.u,{md:"6",lg:"12",children:Object(u.jsxs)(i.K,{row:!0,children:[Object(u.jsx)(i.u,{md:"12"}),Object(u.jsx)(i.u,{xs:"12",md:"12",children:Object(u.jsx)("div",{style:{height:"350px",width:"100%"},children:Object(u.jsx)(b.a,{bootstrapURLKeys:{key:"AIzaSyAi51d5XZLV8oquto7pmBaEJqt2GYzJJvY",language:"en"},defaultCenter:{lat:Number(f.latitude),lng:Number(f.longitude)},defaultZoom:11,children:Object(u.jsx)(v,{lat:Number(f.latitude),lng:Number(f.longitude),text:"My Marker"})})})})]})})]})})})]})})})}}.call(this,c(73))},1304:function(e,t,c){},835:function(e,t,c){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAUlEQVQ4jZWSvWpCQRCFP8ItJEgQEQkWPkUeQFKnELGQkCIEiyBilSqv5BOkSpVCFC1ErERSBbFKkSKoOSkyF5bL3NUsDAt7znd29gcyQ5AIHgVvgk+rkWAgKGT9WbgqGAuUU3NBPQ9ObCcJ1oKOoCwoCVqCpWkLtxNB1wzvgqqjl4KQJy/g1cS7yBFvzDPzxK2Jl5GAgnl26dpZoP/kgc7YewETm68jYKpNvfZugxeoOPqFPaMEPS8gEazMsBK0DSra5S1M+xCcu/0JmpFPlNZ95IggGEbgF0Xpv4CyfaYsvBHUjvFpyJXgK4C/BY2T4CCkLThYwMO/4CCkL3iOeX4BbI64pl9t1I8AAAAASUVORK5CYII="}}]);
//# sourceMappingURL=67.3079e4f9.chunk.js.map