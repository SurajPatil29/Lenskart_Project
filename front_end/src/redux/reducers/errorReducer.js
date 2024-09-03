import { SET_ERROR, CLEAR_ERROR } from "../actions/errorAction";


const initialState = ""

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR :
            return action.payload
        case CLEAR_ERROR : 
            return ""
        default : 
        return state    
    }
}

export {errorReducer}