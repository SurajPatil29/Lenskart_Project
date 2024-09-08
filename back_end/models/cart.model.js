
const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    userId: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    },
    products : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Products"
        }
    ]
},{
    timestamps : true
})


const CartModel = mongoose.model("cart", cartSchema)

module.exports = CartModel


// cart model i was use for the create cart for the user or save the products details in ducument
// i was create cart document and userId of perticuler user and it get from 
// get from user collection and also save product id get from product collection 
// and save it in array of products