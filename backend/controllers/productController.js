const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
    try {
        // Check if database is connected
        if (!Product.db.readyState) {
            return res.status(503).json({ 
                message: 'Database not connected',
                note: 'Please set up MongoDB Atlas following docs/mongodb-setup.md',
                setupRequired: true
            });
        }

        const products = await Product.find({ isActive: true });
        res.json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ 
            message: 'Server error',
            error: error.message 
        });
    }
};

// Get single product by ID
const getProductById = async (req, res) => {
    try {
        // Check if database is connected
        if (!Product.db.readyState) {
            return res.status(503).json({ 
                message: 'Database not connected',
                note: 'Please set up MongoDB Atlas following docs/mongodb-setup.md',
                setupRequired: true
            });
        }

        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({
            success: true,
            data: product
        });
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ 
            message: 'Server error',
            error: error.message 
        });
    }
};

// Create new product
const createProduct = async (req, res) => {
    try {
        // Check if database is connected
        if (!Product.db.readyState) {
            return res.status(503).json({ 
                message: 'Database not connected',
                note: 'Please set up MongoDB Atlas following docs/mongodb-setup.md',
                setupRequired: true
            });
        }

        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json({
            success: true,
            data: savedProduct
        });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(400).json({ 
            message: 'Invalid product data',
            error: error.message 
        });
    }
};

// Update product
const updateProduct = async (req, res) => {
    try {
        // Check if database is connected
        if (!Product.db.readyState) {
            return res.status(503).json({ 
                message: 'Database not connected',
                note: 'Please set up MongoDB Atlas following docs/mongodb-setup.md',
                setupRequired: true
            });
        }

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({
            success: true,
            data: product
        });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(400).json({ 
            message: 'Invalid product data',
            error: error.message 
        });
    }
};

// Delete product (soft delete)
const deleteProduct = async (req, res) => {
    try {
        // Check if database is connected
        if (!Product.db.readyState) {
            return res.status(503).json({ 
                message: 'Database not connected',
                note: 'Please set up MongoDB Atlas following docs/mongodb-setup.md',
                setupRequired: true
            });
        }

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { isActive: false },
            { new: true }
        );
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ 
            success: true,
            message: 'Product deleted successfully' 
        });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ 
            message: 'Server error',
            error: error.message 
        });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}; 