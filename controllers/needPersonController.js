// controllers/needPersonController.js
const NeedPerson = require('../models/needPersonModel');

// Add a new needy person
exports.addNeedPerson = async (req, res) => {
    const { name, bloodType, contactInfo } = req.body;

    try {
        const newNeedPerson = new NeedPerson({ name, bloodType, contactInfo });
        await newNeedPerson.save();
        res.status(201).json({ message: 'Needy person added successfully!' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all needy persons
exports.getNeedPersons = async (req, res) => {
    try {
        const needPersons = await NeedPerson.find();
        res.status(200).json(needPersons);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
