const mongoose = require('mongoose');

const customizationSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    configuration: {
        selectedColor: {
            type: String,
            required: true
        },
        selectedMaterial: {
            type: String,
            required: true
        },
        selectedComponents: [{
            type: String
        }]
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Customization', customizationSchema); 