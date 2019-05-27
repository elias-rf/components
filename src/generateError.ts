import httpStatus from "./httpStatus";

interface APIError extends Error {
  status?: string | number;
  statusText?: string;
}

/**
 * Return new validation error
 *
 * @param {Error} errorData
 * @returns {Error|APIError}
 */
export default function generateError(message, status) {
  const err: APIError = new Error(message);
  err.status = status;
  err.statusText = httpStatus[status];
  return err;
}
