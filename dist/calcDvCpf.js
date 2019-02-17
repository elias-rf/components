"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calcMultiplicatorio_1 = require("./calcMultiplicatorio");
function calcDvCpf(cpf) {
    const multDig1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const multDig2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let dig1;
    let dig2;
    let str = cpf;
    str = str.replace(/[^\d]+/g, '');
    if (str.substr(0, 9) === '000000000' || str.substr(0, 9) === '111111111') {
        return null;
    }
    const numeros = str
        .substring(0, 9)
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
exports.default = calcDvCpf;
//# sourceMappingURL=calcDvCpf.js.map