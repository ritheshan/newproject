const express = require('express');
const { loginUser, signupUser, verifyOTP } = require('../services/authService');
const router = express.Router();

router.post('/login', loginUser);       // Login using phone number or username
router.post('/signup', signupUser);    // Register a new user
router.post('/verify-otp', verifyOTP); // OTP verification

module.exports = router;
