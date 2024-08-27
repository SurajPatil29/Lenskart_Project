const multer = require("multer")
const {CloudinaryStorage} = require("multer-storage-cloudinary")
const cloudinary = require("../util/cloudinary")
const dotenv = require("dotenv").config()

const storage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params : {
        folder : process.env.FOLDER_NAME,
        allowed_formats : ["jpg", "jpeg", "png"],
        transformation : [{width : 500, height : 500, crop : "limit"}]
    }
})

const upload = multer({storage})

module.exports = upload