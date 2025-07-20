const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    basePrice: {
        type: Number,
        required: true,
        min: 0
    },
    modelUrl: {
        type: String,
        required: true
    },
    customizationOptions: {
        colors: [{
            name: { type: String, required: true },
            hex: { type: String, required: true },
            price: { type: Number, default: 0 }
        }],
        materials: [{
            name: { type: String, required: true },
            textureUrl: { type: String },
            price: { type: Number, default: 0 }
        }],
        components: [{
            name: { type: String, required: true },
            modelUrl: { type: String },
            price: { type: Number, default: 0 }
        }]
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema); 