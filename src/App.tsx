// import React, { useReducer } from 'react'
// import { Redirect, Route, Switch, withRouter, useHistory } from 'react-router-dom'
// import { Home } from './pages'
// import { Routers } from './routers'
// import Menu from './components/menu'
// import { defaultState, reducer } from './store'
// import Context from './store/context'

// const App = () => {
//   let history = useHistory();
//   const [state, dispatch] = useReducer(reducer, defaultState)
//   return (
//     <div className="root-wrap">
//       <Context.Provider value={{ state, dispatch }}>
//         {
//           history.location.pathname !== '/login'
//             ? <Menu inviteCode={state.userInfo.inviteCode} name={state.userInfo.username} />
//             : null
//         }
//         <div className="root_content">
//           <Switch>
//             {
//               Routers.map(router => (
//                 <Route
//                   exact={!router.notExect}
//                   key={router.path}
//                   path={router.path}
//                   component={router.component}
//                 >
//                 </Route>
//               ))
//             }
//             {/* 设置默认路由 推荐方法一*/}
//             {/* 方法一 */}
//             <Route path="/" component={Home} exact></Route>
//             {/* 方法二 重定向*/}
//             <Redirect path="*" to="/login" />
//           </Switch>
//         </div>
//       </Context.Provider>
//     </div>
//   )
// }

// export default withRouter(App)

import React, { useReducer } from 'react'
import { Redirect, Route, Switch, withRouter, useHistory } from 'react-router-dom'
import { Home } from './pages'
import { Routers } from './routers'
import Menu from './components/menu'
import { rootInitState, rootReduce } from './store'
import Context from './store/context'

const App = () => {
  let history = useHistory();
  const [state, dispatch] = useReducer(rootReduce, rootInitState)
  console.log(useReducer(rootReduce, rootInitState), rootReduce)
  return (
    <div className="root-wrap">
      <Context.Provider value={{ state, dispatch }}>
        {
          history.location.pathname !== '/login'
            ? <Menu inviteCode={state.userReduce.userInfo.inviteCode} name={state.userReduce.userInfo.username} />
            : null
        }
        <div className="root_content">
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
            <Redirect path="*" to="/login" />
          </Switch>
        </div>
      </Context.Provider>
    </div>
  )
}

export default withRouter(App)