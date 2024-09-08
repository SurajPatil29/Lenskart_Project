const fetchProductsWithPaginationAndSorting = require("./fetchProduct");


// Higher-order function to create a route handler
const createProductRouteHandler = (filter) => {
    return async (req, res, next) => {
        try {
            const { sortOptions, paginationOptions } = req;

            const { products, totalProducts, totalPages, currentPage } = await fetchProductsWithPaginationAndSorting(
                filter,
                sortOptions,
                paginationOptions
            );

            if (products.length === 0) {
                return res.status(404).json({ msg: "No products found" });
            }

            res.status(200).json({
                products,
                pagination: {
                    totalProducts,
                    totalPages,
                    currentPage,
                },
            });
        } catch (error) {
            next(error);
        }
    };
};

module.exports = createProductRouteHandler