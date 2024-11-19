const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  cropId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crop',  // Reference to the Crop model
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  diseaseInfo: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
  detectedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Disease', diseaseSchema);
