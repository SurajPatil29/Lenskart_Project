import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/actions/eyeglassesAction'

function EyeWomens() {
  const dispatch = useDispatch()

  const handleFilter = () =>{
    dispatch(fetchProducts("womens"))
  }
  return (
    <button onClick={handleFilter}>EyeWomens</button>
  )
}

export {EyeWomens}