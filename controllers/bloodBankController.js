// controllers/bloodBankController.js
const BloodBank = require('../models/bloodBankModel');

// Add a new blood bank
exports.addBloodBank = async (req, res) => {
    const { name, location, contactInfo, availableBloodTypes } = req.body;

    try {
        const newBloodBank = new BloodBank({ name, location, contactInfo, availableBloodTypes });
        await newBloodBank.save();
        res.status(201).json({ message: 'Blood bank added successfully!' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all blood banks
exports.getBloodBanks = async (req, res) => {
    try {
        const bloodBanks = await BloodBank.find();
        res.status(200).json(bloodBanks);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
