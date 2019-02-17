"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcMultiplicatorio_1 = require("./calcMultiplicatorio");
function calcDvCnpj(cnpj) {
    const multDig1 = [6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9];
    const multDig2 = [5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9];
    let dig1;
    let dig2;
    const cnpjAux = cnpj.replace(/[^\d]+/g, '');
    if (cnpjAux.substr(0, 12) === '000000000000') {
        return null;
    }
    const numeros = cnpjAux
        .substring(0, 12)
        .split('')
        .map(i => parseInt(i, 10));
    dig1 = calcMultiplicatorio_1.default(numeros, multDig1).reduce((a, b) => a + b, 0);
    dig1 %= 11;
    dig1 = dig1 > 9 ? 0 : dig1;
    dig2 = calcMultiplicatorio_1.default(numeros.concat(dig1), multDig2).reduce((a, b) => a + b, 0);
    dig2 %= 11;
    dig2 = dig2 > 9 ? 0 : dig2;
    return `${dig1}${dig2}`;
}
exports.default = calcDvCnpj;
//# sourceMappingURL=calcDvCnpj.js.map