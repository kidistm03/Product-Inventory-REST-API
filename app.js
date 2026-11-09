const express = require('express');

// Import product routes
const productRoutes = require('./routes/productRoutes');

// Create an Express application
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Connect product routes
app.use('/products', productRoutes);

// Set server port
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
