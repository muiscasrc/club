(function(A){function e(e){for(var n,a,i=e[0],s=e[1],g=e[2],c=0,l=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(A[n]=s[n]);u&&u(e);while(l.length)l.shift()();return r.push.apply(r,g||[]),t()}function t(){for(var A,e=0;e<r.length;e++){for(var t=r[e],n=!0,a=1;a<t.length;a++){var s=t[a];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),A=i(i.s=t[0]))}return A}var n={},o={app:0},r=[];function a(A){return i.p+"js/"+({about:"about"}[A]||A)+"."+{about:"927d9871"}[A]+".js"}function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return A[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(A){var e=[],t=o[A];if(0!==t)if(t)e.push(t[2]);else{var n=new Promise((function(e,n){t=o[A]=[e,n]}));e.push(t[2]=n);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(A);var g=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(c);var t=o[A];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;g.message="Loading chunk "+A+" failed.\n("+n+": "+r+")",g.name="ChunkLoadError",g.type=n,g.request=r,t[1](g)}o[A]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},i.m=A,i.c=n,i.d=function(A,e,t){i.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:t})},i.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},i.t=function(A,e){if(1&e&&(A=i(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var n in A)i.d(t,n,function(e){return A[e]}.bind(null,n));return t},i.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return i.d(e,"a",e),e},i.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},i.p="/club/",i.oe=function(A){throw console.error(A),A};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],g=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=g;r.push([0,"chunk-vendors"]),t()})({0:function(A,e,t){A.exports=t("56d7")},"10de":function(A,e,t){var n={"./HelloWorld.vue":"fdab","./countdown/countdownIndex.vue":"fc01","./infotraining/infotrainingIndex.vue":"a9ec","./network/networkIndex.vue":"d0d9"};function o(A){var e=r(A);return t(e)}function r(A){if(!t.o(n,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return n[A]}o.keys=function(){return Object.keys(n)},o.resolve=r,A.exports=o,o.id="10de"},"31f7":function(A,e,t){A.exports=t.p+"img/header.cf201b25.png"},5170:function(A,e,t){},"56d7":function(A,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),o=function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("div",{staticClass:"app__group"},[n("img",{staticClass:"header",attrs:{src:t("31f7"),alt:"muiscas rugby club"}})]),A.deadLine.time>new Date?n("div",{staticClass:"app__group"},[n("countdown",{attrs:{end:A.deadLine.time,title:A.deadLine.title}})],1):n("div",{staticClass:"app__group"},[n("infotraining",{attrs:{info:A.infoTraining,title:A.infoTraining.title}}),n("countdown",{attrs:{end:A.initTraining}})],1),n("div",{staticClass:"app__group"},[n("network",{attrs:{links:A.network,newPage:""}})],1)])},r=[],a={data:function(){return{initTraining:new Date("2020/04/13 19:30:00").getTime(),deadLine:{time:new Date("2020/04/09 12:00:00").getTime(),title:"Pronto..."},network:[{name:"facebook",url:"https://facebook.com/muiscasrc",icon:"fa-facebook-square"},{name:"messenger",url:"https://m.me/muiscasrc",icon:"fa-facebook-messenger"},{name:"twitter",url:"https://twitter.com/muiscasrc",icon:"fa-twitter-square"},{name:"instagram",url:"https://instagram.com/muiscasrc",icon:"fa-instagram-square"}],infoTraining:{title:"Proximo Evento",days:[1,3,5],localization:"Parque el ensueño",time:new Date("17:00:00")}}}},i=a,s=(t("5c0b"),t("2877")),g=Object(s["a"])(i,o,r,!1,null,null,null),c=g.exports,u=t("9483");Object(u["a"])("".concat("/club/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(A){console.error("Error during service worker registration:",A)}});t("d3b7");var l=t("8c4f"),B=function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:t("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},C=[],f=t("fdab"),d={name:"Home",components:{HelloWorld:f["default"]}},p=d,E=Object(s["a"])(p,B,C,!1,null,null,null),Q=E.exports;n["a"].use(l["a"]);var v=[{path:"/",name:"Home",component:Q},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],w=new l["a"]({mode:"history",base:"/club/",routes:v}),m=w,D=t("2f62");n["a"].use(D["a"]);var _=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=(t("4160"),t("b0c0"),t("159b"),t("ddb0"),t("10de"));h.keys().forEach((function(A){var e=h(A),t=e.default.name;n["a"].component(t,e.default||e)})),n["a"].config.productionTip=!1,new n["a"]({router:m,store:_,render:function(A){return A(c)}}).$mount("#app")},"5c0b":function(A,e,t){"use strict";var n=t("9c0c"),o=t.n(n);o.a},"7cdb":function(A,e,t){"use strict";var n=t("8973"),o=t.n(n);o.a},"852a":function(A,e,t){"use strict";var n=t("9c8a"),o=t.n(n);o.a},8973:function(A,e,t){},"8eb5":function(A,e,t){},"9c0c":function(A,e,t){},"9c8a":function(A,e,t){},a9ec:function(A,e,t){"use strict";t.r(e);var n=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"info"},[t("div",{staticClass:"info__title"},[A._v(A._s(A.title))]),A._m(0),A._m(1),A._m(2)])},o=[function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"info__group "},[t("div",{staticClass:"info__group_icon fal fa-lg fa-calendar"}),t("div",{staticClass:"info__group_label"},[A._v("Jueves 20 de Abril del 2020")])])},function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"info__group "},[t("div",{staticClass:"info__group_icon fal fa-lg fa-map-marked-alt"}),t("div",{staticClass:"info__group_label"},[A._v("Jueves 20 de Abril del 2020")])])},function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"info__group "},[t("div",{staticClass:"info__group_icon fal fa-lg fa-clock"}),t("div",{staticClass:"info__group_label"},[A._v("Jueves 20 de Abril del 2020")])])}],r=(t("5170"),{name:"infotraining",props:{info:{type:Object},title:{type:String,default:"Evento"}},data:function(){return{daysWeek:["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],monthYear:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]}},methods:{},computed:{getDate:function(){}}}),a=r,i=t("2877"),s=Object(i["a"])(a,n,o,!1,null,null,null);e["default"]=s.exports},c92d:function(A,e,t){},cf05:function(A,e){A.exports="data:image/png;base64,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"},d0d9:function(A,e,t){"use strict";t.r(e);var n=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"network",attrs:{id:"network"}},A._l(A.links,(function(e,n,o){return t("a",{key:o,class:["network__item","fab fa-4x",e.icon],attrs:{href:e.url,target:[A.newPage?"_blank":""]}})})),0)},o=[],r=(t("8eb5"),{name:"network",props:{links:{type:Array},newPage:{type:Boolean}}}),a=r,i=(t("852a"),t("2877")),s=Object(i["a"])(a,n,o,!1,null,null,null);e["default"]=s.exports},fc01:function(A,e,t){"use strict";t.r(e);var n=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"count",attrs:{id:"countDown"}},[""!==A.title?t("div",{staticClass:"count__title"},[A._v(A._s(A.title))]):A._e(),t("div",{staticClass:"count__wrapper"},[t("div",{staticClass:"count__wrapper_item"},[A._v(" "+A._s(A.days)+" "),t("p",{staticClass:"count__wrapper_item--label"},[A._v("days")])]),t("div",{staticClass:"count__wrapper_item"},[A._v(" "+A._s(A.hours)+" "),t("p",{staticClass:"count__wrapper_item--label"},[A._v("hours")])]),t("div",{staticClass:"count__wrapper_item"},[A._v(" "+A._s(A.minutes)+" "),t("p",{staticClass:"count__wrapper_item--label"},[A._v("minutes")])]),t("div",{staticClass:"count__wrapper_item"},[A._v(" "+A._s(A.seconds)+" "),t("p",{staticClass:"count__wrapper_item--label"},[A._v("seconds")])])])])},o=[],r=(t("a9e3"),t("c92d"),{name:"countdown",props:{end:{type:Number},title:{type:String,default:""}},data:function(){return{days:void 0,hours:void 0,minutes:void 0,seconds:void 0,last:void 0}},mounted:function(){var A=this;setInterval((function(){A.setTime()}),1e3)},methods:{setTime:function(){var A=this.end-(new Date).getTime(),e=new Date(A);this.days=Math.floor(A/864e5),this.hours=e.getHours()<10?"0".concat(e.getHours()):e.getHours(),this.minutes=e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes(),this.seconds=e.getSeconds()<10?"0".concat(e.getSeconds()):e.getSeconds()}}}),a=r,i=t("2877"),s=Object(i["a"])(a,n,o,!1,null,null,null);e["default"]=s.exports},fdab:function(A,e,t){"use strict";t.r(e);var n=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[A._v(A._s(A.msg))]),A._m(0),t("h3",[A._v("Installed CLI Plugins")]),A._m(1),t("h3",[A._v("Essential Links")]),A._m(2),t("h3",[A._v("Ecosystem")]),A._m(3)])},o=[function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("p",[A._v(" For a guide and recipes on how to configure / customize this project,"),t("br"),A._v(" check out the "),t("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[A._v("vue-cli documentation")]),A._v(". ")])},function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[A._v("babel")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[A._v("pwa")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[A._v("eslint")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[A._v("unit-jest")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[A._v("router")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[A._v("vuex")])])])},function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[A._v("Core Docs")])]),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[A._v("Forum")])]),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[A._v("Community Chat")])]),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[A._v("Twitter")])]),t("li",[t("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[A._v("News")])])])},function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[A._v("vue-router")])]),t("li",[t("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[A._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[A._v("vue-devtools")])]),t("li",[t("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[A._v("vue-loader")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[A._v("awesome-vue")])])])}],r={name:"HelloWorld",props:{msg:String}},a=r,i=(t("7cdb"),t("2877")),s=Object(i["a"])(a,n,o,!1,null,"e688b28c",null);e["default"]=s.exports}});
//# sourceMappingURL=app.0161a718.js.map