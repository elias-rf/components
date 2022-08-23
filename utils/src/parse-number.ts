/**
 * transforma uma string em número
 */
export function parseNumber(
  numero: any,
  separadorGrupo = ".",
  separadorDecimal = ","
) {
  if (typeof numero === "number") {
    return numero;
  }
  let num = numero.replaceAll(separadorGrupo, "");
  num = num.replaceAll(separadorDecimal, ".");
  if (num.lastIndexOf(".") >= 0) {
    return parseFloat(num);
  }
  return parseInt(num, 10);
}
