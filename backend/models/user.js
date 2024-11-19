const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  crops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Crop' }], // Relation to crop data
  gallery: [{ type: String }], // URLs of stored images
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
