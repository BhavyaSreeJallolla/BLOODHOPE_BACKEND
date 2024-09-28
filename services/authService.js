// services/donorService.js
const Donor = require('../models/donorModel');

const addDonor = async (donorData) => {
    const newDonor = new Donor(donorData);
    return await newDonor.save();
};

const getDonors = async () => {
    return await Donor.find({});
};

module.exports = { addDonor, getDonors };
