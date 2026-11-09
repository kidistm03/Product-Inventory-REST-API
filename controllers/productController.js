const products = require('../data/products');

// Get all products
const getAllProducts = (req, res) => {
    res.status(200).json(products);
};

// Export the controller function
module.exports = {
    getAllProducts
};
