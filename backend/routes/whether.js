const express = require('express');
const { getWeather } = require('../services/weatherService');
const router = express.Router();

router.get('/:location', getWeather);

module.exports = router;
