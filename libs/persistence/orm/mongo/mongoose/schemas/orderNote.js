const mongoose = require('mongoose')

const orderNoteSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    userType: {
        type: Number,
        required: true
    },
    note: {
        type: String
    }
}, {
    timestamps: true
})

const OrderNote = mongoose.model('OrderNote', orderNoteSchema)

module.exports = OrderNote