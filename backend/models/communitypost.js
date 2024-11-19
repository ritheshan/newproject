const mongoose = require('mongoose');

const communityPostSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  comments: [{ userId: mongoose.Schema.Types.ObjectId, comment: String }],
}, { timestamps: true });

module.exports = mongoose.model('CommunityPost', communityPostSchema);
