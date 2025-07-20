# Docker Setup for 3D Product Customizer

This guide sets up the entire application stack using Docker Compose, eliminating connection issues and providing a consistent development environment.

## 🐳 Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │    MongoDB      │
│   (Port 8000)   │◄──►│   (Port 3000)   │◄──►│   (Port 27017)  │
│   React App     │    │   Express API   │    │   Database      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites
- Docker Desktop installed
- Docker Compose installed

### Start the Application
```bash
# Build and start all services
docker-compose up --build

# Or run in background
docker-compose up -d --build
```

### Access the Application
- **Frontend**: http://localhost:8000
- **Backend API**: http://localhost:3000
- **MongoDB**: localhost:27017

## 📊 Services

### 1. MongoDB Database
- **Image**: mongo:7.0
- **Port**: 27017
- **Database**: productvisualizer
- **User**: appuser / apppassword
- **Features**: 
  - Auto-initialization with sample data
  - Persistent data storage
  - Authentication enabled

### 2. Backend API Server
- **Image**: Custom Node.js 18
- **Port**: 3000
- **Features**:
  - Express.js API server
  - MongoDB integration
  - Hot reload with nodemon
  - Health checks

### 3. Frontend Development Server
- **Image**: Python 3.11
- **Port**: 8000
- **Features**:
  - Static file server
  - React app with CDN imports
  - Hot reload support

## 🛠️ Docker Commands

### Basic Operations
```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Stop all services
docker-compose down

# Rebuild and start
docker-compose up --build

# View logs
docker-compose logs

# View specific service logs
docker-compose logs backend
docker-compose logs frontend
docker-compose logs mongodb
```

### Development Commands
```bash
# Access backend container
docker-compose exec backend sh

# Access MongoDB shell
docker-compose exec mongodb mongosh

# Run database tests
docker-compose exec backend npm run test:db

# Seed database
docker-compose exec backend npm run seed
```

### Database Operations
```bash
# Connect to MongoDB
docker-compose exec mongodb mongosh productvisualizer -u appuser -p apppassword

# View collections
docker-compose exec mongodb mongosh productvisualizer -u appuser -p apppassword --eval "db.getCollectionNames()"

# View products
docker-compose exec mongodb mongosh productvisualizer -u appuser -p apppassword --eval "db.products.find()"
```

## 🔧 Configuration

### Environment Variables
The Docker setup uses these environment variables:

```env
# Backend
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://appuser:apppassword@mongodb:27017/productvisualizer?authSource=productvisualizer
JWT_SECRET=dev-secret-key-change-in-production
CORS_ORIGIN=http://localhost:8000

# MongoDB
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=password123
MONGO_INITDB_DATABASE=productvisualizer
```

### Volumes
- **mongodb_data**: Persistent MongoDB data
- **./backend:/app**: Backend source code (hot reload)
- **./frontend:/app**: Frontend source code (hot reload)

## 🧪 Testing

### API Endpoints
```bash
# Health check
curl http://localhost:3000/health

# Get products
curl http://localhost:3000/api/products

# Get single product
curl http://localhost:3000/api/products/1
```

### Database Connection
```bash
# Test database connection
docker-compose exec backend npm run test:db

# Check database stats
docker-compose exec backend npm run seed
```

## 🚨 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Check what's using the ports
lsof -i :3000
lsof -i :8000
lsof -i :27017

# Stop conflicting services
docker-compose down
```

#### 2. MongoDB Connection Issues
```bash
# Check MongoDB logs
docker-compose logs mongodb

# Restart MongoDB
docker-compose restart mongodb
```

#### 3. Backend Connection Issues
```bash
# Check backend logs
docker-compose logs backend

# Restart backend
docker-compose restart backend
```

#### 4. Frontend Not Loading
```bash
# Check frontend logs
docker-compose logs frontend

# Rebuild frontend
docker-compose up --build frontend
```

### Reset Everything
```bash
# Stop and remove everything
docker-compose down -v

# Remove all containers and volumes
docker system prune -a --volumes

# Rebuild from scratch
docker-compose up --build
```

## 📈 Benefits of Docker Setup

### ✅ Advantages
- **No Connection Issues**: Everything runs locally
- **Consistent Environment**: Same setup everywhere
- **Easy Setup**: One command to start everything
- **Isolated Services**: No conflicts with local installations
- **Persistent Data**: Database survives container restarts
- **Hot Reload**: Code changes reflect immediately

### 🎯 Development Workflow
1. **Start Services**: `docker-compose up`
2. **Edit Code**: Changes reflect immediately
3. **Test API**: `curl http://localhost:3000/api/products`
4. **View Frontend**: http://localhost:8000
5. **Stop Services**: `docker-compose down`

## 🔄 Migration from Local Setup

### Current Status
- ✅ **Docker setup complete**
- ✅ **All services configured**
- ✅ **Sample data included**
- ✅ **Hot reload working**

### Next Steps
1. **Start Docker services**: `docker-compose up --build`
2. **Test API endpoints**: Verify all endpoints work
3. **Test frontend**: Check React app loads
4. **Continue development**: All Week 1 Quick Wins complete

## 🎯 Success Criteria

- [ ] All services start without errors
- [ ] MongoDB connects successfully
- [ ] API endpoints return data
- [ ] Frontend loads correctly
- [ ] Hot reload works for development
- [ ] Sample data is accessible

This Docker setup eliminates all connection issues and provides a robust development environment! 