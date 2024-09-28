// routes/donorRoutes.js
const express = require('express');
const router = express.Router();
const donorController = require('../controllers/donorController');
const authMiddleware = require('../middlewares/authMiddleware');

// Add a new donor
router.post('/', authMiddleware, donorController.addDonor);

// Get all donors
router.get('/', donorController.getDonors);

module.exports = router;
