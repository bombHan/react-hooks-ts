
import {
    Home,
  } from '../pages'
import baseRouter from './base'
  
  export type RouterType = {
    path: string,
    component: React.LazyExoticComponent<any>,
    root: string[],
    notExect?: boolean,
    name?: string
  }
  
  const HomeRouter: RouterType = {
    path: '/home',
    component: Home,
    root: [],
    name: 'Home'
  }
  // 总路由
  const Routers: RouterType[] = ([
    HomeRouter,
    ...baseRouter
  ])
  
  export {
    Routers
  }