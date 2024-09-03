import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchScreenGlasses } from '../../redux/actions/screenGlassesAction'

function ScreenRimless() {
  const dispatch = useDispatch()

  const handeleFilter = () => {
    dispatch(fetchScreenGlasses("rimless"))
  }
  return (
    <button onClick={handeleFilter}>ScreenRimless</button>
  )
}

export {ScreenRimless}