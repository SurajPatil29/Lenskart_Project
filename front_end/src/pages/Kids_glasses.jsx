import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchKidGlasses, setKidGlassesPage, setKidGlassesSort } from '../redux/actions/kidGlassesAction';
import { ErrorHandler } from '../loading&error/Errorhandling';
import { Loadinghandling as LoadingSpinner } from '../loading&error/Loadinghandling';


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
        <div>
          {/* Display products */}
          {products && products.length > 0 ? (
            products.map((product) => (
              <div key={product._id}>{product.name}</div>
            ))
          ) : (
            <div>No products found.</div>
          )}
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

export {Kids_glasses}