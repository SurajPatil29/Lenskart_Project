import axios from "axios"


export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST"
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS"
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE"
export const SET_PAGE = "SET_PAGE"
export const SET_SORT = "SET_SORT"


export const fetchProductsRequest = () => ({ type: FETCH_PRODUCTS_REQUEST })

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
})

export const setPage = (page) => ({
    type: SET_PAGE,
    payload: page
})

export const setSort = (sort, order) => ({
    type: SET_SORT,
    payload: { sort, order }
})

export const fetchProducts = (filter = "products", sort = "price", order = "asc", page = 1, limit = 9) => async (dispatch) => {
    dispatch(fetchProductsRequest())
    try {
        const token = localStorage.getItem("accessToken");

        // Set up headers with Authorization token
        const config = {
            headers: {
                authentication: `Bearer ${token}`,  // Include the token in the Authorization header
            },
        }
        const response = await axios.get(`https://lenskart-project.onrender.com/eyeGlasses/${filter}?sort=${sort}&order=${order}&page=${page}&limit=${limit}`, config)
        dispatch(fetchProductsSuccess(response.data))
        console.log(response.data)
    } catch (error) {
        console.log(error)
        dispatch(fetchProductsFailure(error.response?.data?.msg || "Error fetching products"))
    }
}