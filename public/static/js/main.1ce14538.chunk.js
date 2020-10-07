(this["webpackJsonpreact-hooks-buylist"]=this["webpackJsonpreact-hooks-buylist"]||[]).push([[0],{41:function(e,t,a){e.exports=a(76)},46:function(e,t,a){},48:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},49:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(18),r=a.n(l),o=a(8),i=(a(46),a(14)),m=(a(47),a(48),a(49),function(){return c.a.createElement("div",null,c.a.createElement("h4",null,"Be prepared, do the shopping."),c.a.createElement("pre",null,JSON.stringify(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BASE_API_PORT:"443",REACT_APP_BASE_API_URL:"rm-app-shoplist-back.herokuapp.com"}),null,3)))}),s=a(6),u=a(9),d=a(2),E=a(36),p=a.n(E).a.create({baseURL:window.location.protocol+"//rm-app-shoplist-back.herokuapp.com:443/api",headers:{"Content-type":"application/json"}}),f=function(e){return p.get("/lists/?type="+e)},b=function(e){return p.get("/lists/".concat(e))},h=function(e){return p.post("/lists",e)},v=function(e,t){return p.put("/lists/".concat(e),t)},g=function(e){return p.delete("/lists/".concat(e))},N=function(){var e=Object(n.useState)({name:"",description:""}),t=Object(d.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),o=Object(d.a)(r,2),m=o[0],E=(o[1],Object(i.f)()),p=function(e){var t=e.target,n=t.name,c=t.value;l(Object(u.a)({},a,Object(s.a)({},n,c)))};return c.a.createElement("div",{className:"submit-form"},m?c.a.createElement("div",null,c.a.createElement("h4",null,"You submitted successfully!")):c.a.createElement("div",null,c.a.createElement("h4",null,"Add new buy list"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{type:"text",className:"form-control",id:"name",required:!0,value:a.name,onChange:p,name:"name"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"description"},"Description"),c.a.createElement("input",{type:"text",className:"form-control",id:"description",required:!0,value:a.description,onChange:p,name:"description"})),c.a.createElement("button",{onClick:function(){var e={name:a.name,type:"BUYLIST",description:a.description,active:1};h(e).then((function(e){l({id:e.data.id,name:e.data.name,description:e.data.description,active:e.data.active}),E.push("/buylists")})).catch((function(e){console.log(e)}))},className:"btn btn-success"},"Submit")))},y=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=(t[0],t[1]),l=Object(n.useState)([]),r=Object(d.a)(l,2),o=r[0],m=r[1],s=Object(n.useState)([]),u=Object(d.a)(s,2),E=u[0],p=u[1],b=Object(n.useState)(null),h=Object(d.a)(b,2),v=h[0],g=(h[1],Object(n.useState)(-1)),N=Object(d.a)(g,2),y=N[0],O=(N[1],Object(n.useState)("")),j=Object(d.a)(O,2),C=(j[0],j[1],Object(n.useState)("Loading...")),w=Object(d.a)(C,2),S=w[0],k=w[1],x=Object(i.f)();Object(n.useEffect)((function(){A()}),[]);var A=function(){f("BUYLIST").then((function(e){a(e.data),m(e.data.filter((function(e){return 1===+e.active}))),p(e.data.filter((function(e){return 0===+e.active}))),k("")})).catch((function(e){console.log(e)}))},T=function(e,t){x.push("/buylists/creator/"+e.id)};return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-10"},c.a.createElement("h4",null,"Shopping Lists"),c.a.createElement("button",{className:"m-3 btn btn-sm btn-success",onClick:function(){x.push("/buylists/add")}},"Add new list"),c.a.createElement("br",null),c.a.createElement("b",null,"Active lists"),c.a.createElement("ul",{className:"list-group"},o&&o.map((function(e,t){return c.a.createElement("li",{className:"list-group-item "+(t===y?"active":""),onClick:function(){return T(e)},key:t},e.name," - ",e.description," / #",e.id)}))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("b",null,"Inactive lists"),c.a.createElement("ul",{className:"list-group"},E&&E.map((function(e,t){return c.a.createElement("li",{className:"list-group-item "+(t===y?"active":""),onClick:function(){return T(e)},key:t},e.name," - ",e.description," / #",e.id)})))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("br",null),v?c.a.createElement("div",null,c.a.createElement("b",null,"Buy List"),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("strong",null,"Name:"))," ",v.name),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("strong",null,"Description:"))," ",v.description),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("strong",null,"Status:"))," ",v.active?"Active":"Not active"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("button",{className:"m-3 btn btn-sm btn-info",onClick:function(){x.push("/buylists/"+v.id)}},"Edit"),c.a.createElement("button",{className:"m-3 btn btn-sm btn-primary",onClick:function(){x.push("/buylists/creator/"+v.id)}},"Items"),c.a.createElement("button",{className:"m-3 btn btn-sm btn-warning",onClick:function(){x.push("/buylists/execute/"+v.id)}},"Execute")))):c.a.createElement("div",null,c.a.createElement("br",null),S)))},O=function(e){var t=Object(n.useState)({id:null,name:"",description:"",active:!1}),a=Object(d.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(""),i=Object(d.a)(o,2),m=i[0],E=i[1];Object(n.useEffect)((function(){var t;t=e.match.params.id,b(t).then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]);var p=function(e){var t=e.target,a=t.name,n=t.value;r(Object(u.a)({},l,Object(s.a)({},a,n)))},f=function(e){var t={id:l.id,name:l.title,description:l.description,active:e};v(l.id,t).then((function(t){r(Object(u.a)({},l,{active:e}))})).catch((function(e){console.log(e)}))};return c.a.createElement("div",null,l?c.a.createElement("div",{className:"edit-form"},c.a.createElement("h4",null,"Shopping List"),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"name",value:l.name,onChange:p})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"description"},"Description"),c.a.createElement("input",{type:"text",className:"form-control",id:"description",name:"description",value:l.description,onChange:p})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,c.a.createElement("strong",null,"Status:")),l.active?"Active":"Not active")),l.active?c.a.createElement("button",{className:"badge badge-primary mr-2",onClick:function(){return f(0)}},"Deactivate"):c.a.createElement("button",{className:"badge badge-primary mr-2",onClick:function(){return f(1)}},"Activate"),c.a.createElement("button",{className:"badge badge-danger mr-2",onClick:function(){g(l.id).then((function(t){e.history.push("/buylists")})).catch((function(e){console.log(e)}))}},"Delete"),c.a.createElement("button",{type:"submit",className:"badge badge-success",onClick:function(){v(l.id,l).then((function(e){E("The Buy List was updated successfully!")})).catch((function(e){console.log(e)}))}},"Update"),c.a.createElement("p",null,m)):c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("p",null,"Please click on a Buy List...")))},j=function(e){return p.post("/items",e)},C=function(e){return p.get("/items/parent/".concat(e))},w=function(e){return p.delete("/items/".concat(e))},S=function(e,t){return p.put("/items/".concat(e.id),{amount:t,value:t*e.price})},k=function(e,t){return p.put("/items/".concat(e),{status:t})},x=function(e){return p.delete("/items/all/".concat(e))},A=(a(72),function(e){var t=Object(n.useState)(e.item),a=Object(d.a)(t,2),l=a[0],r=a[1],o=e.index;Object(n.useEffect)((function(){r(e.item)}),[e.item]);var i=function(t,a){1*a===-1&&1*t.amount===0||S(t,1*t.amount+1*a*("KG"===t.unit?.1:1)).then((function(t){e.refresh()})).catch((function(e){console.log(e)}))};return l?c.a.createElement("tr",{key:o,style:{color:l.amount>0?"black":"red"}},c.a.createElement("td",null,o+1),c.a.createElement("td",null,c.a.createElement("button",{className:"badge badge-danger",onClick:function(){return function(t){w(t.id).then((function(t){e.refresh()})).catch((function(e){console.log(e)}))}(l)}},"-")),c.a.createElement("td",null,l.shop),c.a.createElement("td",null,l.category),c.a.createElement("td",{nowrap:"true"},l.name),c.a.createElement("td",{nowrap:"true",style:{textAlign:"right"}},c.a.createElement("span",null,l.amount),"\xa0\xa0",c.a.createElement("button",{className:"badge badge-primary",onClick:function(){return i(l,-1)}},"-"),"\xa0",c.a.createElement("button",{className:"badge badge-primary",onClick:function(){return i(l,1)}},"+")),c.a.createElement("td",null,l.unit.toLowerCase()),c.a.createElement("td",{style:{textAlign:"right"}},l.price),c.a.createElement("td",{style:{textAlign:"right"}},c.a.createElement("b",null,l.value)),c.a.createElement("td",{nowrap:"true"},c.a.createElement("i",null,l.source))):""}),T=function(e){var t=e.items,a=Math.round(100*t.reduce((function(e,t){return+e+ +t.value}),0))/100,l=Object(n.useState)([]),r=Object(d.a)(l,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){i(t)}),[t]),c.a.createElement("div",null,o&&o.length>0?c.a.createElement("table",{className:"table table-striped table-bordered table-hover table-sm"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"No"),c.a.createElement("th",null),c.a.createElement("th",null,"Shop"),c.a.createElement("th",null,"Category"),c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Unit"),c.a.createElement("th",null,"Price"),c.a.createElement("th",null,"Value"),c.a.createElement("th",null,"Source"))),c.a.createElement("tbody",null,o.map((function(t,a){return c.a.createElement(A,{key:a,item:t,index:a,refresh:e.refresh})})),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:"8"},"Total"),c.a.createElement("td",{style:{textAlign:"right"}},a),c.a.createElement("td",null)))):c.a.createElement("div",null,"Lista jest pusta",c.a.createElement("br",null),c.a.createElement("br",null)))},I=a(13),L=a(20),P=a(21),U=a(40),R=function(e){return p.post("/products",e)},D=function(e){return p.delete("/products/".concat(e))},_=function(e,t){return p.put("/products/".concat(e),t)},B=function(e){return p.get("/products/parent/"+e)},q=function(e){var t=Object(i.f)(),a=Object(n.useState)(""),l=Object(d.a)(a,2),r=l[0],o=l[1],m=Object(I.a)(new Set(e.items.map((function(e){return e.category})))).map((function(e){return{name:e}})),s=Object(n.useState)(m),u=Object(d.a)(s,2),E=u[0],p=u[1];Object(n.useEffect)((function(){f(r)}),[e]);var f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(0!==e.items.length){var a=e.items.filter((function(e){return""===t||e.name.toUpperCase().indexOf(t.toUpperCase())>-1})),n=Object(I.a)(new Set(a.map((function(e){return e.category})))).map((function(e){return{name:e}}));p(n)}};return c.a.createElement("div",null,c.a.createElement("input",{type:"text",className:"form-control",id:"filterText",placeholder:"Filter catalog...",value:r,onChange:function(e){o(e.currentTarget.value),f(e.currentTarget.value)},name:"filterText"}),c.a.createElement(L.a,null,E.map((function(a,n){return c.a.createElement(P.a,{key:n},c.a.createElement(P.a.Header,null,c.a.createElement(L.a.Toggle,{as:U.a,variant:"link",eventKey:n},a.name)),c.a.createElement(L.a.Collapse,{eventKey:n},c.a.createElement(P.a.Body,null,c.a.createElement("table",{className:"table table-striped table-bordered table-hover table-sm"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"No"),c.a.createElement("th",null),c.a.createElement("th",null,"Category"),c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Shop"),c.a.createElement("th",null,"Unit"),c.a.createElement("th",null,"Price"))),c.a.createElement("tbody",null,e.items.filter((function(e){return e.category===a.name&&(""===r||e.name.toUpperCase().indexOf(r.toUpperCase())>-1)})).map((function(a,n){return c.a.createElement("tr",{key:n},c.a.createElement("td",null,n+1),c.a.createElement("td",null,null!==e.parentId?c.a.createElement("button",{className:"badge badge-success",onClick:function(){return function(t){var a={parentid:e.parentId,name:t.name,category:t.category,shop:t.shop,source:e.parentType,unit:t.unit?t.unit:"SZT",price:t.price?t.price:0};j(a).then((function(t){e.refresh(),f(r)})).catch((function(e){console.log(e)}))}(a)}},"Add"):c.a.createElement("span",null,c.a.createElement("button",{className:"badge badge-primary",onClick:function(){return function(e){t.push("/products/"+e.id)}(a)}},"Edit"),c.a.createElement("button",{className:"badge badge-danger",onClick:function(){return function(t){window.confirm("Are you sure to DELETE a product?")&&D(t.id).then((function(t){e.refresh(),f(r)})).catch((function(e){console.log(e)}))}(a)}},"Del"))),c.a.createElement("td",null,a.category),c.a.createElement("td",null,a.name),c.a.createElement("td",null,a.shop),c.a.createElement("td",null,a.unit),c.a.createElement("td",null,a.price))})))))))}))),c.a.createElement("br",null))},F=function(e){var t={parentid:e.parentId,name:"",category:"",shop:"",source:"MANUAL",unit:"",price:"",amount:""},a=Object(n.useState)(t),l=Object(d.a)(a,2),r=l[0],o=l[1],i=function(e){return o(Object(u.a)({},r,Object(s.a)({},e.currentTarget.name,e.currentTarget.value)))};return c.a.createElement("div",null,c.a.createElement("h4",null,"Add item manually"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Name...",required:!0,value:r.name,onChange:i,name:"name"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",className:"form-control",id:"category",placeholder:"Category...",required:!0,value:r.category,onChange:i,name:"category"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",className:"form-control",id:"shop",placeholder:"Shop...",required:!0,value:r.shop,onChange:i,name:"shop"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",className:"form-control",id:"unit",placeholder:"Unit...",value:r.unit,onChange:i,name:"unit"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"number",className:"form-control",id:"price",placeholder:"Price...",value:r.price,onChange:i,name:"price"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"number",className:"form-control",id:"amount",placeholder:"Amount...",value:r.amount,onChange:i,name:"amount"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},r.price&&r.amount?Math.round(r.price*r.amount*100)/100:"")),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){""!==r.name&&""!==r.category?j(r).then((function(t){e.refresh()})).catch((function(e){console.log(e)})):alert("Name and category are required.")},className:"btn btn-success"},"Add item"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null))},V=function(e){return p.post("/extra/copyrecipe",e)},H=function(e,t,a){return p.get("/extra/copyitems/"+e+"/"+t+"/"+a)},K=function(e){return p.post("/extra/updateprices",e)},J=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(-1),i=Object(d.a)(o,2),m=i[0],s=i[1];Object(n.useEffect)((function(){u()}),[]);var u=function(){f("RECIPE").then((function(e){r(e.data),s(e.data[0].id)})).catch((function(e){console.log(e)}))};return c.a.createElement("div",null,c.a.createElement("h4",null,"Select recipe"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("select",{onChange:function(e){return s(1*e.currentTarget.value)},value:m,className:"form-control"},l.map((function(e,t){return c.a.createElement("option",{value:e.id,key:e.id},"#",e.id," ",e.name," - ",e.description," - ",e.createdAt)})))),c.a.createElement("div",{className:"col"},c.a.createElement("button",{className:"m-3 btn btn-success",onClick:function(){var t={sourceid:m,destid:e.buyListId};V(t).then((function(t){e.refresh()})).catch((function(e){console.log(e)}))}},"Add recipe"))))},M=function(e){return c.a.createElement("button",{className:"m-3 btn btn-sm btn-warning",onClick:function(){if(window.confirm("Do you want to update prices?")){var t={listid:e.listId};K(t).then((function(t){e.refresh()})).catch((function(e){console.log(e)}))}}},"Update prices")},W=function(e){var t=e.match.params.id,a={id:t,name:"",description:"",active:!1},l=Object(n.useState)(a),r=Object(d.a)(l,2),o=r[0],i=r[1],m=Object(n.useState)([]),s=Object(d.a)(m,2),u=s[0],E=s[1],p=Object(n.useState)([]),f=Object(d.a)(p,2),h=f[0],v=f[1];Object(n.useEffect)((function(){g(t),N(t),y(t)}),[t]);var g=function(e){b(e).then((function(e){i(e.data)})).catch((function(e){console.log(e)}))},N=function(e){C(e).then((function(e){E(e.data)})).catch((function(e){console.log(e)}))},y=function(e){B(e).then((function(e){v(e.data)})).catch((function(e){console.log(e)}))},O=function(){N(t),y(t)};return c.a.createElement("div",null,c.a.createElement("h3",null,"#",o.id," ",o.name," ",o.description),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("button",{className:"m-3 btn btn-sm btn-primary",onClick:function(){e.history.push("/buylists/"+t)}},"Edit"),c.a.createElement("button",{className:"m-3 btn btn-sm btn-success",onClick:function(){e.history.push("/buylists/execute/"+t)}},"> Execute"),u.length>0?c.a.createElement("span",null,c.a.createElement(M,{listId:o.id,refresh:function(){return N(t)}}),c.a.createElement("button",{className:"m-3 btn btn-sm btn-danger",onClick:function(){window.confirm("Do you want to delete all items from list?")&&x(t).then((function(e){N(t)})).catch((function(e){console.log(e)}))}},"Clear")):"")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(T,{items:u,refresh:O}))),c.a.createElement("h3",null,c.a.createElement("i",null,"Add new items")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(J,{buyListId:o.id,refresh:O}))),c.a.createElement("h4",null,"Choose from catalog"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(q,{parentId:o.id,parentType:"BUYLIST",items:h,refresh:O}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(F,{parentId:o.id,refresh:O}))),c.a.createElement("h4",null,"Copy 'LATER' items from another list"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("button",{className:"m-3 btn btn-sm btn-primary",onClick:function(){return function(e){var a=prompt("Please enter id of SOURCE list. \nItems marked 'LATER' will be copied.");H(a,e,"LATER").then((function(e){N(t)})).catch((function(e){console.log(e)}))}(o.id)}},"Choose list"))))},Y=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1],r=Object(i.f)();Object(n.useEffect)((function(){o()}),[]);var o=function(){f("RECIPE").then((function(e){l(e.data)})).catch((function(e){console.log(e)}))};return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-10"},c.a.createElement("h4",null,"Recipes"),c.a.createElement("button",{className:"m-3 btn btn-sm btn-success",onClick:function(){r.push("/recipes/add")}},"Add recipe"),c.a.createElement("ul",{className:"list-group"},a.length>0?a.map((function(e,t){return c.a.createElement("li",{className:"list-group-item",key:t,onClick:function(){return t=e.id,void r.push("/recipes/creator/"+t);var t}},"#",e.id," ",e.name," - ",e.description," - ",e.createdAt)})):"Lista jest pusta")))},z=function(){var e=Object(i.f)(),t=Object(n.useState)({}),a=Object(d.a)(t,2),l=a[0],r=a[1],o=function(e){var t=e.target,a=t.name,n=t.value;r(Object(u.a)({},l,Object(s.a)({},a,n)))};return c.a.createElement("div",{className:"submit-form"},c.a.createElement("h4",null,"Add new recipe"),c.a.createElement("div",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{type:"text",className:"form-control",id:"name",required:!0,value:l.name,onChange:o,name:"name"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"description"},"Description"),c.a.createElement("input",{type:"text",className:"form-control",id:"description",required:!0,value:l.description,onChange:o,name:"description"})),c.a.createElement("button",{onClick:function(){var t={name:l.name,type:"RECIPE",description:l.description};h(t).then((function(t){r({id:t.data.id,name:t.data.name,type:t.data.type,description:t.data.description,active:t.data.active}),e.push("/recipes/creator/"+t.data.id)})).catch((function(e){console.log(e)}))},className:"btn btn-success"},"Save")))},G=function(e){var t=e.match.params.id,a={id:t,name:"",description:"",active:!1},l=Object(n.useState)(a),r=Object(d.a)(l,2),o=r[0],i=r[1],m=Object(n.useState)([]),s=Object(d.a)(m,2),u=s[0],E=s[1],p=Object(n.useState)([]),f=Object(d.a)(p,2),h=f[0],v=f[1];Object(n.useEffect)((function(){g(t),N(t),y(t)}),[t]);var g=function(e){b(e).then((function(e){i(e.data)})).catch((function(e){console.log(e)}))},N=function(e){C(e).then((function(e){E(e.data)})).catch((function(e){console.log(e)}))},y=function(e){B(e).then((function(e){v(e.data)})).catch((function(e){console.log(e)}))},O=function(){N(t),y(t)};return c.a.createElement("div",null,c.a.createElement("h2",null,"Recipe #",o.id," ",o.name),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(T,{items:u,refresh:O}))),c.a.createElement(M,{listId:o.id,refresh:function(){return N(t)}}),c.a.createElement("h4",null,"Choose product from catalog"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(q,{parentType:"RECIPE",parentId:o.id,items:h,refresh:O}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(F,{parentId:o.id,refresh:O}))))},Z=function(e){var t=Object(n.useState)({name:"",category:"",shop:"",unit:"SZT",price:""}),a=Object(d.a)(t,2),l=a[0],r=a[1],o=function(e){return r(Object(u.a)({},l,Object(s.a)({},e.currentTarget.name,e.currentTarget.value)))};return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Name...",required:!0,value:l.name,onChange:o,name:"name"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",className:"form-control",id:"category",placeholder:"Category...",required:!0,value:l.category,onChange:o,name:"category"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",className:"form-control",id:"shop",placeholder:"Shop...",required:!0,value:l.shop,onChange:o,name:"shop"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"text",className:"form-control",id:"unit",placeholder:"Unit...",value:l.unit,onChange:o,name:"unit"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("input",{type:"number",className:"form-control",id:"price",placeholder:"Price...",value:l.price,onChange:o,name:"price"}))),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){""!==l.name&&""!==l.category?R(l).then((function(t){e.refresh()})).catch((function(e){console.log(e)})):alert("Name and category are required.")},className:"btn btn-success"},"Add"),c.a.createElement("br",null),c.a.createElement("br",null))},$=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),o=Object(d.a)(r,2),i=o[0],m=o[1];Object(n.useEffect)((function(){s()}),[]);var s=function(){B(null).then((function(e){l(e.data);var t=Object(I.a)(new Set(e.data.map((function(e){return e.category}))));m(t)})).catch((function(e){console.log(e)}))};return c.a.createElement("div",null,c.a.createElement("h1",null,"Products"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(Z,{refresh:s}))),c.a.createElement(q,{parentType:"",parentId:null,items:a,categories:i,refresh:s}))},Q=function(e){var t=Object(n.useState)({id:null,name:"",category:"",shop:"",unit:"",price:0}),a=Object(d.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(-1),i=Object(d.a)(o,2),m=i[0],E=i[1],p=Object(n.useState)(-1),f=Object(d.a)(p,2),b=f[0],h=f[1],v=Object(n.useState)(""),g=Object(d.a)(v,2),N=g[0],y=g[1];Object(n.useEffect)((function(){var t;y(""),r((t=e.match.params.id,void B(null).then((function(e){var a=e.data.findIndex((function(e){return+e.id===+t}));return r(e.data[a]),E(a>0?e.data[a-1].id:null),a<e.data.length-1?h(e.data[a+1].id):h(null),e.data[a]})).catch((function(e){console.log(e)}))))}),[e.match.params.id]);var O=function(e){var t=e.target,a=t.name,n=t.value;r(Object(u.a)({},l,Object(s.a)({},a,n)))},j=function(t){e.history.push("/products/"+t)};return c.a.createElement("div",null,l?c.a.createElement("div",{className:"edit-form"},c.a.createElement("h4",null,"Product"),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"name",value:l.name,onChange:O})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"category"},"Category"),c.a.createElement("input",{type:"text",className:"form-control",id:"category",name:"category",value:l.category,onChange:O})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"shop"},"Shop"),c.a.createElement("input",{type:"text",className:"form-control",id:"shop",name:"shop",value:l.shop,onChange:O})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"unit"},"Unit"),c.a.createElement("input",{type:"text",className:"form-control",id:"unit",name:"unit",value:l.unit,onChange:O})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"price"},"Price"),c.a.createElement("input",{type:"number",className:"form-control",id:"price",name:"price",value:l.price,onChange:O}))),m?c.a.createElement("button",{type:"submit",className:"btn btn-info",onClick:function(){return j(m)}},"<"):"",b?c.a.createElement("button",{type:"submit",className:"btn btn-info",onClick:function(){return j(b)}},">"):"",c.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){window.confirm("Do you want to remove product?")&&D(l.id).then((function(t){e.history.push("/products")})).catch((function(e){console.log(e)}))}},"Delete"),c.a.createElement("button",{type:"submit",className:"btn btn-success",onClick:function(){_(l.id,l).then((function(e){y("The Product was updated successfully!")})).catch((function(e){console.log(e)}))}},"Update"),c.a.createElement("p",null,N)):"")},X=function(e){return e.charAt(0).toUpperCase()+e.toLowerCase().slice(1)},ee=function(e){var t=Math.round(10*e.rows.reduce((function(e,t){return+e+ +t.value}),0))/10,a=function(t,a){k(t.id,a).then((function(t){e.refresh()})).catch((function(e){console.log(e)}))};return c.a.createElement("div",{className:"row"},e.rows.length>0?c.a.createElement("div",{className:"col"},c.a.createElement("h4",null,e.status),"shops=",JSON.stringify(e.shops),c.a.createElement("br",null),"categories=",JSON.stringify(e.categories),c.a.createElement("table",{className:"table table-striped table-bordered table-hover table-sm"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"No"),c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Cat./Shop"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Unit"),c.a.createElement("th",null,"Price"),c.a.createElement("th",null,"Value"),c.a.createElement("th",null,"Source"))),c.a.createElement("tbody",null,e.rows.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",{nowrap:"true"},"ACTIVE"===e.status?c.a.createElement("button",{className:"badge badge-warning",onClick:function(){return a(e,"LATER")}},c.a.createElement("span",{style:{fontSize:"11px"}},"?")):c.a.createElement("button",{className:"badge badge-info",onClick:function(){return a(e,"ACTIVE")}},c.a.createElement("span",{style:{fontSize:"11px"}},"^")),"\xa0",t+1),c.a.createElement("td",{nowrap:"true"},"ACTIVE"===e.status?c.a.createElement("button",{className:"badge badge-success",onClick:function(){return a(e,"BOUGHT")}},c.a.createElement("big",null,e.name)):c.a.createElement("span",null,e.name)),c.a.createElement("td",{nowrap:"true"},c.a.createElement("span",{style:{fontSize:"8px"}},c.a.createElement("b",null,X(e.category))," / ",X(e.shop))),c.a.createElement("td",{style:{textAlign:"right"}},e.amount),c.a.createElement("td",null,e.unit.toLowerCase()),c.a.createElement("td",{style:{textAlign:"right"}},e.price),c.a.createElement("td",{style:{textAlign:"right"}},c.a.createElement("b",null,e.value)),c.a.createElement("td",{nowrap:"true"},c.a.createElement("i",null,e.source)))})),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:"6"},"Total"),c.a.createElement("td",{style:{textAlign:"right"}},c.a.createElement("b",null,t)),c.a.createElement("td",null))))):"Lista jest pusta")},te=function(e){var t=e.items.filter((function(t){return t.status===e.status})),a=Object(I.a)(new Set(t.map((function(e){return X(e.shop)})))),n=Object(I.a)(new Set(t.map((function(e){return X(e.category)}))));return c.a.createElement("div",null,c.a.createElement(ee,{rows:t,refresh:e.refresh,status:e.status,shops:a,categories:n}))},ae=function(e){var t=e.match.params.id,a={id:t,name:"",description:"",active:!1},l=Object(n.useState)(a),r=Object(d.a)(l,2),o=r[0],i=r[1],m=Object(n.useState)([]),s=Object(d.a)(m,2),u=s[0],E=s[1];Object(n.useEffect)((function(){p(t),f(t)}),[t]);var p=function(e){b(e).then((function(e){i(e.data)})).catch((function(e){console.log(e)}))},f=function(e){C(e).then((function(e){E(e.data)})).catch((function(e){console.log(e)}))},h=function(){f(t)};return c.a.createElement("div",null,c.a.createElement("h3",null,"#",o.id," ",o.name," ",o.description),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("button",{className:"m-3 btn btn-sm btn-primary",onClick:function(){e.history.push("/buylists/creator/"+t)}},"Prepare list"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(te,{items:u,buyListId:t,refresh:h,status:"ACTIVE"}))),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(te,{items:u,buyListId:t,refresh:h,status:"LATER"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(te,{items:u,buyListId:t,refresh:h,status:"BOUGHT"}))))};var ne=function(){return c.a.createElement(o.a,null,c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},c.a.createElement(o.b,{to:"".concat("","/home"),className:"navbar-brand"},c.a.createElement("span",{className:"glyphicon glyphicon-home"},"Home")),c.a.createElement("div",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{to:"".concat("","/buylists"),className:"nav-link"},"Shop lists")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{to:"".concat("","/recipes"),className:"nav-link"},"Recipes")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.b,{to:"".concat("","/products"),className:"nav-link"},"Products")))),c.a.createElement("div",{className:"container mt-3"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"".concat("","/buylists"),component:y}),c.a.createElement(i.a,{exact:!0,path:"".concat("","/buylists/add"),component:N}),c.a.createElement(i.a,{exact:!0,path:"".concat("","/buylists/execute/:id"),component:ae}),c.a.createElement(i.a,{exact:!0,path:"".concat("","/buylists/creator/:id"),component:W}),c.a.createElement(i.a,{path:"".concat("","/buylists/:id"),component:O}),c.a.createElement(i.a,{exact:!0,path:"".concat("","/recipes"),component:Y}),c.a.createElement(i.a,{exact:!0,path:"".concat("","/recipes/add"),component:z}),c.a.createElement(i.a,{path:"".concat("","/recipes/creator/:id"),component:G}),c.a.createElement(i.a,{exact:!0,path:"".concat("","/products"),component:$}),c.a.createElement(i.a,{path:"".concat("","/products/:id"),component:Q}),c.a.createElement(i.a,{exact:!0,path:["/","".concat("","/home")],component:m})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,null,c.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.1ce14538.chunk.js.map