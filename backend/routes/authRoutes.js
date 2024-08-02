const express = require('express');
const router = express.Router();
const userController = require('../controllers/authController'); 

// Register a new user
router.post('/signup', userController.signup); 

// Login an existing user
router.post('/login', userController.login);

module.exports = router;