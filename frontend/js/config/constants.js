// Application Constants
const APP_CONFIG = {
    // API Configuration
    API_BASE_URL: 'http://localhost:3000/api',
    
    // 3D Viewer Configuration
    VIEWER_CONFIG: {
        FOV: 75,
        NEAR: 0.1,
        FAR: 1000,
        CAMERA_POSITION: { x: 5, y: 5, z: 5 },
        LIGHT_POSITION: { x: 10, y: 10, z: 10 },
        BACKGROUND_COLOR: 0xf0f0f0
    },
    
    // Default Product Configuration
    DEFAULT_PRODUCT: {
        id: 'chair-001',
        name: 'Modern Chair',
        basePrice: 299,
        colors: [
            { name: 'Black', hex: '#000000', price: 0 },
            { name: 'White', hex: '#ffffff', price: 0 },
            { name: 'Brown', hex: '#8B4513', price: 25 },
            { name: 'Blue', hex: '#1e40af', price: 30 }
        ],
        materials: [
            { name: 'Fabric', price: 0 },
            { name: 'Leather', price: 50 },
            { name: 'Mesh', price: 25 }
        ]
    },
    
    // UI Configuration
    UI_CONFIG: {
        LOADING_TIMEOUT: 5000,
        ANIMATION_DURATION: 300,
        COLOR_SWATCH_SIZE: 40
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_CONFIG;
} 