import Donor from '../models/donorModel.js';

export const addDonor = async (donorData) => {
  const donor = new Donor(donorData);
  return await donor.save();
};

export const getAllDonors = async () => {
  return await Donor.find();
};

export const getDonorById = async (id) => {
  return await Donor.findById(id);
};

export const updateDonor = async (id, donorData) => {
  return await Donor.findByIdAndUpdate(id, donorData, { new: true });
};

export const deleteDonor = async (id) => {
  return await Donor.findByIdAndDelete(id);
};
