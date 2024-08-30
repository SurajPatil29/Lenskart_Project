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
    validate: {
      validator: function (value) {
        return /^\d{2}-\d{2}-\d{4}$/.test(value); // Updated pattern
      },
      message: "Birth date must be in DD-MM-YYYY format",
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invalid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Password strength requirements
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
      },
      message:
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
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
