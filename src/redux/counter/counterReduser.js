import { createReducer } from "@reduxjs/toolkit"
import { plusAction, minusAction} from "./counterAction"

const defaultReducer = 0


export const counterReduser = createReducer(defaultReducer,{
    [plusAction]: (state)=>{
    return state + 1
    },
    [minusAction]: (state)=>{
        return state - 1
    }
})
