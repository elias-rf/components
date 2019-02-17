import numeralToBr from './formatNumberBr';

/**
 * Recebe um número e retorna com 2 casa decimais e separador de milhares
 * @param {number} numero - Número para ser transformado
 * @return {string} - Texto formatado #.##0.00
 */
function formatCurrencyBr(numero) {
    return numeralToBr(numero);
}

export default formatCurrencyBr;
