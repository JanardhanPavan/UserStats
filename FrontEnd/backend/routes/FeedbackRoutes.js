const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST: Submit feedback
router.post('/', async (req, res) => {
    try {
        const newFeedback = new Feedback(req.body);
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
        res.status(400).json({ message: 'Error submitting feedback.', error: error.message });
    }
});

// GET: Retrieve all feedback
router.get('/', async (req, res) => {
    try {
        const allFeedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.status(200).json(allFeedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback.' });
    }
});

module.exports = router;