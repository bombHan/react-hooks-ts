import { createContext } from 'react'
interface Params {
    state: any,
    dispatch: any
}
const params: Params = {
    state: {},
    dispatch: ({}:any) =>{}
}


const Context = createContext(params)
export default Context