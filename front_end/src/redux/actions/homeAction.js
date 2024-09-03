import axios from "axios";


//action types
export const FETCH_HOME_REQUEST = "FETCH_HOME_REQUEST"
export const FETCH_HOME_SUCCESS = "FETCH_HOME_SUCCESS"
export const FETCH_HOME_FAILURE = "FETCH_HOME_FAILURE"


//action creator

export const fetchHomeRequest = () => ({
    type : FETCH_HOME_REQUEST
})

export const fetchHomeSuccess = (homes) => ({
    type : FETCH_HOME_SUCCESS,
    payload : homes
})

export const fetchHomeFailure = (error) => ({
    type : FETCH_HOME_FAILURE,
    payload : error
})

export const fetchHomes = () => async (dispatch) => {
    dispatch(fetchHomeRequest())
    try {
        const response = await axios.get("https://lenskart-project.onrender.com/home/")
        dispatch(fetchHomeSuccess(response.data))
    } catch (error) {
        dispatch(fetchHomeFailure("Error Fetchnf Home Data"))
    }
}