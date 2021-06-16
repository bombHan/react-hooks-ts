import React from 'react'
import { Redirect, Route, Switch, withRouter, useHistory } from 'react-router-dom'
import { Home } from './pages'
import { Routers } from './routers'
import Menu from './components/menu'

const App = () => {
  let history = useHistory();

  return (
    <div className="root-wrap">
      {
        history.location.pathname !== '/login'
          ? <Menu age={11} name={'test公司'} />
          : null
      }
      <Switch>
        {
          Routers.map(router => (
            <Route
              exact={!router.notExect}
              key={router.path}
              path={router.path}
              component={router.component}
            >
            </Route>
          ))
        }
        {/* 设置默认路由 推荐方法一*/}
        {/* 方法一 */}
        <Route path="/" component={Home} exact></Route>
        {/* 方法二 重定向*/}
        {/* <Redirect path="/" to="/home" /> */}
      </Switch>
    </div>
  )
}

export default withRouter(App)