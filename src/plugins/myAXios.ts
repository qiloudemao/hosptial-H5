import axios from "axios";

const TOKEN_KEY="token"
const ACTIVE_PATH="active_key"

export function getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
}

export  function setToken(token:string){
    sessionStorage.setItem(TOKEN_KEY,token);
}

export  function clearToken(){
    sessionStorage.clear();
}
export  function getActivePath(){
    return sessionStorage.getItem(ACTIVE_PATH);
}

export  function setActivePath(path:any){
    sessionStorage.setItem(ACTIVE_PATH, path);
}

const myAXios=axios.create({
    baseURL:'http://localhost:9999',
})

myAXios.defaults.withCredentials = true;
//拦截器
// 添加请求拦截器
myAXios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log("请求发送了",config)
    const token = getToken();
    if(token !== null){
        //在请求的头部加入token
        config.headers["token"] = token;
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAXios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log("请求收到了了",response)
    // if(response?.data?.code === 40100) {
    //     const redirectUrl=window.location.href;
    //     window.location.href=`/user/login?redirect=${redirectUrl}`;
    // }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myAXios