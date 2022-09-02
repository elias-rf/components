/**
 * Retorna um objeto parseado quando for recebido string
 *
 * @param {(string | Object|Object[])} obj
 * @returns {Object}
 */
function toObject(obj: any) {
  if (typeof obj === "string") {
    return JSON.parse(obj);
  }
  return obj;
}

export default toObject;
