const express = require("express")
const UserModel = require("../models/signUp.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const TokenModel = require("../models/token.model")

const validateSignupData = require("../middlewares/signup.middleware")
const validateLoginData = require("../middlewares/login.middleware")
const CartModel = require("../models/cart.model")
const FavouriteModel = require("../models/favourit.model")
const dotenv = require("dotenv").config()


const key1 = process.env.JWT_SECRET_KEY1
const key2 = process.env.JWT_SECRET_KEY2

const signUpRouter = express.Router()


signUpRouter.post("/signup", validateSignupData ,async (req, res, next)=>{
    const {name, birthDate, email, password, gender} = req.body
    try {
        const isExistingUser = await UserModel.findOne({email})
        if(isExistingUser){
            return res.status(400).json({msg : "email already exists"})
        }

        const hashPassword = await bcrypt.hash(password, 5)

        const user = new UserModel({
            name, birthDate, email, password : hashPassword, gender
        })
        const saveduser = await user.save()

        const newCart = new CartModel({
            userId : saveduser._id,
            products : []
        })
        await newCart.save()

        const newfav = new FavouriteModel({
            userId : saveduser._id,
            products : []
        })
        await newfav.save()

        res.status(201).json({msg : "User registered successfully", user : saveduser})

    } catch (error) {
        next(error)
    }
})


signUpRouter.post("/login", validateLoginData ,async (req, res, next)=>{
    const {email, password} = req.body
    try {
        const user = await UserModel.findOne({email})

        if(!user){
            return res.status(400).json({
                msg : "user not found"
            })
        
        }

        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(result){
                    const accessToken = jwt.sign(
                        {id : user._id},
                        key1
                        
                    )

                    const refreshToken = jwt.sign(
                        {id : user._id},
                        key2,
                        {expiresIn : "1day"}
                    )
                    const expiresIn = 10 * 60 * 1000; // 10 minutes in milliseconds
                    const expiryTimestamp = Date.now() + expiresIn;

                    res.status(200).json({
                        msg : "key2",
                        accessToken,
                        refreshToken,
                        expiryTimestamp,
                        id : user._id
                    })
                }else{
                    res.status(400).json({
                        msg : "Wrong Password"
                    })
                }
            } )
        }



    } catch (error) {
        next(error)
    }
})


signUpRouter.post("/auth_login", async (req, res, next)=>{
    const refreshToken = req.headers.authentication ? req.headers.authentication.split(" ")[1] : null;
    if(!refreshToken){
        return res.status(400).send("Token is required")
    }
    try{
        const blacklistedToken = await TokenModel.findOne({token : refreshToken})
        if(blacklistedToken){
            return res.status(403).json({msg : "Invalid refresh token"})
        }

        jwt.verify(refreshToken, key2, function(err, decoded){
            if(err){
                return res.status(404).send("user is not authorised")
            }

             // If refresh token is valid, issue a new access token
             const newAccessToken = jwt.sign(
                { id: decoded.id }, // Payload for the new access token
                key1,
                { expiresIn: "1day" } // New access token expiration time
            )

            return res.status(200).json({
                msg: "New access token issued",
                accessToken: newAccessToken
            });
        })
    }catch(error){
        next(error)
    }
})

signUpRouter.post("/logout", async (req, res, next)=>{
    const token = req.headers.authentication ? req.headers.authentication.split(" ")[1] : null;
    if (!token) {
        return res.status(400).send("Token is required");
    }
    try {
        const expToken = TokenModel({
            token
        })
        await expToken.save()
        res.status(200).send("token is blocked")
    } catch (error) {
        next(error)
    }
})





module.exports = signUpRouter