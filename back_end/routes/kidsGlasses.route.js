const express = require("express")


const ProductModel = require("../models/product.model")
const applyinSorting = require("../middlewares/sorting.middleware")


const kidsglassesRoute = express.Router()

kidsglassesRoute.get("/products", applyinSorting, async(req,res, next) => {
    try {
        const products = await ProductModel.find({page: "KIDS GLASSES"}).sort(req.sortOptions)

        if (products.length === 0) {
            return res.status(404).json({ msg: "No products found" });
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})


kidsglassesRoute.get("/product/:id", async (req, res) => {
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



kidsglassesRoute.get("/fullrim", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "KIDS GLASSES", "Frame-type" : "Full Rim"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})



kidsglassesRoute.get("/rimless", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "KIDS GLASSES", "Frame-type" : "Rim Less"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})


kidsglassesRoute.get("/halfrim", applyinSorting, async (req,res, next) => {
    try {
        const products = await ProductModel.find({page: "KIDS GLASSES", "Frame-type" : "Half Rim"}).sort(req.sortOptions)

        if(products.length === 0 ){
            return res.status(404).json({msg : "no product found"})
        }

        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
})













module.exports = kidsglassesRoute