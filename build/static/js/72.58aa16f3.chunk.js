(this.webpackJsonpinstaakar=this.webpackJsonpinstaakar||[]).push([[72],{1139:function(e,t,c){"use strict";c.r(t),function(e){c(175),c(45);var s=c(121),a=c.n(s),n=c(174),r=c(659),o=c(1),l=c(658),i=(c(661),c(663),c(706),c(1140),c(14)),j=(c(660),c(1141)),u=c(17);t.default=function(t){var c=Object(i.g)(),s=Object(o.useState)(10),d=Object(r.a)(s,2),b=d[0],h=d[1],m=Object(o.useState)(""),p=Object(r.a)(m,2),O=p[0],x=p[1],g=Object(o.useState)(""),f=Object(r.a)(g,2),w=f[0],S=f[1],v=Object(o.useState)(),k=Object(r.a)(v,2),N=k[0],y=k[1],C=Object(o.useState)(),T=Object(r.a)(C,2),_=T[0],E=T[1],U=Object(o.useState)(""),F=Object(r.a)(U,2),W=F[0],z=F[1],A=localStorage.getItem("token"),J=JSON.parse(A),B=localStorage.getItem("user_id"),D=(JSON.parse(B),Object(o.useState)(0)),I=Object(r.a)(D,2),H=I[0],R=I[1],G=Object(o.useState)({facebook:"",twitter:"",linkedin:"",instagram:"",email:"",address:"",phone:""}),L=Object(r.a)(G,2),M=L[0],P=(L[1],M.facebook,M.twitter,M.linkedin,M.instagram,M.email,M.address,M.phone,Object(o.useState)("")),q=Object(r.a)(P,2),K=q[0],Q=q[1];Object(o.useEffect)(Object(n.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(function(){var t=Object(n.a)(a.a.mark((function t(s){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e.apiUrl,"/settings/viewWebsiteSettings"),{method:"GET",headers:{Authorization:"Bearer "+J,Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,console.log(r),"Website settings retrieved successfully!"==r.message&&(x(r.payload),Q(r.payload.how_to_use)),r.message&&"Unauthorized or invalid token!"==r.message&&(localStorage.removeItem("token"),localStorage.clear(),c.push("/login")),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}})()();case 2:case"end":return t.stop()}}),t)}))),[w]);var V=function(){var t=Object(n.a)(a.a.mark((function t(c){var s,n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),z(!0),y(""),E(""),s=new FormData,K&&s.append("how_to_use",K),t.prev=6,t.next=9,fetch("".concat(e.apiUrl,"/settings/updateWebsiteSettings"),{method:"POST",headers:{Authorization:"Bearer "+J,Accept:"application/json"},body:s});case 9:return n=t.sent,t.next=12,n.json();case 12:r=t.sent,console.log("response",r),console.log(r),r.message&&"Website settings updated successfully!"==r.message?(E("Website settings updated successfully!"),S(!w),h(5)):(h(5),y(r.errors)),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(6),console.log(t.t0);case 21:z(!1);case 22:case"end":return t.stop()}}),t,null,[[6,18]])})));return function(e){return t.apply(this,arguments)}}();return console.log("p",K),Object(u.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center register-cont",children:Object(u.jsxs)(l.w,{children:[0==H&&Object(u.jsx)(u.Fragment,{children:O&&Object(u.jsxs)(l.j,{children:[Object(u.jsx)(l.n,{children:Object(u.jsxs)(l.wb,{className:"justify-content-center row-gap-15 ",children:[Object(u.jsx)(l.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:"How To Use"}),Object(u.jsx)(l.u,{md:"6",lg:"6",xl:"6",children:Object(u.jsx)(l.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return R(1)},children:"Update"})})]})}),Object(u.jsx)(l.k,{children:Object(u.jsx)(l.wb,{children:Object(u.jsx)(l.u,{md:"12",dangerouslySetInnerHTML:{__html:O.how_to_use}})})})]})}),O&&1==H&&Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.j,{className:"",children:Object(u.jsxs)(l.J,{onSubmit:function(e){V(e)},children:[Object(u.jsx)(l.n,{children:Object(u.jsxs)(l.wb,{className:" row-gap-15",children:[Object(u.jsx)(l.u,{md:"6",lg:"6",xl:"6",className:"justify-content-center align-self-center align-items-center place-items-center text-capitalize",children:"Update How To Use"}),Object(u.jsx)(l.u,{md:"6",lg:"6",xl:"6",children:Object(u.jsx)(l.f,{color:"success",className:"col-lg-6  col-md-6 col-sm-12 col-xs-12 updatebtn",onClick:function(){return R(0)},children:"Back"})})]})}),Object(u.jsx)(l.k,{className:"p-4",children:Object(u.jsx)(l.wb,{className:"justify-content-center",children:Object(u.jsx)(l.u,{md:"12",lg:"12",xl:"12",children:Object(u.jsx)(j.a,{className:"col-md-12",setDataText:Q,dataText:K})})})}),Object(u.jsx)(l.l,{className:"p-4",children:Object(u.jsxs)(l.wb,{className:"justify-content-center",children:[N&&Object(u.jsx)(l.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"danger",show:b,onShowChange:h,children:Object.keys(N).map((function(e,t){return Object(u.jsxs)(u.Fragment,{children:[N[e],Object(u.jsx)("br",{})]})}))}),_&&Object(u.jsx)(l.a,{className:"col-lg-12  col-md-12 col-sm-12 col-xs-12 ",color:"success",show:b,onShowChange:h,children:_}),Object(u.jsx)(l.u,{md:"6",lg:"6",xl:"6",xs:"12",sm:"12",children:Object(u.jsxs)(l.f,{color:"success",block:!0,type:"submit",children:["Save",W&&Object(u.jsxs)(u.Fragment,{children:[" ",Object(u.jsx)("i",{className:"fa fa-spinner fa-spin"})]})," "]})})]})})]})})})]})})}}.call(this,c(73))},1140:function(e,t,c){},1141:function(e,t,c){"use strict";var s=c(684),a=c(685),n=c(694),r=c(695),o=c(1),l=c(686),i=c(700),j=c(701),u=c.n(j),d=c(702),b=c.n(d),h=(c(704),c(17)),m=function(e){Object(n.a)(c,e);var t=Object(r.a)(c);function c(e){var a;return Object(s.a)(this,c),(a=t.call(this,e)).onEditorStateChange=function(e){a.setState({editorState:e}),console.log(u()(Object(l.convertToRaw)(e.getCurrentContent()))),a.props.setDataText(u()(Object(l.convertToRaw)(e.getCurrentContent())))},a.state={editorState:l.EditorState.createWithContent(l.ContentState.createFromBlockArray(b()(e.dataText)))},a}return Object(a.a)(c,[{key:"render",value:function(){var e=this.state.editorState;return Object(h.jsx)(i.Editor,{editorState:e,wrapperClassName:"demo-wrapper ",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange})}}]),c}(o.Component);t.a=m}}]);
//# sourceMappingURL=72.58aa16f3.chunk.js.map