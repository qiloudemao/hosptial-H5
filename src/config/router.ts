import Index from "../pages/Index.vue";
import UserPage from "../pages/UserPage.vue";
import UserLogin from "../pages/UserLoginPage.vue";
import PayPage from "../pages/PayPage.vue";
import SearchDoctorPage from "../pages/SearchDoctorPage.vue";


const routes = [
    {path: '/', component: Index},
    {path: '/user',title:'个人信息', component: UserPage},
    {path: '/user/login', title:'登录页面',component: UserLogin},
    {path:'/pay',title: '缴费窗口',component:PayPage},
    {path:'/search/doctor',component:SearchDoctorPage}
]

export default routes;