import"./vue@3.2.47-8ce7078f.js";import{e,$ as t,o as l,R as o,U as s,c as i}from"./@vue_runtime-core@3.2.47-1437c93d.js";import{c as r,k as a,u}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{_ as p}from"./index-0cfdedbb.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./@vue_runtime-dom@3.2.47-2bd6e5f2.js";import"./@vue_shared@3.2.47-699fd3ac.js";import"./vue-router@4.1.6_vue@3.2.47-8a97a894.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-ca217326.js";import"./vue-demi@0.14.0_vue@3.2.47-8afb1e23.js";import"./element-plus@2.3.3_vue@3.2.47-b1222eb8.js";import"./lodash-es@4.17.21-0581a1f1.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-4c420e77.js";import"./@vueuse_core@9.13.0_vue@3.2.47-8fe4f764.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-4e84a922.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9d7ac9ef.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-8d4a79e6.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-6f612403.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./ant-design-vue@3.2.20_vue@3.2.47-2aa6565c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-28dfa700.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8aa72cfe.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-i18n@9.2.2_vue@3.2.47-cea73d24.js";import"./@intlify_shared@9.2.2-bed86653.js";import"./@intlify_core-base@9.2.2-8c6d72b7.js";import"./@intlify_message-compiler@9.2.2-08c379a4.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.9-afa7e5e3.js";const m=p(e({__name:"index",setup(e){const p=r([{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}]),m=r([{label:"女",value:1},{label:"男",value:0}]),n=r([{label:"启用",value:1},{label:"停用",value:0}]),v=r(null),j=a({ref:null,formData:{sex:null,
// *性别: 0:男 1:女
hobby:null,
// *爱好: 0:男 1:女
status:null},fieldList:[{label:"性别",value:"sex",placeholder:"TSelect单选",type:"select-arr",comp:"t-select",bind:{optionSource:m.value,valueKey:"value"}},{label:"状态",value:"status",placeholder:"TSelect单选",type:"select-arr",comp:"t-select",bind:{optionSource:n,valueKey:"value"}},{label:"爱好",value:"hobby",placeholder:"TSelect多选",type:"select-arr",comp:"t-select",list:"hobbyList",bind:{multiple:!0,optionSource:p,valueKey:"value"}}],operatorList:[{label:"提交",type:"danger",fun:()=>{j.ref.validate((e=>{}))}},{label:"重置",type:"primary",fun:()=>{j.formData={},v.value.clearValidate()}}]});return(e,r)=>{const a=t("t-form"),p=t("t-layout-page-item"),m=t("t-layout-page");return l(),o(m,null,{default:s((()=>[i(p,null,{default:s((()=>[i(a,{ref_key:"TFormDemo",ref:v,modelValue:u(j).ref,"onUpdate:modelValue":r[0]||(r[0]=e=>u(j).ref=e),formOpts:u(j),widthSize:1},null,8,["modelValue","formOpts"])])),_:1})])),_:1})}}}),[["__file","F:/Wrok/Me/wocwin-admin/src/views/tuiplus/TForm/comUse/index.vue"]]);export{m as default};
