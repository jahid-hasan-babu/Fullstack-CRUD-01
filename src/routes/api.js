const express = require('express');
const router = express.Router()
const ProductController = require("../controller/ProductController")

//data insert
router.post("/create",ProductController.CreateProduct);

//read all product
router.get("/readProduct",ProductController.ReadProduct);


//read all product
router.get("/readProductByID/:id",ProductController.ReadProduct);



//update product by ID
router.post("/UpdateProduct/:id",ProductController.UpdateProduct);


//delete product
router.delete("/deleteProduct/:id",ProductController.DeleteProduct);






module.exports = router