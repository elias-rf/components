import calcDvCnpj from './calcDvCnpj';

/**
 * Valida um cnpj
 *
 * @param {string} str CNPJ com ou sem formato
 * @returns {boolean} True se for válido
 */
function isCNPJ(cnpj) {
    const dv = calcDvCnpj(cnpj);
    return dv === cnpj.substr(-2, 2);
}

export default isCNPJ;
