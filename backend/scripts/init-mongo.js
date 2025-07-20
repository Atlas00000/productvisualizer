// MongoDB initialization script
// This script runs when the MongoDB container starts for the first time

// Switch to the productvisualizer database
db = db.getSiblingDB('productvisualizer');

// Create a user for the application
db.createUser({
  user: 'appuser',
  pwd: 'apppassword',
  roles: [
    {
      role: 'readWrite',
      db: 'productvisualizer'
    }
  ]
});

// Create products collection
db.createCollection('products');

// Sample products data
const sampleProducts = [
  {
    name: "Modern Chair",
    description: "A comfortable and stylish modern chair with customizable colors and materials",
    basePrice: 299,
    modelUrl: "/assets/models/chair.gltf",
    customizationOptions: {
      colors: [
        { name: "Black", hex: "#000000", price: 0 },
        { name: "White", hex: "#ffffff", price: 0 },
        { name: "Brown", hex: "#8B4513", price: 25 },
        { name: "Blue", hex: "#1e40af", price: 30 },
        { name: "Red", hex: "#dc2626", price: 35 }
      ],
      materials: [
        { name: "Fabric", textureUrl: "/assets/textures/fabric.jpg", price: 0 },
        { name: "Leather", textureUrl: "/assets/textures/leather.jpg", price: 50 },
        { name: "Mesh", textureUrl: "/assets/textures/mesh.jpg", price: 25 },
        { name: "Velvet", textureUrl: "/assets/textures/velvet.jpg", price: 40 }
      ],
      components: [
        { name: "Standard Legs", modelUrl: "/assets/components/standard-legs.gltf", price: 0 },
        { name: "Metal Legs", modelUrl: "/assets/components/metal-legs.gltf", price: 30 },
        { name: "Wooden Legs", modelUrl: "/assets/components/wooden-legs.gltf", price: 45 }
      ]
    },
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Office Lamp",
    description: "Adjustable desk lamp with multiple color temperature options",
    basePrice: 149,
    modelUrl: "/assets/models/lamp.gltf",
    customizationOptions: {
      colors: [
        { name: "Black", hex: "#000000", price: 0 },
        { name: "White", hex: "#ffffff", price: 0 },
        { name: "Silver", hex: "#c0c0c0", price: 20 },
        { name: "Gold", hex: "#ffd700", price: 35 }
      ],
      materials: [
        { name: "Metal", textureUrl: "/assets/textures/metal.jpg", price: 0 },
        { name: "Plastic", textureUrl: "/assets/textures/plastic.jpg", price: -10 },
        { name: "Glass", textureUrl: "/assets/textures/glass.jpg", price: 25 }
      ],
      components: [
        { name: "Standard Shade", modelUrl: "/assets/components/standard-shade.gltf", price: 0 },
        { name: "Modern Shade", modelUrl: "/assets/components/modern-shade.gltf", price: 20 },
        { name: "Vintage Shade", modelUrl: "/assets/components/vintage-shade.gltf", price: 30 }
      ]
    },
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Coffee Table",
    description: "Elegant coffee table with customizable surface and legs",
    basePrice: 399,
    modelUrl: "/assets/models/table.gltf",
    customizationOptions: {
      colors: [
        { name: "Oak", hex: "#8B4513", price: 0 },
        { name: "Walnut", hex: "#5C4033", price: 50 },
        { name: "Mahogany", hex: "#4E2728", price: 75 },
        { name: "White", hex: "#ffffff", price: 25 }
      ],
      materials: [
        { name: "Wood", textureUrl: "/assets/textures/wood.jpg", price: 0 },
        { name: "Glass", textureUrl: "/assets/textures/glass.jpg", price: 40 },
        { name: "Marble", textureUrl: "/assets/textures/marble.jpg", price: 100 }
      ],
      components: [
        { name: "Standard Legs", modelUrl: "/assets/components/standard-legs.gltf", price: 0 },
        { name: "Tapered Legs", modelUrl: "/assets/components/tapered-legs.gltf", price: 30 },
        { name: "Metal Legs", modelUrl: "/assets/components/metal-legs.gltf", price: 45 }
      ]
    },
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Insert sample products
db.products.insertMany(sampleProducts);

// Create customizations collection
db.createCollection('customizations');

print('✅ MongoDB initialized successfully!');
print('📊 Database: productvisualizer');
print('👤 User: appuser (readWrite permissions)');
print('📦 Products: ' + sampleProducts.length + ' sample products inserted');
print('🎯 Ready for development!'); 