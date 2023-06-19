import"./vue@3.2.47-e9f0a81f.js";import{M as o}from"./map-d6b1e3c9.js";import{d as e,h as t,Z as a,o as s,L as r,M as l,a as i,e as n,Q as p,am as m,al as u}from"./@vue_runtime-core@3.2.47-3393fa3b.js";import{k as d,u as c}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{_ as v}from"./index-bda39a3c.js";import"./@intlify_core-base@9.2.2-3c9acb8b.js";import"./@intlify_message-compiler@9.2.2-a38edf5b.js";import"./@intlify_shared@9.2.2-76c746da.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./@vue_runtime-dom@3.2.47-bb459063.js";import"./@vue_shared@3.2.47-699fd3ac.js";import"./vue-router@4.1.6_vue@3.2.47-c507d381.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-7bcd43e3.js";import"./vue-demi@0.14.0_vue@3.2.47-90709de6.js";import"./element-plus@2.3.3_vue@3.2.47-b480741b.js";import"./lodash-es@4.17.21-3aa1b897.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-5955aa86.js";import"./@vueuse_core@9.13.0_vue@3.2.47-68996be2.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-fb97c814.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-08719ea3.js";import"./dayjs@1.11.7-836ee5ed.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-e120bcc9.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-db6fffad.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./vue-i18n@9.2.2_vue@3.2.47-b5a03d27.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.4-a0101cea.js";const j=o=>(m("data-v-99b0db5b"),o=o(),u(),o),_=j((()=>i("div",{id:"container"},null,-1))),w={class:"control-item"},h=j((()=>i("h5",null,"地图控件",-1))),B=e({name:"MapControl"}),V=v(e({...B,setup(e){const m=d({map:null,scale:null,toolBar:null,controlBar:null,overView:null,scaleStatus:!0,toolBarStatus:!0,controlBarStatus:!0,overViewStatus:!0});t((()=>{u()}));const u=()=>{o().then((o=>{m.scale=new o.Scale,m.toolBar=new o.ToolBar({position:{top:"110px",right:"40px"}}),m.controlBar=new o.ControlBar({position:{top:"10px",right:"10px"}}),m.overView=new o.HawkEye({opened:!1}),m.map=new o.Map("container",{viewMode:"3D",zoom:11,pitch:30}),m.map.addControl(m.scale),m.map.addControl(m.toolBar),m.map.addControl(m.controlBar),m.map.addControl(m.overView)}))},v=()=>{m.scaleStatus?m.scale.show():m.scale.hide()},j=()=>{m.toolBarStatus?m.toolBar.show():m.toolBar.hide()},B=()=>{m.controlBarStatus?m.controlBar.show():m.controlBar.hide()},V=()=>{m.overViewStatus?m.overView.show():m.overView.hide()};return(o,e)=>{const t=a("el-checkbox"),u=a("t-layout-page");return s(),r(u,{class:"map_control"},{default:l((()=>[_,i("div",w,[h,n(t,{class:"control",modelValue:c(m).scaleStatus,"onUpdate:modelValue":e[0]||(e[0]=o=>c(m).scaleStatus=o),onChange:v},{default:l((()=>[p("比例尺")])),_:1},8,["modelValue"]),n(t,{class:"control",modelValue:c(m).toolBarStatus,"onUpdate:modelValue":e[1]||(e[1]=o=>c(m).toolBarStatus=o),onChange:j},{default:l((()=>[p("工具条")])),_:1},8,["modelValue"]),n(t,{class:"control",modelValue:c(m).controlBarStatus,"onUpdate:modelValue":e[2]||(e[2]=o=>c(m).controlBarStatus=o),onChange:B},{default:l((()=>[p("工具条方向盘")])),_:1},8,["modelValue"]),n(t,{class:"control",modelValue:c(m).overViewStatus,"onUpdate:modelValue":e[3]||(e[3]=o=>c(m).overViewStatus=o),onChange:V},{default:l((()=>[p("显示鹰眼")])),_:1},8,["modelValue"])])])),_:1})}}}),[["__scopeId","data-v-99b0db5b"],["__file","F:/Wrok/Me/wocwin-admin/src/views/map/mapControl/index.vue"]]);export{V as default};