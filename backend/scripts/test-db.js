require('dotenv').config();
const mongoose = require('mongoose');
const { testConnection } = require('../config/database');
const { seedDatabase, getDatabaseStats } = require('../utils/seedDatabase');

const testDatabase = async () => {
    try {
        console.log('🧪 Testing MongoDB Connection...');
        console.log('');

        // Test basic connection
        const isConnected = await testConnection();
        
        if (!isConnected) {
            console.log('❌ Database connection test failed');
            console.log('📖 Please follow the setup guide in docs/mongodb-setup.md');
            process.exit(1);
        }

        console.log('✅ Database connection successful!');
        console.log('');

        // Connect for further testing
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('🔌 Connected for testing...');
        console.log('');

        // Test seeding
        console.log('🌱 Testing database seeding...');
        await seedDatabase();
        console.log('');

        // Test stats
        console.log('📊 Testing database stats...');
        await getDatabaseStats();
        console.log('');

        // Test API endpoints
        console.log('🔗 Testing API endpoints...');
        console.log('   GET /api/products - Should return products');
        console.log('   GET /health - Should return OK');
        console.log('');

        console.log('✅ All database tests passed!');
        console.log('');
        console.log('🚀 Your MongoDB setup is ready for development');
        console.log('📖 Next: Start the server with "pnpm dev"');

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error('❌ Database test failed:', error.message);
        process.exit(1);
    }
};

// Run the test
testDatabase(); 