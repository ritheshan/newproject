const Crop = require('../models/Crop');
const User = require('../models/User');

// Add a new crop
exports.addCrop = async (req, res) => {
  const { userId, cropName, season } = req.body;

  try {
    const crop = new Crop({ cropName, season, userId });
    await crop.save();

    await User.findByIdAndUpdate(userId, { $push: { crops: crop._id } });
    res.status(201).json({ message: 'Crop added', crop });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get crops for a user
exports.getCrops = async (req, res) => {
  const { userId } = req.params;

  try {
    const crops = await Crop.find({ userId });
    res.status(200).json({ crops });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update crop details
exports.updateCrop = async (req, res) => {
  const { cropId } = req.params;
  const { cropName, season, status } = req.body;

  try {
    const updatedCrop = await Crop.findByIdAndUpdate(cropId, { cropName, season, status }, { new: true });
    res.status(200).json({ message: 'Crop updated', crop: updatedCrop });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
