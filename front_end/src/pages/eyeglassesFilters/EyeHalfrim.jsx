import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/actions/eyeglassesAction'

function EyeHalfrim() {
  const dispatch = useDispatch()

  const handleFilter = () => {
    dispatch(fetchProducts("halfrim"))
  }
  return (
    <button onClick={handleFilter}>EyeHalfrim</button>
  )
}

export {EyeHalfrim}