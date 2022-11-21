import httpStatus from "./http-status";

/**
 * Return new validation error
 */
export function generateError(message: string, status: number | string) {
  const err: any = new Error(message);
  err.status = status;
  err.statusText = httpStatus[status];
  return err;
}
