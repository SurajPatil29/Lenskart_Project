import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchScreenGlasses } from '../../redux/actions/screenGlassesAction'

function Screenhalfrim() {
  const dispatch = useDispatch()

  const handeleFilter = () => {
    dispatch(fetchScreenGlasses("halfrim"))
  }
  return (
    <button onClick={handeleFilter}>Screenhalfrim</button>
  )
}

export {Screenhalfrim}