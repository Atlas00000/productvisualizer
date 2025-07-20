const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Check if MongoDB URI is set
        if (!process.env.MONGODB_URI) {
            console.log('⚠️  MongoDB URI not set in .env file');
            console.log('📖 Please follow the setup guide in docs/mongodb-setup.md');
            return null;
        }

        console.log('🔌 Connecting to MongoDB...');
        
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        console.log(`📊 Database: ${conn.connection.name}`);
        return conn;
    } catch (error) {
        console.log('❌ MongoDB connection failed:');
        console.log(`   Error: ${error.message}`);
        console.log('');
        console.log('🔧 Troubleshooting:');
        console.log('   1. Check your .env file has MONGODB_URI set');
        console.log('   2. Verify MongoDB Atlas cluster is running');
        console.log('   3. Check network access is configured');
        console.log('   4. Verify username/password are correct');
        console.log('');
        console.log('📖 See docs/mongodb-setup.md for detailed setup instructions');
        return null;
    }
};

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('✅ MongoDB Disconnected');
    } catch (error) {
        console.error('❌ MongoDB disconnection error:', error.message);
    }
};

// Test database connection
const testConnection = async () => {
    try {
        const conn = await connectDB();
        if (conn) {
            console.log('✅ Database connection test successful');
            await disconnectDB();
            return true;
        }
        return false;
    } catch (error) {
        console.error('❌ Database connection test failed:', error.message);
        return false;
    }
};

module.exports = { connectDB, disconnectDB, testConnection }; 