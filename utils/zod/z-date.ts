import { day } from "../date/day";
export function zDate(date: string) {
  if (day(date, "YYYY-MM-DD", true).isValid()) return;
  throw new Error(`${date} não é uma data válida`);
}
