import day from './day.mjs'
/**
 * formata uma data para qualquer formato indicado
 *
 */
export default function formatDate(date, fmt) {
  return day(date).format(fmt)
}
