const express  = require("express");
const router = express.Router();
const {getAllProducts,getProductById,createProduct,updateProduct,deleteProduct,searchProducts} = require("../Controllers/product.controllers");

router.get("/products/search", searchProducts);
router.get("/products",getAllProducts);
router.get("/products/:id",getProductById);
router.post("/products",createProduct);
router.put("/products/update/:id",updateProduct);
router.delete("/products/delete/:id",deleteProduct);


module.exports = router;