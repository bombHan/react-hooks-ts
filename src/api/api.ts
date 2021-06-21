import { $axios } from "./index";
let api: any = {
  // Get 接口
  G0001(params: any) {
    return $axios.get("/fwCaptcha", { responseType: "arraybuffer" });
  },
},
  apiUrl = {
    // Post 接口
    login01: "/qfyLogin", // 登录

    forgot01: "/acct/getPhone", // 忘记密码--确认账户
    forgot02: "/acct/sendNote", // 忘记密码--发送验证码
    forgot03: "/acct/checkPhone", // 忘记密码--检验验证码
    forgot04: "/acct/updatePwd", // 忘记密码--修改密码

    register: '/api/register', // 注册

  };

for (let [key, value] of Object.entries(apiUrl)) {
  api[key] = (params: any) => {
    return $axios.post(value, params);
  };
}

export default api;
