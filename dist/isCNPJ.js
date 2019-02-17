"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcDvCnpj_1 = require("./calcDvCnpj");
function isCNPJ(cnpj) {
    const dv = calcDvCnpj_1.default(cnpj);
    return dv === cnpj.substr(-2, 2);
}
exports.default = isCNPJ;
//# sourceMappingURL=isCNPJ.js.map