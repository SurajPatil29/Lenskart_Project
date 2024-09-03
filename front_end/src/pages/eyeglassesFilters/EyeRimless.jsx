import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/actions/eyeglassesAction'

function EyeRimless() {
  const dispatch = useDispatch()

  const handleFilter = () => {
    dispatch(fetchProducts("rimless"))
  }
  return (
    <button onClick={handleFilter}>EyeRimless</button>
  )
}

export {EyeRimless}