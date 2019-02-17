"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeStringAccents(texto) {
    const accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    const accentsOut = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';
    const str = texto.split('');
    const strLen = str.length;
    let i;
    let x;
    for (i = 0; i < strLen; i += 1) {
        x = accents.indexOf(str[i]);
        if (x !== -1) {
            str[i] = accentsOut[x];
        }
    }
    return str.join('');
}
exports.default = removeStringAccents;
//# sourceMappingURL=removeStringAccents.js.map