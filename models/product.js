const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{type:String, required: true},
    image:{type:String, required: true},
    category:{type:String, required:true},
    price:{type:Number, required: true},
    stock:{type: Number, required: true},
    description:{type: String, required: true},
    scores:{type: Array, default:[]},
})

const Product = mongoose.model('product', productSchema)
module.exports = Product