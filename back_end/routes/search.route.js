const express = require("express")
const auth = require("../middlewares/authentication.middleware")
const applySortingAndPagination = require("../middlewares/sortingAndPagination.middleware")
const createProductRouteHandler = require("../util/create_Product")
const ProductModel = require("../models/product.model")



const searchRouter = express.Router()


searchRouter.get("/", applySortingAndPagination, async (req, res, next) => {
    const { title } = req.query
    const { sortOptions, paginationOptions } = req
    try {
        const product = await ProductModel.find({ title: new RegExp(title, "i") }) //case- insensitive search
            .sort(sortOptions)
            .skip(paginationOptions.skip)
            .limit(paginationOptions.limit)

        if(product.length === 0){
            return res.status(404).json({msg : "No product found"})
        }

        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
})












module.exports = searchRouter