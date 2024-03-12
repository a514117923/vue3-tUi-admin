import{u as e}from"./useApi-5ac496ff.js";import{b as l,E as a}from"./element-plus@2.6.1_vue@3.2.47-556c5002.js";import{e as t,t as s,f as o,_ as i,o as r,P as u,Q as p,c as n,J as d,b as m,n as c}from"./@vue_runtime-core@3.2.47-c6dbaf88.js";import{r as b,j as f,v,u as g,i as y}from"./@vue_reactivity@3.2.47-57d9983b.js";import{O as h}from"./@vue_shared@3.2.47-177e1703.js";import"./lodash-es@4.17.21-7564a848.js";import"./@vueuse_core@9.13.0_vue@3.2.47-86cebe15.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-7b341541.js";import"./@vue_runtime-dom@3.2.47-8be4d066.js";import"./@element-plus_icons-vue@2.3.1_vue@3.2.47-c2c4b79d.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-0180cacd.js";import"./@floating-ui_core@1.2.6-eb72d81f.js";const w={class:"dialog-footer"},I=t({...t({name:"superDemo"}),setup(t){const{proxy:I}=e(),_=b(!1),C=b("新增页面"),j=f({deptOptions:[],
// 左侧tree
postOptions:[],
// 岗位
rolesOptions:[],
// 角色
queryData:{userName:null,
// 登录名
nickName:null,
// 用户状态
postId:null,postId1:null,phonenumber:null,date1:null,date:null},listTypeInfo:{postOptions:[]},table:{currentPage:1,pageSize:10,total:0,
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"userName",label:"登录名",minWidth:"120"},{prop:"nickName",label:"用户名",minWidth:"120"},{prop:"deptName",label:"部门",minWidth:"120"},{prop:"roleName",label:"角色",minWidth:"120"},{prop:"descript",label:"描述",minWidth:"180"},{prop:"createTime",label:"创建时间",minWidth:"180"}],operator:[{text:"编辑",fun:async e=>{C.value="编辑页面",N.value=!0,L.fieldList.map(((e,l)=>{"password"===e.value&&L.fieldList.splice(l,1)})),delete L.rules.password;const l=await I.$api.editUser();l.success&&c((()=>{L.ref.clearValidate();let e=l.data;L.formData=e}))}},{text:"重置密码",fun:e=>{}},{text:"删除",fun:e=>{l.confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{a.success({message:"删除成功!"})})).catch((()=>{a.info({message:"已取消删除"})}))}}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:180,label:"操作"}}}),k=()=>{var e;(null==(e=j.table)?void 0:e.firstColumn)?delete j.table.firstColumn:j.table.firstColumn={type:"index",lable:"序列"}},N=b(!1),S=(e,l)=>{e},x=()=>{N.value=!0;let e={label:"登录密码",value:"password",type:"input",comp:"el-input",bind:{"show-password":!0}},l=[{required:!0,message:"请输入登录密码",trigger:"blur"}];L.fieldList.some((e=>"password"==e.value))||L.fieldList.splice(1,0,e),L.rules.password||(L.rules.password=l),c((()=>{var e;null==(e=null==L?void 0:L.ref)||e.resetFields(),setTimeout((()=>{L.ref.clearValidate()}),100)}))},L=f({ref:null,formData:{userName:null,
// 登录账号
password:null,
// 登录密码
nickName:null,
// 姓名
sex:null,
// 性别
deptId:null,
// 部门
postId:null,
// 岗位
email:null,
// 邮箱
phonenumber:null,
// 手机
roleIds:null,
// 角色
remark:null,
// 备注
status:!0},fieldList:[{label:"登录账号",value:"userName",type:"input",comp:"el-input"},{label:"登录密码",value:"password",type:"input",comp:"el-input",bind:{"show-password":!0}},{label:"姓名",value:"nickName",type:"input",comp:"el-input"},{label:"性别",value:"sex",type:"select-arr",list:"sexList",comp:"el-select",arrLabel:"label",arrKey:"key"},{label:"部门",value:"deptId",placeholder:"请选择部分",comp:"el-cascader",isSelfCom:!0,bind:{filterable:!0,"show-all-levels":!1,props:{children:"children",label:"label",value:"id"},options:[]},widthSize:1},{label:"岗位",value:"postId",comp:"t-select",isSelfCom:!0,bind:{labelCustom:"postName",valueCustom:"postId",optionSource:[]}},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"手机",value:"phonenumber",type:"input",comp:"el-input",bind:{maxLength:11}},{label:"角色",value:"roleIds",widthSize:1,placeholder:"请选择角色",comp:"el-cascader",isSelfCom:!0,bind:{filterable:!0,"show-all-levels":!1,props:{children:"roles",label:"label",value:"id"},options:[]}},{label:"备注",value:"remark",type:"input",comp:"el-input",widthSize:1}],rules:{userName:[{required:!0,message:"请输入登录账号",trigger:"blur"}],password:[{required:!0,message:"请输入登录密码",trigger:"blur"}],nickName:[{required:!0,message:"请输入姓名",trigger:"blur"}],deptId:[{required:!0,message:"请选择部门",trigger:"change"}],power:[{required:!0,message:"请选择功率",trigger:"change"}],roleIds:[{required:!0,message:"请选择角色",trigger:"change"}],email:[{validator:(e,l,a)=>{l&&!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(l)&&a(new Error(e.message)),a()},message:"邮箱格式错误",trigger:"blur"}]},
// 相关列表
listTypeInfo:{sexList:[{label:"男",key:"0"},{label:"女",key:"1"},{label:"未知",key:"2"}]}}),O=()=>{L.ref.validate((e=>{e&&setTimeout((()=>{a.success("新增成功"),N.value=!1}),1500)}))},z=s((()=>({userName:{label:"登录名称",comp:"el-input"},nickName:{label:"姓名",comp:"el-input"},phonenumber:{label:"手机号码",comp:"el-input"},date1:{label:"日期组件使用",comp:"t-date-picker",bind:{isPickerOptions:!0}},postId:{label:"岗位",defaultVal:null,comp:"t-select",isSelfCom:!0,bind:{labelCustom:"postName",valueCustom:"postId",optionSource:j.listTypeInfo.postOptions}},postId1:{label:"岗位22",defaultVal:null,comp:"el-select",type:"select-arr",list:"postOptions",listTypeInfo:j.listTypeInfo,arrLabel:"postName",arrKey:"postId"},date:{label:"创建时间",comp:"t-date-picker",span:2,bind:{type:"daterange"}}}))),V=s((()=>{const{userName:e,nickName:l,date:a,date1:t,postId:s,postId1:o,phonenumber:i}=v(j.queryData);return{userName:e.value,nickName:l.value,postId:s.value,postId1:o.value,phonenumber:i.value,date1:t.value,beginDate:a.value&&a.value[0]?a.value[0]:null,endDate:a.value&&a.value[1]?a.value[1]:null,pageNum:j.table.currentPage,pageSize:j.table.pageSize}})),q=e=>{j.queryData=e,W()},T=e=>{j.ids=e.map((e=>e.operId))};o((()=>{W(),P(),D(),E()}));const P=async()=>{const e=await I.$api.treeselect();e.success&&(j.deptOptions=e.data,L.fieldList.forEach((l=>{"deptId"===l.value&&(l.bind.options=e.data)})))},D=async()=>{const e=await I.$api.getPost();e.success&&(j.postOptions=e.data,j.listTypeInfo.postOptions=e.data,z.value.postId.defaultVal=e.data[0].postId,z.value.postId1.defaultVal=e.data[0].postId,L.fieldList.forEach((l=>{"postId"===l.value&&(l.bind.optionSource=e.data)})))},E=async()=>{const e=await I.$api.getRoles();e.success&&(j.rolesOptions=e.data,L.fieldList.forEach((l=>{"roleIds"===l.value&&(l.bind.options=e.data)})))},W=async()=>{const e=await I.$api.userList(V.value);e.success&&(j.table.data=e.data.rows,j.table.total=e.data.total)},$=e=>{j.table.pageSize=e,W()},U=e=>{j.table.currentPage=e,W()};return(e,l)=>{const a=i("t-query-condition"),t=i("t-layout-page-item"),s=i("el-button"),o=i("t-table"),c=i("t-form"),b=i("el-dialog"),f=i("t-layout-page");return r(),u(f,null,{default:p((()=>[n(t,null,{default:p((()=>[n(a,{opts:g(z),onSubmit:q,isExpansion:""},null,8,["opts"])])),_:1}),n(t,null,{default:p((()=>[n(o,{title:"弹窗新增列表",isCopy:"",table:g(j).table,columns:g(j).table.columns,isPaginationCumulative:g(_),onSelectionChange:T,onSizeChange:$,onPageChange:U},{toolbar:p((()=>[n(s,{type:"primary",onClick:k},{default:p((()=>[d(h(g(j).table.firstColumn?"清除序列号":"新增序列号"),1)])),_:1}),n(s,{type:"primary",onClick:l[0]||(l[0]=e=>_.value=!g(_))},{default:p((()=>[d("序列号翻页"+h(g(_)?"不累加":"累加"),1)])),_:1}),n(s,{type:"primary",onClick:x},{default:p((()=>[d("新增")])),_:1})])),_:1},8,["table","columns","isPaginationCumulative"])])),_:1}),n(b,{title:g(C),width:"60%",draggable:"",modelValue:g(N),"onUpdate:modelValue":l[3]||(l[3]=e=>y(N)?N.value=e:null)},{footer:p((()=>[m("div",w,[n(s,{onClick:l[2]||(l[2]=e=>N.value=!1)},{default:p((()=>[d("取消")])),_:1}),n(s,{type:"primary",onClick:O},{default:p((()=>[d(" 确定 ")])),_:1})])])),default:p((()=>[n(c,{modelValue:g(L).ref,"onUpdate:modelValue":l[1]||(l[1]=e=>g(L).ref=e),formOpts:g(L),widthSize:2,onHandleEvent:S},null,8,["modelValue","formOpts"])])),_:1},8,["title","modelValue"])])),_:1})}}});export{I as default};
