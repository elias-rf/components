"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertNullToZero(value, newIfZero = 0) {
    if (value === null || value === undefined) {
        return newIfZero;
    }
    return value;
}
exports.default = convertNullToZero;
//# sourceMappingURL=convertNullToZero.js.map