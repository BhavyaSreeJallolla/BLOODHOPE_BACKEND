// utils/responseFormatter.js
const formatResponse = (data, message = 'Success', statusCode = 200) => {
  return {
      status: statusCode,
      message,
      data,
  };
};

module.exports = formatResponse;
