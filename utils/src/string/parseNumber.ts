import replaceStringAll from "./replaceStringAll";
/**
 * transforma uma string em número
 */
export function parseNumber(
  numero: any,
  separadorGrupo = ",",
  separadorDecimal = "."
) {
  if (typeof numero === "number") {
    return numero;
  }
  let num = replaceStringAll(numero, separadorGrupo, "");
  num = replaceStringAll(num, separadorDecimal, ".");
  if (num.lastIndexOf(".") >= 0) {
    return parseFloat(num);
  }
  return parseInt(num, 10);
}
