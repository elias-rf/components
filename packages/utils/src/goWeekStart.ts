import { addDaysDate } from "./add-days-date";
/**
 * Calcula o domingo da semana indicada pela data
 */
function goWeekStart(date: Date) {
  return addDaysDate(date, -date.getUTCDay());
}

export default goWeekStart;
