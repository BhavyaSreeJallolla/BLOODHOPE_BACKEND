const express = require('express');
const { addBloodBank, getBloodBanks } = require('../controllers/bloodBankController');

const router = express.Router();

// Remove authMiddleware to allow access without a token
router.post('/', addBloodBank); // Add a new blood bank
router.get('/', getBloodBanks); // Get all blood banks

module.exports = router;
