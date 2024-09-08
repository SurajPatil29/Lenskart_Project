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


// multer we use the upload file in server / data base , but i use it to upload user profile data
// in cloudinary and this profile image show in the profile section
// also i use the multer-storege- cloudinary this can help to uload data 
// and help to reduce colpication of the code we diectly give img to it and
// this upload the image and give use img url 