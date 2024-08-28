// routes/eyeglassesRoute.js
const express = require("express");
const ProductModel = require("../models/product.model");
const applySortingAndPagination = require("../middlewares/sortingAndPagination.middleware");
const createProductRouteHandler = require("../util/create_Product");

const eyeglassesRoute = express.Router();



// Route for all eyeglasses products with sorting and pagination
eyeglassesRoute.get("/products", applySortingAndPagination, createProductRouteHandler({ page: "EYEGLASSES" }));

// Individual product route
eyeglassesRoute.get("/product/:id", async (req, res, next) => {
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

// Route for men's eyeglasses products with sorting and pagination
eyeglassesRoute.get("/mens", applySortingAndPagination,  createProductRouteHandler({ page: "EYEGLASSES", type: "Men" }))

// Similar refactoring for other routes

eyeglassesRoute.get("/womens", applySortingAndPagination, createProductRouteHandler({ page: "EYEGLASSES", type: "Women" }));

// Route for kids' eyeglasses products with sorting and pagination
eyeglassesRoute.get("/kids", applySortingAndPagination, createProductRouteHandler({ page: "EYEGLASSES", type: "Kid" }));

// Route for full rim eyeglasses products with sorting and pagination
eyeglassesRoute.get("/fullrim", applySortingAndPagination, createProductRouteHandler({ page: "EYEGLASSES", "Frame-type": "Full Rim" }));

// Route for rimless eyeglasses products with sorting and pagination
eyeglassesRoute.get("/rimless", applySortingAndPagination, createProductRouteHandler({ page: "EYEGLASSES", "Frame-type": "Rim Less" }));

// Route for half rim eyeglasses products with sorting and pagination
eyeglassesRoute.get("/halfrim", applySortingAndPagination, createProductRouteHandler({ page: "EYEGLASSES", "Frame-type": "Half Rim" }));

module.exports = eyeglassesRoute;
