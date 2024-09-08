const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"], // Restrict gender to 'male' or 'female'
    required: true,
  },
  profileImage: {
    type: String, // This will store the Cloudinary URL
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;


// this module save the user data in db using this module 
