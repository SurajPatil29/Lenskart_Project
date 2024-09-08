const mongoose = require("mongoose")

const tokenSchema = mongoose.Schema({
    token : {
        type : String,
        required : true
    }
})

const TokenModel = mongoose.model("token", tokenSchema)

module.exports = TokenModel


// which token will expire when logout  i was save here if this token will in db 
// users token will exp and user not log in or not acess some functinaliti