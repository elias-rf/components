"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpStatus_1 = require("./httpStatus");
/**
 * Return new validation error
 *
 * @param {Error} errorData
 * @returns {Error|APIError}
 */
function generateError(message, status) {
    const err = new Error(message);
    err.status = status;
    err.statusText = httpStatus_1.default[status];
    return err;
}
exports.default = generateError;
