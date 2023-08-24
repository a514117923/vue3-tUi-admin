import"./vue@3.2.47-8ce7078f.js";import{i as e}from"./echarts@5.4.2-123dbe2f.js";import{e as t,i,$ as s,o,R as r,U as a,M as m,b as p}from"./@vue_runtime-core@3.2.47-1437c93d.js";import{_ as n}from"./zrender@5.4.3-d0feed70.js";import{s as l,u}from"./@vue_shared@3.2.47-699fd3ac.js";import{_ as d}from"./index-0cfdedbb.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./@vue_runtime-dom@3.2.47-2bd6e5f2.js";import"./@vue_reactivity@3.2.47-71c1ef0d.js";import"./tslib@2.3.0-a4e99503.js";import"./vue-router@4.1.6_vue@3.2.47-8a97a894.js";import"./@vue_devtools-api@6.5.0-d955f204.js";import"./js-cookie@3.0.1-d59fc71c.js";import"./pinia@2.0.33_typescript@5.0.4_vue@3.2.47-ca217326.js";import"./vue-demi@0.14.0_vue@3.2.47-8afb1e23.js";import"./element-plus@2.3.3_vue@3.2.47-b1222eb8.js";import"./lodash-es@4.17.21-0581a1f1.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-4c420e77.js";import"./@vueuse_core@9.13.0_vue@3.2.47-8fe4f764.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-4e84a922.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9d7ac9ef.js";import"./async-validator@4.2.5-f440436c.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-8d4a79e6.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-73f3ed74.js";import"./@floating-ui_core@1.2.6-71d29d7a.js";import"./nprogress@0.2.0-6f612403.js";import"./vite-plugin-qiankun@1.0.15_typescript@5.0.4_vite@4.3.9-f25e2b71.js";import"./axios@1.3.4-e3d92af1.js";import"./ant-design-vue@3.2.20_vue@3.2.47-2aa6565c.js";import"./resize-observer-polyfill@1.5.1-3b32e109.js";import"./@ant-design_colors@6.0.0-42332dcb.js";import"./vue-types@3.0.2_vue@3.2.47-28dfa700.js";import"./@ant-design_icons-vue@6.1.0_vue@3.2.47-8aa72cfe.js";import"./@ant-design_icons-svg@4.3.0-a4fb1ff0.js";import"./dom-align@1.12.4-430184c7.js";import"./vue-i18n@9.2.2_vue@3.2.47-cea73d24.js";import"./@intlify_shared@9.2.2-bed86653.js";import"./@intlify_core-base@9.2.2-8c6d72b7.js";import"./@intlify_message-compiler@9.2.2-08c379a4.js";import"./source-map@0.6.1-f5811eb2.js";import"./@intlify_devtools-if@9.2.2-c4c7726f.js";import"./pinia-plugin-persistedstate@3.1.0_pinia@2.0.33-d2bd58cf.js";import"./@wocwin_t-ui-plus@1.1.9-afa7e5e3.js";const c=["id"],j=d(t({__name:"BarChart",props:{id:{type:String,default:"barChart"},className:{type:String,default:""},width:{type:String,default:"200px",required:!0},height:{type:String,default:"200px",required:!0}},setup(t){const d=t,j={grid:{left:"2%",right:"2%",bottom:"10%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{x:"center",y:"bottom",data:["收入","毛利润","收入增长率","利润增长率"],textStyle:{color:"#999"}},xAxis:[{type:"category",data:["浙江","北京","上海","广东","深圳"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:1e4,interval:2e3,axisLabel:{formatter:"{value} "}},{type:"value",min:0,max:100,interval:20,axisLabel:{formatter:"{value}%"}}],series:[{name:"收入",type:"bar",data:[7e3,7100,7200,7300,7400],barWidth:20,itemStyle:{color:new n(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])}},{name:"毛利润",type:"bar",data:[8e3,8200,8400,8600,8800],barWidth:20,itemStyle:{color:new n(0,0,0,1,[{offset:0,color:"#25d73c"},{offset:.5,color:"#1bc23d"},{offset:1,color:"#179e61"}])}},{name:"收入增长率",type:"line",yAxisIndex:1,data:[60,65,70,75,80],itemStyle:{color:"#67C23A"}},{name:"利润增长率",type:"line",yAxisIndex:1,data:[70,75,80,85,90],itemStyle:{color:"#409EFF"}}]};return i((()=>{const t=e(document.getElementById(d.id));t.setOption(j),window.addEventListener("resize",(()=>{t.resize()}))})),(e,i)=>{const n=s("el-card");return o(),r(n,null,{header:a((()=>[m(" 业绩柱状图 ")])),default:a((()=>[p("div",{id:t.id,class:l(t.className),style:u({height:t.height,width:t.width})},null,14,c)])),_:1})}}}),[["__file","F:/Wrok/Me/wocwin-admin/src/views/home/components/BarChart.vue"]]);export{j as default};
