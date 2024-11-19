const User = require('../models/User');
const path = require('path');
const fs = require('fs');

exports.uploadImage = async (req, res) => {
  const { userId } = req.body;
  const file = req.file; // Assuming the image is uploaded using `multer`

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const imagePath = `uploads/gallery/${file.filename}`;
    await User.findByIdAndUpdate(userId, { $push: { gallery: imagePath } });

    res.status(200).json({ message: 'Image uploaded successfully', path: imagePath });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getImages = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ gallery: user.gallery });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
