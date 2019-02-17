/**
 * Converte null ou undefined para novo valor
 *
 * @param {any} value Valor analizado
 * @param {number} [newIfZero=0] Valor default se nulo
 * @returns {any} Valor analizado ou valor default se nulo
 */
function convertNullToZero(value: any, newIfZero: any = 0): any {
  if (value === null || value === undefined) {
    return newIfZero;
  }
  return value;
}

export default convertNullToZero;
