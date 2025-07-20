const mongoose = require('mongoose');
const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

const seedDatabase = async () => {
    try {
        // Read sample data
        const sampleDataPath = path.join(__dirname, '../data/products.json');
        const sampleData = JSON.parse(fs.readFileSync(sampleDataPath, 'utf8'));

        // Clear existing products
        await Product.deleteMany({});
        console.log('Cleared existing products');

        // Insert sample products
        const products = await Product.insertMany(sampleData);
        console.log(`Seeded ${products.length} products`);

        // Log the created products
        products.forEach(product => {
            console.log(`- ${product.name}: $${product.basePrice}`);
        });

        return products;
    } catch (error) {
        console.error('Error seeding database:', error);
        throw error;
    }
};

const clearDatabase = async () => {
    try {
        await Product.deleteMany({});
        console.log('Database cleared');
    } catch (error) {
        console.error('Error clearing database:', error);
        throw error;
    }
};

const getDatabaseStats = async () => {
    try {
        const totalProducts = await Product.countDocuments();
        const activeProducts = await Product.countDocuments({ isActive: true });
        
        console.log('Database Stats:');
        console.log(`- Total products: ${totalProducts}`);
        console.log(`- Active products: ${activeProducts}`);
        
        return { totalProducts, activeProducts };
    } catch (error) {
        console.error('Error getting database stats:', error);
        throw error;
    }
};

module.exports = {
    seedDatabase,
    clearDatabase,
    getDatabaseStats
}; 