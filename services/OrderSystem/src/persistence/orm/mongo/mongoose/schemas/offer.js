const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    requestId: {
        type: Number,
        required: true
    },
    supplierId: {
        type: Number,
        required: true
    },
    offerItems: [{
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
    status: [{
        name: {
            type: String,
            required: true
        },
        statusDate: {
            type: Date
        }
    }],
    supplierNote: {
        type: String
    }
}, {
    timestamps: true
})

const Request = mongoose.model('Offer', requestSchema)

module.exports = Request