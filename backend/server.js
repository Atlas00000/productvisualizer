require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/database');
const corsMiddleware = require('./config/cors');
const errorHandler = require('./middleware/errorHandler');

// Import routes
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: '3D Product Customizer API is running',
        timestamp: new Date().toISOString()
    });
});

// API routes
app.use('/api/products', productRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: '3D Product Customizer API',
        version: '1.0.0',
        endpoints: {
            health: '/health',
            products: '/api/products'
        }
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Endpoint not found'
    });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
    console.log(`API base: http://localhost:${PORT}/api`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    process.exit(0);
});

module.exports = app; 