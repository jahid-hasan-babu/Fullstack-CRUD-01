const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
    ProductName:{
        type:String
    },
    ProductCode:{
        type:String
    },
    img:{
        type:String
    },
    unitPrice:{
        type:String
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