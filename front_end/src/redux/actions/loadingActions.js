const SET_LOADING = "SET_LOADING"
const CLEAR_LOADING = "CLEAR_LOADING"

const setLoading = () =>({
    type : SET_LOADING
})

const clearLoading = () => ({
    type : CLEAR_LOADING
})

export {setLoading, clearLoading,SET_LOADING, CLEAR_LOADING}