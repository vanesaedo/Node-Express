//const fetch = require('node-fetch');
const productsController = require('../controllers/products.controller');
const router = require('express').Router();


//http://localhost:3000/api/products
//http://localhost:3000/api/products/1
router.get("/:id?", productsController.getProduct);


//http://localhost:3000/api/products
router.post("/", productsController.createProduct);


module.exports = router;