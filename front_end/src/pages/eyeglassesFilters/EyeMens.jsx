import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/actions/eyeglassesAction'

function EyeMens() {
  const dispatch = useDispatch

  const handleFilter = () => {
    dispatch(fetchProducts("mens"))
  }
  return (
    <button onClick={handleFilter}>EyeMens</button>
  )
}

export {EyeMens}