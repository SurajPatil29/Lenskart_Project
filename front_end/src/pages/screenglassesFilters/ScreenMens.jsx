import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchScreenGlasses } from '../../redux/actions/screenGlassesAction'

function ScreenMens() {
  const dispatch = useDispatch()

  const handeleFilter = () => {
    dispatch(fetchScreenGlasses("mens"))
  }
  return (
    <button onClick={handeleFilter}>ScreenMens</button>
  )
}
export {ScreenMens}