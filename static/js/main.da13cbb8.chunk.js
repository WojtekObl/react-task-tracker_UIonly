(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(9),o=n.n(a),s=(n(16),n(11)),i=n(7),u=n(3),l=n.n(u),d=n(6),j=n(2),b=n(0),f=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})})};f.defaultProps={color:"steelblue"};var h=f,O=function(e){var t=e.title,n=e.onAdd,r=e.showAdd;return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)(h,{color:r?"gray":"green",text:r?"Close":"Add",onClick:n})]})};O.defaultProps={title:"Task Tracker"};var x=O,p=n(10),m=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(b.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){r(t.id)},children:[Object(b.jsxs)("h3",{children:[t.text," ",Object(b.jsx)(p.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(b.jsx)("p",{children:t.day})]})},k=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(b.jsx)(b.Fragment,{children:t.map((function(e,t){return Object(b.jsx)(m,{task:e,onDelete:n,onToggle:r},t)}))})},v=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(j.a)(n,2),a=c[0],o=c[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),u=i[0],l=i[1],d=Object(r.useState)(!1),f=Object(j.a)(d,2),h=f[0],O=f[1];return Object(b.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:h}),o(""),l(""),O(!1)):alert("Please add task")},children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Task"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Day and Time"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control form-control-check",children:[Object(b.jsx)("label",{children:"Set Reminder"}),Object(b.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return O(e.currentTarget.checked)}})]}),Object(b.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},g=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),o=Object(j.a)(a,2),u=o[0],f=o[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:f(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(x,{onAdd:function(){return c(!n)},showAdd:n}),n&&Object(b.jsx)(v,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);f([].concat(Object(s.a)(u),[n]))}}),u.length>0?Object(b.jsx)(k,{tasks:u,onDelete:O,onToggle:function(e){f(u.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No task to show"]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),y()}},[[19,1,2]]]);
//# sourceMappingURL=main.da13cbb8.chunk.js.map