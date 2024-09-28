// utils/validator.js
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
  return password.length >= 6; // Minimum password length
};

module.exports = {
  validateEmail,
  validatePassword,
};
