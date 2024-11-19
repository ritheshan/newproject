const express = require('express');
const { detectDisease } = require('../services/diseaseService');
const router = express.Router();

router.post('/detect', detectDisease);

module.exports = router;
