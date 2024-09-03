import {
    FETCH_KIDGLASSES_REQUEST,
    FETCH_KIDGLASSES_SUCCESS,
    FETCH_KIDGLASSES_FAILURE,
    SET_KIDGLASSES_PAGE,
    SET_KIDGLASSES_SORT,
  } from "../actions/kidGlassesAction";
  
  const initialState = {
    products: [],
    loading: false,
    error: null,
    page: 1,
    sort: { sort: "price", order: "asc" },
  };
  
  const kidGlassesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_KIDGLASSES_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_KIDGLASSES_SUCCESS:
        return { ...state, loading: false, products: action.payload };
      case FETCH_KIDGLASSES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case SET_KIDGLASSES_PAGE:
        return { ...state, page: action.payload };
      case SET_KIDGLASSES_SORT:
        return { ...state, sort: action.payload };
      default:
        return state;
    }
  };
  
  export { kidGlassesReducer };