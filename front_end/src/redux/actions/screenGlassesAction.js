import axios from "axios";

export const FETCH_SCREENGLASSES_REQUEST = "FETCH_SCREENGLASSES_REQUEST"
export const FETCH_SCREENGLASSES_SUCCESS = "FETCH_SCREENGLASSES_SUCCESS"
export const FETCH_SCREENGLASSES_FAILURE = "FETCH_SCREENGLASSES_FAILURE"
export const SET_SCREENGLASSES_PAGE = "SET_SCREENGLASSES_PAGE"
export const SET_SCREENGLASSES_SORT = "SET_SCREENGLASSES_SORT"


export const fetchScreenGlassesRequest = () => ({type: FETCH_SCREENGLASSES_REQUEST})

export const fetchScreenGlassesSuccess =  (products) => ({
    type : FETCH_SCREENGLASSES_SUCCESS,
    payload : products
})

export const fetchScreenGlassesFailure = (error) => ({
    type : FETCH_SCREENGLASSES_FAILURE,
    payload : error
})

export const setScreenGlassesPage = (page) => ({
    type : SET_SCREENGLASSES_PAGE,
    payload : page
})

export const setScreenGlassesSort = (sort, order) => ({
    type : SET_SCREENGLASSES_SORT,
    payload : {sort, order}
})

export const fetchScreenGlasses = (filter = "products", sort = "price", order = "asc", page = 1, limit = 9) => async (dispatch) => {
    dispatch(fetchScreenGlassesRequest());
    try {
        const token = localStorage.getItem("accessToken");

        // Set up headers with Authorization token
        const config = {
            headers: {
                authentication: `Bearer ${token}`,  // Include the token in the Authorization header
            },
        }
      const response = await axios.get(`https://lenskart-project.onrender.com/screenGlasses/${filter}?sort=${sort}&order=${order}&page=${page}&limit=${limit}`, config);
      dispatch(fetchScreenGlassesSuccess(response.data));
      console.log(response.data);
      
    } catch (error) {
        console.log(error.response);
        
      dispatch(fetchScreenGlassesFailure("Error fetching products"));
    }
  };