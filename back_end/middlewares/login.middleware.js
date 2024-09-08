const Joi = require("joi");


const loginSchema = Joi.object({
    email : Joi.string().email().required(),
    password : Joi.string().min(8).max(30).pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*]{8,30}$')).required()

})

const validateLoginData = (req, res, next) => {
    const {error} = loginSchema.validate(req.body)

    if(error){
        return res.status(400).json({
            success : false,
            msg : error.details[0].message
        })
    }
    next()
}

module.exports =validateLoginData

// in dis middleware i cas varify the password and email is valid or not
// if valid then procide next and not valid show errorin responce