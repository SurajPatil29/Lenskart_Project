const mongoose = require("mongoose");

// Define the schema for the favourites collection
const favouriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Products" // Reference to the Product model (note the capitalization)
        }
    ]
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create the Favourite model based on the schema
const FavouriteModel = mongoose.model("Favourite", favouriteSchema); // Changed "cart" to "Favourite" for clarity

module.exports = FavouriteModel;
