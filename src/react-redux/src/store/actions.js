
import { ADD_TYPE } from './actionTypes'
const addAction = (params)=>{
    return {
        type:ADD_TYPE,
        ...params
    }
}

export {
    addAction
}