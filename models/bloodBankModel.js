// models/bloodBankModel.js
const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    contactInfo: {
        phone: { type: String, required: true },
        email: { type: String, required: true },
    },
    availableBloodTypes: [{ type: String, required: true }],
}, { timestamps: true });

const BloodBank = mongoose.model('BloodBank', bloodBankSchema);

module.exports = BloodBank;
