"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcMultiplicatorio(array1, array2) {
    if (array1.length <= array2.length) {
        return array1.map((valor, index) => valor * array2[index]);
    }
    return array2.map((valor, index) => valor * array1[index]);
}
exports.default = calcMultiplicatorio;
//# sourceMappingURL=calcMultiplicatorio.js.map