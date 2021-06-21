const userInitState = {
    userInfo: {
        username: '无',
        inviteCode: ''
    }
  }
  
  const UseReducer = (state = userInitState, action:any) => {
    console.log(action, typeof(action),action.type, action.type === 'SET_USERINFO');
    switch (action.type) {
      case 'SET_USERINFO':
        return {
          ...state,
          userInfo: action.value
        }
      default:
        return state
    }
  }
  
  export {
    userInitState, UseReducer
  }
