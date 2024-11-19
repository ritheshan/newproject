const express = require('express');
const { uploadImage, getImages } = require('../services/galleryService');
const router = express.Router();

router.post('/upload', uploadImage);
router.get('/:userId', getImages);

module.exports = router;
const multer = require('multer');
const upload = multer({ dest: 'uploads/gallery/' });

router.post('/upload', upload.single('image'), uploadImage);
