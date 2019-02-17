"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatNumber(numero, decimais = 2, grupos = 3, separadorGrupo = '.', separadorDecimal = ',') {
    const numer = parseFloat(numero);
    if (Number.isNaN(numer)) {
        return '';
    }
    const regex = `\\d(?=(\\d{${grupos}})+${decimais > 0 ? '\\D' : '$'})`;
    const num = numer.toFixed(decimais);
    let rsp = num.replace('.', separadorDecimal);
    rsp = rsp.replace(new RegExp(regex, 'g'), `$&${separadorGrupo}`);
    return rsp;
}
exports.default = formatNumber;
//# sourceMappingURL=formatNumber.js.map