const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required:true,
        unique:true,
    },
    description:{
        type: String,
        trim:true,
        required:true,
    },
    img: {
        type:String,
        trim:true,
        required:true,      
        unique:true,
    },
    price: {
        type:Number,
        trim:true,
        required:true,        
    },
    catagory: {
        type:String,
        trim:true,
        required:true,        
    }    
})

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;