// routes/kidsglassesRoute.js

const express = require("express");
const applySortingAndPagination = require("../middlewares/sortingAndPagination.middleware");
const createProductRouteHandler = require("../util/create_Product");

const kidsglassesRoute = express.Router();

// Route for all kid's glasses products with sorting and pagination
kidsglassesRoute.get(
    "/products",
    applySortingAndPagination,
    createProductRouteHandler({ page: "KIDS GLASSES" })
);

// Individual product route
kidsglassesRoute.get("/product/:id", async (req, res, next) => {
    try {
        const productId = req.params.id;
        const product = await ProductModel.findOne({ _id: productId });

        if (!product) {
            return res.status(404).json({ error: "Product not found." });
        }

        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
});

// Route for full rim kid's glasses products with sorting and pagination
kidsglassesRoute.get(
    "/fullrim",
    applySortingAndPagination,
    createProductRouteHandler({ page: "KIDS GLASSES", "Frame-type": "Full Rim" })
);

// Route for rimless kid's glasses products with sorting and pagination
kidsglassesRoute.get(
    "/rimless",
    applySortingAndPagination,
    createProductRouteHandler({ page: "KIDS GLASSES", "Frame-type": "Rim Less" })
);

// Route for half rim kid's glasses products with sorting and pagination
kidsglassesRoute.get(
    "/halfrim",
    applySortingAndPagination,
    createProductRouteHandler({ page: "KIDS GLASSES", "Frame-type": "Half Rim" })
);

module.exports = kidsglassesRoute;
