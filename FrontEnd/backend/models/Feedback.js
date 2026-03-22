const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    event: { type: String, required: true },
    rating: { type: Number, required: true },
    comments: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);