import{d as a,a as e}from"./data1-a4c5b04a.js";import{e as t,f as o,Z as l,o as u,P as n,Q as s,c as i}from"./@vue_runtime-core@3.2.47-ac740756.js";import{r}from"./@vue_reactivity@3.2.47-31538bbf.js";import"./@vue_shared@3.2.47-177e1703.js";const p=t({name:"Pagination"}),m=t({...p,setup(t){const p=r(),m=r([]),c=r({pageSize:6,
// 每页显示条数
currentPage:1,
// 当前页
pagerCount:7,
// 按钮数，超过时会折叠
total:0});o((()=>{d(1)}));const d=async t=>{let o;o=1===t?await a:await e,o.success&&(m.value=o.data.records,c.value.total=o.data.total)},g=a=>{d(a)},v=a=>{};return(a,e)=>{const t=l("t-select"),o=l("t-layout-page-item"),r=l("t-layout-page");return u(),n(r,null,{default:s((()=>[i(o,null,{default:s((()=>[i(t,{placeholder:"请选择工序（多选分页）",modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=a=>p.value=a),optionSource:m.value,labelCustom:"materialName",valueCustom:"id",onCurrentChange:g,onChange:v,isShowPagination:"",multiple:"",paginationOption:c.value},null,8,["modelValue","optionSource","paginationOption"])])),_:1})])),_:1})}}});export{m as default};
