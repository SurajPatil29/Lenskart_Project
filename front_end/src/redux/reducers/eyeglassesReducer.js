import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, SET_PAGE, SET_SORT } from "../actions/eyeglassesAction"
const initialState = {
    products: [],
    loading: false,
    error: null,
    page: 1,
    sort: { sort: "price", order: "asc" }
}


const eyeglasessReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null }
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: action.payload }
        case FETCH_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case SET_PAGE:
            return { ...state, page: action.payload }
        case SET_SORT:
            return { ...state, sort: action.payload }
        default:
            return state
    }
}

export { eyeglasessReducer }


