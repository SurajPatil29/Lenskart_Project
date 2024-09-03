import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchScreenGlasses } from '../../redux/actions/screenGlassesAction'

function ScreenFullrim() {
  const dispatch = useDispatch()

  const handeleFilter = () => {
    dispatch(fetchScreenGlasses("fullrim"))
  }
  return (
    <button onClick={handeleFilter}>ScreenFullrim</button>
  )
}

export {ScreenFullrim}