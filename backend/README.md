# 3D Product Customizer - Backend API

Express.js API server for the 3D Product Customizer with MongoDB integration.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm package manager
- MongoDB Atlas account (free tier)

### Installation
```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB Atlas connection string

# Test database connection
pnpm test:db

# Start development server
pnpm dev
```

## 📊 API Endpoints

### Health Check
```bash
GET /health
# Returns: {"status":"OK","message":"3D Product Customizer API is running"}
```

### Products
```bash
GET /api/products          # Get all products
GET /api/products/:id      # Get product by ID
POST /api/products         # Create new product
PUT /api/products/:id      # Update product
DELETE /api/products/:id   # Delete product (soft delete)
```

## 🗄️ Database Setup

### MongoDB Atlas Setup
1. **Create Account**: Sign up at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. **Create Cluster**: Choose FREE tier (M0)
3. **Configure Access**: 
   - Database Access: Create user `productvisualizer`
   - Network Access: Allow from anywhere (for development)
4. **Get Connection String**: Copy and update `.env` file

### Database Commands
```bash
# Test database connection
pnpm test:db

# Seed database with sample data
pnpm seed

# Clear database
pnpm seed:clear
```

## 📁 Project Structure

```
backend/
├── config/
│   ├── database.js      # MongoDB connection
│   ├── cors.js          # CORS configuration
│   └── auth.js          # Authentication setup
├── controllers/
│   └── productController.js  # Product CRUD operations
├── models/
│   ├── Product.js       # Product schema
│   └── Customization.js # Customization schema
├── routes/
│   └── products.js      # Product API routes
├── middleware/
│   └── errorHandler.js  # Error handling middleware
├── utils/
│   └── seedDatabase.js  # Database seeding utilities
├── scripts/
│   ├── seed.js          # Database seeding script
│   └── test-db.js       # Database testing script
├── data/
│   └── products.json    # Sample product data
├── docs/
│   └── mongodb-setup.md # MongoDB setup guide
└── server.js            # Main server file
```

## 🔧 Environment Variables

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# JWT Configuration
JWT_SECRET=your-secret-key

# CORS Configuration
CORS_ORIGIN=http://localhost:8000
```

## 🧪 Testing

### Database Tests
```bash
# Test MongoDB connection and seeding
pnpm test:db
```

### API Tests
```bash
# Test health endpoint
curl http://localhost:3000/health

# Test products endpoint
curl http://localhost:3000/api/products
```

## 📚 Documentation

- **MongoDB Setup**: See `docs/mongodb-setup.md`
- **API Documentation**: See `docs/api.md`
- **Development Guide**: See `docs/development.md`

## 🛠️ Development

### Scripts
```bash
pnpm dev          # Start development server with nodemon
pnpm start        # Start production server
pnpm seed         # Seed database with sample data
pnpm test:db      # Test database connection
```

### Database Operations
```bash
# Connect to MongoDB
pnpm test:db

# Seed with sample data
pnpm seed

# Clear database
pnpm seed:clear
```

## 🚨 Troubleshooting

### Database Connection Issues
1. **Check .env file**: Ensure MONGODB_URI is set correctly
2. **Verify Atlas setup**: Follow `docs/mongodb-setup.md`
3. **Test connection**: Run `pnpm test:db`
4. **Check network**: Ensure IP is whitelisted in Atlas

### Server Issues
1. **Check port**: Ensure port 3000 is available
2. **Check dependencies**: Run `pnpm install`
3. **Check logs**: Look for error messages in console

## 📈 Next Steps

1. **Complete MongoDB Atlas setup** following `docs/mongodb-setup.md`
2. **Test database connection** with `pnpm test:db`
3. **Seed sample data** with `pnpm seed`
4. **Start development server** with `pnpm dev`
5. **Test API endpoints** with curl or Postman

## 🎯 Success Criteria

- [ ] MongoDB Atlas cluster created
- [ ] Database connection established
- [ ] Sample data seeded successfully
- [ ] API endpoints returning data
- [ ] Health check working
- [ ] Error handling working properly 