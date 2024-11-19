const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // MongoDB URI from environment variables
    const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/agrimaster';

    // Connecting to MongoDB
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process if unable to connect
  }
};

module.exports = connectDB;
