import day from "./day";
/**
 * formata uma data para qualquer formato indicado
 *
 */
function formatDate(date: Date, fmt: string): string {
  return day(date).format(fmt);
}

module.exports = formatDate;
