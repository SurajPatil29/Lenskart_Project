import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKidGlasses, setKidGlassesPage, setKidGlassesSort } from '../redux/actions/kidGlassesAction';
import { ErrorHandler } from '../loading&error/Errorhandling';
import { Loadinghandling as LoadingSpinner } from '../loading&error/Loadinghandling';
import { PageComponantKidGlasses } from '../utils/PageComponantKidGlasses';


function Kids_glasses() {
  const dispatch = useDispatch();
  const { products, loading, error, page, sort } = useSelector((state) => state.kidGlasses);

  useEffect(() => {
    dispatch(fetchKidGlasses("products", sort.sort, sort.order, page, 9));
  }, [dispatch, page, sort]);

  const handleFilterClick = (filterType) => {
    dispatch(fetchKidGlasses(filterType, sort.sort, sort.order, page, 9));
  };

  const handlePageChange = (newPage) => {
    dispatch(setKidGlassesPage(newPage));
  };

  const handleSortChange = (newSort, newOrder) => {
    dispatch(setKidGlassesSort(newSort, newOrder));
  };

  return (
    <div>
      <h1>Kid Glasses</h1>
      <ErrorHandler error={error} onClose={() => dispatch({ type: 'CLEAR_ERROR' })} />
      {loading ? (
        <LoadingSpinner />
      ) : (
       <PageComponantKidGlasses />
      )}

   
    </div>
  );
}

export {Kids_glasses}