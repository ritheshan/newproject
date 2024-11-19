const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const cropRoutes = require('./routes/crops');
const diseaseRoutes = require('./routes/diseases');
const communityRoutes = require('./routes/community');
const weatherRoutes = require('./routes/weather');
const galleryRoutes = require('./routes/gallery');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/diseases', diseaseRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/gallery', galleryRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
