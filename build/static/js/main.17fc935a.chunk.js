(this["webpackJsonpbreaking-bad-cast"]=this["webpackJsonpbreaking-bad-cast"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(14),s=c.n(n),r=c(5),i=c.n(r),j=c(15),b=c(3),d=c(16),l=c.n(d),o=c.p+"static/media/logo.e6ecab44.png",u=c(0),O=function(){return Object(u.jsx)("header",{className:"center",children:Object(u.jsx)("img",{src:o,alt:"breaking bad"})})},h=function(e){var t=e.getQuery,c=Object(a.useState)(""),n=Object(b.a)(c,2),s=n[0],r=n[1];return Object(u.jsx)("section",{className:"search",children:Object(u.jsx)("form",{children:Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters",value:s,onChange:function(e){e.preventDefault();var c=e.target.value;r(c),t(c)},autoFocus:!0})})})},x=c.p+"static/media/spinner.11d9cde8.gif",m=function(){return Object(u.jsx)("img",{src:x,alt:"spinner",style:{width:"200px",margin:"auto",display:"block"}})},p=function(e){var t=e.item;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-inner",children:[Object(u.jsx)("div",{className:"card-front",children:Object(u.jsx)("img",{src:t.img,alt:""})}),Object(u.jsxs)("div",{className:"card-back",children:[Object(u.jsx)("h1",{children:t.name}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})},f=function(e){var t=e.isLoading,c=e.items;return t?Object(u.jsx)(m,{}):Object(u.jsx)("section",{className:"cards",children:c.map((function(e){return Object(u.jsx)(p,{item:e},e.char_id)}))})},g=(c(41),function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(b.a)(s,2),d=r[0],o=r[1],x=Object(a.useState)(""),m=Object(b.a)(x,2),p=m[0],g=m[1];return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://www.breakingbadapi.com/api/characters?name=".concat(p));case 2:t=e.sent,n(t.data),o(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(O,{}),Object(u.jsx)(h,{getQuery:g}),Object(u.jsx)(f,{isLoading:d,items:c})]})});s.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.17fc935a.chunk.js.map