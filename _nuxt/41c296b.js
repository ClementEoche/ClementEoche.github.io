(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{217:function(t,e,n){"use strict";n.r(e);var r={name:"navbar",props:["page"]},o=n(23),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[n("vs-navbar",{attrs:{square:"","text-white":"",fixed:"",color:"dark"},scopedSlots:t._u([{key:"left",fn:function(){return[n("vs-navbar-item",{attrs:{active:"home"==t.page,id:"home",to:"/"}},[t._v("\n      Gestionnaire de Taches\n      ")])]},proxy:!0}])},[t._v(" "),n("vs-navbar-item",{attrs:{active:"home"==t.page,id:"home",to:"/"}},[t._v("\n        Accueil\n      ")]),t._v(" "),n("vs-navbar-item",{attrs:{active:"kanban"==t.page,id:"kanban",to:"/kanban"}},[t._v("\n      Mes Taches\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},222:function(t,e,n){"use strict";n.r(e);n(32);var r=n(6),o={name:"Form",data:function(){return{titleInput:"",descriptionInput:"",doneInput:!1}},methods:{addTask:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t,e.next=3,t.$axios.$post("/api/tasks",{title:t.titleInput,description:t.descriptionInput,done:t.doneInput}).then((function(t){location.reload()}));case 3:case"end":return e.stop()}}),e)})))()}}},c=n(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-inputs"},[n("vs-input",{staticClass:"mb-4",attrs:{"label-placeholder":"Title"},model:{value:t.titleInput,callback:function(e){t.titleInput=e},expression:"titleInput"}}),t._v(" "),n("vs-input",{staticClass:"mb-4",attrs:{"label-placeholder":"Description"},model:{value:t.descriptionInput,callback:function(e){t.descriptionInput=e},expression:"descriptionInput"}}),t._v(" "),n("vs-button",{attrs:{flat:"",dark:""},on:{click:t.addTask}},[t._v("\n    Ajouter\n  ")])],1)}),[],!1,null,"1b861356",null);e.default=component.exports},223:function(t,e,n){"use strict";n.r(e);n(63),n(66),n(32);var r=n(6),o={name:"Table",props:["taskitem"],data:function(){return{tasks:[]}},methods:{getTasks:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/api/tasks");case 2:n=e.sent,t.tasks=n;case 4:case"end":return e.stop()}}),e)})))()},getOptBtn:function(t){JSON.parse(JSON.stringify(this.tasks)).forEach((function(t){document.getElementById(t.id+"supp").classList.add("hidden"),document.getElementById(t.id+"mod").classList.add("hidden")})),document.getElementById(t+"supp").classList.remove("hidden"),document.getElementById(t+"mod").classList.remove("hidden")},suppTask:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.$delete("/api/tasks/"+t).then((function(){location.reload()}));case 2:case"end":return n.stop()}}),n)})))()},showModifForm:function(t){this.$emit("updateButton",t)}},created:function(){this.getTasks()}},c=n(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vs-table",{attrs:{striped:""},scopedSlots:t._u([{key:"thead",fn:function(){return[n("vs-tr",[n("vs-th",[t._v("\n        Title\n      ")]),t._v(" "),n("vs-th",[t._v("\n        Description\n      ")]),t._v(" "),n("vs-th")],1)]},proxy:!0},{key:"tbody",fn:function(){return t._l(t.tasks,(function(tr,i){return n("vs-tr",{key:i,attrs:{data:tr}},[n("vs-td",[t._v("\n        "+t._s(tr.title)+"\n      ")]),t._v(" "),n("vs-td",[t._v("\n        "+t._s(tr.description)+"\n      ")]),t._v(" "),n("vs-td",[n("vs-button",{attrs:{flat:"",color:"dark",icon:""},on:{click:function(e){return t.getOptBtn(tr.id)}}},[n("i",{staticClass:"bx bxs-x-square"})])],1),t._v(" "),n("vs-td",[n("vs-button",{staticClass:"hidden",attrs:{id:tr.id+"supp",color:"danger",type:"relief"},on:{click:function(e){return t.suppTask(tr.id)}}},[t._v(" Supprimer")])],1),t._v(" "),n("vs-td",[n("vs-button",{staticClass:"hidden",attrs:{id:tr.id+"mod",color:"dark",type:"relief"},on:{click:function(e){return t.showModifForm(tr)}}},[t._v("Modifier")])],1)],1)}))},proxy:!0}])})}),[],!1,null,"125f36fc",null);e.default=component.exports},239:function(t,e,n){"use strict";n.r(e);n(229),n(232),n(32);var r=n(6),o={name:"ModifForm",props:["task"],methods:{modifyTask:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t,e.next=3,t.$axios.$put("/api/tasks/"+t.task.id,{title:t.task.title,description:t.task.description,done:t.task.done}).then((function(t){location.reload()}));case 3:case"end":return e.stop()}}),e)})))()}}},c=n(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-inputs"},[n("vs-input",{staticClass:"mb-4",staticStyle:{"margin-bottom":"20px"},attrs:{label:"Title"},model:{value:t.task.title,callback:function(e){t.$set(t.task,"title",e)},expression:"task.title"}}),t._v(" "),n("vs-input",{staticClass:"mb-4",staticStyle:{"margin-bottom":"20px"},attrs:{label:"Description"},model:{value:t.task.description,callback:function(e){t.$set(t.task,"description",e)},expression:"task.description"}}),t._v(" "),n("vs-button",{attrs:{flat:"",dark:""},on:{click:t.modifyTask}},[t._v("\n    Modifier\n  ")])],1)}),[],!1,null,"5c3ddac5",null);e.default=component.exports},241:function(t,e,n){"use strict";n.r(e);var r=n(217),o=(n(224),n(223)),c=n(222),l={name:"kanban",data:function(){return{selectedTask:[]}},components:{Navbar:r.default,Table:o.default,Form:c.default},methods:{showmodifytask:function(t){this.selectedTask=t,document.getElementById("modif").classList.remove("hidden")}}},d=n(23),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid",staticStyle:{"margin-top":"100px"}},[n("vs-row",[n("Navbar",{attrs:{page:"kanban"}})],1),t._v(" "),n("vs-row",{attrs:{justify:"center"}},[n("vs-col",{attrs:{w:"2"}},[n("h5",[t._v("Ajouter une tache")]),t._v(" "),n("br"),t._v(" "),n("Form"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"hidden",attrs:{id:"modif"}},[n("h5",[t._v("Modifier la tache")]),t._v(" "),n("br"),t._v(" "),n("ModifForm",{attrs:{task:t.selectedTask}})],1)],1),t._v(" "),n("vs-col",{attrs:{w:"5"}},[n("h5",[t._v("My tasks")]),t._v(" "),n("Table",{on:{updateButton:function(e){return t.showmodifytask(e)}}})],1),t._v(" "),n("vs-col",{attrs:{w:"3"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(217).default,Form:n(222).default,ModifForm:n(239).default,Table:n(223).default})}}]);