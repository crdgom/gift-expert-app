(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),a=n.n(r),i=n(2),u=n(9),s=n(0),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(u.a)(t))})),o(""))},ac:!0,children:Object(s.jsx)("input",{type:"text",placeholder:"Search",autoFocus:!0,value:a,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),p=n.n(d),f=n(8),l=function(){var t=Object(f.a)(p.a.mark((function t(e){var n,c,r,a,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"iJJ2vzkQFv0JqxZJSzhOuD9zKE5m2er3","r","10","5",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&rating=").concat("r","&limit=").concat("10","&offset=").concat("5","&api_key=").concat("iJJ2vzkQFv0JqxZJSzhOuD9zKE5m2er3"),t.next=8,fetch(n);case 8:return c=t.sent,t.next=11,c.json();case 11:return r=t.sent,a=r.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){t.id;var e=t.title,n=t.url;return Object(s.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(s.jsx)("img",{src:n,alt:e}),Object(s.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){l(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),3e3)}))}),[t]),r}(e),r=n.data,a=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:e}),a&&Object(s.jsx)("p",{children:"Loading..."}),Object(s.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(s.jsx)(b,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(c.useState)([""]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(o,{setCategories:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ul",{children:n.map((function(t){return Object(s.jsx)(h,{category:t},t)}))})]})};O.defaultProps={title:"Gift Expert App"};var x=O,m=(n(17),document.querySelector("#root"));a.a.render(Object(s.jsx)(x,{}),m)}},[[18,1,2]]]);
//# sourceMappingURL=main.7667674b.chunk.js.map