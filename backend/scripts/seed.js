require('dotenv').config();
const mongoose = require('mongoose');
const { seedDatabase, getDatabaseStats } = require('../utils/seedDatabase');

const runSeed = async () => {
    try {
        console.log('Starting database seeding...');
        
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
        
        // Seed the database
        await seedDatabase();
        
        // Get database stats
        await getDatabaseStats();
        
        console.log('Database seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error during seeding:', error);
        process.exit(1);
    }
};

// Run the seed function
runSeed(); 