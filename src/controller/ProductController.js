const ProductModels = require("../model/ProductModel");

//create product
exports.CreateProduct = async(req, res)=>{
    try {
        let reqBody = req.body;
        const result = await ProductModels.create(reqBody)
        res.status(200).json({status:"success",data:result});
    } catch (error) {
        res.status(200).json({status:"fail",data:error.toString()})
    }

}

//read product
exports.ReadProduct = async(req, res)=>{
    try {
        const result = await ProductModels.find()
        res.status(200).json({status:"success",data:result});
    } catch (error) {
        res.status(200).json({status:"fail",data:error.toString()})
    }

}
//read product by id
exports.ReadProductById = async (req, res)=>{
    try {
      let id = req.params.id;
      let result = await ProductModels.find({_id:id})
      res.status(200).json({status:"success",data:result});
    } catch (error) {
        res.status(200).json({status:"fail",data:error.toString()})
    }
}
//update product
exports.UpdateProduct = async (req, res)=>{
    try {
        let id = req.params.id;
        let reqBody = req.body;
        const result = await ProductModels.updateOne({_id:id},reqBody);
        res.status(200).json({status:"success",data:result});
    } catch (error) {
        res.status(200).json({status:"fail",data:error.toString()})
    }
}

exports.DeleteProduct = async(req,res)=>{
    try {
        let id= req.params.id;
        const result = await ProductModels.deleteOne({_id:id})
        res.status(200).json({status:"success",data:result});
    } catch (error) {
        res.status(200).json({status:"fail",data:error.toString()})
    }
}
