(this["webpackJsonpforo-da-costa"]=this["webpackJsonpforo-da-costa"]||[]).push([[0],{79:function(e,t,o){},98:function(e,t,o){"use strict";o.r(t);var c=o(0),n=o.n(c),a=o(16),r=o.n(a),s=o(27),i=o(11),l=o(13),d=o(32),j=o.n(d),u=(o(31),o(2)),p=function(e){var t=e.post,o=t.user,c=t._id,n=t.title,a=(t.content,t.date),r=j()(a).format("DD/MM/YYYY");return Object(u.jsxs)("li",{className:"tc pa3 center b--dashed bw1 b--black-30 dim mv2",onClick:function(){return e.openPostDetailProps(c)},children:[Object(u.jsx)("p",{className:"courier f4",children:n}),Object(u.jsxs)("p",{className:"courier f5",children:["por ",o,", ",r," "]})]})},h=function(e){return Object(u.jsx)("ul",{children:e.posts.map((function(t){return Object(u.jsx)(p,{post:t,openPostDetailProps:e.openPostDetailProps},t._id)}))})},b=o(7),m=o(105),O=o(108),g=o(104),f=function(e){var t=function(){return e.isUserLogged()};return Object(u.jsxs)(m.a,{bg:"light",expand:"lg",children:[Object(u.jsxs)(m.a.Brand,{className:"courier",href:"#/",children:[Object(u.jsx)("i",{class:"fi-rr-glasses"}),"Foro da Costa"]}),Object(u.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(m.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(O.a,{className:"mr-auto",children:[Object(u.jsx)(O.a.Link,{href:"#/",className:"courier",children:"Inicio"}),t()?null:Object(u.jsx)(O.a.Link,{href:"#/signup",className:"courier",children:"Registro"}),t()?null:Object(u.jsx)(O.a.Link,{href:"#/signin",className:"courier",children:"Entrar"}),t()?Object(u.jsx)(O.a.Link,{href:"#/logout",className:"courier",children:"Salir"}):null,Object(u.jsxs)(g.a,{title:"Opciones",id:"basic-nav-dropdown",className:"courier",children:[Object(u.jsx)(g.a.Item,{href:"#action/3.1",children:"Action"}),Object(u.jsx)(g.a.Item,{href:"#action/3.2",children:"Another action"}),Object(u.jsx)(g.a.Item,{href:"#action/3.3",children:"Something"}),Object(u.jsx)(g.a.Divider,{}),Object(u.jsx)(g.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})},x=(o.p,function(e){var t=e.getPostById(Object(b.g)().id),o=t.user,c=t._id,n=t.title,a=t.content,r=t.date,s=j()(r).format("DD/MM/YYYY");return Object(u.jsxs)("div",{className:"tc pa3 center b--dashed bw1 b--black-30 dim ma4",children:[Object(u.jsx)("p",{className:"courier f4 tc",children:n}),Object(u.jsx)("p",{className:"courier f5",children:a}),Object(u.jsxs)("p",{className:"courier f6 tc",children:["por ",o,", ",s," "]}),e.isUserLogged()?Object(u.jsx)("a",{className:"courier f6 link dim ba ph3 pv2 mb2 dib mid-gray",onClick:e.deletePost.bind(undefined,c),children:"Eliminar"}):null]})}),y=o(18),v=o(106),N=o(54),I=o(20),S=function(e){var t=Object(I.a)(),o=t.register,c=t.handleSubmit,n=t.watch;t.formState.errors;return console.log(n("email")),console.log(n("password")),Object(u.jsxs)(v.a,{className:"tc courier",onSubmit:c((function(t){console.log(t),e.signIn(t)})),children:[Object(u.jsxs)(v.a.Group,{controlId:"formBasicEmail",children:[Object(u.jsx)(v.a.Label,{children:"Correo Electr\xf3nico"}),Object(u.jsx)(v.a.Control,Object(y.a)({type:"email",placeholder:"Introduce tu direcci\xf3n de email"},o("email",{required:!0})))]}),Object(u.jsxs)(v.a.Group,{controlId:"formBasicPassword",children:[Object(u.jsx)(v.a.Label,{children:"Contrase\xf1a"}),Object(u.jsx)(v.a.Control,Object(y.a)({type:"password",placeholder:"Introduce tu contrase\xf1a"},o("password",{required:!0})))]}),Object(u.jsx)(N.a,{variant:"primary",type:"submit",children:"Entrar"})]})},k=function(e){var t=Object(I.a)(),o=t.register,c=t.handleSubmit,n=t.watch;t.formState.errors;return console.log(n("email")),console.log(n("displayName")),console.log(n("password")),Object(u.jsxs)(v.a,{className:"tc courier",onSubmit:c((function(t){console.log(t),e.signUp(t)})),children:[Object(u.jsxs)(v.a.Group,{controlId:"formBasicEmail",children:[Object(u.jsx)(v.a.Label,{children:"Correo Electr\xf3nico"}),Object(u.jsx)(v.a.Control,Object(y.a)({type:"email",placeholder:"Introduce un correo electr\xf3nico v\xe1lido"},o("email",{required:!0})))]}),Object(u.jsxs)(v.a.Group,{controlId:"formBasicDisplayName",children:[Object(u.jsx)(v.a.Label,{children:"Pseud\xf3nimo"}),Object(u.jsx)(v.a.Control,Object(y.a)({type:"text",placeholder:"Introduce un pseud\xf3nimo"},o("displayName",{required:!0})))]}),Object(u.jsxs)(v.a.Group,{controlId:"formBasicPassword",children:[Object(u.jsx)(v.a.Label,{children:"Contrase\xf1a"}),Object(u.jsx)(v.a.Control,Object(y.a)({type:"password",placeholder:"Crea una contrase\xf1a"},o("password",{required:!0})))]}),Object(u.jsx)(N.a,{variant:"primary",type:"submit",children:"Registro"})]})},w=function(e){var t=Object(I.a)(),o=(t.register,t.handleSubmit);t.watch,t.formState.errors;return Object(u.jsxs)(v.a,{className:"tc courier",onSubmit:o((function(t){console.log(t),e.logOut()})),children:[Object(u.jsx)(v.a.Group,{controlId:"formBasicText",children:Object(u.jsx)(v.a.Label,{children:"\xbfRealmente deseas cerrar tu sesi\xf3n?"})}),Object(u.jsx)(N.a,{variant:"primary",type:"submit",children:"Cerrar Sesi\xf3n"})]})},C=(o(56),o(57),function(e){var t=Object(I.a)(),o=t.register,c=t.handleSubmit,n=t.watch;t.formState.errors;return console.log(n("title")),console.log(n("content")),Object(u.jsxs)(v.a,{className:"tc courier",onSubmit:c((function(t){console.log(t),e.createNewPost(t)})),children:[Object(u.jsxs)(v.a.Group,{controlId:"formBasicTitle",children:[Object(u.jsx)(v.a.Label,{children:"Titulo"}),Object(u.jsx)(v.a.Control,Object(y.a)({type:"text",placeholder:"Introduce el titulo del tema"},o("title",{required:!0})))]}),Object(u.jsxs)(v.a.Group,{controlId:"formBasicDisplayName",children:[Object(u.jsx)(v.a.Label,{children:"Contenido"}),Object(u.jsx)(v.a.Control,Object(y.a)({type:"text",placeholder:"Introduce el contenido del tema"},o("content",{required:!0})))]}),Object(u.jsx)(N.a,{variant:"primary",type:"submit",children:"Crear"})]})}),P=o(41),L=o(107),E=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),o=t[0],n=t[1],a=Object(c.useState)({logged:!1,name:"An\xf3nimo"}),r=Object(l.a)(a,2),s=r[0],d=r[1],j=Object(b.f)();var p=function(){console.log("Obteniendo info del API"),Object(P.trackPromise)(fetch("https://api-rest-example-21.herokuapp.com/api/post").then((function(e){return e.json()})).then((function(e){return console.log("Posts received: ".concat(e.posts)),n(e.posts),e.posts})))},m=function(){return console.log("Usuario logueado: ".concat(s)),s.logged};return Object(c.useEffect)((function(){p()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{isUserLogged:m}),Object(u.jsxs)(b.c,{children:[Object(u.jsxs)(b.a,{exact:!0,path:"/",children:[Object(u.jsx)(h,{posts:o,openPostDetailProps:function(e){j.push("/post/".concat(e))}}),m()?Object(u.jsx)("div",{className:"tc",children:Object(u.jsx)("a",{className:"courier f6 link dim ba ph3 pv2 mb2 dib mid-gray",onClick:function(){j.push("/new")},children:"Crear nuevo tema"})}):null]}),Object(u.jsx)(b.a,{path:"/post/:id",children:Object(u.jsx)(x,{getPostById:function(e){var t=-1;return o.map((function(o){o._id==e&&(t=o)})),t},deletePost:function(e){console.log("Deleting post: ".concat(e));var t=localStorage.getItem("token");t?fetch("https://api-rest-example-21.herokuapp.com/api/post/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+t,Host:"api.producthunt.com"}}).then((function(e){return e.text()})).then((function(e){console.log(e),p(),j.push("/")})).catch((function(e){console.log("Error con la autenticaci\xf3n al eliminar post: ".concat(e))})):console.log("No est\xe1s autenticado")},isUserLogged:m})}),Object(u.jsx)(b.a,{path:"/new",children:Object(u.jsx)(C,{createNewPost:function(e){var t=new Date;console.log(s),console.log(s.name);var c={id:Object(L.a)(),title:e.title,content:e.content,user:s.name,date:t};n([].concat(Object(i.a)(o),[c])),console.log("Creating post");var a=localStorage.getItem("token");if(a){var r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+a,Host:"api.producthunt.com"},body:JSON.stringify(c)};fetch("https://api-rest-example-21.herokuapp.com/api/post",r).then((function(e){return e.json()})).then((function(e){p(),j.push("/")}))}else console.log("No est\xe1s autenticado")}})}),Object(u.jsx)(b.a,{path:"/signin",children:Object(u.jsx)(S,{signIn:function(e){console.log("Sign In"),console.log(e);var t={email:e.email,password:e.password},o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("https://api-rest-example-21.herokuapp.com/api/signin",o).then((function(e){if(200!=e.status)throw"Error: ".concat(e.status);return e.json()})).then((function(e){console.log(e),console.log(e.token),localStorage.setItem("token",e.token),j.push("/"),d({logged:!0,name:e.displayName})})).catch((function(e){console.log("Error en la autenticaci\xf3n: ".concat(e))}))}})}),Object(u.jsx)(b.a,{path:"/signup",children:Object(u.jsx)(k,{signUp:function(e){console.log("Sign UP"),console.log(e);var t={email:e.email,displayName:e.displayName,password:e.password},o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("https://api-rest-example-21.herokuapp.com/api/signup",o).then((function(e){return e.json()})).then((function(e){console.log(e),console.log(e.token),localStorage.setItem("token",e.token),console.log(t.displayName),j.push("/"),d({logged:!0,name:t.displayName})}))}})}),Object(u.jsx)(b.a,{path:"/logout",children:Object(u.jsx)(w,{logOut:function(){console.log("Log Out"),localStorage.removeItem("token"),j.push("/"),d({logged:!1,name:"An\xf3nimo"})}})})]})]})},B=(o(78),o(79),o(58)),D=o.n(B),T=function(e){return Object(P.usePromiseTracker)().promiseInProgress&&Object(u.jsx)("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsx)(D.a,{type:"Oval",color:"#080808",height:"200",width:"100"})})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(E,{}),Object(u.jsx)(T,{})]})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.c3430a4f.chunk.js.map