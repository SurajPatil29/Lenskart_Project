const express = require("express")
const ProductModel = require("../models/product.model")
const applyinSorting = require("../middlewares/sorting.middleware")


const screenglassesRoute = express.Router()

screenglassesRoute.get("/products", applyinSorting, async(req,res, next) => {
    try {
        const products = await ProductModel.find({page: "SCREEN GLASSES"}).sort(req.sortOptions)

        if (products.length === 0) {
            return res.status(404).json({ msg: "No products found" });
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})

screenglassesRoute.get("/product/:id", async (req, res) => {
    try {
        const productId = req.params.id
        const product = await ProductModel.findOne({_id : productId})

        if(!product){
            return res.status(404).json({error : "Product not found."})
        }

        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
})

screenglassesRoute.get("/mens", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "SCREEN GLASSES", type: "Men"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})

screenglassesRoute.get("/womens", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "SCREEN GLASSES", type: "Women"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})

screenglassesRoute.get("/kids", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "SCREEN GLASSES", type: "Kid"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})

screenglassesRoute.get("/fullrim", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "SCREEN GLASSES", "Frame-type" : "Full Rim"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})

screenglassesRoute.get("/rimless", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "SCREEN GLASSES", "Frame-type" : "Rim Less"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})


screenglassesRoute.get("/halfrim", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "SCREEN GLASSES", "Frame-type" : "Half Rim"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})

















module.exports = screenglassesRoute