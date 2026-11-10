const products = require('../data/products');

// Get all products
const getAllProducts = (req, res) => {
    res.status(200).json(products);
};

// Get product by ID
const getProductById = (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);
};

// Create a new product
const createProduct = (req, res) => {
    const { name, price, quantity, category } = req.body || {};

    // Check if the request body is empty
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            message: "Validation failed"
        });
    }

    // Validate product information
    if (
        typeof name !== "string" || name.trim() === "" ||
        typeof price !== "number" || price <= 0 ||
        typeof quantity !== "number" || quantity < 0 ||
        typeof category !== "string" || category.trim() === ""
    ) {
        return res.status(400).json({
            message: "Validation failed"
        });
    }

    // Generate a new ID
    const newId = products.length > 0
        ? Math.max(...products.map(p => p.id)) + 1
        : 1;

    // Create the new product
    const newProduct = {
        id: newId,
        name: name.trim(),
        price,
        quantity,
        category: category.trim()
    };

    // Add the product to the array
    products.push(newProduct);

    // Return the created product
    res.status(201).json(newProduct);
};
// Update an existing product
const updateProduct = (req, res) => {
    const id = Number(req.params.id);

    // Find the product
    const product = products.find(p => p.id === id);

    // Check if product exists
    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, price, quantity, category } = req.body || {};

    // Check if request body is empty
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            message: "Validation failed"
        });
    }

    // Validate all product fields
    if (
        typeof name !== "string" || name.trim() === "" ||
        typeof price !== "number" || price <= 0 ||
        typeof quantity !== "number" || quantity < 0 ||
        typeof category !== "string" || category.trim() === ""
    ) {
        return res.status(400).json({
            message: "Validation failed"
        });
    }

    // Update the existing product
    product.name = name.trim();
    product.price = price;
    product.quantity = quantity;
    product.category = category.trim();

    res.status(200).json(product);
};

// Delete an existing product
const deleteProduct = (req, res) => {
    const id = Number(req.params.id);

    // Find the product index
    const productIndex = products.findIndex(p => p.id === id);

    // Check if product exists
    if (productIndex === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    // Remove the product from the array
    products.splice(productIndex, 1);

    // Return success message
    res.status(200).json({
        message: "Product deleted successfully"
    });
};

// Search products by name
const searchProducts = (req, res) => {
    const name = req.query.name;

    if (!name || name.trim() === "") {
        return res.status(400).json({
            message: "Search name is required"
        });
    }

    const results = products.filter(p =>
        p.name.toLowerCase().includes(name.trim().toLowerCase())
    );

    res.status(200).json(results);
};

// Get products by category
const getProductsByCategory = (req, res) => {
    const category = req.params.category;

    const results = products.filter(p =>
        p.category.toLowerCase() === category.toLowerCase()
    );

    res.status(200).json(results);
};
// Get products cheaper than a given price
const getProductsByPrice = (req, res) => {
    const price = Number(req.params.price);

    if (!Number.isFinite(price) || price <= 0) {
        return res.status(400).json({
            message: "Invalid price"
        });
    }

    const results = products.filter(p => p.price < price);

    res.status(200).json(results);
};
// Get products with low stock
const getLowStockProducts = (req, res) => {
    const results = products.filter(p => p.quantity < 5);

    res.status(200).json(results);
};
// Calculate total inventory value
const getTotalInventoryValue = (req, res) => {
    const totalValue = products.reduce((total, p) => {
        return total + (p.price * p.quantity);
    }, 0);

    res.status(200).json({
        totalValue: totalValue
    });
};
// Export controller functions
module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    getProductsByCategory,
    getProductsByPrice,
    getLowStockProducts,
    getTotalInventoryValue
};