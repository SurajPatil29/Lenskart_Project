import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchScreenGlasses } from '../../redux/actions/screenGlassesAction'

function ScreenWomens() {
  const dispatch = useDispatch()

  const handeleFilter = () => {
    dispatch(fetchScreenGlasses("womens"))
  }
  return (
    <button onClick={handeleFilter}>ScreenWomens</button>
  )
}

export {ScreenWomens}