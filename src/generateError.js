const httpStatus = require("./httpStatus");

interface APIError extends Error {
  status? | number;
  statusText?;
}

/**
 * Return new validation error
 *
 * @param {Error} errorData
 * @returns {Error|APIError}
 */
module.exports = function generateError(message, status) {
  const err: APIError = new Error(message);
  err.status = status;
  err.statusText = httpStatus[status];
  return err;
}
