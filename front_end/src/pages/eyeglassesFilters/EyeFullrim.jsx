import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/actions/eyeglassesAction'

function EyeFullrim() {
  const dispatch = useDispatch()

  const handeleFilter = () => {
    dispatch(fetchProducts("fullrim"))
  }
  return (
    <button onClick={handeleFilter}>EyeFullrim</button>
  )
}

export {EyeFullrim}