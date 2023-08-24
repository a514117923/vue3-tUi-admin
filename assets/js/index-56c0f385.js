import"./vue@3.2.47-8ce7078f.js";import{_ as e}from"./logo-05fb951c.js";import{b as s,u as t}from"./vue-router@4.1.6_vue@3.2.47-8a97a894.js";import{b as i,_ as a}from"./index-0cfdedbb.js";import{u as o}from"./indexAsync-891579f1.js";import{S as l,T as r,M as n}from"./SubMenu-9a69f74b.js";import{T as u}from"./ToolBarLeft-2fc93340.js";import{q as p}from"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import{e as m,y as c,x as v,$ as d,o as _,R as j,U as f,b as h,c as g,a as y,F as w,Z as x,V as b,H as k,am as C,al as M}from"./@vue_runtime-core@3.2.47-1437c93d.js";import{c as L,u as q}from"./@vue_reactivity@3.2.47-71c1ef0d.js";import{s as z,R,u as T}from"./@vue_shared@3.2.47-699fd3ac.js";import{v as A}from"./@vue_runtime-dom@3.2.47-2bd6e5f2.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-ca217326.js";import"./vue-demi@0.14.0_vue@3.2.47-8afb1e23.js";import"./element-plus@2.3.3_vue@3.2.47-b1222eb8.js";import"./lodash-es@4.17.21-0581a1f1.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-4c420e77.js";import"./@vueuse_core@9.13.0_vue@3.2.47-8fe4f764.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-4e84a922.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9d7ac9ef.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-8d4a79e6.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-6f612403.js";import"./axios@1.3.4-e3d92af1.js";import"./ant-design-vue@3.2.20_vue@3.2.47-2aa6565c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-28dfa700.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8aa72cfe.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-i18n@9.2.2_vue@3.2.47-cea73d24.js";import"./@intlify_shared@9.2.2-bed86653.js";import"./@intlify_core-base@9.2.2-8c6d72b7.js";import"./@intlify_message-compiler@9.2.2-08c379a4.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.9-afa7e5e3.js";import"./mitt@3.0.0-f0e54764.js";import"./sortablejs@1.15.0-c3bad686.js";const E={class:"aside-split"},F=[(e=>(C("data-v-e1e2275c"),e=e(),M(),e))((()=>h("img",{class:"logo-img",src:e,alt:"logo"},null,-1)))],N={class:"split-list"},S=["onClick"],W={class:"title"},$={class:"logo flx-center"},B=m({name:"layoutColumns"}),D=a(m({...B,setup(e){const a=s(),m=t(),C=i(),M=o(),B=c((()=>M.isCollapse)),D=c((()=>C.showMenuListGet)),G=c((()=>a.meta.activeMenu?a.meta.activeMenu:a.path)),I=L([]),K=L("");v((()=>[D,a]),(()=>{var e;if(!D.value.length)return;K.value=a.path;const s=D.value.filter((e=>a.path===e.path||`/${a.path.split("/")[1]}`===e.path));if(null==(e=s[0].children)?void 0:e.length)return I.value=s[0].children;I.value=[]}),{deep:!0,immediate:!0});const Q=()=>{window.location.href=p.__POWERED_BY_QIANKUN__?"/wocwin-qiankun/":"/wocwin-admin/"};return(e,s)=>{const t=d("el-icon"),i=d("el-scrollbar"),a=d("el-menu"),o=d("el-aside"),p=d("el-header"),c=d("el-container");return _(),j(c,{class:"layout"},{default:f((()=>[h("div",E,[h("div",{class:"logo flx-center",onClick:Q},F),g(i,null,{default:f((()=>[h("div",N,[(_(!0),y(w,null,x(q(D),(e=>(_(),y("div",{class:z(["split-item",{"split-active":K.value===e.path||`/${K.value.split("/")[1]}`===e.path}]),key:e.path,onClick:s=>(e=>{var s;if(K.value=e.path,null==(s=e.children)?void 0:s.length)return I.value=e.children;I.value=[],m.push(e.path)})(e)},[g(t,null,{default:f((()=>[(_(),j(b(e.meta.icon)))])),_:2},1024),h("span",W,R(e.meta.title),1)],10,S)))),128))])])),_:1})]),g(o,{class:z({"not-aside":!I.value.length}),style:T({width:q(B)?"65px":"210px"})},{default:f((()=>[h("div",$,[k(h("span",{class:"logo-text"},R(q(B)?"W":"wocwin Admin"),513),[[A,I.value.length]])]),g(i,null,{default:f((()=>[g(a,{"default-active":q(G),router:!1,collapse:q(B),"collapse-transition":!1,"unique-opened":!0},{default:f((()=>[g(l,{menuList:I.value},null,8,["menuList"])])),_:1},8,["default-active","collapse"])])),_:1})])),_:1},8,["class","style"]),g(c,null,{default:f((()=>[g(p,null,{default:f((()=>[g(u),g(r)])),_:1}),g(n)])),_:1})])),_:1})}}}),[["__scopeId","data-v-e1e2275c"],["__file","F:/Wrok/Me/wocwin-admin/src/layout/LayoutColumns/index.vue"]]);export{D as default};
