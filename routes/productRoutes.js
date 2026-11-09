const express = require('express');

// Create an Express router
const router = express.Router();

// Test route
router.get('/', (req, res) => {
    res.send('Products route is working!');
});

// Export the router
module.exports = router;
