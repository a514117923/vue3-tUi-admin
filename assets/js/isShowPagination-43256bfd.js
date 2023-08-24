import"./vue@3.2.47-8ce7078f.js";import{e,$ as i,o as t,R as o,U as p,c as s}from"./@vue_runtime-core@3.2.47-1437c93d.js";import{u as a}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{_ as m}from"./index-0cfdedbb.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./@vue_runtime-dom@3.2.47-2bd6e5f2.js";import"./@vue_shared@3.2.47-699fd3ac.js";import"./vue-router@4.1.6_vue@3.2.47-8a97a894.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-ca217326.js";import"./vue-demi@0.14.0_vue@3.2.47-8afb1e23.js";import"./element-plus@2.3.3_vue@3.2.47-b1222eb8.js";import"./lodash-es@4.17.21-0581a1f1.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-4c420e77.js";import"./@vueuse_core@9.13.0_vue@3.2.47-8fe4f764.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-4e84a922.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9d7ac9ef.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-8d4a79e6.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-6f612403.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./ant-design-vue@3.2.20_vue@3.2.47-2aa6565c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-28dfa700.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8aa72cfe.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-i18n@9.2.2_vue@3.2.47-cea73d24.js";import"./@intlify_shared@9.2.2-bed86653.js";import"./@intlify_core-base@9.2.2-8c6d72b7.js";import"./@intlify_message-compiler@9.2.2-08c379a4.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.9-afa7e5e3.js";const r=m(e({__name:"isShowPagination",setup(e){let m={total:100,currentPage:1,data:[{id:1,code:1,name:"物料名称1",spec:"物料规格1",unitName:"吨"},{id:2,code:2,name:"物料名称2",spec:"物料规格2",unitName:"吨"},{id:3,code:3,name:"物料名称3",spec:"物料规格3",unitName:"吨"},{id:4,code:4,name:"物料名称4",spec:"物料规格4",unitName:"吨"},{id:5,code:5,name:"物料名称5",spec:"物料规格5",unitName:"吨"},{id:6,code:6,name:"物料名称6",spec:"物料规格6",unitName:"吨"},{id:7,code:7,name:"物料名称7",spec:"物料规格7",unitName:"吨"},{id:8,code:8,name:"物料名称8",spec:"物料规格8",unitName:"吨"},{id:9,code:9,name:"物料名称9",spec:"物料规格9",unitName:"吨"},{id:10,code:10,name:"物料名称10",spec:"物料规格10",unitName:"吨"},{id:11,code:11,name:"物料名称11",spec:"物料规格11",unitName:"吨"},{id:12,code:12,name:"物料名称12",spec:"物料规格12",unitName:"吨"},{id:13,code:13,name:"物料名称13",spec:"物料规格13",unitName:"吨"}],columns:[{label:"物料编号",width:"100px",prop:"code",fixed:!0},{label:"物料名称",width:"149px",prop:"name"},{label:"规格",width:"149px",prop:"spec"},{label:"单位",width:"110px",prop:"unitName"},{label:"物料编号1",width:"149px",prop:"code"},{label:"物料名称1",width:"149px",prop:"name"},{label:"规格1",width:"149px",prop:"spec"},{label:"单位1",width:"110px",prop:"unitName"},{label:"物料编号11",width:"149px",prop:"code"},{label:"物料名称11",width:"149px",prop:"name"},{label:"规格11",width:"149px",prop:"spec"},{label:"单位11",width:"110px",prop:"unitName"},{label:"物料编号111",width:"149px",prop:"code"},{label:"物料名称111",width:"149px",prop:"name"},{label:"规格111",width:"149px",prop:"spec"},{label:"单位111",width:"110px",prop:"unitName"}]};const r=(e,i)=>{},n=e=>{m.currentPage=e};return(e,l)=>{const u=i("t-select-table"),d=i("t-layout-page-item"),c=i("t-layout-page");return t(),o(c,null,{default:p((()=>[s(d,null,{default:p((()=>[s(u,{table:a(m),columns:a(m).columns,"max-height":400,keywords:{label:"name",value:"id"},multiple:"",onSelectionChange:r,isShowPagination:"",onCurrentChange:n,placeholder:"分页选择（支持翻页选中）"},null,8,["table","columns"])])),_:1})])),_:1})}}}),[["__file","F:/Wrok/Me/wocwin-admin/src/views/tuiplus/TSelectTable/isShowPagination.vue"]]);export{r as default};
