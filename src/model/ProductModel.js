const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
    ProductName:{
        type:String,
        required:true
    },
    ProductCode:{
        type:String,
        required:true
    },
    img:{
        type:String
    },
    unitPrice:{
        type:String,
        required:true
    },
    Qty:{
        type:String
    },
    TotalPrice:{
        type:String
    } 
},{timestamps: true,versionKey: false})

const ProductModels = mongoose.model('products',DataSchema)
module.exports = ProductModels;