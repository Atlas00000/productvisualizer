// Main Application Entry Point
const App = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentProduct, setCurrentProduct] = React.useState(APP_CONFIG.DEFAULT_PRODUCT);
    const [selectedColor, setSelectedColor] = React.useState(currentProduct.colors[0]);
    const [selectedMaterial, setSelectedMaterial] = React.useState(currentProduct.materials[0]);
    const [totalPrice, setTotalPrice] = React.useState(currentProduct.basePrice);

    // Initialize application when component mounts
    React.useEffect(() => {
        initializeApp();
    }, []);

    // Initialize the application
    const initializeApp = async () => {
        try {
            // Initialize 3D viewer
            await initializeViewer();
            
            // Load product data
            await loadProductData();
            
            // Set up event listeners
            setupEventListeners();
            
            setIsLoading(false);
        } catch (error) {
            console.error('Failed to initialize app:', error);
            setIsLoading(false);
        }
    };

    // Initialize 3D viewer
    const initializeViewer = async () => {
        const canvas = document.getElementById('three-canvas');
        const container = document.getElementById('viewer-container');
        
        if (!canvas || !container) {
            throw new Error('3D viewer elements not found');
        }

        // Show canvas, hide loading
        canvas.classList.remove('hidden');
        document.getElementById('loading').style.display = 'none';
        
        // Initialize Three.js scene (placeholder for now)
        console.log('3D viewer initialized');
    };

    // Load product data from API
    const loadProductData = async () => {
        try {
            // For now, use default product data
            // Later this will fetch from API
            console.log('Product data loaded:', currentProduct);
        } catch (error) {
            console.error('Failed to load product data:', error);
        }
    };

    // Set up event listeners
    const setupEventListeners = () => {
        // Color selection
        const colorSwatches = document.getElementById('color-swatches');
        if (colorSwatches) {
            colorSwatches.addEventListener('click', handleColorSelection);
        }

        // Material selection
        const materialOptions = document.getElementById('material-options');
        if (materialOptions) {
            materialOptions.addEventListener('click', handleMaterialSelection);
        }

        // Add to cart
        const addToCartBtn = document.getElementById('add-to-cart');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', handleAddToCart);
        }
    };

    // Handle color selection
    const handleColorSelection = (event) => {
        if (event.target.classList.contains('color-swatch')) {
            const colorName = event.target.dataset.color;
            const color = currentProduct.colors.find(c => c.name === colorName);
            
            if (color) {
                setSelectedColor(color);
                updatePrice();
                update3DModel();
            }
        }
    };

    // Handle material selection
    const handleMaterialSelection = (event) => {
        if (event.target.classList.contains('material-option')) {
            const materialName = event.target.dataset.material;
            const material = currentProduct.materials.find(m => m.name === materialName);
            
            if (material) {
                setSelectedMaterial(material);
                updatePrice();
                update3DModel();
            }
        }
    };

    // Handle add to cart
    const handleAddToCart = () => {
        const cartItem = {
            productId: currentProduct.id,
            productName: currentProduct.name,
            selectedColor: selectedColor.name,
            selectedMaterial: selectedMaterial.name,
            totalPrice: totalPrice
        };
        
        console.log('Added to cart:', cartItem);
        alert('Product added to cart!');
    };

    // Update total price
    const updatePrice = () => {
        const newPrice = currentProduct.basePrice + selectedColor.price + selectedMaterial.price;
        setTotalPrice(newPrice);
        
        // Update price display
        const priceElement = document.getElementById('total-price');
        if (priceElement) {
            priceElement.textContent = `$${newPrice}`;
        }
    };

    // Update 3D model (placeholder)
    const update3DModel = () => {
        console.log('Updating 3D model with:', {
            color: selectedColor.name,
            material: selectedMaterial.name
        });
        // This will be implemented in Week 2
    };

    // Render color swatches
    const renderColorSwatches = () => {
        const container = document.getElementById('color-swatches');
        if (!container) return;

        container.innerHTML = currentProduct.colors.map(color => `
            <div class="color-swatch ${color.name === selectedColor.name ? 'selected' : ''}" 
                 style="background-color: ${color.hex}"
                 data-color="${color.name}"
                 title="${color.name}">
            </div>
        `).join('');
    };

    // Render material options
    const renderMaterialOptions = () => {
        const container = document.getElementById('material-options');
        if (!container) return;

        container.innerHTML = currentProduct.materials.map(material => `
            <div class="material-option ${material.name === selectedMaterial.name ? 'selected' : ''}"
                 data-material="${material.name}">
                ${material.name} ${material.price > 0 ? `(+$${material.price})` : ''}
            </div>
        `).join('');
    };

    // Render product details
    const renderProductDetails = () => {
        const container = document.getElementById('product-details');
        if (!container) return;

        container.innerHTML = `
            <div><strong>Product:</strong> ${currentProduct.name}</div>
            <div><strong>Base Price:</strong> $${currentProduct.basePrice}</div>
            <div><strong>Selected Color:</strong> ${selectedColor.name}</div>
            <div><strong>Selected Material:</strong> ${selectedMaterial.name}</div>
        `;
    };

    // Update UI when state changes
    React.useEffect(() => {
        renderColorSwatches();
        renderMaterialOptions();
        renderProductDetails();
    }, [selectedColor, selectedMaterial]);

    // Render loading state
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="loading-spinner"></div>
                <span className="ml-3 text-gray-600">Loading...</span>
            </div>
        );
    }

    // Main app is rendered by HTML structure
    return null;
};

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Render the React app
    const appContainer = document.getElementById('app');
    if (appContainer) {
        ReactDOM.render(<App />, appContainer);
    }
}); 