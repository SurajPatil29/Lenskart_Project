import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomes } from "../redux/actions/homeAction";
import { ErrorHandler } from "../loading&error/Errorhandling";
import { Loadinghandling } from "../loading&error/Loadinghandling";




function Home() {
  const dispatch = useDispatch()
  const {homes, loading, error} = useSelector((state) => state.home)// accesing home state from redux

  useEffect(()=>{
    dispatch(fetchHomes())//dispatch action to fetch homes data
  },[dispatch])

  const handleErrorClose = () => {
    dispatch({type : "CLEAR_ERROR"}) // clear error using dispatch
  }
console.log(homes, loading, error)

  return(
    <div>
      <h1> home list</h1>
      <ErrorHandler error={error} onClose={handleErrorClose} />
      {loading ? (
        <Loadinghandling />
      ) : (
        homes.map((home, i) => <div key={i}>{home._id}</div>)
      )
      }
    </div>
  )
}

export {Home}