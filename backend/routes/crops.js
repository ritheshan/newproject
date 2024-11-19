const express = require('express');
const { addCrop, getCrops, updateCrop } = require('../services/cropService');
const router = express.Router();

router.post('/add', addCrop);         // Add a new crop
router.get('/:userId', getCrops);     // Fetch crops for a user
router.put('/:cropId', updateCrop);   // Update crop details

module.exports = router;
