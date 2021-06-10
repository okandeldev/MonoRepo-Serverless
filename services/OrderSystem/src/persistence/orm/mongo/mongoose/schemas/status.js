const mongoose = require('mongoose')

const statusNoteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    statusDate: {
        type: Date
    }
}, {
    timestamps: true
})

const StatusNote = mongoose.model('StatusNote', statusNoteSchema)

module.exports = StatusNote