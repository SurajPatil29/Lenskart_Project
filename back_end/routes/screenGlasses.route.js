// routes/screenglassesRoute.js

const express = require("express");
const applySortingAndPagination = require("../middlewares/sortingAndPagination.middleware");
const createProductRouteHandler = require("../util/create_Product");
const ProductModel = require("../models/product.model");

const screenglassesRoute = express.Router();

// Route for all screen glasses products with sorting and pagination
screenglassesRoute.get(
    "/products",
    applySortingAndPagination,
    createProductRouteHandler({ page: "SCREEN GLASSES" })
);

// Individual product route
screenglassesRoute.get("/product/:id", async (req, res, next) => {
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

// Route for men's screen glasses products with sorting and pagination
screenglassesRoute.get(
    "/mens",
    applySortingAndPagination,
    createProductRouteHandler({ page: "SCREEN GLASSES", type: "Men" })
);

// Route for women's screen glasses products with sorting and pagination
screenglassesRoute.get(
    "/womens",
    applySortingAndPagination,
    createProductRouteHandler({ page: "SCREEN GLASSES", type: "Women" })
);

// Route for kids' screen glasses products with sorting and pagination
screenglassesRoute.get(
    "/kids",
    applySortingAndPagination,
    createProductRouteHandler({ page: "SCREEN GLASSES", type: "Kid" })
);

// Route for full rim screen glasses products with sorting and pagination
screenglassesRoute.get(
    "/fullrim",
    applySortingAndPagination,
    createProductRouteHandler({ page: "SCREEN GLASSES", "Frame-type": "Full Rim" })
);

// Route for rimless screen glasses products with sorting and pagination
screenglassesRoute.get(
    "/rimless",
    applySortingAndPagination,
    createProductRouteHandler({ page: "SCREEN GLASSES", "Frame-type": "Rim Less" })
);

// Route for half rim screen glasses products with sorting and pagination
screenglassesRoute.get(
    "/halfrim",
    applySortingAndPagination,
    createProductRouteHandler({ page: "SCREEN GLASSES", "Frame-type": "Half Rim" })
);

module.exports = screenglassesRoute;
