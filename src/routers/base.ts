import { Test, Login } from '../pages'

export const baseUrl = {
    test: '/test',
    login: '/login'
}

const baseRouter = [
    {
        path: baseUrl.test,
        component: Test,
        root: [],
        name: 'Test'
    },
    {
        path: baseUrl.login,
        component: Login,
        root: [],
        name: 'Login'
    }
]

export default baseRouter;