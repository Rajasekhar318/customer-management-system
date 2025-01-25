const express = require('express');
const { register, login } = require('../controllers/authController'); // Import correctly
const router = express.Router();

router.post('/register', register); // Route for user registration
router.post('/login', login);       // Route for user login

module.exports = router;
