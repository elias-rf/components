import parseNumber from './parseNumber';

/**
 * transforma uma string #.##0,00 para número
 */
function parseNumberBr(numero) {
    return parseNumber(numero, '.', ',');
}

export default parseNumberBr;
