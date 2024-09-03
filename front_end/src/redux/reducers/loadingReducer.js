import { SET_LOADING, CLEAR_LOADING } from "../actions/loadingActions";

const initialState = false

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return true
        case CLEAR_LOADING:
            return false
        default:
            return state
    }
}

export {loadingReducer}