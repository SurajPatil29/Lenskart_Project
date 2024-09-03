import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchScreenGlasses } from '../../redux/actions/screenGlassesAction'

function ScreenKids() {
  const dispatch = useDispatch()

  const handeleFilter = () => {
    dispatch(fetchScreenGlasses("kids"))
  }
  return (
    <button onClick={handeleFilter}>ScreenKids</button>
  )
}

export {ScreenKids}