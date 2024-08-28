// middlewares/sortingAndPagination.middleware.js

const applySortingAndPagination = (req, res, next) => {
    const { sort, order, page = 1, limit = 10 } = req.query;
    let sortOptions = {};
    let paginationOptions = {};

    // Setup sort options if sort and order parameters are provided
    if (sort && order) {
        const sortOrder = order === "asc" ? 1 : -1;
        if (sort === "price" || sort === "rating") {
            sortOptions[sort] = sortOrder;
        }
    }

    // Setup pagination options
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    if (!isNaN(pageNum) && !isNaN(limitNum) && limitNum > 0) {
        paginationOptions.skip = (pageNum - 1) * limitNum;
        paginationOptions.limit = limitNum;
    } else {
        paginationOptions.skip = 0;
        paginationOptions.limit = 10;
    }

    // Attach options to request object
    req.sortOptions = Object.keys(sortOptions).length > 0 ? sortOptions : { _id: 1 };
    req.paginationOptions = paginationOptions;

    next();
};

module.exports = applySortingAndPagination;
