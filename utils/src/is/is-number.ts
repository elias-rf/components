/**
 * Verifica se o item é um Number
 */

function isNumber(item: any) {
  if (Object.prototype.toString.call(item) === "[object Number]") {
    if (Number.isNaN(item)) {
      return false;
    }
    return true;
  }
  return false;
}

export default isNumber;
