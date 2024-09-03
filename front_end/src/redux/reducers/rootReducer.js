import { combineReducers } from "redux"
import { errorReducer } from "./errorReducer"
import { loadingReducer } from "./loadingReducer"
import { homeReducer } from "./homeReducer"
import { eyeglasessReducer } from "./eyeglassesReducer"
import { screenGlassesReducer } from "./screenGlassesReducer"
import { kidGlassesReducer } from "./kidGlassesReducer"



const rootReducer = combineReducers({
    error : errorReducer,
    loading : loadingReducer,
    home : homeReducer,
    eyeglasess : eyeglasessReducer,
    screenGlasses : screenGlassesReducer,
    kidGlasses : kidGlassesReducer
})

export {rootReducer}