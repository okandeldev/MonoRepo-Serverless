const mongoose = require('mongoose')

const requestSchema = mongoose.Schema({
    pharmacyUserId: {
        type: Number,
        required: true
    },
    pharmacyNote: {
        type: String
    },
    requestItems: [{
        productVarientId: {
            type: Number,
            required: true
        },
        productName: {
            type: String,
            required: true
        },
        productPictureUrl: {
            type: String
        },
        quantity: {
            type: Number,
            required: true
        },
        pharmacyNote: {
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
}, {
    timestamps: true
})

const Request = mongoose.model('Request', requestSchema)

module.exports = Request