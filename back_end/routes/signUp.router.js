const express = require("express");
const UserModel = require("../models/signUp.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const TokenModel = require("../models/token.model");
const validateSignupData = require("../middlewares/signup.middleware");
const validateLoginData = require("../middlewares/login.middleware");
const CartModel = require("../models/cart.model");
const FavouriteModel = require("../models/favourit.model");
const dotenv = require("dotenv").config();

const key1 = process.env.JWT_SECRET_KEY1;
const key2 = process.env.JWT_SECRET_KEY2;

const signUpRouter = express.Router();

// Signup Route
signUpRouter.post("/signup", validateSignupData, async (req, res, next) => {
  const { name, birthDate, email, password, gender } = req.body;
  try {
    const isExistingUser = await UserModel.findOne({ email });
    if (isExistingUser) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10); // Using 10 salt rounds for better security

    const user = new UserModel({
      name,
      birthDate,
      email,
      password: hashPassword,
      gender,
    });
    const savedUser = await user.save();

    const newCart = new CartModel({
      userId: savedUser._id,
      products: [],
    });
    await newCart.save();

    const newFav = new FavouriteModel({
      userId: savedUser._id,
      products: [],
    });
    await newFav.save();

    res.status(201).json({ msg: "User registered successfully", user: savedUser });
  } catch (error) {
    next(error);
  }
});

// Login Route
signUpRouter.post("/login", validateLoginData, async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const accessToken = jwt.sign({ id: user._id }, key1, { expiresIn: "15m" }); // Shorter expiration for access token
      const refreshToken = jwt.sign({ id: user._id }, key2, { expiresIn: "1day" });

      const expiresIn = 10 * 60 * 1000; // 10 minutes in milliseconds
      const expiryTimestamp = Date.now() + expiresIn;

      res.status(200).json({
        msg: "Login successful",
        accessToken,
        refreshToken,
        expiryTimestamp,
        id: user._id,
      });
    } else {
      res.status(400).json({ msg: "Wrong password" });
    }
  } catch (error) {
    next(error);
  }
});

// Refresh Token Route
signUpRouter.post("/auth_login", async (req, res, next) => {
  const refreshToken = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null;
  if (!refreshToken) {
    return res.status(400).send("Token is required");
  }
  try {
    const blacklistedToken = await TokenModel.findOne({ token: refreshToken });
    if (blacklistedToken) {
      return res.status(403).json({ msg: "Invalid refresh token" });
    }

    jwt.verify(refreshToken, key2, (err, decoded) => {
      if (err) {
        return res.status(404).send("User is not authorized");
      }

      const newAccessToken = jwt.sign({ id: decoded.id }, key1, { expiresIn: "15m" });

      return res.status(200).json({
        msg: "New access token issued",
        accessToken: newAccessToken,
      });
    });
  } catch (error) {
    next(error);
  }
});

// Logout Route
signUpRouter.post("/logout", async (req, res, next) => {
  const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null;
  if (!token) {
    return res.status(400).send("Token is required");
  }
  try {
    const expToken = new TokenModel({ token });
    await expToken.save();
    res.status(200).send("Token is blocked");
  } catch (error) {
    next(error);
  }
});

module.exports = signUpRouter;
