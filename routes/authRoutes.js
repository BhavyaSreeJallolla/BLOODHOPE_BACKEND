// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ensure this path is correct
const { validateUserRegistration, validateRequest } = require('../middlewares/validateMiddleware');

// User registration route
router.post('/register', validateUserRegistration, validateRequest, authController.register);

// User login route
router.post('/login', authController.login);

module.exports = router;
