const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const crypto = require('crypto');

require('dotenv').config()

const JWT_SECRET = process.env.REACT_APP_JWT_SECRET;


// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  body('fname', 'Enter a valid name').isLength({ min: 3 }),
  body('lname', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('vaccinated', 'Enter a valid option')
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  try {
    // Check whether the user with this email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
    }

    // Generate a random 4-digit code
    const code = Math.floor(1000 + Math.random() * 9000);

    // Create a new user
    user = await User.create({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      vaccinated: req.body.vaccinated,
      code: code,  
      password: req.body.password, // Add this line to save the password to the user's document

    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.REACT_APP_EMAIL_ADDRESS,
          pass: process.env.REACT_APP_EMAIL_PASSWORD
      }
  });

    // ... Your code to generate the verification code and save it in the user document

    let info = await transporter.sendMail({
      from: process.env.REACT_APP_EMAIL_ADDRESS, // sender address
      to: user.email, // list of receivers
      subject: 'Verification code', // Subject line
      text: `Your verification code is ${code}`, // plain text body
      html: `<p>Your verification code is ${code}</p>` // html body
    });

    console.log('Verification code sent. Message ID: ' + info.messageId);

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);

    success = true;
    res.json({ success, authtoken });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


// ROUTE 2: Verify user using: POST "/api/auth/confirmcode". No login required
router.post('/confirmcode', [
  body('email', 'Enter a valid email').isEmail(),
  body('code', 'Enter a valid code').isNumeric().isLength({ min: 4, max: 4 })
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  try {
    // Check whether the user with this email exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ success, error: "Sorry, no user found with this email" })
    }

    // Check whether the code matches the one in the user's document
    if (user.code !== parseInt(req.body.code)) {
      return res.status(400).json({ success, error: "Sorry, the verification code is incorrect" })
    }

    // Update the user's document to set the code to null
    user.code = null;
    user.isCodeConfirmed = true;
    user.userType = 'permanent';
    user.removeAt = null;
    await user.save();

    success = true;
    res.json({ success });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


// ROUTE 3: Add password in users data using: POST "/api/auth/setpassword".
router.post('/setpassword', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Enter a password between 8 and 20 characters').isLength({ min: 8, max: 20 })
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    // Check whether the user with this email exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ success, error: "User not found with this email" })
    }

    // Update the user's password
    user.password = req.body.password;
    await user.save();

    success = true;
    res.json({ success });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: Login User using: POST "/api/auth/login"
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password is required').exists()
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    // Check whether the user with this email exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ success, error: "Invalid credentials" });
    }

    // Check whether the password matches
    if (user.password !== req.body.password) {
      return res.status(400).json({ success, error: "Invalid credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }

    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: Forgot password by email: POST "/api/auth/forgotpassword" no login required
router.post('/forgotpassword', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString('hex');

    // Set reset token and expiration in user document
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 3600000; // Expires in 1 hour
    await user.save();

    // Send email to user with password reset link
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.REACT_APP_EMAIL_ADDRESS,
        pass: process.env.REACT_APP_EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.REACT_APP_EMAIL_ADDRESS,
      to: email,
      subject: 'Password reset',
      text: `Please click on the following link to reset your password: ${process.env.CLIENT_RESET}/resetpassword/${resetToken}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ message: `Password reset link has been sent to ${email}` });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// ROUTE 5: Confirm password reset URL and set new password
router.put('/resetpassword/:resetToken', async (req, res) => {
  try {
    const resetToken = req.params.resetToken;
    const user = await User.findOne({ resetToken: resetToken });

    if (!user) {
      return res.status(404).json({ error: 'Invalid or expired reset password link' });
    }

    const resetTokenExpiration = user.resetTokenExpiration;
    const now = Date.now();

    if (now > resetTokenExpiration) {
      return res.status(404).json({ error: 'Reset password link has expired' });
    }

    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ error: 'Please provide a new password' });
    }

    user.password = password;
    user.resetToken = null;
    user.resetTokenExpiration = null;
    await user.save();

    res.json({ message: 'Password has been reset successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// ROUTE 5: Get user details using authtoken in header: GET "/api/auth/getuserdetails"
// router.get('/getuserdetails', async (req, res) => {
//   let success = false;

//   try {
//     // Get the user ID from the authtoken in the header
//     const authtoken = req.header('Authorization');
//     if (!authtoken) {
//       return res.status(401).json({ success, error: "Authorization denied. No token provided" });
//     }
//     const decoded = jwt.verify(authtoken, JWT_SECRET);
//     const userId = decoded.user.id;

//     // Find the user in the database and return their details
//     const user = await User.findById(userId).select('-password');
//     if (!user) {
//       return res.status(404).json({ success, error: "User not found" });
//     }

//     success = true;
//     res.json({ success, user });

//   } catch (error) {
//     console.error(error.message);
//     if (error.name === 'JsonWebTokenError') {
//       return res.status(401).json({ success, error: "Authorization denied. Invalid token" });
//     }
//     res.status(500).send("Internal Server Error");
//   }
// });




module.exports = router






//iwwdjommyxmzkwgo