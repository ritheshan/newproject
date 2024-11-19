const User = require('../models/User');
const generateOTP = require('../config/otp');

// Login user
exports.loginUser = async (req, res) => {
  const { username, phone } = req.body;

  try {
    const user = await User.findOne({ $or: [{ username }, { phone }] });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const otp = generateOTP();
    // Here you'd send the OTP via SMS or email (placeholder logic)
    console.log(`OTP for ${phone || username}: ${otp}`);
    res.status(200).json({ message: 'OTP sent', otp });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Register new user
exports.signupUser = async (req, res) => {
  const { username, phone } = req.body;

  try {
    const newUser = new User({ username, phone });
    await newUser.save();
    res.status(201).json({ message: 'User registered', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// OTP verification (placeholder logic)
exports.verifyOTP = (req, res) => {
  const { otp } = req.body;

  // Add actual OTP validation logic
  if (otp === '1234') return res.status(200).json({ message: 'OTP verified' });
  res.status(400).json({ message: 'Invalid OTP' });
};
