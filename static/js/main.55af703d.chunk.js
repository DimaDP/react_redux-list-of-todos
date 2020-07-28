(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),u=n(5),l=n(22),s=n(10),i=n(2),d=n(8),m=n(21),b=function(e){return e.loading},E=function(e){return e.todos},p=function(e){return e.loaded},f={loading:!1,loaded:!1,todos:[]},O=Object(d.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case"FINISH_LOADING":return Object(i.a)(Object(i.a)({},e),{},{loading:!1,loaded:!0});case"DATA_LOADING":return Object(i.a)(Object(i.a)({},e),{},{todos:t.todos});case"DATA_SORT_TITLE":return Object(i.a)(Object(i.a)({},e),{},{todos:Object(s.a)(e.todos).sort((function(e,t){return e.title.localeCompare(t.title)}))});case"DATA_SORT_COMPLETED":return Object(i.a)(Object(i.a)({},e),{},{todos:Object(s.a)(e.todos).sort((function(e,t){return Number(e.completed)-Number(t.completed)}))});case"DATA_SORT_NAME":return Object(i.a)(Object(i.a)({},e),{},{todos:Object(s.a)(e.todos).sort((function(e,t){return e.user&&t.user?e.user.name.localeCompare(t.user.name):0}))});case"DELETE_ITEM":return Object(i.a)(Object(i.a)({},e),{},{todos:Object(s.a)(e.todos).filter((function(e){return e.id!==t.id}))});default:return e}}),Object(m.composeWithDevTools)()),T=n(7),j=n.n(T),A=n(13),h=(n(33),function(e){var t=e.name;return r.a.createElement("td",null,t)}),y=function(e){var t=e.todo,n=e.deleteItem;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",name:"",id:"",checked:t.completed})),r.a.createElement("td",null,t.title),r.a.createElement(h,{name:t.user?t.user.name:"user is not found"}),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n(t.id)},type:"button"},"delete")))},_=function(){var e=Object(u.b)(),t=Object(u.c)(E),n=function(t){e(function(e){return{type:"DELETE_ITEM",id:e}}(t))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table"},r.a.createElement("caption",null,r.a.createElement("strong",null,"ToDo List")),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"User"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(y,{deleteItem:n,todo:e,key:e.id})})))))},D=function(){var e=Object(A.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate.academy/students-api/users").then((function(e){return e.json()}));case 2:return t=e.sent,e.next=5,fetch("https://mate.academy/students-api/todos").then((function(e){return e.json()}));case 5:return n=e.sent,e.abrupt("return",n.data.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{user:t.data.find((function(t){return t.id===e.userId}))})})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.c)(p),t=Object(u.c)(b),n=Object(u.b)(),a=function(){var e=Object(A.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"START_LOADING"}),e.next=3,D().then((function(e){n({type:"DATA_LOADING",todos:e})}));case 3:n({type:"FINISH_LOADING"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Static list of todos"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"controls"},r.a.createElement("button",{type:"button",className:"controls__button",onClick:function(){n({type:"DATA_SORT_TITLE"})}},"Sort by Title"),r.a.createElement("button",{type:"button",onClick:function(){n({type:"DATA_SORT_COMPLETED"})}},"Sort by Completed"),r.a.createElement("button",{type:"button",onClick:function(){n({type:"DATA_SORT_NAME"})}},"Sort by Name")),r.a.createElement("div",{className:"content"},r.a.createElement(_,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:a,disabled:t},t?"loading...":"Load")))},N=function(){return r.a.createElement(u.a,{store:O},r.a.createElement(l.a,null,r.a.createElement(I,null)))};o.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.55af703d.chunk.js.map