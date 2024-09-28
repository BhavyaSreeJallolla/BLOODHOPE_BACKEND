// routes/needPersonRoutes.js
const express = require('express');
const router = express.Router();
const needPersonController = require('../controllers/needPersonController');
const authMiddleware = require('../middlewares/authMiddleware');

// Add a new needy person
router.post('/', authMiddleware, needPersonController.addNeedPerson);

// Get all needy persons
router.get('/', needPersonController.getNeedPersons);

module.exports = router;
