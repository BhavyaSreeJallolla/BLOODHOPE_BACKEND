// services/bloodBankService.js
const BloodBank = require('../models/bloodBankModel');

const addBloodBank = async (bloodBankData) => {
    const newBloodBank = new BloodBank(bloodBankData);
    return await newBloodBank.save();
};

const getBloodBanks = async () => {
    return await BloodBank.find({});
};

module.exports = { addBloodBank, getBloodBanks };
