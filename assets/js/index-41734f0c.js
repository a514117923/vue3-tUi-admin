import"./vue@3.2.47-e9f0a81f.js";import{s as e,d as t}from"./element-china-area-data@6.0.0-dd08f211.js";import{M as s}from"./map-d6b1e3c9.js";import{d as i,h as o,Z as a,o as r,L as p,M as l,a as n,e as m,am as u,al as c}from"./@vue_runtime-core@3.2.47-3393fa3b.js";import{k as d,u as j}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{_ as v}from"./index-3fe0ac4c.js";import"./@intlify_core-base@9.2.2-3c9acb8b.js";import"./@intlify_message-compiler@9.2.2-a38edf5b.js";import"./@intlify_shared@9.2.2-76c746da.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./@vue_runtime-dom@3.2.47-bb459063.js";import"./@vue_shared@3.2.47-699fd3ac.js";import"./vue-router@4.1.6_vue@3.2.47-c507d381.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-7bcd43e3.js";import"./vue-demi@0.14.0_vue@3.2.47-90709de6.js";import"./element-plus@2.3.3_vue@3.2.47-b480741b.js";import"./lodash-es@4.17.21-3aa1b897.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-5955aa86.js";import"./@vueuse_core@9.13.0_vue@3.2.47-68996be2.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-fb97c814.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-08719ea3.js";import"./dayjs@1.11.7-836ee5ed.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-e120bcc9.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-db6fffad.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./vue-i18n@9.2.2_vue@3.2.47-b5a03d27.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.4-a0101cea.js";const _=e=>(u("data-v-b1c30727"),e=e(),c(),e),f=_((()=>n("div",{id:"container"},null,-1))),g={class:"input-card"},h=_((()=>n("label",null,"行政区选择",-1))),y={class:"input-item"},w=_((()=>n("span",{class:"input-item-text"},"省市区",-1))),C=i({name:"Geocoding"}),b=v(i({...C,setup(t){const i=d({regionData:e,
// selectedOptions: ['44', '4401', '440111'],
lnglat:"",
// 经纬度
selectedOptions:[],radius:null,
// 半径
map:null});o((()=>{u()}));const u=()=>{s().then((e=>{i.map=new e.Map("container",{resizeEnable:!0,zoom:15,center:[113.276517,23.151382]})}))},c=()=>{i.selectedOptions&&(i.map.clearMap(),s().then((e=>{let t;i.selectedOptions.length>0&&(t=i.selectedOptions[i.selectedOptions.length-1]),new e.DistrictSearch({
// 返回行政区边界坐标等具体信息
extensions:"all",
// 设置查询行政区级别为 区
level:"district"}).search(t,((t,s)=>{let o=s.districtList[0].boundaries;if(o){for(let t=0,s=o.length;t<s;t++)new e.Polygon({map:i.map,strokeWeight:1,path:o[t],fillOpacity:.7,fillColor:"#CCF3FF",strokeColor:"#CC66CC"});i.map.setFitView()}}))})))};return(t,s)=>{const o=a("el-cascader"),u=a("t-layout-page");return r(),p(u,{class:"geocoding"},{default:l((()=>[f,n("div",g,[h,n("div",y,[w,m(o,{style:{width:"100%"},placeholder:"请选择省市区",filterable:"",clearable:"",options:j(e),modelValue:j(i).selectedOptions,"onUpdate:modelValue":s[0]||(s[0]=e=>j(i).selectedOptions=e),onChange:c},null,8,["options","modelValue"])])])])),_:1})}}}),[["__scopeId","data-v-b1c30727"],["__file","F:/Wrok/Me/wocwin-admin/src/views/map/geocoding/index.vue"]]);export{b as default};