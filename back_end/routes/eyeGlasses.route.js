const express = require("express")
const ProductModel = require("../models/product.model")
const applyinSorting = require("../middlewares/sorting.middleware")


const eyeglassesRoute = express.Router()

eyeglassesRoute.get("/products", applyinSorting, async(req,res, next) => {
    try {
        const products = await ProductModel.find({page: "EYEGLASSES"}).sort(req.sortOptions)

        if (products.length === 0) {
            return res.status(404).json({ msg: "No products found" });
        }

        res.status(200).json(products);
        
    } catch (error) {
        next(error)
    }
})

eyeglassesRoute.get("/product/:id", async (req, res, next) => {
    console.log(req.params.id)
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

eyeglassesRoute.get("/mens", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "EYEGLASSES", type: "Men"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})

eyeglassesRoute.get("/womens", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "EYEGLASSES", type: "Women"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})

eyeglassesRoute.get("/kids", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "EYEGLASSES", type: "Kid"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})

eyeglassesRoute.get("/fullrim", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "EYEGLASSES", "Frame-type" : "Full Rim"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})

eyeglassesRoute.get("/rimless", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "EYEGLASSES", "Frame-type" : "Rim Less"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})


eyeglassesRoute.get("/halfrim", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "EYEGLASSES", "Frame-type" : "Half Rim"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})



















module.exports = eyeglassesRoute