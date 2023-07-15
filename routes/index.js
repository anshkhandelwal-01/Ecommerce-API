const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');


// home page
router.get('/', productController.home);

// to get all the products
router.get('/product', productController.product);

// to find a product
router.get('/product/:id', productController.find);

// to create a product
router.post('/product/create', productController.create);

// to update a product
router.put('/product/update/:id', productController.update);

// to delete a product
router.delete('/product/delete/:id', productController.delete);

module.exports = router;
