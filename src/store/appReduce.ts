const appInitState = {
    appInfo: {
        appName: '无',
    }
  }
  
  const appReducer = (state = appInitState, action:any) => {
    console.log(action, typeof(action),action.type, action.type === 'SET_APPINFO');
    switch (action.type) {
      case 'SET_APPINFO':
        return {
          ...state,
          appInfo: action.value
        }
      default:
        return state
    }
  }
  
  export {
    appInitState, appReducer
  }
