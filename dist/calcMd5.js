"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
function calcMd5(text) {
    return crypto
        .createHash('md5')
        .update(text)
        .digest('hex');
}
exports.default = calcMd5;
//# sourceMappingURL=calcMd5.js.map