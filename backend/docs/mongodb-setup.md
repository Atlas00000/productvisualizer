# MongoDB Atlas Setup Guide

## Quick Setup for Development

### 1. Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new project called "Product Visualizer"

### 2. Create Database Cluster
1. Click "Build a Database"
2. Choose "FREE" tier (M0)
3. Select your preferred cloud provider and region
4. Click "Create"

### 3. Configure Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Username: `emilicelestine`
4. Password: `Dragonbobby20`
5. Role: "Read and write to any database"
6. Click "Add User"

### 4. Configure Network Access (CRITICAL STEP)
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. **For Development**: Click "Allow Access from Anywhere" (0.0.0.0/0)
4. **For Production**: Add your specific IP: `105.113.93.145`
5. Click "Confirm"

**⚠️ IMPORTANT**: Your current IP is `105.113.93.145`. Make sure this IP is whitelisted in Network Access.

### 5. Get Connection String
1. Go to "Database" in the left sidebar
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with `Dragonbobby20`
6. Update the `.env` file with the new connection string

### 6. Test Connection
```bash
# Test database connection
pnpm test:db

# Start the server
pnpm dev

# In another terminal, test the API
curl http://localhost:3000/api/products
```

## Environment Variables

Update your `.env` file with the correct MongoDB URI:

```env
MONGODB_URI=mongodb+srv://emilicelestine:Dragonbobby20@productvisualizer.07oenyt.mongodb.net/productvisualizer?retryWrites=true&w=majority&appName=productvisualizer
```

## Database Commands

```bash
# Test database connection
pnpm test:db

# Seed the database with sample data
pnpm seed

# Clear the database
pnpm seed:clear

# Check database stats
curl http://localhost:3000/api/products
```

## Troubleshooting

### Connection Issues
- **IP Whitelist**: Most common issue - ensure your IP is whitelisted in Network Access
- Verify username and password are correct
- Ensure cluster is running

### Authentication Issues
- Verify database user has correct permissions
- Check connection string format
- Ensure network access is configured

## Security Notes

For production:
- Use environment-specific connection strings
- Restrict IP access to your application servers
- Use strong passwords
- Enable MongoDB Atlas security features

## Current Status

✅ **Cluster Created**: productvisualizer.07oenyt.mongodb.net
✅ **User Created**: emilicelestine
✅ **Connection String**: Updated in .env
❌ **IP Whitelist**: Need to configure Network Access for IP: 105.113.93.145
❌ **Database Connection**: Pending IP whitelist configuration

## Specific Steps for Your Setup

1. **Go to MongoDB Atlas Dashboard**
   - Visit: https://cloud.mongodb.com
   - Sign in with your account

2. **Navigate to Network Access**
   - Click on your cluster: `productvisualizer`
   - In the left sidebar, click **"Network Access"**

3. **Add Your IP Address**
   - Click **"Add IP Address"**
   - Enter your IP: `105.113.93.145`
   - Or click **"Allow Access from Anywhere"** for development
   - Click **"Confirm"**

4. **Test Connection**
   ```bash
   pnpm test:db
   ```

## Common Issues

### "IP not whitelisted" Error
- **Solution**: Add your IP `105.113.93.145` to Network Access
- **Alternative**: Use "Allow Access from Anywhere" for development

### "Authentication failed" Error
- **Solution**: Verify username `emilicelestine` and password `Dragonbobby20`
- **Check**: Database Access settings in Atlas

### "Connection timeout" Error
- **Solution**: Check if cluster is running
- **Check**: Network connectivity 