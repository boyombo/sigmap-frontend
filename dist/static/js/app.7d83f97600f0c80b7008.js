webpackJsonp([0],{"1uuo":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var s={name:"GoogleMap",props:["name"],data:function(){return{mapName:this.name+"-map",circles:[],map:null}},mounted:function(){var e=this;fetch("http://everyday.com.ng/sigmap/get_center/").then(function(e){return e.json()}).then(function(t){console.log(t),console.log(t.center),e.loadMap(t.center.lat,t.center.lng);var n=t;e.drawCircle(n.ne_center.lat,n.ne_center.lng),e.drawCircle(n.nw_center.lat,n.nw_center.lng),e.drawCircle(n.se_center.lat,n.se_center.lng),e.drawCircle(n.sw_center.lat,n.sw_center.lng)})},methods:{loadMap:function(e,t){console.log("latitude: "+e+", lng: "+t);var n=document.getElementById(this.mapName),r={zoom:17,center:new google.maps.LatLng(e,t)};this.map=new google.maps.Map(n,r)},drawCircle:function(e,t){return console.log("drawing circle here: ("+e+", "+t+")"),new google.maps.Circle({strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,map:this.map,center:{lat:e,lng:t},radius:100})}}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"google-map",attrs:{id:this.mapName}})},staticRenderFns:[]};var l={name:"App",components:{HelloWorld:n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},a,!1,function(e){n("1uuo")},"data-v-d8ec41bc",null).exports,GoogleMap:n("VU/8")(s,o,!1,function(e){n("jKdw")},"data-v-7272a528",null).exports}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("GoogleMap",{attrs:{name:"test"}})],1)},staticRenderFns:[]};var c=n("VU/8")(l,i,!1,function(e){n("rOyM")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:c},template:"<App/>"})},jKdw:function(e,t){},rOyM:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7d83f97600f0c80b7008.js.map