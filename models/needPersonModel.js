// models/needPersonModel.js
const mongoose = require('mongoose');

const needPersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bloodType: { type: String, required: true },
    contactInfo: {
        phone: { type: String, required: true },
        email: { type: String, required: true },
    },
}, { timestamps: true });

const NeedPerson = mongoose.model('NeedPerson', needPersonSchema);

module.exports = NeedPerson;
