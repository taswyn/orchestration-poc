(function(e,n){typeof exports=="object"&&typeof module!="undefined"?n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis!="undefined"?globalThis:e||self,n(e.Vue))})(this,function(e){"use strict";var n="",c=(t,o)=>{const _=t.__vccOpts||t;for(const[p,a]of o)_[p]=a;return _},r=c({props:{msg:String},setup(t){return e.ref(0),(o,_)=>(e.openBlock(),e.createElementBlock("nav",null,e.toDisplayString(t.msg),1))}},[["__scopeId","data-v-351cd2c6"]]),l="";const s={setup(t){return(o,_)=>(e.openBlock(),e.createBlock(r,{msg:"Hello Vue 3 + Vite"}))}};e.createApp(s).mount("#app")});