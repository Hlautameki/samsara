"use strict";(globalThis["webpackChunksamsara"]=globalThis["webpackChunksamsara"]||[]).push([[438],{2438:(e,t,o)=>{o.r(t),o.d(t,{default:()=>G});var n=o(9835);const s={class:"col-xs-3"};function u(e,t,o,u,a,c){const l=(0,n.up)("q-icon"),r=(0,n.up)("q-input"),d=(0,n.up)("q-toolbar"),p=(0,n.up)("TodosList"),i=(0,n.up)("q-card"),m=(0,n.up)("CreateTodoButton"),f=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(f,{class:"row"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{class:"col-xs-9"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,{"model-value":e.search,borderless:"",class:"full-width",dense:"",placeholder:"search"},{append:(0,n.w5)((()=>[(0,n.Wm)(l,{name:"mdi-magnify"})])),_:1},8,["model-value"])])),_:1}),(0,n.Wm)(p,{bordered:""})])),_:1}),(0,n._)("div",s,[(0,n.Wm)(d,{class:"bg-primary"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{icon:"mdi-plus",fab:"",color:"secondary",style:{"margin-bottom":"-42px"},class:"q-ml-lg"})])),_:1})])])),_:1})}function a(e,t,o,s,u,a){const c=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)(c,{onClick:s.handleButtonClicked},null,8,["onClick"])}var c=o(9302);const l={setup(){const e=(0,c.Z)();function t(){e.dialog({title:"Create Todo",prompt:{model:"",type:"text"}}).onOk(o)}function o(t){e.notify({message:"Todo Created",icon:"mdi-check",color:"positive"})}return{handleButtonClicked:t}}};var r=o(1639),d=o(963),p=o(9984),i=o.n(p);const m=(0,r.Z)(l,[["render",a]]),f=m;function w(e,t,o,s,u,a){const c=(0,n.up)("UpdateTodoCheckbox"),l=(0,n.up)("q-item-section"),r=(0,n.up)("DeleteTodoButton"),d=(0,n.up)("q-item"),p=(0,n.up)("q-list");return(0,n.wg)(),(0,n.j4)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(l,{side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(c)])),_:1}),(0,n.Wm)(l,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Go shopping")])),_:1}),(0,n.Wm)(l,{side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{flat:"",round:"",size:"sm",icon:"mdi-delete"})])),_:1})])),_:1})])),_:1})}function h(e,t,o,s,u,a){const c=(0,n.up)("q-checkbox");return(0,n.wg)(),(0,n.j4)(c,{"model-value":!0})}i()(l,"components",{QBtn:d.Z});const Z={setup(){return{}}};var b=o(1221);const g=(0,r.Z)(Z,[["render",h]]),k=g;function C(e,t,o,s,u,a){const c=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)(c)}i()(Z,"components",{QCheckbox:b.Z});const T={setup(){return{}}},W=(0,r.Z)(T,[["render",C]]),q=W;i()(T,"components",{QBtn:d.Z});const v={components:{DeleteTodoButton:q,UpdateTodoCheckbox:k},setup(){return{}}};var Q=o(3246),_=o(490),x=o(1233);const B=(0,r.Z)(v,[["render",w]]),y=B;i()(v,"components",{QList:Q.Z,QItem:_.Z,QItemSection:x.Z});const j=(0,n.aZ)({name:"IndexPage",components:{TodosList:y,CreateTodoButton:f},data(){return{search:""}}});var I=o(9885),L=o(4458),U=o(1663),D=o(1169),P=o(2857);const z=(0,r.Z)(j,[["render",u]]),G=z;i()(j,"components",{QPage:I.Z,QCard:L.Z,QToolbar:U.Z,QInput:D.Z,QIcon:P.Z})}}]);