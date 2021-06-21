// const defaultState = {
//     userInfo: {
//         username: '无',
//         inviteCode: ''
//     }
//   }
  
//   const reducer = (state = defaultState, action:any) => {
//     console.log(action, typeof(action),action.type, action.type === 'SET_USERINFO');
//     switch (action.type) {
//       case 'SET_USERINFO':
//         return {
//           ...state,
//           userInfo: action.value
//         }
//       default:
//         return state
//     }
//   }
  
//   export {
//     defaultState, reducer
//   }

import {UseReducer, userInitState} from './userReduce'
import {appReducer, appInitState} from './appReduce'

export const rootInitState = {
  userReduce:userInitState,
  appReduce:appInitState
}

export const rootReduce = (state:any, action:any)=>{
  return {
    userReduce:UseReducer(state.userReduce,action), // 注意此处传入的数据   state.userReduce 不是 state
    appReduce:appReducer(state.appReduce,action)
  }
}
