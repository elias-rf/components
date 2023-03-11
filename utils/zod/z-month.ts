import { day } from "../date/day";
export function zMonth(month: string) {
  if (day(month, "YYYY-MM", true).isValid()) return;
  throw new Error(`${month} não é um mês válido`);
}
