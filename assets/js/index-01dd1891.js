import"./vue@3.2.47-8ce7078f.js";import{e,$ as i,o as t,R as p,U as r,c as s}from"./@vue_runtime-core@3.2.47-1437c93d.js";import{u as o}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{_ as a}from"./index-0cfdedbb.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./@vue_runtime-dom@3.2.47-2bd6e5f2.js";import"./@vue_shared@3.2.47-699fd3ac.js";import"./vue-router@4.1.6_vue@3.2.47-8a97a894.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-ca217326.js";import"./vue-demi@0.14.0_vue@3.2.47-8afb1e23.js";import"./element-plus@2.3.3_vue@3.2.47-b1222eb8.js";import"./lodash-es@4.17.21-0581a1f1.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-4c420e77.js";import"./@vueuse_core@9.13.0_vue@3.2.47-8fe4f764.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-4e84a922.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9d7ac9ef.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-8d4a79e6.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-6f612403.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./ant-design-vue@3.2.20_vue@3.2.47-2aa6565c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-28dfa700.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8aa72cfe.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-i18n@9.2.2_vue@3.2.47-cea73d24.js";import"./@intlify_shared@9.2.2-bed86653.js";import"./@intlify_core-base@9.2.2-8c6d72b7.js";import"./@intlify_message-compiler@9.2.2-08c379a4.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.9-afa7e5e3.js";const l=e({name:"headMerge"}),m=a(e({...l,setup(e){let a={
// 接口返回数据
data:[{id:"1",date:"2019-09-25",date1:"2019-09-26",name:"张三",status:"2",address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",date1:"2019-09-27",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-26",date1:"2019-09-28",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"4",date:"2019-09-26",date1:"2019-09-29",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"}],
// 表头数据
columns:[{prop:"name",label:"姓名",minWidth:"100",children:[{prop:"name",label:"姓名",minWidth:"100",children:[{prop:"type",label:"类型",minWidth:"100",children:[{prop:"date1",label:"日期2552",minWidth:"180"}]}]},{prop:"type",label:"表头合并1",minWidth:"100",children:[{prop:"type",label:"类型",minWidth:"100",children:[{prop:"date1",label:"日期2552",minWidth:"180"}]}]},{prop:"name",label:"姓名",minWidth:"100"},{prop:"date",label:"表头合并2",minWidth:"180",children:[{prop:"type",label:"类型",minWidth:"100"},{prop:"date",label:"日期",minWidth:"180",children:[{prop:"date1",label:"日期22",minWidth:"180"}]}]}]},{prop:"name",label:"姓名",minWidth:"100",children:[{prop:"type",label:"类型",minWidth:"100",children:[{prop:"date1",label:"日期2552",minWidth:"180"}]}]},{prop:"type",label:"表头合并1",minWidth:"100",children:[{prop:"type",label:"类型",minWidth:"100",children:[{prop:"date1",label:"日期2552",minWidth:"180"}]}]},{prop:"name",label:"姓名",minWidth:"100"},{prop:"date",label:"表头合并2",minWidth:"180",children:[{prop:"type",label:"类型",minWidth:"100"},{prop:"date",label:"日期",minWidth:"180",children:[{prop:"date1",label:"日期22",minWidth:"180"}]}]},{prop:"address",label:"地址",minWidth:"220"},{prop:"date1",label:"日期",minWidth:"180"},{prop:"address1",label:"地址",minWidth:"220"}]};return(e,l)=>{const m=i("t-table"),n=i("t-layout-page-item"),d=i("t-layout-page");return t(),p(d,null,{default:r((()=>[s(n,null,{default:r((()=>[s(m,{title:"表头合并",table:o(a),columns:o(a).columns,isShowPagination:!1},null,8,["table","columns"])])),_:1})])),_:1})}}}),[["__file","F:/Wrok/Me/wocwin-admin/src/views/tuiplus/TTable/headMerge/index.vue"]]);export{m as default};
