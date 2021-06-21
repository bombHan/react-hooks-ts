// import React, { useReducer, useContext, useEffect } from 'react'
// import './index.scss'
// import { Form, Input, Button } from 'antd';
// import { useHistory } from 'react-router-dom';
// import Context from '../../store/context'

// const layout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 16 },
// };

// const Login = () => {
//     const [form] = Form.useForm()
//     let history = useHistory();
//     const { state,dispatch } = useContext(Context)

//     const login = () => {
//         form.validateFields().then((res) => {
//             console.log(res);
//             dispatch({type: 'SET_USERINFO', value: res})
//             history.push(res.url)
//         }).catch((e) => {
//             console.log('eeee', e)
//         })
//     }
//     const reset = () => {
//         form.resetFields();
//         form.setFieldsValue({
//             inviteCode: 'hanInvite'
//         })
//     }
//     useEffect(() => {
//         console.log('这里类似componentDidMount');
//         return () => {
//             console.log('离开登入页，该周期类似componentWillUnmount');
//         };
//     }, [])

//     return (
//         <div className="login-wrap">
//             <div className="login">
//                 <div style={{ marginBottom: '20px' }}>
//                     登录系统
//                 </div>
//                 <Form
//                     {...layout}
//                     name="basic"
//                     form={form}
//                     initialValues={{
//                         username: '默认账号',
//                         url: '/home'
//                     }}
//                 >
//                     <Form.Item
//                         label="账号"
//                         name="username"
//                         rules={[{ required: true, message: '请填写您的账号' }]}
//                     >
//                         <Input />
//                     </Form.Item>
//                     <Form.Item
//                         label="邀请码"
//                         name="inviteCode"
//                     >
//                         <Input />
//                     </Form.Item>
//                     <Form.Item
//                         label="跳转地址"
//                         name="url"
//                         rules={[{ required: true, message: '请输入跳转地址' }]}
//                     >
//                         <Input />
//                     </Form.Item>
//                 </Form>
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                     <Button type="primary" onClick={login} style={{ margin: '0 20px 0 50px' }}>
//                         登录
//                     </Button>
//                     <Button onClick={reset}>
//                         重置
//                     </Button>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Login

import React, { useReducer, useContext, useEffect } from 'react'
import './index.scss'
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import Context from '../../store/context'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const Login = () => {
    const [form] = Form.useForm()
    let history = useHistory();
    const { state,dispatch } = useContext(Context)

    const login = () => {
        form.validateFields().then((res) => {
            console.log(res);
            dispatch({type: 'SET_USERINFO', value: res})
            dispatch({type: 'SET_APPINFO', value: {appName: '大佬公司'}})
            history.push(res.url)
        }).catch((e) => {
            console.log('eeee', e)
        })
    }
    const reset = () => {
        form.resetFields();
        form.setFieldsValue({
            inviteCode: 'hanInvite'
        })
    }
    useEffect(() => {
        console.log('这里类似componentDidMount');
        return () => {
            console.log('离开登入页，该周期类似componentWillUnmount');
        };
    }, [])

    return (
        <div className="login-wrap">
            <div className="login">
                <div style={{ marginBottom: '20px' }}>
                    登录系统
                </div>
                <Form
                    {...layout}
                    name="basic"
                    form={form}
                    initialValues={{
                        username: '默认账号',
                        url: '/home'
                    }}
                >
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[{ required: true, message: '请填写您的账号' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="邀请码"
                        name="inviteCode"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="跳转地址"
                        name="url"
                        rules={[{ required: true, message: '请输入跳转地址' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button type="primary" onClick={login} style={{ margin: '0 20px 0 50px' }}>
                        登录
                    </Button>
                    <Button onClick={reset}>
                        重置
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Login
