const express = require("express")
const ProductModel = require("../models/product.model")
const CartModel = require("../models/cart.model")

const cartRouter = express.Router()

// this route i use to add product in perticuller user document
cartRouter.post("/add", async (req, res, next) =>{
    const {userId, productId} = req.body
    try {
        const product = await ProductModel.findById(productId)

        if(!product){
            return res.status(404).json({msg : "Product not found"})
        }

        const cart = await CartModel.findOne({userId})

        if(!cart){
            return res.status(404).json({msg : "Cart not found"})
        }

        if(cart.products.includes(productId)){
            return res.status(400).json({msg : "Product already in cart"})
        }

        cart.products.push(product)
        await cart.save()

        res.status(200).json(cart)


    } catch (error) {
        next(error)
    }
})


// using the user id i find the user document and return products to front end
cartRouter.get("/:userId", async (req, res, next) => {
    const {userId} = req.params
    try {
        const cart = await CartModel.findOne({userId}).populate('products')

        if(!cart){
            return res.status(404).json({msg : "Cart not found"})
        }

        if(cart.products.length === 0 ){
            return res.status(200).json({msg : "cart is empty", products : []})
        }

        res.status(200).json(cart.products)
    } catch (error) {
        next(error)
    }
})

// delet the perticuler product from the cart using product id
cartRouter.delete("/:userId/product/:productId", async (req, res, next)=>{
    const {userId, productId} = req.params
    try {
        const cart = await CartModel.findOne({userId})

        if (!cart) {
            return res.status(404).json({ msg: 'Cart not found' });
        }

        const productIndex = cart.products.indexOf(productId);
        if (productIndex === -1) {
            return res.status(404).json({ msg: 'Product not found in the cart' });
        }

        // Remove the product from the products array
        cart.products.splice(productIndex, 1);

        // Save the updated cart
        await cart.save();

        res.status(200).json({ msg: 'Product removed from cart successfully' });
    } catch (error) {
        next(error)
    }
})












module.exports = cartRouter