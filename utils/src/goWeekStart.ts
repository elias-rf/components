import dateAddDays from "./add-days-date";
/**
 * Calcula o domingo da semana indicada pela data
 */
function goWeekStart(date: Date) {
  return dateAddDays(date, -date.getUTCDay());
}

export default goWeekStart;
