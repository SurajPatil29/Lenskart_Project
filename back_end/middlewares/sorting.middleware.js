const applyinSorting = (req, res, next) => {
    const { sort, order } = req.query;
    let sortOptions = {};

    if (sort && order) {
        const sortOrder = order === "asc" ? 1 : -1; // Fixed "ase" to "asc"

        if (sort === "price" || sort === "rating") {
            sortOptions[sort] = sortOrder;
        }
    }

    req.sortOptions = Object.keys(sortOptions).length > 0 ? sortOptions : { _id: 1 }; // Default sorting by _id
    next();
};

module.exports = applyinSorting;
