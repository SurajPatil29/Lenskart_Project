const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const TokenModel = require("../models/token.model");
const UserModel = require("../models/signUp.model");

const key1 = process.env.JWT_SECRET_KEY1;

const auth = async (req, res, next) => {
    // Retrieve token from the 'Authorization' header
    const token = req.headers.authentication ? req.headers.authentication.split(" ")[1] : null;
    
    // Check if token is provided
    if (!token) {
        return res.status(401).send("No token provided. Please log in.");
    }

    try {
        // Check if the token is in the expired token list
        const expToken = await TokenModel.findOne({ token });
        if (expToken) {
            return res.status(401).send("You are not logged in. Please log in first.");
        }

        // Verify JWT token
        const decoded = jwt.verify(token, key1);

        // Find user by ID from decoded token
        const user = await UserModel.findOne({ _id: decoded.id });
        if (!user) {
            return res.status(404).send("User not found. Please log in again.");
        }

        // Attach user to request object
        req.user = user;
        next(); // Proceed to the next middleware

    } catch (error) {
        // Handle JWT errors (like expired token or invalid signature)
        if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
            return res.status(401).send("Invalid or expired token. Please log in again.");
        }

        // Other errors
        next(error);
    }
};

module.exports = auth;
