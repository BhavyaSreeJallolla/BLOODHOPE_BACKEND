// models/donorModel.js
const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bloodType: { type: String, required: true },
    contactInfo: {
        phone: { type: String, required: true },
        email: { type: String, required: true },
    },
}, { timestamps: true });

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
