(this.webpackJsonploginapp=this.webpackJsonploginapp||[]).push([[0],[,,,,,,,,,,,,function(e,r,n){},function(e,r,n){},,function(e,r,n){},function(e,r,n){},function(e,r,n){},function(e,r,n){"use strict";n.r(r);var t=n(1),a=n.n(t),c=n(5),s=n.n(c),o=(n(12),n.p,n(13),n(0));var i=function(e){var r=e.label,n=e.uri;return Object(o.jsx)("li",{children:Object(o.jsx)("a",{alt:r,href:n,children:r})})};n(15);var l=function(){var e=[{label:"Home",uri:"#home"},{label:"Tarjetas",uri:"#cards"},{label:"Acerca",uri:"#Acerca"}].map((function(e,r){return Object(o.jsx)(i,{label:e.label,uri:e.uri},r)}));return Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{children:e})})};var u=function(e){var r=e.title;return Object(o.jsx)("h1",{children:r})};n(16);var j=function(e){return e.children,Object(o.jsxs)("header",{children:[Object(o.jsx)(u,{title:"MY APP WITH REACT"}),Object(o.jsx)(l,{})]})};n(17);var d=n(2),b=n(3),p=n(6);var h=function(e){var r=e.children;return Object(o.jsxs)("form",{className:"mb-4 flex-col justify-center align-start space-y-4 px-4 border",children:[Object(o.jsx)("h2",{class:"flex justify-center",children:Object(o.jsx)("strong",{children:"Inicio de sesion"})}),r]})},x=n(7);var f=function(e){var r=e.type,n=e.id,t=e.fname,a=e.onChange,c=e.caption,s=e.value,i=e.error,l=Object(x.a)(e,["type","id","fname","onChange","caption","value","error"]);return Object(o.jsxs)("section",{children:[Object(o.jsx)("label",{children:c}),Object(o.jsx)("input",Object(b.a)({type:r,id:n,name:t,onChange:a,value:s},l)),i?Object(o.jsx)("section",{children:i}):null]})};var O=function(e){var r=e.caption,n=e.onClick;return Object(o.jsx)("button",{onClick:n,className:["w-full","items-center","justify-center","px-8","py-4","my-4","border","border-transparent","text-base","font-medium","rounded-lg","text-black","text-black","bg-green-300","hover:bg-indigo-200","md:py-4","md:text-lg","md:px-10"].join(" "),children:r})};var v=function(){var e=Object(t.useState)({username:"",password:"",usernameError:"",passwordError:""}),r=Object(p.a)(e,2),n=r[0],a=r[1],c=function(e){var r,t=e.currentTarget,c=t.name,s=t.value,o=null;"password"===c&&(o=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/.test(s)?null:"Contrase\xf1a Inv\xe1lida"),a(Object(b.a)(Object(b.a)({},n),{},(r={},Object(d.a)(r,c,s),Object(d.a)(r,c+"Error",o),r)))};return Object(o.jsxs)(h,{children:[Object(o.jsx)(f,{type:"text",id:"username",fname:"username",onChange:c,caption:"Correo Electr\xf3nico",value:n.username,error:n.usernameError,placeholder:"Tu correo"}),Object(o.jsx)(f,{type:"password",id:"password",fname:"password",onChange:c,caption:"Contrase\xf1a",value:n.password,error:n.passwordError,placeholder:"Contrase\xf1a"}),Object(o.jsx)(O,{caption:"Enviar",onClick:function(e){e.preventDefault(),e.stopPropagation();var r=n.username,t=n.password;alert("Usuario:".concat(r," Psswd:").concat(t))}})]})};var m=function(){return Object(o.jsxs)("section",{children:[Object(o.jsx)(j,{}),Object(o.jsx)("section",{className:"Login",children:Object(o.jsx)(v,{})})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(r){var n=r.getCLS,t=r.getFID,a=r.getFCP,c=r.getLCP,s=r.getTTFB;n(e),t(e),a(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.5c2b6a94.chunk.js.map