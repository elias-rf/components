"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNumber(item) {
    if (Object.prototype.toString.call(item) === '[object Number]') {
        if (Number.isNaN(item)) {
            return false;
        }
        return true;
    }
    return false;
}
exports.default = isNumber;
//# sourceMappingURL=isNumber.js.map