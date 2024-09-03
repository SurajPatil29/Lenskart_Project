import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, setPage, setSort } from '../redux/actions/eyeglassesAction'
import { ErrorHandler } from '../loading&error/Errorhandling'
import { Loadinghandling as LoadingSpinner } from '../loading&error/Loadinghandling'
import { EyeFullrim } from './eyeglassesFilters/EyeFullrim'
import { EyeHalfrim } from './eyeglassesFilters/EyeHalfrim'
import { EyeMens } from './eyeglassesFilters/EyeMens'
import { EyeRimless } from './eyeglassesFilters/EyeRimless'
import { EyeWomens } from './eyeglassesFilters/EyeWomens'
import { Eyekids } from './eyeglassesFilters/Eyekids'


function Eyeglasses() {
  const dispatch = useDispatch()
  const {products, loading, error, page, sort} = useSelector((state) => state.eyeglasess)

  const pro = products.products
  useEffect(() =>{
    dispatch(fetchProducts("products", sort.sort, sort.order, page, 9))
  }, [dispatch, page, sort])

  const handleFilterClick = (filterType) => {
    dispatch(fetchProducts(filterType, sort.sort, sort.order, page, 9))
  }

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage))
  }

  const handleSortChange = (newSort, newOrder) => {
    dispatch(setSort(newSort, newOrder))
  }


console.log(products.products, loading, error, page, sort)
  return (
    <div>
      <h1>Eyeglasses</h1>
      <ErrorHandler error={error} onClose={() => dispatch({ type: 'CLEAR_ERROR' })} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          hii
        </div>
      )}
      {/* Pagination Controls */}
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => handlePageChange(page + 1)}>Next</button>

      {/* Sorting Controls */}
      <button onClick={() => handleSortChange("price", "asc")}>Sort by Price (Asc)</button>
      <button onClick={() => handleSortChange("price", "desc")}>Sort by Price (Desc)</button>
      {/* Add more sorting controls as needed */}
      <EyeFullrim />
      <EyeHalfrim />
      <EyeMens />
      <EyeRimless />
      <EyeWomens />
      <Eyekids />
    </div>
  )
}

export {Eyeglasses}