// controllers/donorController.js
const Donor = require('../models/donorModel');

// Add a new donor
exports.addDonor = async (req, res) => {
    const { name, bloodType, contactInfo } = req.body;

    try {
        const newDonor = new Donor({ name, bloodType, contactInfo });
        await newDonor.save();
        res.status(201).json({ message: 'Donor added successfully!' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all donors
exports.getDonors = async (req, res) => {
    try {
        const donors = await Donor.find();
        res.status(200).json(donors);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
