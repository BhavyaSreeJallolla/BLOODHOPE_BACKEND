// services/needPersonService.js
const NeedPerson = require('../models/needPersonModel');

const addNeedPerson = async (needPersonData) => {
    const newNeedPerson = new NeedPerson(needPersonData);
    return await newNeedPerson.save();
};

const getNeedPersons = async () => {
    return await NeedPerson.find({});
};

module.exports = { addNeedPerson, getNeedPersons };
