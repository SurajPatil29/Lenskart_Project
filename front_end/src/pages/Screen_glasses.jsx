// components/ScreenGlasses.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorHandler } from '../loading&error/Errorhandling';
import { Loadinghandling as LoadingSpinner } from '../loading&error/Loadinghandling';
import { fetchScreenGlasses, setScreenGlassesPage, setScreenGlassesSort } from '../redux/actions/screenGlassesAction';
function Screen_glasses() {
  const dispatch = useDispatch();
  const { products, loading, error, page, sort } = useSelector((state) => state.screenGlasses);

  useEffect(() => {
    dispatch(fetchScreenGlasses("products", sort.sort, sort.order, page, 9));
  }, [dispatch, page, sort]);

  const handleFilterClick = (filterType) => {
    dispatch(fetchScreenGlasses(filterType, sort.sort, sort.order, page, 9));
  };

  const handlePageChange = (newPage) => {
    dispatch(setScreenGlassesPage(newPage));
  };

  const handleSortChange = (newSort, newOrder) => {
    dispatch(setScreenGlassesSort(newSort, newOrder));
  };

  return (
    <div>
      <h1>Screen Glasses</h1>
      <ErrorHandler error={error} onClose={() => dispatch({ type: 'CLEAR_ERROR' })} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {/* Display products */}
         <h1>hii</h1>
        </div>
      )}

      {/* Pagination Controls */}
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => handlePageChange(page + 1)}>Next</button>

      {/* Sorting Controls */}
      <button onClick={() => handleSortChange("price", "asc")}>Sort by Price (Asc)</button>
      <button onClick={() => handleSortChange("price", "desc")}>Sort by Price (Desc)</button>
      <button onClick={() => handleSortChange("rating", "asc")}>Sort by Rating (Asc)</button>
      <button onClick={() => handleSortChange("rating", "desc")}>Sort by Rating (Desc)</button>
    </div>
  );
}

export { Screen_glasses };

