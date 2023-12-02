import { defineStore } from "pinia";
import { AuthState } from "@/store/interface";
import { getFlatMenuList, getShowMenuList, getAllBreadcrumbList } from "@/utils";
import { getRouters, getUserRouters } from "@/api/modules/login";
import { useUserStore } from "@/store/modules/user";
export const useAuthStore = defineStore({
  id: "wocwin-auth",
  state: (): AuthState => ({
    // 按钮权限列表
    authButtonList: {},
    // 菜单权限列表
    authMenuList: [],
    // 当前页面的 router name，用来做按钮权限筛选
    routeName: ""
  }),
  getters: {
    // 按钮权限列表
    authButtonListGet: state => state.authButtonList,
    // 菜单权限列表 ==> 这里的菜单没有经过任何处理
    authMenuListGet: state => state.authMenuList,
    // 菜单权限列表 ==> 左侧菜单栏渲染，需要剔除 isHide == true
    showMenuListGet: state => getShowMenuList(state.authMenuList),
    // 菜单权限列表 ==> 扁平化之后的一维数组菜单，主要用来添加动态路由
    flatMenuListGet: state => getFlatMenuList(state.authMenuList),
    // 递归处理后的所有面包屑导航列表
    breadcrumbListGet: state => getAllBreadcrumbList(state.authMenuList)
  },
  actions: {
    // Get AuthButtonList
    // async getAuthButtonList() {
    //   const { data } = await getAuthButtonListApi();
    //   this.authButtonList = data;
    // },
    // // Get AuthMenuList
    getAuthMenuList() {
      // const { data } = GetMenuData;
      // this.authMenuList = data;
      console.log("useUserStore--", useUserStore().loginName);
      const useApi = useUserStore().loginName === "user" ? getUserRouters() : getRouters();
      return new Promise((resolve, reject) => {
        useApi
          .then((res: any) => {
            this.authMenuList = res.data;
            resolve(res.data);
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    },
    // Set RouteName
    async setRouteName(name: string) {
      this.routeName = name;
    }
  }
});
