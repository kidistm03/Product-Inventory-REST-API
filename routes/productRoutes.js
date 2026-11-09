const express = require('express');

// Import the controller
const productController = require('../controllers/productController');

// Create router
const router = express.Router();

// Get all products
router.get('/', productController.getAllProducts);

// Get product by ID
router.get('/:id', productController.getProductById);
// Export router
module.exports = router;
