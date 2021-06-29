const express = require('express');
const  router  = express.Router();

const {
    getAllProducts,
    getProductById,
}  = require("../controller/productControllers");

//Get all products from db
//@route GET/api/Products
//@acess public

router.get("/",getAllProducts);



//Get a products  by id
//@route GET/api/Products/:id
//@acess public
router.get("/:id",getProductById);

module.exports = router;