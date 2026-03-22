const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import the modular routes
const feedbackRoutes = require('./routes/FeedbackRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection [cite: 61, 77]
const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/eventDB';
mongoose.connect(DB_URI)
  .then(() => console.log('🚀 Database Connected Successfully'))
  .catch(err => console.error('❌ Database Connection Error:', err));

// Use the Routes [cite: 60, 84]
app.get('/', (req, res) => res.send('Welcome to the Sysslan Event Feedback API!'));
app.use('/api/feedback', feedbackRoutes); // This connects your FeedbackRoutes.js

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`⭐ Server running on http://localhost:${PORT}`));