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


// Export the controller function
module.exports = {
    getAllProducts, getProductById
};
