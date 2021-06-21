import axios from "axios";

export const $axios = axios.create({});
// 拦截器 全局处理ajax request
$axios.interceptors.request.use(
  function(config) {
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    const params = config.params || {};
    let slimParams:any = {};
    for (const key in params) {
      if (params[key] !== "") {
        slimParams[key] = params[key];
      }
    }
    if (config.method === "get") {
      config.params = {
        _t: new Date().getTime(),
        ...slimParams,
      };
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

//全局处理ajax Error
$axios.interceptors.response.use(function(response) {
  console.log(response)
  if (response.status == 200) {
    if (response.data.code == "00000") {
      return Promise.resolve(response.data);
    } else {
      return Promise.resolve(response.data);
    }
  } else if (response.status == 403) {
    // message.error("登录状态已超时，请重新登录");
    return Promise.reject(response);
  } else {
    // message.error(response.data.desc);
    return Promise.reject(response);
  }
});
