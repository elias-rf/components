import { day } from "./day";
/**
 * formata uma data para qualquer formato indicado
 *
 */
export function formatDate(date: Date, fmt: string): string {
  return day(date).format(fmt);
}
