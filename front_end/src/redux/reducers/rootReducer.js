import { combineReducers } from "redux"
import { errorReducer } from "./errorReducer"
import { loadingReducer } from "./loadingReducer"
import { homeReducer } from "./homeReducer"



const rootReducer = combineReducers({
    error : errorReducer,
    loading : loadingReducer,
    home : homeReducer

})

export {rootReducer}