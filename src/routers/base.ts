import { Test } from '../pages'

export const baseUrl = {
    test: '/test'
}

const baseRouter = [
    {
        path: baseUrl.test,
        component: Test,
        root: [],
        name: 'Test'
    }
]

export default baseRouter;