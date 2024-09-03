import { FETCH_HOME_FAILURE, FETCH_HOME_SUCCESS, FETCH_HOME_REQUEST } from "../actions/homeAction";


const initialState = {
    homes: [],
    loading: false,
    error: null
}


const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HOME_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_HOME_SUCCESS:
            return {
                ...state,
                loading: false,
                homes: action.payload
            }
        case FETCH_HOME_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default : 
        return state
    }
}


export {homeReducer}