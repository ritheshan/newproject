const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cropName: { type: String, required: true },
  season: { type: String, required: true },
  status: { type: String, default: 'ongoing' }, // e.g., ongoing, completed
}, { timestamps: true });

module.exports = mongoose.model('Crop', cropSchema);
