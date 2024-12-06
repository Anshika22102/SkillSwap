// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Initialize app and configure dotenv
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb://localhost:27017/SkillSwap';
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);


// Middleware
app.use(express.json());
app.use(cors());

// Database connection

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('SkillSwap Backend Running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
