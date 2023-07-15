// Importing the Product Schema
const Product = require('../models/Product');

module.exports.home = async function(req, res){
    return res.render('home');
}

// Display the products
module.exports.product = async function (req, res) {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
}

// Find any product by ID
module.exports.find = async function (req, res) {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json(product);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the product' });
    }
}

// Create a new product by entering the field values
module.exports.create = async function (req, res) {
    const { id, name, price } = req.body;
    try {
        const product = await Product.create({ id, name, price });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the product' });
    }
}

// Update the fields of any product
module.exports.update = async function (req, res) {
    const productId = req.params.id;
    const { id, name, price } = req.body;
    try {
        const product = await Product.findByIdAndUpdate(productId, { id, name, price }, { new: true });
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json(product);
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the product' });
    }
}

// Delete a product
module.exports.delete = async function (req, res) {
    const productId = req.params.id;
    try {
        const product = await Product.findByIdAndDelete(productId);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json({ message: 'Product deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the product' });
    }
}