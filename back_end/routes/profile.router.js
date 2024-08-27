const express = require("express")
const upload = require("../middlewares/multercofig.middleware")
const UserModel = require("../models/signUp.model")
const profileRouter = express.Router()




profileRouter.post("/upload-image", upload.single("image"), async(req,res, next) => {
    try {
        if(!req.file){
            return res.status(400).json({msg : "No image uploaded"})
        }

        const imgUrl = req.file.path // multer-storege-cloudinary create the implicitly file obj in req

        const userId = req.body.userId
        const user = await UserModel.findByIdAndUpdate(
            userId,
            {profileImage : imgUrl},
            {new : true}
        )

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json({
            msg : "Image uploaded successfully",
            user
        })
    } catch (error) {
        next(error)
    }
})

module.exports = profileRouter