/**
 * Recebe um número e retorna com decimais e separador de milhares
 * @param number  numero: numero para formatar
 * @param integer decimais: length of decimal
 * @param integer grupos: length of whole part
 * @param mixed   separadorGrupo: sections delimiter
 * @param mixed   separadorDecimal: decimal delimiter
 */
export function formatNumber(
  numero: number,
  decimais = 2,
  grupos = 3,
  separadorGrupo = ".",
  separadorDecimal = ","
) {
  const numer = parseFloat(numero.toString());

  if (Number.isNaN(numer)) {
    return "";
  }
  const regex = `\\d(?=(\\d{${grupos}})+${decimais > 0 ? "\\D" : "$"})`;
  const num = numer.toFixed(decimais);
  let rsp = num.replace(".", separadorDecimal);
  rsp = rsp.replace(new RegExp(regex, "g"), `$&${separadorGrupo}`);
  return rsp;
}
