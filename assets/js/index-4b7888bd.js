import{u as e}from"./useApi-a3664480.js";import{b as l,E as a}from"./element-plus@2.4.2_vue@3.2.47-0fdf09cc.js";import{e as t,t as s,f as i,Z as o,o as r,P as u,Q as n,c as p,J as m,b as d,n as c}from"./@vue_runtime-core@3.2.47-ac740756.js";import{r as b,j as v,v as f,u as g,i as h}from"./@vue_reactivity@3.2.47-31538bbf.js";import{O as y}from"./@vue_shared@3.2.47-177e1703.js";import"./lodash-es@4.17.21-cbdb10ad.js";import"./@vueuse_core@9.13.0_vue@3.2.47-a7f0bdd9.js";import"./@vueuse_shared@9.13.0_vue@3.2.47-ba8084b7.js";import"./@vue_runtime-dom@3.2.47-7b31c7d0.js";import"./@element-plus_icons-vue@2.1.0_vue@3.2.47-036cf3d1.js";import"./@sxzz_popperjs-es@2.11.7-b78c3215.js";import"./@ctrl_tinycolor@3.6.0-142ab585.js";import"./dayjs@1.11.7-9bf05c84.js";import"./@babel_runtime@7.21.5-c38e47b2.js";import"./async-validator@4.2.5-cf877c1f.js";import"./memoize-one@6.0.0-63ab667a.js";import"./escape-html@1.0.3-8d4a79e6.js";import"./normalize-wheel-es@1.2.0-3222b0a2.js";import"./@floating-ui_dom@1.2.7-dfed1e85.js";import"./@floating-ui_core@1.2.6-88778327.js";const w={class:"dialog-footer"},k=t({...t({name:"superDemo"}),setup(t){const{proxy:k}=e(),_=b(!1),C=b("新增页面"),j=v({deptOptions:[],
// 左侧tree
postOptions:[],
// 岗位
rolesOptions:[],
// 角色
queryData:{userName:null,
// 登录名
nickName:null,
// 用户状态
workshopNum:null,phonenumber:null,date1:null,date:null},listTypeInfo:{multipleList:[{name:"前纺一车间",id:"W1"},{name:"前纺二车间",id:"W2"},{name:"前纺三车间",id:"W3"},{name:"前纺四车间",id:"W4"}]},table:{currentPage:1,pageSize:10,total:0,
// 接口返回数据
data:[],
// 表头数据
columns:[{prop:"userName",label:"登录名",minWidth:"120"},{prop:"nickName",label:"用户名",minWidth:"120"},{prop:"deptName",label:"部门",minWidth:"120"},{prop:"roleName",label:"角色",minWidth:"120"},{prop:"descript",label:"描述",minWidth:"180"},{prop:"createTime",label:"创建时间",minWidth:"180"}],operator:[{text:"编辑",fun:async e=>{C.value="编辑页面",S.value=!0,L.fieldList.map(((e,l)=>{"password"===e.value&&L.fieldList.splice(l,1)})),delete L.rules.password;const l=await k.$api.editUser();l.success&&c((()=>{L.ref.clearValidate();let e=l.data;L.formData=e}))}},{text:"重置密码",fun:e=>{}},{text:"删除",fun:e=>{l.confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{a.success({message:"删除成功!"})})).catch((()=>{a.info({message:"已取消删除"})}))}}],
// 操作列样式
operatorConfig:{fixed:"right",
// 固定列表右边（left则固定在左边）
width:180,label:"操作"}}}),N=()=>{var e;(null==(e=j.table)?void 0:e.firstColumn)?delete j.table.firstColumn:j.table.firstColumn={type:"index",lable:"序列"}},S=b(!1),I=(e,l)=>{e},x=()=>{S.value=!0;let e={label:"登录密码",value:"password",type:"input",comp:"el-input",bind:{"show-password":!0}},l=[{required:!0,message:"请输入登录密码",trigger:"blur"}];L.fieldList.some((e=>"password"==e.value))||L.fieldList.splice(1,0,e),L.rules.password||(L.rules.password=l),c((()=>{var e;null==(e=null==L?void 0:L.ref)||e.resetFields(),setTimeout((()=>{L.ref.clearValidate()}),100)}))},L=v({ref:null,formData:{userName:null,
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
listTypeInfo:{sexList:[{label:"男",key:"0"},{label:"女",key:"1"},{label:"未知",key:"2"}]}}),z=()=>{L.ref.validate((e=>{e&&setTimeout((()=>{a.success("新增成功"),S.value=!1}),1500)}))},q=s((()=>({userName:{label:"登录名称",comp:"el-input"},nickName:{label:"姓名",comp:"el-input"},phonenumber:{label:"手机号码",comp:"el-input"},date1:{label:"日期组件使用",comp:"t-date-picker",bind:{isPickerOptions:!0}},workshopNum:{label:"t-select使用",placeholder:"请多选",span:2,comp:"t-select",isSelfCom:!0,bind:{valueCustom:"id",labelCustom:"name",multiple:!0,optionSource:j.listTypeInfo.multipleList}},date:{label:"创建时间",comp:"t-date-picker",span:2,bind:{type:"daterange"}}}))),O=s((()=>{const{userName:e,nickName:l,date:a,date1:t,workshopNum:s,phonenumber:i}=f(j.queryData);return{userName:e.value,nickName:l.value,workshopNum:s.value,phonenumber:i.value,date1:t.value,beginDate:a.value&&a.value[0]?a.value[0]:null,endDate:a.value&&a.value[1]?a.value[1]:null,pageNum:j.table.currentPage,pageSize:j.table.pageSize}})),W=e=>{j.queryData=e,E()},D=e=>{j.ids=e.map((e=>e.operId))};i((()=>{E(),P(),T(),V()}));const P=async()=>{const e=await k.$api.treeselect();e.success&&(j.deptOptions=e.data,L.fieldList.forEach((l=>{"deptId"===l.value&&(l.bind.options=e.data)})))},T=async()=>{const e=await k.$api.getPost();e.success&&(j.postOptions=e.data,L.fieldList.forEach((l=>{"postId"===l.value&&(l.bind.optionSource=e.data)})))},V=async()=>{const e=await k.$api.getRoles();e.success&&(j.rolesOptions=e.data,L.fieldList.forEach((l=>{"roleIds"===l.value&&(l.bind.options=e.data)})))},E=async()=>{const e=await k.$api.userList(O.value);e.success&&(j.table.data=e.data.rows,j.table.total=e.data.total)},$=e=>{j.table.pageSize=e,E()},U=e=>{j.table.currentPage=e,E()};return(e,l)=>{const a=o("t-query-condition"),t=o("t-layout-page-item"),s=o("el-button"),i=o("t-table"),c=o("t-form"),b=o("el-dialog"),v=o("t-layout-page");return r(),u(v,null,{default:n((()=>[p(t,null,{default:n((()=>[p(a,{opts:g(q),onSubmit:W},null,8,["opts"])])),_:1}),p(t,null,{default:n((()=>[p(i,{title:"弹窗新增列表",isCopy:"",table:g(j).table,columns:g(j).table.columns,isPaginationCumulative:g(_),onSelectionChange:D,onSizeChange:$,onPageChange:U},{toolbar:n((()=>[p(s,{type:"primary",onClick:N},{default:n((()=>[m(y(g(j).table.firstColumn?"清除序列号":"新增序列号"),1)])),_:1}),p(s,{type:"primary",onClick:l[0]||(l[0]=e=>_.value=!g(_))},{default:n((()=>[m("序列号翻页"+y(g(_)?"不累加":"累加"),1)])),_:1}),p(s,{type:"primary",onClick:x},{default:n((()=>[m("新增")])),_:1})])),_:1},8,["table","columns","isPaginationCumulative"])])),_:1}),p(b,{title:g(C),width:"60%",draggable:"",modelValue:g(S),"onUpdate:modelValue":l[3]||(l[3]=e=>h(S)?S.value=e:null)},{footer:n((()=>[d("div",w,[p(s,{onClick:l[2]||(l[2]=e=>S.value=!1)},{default:n((()=>[m("取消")])),_:1}),p(s,{type:"primary",onClick:z},{default:n((()=>[m(" 确定 ")])),_:1})])])),default:n((()=>[p(c,{modelValue:g(L).ref,"onUpdate:modelValue":l[1]||(l[1]=e=>g(L).ref=e),formOpts:g(L),widthSize:2,onHandleEvent:I},null,8,["modelValue","formOpts"])])),_:1},8,["title","modelValue"])])),_:1})}}});export{k as default};
