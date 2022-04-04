const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{type:String, required: true},
    category:{type:String, required:true},
    price:{type:Number, required: true},
    stock:{type: Number, required: true},
    description:{type: String, required: true},
    scores:{
        score:{type:Numer,min: 0, max: 5},
        userID:{type:mongoose.Types.objectId, ref:'users'}
    }
})

const Product = mongoose.model('product', productSchema)
module.exports = Product