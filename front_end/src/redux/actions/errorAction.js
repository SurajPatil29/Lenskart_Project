const SET_ERROR = "SET_ERROR"
const CLEAR_ERROR = "CLEAR_ERROR"


const setError = (error) => ({
    type : SET_ERROR,
    payload : error
})

const clearError = () =>({
    type : CLEAR_ERROR
})

export {SET_ERROR, CLEAR_ERROR, setError, clearError}