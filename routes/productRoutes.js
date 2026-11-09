const express = require('express');

// Import the controller
const productController = require('../controllers/productController');

// Create router
const router = express.Router();

// Get all products
router.get('/', productController.getAllProducts);

// Export router
module.exports = router;
