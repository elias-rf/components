import httpStatus from "./httpStatus";

/**
 * Return new validation error
 *
 * @param {Error} errorData
 * @returns {Error|APIError}
 */
export default function generateError(
  message: string,
  status: number | string
) {
  const err: any = new Error(message);
  err.status = status;
  err.statusText = httpStatus[status];
  return err;
}
