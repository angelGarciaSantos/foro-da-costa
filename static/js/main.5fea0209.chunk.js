(this["webpackJsonpforo-da-costa"]=this["webpackJsonpforo-da-costa"]||[]).push([[0],{65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(19),a=c.n(r),i=c(23),o=c(11),l=c(15),j=c(29),d=c.n(j),b=(c(28),c(2)),u=function(e){var t=e.post,c=t.user,n=t._id,s=t.title,r=(t.content,t.date),a=d()(r).format("DD/MM/YYYY");return Object(b.jsxs)("li",{className:"tc pa3 center b--dashed bw1 b--black-30 dim mv2",onClick:function(){return e.openPostDetailProps(n)},children:[Object(b.jsx)("p",{className:"courier f4",children:s}),Object(b.jsxs)("p",{className:"courier f5",children:["por ",c,", ",a," "]})]})},p=function(e){return Object(b.jsx)("ul",{children:e.posts.map((function(t){return Object(b.jsx)(u,{post:t,openPostDetailProps:e.openPostDetailProps},t._id)}))})},h=c(7),O=c(74),m=c(76),f=c(73),x=function(e){return Object(b.jsxs)(O.a,{bg:"light",expand:"lg",children:[Object(b.jsxs)(O.a.Brand,{className:"courier",href:"#/",children:[Object(b.jsx)("i",{class:"fi-rr-glasses"}),"Foro da Costa"]}),Object(b.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(O.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(m.a,{className:"mr-auto",children:[Object(b.jsx)(m.a.Link,{href:"#/",className:"courier",children:"Inicio"}),Object(b.jsx)(m.a.Link,{href:"#link",className:"courier",children:"Mensajes"}),Object(b.jsxs)(f.a,{title:"Opciones",id:"basic-nav-dropdown",className:"courier",children:[Object(b.jsx)(f.a.Item,{href:"#action/3.1",children:"Action"}),Object(b.jsx)(f.a.Item,{href:"#action/3.2",children:"Another action"}),Object(b.jsx)(f.a.Item,{href:"#action/3.3",children:"Something"}),Object(b.jsx)(f.a.Divider,{}),Object(b.jsx)(f.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})},N=(c.p,function(e){var t=e.getPostById(Object(h.g)().id),c=t.user,n=(t._id,t.title),s=t.content,r=t.date,a=d()(r).format("DD/MM/YYYY");return Object(b.jsxs)("div",{className:"tc pa3 center b--dashed bw1 b--black-30 dim ma4",children:[Object(b.jsx)("p",{className:"courier f4 tc",children:n}),Object(b.jsx)("p",{className:"courier f5",children:s}),Object(b.jsxs)("p",{className:"courier f6 tc",children:["por ",c,", ",a," "]})]})}),g=c(43),v=c(48),P=function(e){var t=Object(v.a)(),c=t.register,n=t.handleSubmit,s=t.watch,r=t.formState.errors;return console.log(s("title")),console.log(s("content")),Object(b.jsxs)("form",{className:"courier tc",onSubmit:n((function(t){console.log(t),e.createNewPost(t)})),children:[Object(b.jsx)("label",{className:"courier pa3",children:"Titulo"}),Object(b.jsx)("input",Object(g.a)({className:"courier"},c("title",{required:!0}))),r.title&&Object(b.jsx)("span",{children:"Debes introducir un t\xedtulo"}),Object(b.jsx)("label",{className:"courier pa3",children:"Contenido"}),Object(b.jsx)("input",Object(g.a)({className:"courier"},c("content",{required:!0}))),r.content&&Object(b.jsx)("span",{children:"Debes introducir alg\xfan contenido"}),Object(b.jsx)("input",{className:"courier",type:"submit"})]})},k=c(75),D=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(h.f)();var a=function(){console.log("Obteniendo info del API"),fetch("https://api-rest-example-21.herokuapp.com/api/post").then((function(e){return e.json()})).then((function(e){return console.log("Posts received: ".concat(e.posts)),s(e.posts),e.posts}))};return Object(n.useEffect)((function(){a()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{}),Object(b.jsxs)(h.c,{children:[Object(b.jsxs)(h.a,{exact:!0,path:"/",children:[Object(b.jsx)(p,{posts:c,openPostDetailProps:function(e){r.push("/post/".concat(e))}}),Object(b.jsx)("div",{className:"tc",children:Object(b.jsx)("a",{className:"courier f6 link dim ba ph3 pv2 mb2 dib mid-gray",onClick:function(){r.push("/new")},children:"Crear nuevo tema"})})]}),Object(b.jsx)(h.a,{path:"/post/:id",children:Object(b.jsx)(N,{getPostById:function(e){var t=-1;return c.map((function(c){c._id==e&&(t=c)})),t}})}),Object(b.jsx)(h.a,{path:"/new",children:Object(b.jsx)(P,{createNewPost:function(e){var t=new Date,n={id:Object(k.a)(),title:e.title,content:e.content,user:"An\xf3nimo",date:t};s([].concat(Object(o.a)(c),[n]));var i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};fetch("https://api-rest-example-21.herokuapp.com/api/post",i).then((function(e){return e.json()})).then((function(e){a(),r.push("/")}))}})})]})]})};c(64),c(65);a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(D,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.5fea0209.chunk.js.map