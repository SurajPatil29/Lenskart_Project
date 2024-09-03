import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/actions/eyeglassesAction'

function Eyekids() {
  const dispatch = useDispatch()

  const handleFilter = () => {
    dispatch(fetchProducts("kids"))
  }
  return (
    <button onClick={handleFilter}>Eyekids</button>
  )
}

export {Eyekids}