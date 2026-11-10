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

// Export controller functions
module.exports = {
    getAllProducts,
    getProductById,
    createProduct
};