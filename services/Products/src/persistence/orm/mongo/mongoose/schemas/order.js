const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    requestId: {
        type: Number,
        required: true,
    },
    pharmacyUserId: {
        type: Number,
        required: true,
    },
    pharmacyName: {
        type: String,
        required: true
    },
    orderItems: [{
        productVariantId: {
            type: Number,
            required: true
        },
        productName: {
            type: String,
            required: true
        },
        productPictureUrl: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        discount: {
            type: Number
        },
        subTotal: {
            type: Number
        },
        pharmacyNote: {
            type: String
        },
        supplierNote: {
            type: String
        },
        boxSize: {
            type: Number
        },
        unit: {
            type: String
        }
    }],
    pharmacyNote: {
        type: String
    },
    promotionId: {
        type: Number
    },
    status: [{
        name: {
            type: String,
            required: true
        },
        statusDate: {
            type: Date
        }
    }],
    supplierId: {
        type: Number,
        required: true
    },
    supplierNote: {
        type: String
    },
    signaturePictureUrl: {
        type: String
    }
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order