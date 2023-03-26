const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
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


// ROUTE 2: Confirm user code using: POST "/api/auth/confirmcode".
router.post('/confirmcode', [
  body('email', 'Enter a valid email').isEmail(),
  body('code', 'Enter a valid 4-digit code').isLength({ min: 4, max: 4 })
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

    // Check whether the code matches
    if (user.code !== req.body.code) {
      return res.status(400).json({ success, error: "Invalid verification code" })
    }

    // Check whether the code has expired
    const expirationTime = new Date(user.createdAt).getTime() + 30000; // 30 seconds
    if (new Date().getTime() > expirationTime) {
      return res.status(400).json({ success, error: "Verification code expired, please generate a new code" })
    }

    // Check whether the user has already confirmed the code before
    if (user.isCodeConfirmed) {
      return res.status(400).json({ success, error: "This code has already been confirmed" })
    }

    // Set the flag indicating that the user has confirmed the code and update the user type to permanent
    user.isCodeConfirmed = true;
    user.userType = 'permanent';
    user.code = null;
    user.removeAt = null;
    user.password = 'PasSWorD'
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