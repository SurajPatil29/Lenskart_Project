import { FETCH_SCREENGLASSES_REQUEST, FETCH_SCREENGLASSES_SUCCESS, FETCH_SCREENGLASSES_FAILURE, SET_SCREENGLASSES_PAGE, SET_SCREENGLASSES_SORT } from "../actions/screenGlassesAction";

const initialState = {
    products: [],
    loading: false,
    error: null,
    page: 1,
    sort: { sort: "price", order: "asc" },
  }

  const screenGlassesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SCREENGLASSES_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_SCREENGLASSES_SUCCESS:
        return { ...state, loading: false, products: action.payload };
      case FETCH_SCREENGLASSES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case SET_SCREENGLASSES_PAGE:
        return { ...state, page: action.payload };
      case SET_SCREENGLASSES_SORT:
        return { ...state, sort: action.payload };
      default:
        return state;
    }
  };
  
  export { screenGlassesReducer }