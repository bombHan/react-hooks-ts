// 路由懒加载
import { lazy } from 'react'

const Home = lazy(() => import('./home'))
const Test = lazy(() => import('./test'))
const Login = lazy(() => import('./login'))

export {
  Home,
  Test,
  Login
}
