const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const TokenModel = require("../models/token.model");
const UserModel = require("../models/signUp.model");

const key1 = process.env.JWT_SECRET_KEY1;

const auth = async (req, res, next) => {
    // Retrieve token from the 'Authorization' header in 'Bearer' format
    const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null;
    
    // Check if token is provided
    if (!token) {
        return res.status(401).json({ msg: "No token provided. Please log in." });
    }

    try {
        // Check if the token is in the expired/blacklisted token list
        const expToken = await TokenModel.findOne({ token });
        if (expToken) {
            return res.status(401).json({ msg: "Session expired. Please log in again." });
        }

        // Verify the JWT token
        const decoded = jwt.verify(token, key1);

        // Find the user by ID from the decoded token
        const user = await UserModel.findOne({ _id: decoded.id });
        if (!user) {
            return res.status(404).json({ msg: "User not found. Please log in again." });
        }

        // Attach user data to the request object for future use in subsequent middleware or routes
        req.user = user;
        next(); // Proceed to the next middleware or route handler

    } catch (error) {
        // Handle specific JWT errors
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ msg: "Invalid token. Please log in again." });
        }
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ msg: "Token expired. Please log in again." });
        }

        // Handle other errors
        next(error);
    }
};

module.exports = auth;



// in this middleware i was define the logic of the auth the user using the
// jwt and after if user is auth then i get user data from server and pass this 
// data in query for the future use perpose
