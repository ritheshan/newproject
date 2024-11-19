const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Models
const User = require('./models/User');
const Crop = require('./models/Crop');
const Disease = require('./models/Disease');

// Connect to DB
const connectDB = require('./config/db');
connectDB();

// Seed Function
const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Crop.deleteMany({});
    await Disease.deleteMany({});

    // Create a new user
    const user = await User.create({
      phoneNumber: '1234567890',
      username: 'john_doe',
    });

    // Add crops for the user
    const crop1 = await Crop.create({
      user: user._id,
      cropName: 'Wheat',
      plantingDate: new Date('2023-05-01'),
    });

    const crop2 = await Crop.create({
      user: user._id,
      cropName: 'Rice',
      plantingDate: new Date('2023-06-01'),
    });

    // Add disease data
    await Disease.create({
      crop: crop1._id,
      diseaseName: 'Leaf Rust',
      description: 'A fungal infection affecting wheat leaves.',
      treatment: 'Apply fungicide.',
      imageUrl: 'https://example.com/disease-image.jpg',
    });

    console.log('Data seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

// Run the seed function
seedData();
