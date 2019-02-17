"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatNumber_1 = require("./formatNumber");
function formatNumberBr(numero) {
    return formatNumber_1.default(numero, 2, 3, '.', ',');
}
exports.default = formatNumberBr;
//# sourceMappingURL=formatNumberBr.js.map