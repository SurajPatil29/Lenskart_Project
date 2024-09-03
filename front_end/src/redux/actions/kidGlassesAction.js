import axios from "axios";

// Action Types
export const FETCH_KIDGLASSES_REQUEST = "FETCH_KIDGLASSES_REQUEST";
export const FETCH_KIDGLASSES_SUCCESS = "FETCH_KIDGLASSES_SUCCESS";
export const FETCH_KIDGLASSES_FAILURE = "FETCH_KIDGLASSES_FAILURE";
export const SET_KIDGLASSES_PAGE = "SET_KIDGLASSES_PAGE";
export const SET_KIDGLASSES_SORT = "SET_KIDGLASSES_SORT";

// Action Creators
export const fetchKidGlassesRequest = () => ({ type: FETCH_KIDGLASSES_REQUEST });

export const fetchKidGlassesSuccess = (products) => ({
  type: FETCH_KIDGLASSES_SUCCESS,
  payload: products,
});

export const fetchKidGlassesFailure = (error) => ({
  type: FETCH_KIDGLASSES_FAILURE,
  payload: error,
});

export const setKidGlassesPage = (page) => ({
  type: SET_KIDGLASSES_PAGE,
  payload: page,
});

export const setKidGlassesSort = (sort, order) => ({
  type: SET_KIDGLASSES_SORT,
  payload: { sort, order },
});

// Thunk for Fetching Data
export const fetchKidGlasses = (filter = "products", sort = "price", order = "asc", page = 1, limit = 9) => async (dispatch) => {
  dispatch(fetchKidGlassesRequest());
  try {
    const token = localStorage.getItem("accessToken");

    // Set up headers with Authorization token
    const config = {
        headers: {
            authentication: `Bearer ${token}`,  // Include the token in the Authorization header
        },
    }
    const response = await axios.get(`https://lenskart-project.onrender.com/kidsGlasses/${filter}?sort=${sort}&order=${order}&page=${page}&limit=${limit}`, config);
    dispatch(fetchKidGlassesSuccess(response.data));
    console.log(response.data)
  } catch (error) {
    confirm.log(error.response)
    dispatch(fetchKidGlassesFailure("Error fetching products"));
  }
};