const express = require('express');

// Import the controller
const productController = require('../controllers/productController');

// Create router
const router = express.Router();

// Get all products
router.get('/', productController.getAllProducts);

// Create a new product
router.post('/', productController.createProduct);

// Search products by name
router.get('/search', productController.searchProducts);

// Get products by category
router.get('/category/:category', productController.getProductsByCategory);

// Get products cheaper than a given price
router.get('/price/:price', productController.getProductsByPrice);

// Update an existing product
router.put('/:id', productController.updateProduct);

// Delete an existing product
router.delete('/:id', productController.deleteProduct);

// Get product by ID
router.get('/:id', productController.getProductById);

// Export router
module.exports = router;